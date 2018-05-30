webpackJsonp(["feedback.module"],{

/***/ "../../../../../src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cover justify-content-center d-flex\">\r\n  <div class=\"row w-100 justify-content-center align-items-center\">\r\n    <div class=\"col-md-4 col-sm-6 col-12\" [hidden]=\"rated\">\r\n      <div class=\"card p-5\">\r\n        <h3 class=\"header\">Dear\r\n          <span class=\"blue-text\">{{ task.templateFieldsValues.priorTemplate.customerName }}</span>,\r\n          <br> thanks from taking the time to review this job.\r\n        </h3>\r\n\r\n        <p *ngIf=\"feedbackType\" class=\"se my-1\" [ngClass]=\"{'text-danger':feedbackType === 'error', 'text-success':feedbackType === 'success'}\">\r\n          {{feedbackMessage}}\r\n        </p>\r\n\r\n        <div class=\"rated\">\r\n          <div class=\"rated__avatar\">\r\n            <img [src]=\"assignee.profilePicture\" alt=\"Assignee's Picture\">\r\n          </div>\r\n          <div class=\"rated__details\">\r\n            <div class=\"detail\">\r\n              <p class=\"small-text\">\r\n                job title\r\n              </p>\r\n              <h3 class=\"big-text bolder-text blue-text\">\r\n                {{task.title}}\r\n              </h3>\r\n            </div>\r\n            <div class=\"detail\">\r\n              <p class=\"small-text\">\r\n                job done by\r\n              </p>\r\n              <h3 class=\"big-text bolder-text\">\r\n                {{assignee.getFullName()}}\r\n              </h3>\r\n            </div>\r\n\r\n            <div class=\"detail detail--2\">\r\n              <p class=\"detail__text\">\r\n                <i class=\"fa fa-building\"></i> {{task.location.address}}\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"detail detail--2\">\r\n              <p class=\"detail__text\">\r\n                <i class=\"fa fa-calendar\"></i> {{convertDateTime(task.endDateTime, \"DD MMMM YYYY\")}}\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"detail detail--2\">\r\n              <p class=\"detail__text\">\r\n                <i class=\"fa fa-clock-o\"></i> {{convertDateTime(task.endDateTime, \"hh:mma\")}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"stars\" [ngClass]=\"'star-' + rating.rating\">\r\n          <span (click)=\"changeStar(1)\" class=\"fa fa-star star\"></span>\r\n          <span (click)=\"changeStar(2)\" class=\"fa fa-star star\"></span>\r\n          <span (click)=\"changeStar(3)\" class=\"fa fa-star star\"></span>\r\n          <span (click)=\"changeStar(4)\" class=\"fa fa-star star\"></span>\r\n          <span (click)=\"changeStar(5)\" class=\"fa fa-star star\"></span>\r\n        </div>\r\n\r\n        <p class=\"rated__text\">{{ratingText}}</p>\r\n\r\n\r\n        <form #feedbackForm=\"ngForm\" novalidate>\r\n          <div class=\"md-form my-3\">\r\n            <input [disabled]=\"ratingFound\" type=\"text\" [ngClass]=\"{'border-0': ratingFound}\" name=\"additionalInfo\" id=\"additionalInfo\"\r\n              [(ngModel)]=\"rating.additionalInfo\" class=\"form-control\" mdbActive>\r\n            <label class=\"label\" [ngClass]=\"{'active': ratingFound}\" for=\"additionalInfo\">Additional info</label>\r\n          </div>\r\n\r\n        </form>\r\n\r\n        <p class=\"extra\">Wrong Job?\r\n          <a href=\"mailto:helpdesk@multichoice.com?subject=WRONG JOB FOR FEEDBACK RATINGS\">Send mail</a> to report\r\n        </p>\r\n\r\n        <div class=\"btns w-100 d-flex justify-content-end py-2\" *ngIf=\"!ratingFound\">\r\n          <button class=\"btn text-uppercase\" mdbRippleRadius>Cancel</button>\r\n          <button class=\"btn text-uppercase\" (click)=\"createRating()\" mdbRippleRadius [disabled]=\"!rating.rating\">Submit</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-3 col-sm-6 col-12\" [hidden]=\"!rated\">\r\n      <div class=\"card px-4 py-5\">\r\n        <img class=\"img-fluid\" src=\"../../../assets/svg/feedbackSmiley.svg\" alt=\"Add New\">\r\n        <p class=\"rated__done-text\">\r\n\r\n          Thanks for your feedback\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 2rem; }\n\n.blue-text {\n  color: #2196f3; }\n\n.small-text {\n  margin: 0;\n  font-size: 10px;\n  color: #9a9a9a;\n  text-transform: capitalize; }\n\n.se {\n  font-size: 16px;\n  font-weight: 500; }\n\n.label {\n  font-size: 12px; }\n\n.extra {\n  ize: 14px;\n  margin: 0; }\n\n.extra font-s\n.se {\n    font-size: 16px;\n    font-weight: 500; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.bold-text {\n  font-weight: bolder; }\n\n.bolder-text {\n  font-weight: bold; }\n\n.cover {\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/cover.png")) + ");\n  overflow-x: hidden;\n  background-size: cover;\n  min-height: calc(100vh - 69px);\n  margin-top: 69px; }\n\n.card {\n  border-radius: 0 !important; }\n\n.rated {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin-bottom: 5rem; }\n\n.rated__avatar {\n    width: 67px;\n    height: 67px;\n    border-radius: 50%;\n    font-size: 10px;\n    line-height: 10px;\n    text-align: center;\n    overflow: hidden;\n    margin-right: 1rem; }\n\n.rated__avatar img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.rated__details {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\n.rated__details .detail {\n      margin-bottom: 0.35rem; }\n\n.rated__details .detail--2 {\n        margin-bottom: 0.1rem; }\n\n.rated__details .detail--2 .fa {\n          padding: 0;\n          width: 20px; }\n\n.rated__details .detail__text {\n        font-size: 13px;\n        color: #9a9a9a;\n        margin: 0; }\n\n.rated__details .detail__text i {\n          color: #000; }\n\n.rated__text {\n    font-size: 24px;\n    text-align: center;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem; }\n\n.rated__done-text {\n    font-size: 25px;\n    font-weight: 500;\n    text-align: center;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    color: #004488; }\n\n.stars {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.stars .star {\n    font-size: 25px;\n    margin: 0 0.4rem;\n    -webkit-transition: 0.5s all;\n    transition: 0.5s all; }\n\n.stars.star-1 .star:nth-child(-n + 1) {\n    color: #2196f3; }\n\n.stars.star-2 :nth-child(-n + 2) {\n    color: #2196f3; }\n\n.stars.star-3 :nth-child(-n + 3) {\n    color: #2196f3; }\n\n.stars.star-4 :nth-child(-n + 4) {\n    color: #2196f3; }\n\n.stars.star-5 :nth-child(-n + 5) {\n    color: #2196f3; }\n\n.btns .btn {\n  padding: 0.4rem 1.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btns .btn:last-child {\n    padding-right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typescripts_pro_preloader_preloader_service__ = __webpack_require__("../../../../../src/typescripts/pro/preloader/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_task_task__ = __webpack_require__("../../../../../src/app/shared/task/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_user_user__ = __webpack_require__("../../../../../src/app/shared/user/user.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FeedbackComponent = (function () {
    function FeedbackComponent(http, router, route, mdbSpinningPreloader) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.mdbSpinningPreloader = mdbSpinningPreloader;
        this.userUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.USER_BASE_URL;
        this.taskUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.TASK_BASE_URL;
        this.ratingUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.RATING_BASE_URL + "/rating";
        this.ids = {};
        this.ratingText = "";
        this.task = new __WEBPACK_IMPORTED_MODULE_6__shared_task_task__["a" /* Task */]();
        this.assignee = new __WEBPACK_IMPORTED_MODULE_7__shared_user_user__["a" /* User */]();
        this.rated = false;
        this.ratingFound = false;
        this.feedbackType = "";
        this.feedbackMessage = "";
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mdbSpinningPreloader.start();
        this.rating = {
            taskId: "",
            rating: 0,
            queryString: "",
            assignee: "",
            additionalInfo: ""
        };
        this.route.queryParams.subscribe(function (params) {
            var query = params.q;
            _this.query = query;
            var splitIds = query.split("--");
            _this.ids["task"] = splitIds[0];
            _this.ids["assignee"] = splitIds[1];
            _this.checkRating(query).subscribe(function (resp) {
                if (resp["status"]) {
                    _this.rating = resp["data"][0];
                    _this.ratingFound = true;
                }
            });
            if (_this.ids["task"]) {
                _this.getTask(_this.ids["task"]).subscribe(function (response) {
                    if (response["status"]) {
                        var task = response["data"];
                        _this.task = task[Object.keys(task)[0]];
                        _this.getUser(_this.ids["assignee"]).subscribe(function (resp) {
                            var assignee = resp["data"];
                            _this.assignee = Object.assign(new __WEBPACK_IMPORTED_MODULE_7__shared_user_user__["a" /* User */](), assignee);
                            _this.mdbSpinningPreloader.stop();
                        });
                    }
                    else {
                        // this.router.navigate(["/404"]);
                        _this.mdbSpinningPreloader.stop();
                    }
                }, function (err) {
                    // this.router.navigate(["/404"]);
                    _this.mdbSpinningPreloader.stop();
                });
            }
            else {
                // this.router.navigate(["/404"]);
                _this.mdbSpinningPreloader.stop();
            }
        });
    };
    FeedbackComponent.prototype.convertDateTime = function (dateTime, format) {
        if (dateTime === 0 || undefined) {
            return "-";
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(dateTime)).format(format);
    };
    FeedbackComponent.prototype.checkRating = function (query) {
        return this.http.get(this.ratingUrl + "s?queryString=" + query);
    };
    FeedbackComponent.prototype.getUser = function (id) {
        return this.http.get(this.userUrl + "/user/" + id + "?forRating=true");
    };
    FeedbackComponent.prototype.getTask = function (id) {
        return this.http.get(this.taskUrl + "/task/" + id);
    };
    FeedbackComponent.prototype.createRating = function () {
        var _this = this;
        this.feedbackMessage = "";
        this.feedbackType = "";
        var rating = __assign({}, this.rating, { taskId: this.ids["task"], queryString: this.query, assignee: this.assignee["deletedAt"] ? this.assignee.getFullName() : this.ids["assignee"] });
        if (this.rating["additionalInfo"].length) {
            rating["additionalInfo"] = this.rating["additionalInfo"];
        }
        else {
            delete rating["additionalInfo"];
        }
        return this.http.put(this.ratingUrl, rating, { observe: "response" }).subscribe(function (data) {
            if (data.status === 200) {
                _this.feedbackType = "success";
                _this.feedbackMessage = data.body["message"];
                _this.rated = true;
            }
        }, function (err) {
            _this.feedbackType = "error";
            _this.feedbackMessage = err.error["error"];
        });
    };
    FeedbackComponent.prototype.changeStar = function (stars) {
        if (!this.ratingFound) {
            this.rating["rating"] = stars;
            switch (stars) {
                case 1:
                    this.ratingText = "Very Poor!";
                    break;
                case 2:
                    this.ratingText = "Poor";
                    break;
                case 3:
                    this.ratingText = "Fairly Okay";
                    break;
                case 4:
                    this.ratingText = "Good Job";
                    break;
                case 5:
                    this.ratingText = "Excellent";
                    break;
                default:
                    this.ratingText = "";
                    break;
            }
        }
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-feedback",
            template: __webpack_require__("../../../../../src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__typescripts_pro_preloader_preloader_service__["a" /* MDBSpinningPreloader */]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feedback/feedback.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_feedback_feedback_component__["a" /* FeedbackComponent */] }];
var FeedbackModule = (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_feedback_feedback_component__["a" /* FeedbackComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());



/***/ })

});
//# sourceMappingURL=feedback.module.chunk.js.map