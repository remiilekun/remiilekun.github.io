webpackJsonp(["task-review.module"],{

/***/ "../../../../../src/app/task/task-review/task-review.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Search and Sort Section -->\r\n<div #body class=\"row p-4 m-0 content-top d-flex justify-content-between wow align-items-center\" style=\"animation-name: none; visibility: visible;\">\r\n  <div class=\"col-lg-2 col-md-2 px-0\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"taskCount\">{{ taskCount }} {{ taskCount == 1 ? 'task' : 'tasks'}} available.</h6>\r\n  </div>\r\n  <div class=\"col-lg-4 col-md-4 px-0 py-1\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by task title, region, team, etc.\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content-body\">\r\n  <div id=\"unseen\" *ngIf=\"taskCount && (taskService.fetchDone | async)\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>S/N</th>\r\n          <th (click)=\"sortBy('title')\">Task Title\r\n            <i *ngIf=\"order === 'title'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('template')\">Template\r\n            <i *ngIf=\"order === 'template'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('iucNumber')\">IUC Number\r\n            <i *ngIf=\"order === 'iucNumber'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('assignee')\">Assigned To\r\n            <i *ngIf=\"order === 'assignee'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('reviewer')\">Reviewer Name\r\n            <i *ngIf=\"order === 'reviewer'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('startDate')\">Start Date\r\n            <i *ngIf=\"order === 'startDate'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('completedDate')\">Date Completed\r\n            <i *ngIf=\"order === 'completedDate'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('frequency')\">Frequency\r\n            <i *ngIf=\"order === 'frequency'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let task of tasks | async | orderBy : order; let i = index\">\r\n          <th scope=\"row\">{{i+1}}</th>\r\n          <td class=\"bold-text\">{{ basicFunctions.formatChar(task.title) }}</td>\r\n          <td>\r\n            <p class=\"mb-0\" *ngIf=\"task.template.name === '';  else emptyField\"> N/A </p>\r\n            <ng-template #emptyField>{{ basicFunctions.formatChar(task.template.name) }}</ng-template>\r\n          </td>\r\n          <td>{{ basicFunctions.formatChar(task.deviceOrAgentNumber || 'N/A') }}</td>\r\n          <td>{{ basicFunctions.formatChar(getUserNameByUserId(task.assignee)) }}</td>\r\n          <td>{{ basicFunctions.formatChar(getUserNameByUserId(task.reviewer)) }}</td>\r\n          <td>{{ convertDateTime(task.templateFieldsValues.priorTemplate.startDateTime, \"DD MMMM YYYY\") }}</td>\r\n          <td>{{ convertDateTime(task.templateFieldsValues.priorTemplate.endDateTime, \"DD MMMM YYYY\") }}</td>\r\n          <td>{{ task.frequency }}</td>\r\n          <td>\r\n            <div class=\"table-icons\">\r\n              <i class=\"fa fa-eye table-icon\" title=\"View Task\" (click)=\"viewTaskReviewDetails(task)\"></i>\r\n              <i *ngIf=\"task.reviewer == loggedInUserId\" class=\"fa fa-check table-icon\" title=\"Approve Task\" (click)=\"approveTask(task)\"></i>\r\n              <i *ngIf=\"task.reviewer == loggedInUserId\" class=\"fa fa-times table-icon\" title=\"Reject Task\" (click)=\"reassignTaskPrompt(task)\"></i>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count wow fadeIn\" *ngIf=\"!taskCount && (taskService.fetchDone | async)\">\r\n    <div class=\"col-md-4 py-4\">\r\n      <img src=\"../../../assets/svg/group.svg\" alt=\"Empty\">\r\n      <h6 class=\"header-text\">No task pending review</h6>\r\n      <p class=\"sub-text m-0\">A task should be up for review soon.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"taskService.fetchDone | async\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<!-- Task Review View Modal -->\r\n<div class=\"modal-container tmd\">\r\n  <div mdbModal #taskReviewViewModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\" *ngIf=\"taskDetails\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section px-3 py-1 card-pending-review\">\r\n              <p class=\"modal-title light-text w-100 pb-2 pr-0 \">Job Summary</p>\r\n              <h6 class=\"modal-title semi-dark-label w-600\">{{taskDetails.title}}</h6>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"closeViewModal()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n            <p class=\"modal-title light-text w-100 px-4\">{{taskDetails.description}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body white-bg\">\r\n          <hr class=\"mb-3 mt-0\">\r\n          <div class=\"review-details\">\r\n            <h6 class=\"modal-title semi-dark-label w-100 mb-3\">Customer Details</h6>\r\n            <p class=\"light-text mb-0\">Device / Agent Number</p>\r\n            <h6 class=\"dark-text mb-2\">{{taskDetails.deviceOrAgentNumber || 'N/A'}}</h6>\r\n            <p class=\"light-text mb-0\">Address</p>\r\n            <h6 class=\"dark-text mb-2\">{{taskDetails.location.address}}</h6>\r\n            <p class=\"light-text mb-0\">Assigned to</p>\r\n            <h6 class=\"dark-text mb-2\">{{ getUserNameByUserId(taskDetails.assignee) }}</h6>\r\n            <p class=\"light-text mb-0\">Created by</p>\r\n            <h6 class=\"dark-text mb-2\">{{ getUserNameByUserId(taskDetails.assigner) }}</h6>\r\n          </div>\r\n          <hr class=\"my-3\">\r\n          <div class=\"review-details\">\r\n            <h6 class=\"modal-title semi-dark-label w-100 mb-3\">Field Summary</h6>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <p class=\"light-text mb-0\">Start Date/Time</p>\r\n                <h6 class=\"dark-text mb-2\">{{convertDateTime(taskDetails.templateFieldsValues.priorTemplate.startDateTime, \"DD MMMM YYYY\")}} | {{convertDateTime(taskDetails.startDateTime,\r\n                  \"hh:mma\")}}\r\n                </h6>\r\n              </div>\r\n              <div class=\"col\">\r\n                <p class=\"light-text mb-0\">End Date/Time</p>\r\n                <h6 class=\"dark-text mb-2\">{{convertDateTime(taskDetails.templateFieldsValues.priorTemplate.endDateTime, \"DD MMMM YYYY\")}} | {{convertDateTime(taskDetails.endDateTime,\r\n                  \"hh:mma\")}}\r\n                </h6>\r\n              </div>\r\n            </div>\r\n            <p class=\"light-text mb-0\">Price Summary</p>\r\n\r\n            <div class=\"d-flex justify-content-between align-items-center mb-2\">\r\n              <h6 class=\"dark-text mb-0\">{{computePrice(taskDetails)}}</h6>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"taskComments.length\">\r\n              <hr class=\"w-50 mx-0 align-self-center\">\r\n              <p class=\"csm mb-1\">Comments</p>\r\n\r\n              <div *ngFor=\"let comment of taskComments  | slice:0:1\">\r\n                <div class=\"d-flex justify-content-between align-items-center\">\r\n                  <h6 class=\"dark-text m-0\">{{getUserNameByUserId(comment.userId)}}\r\n\r\n                    <span class=\"light-text ml-3\">\r\n                      {{convertDateTime(comment.date, 'MMM Do YYYY, h:mm a') }}\r\n                    </span>\r\n\r\n                  </h6>\r\n                  <span class=\"comse\" [ngClass]=\"'comse__' + taskDetails.status.toLowerCase()\">\r\n                    {{comment.cause}}\r\n                  </span>\r\n                </div>\r\n                <p class=\"light-text mb-1\">\r\n                  {{comment.comment.substr(0,100)}} {{ comment.comment.length > 100 ? \"...\" : \"\"}}\r\n                </p>\r\n\r\n              </div>\r\n\r\n              <div class=\"d-flex justify-content-end\">\r\n                <p class=\"com__link m-0\" *ngIf=\"taskComments.length\" (click)=\"toggleComments()\">Previous Comments\r\n                  <i class=\"fa fa-caret-right\"></i>\r\n                </p>\r\n              </div>\r\n\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"checkIfImageExists\">\r\n              <h6 class=\"modal-title light-text w-100 my-3\">Additional Info</h6>\r\n              <div class=\"row px-2\">\r\n                <div class=\"col col-md-3\" *ngFor=\"let taskImage of taskImages;  let i = index\">\r\n                  <img alt=\"Task Image\" [src]=\"taskImage.source\" class=\"w-100 mb-2\" style=\"cursor: pointer\" (click)=\"showLightBox(i)\">\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"taskDetails.reviewer === loggedInUserId\" class=\"btn-groupe w-100 d-flex justify-content-end col-12 py-3\">\r\n          <button type=\"button\" class=\"btn btn--red\" (click)=\"reassignTaskPrompt()\" mdbRippleRadius>\r\n            Reject\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn--green\" (click)=\"approveTask(taskDetails)\" mdbRippleRadius>\r\n            Approve\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal-content comment-section\" [ngClass]=\"{'active': showComments}\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"row m-0 head-content\">\r\n            <!-- [ngClass]=\"'card-' + taskDetails.status.toLowerCase().replace(' ', '-')\" -->\r\n            <div class=\"title-section px-3 py-1\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\">\r\n                <i (click)=\"toggleComments()\" class=\"fa fa-caret-left com__link\"></i> Most Recent Comments</h6>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"closeViewModal()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div *ngFor=\"let comment of taskComments  | slice:0:1\">\r\n            <div class=\"d-flex justify-content-between align-items-center\">\r\n              <h6 class=\"dark-text m-0\">{{getUserNameByUserId(comment.userId)}}\r\n                <span class=\"light-text ml-3\">\r\n                  {{convertDateTime(comment.date, 'MMM Do YYYY, h:mm a') }}\r\n                </span>\r\n              </h6>\r\n              <span class=\"comse\" [ngClass]=\"'comse__' + taskDetails.status.toLowerCase()\">\r\n                {{comment.cause}}\r\n              </span>\r\n            </div>\r\n            <p class=\"light-text mb-1\">\r\n              {{comment.comment.substr(0,100)}} {{ comment.comment.length > 100 ? \"...\" : \"\"}}\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-container\">\r\n  <div mdbModal #carouselModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\r\n    <div class=\"carousel-modal-container\" role=\"document\">\r\n      <div class=\"closeCarousel\" (click)=\"hideLightBox()\">\r\n        <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\r\n      </div>\r\n      <div class=\"modal-content carousel-modal\">\r\n        <mdb-carousel #addInfoCarousel class=\"carousel slide carousel-fade\" [animation]=\"'fade'\" [interval]=\"0\">\r\n          <mdb-slide *ngFor=\"let taskImage of taskImages\">\r\n            <img class=\"w-100\" alt=\"Task Image\" [src]=\"taskImage.source\">\r\n            <div class=\"carousel-caption\">\r\n              <div class=\"animated fadeInDown\">\r\n                <p>{{taskImage.uploadTime}}</p>\r\n              </div>\r\n            </div>\r\n          </mdb-slide>\r\n        </mdb-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Reject Task Modal -->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #taskReviewRejectModal=\"mdb-modal\" class=\"modal fade\" id=\"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header semi-grey-bg p-4\">\r\n          <h4 class=\"dark-text w-100 mb-0\">Reasons</h4>\r\n        </div>\r\n        <div class=\"modal-body mb-0\">\r\n          <div class=\"row m-0\">\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"md-form form-sm m-0\">\r\n                <input mdbActive type=\"text\" id=\"title\" placeholder=\"Please add comments\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-groupe w-100 d-flex justify-content-end py-2\">\r\n            <button class=\"btn text-uppercase btn-flat deep-blue-text\" (click)=\"taskReviewRejectModal.hide()\" mdbRippleRadius>Cancel</button>\r\n            <button class=\"btn text-uppercase btn-flat grey-text\" (click)=\"rejectTask(taskDetails)\" mdbRippleRadius>Send</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Reassign Task Modal -->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #taskReviewReassignModal=\"mdb-modal\" class=\"modal fade\" id=\"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header semi-grey-bg p-4\">\r\n          <h4 class=\"dark-text w-100 mb-0\">Re-assign Task</h4>\r\n        </div>\r\n        <div class=\"modal-body mb-0\">\r\n          <div class=\"row m-0 py-2\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"md-form form-sm m-0\">\r\n                <mdb-ng-select [options]=\"users\" (focusin)=\"assigneeActive = true\" name=\"newAssignee\" #newAssignee ngModel id=\"assignee\" placeholder=\"Assignee\"></mdb-ng-select>\r\n                <label [ngClass]=\"assigneeActive ? 'label-active' : '' \" class=\"\" for=\"assignee\">Assignee</label>              \r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"md-form form-sm m-0\">\r\n                <input type=\"text\" name=\"newComments\" #newComments ngModel id=\"comments\" placeholder=\"Comments\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n              <div class=\"md-form form-sm m-0\">\r\n                <!-- file input -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-groupe w-100 d-flex justify-content-end py-2\">\r\n            <button class=\"btn text-uppercase btn-flat grey-textt\" (click)=\"taskReviewReassignModal.hide()\" mdbRippleRadius>Cancel</button>\r\n            <button class=\"btn text-uppercase btn-flat deep-blue-text \" (click)=\"reassignTask(taskDetails, newAssignee, newComments)\"\r\n              mdbRippleRadius>Send</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/task-review/task-review.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n.card-unassigned {\n  border-left: 5px solid #c80c24; }\n\n.card-assigned {\n  border-left: 5px solid #1ea9f4; }\n\n.card-declined {\n  border-left: 5px solid #f91e29; }\n\n.card-in-progress {\n  border-left: 5px solid #0d609c; }\n\n.card-pending-review {\n  border-left: 5px solid #f2ce4a; }\n\n.card-paused {\n  border-left: 5px solid #fba94a; }\n\n.card-done {\n  border-left: 5px solid #4caf50; }\n\n.card-accepted {\n  border-left: 5px solid #33db78; }\n\n.unassigned-icon {\n  color: #c80c24; }\n\n.assigned-icon {\n  color: #1ea9f4; }\n\n.declined-icon {\n  color: #f91e29; }\n\n.accepted-icon {\n  color: #33db78; }\n\n.in-progress-icon {\n  color: #0d609c; }\n\n.paused-icon {\n  color: #fba94a; }\n\n.pending-review-icon {\n  color: #f2ce4a; }\n\n.completed-icon {\n  color: #4caf50; }\n\n.alert-icon {\n  color: #Eb5757; }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\ntable tr:nth-child(even) {\n  background-color: #f9f9f9; }\n\ntable tr:hover .table-icon {\n  visibility: visible; }\n\ntable th {\n  font-weight: 500;\n  cursor: pointer; }\n\ntable th,\ntable td {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-top: 1px solid #f9f9f9 !important;\n  color: #252525; }\n\ntable .bold-text {\n  font-weight: bold;\n  color: #4f4f4f; }\n\ntable .table-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\ntable .table-icon {\n  visibility: hidden;\n  color: #9a9a9a;\n  font-size: 1rem;\n  cursor: pointer; }\n\ntable .table-icon:not(:last-child) {\n    margin-right: 10px; }\n\ntable .table-icon--border {\n    visibility: hidden; }\n\ntable .fa-toggle-on {\n  color: #4caf50; }\n\n@media (max-width: 575px) {\n  table td,\n  th {\n    font-size: 0.6rem; }\n  .table-icons {\n    display: block !important; }\n  .table-icon {\n    visibility: visible !important;\n    width: 100% !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .table-icons {\n    visibility: visible;\n    display: block !important; } }\n\n.btn-floating {\n  right: 0;\n  bottom: 0; }\n\n.mb {\n  margin-bottom: 1.5rem !important; }\n\n.select-label {\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  position: absolute;\n  top: 0.8rem;\n  left: 0; }\n\n.label-active {\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n  color: #bbbbbb !important;\n  visibility: visible; }\n\n.label-inactive {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  color: #bbbbbb !important; }\n\n@media (max-width: 575px) {\n  #unseen table td:nth-child(3),\n  #unseen table th:nth-child(3),\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6),\n  #unseen table td:nth-child(7),\n  #unseen table th:nth-child(7),\n  #unseen table td:nth-child(8),\n  #unseen table th:nth-child(8),\n  #unseen table td:nth-child(9),\n  #unseen table th:nth-child(9) {\n    display: none; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  #unseen table td:nth-child(3),\n  #unseen table th:nth-child(3),\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6),\n  #unseen table td:nth-child(8),\n  #unseen table th:nth-child(8) {\n    display: none; } }\n\n.carousel-modal {\n  margin-top: 5% !important;\n  width: 30%;\n  margin: auto; }\n\n.carousel-modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  max-width: 100% !important;\n  background: black;\n  height: 100%; }\n\n.closeCarousel {\n  position: absolute;\n  right: 25px;\n  top: 25px;\n  cursor: pointer; }\n\n.carousel-caption {\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.11); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-review/task-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_task_task_review_service__ = __webpack_require__("../../../../../src/app/shared/task/task-review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_team_team__ = __webpack_require__("../../../../../src/app/shared/team/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_team_team_stack__ = __webpack_require__("../../../../../src/app/shared/team/team.stack.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_team_team_service__ = __webpack_require__("../../../../../src/app/shared/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_utility_basic_functions__ = __webpack_require__("../../../../../src/app/shared/utility/basic-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TaskReviewComponent = (function () {
    function TaskReviewComponent(userService, teamService, teamStack, taskService, authService, basicFunctions, router, route) {
        this.userService = userService;
        this.teamService = teamService;
        this.teamStack = teamStack;
        this.taskService = taskService;
        this.authService = authService;
        this.basicFunctions = basicFunctions;
        this.router = router;
        this.route = route;
        this.tasks = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.users = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.taskCount = 0;
        this.team = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_7__shared_team_team__["a" /* Team */]());
        this.teamLeadName = "";
        this.teamMembers = [];
        this.teamName = "";
        this.showComments = false;
        this.taskComments = [];
        this.taskImages = [];
        this.checkIfImageExists = false;
        this.order = "title";
        this.refId = "";
        this.assigneeActive = false;
    }
    TaskReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamStack.reset();
        this.generateTaskCards();
        if (this.authService.getUserId()) {
            this.loggedInUserId = this.authService.getUserId();
        }
        this.teamService.loggedInUserDownlines.subscribe(function (data) {
            _this.users = data.map(function (elem) {
                return {
                    value: elem,
                    label: _this.getUserNameByUserId(elem)
                };
            });
        });
        this.teamStack.leadTeams.subscribe(function (data) {
            if (data && data[0]) {
                _this.teamLeadName = _this.getUserNameByUserId(data[0].teamLead);
                _this.teamName = data
                    .map(function (elem) {
                    return elem.teamName;
                })
                    .join(", ");
            }
        });
        this.teamStack.teamMembers.subscribe(function (data) {
            var leadId = _this.teamStack.leadTeams.value[0] ? _this.teamStack.leadTeams.value[0].teamLead : "";
            _this.teamMembers = Array.from(data);
            _this.teamMembers = _this.teamMembers.filter(function (v) { return v !== leadId; });
        });
        this.tasks.subscribe(function (data) {
            _this.taskCount = data.length;
        });
        this.showNotificationTask();
    };
    TaskReviewComponent.prototype.toggleComments = function () {
        this.showComments = !this.showComments;
    };
    TaskReviewComponent.prototype.formatComment = function (comment) {
        return comment.split("-")[1];
    };
    TaskReviewComponent.prototype.showNotificationTask = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                var refId_1 = params.id;
                var sub_1 = _this.taskService.fetchDone.subscribe(function (data) {
                    if (data) {
                        _this.taskService.getOneTask(refId_1).subscribe(function (taskData) {
                            var task = taskData.body;
                            if (task && task["data"] && task["data"][refId_1]) {
                                _this.viewTaskReviewDetails(task["data"][refId_1]);
                            }
                        }, function (err) {
                            setTimeout(function () { return _this.userService.showError("Task Unavailable/Deleted"); });
                            _this.router.navigate(["/home/tasks/review"]);
                        }, function () {
                            if (sub_1) {
                                sub_1.unsubscribe();
                            }
                        });
                    }
                });
            }
        });
    };
    TaskReviewComponent.prototype.generateTaskCards = function (id) {
        if (id === void 0) { id = this.authService.getUserId(); }
        // const sub = this.teamService.getTeamsByLead(id, "review").subscribe();
        this.taskService.getDownlineTasks().subscribe();
        this.tasks = this.taskService.downlineTasks;
        // sub.unsubscribe();
    };
    TaskReviewComponent.prototype.showLightBox = function (i) {
        this.addInfoCarousel.selectSlide(i);
        this.carouselModal.show();
    };
    TaskReviewComponent.prototype.hideLightBox = function () {
        this.carouselModal.hide();
    };
    TaskReviewComponent.prototype.convertDateTime = function (dateTime, format) {
        if (dateTime === 0 || dateTime === undefined) {
            return "-";
        }
        return __WEBPACK_IMPORTED_MODULE_2_moment__(new Date(dateTime)).format(format);
    };
    TaskReviewComponent.prototype.getUserNameByUserId = function (userId) {
        return this.userService.getUserNameByUserId(userId);
    };
    TaskReviewComponent.prototype.closeViewModal = function () {
        var _this = this;
        var routeModal = this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                _this.taskReviewViewModal.hide();
                _this.router.navigate(["/home/tasks/review"]);
            }
            else {
                _this.taskReviewViewModal.hide();
            }
            if (routeModal) {
                routeModal.unsubscribe();
            }
        });
    };
    TaskReviewComponent.prototype.viewTaskReviewDetails = function (task) {
        this.taskComments =
            task.comments.sort(function (a, b) {
                if (a.date > b.date) {
                    return -1;
                }
                if (a.date < b.date) {
                    return 1;
                }
                return 0;
            }) || [];
        this.showComments = false;
        this.taskDetails = task;
        if (this.taskDetails.hasOwnProperty("images")) {
            this.taskImages = this.taskDetails.images.imagesGrouped;
            this.checkIfImageExists = true;
        }
        else {
            this.taskImages = [];
            this.checkIfImageExists = false;
        }
        this.taskReviewViewModal.show();
    };
    TaskReviewComponent.prototype.computePrice = function (task) {
        var currency = task.template.currency || "", taskCost = task.cost;
        var totalCost = Object.keys(taskCost).reduce(function (sum, value) {
            return sum + Number(taskCost[value]);
        }, 0);
        return currency + " " + totalCost;
    };
    TaskReviewComponent.prototype.getUserForTaskReview = function (reviewTask) {
        var _this = this;
        var userList = reviewTask.assignee
            .map(function (userId) {
            return _this.userService.users.value
                .filter(function (t) {
                return t.userId === userId;
            })
                .map(function (t) {
                return t.firstName;
            })
                .join("");
        })
            .join(", ");
        if (userList.length) {
            return userList;
        }
        else {
            return "N/A";
        }
    };
    TaskReviewComponent.prototype.reassignTask = function (task, user, reason) {
        var reassignTask = {
            status: "Assigned",
            assignee: user.value,
            comment: reason.value
        };
        this.taskReviewReassignModal.hide();
        this.taskService.updateTaskStatus(task.taskId, reassignTask);
    };
    TaskReviewComponent.prototype.approveTask = function (task) {
        this.taskReviewViewModal.hide();
        var approveTask = { status: "Done" };
        this.taskService.updateTaskStatus(task.taskId, approveTask);
    };
    TaskReviewComponent.prototype.reassignTaskPrompt = function (task) {
        this.taskDetails = task;
        this.taskReviewViewModal.hide();
        this.taskReviewReassignModal.show();
    };
    TaskReviewComponent.prototype.rejectTaskPrompt = function () {
        this.taskReviewViewModal.hide();
        this.taskReviewRejectModal.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("taskReviewViewModal"),
        __metadata("design:type", Object)
    ], TaskReviewComponent.prototype, "taskReviewViewModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("taskReviewRejectModal"),
        __metadata("design:type", Object)
    ], TaskReviewComponent.prototype, "taskReviewRejectModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("taskReviewReassignModal"),
        __metadata("design:type", Object)
    ], TaskReviewComponent.prototype, "taskReviewReassignModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("carouselModal"),
        __metadata("design:type", Object)
    ], TaskReviewComponent.prototype, "carouselModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("addInfoCarousel"),
        __metadata("design:type", Object)
    ], TaskReviewComponent.prototype, "addInfoCarousel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], TaskReviewComponent.prototype, "body", void 0);
    TaskReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-task-review",
            template: __webpack_require__("../../../../../src/app/task/task-review/task-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-review/task-review.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_team_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_team_team_stack__["a" /* TeamStack */],
            __WEBPACK_IMPORTED_MODULE_4__shared_task_task_review_service__["a" /* TaskReviewService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_utility_basic_functions__["a" /* BasicFunctions */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], TaskReviewComponent);
    return TaskReviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-review/task-review.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReviewModule", function() { return TaskReviewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_task_task_review_task_review_component__ = __webpack_require__("../../../../../src/app/task/task-review/task-review.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_task_task_review_task_review_component__["a" /* TaskReviewComponent */] }];
var TaskReviewModule = (function () {
    function TaskReviewModule() {
    }
    TaskReviewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_task_task_review_task_review_component__["a" /* TaskReviewComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], TaskReviewModule);
    return TaskReviewModule;
}());



/***/ })

});
//# sourceMappingURL=task-review.module.chunk.js.map