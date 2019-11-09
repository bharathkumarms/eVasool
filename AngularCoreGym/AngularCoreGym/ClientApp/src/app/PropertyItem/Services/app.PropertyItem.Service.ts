import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { PropertyItemMasterModel } from "../app.PropertyItemModel";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { PropertyItemMasterViewModel } from "../Models/app.PropertyItemViewModel";
import { PropertyItemDropdownModel } from "../Models/app.PropertyItemDropdownModel";
import { environment } from "src/app/Shared/environment";

@Injectable({
    providedIn: 'root'
})

export class PropertyItemService {
    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/PropertyItem/";
    token: any;
    username: any;

    constructor(private http: HttpClient) {
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
        this.username = this.data.username
    }

    // Save PropertyItem
    public SavePropertyItem(PropertyItemMasterModel: PropertyItemMasterModel) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.post<any>(this.apiUrl, PropertyItemMasterModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );

    }

    // Get All PropertyItem
    public GetAllPropertyItem() {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<PropertyItemMasterViewModel[]>(this.apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Get All PropertyItem List
    public GetAllActivePropertyItemList() {
        var apiUrl = "	http://localhost:49505/api/PropertyItemDropdown/";
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<PropertyItemDropdownModel[]>(apiUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Get All PropertyItem By ID
    public GetPropertyItemById(PropertyItemId) {
        var editUrl = this.apiUrl + '/' + PropertyItemId;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.get<PropertyItemMasterViewModel>(editUrl, { headers: headers }).pipe(tap(data => data),
            catchError(this.handleError)
        );
    }

    // Update PropertyItem
    public UpdatePropertyItem(PropertyItemMasterModel: PropertyItemMasterModel) {
        var putUrl = this.apiUrl + '/' + PropertyItemMasterModel.PropertyItemID;
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + `${this.token}`);
        return this.http.put<any>(putUrl, PropertyItemMasterModel, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public DeletePropertyItem(PropertyItemId) {
        var deleteUrl = this.apiUrl + '/' + PropertyItemId;
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
