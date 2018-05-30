webpackJsonp(["in-activetasks.module"],{

/***/ "../../../../../src/app/task/in-activetasks/in-activetasks.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Search and Sort Section -->\r\n<div #body class=\"row p-4 m-0 content-top bg-white wow align-items-center justify-content-between\" style=\"animation-name: none; visibility: visible;\">\r\n  <div class=\"col-md-auto py-1 px-0\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"!taskCount\">{{ taskCount }} {{ taskCount == 1 ? 'task' : 'tasks'}} available.</h6>\r\n  </div>\r\n\r\n  <div class=\"col-md-auto d-flex align-items-center py-1 px-0\">\r\n    <a class=\"team-stack--arrow\" *ngIf=\"teamStack.$hasPrev | async\" (click)=\"teamStack.prev()\">\r\n      <i class=\"fa fa-caret-left\"></i>\r\n    </a>\r\n    <span *ngIf=\"teamLeadName !== '' && teamLeadName !== 'N/A'\" class=\"team-stack--name text-nowrap\" placement=\"bottom\" [mdbTooltip]=\"teamLeadName + ' (' + teamName + ')'\">\r\n      {{ teamLeadName }}\r\n    </span>\r\n    <a class=\"team-stack--arrow\" *ngIf=\"teamStack.$hasNext | async\" (click)=\"teamStack.next()\">\r\n      <i class=\"fa fa-caret-right\"></i>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"col-md-auto py-1 px-0\">\r\n    <div class=\"btn-group\" dropdown>\r\n      <button dropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-sort waves-light px-3\" type=\"button\" mdbRippleRadius>\r\n        View Team Members\r\n      </button>\r\n      <div *ngIf=\"teamMembers.length; else no_members\" class=\"dropdown-menu\">\r\n        <a *ngFor=\"let member of teamMembers\" class=\"dropdown-item px-3\" (click)=\"generateTaskCards(member)\" mdbRippleRadius>{{ getUserNameByUserId(member) }}</a>\r\n      </div>\r\n      <ng-template #no_members>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item px-3\">No team members available</a>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-auto py-1 px-0\">\r\n    <div class=\"btn-group\" dropdown>\r\n      <button dropdownToggle class=\"btn btn-primary dropdown-toggle dropdown-toggle-sort waves-light px-3\" type=\"button\" mdbRippleRadius>\r\n        Filter by\r\n      </button>\r\n      <div class=\"dropdown-menu\">\r\n        <a class=\"dropdown-item px-3\" (click)=\"sort(undefined)\" mdbRippleRadius>All</a>\r\n        <a class=\"dropdown-item px-3\" (click)=\"sort('unassigned')\" mdbRippleRadius>Unassigned\r\n          <i class=\"fa fa-circle unassigned-icon\"></i>\r\n        </a>\r\n        <a class=\"dropdown-item px-3\" (click)=\"sort('declined')\" mdbRippleRadius>Declined\r\n          <i class=\"fa fa-circle declined-icon\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-auto py-1 px-0\">\r\n    <div class=\"input-group \">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input pr-5\" placeholder=\"Search by task title\" [ngModel]=\"searchQuery\" (ngModelChange)=\"searchValueChange($event)\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content-body\">\r\n  <div id=\"unseen\" *ngIf=\"taskCount && (taskService.fetchDone | async)\">\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>S/N</th>\r\n          <th (click)=\"sortBy('title')\">Task Title\r\n            <i *ngIf=\"order === 'title'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('template')\">Template\r\n            <i *ngIf=\"order === 'template'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('iucNumber')\">IUC Number\r\n            <i *ngIf=\"order === 'iucNumber'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('assignee')\">Assigned To\r\n            <i *ngIf=\"order === 'assignee'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('reviewer')\">Reviewer Name\r\n            <i *ngIf=\"order === 'reviewer'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('startDate')\">Start Date\r\n            <i *ngIf=\"order === 'startDate'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('declinedDate')\">Date Declined\r\n            <i *ngIf=\"order === 'declinedDate'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('frequency')\">Frequency\r\n            <i *ngIf=\"order === 'frequency'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th (click)=\"sortBy('status')\">Status\r\n            <i *ngIf=\"order === 'status'\" class=\"fa fa-caret-down\"></i>\r\n          </th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let task of tasks | async | orderBy : order; let i = index\">\r\n          <th scope=\"row\">{{i+1}}</th>\r\n          <td class=\"bold-text\">{{ basicFunctions.formatChar(task.title) }}</td>\r\n          <td>\r\n            <p class=\"mb-0\" *ngIf=\"task.template.name === '';  else emptyField\"> N/A </p>\r\n            <ng-template #emptyField>{{ basicFunctions.formatChar(task.template.name) }}</ng-template>\r\n          </td>\r\n          <td>{{ basicFunctions.formatChar(task.deviceOrAgentNumber) }}</td>\r\n          <td>{{ basicFunctions.formatChar(getUserNameByUserId(task.assignee)) }}</td>\r\n          <td>{{ basicFunctions.formatChar(getUserNameByUserId(task.reviewer)) }}</td>\r\n          <td>{{ convertDateTime(task.templateFieldsValues.priorTemplate.startDateTime, \"DD MMMM YYYY\") }}</td>\r\n          <td>{{ convertDateTime(task.templateFieldsValues.priorTemplate.endDateTime, \"DD MMMM YYYY\") }}</td>\r\n          <td>{{ task.frequency }}</td>\r\n          <td>\r\n            <i *ngIf=\"task.overdue\" class=\"fa fa-exclamation-circle alert-icon\"></i>\r\n            <i *ngIf=\"task.status === 'Unassigned'\" class=\"fa fa-circle unassigned-icon\"></i>\r\n            <i *ngIf=\"task.status === 'Declined'\" class=\"fa fa-circle declined-icon\"></i>\r\n            {{ task.status }}\r\n          </td>\r\n          <td>\r\n            <div class=\"table-icons\">\r\n              <i class=\"fa fa-eye table-icon\" title=\"View Task\" (click)=\"viewTaskDetails(task)\"></i>\r\n              <i *ngIf=\"task.reviewer == loggedInUser.userId || task.assigner == loggedInUser.userId\" class=\"fa fa-pencil table-icon\" title=\"Re-assign Task\"\r\n                (click)=\"reassignTaskPrompt(task)\"></i>\r\n              <i *ngIf=\"task.reviewer == loggedInUser.userId || task.assigner == loggedInUser.userId\" class=\"fa fa-trash table-icon\" title=\"Delete Task\"\r\n                (click)=\"confirmDelete(task)\"></i>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count wow fadeIn\" *ngIf=\"!taskCount && (taskService.fetchDone | async)\">\r\n    <div class=\"col-md-4 py-4\">\r\n      <img src=\"../../../assets/svg/group.svg\" alt=\"Empty\">\r\n      <h6 class=\"header-text\">No tasks found</h6>\r\n      <p class=\"sub-text m-0\">There are currently no tasks declined or unassigned.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"taskService.fetchDone | async\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<!-- Task View Modal -->\r\n<div class=\"modal-container tmd\">\r\n  <div mdbModal #taskViewModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section px-3 py-1\" [ngClass]=\"'card-' + taskDetails.status.toLowerCase().replace(' ', '-')\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\">{{ taskDetails.title }}</h6>\r\n              <p class=\"modal-title light-text w-100\">{{taskDetails.deviceOrAgentNumber || 'N/A'}}</p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n\r\n              <button *ngIf=\"taskDetails.reviewer == loggedInUser.userId || taskDetails.assigner == loggedInUser.userId\" class=\"btn align-self-center\"\r\n                mdbTooltip=\"Delete Task\" placement=\"top\" (click)=\"confirmDelete(taskDetails)\" mdbRippleRadius>\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"closeViewModal()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <p class=\"light-text mb-0\">Template</p>\r\n          <h6 class=\"dark-text mb-2\">{{ taskDetails.template ? taskDetails.template.name : 'N/A'}}</h6>\r\n          <p class=\"light-text mb-0\">Frequency</p>\r\n          <h6 class=\"dark-text mb-2\">{{taskDetails.frequency}}</h6>\r\n          <p class=\"light-text mb-0\">Address</p>\r\n          <h6 class=\"dark-text mb-2\">{{ taskDetails.location ? taskDetails.location.address : \"N/A\"}}</h6>\r\n          <p class=\"light-text mb-0\">Price</p>\r\n          <p class=\"dark-text mb-2\">{{ computePrice(taskDetails) }}</p>\r\n          <p class=\"light-text mb-0\">Issue Date</p>\r\n          <h6 class=\"dark-text mb-2\">{{convertDateTime(taskDetails.createdAt, \"DD MMMM YYYY\")}}</h6>\r\n          <p class=\"light-text mb-0\">Time</p>\r\n          <h6 class=\"dark-text mb-2\">{{convertDateTime(taskDetails.createdAt, \"hh:mma\")}}</h6>\r\n          <p class=\"light-text mb-0\">Assigned to</p>\r\n          <h6 class=\"dark-text mb-2\">{{ getUserNameByUserId(taskDetails.assignee) }}</h6>\r\n          <p class=\"light-text mb-0\">Reviewer</p>\r\n          <h6 class=\"dark-text mb-2\">{{ getUserNameByUserId(taskDetails.assigner) }}</h6>\r\n          <p class=\"light-text mb-0\">Task Description</p>\r\n\r\n          <div class=\"d-flex justify-content-between align-items-center mb-2\">\r\n            <h6 class=\"dark-text m-0\">{{taskDetails.description || 'N/A'}}</h6>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"taskComments.length\">\r\n            <hr class=\"w-50 mx-0 align-self-center\">\r\n            <p class=\"csm mb-1\">Comments</p>\r\n\r\n            <div *ngFor=\"let comment of taskComments  | slice:0:1\">\r\n              <div class=\"d-flex justify-content-between align-items-center\">\r\n                <h6 class=\"dark-text m-0\">{{getUserNameByUserId(comment.userId)}}\r\n\r\n                  <span class=\"light-text ml-3\">\r\n                    {{convertDateTime(comment.date, 'MMM Do YYYY, h:mm a') }}\r\n                  </span>\r\n\r\n                </h6>\r\n                <span class=\"comse\" [ngClass]=\"'comse__' + taskDetails.status.toLowerCase()\">\r\n                  {{comment.cause}}\r\n                </span>\r\n              </div>\r\n              <p class=\"light-text mb-1\">\r\n                {{comment.comment.substr(0,100)}} {{ comment.comment.length > 100 ? \"...\" : \"\"}}\r\n              </p>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div *ngIf=\"taskDetails.reviewer == loggedInUser.userId || taskDetails.assigner == loggedInUser.userId\" class=\"btn-groupe w-100 d-flex justify-content-start col-6 py-3\">\r\n                <button type=\"button\" class=\"btn btn--red no-padding\" (click)=\"reassignTaskPrompt(taskDetails)\" mdbRippleRadius>\r\n                  Re-assign\r\n                </button>\r\n              </div>\r\n              <div class=\"d-flex justify-content-end col-6 py-3\">\r\n                <p class=\"com__link m-0\" *ngIf=\"taskComments.length\" (click)=\"toggleComments()\">Previous Comments\r\n                  <i class=\"fa fa-caret-right\"></i>\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-container>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"modal-content comment-section\" [ngClass]=\"{'active': showComments}\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section px-3 py-1\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\">\r\n                <i (click)=\"toggleComments()\" class=\"fa fa-caret-left com__link\"></i> Most Recent Comments</h6>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"closeViewModal()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div *ngFor=\"let comment of taskComments  | slice:0:1\">\r\n            <div class=\"d-flex justify-content-between align-items-center\">\r\n              <h6 class=\"dark-text m-0\">{{getUserNameByUserId(comment.userId)}}\r\n                <span class=\"light-text ml-3\">\r\n                  {{convertDateTime(comment.date, 'MMM Do YYYY, h:mm a') }}\r\n                </span>\r\n              </h6>\r\n              <span class=\"comse\" [ngClass]=\"'comse__' + taskDetails.status.toLowerCase()\">\r\n                {{comment.cause}}\r\n              </span>\r\n            </div>\r\n            <p class=\"light-text mb-1\">\r\n              {{comment.comment.substr(0,100)}} {{ comment.comment.length > 100 ? \"...\" : \"\"}}\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Confirm Delete Modal -->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #taskDeleteModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myDeleteConfirmationModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n      <div class=\"modal-content confirm-modal\">\r\n        <div class=\"modal-body p-4\">\r\n          <h4>\r\n            Are you sure you want to delete \"{{ taskForDelete.title }}\"?\r\n          </h4>\r\n          <p class=\"pr-4\">\r\n            Please take your time to review this task details.\r\n          </p>\r\n          <div class=\"btn-groupe w-100 d-flex justify-content-end\">\r\n            <button class=\"btn text-uppercase\" (click)=\"taskDeleteModal.hide()\" mdbRippleRadius>Cancel</button>\r\n            <button class=\"btn text-uppercase\" (click)=\"deleteTask(taskForDelete)\" mdbRippleRadius>Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Reassign Task Modal -->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #inActiveTaskReassignModal=\"mdb-modal\" class=\"modal fade\" id=\"\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header semi-grey-bg p-4\">\r\n          <h4 class=\"dark-text w-100 mb-0\">Re-assign Task</h4>\r\n        </div>\r\n        <div class=\"modal-body mb-0\">\r\n          <div class=\"row m-0\">\r\n\r\n            <form #taskForm=\"ngForm\">\r\n              <div class=\"row m-0\">\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <input mdbActive type=\"text\" id=\"template\" [class.is-invalid]=\"template.errors && (template.dirty || template.touched)\" required\r\n                      #template=\"ngModel\" name=\"template\" [(ngModel)]=\"addTask.template.name\" [disabled]=\"true\" class=\"form-control disabled\">\r\n                    <label [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \" for=\"template\">Selected template</label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <input mdbActive type=\"text\" id=\"title\" [class.is-invalid]=\"title.errors && (title.dirty || title.touched)\" required #title=\"ngModel\"\r\n                      name=\"title\" [(ngModel)]=\"addTask.title\" class=\"form-control\">\r\n                    <label [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \" for=\"title\">Task title </label>\r\n                  </div>\r\n                  <div *ngIf=\"title.errors && (title.dirty || title.touched)\" class=\"col-md-12 \">\r\n                    <div [hidden]=\"!title.errors.required\" class=\"text-danger error\">\r\n                      <small class=\"val-error\">Please enter the Task name</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <input mdbActive type=\"text\" [disabled]=\"true\" id=\"deviceOrAgentNumber\" name=\"deviceOragentNos\" #deviceOrAgentNos=\"ngModel\"\r\n                      [(ngModel)]=\"addTask.deviceOrAgentNumber\" class=\"form-control disabled\">\r\n                    <label for=\"deviceOrAgentNumber\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Device/Agent Number</label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <input mdbActive type=\"text\" id=\"assignmentMode\" [class.is-invalid]=\"assignmentMode.errors && (assignmentMode.dirty || assignmentMode.touched)\"\r\n                      required #assignmentMode=\"ngModel\" name=\"template\" [(ngModel)]=\"addTask.templateFieldsValues.priorTemplate.assignmentMode\"\r\n                      [disabled]=\"true\" class=\"form-control disabled\">\r\n                    <label for=\"assignmentMode\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Assignment mode</label>\r\n                  </div>\r\n                </div>\r\n                <div *ngFor=\"let templateField of addTask.template.priorTemplate; let i = index\" class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <input *ngIf=\"templateField.type === 'text'\" mdbActive type=\"text\" [name]=\"templateField.fieldName\" [(ngModel)]=\"addTask.templateFieldsValues[templateField.fieldName]\"\r\n                      [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\" class=\"form-control disabled\">\r\n                    <div *ngIf=\"addTask.taskId.length === 0\">\r\n                      <label *ngIf=\"templateField.type === 'text'\" [for]=\"templateField.fieldName\" class=\"active\">{{templateField.fieldName}}</label>\r\n                    </div>\r\n\r\n                    <mdb-ng-select *ngIf=\"templateField.type === 'dropdown'\" name=\"templateField.fieldName\" [options]=\"options[i]\" [placeholder]=\"templateField.fieldName\"\r\n                      [(ngModel)]=\"addTask.templateFieldsValues[templateField.fieldName]\" (click)=\"getDropdownArray(templateField.dropDownValues, i)\"\r\n                      [disabled]=\"true\" class=\"disabled\" [filterEnabled]=\"true\" [ngModelOptions]=\"{standalone: true}\"></mdb-ng-select>\r\n                    <label class=\"label-active\" for=\"templateField.fieldName\">{{templateField.fieldName}}</label>\r\n\r\n                    <mdb-date-picker *ngIf=\"templateField.type === 'date'\" name=\"templateField.fieldName\" id=\"templateField.fieldName\" [placeholder]=\"templateField.fieldName\"\r\n                      [(ngModel)]=\"addTask.templateFieldsValues[templateField.fieldName]\" [ngModelOptions]=\"{standalone: true}\"\r\n                      class=\"disabled\" [disabled]=\"true\" required></mdb-date-picker>\r\n                    <div *ngIf=\"templateField.type === 'date'\">\r\n                      <label class=\"label-active\" for=\"templateField.fieldName\">{{templateField.fieldName}}</label>\r\n                    </div>\r\n\r\n\r\n                    <mdb-time-picker *ngIf=\"templateField.type === 'time'\" name=\"templateField.fieldName\" id=\"templateField.fieldName\" [twelvehour]=\"true\"\r\n                      [darktheme]=\"false\" [placeholder]=\"templateField.fieldName\" class=\"disabled\" [showClock]=\"false\" [(ngModel)]=\"addTask.templateFieldsValues[templateField.fieldName]\"\r\n                      [disabled]=\"true\" [ngModelOptions]=\"{standalone: true}\"></mdb-time-picker>\r\n                    <div *ngIf=\"templateField.type === 'time'\">\r\n                      <label class=\"label-active\" for=\"templateField.fieldName\">{{templateField.fieldName}}</label>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <mdb-ng-select [options]=\"frequency\" [filterEnabled]=\"true\" (ngModelChange)=\"onFrequencyChange($event)\" name=\"frequency\"\r\n                      id=\"frequency\" placeholder=\"Frequency\" (focusin)=\"frequencyActive = true\" [(ngModel)]=\"addTask.frequency\"\r\n                      required></mdb-ng-select>\r\n                    <label class=\"label-active\" for=\"frequency\">Frequency </label>\r\n                  </div>\r\n                </div>\r\n                <!--  -->\r\n\r\n                <ng-container *ngIf=\"showDate\">\r\n                  <div class=\"col-md-6 mb\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <mdb-date-picker #datePicker [options]=\"datePickerOptions\" (focusin)=\"startDateActive = true\" name=\"startDaten\" [(ngModel)]=\"startDate\"\r\n                        required></mdb-date-picker>\r\n                      <label class=\"label-active\" for=\"startDaten\">Start Date </label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-6 mb\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <mdb-time-picker name=\"startTime\" id=\"startTime\" (focusin)=\"startTimeActive = true\" [twelvehour]=\"true\" [darktheme]=\"false\"\r\n                        [(ngModel)]=\"startTime\" required></mdb-time-picker>\r\n                      <label class=\"label-active\" for=\"startTime\">Start Time </label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-6 mb\" *ngIf=\"showDuration\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <div class=\"row no-gutters duration-input\">\r\n                        <div class=\"col-9\">\r\n                          <input type=\"number\" name=\"duration\" placeholder=\"Duration\" (focusin)=\"durationActive = true\" (focusout)=\"durationActive = false\"\r\n                            min=\"0\" id=\"duration\" class=\"form-control\" [(ngModel)]=\"duration\" required>\r\n                          <label [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \" for=\"duration\">Duration </label>\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                          <mdb-ng-select [options]=\"durationOptions\" (ngModelChange)=\"onDurationChange($event)\" name=\"durationType\" id=\"durationType\"\r\n                            placeholder=\"Metric\" [(ngModel)]=\"durationType\" (focusin)=\"durationTypeActive = true\" required></mdb-ng-select>\r\n                          <label class=\"label-active\" for=\"durationType\">Metric </label>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </ng-container>\r\n\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <mdb-ng-select [options]=\"users\" id=\"assignee\" placeholder=\"Assigned to\" [class.is-invalid]=\"assign.errors && (assign.dirty || assign.touched)\"\r\n                      required #assign=\"ngModel\" name=\"assignee\" (ngModelChange)=\"onAssignedChange($event)\" [(ngModel)]=\"addTask.assignee\"></mdb-ng-select>\r\n                    <label class=\"label-active\" for=\"assignee\">Assigned to </label>\r\n                  </div>\r\n                  <div *ngIf=\"assign.errors && (assign.dirty || assign.touched)\" class=\"col-md-12 \">\r\n                    <div [hidden]=\"!assign.errors.required\" class=\"text-danger error\">\r\n                      <small class=\"val-error\">Please enter the Assigned to</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <mdb-ng-select [options]=\"filteredUsers\" [filterEnabled]=\"true\" id=\"reviewer\" placeholder=\"Reviewer\" [class.is-invalid]=\"review.errors && (review.dirty || review.touched)\"\r\n                      required #review=\"ngModel\" name=\"reviewer\" [(ngModel)]=\"addTask.reviewer\"></mdb-ng-select>\r\n                    <label class=\"label-active\" for=\"reviewer\">Reviewer </label>\r\n                  </div>\r\n                  <div *ngIf=\"review.errors && (review.dirty || review.touched)\" class=\"col-md-12 \">\r\n                    <div [hidden]=\"!review.errors.required\" class=\"text-danger error\">\r\n                      <small class=\"val-error\">Please enter the Reviewer</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- customerName, address and number  -->\r\n                <ng-container *ngIf=\"addTask.deviceOrAgentNumber\">\r\n                  <div class=\"col-md-6 mb\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <input mdbActive type=\"text\" id=\"customerName\" name=\"customerName\" [(ngModel)]=\"addTask.templateFieldsValues.priorTemplate.customerName\"\r\n                        class=\"form-control\" required>\r\n                      <label for=\"customerName\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Customer Name </label>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-md-6 mb\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <input mdbActive type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\" [(ngModel)]=\"addTask.templateFieldsValues.priorTemplate.customerPhoneNumber\"\r\n                        class=\"form-control\" required>\r\n                      <label for=\"phoneNumber\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Phone Number </label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-6 mb\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <div class=\"input-group lig\">\r\n                        <input mdbActive #locationInput type=\"text\" name=\"location\" id=\"location\" [(ngModel)]=\"addTask.location.address\" class=\"form-control\"\r\n                          required>\r\n                        <label for=\"location\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Address </label>\r\n                        <span class=\"input-group-addon search-icon\" (click)=\"showMap()\" style=\"cursor:pointer;background:transparent\">\r\n                          <i class=\"fa fa-map-marker\"></i>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n\r\n                <div class=\"col-md-12 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <textarea mdbActive type=\"text\" id=\"task_note\" name=\"desc\" class=\"md-textarea\" [(ngModel)]=\"addTask.description\"></textarea>\r\n                    <label for=\"task_note\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Description </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12 mb\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <input type=\"text\" name=\"newComments\" #newComments ngModel id=\"comments\">\r\n                    <label for=\"comments\" [ngClass]=\"addTask.taskId.length > 0  ? 'active' : '' \">Add Comments</label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"md-form form-sm m-0\">\r\n                    <!-- file input -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"md-form form-sm m-0\">\r\n                <!-- file input -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-groupe w-100 d-flex justify-content-end py-2\">\r\n            <button class=\"btn text-uppercase btn-flat grey-textt\" (click)=\"inActiveTaskReassignModal.hide()\" mdbRippleRadius>Cancel</button>\r\n            <button class=\"btn text-uppercase btn-flat deep-blue-text \" (click)=\"reassignTask(addTask, newComments, false)\" mdbRippleRadius>Update</button>\r\n            <button class=\"btn text-uppercase btn-flat deep-blue-text \" (click)=\"reassignTask(addTask, newComments, true)\" mdbRippleRadius>Re-assign</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- map modal -->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #mapModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mapModal\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content map-modal\">\r\n        <div class=\"modal-body p-0\">\r\n          <agm-map #locationMap [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"true\" (mapClick)=\"mapClicked($event)\">\r\n            <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [markerDraggable]=\"marker.draggable\" (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n          </agm-map>\r\n        </div>\r\n        <div class=\"modal-footer p-1\">\r\n          <div class=\"btn-groupe w-100 d-flex justify-content-end py-1\">\r\n            <button class=\"btn text-uppercase\" (click)=\"mapModal.hide()\" mdbRippleRadius>Cancel</button>\r\n            <button class=\"btn text-uppercase\" (click)=\"getAddress()\" mdbRippleRadius>done</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/in-activetasks/in-activetasks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n.card-unassigned {\n  border-left: 5px solid #c80c24; }\n\n.card-assigned {\n  border-left: 5px solid #1ea9f4; }\n\n.card-declined {\n  border-left: 5px solid #f91e29; }\n\n.card-in-progress {\n  border-left: 5px solid #0d609c; }\n\n.card-pending-review {\n  border-left: 5px solid #f2ce4a; }\n\n.card-paused {\n  border-left: 5px solid #fba94a; }\n\n.card-done {\n  border-left: 5px solid #4caf50; }\n\n.card-accepted {\n  border-left: 5px solid #33db78; }\n\n.unassigned-icon {\n  color: #c80c24; }\n\n.assigned-icon {\n  color: #1ea9f4; }\n\n.declined-icon {\n  color: #f91e29; }\n\n.accepted-icon {\n  color: #33db78; }\n\n.in-progress-icon {\n  color: #0d609c; }\n\n.paused-icon {\n  color: #fba94a; }\n\n.pending-review-icon {\n  color: #f2ce4a; }\n\n.completed-icon {\n  color: #4caf50; }\n\n.alert-icon {\n  color: #Eb5757; }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\ntable tr:nth-child(even) {\n  background-color: #f9f9f9; }\n\ntable tr:hover .table-icon {\n  visibility: visible; }\n\ntable th {\n  font-weight: 500;\n  cursor: pointer; }\n\ntable th,\ntable td {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-top: 1px solid #f9f9f9 !important;\n  color: #252525; }\n\ntable .bold-text {\n  font-weight: bold;\n  color: #4f4f4f; }\n\ntable .table-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\ntable .table-icon {\n  visibility: hidden;\n  color: #9a9a9a;\n  font-size: 1rem;\n  cursor: pointer; }\n\ntable .table-icon:not(:last-child) {\n    margin-right: 10px; }\n\ntable .table-icon--border {\n    visibility: hidden; }\n\ntable .fa-toggle-on {\n  color: #4caf50; }\n\n@media (max-width: 575px) {\n  table td,\n  th {\n    font-size: 0.6rem; }\n  .table-icons {\n    display: block !important; }\n  .table-icon {\n    visibility: visible !important;\n    width: 100% !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .table-icons {\n    visibility: visible;\n    display: block !important; } }\n\n.btn-floating {\n  right: 0;\n  bottom: 0; }\n\n.mb {\n  margin-bottom: 1.5rem !important; }\n\n.select-label {\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  position: absolute;\n  top: 0.8rem;\n  left: 0; }\n\n.label-active {\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n  color: #bbbbbb !important;\n  visibility: visible; }\n\n.label-inactive {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  color: #bbbbbb !important; }\n\n@media (max-width: 575px) {\n  #unseen table td, th {\n    font-size: 0.6rem; }\n  #unseen table td:nth-child(3),\n  #unseen table th:nth-child(3),\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6),\n  #unseen table td:nth-child(7),\n  #unseen table th:nth-child(7),\n  #unseen table td:nth-child(8),\n  #unseen table th:nth-child(8),\n  #unseen table td:nth-child(9),\n  #unseen table th:nth-child(9) {\n    display: none; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  #unseen table td:nth-child(3),\n  #unseen table th:nth-child(3),\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6),\n  #unseen table td:nth-child(8),\n  #unseen table th:nth-child(8) {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/in-activetasks/in-activetasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InActiveTasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typescripts_pro_date_picker_datepicker_component__ = __webpack_require__("../../../../../src/typescripts/pro/date-picker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_task_inactivetask_service__ = __webpack_require__("../../../../../src/app/shared/task/inactivetask.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_task_task_service__ = __webpack_require__("../../../../../src/app/shared/task/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_task_task__ = __webpack_require__("../../../../../src/app/shared/task/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_template_template__ = __webpack_require__("../../../../../src/app/shared/template/template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_template_template_service__ = __webpack_require__("../../../../../src/app/shared/template/template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_team_team__ = __webpack_require__("../../../../../src/app/shared/team/team.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_team_team_stack__ = __webpack_require__("../../../../../src/app/shared/team/team.stack.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_team_team_service__ = __webpack_require__("../../../../../src/app/shared/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_utility_basic_functions__ = __webpack_require__("../../../../../src/app/shared/utility/basic-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var InActiveTasksComponent = (function () {
    function InActiveTasksComponent(taskService, rootTaskService, userService, teamService, teamStack, templateService, ref, authService, basicFunctions, router, route) {
        this.taskService = taskService;
        this.rootTaskService = rootTaskService;
        this.userService = userService;
        this.teamService = teamService;
        this.teamStack = teamStack;
        this.templateService = templateService;
        this.ref = ref;
        this.authService = authService;
        this.basicFunctions = basicFunctions;
        this.router = router;
        this.route = route;
        this.taskDetails = new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */]();
        this.addTask = new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */]();
        this.taskForDelete = new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */]();
        this.taskCount = 0;
        this.team = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_12__shared_team_team__["a" /* Team */]());
        this.teamLeadName = "";
        this.teamMembers = [];
        this.teamName = "";
        this.showComments = false;
        this.taskComments = [];
        this.assignmentModeActive = false;
        this.frequencyActive = false;
        this.templateActive = false;
        this.templates = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.options = {};
        this.frequency = [];
        this.filteredUsers = [];
        this.assignmentModes = [{ value: "Manual Assignment", label: "Manual Assignment" }];
        this.templateForTask = new __WEBPACK_IMPORTED_MODULE_10__shared_template_template__["a" /* Template */]();
        this.showDate = false;
        this.showDuration = true;
        this.showAssigned = false;
        this.showReviewer = false;
        this.order = "title";
        this.selectedReviewer = "";
        this.refId = "";
    }
    InActiveTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamStack.reset();
        this.lat = 6.426013463543917;
        this.lng = 3.4273771048901835;
        this.zoom = 10;
        this.marker = {
            lat: 6.426013463543917,
            lng: 3.4273771048901835,
            label: "You",
            draggable: false
        };
        this.generateTaskCards();
        if (this.authService.getUserId()) {
            this.loggedInUser = this.authService.getUser();
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
        this.frequency = [
            { value: "Anytime", label: "Anytime" },
            { value: "One off", label: "One off" },
            { value: "Weekly", label: "Weekly" },
            { value: "Monthly", label: "Monthly" },
            { value: "Quarterly", label: "Quarterly" }
        ];
        this.filteredUsers = this.users.filter(function (v) {
            return v.value;
        });
        this.showNotificationTask();
    };
    InActiveTasksComponent.prototype.toggleComments = function () {
        this.showComments = !this.showComments;
    };
    InActiveTasksComponent.prototype.formatComment = function (comment) {
        return comment.split("-")[1];
    };
    InActiveTasksComponent.prototype.showNotificationTask = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                var refId_1 = params.id;
                var sub_1 = _this.taskService.fetchDone.subscribe(function (data) {
                    if (data) {
                        _this.taskService.getOneTask(refId_1).subscribe(function (taskData) {
                            var task = taskData.body;
                            if (task && task["data"] && task["data"][refId_1]) {
                                _this.viewTaskDetails(task["data"][refId_1]);
                            }
                        }, function (err) {
                            setTimeout(function () { return _this.userService.showError("Task Unavailable/Deleted"); });
                            _this.router.navigate(["/home/tasks/inactive"]);
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
    InActiveTasksComponent.prototype.generateTaskCards = function (id) {
        if (id === void 0) { id = this.authService.getUserId(); }
        var sub = this.teamService.getTeamsByLead(id, this.taskService.fetchDone).subscribe();
        this.taskService.getDownlineTasks().subscribe();
        this.tasks = this.taskService.downlineTasks;
        sub.unsubscribe();
    };
    InActiveTasksComponent.prototype.sort = function (q) {
        this.taskService.sortBy(q);
    };
    InActiveTasksComponent.prototype.computePrice = function (task) {
        var currency = task.template.currency || "", taskCost = task.cost;
        var totalCost = Object.keys(taskCost).reduce(function (sum, value) {
            return sum + Number(taskCost[value]);
        }, 0);
        return currency + " " + totalCost;
    };
    InActiveTasksComponent.prototype.searchValueChange = function (q) {
        this.searchQuery = q;
        this.taskService.searchTerm.next(this.searchQuery);
    };
    InActiveTasksComponent.prototype.getUserNameByUserId = function (userId) {
        return this.userService.getUserNameByUserId(userId);
    };
    InActiveTasksComponent.prototype.closeViewModal = function () {
        var _this = this;
        var routeModal = this.route.queryParams.subscribe(function (params) {
            if (params && params.id) {
                _this.taskViewModal.hide();
                _this.router.navigate(["/home/tasks/inactive"]);
            }
            else {
                _this.taskViewModal.hide();
            }
            if (routeModal) {
                routeModal.unsubscribe();
            }
        });
    };
    InActiveTasksComponent.prototype.viewTaskDetails = function (task) {
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
        this.taskDetails = Object.assign(new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */](), task);
        this.taskViewModal.show();
    };
    InActiveTasksComponent.prototype.confirmDelete = function (task) {
        this.taskForDelete = Object.assign(new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */](), task);
        this.taskDeleteModal.show();
    };
    InActiveTasksComponent.prototype.deleteTask = function (task) {
        this.taskService.deleteTask(task);
        this.taskDeleteModal.hide();
        this.taskViewModal.hide();
    };
    InActiveTasksComponent.prototype.convertDateTime = function (dateTime, format) {
        if (dateTime === 0 || dateTime === undefined) {
            return "-";
        }
        return __WEBPACK_IMPORTED_MODULE_2_moment__(new Date(dateTime)).format(format);
    };
    InActiveTasksComponent.prototype.reassignTask = function (task, reason, reassign) {
        // reason is the comments for reassigning to be included later
        var momTime = __WEBPACK_IMPORTED_MODULE_2_moment__("" + this.startTime, ["h:mmA"]).format("HH:mm");
        var SDT = Date.parse(this.startDate + "T" + momTime + "Z");
        task.templateFieldsValues.priorTemplate.startDateTime = SDT;
        task.templateFieldsValues.priorTemplate.duration = this.endDate;
        task.template = this.templateForTask;
        if (reassign) {
            task.status = "Assigned";
        }
        var userId = this.authService.getUserId();
        task.assigner = task.assigner ? task.assigner : userId;
        this.inActiveTaskReassignModal.hide();
        this.taskService.updateTask(task);
        this.taskViewModal.hide();
        this.addTask = new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */]();
        this.showDate = false;
        this.startDate = null;
        this.startTime = null;
        this.duration = null;
        this.durationType = "";
        this.endDate = null;
        this.selectedTemplate = "";
        this.taskForm.reset();
    };
    InActiveTasksComponent.prototype.reassignTaskPrompt = function (task) {
        var _this = this;
        if (this.checkEditStatus(task)) {
            this.showDuration = false;
            this.addTask = Object.assign(new __WEBPACK_IMPORTED_MODULE_8__shared_task_task__["a" /* Task */](), task);
            var d = new Date(task.templateFieldsValues.priorTemplate.startDateTime);
            var day = d.getDate();
            var month = this.formatMonth(d.getMonth());
            var year = d.getFullYear();
            var date_1 = year + "-" + month + "-" + day;
            if (this.datePicker) {
                setTimeout(function () { return _this.datePicker.onUserDateInput(date_1); }, 0);
            }
            this.startTime = __WEBPACK_IMPORTED_MODULE_2_moment__(task.templateFieldsValues.priorTemplate.startDateTime).format("hh:mmA");
            this.taskViewModal.hide();
            this.inActiveTaskReassignModal.show();
        }
    };
    // map view
    InActiveTasksComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 12;
                _this.marker = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    label: "You",
                    draggable: false
                };
                _this.locationMap.triggerResize(false);
            });
        }
    };
    InActiveTasksComponent.prototype.watchPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.zoom = 10;
                _this.marker = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    label: "You",
                    draggable: false
                };
                _this.locationMap.triggerResize(false);
            });
        }
    };
    InActiveTasksComponent.prototype.showMap = function () {
        var _this = this;
        this.mapModal.show();
        setTimeout(function () {
            _this.locationMap.triggerResize(false);
        }, 500);
    };
    InActiveTasksComponent.prototype.mapClicked = function ($event) {
        this.marker.lat = $event.coords.lat;
        this.marker.lng = $event.coords.lng;
    };
    InActiveTasksComponent.prototype.markerDragEnd = function ($event) {
        this.marker.lat = $event.coords.lat;
        this.marker.lng = $event.coords.lng;
    };
    InActiveTasksComponent.prototype.getAddress = function () {
        var _this = this;
        this.taskService.getAddress(this.marker.lat, this.marker.lng).subscribe();
        setTimeout(function () {
            _this.addTask.location.address = _this.taskService.address;
            _this.mapModal.hide();
            _this.locationInput.nativeElement.focus();
        }, 1000);
    };
    // end map view
    InActiveTasksComponent.prototype.checkEditStatus = function (task) {
        if (task.assigner === this.loggedInUser.userId || this.loggedInUser.permissions.corona_web_task_mgt) {
            return true;
        }
        return false;
    };
    InActiveTasksComponent.prototype.formatMonth = function (n) {
        if (n === 0) {
            return "01";
        }
        return n < 10 ? "0" + n : "" + n;
    };
    InActiveTasksComponent.prototype.onAssignedChange = function (assignedTo) {
        if (assignedTo) {
            this.filteredUsers = this.users.filter(function (v) {
                return v.value !== assignedTo;
            });
            this.showReviewer = true;
        }
    };
    InActiveTasksComponent.prototype.onFrequencyChange = function (freq) {
        switch (freq) {
            case "Anytime":
                this.showDate = false;
                var allDurationOptions = [
                    { value: "hours", label: "Hours" },
                    { value: "days", label: "Days" },
                    { value: "weeks", label: "Weeks" },
                    { value: "months", label: "Months" }
                ];
                break;
            case "One off":
                this.showDate = true;
                this.durationOptions = allDurationOptions;
                break;
            case "Weekly":
                this.showDate = true;
                this.durationOptions = allDurationOptions.slice(0, 2);
                break;
            case "Monthly":
                this.showDate = true;
                this.durationOptions = allDurationOptions.slice(0, 3);
                break;
            case "Quarterly":
                this.showDate = true;
                this.durationOptions = allDurationOptions;
                break;
            default:
                break;
        }
    };
    InActiveTasksComponent.prototype.onDurationChange = function (dur) {
        switch (dur) {
            case "hours":
                this.endDate = this.duration * 3600000;
                break;
            case "days":
                this.endDate = this.duration * 86400000;
                break;
            case "weeks":
                this.endDate = this.duration * 604800000;
                break;
            case "months":
                this.endDate = this.duration * 2629800000;
                break;
            default:
                break;
        }
    };
    InActiveTasksComponent.prototype.sortBy = function (type) {
        this.order = type;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("taskViewModal"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "taskViewModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("taskDeleteModal"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "taskDeleteModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("inActiveTaskReassignModal"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "inActiveTaskReassignModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("mapModal"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "mapModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("locationInput"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "locationInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("locationMap"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "locationMap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("taskForm"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "taskForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], InActiveTasksComponent.prototype, "body", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("datePicker"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__typescripts_pro_date_picker_datepicker_component__["a" /* MDBDatePickerComponent */])
    ], InActiveTasksComponent.prototype, "datePicker", void 0);
    InActiveTasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-activetasks",
            template: __webpack_require__("../../../../../src/app/task/in-activetasks/in-activetasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/in-activetasks/in-activetasks.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_task_inactivetask_service__["a" /* InactiveTaskService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_task_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_team_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_team_team_stack__["a" /* TeamStack */],
            __WEBPACK_IMPORTED_MODULE_11__shared_template_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_utility_basic_functions__["a" /* BasicFunctions */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], InActiveTasksComponent);
    return InActiveTasksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/in-activetasks/in-activetasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InActiveTaskModule", function() { return InActiveTaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_task_in_activetasks_in_activetasks_component__ = __webpack_require__("../../../../../src/app/task/in-activetasks/in-activetasks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_task_in_activetasks_in_activetasks_component__["a" /* InActiveTasksComponent */] }];
var InActiveTaskModule = (function () {
    function InActiveTaskModule() {
    }
    InActiveTaskModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_task_in_activetasks_in_activetasks_component__["a" /* InActiveTasksComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], InActiveTaskModule);
    return InActiveTaskModule;
}());



/***/ })

});
//# sourceMappingURL=in-activetasks.module.chunk.js.map