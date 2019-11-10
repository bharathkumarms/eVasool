(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AdminDashboard/app.AdminDashboardComponent.html":
/*!*****************************************************************!*\
  !*** ./src/app/AdminDashboard/app.AdminDashboardComponent.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/AdminDashboard/app.AdminDashboardComponent.ts":
/*!***************************************************************!*\
  !*** ./src/app/AdminDashboard/app.AdminDashboardComponent.ts ***!
  \***************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.AdminDashboardComponent.html */ "./src/app/AdminDashboard/app.AdminDashboardComponent.html")
        })
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/AssignRole/Models/AssignRemoveModel.ts":
/*!********************************************************!*\
  !*** ./src/app/AssignRole/Models/AssignRemoveModel.ts ***!
  \********************************************************/
/*! exports provided: AssignRemoveModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRemoveModel", function() { return AssignRemoveModel; });
var AssignRemoveModel = /** @class */ (function () {
    function AssignRemoveModel() {
    }
    return AssignRemoveModel;
}());



/***/ }),

/***/ "./src/app/AssignRole/Services/app.AssignandRemoveRole.Service.ts":
/*!************************************************************************!*\
  !*** ./src/app/AssignRole/Services/app.AssignandRemoveRole.Service.ts ***!
  \************************************************************************/
/*! exports provided: AssignandRemoveRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignandRemoveRoleService", function() { return AssignandRemoveRoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignandRemoveRoleService = /** @class */ (function () {
    function AssignandRemoveRoleService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/CreateRole/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Get All Users
    AssignandRemoveRoleService.prototype.GetAllAssignedRoles = function () {
        var apiUrl = "	http://localhost:49505/api/AssignRoles/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // AssignRole
    AssignandRemoveRoleService.prototype.AssignRole = function (assignmodel) {
        var apiUrl = "	http://localhost:49505/api/AssignRoles/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, assignmodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // RemoveRole
    AssignandRemoveRoleService.prototype.RemoveRole = function (assignmodel) {
        var apiUrl = "	http://localhost:49505/api/RemoveRole/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, assignmodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AssignandRemoveRoleService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    AssignandRemoveRoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AssignandRemoveRoleService);
    return AssignandRemoveRoleService;
}());



/***/ }),

/***/ "./src/app/AssignRole/app.AllAssignRole.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/AssignRole/app.AllAssignRole.component.ts ***!
  \***********************************************************/
/*! exports provided: AllAssignRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAssignRoleComponent", function() { return AllAssignRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Services_app_AssignandRemoveRole_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.AssignandRemoveRole.Service */ "./src/app/AssignRole/Services/app.AssignandRemoveRole.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllAssignRoleComponent = /** @class */ (function () {
    function AllAssignRoleComponent(_Route, assignservice) {
        this._Route = _Route;
        this.displayedColumns = ['RoleName', 'UserName'];
        this._assignservice = assignservice;
    }
    AllAssignRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._assignservice.GetAllAssignedRoles().subscribe(function (assignModel) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](assignModel);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllAssignRoleComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllAssignRoleComponent.prototype.getNext = function (event) {
        this.offset = event.pageSize * event.pageIndex;
        // call your api function here with the offset
        console.log(event.pageSize);
        console.log(event.pageIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AllAssignRoleComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AllAssignRoleComponent.prototype, "paginator", void 0);
    AllAssignRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.AllAssignedRoles.html */ "./src/app/AssignRole/app.AllAssignedRoles.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_app_AssignandRemoveRole_Service__WEBPACK_IMPORTED_MODULE_3__["AssignandRemoveRoleService"]])
    ], AllAssignRoleComponent);
    return AllAssignRoleComponent;
}());



/***/ }),

/***/ "./src/app/AssignRole/app.AllAssignedRoles.html":
/*!******************************************************!*\
  !*** ./src/app/AssignRole/app.AllAssignedRoles.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All AssignRoles</h4>\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"example-header\">\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n        </div>\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\"  matSort class=\"mat-elevation-z8\">\n                <ng-container matColumnDef=\"UserName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> UserName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.UserName}} </td>\n                </ng-container>\n                <!-- SchemeID Column -->\n                <ng-container matColumnDef=\"RoleName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> RoleName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.RoleName}} </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <mat-paginator [pageIndex]=0\n            [pageSize]=5\n            (page)=\"getNext($event)\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/AssignRole/app.AssignRole.component.ts":
/*!********************************************************!*\
  !*** ./src/app/AssignRole/app.AssignRole.component.ts ***!
  \********************************************************/
/*! exports provided: AssignRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRoleComponent", function() { return AssignRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_AssignRemoveModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/AssignRemoveModel */ "./src/app/AssignRole/Models/AssignRemoveModel.ts");
/* harmony import */ var _CreateUsers_Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreateUsers/Services/app.UserRegistration.Service */ "./src/app/CreateUsers/Services/app.UserRegistration.Service.ts");
/* harmony import */ var _RoleMaster_Services_app_role_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RoleMaster/Services/app.role.Service */ "./src/app/RoleMaster/Services/app.role.Service.ts");
/* harmony import */ var _Services_app_AssignandRemoveRole_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/app.AssignandRemoveRole.Service */ "./src/app/AssignRole/Services/app.AssignandRemoveRole.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssignRoleComponent = /** @class */ (function () {
    function AssignRoleComponent(userservice, roleservice, assignandremoverolerervice, _Route) {
        this.userservice = userservice;
        this.roleservice = roleservice;
        this.assignandremoverolerervice = assignandremoverolerervice;
        this._Route = _Route;
        this.AssignRemoveModel = new _Models_AssignRemoveModel__WEBPACK_IMPORTED_MODULE_1__["AssignRemoveModel"]();
        this._userservice = userservice;
        this._roleservice = roleservice;
        this._assignandremoveservice = assignandremoverolerervice;
    }
    AssignRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userservice.GetAllUsersDropdown().subscribe(function (allUsers) {
            _this.UserList = allUsers;
        }, function (error) { return _this.errorMessage = error; });
        this._roleservice.GetAllRole().subscribe(function (allroles) {
            _this.RoleList = allroles;
        }, function (error) { return _this.errorMessage = error; });
    };
    AssignRoleComponent.prototype.onSubmit = function (buttonType) {
        var _this = this;
        if (buttonType === "onAssign") {
            console.log(this.AssignRemoveModel);
            this._assignandremoveservice.AssignRole(this.AssignRemoveModel).subscribe(function (response) {
                _this.output = response;
                if (_this.output.StatusCode == "409") {
                    alert('Role Already Exists');
                }
                else if (_this.output.StatusCode == "200") {
                    alert('Role Assigned Successfully');
                    _this._Route.navigate(['/Assign/AllRole']);
                }
                else {
                    alert('Something Went Wrong');
                }
            });
        }
        if (buttonType === "onRemove") {
            this._assignandremoveservice.RemoveRole(this.AssignRemoveModel).subscribe(function (response) {
                _this.output = response;
                if (_this.output.StatusCode == "409") {
                    alert('Role does not Exists');
                }
                else if (_this.output.StatusCode == "200") {
                    alert('Role Removed Successfully');
                    _this._Route.navigate(['/Assign/AllRole']);
                }
                else {
                    alert('Something Went Wrong');
                }
            });
        }
    };
    AssignRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.AssignandRemoveRole.html */ "./src/app/AssignRole/app.AssignandRemoveRole.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_CreateUsers_Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _RoleMaster_Services_app_role_Service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _Services_app_AssignandRemoveRole_Service__WEBPACK_IMPORTED_MODULE_4__["AssignandRemoveRoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AssignRoleComponent);
    return AssignRoleComponent;
}());



/***/ }),

/***/ "./src/app/AssignRole/app.AssignandRemoveRole.html":
/*!*********************************************************!*\
  !*** ./src/app/AssignRole/app.AssignandRemoveRole.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Assign / Remove Role</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Assign / Remove Role</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(buttonType)\" novalidate>\n            <div class=\"col-md-6\">\n                <label>User</label>\n                <select required name=\"UserId\" #refUserId=\"ngModel\"  class=\"form-control\"\n                    [(ngModel)]=\"AssignRemoveModel.UserId\">\n                    <option value=''>Please select User</option>\n                    <option *ngFor=\"let user of UserList\" [ngValue]=\"user.UserId\">\n                        {{user.UserName}}\n                    </option>\n                </select>\n                <div *ngIf=\"!refUserId.valid  && (refUserId.dirty || refUserId.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refUserId.errors.required\">\n                        Users is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <label>Role</label>\n                <select required name=\"RoleId\" #refRoleId=\"ngModel\" class=\"form-control\" \n                    [(ngModel)]=\"AssignRemoveModel.RoleId\">\n                    <option value=''>Please select Role</option>\n                    <option *ngFor=\"let role of RoleList\" [ngValue]=\"role.RoleId\">\n                        {{role.RoleName}}\n                    </option>\n                </select>\n                <div *ngIf=\"!refRoleId.valid  && (refRoleId.dirty || refRoleId.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refRoleId.errors.required\">\n                        Role is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <button type=\"submit\" (click)=\"onSubmit('onAssign')\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Assign Role</button>\n                <button type=\"submit\" (click)=\"onSubmit('onRemove')\"  style=\"margin-left: 10px; margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Remove Role</button>\n                <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Assign/AllRole']\">\n                    All Assign Role </a>\n            </div>\n            \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/AuthGuard/AdminAuthGuardService.ts":
/*!****************************************************!*\
  !*** ./src/app/AuthGuard/AdminAuthGuardService.ts ***!
  \****************************************************/
/*! exports provided: AdminAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function() { return AdminAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(router) {
        this.router = router;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('AdminUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/Login']);
        return false;
    };
    AdminAuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "./src/app/AuthGuard/UserAuthGuardService.ts":
/*!***************************************************!*\
  !*** ./src/app/AuthGuard/UserAuthGuardService.ts ***!
  \***************************************************/
/*! exports provided: UserAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthGuardService", function() { return UserAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAuthGuardService = /** @class */ (function () {
    function UserAuthGuardService(router) {
        this.router = router;
    }
    UserAuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/Login']);
        return false;
    };
    UserAuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserAuthGuardService);
    return UserAuthGuardService;
}());



/***/ }),

/***/ "./src/app/Content/dist/css/sb-admin-2.css":
/*!*************************************************!*\
  !*** ./src/app/Content/dist/css/sb-admin-2.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\nbody {\n  background-color: #f8f8f8;\n}\n#wrapper {\n  width: 100%;\n}\n#page-wrapper {\n  padding: 0 15px;\n  min-height: 568px;\n  background-color: white;\n}\n@media (min-width: 768px) {\n  #page-wrapper {\n    position: inherit;\n    margin: 0 0 0 250px;\n    padding: 0 30px;\n    border-left: 1px solid #e7e7e7;\n  }\n}\n.navbar-top-links {\n  margin-right: 0;\n}\n.navbar-top-links li {\n  display: inline-block;\n}\n.navbar-top-links li:last-child {\n  margin-right: 15px;\n}\n.navbar-top-links li a {\n  padding: 15px;\n  min-height: 50px;\n}\n.navbar-top-links .dropdown-menu li {\n  display: block;\n}\n.navbar-top-links .dropdown-menu li:last-child {\n  margin-right: 0;\n}\n.navbar-top-links .dropdown-menu li a {\n  padding: 3px 20px;\n  min-height: 0;\n}\n.navbar-top-links .dropdown-menu li a div {\n  white-space: normal;\n}\n.navbar-top-links .dropdown-messages,\n.navbar-top-links .dropdown-tasks,\n.navbar-top-links .dropdown-alerts {\n  width: 310px;\n  min-width: 0;\n}\n.navbar-top-links .dropdown-messages {\n  margin-left: 5px;\n}\n.navbar-top-links .dropdown-tasks {\n  margin-left: -59px;\n}\n.navbar-top-links .dropdown-alerts {\n  margin-left: -123px;\n}\n.navbar-top-links .dropdown-user {\n  right: 0;\n  left: auto;\n}\n.sidebar .sidebar-nav.navbar-collapse {\n  padding-left: 0;\n  padding-right: 0;\n}\n.sidebar .sidebar-search {\n  padding: 15px;\n}\n.sidebar ul li {\n  border-bottom: 1px solid #e7e7e7;\n}\n.sidebar ul li a.active {\n  background-color: #eeeeee;\n}\n.sidebar .arrow {\n  float: right;\n}\n.sidebar .fa.arrow:before {\n  content: \"\\f104\";\n}\n.sidebar .active > a > .fa.arrow:before {\n  content: \"\\f107\";\n}\n.sidebar .nav-second-level li,\n.sidebar .nav-third-level li {\n  border-bottom: none !important;\n}\n.sidebar .nav-second-level li a {\n  padding-left: 37px;\n}\n.sidebar .nav-third-level li a {\n  padding-left: 52px;\n}\n@media (min-width: 768px) {\n  .sidebar {\n    z-index: 1;\n    position: absolute;\n    width: 250px;\n    margin-top: 51px;\n  }\n  .navbar-top-links .dropdown-messages,\n  .navbar-top-links .dropdown-tasks,\n  .navbar-top-links .dropdown-alerts {\n    margin-left: auto;\n  }\n}\n.btn-outline {\n  color: inherit;\n  background-color: transparent;\n  transition: all .5s;\n}\n.btn-primary.btn-outline {\n  color: #428bca;\n}\n.btn-success.btn-outline {\n  color: #5cb85c;\n}\n.btn-info.btn-outline {\n  color: #5bc0de;\n}\n.btn-warning.btn-outline {\n  color: #f0ad4e;\n}\n.btn-danger.btn-outline {\n  color: #d9534f;\n}\n.btn-primary.btn-outline:hover,\n.btn-success.btn-outline:hover,\n.btn-info.btn-outline:hover,\n.btn-warning.btn-outline:hover,\n.btn-danger.btn-outline:hover {\n  color: white;\n}\n.chat {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat li {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999999;\n}\n.chat li.left .chat-body {\n  margin-left: 60px;\n}\n.chat li.right .chat-body {\n  margin-right: 60px;\n}\n.chat li .chat-body p {\n  margin: 0;\n}\n.panel .slidedown .glyphicon,\n.chat .glyphicon {\n  margin-right: 5px;\n}\n.chat-panel .panel-body {\n  height: 350px;\n  overflow-y: scroll;\n}\n.login-panel {\n  margin-top: 25%;\n}\n.flot-chart {\n  display: block;\n  height: 400px;\n}\n.flot-chart-content {\n  width: 100%;\n  height: 100%;\n}\ntable.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc,\ntable.dataTable thead .sorting_asc_disabled,\ntable.dataTable thead .sorting_desc_disabled {\n  background: transparent;\n}\ntable.dataTable thead .sorting_asc:after {\n  content: \"\\f0de\";\n  float: right;\n  font-family: fontawesome;\n}\ntable.dataTable thead .sorting_desc:after {\n  content: \"\\f0dd\";\n  float: right;\n  font-family: fontawesome;\n}\ntable.dataTable thead .sorting:after {\n  content: \"\\f0dc\";\n  float: right;\n  font-family: fontawesome;\n  color: rgba(50, 50, 50, 0.5);\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.428571429;\n}\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 10px 16px;\n  border-radius: 25px;\n  font-size: 18px;\n  line-height: 1.33;\n}\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  padding: 10px 16px;\n  border-radius: 35px;\n  font-size: 24px;\n  line-height: 1.33;\n}\n.show-grid [class^=\"col-\"] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border: 1px solid #ddd;\n  background-color: #eee !important;\n}\n.show-grid {\n  margin: 15px 0;\n}\n.huge {\n  font-size: 40px;\n}\n.panel-green {\n  border-color: #5cb85c;\n}\n.panel-green > .panel-heading {\n  border-color: #5cb85c;\n  color: white;\n  background-color: #5cb85c;\n}\n.panel-green > a {\n  color: #5cb85c;\n}\n.panel-green > a:hover {\n  color: #3d8b3d;\n}\n.panel-red {\n  border-color: #d9534f;\n}\n.panel-red > .panel-heading {\n  border-color: #d9534f;\n  color: white;\n  background-color: #d9534f;\n}\n.panel-red > a {\n  color: #d9534f;\n}\n.panel-red > a:hover {\n  color: #b52b27;\n}\n.panel-yellow {\n  border-color: #f0ad4e;\n}\n.panel-yellow > .panel-heading {\n  border-color: #f0ad4e;\n  color: white;\n  background-color: #f0ad4e;\n}\n.panel-yellow > a {\n  color: #f0ad4e;\n}\n.panel-yellow > a:hover {\n  color: #df8a13;\n}\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n  ul.timeline > li > .timeline-panel {\n    width: calc(10%);\n    width: -webkit-calc(10%);\n  }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n  ul.timeline > li > .timeline-panel {\n    float: right;\n  }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGVudC9kaXN0L2Nzcy9zYi1hZG1pbi0yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix3QkFBd0I7Q0FDekI7QUFDRDtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsK0JBQStCO0dBQ2hDO0NBQ0Y7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7OztFQUdFLGFBQWE7RUFDYixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLFNBQVM7RUFDVCxXQUFXO0NBQ1o7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDs7RUFFRSwrQkFBK0I7Q0FDaEM7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjtF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QUFxQjtHQUN0QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29udGVudC9kaXN0L2Nzcy9zYi1hZG1pbi0yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogU3RhcnQgQm9vdHN0cmFwIC0gU0IgQWRtaW4gMiB2My4zLjcrMSAoaHR0cDovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3Mvc2ItYWRtaW4tMilcbiAqIENvcHlyaWdodCAyMDEzLTIwMTYgU3RhcnQgQm9vdHN0cmFwXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9CbGFja3JvY2tEaWdpdGFsL3N0YXJ0Ym9vdHN0cmFwL2Jsb2IvZ2gtcGFnZXMvTElDRU5TRSlcbiAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG4jd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BhZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWluLWhlaWdodDogNTY4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNwYWdlLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMCAwIDAgMjUwcHg7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U3ZTdlNztcbiAgfVxufVxuLm5hdmJhci10b3AtbGlua3Mge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubmF2YmFyLXRvcC1saW5rcyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5uYXZiYXItdG9wLWxpbmtzIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubmF2YmFyLXRvcC1saW5rcyBsaSBhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5uYXZiYXItdG9wLWxpbmtzIC5kcm9wZG93bi1tZW51IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2YmFyLXRvcC1saW5rcyAuZHJvcGRvd24tbWVudSBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLW1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBtaW4taGVpZ2h0OiAwO1xufVxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLW1lbnUgbGkgYSBkaXYge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLW1lc3NhZ2VzLFxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLXRhc2tzLFxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLWFsZXJ0cyB7XG4gIHdpZHRoOiAzMTBweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLW1lc3NhZ2VzIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5uYXZiYXItdG9wLWxpbmtzIC5kcm9wZG93bi10YXNrcyB7XG4gIG1hcmdpbi1sZWZ0OiAtNTlweDtcbn1cbi5uYXZiYXItdG9wLWxpbmtzIC5kcm9wZG93bi1hbGVydHMge1xuICBtYXJnaW4tbGVmdDogLTEyM3B4O1xufVxuLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLXVzZXIge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLW5hdi5uYXZiYXItY29sbGFwc2Uge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uc2lkZWJhciAuc2lkZWJhci1zZWFyY2gge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnNpZGViYXIgdWwgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNztcbn1cbi5zaWRlYmFyIHVsIGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cbi5zaWRlYmFyIC5hcnJvdyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zaWRlYmFyIC5mYS5hcnJvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwNFwiO1xufVxuLnNpZGViYXIgLmFjdGl2ZSA+IGEgPiAuZmEuYXJyb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDdcIjtcbn1cbi5zaWRlYmFyIC5uYXYtc2Vjb25kLWxldmVsIGxpLFxuLnNpZGViYXIgLm5hdi10aGlyZC1sZXZlbCBsaSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5uYXYtc2Vjb25kLWxldmVsIGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDM3cHg7XG59XG4uc2lkZWJhciAubmF2LXRoaXJkLWxldmVsIGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDUycHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MXB4O1xuICB9XG4gIC5uYXZiYXItdG9wLWxpbmtzIC5kcm9wZG93bi1tZXNzYWdlcyxcbiAgLm5hdmJhci10b3AtbGlua3MgLmRyb3Bkb3duLXRhc2tzLFxuICAubmF2YmFyLXRvcC1saW5rcyAuZHJvcGRvd24tYWxlcnRzIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuLmJ0bi1vdXRsaW5lIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuLmJ0bi1wcmltYXJ5LmJ0bi1vdXRsaW5lIHtcbiAgY29sb3I6ICM0MjhiY2E7XG59XG4uYnRuLXN1Y2Nlc3MuYnRuLW91dGxpbmUge1xuICBjb2xvcjogIzVjYjg1Yztcbn1cbi5idG4taW5mby5idG4tb3V0bGluZSB7XG4gIGNvbG9yOiAjNWJjMGRlO1xufVxuLmJ0bi13YXJuaW5nLmJ0bi1vdXRsaW5lIHtcbiAgY29sb3I6ICNmMGFkNGU7XG59XG4uYnRuLWRhbmdlci5idG4tb3V0bGluZSB7XG4gIGNvbG9yOiAjZDk1MzRmO1xufVxuLmJ0bi1wcmltYXJ5LmJ0bi1vdXRsaW5lOmhvdmVyLFxuLmJ0bi1zdWNjZXNzLmJ0bi1vdXRsaW5lOmhvdmVyLFxuLmJ0bi1pbmZvLmJ0bi1vdXRsaW5lOmhvdmVyLFxuLmJ0bi13YXJuaW5nLmJ0bi1vdXRsaW5lOmhvdmVyLFxuLmJ0bi1kYW5nZXIuYnRuLW91dGxpbmU6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2hhdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5jaGF0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5OTk5O1xufVxuLmNoYXQgbGkubGVmdCAuY2hhdC1ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4uY2hhdCBsaS5yaWdodCAuY2hhdC1ib2R5IHtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuLmNoYXQgbGkgLmNoYXQtYm9keSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLnBhbmVsIC5zbGlkZWRvd24gLmdseXBoaWNvbixcbi5jaGF0IC5nbHlwaGljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jaGF0LXBhbmVsIC5wYW5lbC1ib2R5IHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmxvZ2luLXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuLmZsb3QtY2hhcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5mbG90LWNoYXJ0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZCxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjX2Rpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwZGVcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG59XG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxmMGRkXCI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xufVxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYwZGNcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogZm9udGF3ZXNvbWU7XG4gIGNvbG9yOiByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XG59XG4uYnRuLWNpcmNsZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDZweCAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xufVxuLmJ0bi1jaXJjbGUuYnRuLWxnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xufVxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xufVxuLnNob3ctZ3JpZCBbY2xhc3NePVwiY29sLVwiXSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuLnNob3ctZ3JpZCB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLmh1Z2Uge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4ucGFuZWwtZ3JlZW4ge1xuICBib3JkZXItY29sb3I6ICM1Y2I4NWM7XG59XG4ucGFuZWwtZ3JlZW4gPiAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1jb2xvcjogIzVjYjg1YztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xufVxuLnBhbmVsLWdyZWVuID4gYSB7XG4gIGNvbG9yOiAjNWNiODVjO1xufVxuLnBhbmVsLWdyZWVuID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjM2Q4YjNkO1xufVxuLnBhbmVsLXJlZCB7XG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0Zjtcbn1cbi5wYW5lbC1yZWQgPiAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0ZjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xufVxuLnBhbmVsLXJlZCA+IGEge1xuICBjb2xvcjogI2Q5NTM0Zjtcbn1cbi5wYW5lbC1yZWQgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICNiNTJiMjc7XG59XG4ucGFuZWwteWVsbG93IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlO1xufVxuLnBhbmVsLXllbGxvdyA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG59XG4ucGFuZWwteWVsbG93ID4gYSB7XG4gIGNvbG9yOiAjZjBhZDRlO1xufVxuLnBhbmVsLXllbGxvdyA+IGE6aG92ZXIge1xuICBjb2xvcjogI2RmOGExMztcbn1cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4udGltZWxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cbi50aW1lbGluZSA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDYlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG59XG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjZweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2NjYztcbn1cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3cHg7XG4gIHJpZ2h0OiAtMTRweDtcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmY7XG59XG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICBmbG9hdDogcmlnaHQ7XG59XG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE1cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbn1cbi50aW1lbGluZS1iYWRnZS5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlNmRhNCAhaW1wb3J0YW50O1xufVxuLnRpbWVsaW5lLWJhZGdlLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtYmFkZ2Uud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGUgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZS1iYWRnZS5kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XG59XG4udGltZWxpbmUtYmFkZ2UuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cbi50aW1lbGluZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnRpbWVsaW5lLWJvZHkgPiBwLFxuLnRpbWVsaW5lLWJvZHkgPiB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIHVsLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgbGVmdDogNDBweDtcbiAgfVxuICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICB3aWR0aDogY2FsYygxMCUpO1xuICAgIHdpZHRoOiAtbW96LWNhbGMoMTAlKTtcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwJSk7XG4gIH1cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgdG9wOiAxNnB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIH1cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css":
/*!****************************************************************!*\
  !*** ./src/app/Content/vendor/bootstrap/css/bootstrap.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url('glyphicons-halflings-regular.eot');src:url('glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('glyphicons-halflings-regular.woff2') format('woff2'),url('glyphicons-halflings-regular.woff') format('woff'),url('glyphicons-halflings-regular.ttf') format('truetype'),url('glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"\\002a\"}.glyphicon-plus:before{content:\"\\002b\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20ac\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270f\"}.glyphicon-glass:before{content:\"\\e001\"}.glyphicon-music:before{content:\"\\e002\"}.glyphicon-search:before{content:\"\\e003\"}.glyphicon-heart:before{content:\"\\e005\"}.glyphicon-star:before{content:\"\\e006\"}.glyphicon-star-empty:before{content:\"\\e007\"}.glyphicon-user:before{content:\"\\e008\"}.glyphicon-film:before{content:\"\\e009\"}.glyphicon-th-large:before{content:\"\\e010\"}.glyphicon-th:before{content:\"\\e011\"}.glyphicon-th-list:before{content:\"\\e012\"}.glyphicon-ok:before{content:\"\\e013\"}.glyphicon-remove:before{content:\"\\e014\"}.glyphicon-zoom-in:before{content:\"\\e015\"}.glyphicon-zoom-out:before{content:\"\\e016\"}.glyphicon-off:before{content:\"\\e017\"}.glyphicon-signal:before{content:\"\\e018\"}.glyphicon-cog:before{content:\"\\e019\"}.glyphicon-trash:before{content:\"\\e020\"}.glyphicon-home:before{content:\"\\e021\"}.glyphicon-file:before{content:\"\\e022\"}.glyphicon-time:before{content:\"\\e023\"}.glyphicon-road:before{content:\"\\e024\"}.glyphicon-download-alt:before{content:\"\\e025\"}.glyphicon-download:before{content:\"\\e026\"}.glyphicon-upload:before{content:\"\\e027\"}.glyphicon-inbox:before{content:\"\\e028\"}.glyphicon-play-circle:before{content:\"\\e029\"}.glyphicon-repeat:before{content:\"\\e030\"}.glyphicon-refresh:before{content:\"\\e031\"}.glyphicon-list-alt:before{content:\"\\e032\"}.glyphicon-lock:before{content:\"\\e033\"}.glyphicon-flag:before{content:\"\\e034\"}.glyphicon-headphones:before{content:\"\\e035\"}.glyphicon-volume-off:before{content:\"\\e036\"}.glyphicon-volume-down:before{content:\"\\e037\"}.glyphicon-volume-up:before{content:\"\\e038\"}.glyphicon-qrcode:before{content:\"\\e039\"}.glyphicon-barcode:before{content:\"\\e040\"}.glyphicon-tag:before{content:\"\\e041\"}.glyphicon-tags:before{content:\"\\e042\"}.glyphicon-book:before{content:\"\\e043\"}.glyphicon-bookmark:before{content:\"\\e044\"}.glyphicon-print:before{content:\"\\e045\"}.glyphicon-camera:before{content:\"\\e046\"}.glyphicon-font:before{content:\"\\e047\"}.glyphicon-bold:before{content:\"\\e048\"}.glyphicon-italic:before{content:\"\\e049\"}.glyphicon-text-height:before{content:\"\\e050\"}.glyphicon-text-width:before{content:\"\\e051\"}.glyphicon-align-left:before{content:\"\\e052\"}.glyphicon-align-center:before{content:\"\\e053\"}.glyphicon-align-right:before{content:\"\\e054\"}.glyphicon-align-justify:before{content:\"\\e055\"}.glyphicon-list:before{content:\"\\e056\"}.glyphicon-indent-left:before{content:\"\\e057\"}.glyphicon-indent-right:before{content:\"\\e058\"}.glyphicon-facetime-video:before{content:\"\\e059\"}.glyphicon-picture:before{content:\"\\e060\"}.glyphicon-map-marker:before{content:\"\\e062\"}.glyphicon-adjust:before{content:\"\\e063\"}.glyphicon-tint:before{content:\"\\e064\"}.glyphicon-edit:before{content:\"\\e065\"}.glyphicon-share:before{content:\"\\e066\"}.glyphicon-check:before{content:\"\\e067\"}.glyphicon-move:before{content:\"\\e068\"}.glyphicon-step-backward:before{content:\"\\e069\"}.glyphicon-fast-backward:before{content:\"\\e070\"}.glyphicon-backward:before{content:\"\\e071\"}.glyphicon-play:before{content:\"\\e072\"}.glyphicon-pause:before{content:\"\\e073\"}.glyphicon-stop:before{content:\"\\e074\"}.glyphicon-forward:before{content:\"\\e075\"}.glyphicon-fast-forward:before{content:\"\\e076\"}.glyphicon-step-forward:before{content:\"\\e077\"}.glyphicon-eject:before{content:\"\\e078\"}.glyphicon-chevron-left:before{content:\"\\e079\"}.glyphicon-chevron-right:before{content:\"\\e080\"}.glyphicon-plus-sign:before{content:\"\\e081\"}.glyphicon-minus-sign:before{content:\"\\e082\"}.glyphicon-remove-sign:before{content:\"\\e083\"}.glyphicon-ok-sign:before{content:\"\\e084\"}.glyphicon-question-sign:before{content:\"\\e085\"}.glyphicon-info-sign:before{content:\"\\e086\"}.glyphicon-screenshot:before{content:\"\\e087\"}.glyphicon-remove-circle:before{content:\"\\e088\"}.glyphicon-ok-circle:before{content:\"\\e089\"}.glyphicon-ban-circle:before{content:\"\\e090\"}.glyphicon-arrow-left:before{content:\"\\e091\"}.glyphicon-arrow-right:before{content:\"\\e092\"}.glyphicon-arrow-up:before{content:\"\\e093\"}.glyphicon-arrow-down:before{content:\"\\e094\"}.glyphicon-share-alt:before{content:\"\\e095\"}.glyphicon-resize-full:before{content:\"\\e096\"}.glyphicon-resize-small:before{content:\"\\e097\"}.glyphicon-exclamation-sign:before{content:\"\\e101\"}.glyphicon-gift:before{content:\"\\e102\"}.glyphicon-leaf:before{content:\"\\e103\"}.glyphicon-fire:before{content:\"\\e104\"}.glyphicon-eye-open:before{content:\"\\e105\"}.glyphicon-eye-close:before{content:\"\\e106\"}.glyphicon-warning-sign:before{content:\"\\e107\"}.glyphicon-plane:before{content:\"\\e108\"}.glyphicon-calendar:before{content:\"\\e109\"}.glyphicon-random:before{content:\"\\e110\"}.glyphicon-comment:before{content:\"\\e111\"}.glyphicon-magnet:before{content:\"\\e112\"}.glyphicon-chevron-up:before{content:\"\\e113\"}.glyphicon-chevron-down:before{content:\"\\e114\"}.glyphicon-retweet:before{content:\"\\e115\"}.glyphicon-shopping-cart:before{content:\"\\e116\"}.glyphicon-folder-close:before{content:\"\\e117\"}.glyphicon-folder-open:before{content:\"\\e118\"}.glyphicon-resize-vertical:before{content:\"\\e119\"}.glyphicon-resize-horizontal:before{content:\"\\e120\"}.glyphicon-hdd:before{content:\"\\e121\"}.glyphicon-bullhorn:before{content:\"\\e122\"}.glyphicon-bell:before{content:\"\\e123\"}.glyphicon-certificate:before{content:\"\\e124\"}.glyphicon-thumbs-up:before{content:\"\\e125\"}.glyphicon-thumbs-down:before{content:\"\\e126\"}.glyphicon-hand-right:before{content:\"\\e127\"}.glyphicon-hand-left:before{content:\"\\e128\"}.glyphicon-hand-up:before{content:\"\\e129\"}.glyphicon-hand-down:before{content:\"\\e130\"}.glyphicon-circle-arrow-right:before{content:\"\\e131\"}.glyphicon-circle-arrow-left:before{content:\"\\e132\"}.glyphicon-circle-arrow-up:before{content:\"\\e133\"}.glyphicon-circle-arrow-down:before{content:\"\\e134\"}.glyphicon-globe:before{content:\"\\e135\"}.glyphicon-wrench:before{content:\"\\e136\"}.glyphicon-tasks:before{content:\"\\e137\"}.glyphicon-filter:before{content:\"\\e138\"}.glyphicon-briefcase:before{content:\"\\e139\"}.glyphicon-fullscreen:before{content:\"\\e140\"}.glyphicon-dashboard:before{content:\"\\e141\"}.glyphicon-paperclip:before{content:\"\\e142\"}.glyphicon-heart-empty:before{content:\"\\e143\"}.glyphicon-link:before{content:\"\\e144\"}.glyphicon-phone:before{content:\"\\e145\"}.glyphicon-pushpin:before{content:\"\\e146\"}.glyphicon-usd:before{content:\"\\e148\"}.glyphicon-gbp:before{content:\"\\e149\"}.glyphicon-sort:before{content:\"\\e150\"}.glyphicon-sort-by-alphabet:before{content:\"\\e151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\e152\"}.glyphicon-sort-by-order:before{content:\"\\e153\"}.glyphicon-sort-by-order-alt:before{content:\"\\e154\"}.glyphicon-sort-by-attributes:before{content:\"\\e155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\e156\"}.glyphicon-unchecked:before{content:\"\\e157\"}.glyphicon-expand:before{content:\"\\e158\"}.glyphicon-collapse-down:before{content:\"\\e159\"}.glyphicon-collapse-up:before{content:\"\\e160\"}.glyphicon-log-in:before{content:\"\\e161\"}.glyphicon-flash:before{content:\"\\e162\"}.glyphicon-log-out:before{content:\"\\e163\"}.glyphicon-new-window:before{content:\"\\e164\"}.glyphicon-record:before{content:\"\\e165\"}.glyphicon-save:before{content:\"\\e166\"}.glyphicon-open:before{content:\"\\e167\"}.glyphicon-saved:before{content:\"\\e168\"}.glyphicon-import:before{content:\"\\e169\"}.glyphicon-export:before{content:\"\\e170\"}.glyphicon-send:before{content:\"\\e171\"}.glyphicon-floppy-disk:before{content:\"\\e172\"}.glyphicon-floppy-saved:before{content:\"\\e173\"}.glyphicon-floppy-remove:before{content:\"\\e174\"}.glyphicon-floppy-save:before{content:\"\\e175\"}.glyphicon-floppy-open:before{content:\"\\e176\"}.glyphicon-credit-card:before{content:\"\\e177\"}.glyphicon-transfer:before{content:\"\\e178\"}.glyphicon-cutlery:before{content:\"\\e179\"}.glyphicon-header:before{content:\"\\e180\"}.glyphicon-compressed:before{content:\"\\e181\"}.glyphicon-earphone:before{content:\"\\e182\"}.glyphicon-phone-alt:before{content:\"\\e183\"}.glyphicon-tower:before{content:\"\\e184\"}.glyphicon-stats:before{content:\"\\e185\"}.glyphicon-sd-video:before{content:\"\\e186\"}.glyphicon-hd-video:before{content:\"\\e187\"}.glyphicon-subtitles:before{content:\"\\e188\"}.glyphicon-sound-stereo:before{content:\"\\e189\"}.glyphicon-sound-dolby:before{content:\"\\e190\"}.glyphicon-sound-5-1:before{content:\"\\e191\"}.glyphicon-sound-6-1:before{content:\"\\e192\"}.glyphicon-sound-7-1:before{content:\"\\e193\"}.glyphicon-copyright-mark:before{content:\"\\e194\"}.glyphicon-registration-mark:before{content:\"\\e195\"}.glyphicon-cloud-download:before{content:\"\\e197\"}.glyphicon-cloud-upload:before{content:\"\\e198\"}.glyphicon-tree-conifer:before{content:\"\\e199\"}.glyphicon-tree-deciduous:before{content:\"\\e200\"}.glyphicon-cd:before{content:\"\\e201\"}.glyphicon-save-file:before{content:\"\\e202\"}.glyphicon-open-file:before{content:\"\\e203\"}.glyphicon-level-up:before{content:\"\\e204\"}.glyphicon-copy:before{content:\"\\e205\"}.glyphicon-paste:before{content:\"\\e206\"}.glyphicon-alert:before{content:\"\\e209\"}.glyphicon-equalizer:before{content:\"\\e210\"}.glyphicon-king:before{content:\"\\e211\"}.glyphicon-queen:before{content:\"\\e212\"}.glyphicon-pawn:before{content:\"\\e213\"}.glyphicon-bishop:before{content:\"\\e214\"}.glyphicon-knight:before{content:\"\\e215\"}.glyphicon-baby-formula:before{content:\"\\e216\"}.glyphicon-tent:before{content:\"\\26fa\"}.glyphicon-blackboard:before{content:\"\\e218\"}.glyphicon-bed:before{content:\"\\e219\"}.glyphicon-apple:before{content:\"\\f8ff\"}.glyphicon-erase:before{content:\"\\e221\"}.glyphicon-hourglass:before{content:\"\\231b\"}.glyphicon-lamp:before{content:\"\\e223\"}.glyphicon-duplicate:before{content:\"\\e224\"}.glyphicon-piggy-bank:before{content:\"\\e225\"}.glyphicon-scissors:before{content:\"\\e226\"}.glyphicon-bitcoin:before{content:\"\\e227\"}.glyphicon-btc:before{content:\"\\e227\"}.glyphicon-xbt:before{content:\"\\e227\"}.glyphicon-yen:before{content:\"\\00a5\"}.glyphicon-jpy:before{content:\"\\00a5\"}.glyphicon-ruble:before{content:\"\\20bd\"}.glyphicon-rub:before{content:\"\\20bd\"}.glyphicon-scale:before{content:\"\\e230\"}.glyphicon-ice-lolly:before{content:\"\\e231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\e232\"}.glyphicon-education:before{content:\"\\e233\"}.glyphicon-option-horizontal:before{content:\"\\e234\"}.glyphicon-option-vertical:before{content:\"\\e235\"}.glyphicon-menu-hamburger:before{content:\"\\e236\"}.glyphicon-modal-window:before{content:\"\\e237\"}.glyphicon-oil:before{content:\"\\e238\"}.glyphicon-grain:before{content:\"\\e239\"}.glyphicon-sunglasses:before{content:\"\\e240\"}.glyphicon-text-size:before{content:\"\\e241\"}.glyphicon-text-color:before{content:\"\\e242\"}.glyphicon-text-background:before{content:\"\\e243\"}.glyphicon-object-align-top:before{content:\"\\e244\"}.glyphicon-object-align-bottom:before{content:\"\\e245\"}.glyphicon-object-align-horizontal:before{content:\"\\e246\"}.glyphicon-object-align-left:before{content:\"\\e247\"}.glyphicon-object-align-vertical:before{content:\"\\e248\"}.glyphicon-object-align-right:before{content:\"\\e249\"}.glyphicon-triangle-right:before{content:\"\\e250\"}.glyphicon-triangle-left:before{content:\"\\e251\"}.glyphicon-triangle-bottom:before{content:\"\\e252\"}.glyphicon-triangle-top:before{content:\"\\e253\"}.glyphicon-console:before{content:\"\\e254\"}.glyphicon-superscript:before{content:\"\\e255\"}.glyphicon-subscript:before{content:\"\\e256\"}.glyphicon-menu-left:before{content:\"\\e257\"}.glyphicon-menu-right:before{content:\"\\e258\"}.glyphicon-menu-down:before{content:\"\\e259\"}.glyphicon-menu-up:before{content:\"\\e260\"}*{box-sizing:border-box}:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014 \\00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\00A0 \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.checkbox-inline.disabled,.radio-inline.disabled,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio-inline{cursor:not-allowed}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition-timing-function:ease;transition-duration:.35s;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\00a0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d), (-webkit-transform-3d){.carousel-inner>.item{transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:rgba(0,0,0,0);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}/*# sourceMappingURL=bootstrap.min.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGVudC92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHLDRFQUE0RSxLQUFLLHVCQUF1Qiw4QkFBOEIseUJBQXlCLENBQUMsS0FBSyxRQUFRLENBQUMsMkZBQTJGLGFBQWEsQ0FBQyw0QkFBNEIscUJBQXFCLHVCQUF1QixDQUFDLHNCQUFzQixhQUFhLFFBQVEsQ0FBQyxrQkFBa0IsWUFBWSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsaUJBQWlCLFNBQVMsQ0FBQyxZQUFZLHdCQUF3QixDQUFDLFNBQVMsZUFBZSxDQUFDLElBQUksaUJBQWlCLENBQUMsR0FBRyxlQUFlLGFBQWEsQ0FBQyxLQUFLLFdBQVcsZUFBZSxDQUFDLE1BQU0sYUFBYSxDQUFDLFFBQVEsa0JBQWtCLGNBQWMsY0FBYyx1QkFBdUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxlQUFlLGVBQWUsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxHQUFHLFNBQVMsQUFBMkQsc0JBQXNCLENBQUMsSUFBSSxhQUFhLENBQUMsa0JBQWtCLGdDQUFnQyxhQUFhLENBQUMsc0NBQXNDLFNBQVMsYUFBYSxhQUFhLENBQUMsT0FBTyxnQkFBZ0IsQ0FBQyxjQUFjLG1CQUFtQixDQUFDLG9FQUFvRSwwQkFBMEIsY0FBYyxDQUFDLHNDQUFzQyxjQUFjLENBQUMsaURBQWlELFVBQVUsUUFBUSxDQUFDLE1BQU0sa0JBQWtCLENBQUMsdUNBQWdHLHNCQUFzQixTQUFTLENBQUMsNEZBQTRGLFdBQVcsQ0FBQyxtQkFBOEUsdUJBQXVCLDRCQUE0QixDQUFDLCtGQUErRix1QkFBdUIsQ0FBQyxTQUFTLDJCQUEyQixhQUFhLHVCQUF1QixDQUFDLE9BQU8sVUFBVSxRQUFRLENBQUMsU0FBUyxhQUFhLENBQUMsU0FBUyxlQUFlLENBQUMsTUFBTSxpQkFBaUIsd0JBQXdCLENBQUMsTUFB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QWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsdUJBQXVCLENBQUMsaUJBQWlCLGFBQWEsQ0FBQyx5QkFBeUIsMkhBQTJILFVBQVUsQ0FBQyxXQUFXLFVBQVUsQ0FBQyxXQUFXLGtCQUFrQixDQUFDLFdBQVcsa0JBQWtCLENBQUMsVUFBVSxTQUFTLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsU0FBUyxDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsaUJBQWlCLENBQUMsZ0JBQWdCLFVBQVUsQ0FBQyxnQkFBZ0Isa0JBQWtCLENBQUMsZ0JBQWdCLGtCQUFrQixDQUFDLGVBQWUsU0FBUyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxTQUFTLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsVUFBVSxDQUFDLGdCQUFnQixTQUFTLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxlQUFlLFFBQVEsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxRQUFRLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsUUFBUSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxnQkFBZ0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxrQkFBa0IsZ0JBQWdCLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLGtCQUFrQix3QkFBd0IsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQix1QkFBdUIsQ0FBQyxpQkFBaUIsYUFBYSxDQUFDLENBQUMseUJBQXlCLDJIQUEySCxVQUFVLENBQUMsV0FBVyxVQUFVLENBQUMsV0FBVyxrQkFBa0IsQ0FBQyxXQUFXLGtCQUFrQixDQUFDLFVBQVUsU0FBUyxDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxTQUFTLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLGlCQUFpQixDQUFDLGdCQUFnQixVQUFVLENBQUMsZ0JBQWdCLGtCQUFrQixDQUFDLGdCQUFnQixrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxTQUFTLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsU0FBUyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLFVBQVUsQ0FBQyxnQkFBZ0IsU0FBUyxDQUFDLGdCQUFnQixpQkFBaUIsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZUFBZSxRQUFRLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsUUFBUSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLFFBQVEsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsZ0JBQWdCLENBQUMsZUFBZSxTQUFTLENBQUMsa0JBQWtCLGdCQUFnQixDQUFDLGtCQUFrQix3QkFBd0IsQ0FBQyxrQkFBa0Isd0JBQXdCLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxpQkFBaUIsd0JBQXdCLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJBQWlCLHdCQUF3QixDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLGlCQUFpQix3QkFBd0IsQ0FBQyxpQkFBaUIsdUJBQXVCLENBQUMsaUJBQWlCLGFBQWEsQ0FBQyxDQUFDLDBCQUEwQiwySEFBMkgsVUFBVSxDQUFDLFdBQVcsVUFBVSxDQUFDLFdBQVcsa0JBQWtCLENBQUMsV0FBVyxrQkFBa0IsQ0FBQyxVQUFVLFNBQVMsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxTQUFTLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxVQUFVLGtCQUFrQixDQUFDLFVBQVUsU0FBUyxDQUFDLFVBQVUsa0JBQWtCLENBQUMsVUFBVSxpQkFBaUIsQ0FBQyxnQkFBZ0IsVUFBVSxDQUFDLGdCQUFnQixrQkFBa0IsQ0FBQyxnQkFBZ0Isa0JBQWtCLENBQUMsZUFBZSxTQUFTLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsU0FBUyxDQUFDLGVBQWUsa0JBQWtCLENBQUMsZUFBZSxrQkFBa0IsQ0FBQyxlQUFlLFNBQVMsQ0FBQyxlQUFlLGtCQUFrQixDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxVQUFVLENBQUMsZ0JBQWdCLFNBQVMsQ0FBQyxnQkFBZ0IsaUJBQWlCLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGVBQWUsUUFBUSxDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLFFBQVEsQ0FBQyxlQUFlLGlCQUFpQixDQUFDLGVBQWUsaUJBQWlCLENBQUMsZUFBZSxRQUFRLENBQUMsZUFBZSxpQkFBaUIsQ0FBQyxlQUFlLGdCQUFnQixDQUFDLGVBQWUsU0FBUyxDQUFDLGtCQUFrQixnQkFBZ0IsQ0FBQyxrQkFBa0Isd0JBQXdCLENBQUMsa0JBQWtCLHdCQUF3QixDQUFDLGlCQUFpQixlQUFlLENBQUMsaUJB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QixZQUFZLHVCQUF1QixDQUFDLGlCQUFpQix1QkFBdUIsQ0FBQyxjQUFjLDJCQUEyQixDQUFDLDRCQUE0Qiw0QkFBNEIsQ0FBQyxDQUFDLDBCQUEwQixrQkFBa0IsdUJBQXVCLENBQUMsQ0FBQywwQkFBMEIsbUJBQW1CLHdCQUF3QixDQUFDLENBQUMsMEJBQTBCLHlCQUF5Qiw4QkFBOEIsQ0FBQyxDQUFDLHlCQUF5QixXQUFXLHNCQUFzQixDQUFDLENBQUMsK0NBQStDLFdBQVcsc0JBQXNCLENBQUMsQ0FBQyxnREFBZ0QsV0FBVyxzQkFBc0IsQ0FBQyxDQUFDLDBCQUEwQixXQUFXLHNCQUFzQixDQUFDLENBQUMsZUFBZSxzQkFBc0IsQ0FBQyxhQUFhLGVBQWUsdUJBQXVCLENBQUMsb0JBQW9CLHVCQUF1QixDQUFDLGlCQUFpQiwyQkFBMkIsQ0FBQyxrQ0FBa0MsNEJBQTRCLENBQUMsQ0FBQyxxQkFBcUIsc0JBQXNCLENBQUMsYUFBYSxxQkFBcUIsdUJBQXVCLENBQUMsQ0FBQyxzQkFBc0Isc0JBQXNCLENBQUMsYUFBYSxzQkFBc0Isd0JBQXdCLENBQUMsQ0FBQyw0QkFBNEIsc0JBQXNCLENBQUMsYUFBYSw0QkFBNEIsOEJBQThCLENBQUMsQ0FBQyxhQUFhLGNBQWMsc0JBQXNCLENBQUMsQ0FBQyxBQUM3cHNILDZDQUE2QyIsImZpbGUiOiJzcmMvYXBwL0NvbnRlbnQvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEJvb3RzdHJhcCB2My4zLjcgKGh0dHA6Ly9nZXRib290c3RyYXAuY29tKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL2h0bWx7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlfWJvZHl7bWFyZ2luOjB9YXJ0aWNsZSxhc2lkZSxkZXRhaWxzLGZpZ2NhcHRpb24sZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLG1haW4sbWVudSxuYXYsc2VjdGlvbixzdW1tYXJ5e2Rpc3BsYXk6YmxvY2t9YXVkaW8sY2FudmFzLHByb2dyZXNzLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9W2hpZGRlbl0sdGVtcGxhdGV7ZGlzcGxheTpub25lfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hOmFjdGl2ZSxhOmhvdmVye291dGxpbmU6MH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOjFweCBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6NzAwfWRmbntmb250LXN0eWxlOml0YWxpY31oMXttYXJnaW46LjY3ZW0gMDtmb250LXNpemU6MmVtfW1hcmt7Y29sb3I6IzAwMDtiYWNrZ3JvdW5kOiNmZjB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdXB7dG9wOi0uNWVtfXN1Yntib3R0b206LS4yNWVtfWltZ3tib3JkZXI6MH1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntoZWlnaHQ6MDstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3h9cHJle292ZXJmbG93OmF1dG99Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjA7Zm9udDppbmhlcml0O2NvbG9yOmluaGVyaXR9YnV0dG9ue292ZXJmbG93OnZpc2libGV9YnV0dG9uLHNlbGVjdHt0ZXh0LXRyYW5zZm9ybTpub25lfWJ1dHRvbixodG1sIGlucHV0W3R5cGU9YnV0dG9uXSxpbnB1dFt0eXBlPXJlc2V0XSxpbnB1dFt0eXBlPXN1Ym1pdF17LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtjdXJzb3I6cG9pbnRlcn1idXR0b25bZGlzYWJsZWRdLGh0bWwgaW5wdXRbZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixpbnB1dDo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjB9aW5wdXR7bGluZS1oZWlnaHQ6bm9ybWFsfWlucHV0W3R5cGU9Y2hlY2tib3hdLGlucHV0W3R5cGU9cmFkaW9dey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjB9aW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31pbnB1dFt0eXBlPXNlYXJjaF17LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLGlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX1maWVsZHNldHtwYWRkaW5nOi4zNWVtIC42MjVlbSAuNzVlbTttYXJnaW46MCAycHg7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXJ9bGVnZW5ke3BhZGRpbmc6MDtib3JkZXI6MH10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfW9wdGdyb3Vwe2ZvbnQtd2VpZ2h0OjcwMH10YWJsZXtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX10ZCx0aHtwYWRkaW5nOjB9LyohIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9tYWluLmNzcyAqL0BtZWRpYSBwcmludHsqLDphZnRlciw6YmVmb3Jle2NvbG9yOiMwMDAhaW1wb3J0YW50O3RleHQtc2hhZG93Om5vbmUhaW1wb3J0YW50O2JhY2tncm91bmQ6MCAwIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH1hLGE6dmlzaXRlZHt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWFbaHJlZl06YWZ0ZXJ7Y29udGVudDpcIiAoXCIgYXR0cihocmVmKSBcIilcIn1hYmJyW3RpdGxlXTphZnRlcntjb250ZW50OlwiIChcIiBhdHRyKHRpdGxlKSBcIilcIn1hW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXIsYVtocmVmXj1cIiNcIl06YWZ0ZXJ7Y29udGVudDpcIlwifWJsb2NrcXVvdGUscHJle2JvcmRlcjoxcHggc29saWQgIzk5OTtwYWdlLWJyZWFrLWluc2lkZTphdm9pZH10aGVhZHtkaXNwbGF5OnRhYmxlLWhlYWRlci1ncm91cH1pbWcsdHJ7cGFnZS1icmVhay1pbnNpZGU6YXZvaWR9aW1ne21heC13aWR0aDoxMDAlIWltcG9ydGFudH1oMixoMyxwe29ycGhhbnM6Mzt3aWRvd3M6M31oMixoM3twYWdlLWJyZWFrLWFmdGVyOmF2b2lkfS5uYXZiYXJ7ZGlzcGxheTpub25lfS5idG4+LmNhcmV0LC5kcm9wdXA+LmJ0bj4uY2FyZXR7Ym9yZGVyLXRvcC1jb2xvcjojMDAwIWltcG9ydGFudH0ubGFiZWx7Ym9yZGVyOjFweCBzb2xpZCAjMDAwfS50YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2UhaW1wb3J0YW50fS50YWJsZSB0ZCwudGFibGUgdGh7YmFja2dyb3VuZC1jb2xvcjojZmZmIWltcG9ydGFudH0udGFibGUtYm9yZGVyZWQgdGQsLnRhYmxlLWJvcmRlcmVkIHRoe2JvcmRlcjoxcHggc29saWQgI2RkZCFpbXBvcnRhbnR9fUBmb250LWZhY2V7Zm9udC1mYW1pbHk6J0dseXBoaWNvbnMgSGFsZmxpbmdzJztzcmM6dXJsKC4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIuZW90KTtzcmM6dXJsKC4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIuZW90PyNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLHVybCguLi9mb250cy9nbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyksdXJsKC4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksdXJsKC4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyksdXJsKC4uL2ZvbnRzL2dseXBoaWNvbnMtaGFsZmxpbmdzLXJlZ3VsYXIuc3ZnI2dseXBoaWNvbnNfaGFsZmxpbmdzcmVndWxhcikgZm9ybWF0KCdzdmcnKX0uZ2x5cGhpY29ue3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1mYW1pbHk6J0dseXBoaWNvbnMgSGFsZmxpbmdzJztmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uZ2x5cGhpY29uLWFzdGVyaXNrOmJlZm9yZXtjb250ZW50OlwiXFwwMDJhXCJ9LmdseXBoaWNvbi1wbHVzOmJlZm9yZXtjb250ZW50OlwiXFwwMDJiXCJ9LmdseXBoaWNvbi1ldXI6YmVmb3JlLC5nbHlwaGljb24tZXVybzpiZWZvcmV7Y29udGVudDpcIlxcMjBhY1wifS5nbHlwaGljb24tbWludXM6YmVmb3Jle2NvbnRlbnQ6XCJcXDIyMTJcIn0uZ2x5cGhpY29uLWNsb3VkOmJlZm9yZXtjb250ZW50OlwiXFwyNjAxXCJ9LmdseXBoaWNvbi1lbnZlbG9wZTpiZWZvcmV7Y29udGVudDpcIlxcMjcwOVwifS5nbHlwaGljb24tcGVuY2lsOmJlZm9yZXtjb250ZW50OlwiXFwyNzBmXCJ9LmdseXBoaWNvbi1nbGFzczpiZWZvcmV7Y29udGVudDpcIlxcZTAwMVwifS5nbHlwaGljb24tbXVzaWM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMDJcIn0uZ2x5cGhpY29uLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZTAwM1wifS5nbHlwaGljb24taGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMDVcIn0uZ2x5cGhpY29uLXN0YXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMDZcIn0uZ2x5cGhpY29uLXN0YXItZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMDdcIn0uZ2x5cGhpY29uLXVzZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMDhcIn0uZ2x5cGhpY29uLWZpbG06YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMDlcIn0uZ2x5cGhpY29uLXRoLWxhcmdlOmJlZm9yZXtjb250ZW50OlwiXFxlMDEwXCJ9LmdseXBoaWNvbi10aDpiZWZvcmV7Y29udGVudDpcIlxcZTAxMVwifS5nbHlwaGljb24tdGgtbGlzdDpiZWZvcmV7Y29udGVudDpcIlxcZTAxMlwifS5nbHlwaGljb24tb2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMTNcIn0uZ2x5cGhpY29uLXJlbW92ZTpiZWZvcmV7Y29udGVudDpcIlxcZTAxNFwifS5nbHlwaGljb24tem9vbS1pbjpiZWZvcmV7Y29udGVudDpcIlxcZTAxNVwifS5nbHlwaGljb24tem9vbS1vdXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMTZcIn0uZ2x5cGhpY29uLW9mZjpiZWZvcmV7Y29udGVudDpcIlxcZTAxN1wifS5nbHlwaGljb24tc2lnbmFsOmJlZm9yZXtjb250ZW50OlwiXFxlMDE4XCJ9LmdseXBoaWNvbi1jb2c6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMTlcIn0uZ2x5cGhpY29uLXRyYXNoOmJlZm9yZXtjb250ZW50OlwiXFxlMDIwXCJ9LmdseXBoaWNvbi1ob21lOmJlZm9yZXtjb250ZW50OlwiXFxlMDIxXCJ9LmdseXBoaWNvbi1maWxlOmJlZm9yZXtjb250ZW50OlwiXFxlMDIyXCJ9LmdseXBoaWNvbi10aW1lOmJlZm9yZXtjb250ZW50OlwiXFxlMDIzXCJ9LmdseXBoaWNvbi1yb2FkOmJlZm9yZXtjb250ZW50OlwiXFxlMDI0XCJ9LmdseXBoaWNvbi1kb3dubG9hZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMjVcIn0uZ2x5cGhpY29uLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlwiXFxlMDI2XCJ9LmdseXBoaWNvbi11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMjdcIn0uZ2x5cGhpY29uLWluYm94OmJlZm9yZXtjb250ZW50OlwiXFxlMDI4XCJ9LmdseXBoaWNvbi1wbGF5LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZTAyOVwifS5nbHlwaGljb24tcmVwZWF0OmJlZm9yZXtjb250ZW50OlwiXFxlMDMwXCJ9LmdseXBoaWNvbi1yZWZyZXNoOmJlZm9yZXtjb250ZW50OlwiXFxlMDMxXCJ9LmdseXBoaWNvbi1saXN0LWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZTAzMlwifS5nbHlwaGljb24tbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZTAzM1wifS5nbHlwaGljb24tZmxhZzpiZWZvcmV7Y29udGVudDpcIlxcZTAzNFwifS5nbHlwaGljb24taGVhZHBob25lczpiZWZvcmV7Y29udGVudDpcIlxcZTAzNVwifS5nbHlwaGljb24tdm9sdW1lLW9mZjpiZWZvcmV7Y29udGVudDpcIlxcZTAzNlwifS5nbHlwaGljb24tdm9sdW1lLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUwMzdcIn0uZ2x5cGhpY29uLXZvbHVtZS11cDpiZWZvcmV7Y29udGVudDpcIlxcZTAzOFwifS5nbHlwaGljb24tcXJjb2RlOmJlZm9yZXtjb250ZW50OlwiXFxlMDM5XCJ9LmdseXBoaWNvbi1iYXJjb2RlOmJlZm9yZXtjb250ZW50OlwiXFxlMDQwXCJ9LmdseXBoaWNvbi10YWc6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNDFcIn0uZ2x5cGhpY29uLXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNDJcIn0uZ2x5cGhpY29uLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNDNcIn0uZ2x5cGhpY29uLWJvb2ttYXJrOmJlZm9yZXtjb250ZW50OlwiXFxlMDQ0XCJ9LmdseXBoaWNvbi1wcmludDpiZWZvcmV7Y29udGVudDpcIlxcZTA0NVwifS5nbHlwaGljb24tY2FtZXJhOmJlZm9yZXtjb250ZW50OlwiXFxlMDQ2XCJ9LmdseXBoaWNvbi1mb250OmJlZm9yZXtjb250ZW50OlwiXFxlMDQ3XCJ9LmdseXBoaWNvbi1ib2xkOmJlZm9yZXtjb250ZW50OlwiXFxlMDQ4XCJ9LmdseXBoaWNvbi1pdGFsaWM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNDlcIn0uZ2x5cGhpY29uLXRleHQtaGVpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMDUwXCJ9LmdseXBoaWNvbi10ZXh0LXdpZHRoOmJlZm9yZXtjb250ZW50OlwiXFxlMDUxXCJ9LmdseXBoaWNvbi1hbGlnbi1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMDUyXCJ9LmdseXBoaWNvbi1hbGlnbi1jZW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNTNcIn0uZ2x5cGhpY29uLWFsaWduLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMDU0XCJ9LmdseXBoaWNvbi1hbGlnbi1qdXN0aWZ5OmJlZm9yZXtjb250ZW50OlwiXFxlMDU1XCJ9LmdseXBoaWNvbi1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxlMDU2XCJ9LmdseXBoaWNvbi1pbmRlbnQtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTA1N1wifS5nbHlwaGljb24taW5kZW50LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMDU4XCJ9LmdseXBoaWNvbi1mYWNldGltZS12aWRlbzpiZWZvcmV7Y29udGVudDpcIlxcZTA1OVwifS5nbHlwaGljb24tcGljdHVyZTpiZWZvcmV7Y29udGVudDpcIlxcZTA2MFwifS5nbHlwaGljb24tbWFwLW1hcmtlcjpiZWZvcmV7Y29udGVudDpcIlxcZTA2MlwifS5nbHlwaGljb24tYWRqdXN0OmJlZm9yZXtjb250ZW50OlwiXFxlMDYzXCJ9LmdseXBoaWNvbi10aW50OmJlZm9yZXtjb250ZW50OlwiXFxlMDY0XCJ9LmdseXBoaWNvbi1lZGl0OmJlZm9yZXtjb250ZW50OlwiXFxlMDY1XCJ9LmdseXBoaWNvbi1zaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcZTA2NlwifS5nbHlwaGljb24tY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNjdcIn0uZ2x5cGhpY29uLW1vdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNjhcIn0uZ2x5cGhpY29uLXN0ZXAtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNjlcIn0uZ2x5cGhpY29uLWZhc3QtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNzBcIn0uZ2x5cGhpY29uLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxlMDcxXCJ9LmdseXBoaWNvbi1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxlMDcyXCJ9LmdseXBoaWNvbi1wYXVzZTpiZWZvcmV7Y29udGVudDpcIlxcZTA3M1wifS5nbHlwaGljb24tc3RvcDpiZWZvcmV7Y29udGVudDpcIlxcZTA3NFwifS5nbHlwaGljb24tZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZTA3NVwifS5nbHlwaGljb24tZmFzdC1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxlMDc2XCJ9LmdseXBoaWNvbi1zdGVwLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNzdcIn0uZ2x5cGhpY29uLWVqZWN0OmJlZm9yZXtjb250ZW50OlwiXFxlMDc4XCJ9LmdseXBoaWNvbi1jaGV2cm9uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwNzlcIn0uZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwODBcIn0uZ2x5cGhpY29uLXBsdXMtc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZTA4MVwifS5nbHlwaGljb24tbWludXMtc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZTA4MlwifS5nbHlwaGljb24tcmVtb3ZlLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXGUwODNcIn0uZ2x5cGhpY29uLW9rLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXGUwODRcIn0uZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ246YmVmb3Jle2NvbnRlbnQ6XCJcXGUwODVcIn0uZ2x5cGhpY29uLWluZm8tc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZTA4NlwifS5nbHlwaGljb24tc2NyZWVuc2hvdDpiZWZvcmV7Y29udGVudDpcIlxcZTA4N1wifS5nbHlwaGljb24tcmVtb3ZlLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZTA4OFwifS5nbHlwaGljb24tb2stY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxlMDg5XCJ9LmdseXBoaWNvbi1iYW4tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxlMDkwXCJ9LmdseXBoaWNvbi1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMDkxXCJ9LmdseXBoaWNvbi1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTA5MlwifS5nbHlwaGljb24tYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwOTNcIn0uZ2x5cGhpY29uLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUwOTRcIn0uZ2x5cGhpY29uLXNoYXJlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZTA5NVwifS5nbHlwaGljb24tcmVzaXplLWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUwOTZcIn0uZ2x5cGhpY29uLXJlc2l6ZS1zbWFsbDpiZWZvcmV7Y29udGVudDpcIlxcZTA5N1wifS5nbHlwaGljb24tZXhjbGFtYXRpb24tc2lnbjpiZWZvcmV7Y29udGVudDpcIlxcZTEwMVwifS5nbHlwaGljb24tZ2lmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEwMlwifS5nbHlwaGljb24tbGVhZjpiZWZvcmV7Y29udGVudDpcIlxcZTEwM1wifS5nbHlwaGljb24tZmlyZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNFwifS5nbHlwaGljb24tZXllLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDVcIn0uZ2x5cGhpY29uLWV5ZS1jbG9zZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwNlwifS5nbHlwaGljb24td2FybmluZy1zaWduOmJlZm9yZXtjb250ZW50OlwiXFxlMTA3XCJ9LmdseXBoaWNvbi1wbGFuZTpiZWZvcmV7Y29udGVudDpcIlxcZTEwOFwifS5nbHlwaGljb24tY2FsZW5kYXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMDlcIn0uZ2x5cGhpY29uLXJhbmRvbTpiZWZvcmV7Y29udGVudDpcIlxcZTExMFwifS5nbHlwaGljb24tY29tbWVudDpiZWZvcmV7Y29udGVudDpcIlxcZTExMVwifS5nbHlwaGljb24tbWFnbmV0OmJlZm9yZXtjb250ZW50OlwiXFxlMTEyXCJ9LmdseXBoaWNvbi1jaGV2cm9uLXVwOmJlZm9yZXtjb250ZW50OlwiXFxlMTEzXCJ9LmdseXBoaWNvbi1jaGV2cm9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTRcIn0uZ2x5cGhpY29uLXJldHdlZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTVcIn0uZ2x5cGhpY29uLXNob3BwaW5nLWNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMTZcIn0uZ2x5cGhpY29uLWZvbGRlci1jbG9zZTpiZWZvcmV7Y29udGVudDpcIlxcZTExN1wifS5nbHlwaGljb24tZm9sZGVyLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMThcIn0uZ2x5cGhpY29uLXJlc2l6ZS12ZXJ0aWNhbDpiZWZvcmV7Y29udGVudDpcIlxcZTExOVwifS5nbHlwaGljb24tcmVzaXplLWhvcml6b250YWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjBcIn0uZ2x5cGhpY29uLWhkZDpiZWZvcmV7Y29udGVudDpcIlxcZTEyMVwifS5nbHlwaGljb24tYnVsbGhvcm46YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjJcIn0uZ2x5cGhpY29uLWJlbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjNcIn0uZ2x5cGhpY29uLWNlcnRpZmljYXRlOmJlZm9yZXtjb250ZW50OlwiXFxlMTI0XCJ9LmdseXBoaWNvbi10aHVtYnMtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjVcIn0uZ2x5cGhpY29uLXRodW1icy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxlMTI2XCJ9LmdseXBoaWNvbi1oYW5kLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTI3XCJ9LmdseXBoaWNvbi1oYW5kLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjhcIn0uZ2x5cGhpY29uLWhhbmQtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMjlcIn0uZ2x5cGhpY29uLWhhbmQtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZTEzMFwifS5nbHlwaGljb24tY2lyY2xlLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMTMxXCJ9LmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTEzMlwifS5nbHlwaGljb24tY2lyY2xlLWFycm93LXVwOmJlZm9yZXtjb250ZW50OlwiXFxlMTMzXCJ9LmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZTEzNFwifS5nbHlwaGljb24tZ2xvYmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMzVcIn0uZ2x5cGhpY29uLXdyZW5jaDpiZWZvcmV7Y29udGVudDpcIlxcZTEzNlwifS5nbHlwaGljb24tdGFza3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxMzdcIn0uZ2x5cGhpY29uLWZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZTEzOFwifS5nbHlwaGljb24tYnJpZWZjYXNlOmJlZm9yZXtjb250ZW50OlwiXFxlMTM5XCJ9LmdseXBoaWNvbi1mdWxsc2NyZWVuOmJlZm9yZXtjb250ZW50OlwiXFxlMTQwXCJ9LmdseXBoaWNvbi1kYXNoYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNDFcIn0uZ2x5cGhpY29uLXBhcGVyY2xpcDpiZWZvcmV7Y29udGVudDpcIlxcZTE0MlwifS5nbHlwaGljb24taGVhcnQtZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNDNcIn0uZ2x5cGhpY29uLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNDRcIn0uZ2x5cGhpY29uLXBob25lOmJlZm9yZXtjb250ZW50OlwiXFxlMTQ1XCJ9LmdseXBoaWNvbi1wdXNocGluOmJlZm9yZXtjb250ZW50OlwiXFxlMTQ2XCJ9LmdseXBoaWNvbi11c2Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNDhcIn0uZ2x5cGhpY29uLWdicDpiZWZvcmV7Y29udGVudDpcIlxcZTE0OVwifS5nbHlwaGljb24tc29ydDpiZWZvcmV7Y29udGVudDpcIlxcZTE1MFwifS5nbHlwaGljb24tc29ydC1ieS1hbHBoYWJldDpiZWZvcmV7Y29udGVudDpcIlxcZTE1MVwifS5nbHlwaGljb24tc29ydC1ieS1hbHBoYWJldC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNTJcIn0uZ2x5cGhpY29uLXNvcnQtYnktb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNTNcIn0uZ2x5cGhpY29uLXNvcnQtYnktb3JkZXItYWx0OmJlZm9yZXtjb250ZW50OlwiXFxlMTU0XCJ9LmdseXBoaWNvbi1zb3J0LWJ5LWF0dHJpYnV0ZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNTVcIn0uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNTZcIn0uZ2x5cGhpY29uLXVuY2hlY2tlZDpiZWZvcmV7Y29udGVudDpcIlxcZTE1N1wifS5nbHlwaGljb24tZXhwYW5kOmJlZm9yZXtjb250ZW50OlwiXFxlMTU4XCJ9LmdseXBoaWNvbi1jb2xsYXBzZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxlMTU5XCJ9LmdseXBoaWNvbi1jb2xsYXBzZS11cDpiZWZvcmV7Y29udGVudDpcIlxcZTE2MFwifS5nbHlwaGljb24tbG9nLWluOmJlZm9yZXtjb250ZW50OlwiXFxlMTYxXCJ9LmdseXBoaWNvbi1mbGFzaDpiZWZvcmV7Y29udGVudDpcIlxcZTE2MlwifS5nbHlwaGljb24tbG9nLW91dDpiZWZvcmV7Y29udGVudDpcIlxcZTE2M1wifS5nbHlwaGljb24tbmV3LXdpbmRvdzpiZWZvcmV7Y29udGVudDpcIlxcZTE2NFwifS5nbHlwaGljb24tcmVjb3JkOmJlZm9yZXtjb250ZW50OlwiXFxlMTY1XCJ9LmdseXBoaWNvbi1zYXZlOmJlZm9yZXtjb250ZW50OlwiXFxlMTY2XCJ9LmdseXBoaWNvbi1vcGVuOmJlZm9yZXtjb250ZW50OlwiXFxlMTY3XCJ9LmdseXBoaWNvbi1zYXZlZDpiZWZvcmV7Y29udGVudDpcIlxcZTE2OFwifS5nbHlwaGljb24taW1wb3J0OmJlZm9yZXtjb250ZW50OlwiXFxlMTY5XCJ9LmdseXBoaWNvbi1leHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNzBcIn0uZ2x5cGhpY29uLXNlbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNzFcIn0uZ2x5cGhpY29uLWZsb3BweS1kaXNrOmJlZm9yZXtjb250ZW50OlwiXFxlMTcyXCJ9LmdseXBoaWNvbi1mbG9wcHktc2F2ZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNzNcIn0uZ2x5cGhpY29uLWZsb3BweS1yZW1vdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNzRcIn0uZ2x5cGhpY29uLWZsb3BweS1zYXZlOmJlZm9yZXtjb250ZW50OlwiXFxlMTc1XCJ9LmdseXBoaWNvbi1mbG9wcHktb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZTE3NlwifS5nbHlwaGljb24tY3JlZGl0LWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxNzdcIn0uZ2x5cGhpY29uLXRyYW5zZmVyOmJlZm9yZXtjb250ZW50OlwiXFxlMTc4XCJ9LmdseXBoaWNvbi1jdXRsZXJ5OmJlZm9yZXtjb250ZW50OlwiXFxlMTc5XCJ9LmdseXBoaWNvbi1oZWFkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxODBcIn0uZ2x5cGhpY29uLWNvbXByZXNzZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxODFcIn0uZ2x5cGhpY29uLWVhcnBob25lOmJlZm9yZXtjb250ZW50OlwiXFxlMTgyXCJ9LmdseXBoaWNvbi1waG9uZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxODNcIn0uZ2x5cGhpY29uLXRvd2VyOmJlZm9yZXtjb250ZW50OlwiXFxlMTg0XCJ9LmdseXBoaWNvbi1zdGF0czpiZWZvcmV7Y29udGVudDpcIlxcZTE4NVwifS5nbHlwaGljb24tc2QtdmlkZW86YmVmb3Jle2NvbnRlbnQ6XCJcXGUxODZcIn0uZ2x5cGhpY29uLWhkLXZpZGVvOmJlZm9yZXtjb250ZW50OlwiXFxlMTg3XCJ9LmdseXBoaWNvbi1zdWJ0aXRsZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxODhcIn0uZ2x5cGhpY29uLXNvdW5kLXN0ZXJlbzpiZWZvcmV7Y29udGVudDpcIlxcZTE4OVwifS5nbHlwaGljb24tc291bmQtZG9sYnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxOTBcIn0uZ2x5cGhpY29uLXNvdW5kLTUtMTpiZWZvcmV7Y29udGVudDpcIlxcZTE5MVwifS5nbHlwaGljb24tc291bmQtNi0xOmJlZm9yZXtjb250ZW50OlwiXFxlMTkyXCJ9LmdseXBoaWNvbi1zb3VuZC03LTE6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxOTNcIn0uZ2x5cGhpY29uLWNvcHlyaWdodC1tYXJrOmJlZm9yZXtjb250ZW50OlwiXFxlMTk0XCJ9LmdseXBoaWNvbi1yZWdpc3RyYXRpb24tbWFyazpiZWZvcmV7Y29udGVudDpcIlxcZTE5NVwifS5nbHlwaGljb24tY2xvdWQtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUxOTdcIn0uZ2x5cGhpY29uLWNsb3VkLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcIlxcZTE5OFwifS5nbHlwaGljb24tdHJlZS1jb25pZmVyOmJlZm9yZXtjb250ZW50OlwiXFxlMTk5XCJ9LmdseXBoaWNvbi10cmVlLWRlY2lkdW91czpiZWZvcmV7Y29udGVudDpcIlxcZTIwMFwifS5nbHlwaGljb24tY2Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMDFcIn0uZ2x5cGhpY29uLXNhdmUtZmlsZTpiZWZvcmV7Y29udGVudDpcIlxcZTIwMlwifS5nbHlwaGljb24tb3Blbi1maWxlOmJlZm9yZXtjb250ZW50OlwiXFxlMjAzXCJ9LmdseXBoaWNvbi1sZXZlbC11cDpiZWZvcmV7Y29udGVudDpcIlxcZTIwNFwifS5nbHlwaGljb24tY29weTpiZWZvcmV7Y29udGVudDpcIlxcZTIwNVwifS5nbHlwaGljb24tcGFzdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMDZcIn0uZ2x5cGhpY29uLWFsZXJ0OmJlZm9yZXtjb250ZW50OlwiXFxlMjA5XCJ9LmdseXBoaWNvbi1lcXVhbGl6ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMTBcIn0uZ2x5cGhpY29uLWtpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMTFcIn0uZ2x5cGhpY29uLXF1ZWVuOmJlZm9yZXtjb250ZW50OlwiXFxlMjEyXCJ9LmdseXBoaWNvbi1wYXduOmJlZm9yZXtjb250ZW50OlwiXFxlMjEzXCJ9LmdseXBoaWNvbi1iaXNob3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMTRcIn0uZ2x5cGhpY29uLWtuaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZTIxNVwifS5nbHlwaGljb24tYmFieS1mb3JtdWxhOmJlZm9yZXtjb250ZW50OlwiXFxlMjE2XCJ9LmdseXBoaWNvbi10ZW50OmJlZm9yZXtjb250ZW50OlwiXFwyNmZhXCJ9LmdseXBoaWNvbi1ibGFja2JvYXJkOmJlZm9yZXtjb250ZW50OlwiXFxlMjE4XCJ9LmdseXBoaWNvbi1iZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMTlcIn0uZ2x5cGhpY29uLWFwcGxlOmJlZm9yZXtjb250ZW50OlwiXFxmOGZmXCJ9LmdseXBoaWNvbi1lcmFzZTpiZWZvcmV7Y29udGVudDpcIlxcZTIyMVwifS5nbHlwaGljb24taG91cmdsYXNzOmJlZm9yZXtjb250ZW50OlwiXFwyMzFiXCJ9LmdseXBoaWNvbi1sYW1wOmJlZm9yZXtjb250ZW50OlwiXFxlMjIzXCJ9LmdseXBoaWNvbi1kdXBsaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMjRcIn0uZ2x5cGhpY29uLXBpZ2d5LWJhbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMjVcIn0uZ2x5cGhpY29uLXNjaXNzb3JzOmJlZm9yZXtjb250ZW50OlwiXFxlMjI2XCJ9LmdseXBoaWNvbi1iaXRjb2luOmJlZm9yZXtjb250ZW50OlwiXFxlMjI3XCJ9LmdseXBoaWNvbi1idGM6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMjdcIn0uZ2x5cGhpY29uLXhidDpiZWZvcmV7Y29udGVudDpcIlxcZTIyN1wifS5nbHlwaGljb24teWVuOmJlZm9yZXtjb250ZW50OlwiXFwwMGE1XCJ9LmdseXBoaWNvbi1qcHk6YmVmb3Jle2NvbnRlbnQ6XCJcXDAwYTVcIn0uZ2x5cGhpY29uLXJ1YmxlOmJlZm9yZXtjb250ZW50OlwiXFwyMGJkXCJ9LmdseXBoaWNvbi1ydWI6YmVmb3Jle2NvbnRlbnQ6XCJcXDIwYmRcIn0uZ2x5cGhpY29uLXNjYWxlOmJlZm9yZXtjb250ZW50OlwiXFxlMjMwXCJ9LmdseXBoaWNvbi1pY2UtbG9sbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMzFcIn0uZ2x5cGhpY29uLWljZS1sb2xseS10YXN0ZWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMzJcIn0uZ2x5cGhpY29uLWVkdWNhdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZTIzM1wifS5nbHlwaGljb24tb3B0aW9uLWhvcml6b250YWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMzRcIn0uZ2x5cGhpY29uLW9wdGlvbi12ZXJ0aWNhbDpiZWZvcmV7Y29udGVudDpcIlxcZTIzNVwifS5nbHlwaGljb24tbWVudS1oYW1idXJnZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyMzZcIn0uZ2x5cGhpY29uLW1vZGFsLXdpbmRvdzpiZWZvcmV7Y29udGVudDpcIlxcZTIzN1wifS5nbHlwaGljb24tb2lsOmJlZm9yZXtjb250ZW50OlwiXFxlMjM4XCJ9LmdseXBoaWNvbi1ncmFpbjpiZWZvcmV7Y29udGVudDpcIlxcZTIzOVwifS5nbHlwaGljb24tc3VuZ2xhc3NlczpiZWZvcmV7Y29udGVudDpcIlxcZTI0MFwifS5nbHlwaGljb24tdGV4dC1zaXplOmJlZm9yZXtjb250ZW50OlwiXFxlMjQxXCJ9LmdseXBoaWNvbi10ZXh0LWNvbG9yOmJlZm9yZXtjb250ZW50OlwiXFxlMjQyXCJ9LmdseXBoaWNvbi10ZXh0LWJhY2tncm91bmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNDNcIn0uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi10b3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNDRcIn0uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi1ib3R0b206YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNDVcIn0uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi1ob3Jpem9udGFsOmJlZm9yZXtjb250ZW50OlwiXFxlMjQ2XCJ9LmdseXBoaWNvbi1vYmplY3QtYWxpZ24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZTI0N1wifS5nbHlwaGljb24tb2JqZWN0LWFsaWduLXZlcnRpY2FsOmJlZm9yZXtjb250ZW50OlwiXFxlMjQ4XCJ9LmdseXBoaWNvbi1vYmplY3QtYWxpZ24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNDlcIn0uZ2x5cGhpY29uLXRyaWFuZ2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMjUwXCJ9LmdseXBoaWNvbi10cmlhbmdsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMjUxXCJ9LmdseXBoaWNvbi10cmlhbmdsZS1ib3R0b206YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNTJcIn0uZ2x5cGhpY29uLXRyaWFuZ2xlLXRvcDpiZWZvcmV7Y29udGVudDpcIlxcZTI1M1wifS5nbHlwaGljb24tY29uc29sZTpiZWZvcmV7Y29udGVudDpcIlxcZTI1NFwifS5nbHlwaGljb24tc3VwZXJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNTVcIn0uZ2x5cGhpY29uLXN1YnNjcmlwdDpiZWZvcmV7Y29udGVudDpcIlxcZTI1NlwifS5nbHlwaGljb24tbWVudS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxlMjU3XCJ9LmdseXBoaWNvbi1tZW51LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxlMjU4XCJ9LmdseXBoaWNvbi1tZW51LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNTlcIn0uZ2x5cGhpY29uLW1lbnUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGUyNjBcIn0qey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06YWZ0ZXIsOmJlZm9yZXstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbHtmb250LXNpemU6MTBweDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX1ib2R5e2ZvbnQtZmFtaWx5OlwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmfWJ1dHRvbixpbnB1dCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fWF7Y29sb3I6IzMzN2FiNzt0ZXh0LWRlY29yYXRpb246bm9uZX1hOmZvY3VzLGE6aG92ZXJ7Y29sb3I6IzIzNTI3Yzt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfWE6Zm9jdXN7b3V0bGluZTo1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7b3V0bGluZS1vZmZzZXQ6LTJweH1maWd1cmV7bWFyZ2luOjB9aW1ne3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+YT5pbWcsLmNhcm91c2VsLWlubmVyPi5pdGVtPmltZywuaW1nLXJlc3BvbnNpdmUsLnRodW1ibmFpbCBhPmltZywudGh1bWJuYWlsPmltZ3tkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5pbWctcm91bmRlZHtib3JkZXItcmFkaXVzOjZweH0uaW1nLXRodW1ibmFpbHtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztwYWRkaW5nOjRweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjphbGwgLjJzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4ycyBlYXNlLWluLW91dH0uaW1nLWNpcmNsZXtib3JkZXItcmFkaXVzOjUwJX1ocnttYXJnaW4tdG9wOjIwcHg7bWFyZ2luLWJvdHRvbToyMHB4O2JvcmRlcjowO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWV9LnNyLW9ubHl7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwwLDAsMCk7Ym9yZGVyOjB9LnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwuc3Itb25seS1mb2N1c2FibGU6Zm9jdXN7cG9zaXRpb246c3RhdGljO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtjbGlwOmF1dG99W3JvbGU9YnV0dG9uXXtjdXJzb3I6cG9pbnRlcn0uaDEsLmgyLC5oMywuaDQsLmg1LC5oNixoMSxoMixoMyxoNCxoNSxoNntmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoxLjE7Y29sb3I6aW5oZXJpdH0uaDEgLnNtYWxsLC5oMSBzbWFsbCwuaDIgLnNtYWxsLC5oMiBzbWFsbCwuaDMgLnNtYWxsLC5oMyBzbWFsbCwuaDQgLnNtYWxsLC5oNCBzbWFsbCwuaDUgLnNtYWxsLC5oNSBzbWFsbCwuaDYgLnNtYWxsLC5oNiBzbWFsbCxoMSAuc21hbGwsaDEgc21hbGwsaDIgLnNtYWxsLGgyIHNtYWxsLGgzIC5zbWFsbCxoMyBzbWFsbCxoNCAuc21hbGwsaDQgc21hbGwsaDUgLnNtYWxsLGg1IHNtYWxsLGg2IC5zbWFsbCxoNiBzbWFsbHtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MTtjb2xvcjojNzc3fS5oMSwuaDIsLmgzLGgxLGgyLGgze21hcmdpbi10b3A6MjBweDttYXJnaW4tYm90dG9tOjEwcHh9LmgxIC5zbWFsbCwuaDEgc21hbGwsLmgyIC5zbWFsbCwuaDIgc21hbGwsLmgzIC5zbWFsbCwuaDMgc21hbGwsaDEgLnNtYWxsLGgxIHNtYWxsLGgyIC5zbWFsbCxoMiBzbWFsbCxoMyAuc21hbGwsaDMgc21hbGx7Zm9udC1zaXplOjY1JX0uaDQsLmg1LC5oNixoNCxoNSxoNnttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4fS5oNCAuc21hbGwsLmg0IHNtYWxsLC5oNSAuc21hbGwsLmg1IHNtYWxsLC5oNiAuc21hbGwsLmg2IHNtYWxsLGg0IC5zbWFsbCxoNCBzbWFsbCxoNSAuc21hbGwsaDUgc21hbGwsaDYgLnNtYWxsLGg2IHNtYWxse2ZvbnQtc2l6ZTo3NSV9LmgxLGgxe2ZvbnQtc2l6ZTozNnB4fS5oMixoMntmb250LXNpemU6MzBweH0uaDMsaDN7Zm9udC1zaXplOjI0cHh9Lmg0LGg0e2ZvbnQtc2l6ZToxOHB4fS5oNSxoNXtmb250LXNpemU6MTRweH0uaDYsaDZ7Zm9udC1zaXplOjEycHh9cHttYXJnaW46MCAwIDEwcHh9LmxlYWR7bWFyZ2luLWJvdHRvbToyMHB4O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDoxLjR9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5sZWFke2ZvbnQtc2l6ZToyMXB4fX0uc21hbGwsc21hbGx7Zm9udC1zaXplOjg1JX0ubWFyayxtYXJre3BhZGRpbmc6LjJlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTN9LnRleHQtbGVmdHt0ZXh0LWFsaWduOmxlZnR9LnRleHQtcmlnaHR7dGV4dC1hbGlnbjpyaWdodH0udGV4dC1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnRleHQtanVzdGlmeXt0ZXh0LWFsaWduOmp1c3RpZnl9LnRleHQtbm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0udGV4dC1sb3dlcmNhc2V7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfS50ZXh0LXVwcGVyY2FzZXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LnRleHQtY2FwaXRhbGl6ZXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfS50ZXh0LW11dGVke2NvbG9yOiM3Nzd9LnRleHQtcHJpbWFyeXtjb2xvcjojMzM3YWI3fWEudGV4dC1wcmltYXJ5OmZvY3VzLGEudGV4dC1wcmltYXJ5OmhvdmVye2NvbG9yOiMyODYwOTB9LnRleHQtc3VjY2Vzc3tjb2xvcjojM2M3NjNkfWEudGV4dC1zdWNjZXNzOmZvY3VzLGEudGV4dC1zdWNjZXNzOmhvdmVye2NvbG9yOiMyYjU0MmN9LnRleHQtaW5mb3tjb2xvcjojMzE3MDhmfWEudGV4dC1pbmZvOmZvY3VzLGEudGV4dC1pbmZvOmhvdmVye2NvbG9yOiMyNDUyNjl9LnRleHQtd2FybmluZ3tjb2xvcjojOGE2ZDNifWEudGV4dC13YXJuaW5nOmZvY3VzLGEudGV4dC13YXJuaW5nOmhvdmVye2NvbG9yOiM2NjUxMmN9LnRleHQtZGFuZ2Vye2NvbG9yOiNhOTQ0NDJ9YS50ZXh0LWRhbmdlcjpmb2N1cyxhLnRleHQtZGFuZ2VyOmhvdmVye2NvbG9yOiM4NDM1MzR9LmJnLXByaW1hcnl7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9YS5iZy1wcmltYXJ5OmZvY3VzLGEuYmctcHJpbWFyeTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyODYwOTB9LmJnLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4fWEuYmctc3VjY2Vzczpmb2N1cyxhLmJnLXN1Y2Nlc3M6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYzFlMmIzfS5iZy1pbmZve2JhY2tncm91bmQtY29sb3I6I2Q5ZWRmN31hLmJnLWluZm86Zm9jdXMsYS5iZy1pbmZvOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2FmZDllZX0uYmctd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTN9YS5iZy13YXJuaW5nOmZvY3VzLGEuYmctd2FybmluZzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmN2VjYjV9LmJnLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGV9YS5iZy1kYW5nZXI6Zm9jdXMsYS5iZy1kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZTRiOWI5fS5wYWdlLWhlYWRlcntwYWRkaW5nLWJvdHRvbTo5cHg7bWFyZ2luOjQwcHggMCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlZWV9b2wsdWx7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MTBweH1vbCBvbCxvbCB1bCx1bCBvbCx1bCB1bHttYXJnaW4tYm90dG9tOjB9Lmxpc3QtdW5zdHlsZWR7cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZTpub25lfS5saXN0LWlubGluZXtwYWRkaW5nLWxlZnQ6MDttYXJnaW4tbGVmdDotNXB4O2xpc3Qtc3R5bGU6bm9uZX0ubGlzdC1pbmxpbmU+bGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1yaWdodDo1cHg7cGFkZGluZy1sZWZ0OjVweH1kbHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToyMHB4fWRkLGR0e2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDN9ZHR7Zm9udC13ZWlnaHQ6NzAwfWRke21hcmdpbi1sZWZ0OjB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5kbC1ob3Jpem9udGFsIGR0e2Zsb2F0OmxlZnQ7d2lkdGg6MTYwcHg7b3ZlcmZsb3c6aGlkZGVuO2NsZWFyOmxlZnQ7dGV4dC1hbGlnbjpyaWdodDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0uZGwtaG9yaXpvbnRhbCBkZHttYXJnaW4tbGVmdDoxODBweH19YWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSxhYmJyW3RpdGxlXXtjdXJzb3I6aGVscDtib3JkZXItYm90dG9tOjFweCBkb3R0ZWQgIzc3N30uaW5pdGlhbGlzbXtmb250LXNpemU6OTAlO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1ibG9ja3F1b3Rle3BhZGRpbmc6MTBweCAyMHB4O21hcmdpbjowIDAgMjBweDtmb250LXNpemU6MTcuNXB4O2JvcmRlci1sZWZ0OjVweCBzb2xpZCAjZWVlfWJsb2NrcXVvdGUgb2w6bGFzdC1jaGlsZCxibG9ja3F1b3RlIHA6bGFzdC1jaGlsZCxibG9ja3F1b3RlIHVsOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfWJsb2NrcXVvdGUgLnNtYWxsLGJsb2NrcXVvdGUgZm9vdGVyLGJsb2NrcXVvdGUgc21hbGx7ZGlzcGxheTpibG9jaztmb250LXNpemU6ODAlO2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7Y29sb3I6Izc3N31ibG9ja3F1b3RlIC5zbWFsbDpiZWZvcmUsYmxvY2txdW90ZSBmb290ZXI6YmVmb3JlLGJsb2NrcXVvdGUgc21hbGw6YmVmb3Jle2NvbnRlbnQ6J1xcMjAxNCBcXDAwQTAnfS5ibG9ja3F1b3RlLXJldmVyc2UsYmxvY2txdW90ZS5wdWxsLXJpZ2h0e3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLWxlZnQ6MDt0ZXh0LWFsaWduOnJpZ2h0O2JvcmRlci1yaWdodDo1cHggc29saWQgI2VlZTtib3JkZXItbGVmdDowfS5ibG9ja3F1b3RlLXJldmVyc2UgLnNtYWxsOmJlZm9yZSwuYmxvY2txdW90ZS1yZXZlcnNlIGZvb3RlcjpiZWZvcmUsLmJsb2NrcXVvdGUtcmV2ZXJzZSBzbWFsbDpiZWZvcmUsYmxvY2txdW90ZS5wdWxsLXJpZ2h0IC5zbWFsbDpiZWZvcmUsYmxvY2txdW90ZS5wdWxsLXJpZ2h0IGZvb3RlcjpiZWZvcmUsYmxvY2txdW90ZS5wdWxsLXJpZ2h0IHNtYWxsOmJlZm9yZXtjb250ZW50OicnfS5ibG9ja3F1b3RlLXJldmVyc2UgLnNtYWxsOmFmdGVyLC5ibG9ja3F1b3RlLXJldmVyc2UgZm9vdGVyOmFmdGVyLC5ibG9ja3F1b3RlLXJldmVyc2Ugc21hbGw6YWZ0ZXIsYmxvY2txdW90ZS5wdWxsLXJpZ2h0IC5zbWFsbDphZnRlcixibG9ja3F1b3RlLnB1bGwtcmlnaHQgZm9vdGVyOmFmdGVyLGJsb2NrcXVvdGUucHVsbC1yaWdodCBzbWFsbDphZnRlcntjb250ZW50OidcXDAwQTAgXFwyMDE0J31hZGRyZXNze21hcmdpbi1ib3R0b206MjBweDtmb250LXN0eWxlOm5vcm1hbDtsaW5lLWhlaWdodDoxLjQyODU3MTQzfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Ok1lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlfWNvZGV7cGFkZGluZzoycHggNHB4O2ZvbnQtc2l6ZTo5MCU7Y29sb3I6I2M3MjU0ZTtiYWNrZ3JvdW5kLWNvbG9yOiNmOWYyZjQ7Ym9yZGVyLXJhZGl1czo0cHh9a2Jke3BhZGRpbmc6MnB4IDRweDtmb250LXNpemU6OTAlO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzMzO2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4yNSk7Ym94LXNoYWRvdzppbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4yNSl9a2JkIGtiZHtwYWRkaW5nOjA7Zm9udC1zaXplOjEwMCU7Zm9udC13ZWlnaHQ6NzAwOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX1wcmV7ZGlzcGxheTpibG9jaztwYWRkaW5nOjkuNXB4O21hcmdpbjowIDAgMTBweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiMzMzM7d29yZC1icmVhazpicmVhay1hbGw7d29yZC13cmFwOmJyZWFrLXdvcmQ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjRweH1wcmUgY29kZXtwYWRkaW5nOjA7Zm9udC1zaXplOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MH0ucHJlLXNjcm9sbGFibGV7bWF4LWhlaWdodDozNDBweDtvdmVyZmxvdy15OnNjcm9sbH0uY29udGFpbmVye3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLWxlZnQ6MTVweDttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tbGVmdDphdXRvfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuY29udGFpbmVye3dpZHRoOjc1MHB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmNvbnRhaW5lcnt3aWR0aDo5NzBweH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuY29udGFpbmVye3dpZHRoOjExNzBweH19LmNvbnRhaW5lci1mbHVpZHtwYWRkaW5nLXJpZ2h0OjE1cHg7cGFkZGluZy1sZWZ0OjE1cHg7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0b30ucm93e21hcmdpbi1yaWdodDotMTVweDttYXJnaW4tbGVmdDotMTVweH0uY29sLWxnLTEsLmNvbC1sZy0xMCwuY29sLWxnLTExLC5jb2wtbGctMTIsLmNvbC1sZy0yLC5jb2wtbGctMywuY29sLWxnLTQsLmNvbC1sZy01LC5jb2wtbGctNiwuY29sLWxnLTcsLmNvbC1sZy04LC5jb2wtbGctOSwuY29sLW1kLTEsLmNvbC1tZC0xMCwuY29sLW1kLTExLC5jb2wtbWQtMTIsLmNvbC1tZC0yLC5jb2wtbWQtMywuY29sLW1kLTQsLmNvbC1tZC01LC5jb2wtbWQtNiwuY29sLW1kLTcsLmNvbC1tZC04LC5jb2wtbWQtOSwuY29sLXNtLTEsLmNvbC1zbS0xMCwuY29sLXNtLTExLC5jb2wtc20tMTIsLmNvbC1zbS0yLC5jb2wtc20tMywuY29sLXNtLTQsLmNvbC1zbS01LC5jb2wtc20tNiwuY29sLXNtLTcsLmNvbC1zbS04LC5jb2wtc20tOSwuY29sLXhzLTEsLmNvbC14cy0xMCwuY29sLXhzLTExLC5jb2wteHMtMTIsLmNvbC14cy0yLC5jb2wteHMtMywuY29sLXhzLTQsLmNvbC14cy01LC5jb2wteHMtNiwuY29sLXhzLTcsLmNvbC14cy04LC5jb2wteHMtOXtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjFweDtwYWRkaW5nLXJpZ2h0OjE1cHg7cGFkZGluZy1sZWZ0OjE1cHh9LmNvbC14cy0xLC5jb2wteHMtMTAsLmNvbC14cy0xMSwuY29sLXhzLTEyLC5jb2wteHMtMiwuY29sLXhzLTMsLmNvbC14cy00LC5jb2wteHMtNSwuY29sLXhzLTYsLmNvbC14cy03LC5jb2wteHMtOCwuY29sLXhzLTl7ZmxvYXQ6bGVmdH0uY29sLXhzLTEye3dpZHRoOjEwMCV9LmNvbC14cy0xMXt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC14cy0xMHt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC14cy05e3dpZHRoOjc1JX0uY29sLXhzLTh7d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wteHMtN3t3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC14cy02e3dpZHRoOjUwJX0uY29sLXhzLTV7d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wteHMtNHt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC14cy0ze3dpZHRoOjI1JX0uY29sLXhzLTJ7d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wteHMtMXt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLXhzLXB1bGwtMTJ7cmlnaHQ6MTAwJX0uY29sLXhzLXB1bGwtMTF7cmlnaHQ6OTEuNjY2NjY2NjclfS5jb2wteHMtcHVsbC0xMHtyaWdodDo4My4zMzMzMzMzMyV9LmNvbC14cy1wdWxsLTl7cmlnaHQ6NzUlfS5jb2wteHMtcHVsbC04e3JpZ2h0OjY2LjY2NjY2NjY3JX0uY29sLXhzLXB1bGwtN3tyaWdodDo1OC4zMzMzMzMzMyV9LmNvbC14cy1wdWxsLTZ7cmlnaHQ6NTAlfS5jb2wteHMtcHVsbC01e3JpZ2h0OjQxLjY2NjY2NjY3JX0uY29sLXhzLXB1bGwtNHtyaWdodDozMy4zMzMzMzMzMyV9LmNvbC14cy1wdWxsLTN7cmlnaHQ6MjUlfS5jb2wteHMtcHVsbC0ye3JpZ2h0OjE2LjY2NjY2NjY3JX0uY29sLXhzLXB1bGwtMXtyaWdodDo4LjMzMzMzMzMzJX0uY29sLXhzLXB1bGwtMHtyaWdodDphdXRvfS5jb2wteHMtcHVzaC0xMntsZWZ0OjEwMCV9LmNvbC14cy1wdXNoLTExe2xlZnQ6OTEuNjY2NjY2NjclfS5jb2wteHMtcHVzaC0xMHtsZWZ0OjgzLjMzMzMzMzMzJX0uY29sLXhzLXB1c2gtOXtsZWZ0Ojc1JX0uY29sLXhzLXB1c2gtOHtsZWZ0OjY2LjY2NjY2NjY3JX0uY29sLXhzLXB1c2gtN3tsZWZ0OjU4LjMzMzMzMzMzJX0uY29sLXhzLXB1c2gtNntsZWZ0OjUwJX0uY29sLXhzLXB1c2gtNXtsZWZ0OjQxLjY2NjY2NjY3JX0uY29sLXhzLXB1c2gtNHtsZWZ0OjMzLjMzMzMzMzMzJX0uY29sLXhzLXB1c2gtM3tsZWZ0OjI1JX0uY29sLXhzLXB1c2gtMntsZWZ0OjE2LjY2NjY2NjY3JX0uY29sLXhzLXB1c2gtMXtsZWZ0OjguMzMzMzMzMzMlfS5jb2wteHMtcHVzaC0we2xlZnQ6YXV0b30uY29sLXhzLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfS5jb2wteHMtb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uY29sLXhzLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9LmNvbC14cy1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbC14cy1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9LmNvbC14cy1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9LmNvbC14cy1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbC14cy1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9LmNvbC14cy1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9LmNvbC14cy1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbC14cy1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9LmNvbC14cy1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0uY29sLXhzLW9mZnNldC0we21hcmdpbi1sZWZ0OjB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5jb2wtc20tMSwuY29sLXNtLTEwLC5jb2wtc20tMTEsLmNvbC1zbS0xMiwuY29sLXNtLTIsLmNvbC1zbS0zLC5jb2wtc20tNCwuY29sLXNtLTUsLmNvbC1zbS02LC5jb2wtc20tNywuY29sLXNtLTgsLmNvbC1zbS05e2Zsb2F0OmxlZnR9LmNvbC1zbS0xMnt3aWR0aDoxMDAlfS5jb2wtc20tMTF7d2lkdGg6OTEuNjY2NjY2NjclfS5jb2wtc20tMTB7d2lkdGg6ODMuMzMzMzMzMzMlfS5jb2wtc20tOXt3aWR0aDo3NSV9LmNvbC1zbS04e3dpZHRoOjY2LjY2NjY2NjY3JX0uY29sLXNtLTd7d2lkdGg6NTguMzMzMzMzMzMlfS5jb2wtc20tNnt3aWR0aDo1MCV9LmNvbC1zbS01e3dpZHRoOjQxLjY2NjY2NjY3JX0uY29sLXNtLTR7d2lkdGg6MzMuMzMzMzMzMzMlfS5jb2wtc20tM3t3aWR0aDoyNSV9LmNvbC1zbS0ye3dpZHRoOjE2LjY2NjY2NjY3JX0uY29sLXNtLTF7d2lkdGg6OC4zMzMzMzMzMyV9LmNvbC1zbS1wdWxsLTEye3JpZ2h0OjEwMCV9LmNvbC1zbS1wdWxsLTExe3JpZ2h0OjkxLjY2NjY2NjY3JX0uY29sLXNtLXB1bGwtMTB7cmlnaHQ6ODMuMzMzMzMzMzMlfS5jb2wtc20tcHVsbC05e3JpZ2h0Ojc1JX0uY29sLXNtLXB1bGwtOHtyaWdodDo2Ni42NjY2NjY2NyV9LmNvbC1zbS1wdWxsLTd7cmlnaHQ6NTguMzMzMzMzMzMlfS5jb2wtc20tcHVsbC02e3JpZ2h0OjUwJX0uY29sLXNtLXB1bGwtNXtyaWdodDo0MS42NjY2NjY2NyV9LmNvbC1zbS1wdWxsLTR7cmlnaHQ6MzMuMzMzMzMzMzMlfS5jb2wtc20tcHVsbC0ze3JpZ2h0OjI1JX0uY29sLXNtLXB1bGwtMntyaWdodDoxNi42NjY2NjY2NyV9LmNvbC1zbS1wdWxsLTF7cmlnaHQ6OC4zMzMzMzMzMyV9LmNvbC1zbS1wdWxsLTB7cmlnaHQ6YXV0b30uY29sLXNtLXB1c2gtMTJ7bGVmdDoxMDAlfS5jb2wtc20tcHVzaC0xMXtsZWZ0OjkxLjY2NjY2NjY3JX0uY29sLXNtLXB1c2gtMTB7bGVmdDo4My4zMzMzMzMzMyV9LmNvbC1zbS1wdXNoLTl7bGVmdDo3NSV9LmNvbC1zbS1wdXNoLTh7bGVmdDo2Ni42NjY2NjY2NyV9LmNvbC1zbS1wdXNoLTd7bGVmdDo1OC4zMzMzMzMzMyV9LmNvbC1zbS1wdXNoLTZ7bGVmdDo1MCV9LmNvbC1zbS1wdXNoLTV7bGVmdDo0MS42NjY2NjY2NyV9LmNvbC1zbS1wdXNoLTR7bGVmdDozMy4zMzMzMzMzMyV9LmNvbC1zbS1wdXNoLTN7bGVmdDoyNSV9LmNvbC1zbS1wdXNoLTJ7bGVmdDoxNi42NjY2NjY2NyV9LmNvbC1zbS1wdXNoLTF7bGVmdDo4LjMzMzMzMzMzJX0uY29sLXNtLXB1c2gtMHtsZWZ0OmF1dG99LmNvbC1zbS1vZmZzZXQtMTJ7bWFyZ2luLWxlZnQ6MTAwJX0uY29sLXNtLW9mZnNldC0xMXttYXJnaW4tbGVmdDo5MS42NjY2NjY2NyV9LmNvbC1zbS1vZmZzZXQtMTB7bWFyZ2luLWxlZnQ6ODMuMzMzMzMzMzMlfS5jb2wtc20tb2Zmc2V0LTl7bWFyZ2luLWxlZnQ6NzUlfS5jb2wtc20tb2Zmc2V0LTh7bWFyZ2luLWxlZnQ6NjYuNjY2NjY2NjclfS5jb2wtc20tb2Zmc2V0LTd7bWFyZ2luLWxlZnQ6NTguMzMzMzMzMzMlfS5jb2wtc20tb2Zmc2V0LTZ7bWFyZ2luLWxlZnQ6NTAlfS5jb2wtc20tb2Zmc2V0LTV7bWFyZ2luLWxlZnQ6NDEuNjY2NjY2NjclfS5jb2wtc20tb2Zmc2V0LTR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMzMzMlfS5jb2wtc20tb2Zmc2V0LTN7bWFyZ2luLWxlZnQ6MjUlfS5jb2wtc20tb2Zmc2V0LTJ7bWFyZ2luLWxlZnQ6MTYuNjY2NjY2NjclfS5jb2wtc20tb2Zmc2V0LTF7bWFyZ2luLWxlZnQ6OC4zMzMzMzMzMyV9LmNvbC1zbS1vZmZzZXQtMHttYXJnaW4tbGVmdDowfX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7LmNvbC1tZC0xLC5jb2wtbWQtMTAsLmNvbC1tZC0xMSwuY29sLW1kLTEyLC5jb2wtbWQtMiwuY29sLW1kLTMsLmNvbC1tZC00LC5jb2wtbWQtNSwuY29sLW1kLTYsLmNvbC1tZC03LC5jb2wtbWQtOCwuY29sLW1kLTl7ZmxvYXQ6bGVmdH0uY29sLW1kLTEye3dpZHRoOjEwMCV9LmNvbC1tZC0xMXt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC1tZC0xMHt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC1tZC05e3dpZHRoOjc1JX0uY29sLW1kLTh7d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wtbWQtN3t3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC1tZC02e3dpZHRoOjUwJX0uY29sLW1kLTV7d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wtbWQtNHt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC1tZC0ze3dpZHRoOjI1JX0uY29sLW1kLTJ7d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtbWQtMXt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLW1kLXB1bGwtMTJ7cmlnaHQ6MTAwJX0uY29sLW1kLXB1bGwtMTF7cmlnaHQ6OTEuNjY2NjY2NjclfS5jb2wtbWQtcHVsbC0xMHtyaWdodDo4My4zMzMzMzMzMyV9LmNvbC1tZC1wdWxsLTl7cmlnaHQ6NzUlfS5jb2wtbWQtcHVsbC04e3JpZ2h0OjY2LjY2NjY2NjY3JX0uY29sLW1kLXB1bGwtN3tyaWdodDo1OC4zMzMzMzMzMyV9LmNvbC1tZC1wdWxsLTZ7cmlnaHQ6NTAlfS5jb2wtbWQtcHVsbC01e3JpZ2h0OjQxLjY2NjY2NjY3JX0uY29sLW1kLXB1bGwtNHtyaWdodDozMy4zMzMzMzMzMyV9LmNvbC1tZC1wdWxsLTN7cmlnaHQ6MjUlfS5jb2wtbWQtcHVsbC0ye3JpZ2h0OjE2LjY2NjY2NjY3JX0uY29sLW1kLXB1bGwtMXtyaWdodDo4LjMzMzMzMzMzJX0uY29sLW1kLXB1bGwtMHtyaWdodDphdXRvfS5jb2wtbWQtcHVzaC0xMntsZWZ0OjEwMCV9LmNvbC1tZC1wdXNoLTExe2xlZnQ6OTEuNjY2NjY2NjclfS5jb2wtbWQtcHVzaC0xMHtsZWZ0OjgzLjMzMzMzMzMzJX0uY29sLW1kLXB1c2gtOXtsZWZ0Ojc1JX0uY29sLW1kLXB1c2gtOHtsZWZ0OjY2LjY2NjY2NjY3JX0uY29sLW1kLXB1c2gtN3tsZWZ0OjU4LjMzMzMzMzMzJX0uY29sLW1kLXB1c2gtNntsZWZ0OjUwJX0uY29sLW1kLXB1c2gtNXtsZWZ0OjQxLjY2NjY2NjY3JX0uY29sLW1kLXB1c2gtNHtsZWZ0OjMzLjMzMzMzMzMzJX0uY29sLW1kLXB1c2gtM3tsZWZ0OjI1JX0uY29sLW1kLXB1c2gtMntsZWZ0OjE2LjY2NjY2NjY3JX0uY29sLW1kLXB1c2gtMXtsZWZ0OjguMzMzMzMzMzMlfS5jb2wtbWQtcHVzaC0we2xlZnQ6YXV0b30uY29sLW1kLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfS5jb2wtbWQtb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uY29sLW1kLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9LmNvbC1tZC1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbC1tZC1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9LmNvbC1tZC1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9LmNvbC1tZC1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbC1tZC1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9LmNvbC1tZC1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9LmNvbC1tZC1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbC1tZC1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9LmNvbC1tZC1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0uY29sLW1kLW9mZnNldC0we21hcmdpbi1sZWZ0OjB9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LmNvbC1sZy0xLC5jb2wtbGctMTAsLmNvbC1sZy0xMSwuY29sLWxnLTEyLC5jb2wtbGctMiwuY29sLWxnLTMsLmNvbC1sZy00LC5jb2wtbGctNSwuY29sLWxnLTYsLmNvbC1sZy03LC5jb2wtbGctOCwuY29sLWxnLTl7ZmxvYXQ6bGVmdH0uY29sLWxnLTEye3dpZHRoOjEwMCV9LmNvbC1sZy0xMXt3aWR0aDo5MS42NjY2NjY2NyV9LmNvbC1sZy0xMHt3aWR0aDo4My4zMzMzMzMzMyV9LmNvbC1sZy05e3dpZHRoOjc1JX0uY29sLWxnLTh7d2lkdGg6NjYuNjY2NjY2NjclfS5jb2wtbGctN3t3aWR0aDo1OC4zMzMzMzMzMyV9LmNvbC1sZy02e3dpZHRoOjUwJX0uY29sLWxnLTV7d2lkdGg6NDEuNjY2NjY2NjclfS5jb2wtbGctNHt3aWR0aDozMy4zMzMzMzMzMyV9LmNvbC1sZy0ze3dpZHRoOjI1JX0uY29sLWxnLTJ7d2lkdGg6MTYuNjY2NjY2NjclfS5jb2wtbGctMXt3aWR0aDo4LjMzMzMzMzMzJX0uY29sLWxnLXB1bGwtMTJ7cmlnaHQ6MTAwJX0uY29sLWxnLXB1bGwtMTF7cmlnaHQ6OTEuNjY2NjY2NjclfS5jb2wtbGctcHVsbC0xMHtyaWdodDo4My4zMzMzMzMzMyV9LmNvbC1sZy1wdWxsLTl7cmlnaHQ6NzUlfS5jb2wtbGctcHVsbC04e3JpZ2h0OjY2LjY2NjY2NjY3JX0uY29sLWxnLXB1bGwtN3tyaWdodDo1OC4zMzMzMzMzMyV9LmNvbC1sZy1wdWxsLTZ7cmlnaHQ6NTAlfS5jb2wtbGctcHVsbC01e3JpZ2h0OjQxLjY2NjY2NjY3JX0uY29sLWxnLXB1bGwtNHtyaWdodDozMy4zMzMzMzMzMyV9LmNvbC1sZy1wdWxsLTN7cmlnaHQ6MjUlfS5jb2wtbGctcHVsbC0ye3JpZ2h0OjE2LjY2NjY2NjY3JX0uY29sLWxnLXB1bGwtMXtyaWdodDo4LjMzMzMzMzMzJX0uY29sLWxnLXB1bGwtMHtyaWdodDphdXRvfS5jb2wtbGctcHVzaC0xMntsZWZ0OjEwMCV9LmNvbC1sZy1wdXNoLTExe2xlZnQ6OTEuNjY2NjY2NjclfS5jb2wtbGctcHVzaC0xMHtsZWZ0OjgzLjMzMzMzMzMzJX0uY29sLWxnLXB1c2gtOXtsZWZ0Ojc1JX0uY29sLWxnLXB1c2gtOHtsZWZ0OjY2LjY2NjY2NjY3JX0uY29sLWxnLXB1c2gtN3tsZWZ0OjU4LjMzMzMzMzMzJX0uY29sLWxnLXB1c2gtNntsZWZ0OjUwJX0uY29sLWxnLXB1c2gtNXtsZWZ0OjQxLjY2NjY2NjY3JX0uY29sLWxnLXB1c2gtNHtsZWZ0OjMzLjMzMzMzMzMzJX0uY29sLWxnLXB1c2gtM3tsZWZ0OjI1JX0uY29sLWxnLXB1c2gtMntsZWZ0OjE2LjY2NjY2NjY3JX0uY29sLWxnLXB1c2gtMXtsZWZ0OjguMzMzMzMzMzMlfS5jb2wtbGctcHVzaC0we2xlZnQ6YXV0b30uY29sLWxnLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfS5jb2wtbGctb2Zmc2V0LTExe21hcmdpbi1sZWZ0OjkxLjY2NjY2NjY3JX0uY29sLWxnLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMzMzMyV9LmNvbC1sZy1vZmZzZXQtOXttYXJnaW4tbGVmdDo3NSV9LmNvbC1sZy1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NjY2NyV9LmNvbC1sZy1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMzMzMyV9LmNvbC1sZy1vZmZzZXQtNnttYXJnaW4tbGVmdDo1MCV9LmNvbC1sZy1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NjY2NyV9LmNvbC1sZy1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMzMzMyV9LmNvbC1sZy1vZmZzZXQtM3ttYXJnaW4tbGVmdDoyNSV9LmNvbC1sZy1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NjY2NyV9LmNvbC1sZy1vZmZzZXQtMXttYXJnaW4tbGVmdDo4LjMzMzMzMzMzJX0uY29sLWxnLW9mZnNldC0we21hcmdpbi1sZWZ0OjB9fXRhYmxle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Y2FwdGlvbntwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2NvbG9yOiM3Nzc7dGV4dC1hbGlnbjpsZWZ0fXRoe3RleHQtYWxpZ246bGVmdH0udGFibGV7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOjIwcHh9LnRhYmxlPnRib2R5PnRyPnRkLC50YWJsZT50Ym9keT50cj50aCwudGFibGU+dGZvb3Q+dHI+dGQsLnRhYmxlPnRmb290PnRyPnRoLC50YWJsZT50aGVhZD50cj50ZCwudGFibGU+dGhlYWQ+dHI+dGh7cGFkZGluZzo4cHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mzt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZH0udGFibGU+dGhlYWQ+dHI+dGh7dmVydGljYWwtYWxpZ246Ym90dG9tO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZGR9LnRhYmxlPmNhcHRpb24rdGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnRhYmxlPmNhcHRpb24rdGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGgsLnRhYmxlPmNvbGdyb3VwK3RoZWFkPnRyOmZpcnN0LWNoaWxkPnRkLC50YWJsZT5jb2xncm91cCt0aGVhZD50cjpmaXJzdC1jaGlsZD50aCwudGFibGU+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnRhYmxlPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkPnRoe2JvcmRlci10b3A6MH0udGFibGU+dGJvZHkrdGJvZHl7Ym9yZGVyLXRvcDoycHggc29saWQgI2RkZH0udGFibGUgLnRhYmxle2JhY2tncm91bmQtY29sb3I6I2ZmZn0udGFibGUtY29uZGVuc2VkPnRib2R5PnRyPnRkLC50YWJsZS1jb25kZW5zZWQ+dGJvZHk+dHI+dGgsLnRhYmxlLWNvbmRlbnNlZD50Zm9vdD50cj50ZCwudGFibGUtY29uZGVuc2VkPnRmb290PnRyPnRoLC50YWJsZS1jb25kZW5zZWQ+dGhlYWQ+dHI+dGQsLnRhYmxlLWNvbmRlbnNlZD50aGVhZD50cj50aHtwYWRkaW5nOjVweH0udGFibGUtYm9yZGVyZWR7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfS50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZCwudGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsLnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkLC50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aCwudGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQsLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoe2JvcmRlcjoxcHggc29saWQgI2RkZH0udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQsLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoe2JvcmRlci1ib3R0b20td2lkdGg6MnB4fS50YWJsZS1zdHJpcGVkPnRib2R5PnRyOm50aC1vZi10eXBlKG9kZCl7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS50YWJsZS1ob3Zlcj50Ym9keT50cjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9dGFibGUgY29sW2NsYXNzKj1jb2wtXXtwb3NpdGlvbjpzdGF0aWM7ZGlzcGxheTp0YWJsZS1jb2x1bW47ZmxvYXQ6bm9uZX10YWJsZSB0ZFtjbGFzcyo9Y29sLV0sdGFibGUgdGhbY2xhc3MqPWNvbC1de3Bvc2l0aW9uOnN0YXRpYztkaXNwbGF5OnRhYmxlLWNlbGw7ZmxvYXQ6bm9uZX0udGFibGU+dGJvZHk+dHIuYWN0aXZlPnRkLC50YWJsZT50Ym9keT50ci5hY3RpdmU+dGgsLnRhYmxlPnRib2R5PnRyPnRkLmFjdGl2ZSwudGFibGU+dGJvZHk+dHI+dGguYWN0aXZlLC50YWJsZT50Zm9vdD50ci5hY3RpdmU+dGQsLnRhYmxlPnRmb290PnRyLmFjdGl2ZT50aCwudGFibGU+dGZvb3Q+dHI+dGQuYWN0aXZlLC50YWJsZT50Zm9vdD50cj50aC5hY3RpdmUsLnRhYmxlPnRoZWFkPnRyLmFjdGl2ZT50ZCwudGFibGU+dGhlYWQ+dHIuYWN0aXZlPnRoLC50YWJsZT50aGVhZD50cj50ZC5hY3RpdmUsLnRhYmxlPnRoZWFkPnRyPnRoLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LnRhYmxlLWhvdmVyPnRib2R5PnRyLmFjdGl2ZTpob3Zlcj50ZCwudGFibGUtaG92ZXI+dGJvZHk+dHIuYWN0aXZlOmhvdmVyPnRoLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uYWN0aXZlLC50YWJsZS1ob3Zlcj50Ym9keT50cj50ZC5hY3RpdmU6aG92ZXIsLnRhYmxlLWhvdmVyPnRib2R5PnRyPnRoLmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LnRhYmxlPnRib2R5PnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRib2R5PnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRib2R5PnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRib2R5PnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRmb290PnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRmb290PnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRmb290PnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRmb290PnRyPnRoLnN1Y2Nlc3MsLnRhYmxlPnRoZWFkPnRyLnN1Y2Nlc3M+dGQsLnRhYmxlPnRoZWFkPnRyLnN1Y2Nlc3M+dGgsLnRhYmxlPnRoZWFkPnRyPnRkLnN1Y2Nlc3MsLnRhYmxlPnRoZWFkPnRyPnRoLnN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4fS50YWJsZS1ob3Zlcj50Ym9keT50ci5zdWNjZXNzOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50ci5zdWNjZXNzOmhvdmVyPnRoLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uc3VjY2VzcywudGFibGUtaG92ZXI+dGJvZHk+dHI+dGQuc3VjY2Vzczpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGguc3VjY2Vzczpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkMGU5YzZ9LnRhYmxlPnRib2R5PnRyLmluZm8+dGQsLnRhYmxlPnRib2R5PnRyLmluZm8+dGgsLnRhYmxlPnRib2R5PnRyPnRkLmluZm8sLnRhYmxlPnRib2R5PnRyPnRoLmluZm8sLnRhYmxlPnRmb290PnRyLmluZm8+dGQsLnRhYmxlPnRmb290PnRyLmluZm8+dGgsLnRhYmxlPnRmb290PnRyPnRkLmluZm8sLnRhYmxlPnRmb290PnRyPnRoLmluZm8sLnRhYmxlPnRoZWFkPnRyLmluZm8+dGQsLnRhYmxlPnRoZWFkPnRyLmluZm8+dGgsLnRhYmxlPnRoZWFkPnRyPnRkLmluZm8sLnRhYmxlPnRoZWFkPnRyPnRoLmluZm97YmFja2dyb3VuZC1jb2xvcjojZDllZGY3fS50YWJsZS1ob3Zlcj50Ym9keT50ci5pbmZvOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50ci5pbmZvOmhvdmVyPnRoLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4uaW5mbywudGFibGUtaG92ZXI+dGJvZHk+dHI+dGQuaW5mbzpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGguaW5mbzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNjNGUzZjN9LnRhYmxlPnRib2R5PnRyLndhcm5pbmc+dGQsLnRhYmxlPnRib2R5PnRyLndhcm5pbmc+dGgsLnRhYmxlPnRib2R5PnRyPnRkLndhcm5pbmcsLnRhYmxlPnRib2R5PnRyPnRoLndhcm5pbmcsLnRhYmxlPnRmb290PnRyLndhcm5pbmc+dGQsLnRhYmxlPnRmb290PnRyLndhcm5pbmc+dGgsLnRhYmxlPnRmb290PnRyPnRkLndhcm5pbmcsLnRhYmxlPnRmb290PnRyPnRoLndhcm5pbmcsLnRhYmxlPnRoZWFkPnRyLndhcm5pbmc+dGQsLnRhYmxlPnRoZWFkPnRyLndhcm5pbmc+dGgsLnRhYmxlPnRoZWFkPnRyPnRkLndhcm5pbmcsLnRhYmxlPnRoZWFkPnRyPnRoLndhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzfS50YWJsZS1ob3Zlcj50Ym9keT50ci53YXJuaW5nOmhvdmVyPnRkLC50YWJsZS1ob3Zlcj50Ym9keT50ci53YXJuaW5nOmhvdmVyPnRoLC50YWJsZS1ob3Zlcj50Ym9keT50cjpob3Zlcj4ud2FybmluZywudGFibGUtaG92ZXI+dGJvZHk+dHI+dGQud2FybmluZzpob3ZlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGgud2FybmluZzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWYyY2N9LnRhYmxlPnRib2R5PnRyLmRhbmdlcj50ZCwudGFibGU+dGJvZHk+dHIuZGFuZ2VyPnRoLC50YWJsZT50Ym9keT50cj50ZC5kYW5nZXIsLnRhYmxlPnRib2R5PnRyPnRoLmRhbmdlciwudGFibGU+dGZvb3Q+dHIuZGFuZ2VyPnRkLC50YWJsZT50Zm9vdD50ci5kYW5nZXI+dGgsLnRhYmxlPnRmb290PnRyPnRkLmRhbmdlciwudGFibGU+dGZvb3Q+dHI+dGguZGFuZ2VyLC50YWJsZT50aGVhZD50ci5kYW5nZXI+dGQsLnRhYmxlPnRoZWFkPnRyLmRhbmdlcj50aCwudGFibGU+dGhlYWQ+dHI+dGQuZGFuZ2VyLC50YWJsZT50aGVhZD50cj50aC5kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJkZWRlfS50YWJsZS1ob3Zlcj50Ym9keT50ci5kYW5nZXI6aG92ZXI+dGQsLnRhYmxlLWhvdmVyPnRib2R5PnRyLmRhbmdlcjpob3Zlcj50aCwudGFibGUtaG92ZXI+dGJvZHk+dHI6aG92ZXI+LmRhbmdlciwudGFibGUtaG92ZXI+dGJvZHk+dHI+dGQuZGFuZ2VyOmhvdmVyLC50YWJsZS1ob3Zlcj50Ym9keT50cj50aC5kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWJjY2NjfS50YWJsZS1yZXNwb25zaXZle21pbi1oZWlnaHQ6LjAxJTtvdmVyZmxvdy14OmF1dG99QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7LnRhYmxlLXJlc3BvbnNpdmV7d2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOjE1cHg7b3ZlcmZsb3cteTpoaWRkZW47LW1zLW92ZXJmbG93LXN0eWxlOi1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtib3JkZXI6MXB4IHNvbGlkICNkZGR9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxle21hcmdpbi1ib3R0b206MH0udGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGJvZHk+dHI+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRib2R5PnRyPnRoLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50Zm9vdD50cj50ZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGU+dGZvb3Q+dHI+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlPnRoZWFkPnRyPnRkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZT50aGVhZD50cj50aHt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVke2JvcmRlcjowfS50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmZpcnN0LWNoaWxkLC50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpmaXJzdC1jaGlsZCwudGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6Zmlyc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmZpcnN0LWNoaWxke2JvcmRlci1sZWZ0OjB9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRoOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRkOmxhc3QtY2hpbGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjB9LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGgsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGQsLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGh7Ym9yZGVyLWJvdHRvbTowfX1maWVsZHNldHttaW4td2lkdGg6MDtwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjB9bGVnZW5ke2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjA7bWFyZ2luLWJvdHRvbToyMHB4O2ZvbnQtc2l6ZToyMXB4O2xpbmUtaGVpZ2h0OmluaGVyaXQ7Y29sb3I6IzMzMztib3JkZXI6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTVlNWU1fWxhYmVse2Rpc3BsYXk6aW5saW5lLWJsb2NrO21heC13aWR0aDoxMDAlO21hcmdpbi1ib3R0b206NXB4O2ZvbnQtd2VpZ2h0OjcwMH1pbnB1dFt0eXBlPXNlYXJjaF17LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWlucHV0W3R5cGU9Y2hlY2tib3hdLGlucHV0W3R5cGU9cmFkaW9de21hcmdpbjo0cHggMCAwO21hcmdpbi10b3A6MXB4XFw5O2xpbmUtaGVpZ2h0Om5vcm1hbH1pbnB1dFt0eXBlPWZpbGVde2Rpc3BsYXk6YmxvY2t9aW5wdXRbdHlwZT1yYW5nZV17ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlfXNlbGVjdFttdWx0aXBsZV0sc2VsZWN0W3NpemVde2hlaWdodDphdXRvfWlucHV0W3R5cGU9ZmlsZV06Zm9jdXMsaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMsaW5wdXRbdHlwZT1yYWRpb106Zm9jdXN7b3V0bGluZTo1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7b3V0bGluZS1vZmZzZXQ6LTJweH1vdXRwdXR7ZGlzcGxheTpibG9jaztwYWRkaW5nLXRvcDo3cHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mztjb2xvcjojNTU1fS5mb3JtLWNvbnRyb2x7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO2hlaWdodDozNHB4O3BhZGRpbmc6NnB4IDEycHg7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mztjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpOy13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1czstby10cmFuc2l0aW9uOmJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1czt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1c30uZm9ybS1jb250cm9sOmZvY3Vze2JvcmRlci1jb2xvcjojNjZhZmU5O291dGxpbmU6MDstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNil9LmZvcm0tY29udHJvbDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojOTk5O29wYWNpdHk6MX0uZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojOTk5fS5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0uZm9ybS1jb250cm9sOjotbXMtZXhwYW5ke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjB9LmZvcm0tY29udHJvbFtkaXNhYmxlZF0sLmZvcm0tY29udHJvbFtyZWFkb25seV0sZmllbGRzZXRbZGlzYWJsZWRdIC5mb3JtLWNvbnRyb2x7YmFja2dyb3VuZC1jb2xvcjojZWVlO29wYWNpdHk6MX0uZm9ybS1jb250cm9sW2Rpc2FibGVkXSxmaWVsZHNldFtkaXNhYmxlZF0gLmZvcm0tY29udHJvbHtjdXJzb3I6bm90LWFsbG93ZWR9dGV4dGFyZWEuZm9ybS1jb250cm9se2hlaWdodDphdXRvfWlucHV0W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX1AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApe2lucHV0W3R5cGU9ZGF0ZV0uZm9ybS1jb250cm9sLGlucHV0W3R5cGU9dGltZV0uZm9ybS1jb250cm9sLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLmZvcm0tY29udHJvbCxpbnB1dFt0eXBlPW1vbnRoXS5mb3JtLWNvbnRyb2x7bGluZS1oZWlnaHQ6MzRweH0uaW5wdXQtZ3JvdXAtc20gaW5wdXRbdHlwZT1kYXRlXSwuaW5wdXQtZ3JvdXAtc20gaW5wdXRbdHlwZT10aW1lXSwuaW5wdXQtZ3JvdXAtc20gaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sLmlucHV0LWdyb3VwLXNtIGlucHV0W3R5cGU9bW9udGhdLGlucHV0W3R5cGU9ZGF0ZV0uaW5wdXQtc20saW5wdXRbdHlwZT10aW1lXS5pbnB1dC1zbSxpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXS5pbnB1dC1zbSxpbnB1dFt0eXBlPW1vbnRoXS5pbnB1dC1zbXtsaW5lLWhlaWdodDozMHB4fS5pbnB1dC1ncm91cC1sZyBpbnB1dFt0eXBlPWRhdGVdLC5pbnB1dC1ncm91cC1sZyBpbnB1dFt0eXBlPXRpbWVdLC5pbnB1dC1ncm91cC1sZyBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwuaW5wdXQtZ3JvdXAtbGcgaW5wdXRbdHlwZT1tb250aF0saW5wdXRbdHlwZT1kYXRlXS5pbnB1dC1sZyxpbnB1dFt0eXBlPXRpbWVdLmlucHV0LWxnLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLmlucHV0LWxnLGlucHV0W3R5cGU9bW9udGhdLmlucHV0LWxne2xpbmUtaGVpZ2h0OjQ2cHh9fS5mb3JtLWdyb3Vwe21hcmdpbi1ib3R0b206MTVweH0uY2hlY2tib3gsLnJhZGlve3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweH0uY2hlY2tib3ggbGFiZWwsLnJhZGlvIGxhYmVse21pbi1oZWlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6MjBweDttYXJnaW4tYm90dG9tOjA7Zm9udC13ZWlnaHQ6NDAwO2N1cnNvcjpwb2ludGVyfS5jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XSwuY2hlY2tib3gtaW5saW5lIGlucHV0W3R5cGU9Y2hlY2tib3hdLC5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSwucmFkaW8taW5saW5lIGlucHV0W3R5cGU9cmFkaW9de3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbi10b3A6NHB4XFw5O21hcmdpbi1sZWZ0Oi0yMHB4fS5jaGVja2JveCsuY2hlY2tib3gsLnJhZGlvKy5yYWRpb3ttYXJnaW4tdG9wOi01cHh9LmNoZWNrYm94LWlubGluZSwucmFkaW8taW5saW5le3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctbGVmdDoyMHB4O21hcmdpbi1ib3R0b206MDtmb250LXdlaWdodDo0MDA7dmVydGljYWwtYWxpZ246bWlkZGxlO2N1cnNvcjpwb2ludGVyfS5jaGVja2JveC1pbmxpbmUrLmNoZWNrYm94LWlubGluZSwucmFkaW8taW5saW5lKy5yYWRpby1pbmxpbmV7bWFyZ2luLXRvcDowO21hcmdpbi1sZWZ0OjEwcHh9ZmllbGRzZXRbZGlzYWJsZWRdIGlucHV0W3R5cGU9Y2hlY2tib3hdLGZpZWxkc2V0W2Rpc2FibGVkXSBpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XS5kaXNhYmxlZCxpbnB1dFt0eXBlPWNoZWNrYm94XVtkaXNhYmxlZF0saW5wdXRbdHlwZT1yYWRpb10uZGlzYWJsZWQsaW5wdXRbdHlwZT1yYWRpb11bZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH0uY2hlY2tib3gtaW5saW5lLmRpc2FibGVkLC5yYWRpby1pbmxpbmUuZGlzYWJsZWQsZmllbGRzZXRbZGlzYWJsZWRdIC5jaGVja2JveC1pbmxpbmUsZmllbGRzZXRbZGlzYWJsZWRdIC5yYWRpby1pbmxpbmV7Y3Vyc29yOm5vdC1hbGxvd2VkfS5jaGVja2JveC5kaXNhYmxlZCBsYWJlbCwucmFkaW8uZGlzYWJsZWQgbGFiZWwsZmllbGRzZXRbZGlzYWJsZWRdIC5jaGVja2JveCBsYWJlbCxmaWVsZHNldFtkaXNhYmxlZF0gLnJhZGlvIGxhYmVse2N1cnNvcjpub3QtYWxsb3dlZH0uZm9ybS1jb250cm9sLXN0YXRpY3ttaW4taGVpZ2h0OjM0cHg7cGFkZGluZy10b3A6N3B4O3BhZGRpbmctYm90dG9tOjdweDttYXJnaW4tYm90dG9tOjB9LmZvcm0tY29udHJvbC1zdGF0aWMuaW5wdXQtbGcsLmZvcm0tY29udHJvbC1zdGF0aWMuaW5wdXQtc217cGFkZGluZy1yaWdodDowO3BhZGRpbmctbGVmdDowfS5pbnB1dC1zbXtoZWlnaHQ6MzBweDtwYWRkaW5nOjVweCAxMHB4O2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEuNTtib3JkZXItcmFkaXVzOjNweH1zZWxlY3QuaW5wdXQtc217aGVpZ2h0OjMwcHg7bGluZS1oZWlnaHQ6MzBweH1zZWxlY3RbbXVsdGlwbGVdLmlucHV0LXNtLHRleHRhcmVhLmlucHV0LXNte2hlaWdodDphdXRvfS5mb3JtLWdyb3VwLXNtIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OjMwcHg7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czozcHh9LmZvcm0tZ3JvdXAtc20gc2VsZWN0LmZvcm0tY29udHJvbHtoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDozMHB4fS5mb3JtLWdyb3VwLXNtIHNlbGVjdFttdWx0aXBsZV0uZm9ybS1jb250cm9sLC5mb3JtLWdyb3VwLXNtIHRleHRhcmVhLmZvcm0tY29udHJvbHtoZWlnaHQ6YXV0b30uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sLXN0YXRpY3toZWlnaHQ6MzBweDttaW4taGVpZ2h0OjMycHg7cGFkZGluZzo2cHggMTBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjV9LmlucHV0LWxne2hlaWdodDo0NnB4O3BhZGRpbmc6MTBweCAxNnB4O2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjEuMzMzMzMzMztib3JkZXItcmFkaXVzOjZweH1zZWxlY3QuaW5wdXQtbGd7aGVpZ2h0OjQ2cHg7bGluZS1oZWlnaHQ6NDZweH1zZWxlY3RbbXVsdGlwbGVdLmlucHV0LWxnLHRleHRhcmVhLmlucHV0LWxne2hlaWdodDphdXRvfS5mb3JtLWdyb3VwLWxnIC5mb3JtLWNvbnRyb2x7aGVpZ2h0OjQ2cHg7cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MS4zMzMzMzMzO2JvcmRlci1yYWRpdXM6NnB4fS5mb3JtLWdyb3VwLWxnIHNlbGVjdC5mb3JtLWNvbnRyb2x7aGVpZ2h0OjQ2cHg7bGluZS1oZWlnaHQ6NDZweH0uZm9ybS1ncm91cC1sZyBzZWxlY3RbbXVsdGlwbGVdLmZvcm0tY29udHJvbCwuZm9ybS1ncm91cC1sZyB0ZXh0YXJlYS5mb3JtLWNvbnRyb2x7aGVpZ2h0OmF1dG99LmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbC1zdGF0aWN7aGVpZ2h0OjQ2cHg7bWluLWhlaWdodDozOHB4O3BhZGRpbmc6MTFweCAxNnB4O2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjEuMzMzMzMzM30uaGFzLWZlZWRiYWNre3Bvc2l0aW9uOnJlbGF0aXZlfS5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbHtwYWRkaW5nLXJpZ2h0OjQyLjVweH0uZm9ybS1jb250cm9sLWZlZWRiYWNre3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7ei1pbmRleDoyO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MzRweDtoZWlnaHQ6MzRweDtsaW5lLWhlaWdodDozNHB4O3RleHQtYWxpZ246Y2VudGVyO3BvaW50ZXItZXZlbnRzOm5vbmV9LmZvcm0tZ3JvdXAtbGcgLmZvcm0tY29udHJvbCsuZm9ybS1jb250cm9sLWZlZWRiYWNrLC5pbnB1dC1ncm91cC1sZysuZm9ybS1jb250cm9sLWZlZWRiYWNrLC5pbnB1dC1sZysuZm9ybS1jb250cm9sLWZlZWRiYWNre3dpZHRoOjQ2cHg7aGVpZ2h0OjQ2cHg7bGluZS1oZWlnaHQ6NDZweH0uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssLmlucHV0LWdyb3VwLXNtKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssLmlucHV0LXNtKy5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7d2lkdGg6MzBweDtoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDozMHB4fS5oYXMtc3VjY2VzcyAuY2hlY2tib3gsLmhhcy1zdWNjZXNzIC5jaGVja2JveC1pbmxpbmUsLmhhcy1zdWNjZXNzIC5jb250cm9sLWxhYmVsLC5oYXMtc3VjY2VzcyAuaGVscC1ibG9jaywuaGFzLXN1Y2Nlc3MgLnJhZGlvLC5oYXMtc3VjY2VzcyAucmFkaW8taW5saW5lLC5oYXMtc3VjY2Vzcy5jaGVja2JveCBsYWJlbCwuaGFzLXN1Y2Nlc3MuY2hlY2tib3gtaW5saW5lIGxhYmVsLC5oYXMtc3VjY2Vzcy5yYWRpbyBsYWJlbCwuaGFzLXN1Y2Nlc3MucmFkaW8taW5saW5lIGxhYmVse2NvbG9yOiMzYzc2M2R9Lmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2x7Ym9yZGVyLWNvbG9yOiMzYzc2M2Q7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSl9Lmhhcy1zdWNjZXNzIC5mb3JtLWNvbnRyb2w6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMyYjU0MmM7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA2cHggIzY3YjE2ODtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA2cHggIzY3YjE2OH0uaGFzLXN1Y2Nlc3MgLmlucHV0LWdyb3VwLWFkZG9ue2NvbG9yOiMzYzc2M2Q7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4O2JvcmRlci1jb2xvcjojM2M3NjNkfS5oYXMtc3VjY2VzcyAuZm9ybS1jb250cm9sLWZlZWRiYWNre2NvbG9yOiMzYzc2M2R9Lmhhcy13YXJuaW5nIC5jaGVja2JveCwuaGFzLXdhcm5pbmcgLmNoZWNrYm94LWlubGluZSwuaGFzLXdhcm5pbmcgLmNvbnRyb2wtbGFiZWwsLmhhcy13YXJuaW5nIC5oZWxwLWJsb2NrLC5oYXMtd2FybmluZyAucmFkaW8sLmhhcy13YXJuaW5nIC5yYWRpby1pbmxpbmUsLmhhcy13YXJuaW5nLmNoZWNrYm94IGxhYmVsLC5oYXMtd2FybmluZy5jaGVja2JveC1pbmxpbmUgbGFiZWwsLmhhcy13YXJuaW5nLnJhZGlvIGxhYmVsLC5oYXMtd2FybmluZy5yYWRpby1pbmxpbmUgbGFiZWx7Y29sb3I6IzhhNmQzYn0uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbHtib3JkZXItY29sb3I6IzhhNmQzYjstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KX0uaGFzLXdhcm5pbmcgLmZvcm0tY29udHJvbDpmb2N1c3tib3JkZXItY29sb3I6IzY2NTEyYzstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDZweCAjYzBhMTZiO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDZweCAjYzBhMTZifS5oYXMtd2FybmluZyAuaW5wdXQtZ3JvdXAtYWRkb257Y29sb3I6IzhhNmQzYjtiYWNrZ3JvdW5kLWNvbG9yOiNmY2Y4ZTM7Ym9yZGVyLWNvbG9yOiM4YTZkM2J9Lmhhcy13YXJuaW5nIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7Y29sb3I6IzhhNmQzYn0uaGFzLWVycm9yIC5jaGVja2JveCwuaGFzLWVycm9yIC5jaGVja2JveC1pbmxpbmUsLmhhcy1lcnJvciAuY29udHJvbC1sYWJlbCwuaGFzLWVycm9yIC5oZWxwLWJsb2NrLC5oYXMtZXJyb3IgLnJhZGlvLC5oYXMtZXJyb3IgLnJhZGlvLWlubGluZSwuaGFzLWVycm9yLmNoZWNrYm94IGxhYmVsLC5oYXMtZXJyb3IuY2hlY2tib3gtaW5saW5lIGxhYmVsLC5oYXMtZXJyb3IucmFkaW8gbGFiZWwsLmhhcy1lcnJvci5yYWRpby1pbmxpbmUgbGFiZWx7Y29sb3I6I2E5NDQ0Mn0uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2x7Ym9yZGVyLWNvbG9yOiNhOTQ0NDI7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSl9Lmhhcy1lcnJvciAuZm9ybS1jb250cm9sOmZvY3Vze2JvcmRlci1jb2xvcjojODQzNTM0Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgNnB4ICNjZTg0ODM7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgNnB4ICNjZTg0ODN9Lmhhcy1lcnJvciAuaW5wdXQtZ3JvdXAtYWRkb257Y29sb3I6I2E5NDQ0MjtiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGU7Ym9yZGVyLWNvbG9yOiNhOTQ0NDJ9Lmhhcy1lcnJvciAuZm9ybS1jb250cm9sLWZlZWRiYWNre2NvbG9yOiNhOTQ0NDJ9Lmhhcy1mZWVkYmFjayBsYWJlbH4uZm9ybS1jb250cm9sLWZlZWRiYWNre3RvcDoyNXB4fS5oYXMtZmVlZGJhY2sgbGFiZWwuc3Itb25seX4uZm9ybS1jb250cm9sLWZlZWRiYWNre3RvcDowfS5oZWxwLWJsb2Nre2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbToxMHB4O2NvbG9yOiM3MzczNzN9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mb3JtLWlubGluZSAuZm9ybS1ncm91cHtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOjA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5mb3JtLWlubGluZSAuZm9ybS1jb250cm9se2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmF1dG87dmVydGljYWwtYWxpZ246bWlkZGxlfS5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sLXN0YXRpY3tkaXNwbGF5OmlubGluZS1ibG9ja30uZm9ybS1pbmxpbmUgLmlucHV0LWdyb3Vwe2Rpc3BsYXk6aW5saW5lLXRhYmxlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wsLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24sLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYnRue3dpZHRoOmF1dG99LmZvcm0taW5saW5lIC5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9se3dpZHRoOjEwMCV9LmZvcm0taW5saW5lIC5jb250cm9sLWxhYmVse21hcmdpbi1ib3R0b206MDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmZvcm0taW5saW5lIC5jaGVja2JveCwuZm9ybS1pbmxpbmUgLnJhZGlve2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5mb3JtLWlubGluZSAuY2hlY2tib3ggbGFiZWwsLmZvcm0taW5saW5lIC5yYWRpbyBsYWJlbHtwYWRkaW5nLWxlZnQ6MH0uZm9ybS1pbmxpbmUgLmNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdLC5mb3JtLWlubGluZSAucmFkaW8gaW5wdXRbdHlwZT1yYWRpb117cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6MH0uZm9ybS1pbmxpbmUgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre3RvcDowfX0uZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveCwuZm9ybS1ob3Jpem9udGFsIC5jaGVja2JveC1pbmxpbmUsLmZvcm0taG9yaXpvbnRhbCAucmFkaW8sLmZvcm0taG9yaXpvbnRhbCAucmFkaW8taW5saW5le3BhZGRpbmctdG9wOjdweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5mb3JtLWhvcml6b250YWwgLmNoZWNrYm94LC5mb3JtLWhvcml6b250YWwgLnJhZGlve21pbi1oZWlnaHQ6MjdweH0uZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3Vwe21hcmdpbi1yaWdodDotMTVweDttYXJnaW4tbGVmdDotMTVweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1sYWJlbHtwYWRkaW5nLXRvcDo3cHg7bWFyZ2luLWJvdHRvbTowO3RleHQtYWxpZ246cmlnaHR9fS5mb3JtLWhvcml6b250YWwgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNre3JpZ2h0OjE1cHh9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAtbGcgLmNvbnRyb2wtbGFiZWx7cGFkZGluZy10b3A6MTFweDtmb250LXNpemU6MThweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAtc20gLmNvbnRyb2wtbGFiZWx7cGFkZGluZy10b3A6NnB4O2ZvbnQtc2l6ZToxMnB4fX0uYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6NnB4IDEycHg7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LW1zLXRvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo0cHh9LmJ0bi5hY3RpdmUuZm9jdXMsLmJ0bi5hY3RpdmU6Zm9jdXMsLmJ0bi5mb2N1cywuYnRuOmFjdGl2ZS5mb2N1cywuYnRuOmFjdGl2ZTpmb2N1cywuYnRuOmZvY3Vze291dGxpbmU6NXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO291dGxpbmUtb2Zmc2V0Oi0ycHh9LmJ0bi5mb2N1cywuYnRuOmZvY3VzLC5idG46aG92ZXJ7Y29sb3I6IzMzMzt0ZXh0LWRlY29yYXRpb246bm9uZX0uYnRuLmFjdGl2ZSwuYnRuOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOm5vbmU7b3V0bGluZTowOy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KTtib3gtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpfS5idG4uZGlzYWJsZWQsLmJ0bltkaXNhYmxlZF0sZmllbGRzZXRbZGlzYWJsZWRdIC5idG57Y3Vyc29yOm5vdC1hbGxvd2VkO2ZpbHRlcjphbHBoYShvcGFjaXR5PTY1KTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3BhY2l0eTouNjV9YS5idG4uZGlzYWJsZWQsZmllbGRzZXRbZGlzYWJsZWRdIGEuYnRue3BvaW50ZXItZXZlbnRzOm5vbmV9LmJ0bi1kZWZhdWx0e2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojY2NjfS5idG4tZGVmYXVsdC5mb2N1cywuYnRuLWRlZmF1bHQ6Zm9jdXN7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7Ym9yZGVyLWNvbG9yOiM4YzhjOGN9LmJ0bi1kZWZhdWx0OmhvdmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZTZlNmU2O2JvcmRlci1jb2xvcjojYWRhZGFkfS5idG4tZGVmYXVsdC5hY3RpdmUsLmJ0bi1kZWZhdWx0OmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0e2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZTZlNmU2O2JvcmRlci1jb2xvcjojYWRhZGFkfS5idG4tZGVmYXVsdC5hY3RpdmUuZm9jdXMsLmJ0bi1kZWZhdWx0LmFjdGl2ZTpmb2N1cywuYnRuLWRlZmF1bHQuYWN0aXZlOmhvdmVyLC5idG4tZGVmYXVsdDphY3RpdmUuZm9jdXMsLmJ0bi1kZWZhdWx0OmFjdGl2ZTpmb2N1cywuYnRuLWRlZmF1bHQ6YWN0aXZlOmhvdmVyLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQuZm9jdXMsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdDpmb2N1cywub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0OmhvdmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZDRkNGQ0O2JvcmRlci1jb2xvcjojOGM4YzhjfS5idG4tZGVmYXVsdC5hY3RpdmUsLmJ0bi1kZWZhdWx0OmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0e2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYnRuLWRlZmF1bHQuZGlzYWJsZWQuZm9jdXMsLmJ0bi1kZWZhdWx0LmRpc2FibGVkOmZvY3VzLC5idG4tZGVmYXVsdC5kaXNhYmxlZDpob3ZlciwuYnRuLWRlZmF1bHRbZGlzYWJsZWRdLmZvY3VzLC5idG4tZGVmYXVsdFtkaXNhYmxlZF06Zm9jdXMsLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kZWZhdWx0LmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRlZmF1bHQ6Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGVmYXVsdDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNjY2N9LmJ0bi1kZWZhdWx0IC5iYWRnZXtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzMzM30uYnRuLXByaW1hcnl7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjc7Ym9yZGVyLWNvbG9yOiMyZTZkYTR9LmJ0bi1wcmltYXJ5LmZvY3VzLC5idG4tcHJpbWFyeTpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI4NjA5MDtib3JkZXItY29sb3I6IzEyMmI0MH0uYnRuLXByaW1hcnk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyODYwOTA7Ym9yZGVyLWNvbG9yOiMyMDRkNzR9LmJ0bi1wcmltYXJ5LmFjdGl2ZSwuYnRuLXByaW1hcnk6YWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnl7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyODYwOTA7Ym9yZGVyLWNvbG9yOiMyMDRkNzR9LmJ0bi1wcmltYXJ5LmFjdGl2ZS5mb2N1cywuYnRuLXByaW1hcnkuYWN0aXZlOmZvY3VzLC5idG4tcHJpbWFyeS5hY3RpdmU6aG92ZXIsLmJ0bi1wcmltYXJ5OmFjdGl2ZS5mb2N1cywuYnRuLXByaW1hcnk6YWN0aXZlOmZvY3VzLC5idG4tcHJpbWFyeTphY3RpdmU6aG92ZXIsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tcHJpbWFyeS5mb2N1cywub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1wcmltYXJ5OmZvY3VzLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnk6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyMDRkNzQ7Ym9yZGVyLWNvbG9yOiMxMjJiNDB9LmJ0bi1wcmltYXJ5LmFjdGl2ZSwuYnRuLXByaW1hcnk6YWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnl7YmFja2dyb3VuZC1pbWFnZTpub25lfS5idG4tcHJpbWFyeS5kaXNhYmxlZC5mb2N1cywuYnRuLXByaW1hcnkuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi1wcmltYXJ5LmRpc2FibGVkOmhvdmVyLC5idG4tcHJpbWFyeVtkaXNhYmxlZF0uZm9jdXMsLmJ0bi1wcmltYXJ5W2Rpc2FibGVkXTpmb2N1cywuYnRuLXByaW1hcnlbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXByaW1hcnkuZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tcHJpbWFyeTpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1wcmltYXJ5OmhvdmVye2JhY2tncm91bmQtY29sb3I6IzMzN2FiNztib3JkZXItY29sb3I6IzJlNmRhNH0uYnRuLXByaW1hcnkgLmJhZGdle2NvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5idG4tc3VjY2Vzc3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzVjYjg1Yztib3JkZXItY29sb3I6IzRjYWU0Y30uYnRuLXN1Y2Nlc3MuZm9jdXMsLmJ0bi1zdWNjZXNzOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNDQ5ZDQ0O2JvcmRlci1jb2xvcjojMjU1NjI1fS5idG4tc3VjY2Vzczpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzQ0OWQ0NDtib3JkZXItY29sb3I6IzM5ODQzOX0uYnRuLXN1Y2Nlc3MuYWN0aXZlLC5idG4tc3VjY2VzczphY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2Vzc3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzQ0OWQ0NDtib3JkZXItY29sb3I6IzM5ODQzOX0uYnRuLXN1Y2Nlc3MuYWN0aXZlLmZvY3VzLC5idG4tc3VjY2Vzcy5hY3RpdmU6Zm9jdXMsLmJ0bi1zdWNjZXNzLmFjdGl2ZTpob3ZlciwuYnRuLXN1Y2Nlc3M6YWN0aXZlLmZvY3VzLC5idG4tc3VjY2VzczphY3RpdmU6Zm9jdXMsLmJ0bi1zdWNjZXNzOmFjdGl2ZTpob3Zlciwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1zdWNjZXNzLmZvY3VzLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXN1Y2Nlc3M6Zm9jdXMsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2Vzczpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzM5ODQzOTtib3JkZXItY29sb3I6IzI1NTYyNX0uYnRuLXN1Y2Nlc3MuYWN0aXZlLC5idG4tc3VjY2VzczphY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tc3VjY2Vzc3tiYWNrZ3JvdW5kLWltYWdlOm5vbmV9LmJ0bi1zdWNjZXNzLmRpc2FibGVkLmZvY3VzLC5idG4tc3VjY2Vzcy5kaXNhYmxlZDpmb2N1cywuYnRuLXN1Y2Nlc3MuZGlzYWJsZWQ6aG92ZXIsLmJ0bi1zdWNjZXNzW2Rpc2FibGVkXS5mb2N1cywuYnRuLXN1Y2Nlc3NbZGlzYWJsZWRdOmZvY3VzLC5idG4tc3VjY2Vzc1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tc3VjY2Vzcy5mb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1zdWNjZXNzOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXN1Y2Nlc3M6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNWNiODVjO2JvcmRlci1jb2xvcjojNGNhZTRjfS5idG4tc3VjY2VzcyAuYmFkZ2V7Y29sb3I6IzVjYjg1YztiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmJ0bi1pbmZve2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNWJjMGRlO2JvcmRlci1jb2xvcjojNDZiOGRhfS5idG4taW5mby5mb2N1cywuYnRuLWluZm86Zm9jdXN7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMWIwZDU7Ym9yZGVyLWNvbG9yOiMxYjZkODV9LmJ0bi1pbmZvOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzFiMGQ1O2JvcmRlci1jb2xvcjojMjY5YWJjfS5idG4taW5mby5hY3RpdmUsLmJ0bi1pbmZvOmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZve2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzFiMGQ1O2JvcmRlci1jb2xvcjojMjY5YWJjfS5idG4taW5mby5hY3RpdmUuZm9jdXMsLmJ0bi1pbmZvLmFjdGl2ZTpmb2N1cywuYnRuLWluZm8uYWN0aXZlOmhvdmVyLC5idG4taW5mbzphY3RpdmUuZm9jdXMsLmJ0bi1pbmZvOmFjdGl2ZTpmb2N1cywuYnRuLWluZm86YWN0aXZlOmhvdmVyLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWluZm8uZm9jdXMsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4taW5mbzpmb2N1cywub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZvOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjY5YWJjO2JvcmRlci1jb2xvcjojMWI2ZDg1fS5idG4taW5mby5hY3RpdmUsLmJ0bi1pbmZvOmFjdGl2ZSwub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1pbmZve2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYnRuLWluZm8uZGlzYWJsZWQuZm9jdXMsLmJ0bi1pbmZvLmRpc2FibGVkOmZvY3VzLC5idG4taW5mby5kaXNhYmxlZDpob3ZlciwuYnRuLWluZm9bZGlzYWJsZWRdLmZvY3VzLC5idG4taW5mb1tkaXNhYmxlZF06Zm9jdXMsLmJ0bi1pbmZvW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1pbmZvLmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWluZm86Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4taW5mbzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGU7Ym9yZGVyLWNvbG9yOiM0NmI4ZGF9LmJ0bi1pbmZvIC5iYWRnZXtjb2xvcjojNWJjMGRlO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYnRuLXdhcm5pbmd7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGU7Ym9yZGVyLWNvbG9yOiNlZWEyMzZ9LmJ0bi13YXJuaW5nLmZvY3VzLC5idG4td2FybmluZzpmb2N1c3tjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2VjOTcxZjtib3JkZXItY29sb3I6Izk4NWYwZH0uYnRuLXdhcm5pbmc6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlYzk3MWY7Ym9yZGVyLWNvbG9yOiNkNTg1MTJ9LmJ0bi13YXJuaW5nLmFjdGl2ZSwuYnRuLXdhcm5pbmc6YWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmd7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNlYzk3MWY7Ym9yZGVyLWNvbG9yOiNkNTg1MTJ9LmJ0bi13YXJuaW5nLmFjdGl2ZS5mb2N1cywuYnRuLXdhcm5pbmcuYWN0aXZlOmZvY3VzLC5idG4td2FybmluZy5hY3RpdmU6aG92ZXIsLmJ0bi13YXJuaW5nOmFjdGl2ZS5mb2N1cywuYnRuLXdhcm5pbmc6YWN0aXZlOmZvY3VzLC5idG4td2FybmluZzphY3RpdmU6aG92ZXIsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4td2FybmluZy5mb2N1cywub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi13YXJuaW5nOmZvY3VzLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmc6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiNkNTg1MTI7Ym9yZGVyLWNvbG9yOiM5ODVmMGR9LmJ0bi13YXJuaW5nLmFjdGl2ZSwuYnRuLXdhcm5pbmc6YWN0aXZlLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLXdhcm5pbmd7YmFja2dyb3VuZC1pbWFnZTpub25lfS5idG4td2FybmluZy5kaXNhYmxlZC5mb2N1cywuYnRuLXdhcm5pbmcuZGlzYWJsZWQ6Zm9jdXMsLmJ0bi13YXJuaW5nLmRpc2FibGVkOmhvdmVyLC5idG4td2FybmluZ1tkaXNhYmxlZF0uZm9jdXMsLmJ0bi13YXJuaW5nW2Rpc2FibGVkXTpmb2N1cywuYnRuLXdhcm5pbmdbZGlzYWJsZWRdOmhvdmVyLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLXdhcm5pbmcuZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4td2FybmluZzpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi13YXJuaW5nOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YwYWQ0ZTtib3JkZXItY29sb3I6I2VlYTIzNn0uYnRuLXdhcm5pbmcgLmJhZGdle2NvbG9yOiNmMGFkNGU7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5idG4tZGFuZ2Vye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmO2JvcmRlci1jb2xvcjojZDQzZjNhfS5idG4tZGFuZ2VyLmZvY3VzLC5idG4tZGFuZ2VyOmZvY3Vze2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYzkzMDJjO2JvcmRlci1jb2xvcjojNzYxYzE5fS5idG4tZGFuZ2VyOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYzkzMDJjO2JvcmRlci1jb2xvcjojYWMyOTI1fS5idG4tZGFuZ2VyLmFjdGl2ZSwuYnRuLWRhbmdlcjphY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2Vye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYzkzMDJjO2JvcmRlci1jb2xvcjojYWMyOTI1fS5idG4tZGFuZ2VyLmFjdGl2ZS5mb2N1cywuYnRuLWRhbmdlci5hY3RpdmU6Zm9jdXMsLmJ0bi1kYW5nZXIuYWN0aXZlOmhvdmVyLC5idG4tZGFuZ2VyOmFjdGl2ZS5mb2N1cywuYnRuLWRhbmdlcjphY3RpdmU6Zm9jdXMsLmJ0bi1kYW5nZXI6YWN0aXZlOmhvdmVyLC5vcGVuPi5kcm9wZG93bi10b2dnbGUuYnRuLWRhbmdlci5mb2N1cywub3Blbj4uZHJvcGRvd24tdG9nZ2xlLmJ0bi1kYW5nZXI6Zm9jdXMsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2VyOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojYWMyOTI1O2JvcmRlci1jb2xvcjojNzYxYzE5fS5idG4tZGFuZ2VyLmFjdGl2ZSwuYnRuLWRhbmdlcjphY3RpdmUsLm9wZW4+LmRyb3Bkb3duLXRvZ2dsZS5idG4tZGFuZ2Vye2JhY2tncm91bmQtaW1hZ2U6bm9uZX0uYnRuLWRhbmdlci5kaXNhYmxlZC5mb2N1cywuYnRuLWRhbmdlci5kaXNhYmxlZDpmb2N1cywuYnRuLWRhbmdlci5kaXNhYmxlZDpob3ZlciwuYnRuLWRhbmdlcltkaXNhYmxlZF0uZm9jdXMsLmJ0bi1kYW5nZXJbZGlzYWJsZWRdOmZvY3VzLC5idG4tZGFuZ2VyW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1kYW5nZXIuZm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tZGFuZ2VyOmZvY3VzLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWRhbmdlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkOTUzNGY7Ym9yZGVyLWNvbG9yOiNkNDNmM2F9LmJ0bi1kYW5nZXIgLmJhZGdle2NvbG9yOiNkOTUzNGY7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5idG4tbGlua3tmb250LXdlaWdodDo0MDA7Y29sb3I6IzMzN2FiNztib3JkZXItcmFkaXVzOjB9LmJ0bi1saW5rLC5idG4tbGluay5hY3RpdmUsLmJ0bi1saW5rOmFjdGl2ZSwuYnRuLWxpbmtbZGlzYWJsZWRdLGZpZWxkc2V0W2Rpc2FibGVkXSAuYnRuLWxpbmt7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ0bi1saW5rLC5idG4tbGluazphY3RpdmUsLmJ0bi1saW5rOmZvY3VzLC5idG4tbGluazpob3Zlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LmJ0bi1saW5rOmZvY3VzLC5idG4tbGluazpob3Zlcntjb2xvcjojMjM1MjdjO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0uYnRuLWxpbmtbZGlzYWJsZWRdOmZvY3VzLC5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5idG4tbGluazpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLmJ0bi1saW5rOmhvdmVye2NvbG9yOiM3Nzc7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmJ0bi1ncm91cC1sZz4uYnRuLC5idG4tbGd7cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MS4zMzMzMzMzO2JvcmRlci1yYWRpdXM6NnB4fS5idG4tZ3JvdXAtc20+LmJ0biwuYnRuLXNte3BhZGRpbmc6NXB4IDEwcHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6M3B4fS5idG4tZ3JvdXAteHM+LmJ0biwuYnRuLXhze3BhZGRpbmc6MXB4IDVweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czozcHh9LmJ0bi1ibG9ja3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LmJ0bi1ibG9jaysuYnRuLWJsb2Nre21hcmdpbi10b3A6NXB4fWlucHV0W3R5cGU9YnV0dG9uXS5idG4tYmxvY2ssaW5wdXRbdHlwZT1yZXNldF0uYnRuLWJsb2NrLGlucHV0W3R5cGU9c3VibWl0XS5idG4tYmxvY2t7d2lkdGg6MTAwJX0uZmFkZXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAuMTVzIGxpbmVhcn0uZmFkZS5pbntvcGFjaXR5OjF9LmNvbGxhcHNle2Rpc3BsYXk6bm9uZX0uY29sbGFwc2UuaW57ZGlzcGxheTpibG9ja310ci5jb2xsYXBzZS5pbntkaXNwbGF5OnRhYmxlLXJvd310Ym9keS5jb2xsYXBzZS5pbntkaXNwbGF5OnRhYmxlLXJvdy1ncm91cH0uY29sbGFwc2luZ3twb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlOy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246LjM1czstby10cmFuc2l0aW9uLWR1cmF0aW9uOi4zNXM7dHJhbnNpdGlvbi1kdXJhdGlvbjouMzVzOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsdmlzaWJpbGl0eTstby10cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCx2aXNpYmlsaXR5O3RyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LHZpc2liaWxpdHl9LmNhcmV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjA7aGVpZ2h0OjA7bWFyZ2luLWxlZnQ6MnB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXItdG9wOjRweCBkYXNoZWQ7Ym9yZGVyLXRvcDo0cHggc29saWRcXDk7Ym9yZGVyLXJpZ2h0OjRweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItbGVmdDo0cHggc29saWQgdHJhbnNwYXJlbnR9LmRyb3Bkb3duLC5kcm9wdXB7cG9zaXRpb246cmVsYXRpdmV9LmRyb3Bkb3duLXRvZ2dsZTpmb2N1c3tvdXRsaW5lOjB9LmRyb3Bkb3duLW1lbnV7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMCU7bGVmdDowO3otaW5kZXg6MTAwMDtkaXNwbGF5Om5vbmU7ZmxvYXQ6bGVmdDttaW4td2lkdGg6MTYwcHg7cGFkZGluZzo1cHggMDttYXJnaW46MnB4IDAgMDtmb250LXNpemU6MTRweDt0ZXh0LWFsaWduOmxlZnQ7bGlzdC1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpO2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7Ym94LXNoYWRvdzowIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSl9LmRyb3Bkb3duLW1lbnUucHVsbC1yaWdodHtyaWdodDowO2xlZnQ6YXV0b30uZHJvcGRvd24tbWVudSAuZGl2aWRlcntoZWlnaHQ6MXB4O21hcmdpbjo5cHggMDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZTVlNWU1fS5kcm9wZG93bi1tZW51PmxpPmF7ZGlzcGxheTpibG9jaztwYWRkaW5nOjNweCAyMHB4O2NsZWFyOmJvdGg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7Y29sb3I6IzMzMzt3aGl0ZS1zcGFjZTpub3dyYXB9LmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1cywuZHJvcGRvd24tbWVudT5saT5hOmhvdmVye2NvbG9yOiMyNjI2MjY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YSwuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6Zm9jdXMsLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVye2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O291dGxpbmU6MH0uZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YSwuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YTpmb2N1cywuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YTpob3Zlcntjb2xvcjojNzc3fS5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmZvY3VzLC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpub3QtYWxsb3dlZDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6bm9uZTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQ9ZmFsc2UpfS5vcGVuPi5kcm9wZG93bi1tZW51e2Rpc3BsYXk6YmxvY2t9Lm9wZW4+YXtvdXRsaW5lOjB9LmRyb3Bkb3duLW1lbnUtcmlnaHR7cmlnaHQ6MDtsZWZ0OmF1dG99LmRyb3Bkb3duLW1lbnUtbGVmdHtyaWdodDphdXRvO2xlZnQ6MH0uZHJvcGRvd24taGVhZGVye2Rpc3BsYXk6YmxvY2s7cGFkZGluZzozcHggMjBweDtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiM3Nzc7d2hpdGUtc3BhY2U6bm93cmFwfS5kcm9wZG93bi1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5MH0ucHVsbC1yaWdodD4uZHJvcGRvd24tbWVudXtyaWdodDowO2xlZnQ6YXV0b30uZHJvcHVwIC5jYXJldCwubmF2YmFyLWZpeGVkLWJvdHRvbSAuZHJvcGRvd24gLmNhcmV0e2NvbnRlbnQ6XCJcIjtib3JkZXItdG9wOjA7Ym9yZGVyLWJvdHRvbTo0cHggZGFzaGVkO2JvcmRlci1ib3R0b206NHB4IHNvbGlkXFw5fS5kcm9wdXAgLmRyb3Bkb3duLW1lbnUsLm5hdmJhci1maXhlZC1ib3R0b20gLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51e3RvcDphdXRvO2JvdHRvbToxMDAlO21hcmdpbi1ib3R0b206MnB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51e3JpZ2h0OjA7bGVmdDphdXRvfS5uYXZiYXItcmlnaHQgLmRyb3Bkb3duLW1lbnUtbGVmdHtyaWdodDphdXRvO2xlZnQ6MH19LmJ0bi1ncm91cCwuYnRuLWdyb3VwLXZlcnRpY2Fse3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4sLmJ0bi1ncm91cD4uYnRue3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnR9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLmFjdGl2ZSwuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46YWN0aXZlLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpmb2N1cywuYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46aG92ZXIsLmJ0bi1ncm91cD4uYnRuLmFjdGl2ZSwuYnRuLWdyb3VwPi5idG46YWN0aXZlLC5idG4tZ3JvdXA+LmJ0bjpmb2N1cywuYnRuLWdyb3VwPi5idG46aG92ZXJ7ei1pbmRleDoyfS5idG4tZ3JvdXAgLmJ0bisuYnRuLC5idG4tZ3JvdXAgLmJ0bisuYnRuLWdyb3VwLC5idG4tZ3JvdXAgLmJ0bi1ncm91cCsuYnRuLC5idG4tZ3JvdXAgLmJ0bi1ncm91cCsuYnRuLWdyb3Vwe21hcmdpbi1sZWZ0Oi0xcHh9LmJ0bi10b29sYmFye21hcmdpbi1sZWZ0Oi01cHh9LmJ0bi10b29sYmFyIC5idG4sLmJ0bi10b29sYmFyIC5idG4tZ3JvdXAsLmJ0bi10b29sYmFyIC5pbnB1dC1ncm91cHtmbG9hdDpsZWZ0fS5idG4tdG9vbGJhcj4uYnRuLC5idG4tdG9vbGJhcj4uYnRuLWdyb3VwLC5idG4tdG9vbGJhcj4uaW5wdXQtZ3JvdXB7bWFyZ2luLWxlZnQ6NXB4fS5idG4tZ3JvdXA+LmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKXtib3JkZXItcmFkaXVzOjB9LmJ0bi1ncm91cD4uYnRuOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9LmJ0bi1ncm91cD4uYnRuOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpe2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uYnRuLWdyb3VwPi5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSwuYnRuLWdyb3VwPi5kcm9wZG93bi10b2dnbGU6bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0uYnRuLWdyb3VwPi5idG4tZ3JvdXB7ZmxvYXQ6bGVmdH0uYnRuLWdyb3VwPi5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKT4uYnRue2JvcmRlci1yYWRpdXM6MH0uYnRuLWdyb3VwPi5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKT4uYnRuOmxhc3QtY2hpbGQsLmJ0bi1ncm91cD4uYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmRyb3Bkb3duLXRvZ2dsZXtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9LmJ0bi1ncm91cD4uYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmJ0bjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5idG4tZ3JvdXAgLmRyb3Bkb3duLXRvZ2dsZTphY3RpdmUsLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGV7b3V0bGluZTowfS5idG4tZ3JvdXA+LmJ0bisuZHJvcGRvd24tdG9nZ2xle3BhZGRpbmctcmlnaHQ6OHB4O3BhZGRpbmctbGVmdDo4cHh9LmJ0bi1ncm91cD4uYnRuLWxnKy5kcm9wZG93bi10b2dnbGV7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoxMnB4fS5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xley13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KTtib3gtc2hhZG93Omluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpfS5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1saW5rey13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnRuIC5jYXJldHttYXJnaW4tbGVmdDowfS5idG4tbGcgLmNhcmV0e2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5kcm9wdXAgLmJ0bi1sZyAuY2FyZXR7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG4sLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cD4uYnRue2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZTt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cD4uYnRue2Zsb2F0Om5vbmV9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuKy5idG4sLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuKy5idG4tZ3JvdXAsLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwKy5idG4sLmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwKy5idG4tZ3JvdXB7bWFyZ2luLXRvcDotMXB4O21hcmdpbi1sZWZ0OjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLXJhZGl1czowfS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0uYnRuLWdyb3VwLXZlcnRpY2FsPi5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHh9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bntib3JkZXItcmFkaXVzOjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCk+LmJ0bjpsYXN0LWNoaWxkLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpPi5kcm9wZG93bi10b2dnbGV7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCk+LmJ0bjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uYnRuLWdyb3VwLWp1c3RpZmllZHtkaXNwbGF5OnRhYmxlO3dpZHRoOjEwMCU7dGFibGUtbGF5b3V0OmZpeGVkO2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZX0uYnRuLWdyb3VwLWp1c3RpZmllZD4uYnRuLC5idG4tZ3JvdXAtanVzdGlmaWVkPi5idG4tZ3JvdXB7ZGlzcGxheTp0YWJsZS1jZWxsO2Zsb2F0Om5vbmU7d2lkdGg6MSV9LmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0bi1ncm91cCAuYnRue3dpZHRoOjEwMCV9LmJ0bi1ncm91cC1qdXN0aWZpZWQ+LmJ0bi1ncm91cCAuZHJvcGRvd24tbWVudXtsZWZ0OmF1dG99W2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4gaW5wdXRbdHlwZT1jaGVja2JveF0sW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4gaW5wdXRbdHlwZT1yYWRpb10sW2RhdGEtdG9nZ2xlPWJ1dHRvbnNdPi5idG4tZ3JvdXA+LmJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSxbZGF0YS10b2dnbGU9YnV0dG9uc10+LmJ0bi1ncm91cD4uYnRuIGlucHV0W3R5cGU9cmFkaW9de3Bvc2l0aW9uOmFic29sdXRlO2NsaXA6cmVjdCgwLDAsMCwwKTtwb2ludGVyLWV2ZW50czpub25lfS5pbnB1dC1ncm91cHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OnRhYmxlO2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZX0uaW5wdXQtZ3JvdXBbY2xhc3MqPWNvbC1de2Zsb2F0Om5vbmU7cGFkZGluZy1yaWdodDowO3BhZGRpbmctbGVmdDowfS5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9se3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjtmbG9hdDpsZWZ0O3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbTowfS5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3Vze3otaW5kZXg6M30uaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCwuaW5wdXQtZ3JvdXAtbGc+LmlucHV0LWdyb3VwLWFkZG9uLC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYnRuPi5idG57aGVpZ2h0OjQ2cHg7cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MS4zMzMzMzMzO2JvcmRlci1yYWRpdXM6NnB4fXNlbGVjdC5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLHNlbGVjdC5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYWRkb24sc2VsZWN0LmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bntoZWlnaHQ6NDZweDtsaW5lLWhlaWdodDo0NnB4fXNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtbGc+LmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1idG4+LmJ0bix0ZXh0YXJlYS5pbnB1dC1ncm91cC1sZz4uZm9ybS1jb250cm9sLHRleHRhcmVhLmlucHV0LWdyb3VwLWxnPi5pbnB1dC1ncm91cC1hZGRvbix0ZXh0YXJlYS5pbnB1dC1ncm91cC1sZz4uaW5wdXQtZ3JvdXAtYnRuPi5idG57aGVpZ2h0OmF1dG99LmlucHV0LWdyb3VwLXNtPi5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbiwuaW5wdXQtZ3JvdXAtc20+LmlucHV0LWdyb3VwLWJ0bj4uYnRue2hlaWdodDozMHB4O3BhZGRpbmc6NXB4IDEwcHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6M3B4fXNlbGVjdC5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLHNlbGVjdC5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYWRkb24sc2VsZWN0LmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0bntoZWlnaHQ6MzBweDtsaW5lLWhlaWdodDozMHB4fXNlbGVjdFttdWx0aXBsZV0uaW5wdXQtZ3JvdXAtc20+LmZvcm0tY29udHJvbCxzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbixzZWxlY3RbbXVsdGlwbGVdLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1idG4+LmJ0bix0ZXh0YXJlYS5pbnB1dC1ncm91cC1zbT4uZm9ybS1jb250cm9sLHRleHRhcmVhLmlucHV0LWdyb3VwLXNtPi5pbnB1dC1ncm91cC1hZGRvbix0ZXh0YXJlYS5pbnB1dC1ncm91cC1zbT4uaW5wdXQtZ3JvdXAtYnRuPi5idG57aGVpZ2h0OmF1dG99LmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wsLmlucHV0LWdyb3VwLWFkZG9uLC5pbnB1dC1ncm91cC1idG57ZGlzcGxheTp0YWJsZS1jZWxsfS5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksLmlucHV0LWdyb3VwLWFkZG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCksLmlucHV0LWdyb3VwLWJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1yYWRpdXM6MH0uaW5wdXQtZ3JvdXAtYWRkb24sLmlucHV0LWdyb3VwLWJ0bnt3aWR0aDoxJTt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlfS5pbnB1dC1ncm91cC1hZGRvbntwYWRkaW5nOjZweCAxMnB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxO2NvbG9yOiM1NTU7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZWVlO2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjRweH0uaW5wdXQtZ3JvdXAtYWRkb24uaW5wdXQtc217cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MTJweDtib3JkZXItcmFkaXVzOjNweH0uaW5wdXQtZ3JvdXAtYWRkb24uaW5wdXQtbGd7cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE4cHg7Ym9yZGVyLXJhZGl1czo2cHh9LmlucHV0LWdyb3VwLWFkZG9uIGlucHV0W3R5cGU9Y2hlY2tib3hdLC5pbnB1dC1ncm91cC1hZGRvbiBpbnB1dFt0eXBlPXJhZGlvXXttYXJnaW4tdG9wOjB9LmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkLC5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQ+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4tZ3JvdXA+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5kcm9wZG93bi10b2dnbGUsLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKT4uYnRuLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpe2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjB9LmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bGFzdC1jaGlsZCwuaW5wdXQtZ3JvdXAtYWRkb246bGFzdC1jaGlsZCwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG46bm90KDpmaXJzdC1jaGlsZCksLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkPi5idG4tZ3JvdXA+LmJ0biwuaW5wdXQtZ3JvdXAtYnRuOmxhc3QtY2hpbGQ+LmRyb3Bkb3duLXRvZ2dsZXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxke2JvcmRlci1sZWZ0OjB9LmlucHV0LWdyb3VwLWJ0bntwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MDt3aGl0ZS1zcGFjZTpub3dyYXB9LmlucHV0LWdyb3VwLWJ0bj4uYnRue3Bvc2l0aW9uOnJlbGF0aXZlfS5pbnB1dC1ncm91cC1idG4+LmJ0bisuYnRue21hcmdpbi1sZWZ0Oi0xcHh9LmlucHV0LWdyb3VwLWJ0bj4uYnRuOmFjdGl2ZSwuaW5wdXQtZ3JvdXAtYnRuPi5idG46Zm9jdXMsLmlucHV0LWdyb3VwLWJ0bj4uYnRuOmhvdmVye3otaW5kZXg6Mn0uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkPi5idG4sLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZD4uYnRuLWdyb3Vwe21hcmdpbi1yaWdodDotMXB4fS5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuLWdyb3Vwe3otaW5kZXg6MjttYXJnaW4tbGVmdDotMXB4fS5uYXZ7cGFkZGluZy1sZWZ0OjA7bWFyZ2luLWJvdHRvbTowO2xpc3Qtc3R5bGU6bm9uZX0ubmF2Pmxpe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9Lm5hdj5saT5he3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxMHB4IDE1cHh9Lm5hdj5saT5hOmZvY3VzLC5uYXY+bGk+YTpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm5hdj5saS5kaXNhYmxlZD5he2NvbG9yOiM3Nzd9Lm5hdj5saS5kaXNhYmxlZD5hOmZvY3VzLC5uYXY+bGkuZGlzYWJsZWQ+YTpob3Zlcntjb2xvcjojNzc3O3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpub3QtYWxsb3dlZDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXYgLm9wZW4+YSwubmF2IC5vcGVuPmE6Zm9jdXMsLm5hdiAub3Blbj5hOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2VlZTtib3JkZXItY29sb3I6IzMzN2FiN30ubmF2IC5uYXYtZGl2aWRlcntoZWlnaHQ6MXB4O21hcmdpbjo5cHggMDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZTVlNWU1fS5uYXY+bGk+YT5pbWd7bWF4LXdpZHRoOm5vbmV9Lm5hdi10YWJze2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGR9Lm5hdi10YWJzPmxpe2Zsb2F0OmxlZnQ7bWFyZ2luLWJvdHRvbTotMXB4fS5uYXYtdGFicz5saT5he21hcmdpbi1yaWdodDoycHg7bGluZS1oZWlnaHQ6MS40Mjg1NzE0Mztib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NHB4IDRweCAwIDB9Lm5hdi10YWJzPmxpPmE6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNlZWUgI2VlZSAjZGRkfS5uYXYtdGFicz5saS5hY3RpdmU+YSwubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsLm5hdi10YWJzPmxpLmFjdGl2ZT5hOmhvdmVye2NvbG9yOiM1NTU7Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50fS5uYXYtdGFicy5uYXYtanVzdGlmaWVke3dpZHRoOjEwMCU7Ym9yZGVyLWJvdHRvbTowfS5uYXYtdGFicy5uYXYtanVzdGlmaWVkPmxpe2Zsb2F0Om5vbmV9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+bGk+YXttYXJnaW4tYm90dG9tOjVweDt0ZXh0LWFsaWduOmNlbnRlcn0ubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uZHJvcGRvd24gLmRyb3Bkb3duLW1lbnV7dG9wOmF1dG87bGVmdDphdXRvfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMubmF2LWp1c3RpZmllZD5saXtkaXNwbGF5OnRhYmxlLWNlbGw7d2lkdGg6MSV9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+bGk+YXttYXJnaW4tYm90dG9tOjB9fS5uYXYtdGFicy5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czo0cHh9Lm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+LmFjdGl2ZT5hLC5uYXYtdGFicy5uYXYtanVzdGlmaWVkPi5hY3RpdmU+YTpmb2N1cywubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uYWN0aXZlPmE6aG92ZXJ7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMubmF2LWp1c3RpZmllZD5saT5he2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMH0ubmF2LXRhYnMubmF2LWp1c3RpZmllZD4uYWN0aXZlPmEsLm5hdi10YWJzLm5hdi1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmZvY3VzLC5uYXYtdGFicy5uYXYtanVzdGlmaWVkPi5hY3RpdmU+YTpob3Zlcntib3JkZXItYm90dG9tLWNvbG9yOiNmZmZ9fS5uYXYtcGlsbHM+bGl7ZmxvYXQ6bGVmdH0ubmF2LXBpbGxzPmxpPmF7Ym9yZGVyLXJhZGl1czo0cHh9Lm5hdi1waWxscz5saStsaXttYXJnaW4tbGVmdDoycHh9Lm5hdi1waWxscz5saS5hY3RpdmU+YSwubmF2LXBpbGxzPmxpLmFjdGl2ZT5hOmZvY3VzLC5uYXYtcGlsbHM+bGkuYWN0aXZlPmE6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjd9Lm5hdi1zdGFja2VkPmxpe2Zsb2F0Om5vbmV9Lm5hdi1zdGFja2VkPmxpK2xpe21hcmdpbi10b3A6MnB4O21hcmdpbi1sZWZ0OjB9Lm5hdi1qdXN0aWZpZWR7d2lkdGg6MTAwJX0ubmF2LWp1c3RpZmllZD5saXtmbG9hdDpub25lfS5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLWJvdHRvbTo1cHg7dGV4dC1hbGlnbjpjZW50ZXJ9Lm5hdi1qdXN0aWZpZWQ+LmRyb3Bkb3duIC5kcm9wZG93bi1tZW51e3RvcDphdXRvO2xlZnQ6YXV0b31AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdi1qdXN0aWZpZWQ+bGl7ZGlzcGxheTp0YWJsZS1jZWxsO3dpZHRoOjElfS5uYXYtanVzdGlmaWVkPmxpPmF7bWFyZ2luLWJvdHRvbTowfX0ubmF2LXRhYnMtanVzdGlmaWVke2JvcmRlci1ib3R0b206MH0ubmF2LXRhYnMtanVzdGlmaWVkPmxpPmF7bWFyZ2luLXJpZ2h0OjA7Ym9yZGVyLXJhZGl1czo0cHh9Lm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmEsLm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmE6Zm9jdXMsLm5hdi10YWJzLWp1c3RpZmllZD4uYWN0aXZlPmE6aG92ZXJ7Ym9yZGVyOjFweCBzb2xpZCAjZGRkfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2LXRhYnMtanVzdGlmaWVkPmxpPmF7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweCA0cHggMCAwfS5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hLC5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmZvY3VzLC5uYXYtdGFicy1qdXN0aWZpZWQ+LmFjdGl2ZT5hOmhvdmVye2JvcmRlci1ib3R0b20tY29sb3I6I2ZmZn19LnRhYi1jb250ZW50Pi50YWItcGFuZXtkaXNwbGF5Om5vbmV9LnRhYi1jb250ZW50Pi5hY3RpdmV7ZGlzcGxheTpibG9ja30ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnV7bWFyZ2luLXRvcDotMXB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5uYXZiYXJ7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDo1MHB4O21hcmdpbi1ib3R0b206MjBweDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFye2JvcmRlci1yYWRpdXM6NHB4fX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1oZWFkZXJ7ZmxvYXQ6bGVmdH19Lm5hdmJhci1jb2xsYXBzZXtwYWRkaW5nLXJpZ2h0OjE1cHg7cGFkZGluZy1sZWZ0OjE1cHg7b3ZlcmZsb3cteDp2aXNpYmxlOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO2JvcmRlci10b3A6MXB4IHNvbGlkIHRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjEpO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubmF2YmFyLWNvbGxhcHNlLmlue292ZXJmbG93LXk6YXV0b31AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1jb2xsYXBzZXt3aWR0aDphdXRvO2JvcmRlci10b3A6MDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Lm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudDtoZWlnaHQ6YXV0byFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MDtvdmVyZmxvdzp2aXNpYmxlIWltcG9ydGFudH0ubmF2YmFyLWNvbGxhcHNlLmlue292ZXJmbG93LXk6dmlzaWJsZX0ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItY29sbGFwc2UsLm5hdmJhci1zdGF0aWMtdG9wIC5uYXZiYXItY29sbGFwc2V7cGFkZGluZy1yaWdodDowO3BhZGRpbmctbGVmdDowfX0ubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItY29sbGFwc2V7bWF4LWhlaWdodDozNDBweH1AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6NDgwcHgpIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKXsubmF2YmFyLWZpeGVkLWJvdHRvbSAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZml4ZWQtdG9wIC5uYXZiYXItY29sbGFwc2V7bWF4LWhlaWdodDoyMDBweH19LmNvbnRhaW5lci1mbHVpZD4ubmF2YmFyLWNvbGxhcHNlLC5jb250YWluZXItZmx1aWQ+Lm5hdmJhci1oZWFkZXIsLmNvbnRhaW5lcj4ubmF2YmFyLWNvbGxhcHNlLC5jb250YWluZXI+Lm5hdmJhci1oZWFkZXJ7bWFyZ2luLXJpZ2h0Oi0xNXB4O21hcmdpbi1sZWZ0Oi0xNXB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsuY29udGFpbmVyLWZsdWlkPi5uYXZiYXItY29sbGFwc2UsLmNvbnRhaW5lci1mbHVpZD4ubmF2YmFyLWhlYWRlciwuY29udGFpbmVyPi5uYXZiYXItY29sbGFwc2UsLmNvbnRhaW5lcj4ubmF2YmFyLWhlYWRlcnttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfX0ubmF2YmFyLXN0YXRpYy10b3B7ei1pbmRleDoxMDAwO2JvcmRlci13aWR0aDowIDAgMXB4fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyLXN0YXRpYy10b3B7Ym9yZGVyLXJhZGl1czowfX0ubmF2YmFyLWZpeGVkLWJvdHRvbSwubmF2YmFyLWZpeGVkLXRvcHtwb3NpdGlvbjpmaXhlZDtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjEwMzB9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItZml4ZWQtYm90dG9tLC5uYXZiYXItZml4ZWQtdG9we2JvcmRlci1yYWRpdXM6MH19Lm5hdmJhci1maXhlZC10b3B7dG9wOjA7Ym9yZGVyLXdpZHRoOjAgMCAxcHh9Lm5hdmJhci1maXhlZC1ib3R0b217Ym90dG9tOjA7bWFyZ2luLWJvdHRvbTowO2JvcmRlci13aWR0aDoxcHggMCAwfS5uYXZiYXItYnJhbmR7ZmxvYXQ6bGVmdDtoZWlnaHQ6NTBweDtwYWRkaW5nOjE1cHggMTVweDtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoyMHB4fS5uYXZiYXItYnJhbmQ6Zm9jdXMsLm5hdmJhci1icmFuZDpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZX0ubmF2YmFyLWJyYW5kPmltZ3tkaXNwbGF5OmJsb2NrfUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCwubmF2YmFyPi5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZHttYXJnaW4tbGVmdDotMTVweH19Lm5hdmJhci10b2dnbGV7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6cmlnaHQ7cGFkZGluZzo5cHggMTBweDttYXJnaW4tdG9wOjhweDttYXJnaW4tcmlnaHQ6MTVweDttYXJnaW4tYm90dG9tOjhweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NHB4fS5uYXZiYXItdG9nZ2xlOmZvY3Vze291dGxpbmU6MH0ubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7ZGlzcGxheTpibG9jazt3aWR0aDoyMnB4O2hlaWdodDoycHg7Ym9yZGVyLXJhZGl1czoxcHh9Lm5hdmJhci10b2dnbGUgLmljb24tYmFyKy5pY29uLWJhcnttYXJnaW4tdG9wOjRweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci10b2dnbGV7ZGlzcGxheTpub25lfX0ubmF2YmFyLW5hdnttYXJnaW46Ny41cHggLTE1cHh9Lm5hdmJhci1uYXY+bGk+YXtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7bGluZS1oZWlnaHQ6MjBweH1AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7Lm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnV7cG9zaXRpb246c3RhdGljO2Zsb2F0Om5vbmU7d2lkdGg6YXV0bzttYXJnaW4tdG9wOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Lm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlciwubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5he3BhZGRpbmc6NXB4IDE1cHggNXB4IDI1cHh9Lm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YXtsaW5lLWhlaWdodDoyMHB4fS5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YTpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOm5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXsubmF2YmFyLW5hdntmbG9hdDpsZWZ0O21hcmdpbjowfS5uYXZiYXItbmF2Pmxpe2Zsb2F0OmxlZnR9Lm5hdmJhci1uYXY+bGk+YXtwYWRkaW5nLXRvcDoxNXB4O3BhZGRpbmctYm90dG9tOjE1cHh9fS5uYXZiYXItZm9ybXtwYWRkaW5nOjEwcHggMTVweDttYXJnaW4tdG9wOjhweDttYXJnaW4tcmlnaHQ6LTE1cHg7bWFyZ2luLWJvdHRvbTo4cHg7bWFyZ2luLWxlZnQ6LTE1cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSksMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSksMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xKX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1mb3JtIC5mb3JtLWdyb3Vwe2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm5hdmJhci1mb3JtIC5mb3JtLWNvbnRyb2x7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bzt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm5hdmJhci1mb3JtIC5mb3JtLWNvbnRyb2wtc3RhdGlje2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5uYXZiYXItZm9ybSAuaW5wdXQtZ3JvdXB7ZGlzcGxheTppbmxpbmUtdGFibGU7dmVydGljYWwtYWxpZ246bWlkZGxlfS5uYXZiYXItZm9ybSAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCwubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiwubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idG57d2lkdGg6YXV0b30ubmF2YmFyLWZvcm0gLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2x7d2lkdGg6MTAwJX0ubmF2YmFyLWZvcm0gLmNvbnRyb2wtbGFiZWx7bWFyZ2luLWJvdHRvbTowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubmF2YmFyLWZvcm0gLmNoZWNrYm94LC5uYXZiYXItZm9ybSAucmFkaW97ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm5hdmJhci1mb3JtIC5jaGVja2JveCBsYWJlbCwubmF2YmFyLWZvcm0gLnJhZGlvIGxhYmVse3BhZGRpbmctbGVmdDowfS5uYXZiYXItZm9ybSAuY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0sLm5hdmJhci1mb3JtIC5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDowfS5uYXZiYXItZm9ybSAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7dG9wOjB9fUBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXsubmF2YmFyLWZvcm0gLmZvcm0tZ3JvdXB7bWFyZ2luLWJvdHRvbTo1cHh9Lm5hdmJhci1mb3JtIC5mb3JtLWdyb3VwOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci1mb3Jte3dpZHRoOmF1dG87cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjA7Ym9yZGVyOjA7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfX0ubmF2YmFyLW5hdj5saT4uZHJvcGRvd24tbWVudXttYXJnaW4tdG9wOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1uYXY+bGk+LmRyb3Bkb3duLW1lbnV7bWFyZ2luLWJvdHRvbTowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MH0ubmF2YmFyLWJ0bnttYXJnaW4tdG9wOjhweDttYXJnaW4tYm90dG9tOjhweH0ubmF2YmFyLWJ0bi5idG4tc217bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweH0ubmF2YmFyLWJ0bi5idG4teHN7bWFyZ2luLXRvcDoxNHB4O21hcmdpbi1ib3R0b206MTRweH0ubmF2YmFyLXRleHR7bWFyZ2luLXRvcDoxNXB4O21hcmdpbi1ib3R0b206MTVweH1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7Lm5hdmJhci10ZXh0e2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjE1cHg7bWFyZ2luLWxlZnQ6MTVweH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5uYXZiYXItbGVmdHtmbG9hdDpsZWZ0IWltcG9ydGFudH0ubmF2YmFyLXJpZ2h0e2Zsb2F0OnJpZ2h0IWltcG9ydGFudDttYXJnaW4tcmlnaHQ6LTE1cHh9Lm5hdmJhci1yaWdodH4ubmF2YmFyLXJpZ2h0e21hcmdpbi1yaWdodDowfX0ubmF2YmFyLWRlZmF1bHR7YmFja2dyb3VuZC1jb2xvcjojZjhmOGY4O2JvcmRlci1jb2xvcjojZTdlN2U3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5ke2NvbG9yOiM3Nzd9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6Zm9jdXMsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXJ7Y29sb3I6IzVlNWU1ZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRleHR7Y29sb3I6Izc3N30ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YXtjb2xvcjojNzc3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmZvY3VzLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj5saT5hOmhvdmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmFjdGl2ZT5hLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj4uYWN0aXZlPmE6Zm9jdXMsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpob3Zlcntjb2xvcjojNTU1O2JhY2tncm91bmQtY29sb3I6I2U3ZTdlN30ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmRpc2FibGVkPmEsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5kaXNhYmxlZD5hOmZvY3VzLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj4uZGlzYWJsZWQ+YTpob3Zlcntjb2xvcjojY2NjO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xle2JvcmRlci1jb2xvcjojZGRkfS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpmb2N1cywubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGRkfS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7YmFja2dyb3VuZC1jb2xvcjojODg4fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWZvcm17Ym9yZGVyLWNvbG9yOiNlN2U3ZTd9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmEsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXMsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmE6aG92ZXJ7Y29sb3I6IzU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNlN2U3ZTd9QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5he2NvbG9yOiM3Nzd9Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6Zm9jdXMsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXJ7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uYWN0aXZlPmEsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YTpmb2N1cywubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmhvdmVye2NvbG9yOiM1NTU7YmFja2dyb3VuZC1jb2xvcjojZTdlN2U3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YSwubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6Zm9jdXMsLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hOmhvdmVye2NvbG9yOiNjY2M7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH19Lm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbGlua3tjb2xvcjojNzc3fS5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbms6aG92ZXJ7Y29sb3I6IzMzM30ubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5re2NvbG9yOiM3Nzd9Lm5hdmJhci1kZWZhdWx0IC5idG4tbGluazpmb2N1cywubmF2YmFyLWRlZmF1bHQgLmJ0bi1saW5rOmhvdmVye2NvbG9yOiMzMzN9Lm5hdmJhci1kZWZhdWx0IC5idG4tbGlua1tkaXNhYmxlZF06Zm9jdXMsLm5hdmJhci1kZWZhdWx0IC5idG4tbGlua1tkaXNhYmxlZF06aG92ZXIsZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbms6Zm9jdXMsZmllbGRzZXRbZGlzYWJsZWRdIC5uYXZiYXItZGVmYXVsdCAuYnRuLWxpbms6aG92ZXJ7Y29sb3I6I2NjY30ubmF2YmFyLWludmVyc2V7YmFja2dyb3VuZC1jb2xvcjojMjIyO2JvcmRlci1jb2xvcjojMDgwODA4fS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWJyYW5ke2NvbG9yOiM5ZDlkOWR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQ6Zm9jdXMsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItYnJhbmQ6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRleHR7Y29sb3I6IzlkOWQ5ZH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+bGk+YXtjb2xvcjojOWQ5ZDlkfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj5saT5hOmZvY3VzLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj5saT5hOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+LmFjdGl2ZT5hLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj4uYWN0aXZlPmE6Zm9jdXMsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzA4MDgwOH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+LmRpc2FibGVkPmEsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5kaXNhYmxlZD5hOmZvY3VzLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdj4uZGlzYWJsZWQ+YTpob3Zlcntjb2xvcjojNDQ0O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xle2JvcmRlci1jb2xvcjojMzMzfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpmb2N1cywubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzMzfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWNvbGxhcHNlLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLWZvcm17Ym9yZGVyLWNvbG9yOiMxMDEwMTB9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5vcGVuPmEsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXMsLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2Pi5vcGVuPmE6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDh9QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uZHJvcGRvd24taGVhZGVye2JvcmRlci1jb2xvcjojMDgwODA4fS5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSAuZGl2aWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDh9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmF7Y29sb3I6IzlkOWQ5ZH0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YTpmb2N1cywubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+bGk+YTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5hY3RpdmU+YSwubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmFjdGl2ZT5hOmZvY3VzLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uYWN0aXZlPmE6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwODA4MDh9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51Pi5kaXNhYmxlZD5hLC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT4uZGlzYWJsZWQ+YTpmb2N1cywubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnU+LmRpc2FibGVkPmE6aG92ZXJ7Y29sb3I6IzQ0NDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fX0ubmF2YmFyLWludmVyc2UgLm5hdmJhci1saW5re2NvbG9yOiM5ZDlkOWR9Lm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbGluazpob3Zlcntjb2xvcjojZmZmfS5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbmt7Y29sb3I6IzlkOWQ5ZH0ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rOmZvY3VzLC5uYXZiYXItaW52ZXJzZSAuYnRuLWxpbms6aG92ZXJ7Y29sb3I6I2ZmZn0ubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rW2Rpc2FibGVkXTpmb2N1cywubmF2YmFyLWludmVyc2UgLmJ0bi1saW5rW2Rpc2FibGVkXTpob3ZlcixmaWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpmb2N1cyxmaWVsZHNldFtkaXNhYmxlZF0gLm5hdmJhci1pbnZlcnNlIC5idG4tbGluazpob3Zlcntjb2xvcjojNDQ0fS5icmVhZGNydW1ie3BhZGRpbmc6OHB4IDE1cHg7bWFyZ2luLWJvdHRvbToyMHB4O2xpc3Qtc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czo0cHh9LmJyZWFkY3J1bWI+bGl7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmJyZWFkY3J1bWI+bGkrbGk6YmVmb3Jle3BhZGRpbmc6MCA1cHg7Y29sb3I6I2NjYztjb250ZW50OlwiL1xcMDBhMFwifS5icmVhZGNydW1iPi5hY3RpdmV7Y29sb3I6Izc3N30ucGFnaW5hdGlvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLWxlZnQ6MDttYXJnaW46MjBweCAwO2JvcmRlci1yYWRpdXM6NHB4fS5wYWdpbmF0aW9uPmxpe2Rpc3BsYXk6aW5saW5lfS5wYWdpbmF0aW9uPmxpPmEsLnBhZ2luYXRpb24+bGk+c3Bhbntwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpsZWZ0O3BhZGRpbmc6NnB4IDEycHg7bWFyZ2luLWxlZnQ6LTFweDtsaW5lLWhlaWdodDoxLjQyODU3MTQzO2NvbG9yOiMzMzdhYjc7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZH0ucGFnaW5hdGlvbj5saTpmaXJzdC1jaGlsZD5hLC5wYWdpbmF0aW9uPmxpOmZpcnN0LWNoaWxkPnNwYW57bWFyZ2luLWxlZnQ6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ucGFnaW5hdGlvbj5saTpsYXN0LWNoaWxkPmEsLnBhZ2luYXRpb24+bGk6bGFzdC1jaGlsZD5zcGFue2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHh9LnBhZ2luYXRpb24+bGk+YTpmb2N1cywucGFnaW5hdGlvbj5saT5hOmhvdmVyLC5wYWdpbmF0aW9uPmxpPnNwYW46Zm9jdXMsLnBhZ2luYXRpb24+bGk+c3Bhbjpob3Zlcnt6LWluZGV4OjI7Y29sb3I6IzIzNTI3YztiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7Ym9yZGVyLWNvbG9yOiNkZGR9LnBhZ2luYXRpb24+LmFjdGl2ZT5hLC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywucGFnaW5hdGlvbj4uYWN0aXZlPmE6aG92ZXIsLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuLC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW46aG92ZXJ7ei1pbmRleDozO2NvbG9yOiNmZmY7Y3Vyc29yOmRlZmF1bHQ7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O2JvcmRlci1jb2xvcjojMzM3YWI3fS5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hLC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hOmZvY3VzLC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5hOmhvdmVyLC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuLC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuOmZvY3VzLC5wYWdpbmF0aW9uPi5kaXNhYmxlZD5zcGFuOmhvdmVye2NvbG9yOiM3Nzc7Y3Vyc29yOm5vdC1hbGxvd2VkO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RkZH0ucGFnaW5hdGlvbi1sZz5saT5hLC5wYWdpbmF0aW9uLWxnPmxpPnNwYW57cGFkZGluZzoxMHB4IDE2cHg7Zm9udC1zaXplOjE4cHg7bGluZS1oZWlnaHQ6MS4zMzMzMzMzfS5wYWdpbmF0aW9uLWxnPmxpOmZpcnN0LWNoaWxkPmEsLnBhZ2luYXRpb24tbGc+bGk6Zmlyc3QtY2hpbGQ+c3Bhbntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjZweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjZweH0ucGFnaW5hdGlvbi1sZz5saTpsYXN0LWNoaWxkPmEsLnBhZ2luYXRpb24tbGc+bGk6bGFzdC1jaGlsZD5zcGFue2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjZweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo2cHh9LnBhZ2luYXRpb24tc20+bGk+YSwucGFnaW5hdGlvbi1zbT5saT5zcGFue3BhZGRpbmc6NXB4IDEwcHg7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS41fS5wYWdpbmF0aW9uLXNtPmxpOmZpcnN0LWNoaWxkPmEsLnBhZ2luYXRpb24tc20+bGk6Zmlyc3QtY2hpbGQ+c3Bhbntib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweH0ucGFnaW5hdGlvbi1zbT5saTpsYXN0LWNoaWxkPmEsLnBhZ2luYXRpb24tc20+bGk6bGFzdC1jaGlsZD5zcGFue2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHh9LnBhZ2Vye3BhZGRpbmctbGVmdDowO21hcmdpbjoyMHB4IDA7dGV4dC1hbGlnbjpjZW50ZXI7bGlzdC1zdHlsZTpub25lfS5wYWdlciBsaXtkaXNwbGF5OmlubGluZX0ucGFnZXIgbGk+YSwucGFnZXIgbGk+c3BhbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjVweCAxNHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLXJhZGl1czoxNXB4fS5wYWdlciBsaT5hOmZvY3VzLC5wYWdlciBsaT5hOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lO2JhY2tncm91bmQtY29sb3I6I2VlZX0ucGFnZXIgLm5leHQ+YSwucGFnZXIgLm5leHQ+c3BhbntmbG9hdDpyaWdodH0ucGFnZXIgLnByZXZpb3VzPmEsLnBhZ2VyIC5wcmV2aW91cz5zcGFue2Zsb2F0OmxlZnR9LnBhZ2VyIC5kaXNhYmxlZD5hLC5wYWdlciAuZGlzYWJsZWQ+YTpmb2N1cywucGFnZXIgLmRpc2FibGVkPmE6aG92ZXIsLnBhZ2VyIC5kaXNhYmxlZD5zcGFue2NvbG9yOiM3Nzc7Y3Vyc29yOm5vdC1hbGxvd2VkO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubGFiZWx7ZGlzcGxheTppbmxpbmU7cGFkZGluZzouMmVtIC42ZW0gLjNlbTtmb250LXNpemU6NzUlO2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxO2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO2JvcmRlci1yYWRpdXM6LjI1ZW19YS5sYWJlbDpmb2N1cyxhLmxhYmVsOmhvdmVye2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9LmxhYmVsOmVtcHR5e2Rpc3BsYXk6bm9uZX0uYnRuIC5sYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTFweH0ubGFiZWwtZGVmYXVsdHtiYWNrZ3JvdW5kLWNvbG9yOiM3Nzd9LmxhYmVsLWRlZmF1bHRbaHJlZl06Zm9jdXMsLmxhYmVsLWRlZmF1bHRbaHJlZl06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojNWU1ZTVlfS5sYWJlbC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzMzN2FiN30ubGFiZWwtcHJpbWFyeVtocmVmXTpmb2N1cywubGFiZWwtcHJpbWFyeVtocmVmXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyODYwOTB9LmxhYmVsLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojNWNiODVjfS5sYWJlbC1zdWNjZXNzW2hyZWZdOmZvY3VzLC5sYWJlbC1zdWNjZXNzW2hyZWZdOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzQ0OWQ0NH0ubGFiZWwtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGV9LmxhYmVsLWluZm9baHJlZl06Zm9jdXMsLmxhYmVsLWluZm9baHJlZl06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzFiMGQ1fS5sYWJlbC13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2YwYWQ0ZX0ubGFiZWwtd2FybmluZ1tocmVmXTpmb2N1cywubGFiZWwtd2FybmluZ1tocmVmXTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlYzk3MWZ9LmxhYmVsLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNkOTUzNGZ9LmxhYmVsLWRhbmdlcltocmVmXTpmb2N1cywubGFiZWwtZGFuZ2VyW2hyZWZdOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2M5MzAyY30uYmFkZ2V7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjEwcHg7cGFkZGluZzozcHggN3B4O2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxO2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kLWNvbG9yOiM3Nzc7Ym9yZGVyLXJhZGl1czoxMHB4fS5iYWRnZTplbXB0eXtkaXNwbGF5Om5vbmV9LmJ0biAuYmFkZ2V7cG9zaXRpb246cmVsYXRpdmU7dG9wOi0xcHh9LmJ0bi1ncm91cC14cz4uYnRuIC5iYWRnZSwuYnRuLXhzIC5iYWRnZXt0b3A6MDtwYWRkaW5nOjFweCA1cHh9YS5iYWRnZTpmb2N1cyxhLmJhZGdlOmhvdmVye2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9Lmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU+LmJhZGdlLC5uYXYtcGlsbHM+LmFjdGl2ZT5hPi5iYWRnZXtjb2xvcjojMzM3YWI3O2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubGlzdC1ncm91cC1pdGVtPi5iYWRnZXtmbG9hdDpyaWdodH0ubGlzdC1ncm91cC1pdGVtPi5iYWRnZSsuYmFkZ2V7bWFyZ2luLXJpZ2h0OjVweH0ubmF2LXBpbGxzPmxpPmE+LmJhZGdle21hcmdpbi1sZWZ0OjNweH0uanVtYm90cm9ue3BhZGRpbmctdG9wOjMwcHg7cGFkZGluZy1ib3R0b206MzBweDttYXJnaW4tYm90dG9tOjMwcHg7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lmp1bWJvdHJvbiAuaDEsLmp1bWJvdHJvbiBoMXtjb2xvcjppbmhlcml0fS5qdW1ib3Ryb24gcHttYXJnaW4tYm90dG9tOjE1cHg7Zm9udC1zaXplOjIxcHg7Zm9udC13ZWlnaHQ6MjAwfS5qdW1ib3Ryb24+aHJ7Ym9yZGVyLXRvcC1jb2xvcjojZDVkNWQ1fS5jb250YWluZXIgLmp1bWJvdHJvbiwuY29udGFpbmVyLWZsdWlkIC5qdW1ib3Ryb257cGFkZGluZy1yaWdodDoxNXB4O3BhZGRpbmctbGVmdDoxNXB4O2JvcmRlci1yYWRpdXM6NnB4fS5qdW1ib3Ryb24gLmNvbnRhaW5lcnttYXgtd2lkdGg6MTAwJX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXsuanVtYm90cm9ue3BhZGRpbmctdG9wOjQ4cHg7cGFkZGluZy1ib3R0b206NDhweH0uY29udGFpbmVyIC5qdW1ib3Ryb24sLmNvbnRhaW5lci1mbHVpZCAuanVtYm90cm9ue3BhZGRpbmctcmlnaHQ6NjBweDtwYWRkaW5nLWxlZnQ6NjBweH0uanVtYm90cm9uIC5oMSwuanVtYm90cm9uIGgxe2ZvbnQtc2l6ZTo2M3B4fX0udGh1bWJuYWlse2Rpc3BsYXk6YmxvY2s7cGFkZGluZzo0cHg7bWFyZ2luLWJvdHRvbToyMHB4O2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOjRweDstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyIC4ycyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmJvcmRlciAuMnMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjpib3JkZXIgLjJzIGVhc2UtaW4tb3V0fS50aHVtYm5haWwgYT5pbWcsLnRodW1ibmFpbD5pbWd7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0b31hLnRodW1ibmFpbC5hY3RpdmUsYS50aHVtYm5haWw6Zm9jdXMsYS50aHVtYm5haWw6aG92ZXJ7Ym9yZGVyLWNvbG9yOiMzMzdhYjd9LnRodW1ibmFpbCAuY2FwdGlvbntwYWRkaW5nOjlweDtjb2xvcjojMzMzfS5hbGVydHtwYWRkaW5nOjE1cHg7bWFyZ2luLWJvdHRvbToyMHB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo0cHh9LmFsZXJ0IGg0e21hcmdpbi10b3A6MDtjb2xvcjppbmhlcml0fS5hbGVydCAuYWxlcnQtbGlua3tmb250LXdlaWdodDo3MDB9LmFsZXJ0PnAsLmFsZXJ0PnVse21hcmdpbi1ib3R0b206MH0uYWxlcnQ+cCtwe21hcmdpbi10b3A6NXB4fS5hbGVydC1kaXNtaXNzYWJsZSwuYWxlcnQtZGlzbWlzc2libGV7cGFkZGluZy1yaWdodDozNXB4fS5hbGVydC1kaXNtaXNzYWJsZSAuY2xvc2UsLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZXtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LTJweDtyaWdodDotMjFweDtjb2xvcjppbmhlcml0fS5hbGVydC1zdWNjZXNze2NvbG9yOiMzYzc2M2Q7YmFja2dyb3VuZC1jb2xvcjojZGZmMGQ4O2JvcmRlci1jb2xvcjojZDZlOWM2fS5hbGVydC1zdWNjZXNzIGhye2JvcmRlci10b3AtY29sb3I6I2M5ZTJiM30uYWxlcnQtc3VjY2VzcyAuYWxlcnQtbGlua3tjb2xvcjojMmI1NDJjfS5hbGVydC1pbmZve2NvbG9yOiMzMTcwOGY7YmFja2dyb3VuZC1jb2xvcjojZDllZGY3O2JvcmRlci1jb2xvcjojYmNlOGYxfS5hbGVydC1pbmZvIGhye2JvcmRlci10b3AtY29sb3I6I2E2ZTFlY30uYWxlcnQtaW5mbyAuYWxlcnQtbGlua3tjb2xvcjojMjQ1MjY5fS5hbGVydC13YXJuaW5ne2NvbG9yOiM4YTZkM2I7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzO2JvcmRlci1jb2xvcjojZmFlYmNjfS5hbGVydC13YXJuaW5nIGhye2JvcmRlci10b3AtY29sb3I6I2Y3ZTFiNX0uYWxlcnQtd2FybmluZyAuYWxlcnQtbGlua3tjb2xvcjojNjY1MTJjfS5hbGVydC1kYW5nZXJ7Y29sb3I6I2E5NDQ0MjtiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGU7Ym9yZGVyLWNvbG9yOiNlYmNjZDF9LmFsZXJ0LWRhbmdlciBocntib3JkZXItdG9wLWNvbG9yOiNlNGI5YzB9LmFsZXJ0LWRhbmdlciAuYWxlcnQtbGlua3tjb2xvcjojODQzNTM0fUAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlc3tmcm9te2JhY2tncm91bmQtcG9zaXRpb246NDBweCAwfXRve2JhY2tncm91bmQtcG9zaXRpb246MCAwfX1ALW8ta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVze2Zyb217YmFja2dyb3VuZC1wb3NpdGlvbjo0MHB4IDB9dG97YmFja2dyb3VuZC1wb3NpdGlvbjowIDB9fUBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXN7ZnJvbXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjQwcHggMH10b3tiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMH19LnByb2dyZXNze2hlaWdodDoyMHB4O21hcmdpbi1ib3R0b206MjBweDtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwuMSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwuMSl9LnByb2dyZXNzLWJhcntmbG9hdDpsZWZ0O3dpZHRoOjA7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MjBweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzMzN2FiNzstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMTUpO2JveC1zaGFkb3c6aW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMTUpOy13ZWJraXQtdHJhbnNpdGlvbjp3aWR0aCAuNnMgZWFzZTstby10cmFuc2l0aW9uOndpZHRoIC42cyBlYXNlO3RyYW5zaXRpb246d2lkdGggLjZzIGVhc2V9LnByb2dyZXNzLWJhci1zdHJpcGVkLC5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KTstd2Via2l0LWJhY2tncm91bmQtc2l6ZTo0MHB4IDQwcHg7YmFja2dyb3VuZC1zaXplOjQwcHggNDBweH0ucHJvZ3Jlc3MtYmFyLmFjdGl2ZSwucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXJ7LXdlYmtpdC1hbmltYXRpb246cHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlOy1vLWFuaW1hdGlvbjpwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZX0ucHJvZ3Jlc3MtYmFyLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojNWNiODVjfS5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXItc3VjY2Vzc3tiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpfS5wcm9ncmVzcy1iYXItaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGV9LnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1pbmZve2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6LW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCl9LnByb2dyZXNzLWJhci13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2YwYWQ0ZX0ucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyLXdhcm5pbmd7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KX0ucHJvZ3Jlc3MtYmFyLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNkOTUzNGZ9LnByb2dyZXNzLXN0cmlwZWQgLnByb2dyZXNzLWJhci1kYW5nZXJ7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZyxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgMjUlLHRyYW5zcGFyZW50IDI1JSx0cmFuc3BhcmVudCA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNzUlLHRyYW5zcGFyZW50IDc1JSx0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDI1JSx0cmFuc3BhcmVudCAyNSUsdHJhbnNwYXJlbnQgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA1MCUscmdiYSgyNTUsMjU1LDI1NSwuMTUpIDc1JSx0cmFuc3BhcmVudCA3NSUsdHJhbnNwYXJlbnQpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSAyNSUsdHJhbnNwYXJlbnQgMjUlLHRyYW5zcGFyZW50IDUwJSxyZ2JhKDI1NSwyNTUsMjU1LC4xNSkgNTAlLHJnYmEoMjU1LDI1NSwyNTUsLjE1KSA3NSUsdHJhbnNwYXJlbnQgNzUlLHRyYW5zcGFyZW50KX0ubWVkaWF7bWFyZ2luLXRvcDoxNXB4fS5tZWRpYTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjB9Lm1lZGlhLC5tZWRpYS1ib2R5e292ZXJmbG93OmhpZGRlbjt6b29tOjF9Lm1lZGlhLWJvZHl7d2lkdGg6MTAwMDBweH0ubWVkaWEtb2JqZWN0e2Rpc3BsYXk6YmxvY2t9Lm1lZGlhLW9iamVjdC5pbWctdGh1bWJuYWlse21heC13aWR0aDpub25lfS5tZWRpYS1yaWdodCwubWVkaWE+LnB1bGwtcmlnaHR7cGFkZGluZy1sZWZ0OjEwcHh9Lm1lZGlhLWxlZnQsLm1lZGlhPi5wdWxsLWxlZnR7cGFkZGluZy1yaWdodDoxMHB4fS5tZWRpYS1ib2R5LC5tZWRpYS1sZWZ0LC5tZWRpYS1yaWdodHtkaXNwbGF5OnRhYmxlLWNlbGw7dmVydGljYWwtYWxpZ246dG9wfS5tZWRpYS1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZWRpYS1ib3R0b217dmVydGljYWwtYWxpZ246Ym90dG9tfS5tZWRpYS1oZWFkaW5ne21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjVweH0ubWVkaWEtbGlzdHtwYWRkaW5nLWxlZnQ6MDtsaXN0LXN0eWxlOm5vbmV9Lmxpc3QtZ3JvdXB7cGFkZGluZy1sZWZ0OjA7bWFyZ2luLWJvdHRvbToyMHB4fS5saXN0LWdyb3VwLWl0ZW17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEwcHggMTVweDttYXJnaW4tYm90dG9tOi0xcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgI2RkZH0ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxke2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweH0ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH1hLmxpc3QtZ3JvdXAtaXRlbSxidXR0b24ubGlzdC1ncm91cC1pdGVte2NvbG9yOiM1NTV9YS5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5ne2NvbG9yOiMzMzN9YS5saXN0LWdyb3VwLWl0ZW06Zm9jdXMsYS5saXN0LWdyb3VwLWl0ZW06aG92ZXIsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbTpmb2N1cyxidXR0b24ubGlzdC1ncm91cC1pdGVtOmhvdmVye2NvbG9yOiM1NTU7dGV4dC1kZWNvcmF0aW9uOm5vbmU7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fWJ1dHRvbi5saXN0LWdyb3VwLWl0ZW17d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmxlZnR9Lmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZCwubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkOmZvY3VzLC5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6aG92ZXJ7Y29sb3I6Izc3NztjdXJzb3I6bm90LWFsbG93ZWQ7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLC5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLC5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQ6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5ne2NvbG9yOmluaGVyaXR9Lmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZCAubGlzdC1ncm91cC1pdGVtLXRleHQsLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpmb2N1cyAubGlzdC1ncm91cC1pdGVtLXRleHQsLmxpc3QtZ3JvdXAtaXRlbS5kaXNhYmxlZDpob3ZlciAubGlzdC1ncm91cC1pdGVtLXRleHR7Y29sb3I6Izc3N30ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSwubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cywubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3Zlcnt6LWluZGV4OjI7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMzdhYjc7Ym9yZGVyLWNvbG9yOiMzMzdhYjd9Lmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZz4uc21hbGwsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nPnNtYWxsLC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZywubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpmb2N1cyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmc+LnNtYWxsLC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmZvY3VzIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZz5zbWFsbCwubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6aG92ZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nPi5zbWFsbCwubGlzdC1ncm91cC1pdGVtLmFjdGl2ZTpob3ZlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmc+c21hbGx7Y29sb3I6aW5oZXJpdH0ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSAubGlzdC1ncm91cC1pdGVtLXRleHQsLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmU6Zm9jdXMgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0LC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0tdGV4dHtjb2xvcjojYzdkZGVmfS5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc3tjb2xvcjojM2M3NjNkO2JhY2tncm91bmQtY29sb3I6I2RmZjBkOH1hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzc3tjb2xvcjojM2M3NjNkfWEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmd7Y29sb3I6aW5oZXJpdH1hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmZvY3VzLGEubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3M6aG92ZXIsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzOmZvY3VzLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzczpob3Zlcntjb2xvcjojM2M3NjNkO2JhY2tncm91bmQtY29sb3I6I2QwZTljNn1hLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZSxhLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpmb2N1cyxhLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpob3ZlcixidXR0b24ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MuYWN0aXZlLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5hY3RpdmU6Zm9jdXMsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmFjdGl2ZTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzNjNzYzZDtib3JkZXItY29sb3I6IzNjNzYzZH0ubGlzdC1ncm91cC1pdGVtLWluZm97Y29sb3I6IzMxNzA4ZjtiYWNrZ3JvdW5kLWNvbG9yOiNkOWVkZjd9YS5saXN0LWdyb3VwLWl0ZW0taW5mbyxidXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm97Y29sb3I6IzMxNzA4Zn1hLmxpc3QtZ3JvdXAtaXRlbS1pbmZvIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxidXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5ne2NvbG9yOmluaGVyaXR9YS5saXN0LWdyb3VwLWl0ZW0taW5mbzpmb2N1cyxhLmxpc3QtZ3JvdXAtaXRlbS1pbmZvOmhvdmVyLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mbzpmb2N1cyxidXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm86aG92ZXJ7Y29sb3I6IzMxNzA4ZjtiYWNrZ3JvdW5kLWNvbG9yOiNjNGUzZjN9YS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmUsYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6Zm9jdXMsYS5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6aG92ZXIsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1pbmZvLmFjdGl2ZSxidXR0b24ubGlzdC1ncm91cC1pdGVtLWluZm8uYWN0aXZlOmZvY3VzLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0taW5mby5hY3RpdmU6aG92ZXJ7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMzMTcwOGY7Ym9yZGVyLWNvbG9yOiMzMTcwOGZ9Lmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5ne2NvbG9yOiM4YTZkM2I7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzfWEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5ne2NvbG9yOiM4YTZkM2J9YS5saXN0LWdyb3VwLWl0ZW0td2FybmluZyAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZ3tjb2xvcjppbmhlcml0fWEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmc6Zm9jdXMsYS5saXN0LWdyb3VwLWl0ZW0td2FybmluZzpob3ZlcixidXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmc6Zm9jdXMsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nOmhvdmVye2NvbG9yOiM4YTZkM2I7YmFja2dyb3VuZC1jb2xvcjojZmFmMmNjfWEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlLGEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmZvY3VzLGEubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmhvdmVyLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5hY3RpdmUsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmFjdGl2ZTpmb2N1cyxidXR0b24ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcuYWN0aXZlOmhvdmVye2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojOGE2ZDNiO2JvcmRlci1jb2xvcjojOGE2ZDNifS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2Vye2NvbG9yOiNhOTQ0NDI7YmFja2dyb3VuZC1jb2xvcjojZjJkZWRlfWEubGlzdC1ncm91cC1pdGVtLWRhbmdlcixidXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlcntjb2xvcjojYTk0NDQyfWEubGlzdC1ncm91cC1pdGVtLWRhbmdlciAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5ne2NvbG9yOmluaGVyaXR9YS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyOmZvY3VzLGEubGlzdC1ncm91cC1pdGVtLWRhbmdlcjpob3ZlcixidXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlcjpmb2N1cyxidXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlcjpob3Zlcntjb2xvcjojYTk0NDQyO2JhY2tncm91bmQtY29sb3I6I2ViY2NjY31hLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlLGEubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmU6Zm9jdXMsYS5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpob3ZlcixidXR0b24ubGlzdC1ncm91cC1pdGVtLWRhbmdlci5hY3RpdmUsYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIuYWN0aXZlOmZvY3VzLGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmFjdGl2ZTpob3Zlcntjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6I2E5NDQ0Mjtib3JkZXItY29sb3I6I2E5NDQ0Mn0ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmd7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fS5saXN0LWdyb3VwLWl0ZW0tdGV4dHttYXJnaW4tYm90dG9tOjA7bGluZS1oZWlnaHQ6MS4zfS5wYW5lbHttYXJnaW4tYm90dG9tOjIwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ym94LXNoYWRvdzowIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpfS5wYW5lbC1ib2R5e3BhZGRpbmc6MTVweH0ucGFuZWwtaGVhZGluZ3twYWRkaW5nOjEwcHggMTVweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHh9LnBhbmVsLWhlYWRpbmc+LmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGV7Y29sb3I6aW5oZXJpdH0ucGFuZWwtdGl0bGV7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6MTZweDtjb2xvcjppbmhlcml0fS5wYW5lbC10aXRsZT4uc21hbGwsLnBhbmVsLXRpdGxlPi5zbWFsbD5hLC5wYW5lbC10aXRsZT5hLC5wYW5lbC10aXRsZT5zbWFsbCwucGFuZWwtdGl0bGU+c21hbGw+YXtjb2xvcjppbmhlcml0fS5wYW5lbC1mb290ZXJ7cGFkZGluZzoxMHB4IDE1cHg7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGQ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6M3B4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4fS5wYW5lbD4ubGlzdC1ncm91cCwucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3Vwe21hcmdpbi1ib3R0b206MH0ucGFuZWw+Lmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSwucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW17Ym9yZGVyLXdpZHRoOjFweCAwO2JvcmRlci1yYWRpdXM6MH0ucGFuZWw+Lmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCwucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3VwOmZpcnN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcDowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweH0ucGFuZWw+Lmxpc3QtZ3JvdXA6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQsLnBhbmVsPi5wYW5lbC1jb2xsYXBzZT4ubGlzdC1ncm91cDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZHtib3JkZXItYm90dG9tOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6M3B4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4fS5wYW5lbD4ucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+Lmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0ucGFuZWwtaGVhZGluZysubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxke2JvcmRlci10b3Atd2lkdGg6MH0ubGlzdC1ncm91cCsucGFuZWwtZm9vdGVye2JvcmRlci10b3Atd2lkdGg6MH0ucGFuZWw+LnBhbmVsLWNvbGxhcHNlPi50YWJsZSwucGFuZWw+LnRhYmxlLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGV7bWFyZ2luLWJvdHRvbTowfS5wYW5lbD4ucGFuZWwtY29sbGFwc2U+LnRhYmxlIGNhcHRpb24sLnBhbmVsPi50YWJsZSBjYXB0aW9uLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUgY2FwdGlvbntwYWRkaW5nLXJpZ2h0OjE1cHg7cGFkZGluZy1sZWZ0OjE1cHh9LnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxke2JvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweH0ucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxke2JvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweH0ucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHh9LnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpmaXJzdC1jaGlsZD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQ+LnRhYmxlOmZpcnN0LWNoaWxkPnRoZWFkOmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmZpcnN0LWNoaWxkPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmZpcnN0LWNoaWxkPnRib2R5OmZpcnN0LWNoaWxkPnRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpmaXJzdC1jaGlsZD50aGVhZDpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6Zmlyc3QtY2hpbGQ+dGhlYWQ6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGg6bGFzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHh9LnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweH0ucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czozcHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHh9LnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Zm9vdDpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHh9LnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGJvZHk6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlOmxhc3QtY2hpbGQ+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRib2R5Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGU6bGFzdC1jaGlsZD50Ym9keTpsYXN0LWNoaWxkPnRyOmxhc3QtY2hpbGQgdGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlOmxhc3QtY2hpbGQ+dGZvb3Q6bGFzdC1jaGlsZD50cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZTpsYXN0LWNoaWxkPnRmb290Omxhc3QtY2hpbGQ+dHI6bGFzdC1jaGlsZCB0aDpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweH0ucGFuZWw+LnBhbmVsLWJvZHkrLnRhYmxlLC5wYW5lbD4ucGFuZWwtYm9keSsudGFibGUtcmVzcG9uc2l2ZSwucGFuZWw+LnRhYmxlKy5wYW5lbC1ib2R5LC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZSsucGFuZWwtYm9keXtib3JkZXItdG9wOjFweCBzb2xpZCAjZGRkfS5wYW5lbD4udGFibGU+dGJvZHk6Zmlyc3QtY2hpbGQ+dHI6Zmlyc3QtY2hpbGQgdGQsLnBhbmVsPi50YWJsZT50Ym9keTpmaXJzdC1jaGlsZD50cjpmaXJzdC1jaGlsZCB0aHtib3JkZXItdG9wOjB9LnBhbmVsPi50YWJsZS1ib3JkZXJlZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVke2JvcmRlcjowfS5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGQ6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50aDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmZpcnN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI+dGg6Zmlyc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZDpmaXJzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmZpcnN0LWNoaWxke2JvcmRlci1sZWZ0OjB9LnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cj50ZDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGg6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyPnRkOmxhc3QtY2hpbGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cj50aDpsYXN0LWNoaWxkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI+dGQ6bGFzdC1jaGlsZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjB9LnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpmaXJzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGhlYWQ+dHI6Zmlyc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmZpcnN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6Zmlyc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50aGVhZD50cjpmaXJzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyOmZpcnN0LWNoaWxkPnRoe2JvcmRlci1ib3R0b206MH0ucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyOmxhc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRoLC5wYW5lbD4udGFibGUtYm9yZGVyZWQ+dGZvb3Q+dHI6bGFzdC1jaGlsZD50ZCwucGFuZWw+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGgsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Ym9keT50cjpsYXN0LWNoaWxkPnRkLC5wYW5lbD4udGFibGUtcmVzcG9uc2l2ZT4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI6bGFzdC1jaGlsZD50aCwucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkPnRmb290PnRyOmxhc3QtY2hpbGQ+dGQsLnBhbmVsPi50YWJsZS1yZXNwb25zaXZlPi50YWJsZS1ib3JkZXJlZD50Zm9vdD50cjpsYXN0LWNoaWxkPnRoe2JvcmRlci1ib3R0b206MH0ucGFuZWw+LnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTowO2JvcmRlcjowfS5wYW5lbC1ncm91cHttYXJnaW4tYm90dG9tOjIwcHh9LnBhbmVsLWdyb3VwIC5wYW5lbHttYXJnaW4tYm90dG9tOjA7Ym9yZGVyLXJhZGl1czo0cHh9LnBhbmVsLWdyb3VwIC5wYW5lbCsucGFuZWx7bWFyZ2luLXRvcDo1cHh9LnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5ne2JvcmRlci1ib3R0b206MH0ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5saXN0LWdyb3VwLC5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RkZH0ucGFuZWwtZ3JvdXAgLnBhbmVsLWZvb3Rlcntib3JkZXItdG9wOjB9LnBhbmVsLWdyb3VwIC5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5e2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGR9LnBhbmVsLWRlZmF1bHR7Ym9yZGVyLWNvbG9yOiNkZGR9LnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmd7Y29sb3I6IzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkZGR9LnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci10b3AtY29sb3I6I2RkZH0ucGFuZWwtZGVmYXVsdD4ucGFuZWwtaGVhZGluZyAuYmFkZ2V7Y29sb3I6I2Y1ZjVmNTtiYWNrZ3JvdW5kLWNvbG9yOiMzMzN9LnBhbmVsLWRlZmF1bHQ+LnBhbmVsLWZvb3RlcisucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZGRkfS5wYW5lbC1wcmltYXJ5e2JvcmRlci1jb2xvcjojMzM3YWI3fS5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1oZWFkaW5ne2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O2JvcmRlci1jb2xvcjojMzM3YWI3fS5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItdG9wLWNvbG9yOiMzMzdhYjd9LnBhbmVsLXByaW1hcnk+LnBhbmVsLWhlYWRpbmcgLmJhZGdle2NvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5wYW5lbC1wcmltYXJ5Pi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci1ib3R0b20tY29sb3I6IzMzN2FiN30ucGFuZWwtc3VjY2Vzc3tib3JkZXItY29sb3I6I2Q2ZTljNn0ucGFuZWwtc3VjY2Vzcz4ucGFuZWwtaGVhZGluZ3tjb2xvcjojM2M3NjNkO2JhY2tncm91bmQtY29sb3I6I2RmZjBkODtib3JkZXItY29sb3I6I2Q2ZTljNn0ucGFuZWwtc3VjY2Vzcz4ucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLXRvcC1jb2xvcjojZDZlOWM2fS5wYW5lbC1zdWNjZXNzPi5wYW5lbC1oZWFkaW5nIC5iYWRnZXtjb2xvcjojZGZmMGQ4O2JhY2tncm91bmQtY29sb3I6IzNjNzYzZH0ucGFuZWwtc3VjY2Vzcz4ucGFuZWwtZm9vdGVyKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItYm90dG9tLWNvbG9yOiNkNmU5YzZ9LnBhbmVsLWluZm97Ym9yZGVyLWNvbG9yOiNiY2U4ZjF9LnBhbmVsLWluZm8+LnBhbmVsLWhlYWRpbmd7Y29sb3I6IzMxNzA4ZjtiYWNrZ3JvdW5kLWNvbG9yOiNkOWVkZjc7Ym9yZGVyLWNvbG9yOiNiY2U4ZjF9LnBhbmVsLWluZm8+LnBhbmVsLWhlYWRpbmcrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci10b3AtY29sb3I6I2JjZThmMX0ucGFuZWwtaW5mbz4ucGFuZWwtaGVhZGluZyAuYmFkZ2V7Y29sb3I6I2Q5ZWRmNztiYWNrZ3JvdW5kLWNvbG9yOiMzMTcwOGZ9LnBhbmVsLWluZm8+LnBhbmVsLWZvb3RlcisucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLWJvdHRvbS1jb2xvcjojYmNlOGYxfS5wYW5lbC13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFlYmNjfS5wYW5lbC13YXJuaW5nPi5wYW5lbC1oZWFkaW5ne2NvbG9yOiM4YTZkM2I7YmFja2dyb3VuZC1jb2xvcjojZmNmOGUzO2JvcmRlci1jb2xvcjojZmFlYmNjfS5wYW5lbC13YXJuaW5nPi5wYW5lbC1oZWFkaW5nKy5wYW5lbC1jb2xsYXBzZT4ucGFuZWwtYm9keXtib3JkZXItdG9wLWNvbG9yOiNmYWViY2N9LnBhbmVsLXdhcm5pbmc+LnBhbmVsLWhlYWRpbmcgLmJhZGdle2NvbG9yOiNmY2Y4ZTM7YmFja2dyb3VuZC1jb2xvcjojOGE2ZDNifS5wYW5lbC13YXJuaW5nPi5wYW5lbC1mb290ZXIrLnBhbmVsLWNvbGxhcHNlPi5wYW5lbC1ib2R5e2JvcmRlci1ib3R0b20tY29sb3I6I2ZhZWJjY30ucGFuZWwtZGFuZ2Vye2JvcmRlci1jb2xvcjojZWJjY2QxfS5wYW5lbC1kYW5nZXI+LnBhbmVsLWhlYWRpbmd7Y29sb3I6I2E5NDQ0MjtiYWNrZ3JvdW5kLWNvbG9yOiNmMmRlZGU7Ym9yZGVyLWNvbG9yOiNlYmNjZDF9LnBhbmVsLWRhbmdlcj4ucGFuZWwtaGVhZGluZysucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLXRvcC1jb2xvcjojZWJjY2QxfS5wYW5lbC1kYW5nZXI+LnBhbmVsLWhlYWRpbmcgLmJhZGdle2NvbG9yOiNmMmRlZGU7YmFja2dyb3VuZC1jb2xvcjojYTk0NDQyfS5wYW5lbC1kYW5nZXI+LnBhbmVsLWZvb3RlcisucGFuZWwtY29sbGFwc2U+LnBhbmVsLWJvZHl7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZWJjY2QxfS5lbWJlZC1yZXNwb25zaXZle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjA7cGFkZGluZzowO292ZXJmbG93OmhpZGRlbn0uZW1iZWQtcmVzcG9uc2l2ZSAuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtLC5lbWJlZC1yZXNwb25zaXZlIGVtYmVkLC5lbWJlZC1yZXNwb25zaXZlIGlmcmFtZSwuZW1iZWQtcmVzcG9uc2l2ZSBvYmplY3QsLmVtYmVkLXJlc3BvbnNpdmUgdmlkZW97cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjB9LmVtYmVkLXJlc3BvbnNpdmUtMTZieTl7cGFkZGluZy1ib3R0b206NTYuMjUlfS5lbWJlZC1yZXNwb25zaXZlLTRieTN7cGFkZGluZy1ib3R0b206NzUlfS53ZWxse21pbi1oZWlnaHQ6MjBweDtwYWRkaW5nOjE5cHg7bWFyZ2luLWJvdHRvbToyMHB4O2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXI6MXB4IHNvbGlkICNlM2UzZTM7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpfS53ZWxsIGJsb2NrcXVvdGV7Ym9yZGVyLWNvbG9yOiNkZGQ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE1KX0ud2VsbC1sZ3twYWRkaW5nOjI0cHg7Ym9yZGVyLXJhZGl1czo2cHh9LndlbGwtc217cGFkZGluZzo5cHg7Ym9yZGVyLXJhZGl1czozcHh9LmNsb3Nle2Zsb2F0OnJpZ2h0O2ZvbnQtc2l6ZToyMXB4O2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxO2NvbG9yOiMwMDA7dGV4dC1zaGFkb3c6MCAxcHggMCAjZmZmO2ZpbHRlcjphbHBoYShvcGFjaXR5PTIwKTtvcGFjaXR5Oi4yfS5jbG9zZTpmb2N1cywuY2xvc2U6aG92ZXJ7Y29sb3I6IzAwMDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcjtmaWx0ZXI6YWxwaGEob3BhY2l0eT01MCk7b3BhY2l0eTouNX1idXR0b24uY2xvc2V7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7cGFkZGluZzowO2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6MCAwO2JvcmRlcjowfS5tb2RhbC1vcGVue292ZXJmbG93OmhpZGRlbn0ubW9kYWx7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDUwO2Rpc3BsYXk6bm9uZTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3V0bGluZTowfS5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2d7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zcyBlYXNlLW91dDstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0yNSUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTI1JSk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0yNSUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwtMjUlKX0ubW9kYWwuaW4gLm1vZGFsLWRpYWxvZ3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9Lm1vZGFsLW9wZW4gLm1vZGFse292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0b30ubW9kYWwtZGlhbG9ne3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOmF1dG87bWFyZ2luOjEwcHh9Lm1vZGFsLWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjojZmZmOy13ZWJraXQtYmFja2dyb3VuZC1jbGlwOnBhZGRpbmctYm94O2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6MXB4IHNvbGlkICM5OTk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4yKTtib3JkZXItcmFkaXVzOjZweDtvdXRsaW5lOjA7LXdlYmtpdC1ib3gtc2hhZG93OjAgM3B4IDlweCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgM3B4IDlweCByZ2JhKDAsMCwwLC41KX0ubW9kYWwtYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDQwO2JhY2tncm91bmQtY29sb3I6IzAwMH0ubW9kYWwtYmFja2Ryb3AuZmFkZXtmaWx0ZXI6YWxwaGEob3BhY2l0eT0wKTtvcGFjaXR5OjB9Lm1vZGFsLWJhY2tkcm9wLmlue2ZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtvcGFjaXR5Oi41fS5tb2RhbC1oZWFkZXJ7cGFkZGluZzoxNXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNWU1ZTV9Lm1vZGFsLWhlYWRlciAuY2xvc2V7bWFyZ2luLXRvcDotMnB4fS5tb2RhbC10aXRsZXttYXJnaW46MDtsaW5lLWhlaWdodDoxLjQyODU3MTQzfS5tb2RhbC1ib2R5e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTVweH0ubW9kYWwtZm9vdGVye3BhZGRpbmc6MTVweDt0ZXh0LWFsaWduOnJpZ2h0O2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTV9Lm1vZGFsLWZvb3RlciAuYnRuKy5idG57bWFyZ2luLWJvdHRvbTowO21hcmdpbi1sZWZ0OjVweH0ubW9kYWwtZm9vdGVyIC5idG4tZ3JvdXAgLmJ0bisuYnRue21hcmdpbi1sZWZ0Oi0xcHh9Lm1vZGFsLWZvb3RlciAuYnRuLWJsb2NrKy5idG4tYmxvY2t7bWFyZ2luLWxlZnQ6MH0ubW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGx9QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpey5tb2RhbC1kaWFsb2d7d2lkdGg6NjAwcHg7bWFyZ2luOjMwcHggYXV0b30ubW9kYWwtY29udGVudHstd2Via2l0LWJveC1zaGFkb3c6MCA1cHggMTVweCByZ2JhKDAsMCwwLC41KTtib3gtc2hhZG93OjAgNXB4IDE1cHggcmdiYSgwLDAsMCwuNSl9Lm1vZGFsLXNte3dpZHRoOjMwMHB4fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCl7Lm1vZGFsLWxne3dpZHRoOjkwMHB4fX0udG9vbHRpcHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwNzA7ZGlzcGxheTpibG9jaztmb250LWZhbWlseTpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHg7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7dGV4dC1hbGlnbjpsZWZ0O3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1zaGFkb3c6bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLWJyZWFrOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3dvcmQtd3JhcDpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO2ZpbHRlcjphbHBoYShvcGFjaXR5PTApO29wYWNpdHk6MDtsaW5lLWJyZWFrOmF1dG99LnRvb2x0aXAuaW57ZmlsdGVyOmFscGhhKG9wYWNpdHk9OTApO29wYWNpdHk6Ljl9LnRvb2x0aXAudG9we3BhZGRpbmc6NXB4IDA7bWFyZ2luLXRvcDotM3B4fS50b29sdGlwLnJpZ2h0e3BhZGRpbmc6MCA1cHg7bWFyZ2luLWxlZnQ6M3B4fS50b29sdGlwLmJvdHRvbXtwYWRkaW5nOjVweCAwO21hcmdpbi10b3A6M3B4fS50b29sdGlwLmxlZnR7cGFkZGluZzowIDVweDttYXJnaW4tbGVmdDotM3B4fS50b29sdGlwLWlubmVye21heC13aWR0aDoyMDBweDtwYWRkaW5nOjNweCA4cHg7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym9yZGVyLXJhZGl1czo0cHh9LnRvb2x0aXAtYXJyb3d7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkfS50b29sdGlwLnRvcCAudG9vbHRpcC1hcnJvd3tib3R0b206MDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNXB4O2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLXRvcC1jb2xvcjojMDAwfS50b29sdGlwLnRvcC1sZWZ0IC50b29sdGlwLWFycm93e3JpZ2h0OjVweDtib3R0b206MDttYXJnaW4tYm90dG9tOi01cHg7Ym9yZGVyLXdpZHRoOjVweCA1cHggMDtib3JkZXItdG9wLWNvbG9yOiMwMDB9LnRvb2x0aXAudG9wLXJpZ2h0IC50b29sdGlwLWFycm93e2JvdHRvbTowO2xlZnQ6NXB4O21hcmdpbi1ib3R0b206LTVweDtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci10b3AtY29sb3I6IzAwMH0udG9vbHRpcC5yaWdodCAudG9vbHRpcC1hcnJvd3t0b3A6NTAlO2xlZnQ6MDttYXJnaW4tdG9wOi01cHg7Ym9yZGVyLXdpZHRoOjVweCA1cHggNXB4IDA7Ym9yZGVyLXJpZ2h0LWNvbG9yOiMwMDB9LnRvb2x0aXAubGVmdCAudG9vbHRpcC1hcnJvd3t0b3A6NTAlO3JpZ2h0OjA7bWFyZ2luLXRvcDotNXB4O2JvcmRlci13aWR0aDo1cHggMCA1cHggNXB4O2JvcmRlci1sZWZ0LWNvbG9yOiMwMDB9LnRvb2x0aXAuYm90dG9tIC50b29sdGlwLWFycm93e3RvcDowO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi01cHg7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweDtib3JkZXItYm90dG9tLWNvbG9yOiMwMDB9LnRvb2x0aXAuYm90dG9tLWxlZnQgLnRvb2x0aXAtYXJyb3d7dG9wOjA7cmlnaHQ6NXB4O21hcmdpbi10b3A6LTVweDtib3JkZXItd2lkdGg6MCA1cHggNXB4O2JvcmRlci1ib3R0b20tY29sb3I6IzAwMH0udG9vbHRpcC5ib3R0b20tcmlnaHQgLnRvb2x0aXAtYXJyb3d7dG9wOjA7bGVmdDo1cHg7bWFyZ2luLXRvcDotNXB4O2JvcmRlci13aWR0aDowIDVweCA1cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojMDAwfS5wb3BvdmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwNjA7ZGlzcGxheTpub25lO21heC13aWR0aDoyNzZweDtwYWRkaW5nOjFweDtmb250LWZhbWlseTpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNDI4NTcxNDM7dGV4dC1hbGlnbjpsZWZ0O3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1zaGFkb3c6bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLWJyZWFrOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3dvcmQtd3JhcDpub3JtYWw7d2hpdGUtc3BhY2U6bm9ybWFsO2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWJhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMik7Ym9yZGVyLXJhZGl1czo2cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMik7Ym94LXNoYWRvdzowIDVweCAxMHB4IHJnYmEoMCwwLDAsLjIpO2xpbmUtYnJlYWs6YXV0b30ucG9wb3Zlci50b3B7bWFyZ2luLXRvcDotMTBweH0ucG9wb3Zlci5yaWdodHttYXJnaW4tbGVmdDoxMHB4fS5wb3BvdmVyLmJvdHRvbXttYXJnaW4tdG9wOjEwcHh9LnBvcG92ZXIubGVmdHttYXJnaW4tbGVmdDotMTBweH0ucG9wb3Zlci10aXRsZXtwYWRkaW5nOjhweCAxNHB4O21hcmdpbjowO2ZvbnQtc2l6ZToxNHB4O2JhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWJlYmViO2JvcmRlci1yYWRpdXM6NXB4IDVweCAwIDB9LnBvcG92ZXItY29udGVudHtwYWRkaW5nOjlweCAxNHB4fS5wb3BvdmVyPi5hcnJvdywucG9wb3Zlcj4uYXJyb3c6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jazt3aWR0aDowO2hlaWdodDowO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWR9LnBvcG92ZXI+LmFycm93e2JvcmRlci13aWR0aDoxMXB4fS5wb3BvdmVyPi5hcnJvdzphZnRlcntjb250ZW50OlwiXCI7Ym9yZGVyLXdpZHRoOjEwcHh9LnBvcG92ZXIudG9wPi5hcnJvd3tib3R0b206LTExcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTExcHg7Ym9yZGVyLXRvcC1jb2xvcjojOTk5O2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMjUpO2JvcmRlci1ib3R0b20td2lkdGg6MH0ucG9wb3Zlci50b3A+LmFycm93OmFmdGVye2JvdHRvbToxcHg7bWFyZ2luLWxlZnQ6LTEwcHg7Y29udGVudDpcIiBcIjtib3JkZXItdG9wLWNvbG9yOiNmZmY7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5wb3BvdmVyLnJpZ2h0Pi5hcnJvd3t0b3A6NTAlO2xlZnQ6LTExcHg7bWFyZ2luLXRvcDotMTFweDtib3JkZXItcmlnaHQtY29sb3I6Izk5OTtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgwLDAsMCwuMjUpO2JvcmRlci1sZWZ0LXdpZHRoOjB9LnBvcG92ZXIucmlnaHQ+LmFycm93OmFmdGVye2JvdHRvbTotMTBweDtsZWZ0OjFweDtjb250ZW50OlwiIFwiO2JvcmRlci1yaWdodC1jb2xvcjojZmZmO2JvcmRlci1sZWZ0LXdpZHRoOjB9LnBvcG92ZXIuYm90dG9tPi5hcnJvd3t0b3A6LTExcHg7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTExcHg7Ym9yZGVyLXRvcC13aWR0aDowO2JvcmRlci1ib3R0b20tY29sb3I6Izk5OTtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjI1KX0ucG9wb3Zlci5ib3R0b20+LmFycm93OmFmdGVye3RvcDoxcHg7bWFyZ2luLWxlZnQ6LTEwcHg7Y29udGVudDpcIiBcIjtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZmZmfS5wb3BvdmVyLmxlZnQ+LmFycm93e3RvcDo1MCU7cmlnaHQ6LTExcHg7bWFyZ2luLXRvcDotMTFweDtib3JkZXItcmlnaHQtd2lkdGg6MDtib3JkZXItbGVmdC1jb2xvcjojOTk5O2JvcmRlci1sZWZ0LWNvbG9yOnJnYmEoMCwwLDAsLjI1KX0ucG9wb3Zlci5sZWZ0Pi5hcnJvdzphZnRlcntyaWdodDoxcHg7Ym90dG9tOi0xMHB4O2NvbnRlbnQ6XCIgXCI7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtY29sb3I6I2ZmZn0uY2Fyb3VzZWx7cG9zaXRpb246cmVsYXRpdmV9LmNhcm91c2VsLWlubmVye3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5jYXJvdXNlbC1pbm5lcj4uaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5Om5vbmU7LXdlYmtpdC10cmFuc2l0aW9uOi42cyBlYXNlLWluLW91dCBsZWZ0Oy1vLXRyYW5zaXRpb246LjZzIGVhc2UtaW4tb3V0IGxlZnQ7dHJhbnNpdGlvbjouNnMgZWFzZS1pbi1vdXQgbGVmdH0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+YT5pbWcsLmNhcm91c2VsLWlubmVyPi5pdGVtPmltZ3tsaW5lLWhlaWdodDoxfUBtZWRpYSBhbGwgYW5kICh0cmFuc2Zvcm0tM2QpLCgtd2Via2l0LXRyYW5zZm9ybS0zZCl7LmNhcm91c2VsLWlubmVyPi5pdGVtey13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuNnMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gLjZzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC42cyBlYXNlLWluLW91dDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtcGVyc3BlY3RpdmU6MTAwMHB4O3BlcnNwZWN0aXZlOjEwMDBweH0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0uYWN0aXZlLnJpZ2h0LC5jYXJvdXNlbC1pbm5lcj4uaXRlbS5uZXh0e2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0uYWN0aXZlLmxlZnQsLmNhcm91c2VsLWlubmVyPi5pdGVtLnByZXZ7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmNhcm91c2VsLWlubmVyPi5pdGVtLmFjdGl2ZSwuY2Fyb3VzZWwtaW5uZXI+Lml0ZW0ubmV4dC5sZWZ0LC5jYXJvdXNlbC1pbm5lcj4uaXRlbS5wcmV2LnJpZ2h0e2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX19LmNhcm91c2VsLWlubmVyPi5hY3RpdmUsLmNhcm91c2VsLWlubmVyPi5uZXh0LC5jYXJvdXNlbC1pbm5lcj4ucHJldntkaXNwbGF5OmJsb2NrfS5jYXJvdXNlbC1pbm5lcj4uYWN0aXZle2xlZnQ6MH0uY2Fyb3VzZWwtaW5uZXI+Lm5leHQsLmNhcm91c2VsLWlubmVyPi5wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCV9LmNhcm91c2VsLWlubmVyPi5uZXh0e2xlZnQ6MTAwJX0uY2Fyb3VzZWwtaW5uZXI+LnByZXZ7bGVmdDotMTAwJX0uY2Fyb3VzZWwtaW5uZXI+Lm5leHQubGVmdCwuY2Fyb3VzZWwtaW5uZXI+LnByZXYucmlnaHR7bGVmdDowfS5jYXJvdXNlbC1pbm5lcj4uYWN0aXZlLmxlZnR7bGVmdDotMTAwJX0uY2Fyb3VzZWwtaW5uZXI+LmFjdGl2ZS5yaWdodHtsZWZ0OjEwMCV9LmNhcm91c2VsLWNvbnRyb2x7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjE1JTtmb250LXNpemU6MjBweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO3RleHQtc2hhZG93OjAgMXB4IDJweCByZ2JhKDAsMCwwLC42KTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCk7ZmlsdGVyOmFscGhhKG9wYWNpdHk9NTApO29wYWNpdHk6LjV9LmNhcm91c2VsLWNvbnRyb2wubGVmdHtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuNSkgMCxyZ2JhKDAsMCwwLC4wMDAxKSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsLjUpIDAscmdiYSgwLDAsMCwuMDAwMSkgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbShyZ2JhKDAsMCwwLC41KSksdG8ocmdiYSgwLDAsMCwuMDAwMSkpKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC41KSAwLHJnYmEoMCwwLDAsLjAwMDEpIDEwMCUpO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzgwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0uY2Fyb3VzZWwtY29udHJvbC5yaWdodHtyaWdodDowO2xlZnQ6YXV0bztiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQscmdiYSgwLDAsMCwuMDAwMSkgMCxyZ2JhKDAsMCwwLC41KSAxMDAlKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudChsZWZ0LHJnYmEoMCwwLDAsLjAwMDEpIDAscmdiYSgwLDAsMCwuNSkgMTAwJSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbShyZ2JhKDAsMCwwLC4wMDAxKSksdG8ocmdiYSgwLDAsMCwuNSkpKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2JhKDAsMCwwLC4wMDAxKSAwLHJnYmEoMCwwLDAsLjUpIDEwMCUpO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyM4MDAwMDAwMCcsIEdyYWRpZW50VHlwZT0xKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0uY2Fyb3VzZWwtY29udHJvbDpmb2N1cywuY2Fyb3VzZWwtY29udHJvbDpob3Zlcntjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO2ZpbHRlcjphbHBoYShvcGFjaXR5PTkwKTtvdXRsaW5lOjA7b3BhY2l0eTouOX0uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCwuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCwuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7ei1pbmRleDo1O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6LTEwcHh9LmNhcm91c2VsLWNvbnRyb2wgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldntsZWZ0OjUwJTttYXJnaW4tbGVmdDotMTBweH0uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dHtyaWdodDo1MCU7bWFyZ2luLXJpZ2h0Oi0xMHB4fS5jYXJvdXNlbC1jb250cm9sIC5pY29uLW5leHQsLmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2ZvbnQtZmFtaWx5OnNlcmlmO2xpbmUtaGVpZ2h0OjF9LmNhcm91c2VsLWNvbnRyb2wgLmljb24tcHJldjpiZWZvcmV7Y29udGVudDonXFwyMDM5J30uY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0OmJlZm9yZXtjb250ZW50OidcXDIwM2EnfS5jYXJvdXNlbC1pbmRpY2F0b3Jze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxMHB4O2xlZnQ6NTAlO3otaW5kZXg6MTU7d2lkdGg6NjAlO3BhZGRpbmctbGVmdDowO21hcmdpbi1sZWZ0Oi0zMCU7dGV4dC1hbGlnbjpjZW50ZXI7bGlzdC1zdHlsZTpub25lfS5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7bWFyZ2luOjFweDt0ZXh0LWluZGVudDotOTk5cHg7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMDAwXFw5O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtib3JkZXI6MXB4IHNvbGlkICNmZmY7Ym9yZGVyLXJhZGl1czoxMHB4fS5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmV7d2lkdGg6MTJweDtoZWlnaHQ6MTJweDttYXJnaW46MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmNhcm91c2VsLWNhcHRpb257cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MTUlO2JvdHRvbToyMHB4O2xlZnQ6MTUlO3otaW5kZXg6MTA7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToyMHB4O2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1zaGFkb3c6MCAxcHggMnB4IHJnYmEoMCwwLDAsLjYpfS5jYXJvdXNlbC1jYXB0aW9uIC5idG57dGV4dC1zaGFkb3c6bm9uZX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXsuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCwuY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsLmNhcm91c2VsLWNvbnRyb2wgLmljb24tbmV4dCwuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2e3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7bWFyZ2luLXRvcDotMTBweDtmb250LXNpemU6MzBweH0uY2Fyb3VzZWwtY29udHJvbCAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCwuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1wcmV2e21hcmdpbi1sZWZ0Oi0xMHB4fS5jYXJvdXNlbC1jb250cm9sIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCwuY2Fyb3VzZWwtY29udHJvbCAuaWNvbi1uZXh0e21hcmdpbi1yaWdodDotMTBweH0uY2Fyb3VzZWwtY2FwdGlvbntyaWdodDoyMCU7bGVmdDoyMCU7cGFkZGluZy1ib3R0b206MzBweH0uY2Fyb3VzZWwtaW5kaWNhdG9yc3tib3R0b206MjBweH19LmJ0bi1ncm91cC12ZXJ0aWNhbD4uYnRuLWdyb3VwOmFmdGVyLC5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDpiZWZvcmUsLmJ0bi10b29sYmFyOmFmdGVyLC5idG4tdG9vbGJhcjpiZWZvcmUsLmNsZWFyZml4OmFmdGVyLC5jbGVhcmZpeDpiZWZvcmUsLmNvbnRhaW5lci1mbHVpZDphZnRlciwuY29udGFpbmVyLWZsdWlkOmJlZm9yZSwuY29udGFpbmVyOmFmdGVyLC5jb250YWluZXI6YmVmb3JlLC5kbC1ob3Jpem9udGFsIGRkOmFmdGVyLC5kbC1ob3Jpem9udGFsIGRkOmJlZm9yZSwuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyLC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXA6YmVmb3JlLC5tb2RhbC1mb290ZXI6YWZ0ZXIsLm1vZGFsLWZvb3RlcjpiZWZvcmUsLm1vZGFsLWhlYWRlcjphZnRlciwubW9kYWwtaGVhZGVyOmJlZm9yZSwubmF2OmFmdGVyLC5uYXY6YmVmb3JlLC5uYXZiYXItY29sbGFwc2U6YWZ0ZXIsLm5hdmJhci1jb2xsYXBzZTpiZWZvcmUsLm5hdmJhci1oZWFkZXI6YWZ0ZXIsLm5hdmJhci1oZWFkZXI6YmVmb3JlLC5uYXZiYXI6YWZ0ZXIsLm5hdmJhcjpiZWZvcmUsLnBhZ2VyOmFmdGVyLC5wYWdlcjpiZWZvcmUsLnBhbmVsLWJvZHk6YWZ0ZXIsLnBhbmVsLWJvZHk6YmVmb3JlLC5yb3c6YWZ0ZXIsLnJvdzpiZWZvcmV7ZGlzcGxheTp0YWJsZTtjb250ZW50OlwiIFwifS5idG4tZ3JvdXAtdmVydGljYWw+LmJ0bi1ncm91cDphZnRlciwuYnRuLXRvb2xiYXI6YWZ0ZXIsLmNsZWFyZml4OmFmdGVyLC5jb250YWluZXItZmx1aWQ6YWZ0ZXIsLmNvbnRhaW5lcjphZnRlciwuZGwtaG9yaXpvbnRhbCBkZDphZnRlciwuZm9ybS1ob3Jpem9udGFsIC5mb3JtLWdyb3VwOmFmdGVyLC5tb2RhbC1mb290ZXI6YWZ0ZXIsLm1vZGFsLWhlYWRlcjphZnRlciwubmF2OmFmdGVyLC5uYXZiYXItY29sbGFwc2U6YWZ0ZXIsLm5hdmJhci1oZWFkZXI6YWZ0ZXIsLm5hdmJhcjphZnRlciwucGFnZXI6YWZ0ZXIsLnBhbmVsLWJvZHk6YWZ0ZXIsLnJvdzphZnRlcntjbGVhcjpib3RofS5jZW50ZXItYmxvY2t7ZGlzcGxheTpibG9jazttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tbGVmdDphdXRvfS5wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0IWltcG9ydGFudH0ucHVsbC1sZWZ0e2Zsb2F0OmxlZnQhaW1wb3J0YW50fS5oaWRle2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnNob3d7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9LmludmlzaWJsZXt2aXNpYmlsaXR5OmhpZGRlbn0udGV4dC1oaWRle2ZvbnQ6MC8wIGE7Y29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1zaGFkb3c6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjowfS5oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH0uYWZmaXh7cG9zaXRpb246Zml4ZWR9QC1tcy12aWV3cG9ydHt3aWR0aDpkZXZpY2Utd2lkdGh9LnZpc2libGUtbGcsLnZpc2libGUtbWQsLnZpc2libGUtc20sLnZpc2libGUteHN7ZGlzcGxheTpub25lIWltcG9ydGFudH0udmlzaWJsZS1sZy1ibG9jaywudmlzaWJsZS1sZy1pbmxpbmUsLnZpc2libGUtbGctaW5saW5lLWJsb2NrLC52aXNpYmxlLW1kLWJsb2NrLC52aXNpYmxlLW1kLWlubGluZSwudmlzaWJsZS1tZC1pbmxpbmUtYmxvY2ssLnZpc2libGUtc20tYmxvY2ssLnZpc2libGUtc20taW5saW5lLC52aXNpYmxlLXNtLWlubGluZS1ibG9jaywudmlzaWJsZS14cy1ibG9jaywudmlzaWJsZS14cy1pbmxpbmUsLnZpc2libGUteHMtaW5saW5lLWJsb2Nre2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey52aXNpYmxlLXhze2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fXRhYmxlLnZpc2libGUteHN7ZGlzcGxheTp0YWJsZSFpbXBvcnRhbnR9dHIudmlzaWJsZS14c3tkaXNwbGF5OnRhYmxlLXJvdyFpbXBvcnRhbnR9dGQudmlzaWJsZS14cyx0aC52aXNpYmxlLXhze2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXsudmlzaWJsZS14cy1ibG9ja3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey52aXNpYmxlLXhzLWlubGluZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXsudmlzaWJsZS14cy1pbmxpbmUtYmxvY2t7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkxcHgpey52aXNpYmxlLXNte2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fXRhYmxlLnZpc2libGUtc217ZGlzcGxheTp0YWJsZSFpbXBvcnRhbnR9dHIudmlzaWJsZS1zbXtkaXNwbGF5OnRhYmxlLXJvdyFpbXBvcnRhbnR9dGQudmlzaWJsZS1zbSx0aC52aXNpYmxlLXNte2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7LnZpc2libGUtc20tYmxvY2t7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCl7LnZpc2libGUtc20taW5saW5le2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KXsudmlzaWJsZS1zbS1pbmxpbmUtYmxvY2t7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkgYW5kIChtYXgtd2lkdGg6MTE5OXB4KXsudmlzaWJsZS1tZHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH10YWJsZS52aXNpYmxlLW1ke2Rpc3BsYXk6dGFibGUhaW1wb3J0YW50fXRyLnZpc2libGUtbWR7ZGlzcGxheTp0YWJsZS1yb3chaW1wb3J0YW50fXRkLnZpc2libGUtbWQsdGgudmlzaWJsZS1tZHtkaXNwbGF5OnRhYmxlLWNlbGwhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkgYW5kIChtYXgtd2lkdGg6MTE5OXB4KXsudmlzaWJsZS1tZC1ibG9ja3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7LnZpc2libGUtbWQtaW5saW5le2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6OTkycHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7LnZpc2libGUtbWQtaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsudmlzaWJsZS1sZ3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH10YWJsZS52aXNpYmxlLWxne2Rpc3BsYXk6dGFibGUhaW1wb3J0YW50fXRyLnZpc2libGUtbGd7ZGlzcGxheTp0YWJsZS1yb3chaW1wb3J0YW50fXRkLnZpc2libGUtbGcsdGgudmlzaWJsZS1sZ3tkaXNwbGF5OnRhYmxlLWNlbGwhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey52aXNpYmxlLWxnLWJsb2Nre2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDoxMjAwcHgpey52aXNpYmxlLWxnLWlubGluZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7LnZpc2libGUtbGctaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpey5oaWRkZW4teHN7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjk5MXB4KXsuaGlkZGVuLXNte2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSBhbmQgKG1heC13aWR0aDoxMTk5cHgpey5oaWRkZW4tbWR7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXsuaGlkZGVuLWxne2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fS52aXNpYmxlLXByaW50e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9QG1lZGlhIHByaW50ey52aXNpYmxlLXByaW50e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fXRhYmxlLnZpc2libGUtcHJpbnR7ZGlzcGxheTp0YWJsZSFpbXBvcnRhbnR9dHIudmlzaWJsZS1wcmludHtkaXNwbGF5OnRhYmxlLXJvdyFpbXBvcnRhbnR9dGQudmlzaWJsZS1wcmludCx0aC52aXNpYmxlLXByaW50e2Rpc3BsYXk6dGFibGUtY2VsbCFpbXBvcnRhbnR9fS52aXNpYmxlLXByaW50LWJsb2Nre2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9QG1lZGlhIHByaW50ey52aXNpYmxlLXByaW50LWJsb2Nre2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX0udmlzaWJsZS1wcmludC1pbmxpbmV7ZGlzcGxheTpub25lIWltcG9ydGFudH1AbWVkaWEgcHJpbnR7LnZpc2libGUtcHJpbnQtaW5saW5le2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19LnZpc2libGUtcHJpbnQtaW5saW5lLWJsb2Nre2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9QG1lZGlhIHByaW50ey52aXNpYmxlLXByaW50LWlubGluZS1ibG9ja3tkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBwcmludHsuaGlkZGVuLXByaW50e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLm1pbi5jc3MubWFwICovIl19 */"

/***/ }),

/***/ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css":
/*!**********************************************************************!*\
  !*** ./src/app/Content/vendor/font-awesome/css/font-awesome.min.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url('fontawesome-webfont.eot?v=4.6.3');src:url('fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'),url('fontawesome-webfont.woff2?v=4.6.3') format('woff2'),url('fontawesome-webfont.woff?v=4.6.3') format('woff'),url('fontawesome-webfont.ttf?v=4.6.3') format('truetype'),url('fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGVudC92ZW5kb3IvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0csV0FBVywwQkFBMEIsMkNBQW9ELGdVQUE2VyxtQkFBbUIsaUJBQWlCLENBQUMsSUFBSSxxQkFBcUIsNkNBQTZDLGtCQUFrQixvQkFBb0IsbUNBQW1DLGlDQUFpQyxDQUFDLE9BQU8sdUJBQXVCLGtCQUFrQixtQkFBbUIsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLG1CQUFtQixpQkFBaUIsQ0FBQyxPQUFPLGVBQWUseUJBQXlCLG9CQUFvQixDQUFDLFVBQVUsaUJBQWlCLENBQUMsT0FBTyxrQkFBa0IsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCLENBQUMsYUFBYSxrQkFBa0IsQ0FBQyxXQUFXLHlCQUF5Qix3QkFBd0Isa0JBQWtCLENBQUMsY0FBYyxVQUFVLENBQUMsZUFBZSxXQUFXLENBQUMsaUJBQWlCLGlCQUFpQixDQUFDLGtCQUFrQixnQkFBZ0IsQ0FBQyxZQUFZLFdBQVcsQ0FBQyxXQUFXLFVBQVUsQ0FBQyxjQUFjLGlCQUFpQixDQUFDLGVBQWUsZ0JBQWdCLENBQUMsU0FBUyw2Q0FBNkMsb0NBQW9DLENBQUMsVUFBVSwrQ0FBK0Msc0NBQXNDLENBQUMsMkJBQTJCLEdBQUcsK0JBQStCLHNCQUFzQixDQUFDLEtBQUssaUNBQWlDLHdCQUF3QixDQUFDLENBQUMsbUJBQW1CLEdBQUcsK0JBQStCLHNCQUFzQixDQUFDLEtBQUssaUNBQWlDLHdCQUF3QixDQUFDLENBQUMsY0FBYyxzRUFBc0UsZ0NBQWdDLEFBQTRCLHVCQUF1QixDQUFDLGVBQWUsc0VBQXNFLGlDQUFpQyxBQUE2Qix3QkFBd0IsQ0FBQyxlQUFlLHNFQUFzRSxpQ0FBaUMsQUFBNkIsd0JBQXdCLENBQUMsb0JBQW9CLGdGQUFnRiwr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ZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQywyQkFBMkIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsdUJBQXVCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsOERBQThELGVBQWUsQ0FBQyxzQ0FBc0MsZUFBZSxDQUFDLFNBQVMsa0JBQWtCLFVBQVUsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLHNCQUFzQixRQUFRLENBQUMsbURBQW1ELGdCQUFnQixXQUFXLFlBQVksU0FBUyxpQkFBaUIsU0FBUyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvQ29udGVudC92ZW5kb3IvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogIEZvbnQgQXdlc29tZSA0LjYuMyBieSBAZGF2ZWdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvIC0gQGZvbnRhd2Vzb21lXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcbiAqL0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6J0ZvbnRBd2Vzb21lJztzcmM6dXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD92PTQuNi4zJyk7c3JjOnVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC42LjMnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC42LjMnKSBmb3JtYXQoJ3dvZmYyJyksdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjYuMycpIGZvcm1hdCgnd29mZicpLHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj00LjYuMycpIGZvcm1hdCgndHJ1ZXR5cGUnKSx1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC42LjMjZm9udGF3ZXNvbWVyZWd1bGFyJykgZm9ybWF0KCdzdmcnKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWx9LmZhe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQ6bm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtcmVuZGVyaW5nOmF1dG87LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LmZhLWxne2ZvbnQtc2l6ZToxLjMzMzMzMzMzZW07bGluZS1oZWlnaHQ6Ljc1ZW07dmVydGljYWwtYWxpZ246LTE1JX0uZmEtMnh7Zm9udC1zaXplOjJlbX0uZmEtM3h7Zm9udC1zaXplOjNlbX0uZmEtNHh7Zm9udC1zaXplOjRlbX0uZmEtNXh7Zm9udC1zaXplOjVlbX0uZmEtZnd7d2lkdGg6MS4yODU3MTQyOWVtO3RleHQtYWxpZ246Y2VudGVyfS5mYS11bHtwYWRkaW5nLWxlZnQ6MDttYXJnaW4tbGVmdDoyLjE0Mjg1NzE0ZW07bGlzdC1zdHlsZS10eXBlOm5vbmV9LmZhLXVsPmxpe3Bvc2l0aW9uOnJlbGF0aXZlfS5mYS1saXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0yLjE0Mjg1NzE0ZW07d2lkdGg6Mi4xNDI4NTcxNGVtO3RvcDouMTQyODU3MTRlbTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtbGkuZmEtbGd7bGVmdDotMS44NTcxNDI4NmVtfS5mYS1ib3JkZXJ7cGFkZGluZzouMmVtIC4yNWVtIC4xNWVtO2JvcmRlcjpzb2xpZCAuMDhlbSAjZWVlO2JvcmRlci1yYWRpdXM6LjFlbX0uZmEtcHVsbC1sZWZ0e2Zsb2F0OmxlZnR9LmZhLXB1bGwtcmlnaHR7ZmxvYXQ6cmlnaHR9LmZhLmZhLXB1bGwtbGVmdHttYXJnaW4tcmlnaHQ6LjNlbX0uZmEuZmEtcHVsbC1yaWdodHttYXJnaW4tbGVmdDouM2VtfS5wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0fS5wdWxsLWxlZnR7ZmxvYXQ6bGVmdH0uZmEucHVsbC1sZWZ0e21hcmdpbi1yaWdodDouM2VtfS5mYS5wdWxsLXJpZ2h0e21hcmdpbi1sZWZ0Oi4zZW19LmZhLXNwaW57LXdlYmtpdC1hbmltYXRpb246ZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOmZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyfS5mYS1wdWxzZXstd2Via2l0LWFuaW1hdGlvbjpmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO2FuaW1hdGlvbjpmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpfUAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX1Aa2V5ZnJhbWVzIGZhLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fS5mYS1yb3RhdGUtOTB7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTEpXCI7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmZhLXJvdGF0ZS0xODB7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXCI7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LmZhLXJvdGF0ZS0yNzB7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXCI7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDI3MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LmZhLWZsaXAtaG9yaXpvbnRhbHstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXCI7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLTEsIDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoLTEsIDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwgMSl9LmZhLWZsaXAtdmVydGljYWx7LW1zLWZpbHRlcjpcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVwiOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsIC0xKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEsIC0xKTt0cmFuc2Zvcm06c2NhbGUoMSwgLTEpfTpyb290IC5mYS1yb3RhdGUtOTAsOnJvb3QgLmZhLXJvdGF0ZS0xODAsOnJvb3QgLmZhLXJvdGF0ZS0yNzAsOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCw6cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbHtmaWx0ZXI6bm9uZX0uZmEtc3RhY2t7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MmVtO2hlaWdodDoyZW07bGluZS1oZWlnaHQ6MmVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZmEtc3RhY2stMXgsLmZhLXN0YWNrLTJ4e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfS5mYS1zdGFjay0xeHtsaW5lLWhlaWdodDppbmhlcml0fS5mYS1zdGFjay0yeHtmb250LXNpemU6MmVtfS5mYS1pbnZlcnNle2NvbG9yOiNmZmZ9LmZhLWdsYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMDAwXCJ9LmZhLW11c2ljOmJlZm9yZXtjb250ZW50OlwiXFxmMDAxXCJ9LmZhLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcIlxcZjAwMlwifS5mYS1lbnZlbG9wZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDAzXCJ9LmZhLWhlYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDA0XCJ9LmZhLXN0YXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDVcIn0uZmEtc3Rhci1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDA2XCJ9LmZhLXVzZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDdcIn0uZmEtZmlsbTpiZWZvcmV7Y29udGVudDpcIlxcZjAwOFwifS5mYS10aC1sYXJnZTpiZWZvcmV7Y29udGVudDpcIlxcZjAwOVwifS5mYS10aDpiZWZvcmV7Y29udGVudDpcIlxcZjAwYVwifS5mYS10aC1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMDBiXCJ9LmZhLWNoZWNrOmJlZm9yZXtjb250ZW50OlwiXFxmMDBjXCJ9LmZhLXJlbW92ZTpiZWZvcmUsLmZhLWNsb3NlOmJlZm9yZSwuZmEtdGltZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGRcIn0uZmEtc2VhcmNoLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGVcIn0uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZXtjb250ZW50OlwiXFxmMDEwXCJ9LmZhLXBvd2VyLW9mZjpiZWZvcmV7Y29udGVudDpcIlxcZjAxMVwifS5mYS1zaWduYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTJcIn0uZmEtZ2VhcjpiZWZvcmUsLmZhLWNvZzpiZWZvcmV7Y29udGVudDpcIlxcZjAxM1wifS5mYS10cmFzaC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDE0XCJ9LmZhLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTVcIn0uZmEtZmlsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDE2XCJ9LmZhLWNsb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTdcIn0uZmEtcm9hZDpiZWZvcmV7Y29udGVudDpcIlxcZjAxOFwifS5mYS1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcIlxcZjAxOVwifS5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMDFhXCJ9LmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMDFiXCJ9LmZhLWluYm94OmJlZm9yZXtjb250ZW50OlwiXFxmMDFjXCJ9LmZhLXBsYXktY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMWRcIn0uZmEtcm90YXRlLXJpZ2h0OmJlZm9yZSwuZmEtcmVwZWF0OmJlZm9yZXtjb250ZW50OlwiXFxmMDFlXCJ9LmZhLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjFcIn0uZmEtbGlzdC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjJcIn0uZmEtbG9jazpiZWZvcmV7Y29udGVudDpcIlxcZjAyM1wifS5mYS1mbGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMDI0XCJ9LmZhLWhlYWRwaG9uZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjVcIn0uZmEtdm9sdW1lLW9mZjpiZWZvcmV7Y29udGVudDpcIlxcZjAyNlwifS5mYS12b2x1bWUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjAyN1wifS5mYS12b2x1bWUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjhcIn0uZmEtcXJjb2RlOmJlZm9yZXtjb250ZW50OlwiXFxmMDI5XCJ9LmZhLWJhcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMmFcIn0uZmEtdGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMDJiXCJ9LmZhLXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMmNcIn0uZmEtYm9vazpiZWZvcmV7Y29udGVudDpcIlxcZjAyZFwifS5mYS1ib29rbWFyazpiZWZvcmV7Y29udGVudDpcIlxcZjAyZVwifS5mYS1wcmludDpiZWZvcmV7Y29udGVudDpcIlxcZjAyZlwifS5mYS1jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzBcIn0uZmEtZm9udDpiZWZvcmV7Y29udGVudDpcIlxcZjAzMVwifS5mYS1ib2xkOmJlZm9yZXtjb250ZW50OlwiXFxmMDMyXCJ9LmZhLWl0YWxpYzpiZWZvcmV7Y29udGVudDpcIlxcZjAzM1wifS5mYS10ZXh0LWhlaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjAzNFwifS5mYS10ZXh0LXdpZHRoOmJlZm9yZXtjb250ZW50OlwiXFxmMDM1XCJ9LmZhLWFsaWduLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzZcIn0uZmEtYWxpZ24tY2VudGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMDM3XCJ9LmZhLWFsaWduLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMDM4XCJ9LmZhLWFsaWduLWp1c3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzlcIn0uZmEtbGlzdDpiZWZvcmV7Y29udGVudDpcIlxcZjAzYVwifS5mYS1kZWRlbnQ6YmVmb3JlLC5mYS1vdXRkZW50OmJlZm9yZXtjb250ZW50OlwiXFxmMDNiXCJ9LmZhLWluZGVudDpiZWZvcmV7Y29udGVudDpcIlxcZjAzY1wifS5mYS12aWRlby1jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwM2RcIn0uZmEtcGhvdG86YmVmb3JlLC5mYS1pbWFnZTpiZWZvcmUsLmZhLXBpY3R1cmUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjAzZVwifS5mYS1wZW5jaWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDBcIn0uZmEtbWFwLW1hcmtlcjpiZWZvcmV7Y29udGVudDpcIlxcZjA0MVwifS5mYS1hZGp1c3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDJcIn0uZmEtdGludDpiZWZvcmV7Y29udGVudDpcIlxcZjA0M1wifS5mYS1lZGl0OmJlZm9yZSwuZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDQ0XCJ9LmZhLXNoYXJlLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDQ1XCJ9LmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDQ2XCJ9LmZhLWFycm93czpiZWZvcmV7Y29udGVudDpcIlxcZjA0N1wifS5mYS1zdGVwLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMDQ4XCJ9LmZhLWZhc3QtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDlcIn0uZmEtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNGFcIn0uZmEtcGxheTpiZWZvcmV7Y29udGVudDpcIlxcZjA0YlwifS5mYS1wYXVzZTpiZWZvcmV7Y29udGVudDpcIlxcZjA0Y1wifS5mYS1zdG9wOmJlZm9yZXtjb250ZW50OlwiXFxmMDRkXCJ9LmZhLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNGVcIn0uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMDUwXCJ9LmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA1MVwifS5mYS1lamVjdDpiZWZvcmV7Y29udGVudDpcIlxcZjA1MlwifS5mYS1jaGV2cm9uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTNcIn0uZmEtY2hldnJvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjA1NFwifS5mYS1wbHVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA1NVwifS5mYS1taW51cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTZcIn0uZmEtdGltZXMtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDU3XCJ9LmZhLWNoZWNrLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA1OFwifS5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTlcIn0uZmEtaW5mby1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNWFcIn0uZmEtY3Jvc3NoYWlyczpiZWZvcmV7Y29udGVudDpcIlxcZjA1YlwifS5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjA1Y1wifS5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjA1ZFwifS5mYS1iYW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNWVcIn0uZmEtYXJyb3ctbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjA2MFwifS5mYS1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjA2MVwifS5mYS1hcnJvdy11cDpiZWZvcmV7Y29udGVudDpcIlxcZjA2MlwifS5mYS1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMDYzXCJ9LmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsLmZhLXNoYXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMDY0XCJ9LmZhLWV4cGFuZDpiZWZvcmV7Y29udGVudDpcIlxcZjA2NVwifS5mYS1jb21wcmVzczpiZWZvcmV7Y29udGVudDpcIlxcZjA2NlwifS5mYS1wbHVzOmJlZm9yZXtjb250ZW50OlwiXFxmMDY3XCJ9LmZhLW1pbnVzOmJlZm9yZXtjb250ZW50OlwiXFxmMDY4XCJ9LmZhLWFzdGVyaXNrOmJlZm9yZXtjb250ZW50OlwiXFxmMDY5XCJ9LmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA2YVwifS5mYS1naWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDZiXCJ9LmZhLWxlYWY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNmNcIn0uZmEtZmlyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA2ZFwifS5mYS1leWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNmVcIn0uZmEtZXllLXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmMDcwXCJ9LmZhLXdhcm5pbmc6YmVmb3JlLC5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA3MVwifS5mYS1wbGFuZTpiZWZvcmV7Y29udGVudDpcIlxcZjA3MlwifS5mYS1jYWxlbmRhcjpiZWZvcmV7Y29udGVudDpcIlxcZjA3M1wifS5mYS1yYW5kb206YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzRcIn0uZmEtY29tbWVudDpiZWZvcmV7Y29udGVudDpcIlxcZjA3NVwifS5mYS1tYWduZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzZcIn0uZmEtY2hldnJvbi11cDpiZWZvcmV7Y29udGVudDpcIlxcZjA3N1wifS5mYS1jaGV2cm9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzhcIn0uZmEtcmV0d2VldDpiZWZvcmV7Y29udGVudDpcIlxcZjA3OVwifS5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDdhXCJ9LmZhLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjA3YlwifS5mYS1mb2xkZXItb3BlbjpiZWZvcmV7Y29udGVudDpcIlxcZjA3Y1wifS5mYS1hcnJvd3MtdjpiZWZvcmV7Y29udGVudDpcIlxcZjA3ZFwifS5mYS1hcnJvd3MtaDpiZWZvcmV7Y29udGVudDpcIlxcZjA3ZVwifS5mYS1iYXItY2hhcnQtbzpiZWZvcmUsLmZhLWJhci1jaGFydDpiZWZvcmV7Y29udGVudDpcIlxcZjA4MFwifS5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA4MVwifS5mYS1mYWNlYm9vay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODJcIn0uZmEtY2FtZXJhLXJldHJvOmJlZm9yZXtjb250ZW50OlwiXFxmMDgzXCJ9LmZhLWtleTpiZWZvcmV7Y29udGVudDpcIlxcZjA4NFwifS5mYS1nZWFyczpiZWZvcmUsLmZhLWNvZ3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODVcIn0uZmEtY29tbWVudHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODZcIn0uZmEtdGh1bWJzLW8tdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODdcIn0uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjA4OFwifS5mYS1zdGFyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODlcIn0uZmEtaGVhcnQtbzpiZWZvcmV7Y29udGVudDpcIlxcZjA4YVwifS5mYS1zaWduLW91dDpiZWZvcmV7Y29udGVudDpcIlxcZjA4YlwifS5mYS1saW5rZWRpbi1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOGNcIn0uZmEtdGh1bWItdGFjazpiZWZvcmV7Y29udGVudDpcIlxcZjA4ZFwifS5mYS1leHRlcm5hbC1saW5rOmJlZm9yZXtjb250ZW50OlwiXFxmMDhlXCJ9LmZhLXNpZ24taW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTBcIn0uZmEtdHJvcGh5OmJlZm9yZXtjb250ZW50OlwiXFxmMDkxXCJ9LmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTJcIn0uZmEtdXBsb2FkOmJlZm9yZXtjb250ZW50OlwiXFxmMDkzXCJ9LmZhLWxlbW9uLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTRcIn0uZmEtcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTVcIn0uZmEtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTZcIn0uZmEtYm9va21hcmstbzpiZWZvcmV7Y29udGVudDpcIlxcZjA5N1wifS5mYS1waG9uZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOThcIn0uZmEtdHdpdHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjA5OVwifS5mYS1mYWNlYm9vay1mOmJlZm9yZSwuZmEtZmFjZWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOWFcIn0uZmEtZ2l0aHViOmJlZm9yZXtjb250ZW50OlwiXFxmMDliXCJ9LmZhLXVubG9jazpiZWZvcmV7Y29udGVudDpcIlxcZjA5Y1wifS5mYS1jcmVkaXQtY2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA5ZFwifS5mYS1mZWVkOmJlZm9yZSwuZmEtcnNzOmJlZm9yZXtjb250ZW50OlwiXFxmMDllXCJ9LmZhLWhkZC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMGEwXCJ9LmZhLWJ1bGxob3JuOmJlZm9yZXtjb250ZW50OlwiXFxmMGExXCJ9LmZhLWJlbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZjNcIn0uZmEtY2VydGlmaWNhdGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTNcIn0uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMGE0XCJ9LmZhLWhhbmQtby1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMGE1XCJ9LmZhLWhhbmQtby11cDpiZWZvcmV7Y29udGVudDpcIlxcZjBhNlwifS5mYS1oYW5kLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjBhN1wifS5mYS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjBhOFwifS5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTlcIn0uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMGFhXCJ9LmZhLWFycm93LWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMGFiXCJ9LmZhLWdsb2JlOmJlZm9yZXtjb250ZW50OlwiXFxmMGFjXCJ9LmZhLXdyZW5jaDpiZWZvcmV7Y29udGVudDpcIlxcZjBhZFwifS5mYS10YXNrczpiZWZvcmV7Y29udGVudDpcIlxcZjBhZVwifS5mYS1maWx0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYjBcIn0uZmEtYnJpZWZjYXNlOmJlZm9yZXtjb250ZW50OlwiXFxmMGIxXCJ9LmZhLWFycm93cy1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYjJcIn0uZmEtZ3JvdXA6YmVmb3JlLC5mYS11c2VyczpiZWZvcmV7Y29udGVudDpcIlxcZjBjMFwifS5mYS1jaGFpbjpiZWZvcmUsLmZhLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzFcIn0uZmEtY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzJcIn0uZmEtZmxhc2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzNcIn0uZmEtY3V0OmJlZm9yZSwuZmEtc2Npc3NvcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzRcIn0uZmEtY29weTpiZWZvcmUsLmZhLWZpbGVzLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzVcIn0uZmEtcGFwZXJjbGlwOmJlZm9yZXtjb250ZW50OlwiXFxmMGM2XCJ9LmZhLXNhdmU6YmVmb3JlLC5mYS1mbG9wcHktbzpiZWZvcmV7Y29udGVudDpcIlxcZjBjN1wifS5mYS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzhcIn0uZmEtbmF2aWNvbjpiZWZvcmUsLmZhLXJlb3JkZXI6YmVmb3JlLC5mYS1iYXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMGM5XCJ9LmZhLWxpc3QtdWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwY2FcIn0uZmEtbGlzdC1vbDpiZWZvcmV7Y29udGVudDpcIlxcZjBjYlwifS5mYS1zdHJpa2V0aHJvdWdoOmJlZm9yZXtjb250ZW50OlwiXFxmMGNjXCJ9LmZhLXVuZGVybGluZTpiZWZvcmV7Y29udGVudDpcIlxcZjBjZFwifS5mYS10YWJsZTpiZWZvcmV7Y29udGVudDpcIlxcZjBjZVwifS5mYS1tYWdpYzpiZWZvcmV7Y29udGVudDpcIlxcZjBkMFwifS5mYS10cnVjazpiZWZvcmV7Y29udGVudDpcIlxcZjBkMVwifS5mYS1waW50ZXJlc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDJcIn0uZmEtcGludGVyZXN0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjBkM1wifS5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDRcIn0uZmEtZ29vZ2xlLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDVcIn0uZmEtbW9uZXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDZcIn0uZmEtY2FyZXQtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjBkN1wifS5mYS1jYXJldC11cDpiZWZvcmV7Y29udGVudDpcIlxcZjBkOFwifS5mYS1jYXJldC1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMGQ5XCJ9LmZhLWNhcmV0LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMGRhXCJ9LmZhLWNvbHVtbnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGJcIn0uZmEtdW5zb3J0ZWQ6YmVmb3JlLC5mYS1zb3J0OmJlZm9yZXtjb250ZW50OlwiXFxmMGRjXCJ9LmZhLXNvcnQtZG93bjpiZWZvcmUsLmZhLXNvcnQtZGVzYzpiZWZvcmV7Y29udGVudDpcIlxcZjBkZFwifS5mYS1zb3J0LXVwOmJlZm9yZSwuZmEtc29ydC1hc2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGVcIn0uZmEtZW52ZWxvcGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTBcIn0uZmEtbGlua2VkaW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTFcIn0uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLC5mYS11bmRvOmJlZm9yZXtjb250ZW50OlwiXFxmMGUyXCJ9LmZhLWxlZ2FsOmJlZm9yZSwuZmEtZ2F2ZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTNcIn0uZmEtZGFzaGJvYXJkOmJlZm9yZSwuZmEtdGFjaG9tZXRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjBlNFwifS5mYS1jb21tZW50LW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTVcIn0uZmEtY29tbWVudHMtbzpiZWZvcmV7Y29udGVudDpcIlxcZjBlNlwifS5mYS1mbGFzaDpiZWZvcmUsLmZhLWJvbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTdcIn0uZmEtc2l0ZW1hcDpiZWZvcmV7Y29udGVudDpcIlxcZjBlOFwifS5mYS11bWJyZWxsYTpiZWZvcmV7Y29udGVudDpcIlxcZjBlOVwifS5mYS1wYXN0ZTpiZWZvcmUsLmZhLWNsaXBib2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjBlYVwifS5mYS1saWdodGJ1bGItbzpiZWZvcmV7Y29udGVudDpcIlxcZjBlYlwifS5mYS1leGNoYW5nZTpiZWZvcmV7Y29udGVudDpcIlxcZjBlY1wifS5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcIlxcZjBlZFwifS5mYS1jbG91ZC11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZWVcIn0uZmEtdXNlci1tZDpiZWZvcmV7Y29udGVudDpcIlxcZjBmMFwifS5mYS1zdGV0aG9zY29wZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmMVwifS5mYS1zdWl0Y2FzZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmMlwifS5mYS1iZWxsLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTJcIn0uZmEtY29mZmVlOmJlZm9yZXtjb250ZW50OlwiXFxmMGY0XCJ9LmZhLWN1dGxlcnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZjVcIn0uZmEtZmlsZS10ZXh0LW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZjZcIn0uZmEtYnVpbGRpbmctbzpiZWZvcmV7Y29udGVudDpcIlxcZjBmN1wifS5mYS1ob3NwaXRhbC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMGY4XCJ9LmZhLWFtYnVsYW5jZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmOVwifS5mYS1tZWRraXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZmFcIn0uZmEtZmlnaHRlci1qZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZmJcIn0uZmEtYmVlcjpiZWZvcmV7Y29udGVudDpcIlxcZjBmY1wifS5mYS1oLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmZFwifS5mYS1wbHVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjBmZVwifS5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjEwMFwifS5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDFcIn0uZmEtYW5nbGUtZG91YmxlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTAyXCJ9LmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTAzXCJ9LmZhLWFuZ2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDRcIn0uZmEtYW5nbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDVcIn0uZmEtYW5nbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDZcIn0uZmEtYW5nbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjEwN1wifS5mYS1kZXNrdG9wOmJlZm9yZXtjb250ZW50OlwiXFxmMTA4XCJ9LmZhLWxhcHRvcDpiZWZvcmV7Y29udGVudDpcIlxcZjEwOVwifS5mYS10YWJsZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMGFcIn0uZmEtbW9iaWxlLXBob25lOmJlZm9yZSwuZmEtbW9iaWxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTBiXCJ9LmZhLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTBjXCJ9LmZhLXF1b3RlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMGRcIn0uZmEtcXVvdGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMGVcIn0uZmEtc3Bpbm5lcjpiZWZvcmV7Y29udGVudDpcIlxcZjExMFwifS5mYS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTFcIn0uZmEtbWFpbC1yZXBseTpiZWZvcmUsLmZhLXJlcGx5OmJlZm9yZXtjb250ZW50OlwiXFxmMTEyXCJ9LmZhLWdpdGh1Yi1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTNcIn0uZmEtZm9sZGVyLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTRcIn0uZmEtZm9sZGVyLW9wZW4tbzpiZWZvcmV7Y29udGVudDpcIlxcZjExNVwifS5mYS1zbWlsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTE4XCJ9LmZhLWZyb3duLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTlcIn0uZmEtbWVoLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMWFcIn0uZmEtZ2FtZXBhZDpiZWZvcmV7Y29udGVudDpcIlxcZjExYlwifS5mYS1rZXlib2FyZC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTFjXCJ9LmZhLWZsYWctbzpiZWZvcmV7Y29udGVudDpcIlxcZjExZFwifS5mYS1mbGFnLWNoZWNrZXJlZDpiZWZvcmV7Y29udGVudDpcIlxcZjExZVwifS5mYS10ZXJtaW5hbDpiZWZvcmV7Y29udGVudDpcIlxcZjEyMFwifS5mYS1jb2RlOmJlZm9yZXtjb250ZW50OlwiXFxmMTIxXCJ9LmZhLW1haWwtcmVwbHktYWxsOmJlZm9yZSwuZmEtcmVwbHktYWxsOmJlZm9yZXtjb250ZW50OlwiXFxmMTIyXCJ9LmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSwuZmEtc3Rhci1oYWxmLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjNcIn0uZmEtbG9jYXRpb24tYXJyb3c6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjRcIn0uZmEtY3JvcDpiZWZvcmV7Y29udGVudDpcIlxcZjEyNVwifS5mYS1jb2RlLWZvcms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjZcIn0uZmEtdW5saW5rOmJlZm9yZSwuZmEtY2hhaW4tYnJva2VuOmJlZm9yZXtjb250ZW50OlwiXFxmMTI3XCJ9LmZhLXF1ZXN0aW9uOmJlZm9yZXtjb250ZW50OlwiXFxmMTI4XCJ9LmZhLWluZm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjlcIn0uZmEtZXhjbGFtYXRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMmFcIn0uZmEtc3VwZXJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMmJcIn0uZmEtc3Vic2NyaXB0OmJlZm9yZXtjb250ZW50OlwiXFxmMTJjXCJ9LmZhLWVyYXNlcjpiZWZvcmV7Y29udGVudDpcIlxcZjEyZFwifS5mYS1wdXp6bGUtcGllY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMmVcIn0uZmEtbWljcm9waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZjEzMFwifS5mYS1taWNyb3Bob25lLXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmMTMxXCJ9LmZhLXNoaWVsZDpiZWZvcmV7Y29udGVudDpcIlxcZjEzMlwifS5mYS1jYWxlbmRhci1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTMzXCJ9LmZhLWZpcmUtZXh0aW5ndWlzaGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMTM0XCJ9LmZhLXJvY2tldDpiZWZvcmV7Y29udGVudDpcIlxcZjEzNVwifS5mYS1tYXhjZG46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzZcIn0uZmEtY2hldnJvbi1jaXJjbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjEzN1wifS5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjEzOFwifS5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmV7Y29udGVudDpcIlxcZjEzOVwifS5mYS1jaGV2cm9uLWNpcmNsZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTNhXCJ9LmZhLWh0bWw1OmJlZm9yZXtjb250ZW50OlwiXFxmMTNiXCJ9LmZhLWNzczM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxM2NcIn0uZmEtYW5jaG9yOmJlZm9yZXtjb250ZW50OlwiXFxmMTNkXCJ9LmZhLXVubG9jay1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxM2VcIn0uZmEtYnVsbHNleWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDBcIn0uZmEtZWxsaXBzaXMtaDpiZWZvcmV7Y29udGVudDpcIlxcZjE0MVwifS5mYS1lbGxpcHNpcy12OmJlZm9yZXtjb250ZW50OlwiXFxmMTQyXCJ9LmZhLXJzcy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDNcIn0uZmEtcGxheS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDRcIn0uZmEtdGlja2V0OmJlZm9yZXtjb250ZW50OlwiXFxmMTQ1XCJ9LmZhLW1pbnVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0NlwifS5mYS1taW51cy1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjE0N1wifS5mYS1sZXZlbC11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE0OFwifS5mYS1sZXZlbC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTQ5XCJ9LmZhLWNoZWNrLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0YVwifS5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTRiXCJ9LmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTRjXCJ9LmZhLXNoYXJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0ZFwifS5mYS1jb21wYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMTRlXCJ9LmZhLXRvZ2dsZS1kb3duOmJlZm9yZSwuZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjE1MFwifS5mYS10b2dnbGUtdXA6YmVmb3JlLC5mYS1jYXJldC1zcXVhcmUtby11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE1MVwifS5mYS10b2dnbGUtcmlnaHQ6YmVmb3JlLC5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjE1MlwifS5mYS1ldXJvOmJlZm9yZSwuZmEtZXVyOmJlZm9yZXtjb250ZW50OlwiXFxmMTUzXCJ9LmZhLWdicDpiZWZvcmV7Y29udGVudDpcIlxcZjE1NFwifS5mYS1kb2xsYXI6YmVmb3JlLC5mYS11c2Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTVcIn0uZmEtcnVwZWU6YmVmb3JlLC5mYS1pbnI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTZcIn0uZmEtY255OmJlZm9yZSwuZmEtcm1iOmJlZm9yZSwuZmEteWVuOmJlZm9yZSwuZmEtanB5OmJlZm9yZXtjb250ZW50OlwiXFxmMTU3XCJ9LmZhLXJ1YmxlOmJlZm9yZSwuZmEtcm91YmxlOmJlZm9yZSwuZmEtcnViOmJlZm9yZXtjb250ZW50OlwiXFxmMTU4XCJ9LmZhLXdvbjpiZWZvcmUsLmZhLWtydzpiZWZvcmV7Y29udGVudDpcIlxcZjE1OVwifS5mYS1iaXRjb2luOmJlZm9yZSwuZmEtYnRjOmJlZm9yZXtjb250ZW50OlwiXFxmMTVhXCJ9LmZhLWZpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNWJcIn0uZmEtZmlsZS10ZXh0OmJlZm9yZXtjb250ZW50OlwiXFxmMTVjXCJ9LmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZXtjb250ZW50OlwiXFxmMTVkXCJ9LmZhLXNvcnQtYWxwaGEtZGVzYzpiZWZvcmV7Y29udGVudDpcIlxcZjE1ZVwifS5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjBcIn0uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmV7Y29udGVudDpcIlxcZjE2MVwifS5mYS1zb3J0LW51bWVyaWMtYXNjOmJlZm9yZXtjb250ZW50OlwiXFxmMTYyXCJ9LmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZXtjb250ZW50OlwiXFxmMTYzXCJ9LmZhLXRodW1icy11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE2NFwifS5mYS10aHVtYnMtZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjE2NVwifS5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE2NlwifS5mYS15b3V0dWJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTY3XCJ9LmZhLXhpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjhcIn0uZmEteGluZy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjlcIn0uZmEteW91dHViZS1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxmMTZhXCJ9LmZhLWRyb3Bib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNmJcIn0uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNmNcIn0uZmEtaW5zdGFncmFtOmJlZm9yZXtjb250ZW50OlwiXFxmMTZkXCJ9LmZhLWZsaWNrcjpiZWZvcmV7Y29udGVudDpcIlxcZjE2ZVwifS5mYS1hZG46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzBcIn0uZmEtYml0YnVja2V0OmJlZm9yZXtjb250ZW50OlwiXFxmMTcxXCJ9LmZhLWJpdGJ1Y2tldC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzJcIn0uZmEtdHVtYmxyOmJlZm9yZXtjb250ZW50OlwiXFxmMTczXCJ9LmZhLXR1bWJsci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzRcIn0uZmEtbG9uZy1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTc1XCJ9LmZhLWxvbmctYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzZcIn0uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTc3XCJ9LmZhLWxvbmctYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzhcIn0uZmEtYXBwbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzlcIn0uZmEtd2luZG93czpiZWZvcmV7Y29udGVudDpcIlxcZjE3YVwifS5mYS1hbmRyb2lkOmJlZm9yZXtjb250ZW50OlwiXFxmMTdiXCJ9LmZhLWxpbnV4OmJlZm9yZXtjb250ZW50OlwiXFxmMTdjXCJ9LmZhLWRyaWJiYmxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTdkXCJ9LmZhLXNreXBlOmJlZm9yZXtjb250ZW50OlwiXFxmMTdlXCJ9LmZhLWZvdXJzcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODBcIn0uZmEtdHJlbGxvOmJlZm9yZXtjb250ZW50OlwiXFxmMTgxXCJ9LmZhLWZlbWFsZTpiZWZvcmV7Y29udGVudDpcIlxcZjE4MlwifS5mYS1tYWxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTgzXCJ9LmZhLWdpdHRpcDpiZWZvcmUsLmZhLWdyYXRpcGF5OmJlZm9yZXtjb250ZW50OlwiXFxmMTg0XCJ9LmZhLXN1bi1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTg1XCJ9LmZhLW1vb24tbzpiZWZvcmV7Y29udGVudDpcIlxcZjE4NlwifS5mYS1hcmNoaXZlOmJlZm9yZXtjb250ZW50OlwiXFxmMTg3XCJ9LmZhLWJ1ZzpiZWZvcmV7Y29udGVudDpcIlxcZjE4OFwifS5mYS12azpiZWZvcmV7Y29udGVudDpcIlxcZjE4OVwifS5mYS13ZWlibzpiZWZvcmV7Y29udGVudDpcIlxcZjE4YVwifS5mYS1yZW5yZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOGJcIn0uZmEtcGFnZWxpbmVzOmJlZm9yZXtjb250ZW50OlwiXFxmMThjXCJ9LmZhLXN0YWNrLWV4Y2hhbmdlOmJlZm9yZXtjb250ZW50OlwiXFxmMThkXCJ9LmZhLWFycm93LWNpcmNsZS1vLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMThlXCJ9LmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOTBcIn0uZmEtdG9nZ2xlLWxlZnQ6YmVmb3JlLC5mYS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTkxXCJ9LmZhLWRvdC1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjE5MlwifS5mYS13aGVlbGNoYWlyOmJlZm9yZXtjb250ZW50OlwiXFxmMTkzXCJ9LmZhLXZpbWVvLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE5NFwifS5mYS10dXJraXNoLWxpcmE6YmVmb3JlLC5mYS10cnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOTVcIn0uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjE5NlwifS5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTk3XCJ9LmZhLXNsYWNrOmJlZm9yZXtjb250ZW50OlwiXFxmMTk4XCJ9LmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE5OVwifS5mYS13b3JkcHJlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWFcIn0uZmEtb3BlbmlkOmJlZm9yZXtjb250ZW50OlwiXFxmMTliXCJ9LmZhLWluc3RpdHV0aW9uOmJlZm9yZSwuZmEtYmFuazpiZWZvcmUsLmZhLXVuaXZlcnNpdHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWNcIn0uZmEtbW9ydGFyLWJvYXJkOmJlZm9yZSwuZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWRcIn0uZmEteWFob286YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWVcIn0uZmEtZ29vZ2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMWEwXCJ9LmZhLXJlZGRpdDpiZWZvcmV7Y29udGVudDpcIlxcZjFhMVwifS5mYS1yZWRkaXQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWEyXCJ9LmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjFhM1wifS5mYS1zdHVtYmxldXBvbjpiZWZvcmV7Y29udGVudDpcIlxcZjFhNFwifS5mYS1kZWxpY2lvdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTVcIn0uZmEtZGlnZzpiZWZvcmV7Y29udGVudDpcIlxcZjFhNlwifS5mYS1waWVkLXBpcGVyLXBwOmJlZm9yZXtjb250ZW50OlwiXFxmMWE3XCJ9LmZhLXBpZWQtcGlwZXItYWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMWE4XCJ9LmZhLWRydXBhbDpiZWZvcmV7Y29udGVudDpcIlxcZjFhOVwifS5mYS1qb29tbGE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWFcIn0uZmEtbGFuZ3VhZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWJcIn0uZmEtZmF4OmJlZm9yZXtjb250ZW50OlwiXFxmMWFjXCJ9LmZhLWJ1aWxkaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmMWFkXCJ9LmZhLWNoaWxkOmJlZm9yZXtjb250ZW50OlwiXFxmMWFlXCJ9LmZhLXBhdzpiZWZvcmV7Y29udGVudDpcIlxcZjFiMFwifS5mYS1zcG9vbjpiZWZvcmV7Y29udGVudDpcIlxcZjFiMVwifS5mYS1jdWJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWIyXCJ9LmZhLWN1YmVzOmJlZm9yZXtjb250ZW50OlwiXFxmMWIzXCJ9LmZhLWJlaGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjRcIn0uZmEtYmVoYW5jZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjVcIn0uZmEtc3RlYW06YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjZcIn0uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWI3XCJ9LmZhLXJlY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjhcIn0uZmEtYXV0b21vYmlsZTpiZWZvcmUsLmZhLWNhcjpiZWZvcmV7Y29udGVudDpcIlxcZjFiOVwifS5mYS1jYWI6YmVmb3JlLC5mYS10YXhpOmJlZm9yZXtjb250ZW50OlwiXFxmMWJhXCJ9LmZhLXRyZWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYmJcIn0uZmEtc3BvdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcZjFiY1wifS5mYS1kZXZpYW50YXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMWJkXCJ9LmZhLXNvdW5kY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYmVcIn0uZmEtZGF0YWJhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzBcIn0uZmEtZmlsZS1wZGYtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjMVwifS5mYS1maWxlLXdvcmQtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjMlwifS5mYS1maWxlLWV4Y2VsLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzNcIn0uZmEtZmlsZS1wb3dlcnBvaW50LW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzRcIn0uZmEtZmlsZS1waG90by1vOmJlZm9yZSwuZmEtZmlsZS1waWN0dXJlLW86YmVmb3JlLC5mYS1maWxlLWltYWdlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzVcIn0uZmEtZmlsZS16aXAtbzpiZWZvcmUsLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMWM2XCJ9LmZhLWZpbGUtc291bmQtbzpiZWZvcmUsLmZhLWZpbGUtYXVkaW8tbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjN1wifS5mYS1maWxlLW1vdmllLW86YmVmb3JlLC5mYS1maWxlLXZpZGVvLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzhcIn0uZmEtZmlsZS1jb2RlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzlcIn0uZmEtdmluZTpiZWZvcmV7Y29udGVudDpcIlxcZjFjYVwifS5mYS1jb2RlcGVuOmJlZm9yZXtjb250ZW50OlwiXFxmMWNiXCJ9LmZhLWpzZmlkZGxlOmJlZm9yZXtjb250ZW50OlwiXFxmMWNjXCJ9LmZhLWxpZmUtYm91eTpiZWZvcmUsLmZhLWxpZmUtYnVveTpiZWZvcmUsLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLC5mYS1zdXBwb3J0OmJlZm9yZSwuZmEtbGlmZS1yaW5nOmJlZm9yZXtjb250ZW50OlwiXFxmMWNkXCJ9LmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZXtjb250ZW50OlwiXFxmMWNlXCJ9LmZhLXJhOmJlZm9yZSwuZmEtcmVzaXN0YW5jZTpiZWZvcmUsLmZhLXJlYmVsOmJlZm9yZXtjb250ZW50OlwiXFxmMWQwXCJ9LmZhLWdlOmJlZm9yZSwuZmEtZW1waXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWQxXCJ9LmZhLWdpdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDJcIn0uZmEtZ2l0OmJlZm9yZXtjb250ZW50OlwiXFxmMWQzXCJ9LmZhLXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLC5mYS15Yy1zcXVhcmU6YmVmb3JlLC5mYS1oYWNrZXItbmV3czpiZWZvcmV7Y29udGVudDpcIlxcZjFkNFwifS5mYS10ZW5jZW50LXdlaWJvOmJlZm9yZXtjb250ZW50OlwiXFxmMWQ1XCJ9LmZhLXFxOmJlZm9yZXtjb250ZW50OlwiXFxmMWQ2XCJ9LmZhLXdlY2hhdDpiZWZvcmUsLmZhLXdlaXhpbjpiZWZvcmV7Y29udGVudDpcIlxcZjFkN1wifS5mYS1zZW5kOmJlZm9yZSwuZmEtcGFwZXItcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDhcIn0uZmEtc2VuZC1vOmJlZm9yZSwuZmEtcGFwZXItcGxhbmUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFkOVwifS5mYS1oaXN0b3J5OmJlZm9yZXtjb250ZW50OlwiXFxmMWRhXCJ9LmZhLWNpcmNsZS10aGluOmJlZm9yZXtjb250ZW50OlwiXFxmMWRiXCJ9LmZhLWhlYWRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjFkY1wifS5mYS1wYXJhZ3JhcGg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZGRcIn0uZmEtc2xpZGVyczpiZWZvcmV7Y29udGVudDpcIlxcZjFkZVwifS5mYS1zaGFyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTBcIn0uZmEtc2hhcmUtYWx0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFlMVwifS5mYS1ib21iOmJlZm9yZXtjb250ZW50OlwiXFxmMWUyXCJ9LmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLC5mYS1mdXRib2wtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFlM1wifS5mYS10dHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTRcIn0uZmEtYmlub2N1bGFyczpiZWZvcmV7Y29udGVudDpcIlxcZjFlNVwifS5mYS1wbHVnOmJlZm9yZXtjb250ZW50OlwiXFxmMWU2XCJ9LmZhLXNsaWRlc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTdcIn0uZmEtdHdpdGNoOmJlZm9yZXtjb250ZW50OlwiXFxmMWU4XCJ9LmZhLXllbHA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTlcIn0uZmEtbmV3c3BhcGVyLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZWFcIn0uZmEtd2lmaTpiZWZvcmV7Y29udGVudDpcIlxcZjFlYlwifS5mYS1jYWxjdWxhdG9yOmJlZm9yZXtjb250ZW50OlwiXFxmMWVjXCJ9LmZhLXBheXBhbDpiZWZvcmV7Y29udGVudDpcIlxcZjFlZFwifS5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZXtjb250ZW50OlwiXFxmMWVlXCJ9LmZhLWNjLXZpc2E6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjBcIn0uZmEtY2MtbWFzdGVyY2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjFmMVwifS5mYS1jYy1kaXNjb3ZlcjpiZWZvcmV7Y29udGVudDpcIlxcZjFmMlwifS5mYS1jYy1hbWV4OmJlZm9yZXtjb250ZW50OlwiXFxmMWYzXCJ9LmZhLWNjLXBheXBhbDpiZWZvcmV7Y29udGVudDpcIlxcZjFmNFwifS5mYS1jYy1zdHJpcGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjVcIn0uZmEtYmVsbC1zbGFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjFmNlwifS5mYS1iZWxsLXNsYXNoLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjdcIn0uZmEtdHJhc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjhcIn0uZmEtY29weXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMWY5XCJ9LmZhLWF0OmJlZm9yZXtjb250ZW50OlwiXFxmMWZhXCJ9LmZhLWV5ZWRyb3BwZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZmJcIn0uZmEtcGFpbnQtYnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZmNcIn0uZmEtYmlydGhkYXktY2FrZTpiZWZvcmV7Y29udGVudDpcIlxcZjFmZFwifS5mYS1hcmVhLWNoYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMWZlXCJ9LmZhLXBpZS1jaGFydDpiZWZvcmV7Y29udGVudDpcIlxcZjIwMFwifS5mYS1saW5lLWNoYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMjAxXCJ9LmZhLWxhc3RmbTpiZWZvcmV7Y29udGVudDpcIlxcZjIwMlwifS5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMjAzXCJ9LmZhLXRvZ2dsZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDRcIn0uZmEtdG9nZ2xlLW9uOmJlZm9yZXtjb250ZW50OlwiXFxmMjA1XCJ9LmZhLWJpY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDZcIn0uZmEtYnVzOmJlZm9yZXtjb250ZW50OlwiXFxmMjA3XCJ9LmZhLWlveGhvc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDhcIn0uZmEtYW5nZWxsaXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMjA5XCJ9LmZhLWNjOmJlZm9yZXtjb250ZW50OlwiXFxmMjBhXCJ9LmZhLXNoZWtlbDpiZWZvcmUsLmZhLXNoZXFlbDpiZWZvcmUsLmZhLWlsczpiZWZvcmV7Y29udGVudDpcIlxcZjIwYlwifS5mYS1tZWFucGF0aDpiZWZvcmV7Y29udGVudDpcIlxcZjIwY1wifS5mYS1idXlzZWxsYWRzOmJlZm9yZXtjb250ZW50OlwiXFxmMjBkXCJ9LmZhLWNvbm5lY3RkZXZlbG9wOmJlZm9yZXtjb250ZW50OlwiXFxmMjBlXCJ9LmZhLWRhc2hjdWJlOmJlZm9yZXtjb250ZW50OlwiXFxmMjEwXCJ9LmZhLWZvcnVtYmVlOmJlZm9yZXtjb250ZW50OlwiXFxmMjExXCJ9LmZhLWxlYW5wdWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTJcIn0uZmEtc2VsbHN5OmJlZm9yZXtjb250ZW50OlwiXFxmMjEzXCJ9LmZhLXNoaXJ0c2luYnVsazpiZWZvcmV7Y29udGVudDpcIlxcZjIxNFwifS5mYS1zaW1wbHlidWlsdDpiZWZvcmV7Y29udGVudDpcIlxcZjIxNVwifS5mYS1za3lhdGxhczpiZWZvcmV7Y29udGVudDpcIlxcZjIxNlwifS5mYS1jYXJ0LXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTdcIn0uZmEtY2FydC1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMjE4XCJ9LmZhLWRpYW1vbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTlcIn0uZmEtc2hpcDpiZWZvcmV7Y29udGVudDpcIlxcZjIxYVwifS5mYS11c2VyLXNlY3JldDpiZWZvcmV7Y29udGVudDpcIlxcZjIxYlwifS5mYS1tb3RvcmN5Y2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjFjXCJ9LmZhLXN0cmVldC12aWV3OmJlZm9yZXtjb250ZW50OlwiXFxmMjFkXCJ9LmZhLWhlYXJ0YmVhdDpiZWZvcmV7Y29udGVudDpcIlxcZjIxZVwifS5mYS12ZW51czpiZWZvcmV7Y29udGVudDpcIlxcZjIyMVwifS5mYS1tYXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMjIyXCJ9LmZhLW1lcmN1cnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjNcIn0uZmEtaW50ZXJzZXg6YmVmb3JlLC5mYS10cmFuc2dlbmRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjIyNFwifS5mYS10cmFuc2dlbmRlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjVcIn0uZmEtdmVudXMtZG91YmxlOmJlZm9yZXtjb250ZW50OlwiXFxmMjI2XCJ9LmZhLW1hcnMtZG91YmxlOmJlZm9yZXtjb250ZW50OlwiXFxmMjI3XCJ9LmZhLXZlbnVzLW1hcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjhcIn0uZmEtbWFycy1zdHJva2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjlcIn0uZmEtbWFycy1zdHJva2UtdjpiZWZvcmV7Y29udGVudDpcIlxcZjIyYVwifS5mYS1tYXJzLXN0cm9rZS1oOmJlZm9yZXtjb250ZW50OlwiXFxmMjJiXCJ9LmZhLW5ldXRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjIyY1wifS5mYS1nZW5kZXJsZXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMjJkXCJ9LmZhLWZhY2Vib29rLW9mZmljaWFsOmJlZm9yZXtjb250ZW50OlwiXFxmMjMwXCJ9LmZhLXBpbnRlcmVzdC1wOmJlZm9yZXtjb250ZW50OlwiXFxmMjMxXCJ9LmZhLXdoYXRzYXBwOmJlZm9yZXtjb250ZW50OlwiXFxmMjMyXCJ9LmZhLXNlcnZlcjpiZWZvcmV7Y29udGVudDpcIlxcZjIzM1wifS5mYS11c2VyLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzRcIn0uZmEtdXNlci10aW1lczpiZWZvcmV7Y29udGVudDpcIlxcZjIzNVwifS5mYS1ob3RlbDpiZWZvcmUsLmZhLWJlZDpiZWZvcmV7Y29udGVudDpcIlxcZjIzNlwifS5mYS12aWFjb2luOmJlZm9yZXtjb250ZW50OlwiXFxmMjM3XCJ9LmZhLXRyYWluOmJlZm9yZXtjb250ZW50OlwiXFxmMjM4XCJ9LmZhLXN1YndheTpiZWZvcmV7Y29udGVudDpcIlxcZjIzOVwifS5mYS1tZWRpdW06YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2FcIn0uZmEteWM6YmVmb3JlLC5mYS15LWNvbWJpbmF0b3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2JcIn0uZmEtb3B0aW4tbW9uc3RlcjpiZWZvcmV7Y29udGVudDpcIlxcZjIzY1wifS5mYS1vcGVuY2FydDpiZWZvcmV7Y29udGVudDpcIlxcZjIzZFwifS5mYS1leHBlZGl0ZWRzc2w6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyM2VcIn0uZmEtYmF0dGVyeS00OmJlZm9yZSwuZmEtYmF0dGVyeS1mdWxsOmJlZm9yZXtjb250ZW50OlwiXFxmMjQwXCJ9LmZhLWJhdHRlcnktMzpiZWZvcmUsLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDFcIn0uZmEtYmF0dGVyeS0yOmJlZm9yZSwuZmEtYmF0dGVyeS1oYWxmOmJlZm9yZXtjb250ZW50OlwiXFxmMjQyXCJ9LmZhLWJhdHRlcnktMTpiZWZvcmUsLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjI0M1wifS5mYS1iYXR0ZXJ5LTA6YmVmb3JlLC5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZXtjb250ZW50OlwiXFxmMjQ0XCJ9LmZhLW1vdXNlLXBvaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDVcIn0uZmEtaS1jdXJzb3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDZcIn0uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ3XCJ9LmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ4XCJ9LmZhLXN0aWNreS1ub3RlOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ5XCJ9LmZhLXN0aWNreS1ub3RlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNGFcIn0uZmEtY2MtamNiOmJlZm9yZXtjb250ZW50OlwiXFxmMjRiXCJ9LmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZXtjb250ZW50OlwiXFxmMjRjXCJ9LmZhLWNsb25lOmJlZm9yZXtjb250ZW50OlwiXFxmMjRkXCJ9LmZhLWJhbGFuY2Utc2NhbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNGVcIn0uZmEtaG91cmdsYXNzLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTBcIn0uZmEtaG91cmdsYXNzLTE6YmVmb3JlLC5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTFcIn0uZmEtaG91cmdsYXNzLTI6YmVmb3JlLC5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmV7Y29udGVudDpcIlxcZjI1MlwifS5mYS1ob3VyZ2xhc3MtMzpiZWZvcmUsLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTNcIn0uZmEtaG91cmdsYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMjU0XCJ9LmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSwuZmEtaGFuZC1yb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTVcIn0uZmEtaGFuZC1zdG9wLW86YmVmb3JlLC5mYS1oYW5kLXBhcGVyLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTZcIn0uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjU3XCJ9LmZhLWhhbmQtbGl6YXJkLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNThcIn0uZmEtaGFuZC1zcG9jay1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjU5XCJ9LmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjVhXCJ9LmZhLWhhbmQtcGVhY2UtbzpiZWZvcmV7Y29udGVudDpcIlxcZjI1YlwifS5mYS10cmFkZW1hcms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNWNcIn0uZmEtcmVnaXN0ZXJlZDpiZWZvcmV7Y29udGVudDpcIlxcZjI1ZFwifS5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZXtjb250ZW50OlwiXFxmMjVlXCJ9LmZhLWdnOmJlZm9yZXtjb250ZW50OlwiXFxmMjYwXCJ9LmZhLWdnLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjI2MVwifS5mYS10cmlwYWR2aXNvcjpiZWZvcmV7Y29udGVudDpcIlxcZjI2MlwifS5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZXtjb250ZW50OlwiXFxmMjYzXCJ9LmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMjY0XCJ9LmZhLWdldC1wb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjVcIn0uZmEtd2lraXBlZGlhLXc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjZcIn0uZmEtc2FmYXJpOmJlZm9yZXtjb250ZW50OlwiXFxmMjY3XCJ9LmZhLWNocm9tZTpiZWZvcmV7Y29udGVudDpcIlxcZjI2OFwifS5mYS1maXJlZm94OmJlZm9yZXtjb250ZW50OlwiXFxmMjY5XCJ9LmZhLW9wZXJhOmJlZm9yZXtjb250ZW50OlwiXFxmMjZhXCJ9LmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjZiXCJ9LmZhLXR2OmJlZm9yZSwuZmEtdGVsZXZpc2lvbjpiZWZvcmV7Y29udGVudDpcIlxcZjI2Y1wifS5mYS1jb250YW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNmRcIn0uZmEtNTAwcHg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNmVcIn0uZmEtYW1hem9uOmJlZm9yZXtjb250ZW50OlwiXFxmMjcwXCJ9LmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmV7Y29udGVudDpcIlxcZjI3MVwifS5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjcyXCJ9LmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNzNcIn0uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmV7Y29udGVudDpcIlxcZjI3NFwifS5mYS1pbmR1c3RyeTpiZWZvcmV7Y29udGVudDpcIlxcZjI3NVwifS5mYS1tYXAtcGluOmJlZm9yZXtjb250ZW50OlwiXFxmMjc2XCJ9LmZhLW1hcC1zaWduczpiZWZvcmV7Y29udGVudDpcIlxcZjI3N1wifS5mYS1tYXAtbzpiZWZvcmV7Y29udGVudDpcIlxcZjI3OFwifS5mYS1tYXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNzlcIn0uZmEtY29tbWVudGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjI3YVwifS5mYS1jb21tZW50aW5nLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2JcIn0uZmEtaG91eno6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2NcIn0uZmEtdmltZW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2RcIn0uZmEtYmxhY2stdGllOmJlZm9yZXtjb250ZW50OlwiXFxmMjdlXCJ9LmZhLWZvbnRpY29uczpiZWZvcmV7Y29udGVudDpcIlxcZjI4MFwifS5mYS1yZWRkaXQtYWxpZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODFcIn0uZmEtZWRnZTpiZWZvcmV7Y29udGVudDpcIlxcZjI4MlwifS5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODNcIn0uZmEtY29kaWVwaWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODRcIn0uZmEtbW9keDpiZWZvcmV7Y29udGVudDpcIlxcZjI4NVwifS5mYS1mb3J0LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODZcIn0uZmEtdXNiOmJlZm9yZXtjb250ZW50OlwiXFxmMjg3XCJ9LmZhLXByb2R1Y3QtaHVudDpiZWZvcmV7Y29udGVudDpcIlxcZjI4OFwifS5mYS1taXhjbG91ZDpiZWZvcmV7Y29udGVudDpcIlxcZjI4OVwifS5mYS1zY3JpYmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOGFcIn0uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjhiXCJ9LmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjhjXCJ9LmZhLXN0b3AtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjhkXCJ9LmZhLXN0b3AtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOGVcIn0uZmEtc2hvcHBpbmctYmFnOmJlZm9yZXtjb250ZW50OlwiXFxmMjkwXCJ9LmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmV7Y29udGVudDpcIlxcZjI5MVwifS5mYS1oYXNodGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMjkyXCJ9LmZhLWJsdWV0b290aDpiZWZvcmV7Y29udGVudDpcIlxcZjI5M1wifS5mYS1ibHVldG9vdGgtYjpiZWZvcmV7Y29udGVudDpcIlxcZjI5NFwifS5mYS1wZXJjZW50OmJlZm9yZXtjb250ZW50OlwiXFxmMjk1XCJ9LmZhLWdpdGxhYjpiZWZvcmV7Y29udGVudDpcIlxcZjI5NlwifS5mYS13cGJlZ2lubmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjk3XCJ9LmZhLXdwZm9ybXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOThcIn0uZmEtZW52aXJhOmJlZm9yZXtjb250ZW50OlwiXFxmMjk5XCJ9LmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWFcIn0uZmEtd2hlZWxjaGFpci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWJcIn0uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWNcIn0uZmEtYmxpbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWRcIn0uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWVcIn0uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTBcIn0uZmEtYnJhaWxsZTpiZWZvcmV7Y29udGVudDpcIlxcZjJhMVwifS5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTJcIn0uZmEtYXNsLWludGVycHJldGluZzpiZWZvcmUsLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZXtjb250ZW50OlwiXFxmMmEzXCJ9LmZhLWRlYWZuZXNzOmJlZm9yZSwuZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZSwuZmEtZGVhZjpiZWZvcmV7Y29udGVudDpcIlxcZjJhNFwifS5mYS1nbGlkZTpiZWZvcmV7Y29udGVudDpcIlxcZjJhNVwifS5mYS1nbGlkZS1nOmJlZm9yZXtjb250ZW50OlwiXFxmMmE2XCJ9LmZhLXNpZ25pbmc6YmVmb3JlLC5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50OlwiXFxmMmE3XCJ9LmZhLWxvdy12aXNpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYThcIn0uZmEtdmlhZGVvOmJlZm9yZXtjb250ZW50OlwiXFxmMmE5XCJ9LmZhLXZpYWRlby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWFcIn0uZmEtc25hcGNoYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWJcIn0uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWNcIn0uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMmFkXCJ9LmZhLXBpZWQtcGlwZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWVcIn0uZmEtZmlyc3Qtb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjBcIn0uZmEteW9hc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjFcIn0uZmEtdGhlbWVpc2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMmIyXCJ9LmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsLmZhLWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZXtjb250ZW50OlwiXFxmMmIzXCJ9LmZhLWZhOmJlZm9yZSwuZmEtZm9udC1hd2Vzb21lOmJlZm9yZXtjb250ZW50OlwiXFxmMmI0XCJ9LnNyLW9ubHl7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwgMCwgMCwgMCk7Ym9yZGVyOjB9LnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwuc3Itb25seS1mb2N1c2FibGU6Zm9jdXN7cG9zaXRpb246c3RhdGljO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtjbGlwOmF1dG99XG4iXX0= */"

/***/ }),

/***/ "./src/app/Content/vendor/metisMenu/metisMenu.min.css":
/*!************************************************************!*\
  !*** ./src/app/Content/vendor/metisMenu/metisMenu.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * metismenu - v1.1.3\n * Easy menu jQuery plugin for Twitter Bootstrap 3\n * https://github.com/onokumus/metisMenu\n *\n * Made by Osman Nuri Okumus\n * Under MIT License\n */\n\n.arrow{float:right;line-height:1.42857}\n\n.glyphicon.arrow:before{content:\"\\e079\"}\n\n.active>a>.glyphicon.arrow:before{content:\"\\e114\"}\n\n.fa.arrow:before{content:\"\\f104\"}\n\n.active>a>.fa.arrow:before{content:\"\\f107\"}\n\n.plus-times{float:right}\n\n.fa.plus-times:before{content:\"\\f067\"}\n\n.active>a>.fa.plus-times{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(45deg);transform:rotate(45deg)}\n\n.plus-minus{float:right}\n\n.fa.plus-minus:before{content:\"\\f067\"}\n\n.active>a>.fa.plus-minus:before{content:\"\\f068\"}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGVudC92ZW5kb3IvbWV0aXNNZW51L21ldGlzTWVudS5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7O0FBRUgsT0FBTyxZQUFZLG1CQUFtQixDQUFDOztBQUFBLHdCQUF3QixlQUFlLENBQUM7O0FBQUEsa0NBQWtDLGVBQWUsQ0FBQzs7QUFBQSxpQkFBaUIsZUFBZSxDQUFDOztBQUFBLDJCQUEyQixlQUFlLENBQUM7O0FBQUEsWUFBWSxXQUFXLENBQUM7O0FBQUEsc0JBQXNCLGVBQWUsQ0FBQzs7QUFBQSx5QkFBeUIsZ0VBQWdFLGdDQUFnQyxBQUFvRix1QkFBdUIsQ0FBQzs7QUFBQSxZQUFZLFdBQVcsQ0FBQzs7QUFBQSxzQkFBc0IsZUFBZSxDQUFDOztBQUFBLGdDQUFnQyxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9Db250ZW50L3ZlbmRvci9tZXRpc01lbnUvbWV0aXNNZW51Lm1pbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogbWV0aXNtZW51IC0gdjEuMS4zXG4gKiBFYXN5IG1lbnUgalF1ZXJ5IHBsdWdpbiBmb3IgVHdpdHRlciBCb290c3RyYXAgM1xuICogaHR0cHM6Ly9naXRodWIuY29tL29ub2t1bXVzL21ldGlzTWVudVxuICpcbiAqIE1hZGUgYnkgT3NtYW4gTnVyaSBPa3VtdXNcbiAqIFVuZGVyIE1JVCBMaWNlbnNlXG4gKi9cblxuLmFycm93e2Zsb2F0OnJpZ2h0O2xpbmUtaGVpZ2h0OjEuNDI4NTd9LmdseXBoaWNvbi5hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcZTA3OVwifS5hY3RpdmU+YT4uZ2x5cGhpY29uLmFycm93OmJlZm9yZXtjb250ZW50OlwiXFxlMTE0XCJ9LmZhLmFycm93OmJlZm9yZXtjb250ZW50OlwiXFxmMTA0XCJ9LmFjdGl2ZT5hPi5mYS5hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcZjEwN1wifS5wbHVzLXRpbWVze2Zsb2F0OnJpZ2h0fS5mYS5wbHVzLXRpbWVzOmJlZm9yZXtjb250ZW50OlwiXFxmMDY3XCJ9LmFjdGl2ZT5hPi5mYS5wbHVzLXRpbWVze2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy1tb3otdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5wbHVzLW1pbnVze2Zsb2F0OnJpZ2h0fS5mYS5wbHVzLW1pbnVzOmJlZm9yZXtjb250ZW50OlwiXFxmMDY3XCJ9LmFjdGl2ZT5hPi5mYS5wbHVzLW1pbnVzOmJlZm9yZXtjb250ZW50OlwiXFxmMDY4XCJ9Il19 */"

/***/ }),

/***/ "./src/app/CreateUsers/Models/app.UserModel.ts":
/*!*****************************************************!*\
  !*** ./src/app/CreateUsers/Models/app.UserModel.ts ***!
  \*****************************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/CreateUsers/Services/app.UserRegistration.Service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/CreateUsers/Services/app.UserRegistration.Service.ts ***!
  \**********************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/User/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Save User
    UserService.prototype.SaveUser = function (usermodel) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, usermodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update User
    UserService.prototype.UpdateUser = function (usermodel) {
        var putUrl = this.apiUrl + usermodel.UserId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, usermodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get MemberBy Id
    UserService.prototype.GetUserId = function (Id) {
        var editUrl = this.apiUrl + Id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Users
    UserService.prototype.GetAllUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Users
    UserService.prototype.GetAllUsersDropdown = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // DeleteUser
    UserService.prototype.DeleteUser = function (Id) {
        var deleteUrl = this.apiUrl + Id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/CreateUsers/app.AllUserRegistration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/CreateUsers/app.AllUserRegistration.component.ts ***!
  \******************************************************************/
/*! exports provided: AllUserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUserRegistrationComponent", function() { return AllUserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/app.UserRegistration.Service */ "./src/app/CreateUsers/Services/app.UserRegistration.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllUserRegistrationComponent = /** @class */ (function () {
    function AllUserRegistrationComponent(location, _Route, userService) {
        this.location = location;
        this._Route = _Route;
        this.userService = userService;
        this.displayedColumns = ['Id', 'UserName', 'FullName', 'EmailId', 'Contactno', 'Status', 'EditAction', 'DeleteAction'];
        this._userService = userService;
    }
    AllUserRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.GetAllUsers().subscribe(function (allUsers) {
            _this.AllUserList = allUsers;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.AllUserList);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllUserRegistrationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllUserRegistrationComponent.prototype.Delete = function (Id) {
        var _this = this;
        if (confirm("Are you sure to delete User ?")) {
            this._userService.DeleteUser(Id).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted User Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/AllSchemeMaster']);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], AllUserRegistrationComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AllUserRegistrationComponent.prototype, "paginator", void 0);
    AllUserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.AllUserRegistration.html */ "./src/app/CreateUsers/app.AllUserRegistration.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AllUserRegistrationComponent);
    return AllUserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/CreateUsers/app.AllUserRegistration.html":
/*!**********************************************************!*\
  !*** ./src/app/CreateUsers/app.AllUserRegistration.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All System Users</h4>\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"example-header\">\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n                <!-- SchemeID Column -->\n                <ng-container matColumnDef=\"Id\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> UserId </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.UserId}} </td>\n                </ng-container>\n                <!-- SchemeName Column -->\n                <ng-container matColumnDef=\"UserName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> UserName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.UserName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"FullName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> FullName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.FullName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"EmailId\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> EmailId </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.EmailId}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"Contactno\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contactno </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.Contactno}} </td>\n                </ng-container>\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"Status\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.Status== true ? \"Active\": \"DeActive\"}}  </td>\n                </ng-container>\n            \n                <ng-container matColumnDef=\"EditAction\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td mat-cell *matCellDef=\"let element\"> <a class=\"btn btn-info\" [routerLink]=\"['/User/Edit/',element.UserId]\"><i\n                                class=\"fa fa-edit fa-fw\"></i>\n                            Edit</a> </td>\n                </ng-container>\n                <!-- DeleteAction Column -->\n                <ng-container matColumnDef=\"DeleteAction\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <button class=\"btn btn-info\" (click)=\"Delete(element.UserId)\">Delete</button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/CreateUsers/app.EditUserRegistration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/CreateUsers/app.EditUserRegistration.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditUserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserRegistrationComponent", function() { return EditUserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Models_app_UserModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/app.UserModel */ "./src/app/CreateUsers/Models/app.UserModel.ts");
/* harmony import */ var _Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/app.UserRegistration.Service */ "./src/app/CreateUsers/Services/app.UserRegistration.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserRegistrationComponent = /** @class */ (function () {
    function EditUserRegistrationComponent(datePipe, _Route, _routeParams, userService) {
        this.datePipe = datePipe;
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.userService = userService;
        this.UserModel = new _Models_app_UserModel__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
        this._userService = userService;
    }
    EditUserRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Id = this._routeParams.snapshot.params['UserId'];
        // GetRoleById
        this._userService.GetUserId(this.Id).subscribe(function (userModel) {
            _this.UserModel = userModel;
        }, function (error) { return _this.errorMessage = error; });
    };
    EditUserRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.UpdateUser(this.UserModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('User Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('User Details Updated Successfully');
                _this._Route.navigate(['/User/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    EditUserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.EditUserRegistration.html */ "./src/app/CreateUsers/app.EditUserRegistration.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], EditUserRegistrationComponent);
    return EditUserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/CreateUsers/app.EditUserRegistration.html":
/*!***********************************************************!*\
  !*** ./src/app/CreateUsers/app.EditUserRegistration.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add System User</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add User</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">UserName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"UserName\" [disabled]=\"true\" [(ngModel)]=\"UserModel.UserName\" maxlength=\"50\"\n                        #refUserName=\"ngModel\" id=\"UserName\" required>\n                    <div *ngIf=\"!refUserName.valid  && (refUserName.dirty || refUserName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refUserName.errors.required\">\n                            UserName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">FullName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"FullName\" maxlength=\"50\" [(ngModel)]=\"UserModel.FullName\" maxlength=\"50\"\n                        #refFullName=\"ngModel\" id=\"FullName\" required>\n                    <div *ngIf=\"!refFullName.valid  && (refFullName.dirty || refFullName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refFullName.errors.required\">\n                            FullName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">EmailId</label>\n                    <input type=\"text\" class=\"form-control\" maxlength=\"50\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"EmailId\" [(ngModel)]=\"UserModel.EmailId\" maxlength=\"50\"\n                        #refEmailId=\"ngModel\" id=\"EmailId\" required>\n                    <div *ngIf=\"!refEmailId.valid  && (refEmailId.dirty || refEmailId.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refEmailId.errors.required\">\n                            EmailId is required\n                        </div>\n                        <div  *ngIf=\"refEmailId.errors && refEmailId.errors.pattern\">\n                            EmailId is invalid\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Contactno</label>\n                    <input type=\"text\" class=\"form-control\" name=\"Contactno\" [(ngModel)]=\"UserModel.Contactno\"\n                        maxlength=\"50\" #refContactno=\"ngModel\" id=\"Contactno\" required>\n                    <div *ngIf=\"!refContactno.valid  && (refContactno.dirty || refContactno.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refContactno.errors.required\">\n                            Contactno is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"UserModel.Password\"\n                        maxlength=\"50\" #refPassword=\"ngModel\" id=\"Password\" required>\n                    <div *ngIf=\"!refPassword.valid  && (refPassword.dirty || refPassword.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPassword.errors.required\">\n                            Password is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Status</label>\n                    <input type=\"checkbox\" name=\"Status\" [(ngModel)]=\"UserModel.Status\" maxlength=\"50\" #refStatus=\"ngModel\"\n                        id=\"Status\" required>\n                    <div *ngIf=\"!refStatus.valid  && (refStatus.dirty || refStatus.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refStatus.errors.required\">\n                            Status is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/User/All']\">\n                        All Users </a>\n                </div>\n\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/CreateUsers/app.UserRegistration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/CreateUsers/app.UserRegistration.component.ts ***!
  \***************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Models_app_UserModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/app.UserModel */ "./src/app/CreateUsers/Models/app.UserModel.ts");
/* harmony import */ var _Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/app.UserRegistration.Service */ "./src/app/CreateUsers/Services/app.UserRegistration.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(datePipe, _Route, userService) {
        this.datePipe = datePipe;
        this._Route = _Route;
        this.userService = userService;
        this.UserModel = new _Models_app_UserModel__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
        this._userService = userService;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.SaveUser(this.UserModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('User Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('User Created Successfully');
                _this._Route.navigate(['/User/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    UserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.UserRegistration.html */ "./src/app/CreateUsers/app.UserRegistration.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_app_UserRegistration_Service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/CreateUsers/app.UserRegistration.html":
/*!*******************************************************!*\
  !*** ./src/app/CreateUsers/app.UserRegistration.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add System User</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add User</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">UserName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"UserName\" [(ngModel)]=\"UserModel.UserName\" maxlength=\"50\"\n                        #refUserName=\"ngModel\" id=\"UserName\" required>\n                    <div *ngIf=\"!refUserName.valid  && (refUserName.dirty || refUserName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refUserName.errors.required\">\n                            UserName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">FullName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"FullName\" maxlength=\"50\" [(ngModel)]=\"UserModel.FullName\" maxlength=\"50\"\n                        #refFullName=\"ngModel\" id=\"FullName\" required>\n                    <div *ngIf=\"!refFullName.valid  && (refFullName.dirty || refFullName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refFullName.errors.required\">\n                            FullName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">EmailId</label>\n                    <input type=\"text\" class=\"form-control\" maxlength=\"50\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"EmailId\" [(ngModel)]=\"UserModel.EmailId\" maxlength=\"50\"\n                        #refEmailId=\"ngModel\" id=\"EmailId\" required>\n                    <div *ngIf=\"!refEmailId.valid  && (refEmailId.dirty || refEmailId.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refEmailId.errors.required\">\n                            EmailId is required\n                        </div>\n                        <div  *ngIf=\"refEmailId.errors && refEmailId.errors.pattern\">\n                            EmailId is invalid\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Contactno</label>\n                    <input type=\"text\" class=\"form-control\" name=\"Contactno\" [(ngModel)]=\"UserModel.Contactno\"\n                        maxlength=\"10\" #refContactno=\"ngModel\" id=\"Contactno\" required>\n                    <div *ngIf=\"!refContactno.valid  && (refContactno.dirty || refContactno.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refContactno.errors.required\">\n                            Contactno is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"UserModel.Password\"\n                        maxlength=\"50\" #refPassword=\"ngModel\" id=\"Password\" required>\n                    <div *ngIf=\"!refPassword.valid  && (refPassword.dirty || refPassword.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPassword.errors.required\">\n                            Password is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Status</label>\n                    <input type=\"checkbox\" name=\"Status\" [(ngModel)]=\"UserModel.Status\" maxlength=\"50\" #refStatus=\"ngModel\"\n                        id=\"Status\" required>\n                    <div *ngIf=\"!refStatus.valid  && (refStatus.dirty || refStatus.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refStatus.errors.required\">\n                            Status is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/User/All']\">\n                        All Users </a>\n                </div>\n\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Login/Models/app.LoginModel.ts":
/*!************************************************!*\
  !*** ./src/app/Login/Models/app.LoginModel.ts ***!
  \************************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.Username = "";
        this.Password = "";
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/Login/Services/app.LoginService.ts":
/*!****************************************************!*\
  !*** ./src/app/Login/Services/app.LoginService.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(_http, _Route) {
        this._http = _http;
        this._Route = _Route;
        this.apiUrl = "	http://localhost:49505/api/Authenticate/";
    }
    LoginService.prototype.validateLoginUser = function (loginmodel) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this._http.post(this.apiUrl, loginmodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            console.log(data);
            if (data.Token != null) {
                if (data.Usertype == "2") {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: loginmodel.Username, token: data.Token }));
                }
                else if (data.Usertype == "1") {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('AdminUser', JSON.stringify({ username: loginmodel.Username, token: data.Token }));
                }
                // return true to indicate successful login
                return data;
            }
            else {
                // return false to indicate failed login
                return null;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    LoginService.prototype.LogoutUser = function () {
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/Login/app.AdminLogout.Component.ts":
/*!****************************************************!*\
  !*** ./src/app/Login/app.AdminLogout.Component.ts ***!
  \****************************************************/
/*! exports provided: AdminLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLogoutComponent", function() { return AdminLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminLogoutComponent = /** @class */ (function () {
    function AdminLogoutComponent(_Route) {
        this._Route = _Route;
    }
    AdminLogoutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('AdminUser');
        this._Route.navigate(['Login']);
    };
    AdminLogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminLogoutComponent);
    return AdminLogoutComponent;
}());



/***/ }),

/***/ "./src/app/Login/app.LoginComponent.ts":
/*!*********************************************!*\
  !*** ./src/app/Login/app.LoginComponent.ts ***!
  \*********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_app_LoginModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/app.LoginModel */ "./src/app/Login/Models/app.LoginModel.ts");
/* harmony import */ var _Services_app_LoginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.LoginService */ "./src/app/Login/Services/app.LoginService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Route, snackBar, loginservice) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this.LoginModel = new _Models_app_LoginModel__WEBPACK_IMPORTED_MODULE_2__["LoginModel"]();
        this._loginservice = loginservice;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loginservice.validateLoginUser(this.LoginModel).subscribe(function (response) {
            if (response.Token == null && response.Usertype == "0") {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Invalid Username and Password", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['Login']);
            }
            if (response.Usertype == "1") {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Logged in Successfully", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['/Admin/Dashboard']);
            }
            if (response.Usertype == "2") {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Logged in Successfully", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['/User/Dashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.login.html */ "./src/app/Login/app.login.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _Services_app_LoginService__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Login/app.UserLogout.Component.ts":
/*!***************************************************!*\
  !*** ./src/app/Login/app.UserLogout.Component.ts ***!
  \***************************************************/
/*! exports provided: UserLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogoutComponent", function() { return UserLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserLogoutComponent = /** @class */ (function () {
    function UserLogoutComponent(_Route) {
        this._Route = _Route;
    }
    UserLogoutComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('currentUser');
        this._Route.navigate(['Login']);
    };
    UserLogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());



/***/ }),

/***/ "./src/app/Login/app.login.html":
/*!**************************************!*\
  !*** ./src/app/Login/app.login.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Login</title>\n\n</head>\n\n<body>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-md-offset-4\">\n              <div class=\"login-panel panel panel-default\">\r\n                <div class=\"page-header text-center\">\r\n                  <h3>eVasool - Lease Management</h3>\r\n                </div>\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Please Sign In</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n                    <fieldset>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"name\">Username</label>\r\n                        <input autofocus type=\"text\" class=\"form-control\" name=\"Username\" [(ngModel)]=\"LoginModel.Username\" maxlength=\"50\"\r\n                               #refUsername=\"ngModel\" id=\"Username\" required>\r\n                        <div *ngIf=\"!refUsername.valid  && (refUsername.dirty || refUsername.touched)\" class=\"alert alert-danger\">\r\n                          <div [hidden]=\"!refUsername.errors.required\">\r\n                            Username is required\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"name\">Password</label>\r\n                        <input autofocus type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"LoginModel.Password\" maxlength=\"50\"\r\n                               #refPassword=\"ngModel\" id=\"Password\" required>\r\n                        <div *ngIf=\"!refPassword.valid  && (refPassword.dirty || refPassword.touched)\" class=\"alert alert-danger\">\r\n                          <div [hidden]=\"!refPassword.errors.required\">\r\n                            Password is required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- Change this to a button or input when using this as a form -->\r\n                      <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-lg btn-success btn-block\">Login</button>\r\n                    </fieldset>\r\n                  </form>\r\n                </div>\r\n              </div>\n            </div>\n        </div>\n    </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/MemberRegistration/List/Memberlist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/MemberRegistration/List/Memberlist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All Members</h4>\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"example-header\">\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n                <!-- SchemeID Column -->\n                <ng-container matColumnDef=\"MemberId\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> MemberId </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.MemberId}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"MemberNo\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> MemberNo </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.MemberNo}} </td>\n                </ng-container>\n                <!-- SchemeName Column -->\n                <ng-container matColumnDef=\"MemberName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> MemberName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.MemberName}} </td>\n                </ng-container>\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"Contactno\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Contactno </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.Contactno}} </td>\n                </ng-container>\n                <!-- Createddate Column -->\n                <ng-container matColumnDef=\"PlanName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> PlanName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.PlanName}} </td>\n                </ng-container>\n                <!-- Createddate Column -->\n                <ng-container matColumnDef=\"SchemeName\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> SchemeName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.SchemeName}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"JoiningDate\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> JoiningDate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.JoiningDate | date:'yyyy-MM-dd'}} </td>\n                </ng-container>\n                <!-- EditAction Column -->\n                <ng-container matColumnDef=\"EditAction\">\n                    <th mat-header-cell *matHeaderCellDef> EditAction </th>\n                    <td mat-cell *matCellDef=\"let element\"> <a class=\"btn btn-info\" [routerLink]=\"['/Member/Edit/',element.MemberId]\"><i\n                                class=\"fa fa-edit fa-fw\"></i>\n                            Edit</a> </td>\n                </ng-container>\n                <!-- DeleteAction Column -->\n                <ng-container matColumnDef=\"DeleteAction\">\n                    <th mat-header-cell *matHeaderCellDef> DeleteAction </th>\n                    <td mat-cell *matCellDef=\"let element\" (click)=\"$event.stopPropagation()\">\n                        <button mat-button (click)=\"Delete(element.MemberId)\"  class=\"btn btn-danger\">Delete</button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <mat-paginator [length]=\"totalCount\" [pageSize]=\"paginationService.pageSize\" [pageSizeOptions]=\"paginationService.selectItemsPerPage\"\n                (page)=\"onPageSwitch.emit($event)\">\n            </mat-paginator>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/MemberRegistration/List/app.MemberListComponent .ts":
/*!*********************************************************************!*\
  !*** ./src/app/MemberRegistration/List/app.MemberListComponent .ts ***!
  \*********************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
/* harmony import */ var _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/app.MemberRegistration.service */ "./src/app/MemberRegistration/Services/app.MemberRegistration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(paginationService, memberregistration) {
        this.paginationService = paginationService;
        this.memberregistration = memberregistration;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ['MemberId', 'MemberNo', 'MemberName', 'Contactno', 'PlanName', 'SchemeName', 'JoiningDate', 'EditAction', 'DeleteAction'];
        this.onPageSwitch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(MemberListComponent.prototype, "dataSourceForTable", {
        set: function (value) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](value);
        },
        enumerable: true,
        configurable: true
    });
    MemberListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    MemberListComponent.prototype.Delete = function (MemberId) {
        var _this = this;
        console.log(MemberId);
        if (confirm("Are you sure to delete Member ?")) {
            this.memberregistration.DeleteMember(MemberId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Member Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Member/AllMember']);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('dataSource'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], MemberListComponent.prototype, "dataSourceForTable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MemberListComponent.prototype, "totalCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MemberListComponent.prototype, "onPageSwitch", void 0);
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./Memberlist.component.html */ "./src/app/MemberRegistration/List/Memberlist.component.html"),
            styles: [__webpack_require__(/*! ../../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_Shared_PaginationService__WEBPACK_IMPORTED_MODULE_2__["PaginationService"], _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_3__["MemberRegistrationService"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/MemberRegistration/List/app.MemberViewComponent.html":
/*!**********************************************************************!*\
  !*** ./src/app/MemberRegistration/List/app.MemberViewComponent.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list \n    [dataSource]=\"dataSource\" \n    [totalCount]=\"totalCount\"\n    (onPageSwitch)=\"switchPage($event)\"\n    (Delete)=\"Delete($event)\"\n    ></app-list>\n\n"

/***/ }),

/***/ "./src/app/MemberRegistration/List/app.MemberViewComponent.ts":
/*!********************************************************************!*\
  !*** ./src/app/MemberRegistration/List/app.MemberViewComponent.ts ***!
  \********************************************************************/
/*! exports provided: MemberViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberViewComponent", function() { return MemberViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
/* harmony import */ var _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/app.MemberRegistration.service */ "./src/app/MemberRegistration/Services/app.MemberRegistration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberViewComponent = /** @class */ (function () {
    function MemberViewComponent(_Route, memberregistration, paginationService) {
        this._Route = _Route;
        this.memberregistration = memberregistration;
        this.paginationService = paginationService;
    }
    MemberViewComponent.prototype.ngOnInit = function () {
        this.getAllMembers();
    };
    MemberViewComponent.prototype.switchPage = function (event) {
        this.paginationService.change(event);
        this.getAllMembers();
    };
    MemberViewComponent.prototype.getAllMembers = function () {
        var _this = this;
        this.memberregistration.getAll()
            .subscribe(function (result) {
            console.log(result.headers);
            _this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
            // this.totalCount = 4;
            _this.dataSource = result.body.value;
        });
    };
    MemberViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./app.MemberViewComponent.html */ "./src/app/MemberRegistration/List/app.MemberViewComponent.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_2__["MemberRegistrationService"],
            _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], MemberViewComponent);
    return MemberViewComponent;
}());



/***/ }),

/***/ "./src/app/MemberRegistration/Models/app.memberRegistrationModel.ts":
/*!**************************************************************************!*\
  !*** ./src/app/MemberRegistration/Models/app.memberRegistrationModel.ts ***!
  \**************************************************************************/
/*! exports provided: MemberRegistrationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRegistrationModel", function() { return MemberRegistrationModel; });
var MemberRegistrationModel = /** @class */ (function () {
    function MemberRegistrationModel() {
    }
    return MemberRegistrationModel;
}());



/***/ }),

/***/ "./src/app/MemberRegistration/Services/app.MemberRegistration.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/MemberRegistration/Services/app.MemberRegistration.service.ts ***!
  \*******************************************************************************/
/*! exports provided: MemberRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRegistrationService", function() { return MemberRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
/* harmony import */ var _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/constantUrl */ "./src/app/Shared/constantUrl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberRegistrationService = /** @class */ (function () {
    function MemberRegistrationService(http, paginationService) {
        this.http = http;
        this.paginationService = paginationService;
        this.apiUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem/";
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    MemberRegistrationService.prototype.getAll = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        var Url = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem";
        var mergedUrl = "" + Url +
            ("?page=" + this.paginationService.page + "&pageCount=" + this.paginationService.pageCount);
        return this.http.get(mergedUrl, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Save Member
    MemberRegistrationService.prototype.SaveMember = function (memberModel) {
        var SaveUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(SaveUrl, memberModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update Member
    MemberRegistrationService.prototype.UpdateMember = function (memberModel) {
        var updateUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem/" + memberModel.MemberId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(updateUrl, memberModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Member
    MemberRegistrationService.prototype.GetAllMember = function () {
        var getUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get Member by MemberID
    MemberRegistrationService.prototype.GetMemberById = function (MemberId) {
        console.log(MemberId);
        var editUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem" + '/' + MemberId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    MemberRegistrationService.prototype.DeleteMember = function (MemberId) {
        var deleteUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/PropertyItem" + '/' + MemberId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    MemberRegistrationService.prototype.GetAllActiveSchemeList = function () {
        var url = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/SchemeDropdown/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    MemberRegistrationService.prototype.GetAllActivePlans = function (schemeId) {
        var url = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/AllActivePlanMaster" + '/' + schemeId;
        ;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    MemberRegistrationService.prototype.GetAmount = function (planID, schemeId) {
        var url = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/GetTotalAmount/";
        var AmountRequest = { "PlanId": planID, "SchemeId": schemeId };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(url, AmountRequest, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    MemberRegistrationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    MemberRegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])
    ], MemberRegistrationService);
    return MemberRegistrationService;
}());



/***/ }),

/***/ "./src/app/MemberRegistration/app.EditMemberRegistration.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/MemberRegistration/app.EditMemberRegistration.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditMemberRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemberRegistrationComponent", function() { return EditMemberRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_app_memberRegistrationModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/app.memberRegistrationModel */ "./src/app/MemberRegistration/Models/app.memberRegistrationModel.ts");
/* harmony import */ var _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.MemberRegistration.service */ "./src/app/MemberRegistration/Services/app.MemberRegistration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMemberRegistrationComponent = /** @class */ (function () {
    function EditMemberRegistrationComponent(_Route, _routeParams, memberregistration) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.memberregistration = memberregistration;
        this.MemberModel = new _Models_app_memberRegistrationModel__WEBPACK_IMPORTED_MODULE_2__["MemberRegistrationModel"]();
        this.bsValue = new Date();
        this._memberregistration = memberregistration;
    }
    EditMemberRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MemberID = this._routeParams.snapshot.params['MemberId'];
        this.genderList = [
            { "id": 1, "name": "Male" },
            { "id": 2, "name": "Female" }
        ];
        this._memberregistration.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
        if (this.MemberID != null) {
            this._memberregistration.GetMemberById(this.MemberID).subscribe(function (memberModel) {
                _this.MemberModel = memberModel;
                _this._memberregistration.GetAllActivePlans(_this.MemberModel.SchemeID).subscribe(function (allactivePlans) {
                    _this.AllActivePlanModel = allactivePlans;
                }, function (error) { return _this.errorMessage = error; });
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditMemberRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var demo = this.bsValue;
        this._memberregistration.UpdateMember(this.MemberModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Member Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Member Details Updated Successfully');
                _this._Route.navigate(['/Member/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    EditMemberRegistrationComponent.prototype.CalcuateAge = function (birthdate) {
        if (birthdate) {
            var timeDiff = Math.abs(Date.now() - birthdate);
            this.MemberModel.Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }
    };
    EditMemberRegistrationComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EditMemberRegistrationComponent.prototype.GetAmount = function (PlanID, SchemeID) {
        var _this = this;
        if (PlanID != null && SchemeID != null) {
            this._memberregistration.GetAmount(PlanID, SchemeID).subscribe(function (amount) {
                _this.MemberModel.Amount = amount;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditMemberRegistrationComponent.prototype.OnChange = function (schemeId) {
        var _this = this;
        if (schemeId != null) {
            this._memberregistration.GetAllActivePlans(schemeId).subscribe(function (allactivePlans) {
                _this.AllActivePlanModel = allactivePlans;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditMemberRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.EditMemberRegistration.html */ "./src/app/MemberRegistration/app.EditMemberRegistration.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_3__["MemberRegistrationService"]])
    ], EditMemberRegistrationComponent);
    return EditMemberRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/MemberRegistration/app.EditMemberRegistration.html":
/*!********************************************************************!*\
  !*** ./src/app/MemberRegistration/app.EditMemberRegistration.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css\">\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Edit Member</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-4\">\n                <label for=\"name\">First Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"MemberFName\" [(ngModel)]=\"MemberModel.MemberFName\"\n                    maxlength=\"50\" #refMemberFName=\"ngModel\" id=\"MemberFName\" required>\n                <div *ngIf=\"!refMemberFName.valid  && (refMemberFName.dirty || refMemberFName.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refMemberFName.errors.required\">\n                        First Name is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"MemberLName\" [(ngModel)]=\"MemberModel.MemberLName\"\n                    maxlength=\"50\" #refMemberLName=\"ngModel\" id=\"MemberLName\" required>\n                <div *ngIf=\"!refMemberLName.valid  && (refMemberLName.dirty || refMemberLName.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refMemberLName.errors.required\">\n                        Last Name is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Middle Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"MemberMName\" [(ngModel)]=\"MemberModel.MemberMName\"\n                    maxlength=\"50\" #refMemberMName=\"ngModel\" id=\"MemberMName\" required>\n                <div *ngIf=\"!refMemberMName.valid  && (refMemberMName.dirty || refMemberMName.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refMemberMName.errors.required\">\n                        Middle Name is required\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <label for=\"name\">JoiningDate</label>\n                <input [disabled]=\"true\" [(ngModel)]=\"MemberModel.JoiningDate\" name=\"JoiningDate\" id=\"JoiningDate\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n                    class=\"form-control\" #refJoiningDate=\"bsDatepicker\" bsDatepicker>\n\n                <div *ngIf=\"!refJoiningDate.valid  && (refJoiningDate.dirty || refJoiningDate.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refJoiningDate.errors.required\">\n                        Joining Date is required\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"col-md-4\">\n                <label for=\"name\">Date of Birth</label>\n                <input [(ngModel)]=\"MemberModel.Dob\" name=\"Dob\" id=\"Dob\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n                    (bsValueChange)=\"CalcuateAge($event)\" class=\"form-control\" #refDob=\"bsDatepicker\" bsDatepicker>\n\n                <div *ngIf=\"!refDob.valid  && (refDob.dirty || refDob.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refDob.errors.required\">\n                        Date of Birth is required\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <label for=\"name\">Age</label>\n                <input type=\"text\" class=\"form-control\" name=\"Age\" [(ngModel)]=\"MemberModel.Age\" maxlength=\"50\" #refAge=\"ngModel\"\n                    id=\"Age\" required>\n                <div *ngIf=\"!refAge.valid  && (refAge.dirty || refAge.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refAge.errors.required\">\n                        Age is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">EmailId</label>\n                <input type=\"text\" class=\"form-control\" name=\"EmailId\" [(ngModel)]=\"MemberModel.EmailId\" maxlength=\"50\"\n                    #refEmailId=\"ngModel\" id=\"EmailId\" required>\n                <div *ngIf=\"!refEmailId.valid  && (refEmailId.dirty || refEmailId.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refEmailId.errors.required\">\n                        EmailId is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Gender</label>\n                <select required name=\"Gender\" #refgender=\"ngModel\" class=\"form-control\" [(ngModel)]=\"MemberModel.Gender\">\n                    <option value=''>Please select Gender</option>\n                    <option *ngFor=\"let gender of genderList\" [ngValue]=\"gender.id\">\n                        {{gender.name}}\n                    </option>\n                </select>\n                <div *ngIf=\"!refgender.valid  && (refgender.dirty || refgender.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refgender.errors.required\">\n                        Gender is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label>Scheme</label>\n                <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"SchemeName\" [(ngModel)]=\"MemberModel.SchemeName\" maxlength=\"50\"\n                id=\"SchemeName\" >\n            </div>\n            <div class=\"col-md-4\">\n                <label>PlanName</label>\n                <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"PlanName\" [(ngModel)]=\"MemberModel.PlanName\" maxlength=\"50\"\n                id=\"SchemeName\" >\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Contactno</label>\n                <input type=\"text\" class=\"form-control\" name=\"Contactno\" [(ngModel)]=\"MemberModel.Contactno\" maxlength=\"10\"\n                    #refContactno=\"ngModel\" id=\"Contactno\" required>\n                <div *ngIf=\"!refContactno.valid  && (refContactno.dirty || refContactno.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refContactno.errors.required\">\n                        Contactno is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Address</label>\n                <input type=\"text\" class=\"form-control\" name=\"Address\" [(ngModel)]=\"MemberModel.Address\" maxlength=\"50\"\n                    #refAddress=\"ngModel\" id=\"Address\" required>\n                <div *ngIf=\"!refAddress.valid  && (refAddress.dirty || refAddress.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refAddress.errors.required\">\n                        Address is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Amount</label>\n                <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"Amount\" [(ngModel)]=\"MemberModel.Amount\" maxlength=\"10\"\n                    #refAmount=\"ngModel\" id=\"Amount\" required>\n                <div *ngIf=\"!refAmount.valid  && (refAmount.dirty || refAmount.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refAmount.errors.required\">\n                        Amount is required\n                    </div>\n                </div>\n            </div>\n           \n            <div class=\"col-md-4\">\n                <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Member/All']\">\n                    All Member </a>\n            </div>\n            <input type=\"hidden\" name=\"MemberId\" value=\"{{MemberModel.MemberId}}\">\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/MemberRegistration/app.MemberRegistration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/MemberRegistration/app.MemberRegistration.component.ts ***!
  \************************************************************************/
/*! exports provided: MemberRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRegistrationComponent", function() { return MemberRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_app_memberRegistrationModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/app.memberRegistrationModel */ "./src/app/MemberRegistration/Models/app.memberRegistrationModel.ts");
/* harmony import */ var _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.MemberRegistration.service */ "./src/app/MemberRegistration/Services/app.MemberRegistration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberRegistrationComponent = /** @class */ (function () {
    function MemberRegistrationComponent(datePipe, _Route, memberregistration) {
        this.datePipe = datePipe;
        this._Route = _Route;
        this.memberregistration = memberregistration;
        this.MemberModel = new _Models_app_memberRegistrationModel__WEBPACK_IMPORTED_MODULE_2__["MemberRegistrationModel"]();
        this.bsValue = new Date();
        this._memberregistration = memberregistration;
    }
    MemberRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.joinminDate = new Date();
        this.joinmaxDate = new Date();
        this.joinminDate.setDate(this.joinminDate.getDate() - 5);
        this.joinmaxDate.setDate(this.joinmaxDate.getDate() + 10);
        this.dobminDate = new Date();
        this.dobminDate.setDate(this.dobminDate.getDate() - 6570);
        this._memberregistration.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
        this.genderList = [
            { "id": 1, "name": "Male" },
            { "id": 2, "name": "Female" }
        ];
    };
    MemberRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.MemberModel);
        var demo = this.bsValue;
        this._memberregistration.SaveMember(this.MemberModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Member Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Member Added Successfully');
                _this._Route.navigate(['/Member/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    MemberRegistrationComponent.prototype.OnChange = function (schemeId) {
        var _this = this;
        if (schemeId != null) {
            this._memberregistration.GetAllActivePlans(schemeId).subscribe(function (allactivePlans) {
                _this.AllActivePlanModel = allactivePlans;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    MemberRegistrationComponent.prototype.CalcuateAge = function (birthdate) {
        if (birthdate) {
            var timeDiff = Math.abs(Date.now() - birthdate);
            this.MemberModel.Age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        }
    };
    MemberRegistrationComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MemberRegistrationComponent.prototype.GetAmount = function (PlanID, SchemeID) {
        var _this = this;
        if (PlanID != null && SchemeID != null) {
            this._memberregistration.GetAmount(PlanID, SchemeID).subscribe(function (amount) {
                _this.MemberModel.Amount = amount;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    MemberRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.MemberRegistration.html */ "./src/app/MemberRegistration/app.MemberRegistration.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_app_MemberRegistration_service__WEBPACK_IMPORTED_MODULE_3__["MemberRegistrationService"]])
    ], MemberRegistrationComponent);
    return MemberRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/MemberRegistration/app.MemberRegistration.html":
/*!****************************************************************!*\
  !*** ./src/app/MemberRegistration/app.MemberRegistration.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css\">\n<h4>Add Member</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add Member</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-4\">\n                <label for=\"name\">First Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"MemberFName\" [(ngModel)]=\"MemberModel.MemberFName\"\n                    maxlength=\"50\" #refMemberFName=\"ngModel\" id=\"MemberFName\" required>\n                <div *ngIf=\"!refMemberFName.valid  && (refMemberFName.dirty || refMemberFName.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refMemberFName.errors.required\">\n                        First Name is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"MemberLName\" [(ngModel)]=\"MemberModel.MemberLName\"\n                    maxlength=\"50\" #refMemberLName=\"ngModel\" id=\"MemberLName\" required>\n                <div *ngIf=\"!refMemberLName.valid  && (refMemberLName.dirty || refMemberLName.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refMemberLName.errors.required\">\n                        Last Name is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Middle Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"MemberMName\" [(ngModel)]=\"MemberModel.MemberMName\"\n                    maxlength=\"50\" #refMemberMName=\"ngModel\" id=\"MemberMName\" required>\n                <div *ngIf=\"!refMemberMName.valid  && (refMemberMName.dirty || refMemberMName.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refMemberMName.errors.required\">\n                        Middle Name is required\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <label for=\"name\">JoiningDate</label>\n                <input [(ngModel)]=\"MemberModel.JoiningDate\" name=\"JoiningDate\" id=\"JoiningDate\" onkeypress=\"return false;\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n                    class=\"form-control\" #refJoiningDate=\"bsDatepicker\" [minDate]=\"joinminDate\" [maxDate]=\"joinmaxDate\" bsDatepicker>\n\n                <div *ngIf=\"!refJoiningDate.valid  && (refJoiningDate.dirty || refJoiningDate.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refJoiningDate.errors.required\">\n                        Joining Date is required\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"col-md-4\">\n                <label for=\"name\">Date of Birth</label>\n                <input [(ngModel)]=\"MemberModel.Dob\" name=\"Dob\" id=\"Dob\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" onkeypress=\"return false;\"\n                    (bsValueChange)=\"CalcuateAge($event)\" [maxDate]=\"dobminDate\" class=\"form-control\" #refDob=\"bsDatepicker\" bsDatepicker>\n\n                <div *ngIf=\"!refDob.valid  && (refDob.dirty || refDob.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refDob.errors.required\">\n                        Date of Birth is required\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <label for=\"name\">Age</label>\n                <input type=\"text\" class=\"form-control\" name=\"Age\" [disabled]=\"true\" [(ngModel)]=\"MemberModel.Age\" maxlength=\"50\" #refAge=\"ngModel\"\n                    id=\"Age\" required>\n                <div *ngIf=\"!refAge.valid  && (refAge.dirty || refAge.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refAge.errors.required\">\n                        Age is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">EmailId</label>\n                <input type=\"text\" class=\"form-control\"  name=\"EmailId\" [(ngModel)]=\"MemberModel.EmailId\" maxlength=\"50\"\n                    #refEmailId=\"ngModel\" id=\"EmailId\" required>\n                <div *ngIf=\"!refEmailId.valid  && (refEmailId.dirty || refEmailId.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refEmailId.errors.required\">\n                        EmailId is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Gender</label>\n                <select required name=\"Gender\" #refgender=\"ngModel\" class=\"form-control\" [(ngModel)]=\"MemberModel.Gender\">\n                    <option value=''>Please select Gender</option>\n                    <option *ngFor=\"let gender of genderList\" [ngValue]=\"gender.id\">\n                        {{gender.name}}\n                    </option>\n                </select>\n                <div *ngIf=\"!refgender.valid  && (refgender.dirty || refgender.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refgender.errors.required\">\n                        Gender is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label>Scheme</label>\n                <select required name=\"SchemeID\" #refSchemeID=\"ngModel\" (ngModelChange)=\"OnChange($event)\" class=\"form-control\"\n                    [(ngModel)]=\"MemberModel.SchemeID\">\n                    <option value=''>Please select Scheme</option>\n                    <option *ngFor=\"let Scheme of AllActiveSchemeList\" [ngValue]=\"Scheme.SchemeID\">\n                        {{Scheme.SchemeName}}\n                    </option>\n                </select>\n                <div *ngIf=\"!refSchemeID.valid  && (refSchemeID.dirty || refSchemeID.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refSchemeID.errors.required\">\n                        Scheme is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label>PlanName</label>\n                <select required name=\"PlanID\" #refPlanID=\"ngModel\" class=\"form-control\" (ngModelChange)=\"GetAmount(refPlanID.value,refSchemeID.value)\"\n                    [(ngModel)]=\"MemberModel.PlanID\">\n                    <option value=''>Please select Plan</option>\n                    <option *ngFor=\"let plan of AllActivePlanModel\" [ngValue]=\"plan.PlanID\">\n                        {{plan.PlanName}}\n                    </option>\n                </select>\n                <div *ngIf=\"!refPlanID.valid  && (refPlanID.dirty || refPlanID.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refPlanID.errors.required\">\n                        Plan is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Contactno</label>\n                <input type=\"text\" class=\"form-control\" name=\"Contactno\" [(ngModel)]=\"MemberModel.Contactno\" maxlength=\"10\"\n                    #refContactno=\"ngModel\" id=\"Contactno\" required>\n                <div *ngIf=\"!refContactno.valid  && (refContactno.dirty || refContactno.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refContactno.errors.required\">\n                        Contactno is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Address</label>\n                <input type=\"text\" class=\"form-control\" name=\"Address\" [(ngModel)]=\"MemberModel.Address\" maxlength=\"50\"\n                    #refAddress=\"ngModel\" id=\"Address\" required>\n                <div *ngIf=\"!refAddress.valid  && (refAddress.dirty || refAddress.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refAddress.errors.required\">\n                        Address is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">Amount</label>\n                <input type=\"text\" [disabled]=\"true\" class=\"form-control\" name=\"Amount\" [(ngModel)]=\"MemberModel.Amount\" maxlength=\"50\"\n                    #refAmount=\"ngModel\" id=\"Amount\" required>\n                <div *ngIf=\"!refAmount.valid  && (refAmount.dirty || refAmount.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refAmount.errors.required\">\n                        Amount is required\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Member/All']\">\n                    All Member </a>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Payment/List/app.PaymentListComponent.ts":
/*!**********************************************************!*\
  !*** ./src/app/Payment/List/app.PaymentListComponent.ts ***!
  \**********************************************************/
/*! exports provided: PaymentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentListComponent", function() { return PaymentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentListComponent = /** @class */ (function () {
    function PaymentListComponent(paginationService) {
        this.paginationService = paginationService;
        this.paydataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.displayedColumns = ['PaymentID', 'MemberNo', 'MemberName', 'PlanName', 'SchemeName', 'PaymentAmount', 'NextRenwalDate', 'PaymentFromdt', 'PaymentTodt', 'PrintAction'];
        this.applyFilterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.payonPageSwitch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PaymentListComponent.prototype, "dataSourceForTable", {
        set: function (value) {
            this.paydataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](value);
        },
        enumerable: true,
        configurable: true
    });
    PaymentListComponent.prototype.applyFilter = function (filterValue) {
        this.paydataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('paydataSource'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PaymentListComponent.prototype, "dataSourceForTable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaymentListComponent.prototype, "paytotalCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaymentListComponent.prototype, "applyFilterEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaymentListComponent.prototype, "payonPageSwitch", void 0);
    PaymentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'paymentlist',
            template: __webpack_require__(/*! ./app.Paymentlist.component.html */ "./src/app/Payment/List/app.Paymentlist.component.html"),
            styles: [__webpack_require__(/*! ../../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_Shared_PaginationService__WEBPACK_IMPORTED_MODULE_2__["PaginationService"]])
    ], PaymentListComponent);
    return PaymentListComponent;
}());



/***/ }),

/***/ "./src/app/Payment/List/app.PaymentOverviewComponent.ts":
/*!**************************************************************!*\
  !*** ./src/app/Payment/List/app.PaymentOverviewComponent.ts ***!
  \**************************************************************/
/*! exports provided: PaymentOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOverviewComponent", function() { return PaymentOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
/* harmony import */ var _Services_app_PaymentDetails_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/app.PaymentDetails.Service */ "./src/app/Payment/Services/app.PaymentDetails.Service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentOverviewComponent = /** @class */ (function () {
    function PaymentOverviewComponent(paymentservice, paginationService) {
        this.paymentservice = paymentservice;
        this.paginationService = paginationService;
    }
    PaymentOverviewComponent.prototype.ngOnInit = function () {
        this.getAllPayment();
    };
    PaymentOverviewComponent.prototype.payonPageSwitch = function (event) {
        this.paginationService.change(event);
        this.getAllPayment();
    };
    PaymentOverviewComponent.prototype.getAllPayment = function () {
        var _this = this;
        this.paymentservice.getAll()
            .subscribe(function (result) {
            console.log(result.headers);
            _this.paytotalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
            _this.paymentdataSource = result.body.value;
        });
    };
    PaymentOverviewComponent.prototype.applyFilter = function (filterValue) {
        console.log(filterValue);
        console.log("###");
        filterValue = filterValue.toLowerCase();
        this.paymentdataSource.filter(function (it) {
            var d = it.toLowerCase().includes(filterValue);
            console.log(d);
        });
    };
    PaymentOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.PaymentViewComponent.html */ "./src/app/Payment/List/app.PaymentViewComponent.html")
        }),
        __metadata("design:paramtypes", [_Services_app_PaymentDetails_Service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"],
            _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_1__["PaginationService"]])
    ], PaymentOverviewComponent);
    return PaymentOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Payment/List/app.PaymentViewComponent.html":
/*!************************************************************!*\
  !*** ./src/app/Payment/List/app.PaymentViewComponent.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<paymentlist\n    [paydataSource]=\"paymentdataSource\" \n    [paytotalCount]=\"paytotalCount\"\n    (applyFilterEvent)=\"applyFilter($event)\"\n    (payonPageSwitch)=\"payonPageSwitch($event)\"></paymentlist>\n\n"

/***/ }),

/***/ "./src/app/Payment/List/app.Paymentlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Payment/List/app.Paymentlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All Payments</h4>\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"example-header\">\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"paydataSource\" matSort class=\"mat-elevation-z8\">\n                <!-- SchemeID Column -->\n                <ng-container matColumnDef=\"PaymentID\">\n                    <th  mat-header-cell *matHeaderCellDef > Srno. </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.PaymentID}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"MemberNo\" sticky>\n                    <th mat-header-cell *matHeaderCellDef > MemberNo </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.MemberNo}} </td>\n                </ng-container>\n                <!-- SchemeName Column -->\n                <ng-container matColumnDef=\"MemberName\">\n                    <th mat-header-cell *matHeaderCellDef > MemberName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.MemberName}} </td>\n                </ng-container>\n                <!-- Createddate Column -->\n                <ng-container matColumnDef=\"PlanName\">\n                    <th mat-header-cell *matHeaderCellDef > PlanName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.PlanName}} </td>\n                </ng-container>\n                <!-- Createddate Column -->\n                <ng-container matColumnDef=\"SchemeName\">\n                    <th mat-header-cell *matHeaderCellDef > SchemeName </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.SchemeName}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"PaymentAmount\">\n                    <th mat-header-cell *matHeaderCellDef > PaymentAmount </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.PaymentAmount}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"NextRenwalDate\">\n                    <th mat-header-cell *matHeaderCellDef > NextRenwalDate </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.NextRenwalDate | date:'yyyy-MM-dd'}} </td>\n                </ng-container>\n\n                <ng-container matColumnDef=\"PaymentFromdt\">\n                    <th mat-header-cell *matHeaderCellDef > PaymentFromdt </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.PaymentFromdt | date:'yyyy-MM-dd'}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"PaymentTodt\">\n                    <th mat-header-cell *matHeaderCellDef > PaymentTodt </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.PaymentTodt | date:'yyyy-MM-dd'}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"PrintAction\">\n                    <th mat-header-cell *matHeaderCellDef> PrintAction </th>\n                    <td mat-cell *matCellDef=\"let element\"> <a class=\"btn btn-info\" [routerLink]=\"['/User/Recepit/',element.PaymentID]\"><i\n                                class=\"fa fa-edit fa-fw\"></i>\n                                Recepit</a> </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n            <mat-paginator [length]=\"paytotalCount\" [pageSize]=\"paginationService.pageSize\" [pageSizeOptions]=\"paginationService.selectItemsPerPage\"\n                (page)=\"payonPageSwitch.emit($event)\">\n            </mat-paginator>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Payment/Services/app.PaymentDetails.Service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Payment/Services/app.PaymentDetails.Service.ts ***!
  \****************************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
/* harmony import */ var _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/constantUrl */ "./src/app/Shared/constantUrl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentService = /** @class */ (function () {
    function PaymentService(http, paginationService) {
        this.http = http;
        this.paginationService = paginationService;
        this.apiUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/Payment/";
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    PaymentService.prototype.getAll = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        var Url = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/Payment";
        var mergedUrl = "" + Url +
            ("?page=" + this.paginationService.page + "&pageCount=" + this.paginationService.pageCount);
        return this.http.get(mergedUrl, { headers: headers, observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PaymentService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/PeriodMaster/Services/app.Period.Service.ts":
/*!*************************************************************!*\
  !*** ./src/app/PeriodMaster/Services/app.Period.Service.ts ***!
  \*************************************************************/
/*! exports provided: PeriodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodService", function() { return PeriodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeriodService = /** @class */ (function () {
    function PeriodService(http) {
        this.http = http;
        this.apiUrl = "	http://localhost:49505/api/Period/";
    }
    PeriodService.prototype.GetAllPeriod = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.get(this.apiUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PeriodService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    PeriodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PeriodService);
    return PeriodService;
}());



/***/ }),

/***/ "./src/app/PlanMaster/Models/app.PlanMasterModel.ts":
/*!**********************************************************!*\
  !*** ./src/app/PlanMaster/Models/app.PlanMasterModel.ts ***!
  \**********************************************************/
/*! exports provided: PlanMasterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanMasterModel", function() { return PlanMasterModel; });
var PlanMasterModel = /** @class */ (function () {
    function PlanMasterModel() {
    }
    return PlanMasterModel;
}());



/***/ }),

/***/ "./src/app/PlanMaster/Models/app.PlanMasterViewModel.ts":
/*!**************************************************************!*\
  !*** ./src/app/PlanMaster/Models/app.PlanMasterViewModel.ts ***!
  \**************************************************************/
/*! exports provided: PlanMasterViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanMasterViewModel", function() { return PlanMasterViewModel; });
var PlanMasterViewModel = /** @class */ (function () {
    function PlanMasterViewModel() {
    }
    return PlanMasterViewModel;
}());



/***/ }),

/***/ "./src/app/PlanMaster/Services/app.planmaster.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/PlanMaster/Services/app.planmaster.service.ts ***!
  \***************************************************************/
/*! exports provided: PlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanService", function() { return PlanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanService = /** @class */ (function () {
    function PlanService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/PlanMaster/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Save Plan
    PlanService.prototype.SavePlan = function (planMasterModel) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, planMasterModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PlanService.prototype.GetAmount = function (planID, schemeId) {
        var apiUrl = "	http://localhost:49505/api/GetTotalAmount/";
        var AmountRequest = { "PlanId": planID, "SchemeId": schemeId };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, AmountRequest, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Plans
    PlanService.prototype.GetAllPlans = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Plans
    PlanService.prototype.GetAllActivePlans = function (schemeId) {
        var apiUrl = "	http://localhost:49505/api/AllActivePlanMaster" + '/' + schemeId;
        ;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Plans by PlanId
    PlanService.prototype.GetPlanByPlanID = function (planId) {
        var editurl = this.apiUrl + planId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editurl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update Plan
    PlanService.prototype.UpdatePlan = function (planMasterModel) {
        var updateurl = this.apiUrl + planMasterModel.PlanID;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(updateurl, planMasterModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PlanService.prototype.DeletePlan = function (planId) {
        var deleteUrl = this.apiUrl + '/' + planId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PlanService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    PlanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PlanService);
    return PlanService;
}());



/***/ }),

/***/ "./src/app/PlanMaster/app.EditPlan.component.html":
/*!********************************************************!*\
  !*** ./src/app/PlanMaster/app.EditPlan.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Edit Plan</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Edit Plan</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">PlanName</label>\n                    <input type=\"text\" class=\"form-control\" [disabled]=\"true\" name=\"PlanName\" [(ngModel)]=\"planModel.PlanName\" maxlength=\"50\"\n                        #refPlanName=\"ngModel\" id=\"PlanName\" required>\n                    <div *ngIf=\"!refPlanName.valid  && (refPlanName.dirty || refPlanName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPlanName.errors.required\">\n                            PlanName is required\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Period </label>\n                    <select required name=\"PeriodID\" [disabled]=\"true\" #refPeriodID=\"ngModel\" class=\"form-control\" [(ngModel)]=\"planModel.PeriodID\">\n                        <option value=''>Please select Value</option>\n                        <option *ngFor=\"let period of PeriodList\" [ngValue]=\"period.PeriodID\">\n                            {{period.Text}}\n                        </option>\n                    </select>\n                    <div *ngIf=\"!refPeriodID.valid  && (refPeriodID.dirty || refPeriodID.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPeriodID.errors.required\">\n                            Period is required\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Scheme</label>\n                    <select required name=\"SchemeID\" [disabled]=\"true\" #refSchemeID=\"ngModel\" class=\"form-control\" [(ngModel)]=\"planModel.SchemeID\">\n                        <option value=''>Please select Value</option>\n                        <option *ngFor=\"let activescheme of AllActiveSchemeList\" [ngValue]=\"activescheme.SchemeID\">\n                            {{activescheme.SchemeName}}\n                        </option>\n                    </select>\n                    <div *ngIf=\"!refSchemeID.valid  && (refSchemeID.dirty || refSchemeID.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refSchemeID.errors.required\">\n                            Scheme is required\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">PlanAmount</label>\n                    <input type=\"text\" class=\"form-control\" (keypress)=\"numberOnly($event)\" name=\"PlanAmount\" [(ngModel)]=\"planModel.PlanAmount\" maxlength=\"50\"\n                        #refPlanAmount=\"ngModel\" id=\"PlanAmount\" required>\n                    <div *ngIf=\"!refPlanAmount.valid  && (refPlanAmount.dirty || refPlanAmount.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPlanAmount.errors.required\">\n                            PlanAmount is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">ServiceTax</label>\n                    <input type=\"text\" class=\"form-control\" name=\"ServiceTax\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"planModel.ServiceTax\" maxlength=\"50\"\n                        #refServiceTax=\"ngModel\" id=\"ServiceTax\" required>\n                    <div *ngIf=\"!refServiceTax.valid  && (refServiceTax.dirty || refServiceTax.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refServiceTax.errors.required\">\n                            ServiceTax is required\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Plan/All']\">\n                        All Plans </a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/PlanMaster/app.EditPlan.component.ts":
/*!******************************************************!*\
  !*** ./src/app/PlanMaster/app.EditPlan.component.ts ***!
  \******************************************************/
/*! exports provided: EditPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlanComponent", function() { return EditPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _PeriodMaster_Services_app_Period_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PeriodMaster/Services/app.Period.Service */ "./src/app/PeriodMaster/Services/app.Period.Service.ts");
/* harmony import */ var _SchemeMasters_Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SchemeMasters/Services/app.Scheme.Service */ "./src/app/SchemeMasters/Services/app.Scheme.Service.ts");
/* harmony import */ var _PlanMaster_Services_app_planmaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlanMaster/Services/app.planmaster.service */ "./src/app/PlanMaster/Services/app.planmaster.service.ts");
/* harmony import */ var _Models_app_PlanMasterModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/app.PlanMasterModel */ "./src/app/PlanMaster/Models/app.PlanMasterModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditPlanComponent = /** @class */ (function () {
    function EditPlanComponent(_Route, _routeParams, periodService, schemeService, planService) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.periodService = periodService;
        this.schemeService = schemeService;
        this.planService = planService;
        this.planModel = new _Models_app_PlanMasterModel__WEBPACK_IMPORTED_MODULE_4__["PlanMasterModel"]();
        this._periodService = periodService;
        this._schemeService = schemeService;
        this._planService = planService;
    }
    EditPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PlanID = this._routeParams.snapshot.params['PlanID'];
        // GetAllPeriod
        this._periodService.GetAllPeriod().subscribe(function (allPeriod) {
            _this.PeriodList = allPeriod;
        }, function (error) { return _this.errorMessage = error; });
        // GetAllScheme
        this._schemeService.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
        // GetPlanByPlanID
        this._planService.GetPlanByPlanID(this.PlanID).subscribe(function (plan) {
            _this.planModel = plan;
        }, function (error) { return _this.errorMessage = error; });
    };
    EditPlanComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EditPlanComponent.prototype.onSubmit = function () {
        var _this = this;
        this._planService.UpdatePlan(this.planModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Plan Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Plan Saved Successfully');
                _this._Route.navigate(['/Plan/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    EditPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.EditPlan.component.html */ "./src/app/PlanMaster/app.EditPlan.component.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _PeriodMaster_Services_app_Period_Service__WEBPACK_IMPORTED_MODULE_1__["PeriodService"], _SchemeMasters_Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_2__["SchemeService"], _PlanMaster_Services_app_planmaster_service__WEBPACK_IMPORTED_MODULE_3__["PlanService"]])
    ], EditPlanComponent);
    return EditPlanComponent;
}());



/***/ }),

/***/ "./src/app/PlanMaster/app.allplanmaster.component.html":
/*!*************************************************************!*\
  !*** ./src/app/PlanMaster/app.allplanmaster.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All Plan</h4>\n<hr>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"PlanID\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> PlanID </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.PlanID}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"PlanName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> PlanName </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.PlanName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"SchemeName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> SchemeName </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.SchemeName}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"Text\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Period </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Text}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"TotalAmount\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> TotalAmount </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.TotalAmount}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"RecStatus\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.RecStatus== True ? \"Active\": \"DeActive\"}} </td>\n            </ng-container>\n\n            <!-- EditAction Column -->\n            <ng-container matColumnDef=\"EditAction\">\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <td mat-cell *matCellDef=\"let element\"> <a class=\"btn btn-info\" [routerLink]=\"['/Plan/Edit/',element.PlanID]\"><i\n                    class=\"fa fa-edit fa-fw\"></i>\n                  Edit</a> </td>\n            </ng-container>\n            <!-- DeleteAction Column -->\n            <ng-container matColumnDef=\"DeleteAction\">\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <td mat-cell *matCellDef=\"let element\">\n                <button class=\"btn btn-info\" (click)=\"Delete(element.PlanID)\">Delete</button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </div>\n "

/***/ }),

/***/ "./src/app/PlanMaster/app.allplanmaster.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/PlanMaster/app.allplanmaster.component.ts ***!
  \***********************************************************/
/*! exports provided: AllPlanMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPlanMasterComponent", function() { return AllPlanMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_app_planmaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/app.planmaster.service */ "./src/app/PlanMaster/Services/app.planmaster.service.ts");
/* harmony import */ var _Models_app_PlanMasterViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Models/app.PlanMasterViewModel */ "./src/app/PlanMaster/Models/app.PlanMasterViewModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllPlanMasterComponent = /** @class */ (function () {
    function AllPlanMasterComponent(_Route, planService) {
        this._Route = _Route;
        this.planService = planService;
        this.PlanList = new _Models_app_PlanMasterViewModel__WEBPACK_IMPORTED_MODULE_2__["PlanMasterViewModel"]();
        this.displayedColumns = ['PlanID', 'PlanName', 'SchemeName', 'Text', 'TotalAmount', 'RecStatus', 'EditAction', 'DeleteAction'];
        this._planService = planService;
    }
    AllPlanMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._planService.GetAllPlans().subscribe(function (allplan) {
            _this.PlanList = allplan;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](allplan);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllPlanMasterComponent.prototype.Delete = function (PlanID) {
        var _this = this;
        if (confirm("Are you sure to delete Plan ?")) {
            this._planService.DeletePlan(PlanID).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Plan Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Plan/All']);
                }
            });
        }
    };
    AllPlanMasterComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], AllPlanMasterComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AllPlanMasterComponent.prototype, "paginator", void 0);
    AllPlanMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.allplanmaster.component.html */ "./src/app/PlanMaster/app.allplanmaster.component.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_app_planmaster_service__WEBPACK_IMPORTED_MODULE_1__["PlanService"]])
    ], AllPlanMasterComponent);
    return AllPlanMasterComponent;
}());



/***/ }),

/***/ "./src/app/PlanMaster/app.planmaster.component.html":
/*!**********************************************************!*\
  !*** ./src/app/PlanMaster/app.planmaster.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add Plan</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add Plan</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">PlanName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"PlanName\" [(ngModel)]=\"planModel.PlanName\" maxlength=\"50\"\n                        #refPlanName=\"ngModel\" id=\"PlanName\" required>\n                    <div *ngIf=\"!refPlanName.valid  && (refPlanName.dirty || refPlanName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPlanName.errors.required\">\n                            PlanName is required\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <label for=\"name\">SchemeID</label>\n                    <select required name=\"PeriodID\" #refPeriodID=\"ngModel\" class=\"form-control\" [(ngModel)]=\"planModel.PeriodID\">\n                        <option value=''>Please select Value</option>\n                        <option *ngFor=\"let period of PeriodList\" [ngValue]=\"period.PeriodID\">\n                            {{period.Text}}\n                        </option>\n                    </select>\n                    <div *ngIf=\"!refPeriodID.valid  && (refPeriodID.dirty || refPeriodID.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPeriodID.errors.required\">\n                            Period is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Period</label>\n                    <select required name=\"SchemeID\" #refSchemeID=\"ngModel\" class=\"form-control\" [(ngModel)]=\"planModel.SchemeID\">\n                        <option value=''>Please select Value</option>\n                        <option *ngFor=\"let activescheme of AllActiveSchemeList\" [ngValue]=\"activescheme.SchemeID\">\n                            {{activescheme.SchemeName}}\n                        </option>\n                    </select>\n                    <div *ngIf=\"!refSchemeID.valid  && (refSchemeID.dirty || refSchemeID.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refSchemeID.errors.required\">\n                            Scheme is required\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">PlanAmount</label>\n                    <input type=\"text\" class=\"form-control\" (keypress)=\"numberOnly($event)\" name=\"PlanAmount\"\n                        [(ngModel)]=\"planModel.PlanAmount\" maxlength=\"50\" #refPlanAmount=\"ngModel\" id=\"PlanAmount\"\n                        required>\n                    <div *ngIf=\"!refPlanAmount.valid  && (refPlanAmount.dirty || refPlanAmount.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPlanAmount.errors.required\">\n                            PlanAmount is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">ServiceTax</label>\n                    <input type=\"text\" class=\"form-control\" name=\"ServiceTax\" (keypress)=\"numberOnly($event)\"\n                        [(ngModel)]=\"planModel.ServiceTax\" maxlength=\"50\" #refServiceTax=\"ngModel\" id=\"ServiceTax\"\n                        required>\n                    <div *ngIf=\"!refServiceTax.valid  && (refServiceTax.dirty || refServiceTax.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refServiceTax.errors.required\">\n                            ServiceTax is required\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Plan/All']\">\n                        All Plans </a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/PlanMaster/app.planmaster.component.ts":
/*!********************************************************!*\
  !*** ./src/app/PlanMaster/app.planmaster.component.ts ***!
  \********************************************************/
/*! exports provided: PlanMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanMasterComponent", function() { return PlanMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _PeriodMaster_Services_app_Period_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PeriodMaster/Services/app.Period.Service */ "./src/app/PeriodMaster/Services/app.Period.Service.ts");
/* harmony import */ var _SchemeMasters_Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SchemeMasters/Services/app.Scheme.Service */ "./src/app/SchemeMasters/Services/app.Scheme.Service.ts");
/* harmony import */ var _Models_app_PlanMasterModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Models/app.PlanMasterModel */ "./src/app/PlanMaster/Models/app.PlanMasterModel.ts");
/* harmony import */ var _PlanMaster_Services_app_planmaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PlanMaster/Services/app.planmaster.service */ "./src/app/PlanMaster/Services/app.planmaster.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlanMasterComponent = /** @class */ (function () {
    function PlanMasterComponent(_Route, periodService, schemeService, planService) {
        this._Route = _Route;
        this.periodService = periodService;
        this.schemeService = schemeService;
        this.planService = planService;
        this.planModel = new _Models_app_PlanMasterModel__WEBPACK_IMPORTED_MODULE_3__["PlanMasterModel"]();
        this.title = 'Add Plan';
        this._periodService = periodService;
        this._schemeService = schemeService;
        this._planService = planService;
    }
    PlanMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._periodService.GetAllPeriod().subscribe(function (allPeriod) {
            _this.PeriodList = allPeriod;
        }, function (error) { return _this.errorMessage = error; });
        this._schemeService.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
            _this.AllActiveSchemeList = allActiveScheme;
        }, function (error) { return _this.errorMessage = error; });
    };
    PlanMasterComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    PlanMasterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._planService.SavePlan(this.planModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Plan Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Plan Saved Successfully');
                _this._Route.navigate(['/Plan/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    PlanMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.planmaster.component.html */ "./src/app/PlanMaster/app.planmaster.component.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _PeriodMaster_Services_app_Period_Service__WEBPACK_IMPORTED_MODULE_1__["PeriodService"],
            _SchemeMasters_Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_2__["SchemeService"],
            _PlanMaster_Services_app_planmaster_service__WEBPACK_IMPORTED_MODULE_4__["PlanService"]])
    ], PlanMasterComponent);
    return PlanMasterComponent;
}());



/***/ }),

/***/ "./src/app/PropertyItem/Services/app.PropertyItem.Service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/PropertyItem/Services/app.PropertyItem.Service.ts ***!
  \*******************************************************************/
/*! exports provided: PropertyItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyItemService", function() { return PropertyItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyItemService = /** @class */ (function () {
    function PropertyItemService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/PropertyItem/";
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    // Save PropertyItem
    PropertyItemService.prototype.SavePropertyItem = function (PropertyItemMasterModel) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, PropertyItemMasterModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All PropertyItem
    PropertyItemService.prototype.GetAllPropertyItem = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All PropertyItem List
    PropertyItemService.prototype.GetAllActivePropertyItemList = function () {
        var apiUrl = "	http://localhost:49505/api/PropertyItemDropdown/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All PropertyItem By ID
    PropertyItemService.prototype.GetPropertyItemById = function (PropertyItemId) {
        var editUrl = this.apiUrl + '/' + PropertyItemId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update PropertyItem
    PropertyItemService.prototype.UpdatePropertyItem = function (PropertyItemMasterModel) {
        var putUrl = this.apiUrl + '/' + PropertyItemMasterModel.PropertyItemID;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, PropertyItemMasterModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PropertyItemService.prototype.DeletePropertyItem = function (PropertyItemId) {
        var deleteUrl = this.apiUrl + '/' + PropertyItemId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PropertyItemService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    PropertyItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PropertyItemService);
    return PropertyItemService;
}());



/***/ }),

/***/ "./src/app/PropertyItem/app.EditPropertyItem.Component.ts":
/*!****************************************************************!*\
  !*** ./src/app/PropertyItem/app.EditPropertyItem.Component.ts ***!
  \****************************************************************/
/*! exports provided: EditPropertyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyItemComponent", function() { return EditPropertyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_app_PropertyItem_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/app.PropertyItem.Service */ "./src/app/PropertyItem/Services/app.PropertyItem.Service.ts");
/* harmony import */ var _app_PropertyItemModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.PropertyItemModel */ "./src/app/PropertyItem/app.PropertyItemModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPropertyItemComponent = /** @class */ (function () {
    function EditPropertyItemComponent(_Route, _routeParams, PropertyItemService) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.PropertyItemService = PropertyItemService;
        this.title = "Edit PropertyItem Master";
        this.PropertyItemForms = new _app_PropertyItemModel__WEBPACK_IMPORTED_MODULE_2__["PropertyItemMasterModel"]();
        //this._PropertyItemService = PropertyItemService;
    }
    EditPropertyItemComponent.prototype.ngOnInit = function () {
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
    };
    EditPropertyItemComponent.prototype.onSubmit = function () {
        var _this = this;
        this._PropertyItemService.UpdatePropertyItem(this.PropertyItemForms)
            .subscribe(function (response) {
            if (response.StatusCode == "200") {
                alert('Updated PropertyItem Successfully');
                _this._Route.navigate(['/PropertyItem/All']);
            }
        });
    };
    EditPropertyItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.EditPropertyItemComponent.html */ "./src/app/PropertyItem/app.EditPropertyItemComponent.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _Services_app_PropertyItem_Service__WEBPACK_IMPORTED_MODULE_1__["PropertyItemService"]])
    ], EditPropertyItemComponent);
    return EditPropertyItemComponent;
}());



/***/ }),

/***/ "./src/app/PropertyItem/app.EditPropertyItemComponent.html":
/*!*****************************************************************!*\
  !*** ./src/app/PropertyItem/app.EditPropertyItemComponent.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Edit PropertyItem</h4>\n\n<hr>\n\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Edit</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <input type=\"hidden\" name=\"PropertyItemID\" [(ngModel)]=\"PropertyItemForms.PropertyItemID\" id=\"PropertyItemID\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <label for=\"name\">PropertyItemName</label>\n                    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" name=\"PropertyItemName\" [(ngModel)]=\"PropertyItemForms.PropertyItemName\"\n                        maxlength=\"50\" #refPropertyItemName=\"ngModel\" id=\"PropertyItemName\" required>\n                    <div *ngIf=\"!refPropertyItemName.valid  && (refPropertyItemName.dirty || refPropertyItemName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refPropertyItemName.errors.required\">\n                            PropertyItemName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <label for=\"name\">Status</label>\n                    <br>\n                    <input style=\"margin-top: 10px\" type=\"checkbox\" name=\"Status\" [(ngModel)]=\"PropertyItemForms.Status\"\n                        maxlength=\"50\" #refStatus=\"ngModel\" id=\"PropertyItemName\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/PropertyItem/All']\">\n                        All PropertyItem </a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/PropertyItem/app.PropertyItem.Component.ts":
/*!************************************************************!*\
  !*** ./src/app/PropertyItem/app.PropertyItem.Component.ts ***!
  \************************************************************/
/*! exports provided: PropertyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyItemComponent", function() { return PropertyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_PropertyItemModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.PropertyItemModel */ "./src/app/PropertyItem/app.PropertyItemModel.ts");
/* harmony import */ var _Services_app_PropertyItem_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/app.PropertyItem.Service */ "./src/app/PropertyItem/Services/app.PropertyItem.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyItemComponent = /** @class */ (function () {
    function PropertyItemComponent(_Route, snackBar, PropertyItemService) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.PropertyItemService = PropertyItemService;
        this.title = "PropertyItem Master";
        this.PropertyItemForms = new _app_PropertyItemModel__WEBPACK_IMPORTED_MODULE_1__["PropertyItemMasterModel"]();
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        //this._PropertyItemService = PropertyItemService;
    }
    PropertyItemComponent.prototype.onSubmit = function () {
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
    };
    PropertyItemComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    PropertyItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.PropertyItemMaster.html */ "./src/app/PropertyItem/app.PropertyItemMaster.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _Services_app_PropertyItem_Service__WEBPACK_IMPORTED_MODULE_2__["PropertyItemService"]])
    ], PropertyItemComponent);
    return PropertyItemComponent;
}());



/***/ }),

/***/ "./src/app/PropertyItem/app.PropertyItemMaster.html":
/*!**********************************************************!*\
  !*** ./src/app/PropertyItem/app.PropertyItemMaster.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css\">\r\n<h4>Add PropertyItem</h4>\r\n<hr>\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">Add PropertyItem</div>\r\n  <div class=\"panel-body\">\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <label for=\"PropertyItemID\">PropertyItemID</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"PropertyItemID\" [(ngModel)]=\"PropertyItemForms.PropertyItemID\"\r\n                 maxlength=\"50\" #refPropertyItemID=\"ngModel\" id=\"PropertyItemID\" required>\r\n          <div *ngIf=\"!refPropertyItemID.valid  && (refPropertyItemID.dirty || refPropertyItemID.touched)\" class=\"alert alert-danger\">\r\n            <div [hidden]=\"!refPropertyItemID.errors.required\">\r\n              PropertyItemID is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"PropertyItemForms.Name\"\r\n                 maxlength=\"50\" #refName=\"ngModel\" id=\"Name\" required>\r\n          <div *ngIf=\"!refName.valid  && (refName.dirty || refName.touched)\" class=\"alert alert-danger\">\r\n            <div [hidden]=\"!refName.errors.required\">\r\n              Name is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Description\">Description</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Description\" [(ngModel)]=\"PropertyItemForms.Description\"\r\n                 maxlength=\"50\" id=\"Description\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Area\">Area</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Area\" [(ngModel)]=\"PropertyItemForms.Area\"\r\n                 maxlength=\"50\" id=\"Area\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"AddressLine1\">AddressLine1</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"AddressLine1\" [(ngModel)]=\"PropertyItemForms.AddressLine1\"\r\n                 maxlength=\"50\" id=\"AddressLine1\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"AddressLine2\">AddressLine2</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"AddressLine2\" [(ngModel)]=\"PropertyItemForms.AddressLine2\"\r\n                 maxlength=\"50\" id=\"AddressLine2\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"City\">City</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"City\" [(ngModel)]=\"PropertyItemForms.City\"\r\n                 maxlength=\"50\" id=\"City\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Country\">Country</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Country\" [(ngModel)]=\"PropertyItemForms.Country\"\r\n                 maxlength=\"50\" id=\"Country\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Zip\">Zip</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Zip\" [(ngModel)]=\"PropertyItemForms.Zip\"\r\n                 maxlength=\"50\" id=\"Zip\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"LeaseDueDate\">LeaseDueDate</label>\r\n          <input [(ngModel)]=\"PropertyItemForms.LeaseDueDate\" name=\"LeaseDueDate\" id=\"LeaseDueDate\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                 class=\"form-control\" #refLeaseDueDate=\"bsDatepicker\" bsDatepicker>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"NextDueDate\">NextDueDate</label>\r\n          <input [(ngModel)]=\"PropertyItemForms.NextDueDate\" name=\"NextDueDate\" id=\"NextDueDate\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                 class=\"form-control\" #refNextDueDate=\"bsDatepicker\" bsDatepicker>\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"TotalLeaseAmount\">TotalLeaseAmount</label>\r\n          <input type=\"text\" class=\"form-control\" (keypress)=\"numberOnly($event)\" name=\"TotalLeaseAmount\" [(ngModel)]=\"PropertyItemForms.TotalLeaseAmount\" maxlength=\"50\"\r\n                 #refTotalLeaseAmount=\"ngModel\" id=\"TotalLeaseAmount\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"InstallmentAmount\">InstallmentAmount</label>\r\n          <input type=\"text\" class=\"form-control\" (keypress)=\"numberOnly($event)\" name=\"InstallmentAmount\" [(ngModel)]=\"PropertyItemForms.InstallmentAmount\" maxlength=\"50\"\r\n                 #refInstallmentAmount=\"ngModel\" id=\"InstallmentAmount\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"InstallementPaid\">InstallementPaid</label>\r\n          <input type=\"text\" class=\"form-control\" (keypress)=\"numberOnly($event)\" name=\"InstallementPaid\" [(ngModel)]=\"PropertyItemForms.InstallementPaid\" maxlength=\"50\"\r\n                 #refInstallementPaid=\"ngModel\" id=\"InstallementPaid\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Notes\">Notes</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Notes\" [(ngModel)]=\"PropertyItemForms.Notes\"\r\n                 maxlength=\"50\" id=\"Notes\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Phone\">Phone</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Phone\" [(ngModel)]=\"PropertyItemForms.Phone\"\r\n                 maxlength=\"50\" id=\"Phone\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"Email\">Email</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"Email\" [(ngModel)]=\"PropertyItemForms.Email\"\r\n                 maxlength=\"50\" id=\"Email\">\r\n        </div>\r\n\r\n        <div class=\"col-md-3\">\r\n          <label for=\"name\">IsActive</label>\r\n          <br>\r\n          <input style=\"margin-top: 10px\" type=\"checkbox\" name=\"IsActive\" [(ngModel)]=\"PropertyItemForms.IsActive\"\r\n                 maxlength=\"50\" #refStatus=\"ngModel\" id=\"IsActive\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\r\n          <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/PropertyItem/All']\">\r\n            All PropertyItem\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/PropertyItem/app.PropertyItemModel.ts":
/*!*******************************************************!*\
  !*** ./src/app/PropertyItem/app.PropertyItemModel.ts ***!
  \*******************************************************/
/*! exports provided: PropertyItemMasterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyItemMasterModel", function() { return PropertyItemMasterModel; });
var PropertyItemMasterModel = /** @class */ (function () {
    function PropertyItemMasterModel() {
        this.PropertyItemID = 0;
        this.Name = "";
        this.Description = "";
        this.Area = "";
        this.AddressLine1 = "";
        this.AddressLine2 = "";
        this.City = "";
        this.Country = "";
        this.Zip = "";
        this.IsActive = true;
        this.TotalLeaseAmount = 0;
        this.InstallmentAmount = 0;
        this.InstallementPaid = 0;
        this.Notes = "";
        this.Phone = "";
        this.Email = "";
        this.CreatedBy = "";
        this.ModifiedBy = "";
    }
    return PropertyItemMasterModel;
}());



/***/ }),

/***/ "./src/app/Recepit/Models/app.GenerateRecepitRequestModel.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Recepit/Models/app.GenerateRecepitRequestModel.ts ***!
  \*******************************************************************/
/*! exports provided: GenerateRecepitRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateRecepitRequestModel", function() { return GenerateRecepitRequestModel; });
var GenerateRecepitRequestModel = /** @class */ (function () {
    function GenerateRecepitRequestModel() {
    }
    return GenerateRecepitRequestModel;
}());



/***/ }),

/***/ "./src/app/Recepit/Models/app.GenerateRecepitViewModel.ts":
/*!****************************************************************!*\
  !*** ./src/app/Recepit/Models/app.GenerateRecepitViewModel.ts ***!
  \****************************************************************/
/*! exports provided: GenerateRecepitViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateRecepitViewModel", function() { return GenerateRecepitViewModel; });
var GenerateRecepitViewModel = /** @class */ (function () {
    function GenerateRecepitViewModel() {
    }
    return GenerateRecepitViewModel;
}());



/***/ }),

/***/ "./src/app/Recepit/Recepit.html":
/*!**************************************!*\
  !*** ./src/app/Recepit/Recepit.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../../../node_modules/jspdf/dist/jspdf.debug.js\"></script>\n\n<div style=\"margin-top:10px;\" class=\"row\">\n  <div class=\"col-md-4\">\n    <input type=\"button\" value=\"Print\" class=\"btn btn-default\" (click)=\"captureScreen()\" />\n  </div>\n</div>\n<div style=\"margin-top:20px;\" id=\"print\">\n  <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n    <div style=\"margin-top:20px;\"  class=\"row\">\n      <div class=\"well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3\">\n        <div class=\"row\">\n          <div class=\"text-center text-danger\">\n            <em>\n              <h1><strong>DOT&NET GYM </strong></h1>\n            </em>\n            <hr>\n            <em>\n              <h6>Recepit</h6>\n            </em>\n            <hr>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n            <p>\n              <b>Name :- </b> <em>{{GenerateRecepitViewModel.MemberName}}</em>\n            </p>\n\n            <address>\n\n              <br>\n              <em> <strong>From :- </strong>{{GenerateRecepitViewModel.PaymentFromdt}} </em>\n              <br>\n              <em> <strong>To :- </strong> {{GenerateRecepitViewModel.PaymentTodt}} </em>\n              <br>\n\n            </address>\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-6 text-right\">\n            <p>\n              <em><strong>Date:</strong> {{today | date:'fullDate'}}</em>\n            </p>\n            <p>\n              <em> <strong>MemberId </strong> #: {{GenerateRecepitViewModel.MemberNo}}</em>\n            </p>\n            <p>\n              <em> <strong>Next Renewal date</strong> #: {{GenerateRecepitViewModel.NextRenwalDate}}</em>\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n\n\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Srno.</th>\n                <th style=\"text-align: center\">Scheme</th>\n                <th style=\"text-align: center\">Plan</th>\n                <th class=\"text-center\"></th>\n                <th class=\"text-center\">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"col-md-1\"><em>1</em>\n                </td>\n                <td class=\"col-md-5\" style=\"text-align: center\"> {{GenerateRecepitViewModel.SchemeName}} </td>\n                <td class=\"col-md-4\" style=\"text-align: center\"> {{GenerateRecepitViewModel.PlanName}} </td>\n                <td class=\"col-md-1 text-center\"></td>\n                <td class=\"col-md-1 text-center\">{{GenerateRecepitViewModel.PlanAmount}}</td>\n              </tr>\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td class=\"text-right\">\n                  <p>\n                    <strong>Subtotal:</strong>\n                  </p>\n                  <p>\n                    <strong>Tax:</strong>\n                  </p>\n                </td>\n                <td class=\"text-center\">\n                  <p>\n                    <strong>{{GenerateRecepitViewModel.ServicetaxAmount}}</strong>\n                  </p>\n                  <p>\n                    <strong>{{GenerateRecepitViewModel.ServiceTax}}</strong>\n                  </p>\n                </td>\n              </tr>\n              <tr>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td class=\"text-right\">\n                  <h4><strong>Total:</strong></h4>\n                </td>\n                <td class=\"text-center text-danger\">\n                  <h4><strong>{{GenerateRecepitViewModel.PaymentAmount}}</strong></h4>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/Recepit/Services/app.GenerateRecepit.Service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Recepit/Services/app.GenerateRecepit.Service.ts ***!
  \*****************************************************************/
/*! exports provided: GenerateRecepit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateRecepit", function() { return GenerateRecepit; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/PaginationService */ "./src/app/Shared/PaginationService.ts");
/* harmony import */ var _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Shared/constantUrl */ "./src/app/Shared/constantUrl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenerateRecepit = /** @class */ (function () {
    function GenerateRecepit(http, paginationService) {
        this.http = http;
        this.paginationService = paginationService;
        this.apiUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/Payment/";
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    GenerateRecepit.prototype.GetRecepitDetails = function (memberModel) {
        var SaveUrl = _Shared_constantUrl__WEBPACK_IMPORTED_MODULE_5__["constantUrl"].apiEndpoint + "/api/GenerateRecepit";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(SaveUrl, memberModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    GenerateRecepit.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    GenerateRecepit = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _Shared_PaginationService__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]])
    ], GenerateRecepit);
    return GenerateRecepit;
}());



/***/ }),

/***/ "./src/app/Recepit/app.generateRecepit.Component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Recepit/app.generateRecepit.Component.ts ***!
  \**********************************************************/
/*! exports provided: GenerateRecepitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateRecepitComponent", function() { return GenerateRecepitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_app_GenerateRecepit_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/app.GenerateRecepit.Service */ "./src/app/Recepit/Services/app.GenerateRecepit.Service.ts");
/* harmony import */ var _Models_app_GenerateRecepitRequestModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/app.GenerateRecepitRequestModel */ "./src/app/Recepit/Models/app.GenerateRecepitRequestModel.ts");
/* harmony import */ var _Models_app_GenerateRecepitViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Models/app.GenerateRecepitViewModel */ "./src/app/Recepit/Models/app.GenerateRecepitViewModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenerateRecepitComponent = /** @class */ (function () {
    function GenerateRecepitComponent(_Route, _routeParams, generateRecepit) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.generateRecepit = generateRecepit;
        this.GenerateRecepitRequestModel = new _Models_app_GenerateRecepitRequestModel__WEBPACK_IMPORTED_MODULE_5__["GenerateRecepitRequestModel"]();
        this.GenerateRecepitViewModel = new _Models_app_GenerateRecepitViewModel__WEBPACK_IMPORTED_MODULE_6__["GenerateRecepitViewModel"]();
        this._generateRecepit = generateRecepit;
    }
    GenerateRecepitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PaymentID = this._routeParams.snapshot.params['PaymentID'];
        this.GenerateRecepitRequestModel.PaymentID = this.PaymentID;
        this._generateRecepit.GetRecepitDetails(this.GenerateRecepitRequestModel).subscribe(function (recepitdetails) {
            _this.GenerateRecepitViewModel = recepitdetails;
        }, function (error) { return _this.errorMessage = error; });
    };
    GenerateRecepitComponent.prototype.captureScreen = function () {
        var data = document.getElementById('print');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            // Few necessary setting options
            var imgWidth = 210;
            var pageHeight = 297;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 20, 20, imgWidth, imgHeight);
            pdf.save('PaymentRecepit.pdf'); // Generated PDF 
        });
    };
    GenerateRecepitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./Recepit.html */ "./src/app/Recepit/Recepit.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _Services_app_GenerateRecepit_Service__WEBPACK_IMPORTED_MODULE_4__["GenerateRecepit"]])
    ], GenerateRecepitComponent);
    return GenerateRecepitComponent;
}());



/***/ }),

/***/ "./src/app/Renewal/Models/app.RenewalModel.ts":
/*!****************************************************!*\
  !*** ./src/app/Renewal/Models/app.RenewalModel.ts ***!
  \****************************************************/
/*! exports provided: RenewalModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalModel", function() { return RenewalModel; });
var RenewalModel = /** @class */ (function () {
    function RenewalModel() {
    }
    return RenewalModel;
}());



/***/ }),

/***/ "./src/app/Renewal/Models/app.RequestMemberModel.ts":
/*!**********************************************************!*\
  !*** ./src/app/Renewal/Models/app.RequestMemberModel.ts ***!
  \**********************************************************/
/*! exports provided: RequestMemberModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMemberModel", function() { return RequestMemberModel; });
var RequestMemberModel = /** @class */ (function () {
    function RequestMemberModel() {
    }
    return RequestMemberModel;
}());



/***/ }),

/***/ "./src/app/Renewal/Models/app.RequestMemberNoModel.ts":
/*!************************************************************!*\
  !*** ./src/app/Renewal/Models/app.RequestMemberNoModel.ts ***!
  \************************************************************/
/*! exports provided: RequestMemberNoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMemberNoModel", function() { return RequestMemberNoModel; });
var RequestMemberNoModel = /** @class */ (function () {
    function RequestMemberNoModel() {
    }
    return RequestMemberNoModel;
}());



/***/ }),

/***/ "./src/app/Renewal/Services/app.renewal.Service.ts":
/*!*********************************************************!*\
  !*** ./src/app/Renewal/Services/app.renewal.Service.ts ***!
  \*********************************************************/
/*! exports provided: RenewalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalService", function() { return RenewalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_constantUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/constantUrl */ "./src/app/Shared/constantUrl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RenewalService = /** @class */ (function () {
    function RenewalService(http) {
        this.http = http;
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    RenewalService.prototype.GetMemberNo = function (requestModel) {
        var apiUrl = src_app_Shared_constantUrl__WEBPACK_IMPORTED_MODULE_4__["constantUrl"].apiEndpoint + "/api/GetMemberNo/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, requestModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RenewalService.prototype.GetRenewalDetailsbyMemberNo = function (requestMemberNoModel) {
        var apiUrl = src_app_Shared_constantUrl__WEBPACK_IMPORTED_MODULE_4__["constantUrl"].apiEndpoint + "/api/RenewalDetails/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, requestMemberNoModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Renew
    RenewalService.prototype.SaveRenew = function (renewalModel) {
        var apiUrl = src_app_Shared_constantUrl__WEBPACK_IMPORTED_MODULE_4__["constantUrl"].apiEndpoint + "/api/Renewal/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, renewalModel, { headers: headers, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Scheme List
    RenewalService.prototype.GetAllActiveSchemeList = function () {
        var apiUrl = "	http://localhost:49505/api/SchemeDropdown/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Plans
    RenewalService.prototype.GetAllActivePlans = function (schemeId) {
        var apiUrl = "	http://localhost:49505/api/AllActivePlanMaster" + '/' + schemeId;
        ;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RenewalService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    RenewalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RenewalService);
    return RenewalService;
}());



/***/ }),

/***/ "./src/app/Renewal/app.Renewal.Component.ts":
/*!**************************************************!*\
  !*** ./src/app/Renewal/app.Renewal.Component.ts ***!
  \**************************************************/
/*! exports provided: RenewalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalComponent", function() { return RenewalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_app_renewal_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/app.renewal.Service */ "./src/app/Renewal/Services/app.renewal.Service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Models_app_RequestMemberModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/app.RequestMemberModel */ "./src/app/Renewal/Models/app.RequestMemberModel.ts");
/* harmony import */ var _Models_app_RenewalModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Models/app.RenewalModel */ "./src/app/Renewal/Models/app.RenewalModel.ts");
/* harmony import */ var _Models_app_RequestMemberNoModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Models/app.RequestMemberNoModel */ "./src/app/Renewal/Models/app.RequestMemberNoModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RenewalComponent = /** @class */ (function () {
    function RenewalComponent(_Route, snackBar, renewalService) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.renewalService = renewalService;
        this.RequestMemberModel = new _Models_app_RequestMemberModel__WEBPACK_IMPORTED_MODULE_4__["RequestMemberModel"]();
        this.RequestMemberNoModel = new _Models_app_RequestMemberNoModel__WEBPACK_IMPORTED_MODULE_6__["RequestMemberNoModel"]();
        this.RenewalModel = new _Models_app_RenewalModel__WEBPACK_IMPORTED_MODULE_5__["RenewalModel"]();
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this._renewalService = renewalService;
    }
    RenewalComponent.prototype.ngOnInit = function () {
        this.displayflag = false;
    };
    RenewalComponent.prototype.onInputChanged = function (searchStr) {
        var _this = this;
        this.RequestMemberModel.MemberName = searchStr;
        this.ResponseMemberModel = [];
        this._renewalService.GetMemberNo(this.RequestMemberModel).subscribe(function (result) {
            _this.ResponseMemberModel = result;
            console.log(result);
        });
    };
    RenewalComponent.prototype.onSubmit = function (buttonType) {
        var _this = this;
        if (buttonType === "onsearch") {
            if (this.RenewalModel.SearchMemberNo == undefined) {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
                config.duration = this.setAutoHide ? this.autoHide : 0;
                config.verticalPosition = this.verticalPosition;
                this.snackBar.open("Enter MemberName", this.action ? this.actionButtonLabel : undefined, config);
            }
            else {
                this.displayflag = true;
                console.log(this.RenewalModel);
                this._renewalService.GetAllActiveSchemeList().subscribe(function (allActiveScheme) {
                    _this.AllActiveSchemeList = allActiveScheme;
                }, function (error) { return _this.errorMessage = error; });
                this.RequestMemberNoModel.MemberNo = this.RenewalModel.SearchMemberNo;
                this._renewalService.GetRenewalDetailsbyMemberNo(this.RequestMemberNoModel).subscribe(function (response) {
                    _this._renewalService.GetAllActivePlans(response.SchemeID).subscribe(function (allplanModel) {
                        console.log(allplanModel);
                        _this.AllActivePlanModel = allplanModel;
                    }, function (error) { return _this.errorMessage = error; });
                    _this.RenewalModel = response;
                    _this.RenewalModel.NewDate = null;
                });
            }
        }
        if (buttonType === "onrenew") {
            if (this.RenewalModel.NewDate == null) {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
                config.duration = this.setAutoHide ? this.autoHide : 0;
                this.snackBar.open("Choose NewDate", this.action ? this.actionButtonLabel : undefined, config);
            }
            else {
                this._renewalService.SaveRenew(this.RenewalModel).subscribe(function (response) {
                    if (response.body.StatusCode == "400") {
                        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
                        config.duration = _this.setAutoHide ? _this.autoHide : 0;
                        _this.snackBar.open(response.body.ReasonPhrase, _this.action ? _this.actionButtonLabel : undefined, config);
                    }
                    else if (response.body.StatusCode == "200") {
                        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
                        config.duration = _this.setAutoHide ? _this.autoHide : 0;
                        _this.snackBar.open(response.body.ReasonPhrase, _this.action ? _this.actionButtonLabel : undefined, config);
                    }
                    else {
                        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
                        config.duration = _this.setAutoHide ? _this.autoHide : 0;
                        _this.snackBar.open(response.body.ReasonPhrase, _this.action ? _this.actionButtonLabel : undefined, config);
                    }
                });
            }
        }
    };
    RenewalComponent.prototype.OnChange = function (schemeId) {
        var _this = this;
        if (schemeId != null) {
            this._renewalService.GetAllActivePlans(schemeId).subscribe(function (allactivePlans) {
                _this.AllActivePlanModel = allactivePlans;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    RenewalComponent.prototype.GetAmount = function (PlanID, SchemeID) {
        var _this = this;
        if (PlanID != null && SchemeID != null) {
            this._planService.GetAmount(PlanID, SchemeID).subscribe(function (amount) {
                _this.RenewalModel.Amount = amount;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    RenewalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.renewalcomponent.html */ "./src/app/Renewal/app.renewalcomponent.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _Services_app_renewal_Service__WEBPACK_IMPORTED_MODULE_2__["RenewalService"]])
    ], RenewalComponent);
    return RenewalComponent;
}());



/***/ }),

/***/ "./src/app/Renewal/app.renewalcomponent.html":
/*!***************************************************!*\
  !*** ./src/app/Renewal/app.renewalcomponent.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css\">\n\n<h4>Renewal</h4>\n<hr>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Renewal Process</div>\n  <div class=\"panel-body\">\n    <form #f=\"ngForm\" novalidate >\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label for=\"name\">MemberName</label>\n          <input type=\"text\" class=\"form-control\" id=\"SearchMemberNo\" name=\"SearchMemberNo\" maxlength=\"30\"\n            [(ngModel)]=\"RenewalModel.SearchMemberNo\" matInput (input)=\"onInputChanged($event.target.value)\"\n            [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of ResponseMemberModel\" [value]=\"option.MemberNo\">{{ option.MemberName }}</mat-option>\n          </mat-autocomplete>\n        </div>\n        <div class=\"col-md-6\">\n          <button type=\"submit\" (click)=\"onSubmit('onsearch')\" style=\"margin-top: 24px\" class=\"btn btn-success\">Search</button>\n        </div>    \n      </div>\n\n      <div *ngIf=\"displayflag\" class=\"row\">\n        <div class=\"col-md-4\">\n          <label>Scheme</label>\n          <select required name=\"SchemeID\" #refSchemeID=\"ngModel\" (ngModelChange)=\"OnChange($event)\" class=\"form-control\"\n            [(ngModel)]=\"RenewalModel.SchemeID\">\n            <option value=''>Please select Scheme</option>\n            <option *ngFor=\"let Scheme of AllActiveSchemeList\" [value]=\"Scheme.SchemeID\">\n              {{Scheme.SchemeName}}\n            </option>\n          </select>\n          <div *ngIf=\"!refSchemeID.valid  && (refSchemeID.dirty || refSchemeID.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!refSchemeID.errors.required\">\n              Scheme is required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <label>PlanName</label>\n          <select required name=\"PlanID\" #refPlanID=\"ngModel\" class=\"form-control\" (ngModelChange)=\"GetAmount(refPlanID.value,refSchemeID.value)\"\n            [(ngModel)]=\"RenewalModel.PlanID\">\n            <option value=''>Please select Plan</option>\n            <option *ngFor=\"let plan of AllActivePlanModel\" [value]=\"plan.PlanID\">\n              {{plan.PlanName}}\n            </option>\n          </select>\n          <div *ngIf=\"!refPlanID.valid  && (refPlanID.dirty || refPlanID.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!refPlanID.errors.required\">\n              Plan is required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <label for=\"name\">Member Name</label>\n          <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"MemberName\" [(ngModel)]=\"RenewalModel.MemberName\"\n            maxlength=\"50\" #refMemberName=\"ngModel\" id=\"MemberName\" required>\n        </div>\n\n        <div class=\"col-md-4\">\n          <label for=\"name\">MemberNo</label>\n          <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"MemberNo\" [(ngModel)]=\"RenewalModel.MemberNo\"\n            maxlength=\"50\" #refMemberLName=\"ngModel\" id=\"MemberNo\" required>\n        </div>\n\n        <div class=\"col-md-4\">\n          <label for=\"name\">New Date</label>\n          <input [(ngModel)]=\"RenewalModel.NewDate\" name=\"NewDate\" id=\"NewDate\" onkeypress=\"return false;\"  [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n            class=\"form-control\" #refNewDate=\"bsDatepicker\" bsDatepicker>\n\n          <div *ngIf=\"!refNewDate.valid  && (refNewDate.dirty || refNewDate.touched)\" class=\"alert alert-danger\">\n            <div [hidden]=\"!refNewDate.errors.required\">\n              New Date is required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n          <label for=\"name\">Renewal Date</label>\n          <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"NextRenwalDate\" [(ngModel)]=\"RenewalModel.NextRenwalDate\"\n            maxlength=\"50\" id=\"Amount\" required>\n        </div>\n\n        <div class=\"col-md-4\">\n          <label for=\"name\">Amount</label>\n          <input [disabled]=\"true\" type=\"text\" class=\"form-control\" name=\"Amount\" [(ngModel)]=\"RenewalModel.Amount\"\n            maxlength=\"50\"  id=\"Amount\" required>\n        </div>\n        <div class=\"col-md-4\">\n            <button type=\"submit\" [disabled]=\"!f.form.valid\" (click)=\"onSubmit('onrenew')\" style=\"margin-top: 24px\" class=\"btn btn-success\">Renew</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Reports/Models/app.MonthWiseRequestModel.ts":
/*!*************************************************************!*\
  !*** ./src/app/Reports/Models/app.MonthWiseRequestModel.ts ***!
  \*************************************************************/
/*! exports provided: MonthWiseRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthWiseRequestModel", function() { return MonthWiseRequestModel; });
var MonthWiseRequestModel = /** @class */ (function () {
    function MonthWiseRequestModel() {
    }
    return MonthWiseRequestModel;
}());



/***/ }),

/***/ "./src/app/Reports/Models/app.RenewalRequestModel.ts":
/*!***********************************************************!*\
  !*** ./src/app/Reports/Models/app.RenewalRequestModel.ts ***!
  \***********************************************************/
/*! exports provided: RenewalRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalRequestModel", function() { return RenewalRequestModel; });
var RenewalRequestModel = /** @class */ (function () {
    function RenewalRequestModel() {
    }
    return RenewalRequestModel;
}());



/***/ }),

/***/ "./src/app/Reports/Models/app.YearwiseRequestModel.ts":
/*!************************************************************!*\
  !*** ./src/app/Reports/Models/app.YearwiseRequestModel.ts ***!
  \************************************************************/
/*! exports provided: YearwiseRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearwiseRequestModel", function() { return YearwiseRequestModel; });
var YearwiseRequestModel = /** @class */ (function () {
    function YearwiseRequestModel() {
    }
    return YearwiseRequestModel;
}());



/***/ }),

/***/ "./src/app/Reports/Services/app.ReportServices.ts":
/*!********************************************************!*\
  !*** ./src/app/Reports/Services/app.ReportServices.ts ***!
  \********************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/User/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    // Get All Member DetailsReport
    ReportService.prototype.GetAllMemberDetailsReport = function () {
        var apiUrl = "	http://localhost:49505/api/MemberDetailsReport/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ReportService.prototype.GetYearWiseReport = function (year) {
        var apiUrl = "	http://localhost:49505/api/YearwiseReport/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, year, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ReportService.prototype.GetMonthWiseReport = function (year) {
        var apiUrl = "	http://localhost:49505/api/MonthwiseReport/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, year, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ReportService.prototype.GetRenewalReport = function (year) {
        var apiUrl = "	http://localhost:49505/api/RenewalReport/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(apiUrl, year, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ReportService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/Reports/app.MemberDetailsReport.Component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Reports/app.MemberDetailsReport.Component.ts ***!
  \**************************************************************/
/*! exports provided: MemberDetailsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailsReportComponent", function() { return MemberDetailsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.ReportServices */ "./src/app/Reports/Services/app.ReportServices.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberDetailsReportComponent = /** @class */ (function () {
    function MemberDetailsReportComponent(reportService) {
        this.displayedColumns = ['MemberNo', 'Name', 'Contactno', 'EmailID', 'PlanName', 'SchemeName', 'JoiningDate', 'RenwalDate', 'PaymentAmount'];
        this._reportService = reportService;
    }
    MemberDetailsReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._reportService.GetAllMemberDetailsReport().subscribe(function (allrecords) {
            _this.allMemberDetailsReport = allrecords;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.allMemberDetailsReport);
        }, function (error) { return _this.errorMessage = error; });
    };
    MemberDetailsReportComponent.prototype.ExportTOExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, 'MemberRenewalReport.xlsx');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('TABLE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MemberDetailsReportComponent.prototype, "table", void 0);
    MemberDetailsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.MemberDetailsReport.html */ "./src/app/Reports/app.MemberDetailsReport.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css"), __webpack_require__(/*! ./app.MemberDetailsReport.css */ "./src/app/Reports/app.MemberDetailsReport.css")]
        }),
        __metadata("design:paramtypes", [_Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], MemberDetailsReportComponent);
    return MemberDetailsReportComponent;
}());



/***/ }),

/***/ "./src/app/Reports/app.MemberDetailsReport.css":
/*!*****************************************************!*\
  !*** ./src/app/Reports/app.MemberDetailsReport.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1JlcG9ydHMvYXBwLk1lbWJlckRldGFpbHNSZXBvcnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Reports/app.MemberDetailsReport.html":
/*!******************************************************!*\
  !*** ./src/app/Reports/app.MemberDetailsReport.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All Member Report</h4>\n<hr>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Report</div>\n  <div class=\"panel-body\">\n\n    <button mat-raised-button class=\"btn btn-info\" (click)=\"ExportTOExcel()\">Export as Excel</button>\n\n    <hr>\n\n    <div class=\"example-container mat-elevation-z8 \" #TABLE>\n      <table mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"MemberNo\">\n          <th mat-header-cell *matHeaderCellDef> MemberNo </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.MemberNo}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>\n        </ng-container>\n  \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"Contactno\">\n          <th mat-header-cell *matHeaderCellDef> Contactno </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Contactno}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"EmailID\">\n          <th mat-header-cell *matHeaderCellDef> EmailID </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.EmailID}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"PlanName\">\n          <th mat-header-cell *matHeaderCellDef> PlanName </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.PlanName}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"SchemeName\">\n          <th mat-header-cell *matHeaderCellDef> SchemeName </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.SchemeName}} </td>\n        </ng-container>\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"JoiningDate\">\n          <th mat-header-cell *matHeaderCellDef> JoiningDate </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.JoiningDate}} </td>\n        </ng-container>\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"RenwalDate\">\n          <th mat-header-cell *matHeaderCellDef> RenwalDate </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.RenwalDate}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"PaymentAmount\">\n          <th mat-header-cell *matHeaderCellDef> PaymentAmount </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.PaymentAmount}} </td>\n        </ng-container>\n\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Reports/app.MonthwiseReport.Component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Reports/app.MonthwiseReport.Component.ts ***!
  \**********************************************************/
/*! exports provided: MonthwiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthwiseReportComponent", function() { return MonthwiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.ReportServices */ "./src/app/Reports/Services/app.ReportServices.ts");
/* harmony import */ var _Models_app_MonthWiseRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/app.MonthWiseRequestModel */ "./src/app/Reports/Models/app.MonthWiseRequestModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonthwiseReportComponent = /** @class */ (function () {
    function MonthwiseReportComponent(reportService) {
        this.MonthWiseRequestModel = new _Models_app_MonthWiseRequestModel__WEBPACK_IMPORTED_MODULE_4__["MonthWiseRequestModel"]();
        this.displayedColumns = ['MemberFName', 'MemberNo', 'MemberLName', 'MemberMName', 'CreateDate', 'Total', 'Paymentmonth', 'PaymentAmount', 'Username'];
        this._reportService = reportService;
    }
    MonthwiseReportComponent.prototype.ngOnInit = function () {
        this.exportbutton = true;
        this.MonthList = [
            {
                MonthID: "1",
                MonthName: "January"
            }, {
                MonthID: "2",
                MonthName: "February"
            },
            {
                MonthID: "3",
                MonthName: "March"
            },
            {
                MonthID: "4",
                MonthName: "April"
            },
            {
                MonthID: "5",
                MonthName: "May"
            },
            {
                MonthID: "6",
                MonthName: "June"
            },
            {
                MonthID: "7",
                MonthName: "July"
            },
            {
                MonthID: "8",
                MonthName: "August"
            },
            {
                MonthID: "9",
                MonthName: "September"
            },
            {
                MonthID: "10",
                MonthName: "October"
            },
            {
                MonthID: "11",
                MonthName: "November"
            },
            {
                MonthID: "12",
                MonthName: "December"
            }
        ];
    };
    MonthwiseReportComponent.prototype.ExportTOExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, 'MonthWiseReport.xlsx');
    };
    MonthwiseReportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.MonthWiseRequestModel.MonthId == null) {
        }
        else {
            this._reportService.GetMonthWiseReport(this.MonthWiseRequestModel).subscribe(function (allrecords) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](allrecords);
                _this.exportbutton = false;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('TABLE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MonthwiseReportComponent.prototype, "table", void 0);
    MonthwiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.MonthwiseReport.html */ "./src/app/Reports/app.MonthwiseReport.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], MonthwiseReportComponent);
    return MonthwiseReportComponent;
}());



/***/ }),

/***/ "./src/app/Reports/app.MonthwiseReport.html":
/*!**************************************************!*\
  !*** ./src/app/Reports/app.MonthwiseReport.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Month Wise Collection Report</h4>\n<hr>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Report</div>\n  <div class=\"panel-body\">\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"col-md-4\">\n        <label>Month</label>\n        <select required name=\"MonthID\" #refmonth=\"ngModel\" class=\"form-control\" [(ngModel)]=\"MonthWiseRequestModel.MonthId\">\n          <option value=''>Please select Month</option>\n          <option *ngFor=\"let month of MonthList\" [ngValue]=\"month.MonthID\">\n            {{month.MonthName}}\n          </option>\n        </select>\n        <div *ngIf=\"!refmonth.valid  && (refmonth.dirty || refmonth.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!refmonth.errors.required\">\n            Month is required\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <button type=\"submit\" style=\"margin-top: 20px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n        <button style=\"margin-top: 20px; margin-left: 10px;\" [disabled]=\"exportbutton\" mat-raised-button class=\"btn btn-info\" (click)=\"ExportTOExcel()\">Export\n          as Excel</button>\n      </div>\n      <hr>\n    </form>\n  </div>\n</div>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\"></div>\n  <div class=\"panel-body\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container mat-elevation-z8 \" #TABLE>\n        <table mat-table #table [dataSource]=\"dataSource\">\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"MemberNo\">\n            <th mat-header-cell *matHeaderCellDef> MemberNo </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MemberNo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"MemberFName\">\n            <th mat-header-cell *matHeaderCellDef> FirstName </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MemberFName}} </td>\n          </ng-container>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"MemberMName\">\n            <th mat-header-cell *matHeaderCellDef> MiddleName </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MemberMName}} </td>\n          </ng-container>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"MemberLName\">\n            <th mat-header-cell *matHeaderCellDef> LastName </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.MemberLName}} </td>\n          </ng-container>\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Username\">\n            <th mat-header-cell *matHeaderCellDef> Username </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Username}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Total\">\n            <th mat-header-cell *matHeaderCellDef> Total </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Total}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Paymentmonth\">\n            <th mat-header-cell *matHeaderCellDef> Paymentmonth </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Paymentmonth}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"PaymentAmount\">\n            <th mat-header-cell *matHeaderCellDef> PaymentAmount </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.PaymentAmount}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"CreateDate\">\n            <th mat-header-cell *matHeaderCellDef> CreateDate </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.CreateDate}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Reports/app.RenewalReport.Component.ts":
/*!********************************************************!*\
  !*** ./src/app/Reports/app.RenewalReport.Component.ts ***!
  \********************************************************/
/*! exports provided: RenewalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalReportComponent", function() { return RenewalReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.ReportServices */ "./src/app/Reports/Services/app.ReportServices.ts");
/* harmony import */ var _Models_app_RenewalRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/app.RenewalRequestModel */ "./src/app/Reports/Models/app.RenewalRequestModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RenewalReportComponent = /** @class */ (function () {
    function RenewalReportComponent(reportService) {
        this.RenewalRequestModel = new _Models_app_RenewalRequestModel__WEBPACK_IMPORTED_MODULE_4__["RenewalRequestModel"]();
        this.displayedColumns = ['Name', 'Contactno', 'EmailID', 'MemberNo', 'PlanName', 'SchemeName', 'JoiningDate', 'RenwalDate', 'PaymentAmount'];
        this._reportService = reportService;
    }
    RenewalReportComponent.prototype.ngOnInit = function () {
        this.fromminDate = new Date();
        this.frommaxDate = new Date();
        this.fromminDate.setDate(this.fromminDate.getDate() - 60);
        this.frommaxDate.setDate(this.frommaxDate.getDate() + 30);
        this.tominDate = new Date();
        this.tomaxDate = new Date();
        this.showDatepicker = true;
        this.exportbutton = true;
    };
    RenewalReportComponent.prototype.ExportTOExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, 'RenewalReport.xlsx');
    };
    RenewalReportComponent.prototype.onChangeFromDate = function (todate) {
        console.log(this.showDatepicker);
        this.showDatepicker = !this.showDatepicker;
        console.log(this.showDatepicker);
        this.tominDate = todate;
        this.tomaxDate.setDate(this.tominDate.getDate() + 60);
    };
    RenewalReportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.RenewalRequestModel.Paymentfromdate == null && this.RenewalRequestModel.Paymentfromto == null) {
        }
        else {
            this._reportService.GetRenewalReport(this.RenewalRequestModel).subscribe(function (allrecords) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](allrecords);
                _this.exportbutton = false;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('TABLE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RenewalReportComponent.prototype, "table", void 0);
    RenewalReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.RenewalReport.html */ "./src/app/Reports/app.RenewalReport.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], RenewalReportComponent);
    return RenewalReportComponent;
}());



/***/ }),

/***/ "./src/app/Reports/app.RenewalReport.html":
/*!************************************************!*\
  !*** ./src/app/Reports/app.RenewalReport.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h4>Renewal Report</h4>\n<hr>\n<link rel=\"stylesheet\" href=\"https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css\">\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Report</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-4\">\n                <label for=\"name\">From Date</label>\n                <input required [(ngModel)]=\"RenewalRequestModel.Paymentfromdate\" name=\"Paymentfromdate\" id=\"Paymentfromdate\"\n                    (ngModelChange)=\"onChangeFromDate($event)\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" class=\"form-control\"\n                    #refPaymentfromdate=\"bsDatepicker\" [minDate]=\"fromminDate\" [maxDate]=\"frommaxDate\" bsDatepicker>\n\n                <div *ngIf=\"!refPaymentfromdate.valid  && (refPaymentfromdate.dirty || refPaymentfromdate.touched)\"\n                    class=\"alert alert-danger\">\n                    <div [hidden]=\"!refPaymentfromdate.errors.required\">\n                        From Date is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <label for=\"name\">To Date</label>\n                <input required [(ngModel)]=\"RenewalRequestModel.Paymentfromto\" name=\"Paymentfromto\" id=\"Paymentfromto\"\n                    [isDisabled]=\"showDatepicker\" [minDate]=\"tominDate\" [maxDate]=\"tomaxDate\" [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n                    class=\"form-control\" #refPaymentfromto=\"bsDatepicker\" bsDatepicker>\n\n                <div *ngIf=\"!refPaymentfromto.valid  && (refPaymentfromto.dirty || refPaymentfromto.touched)\" class=\"alert alert-danger\">\n                    <div [hidden]=\"!refPaymentfromto.errors.required\">\n                        To Date is required\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                <button [disabled]=\"exportbutton\" style=\"margin-top: 10px; margin-left: 10px;\" mat-raised-button class=\"btn btn-info\" (click)=\"ExportTOExcel()\">Export\n                    as Excel</button>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n        <hr>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"example-container mat-elevation-z8 \" #TABLE>\n                    <table mat-table #table [dataSource]=\"dataSource\">\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"MemberNo\">\n                            <th mat-header-cell *matHeaderCellDef> MemberNo </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.MemberNo}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"Name\">\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.Name}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"Contactno\">\n                            <th mat-header-cell *matHeaderCellDef> Contactno </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.Contactno}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"EmailID\">\n                            <th mat-header-cell *matHeaderCellDef> EmailID </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.EmailID}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"PlanName\">\n                            <th mat-header-cell *matHeaderCellDef> PlanName </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.PlanName}} </td>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"SchemeName\">\n                            <th mat-header-cell *matHeaderCellDef> SchemeName </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.SchemeName}} </td>\n                        </ng-container>\n\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"JoiningDate\">\n                            <th mat-header-cell *matHeaderCellDef> JoiningDate </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.JoiningDate}} </td>\n                        </ng-container>\n\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"RenwalDate\">\n                            <th mat-header-cell *matHeaderCellDef> RenwalDate </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.RenwalDate}} </td>\n                        </ng-container>\n\n\n                        <!-- Weight Column -->\n                        <ng-container matColumnDef=\"PaymentAmount\">\n                            <th mat-header-cell *matHeaderCellDef> PaymentAmount </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.PaymentAmount}} </td>\n                        </ng-container>\n\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n "

/***/ }),

/***/ "./src/app/Reports/app.YearwiseReport.Component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Reports/app.YearwiseReport.Component.ts ***!
  \*********************************************************/
/*! exports provided: YearwiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearwiseReportComponent", function() { return YearwiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/app.ReportServices */ "./src/app/Reports/Services/app.ReportServices.ts");
/* harmony import */ var _Models_app_YearwiseRequestModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Models/app.YearwiseRequestModel */ "./src/app/Reports/Models/app.YearwiseRequestModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YearwiseReportComponent = /** @class */ (function () {
    function YearwiseReportComponent(reportService) {
        this.YearwiseRequestModel = new _Models_app_YearwiseRequestModel__WEBPACK_IMPORTED_MODULE_4__["YearwiseRequestModel"]();
        this.displayedColumns = ['CurrentYear', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Decm', 'Jan', 'Feb', 'March', 'Total'];
        this._reportService = reportService;
    }
    YearwiseReportComponent.prototype.ngOnInit = function () {
        this.YearList = [
            {
                YearID: "2018",
                YearName: "2018"
            }, {
                YearID: "2019",
                YearName: "2019"
            }
        ];
        this.exportbutton = true;
    };
    YearwiseReportComponent.prototype.ExportTOExcel = function () {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].table_to_sheet(this.table.nativeElement);
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, 'YearWiseReport.xlsx');
    };
    YearwiseReportComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.YearwiseRequestModel.YearID == null) {
        }
        else {
            this._reportService.GetYearWiseReport(this.YearwiseRequestModel).subscribe(function (allrecords) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](allrecords);
                _this.exportbutton = false;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('TABLE'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], YearwiseReportComponent.prototype, "table", void 0);
    YearwiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.YearwiseReport.html */ "./src/app/Reports/app.YearwiseReport.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_Services_app_ReportServices__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], YearwiseReportComponent);
    return YearwiseReportComponent;
}());



/***/ }),

/***/ "./src/app/Reports/app.YearwiseReport.html":
/*!*************************************************!*\
  !*** ./src/app/Reports/app.YearwiseReport.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Year Wise Collection Report</h4>\n<hr>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Report</div>\n  <div class=\"panel-body\">\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n     \n      <div class=\"col-md-4\">\n        <label>Year</label>\n        <select required name=\"YearID\" #refYearID=\"ngModel\" class=\"form-control\" [(ngModel)]=\"YearwiseRequestModel.YearID\">\n          <option value=''>Please select Year</option>\n          <option *ngFor=\"let year of YearList\" [ngValue]=\"year.YearID\">\n            {{year.YearName}}\n          </option>\n        </select>\n        <div *ngIf=\"!refYearID.valid  && (refYearID.dirty || refYearID.touched)\" class=\"alert alert-danger\">\n          <div [hidden]=\"!refYearID.errors.required\">\n            Year is required\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        \n        <button type=\"submit\" style=\"margin-top: 20px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n        <button style=\"margin-top: 20px; margin-left: 10px;\" [disabled]=\"exportbutton\" mat-raised-button class=\"btn btn-info\" (click)=\"ExportTOExcel()\">Export as Excel</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\"></div>\n  <div class=\"panel-body\">\n    <div class=\"col-md-12\">\n      <div class=\"example-container mat-elevation-z8 \" #TABLE>\n        <table mat-table #table [dataSource]=\"dataSource\">\n\n          <!--- Note that these columns can be defined in any order.\n                          The actual rendered columns are set as a property on the row definition\" -->\n\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"CurrentYear\">\n            <th mat-header-cell *matHeaderCellDef> CurrentYear </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.CurrentYear}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"April\">\n            <th mat-header-cell *matHeaderCellDef> April </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.April}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"May\">\n            <th mat-header-cell *matHeaderCellDef> May </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.May}} </td>\n          </ng-container>\n\n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"June\">\n            <th mat-header-cell *matHeaderCellDef> June </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.June}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"July\">\n            <th mat-header-cell *matHeaderCellDef> July </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.July}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"August\">\n            <th mat-header-cell *matHeaderCellDef> August </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.August}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Sept\">\n            <th mat-header-cell *matHeaderCellDef> Sept </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Sept}} </td>\n          </ng-container>\n\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Oct\">\n            <th mat-header-cell *matHeaderCellDef> Oct </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Oct}} </td>\n          </ng-container>\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Nov\">\n            <th mat-header-cell *matHeaderCellDef> Nov </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Nov}} </td>\n          </ng-container>\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"Decm\">\n            <th mat-header-cell *matHeaderCellDef> Decm </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Decm}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Jan\">\n            <th mat-header-cell *matHeaderCellDef> Jan </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Jan}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Feb\">\n            <th mat-header-cell *matHeaderCellDef> Feb </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Feb}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"March\">\n            <th mat-header-cell *matHeaderCellDef> March </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.March}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Total\">\n            <th mat-header-cell *matHeaderCellDef> Total </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Total}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/RoleMaster/Models/app.RoleModel.ts":
/*!****************************************************!*\
  !*** ./src/app/RoleMaster/Models/app.RoleModel.ts ***!
  \****************************************************/
/*! exports provided: RoleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModel", function() { return RoleModel; });
var RoleModel = /** @class */ (function () {
    function RoleModel() {
    }
    return RoleModel;
}());



/***/ }),

/***/ "./src/app/RoleMaster/Services/app.role.Service.ts":
/*!*********************************************************!*\
  !*** ./src/app/RoleMaster/Services/app.role.Service.ts ***!
  \*********************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/CreateRole/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
    }
    RoleService.prototype.AddRole = function (rolemodel) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, rolemodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Role
    RoleService.prototype.GetAllRole = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Role By ID
    RoleService.prototype.GetRoleById = function (RoleId) {
        var editUrl = this.apiUrl + '/' + RoleId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update Role
    RoleService.prototype.UpdateRole = function (rolemodel) {
        var putUrl = this.apiUrl + '/' + rolemodel.RoleId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, rolemodel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RoleService.prototype.DeleteRole = function (RoleId) {
        var deleteUrl = this.apiUrl + '/' + RoleId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RoleService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/RoleMaster/app.AllRole.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/RoleMaster/app.AllRole.component.ts ***!
  \*****************************************************/
/*! exports provided: AllRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRoleComponent", function() { return AllRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_app_RoleModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/app.RoleModel */ "./src/app/RoleMaster/Models/app.RoleModel.ts");
/* harmony import */ var _Services_app_role_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/app.role.Service */ "./src/app/RoleMaster/Services/app.role.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllRoleComponent = /** @class */ (function () {
    function AllRoleComponent(_Route, roleService) {
        this._Route = _Route;
        this.RoleList = new _Models_app_RoleModel__WEBPACK_IMPORTED_MODULE_1__["RoleModel"]();
        this.displayedColumns = ['RoleId', 'RoleName', 'Status', 'EditAction', 'DeleteAction'];
        this._roleService = roleService;
    }
    AllRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roleService.GetAllRole().subscribe(function (allrole) {
            _this.RoleList = allrole;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](allrole);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllRoleComponent.prototype.Delete = function (RoleId) {
        var _this = this;
        if (confirm("Are you sure to delete Role ?")) {
            this._roleService.DeleteRole(RoleId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Role Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Role/All']);
                }
            });
        }
    };
    AllRoleComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], AllRoleComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AllRoleComponent.prototype, "paginator", void 0);
    AllRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.AllRole.html */ "./src/app/RoleMaster/app.AllRole.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_app_role_Service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], AllRoleComponent);
    return AllRoleComponent;
}());



/***/ }),

/***/ "./src/app/RoleMaster/app.AllRole.html":
/*!*********************************************!*\
  !*** ./src/app/RoleMaster/app.AllRole.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All Role</h4>\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"RoleId\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> RoleId </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.RoleId}} </td>\n        </ng-container>\n        <!-- SchemeID Column -->\n        <ng-container matColumnDef=\"RoleName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> RoleName </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.RoleName}} </td>\n        </ng-container>\n        <!-- SchemeName Column -->\n        <ng-container matColumnDef=\"Status\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Status== true ? \"Active\": \"DeActive\"}} </td>\n        </ng-container>\n        <!-- EditAction Column -->\n        <ng-container matColumnDef=\"EditAction\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let element\"> <a class=\"btn btn-info\" [routerLink]=\"['/Role/Edit/',element.RoleId]\"><i\n                class=\"fa fa-edit fa-fw\"></i>\n              Edit</a> </td>\n        </ng-container>\n        <!-- DeleteAction Column -->\n        <ng-container matColumnDef=\"DeleteAction\">\n          <th mat-header-cell *matHeaderCellDef> Action </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button class=\"btn btn-info\" (click)=\"Delete(element.RoleId)\">Delete</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/RoleMaster/app.EditRole.component.ts":
/*!******************************************************!*\
  !*** ./src/app/RoleMaster/app.EditRole.component.ts ***!
  \******************************************************/
/*! exports provided: EditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function() { return EditRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_app_RoleModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/app.RoleModel */ "./src/app/RoleMaster/Models/app.RoleModel.ts");
/* harmony import */ var _Services_app_role_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/app.role.Service */ "./src/app/RoleMaster/Services/app.role.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditRoleComponent = /** @class */ (function () {
    function EditRoleComponent(_Route, _routeParams, roleService) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.RoleModel = new _Models_app_RoleModel__WEBPACK_IMPORTED_MODULE_1__["RoleModel"]();
        this._roleService = roleService;
    }
    EditRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleId = this._routeParams.snapshot.params['RoleID'];
        // GetRoleById
        this._roleService.GetRoleById(this.roleId).subscribe(function (allPeriod) {
            _this.RoleModel = allPeriod;
        }, function (error) { return _this.errorMessage = error; });
    };
    EditRoleComponent.prototype.onSubmit = function () {
        var _this = this;
        this._roleService.UpdateRole(this.RoleModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Role Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Role Saved Successfully');
                _this._Route.navigate(['/Role/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    EditRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.EditRole.html */ "./src/app/RoleMaster/app.EditRole.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _Services_app_role_Service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], EditRoleComponent);
    return EditRoleComponent;
}());



/***/ }),

/***/ "./src/app/RoleMaster/app.EditRole.html":
/*!**********************************************!*\
  !*** ./src/app/RoleMaster/app.EditRole.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Edit Role</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Edit Plan</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">RoleName</label>\n                    <input type=\"text\" class=\"form-control\" [disabled]=\"true\" name=\"RoleName\" [(ngModel)]=\"RoleModel.RoleName\" maxlength=\"50\"\n                        #refRoleName=\"ngModel\" id=\"RoleName\" required>\n                    <div *ngIf=\"!refRoleName.valid  && (refRoleName.dirty || refRoleName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refRoleName.errors.required\">\n                            RoleName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Status</label>\n                    <input type=\"checkbox\" name=\"Status\" [(ngModel)]=\"RoleModel.Status\" maxlength=\"50\" #refStatus=\"ngModel\"\n                        id=\"Status\">\n                  \n                </div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Role/All']\">\n                        All Roles </a>\n                </div>\n\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/RoleMaster/app.Role.component.ts":
/*!**************************************************!*\
  !*** ./src/app/RoleMaster/app.Role.component.ts ***!
  \**************************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_app_RoleModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Models/app.RoleModel */ "./src/app/RoleMaster/Models/app.RoleModel.ts");
/* harmony import */ var _Services_app_role_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/app.role.Service */ "./src/app/RoleMaster/Services/app.role.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleComponent = /** @class */ (function () {
    function RoleComponent(_Route, roleService) {
        this._Route = _Route;
        this.RoleModel = new _Models_app_RoleModel__WEBPACK_IMPORTED_MODULE_1__["RoleModel"]();
        this._roleService = roleService;
    }
    RoleComponent.prototype.onSubmit = function () {
        var _this = this;
        this._roleService.AddRole(this.RoleModel).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                alert('Role Already Exists');
            }
            else if (_this.output.StatusCode == "200") {
                alert('Role Saved Successfully');
                _this._Route.navigate(['/Role/All']);
            }
            else {
                alert('Something Went Wrong');
            }
        });
    };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.Role.html */ "./src/app/RoleMaster/app.Role.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_app_role_Service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/RoleMaster/app.Role.html":
/*!******************************************!*\
  !*** ./src/app/RoleMaster/app.Role.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add Role</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add Role</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <label for=\"name\">RoleName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"RoleName\" [(ngModel)]=\"RoleModel.RoleName\" maxlength=\"50\"\n                        #refRoleName=\"ngModel\" id=\"RoleName\" required>\n                    <div *ngIf=\"!refRoleName.valid  && (refRoleName.dirty || refRoleName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refRoleName.errors.required\">\n                            RoleName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <label for=\"name\">Status</label>\n                    <input type=\"checkbox\" name=\"Status\" [(ngModel)]=\"RoleModel.Status\" maxlength=\"50\" #refStatus=\"ngModel\"\n                        id=\"Status\" required>\n                    <div *ngIf=\"!refStatus.valid  && (refStatus.dirty || refStatus.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refStatus.errors.required\">\n                            Status is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Role/All']\">\n                        All Roles </a>\n                </div>\n\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/SchemeMasters/Services/app.Scheme.Service.ts":
/*!**************************************************************!*\
  !*** ./src/app/SchemeMasters/Services/app.Scheme.Service.ts ***!
  \**************************************************************/
/*! exports provided: SchemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeService", function() { return SchemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/environment */ "./src/app/Shared/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchemeService = /** @class */ (function () {
    function SchemeService(http) {
        this.http = http;
        this.apiUrl = src_app_Shared_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "/api/Scheme/";
        this.data = JSON.parse(localStorage.getItem('AdminUser'));
        this.token = this.data.token;
        this.username = this.data.username;
    }
    // Save Scheme
    SchemeService.prototype.SaveScheme = function (SchemeMasterModel) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.post(this.apiUrl, SchemeMasterModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Scheme
    SchemeService.prototype.GetAllScheme = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(this.apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Scheme List
    SchemeService.prototype.GetAllActiveSchemeList = function () {
        var apiUrl = "	http://localhost:49505/api/SchemeDropdown/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(apiUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Get All Scheme By ID
    SchemeService.prototype.GetSchemeById = function (SchemeId) {
        var editUrl = this.apiUrl + '/' + SchemeId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.get(editUrl, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Update Scheme
    SchemeService.prototype.UpdateScheme = function (SchemeMasterModel) {
        var putUrl = this.apiUrl + '/' + SchemeMasterModel.SchemeID;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.put(putUrl, SchemeMasterModel, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SchemeService.prototype.DeleteScheme = function (SchemeId) {
        var deleteUrl = this.apiUrl + '/' + SchemeId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        headers = headers.append('Authorization', 'Bearer ' + ("" + this.token));
        return this.http.delete(deleteUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SchemeService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    SchemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SchemeService);
    return SchemeService;
}());



/***/ }),

/***/ "./src/app/SchemeMasters/app.AllScheme.Component.ts":
/*!**********************************************************!*\
  !*** ./src/app/SchemeMasters/app.AllScheme.Component.ts ***!
  \**********************************************************/
/*! exports provided: AllSchemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSchemeComponent", function() { return AllSchemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/app.Scheme.Service */ "./src/app/SchemeMasters/Services/app.Scheme.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllSchemeComponent = /** @class */ (function () {
    function AllSchemeComponent(location, _Route, SchemeService) {
        this.location = location;
        this._Route = _Route;
        this.SchemeService = SchemeService;
        this.displayedColumns = ['SchemeID', 'SchemeName', 'Status', 'Createddate', 'EditAction', 'DeleteAction'];
        this._SchemeService = SchemeService;
    }
    AllSchemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._SchemeService.GetAllScheme().subscribe(function (AllScheme) {
            _this.AllSchemeList = AllScheme;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.AllSchemeList);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return _this.errorMessage = error; });
    };
    AllSchemeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AllSchemeComponent.prototype.Delete = function (SchemeId) {
        var _this = this;
        if (confirm("Are you sure to delete Scheme ?")) {
            this._SchemeService.DeleteScheme(SchemeId).subscribe(function (response) {
                if (response.StatusCode == "200") {
                    alert('Deleted Scheme Successfully');
                    location.reload();
                }
                else {
                    alert('Something Went Wrong');
                    _this._Route.navigate(['/Scheme/All']);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], AllSchemeComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], AllSchemeComponent.prototype, "paginator", void 0);
    AllSchemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.AllSchemeComponent.html */ "./src/app/SchemeMasters/app.AllSchemeComponent.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"]])
    ], AllSchemeComponent);
    return AllSchemeComponent;
}());



/***/ }),

/***/ "./src/app/SchemeMasters/app.AllSchemeComponent.html":
/*!***********************************************************!*\
  !*** ./src/app/SchemeMasters/app.AllSchemeComponent.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>All Scheme</h4>\n<hr>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n            <!-- SchemeID Column -->\n            <ng-container matColumnDef=\"SchemeID\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> SchemeID </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.SchemeID}} </td>\n            </ng-container>\n            <!-- SchemeName Column -->\n            <ng-container matColumnDef=\"SchemeName\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> SchemeName </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.SchemeName}} </td>\n            </ng-container>\n            <!-- Status Column -->\n            <ng-container matColumnDef=\"Status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Status}} </td>\n            </ng-container>\n            <!-- Createddate Column -->\n            <ng-container matColumnDef=\"Createddate\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Createddate </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.Createddate}} </td>\n            </ng-container>\n            <!-- EditAction Column -->\n            <ng-container matColumnDef=\"EditAction\">\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <td mat-cell *matCellDef=\"let element\"> <a class=\"btn btn-info\" [routerLink]=\"['/Scheme/Edit/',element.SchemeID]\"><i\n                    class=\"fa fa-edit fa-fw\"></i>\n                  Edit</a> </td>\n            </ng-container>\n            <!-- DeleteAction Column -->\n            <ng-container matColumnDef=\"DeleteAction\">\n              <th mat-header-cell *matHeaderCellDef> Action </th>\n              <td mat-cell *matCellDef=\"let element\">\n                <button class=\"btn btn-info\" (click)=\"Delete(element.SchemeID)\">Delete</button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/SchemeMasters/app.EditScheme.Component.ts":
/*!***********************************************************!*\
  !*** ./src/app/SchemeMasters/app.EditScheme.Component.ts ***!
  \***********************************************************/
/*! exports provided: EditSchemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSchemeComponent", function() { return EditSchemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/app.Scheme.Service */ "./src/app/SchemeMasters/Services/app.Scheme.Service.ts");
/* harmony import */ var _app_SchemeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.SchemeModel */ "./src/app/SchemeMasters/app.SchemeModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSchemeComponent = /** @class */ (function () {
    function EditSchemeComponent(_Route, _routeParams, SchemeService) {
        this._Route = _Route;
        this._routeParams = _routeParams;
        this.SchemeService = SchemeService;
        this.title = "Edit Scheme Master";
        this.SchemeForms = new _app_SchemeModel__WEBPACK_IMPORTED_MODULE_2__["SchemeMasterModel"]();
        this._SchemeService = SchemeService;
    }
    EditSchemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SchemeID = this._routeParams.snapshot.params['SchemeId'];
        if (this.SchemeID != null) {
            var data = this._SchemeService.GetSchemeById(this.SchemeID).subscribe(function (Scheme) {
                _this.SchemeForms.SchemeID = Scheme.SchemeID;
                _this.SchemeForms.SchemeName = Scheme.SchemeName;
                _this.SchemeForms.Status = Scheme.Status;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    EditSchemeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._SchemeService.UpdateScheme(this.SchemeForms)
            .subscribe(function (response) {
            if (response.StatusCode == "200") {
                alert('Updated Scheme Successfully');
                _this._Route.navigate(['/Scheme/All']);
            }
        });
    };
    EditSchemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.EditSchemeComponent.html */ "./src/app/SchemeMasters/app.EditSchemeComponent.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"]])
    ], EditSchemeComponent);
    return EditSchemeComponent;
}());



/***/ }),

/***/ "./src/app/SchemeMasters/app.EditSchemeComponent.html":
/*!************************************************************!*\
  !*** ./src/app/SchemeMasters/app.EditSchemeComponent.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Edit Scheme</h4>\n\n<hr>\n\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Edit</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <input type=\"hidden\" name=\"SchemeID\" [(ngModel)]=\"SchemeForms.SchemeID\" id=\"SchemeID\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <label for=\"name\">SchemeName</label>\n                    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" name=\"SchemeName\" [(ngModel)]=\"SchemeForms.SchemeName\"\n                        maxlength=\"50\" #refSchemeName=\"ngModel\" id=\"SchemeName\" required>\n                    <div *ngIf=\"!refSchemeName.valid  && (refSchemeName.dirty || refSchemeName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refSchemeName.errors.required\">\n                            SchemeName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <label for=\"name\">Status</label>\n                    <br>\n                    <input style=\"margin-top: 10px\" type=\"checkbox\" name=\"Status\" [(ngModel)]=\"SchemeForms.Status\"\n                        maxlength=\"50\" #refStatus=\"ngModel\" id=\"SchemeName\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Scheme/All']\">\n                        All Scheme </a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/SchemeMasters/app.Scheme.Component.ts":
/*!*******************************************************!*\
  !*** ./src/app/SchemeMasters/app.Scheme.Component.ts ***!
  \*******************************************************/
/*! exports provided: SchemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeComponent", function() { return SchemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_SchemeModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.SchemeModel */ "./src/app/SchemeMasters/app.SchemeModel.ts");
/* harmony import */ var _Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/app.Scheme.Service */ "./src/app/SchemeMasters/Services/app.Scheme.Service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchemeComponent = /** @class */ (function () {
    function SchemeComponent(_Route, snackBar, SchemeService) {
        this._Route = _Route;
        this.snackBar = snackBar;
        this.SchemeService = SchemeService;
        this.title = "Scheme Master";
        this.SchemeForms = new _app_SchemeModel__WEBPACK_IMPORTED_MODULE_1__["SchemeMasterModel"]();
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 2000;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this._SchemeService = SchemeService;
    }
    SchemeComponent.prototype.onSubmit = function () {
        var _this = this;
        this._SchemeService.SaveScheme(this.SchemeForms).subscribe(function (response) {
            _this.output = response;
            if (_this.output.StatusCode == "409") {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Scheme Name Already Exists", _this.action ? _this.actionButtonLabel : undefined, config);
            }
            else if (_this.output.StatusCode == "200") {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Saved Scheme Successfully", _this.action ? _this.actionButtonLabel : undefined, config);
                _this._Route.navigate(['/Scheme/All']);
            }
            else {
                var config = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarConfig"]();
                config.duration = _this.setAutoHide ? _this.autoHide : 0;
                config.verticalPosition = _this.verticalPosition;
                _this.snackBar.open("Something Went Wrong", _this.action ? _this.actionButtonLabel : undefined, config);
            }
        });
    };
    SchemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.SchemeMaster.html */ "./src/app/SchemeMasters/app.SchemeMaster.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _Services_app_Scheme_Service__WEBPACK_IMPORTED_MODULE_2__["SchemeService"]])
    ], SchemeComponent);
    return SchemeComponent;
}());



/***/ }),

/***/ "./src/app/SchemeMasters/app.SchemeMaster.html":
/*!*****************************************************!*\
  !*** ./src/app/SchemeMasters/app.SchemeMaster.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Add Scheme</h4>\n<hr>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Add Scheme</div>\n    <div class=\"panel-body\">\n        <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <label for=\"name\">SchemeName</label>\n                    <input type=\"text\" class=\"form-control\" name=\"SchemeName\" [(ngModel)]=\"SchemeForms.SchemeName\"\n                        maxlength=\"50\" #refSchemeName=\"ngModel\" id=\"SchemeName\" required>\n                    <div *ngIf=\"!refSchemeName.valid  && (refSchemeName.dirty || refSchemeName.touched)\" class=\"alert alert-danger\">\n                        <div [hidden]=\"!refSchemeName.errors.required\">\n                            SchemeName is required\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <label for=\"name\">Status</label>\n                    <br>\n                    <input style=\"margin-top: 10px\" type=\"checkbox\" name=\"Status\" [(ngModel)]=\"SchemeForms.Status\"\n                        maxlength=\"50\" #refStatus=\"ngModel\" id=\"SchemeName\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" style=\"margin-top: 10px\" [disabled]=\"!f.form.valid\" class=\"btn btn-success\">Submit</button>\n                    <a style=\"margin-left: 10px; margin-top:7px;\" class=\"btn btn-info\" [routerLink]=\"['/Scheme/All']\">\n                        All Scheme </a>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/SchemeMasters/app.SchemeModel.ts":
/*!**************************************************!*\
  !*** ./src/app/SchemeMasters/app.SchemeModel.ts ***!
  \**************************************************/
/*! exports provided: SchemeMasterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeMasterModel", function() { return SchemeMasterModel; });
var SchemeMasterModel = /** @class */ (function () {
    function SchemeMasterModel() {
        this.SchemeID = 0;
        this.SchemeName = "";
        this.Status = false;
    }
    return SchemeMasterModel;
}());



/***/ }),

/***/ "./src/app/Shared/PaginationModel.ts":
/*!*******************************************!*\
  !*** ./src/app/Shared/PaginationModel.ts ***!
  \*******************************************/
/*! exports provided: PaginationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModel", function() { return PaginationModel; });
var PaginationModel = /** @class */ (function () {
    function PaginationModel() {
        this.selectItemsPerPage = [10, 25, 100];
        this.pageSize = this.selectItemsPerPage[0];
        this.pageIndex = 1;
        this.allItemsLength = 0;
    }
    return PaginationModel;
}());



/***/ }),

/***/ "./src/app/Shared/PaginationService.ts":
/*!*********************************************!*\
  !*** ./src/app/Shared/PaginationService.ts ***!
  \*********************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _PaginationModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationModel */ "./src/app/Shared/PaginationModel.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationService = /** @class */ (function () {
    function PaginationService() {
        this.paginationModel = new _PaginationModel__WEBPACK_IMPORTED_MODULE_0__["PaginationModel"]();
    }
    Object.defineProperty(PaginationService.prototype, "page", {
        get: function () {
            return this.paginationModel.pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "selectItemsPerPage", {
        get: function () {
            return this.paginationModel.selectItemsPerPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationService.prototype, "pageCount", {
        get: function () {
            return this.paginationModel.pageSize;
        },
        enumerable: true,
        configurable: true
    });
    PaginationService.prototype.change = function (pageEvent) {
        this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
        this.paginationModel.pageSize = pageEvent.pageSize;
        this.paginationModel.allItemsLength = pageEvent.length;
    };
    PaginationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/Shared/constantUrl.ts":
/*!***************************************!*\
  !*** ./src/app/Shared/constantUrl.ts ***!
  \***************************************/
/*! exports provided: constantUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantUrl", function() { return constantUrl; });
var constantUrl = {
    apiEndpoint: 'http://localhost:49505'
};


/***/ }),

/***/ "./src/app/Shared/environment.ts":
/*!***************************************!*\
  !*** ./src/app/Shared/environment.ts ***!
  \***************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiEndpoint: 'http://localhost:49505'
};


/***/ }),

/***/ "./src/app/UserDashboard/app.UserDashboardComponent.html":
/*!***************************************************************!*\
  !*** ./src/app/UserDashboard/app.UserDashboardComponent.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><i class=\"fa fa-tachometer w3-xxxlarge\"></i> <h4 style=\"display: inline;margin-left: 9px;\">User Dashboard</h4></div>\r\n  <hr>\r\n\r\n  <div class=\"w3-row-padding w3-margin-bottom\">\r\n    <div class=\"w3-quarter\">\r\n      <div class=\"w3-container w3-red w3-padding-16\">\r\n        <div class=\"w3-left\"><i class=\"fa fa-building-o w3-xxxlarge\"></i></div>\r\n        <div class=\"w3-right\">\r\n          <h3>52</h3>\r\n        </div>\r\n        <div class=\"w3-clear\"></div>\r\n        <h4>Asserts</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"w3-quarter\">\r\n      <div class=\"w3-container w3-blue w3-padding-16\">\r\n        <div class=\"w3-left\"><i class=\"fa fa-users w3-xxxlarge\"></i></div>\r\n        <div class=\"w3-right\">\r\n          <h3>99</h3>\r\n        </div>\r\n        <div class=\"w3-clear\"></div>\r\n        <h4>Landlords</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"w3-quarter\">\r\n      <div class=\"w3-container w3-teal w3-padding-16\">\r\n        <div class=\"w3-left\"><i class=\"fa fa-thumbs-up w3-xxxlarge\"></i></div>\r\n        <div class=\"w3-right\">\r\n          <h3>23</h3>\r\n        </div>\r\n        <div class=\"w3-clear\"></div>\r\n        <h4>Active</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"w3-quarter\">\r\n      <div class=\"w3-container w3-orange w3-text-white w3-padding-16\">\r\n        <div class=\"w3-left\"><i class=\"fa fa-money w3-xxxlarge\"></i></div>\r\n        <div class=\"w3-right\">\r\n          <h3>50</h3>\r\n        </div>\r\n        <div class=\"w3-clear\"></div>\r\n        <h4>Dues</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/UserDashboard/app.UserDashboardComponent.ts":
/*!*************************************************************!*\
  !*** ./src/app/UserDashboard/app.UserDashboardComponent.ts ***!
  \*************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./app.UserDashboardComponent.html */ "./src/app/UserDashboard/app.UserDashboardComponent.html")
        })
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/_layout/app-admin-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/_layout/app-admin-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n  <meta charset=\"utf-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n\n  <title>GYMONE</title>\n\n   \n\n    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\n    <!--[if lt IE 9]>\n        <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\n        <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\n    <![endif]-->\n\n \n</head>\n\n<body>\n\n  <div id=\"wrapper\">\n\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"index.html\">eVasool</a>\n      </div>\n      <!-- /.navbar-header -->\n\n      <!-- /.navbar-top-links -->\n\n      <div class=\"navbar-default sidebar\" role=\"navigation\">\n        <div class=\"sidebar-nav navbar-collapse\">\n          <ul class=\"nav\" id=\"side-menu\">\n            <li>\n              <a [routerLink]=\"['/Scheme/Add']\"><i class=\"fa fa-edit fa-fw\"></i>Add Scheme</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Plan/Add']\"><i class=\"fa fa-edit fa-fw\"></i>Add Plan</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Role/Add']\"><i class=\"fa fa-edit fa-fw\"></i>Add Role</a>\n            </li>     \n            <li>\n              <a [routerLink]=\"['/User/Add']\"><i class=\"fa fa-edit fa-fw\"></i>Create User Account</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Assign/Role']\"><i class=\"fa fa-edit fa-fw\"></i>Assign/Remove Role</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Report/Member']\"><i class=\"fa fa-edit fa-fw\"></i>All Member Report</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Report/Yearwise']\"><i class=\"fa fa-edit fa-fw\"></i>Year Wise Report</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Report/Monthwise']\"><i class=\"fa fa-edit fa-fw\"></i>Month Wise Report</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/Report/Renewal']\"><i class=\"fa fa-edit fa-fw\"></i>Renewal Report</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/AdminLogout']\"><i class=\"fa fa-edit fa-fw\"></i>Logout</a>\n            </li>\n          </ul>\n        </div>\n        <!-- /.sidebar-collapse -->\n      </div>\n      <!-- /.navbar-static-side -->\n    </nav>\n\n    <div id=\"page-wrapper\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n          \n          <router-outlet></router-outlet>\n        </div>\n        <!-- /.col-lg-12 -->\n      </div>\n      <!-- /.row -->\n\n\n    </div>\n  </div>\n  <!-- /#page-wrapper -->\n\n  <!-- /#wrapper -->\n\n  <!-- jQuery -->\n  <script src=\"vendor/jquery/jquery.min.js\"></script>\n\n  <!-- Bootstrap Core JavaScript -->\n  <script src=\"vendor/bootstrap/js/bootstrap.min.js\"></script>\n\n  <!-- Metis Menu Plugin JavaScript -->\n  <script src=\"vendor/metisMenu/metisMenu.min.js\"></script>\n\n  <!-- Custom Theme JavaScript -->\n  <script src=\"dist/js/sb-admin-2.js\"></script>\n\n</body>\n\n</html>\n\n\n\n"

/***/ }),

/***/ "./src/app/_layout/app-adminlayout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_layout/app-adminlayout.component.ts ***!
  \******************************************************/
/*! exports provided: AppAdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAdminLayoutComponent", function() { return AppAdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAdminLayoutComponent = /** @class */ (function () {
    function AppAdminLayoutComponent() {
    }
    AppAdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AppAdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-layout',
            template: __webpack_require__(/*! ./app-admin-layout.component.html */ "./src/app/_layout/app-admin-layout.component.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAdminLayoutComponent);
    return AppAdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/_layout/app-user-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/_layout/app-user-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\r\n  <meta charset=\"utf-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n\r\n  <title>GYMONE</title>\r\n\r\n\r\n\r\n  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\r\n  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\r\n  <!--[if lt IE 9]>\r\n      <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n      <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\r\n  <![endif]-->\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n  <div id=\"wrapper\">\r\n\r\n    <!-- Navigation -->\r\n    <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/User/Dashboard']\">eVasool</a>\r\n      </div>\r\n      <!-- /.navbar-header -->\r\n      <!-- /.navbar-top-links -->\r\n\r\n      <div class=\"navbar-default sidebar\" role=\"navigation\">\r\n        <div class=\"sidebar-nav navbar-collapse\">\r\n          <ul class=\"nav\" id=\"side-menu\">\r\n            <li>\r\n              <a [routerLink]=\"['/PropertyItem/Add']\"><i class=\"fa fa-edit fa-fw\"></i>Add Property</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/Member/Add']\"><i class=\"fa fa-edit fa-fw\"></i>Add Member</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/Payment/Details']\"><i class=\"fa fa-edit fa-fw\"></i>Payment Details</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/Renewal/Renew']\"><i class=\"fa fa-edit fa-fw\"></i>Renew</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/UserLogout']\"><i class=\"fa fa-edit fa-fw\"></i>Logout</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!-- /.sidebar-collapse -->\r\n      </div>\r\n      <!-- /.navbar-static-side -->\r\n\r\n      <div style=\"float:right;padding:15px\">\r\n        Welcome User!\r\n      </div>\r\n    </nav>\r\n\r\n    <div id=\"page-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n\r\n\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n        <!-- /.col-lg-12 -->\r\n      </div>\r\n      <!-- /.row -->\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <!-- Footer -->\r\n  <footer class=\"page-footer font-small blue pt-4\">\r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center py-3\">\r\n      © 2020 Copyright:\r\n      <a href=\"http://www.jayasankaramsoft.in\" target=\"_blank\"> Jayasankaram</a>\r\n    </div>\r\n    <!-- Copyright -->\r\n  </footer>\r\n  <!-- Footer -->\r\n  <!-- /#page-wrapper -->\r\n  <!-- /#wrapper -->\r\n  <!-- jQuery -->\r\n  <script src=\"vendor/jquery/jquery.min.js\"></script>\r\n\r\n  <!-- Bootstrap Core JavaScript -->\r\n  <script src=\"vendor/bootstrap/js/bootstrap.min.js\"></script>\r\n\r\n  <!-- Metis Menu Plugin JavaScript -->\r\n  <script src=\"vendor/metisMenu/metisMenu.min.js\"></script>\r\n\r\n  <!-- Custom Theme JavaScript -->\r\n  <script src=\"dist/js/sb-admin-2.js\"></script>\r\n\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/_layout/app-userlayout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_layout/app-userlayout.component.ts ***!
  \*****************************************************/
/*! exports provided: AppUserLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUserLayoutComponent", function() { return AppUserLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppUserLayoutComponent = /** @class */ (function () {
    function AppUserLayoutComponent() {
    }
    AppUserLayoutComponent.prototype.ngOnInit = function () {
    };
    AppUserLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-layout',
            template: __webpack_require__(/*! ./app-user-layout.component.html */ "./src/app/_layout/app-user-layout.component.html"),
            styles: [__webpack_require__(/*! ../Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ../Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ../Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ../Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppUserLayoutComponent);
    return AppUserLayoutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gym-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./Content/vendor/bootstrap/css/bootstrap.min.css */ "./src/app/Content/vendor/bootstrap/css/bootstrap.min.css"), __webpack_require__(/*! ./Content/vendor/metisMenu/metisMenu.min.css */ "./src/app/Content/vendor/metisMenu/metisMenu.min.css"), __webpack_require__(/*! ./Content/dist/css/sb-admin-2.css */ "./src/app/Content/dist/css/sb-admin-2.css"), __webpack_require__(/*! ./Content/vendor/font-awesome/css/font-awesome.min.css */ "./src/app/Content/vendor/font-awesome/css/font-awesome.min.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _SchemeMasters_app_Scheme_Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SchemeMasters/app.Scheme.Component */ "./src/app/SchemeMasters/app.Scheme.Component.ts");
/* harmony import */ var _SchemeMasters_app_AllScheme_Component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SchemeMasters/app.AllScheme.Component */ "./src/app/SchemeMasters/app.AllScheme.Component.ts");
/* harmony import */ var _SchemeMasters_app_EditScheme_Component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SchemeMasters/app.EditScheme.Component */ "./src/app/SchemeMasters/app.EditScheme.Component.ts");
/* harmony import */ var _PropertyItem_app_PropertyItem_Component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PropertyItem/app.PropertyItem.Component */ "./src/app/PropertyItem/app.PropertyItem.Component.ts");
/* harmony import */ var _PropertyItem_app_EditPropertyItem_Component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PropertyItem/app.EditPropertyItem.Component */ "./src/app/PropertyItem/app.EditPropertyItem.Component.ts");
/* harmony import */ var _PlanMaster_app_planmaster_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PlanMaster/app.planmaster.component */ "./src/app/PlanMaster/app.planmaster.component.ts");
/* harmony import */ var _PlanMaster_app_allplanmaster_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PlanMaster/app.allplanmaster.component */ "./src/app/PlanMaster/app.allplanmaster.component.ts");
/* harmony import */ var _PlanMaster_app_EditPlan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PlanMaster/app.EditPlan.component */ "./src/app/PlanMaster/app.EditPlan.component.ts");
/* harmony import */ var _RoleMaster_app_Role_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RoleMaster/app.Role.component */ "./src/app/RoleMaster/app.Role.component.ts");
/* harmony import */ var _RoleMaster_app_AllRole_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RoleMaster/app.AllRole.component */ "./src/app/RoleMaster/app.AllRole.component.ts");
/* harmony import */ var _RoleMaster_app_EditRole_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RoleMaster/app.EditRole.component */ "./src/app/RoleMaster/app.EditRole.component.ts");
/* harmony import */ var _MemberRegistration_app_MemberRegistration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./MemberRegistration/app.MemberRegistration.component */ "./src/app/MemberRegistration/app.MemberRegistration.component.ts");
/* harmony import */ var _MemberRegistration_app_EditMemberRegistration_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./MemberRegistration/app.EditMemberRegistration.component */ "./src/app/MemberRegistration/app.EditMemberRegistration.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _CreateUsers_app_UserRegistration_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./CreateUsers/app.UserRegistration.component */ "./src/app/CreateUsers/app.UserRegistration.component.ts");
/* harmony import */ var _CreateUsers_app_AllUserRegistration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./CreateUsers/app.AllUserRegistration.component */ "./src/app/CreateUsers/app.AllUserRegistration.component.ts");
/* harmony import */ var _CreateUsers_app_EditUserRegistration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./CreateUsers/app.EditUserRegistration.component */ "./src/app/CreateUsers/app.EditUserRegistration.component.ts");
/* harmony import */ var _AssignRole_app_AssignRole_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./AssignRole/app.AssignRole.component */ "./src/app/AssignRole/app.AssignRole.component.ts");
/* harmony import */ var _AssignRole_app_AllAssignRole_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./AssignRole/app.AllAssignRole.component */ "./src/app/AssignRole/app.AllAssignRole.component.ts");
/* harmony import */ var _MemberRegistration_List_app_MemberListComponent___WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./MemberRegistration/List/app.MemberListComponent  */ "./src/app/MemberRegistration/List/app.MemberListComponent .ts");
/* harmony import */ var _MemberRegistration_List_app_MemberViewComponent__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./MemberRegistration/List/app.MemberViewComponent */ "./src/app/MemberRegistration/List/app.MemberViewComponent.ts");
/* harmony import */ var _Payment_List_app_PaymentOverviewComponent__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Payment/List/app.PaymentOverviewComponent */ "./src/app/Payment/List/app.PaymentOverviewComponent.ts");
/* harmony import */ var _Payment_List_app_PaymentListComponent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Payment/List/app.PaymentListComponent */ "./src/app/Payment/List/app.PaymentListComponent.ts");
/* harmony import */ var _Renewal_app_Renewal_Component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Renewal/app.Renewal.Component */ "./src/app/Renewal/app.Renewal.Component.ts");
/* harmony import */ var _Login_app_LoginComponent__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Login/app.LoginComponent */ "./src/app/Login/app.LoginComponent.ts");
/* harmony import */ var _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_layout/app-adminlayout.component */ "./src/app/_layout/app-adminlayout.component.ts");
/* harmony import */ var _UserDashboard_app_UserDashboardComponent__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./UserDashboard/app.UserDashboardComponent */ "./src/app/UserDashboard/app.UserDashboardComponent.ts");
/* harmony import */ var _AdminDashboard_app_AdminDashboardComponent__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./AdminDashboard/app.AdminDashboardComponent */ "./src/app/AdminDashboard/app.AdminDashboardComponent.ts");
/* harmony import */ var _Reports_app_MemberDetailsReport_Component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Reports/app.MemberDetailsReport.Component */ "./src/app/Reports/app.MemberDetailsReport.Component.ts");
/* harmony import */ var _Reports_app_YearwiseReport_Component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Reports/app.YearwiseReport.Component */ "./src/app/Reports/app.YearwiseReport.Component.ts");
/* harmony import */ var _Reports_app_MonthwiseReport_Component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Reports/app.MonthwiseReport.Component */ "./src/app/Reports/app.MonthwiseReport.Component.ts");
/* harmony import */ var _Reports_app_RenewalReport_Component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Reports/app.RenewalReport.Component */ "./src/app/Reports/app.RenewalReport.Component.ts");
/* harmony import */ var _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_layout/app-userlayout.component */ "./src/app/_layout/app-userlayout.component.ts");
/* harmony import */ var _Login_app_AdminLogout_Component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Login/app.AdminLogout.Component */ "./src/app/Login/app.AdminLogout.Component.ts");
/* harmony import */ var _Login_app_UserLogout_Component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Login/app.UserLogout.Component */ "./src/app/Login/app.UserLogout.Component.ts");
/* harmony import */ var _AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./AuthGuard/AdminAuthGuardService */ "./src/app/AuthGuard/AdminAuthGuardService.ts");
/* harmony import */ var _AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./AuthGuard/UserAuthGuardService */ "./src/app/AuthGuard/UserAuthGuardService.ts");
/* harmony import */ var _Recepit_app_generateRecepit_Component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Recepit/app.generateRecepit.Component */ "./src/app/Recepit/app.generateRecepit.Component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { AllPropertyItemComponent } from './PropertyItem/app.AllPropertyItem.Component';


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__["AppUserLayoutComponent"],
                _SchemeMasters_app_Scheme_Component__WEBPACK_IMPORTED_MODULE_12__["SchemeComponent"],
                _SchemeMasters_app_AllScheme_Component__WEBPACK_IMPORTED_MODULE_13__["AllSchemeComponent"],
                _SchemeMasters_app_EditScheme_Component__WEBPACK_IMPORTED_MODULE_14__["EditSchemeComponent"],
                _PropertyItem_app_PropertyItem_Component__WEBPACK_IMPORTED_MODULE_15__["PropertyItemComponent"],
                //AllPropertyItemComponent,
                _PropertyItem_app_EditPropertyItem_Component__WEBPACK_IMPORTED_MODULE_16__["EditPropertyItemComponent"],
                _PlanMaster_app_planmaster_component__WEBPACK_IMPORTED_MODULE_17__["PlanMasterComponent"],
                _PlanMaster_app_allplanmaster_component__WEBPACK_IMPORTED_MODULE_18__["AllPlanMasterComponent"],
                _PlanMaster_app_EditPlan_component__WEBPACK_IMPORTED_MODULE_19__["EditPlanComponent"],
                _RoleMaster_app_Role_component__WEBPACK_IMPORTED_MODULE_20__["RoleComponent"],
                _RoleMaster_app_AllRole_component__WEBPACK_IMPORTED_MODULE_21__["AllRoleComponent"],
                _RoleMaster_app_EditRole_component__WEBPACK_IMPORTED_MODULE_22__["EditRoleComponent"],
                _MemberRegistration_app_MemberRegistration_component__WEBPACK_IMPORTED_MODULE_23__["MemberRegistrationComponent"],
                _MemberRegistration_List_app_MemberListComponent___WEBPACK_IMPORTED_MODULE_31__["MemberListComponent"],
                _MemberRegistration_List_app_MemberViewComponent__WEBPACK_IMPORTED_MODULE_32__["MemberViewComponent"],
                _MemberRegistration_app_EditMemberRegistration_component__WEBPACK_IMPORTED_MODULE_24__["EditMemberRegistrationComponent"],
                _CreateUsers_app_UserRegistration_component__WEBPACK_IMPORTED_MODULE_26__["UserRegistrationComponent"],
                _CreateUsers_app_AllUserRegistration_component__WEBPACK_IMPORTED_MODULE_27__["AllUserRegistrationComponent"],
                _CreateUsers_app_EditUserRegistration_component__WEBPACK_IMPORTED_MODULE_28__["EditUserRegistrationComponent"],
                _AssignRole_app_AssignRole_component__WEBPACK_IMPORTED_MODULE_29__["AssignRoleComponent"],
                _AssignRole_app_AllAssignRole_component__WEBPACK_IMPORTED_MODULE_30__["AllAssignRoleComponent"],
                _Payment_List_app_PaymentOverviewComponent__WEBPACK_IMPORTED_MODULE_33__["PaymentOverviewComponent"],
                _Payment_List_app_PaymentListComponent__WEBPACK_IMPORTED_MODULE_34__["PaymentListComponent"],
                _Renewal_app_Renewal_Component__WEBPACK_IMPORTED_MODULE_35__["RenewalComponent"],
                _Login_app_LoginComponent__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"],
                _Login_app_AdminLogout_Component__WEBPACK_IMPORTED_MODULE_45__["AdminLogoutComponent"],
                _Login_app_UserLogout_Component__WEBPACK_IMPORTED_MODULE_46__["UserLogoutComponent"],
                _UserDashboard_app_UserDashboardComponent__WEBPACK_IMPORTED_MODULE_38__["UserDashboardComponent"],
                _AdminDashboard_app_AdminDashboardComponent__WEBPACK_IMPORTED_MODULE_39__["AdminDashboardComponent"],
                _Reports_app_MemberDetailsReport_Component__WEBPACK_IMPORTED_MODULE_40__["MemberDetailsReportComponent"],
                _Reports_app_YearwiseReport_Component__WEBPACK_IMPORTED_MODULE_41__["YearwiseReportComponent"],
                _Reports_app_MonthwiseReport_Component__WEBPACK_IMPORTED_MODULE_42__["MonthwiseReportComponent"],
                _Reports_app_RenewalReport_Component__WEBPACK_IMPORTED_MODULE_43__["RenewalReportComponent"],
                _Recepit_app_generateRecepit_Component__WEBPACK_IMPORTED_MODULE_49__["GenerateRecepitComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerModule"].forRoot(),
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    {
                        path: 'Scheme',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Add', component: _SchemeMasters_app_Scheme_Component__WEBPACK_IMPORTED_MODULE_12__["SchemeComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Edit/:schemeId', component: _SchemeMasters_app_EditScheme_Component__WEBPACK_IMPORTED_MODULE_14__["EditSchemeComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'All', component: _SchemeMasters_app_AllScheme_Component__WEBPACK_IMPORTED_MODULE_13__["AllSchemeComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'PropertyItem',
                        component: _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__["AppUserLayoutComponent"],
                        children: [
                            { path: 'Add', component: _PropertyItem_app_PropertyItem_Component__WEBPACK_IMPORTED_MODULE_15__["PropertyItemComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Plan',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Add', component: _PlanMaster_app_planmaster_component__WEBPACK_IMPORTED_MODULE_17__["PlanMasterComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Edit/:PlanID', component: _PlanMaster_app_EditPlan_component__WEBPACK_IMPORTED_MODULE_19__["EditPlanComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'All', component: _PlanMaster_app_allplanmaster_component__WEBPACK_IMPORTED_MODULE_18__["AllPlanMasterComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Role',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Add', component: _RoleMaster_app_Role_component__WEBPACK_IMPORTED_MODULE_20__["RoleComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Edit/:RoleID', component: _RoleMaster_app_EditRole_component__WEBPACK_IMPORTED_MODULE_22__["EditRoleComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'All', component: _RoleMaster_app_AllRole_component__WEBPACK_IMPORTED_MODULE_21__["AllRoleComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Member',
                        component: _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__["AppUserLayoutComponent"],
                        children: [
                            { path: 'Add', component: _MemberRegistration_app_MemberRegistration_component__WEBPACK_IMPORTED_MODULE_23__["MemberRegistrationComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] },
                            { path: 'Edit/:MemberId', component: _MemberRegistration_app_EditMemberRegistration_component__WEBPACK_IMPORTED_MODULE_24__["EditMemberRegistrationComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] },
                            { path: 'All', component: _MemberRegistration_List_app_MemberViewComponent__WEBPACK_IMPORTED_MODULE_32__["MemberViewComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'User',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Add', component: _CreateUsers_app_UserRegistration_component__WEBPACK_IMPORTED_MODULE_26__["UserRegistrationComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Edit/:UserId', component: _CreateUsers_app_EditUserRegistration_component__WEBPACK_IMPORTED_MODULE_28__["EditUserRegistrationComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'All', component: _CreateUsers_app_AllUserRegistration_component__WEBPACK_IMPORTED_MODULE_27__["AllUserRegistrationComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Assign',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Role', component: _AssignRole_app_AssignRole_component__WEBPACK_IMPORTED_MODULE_29__["AssignRoleComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'AllRole', component: _AssignRole_app_AllAssignRole_component__WEBPACK_IMPORTED_MODULE_30__["AllAssignRoleComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Payment',
                        component: _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__["AppUserLayoutComponent"],
                        children: [
                            { path: 'Details', component: _Payment_List_app_PaymentOverviewComponent__WEBPACK_IMPORTED_MODULE_33__["PaymentOverviewComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Renewal',
                        component: _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__["AppUserLayoutComponent"],
                        children: [
                            { path: 'Renew', component: _Renewal_app_Renewal_Component__WEBPACK_IMPORTED_MODULE_35__["RenewalComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Admin',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Dashboard', component: _AdminDashboard_app_AdminDashboardComponent__WEBPACK_IMPORTED_MODULE_39__["AdminDashboardComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'User',
                        component: _layout_app_userlayout_component__WEBPACK_IMPORTED_MODULE_44__["AppUserLayoutComponent"],
                        children: [
                            { path: 'Dashboard', component: _UserDashboard_app_UserDashboardComponent__WEBPACK_IMPORTED_MODULE_38__["UserDashboardComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] },
                            { path: 'Recepit/:PaymentID', component: _Recepit_app_generateRecepit_Component__WEBPACK_IMPORTED_MODULE_49__["GenerateRecepitComponent"], canActivate: [_AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]] }
                        ]
                    },
                    {
                        path: 'Report',
                        component: _layout_app_adminlayout_component__WEBPACK_IMPORTED_MODULE_37__["AppAdminLayoutComponent"],
                        children: [
                            { path: 'Member', component: _Reports_app_MemberDetailsReport_Component__WEBPACK_IMPORTED_MODULE_40__["MemberDetailsReportComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Yearwise', component: _Reports_app_YearwiseReport_Component__WEBPACK_IMPORTED_MODULE_41__["YearwiseReportComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Monthwise', component: _Reports_app_MonthwiseReport_Component__WEBPACK_IMPORTED_MODULE_42__["MonthwiseReportComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] },
                            { path: 'Renewal', component: _Reports_app_RenewalReport_Component__WEBPACK_IMPORTED_MODULE_43__["RenewalReportComponent"], canActivate: [_AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"]] }
                        ]
                    },
                    { path: 'Login', component: _Login_app_LoginComponent__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"] },
                    { path: 'AdminLogout', component: _Login_app_AdminLogout_Component__WEBPACK_IMPORTED_MODULE_45__["AdminLogoutComponent"] },
                    { path: 'UserLogout', component: _Login_app_UserLogout_Component__WEBPACK_IMPORTED_MODULE_46__["UserLogoutComponent"] },
                    { path: '', redirectTo: "Login", pathMatch: 'full' },
                    { path: '**', redirectTo: "Login", pathMatch: 'full' },
                ], { useHash: true })
            ],
            exports: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerModule"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _AuthGuard_AdminAuthGuardService__WEBPACK_IMPORTED_MODULE_47__["AdminAuthGuardService"], _AuthGuard_UserAuthGuardService__WEBPACK_IMPORTED_MODULE_48__["UserAuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\eVasool\AngularCoreGym\AngularCoreGym\ClientApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map