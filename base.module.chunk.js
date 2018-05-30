webpackJsonp(["base.module"],{

/***/ "../../../../../src/app/base/base.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-sidenav #sidenav class=\"side-nav-light\">\r\n  <li>\r\n    <ul class=\"collapsible collapsible-accordion\">\r\n      <mdb-squeezebox [multiple]=\"false\" aria-multiselectable=\"false\">\r\n\r\n        <mdb-item class=\"no-collase\">\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-dashboard\" aria-hidden=\"true\"></i>Dashboard</mdb-item-head>\r\n          <mdb-item-body></mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item class=\"no-collase\">\r\n          <mdb-item-head mdbRippleRadius routerLink=\"activity-widget\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n            <i class=\"fa fa-street-view\" aria-hidden=\"true\"></i>Activity Widget</mdb-item-head>\r\n          <mdb-item-body></mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item>\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-bar-chart-o\" aria-hidden=\"true\"></i>Business Reporting</mdb-item-head>\r\n          <mdb-item-body>\r\n          </mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item>\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Workforce</mdb-item-head>\r\n          <mdb-item-body>\r\n            <ul>\r\n              <li>\r\n                <a routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>User Management</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"roles\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Role Management</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"regions\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Region Management</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"areas\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Area Management</a>\r\n              </li>\r\n            </ul>\r\n          </mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item>\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>Stock Management</mdb-item-head>\r\n          <mdb-item-body>\r\n            <ul>\r\n              <li>\r\n                <a routerLink=\"stock/momAndPops\" routerLinkActive=\"active\" class=\"waves-effect\" mdbRippleRadius>Mom and Pops Mgt</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"waves-effect\" mdbRippleRadius>Stock at Hand</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"waves-effect\" mdbRippleRadius>Stock in Transit</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"waves-effect\" mdbRippleRadius>Product Status</a>\r\n              </li>\r\n              <li>\r\n                <a class=\"waves-effect\" mdbRippleRadius>Pricebook</a>\r\n              </li>\r\n            </ul>\r\n          </mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item *ngIf=\"userPermissions && userPermissions.corona_web_task_mgt\">\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Task Management</mdb-item-head>\r\n          <mdb-item-body>\r\n            <ul>\r\n\r\n              <li>\r\n                <a routerLink=\"tasks/active\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Active Tasks</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"tasks/escalated\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Escalated Tasks</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"tasks/inactive\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Inactive Tasks</a>\r\n              </li>\r\n\r\n              <li>\r\n                <a routerLink=\"tasks/archived\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Archived Tasks</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"tasks/review\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Task Review</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"templates\" routerLinkActive=\"active\" (click)=\"closeNav()\" class=\"waves-effect\" mdbRippleRadius>Templates</a>\r\n              </li>\r\n            </ul>\r\n          </mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item>\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i>Decoder Management</mdb-item-head>\r\n          <mdb-item-body>\r\n            <ul>\r\n              <li>\r\n                <a href=\"javascript:void(0)\">Subscription Payment</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0)\">Decoder Activation</a>\r\n              </li>\r\n            </ul>\r\n          </mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item class=\"no-collase\">\r\n          <mdb-item-head mdbRippleRadius routerLink=\"ratings\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n            <i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>Ratings and Feedback</mdb-item-head>\r\n          <mdb-item-body></mdb-item-body>\r\n        </mdb-item>\r\n\r\n        <mdb-item>\r\n          <mdb-item-head mdbRippleRadius>\r\n            <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>Settings</mdb-item-head>\r\n          <mdb-item-body>\r\n            <ul>\r\n            </ul>\r\n          </mdb-item-body>\r\n        </mdb-item>\r\n\r\n      </mdb-squeezebox>\r\n    </ul>\r\n  </li>\r\n</mdb-sidenav>\r\n<section id=\"body\" class=\"p-4\">\r\n  <router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/base/base.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section#body {\n  margin-top: 69px; }\n\n:host ::ng-deep .dropdown-toggle {\n  color: white !important; }\n\n:host ::ng-deep .fa {\n  display: inline-block;\n  width: 16px;\n  text-align: center; }\n\n:host ::ng-deep .sidenav-toggle {\n  color: white !important;\n  font-size: 25px; }\n\n@media (max-width: 992px) {\n  :host ::ng-deep a.dropdown-toggle span {\n    visibility: hidden; } }\n\n:host ::ng-deep .accordion {\n  margin-top: 80px; }\n\n:host ::ng-deep .side-nav .sidenav-bg {\n  background-color: white; }\n\n:host ::ng-deep .side-nav.side-nav-light .collapsible .card .card-header a h5 {\n  font-weight: 400; }\n\n:host ::ng-deep .side-nav.side-nav-light .collapsible .card-body li a {\n  background-color: white;\n  color: grey; }\n\n:host ::ng-deep .collapsible .collapsible-accordion mdb-item {\n  line-height: 1.5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_sidenav_service__ = __webpack_require__("../../../../../src/app/shared/sidenav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseComponent = (function () {
    function BaseComponent(sideNavService, userService, authService) {
        this.sideNavService = sideNavService;
        this.userService = userService;
        this.authService = authService;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.sidenav.hide();
        if (this.authService.getUser()) {
            this.userPermissions = this.authService.getUser().permissions;
        }
    };
    BaseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sideNavService.sidenav.subscribe(function (toggle) {
            if (toggle) {
                _this.sidenav.toggle();
            }
            else {
                _this.sidenav.hide();
            }
        });
    };
    BaseComponent.prototype.closeNav = function () {
        this.sidenav.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* ViewChild */])("sidenav"),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "sidenav", void 0);
    BaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-base",
            template: __webpack_require__("../../../../../src/app/base/base.component.html"),
            styles: [__webpack_require__("../../../../../src/app/base/base.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_sidenav_service__["a" /* SideNavService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_user_auth_service__["a" /* AuthService */]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/base/base.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/user/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_3_app_base_base_component__["a" /* BaseComponent */],
        children: [
            {
                path: "activity-widget",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/activity-widget/activity-widget.module#ActivityWidgetModule"
            },
            {
                path: "roles",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/role/role.module#RoleModule"
            },
            {
                path: "tasks",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/task/task.module#TaskModule"
            },
            {
                path: "templates",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/template/template.module#TemplateModule"
            },
            {
                path: "regions",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/region/region.module#RegionModule"
            },
            {
                path: "areas",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/area-of-operation/area-of-operation.module#AreaOfOperationModule"
            },
            {
                path: "user-management",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/user/user.module#UserModule"
            },
            {
                path: "profile",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/profile/profile.module#ProfileModule"
            },
            {
                path: "notifications",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/notification/notification.module#NotificationModule"
            },
            {
                path: "ratings",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/rating/rating.module#RatingModule"
            },
            {
                path: "stock",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/stock/stock.module#StockModule"
            },
            {
                path: "",
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_app_shared_user_auth_guard_service__["a" /* AuthGuard */]],
                loadChildren: "app/user/user.module#UserModule"
            } // change this to be the home route
        ]
    }
];
var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_base_base_component__["a" /* BaseComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ })

});
//# sourceMappingURL=base.module.chunk.js.map