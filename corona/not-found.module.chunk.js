webpackJsonp(["not-found.module"],{

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row justify-content-center align-items-center nf-container w-100 m-0\">\r\n  <div class=\"col col-sm-7 col-md-5 px-2\">\r\n    <div class=\"not-found text-center\">\r\n      <img src=\"../../assets/error.svg\" alt=\"Error Satellite\" class=\"img-fluid\">\r\n      <h1 class=\"nf-header font-weight-bold\">\r\n        Page Not Found (404)\r\n      </h1>\r\n      <p class=\"nf-text\">\r\n        The Page you were looking for was moved, removed, renamed or might have never existed.\r\n        <a href=\"/\">Take me back</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nf-container {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.nf-header {\n  font-size: 30px;\n  color: #4a4a4a; }\n\n.nf-text {\n  font-size: 18px;\n  color: #4a4a4a; }\n\n.nf-text a {\n    color: #1189f3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typescripts_pro_preloader_preloader_service__ = __webpack_require__("../../../../../src/typescripts/pro/preloader/preloader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent(mdbSpinningPreloader) {
        this.mdbSpinningPreloader = mdbSpinningPreloader;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.mdbSpinningPreloader.stop();
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-not-found",
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__typescripts_pro_preloader_preloader_service__["a" /* MDBSpinningPreloader */]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_not_found_not_found_component__["a" /* NotFoundComponent */] }];
var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_not_found_not_found_component__["a" /* NotFoundComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

});
//# sourceMappingURL=not-found.module.chunk.js.map