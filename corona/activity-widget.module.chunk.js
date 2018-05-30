webpackJsonp(["activity-widget.module"],{

/***/ "../../../../../src/app/activity-widget/activity-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"showMap\">\r\n  <div class=\"activity-container\">\r\n    <div class=\"container-fluid px-0 aw\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-4\">\r\n          <mdb-ng-select placeholder=\"Area\" [filterEnabled]=\"true\" name=\"area\" #area [options]=\"areas | async\" [(ngModel)]=\"area.areaName\"\r\n            (ngModelChange)=\"onAreaChange($event)\" required></mdb-ng-select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <mdb-ng-select placeholder=\"Team Name\" [filterEnabled]=\"true\" name=\"team\" #team [options]=\"teamsByArea | async\" [(ngModel)]=\"team.teamName\"\r\n            (ngModelChange)=\"onTeamChange($event)\" required></mdb-ng-select>\r\n        </div>\r\n        <div class=\"col-md-4\" (click)=\"toggleMarker()\">\r\n          <mdb-ng-select placeholder=\"User firstname /lastname\" [filterEnabled]=\"true\" name=\"user\" #user [options]=\"users | async\"\r\n            [(ngModel)]=\"user.firstname\" (ngModelChange)=\"onUserChange($event)\" required></mdb-ng-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <agm-map #activityMap [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [clickableIcons]=\"false\" (mapClick)=\"mapClicked()\">\r\n      <ng-container *ngIf=\"!showUserMarker\">\r\n        <agm-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"m.lat\" [longitude]=\"m.lng\" [iconUrl]=\"m.icon\" (markerClick)=\"markerClicked(m)\">\r\n          <agm-info-window #infoWindow [disableAutoPan]=\"true\" [isOpen]=\"m.isOpen\">\r\n            <div class=\"row no-gutters\">\r\n              <div class=\"col-3\">\r\n                <img class=\"rounded-circle\" style=\"max-width:100% !important;\" src=\"../../assets/avatar.png\" alt=\"User image\">\r\n              </div>\r\n              <div class=\"col-9 p-2 w-120p\">\r\n                <p class=\"my-1 dark-text\">{{m.label}}</p>\r\n                <p class=\"my-1 light-text\">{{m.data.mobileNumber}}</p>\r\n                <p class=\"m-0\" *ngIf=\"!m.data.isOnline\">\r\n                  <span class=\"badge offline-badge\">Last Seen: </span> {{m.data.lastSeen ? convertDateTime(m.data.lastSeen, \"hh:mm\") + \" , \" + convertDateTime(m.data.lastSeen,\r\n                  \"DD MMM YYYY\") : 'N/A' }} </p>\r\n                <p class=\"m-0 badge online-badge\" *ngIf=\"m.data.isOnline && m.data.isBusy\">Online</p>\r\n                <p class=\"m-0 badge idle-badge\" *ngIf=\"m.data.isOnline && !m.data.isBusy\">Online idle</p>\r\n                <hr class=\"my-1\">\r\n                <p class=\"m-0 semi-dark-label\">{{ allOverdueTasksCount }}</p>\r\n                <p class=\"m-0 light-text\">Overdue {{ allOverdueTasksCount == 1 ? 'task': 'tasks' }}</p>\r\n                <!-- <p class=\"m-0 semi-dark-label\">{{ getUserOverdueTasks(m.data) }}</p>\r\n                <p class=\"m-0 light-text\">Overdue {{ getUserOverdueTasks(m.data) == 1 ? 'task': 'tasks' }}</p> -->\r\n              </div>\r\n            </div>\r\n          </agm-info-window>\r\n\r\n        </agm-marker>\r\n      </ng-container>\r\n\r\n\r\n      <ng-container *ngIf=\"showUserMarker\">\r\n        <agm-marker [latitude]=\"userMarker.lat\" [longitude]=\"userMarker.lng\" [iconUrl]=\"userMarker.icon\" (markerClick)=\"markerClicked(userMarker)\">\r\n\r\n          <agm-info-window #infoWindow [disableAutoPan]=\"true\" [isOpen]=\"userMarker.isOpen\">\r\n            <div class=\"row no-gutters\">\r\n              <div class=\"col-3\">\r\n                <img class=\"rounded-circle\" style=\"max-width:100% !important;\" src=\"../../assets/avatar.png\" alt=\"User image\">\r\n              </div>\r\n              <div class=\"col-9 p-2 w-120p\">\r\n                <p class=\"my-1 dark-text\">{{userMarker.label}}</p>\r\n                <p class=\"my-1 light-text\">{{userMarker.data.mobileNumber}}</p>\r\n                <p class=\"m-0\" *ngIf=\"!userMarker.data.isOnline\">\r\n                  <span class=\"badge offline-badge\">Last Seen: </span> {{userMarker.data.lastSeen ? convertDateTime(userMarker.data.lastSeen, \"hh:mm\") + \"\r\n                  , \" + convertDateTime(userMarker.data.lastSeen, \"DD MMM YYYY\") : 'N/A' }} </p>\r\n\r\n                <p class=\"m-0 badge online-badge\" *ngIf=\"userMarker.data.isOnline && userMarker.data.isBusy\">Online</p>\r\n                <p class=\"m-0 badge idle-badge\" *ngIf=\"userMarker.data.isOnline && !userMarker.data.isBusy\">Online idle</p>\r\n                <hr class=\"my-1\">\r\n                <p class=\"m-0 semi-dark-label\">{{ getUserOverdueTasks(userMarker.data) }}</p>\r\n                <p class=\"m-0 light-text\">Overdue {{ getUserOverdueTasks(userMarker.data) == 1 ? 'task': 'tasks' }}</p>\r\n              </div>\r\n            </div>\r\n          </agm-info-window>\r\n\r\n        </agm-marker>\r\n      </ng-container>\r\n\r\n\r\n\r\n\r\n    </agm-map>\r\n  </div>\r\n\r\n\r\n  <div class=\"activity-bottom\">\r\n    <div class=\"activity-slab card p-2\">\r\n      <div *ngIf=\"!showUserMarker\">\r\n        <div class=\"row w-100 m-0\">\r\n          <div class=\"col-6\">\r\n            <p class=\"dark-text m-0\"> {{userLength? userLength: 0 }} </p>\r\n\r\n            <p class=\"light-text m-0 text-nowrap\"> Available {{ userLength == 1 ? 'user': 'users' }}</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <p class=\"dark-text m-0\"> {{ allOverdueTasksCount }}</p>\r\n            <p class=\"light-text m-0 text-nowrap\"> Overdue {{ allOverdueTasksCount == 1 ? 'task': 'tasks' }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"showUserMarker\">\r\n        <div class=\"row w-100 m-0\">\r\n          <div class=\"col-6\">\r\n            <p class=\"dark-text m-0\">{{ userMarker.lat ? 1 : 0 }} </p>\r\n            <p class=\"light-text m-0 text-nowrap\"> Available {{ userMarker.lat == 0 ? 'users': 'user' }}</p>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <p class=\"dark-text m-0\"> {{ getUserOverdueTasks(userMarker.data) }} </p>\r\n            <p class=\"light-text m-0 text-nowrap\"> Overdue {{ getUserOverdueTasks(userMarker.data) == 1 ? 'task': 'tasks' }}</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"activity-legend card p-2 my-2\">\r\n      <div class=\"row w-100 m-0 text-center\">\r\n        <div class=\"col-4\">\r\n          <img src=\"../../assets/svg/legend-online.svg\" class=\"img-legend\" alt=\"Online icon\">\r\n          <p class=\"my-1 light-text text-nowrap\">Online</p>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"../../assets/svg/legend-idle.svg\" class=\"img-legend\" alt=\"Idle icon\">\r\n          <p class=\"my-1 light-text text-nowrap\">Online Idle</p>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <img src=\"../../assets/svg/legend-offline.svg\" class=\"img-legend\" alt=\"Offline icon\">\r\n          <p class=\"my-1 light-text text-nowrap\">Offline</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/activity-widget/activity-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.light-text span {\n    font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\nagm-map {\n  height: 85vh;\n  z-index: 99999; }\n\n.activity-container {\n  position: absolute;\n  top: 69px;\n  left: 0;\n  width: 100%; }\n\n.activity-bottom {\n  position: fixed;\n  right: 7vh;\n  bottom: 3vh; }\n\n.activity-slab {\n  background: white; }\n\n.activity-legend {\n  background: white; }\n\n.w-120p {\n  width: 105px !important; }\n\n.badge {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 25px; }\n\n.offline-badge {\n  background: #ee2f2f;\n  font-size: 12px; }\n\n.offline-badge span {\n    font-weight: 400; }\n\n.online-badge {\n  background: #00cb00;\n  font-size: 12px; }\n\n.idle-badge {\n  background: #f0c315;\n  font-size: 12px; }\n\n::ng-deep agm-map .gm-style-iw div:first-child {\n  overflow-x: hidden; }\n\n.aw::ng-deep mdb-ng-select > div > div.single,\n.aw::ng-deep mdb-ng-select > div > div.multiple {\n  padding: 4px 18px;\n  border: 1px solid #bdbdbd;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n.aw::ng-deep mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n.aw::ng-deep mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n.aw::ng-deep mdb-ng-select > div > div.single > div.placeholder,\n.aw::ng-deep mdb-ng-select > div > div.multiple > div.placeholder,\n.aw::ng-deep mdb-ng-select > div > div.single > div.value,\n.aw::ng-deep mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n.aw::ng-deep mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  .aw::ng-deep mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  .aw::ng-deep mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  .aw::ng-deep mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  .aw::ng-deep mdb-ng-select > div > div.single > div.value .deselect-option,\n  .aw::ng-deep mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n.aw::ng-deep mdb-ng-select > div > div.single > div.placeholder,\n.aw::ng-deep mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb; }\n\n.aw::ng-deep mdb-ng-select .filter input {\n  font-size: 0.8rem;\n  color: #000;\n  padding: 0 18px; }\n\n.aw::ng-deep mdb-ng-select > div > div.single > div.value,\n.aw::ng-deep mdb-ng-select > div > div.single > div.placeholder,\n.aw::ng-deep .md-form.form-sm input {\n  padding: 0; }\n\n.aw::ng-deep .form-control {\n  margin-bottom: 0; }\n\n.aw::ng-deep mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-widget/activity-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_area_area_service__ = __webpack_require__("../../../../../src/app/shared/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_team_team_service__ = __webpack_require__("../../../../../src/app/shared/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_task_activetask_service__ = __webpack_require__("../../../../../src/app/shared/task/activetask.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typescripts_pro_preloader_preloader_service__ = __webpack_require__("../../../../../src/typescripts/pro/preloader/preloader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_maps_maps_service__ = __webpack_require__("../../../../../src/app/shared/maps/maps.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ActivityWidgetComponent = (function () {
    function ActivityWidgetComponent(ms, mdbSpinningPreloader, areaService, userService, teamService, taskService, ref) {
        this.ms = ms;
        this.mdbSpinningPreloader = mdbSpinningPreloader;
        this.areaService = areaService;
        this.userService = userService;
        this.teamService = teamService;
        this.taskService = taskService;
        this.ref = ref;
        this.areas = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.users = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.areaCoords = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.teamsByArea = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.allOverdueTasksCount = 0;
        this.userOverdueTasksCount = 0;
        this.iconUrl = "../../assets/svg/online.svg";
        this.userMarker = {
            lat: 0,
            lng: 0,
            label: "",
            draggable: false,
            data: {},
            icon: "",
            isOpen: false
        };
        this.lat = 6.426013463543917;
        this.lng = 3.4273771048901835;
        this.zoom = 15;
        this.showMap = false;
    }
    ActivityWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mdbSpinningPreloader.stop();
        this.showMap = true;
        this.taskService.tasks.subscribe(function (data) {
            _this.allTasks = data;
        });
        this.areaService.areas.subscribe(function (areas) {
            var list = areas.map(function (area) {
                return {
                    value: area.areaName,
                    label: area.areaName
                };
            });
            _this.areas.next(list);
        });
        this.userService.users.subscribe(function (users) {
            _this.allOfUsers = users;
            _this.allUsers = users
                .filter(function (v) {
                return v.location;
            })
                .map(function (user) {
                return user;
            });
            var list = users
                .filter(function (v) {
                return v.location;
            })
                .map(function (user) {
                return {
                    value: user.userId,
                    label: user.getFullName()
                };
            });
            _this.users.next(list);
        });
        this.markers = [];
    };
    ActivityWidgetComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 15;
                _this.activityMap.triggerResize(false);
            });
        }
        else {
            this.lat = 6.426013463543917;
            this.lng = 3.4273771048901835;
            this.zoom = 15;
            this.activityMap.triggerResize(false);
        }
    };
    ActivityWidgetComponent.prototype.watchPosition = function () {
        var _this = this;
        this.areaCoords.subscribe(function (data) {
            _this.locate = data;
            _this.lat = _this.locate[0];
            _this.lng = _this.locate[1];
        });
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 15;
                _this.activityMap.triggerResize(false);
            });
        }
        else {
            this.lat = 6.426013463543917;
            this.lng = 3.4273771048901835;
            this.zoom = 15;
            this.activityMap.triggerResize(false);
        }
    };
    ActivityWidgetComponent.prototype.mapClicked = function () {
        if (this.markers) {
            if (this.userMarker) {
                this.userMarker.isOpen = false;
            }
            this.markers.forEach(function (i) { return (i.isOpen = false); });
        }
    };
    ActivityWidgetComponent.prototype.markerClicked = function (m) {
        m.isOpen = !m.isOpen;
    };
    ActivityWidgetComponent.prototype.convertDateTime = function (dateTime, format) {
        if (dateTime === 0 || undefined) {
            return "-";
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(new Date(dateTime)).format(format);
    };
    ActivityWidgetComponent.prototype.onUserChange = function (userIdObj) {
        var userId = userIdObj;
        if (userId !== "") {
            this.selectedUser = this.allUsers.filter(function (user) {
                return user.userId === userId;
            })[0];
            if (this.selectedUser && this.selectedUser.location && this.selectedUser.location.lat) {
                this.userMarker = {
                    lat: this.selectedUser.location.lat,
                    lng: this.selectedUser.location.lng,
                    label: this.selectedUser.getFullName(),
                    draggable: false,
                    data: this.selectedUser,
                    icon: "../../assets/svg/" + this.setStatus(this.selectedUser) + ".svg",
                    isOpen: false
                };
                this.lat = this.selectedUser.location.lat;
                this.lng = this.selectedUser.location.lng;
                this.zoom = 18;
                this.activityMap.triggerResize(false);
            }
            else {
                this.userMarker = {
                    lat: 0,
                    lng: 0,
                    label: "",
                    draggable: false,
                    data: {},
                    icon: "",
                    isOpen: false
                };
                console.log("User location not available");
            }
            this.teamSelect.select(null);
        }
    };
    // fetch user overdue tasks
    ActivityWidgetComponent.prototype.getUserOverdueTasks = function (user) {
        var id = user.userId;
        var tasksCount = 0;
        this.allTasks.forEach(function (task) {
            if (task.assignee === id && task.overdue) {
                tasksCount++;
            }
        });
        return tasksCount;
    };
    ActivityWidgetComponent.prototype.onTeamChange = function (event) {
        var _this = this;
        if (event !== "") {
            this.allOverdueTasksCount = 0;
            this.showUserMarker = false;
            this.teamService.teams.subscribe(function (u) {
                u
                    .filter(function (v) {
                    _this.members = [];
                    return v.teamId === event;
                })
                    .map(function (w) {
                    w.teamMembers.forEach(function (x) {
                        _this.userService.users.subscribe(function (y) {
                            y.forEach(function (z) {
                                if (z.userId === x &&
                                    function () {
                                        this.members.forEach(function (e) {
                                            return e.userId !== z.userId;
                                        });
                                    }) {
                                    _this.members.unshift(z);
                                }
                            });
                        });
                    });
                    _this.populateMarkers();
                });
            });
            this.teamService.teamMembers.subscribe(function (data) {
                _this.members = [];
                data.forEach(function (data) {
                    // fetch all overdue tasks
                    _this.allTasks.forEach(function (task) {
                        if (task.overdue) {
                            _this.allOverdueTasksCount++;
                        }
                    });
                });
            });
        }
    };
    ActivityWidgetComponent.prototype.populateMarkers = function () {
        var _this = this;
        this.markers = Array.from(new Set(this.members))
            .filter(function (data) {
            return data.location;
        })
            .map(function (data) {
            if (data.location) {
                return {
                    lat: data.location.lat,
                    lng: data.location.lng,
                    label: data.getFullName(),
                    draggable: false,
                    data: data,
                    icon: "../../assets/svg/" + _this.setStatus(data) + ".svg",
                    isOpen: false
                };
            }
            return;
        });
        this.userLength = this.markers.length;
    };
    ActivityWidgetComponent.prototype.onAreaChange = function (areaId) {
        var _this = this;
        if (areaId !== "") {
            this.areaService.areas.subscribe(function (data) {
                data
                    .filter(function (x) {
                    return x.areaName === areaId;
                })
                    .map(function (x) {
                    var address = x.cities[0] + "," + x.state + "," + x.country;
                    return _this.ms.getGeocoding(address).subscribe();
                });
            });
            this.ms.locate.subscribe(function (coords) {
                _this.areaCoords.next(coords);
            });
            this.zoom = 13;
            this.activityMap.triggerResize(false);
            this.teamService.getTeamsByArea(areaId).subscribe();
            this.teamsByArea = this.teamService.teamsByArea;
            this.userLength = 0;
            this.markers = [];
        }
    };
    ActivityWidgetComponent.prototype.setStatus = function (data) {
        if (data.isOnline) {
            if (data.isBusy) {
                return "online";
            }
            return "idle";
        }
        return "offline";
    };
    ActivityWidgetComponent.prototype.toggleMarker = function () {
        return (this.showUserMarker = true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("activityMap"),
        __metadata("design:type", Object)
    ], ActivityWidgetComponent.prototype, "activityMap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("team"),
        __metadata("design:type", Object)
    ], ActivityWidgetComponent.prototype, "teamSelect", void 0);
    ActivityWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-activity-widget",
            template: __webpack_require__("../../../../../src/app/activity-widget/activity-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-widget/activity-widget.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__shared_maps_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_7__typescripts_pro_preloader_preloader_service__["a" /* MDBSpinningPreloader */],
            __WEBPACK_IMPORTED_MODULE_3__shared_area_area_service__["a" /* AreaService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_team_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_task_activetask_service__["a" /* ActiveTaskService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ActivityWidgetComponent);
    return ActivityWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-widget/activity-widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityWidgetModule", function() { return ActivityWidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_activity_widget_activity_widget_component__ = __webpack_require__("../../../../../src/app/activity-widget/activity-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_1_app_activity_widget_activity_widget_component__["a" /* ActivityWidgetComponent */] }];
var ActivityWidgetModule = (function () {
    function ActivityWidgetModule() {
    }
    ActivityWidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_1_app_activity_widget_activity_widget_component__["a" /* ActivityWidgetComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ActivityWidgetModule);
    return ActivityWidgetModule;
}());



/***/ })

});
//# sourceMappingURL=activity-widget.module.chunk.js.map