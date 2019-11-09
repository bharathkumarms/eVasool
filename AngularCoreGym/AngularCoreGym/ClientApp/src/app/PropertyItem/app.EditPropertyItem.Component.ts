import { Component, OnInit } from '@angular/core';
import { PropertyItemService } from './Services/app.PropertyItem.Service';
import { PropertyItemMasterModel } from './app.PropertyItemModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './app.EditPropertyItemComponent.html',
    styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css']
})

export class EditPropertyItemComponent implements OnInit {
    title = "Edit PropertyItem Master";
    PropertyItemForms: PropertyItemMasterModel = new PropertyItemMasterModel();
    private _PropertyItemService;
    private responsedata: any;
    private PropertyItemID: string;
    errorMessage: any;

    constructor(private _Route: Router,private _routeParams: ActivatedRoute, private PropertyItemService: PropertyItemService) {
        //this._PropertyItemService = PropertyItemService;
    }

    ngOnInit() 
    {
        /*this.PropertyItemID = this._routeParams.snapshot.params['PropertyItemId'];
        if (this.PropertyItemID != null) 
        {
            var data = this._PropertyItemService.GetPropertyItemById(this.PropertyItemID).subscribe(
                PropertyItem => {
                    this.PropertyItemForms.PropertyItemID = PropertyItem.ID;
                    this.PropertyItemForms.Name = PropertyItem.Name;
                    this.PropertyItemForms.IsActive = PropertyItem.IsActive;
                },
                error => this.errorMessage = <any>error
            );
        }*/
    }


    onSubmit() 
    {
   

        this._PropertyItemService.UpdatePropertyItem(this.PropertyItemForms)
        .subscribe(response => 
        {
            if(response.StatusCode == "200")
            {
                alert('Updated PropertyItem Successfully');
                this._Route.navigate(['/PropertyItem/All']);
            }
        })
    }

}
