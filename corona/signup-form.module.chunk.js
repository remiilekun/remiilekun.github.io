webpackJsonp(["signup-form.module"],{

/***/ "../../../../../src/app/login/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup-form works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/signup-form/signup-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupFormComponent = (function () {
    function SignupFormComponent() {
    }
    SignupFormComponent.prototype.ngOnInit = function () { };
    SignupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-signup-form",
            template: __webpack_require__("../../../../../src/app/login/signup-form/signup-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/signup-form/signup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/signup-form/signup-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormModule", function() { return SignupFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_login_signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/login/signup-form/signup-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_login_signup_form_signup_form_component__["a" /* SignupFormComponent */] }];
var SignupFormModule = (function () {
    function SignupFormModule() {
    }
    SignupFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_login_signup_form_signup_form_component__["a" /* SignupFormComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], SignupFormModule);
    return SignupFormModule;
}());



/***/ })

});
//# sourceMappingURL=signup-form.module.chunk.js.map