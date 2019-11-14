import { Component, OnInit } from '@angular/core';
import { PropertyItemService } from './Services/app.PropertyItem.Service';
import { PropertyItemMasterModel } from './app.PropertyItemModel';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberRegistrationService } from 'src/app/MemberRegistration/Services/app.MemberRegistration.service';

@Component({
    templateUrl: './app.EditPropertyItemComponent.html',
    styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css']
})

export class EditPropertyItemComponent implements OnInit {
    private _memberService;
    title = "Edit PropertyItem Master";
    PropertyItemForms: PropertyItemMasterModel = new PropertyItemMasterModel();
    private _PropertyItemService;
    private responsedata: any;
    private PropertyItemID: string;
    errorMessage: any;
    userDropdownValue: Array<any>;
    AllUserList: any[];
    selectedItem: any;

    constructor(private _Route: Router, private _routeParams: ActivatedRoute, private PropertyItemService: PropertyItemService, private memberService: MemberRegistrationService) {
        this._PropertyItemService = PropertyItemService;
        this._memberService = memberService;
    }

    ngOnInit() 
    {
        this.PropertyItemID = this._routeParams.snapshot.params['propertyItemId'];
        if (this.PropertyItemID != null) 
        {
            var data = this._PropertyItemService.GetPropertyItemById(this.PropertyItemID).subscribe(
                PropertyItem => {
                    this.PropertyItemForms = PropertyItem;
                    //this.PropertyItemForms.Name = PropertyItem.Name;
                    //this.PropertyItemForms.IsActive = PropertyItem.IsActive;
                },
                error => this.errorMessage = <any>error
            );
        }

        this.userDropdownValue = new Array<any>();
        this._memberService.GetAllMember().subscribe(
            AllUser => {
                this.AllUserList = AllUser.value;
                for (var i = 0; i < this.AllUserList.length; i++) {
                    this.userDropdownValue.push(this.AllUserList[i]);
                    //This is a trick, member id is int as well as object
                    if (this.AllUserList[i].MemberId == this.PropertyItemForms.MemberId) {
                        this.PropertyItemForms.MemberId = this.AllUserList[i].MemberId;
                    }
                }
            },
            error => this.errorMessage = <any>error
        );
    }


    onSubmit() 
    {
        //This is a trick, member id is int as well as object
        //let tempId = this.PropertyItemForms.MemberId.MemberId;
        //this.PropertyItemForms.MemberId = tempId.MemberId;

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
