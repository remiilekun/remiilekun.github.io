webpackJsonp(["team.module"],{

/***/ "../../../../../src/app/user/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div #body class=\"row p-4 m-0 content-top bg-white align-items-center\">\r\n    <div class=\"col-12 col-md-4 px-0 align-self-center d-flex py-2\">\r\n        <h6 class=\"dark-text m-0 mr-3\" *ngIf=\"teamCount && userCount && !selectedTeam.teamName.length\">{{teamCount}} {{teamCount > 1 ? \"Teams\" : \"Team\"}}</h6>\r\n        <h6 class=\"dark-text m-0\" *ngIf=\"userCount\">{{userCount}} {{userCount > 1 ? \"Users\" : \"User\"}}</h6>\r\n    </div>\r\n    <div class=\"col-3 col-md-3 px-0 py-1\">\r\n        <span class=\"team-stack--name text-nowrap cursor\" (click)=\"this.usersModal.show()\" placement=\"bottom\" mdb-tooltip=\"all users\">\r\n            All Users\r\n        </span>\r\n    </div>\r\n    <div class=\"col-6 col-md-4 px-0 py-1\">\r\n        <div class=\"input-group\">\r\n            <span class=\"input-group-addon search-icon\">\r\n                <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by team name\" [ngModel]=\"searchQuery\" (ngModelChange)=\"basicFunctions.searchValueChange($event, teamService)\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-3 col-md-1 d-flex justify-content-end p-0\">\r\n        <a mdbTooltip=\"Add New Team\" placement=\"left\" (click)=\"teamFormModal.show(); teamForm.reset();\" class=\"btn-floating m-0\"\r\n            mdRippleRadius>\r\n            <i class=\"fa fa-users\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<!-- team table -->\r\n<div class=\"content-body\" *ngIf=\"(teamService.fetchDone | async) && (userService.fetchDone | async) \r\n&& (regionService.fetchDone | async) && (areaService.fetchDone | async)\">\r\n    <div id=\"unseen\" *ngIf=\"teamCount\">\r\n        <div class=\"btn-group align-items-baseline\">\r\n            <button class=\"btn-transparent bold-text p-2\" type=\"button\" mdbRippleRadius>\r\n                Teams\r\n            </button>\r\n        </div>\r\n\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>S/N</th>\r\n                    <th (click)=\"sortBy('teamName')\">Team Name\r\n                        <i *ngIf=\"order === 'teamName'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th (click)=\"sortBy('teamLead')\">Team Lead\r\n                        <i *ngIf=\"order === 'teamLead'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th (click)=\"sortBy('teamMembers')\">Team Members\r\n                        <i *ngIf=\"order ==='teamMembers'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th (click)=\"sortBy('region')\">Region\r\n                        <i *ngIf=\"order ==='region'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th (click)=\"sortBy('subRegion')\">Area\r\n                        <i *ngIf=\"order ==='subRegion'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th (click)=\"sortBy('state')\">State\r\n                        <i *ngIf=\"order === 'state'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th (click)=\"sortBy('country')\">Country\r\n                        <i *ngIf=\"order === 'country'\" class=\"fa fa-caret-down\"></i>\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let team of teams | async | orderBy : order; let i = index\" [ngClass]=\"teams.value[i].deletedAt != '' ? 'disableTeam' : ''\">\r\n                    <th scope=\"row\">{{i+1}}</th>\r\n                    <td class=\"bold-text\">{{ basicFunctions.formatChar(team.teamName) }}</td>\r\n                    <td>{{ basicFunctions.formatChar(getUserNameByUserId(team.teamLead)) }}</td>\r\n                    <td>{{ basicFunctions.formatChar(team.teamMembers.length) }}</td>\r\n                    <td>{{ basicFunctions.formatChar(getRegionNameByRegionId(team.region)) }}</td>\r\n                    <td>{{ basicFunctions.formatChar(getAreaNameByAreaId(team.areaOfOperation)) }}</td>\r\n                    <td>{{ basicFunctions.formatChar(team.state) }}</td>\r\n                    <td>{{ basicFunctions.formatChar(team.country) }}</td>\r\n                    <td>\r\n                        <div class=\"table-icons\">\r\n                            <i class=\"fa fa-sign-in table-icon\" (click)=\"getUsersForTeam(team)\" title=\"View Users\"></i>\r\n                            <i class=\"fa fa-eye table-icon\" title=\"View Team\" (click)=\"viewTeamDetails(team)\"></i>\r\n                            <i *ngIf=\"team.deletedAt == ''\" class=\"fa fa-pencil table-icon\" title=\"Edit Team\" (click)=\"editTeam(team)\"></i>\r\n                            <i *ngIf=\"team.deletedAt == ''; else toggleBlock\" class=\"fa fa-toggle-on table-icon v\" title=\"Deactivate Team\" (click)=\"confirmDeactivate(team)\"></i>\r\n                            <ng-template #toggleBlock>\r\n                                <i class=\"fa fa-toggle-off table-icon v\" title=\"activate Team\" (click)=\"confirmActivate(team)\"></i>\r\n                            </ng-template>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count\" *ngIf=\"!teamCount\">\r\n        <div class=\"col-md-4 py-4\">\r\n            <img src=\"../../assets/svg/useremp.svg\" alt=\"Add New\">\r\n            <h6 class=\"header-text\">No team found</h6>\r\n            <p class=\"sub-text\">There are currently no teams registered on the system.</p>\r\n            <p class=\"sub-text\">Add a team by clicking on the orange button below.</p>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- team view modal -->\r\n<div class=\"modal-container\">\r\n    <div mdbModal #teamDetailsModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" [config]=\"{backdrop: true}\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <div class=\"row m-0 head-content\">\r\n                        <div class=\"title-section team-card py-1\">\r\n                            <h6 class=\"modal-title semi-dark-label w-100\">{{ teamDetails.teamName }}</h6>\r\n                            <p class=\"modal-title light-text w-100\">{{ getUserNameByUserId(teamDetails.teamLead) }}</p>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-end btn-section\">\r\n                            <button class=\"btn align-self-center\" *ngIf=\"teamDetails.deletedAt == ''\" mdbTooltip=\"Edit Team\" placement=\"top\" (click)=\"editTeam(teamDetails)\"\r\n                                mdbRippleRadius>\r\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                            <button *ngIf=\"teamDetails.deletedAt == '', else toggleOn\" class=\"btn align-self-center\" mdbTooltip=\"Deactivate Team\" placement=\"top\"\r\n                                (click)=\"confirmDeactivate(teamDetails)\" mdbRippleRadius>\r\n                                <i class=\"fa fa-toggle-on\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                            <ng-template #toggleOn>\r\n                                <button class=\"btn align-self-center\" mdbTooltip=\"Activate Team\" placement=\"top\" (click)=\"confirmActivate(teamDetails)\" mdbRippleRadius>\r\n                                    <i class=\"fa fa-toggle-off\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </ng-template>\r\n                            <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"teamDetailsModal.hide()\">\r\n                                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"team-modal-body modal-body\">\r\n                    <p class=\"light-text mb-1\">Team Members ({{ teamDetails.teamMembers.length }})</p>\r\n                    <p class=\"dark-text mb-2 member\">\r\n                        <span class=\"badge name-badge mb-1 p-2 semi-grey-bg-2 semi-dark-text\" *ngFor=\"let member of teamDetails.teamMembers\">\r\n                            <span>{{ getUserNameByUserId(member)[0] }}</span>{{ getUserNameByUserId(member)}}\r\n                        </span>\r\n                    </p>\r\n                    <p class=\"light-text mb-1\">Area</p>\r\n                    <p class=\"dark-text mb-2\">{{ getAreaNameByAreaId(teamDetails.areaOfOperation) }}</p>\r\n                    <p class=\"light-text mb-1\">Country</p>\r\n                    <h6 class=\"dark-text mb-2\">{{ teamDetails.country || 'N/A' }}</h6>\r\n                    <p class=\"light-text mb-1\">Region</p>\r\n                    <h6 class=\"dark-text mb-2\">{{ getRegionNameByRegionId(teamDetails.region) }}</h6>\r\n                    <p class=\"light-text mb-1\">State</p>\r\n                    <h6 class=\"dark-text mb-2\">{{ teamDetails.state || 'N/A' }}</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Confirm Activate/ Deactivate Team Modal -->\r\n<div class=\"modal-container\">\r\n    <div mdbModal #confirmDeactivateTeamModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" [config]=\"{backdrop: true, ignoreBackdropClick: true}\">\r\n        <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n            <div class=\"modal-content confirm-modal\">\r\n                <div class=\"modal-body bg-none \">\r\n                    <h4>Are you sure you want to {{ teamAction }} \"{{ teamForDelete.teamName }}\"?</h4>\r\n                    <p class=\"pr-4\">Please take your time to review this team details.</p>\r\n                    <div class=\"btn-groupe w-100 d-flex justify-content-end\">\r\n                        <button class=\"btn text-uppercase\" (click)=\"confirmDeactivateTeamModal.hide()\" mdbRippleRadius>Cancel</button>\r\n                        <button *ngIf=\"teamAction == 'deactivate'; else activateTeamBlock\" class=\"btn text-uppercase\" mdbRippleRadius (click)=\"deactivateTeam(teamForDelete)\">Deactivate Team</button>\r\n                        <ng-template #activateTeamBlock>\r\n                            <button class=\"btn text-uppercase\" mdbRippleRadius (click)=\"activateTeam(teamForDelete)\">Activate Team</button>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Create and Edit Team Modal -->\r\n<div class=\"modal-container\">\r\n    <div mdbModal #teamFormModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" [config]=\"{backdrop: true}\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header semi-grey-bg p-4\">\r\n                    <h4 class=\"dark-text w-100 mb-0\">{{addTeam.teamId.length > 0 ? 'Edit' : 'Create'}} Team</h4>\r\n                </div>\r\n                <div class=\"team-modal-body modal-body mb-0\">\r\n                    <form #teamForm=\"ngForm\">\r\n                        <div class=\"row m-0\">\r\n                            <div class=\"col-md-12 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <input mdbActive type=\"text\" [(ngModel)]=\"addTeam.teamName\" name=\"name\" #teamName='ngModel' class=\"form-control\" required\r\n                                        [class.is-invalid]=\"teamName.errors && (teamName.dirty || teamName.touched)\">\r\n                                    <label for=\"name\" [ngClass]=\"addTeam.teamId && addTeam.teamId.length > 0 ? 'active' : ''\">Team name</label>\r\n                                </div>\r\n                                <div *ngIf=\"teamName.errors && (teamName.dirty || teamName.touched)\" class=\"col-md-12\">\r\n                                    <div [hidden]=\"!teamName.errors.required\" class=\"text-danger error\">\r\n                                        <small class=\"val-error\">Team name cannot be empty.</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <mdb-ng-select [options]=\"country | async\" [filterEnabled]=\"true\" [(ngModel)]=\"selectedCountry\" name=\"country\" placeholder=\"Country\"\r\n                                        (ngModelChange)=\"onCountryChange($event)\" id=\"country\" (focusin)=\"CountryActive = true\"\r\n                                        required></mdb-ng-select>\r\n                                    <label *ngIf=\"addTeam.teamId && addTeam.teamId.length > 0; else elseBlock3\" class=\"label-active\" for=\"country\">Country</label>\r\n                                    <ng-template #elseBlock3>\r\n                                        <label [ngClass]=\"CountryActive ? 'label-active' : 'label-inactive'\" for=\"country\">Country</label>\r\n                                    </ng-template>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <mdb-ng-select [options]=\"regions | async\" [filterEnabled]=\"true\" [(ngModel)]=\"selectedRegion\" name=\"region\" placeholder=\"Region\"\r\n                                        (ngModelChange)=\"onRegionChange($event)\" (focusin)=\"RegionActive = true\" id=\"region\"\r\n                                        required></mdb-ng-select>\r\n                                    <label *ngIf=\"addTeam.teamId && addTeam.teamId.length > 0; else elseBlock4\" class=\"label-active\" for=\"region\">Region</label>\r\n                                    <ng-template #elseBlock4>\r\n                                        <label [ngClass]=\"RegionActive ? 'label-active' : 'label-inactive'\" for=\"region\">Region</label>\r\n                                    </ng-template>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <mdb-ng-select [options]=\"states | async\" [filterEnabled]=\"true\" [(ngModel)]=\"selectedState\" name=\"state\" placeholder=\"State\"\r\n                                        (ngModelChange)=\"onStateChange($event)\" (focusin)=\"StateActive = true\" id=\"state\" required></mdb-ng-select>\r\n                                    <label *ngIf=\"addTeam.teamId && addTeam.teamId.length > 0; else elseBlock5\" class=\"label-active\" for=\"state\">State</label>\r\n                                    <ng-template #elseBlock5>\r\n                                        <label [ngClass]=\"StateActive ? 'label-active' : 'label-inactive'\" for=\"state\">State</label>\r\n                                    </ng-template>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <mdb-ng-select [options]=\"aoo | async\" [(ngModel)]=\"selectedArea\" name=\"aoo\" placeholder=\"Area\" (ngModelChange)=\"onAreaChange($event)\"\r\n                                        (focusin)=\"AreaActive = true\" id=\"area\" required></mdb-ng-select>\r\n                                    <label *ngIf=\"addTeam.teamId && addTeam.teamId.length > 0; else elseBlock6\" class=\"label-active\" for=\"area\">Area</label>\r\n                                    <ng-template #elseBlock6>\r\n                                        <label [ngClass]=\"AreaActive ? 'label-active' : 'label-inactive'\" for=\"area\">Area</label>\r\n                                    </ng-template>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <mdb-ng-select [options]=\"teamUsers\" [filterEnabled]=\"true\" [class.is-invalid-select]=\"supervisor.errors && (supervisor.dirty || supervisor.touched)\"\r\n                                        (ngModelChange)=\"onTeamLeadChange($event)\" #supervisor=\"ngModel\" [(ngModel)]=\"addTeam.teamLead\"\r\n                                        name=\"supervisor\" placeholder=\"Supervisor\" (focusin)=\"SupervisorActive = true\" id=\"supervisor\"\r\n                                        required></mdb-ng-select>\r\n                                    <label *ngIf=\"addTeam.teamId && addTeam.teamId.length > 0; else elseBlock7\" class=\"label-active\" for=\"supervisor\">Supervisor</label>\r\n                                    <ng-template #elseBlock7>\r\n                                        <label [ngClass]=\"SupervisorActive ? 'label-active' : 'label-inactive'\" for=\"supervisor\">Supervisor</label>\r\n                                    </ng-template>\r\n                                    <div *ngIf=\"supervisor.errors && (supervisor.dirty || supervisor.touched)\" class=\"col-md-12\">\r\n                                        <div [hidden]=\"!supervisor.errors.required\" class=\"text-danger error\">\r\n                                            <small class=\"val-error\">Please Select a Team Lead</small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 mb\">\r\n                                <div class=\"md-form form-sm m-0\">\r\n                                    <mdb-ng-select [options]=\"teamMembers\" #members=\"ngModel\" [multiple]=\"true\" placeholder=\"Team members\" name=\"members\" [(ngModel)]=\"addTeam.teamMembers\"\r\n                                        (focusin)=\"MembersActive = true\" id=\"members\"></mdb-ng-select>\r\n                                    <label *ngIf=\"addTeam.teamId && addTeam.teamId.length > 0; else elseBlock8\" class=\"label-active\" for=\"members\">Team members</label>\r\n                                    <ng-template #elseBlock8>\r\n                                        <label [ngClass]=\"MembersActive ? 'label-active' : 'label-inactive'\" for=\"members\">Team members</label>\r\n                                    </ng-template>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"btn-groupe w-100 d-flex justify-content-end col-12 py-2\">\r\n                        <button class=\"btn text-uppercase\" (click)=\"closeTeamModal()\" mdbRippleRadius>Cancel</button>\r\n                        <button class=\"btn text-uppercase\" (click)=\"createTeam(addTeam)\" [disabled]=\"!teamForm.form.valid\" mdbRippleRadius>{{ addTeam.teamId.length > 0 ? 'Save' : 'Create'}}</button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal-container\">\r\n    <div mdbModal #usersModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" [config]=\"{backdrop: true}\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content modal-content--fixed\">\r\n                <div class=\"modal-header semi-grey-bg p-4\">\r\n                    <h4 class=\"dark-text w-100 mb-0\">All Users</h4>\r\n                    <div class=\"d-flex justify-content-end\">\r\n                        <h4 (click)=\"usersModal.hide()\" class=\"dark-text w-100 mb-0 align-self-right cursor\">\r\n                            <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n                        </h4>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"team-modal-body modal-body modal-body--fixed mb-0\">\r\n                    <table class=\"table table-hover\">\r\n                        <thead>\r\n                            <th>SN</th>\r\n                            <th>Name</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let user of users | async; let i = index\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{ this.userService.getUserNameByUserId(user.userId) }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"(teamService.fetchDone | async) && (userService.fetchDone | async) \r\n&& (regionService.fetchDone | async) && (areaService.fetchDone | async)\">\r\n    <app-material-spinner></app-material-spinner>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\ntable tr:nth-child(even) {\n  background-color: #f9f9f9; }\n\ntable tr:hover .table-icon {\n  visibility: visible; }\n\ntable th {\n  font-weight: 500;\n  cursor: pointer; }\n\ntable th,\ntable td {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-top: 1px solid #f9f9f9 !important;\n  color: #252525; }\n\ntable .bold-text {\n  font-weight: bold;\n  color: #4f4f4f; }\n\ntable .table-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\ntable .table-icon {\n  visibility: hidden;\n  color: #9a9a9a;\n  font-size: 1rem;\n  cursor: pointer; }\n\ntable .table-icon:not(:last-child) {\n    margin-right: 10px; }\n\ntable .table-icon--border {\n    visibility: hidden; }\n\ntable .fa-toggle-on {\n  color: #4caf50; }\n\n@media (max-width: 575px) {\n  table td,\n  th {\n    font-size: 0.6rem; }\n  .table-icons {\n    display: block !important; }\n  .table-icon {\n    visibility: visible !important;\n    width: 100% !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .table-icons {\n    visibility: visible;\n    display: block !important; } }\n\n.mb {\n  margin-bottom: 1.5rem !important; }\n\n.select-label {\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  position: absolute;\n  top: 0.8rem;\n  left: 0; }\n\n.label-active {\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n  color: #bbbbbb !important;\n  visibility: visible; }\n\n.label-inactive {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  color: #bbbbbb !important; }\n\n.selected-team {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n.selected-team p {\n    font-size: 12px; }\n\n.btn-group .bold-text {\n  cursor: pointer; }\n\n.disableTeam td {\n  opacity: 0.7; }\n\n.disableTeam td:last-child {\n  opacity: 1; }\n\n.cursor {\n  cursor: pointer; }\n\n.user {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.user__avatar {\n    width: 52px;\n    height: 52px;\n    border-radius: 50%;\n    font-size: 10px;\n    line-height: 10px;\n    text-align: center;\n    overflow: hidden;\n    margin: auto;\n    cursor: pointer; }\n\n.user__avatar img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.user__avatar p {\n      cursor: pointer; }\n\n.btn-floating {\n  right: 0;\n  bottom: 0; }\n\n.user-fab {\n  position: relative !important;\n  margin: 0;\n  z-index: 2; }\n\n.sub__fab {\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute !important;\n  margin: 0;\n  width: 35px;\n  height: 35px;\n  z-index: 1;\n  top: 20px;\n  left: 6px;\n  -webkit-transition: all 0.5s cubic-bezier(1, -0.24, 0.15, 1.07);\n  transition: all 0.5s cubic-bezier(1, -0.24, 0.15, 1.07); }\n\n.sub__fab i {\n    font-size: 0.75rem; }\n\n.sub__fab--1.active {\n    top: -35px; }\n\n.sub__fab--2.active {\n    left: -50px; }\n\n.tempass {\n  font-size: 10px;\n  font-weight: 500;\n  color: #808080; }\n\n.badge-rounded {\n  border-radius: 50% !important; }\n\n.name-badge {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-weight: normal;\n  border-radius: 15.5px; }\n\n.name-badge span {\n    padding: 2px 5px;\n    border-radius: 50%;\n    color: #ffffff;\n    margin-left: -3px;\n    margin-right: 3px; }\n\n.team-modal-body {\n  background: #ffffff !important; }\n\n.create-modal-content .modal-header,\n.edit-modal-content .modal-header {\n  background-color: #ededeb; }\n\n.create-modal-content .modal-header h4,\n  .edit-modal-content .modal-header h4 {\n    font-size: 16px;\n    font-weight: 500;\n    color: #565656; }\n\n.create-modal-content .file-input input[type=\"file\"],\n.edit-modal-content .file-input input[type=\"file\"] {\n  display: none; }\n\n.inputVal {\n  margin-top: -1.5em; }\n\n.member span:nth-child(5n + 1) span {\n  background: #1ea9f4; }\n\n.member span:nth-child(5n + 2) span {\n  background: #c80c24; }\n\n.member span:nth-child(5n + 3) span {\n  background: #0d609c; }\n\n.member span:nth-child(5n + 4) span {\n  background: #fba94a; }\n\n.member span:nth-child(5n + 5) span {\n  background: #4caf50; }\n\n.delete-modal-content h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.delete-modal-content p {\n  font-size: 12px;\n  color: #afafaf; }\n\n@media (max-width: 575px) {\n  .delete-modal-content {\n    margin-top: 50px; }\n  .file-input {\n    padding-right: 0; }\n  .class-review .ml {\n    margin-left: 15px; }\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(5),\n  #unseen table th:nth-child(5),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6) {\n    display: none; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .delete-modal-content {\n    margin-top: 50px; }\n  .file-input {\n    padding-right: 1rem; } }\n\n@media (min-width: 768px) {\n  .delete-modal-content {\n    margin-top: 120px; }\n  .file-input {\n    padding-right: 0.5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_location_location_service__ = __webpack_require__("../../../../../src/app/shared/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_region_region_service__ = __webpack_require__("../../../../../src/app/shared/region/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_role_role_service__ = __webpack_require__("../../../../../src/app/shared/role/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_team_team_service__ = __webpack_require__("../../../../../src/app/shared/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_area_area_service__ = __webpack_require__("../../../../../src/app/shared/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_user_user__ = __webpack_require__("../../../../../src/app/shared/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_team_team__ = __webpack_require__("../../../../../src/app/shared/team/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_utility_basic_functions__ = __webpack_require__("../../../../../src/app/shared/utility/basic-functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TeamComponent = (function () {
    function TeamComponent(userService, roleService, locationService, teamService, authService, areaService, regionService, ref, router, basicFunctions) {
        var _this = this;
        this.userService = userService;
        this.roleService = roleService;
        this.locationService = locationService;
        this.teamService = teamService;
        this.authService = authService;
        this.areaService = areaService;
        this.regionService = regionService;
        this.ref = ref;
        this.router = router;
        this.basicFunctions = basicFunctions;
        this.userCount = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_8__shared_user_user__["a" /* User */]();
        this.searchTerm = "";
        this.tempUsers = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.users = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.countries = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.roles = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.teams = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.teamOptions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.fetchDone = false;
        this.countryDialCode = "";
        this.selectedTeam = new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */]();
        this.teamAction = "";
        this.CountryActive = false;
        this.TeamActive = false;
        this.RolesActive = false;
        this.activeFabs = false;
        this.StateActive = false;
        this.RegionActive = false;
        this.AreaActive = false;
        this.SupervisorActive = false;
        this.MembersActive = false;
        this.order = "teamName";
        // teams
        this.teamDetails = new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */]();
        this.addTeam = new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */]();
        this.teamForDelete = new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */]();
        this.mainTeams = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.teamCount = 0;
        this.country = this.locationService.countries;
        this.regions = this.regionService.countryRegions;
        this.states = this.regionService.states;
        this.aoo = this.areaService.stateAreas;
        this.states.subscribe(function (data) {
            data.forEach(function (v) {
                if (_this.addTeam.state && v.label.toLowerCase() === _this.addTeam.state.toLowerCase()) {
                    _this.onStateChange(v.value);
                }
            });
        });
        this.aoo.subscribe(function (data) {
            _this.onAreaChange(_this.addTeam.areaOfOperation);
        });
        this.regions.subscribe(function (data) {
            _this.onRegionChange(_this.selectedRegion);
        });
        this.userService.users.subscribe(function (data) {
            _this.teamUsers = data.map(function (elem) {
                return {
                    value: elem.userId,
                    label: elem.getFullName()
                };
            });
            _this.teamMembers = data.map(function (elem) {
                return {
                    value: elem.userId,
                    label: elem.getFullName()
                };
            });
        });
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe();
        this.userService.users.subscribe(function (users) {
            _this.users.next(users.sort(function (a, b) {
                if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
                    return -1;
                }
                if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                    return 1;
                }
                return 0;
            }));
            _this.userCount = users.length;
        });
        this.locationService.superCountries.subscribe(function (countries) {
            _this.countries.next(countries.map(function (country) {
                return {
                    value: country.IsoCode,
                    label: country.name,
                    DialCode: country.DialCode
                };
            }));
        });
        this.roleService.roles.subscribe(function (roles) {
            _this.roles.next(roles.map(function (role) {
                return { value: role.userGroupId, label: role.name };
            }));
        });
        this.teamService.teams.subscribe(function (teams) {
            _this.teamCount = teams.length;
            _this.teams.next(teams);
            _this.teamOptions.next(teams.map(function (team) {
                return { value: team.teamId, label: team.teamName };
            }));
        });
    };
    TeamComponent.prototype.uploadProfileImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        var AWS = window.AWS;
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                AWS.config.accessKeyId = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.s3Bucket.ACCESS_KEY_ID;
                AWS.config.secretAccessKey = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.s3Bucket.SECRET_ACCESS_KEY;
                AWS.config.region = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.s3Bucket.REGION;
                var bucket = new AWS.S3({
                    params: { Bucket: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].corona.s3Bucket.NAME }
                });
                var params = { Key: file_1.name, Body: file_1 };
                var imgUrl;
                imgUrl = "";
                var user = _this.user;
                bucket.upload(params, function (error, res) {
                    console.log("error", error);
                    if (!error) {
                        user.profilePicture = res.Location;
                    }
                });
            };
        }
    };
    TeamComponent.prototype.toggleFab = function () {
        this.activeFabs = !this.activeFabs;
    };
    TeamComponent.prototype.sortBy = function (type) {
        this.order = type;
    };
    TeamComponent.prototype.sortByUser = function (type) {
        this.userOrder = type;
    };
    TeamComponent.prototype.getUsersForTeam = function (team) {
        this.router.navigate(["/home/user-management/users/" + team.teamId]);
    };
    TeamComponent.prototype.getCountryFromTeam = function (teams) {
        if (teams) {
            var countries = [];
            for (var _i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
                var team = teams_1[_i];
                if (team && team.country && !countries.includes(team.country) && team.country !== "") {
                    countries.push(team.country);
                }
            }
            return countries.join(", ");
        }
    };
    TeamComponent.prototype.getCountryData = function (IsoCode) {
        var _this = this;
        var countries = this.locationService.superCountries.value.filter(function (v) {
            return v.IsoCode === _this.user.countryIsoCode;
        });
        var countryData = [{}];
        if (countries.length > 0) {
            var tempCountryData = countries[0];
            countryData = [
                {
                    Id: tempCountryData.id,
                    Name: tempCountryData.name,
                    IsoCode: tempCountryData.IsoCode,
                    DialCode: tempCountryData.DialCode,
                    IsDefault: true
                }
            ];
        }
        return countryData;
    };
    TeamComponent.prototype.disableEmailField = function () {
        this.isEditNotCreate = true;
    };
    TeamComponent.prototype.enableEmailField = function () {
        this.isEditNotCreate = null;
    };
    TeamComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };
    TeamComponent.prototype.loadCountryDialCode = function () {
        var _this = this;
        this.locationService.superCountries.subscribe(function (data) {
            if (!_this.isEmpty(data) && _this.user.countryIsoCode !== "") {
                data.forEach(function (element) {
                    if (element.IsoCode === _this.user.countryIsoCode) {
                        _this.countryDialCode = element.DialCode;
                    }
                });
            }
        });
    };
    TeamComponent.prototype.getCountryDialCode = function ($event) {
        var _this = this;
        if ($event) {
            this.user.countryIsoCode = $event;
            this.locationService.superCountries.subscribe(function (data) {
                if (!_this.isEmpty(data) && _this.user.countryIsoCode !== "") {
                    data.forEach(function (element) {
                        if (element.IsoCode === _this.user.countryIsoCode) {
                            _this.countryDialCode = element.DialCode;
                        }
                    });
                }
            });
        }
    };
    // team
    TeamComponent.prototype.viewTeamDetails = function (team) {
        this.teamDetails = Object.assign(new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */](), team);
        this.teamDetailsModal.show();
    };
    TeamComponent.prototype.viewAllUsers = function () {
        this.usersModal.show();
    };
    TeamComponent.prototype.editTeam = function (team) {
        this.addTeam = Object.assign(new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */](), team);
        this.selectedRegion = team.region;
        this.updateCountry(this.addTeam.country);
        this.teamFormModal.show();
    };
    TeamComponent.prototype.confirmDeactivate = function (team) {
        this.teamForDelete = Object.assign(new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */](), team);
        this.teamAction = "deactivate";
        this.confirmDeactivateTeamModal.show();
    };
    TeamComponent.prototype.confirmActivate = function (team) {
        this.teamForDelete = Object.assign(new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */](), team);
        this.teamAction = "activate";
        this.confirmDeactivateTeamModal.show();
    };
    TeamComponent.prototype.deactivateTeam = function (team) {
        this.teamService.updateTeamStatus(team);
        this.confirmDeactivateTeamModal.hide();
        this.teamDetailsModal.hide();
    };
    TeamComponent.prototype.activateTeam = function (team) {
        this.teamService.updateTeamStatus(team);
        this.confirmDeactivateTeamModal.hide();
        this.teamDetailsModal.hide();
    };
    TeamComponent.prototype.createTeam = function (team) {
        team.areaOfOperation = this.selectedArea;
        team.region = this.selectedRegion;
        team.teamMembers.push(team.teamLead);
        var userId = this.authService.getUserId();
        team.userId = team.userId ? team.userId : userId;
        this.teamService.createOrUpdateTeam(team);
        this.teamFormModal.hide();
        this.addTeam = new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */]();
        this.selectedState = "";
        this.selectedCountry = "";
        this.selectedArea = "";
        this.selectedRegion = "";
    };
    TeamComponent.prototype.getUserNameByUserId = function (userId) {
        return this.userService.getUserNameByUserId(userId);
    };
    TeamComponent.prototype.getRegionNameByRegionId = function (regionId) {
        var region = this.regionService.regions.value.filter(function (regions) {
            return regions.regionId === regionId;
        });
        if (region.length) {
            return region[0].regionName;
        }
        return "N/A";
    };
    TeamComponent.prototype.getAreaNameByAreaId = function (areaId) {
        var area = this.areaService.areas.value.filter(function (areaValue) {
            return areaValue.areaId === areaId;
        });
        if (area.length) {
            return area[0].areaName;
        }
        return "N/A";
    };
    TeamComponent.prototype.updateCountry = function (country) {
        var _this = this;
        this.country.value.forEach(function (v) {
            if (v.label.toLowerCase() === country.toLowerCase()) {
                _this.onCountryChange(v.value);
            }
        });
    };
    TeamComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        var countryName;
        if (countryId) {
            this.selectedCountry = countryId;
            this.country.value.forEach(function (v) {
                if (v.value === _this.selectedCountry) {
                    countryName = v.label;
                    _this.addTeam.country = countryName;
                }
            });
            this.regionService.getCountryRegions(countryName);
        }
    };
    TeamComponent.prototype.onRegionChange = function (regionId) {
        if (regionId) {
            this.selectedRegion = regionId;
            this.regionService.getRegionStates(this.selectedRegion);
            this.ref.detectChanges();
        }
    };
    TeamComponent.prototype.onStateChange = function (stateId) {
        var _this = this;
        var stateName;
        if (stateId) {
            this.selectedState = stateId;
            this.states.value.forEach(function (v) {
                if (v.value === _this.selectedState) {
                    stateName = v.label;
                    _this.addTeam.state = stateName;
                }
            });
            this.areaService.getStateAreas(stateName);
            this.ref.detectChanges();
        }
    };
    TeamComponent.prototype.onAreaChange = function (area) {
        if (area) {
            this.selectedArea = area;
            this.ref.detectChanges();
        }
    };
    TeamComponent.prototype.onTeamLeadChange = function (tl) {
        if (tl) {
            this.teamMembers = this.teamUsers.filter(function (v) {
                return tl !== v.value;
            });
        }
    };
    TeamComponent.prototype.closeTeamModal = function () {
        this.teamFormModal.hide();
        this.addTeam = new __WEBPACK_IMPORTED_MODULE_11__shared_team_team__["a" /* Team */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("createUserModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "createUserModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("userDetailsModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "userDetailsModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("deleteUserModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "deleteUserModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("createFile"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "createFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("usersModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "usersModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "body", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("teamDetailsModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "teamDetailsModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("confirmDeactivateTeamModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "confirmDeactivateTeamModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("teamFormModal"),
        __metadata("design:type", Object)
    ], TeamComponent.prototype, "teamFormModal", void 0);
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-team",
            template: __webpack_require__("../../../../../src/app/user/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/team/team.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_role_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_team_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_area_area_service__["a" /* AreaService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_region_region_service__["a" /* RegionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_12__shared_utility_basic_functions__["a" /* BasicFunctions */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/team/team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_user_team_team_component__ = __webpack_require__("../../../../../src/app/user/team/team.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_user_team_team_component__["a" /* TeamComponent */] }];
var TeamModule = (function () {
    function TeamModule() {
    }
    TeamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_user_team_team_component__["a" /* TeamComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], TeamModule);
    return TeamModule;
}());



/***/ })

});
//# sourceMappingURL=team.module.chunk.js.map