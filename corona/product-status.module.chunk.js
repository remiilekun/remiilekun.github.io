webpackJsonp(["product-status.module"],{

/***/ "../../../../../src/app/stock/product-status/product-status.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-status works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/stock/product-status/product-status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock/product-status/product-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStatusComponent; });
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

var ProductStatusComponent = (function () {
    function ProductStatusComponent() {
    }
    ProductStatusComponent.prototype.ngOnInit = function () { };
    ProductStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-product-status",
            template: __webpack_require__("../../../../../src/app/stock/product-status/product-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stock/product-status/product-status.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductStatusComponent);
    return ProductStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stock/product-status/product-status.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStatusModule", function() { return ProductStatusModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_stock_product_status_product_status_component__ = __webpack_require__("../../../../../src/app/stock/product-status/product-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_stock_product_status_product_status_component__["a" /* ProductStatusComponent */] }];
var ProductStatusModule = (function () {
    function ProductStatusModule() {
    }
    ProductStatusModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_stock_product_status_product_status_component__["a" /* ProductStatusComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ProductStatusModule);
    return ProductStatusModule;
}());



/***/ })

});
//# sourceMappingURL=product-status.module.chunk.js.map