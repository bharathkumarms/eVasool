import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { environment } from "src/app/Shared/environment";
import { PropertyItemService } from 'src/app/PropertyItem/Services/app.PropertyItem.Service';

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {
    private _PropertyItemService;
    fileToUpload: File = null;
    AllPropertyItemList: any[];
    errorMessage: any;
    propertyDropdownValue: Array<any>;
    private _attachmentService;
    output: any;
    public progress: number;
    public message: string;
    filterVal: any;

    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/Attachment/";
    token: any;
    username: any;

    constructor(private location: Location, private _Route: Router, private http: HttpClient, private PropertyItemService: PropertyItemService) {
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username
        this._PropertyItemService = PropertyItemService;
    }

    ngOnInit() {
        this.propertyDropdownValue = new Array<any>();
        this._PropertyItemService.GetAllPropertyItem().subscribe(
            AllPropertyItem => {
                this.AllPropertyItemList = AllPropertyItem;

                for (var i = 0; i < this.AllPropertyItemList.length; i++) {
                    this.propertyDropdownValue.push(this.AllPropertyItemList[i].PropertyItemId + " - " + this.AllPropertyItemList[i].Name);
                }
            },
            error => this.errorMessage = <any>error
        );
    }

    filterForeCasts(filterVal: any) {
        this.filterVal = filterVal;
    }

    public uploadFile = (files) => {
        if (files.length === 0) {
            return;
        }

        let fileToUpload = <File>files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append(this.filterVal, this.filterVal);

        this.http.post(this.apiUrl, formData, { reportProgress: true, observe: 'events'})
            .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress)
                    this.progress = Math.round(100 * event.loaded / event.total);
                else if (event.type === HttpEventType.Response) {
                    this.message = 'Upload success.';
                    //this.onUploadFinished.emit(event.body);
                }
            });
    }

    /*
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    uploadFile() {
        this._attachmentService.SaveAttachment(this.fileToUpload).subscribe(
            response => {
                this.output = response
                if (this.output.StatusCode == "409") {
                    alert('Attachment Already Exists');
                }
                else if (this.output.StatusCode == "200") {
                    alert('Attachment Created Successfully');
                    //this._Route.navigate(['/User/All']);
                }
                else {
                    alert('Something Went Wrong');
                }
            });
    }*/

}
