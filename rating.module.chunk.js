webpackJsonp(["rating.module"],{

/***/ "../../../../../src/app/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div #body class=\"row px-2 py-3 m-0\">\r\n    <div class=\"col-md-8 align-self-center\">\r\n        <h6 class=\"dark-text m-0\" *ngIf=\"ratingCount\">{{ ratingCount }} {{ ratingCount == 1 ? 'rating' : 'ratings'}}</h6>\r\n    </div>\r\n    <div class=\"col-12 col-md-4 px-0 py-1\">\r\n        <div class=\"input-group search-block\">\r\n            <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by Job title\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"(ratingService.fetchDone | async)\">\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>S/N</th>\r\n                <th>Job Title</th>\r\n                <th>Assigned to</th>\r\n                <th>Date Rated</th>\r\n                <th>Customer email</th>\r\n                <th>Rating</th>\r\n                <th>Additional info</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let rating of ratings | async; let i = index\" (click)=\"openModal(rating)\">\r\n                <th scope=\"row\">{{i + 1}}</th>\r\n                <td>\r\n                    <span *ngIf=\"tasks[rating.taskId]\">\r\n                        {{tasks[rating.taskId].title}}\r\n                    </span>\r\n                </td>\r\n                <td>{{getUserNameByUserId(rating.assignee)}}</td>\r\n                <td>{{convertDateTime(rating.createdAt, \"DD MMMM YYYY\")}}</td>\r\n                <td>customer@yahoo.com</td>\r\n                <td>\r\n                    <div class=\"stars justify-content-start\" [ngClass]=\"'star-'+ rating.rating\">\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                    </div>\r\n                </td>\r\n                <td>{{basicFunctions.formatChar(rating.additionalInfo)}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"ratingService.fetchDone | async\">\r\n    <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<div class=\"modal-container\">\r\n    <div mdbModal #ratingModal=\"mdb-modal\" class=\"modal fade\" id=\"modalViewCard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"displayCardModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body p-4\">\r\n\r\n                    <div class=\"rated\">\r\n                        <div class=\"rated__avatar\">\r\n                            <img *ngIf=\"users[ratingDetails.assignee]; else imgBlock\" [src]=\"users[ratingDetails.assignee].profilePicture !== 'url' ? users[ratingDetails.assignee].profilePicture : '../../assets/avatar.png'\"\r\n                                alt=\"Assignee's Picture\">\r\n                            <ng-template #imgBlock>\r\n                                <img src=\"../../assets/profile.jpg\" alt=\"Profile picture\">\r\n                            </ng-template>\r\n                        </div>\r\n                        <div class=\"rated__details\">\r\n                            <div class=\"detail\">\r\n                                <p class=\"small-text\">\r\n                                    job title\r\n                                </p>\r\n                                <h3 class=\"big-text bolder-text blue-text\" *ngIf=\"tasks[ratingDetails.taskId]\">\r\n                                    {{tasks[ratingDetails.taskId].title}}\r\n                                </h3>\r\n                            </div>\r\n                            <div class=\"detail\">\r\n                                <p class=\"small-text\">\r\n                                    job done by\r\n                                </p>\r\n                                <h3 class=\"big-text bolder-text\">\r\n                                    {{getUserNameByUserId(ratingDetails.assignee)}}\r\n                                </h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"stars py-1 mt-3\" [ngClass]=\"'star-'+ ratingDetails.rating\">\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                        <span class=\"fa fa-star star\"></span>\r\n                    </div>\r\n\r\n                    <p class=\"rated__text\">{{getRatingText(ratingDetails.rating)}}</p>\r\n                    <div class=\"detail\">\r\n                        <p class=\"small-text\">\r\n                            Additional comments\r\n                        </p>\r\n                        <h3 class=\"big-text bold-text\">\r\n                            {{ratingDetails.additionalInfo}}\r\n                        </h3>\r\n                    </div>\r\n\r\n                    <div class=\"detail\">\r\n                        <p class=\"small-text\">\r\n                            Customer\r\n                        </p>\r\n                        <h3 class=\"big-text bold-text\" *ngIf=\"tasks[ratingDetails.taskId]\">\r\n\r\n                            {{tasks[ratingDetails.taskId].templateFieldsValues.priorTemplate.customerName}}\r\n                        </h3>\r\n                    </div>\r\n\r\n                    <p class=\"close-rating\" (click)=\"closeModal()\">\r\n                        Close\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/rating/rating.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\ntable tr:nth-child(even) {\n  background-color: #f9f9f9; }\n\ntable tr:hover .table-icon {\n  visibility: visible; }\n\ntable th {\n  font-weight: 500;\n  cursor: pointer; }\n\ntable th,\ntable td {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-top: 1px solid #f9f9f9 !important;\n  color: #252525; }\n\ntable .bold-text {\n  font-weight: bold;\n  color: #4f4f4f; }\n\ntable .table-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\ntable .table-icon {\n  visibility: hidden;\n  color: #9a9a9a;\n  font-size: 1rem;\n  cursor: pointer; }\n\ntable .table-icon:not(:last-child) {\n    margin-right: 10px; }\n\ntable .table-icon--border {\n    visibility: hidden; }\n\ntable .fa-toggle-on {\n  color: #4caf50; }\n\n@media (max-width: 575px) {\n  table td,\n  th {\n    font-size: 0.6rem; }\n  .table-icons {\n    display: block !important; }\n  .table-icon {\n    visibility: visible !important;\n    width: 100% !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .table-icons {\n    visibility: visible;\n    display: block !important; } }\n\ntr:hover {\n  cursor: pointer; }\n\n.small-text {\n  margin: 0;\n  font-size: 10px;\n  color: #9a9a9a;\n  text-transform: capitalize; }\n\n.close-rating {\n  font-size: 14px;\n  font-weight: bold;\n  color: #004f91;\n  text-align: right;\n  text-transform: uppercase;\n  margin-bottom: 0;\n  margin-top: 0.5rem;\n  cursor: pointer; }\n\n.stars {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.stars .star {\n    margin: 0 0.4rem;\n    color: #9a9a9a; }\n\n.stars.star-1 .star:nth-child(-n + 1) {\n    color: #004f91; }\n\n.stars.star-2 :nth-child(-n + 2) {\n    color: #004f91; }\n\n.stars.star-3 :nth-child(-n + 3) {\n    color: #004f91; }\n\n.stars.star-4 :nth-child(-n + 4) {\n    color: #004f91; }\n\n.stars.star-5 :nth-child(-n + 5) {\n    color: #004f91; }\n\n.modal-content {\n  margin-top: 150px; }\n\n.rated {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.rated__avatar {\n    width: 69px;\n    height: 69px;\n    border-radius: 50%;\n    font-size: 10px;\n    line-height: 10px;\n    text-align: center;\n    overflow: hidden;\n    margin-right: 1rem; }\n\n.rated__avatar img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.rated__details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.rated__text {\n    font-size: 20px;\n    text-align: center; }\n\n.detail:not(:last-of-type) {\n  margin-bottom: 0.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_rating_rating__ = __webpack_require__("../../../../../src/app/shared/rating/rating.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_rating_rating_service__ = __webpack_require__("../../../../../src/app/shared/rating/rating.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utility_basic_functions__ = __webpack_require__("../../../../../src/app/shared/utility/basic-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RatingComponent = (function () {
    function RatingComponent(ratingService, userService, basicFunctions) {
        this.ratingService = ratingService;
        this.userService = userService;
        this.basicFunctions = basicFunctions;
        this.arrayToObject = function (array, keyField) {
            return array.reduce(function (obj, item) {
                obj[item[keyField]] = item;
                return obj;
            }, {});
        };
        this.ratingCount = 0;
        this.ratings = this.ratingService.ratings;
        this.ratingText = "";
        this.ratingDetails = new __WEBPACK_IMPORTED_MODULE_1__shared_rating_rating__["a" /* Rating */]();
        this.tasks = {};
        this.users = {};
    }
    RatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ratingService.getRatings().subscribe();
        this.ratings.subscribe(function (data) {
            _this.ratingCount = data.length;
        });
        this.ratingService.tasks.subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this.users = this.arrayToObject(this.userService.userBucket, "userId");
    };
    RatingComponent.prototype.convertDateTime = function (dateTime, format) {
        if (dateTime === 0 || dateTime === undefined) {
            return "-";
        }
        return __WEBPACK_IMPORTED_MODULE_4_moment__(new Date(dateTime)).format(format);
    };
    RatingComponent.prototype.getUserNameByUserId = function (userId) {
        return this.userService.getUserNameByUserId(userId);
    };
    RatingComponent.prototype.openModal = function (rating) {
        this.ratingDetails = rating;
        this.ratingModal.show();
    };
    RatingComponent.prototype.closeModal = function () {
        this.ratingModal.hide();
    };
    RatingComponent.prototype.getRatingText = function (stars) {
        switch (stars) {
            case 1:
                return (this.ratingText = "Very Poor!");
            case 2:
                return (this.ratingText = "Poor");
            case 3:
                return (this.ratingText = "Fairly Okay");
            case 4:
                return (this.ratingText = "Good Job");
            case 5:
                return (this.ratingText = "Excellent");
            default:
                return (this.ratingText = "");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_12" /* ViewChild */])("ratingModal"),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "ratingModal", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-rating",
            template: __webpack_require__("../../../../../src/app/rating/rating.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_rating_rating_service__["a" /* RatingService */],
            __WEBPACK_IMPORTED_MODULE_0__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_utility_basic_functions__["a" /* BasicFunctions */]])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rating/rating.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_rating_rating_component__ = __webpack_require__("../../../../../src/app/rating/rating.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_rating_rating_component__["a" /* RatingComponent */] }];
var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_rating_rating_component__["a" /* RatingComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], RatingModule);
    return RatingModule;
}());



/***/ })

});
//# sourceMappingURL=rating.module.chunk.js.map