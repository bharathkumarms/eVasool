import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { environment } from "src/app/Shared/environment";
import { PropertyItemService } from 'src/app/PropertyItem/Services/app.PropertyItem.Service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
    templateUrl: './app.UserDashboardComponent.html',
    styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css']
})

export class UserDashboardComponent
{
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
    audit: any;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['PropertyItemId', 'Name', 'MemberId', 'LeaseDueDate', 'NextDueDate', 'TotalLeaseAmount', 'InstallmentAmount','InstallementPaid', 'Action'];
    dataSource: any;

    private data: any;
    private apiUrl = environment.apiEndpoint + "/api/PropertyItem/audit";
    token: any;
    username: any;
    assertCount: any;
    activeMember: any;
    activeAssets: number = 0;
    totalDues: number = 0;

    constructor(private location: Location, private _Route: Router, private http: HttpClient, private PropertyItemService: PropertyItemService) {
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username
        this._PropertyItemService = PropertyItemService;
    }

    ngOnInit() {
        this.http.get(this.apiUrl)
            .subscribe(
                data => {
                    this.audit = data;
                    this.dataSource = new MatTableDataSource(this.audit);
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                }
        );

        this._PropertyItemService.GetAllPropertyItem().subscribe(
            AllPropertyItem => {
                this.AllPropertyItemList = AllPropertyItem;
                this.assertCount = this.AllPropertyItemList.length;

                var count = this.AllPropertyItemList.reduce((acc, o) => (acc[o.MemberId] = (acc[o.MemberId] || 0) + 1, acc), {});
                count = Object.values(count);
                this.activeMember = count.length - 1;

                var todayDate = new Date()

                for (var i = 0; i < this.AllPropertyItemList.length; i++){
                    if (this.AllPropertyItemList[i].IsActive) {
                        this.activeAssets = this.activeAssets + 1;
                    }

                    if (new Date(this.AllPropertyItemList[i].NextDueDate) < new Date()) {
                        this.totalDues = this.totalDues + 1;
                        
                    }
                }

            },
            error => this.errorMessage = <any>error
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
