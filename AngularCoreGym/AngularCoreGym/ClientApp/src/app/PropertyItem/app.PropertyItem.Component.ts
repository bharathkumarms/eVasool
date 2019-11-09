import { Component } from '@angular/core';
import { PropertyItemMasterModel } from './app.PropertyItemModel';
import { PropertyItemService } from './Services/app.PropertyItem.Service';
import { Router } from '@angular/router';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
    templateUrl: './app.PropertyItemMaster.html',
    styleUrls: ['../Content/vendor/bootstrap/css/bootstrap.min.css']
})

export class PropertyItemComponent {
    title = "PropertyItem Master";
    PropertyItemForms: PropertyItemMasterModel = new PropertyItemMasterModel();
    private _PropertyItemService;
    private responsedata: any;
    
    actionButtonLabel: string = 'Retry';
    action: boolean = false;
    setAutoHide: boolean = true;
    autoHide: number = 2000;
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';



    constructor(private _Route: Router,public snackBar: MatSnackBar,  private PropertyItemService: PropertyItemService) {
        //this._PropertyItemService = PropertyItemService;
    }
    output: any;
    onSubmit() {
      

        /*this._PropertyItemService.SavePropertyItem(this.PropertyItemForms).subscribe(
            response => 
            {
               
                this.output = response;
                if (this.output.StatusCode == "409") 
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;
                    this.snackBar.open("PropertyItem Name Already Exists", this.action ? this.actionButtonLabel : undefined, config);
                   
                }
                else if (this.output.StatusCode == "200") 
                { 
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;
                    this.snackBar.open("Saved PropertyItem Successfully", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/PropertyItem/All']);
                }
                else {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;
                    this.snackBar.open("Something Went Wrong", this.action ? this.actionButtonLabel : undefined, config);
                   
                }
            }
        );*/



    }

    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }

}
