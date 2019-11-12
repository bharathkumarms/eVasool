import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { environment } from "src/app/Shared/environment";

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {
    fileToUpload: File = null;
    private _attachmentService;
    output: any;
    public progress: number;
    public message: string;

    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/Attachment/";
    token: any;
    username: any;

    constructor(private location: Location, private _Route: Router, private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username
    }

    ngOnInit() {
    }

    public uploadFile = (files) => {
        if (files.length === 0) {
            return;
        }

        let fileToUpload = <File>files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);

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
