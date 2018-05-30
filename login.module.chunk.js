webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cover justify-content-center d-flex\">\r\n  <div class=\"row w-100 justify-content-center align-items-center\">\r\n    <div class=\"col-md-10\">\r\n      <router-outlet>\r\n      </router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"fixed-action-btn fab\" style=\"bottom: 45px; right: 24px;\">\r\n  <a mdbPageScroll href=\"#test1\" class=\"btn-floating blue white-text waves-light\" mdbRippleRadius>\r\n    <i class=\"fa fa-chevron-down\"></i>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"container\" id=\"test1\">\r\n  <div class=\"row mt-5 justify-content-center\">\r\n    <div class=\"col-md-5 text-center\">\r\n      <p>These field workers are in direct contact with Multichoice’s customer and are creating an experience which the customer\r\n        associates with the brand. There is a need to oversee and gain control of such activities as various touch points.\r\n      </p>\r\n      <div class=\"clearfix\"></div>\r\n      <a class=\"btn waves-effect waves-light blue\" href=\"mailto:admin@corona.com?Subject=Enquires\">Contact Admin</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/cover.png")) + ");\n  overflow-x: hidden;\n  background-size: cover;\n  min-height: 90vh;\n  margin-top: 69px; }\n\n.fab a i {\n  font-size: 1.1rem; }\n\n.cover > div {\n  margin: 0 1px; }\n\n.white-text h3 {\n  font-weight: 400;\n  font-size: 200%; }\n\n.card-body h4 {\n  text-transform: uppercase;\n  color: #004488; }\n\n.blue-text,\n.grey-text {\n  font-size: 80%; }\n\n.blue-text {\n  color: #004488; }\n\n.card-body button {\n  height: 50px;\n  margin-left: -0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typescripts_pro_preloader_preloader_service__ = __webpack_require__("../../../../../src/typescripts/pro/preloader/preloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authService, mdbSpinningPreloader) {
        this.router = router;
        this.authService = authService;
        this.mdbSpinningPreloader = mdbSpinningPreloader;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.mdbSpinningPreloader.stop();
        this.authService.checkAuth();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "body", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__typescripts_pro_preloader_preloader_service__["a" /* MDBSpinningPreloader */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_3_app_login_login_component__["a" /* LoginComponent */],
        children: [
            { path: "", loadChildren: "app/login/login-form/login-form.module#LoginFormModule" },
            { path: "reset-password", loadChildren: "app/login/reset-form/reset-form.module#ResetFormModule" },
            {
                path: "change-password",
                loadChildren: "app/login/change-password/change-password.module#ChangePasswordModule"
            },
            { path: "sign-up", loadChildren: "app/login/signup-form/signup-form.module#SignupFormModule" }
        ]
    }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_login_login_component__["a" /* LoginComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map