import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { SchemeMasterModel } from "../app.SchemeModel";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { SchemeMasterViewModel } from "../Models/app.SchemeViewModel";
import { SchemeDropdownModel } from "../Models/app.SchemeDropdownModel";
import { environment } from "src/app/Shared/environment";

@Injectable({
    providedIn: 'root'
})

export class SchemeService {
    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/Scheme/";
    token: any;
    username: any;

    constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
        this.username = this.data.username
    }

    // Save Scheme
    public SaveScheme(SchemeMasterModel: SchemeMasterModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, SchemeMasterModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );

    }

    // Get All Scheme
    public GetAllScheme() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<SchemeMasterViewModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Get All Scheme List
    public GetAllActiveSchemeList() {
        var apiUrl = "	http://localhost:49505/api/SchemeDropdown/";
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<SchemeDropdownModel[]>(apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Get All Scheme By ID
    public GetSchemeById(SchemeId) {
        var editUrl = this.apiUrl + '/' + SchemeId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<SchemeMasterViewModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update Scheme
    public UpdateScheme(SchemeMasterModel: SchemeMasterModel) {
        var putUrl = this.apiUrl + '/' + SchemeMasterModel.SchemeID;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, SchemeMasterModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public DeleteScheme(SchemeId) {
        var deleteUrl = this.apiUrl + '/' + SchemeId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.delete<any>(deleteUrl, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    };



}
