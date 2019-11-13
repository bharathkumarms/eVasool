import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { environment } from "src/app/Shared/environment";
import { PropertyItemService } from 'src/app/PropertyItem/Services/app.PropertyItem.Service';

import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';

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
    files: any;

    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/Attachment";
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


        let params = new URLSearchParams();
        params.append("filterVal", this.filterVal);
        this.getFileList();

    }

    getFileList() {
        this.http.get(this.apiUrl + "?folder3Name=" + this.filterVal)
            .subscribe(
                data => {
                    this.files = data;
                }
            );
    }

    public uploadFile = (files) => {
        if (files.length === 0) {
            return;
        }

        let fileToUpload = <File>files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        formData.append(this.filterVal, this.filterVal);

        this.http.post(this.apiUrl, formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress)
                    this.progress = Math.round(100 * event.loaded / event.total);
                else if (event.type === HttpEventType.Response) {
                    alert('Upload success.');
                    this.getFileList();
                    //this.onUploadFinished.emit(event.body);
                }
            });
    }

    delete(file) {
        this.http.delete(this.apiUrl + "/delete?fileName=" + file)
            .subscribe(
                data => {
                    alert('Delete success.');
                    this.getFileList();
                }
            );
    }
    
    download(file) {
        let fileName = file;
        let checkFileType = fileName.split('.').pop();
        var fileType;
        if (checkFileType == ".txt") {
            fileType = "text/plain";
        }
        if (checkFileType == ".pdf") {
            fileType = "application/pdf";
        }
        if (checkFileType == ".doc") {
            fileType = "application/vnd.ms-word";
        }
        if (checkFileType == ".docx") {
            fileType = "application/vnd.ms-word";
        }
        if (checkFileType == ".xls") {
            fileType = "application/vnd.ms-excel";
        }
        if (checkFileType == ".png") {
            fileType = "image/png";
        }
        if (checkFileType == ".jpg") {
            fileType = "image/jpeg";
        }
        if (checkFileType == ".jpeg") {
            fileType = "image/jpeg";
        }
        if (checkFileType == ".gif") {
            fileType = "image/gif";
        }
        if (checkFileType == ".csv") {
            fileType = "text/csv";
        }
        this.DownloadFile(fileName, fileType)
            .subscribe(
                success => {
                    saveAs(success, fileName);
                },
                err => {
                    alert("Server error while downloading file.");
                }
            );
    }

    DownloadFile(filePath: string, fileType: string): Observable<any> {

        let fileExtension = fileType;
        let input = filePath;

        return this.http.get(this.apiUrl + "/download?fileName=" + input, {
            responseType: 'blob',
            observe: 'response'
        })
            .pipe(
                map((res: any) => {
                    return new Blob([res.body], { type: fileExtension });
                })
            );
    }
    
}
