import { Component, OnInit, ViewChild } from '@angular/core';
import { PropertyItemService } from './Services/app.PropertyItem.Service';
import { PropertyItemMasterViewModel } from './Models/app.PropertyItemViewModel';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  templateUrl: './app.AllPropertyItemComponent.html',
  styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css', '../Content/vendor/font-awesome/css/font-awesome.min.css']

})

export class AllPropertyItemComponent implements OnInit {
  private _PropertyItemService;
  AllPropertyItemList: PropertyItemMasterViewModel[];
  errorMessage: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['PropertyItemId', 'Name', 'MemberId', 'LeaseDueDate', 'NextDueDate', 'EditAction', 'DeleteAction'];
  dataSource: any;
  
  


  constructor(private location: Location, private _Route: Router, private PropertyItemService: PropertyItemService) {
    this._PropertyItemService = PropertyItemService;

  
  }

  ngOnInit() {


    this._PropertyItemService.GetAllPropertyItem().subscribe(
        AllPropertyItem => {
        this.AllPropertyItemList = AllPropertyItem
        this.dataSource = new MatTableDataSource(this.AllPropertyItemList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
       
      },
      error => this.errorMessage = <any>error
    );

  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  Delete(PropertyItemId): void {
    if (confirm("Are you sure to delete PropertyItem ?")) {
      this._PropertyItemService.DeletePropertyItem(PropertyItemId).subscribe
        (
        response => {
          if (response.StatusCode == "200") {
            alert('Deleted PropertyItem Successfully');
            location.reload();
          }
          else {
            alert('Something Went Wrong');
            this._Route.navigate(['/PropertyItem/All']);
          }
        }
        )
    }
  }

}
