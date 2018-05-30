webpackJsonp(["login-form.module"],{

/***/ "../../../../../src/app/login/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div #body class=\"row align-items-center login\">\r\n  <div class=\"col-md-2\"></div>\r\n  <div class=\"col-sm-8 col-md-4 m-0 py-3\">\r\n    <div class=\"white-text text-center text-lg-left m-0 \">\r\n      <h3 class=\"login-desc\">Monitor and track operation of certain field activities</h3>\r\n      <h6 style=\"font-weight:300;\">A simple and easy-to-use tool for daily field activities by providing a mobile and web application for workflow automation\r\n      </h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"login-card col-sm-10 col-md-5 col-lg-4 m-0 py-3\">\r\n    <!--Card-->\r\n    <div class=\"card\">\r\n\r\n      <!--Card content-->\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"card-body p-5\">\r\n          <!--Title-->\r\n          <h4 class=\"card-title login-card-title m-0 py-3\">Login</h4>\r\n          <!--Text-->\r\n\r\n          <!-- Form login -->\r\n          <p *ngIf=\"error\" class=\"text-danger m-0 py-2\">{{error}} </p>\r\n          <form (ngSubmit)=\"f.form.valid && loginUser()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"md-form my-3\" [ngClass]=\"{ 'has-error': f.submitted && !userName }\">\r\n              <input type=\"email\" #usernameInput placeholder=\"Username\" id=\"defaultForm-email\" [focus]=\"focus\" class=\"form-control login-form\"\r\n                [class.is-invalid]=\"showError\" name=\"userName\" [(ngModel)]=\"userName\" mdbActive>\r\n              <!-- <label for=\"defaultForm-email\">Username</label> -->\r\n            </div>\r\n\r\n            <div class=\"md-form my-3 mb-0\" [ngClass]=\"{ 'has-error': f.submitted && !password }\">\r\n              <input [type]=\"passwordType\" #passwordInput placeholder=\"Password\" id=\"defaultForm-pass\" class=\"form-control login-form\"\r\n                [class.is-invalid]=\"showError\" name=\"password\" [(ngModel)]=\"password\" mdbActive>\r\n              <i class=\"fa fa-eye-slash showPassword\" (click)=\"togglePasswordField()\" [class.fa-eye]=\"showPassword\"></i>\r\n              <!-- <label for=\"defaultForm-pass\">Password</label> -->\r\n            </div>\r\n\r\n            <div class=\"text-center\">\r\n              <button class=\"btn blue login-btn col-sm-10 col-md-12 p-0\">\r\n                <span *ngIf=\"!loading\">Login</span>\r\n                <div *ngIf=\"loading\" class=\"loading-dots\">\r\n                  <h1 class=\"dot one\">.</h1>\r\n                  <h1 class=\"dot two\">.</h1>\r\n                  <h1 class=\"dot three\">.</h1>\r\n                </div>\r\n\r\n              </button>\r\n              <span class=\"float-right blue-text login-link small-text mt-1\" (click)=\"reset()\">Forgot Password?</span>\r\n\r\n\r\n            </div>\r\n\r\n          </form>\r\n          <!-- Form login -->\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <!--/.Card-->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-desc {\n  font-weight: 400;\n  font-size: 200%; }\n\n.login-card-title {\n  text-transform: uppercase;\n  color: #004488; }\n\n.login-link {\n  cursor: pointer; }\n\n.login-btn {\n  height: 50px;\n  margin-left: -0px; }\n\n.login-form {\n  width: 95%;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem; }\n\n.small-text {\n  font-size: 80%; }\n\n.showPassword {\n  bottom: 2px;\n  right: 5px;\n  height: 24px;\n  position: absolute;\n  margin-bottom: 0.6rem;\n  margin-top: 0.5rem;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typescripts_pro_alerts__ = __webpack_require__("../../../../../src/typescripts/pro/alerts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(router, authService, toastrService) {
        this.router = router;
        this.authService = authService;
        this.toastrService = toastrService;
        this.loading = false;
        this.error = "";
        this.showError = false;
        this.showPassword = false;
        this.passwordType = "password";
        this.userName = "";
        this.password = "";
        this.focus = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.body.nativeElement.click();
        this.focus = true;
    };
    LoginFormComponent.prototype.reset = function () {
        this.router.navigate(["/login/reset-password"]);
    };
    LoginFormComponent.prototype.loginUser = function () {
        var _this = this;
        this.loading = true;
        this.error = "";
        this.showError = false;
        this.authService.login(this.userName, this.password).subscribe(function (result) {
            if (result["value"] === true) {
                _this.router.navigate(["/home"]);
                _this.loading = false;
                var options = {
                    closeButton: true,
                    tapToDismiss: false,
                    timeOut: 0,
                    extendedTimeOut: 0
                };
                if (result["needPasswordChange"]) {
                    _this.toastrService.warning("Kindly reset your password now", "Your account will be blocked", options);
                }
            }
            else {
                _this.error = "Invalid grant";
                _this.loading = false;
            }
        }, function (error) {
            _this.loading = false;
            _this.error = "Username or Password is incorrect";
            _this.showError = true;
        });
    };
    LoginFormComponent.prototype.togglePasswordField = function () {
        this.showPassword = !this.showPassword;
        if (this.showPassword) {
            this.passwordType = "text";
        }
        else {
            this.passwordType = "password";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "body", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("usernameInput"),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "usernameInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("passwordInput"),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "passwordInput", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-login-form",
            template: __webpack_require__("../../../../../src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__typescripts_pro_alerts__["b" /* ToastService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormModule", function() { return LoginFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login/login-form/login-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_login_login_form_login_form_component__["a" /* LoginFormComponent */] }];
var LoginFormModule = (function () {
    function LoginFormModule() {
    }
    LoginFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_login_login_form_login_form_component__["a" /* LoginFormComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], LoginFormModule);
    return LoginFormModule;
}());



/***/ })

});
//# sourceMappingURL=login-form.module.chunk.js.map