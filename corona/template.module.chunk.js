webpackJsonp(["template.module"],{

/***/ "../../../../../src/app/template/template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row px-2 py-3 wow m-0\" style=\"animation-name: none; visibility: visible;\">\r\n  <div class=\"col-md-8 align-self-center\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"templateCount\">{{templateCount}} Template(s)</h6>\r\n  </div>\r\n  <div class=\"col-12 col-md-4 px-0 py-1\">\r\n    <div class=\"input-group template-search\">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by template name\" [ngModel]=\"searchQuery\" (ngModelChange)=\"searchValueChange($event)\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"(templateService.fetchDone | async)\">\r\n  <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count wow fadeIn\" *ngIf=\"!templateCount\">\r\n    <div class=\"col-md-4 py-4\">\r\n      <img src=\"../../assets/svg/addNew.svg\" alt=\"Add New\">\r\n      <h6 class=\"header-text\">No Template Record Found</h6>\r\n      <p class=\"sub-text m-0\">You currently have no Templates</p>\r\n      <p class=\"sub-text\">Add a template by clicking on the blue button below </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row m-0\">\r\n    <div class=\"col-sm-6 col-md-4 col-lg-3 p-2\" *ngFor=\"let template of templates | async\">\r\n      <div class=\"default-card wow fadeIn card\" data-wow-delay=\"0.2s\">\r\n        <div class=\"card-body\" (click)=\"showTemplateDetails(template)\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-7 default-name\">\r\n              {{template.name}}\r\n            </div>\r\n            <div class=\"col-12 default-subname\">\r\n              {{template.assignmentMode.join(', ')}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"templateService.fetchDone | async\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<!-- Template Details Modal -->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #templateDetailsModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myTemplateDetailsModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true}\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header px-4\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section py-1\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\" id=\"myModalLabel\">{{ templateForCreate.name }}</h6>\r\n              <p class=\"modal-title light-text w-100\" id=\"myModalLabel\">{{templateForCreate.assignmentMode.join(', ')}}</p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Edit Template\" placement=\"top\" (click)=\"editTemplate(templateForCreate)\"\r\n                mdbRippleRadius>\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Delete Template\" placement=\"top\" (click)=\"promptDeleteTemplate(templateForCreate)\"\r\n                mdbRippleRadius>\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"templateDetailsModal.hide()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body px-4\">\r\n          <div class=\"template-details-header d-flex align-items-center py-2\">\r\n            <span class=\"inactive mr-3 py-1 wow fadeInDown\" data-wow-delay=\"0.1s\" [class.active]=\"!step1\" (click)=\"nextTab(1)\"> Template Details </span>\r\n            <span class=\"inactive mr-3 py-1 wow fadeInDown\" data-wow-delay=\"0.3s\" [class.active]=\"!step2\" (click)=\"nextTab(2)\"> Before Task Creation </span>\r\n            <span class=\"inactive mr-3 py-1 wow fadeInDown\" data-wow-delay=\"0.5s\" [class.active]=\"!step3\" (click)=\"nextTab(3)\"> During Task Execution </span>\r\n          </div>\r\n\r\n\r\n          <!-- Step 1 -->\r\n          <div [hidden]=\"step1\">\r\n            <div class=\"template-details-content\">\r\n              <div class=\"py-3\">\r\n                <div>\r\n                  <h6 class=\"light-text mb-1\">Teams</h6>\r\n                  <p class=\"dark-text mb-2\">{{ getTeamsForTemplate(templateForCreate)}}</p>\r\n                </div>\r\n                <div>\r\n                  <h6 class=\"light-text mb-1\">Roles</h6>\r\n                  <p class=\"dark-text mb-2\">{{ getUserGroupsForTemplate(templateForCreate)}}</p>\r\n                </div>\r\n                <div *ngIf=\"templateForCreate.price\">\r\n                  <h6 class=\"light-text mb-1\">Price</h6>\r\n                  <p class=\"dark-text mb-2\">{{templateForCreate.currency ? templateForCreate.currency : \"-\" }} {{templateForCreate.price ? templateForCreate.price\r\n                    : \"-\"}}\r\n                  </p>\r\n                </div>\r\n                <div>\r\n                  <h6 class=\"light-text mb-1\">Rating Applicable</h6>\r\n                  <p class=\"dark-text mb-2\">{{templateForCreate.isRatingApplicable? \"Yes\":\"No\"}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Step 2 -->\r\n          <div [hidden]=\"step2\">\r\n            <div class=\"template-details-content\">\r\n\r\n              <table class=\"table table-striped table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Text</th>\r\n                    <th>Type</th>\r\n                    <th>Validations</th>\r\n                    <th>Options</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let templateField of step2Form | orderBy : 'order'\">\r\n                    <td>{{templateField.fieldName}}</td>\r\n                    <td>{{templateField.type}}</td>\r\n                    <td>{{ valueToLabel(templateField.validation)}}</td>\r\n                    <td>{{templateField.dropDownValues}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Step 3 -->\r\n          <div [hidden]=\"step3\">\r\n            <div class=\"template-details-content\">\r\n\r\n              <table class=\"table table-striped table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Text</th>\r\n                    <th>Type</th>\r\n                    <th>Validations</th>\r\n                    <th>Options</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let templateField of step3Form | orderBy : 'order'\">\r\n                    <td>{{templateField.fieldName}}</td>\r\n                    <td>{{templateField.type}}</td>\r\n                    <td>{{ valueToLabel(templateField.validation)}}</td>\r\n                    <td>{{templateField.dropDownValues}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Confirm Delete Modal -->\r\n  <div mdbModal #promptDeleteModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deletePromptModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true}\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n      <div class=\"modal-content confirm-modal\">\r\n        <div class=\"modal-body p-4\">\r\n          <h4>Are you sure you want to delete this template \"{{ templateForDelete.name }}\"?</h4>\r\n          <p class=\"pr-4\">Please take your time to review this template details.</p>\r\n          <div class=\"btn-group w-100 d-flex justify-content-end\">\r\n            <button class=\"btn text-uppercase\" (click)=\"promptDeleteModal.hide()\" mdbRippleRadius>Cancel</button>\r\n            <button class=\"btn text-uppercase\" mdbRippleRadius (click)=\"deleteTemplate(templateForDelete)\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n    <a class=\"btn-floating white-text waves-light\" mdbTooltip=\"Add New Template\" mdbRippleRadius (click)=\"openCreateTemplate()\">\r\n      <img src=\"../../assets/svg/plus_sign.svg\" alt=\"\">\r\n    </a>\r\n  </div>\r\n  <div class=\"modal-container\">\r\n    <div mdbModal #createTemplateModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1 \" role=\"dialog \" aria-labelledby=\"createTemplateModal \"\r\n      aria-hidden=\"true \" [config]=\"{backdrop: true, ignoreBackdropClick: true} \">\r\n      <div class=\"modal-dialog modal-lg \" role=\"document \">\r\n        <div class=\"modal-content \">\r\n          <div class=\"modal-header p-4\" style='background-color:#ededeb'>\r\n            <h4 class=\"modal-title w-100 \" style='font-size:95%; font-weight:bold;'>{{ templateForCreate.templateId.length ? 'Edit ' : 'Create '}} Template</h4>\r\n          </div>\r\n          <div class=\"modal-body p-4\">\r\n            <div class=\"template-builder-header d-flex align-items-center py-2\">\r\n              <span class=\"active mr-3 py-1  wow fadeInDown\" data-wow-delay=\"0.1s\"> 1. Template Details </span>\r\n              <span class=\"mr-3 py-1 inactive wow fadeInDown\" data-wow-delay=\"0.3s\" [class.active]=\"!step2 || !step3\"> 2. Before Task Creation </span>\r\n              <span class=\"mr-3 py-1 inactive wow fadeInDown\" data-wow-delay=\"0.5s\" [class.active]=\"!step3\"> 3. During Task Execution </span>\r\n            </div>\r\n\r\n\r\n            <!-- Step 1 -->\r\n            <div [hidden]=\"step1\">\r\n              <form #tempForm=\"ngForm\">\r\n                <div class=\"template-builder-content\">\r\n                  <div class=\"row px-0 align-items-center\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"md-form form-sm m-0\">\r\n                        <input placeholder=\"Template Name\" name=\"templateName\" type=\"text\" class=\"form-control m-0\" [class.is-invalid]=\"tempName.errors && (tempName.dirty || tempName.touched)\"\r\n                          required #tempName=\"ngModel\" [(ngModel)]=\"templateForCreate.name\">\r\n                      </div>\r\n                      <div *ngIf=\"tempName.errors && (tempName.dirty || tempName.touched)\" class=\"col-md-12 \">\r\n                        <div [hidden]=\"!tempName.errors.required\" class=\"text-danger error2\">\r\n                          <small class=\"val-error\">Required</small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-12 mt-3\">\r\n                      <mdb-ng-select #tempRoles=\"ngModel\" [options]=\"roles | async\" name=\"roles\" placeholder=\"Roles\" [class.is-invalid-select]=\"tempRoles.errors && (tempRoles.dirty || tempRoles.touched)\"\r\n                        multiple=true [(ngModel)]=\"templateForCreate.userGroup\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-12 mt-3\">\r\n                      <mdb-ng-select #tempTeams=\"ngModel\" [options]=\"teams | async\" name=\"teams\" placeholder=\"Teams\" [class.is-invalid-select]=\"tempTeams.errors && (tempTeams.dirty || tempTeams.touched)\"\r\n                        multiple=true [(ngModel)]=\"templateForCreate.teams\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-12 mt-3\">\r\n                      <mdb-ng-select #tempModes=\"ngModel\" [options]=\"assignmentModes\" name=\"modes\" placeholder=\"Assignment Mode\" [class.is-invalid-select]=\"tempModes.errors && (tempModes.dirty || tempModes.touched)\"\r\n                        multiple=true [(ngModel)]=\"templateForCreate.assignmentMode\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-6\">\r\n                      <div class=\"md-form form-sm\">\r\n                        <input placeholder=\"Price\" min=\"0\" name=\"price\" mdbInputValidate ngModel type=\"number\" class=\"form-control\" [(ngModel)]=\"templateForCreate.price\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-12 col-md-6 mns\">\r\n                      <mdb-ng-select [options]=\"currencies\" name=\"currency\" placeholder=\"Currency\" [(ngModel)]=\"templateForCreate.currency\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group m-0\">\r\n                        <input type=\"checkbox\" name=\"rating\" class=\"filled-in\" id=\"checkbox2\" [(ngModel)]=\"templateForCreate.isRatingApplicable\">\r\n                        <label for=\"checkbox2\">Rating Applicable</label>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"py-2 btn-group w-100 d-flex justify-content-end\">\r\n                <a class=\"btn text-uppercase\" (click)=\"createTemplateModal.hide()\">CANCEL</a>\r\n                <button class=\"btn text-uppercase\" (click)=\"nextTab(2)\" [disabled]=\"!tempForm.form.valid\">NEXT</button>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- Step 2 -->\r\n            <div [hidden]=\"step2\">\r\n              <div class=\"my-3\">\r\n                <p class=\"pp text-muted\">Add custom input fields that will come up whenever you create a task with this template</p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Name</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Type</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Order</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Validation</p>\r\n                </div>\r\n              </div>\r\n              <form #step2F=\"ngForm\">\r\n                <div class=\"template-builder-content\">\r\n                  <div *ngFor=\"let templateField of step2Form; let i = index\" class=\"row px-0 align-items-center\">\r\n                    <div class=\"col-sm-2\">\r\n                      <div class=\"md-form form-sm\">\r\n                        <input placeholder=\"Name\" type=\"text\" class=\"form-control\" [class.is-invalid]=\"label.errors && (label.dirty || label.touched)\"\r\n                          required #label=\"ngModel\" [(ngModel)]=\"templateField.fieldName\" [ngModelOptions]=\"{standalone: true}\">\r\n                      </div>\r\n                      <div *ngIf=\"label.errors && (label.dirty || label.touched)\" class=\"col-md-12 \">\r\n                        <div [hidden]=\"!label.errors.required\" class=\"text-danger error\">\r\n                          <small class=\"val-error\">Required</small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 mns\">\r\n                      <mdb-ng-select name=\"type\" [options]=\"templateFieldType.slice(0, -1)\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Type\"\r\n                        [(ngModel)]=\"templateField.type\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-sm-2 \">\r\n                      <div class=\"md-form form-sm\">\r\n                        <input placeholder=\"Order\" [ngModelOptions]=\"{standalone: true}\" mdbInputValidate type=\"number\" min=\"1\" placeholder=\"1\" class=\"form-control\"\r\n                          [(ngModel)]=\"templateField.order\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 mns\">\r\n                      <mdb-ng-select [options]=\"validationTypes\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Validation\" [(ngModel)]=\"templateField.validation\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-sm-3 options-class\" [hidden]=\"templateField.type !== 'dropdown'\">\r\n                      <div class=\"md-form form-sm\">\r\n                        <input placeholder=\"options 1, options 2\" [ngModelOptions]=\"{standalone: true}\" mdbInputValidate type=\"text\" class=\"form-control\"\r\n                          [(ngModel)]=\"templateField.dropDownValues\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                      <i class=\"fa fa-trash-o fa-sm col-md-1 mx-0 px-0\" aria-hidden=\"true\" (click)=\"removeTemplateFormEntry(1,i)\"></i>\r\n                    </div>\r\n                    <div class=\"col-12 d-sm-none py-2\">\r\n                      <hr class=\"mx-auto w-100 hr-divider\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <a class=\"btn btn-primary col-md-2 mx-0  btn-sm waves-light\" mdbRippleRadius (click)=\"newTemplateFormEntry(1)\">Add</a>\r\n                </div>\r\n              </div>\r\n              <p class=\"pp\">\r\n                * Please fill in field name\r\n              </p>\r\n              <div class=\" py-2 w-100 d-flex justify-content-between\">\r\n                <div class=\"btn-group\">\r\n                  <a class=\"btn text-uppercase\" (click)=\"nextTab(1)\">PREV</a>\r\n                </div>\r\n\r\n                <div class=\"btn-group d-flex justify-content-end\">\r\n                  <a class=\"btn text-uppercase\" (click)=\"createTemplateModal.hide()\">CANCEL</a>\r\n                  <button class=\"btn text-uppercase\" (click)=\"nextTab(3)\" [disabled]=\"!step2F.form.valid\">NEXT</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- Step 3 -->\r\n            <div [hidden]=\"step3\">\r\n              <div class=\"my-3\">\r\n                <p class=\"pp text-muted\">Add custom input fields that will come up whenever a task is being executed with this template</p>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Name</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Type</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Order</p>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <p class=\"form__header\">Field Validation</p>\r\n                </div>\r\n              </div>\r\n              <form #step3F=\"ngForm\">\r\n                <div class=\"template-builder-content\">\r\n                  <div *ngFor=\"let templateField of step3Form; let i = index\" class=\"row px-0 align-items-center\">\r\n                    <div class=\"col-sm-2 \">\r\n                      <div class=\"md-form form-sm \">\r\n                        <input placeholder=\"Name\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" id=\"label\" class=\"form-control\" [class.is-invalid]=\"label2.errors && (label2.dirty || label2.touched)\"\r\n                          required #label2=\"ngModel\" [(ngModel)]=\"templateField.fieldName\">\r\n                      </div>\r\n\r\n                      <div *ngIf=\"label2.errors && (label2.dirty || label2.touched)\" class=\"col-md-12 \">\r\n                        <div [hidden]=\"!label2.errors.required\" class=\"text-danger error\">\r\n                          <small class=\"val-error\">Required</small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 mns\">\r\n                      <mdb-ng-select [ngModelOptions]=\"{standalone: true}\" [options]=\"templateFieldType\" placeholder=\"Type\" [(ngModel)]=\"templateField.type\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-sm-2 \">\r\n                      <div class=\"md-form form-sm\">\r\n                        <input placeholder=\"Order\" [ngModelOptions]=\"{standalone: true}\" mdbInputValidate type=\"number\" id=\"label\" class=\"form-control\"\r\n                          [(ngModel)]=\"templateField.order\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2 mns\">\r\n                      <mdb-ng-select [options]=\"validationTypes\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Validation\" [(ngModel)]=\"templateField.validation\"></mdb-ng-select>\r\n                    </div>\r\n                    <div class=\"col-sm-3 options-class\" [hidden]=\"templateField.type !== 'dropdown'\">\r\n                      <div class=\"md-form form-sm\">\r\n                        <input placeholder=\"options 1, options 2 \" [ngModelOptions]=\"{standalone: true}\" mdbInputValidate type=\"text\" id=\"label\"\r\n                          class=\"form-control\" [(ngModel)]=\"templateField.dropDownValues\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-1\">\r\n                      <i class=\"fa fa-trash-o fa-sm col-md-1 mx-0 px-0\" style=\"margin:-20em 0 0 -4em;\" aria-hidden=\"true\" (click)=\"removeTemplateFormEntry(2,i)\"></i>\r\n                    </div>\r\n                    <div class=\"col-12 d-sm-none py-2\">\r\n                      <hr class=\"mx-auto w-100 hr-divider\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 \">\r\n                  <a class=\"btn btn-primary col-md-2 mx-0  btn-sm waves-light\" mdbRippleRadius (click)=\"newTemplateFormEntry(2)\">Add</a>\r\n                </div>\r\n              </div>\r\n              <p class=\"pp\">\r\n                * Please fill in field name\r\n              </p>\r\n              <div class=\"py-2 w-100 d-flex justify-content-between\">\r\n                <div class=\"btn-group\">\r\n                  <a class=\"btn text-uppercase\" (click)=\"nextTab(2)\">PREV</a>\r\n                </div>\r\n                <div class=\"btn-group d-flex justify-content-end\">\r\n                  <a class=\"btn text-uppercase\" (click)=\"createTemplateModal.hide()\">CANCEL</a>\r\n                  <button class=\"btn text-uppercase\" (click)=\"submitTemplate()\" [disabled]=\"!step3F.form.valid\">SAVE</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/template/template.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.form__header {\n  margin: 0;\n  color: #3d3d3d;\n  font-size: 10px;\n  font-weight: bold;\n  display: inline-block; }\n\n.default-card {\n  color: black;\n  min-height: 100px; }\n\n.pp {\n  margin-top: 1rem;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 500;\n  color: crimson; }\n\n.default-name {\n  font-size: 14px;\n  font-weight: 500; }\n\n.default-subname {\n  font-size: 12px; }\n\n.modal-open .modal {\n  overflow-y: auto !important; }\n\n.modal-content .modal-body .template-details-header span {\n  cursor: pointer; }\n\n.modal-content .modal-body .template-details-header .active {\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: #008bde !important;\n  padding: 3px 7px;\n  border-radius: 20px;\n  text-align: center; }\n\n.modal-content .modal-body .template-details-header .inactive {\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500 !important;\n  background: #9a9a9a;\n  padding: 3px 7px;\n  border-radius: 20px;\n  text-align: center; }\n\n.modal-content .modal-body .template-details-content .headers span {\n  font-size: 12px;\n  color: #9a9a9a;\n  font-weight: 500; }\n\n.modal-content .modal-body .template-details-content .values span {\n  color: #676767;\n  font-size: 14px;\n  font-weight: 500; }\n\n/* Template Fab & Modal CSS */\n\n.template-fab {\n  background: #0297df;\n  color: white; }\n\n.tab-headings {\n  color: black !important; }\n\n.classic-tabs li.active > a {\n  border-bottom: 2px solid black;\n  color: black; }\n\n.classic-tabs li.active > a:focus {\n  border-bottom: 2px solid black;\n  color: black; }\n\n.classic-tabs {\n  font-size: 200%; }\n\na.btn-primary {\n  margin-left: 0.4em; }\n\ni.fa-trash-o {\n  margin: -3em 4em -3em 2.1em; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.modal-body ::ng-deep {\n  /* Scrollbar */\n  /* Track */\n  /* Handle */ }\n\n.modal-body ::ng-deep .classic-tabs .nav.classic-tabs {\n    margin: 0;\n    margin-left: -2em;\n    overflow: hidden; }\n\n.modal-body ::ng-deep .classic-tabs li a {\n    padding: 1em 1.5em;\n    color: #9a9a9a; }\n\n.modal-body ::ng-deep .classic-tabs li a.active {\n    color: blue;\n    font-size: 20px;\n    border-bottom: 3px solid blue; }\n\n.modal-body ::ng-deep .classic-tabs li a:not(.active) {\n    font-size: 0;\n    border-bottom: 3px solid blue; }\n\n.modal-body ::ng-deep a.waves-light {\n    display: inline; }\n\n.modal-body ::ng-deep div .options {\n    height: 5em; }\n\n.modal-body ::ng-deep div .options ul {\n    background-color: white !important;\n    overflow-y: auto;\n    overflow-x: hidden; }\n\n.modal-body ::ng-deep ::-webkit-scrollbar {\n    width: 5px; }\n\n.modal-body ::ng-deep ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px; }\n\n.modal-body ::ng-deep ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: #f7f7f7;\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n\n.modal-body ::ng-deep div .options ul li:first-child {\n    margin-left: 0.1em; }\n\n.modal-body ::ng-deep .fa {\n    font-size: 20px; }\n\n.modal-body ::ng-deep hr {\n    background-color: #dbdbdb;\n    width: 300%;\n    margin-left: -12em; }\n\n.modal-body ::ng-deep .bottom-nav a.btn {\n    color: blue !important;\n    font-size: 15px; }\n\n.modal-body ::ng-deep .bottom-nav a.btn-primary {\n    color: white !important; }\n\n.modal-body ::ng-deep .float-left {\n    margin-left: -1.2em; }\n\n.modal-body ::ng-deep .clearfix {\n    margin: 0.5em 0; }\n\n.template-builder-header .active {\n  font-size: 14px !important;\n  color: #008bde !important;\n  font-weight: 500 !important;\n  border-bottom: 3px solid #008bde !important; }\n\n.template-builder-header .inactive {\n  font-size: 14px;\n  color: #b3b2b3;\n  border-bottom: 3px solid transparent; }\n\n.hr-divider {\n  background-color: #008bde !important; }\n\n.btn-group .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.template-builder-content .is-invalid {\n  border-bottom-color: #dc3545 !important; }\n\n.template-builder-content .is-invalid:focus {\n  -webkit-box-shadow: 0 1px 0 0 #dc3545 !important;\n          box-shadow: 0 1px 0 0 #dc3545 !important;\n  border-bottom-color: #dc3545 !important; }\n\n.template-builder-content .is-invalid-select ::ng-deep .below .multiple {\n  border-bottom: 1px solid #dc3545 !important; }\n\n.template-builder-content input[type=\"date\"] {\n  line-height: 1; }\n\n.template-builder-content .rating-check {\n  font-size: 14px;\n  color: #bbbbbb; }\n\n.template-builder-content .fa.fa-trash-o {\n  cursor: pointer; }\n\n.template-builder-content .mns {\n  margin-bottom: 0.4rem; }\n\n.template-builder-content .form-control {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd; }\n\n.template-builder-content .form-control:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n.template-builder-content .file-input input[type=\"file\"] {\n  display: none; }\n\n.template-builder-content ::ng-deep mdb-ng-select .dropdown-content li > a,\n.template-builder-content ::ng-deep mdb-ng-select .dropdown-content li > span {\n  color: #495057; }\n\n.template-builder-content ::ng-deep mdb-ng-select .single,\n.template-builder-content ::ng-deep mdb-ng-select .multiple {\n  line-height: 0.5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem;\n  color: #495057;\n  font-weight: 400;\n  padding: 0;\n  line-height: 0.5; }\n\n.template-builder-content ::ng-deep mdb-ng-select .single .value,\n  .template-builder-content ::ng-deep mdb-ng-select .single .option,\n  .template-builder-content ::ng-deep mdb-ng-select .multiple .value,\n  .template-builder-content ::ng-deep mdb-ng-select .multiple .option {\n    line-height: 1.1;\n    margin-bottom: 7px;\n    padding-bottom: 5px; }\n\n.template-builder-content ::ng-deep mdb-ng-select .single .value .deselect-option,\n    .template-builder-content ::ng-deep mdb-ng-select .single .option .deselect-option,\n    .template-builder-content ::ng-deep mdb-ng-select .multiple .value .deselect-option,\n    .template-builder-content ::ng-deep mdb-ng-select .multiple .option .deselect-option {\n      line-height: 0; }\n\n.template-builder-content ::ng-deep mdb-ng-select .placeholder {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #bbbbbb;\n  line-height: 1.1;\n  margin-bottom: 7px; }\n\n.template-builder-content ::ng-deep mdb-ng-select .toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n.template-builder-content ::ng-deep .multiple .toggle {\n  margin-left: auto;\n  position: relative; }\n\n.error {\n  padding: 0;\n  margin: 0;\n  margin-top: -1.8em;\n  margin-left: -1.3em;\n  font-size: 70%; }\n\n.error2 {\n  padding: 0;\n  margin: 0;\n  margin-top: 0.5em;\n  margin-left: -1.3em;\n  font-size: 70%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/template/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_role_role_service__ = __webpack_require__("../../../../../src/app/shared/role/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_team_team_service__ = __webpack_require__("../../../../../src/app/shared/team/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_template_template__ = __webpack_require__("../../../../../src/app/shared/template/template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_template_template_service__ = __webpack_require__("../../../../../src/app/shared/template/template.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TemplateComponent = (function () {
    function TemplateComponent(authService, templateService, roleService, teamService, ref) {
        this.authService = authService;
        this.templateService = templateService;
        this.roleService = roleService;
        this.teamService = teamService;
        this.ref = ref;
        this.templateForCreate = new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["a" /* Template */]();
        this.templateForDelete = new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["a" /* Template */]();
        this.step2Form = [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.step3Form = [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.step1 = false;
        this.step2 = true;
        this.step3 = true;
        this.roles = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.teams = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    TemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.templateService.getTemplates().subscribe();
        this.templates = this.templateService.templates;
        this.templates.subscribe(function (data) {
            _this.templateCount = data.length;
        });
        this.templateFieldType = [
            // NOTE: image must remain the last value in this array because it's being sliced out of the array in the view
            { value: "dropdown", label: "Dropdown" },
            { value: "text", label: "Text" },
            { value: "date", label: "Date" },
            { value: "time", label: "Time" },
            { value: "barcode", label: "Barcode" },
            { value: "image", label: "Image" }
        ];
        this.assignmentModes = [
            { value: "Broadcast", label: "Broadcast Assignment" },
            { value: "Auto", label: "Auto Assignment" },
            { value: "Manual", label: "Manual Assignment" },
            { value: "Team", label: "Team Assignment" }
            // { value: "UserGroup", label: "UserGroup" }
        ];
        this.roleService.roles.subscribe(function (data) {
            _this.roles.next(data.map(function (role) {
                return { value: role.userGroupId, label: role.name };
            }));
        });
        this.teamService.teams.subscribe(function (data) {
            _this.teams.next(data.map(function (team) {
                return { value: team.teamId, label: team.teamName };
            }));
        });
        this.currencies = [{ value: "USD", label: "USD" }, { value: "NGN", label: "NGN" }];
        this.validationTypes = [
            { value: "none", label: "None" },
            { value: "required", label: "Required" },
            { value: "validateMomAndPopDetails", label: "Mom And Pop Details" },
            { value: "validateCustomerDetails", label: "Customer Details" }
        ];
    };
    TemplateComponent.prototype.valueToLabel = function (value) {
        switch (value) {
            case "none":
                return "None";
            case "required":
                return "Required";
            case "validateMomAndPopDetails":
                return "Mom And Pop Details";
            case "validateCustomerDetails":
                return "Customer Details";
            default:
                return;
        }
    };
    TemplateComponent.prototype.searchValueChange = function (q) {
        this.searchQuery = q;
        this.templateService.searchTerm.next(this.searchQuery);
    };
    TemplateComponent.prototype.promptDeleteTemplate = function (template) {
        this.templateForDelete = Object.assign(new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["a" /* Template */](), template);
        this.promptDeleteModal.show();
    };
    TemplateComponent.prototype.deleteTemplate = function (template) {
        this.templateService.deleteTemplate(Object.assign(new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["a" /* Template */](), template));
        this.promptDeleteModal.hide();
        this.templateDetailsModal.hide();
    };
    TemplateComponent.prototype.startTemplateDetailsProcess = function () {
        this.step1 = false;
        this.step2 = true;
        this.step3 = true;
        this.step2Form = [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.step3Form = [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.templateDetailsModal.show();
    };
    TemplateComponent.prototype.showTemplateDetails = function (template) {
        if (template.price == 0) {
            template.price = null;
        }
        this.templateForCreate = template;
        this.startTemplateDetailsProcess();
        var priorTemplate = template.getPriorTemplate();
        var mainTemplate = template.getTemplate();
        this.step2Form = priorTemplate.length ? priorTemplate : [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.step3Form = mainTemplate.length ? mainTemplate : [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
    };
    TemplateComponent.prototype.newTemplateFormEntry = function (id) {
        if (id === 1) {
            this.step2Form.push(new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]());
        }
        else if (id === 2) {
            this.step3Form.push(new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]());
        }
        this.ref.detectChanges();
    };
    TemplateComponent.prototype.removeTemplateFormEntry = function (id, index) {
        if (id === 1) {
            this.step2Form.splice(index, 1);
        }
        else if (id === 2) {
            this.step3Form.splice(index, 1);
        }
        this.ref.detectChanges();
    };
    TemplateComponent.prototype.nextTab = function (id) {
        if (id === 1) {
            this.step1 = false;
            this.step2 = true;
            this.step3 = true;
        }
        else if (id === 2) {
            this.step1 = true;
            this.step2 = false;
            this.step3 = true;
        }
        else if (id === 3) {
            this.step1 = true;
            this.step2 = true;
            this.step3 = false;
        }
    };
    TemplateComponent.prototype.submitTemplate = function () {
        this.templateForCreate.setPriorTemplate(this.step2Form);
        this.templateForCreate.setTemplate(this.step3Form);
        if (!this.templateForCreate.price || this.templateForCreate.price <= 0) {
            this.templateForCreate.price = 0;
        }
        var userId = this.authService.getUserId();
        for (var i in this.templateForCreate) {
            if (this.templateForCreate.userId !== userId) {
                this.templateForCreate.userId = userId;
            }
        }
        this.templateForCreate.userId = this.templateForCreate.userId ? this.templateForCreate.userId : userId;
        this.templateService.createOrUpdateTemplate(Object.assign(new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["a" /* Template */](), this.templateForCreate));
        this.createTemplateModal.hide();
    };
    TemplateComponent.prototype.openCreateTemplate = function () {
        this.templateForCreate = new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["a" /* Template */]();
        this.startTemplateCreateProcess();
    };
    TemplateComponent.prototype.startTemplateCreateProcess = function () {
        this.step1 = false;
        this.step2 = true;
        this.step3 = true;
        this.step2Form = [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.step3Form = [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.createTemplateModal.show();
    };
    TemplateComponent.prototype.editTemplate = function (template) {
        this.templateForCreate = template;
        this.startTemplateCreateProcess();
        var priorTemplate = template.getPriorTemplate();
        var mainTemplate = template.getTemplate();
        this.step2Form = priorTemplate.length ? priorTemplate : [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
        this.step3Form = mainTemplate.length ? mainTemplate : [new __WEBPACK_IMPORTED_MODULE_5__shared_template_template__["b" /* TemplateField */]()];
    };
    TemplateComponent.prototype.getTeamsForTemplate = function (template) {
        var _this = this;
        var teamList = template.teams
            .map(function (teamId) {
            return _this.teamService.teams.value
                .filter(function (t) {
                return t.teamId === teamId;
            })
                .map(function (t) {
                return t.teamName;
            })
                .join("");
        })
            .join(", ");
        if (teamList.length) {
            return teamList;
        }
        else {
            return "N/A";
        }
    };
    TemplateComponent.prototype.getUserGroupsForTemplate = function (template) {
        var _this = this;
        var userGroups = template.userGroup
            .map(function (userGroupId) {
            return _this.roleService.roles.value
                .filter(function (r) {
                return r.userGroupId === userGroupId;
            })
                .map(function (r) {
                return r.name;
            })
                .join("");
        })
            .join(", ");
        if (userGroups.length) {
            return userGroups;
        }
        else {
            return "N/A";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("templateDetailsModal"),
        __metadata("design:type", Object)
    ], TemplateComponent.prototype, "templateDetailsModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("createTemplateModal"),
        __metadata("design:type", Object)
    ], TemplateComponent.prototype, "createTemplateModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("promptDeleteModal"),
        __metadata("design:type", Object)
    ], TemplateComponent.prototype, "promptDeleteModal", void 0);
    TemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-template",
            template: __webpack_require__("../../../../../src/app/template/template.component.html"),
            styles: [__webpack_require__("../../../../../src/app/template/template.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_template_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_role_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_team_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/template/template.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_template_template_component__ = __webpack_require__("../../../../../src/app/template/template.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_template_template_component__["a" /* TemplateComponent */] }];
var TemplateModule = (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_template_template_component__["a" /* TemplateComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], TemplateModule);
    return TemplateModule;
}());



/***/ })

});
//# sourceMappingURL=template.module.chunk.js.map