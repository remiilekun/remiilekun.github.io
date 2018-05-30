webpackJsonp(["notification.module"],{

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid notification-container\">\r\n  <div class=\"col-12 col-sm-8 col-md-7 col-lg-6\">\r\n    <div class=\"card notification-card\">\r\n      <div>\r\n        <p class=\"notification-card-header\">\r\n          Your notifications\r\n        </p>\r\n      </div>\r\n\r\n      <h6 class=\" my-2\" *ngIf=\"!noteCount; else noteBlock\">You have no notifications</h6>\r\n\r\n      <ng-template #noteBlock>\r\n        <div class=\"notification-block\">\r\n          <div class=\"notification-block-title\">Today</div>\r\n          <div *ngIf=\"notifications | async | sortNotifications: 'todayCount'; else todayBlock\">\r\n            <div class=\"notification-card-item\" (click)=\"readNotification(note)\" [ngClass]=\"{'unread': !note.isRead}\" *ngFor=\"let note of notifications | async | sortNotifications: 'today'\">\r\n              <div class=\"notification-card-item-image\">\r\n                <p class=\"letter-bg\" [ngClass]=\"'letter-bg-' + getFirstLetter(getUserNameByUserId(note.actorId))\">\r\n                  {{ getFirstLetter(getUserNameByUserId(note.actorId)) }}\r\n                </p>\r\n              </div>\r\n              <div class=\"notification-card-item-detail\">\r\n                <p class=\"notification-card-item-text\">\r\n                  <span>{{ note.actorId !== \"null\" ? getUserNameByUserId(note.actorId): \"\" }}</span>{{ note.action }}\r\n                </p>\r\n                <div class=\"notification-card-item-time\">\r\n                  <p class=\"mb-0\">{{ friendlyDate(note.createdAt) }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ng-template #todayBlock>\r\n            <h6 class=\" my-2\">You have no new notifications today</h6>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <div *ngIf=\"notifications | async | sortNotifications: 'earlierCount'\" class=\"notification-block\">\r\n          <div class=\"notification-block-title\">Previous</div>\r\n          <div class=\"notification-card-item\" (click)=\"readNotification(note)\" [ngClass]=\"{'unread': !note.isRead}\" *ngFor=\"let note of notifications | async | sortNotifications: 'earlier'\">\r\n            <div class=\"notification-card-item-image\">\r\n              <p class=\"letter-bg\" [ngClass]=\"'letter-bg-' + getFirstLetter(getUserNameByUserId(note.actorId))\">\r\n                {{ getFirstLetter(getUserNameByUserId(note.actorId)) }}\r\n              </p>\r\n            </div>\r\n            <div class=\"notification-card-item-detail\">\r\n              <p class=\"notification-card-item-text\">\r\n                <span>{{ note.actorId !== \"null\" ? getUserNameByUserId(note.actorId): \"\"}}</span>{{ note.action }}\r\n              </p>\r\n              <div class=\"notification-card-item-time\">\r\n                <p class=\"mb-0\">{{ friendlyDate(note.createdAt) }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notification-container {\n  background: #f4f4f4;\n  position: absolute;\n  top: 69px;\n  left: 0;\n  width: 100%;\n  min-height: calc(100vh - 69px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 1.5rem 0; }\n\n.notification-block {\n  margin-bottom: 1rem; }\n\n.notification-block-title {\n    text-transform: uppercase;\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.2px;\n    margin-bottom: 10px; }\n\n.notification-card {\n  width: 100%;\n  padding: 1.5rem; }\n\n.notification-card::-webkit-scrollbar {\n    width: 8px; }\n\n.notification-card::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 79, 145, 0.3);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 79, 145, 0.3);\n    border-radius: 10px; }\n\n.notification-card::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    box-shadow: inset 0 0 6px rgba(0, 79, 145, 0.5);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 79, 145, 0.5);\n    background: rgba(0, 79, 145, 0.3); }\n\n.notification-card-header {\n    color: #004f91;\n    text-transform: uppercase;\n    display: inline-block;\n    min-width: 10px;\n    font-weight: bold;\n    border-bottom: 2px solid #004f91; }\n\n.notification-card-item {\n    padding: 0.3rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    position: relative;\n    border-bottom: 1px solid #dddfe2;\n    cursor: pointer; }\n\n.notification-card-item.unread {\n      background: #edf2fa; }\n\n.notification-card-item-image {\n      width: 25px;\n      height: 25px;\n      border-radius: 50%;\n      font-size: 10px;\n      line-height: 10px;\n      text-align: center;\n      overflow: hidden;\n      margin-right: 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.notification-card-item-image img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n\n.notification-card-item-image p {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        font-size: 16px;\n        line-height: 26px;\n        color: #fff; }\n\n.notification-card-item-detail {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 7px 0; }\n\n@media (max-width: 767px) {\n        .notification-card-item-detail {\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column; } }\n\n.notification-card-item-text {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      margin: 0;\n      font-size: 12px;\n      color: #9a9a9a; }\n\n.notification-card-item-text span {\n        font-weight: bold; }\n\n.notification-card-item-time {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 32%;\n              flex: 0 0 32%;\n      margin: 0;\n      text-align: right;\n      font-size: 10px;\n      color: #9a9a9a; }\n\n@media (max-width: 767px) {\n        .notification-card-item-time {\n          text-align: left; } }\n\n.letter-bg {\n  text-transform: uppercase; }\n\n.letter-bg-a, .letter-bg-f, .letter-bg-k, .letter-bg-p, .letter-bg-u, .letter-bg-z {\n    background: red; }\n\n.letter-bg-b, .letter-bg-g, .letter-bg-l, .letter-bg-q, .letter-bg-v {\n    background: blue; }\n\n.letter-bg-c, .letter-bg-h, .letter-bg-m, .letter-bg-r, .letter-bg-w {\n    background: green; }\n\n.letter-bg-d, .letter-bg-i, .letter-bg-n, .letter-bg-s, .letter-bg-x {\n    background: yellowgreen; }\n\n.letter-bg-e, .letter-bg-j, .letter-bg-o, .letter-bg-t, .letter-bg-y {\n    background: orangered; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_notification_notification_service__ = __webpack_require__("../../../../../src/app/shared/notification/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utility_basic_functions__ = __webpack_require__("../../../../../src/app/shared/utility/basic-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotificationComponent = (function () {
    function NotificationComponent(userService, notificationService, basicFunctions, router) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.basicFunctions = basicFunctions;
        this.router = router;
        this.readNoteCount = 0;
        this.noteCount = 0;
        this.notifications = this.notificationService.notifications;
        this.revisedNotifications = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.groupNotificationsByDate();
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifications.subscribe(function (data) {
            _this.noteCount = data.length;
            _this.readNoteCount = data.filter(function (note) { return !note.isRead; }).length;
            var temp = [];
        });
    };
    NotificationComponent.prototype.getUserNameByUserId = function (userId) {
        return this.userService.getUserNameByUserId(userId);
    };
    NotificationComponent.prototype.getFirstLetter = function (name) {
        return name.toLowerCase()[0];
    };
    NotificationComponent.prototype.friendlyDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(new Date(date)).format("llll");
    };
    NotificationComponent.prototype.readNotification = function (notification) {
        this.notificationService.readNotification(notification);
        var link = notification.subject.split("-")[0];
        this.router.navigate(["/home/tasks/" + link], { queryParams: { id: notification.subjectId } });
    };
    // group notifications by date
    NotificationComponent.prototype.groupNotificationsByDate = function () {
        var _this = this;
        var temp = [];
        this.notifications.subscribe(function (data) {
            data.forEach(function (item) {
                // checks if element doesnt exists in key array
                var index = _this.checkIfElementExists(temp, item.createdAt);
                if (!index) {
                    var arr = [];
                    arr.push(item);
                    temp.push({
                        key: item.createdAt,
                        value: arr
                    });
                }
                else {
                    temp[index].value.push(item);
                }
            });
            _this.revisedNotifications.next(temp);
        });
    };
    NotificationComponent.prototype.checkIfElementExists = function (array, key) {
        for (var i = 0; i < array.length; i++) {
            if (this.friendlyDate(array[i].key) === this.friendlyDate(key)) {
                return i;
            }
        }
        return false;
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-notification",
            template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_notification_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_utility_basic_functions__["a" /* BasicFunctions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* Router */]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notification/notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_notification_notification_component__["a" /* NotificationComponent */] }];
var NotificationModule = (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_notification_notification_component__["a" /* NotificationComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ })

});
//# sourceMappingURL=notification.module.chunk.js.map