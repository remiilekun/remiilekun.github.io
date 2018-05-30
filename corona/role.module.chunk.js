webpackJsonp(["role.module"],{

/***/ "../../../../../src/app/role/role.component.html":
/***/ (function(module, exports) {

module.exports = "<div #body class=\"row p-4 m-0 content-top\">\r\n  <div class=\"col-12 col-md-7 px-0 align-self-center\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"roleCount\">{{roleCount}} {{roleCount > 1 ? \"Roles\" : \"Role\"}}</h6>\r\n  </div>\r\n  <div class=\"col-9 col-md-4 px-0 py-1\">\r\n    <div class=\"input-group role-search\">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by Role Title\" [ngModel]=\"searchQuery\" (ngModelChange)=\"searchValueChange($event)\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-3 col-md-1 d-flex justify-content-end p-0\">\r\n    <a class=\"btn-floating m-0\" placement=\"left\" mdbTooltip=\"Add New Role\" mdbRippleRadius (click)=\"openCreateModal()\">\r\n      <img src=\"../../assets/svg/plus_sign.svg\" alt=\"\">\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"content-body\" *ngIf=\"(_roleService.fetchDone | async)\">\r\n  <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count\" *ngIf=\"!roleCount\">\r\n    <div class=\"col-md-4 py-4\">\r\n      <img src=\"../../assets/svg/rolemp.svg\" alt=\"Add New\">\r\n      <h6 class=\"header-text\">No roles found</h6>\r\n      <p class=\"sub-text m-0\">There are currently no roles created on the system.</p>\r\n      <p class=\"sub-text\">Add a role by clicking on the blue button below.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row m-0\">\r\n    <div *ngFor=\"let role of roles | async; let i = index\" [role]=\"role\" class=\"col-sm-6 col-md-4 col-lg-3 p-2 roles\">\r\n      <div (click)=\"showRoleDetail(role, i)\" class=\"role-card wow fadeIn card\" data-wow-delay=\"0.2s\" mdbRippleRadius>\r\n        <div class=\"card-body roles\">\r\n          <div class=\"row no-gutters\">\r\n\r\n            <div class=\"col col-lg-2 col-md-2 align-self-center\">\r\n              <i class=\"fa fa-shield\" aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n            <div class=\"col role-name\">\r\n              {{ role.name | titlecase }}\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"role-count\">\r\n            {{ role.members.length > maxUserCount ? \"+\" + (role.members.length - maxUserCount) : role.members.length }} members\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-container\">\r\n\r\n      <div mdbModal #roleDetailsModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"roleDetailsModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header p-0 py-3 d-flex justify-content-between\" [style.background-color]=\"roleDetailsModalHeaderColor\">\r\n              <div class=\"col-9\">\r\n                <div class=\"row no-gutters modal-title\">\r\n                  <div class=\"col-2 col-sm-1 col-md-1\">\r\n                    <i class=\"fa fa-shield\" aria-hidden=\"true\"></i>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <h4 class=\"w-100 m-0\">{{roleDetails.name}}</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-3 d-flex justify-content-end\">\r\n                <button class=\"btn\" mdbRippleRadius (click)=\"editRole(roleDetails)\">\r\n                  <i class=\"fa fa-pencil\"></i>\r\n                </button>\r\n                <button class=\"btn\" mdbRippleRadius (click)=\"promptDeleteRole(roleDetails)\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n                <button class=\"btn\" mdbRippleRadius (click)=\"roleDetailsModal.hide()\">\r\n                  <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body py-3 px-5\">\r\n              <div class=\"roles\">\r\n                <h5 class=\"text-muted\">Permission(s)</h5>\r\n                <ul class=\"roles-list p-0\">\r\n                  <li *ngFor=\"let permission of roleDetails.permission\" class=\"badge mr-1 mb-1 p-2\">{{permission}}</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"users\">\r\n                <h5 class=\"text-muted\">User(s)</h5>\r\n                <ul class=\"users-list p-0\">\r\n                  <li *ngFor=\"let member of roleDetails.members\" class=\"badge name-badge mr-1 mb-1 p-2\">\r\n                    <span>{{ getUserNameByUserId(member)[0] }}</span> {{ getUserNameByUserId(member)}}\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-container\">\r\n      <div mdbModal #deleteRoleModal=\"mdb-modal\" class=\"modal modal-sm fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteRoleModalLabel\"\r\n        aria-hidden=\"true\" [hidden]=\"hidden\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content delete-modal-content\">\r\n            <div class=\"modal-body p-4\">\r\n              <h4>\r\n                Are you sure you want to delete the \"{{roleForDelete.name}}\" role?\r\n              </h4>\r\n              <p class=\"pr-4\">\r\n                Please take your time to review this role detail.\r\n              </p>\r\n              <div class=\"btn-groupe w-100 d-flex justify-content-end\">\r\n                <button class=\"btn text-uppercase\" (click)=\"deleteRoleModal.hide()\" mdbRippleRadius>cancel</button>\r\n                <button class=\"btn text-uppercase\" (click)=\"deleteRole(roleForDelete)\" mdbRippleRadius>delete\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"_roleService.fetchDone | async\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<!-- <div class=\"fixed-action-btn\" style=\"bottom: 5vh;right: 5vh;\">\r\n  <a class=\"btn-floating role-fab\" mdbRippleRadius (click)=\"openCreateModal()\">\r\n    <img src=\"../../assets/svg/plus_sign.svg\" alt=\"\">\r\n  </a>\r\n</div> -->\r\n\r\n<div class=\"modal-container\">\r\n  <div mdbModal #createRoleModal=\"mdb-modal\" class=\"modal fade create-role-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createRoleModalLabel\"\r\n    aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: true}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header p-4\">\r\n          <div class=\"modal-title\">\r\n            <h4 class=\"w-100 m-0\">{{role.userGroupId.length ? 'Edit ' : 'Create ' }} Role</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body p-4\">\r\n          <form #createRole=\"ngForm\">\r\n            <div class=\"md-form form-sm m-0 mb\">\r\n              <input type=\"text\" id=\"role-name\" class=\"form-control m-0\" [class.is-invalid]=\"name.errors && (name.dirty || name.touched)\"\r\n                mdbActive name=\"role-name\" [(ngModel)]=\"role.name\" required #name=\"ngModel\">\r\n              <label for=\"role-name\" [ngClass]=\"role.userGroupId.length ? 'active' : ''\">Role name</label>\r\n            </div>\r\n            <br>\r\n            <div class=\"md-form form-sm m-0 mb\">\r\n              <mdb-ng-select [options]=\"permissions\" [class.is-invalid-select]=\"permission.errors && (permission.dirty || permission.touched)\"\r\n                [multiple]=\"true\" placeholder=\"Permission(s)\" [(ngModel)]=\"role.permission\" name=\"role-permission\" required\r\n                #permission=\"ngModel\" id=\"role-permission\" (focusin)=\"PermissionActive = true\"></mdb-ng-select>\r\n              <label *ngIf=\"role.userGroupId.length; else elseBlock1\" class=\"label-active\" for=\"role-permission\">Permission(s)</label>\r\n              <ng-template #elseBlock1>\r\n                <label [ngClass]=\"PermissionActive ? 'label-active' : 'label-inactive'\" for=\"role-permission\">Permission(s)</label>\r\n              </ng-template>\r\n            </div>\r\n            <div *ngIf=\"permission.errors && (permission.dirty || permission.touched)\" class=\"col-md-12\">\r\n              <div [hidden]=\"!permission.errors.required\" class=\"text-danger error my-1\">\r\n                Role required\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"btn-groupe w-100 d-flex justify-content-end\">\r\n              <button type=\"button\" class=\"btn text-uppercase\" aria-label=\"Cancel\" (click)=\"createRoleModal.hide()\" mdbRippleRadius>cancel\r\n              </button>\r\n              <button type=\"submit\" class=\"btn text-uppercase\" mdbRippleRadius (click)=\"submit()\" [disabled]=\"!createRole.form.valid\">save\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/role/role.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\n.mb {\n  margin-bottom: 1.5rem !important; }\n\n.select-label {\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  position: absolute;\n  top: 0.8rem;\n  left: 0; }\n\n.label-active {\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n  color: #bbbbbb !important;\n  visibility: visible; }\n\n.label-inactive {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  color: #bbbbbb !important; }\n\n.role-card {\n  color: white;\n  min-height: 80px;\n  border-radius: 0.3rem !important; }\n\n.role-card .fa {\n    font-size: 26px; }\n\n.role-card .role-name {\n    font-size: 14px; }\n\n.role-card .role-count {\n    font-size: 10px;\n    text-align: right; }\n\n:host .roles:nth-child(6n + 1) .role-card {\n  background: #f44336; }\n\n:host .roles:nth-child(6n + 2) .role-card {\n  background: #009ef6; }\n\n:host .roles:nth-child(6n + 3) .role-card {\n  background: #f0c315; }\n\n:host .roles:nth-child(6n + 4) .role-card {\n  background: #3fa742; }\n\n:host .roles:nth-child(6n + 5) .role-card {\n  background: #d0021b; }\n\n:host .roles:nth-child(6n + 6) .role-card {\n  background: #005494; }\n\n.modal-content .modal-header {\n  color: #fff; }\n\n.modal-content .modal-header .modal-title h4 {\n    font-size: 16px; }\n\n.modal-content .modal-header .modal-title .fa {\n    font-size: 20px; }\n\n.modal-content .modal-header .btn {\n    padding: 0.4rem;\n    margin: 0;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\n.modal-content .modal-header .btn .fa {\n      font-size: 16px; }\n\n.modal-content .modal-header .btn :hover {\n      background: none !important; }\n\n.modal-content .modal-body h5 {\n  font-size: 16px; }\n\n.modal-content .modal-body .badge {\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 31px;\n  font-weight: 400; }\n\n.modal-content .modal-body .name-badge span {\n  padding: 2px 5px;\n  border-radius: 50%;\n  color: #ffffff;\n  margin-left: -3px;\n  margin-right: 3px; }\n\n.modal-content .modal-body .users-list .name-badge:nth-child(6n + 1) span {\n  background: #f44336; }\n\n.modal-content .modal-body .users-list .name-badge:nth-child(6n + 2) span {\n  background: #009ef6; }\n\n.modal-content .modal-body .users-list .name-badge:nth-child(6n + 3) span {\n  background: #f0c315; }\n\n.modal-content .modal-body .users-list .name-badge:nth-child(6n + 4) span {\n  background: #3fa742; }\n\n.modal-content .modal-body .users-list .name-badge:nth-child(6n + 5) span {\n  background: #d0021b; }\n\n.modal-content .modal-body .users-list .name-badge:nth-child(6n + 6) span {\n  background: #005494; }\n\n.delete-modal-content h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.delete-modal-content p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.create-role-modal .is-invalid:focus {\n  -webkit-box-shadow: 0 1px 0 0 #dc3545 !important;\n          box-shadow: 0 1px 0 0 #dc3545 !important;\n  border-bottom-color: #dc3545 !important; }\n\n.create-role-modal .is-invalid-select ::ng-deep .below .multiple {\n  border-bottom: 1px solid #dc3545 !important; }\n\n.create-role-modal .modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.create-role-modal .modal-content .modal-header {\n  background-color: #ededeb !important; }\n\n.create-role-modal .modal-content .modal-header h4 {\n    color: #2d2d2d;\n    font-size: 16px;\n    font-weight: 500; }\n\n.create-role-modal .modal-content input#role-name {\n  font-weight: 300; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep .error {\n  font-size: 10px;\n  font-weight: 500; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .dropdown-content li > a,\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .dropdown-content li > span {\n  color: #495057; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .multiple {\n  line-height: 0.5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .multiple .placeholder {\n    font-size: 13px;\n    margin-bottom: 0.5rem !important;\n    visibility: hidden !important; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .multiple .toggle {\n    margin-left: auto;\n    position: relative;\n    color: #a1a1a1;\n    font-size: 10px; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .multiple .option {\n    display: inline-block;\n    font-size: 75%;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    background: #e7e7e7;\n    color: #252525;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 31px;\n    font-weight: 400;\n    padding: 0.5rem !important;\n    margin-bottom: 0.25rem !important;\n    margin-right: 0.25rem !important; }\n\n.create-role-modal .modal-content .modal-body ::ng-deep mdb-ng-select .multiple .option span.deselect-option {\n      display: none; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .delete-modal-content {\n    margin-top: 50px; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .delete-modal-content {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .delete-modal-content {\n    margin-top: 120px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/role/role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_role_role__ = __webpack_require__("../../../../../src/app/shared/role/role.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_role_permission_service__ = __webpack_require__("../../../../../src/app/shared/role/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_role_role_service__ = __webpack_require__("../../../../../src/app/shared/role/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoleComponent = (function () {
    function RoleComponent(_roleService, _permissionService, _userService, _authService) {
        this._roleService = _roleService;
        this._permissionService = _permissionService;
        this._userService = _userService;
        this._authService = _authService;
        this.permissions = [];
        this.maxUserCount = 90;
        this.hidden = false;
        this.roleDetailsModalHeaderColor = "";
        this.headerColors = ["#f44336", "#009ef6", "#f0c315", "#3fa742", "#d0021b", "#005494"];
        this.roleDetails = new __WEBPACK_IMPORTED_MODULE_1__shared_role_role__["a" /* Role */]();
        this.roleForDelete = new __WEBPACK_IMPORTED_MODULE_1__shared_role_role__["a" /* Role */]();
        this.roleCount = 0;
        this.searchQuery = "";
        this.fetchDone = false;
        this.PermissionActive = false;
    }
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roleService.getRoles().subscribe();
        this.roles = this._roleService.roles;
        this.roles.subscribe(function (data) {
            _this.roleCount = data.length;
        });
        this.permissions = this._permissionService.getPermissions().sort(function (a, b) {
            if (a.label < b.label) {
                return -1;
            }
            else if (a.label > b.label) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.role = new __WEBPACK_IMPORTED_MODULE_1__shared_role_role__["a" /* Role */]();
    };
    RoleComponent.prototype.showRoleDetail = function (role, index) {
        this.roleDetails = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__shared_role_role__["a" /* Role */](), role);
        this.roleDetailsModalHeaderColor = this.headerColors[index % 6];
        this.roleDetailsModal.show();
    };
    RoleComponent.prototype.submit = function () {
        var userId = this._authService.getUserId();
        for (var i in this.role) {
            if (this.role.userId !== userId) {
                this.role.userId = userId;
            }
        }
        this._roleService.createOrEditRole(Object.assign(new __WEBPACK_IMPORTED_MODULE_1__shared_role_role__["a" /* Role */](), this.role));
        this.createRoleModal.hide();
    };
    RoleComponent.prototype.promptDeleteRole = function (role) {
        this.roleForDelete = role;
        this.deleteRoleModal.show();
    };
    RoleComponent.prototype.deleteRole = function (role) {
        this.roleDetailsModal.hide();
        this.deleteRoleModal.hide();
        this._roleService.deleteRole(role);
    };
    RoleComponent.prototype.searchValueChange = function (q) {
        this.searchQuery = q;
        this._roleService.searchTerm.next(this.searchQuery);
    };
    RoleComponent.prototype.getUserNameByUserId = function (userId) {
        return this._userService.getUserNameByUserId(userId);
    };
    RoleComponent.prototype.openCreateModal = function () {
        this.role = new __WEBPACK_IMPORTED_MODULE_1__shared_role_role__["a" /* Role */]();
        this.createRole.reset();
        this.createRoleModal.show();
    };
    RoleComponent.prototype.editRole = function (role) {
        this.role = role;
        this.createRoleModal.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("roleDetailsModal"),
        __metadata("design:type", Object)
    ], RoleComponent.prototype, "roleDetailsModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("createRoleModal"),
        __metadata("design:type", Object)
    ], RoleComponent.prototype, "createRoleModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("deleteRoleModal"),
        __metadata("design:type", Object)
    ], RoleComponent.prototype, "deleteRoleModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("createRole"),
        __metadata("design:type", Object)
    ], RoleComponent.prototype, "createRole", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], RoleComponent.prototype, "body", void 0);
    RoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-role",
            template: __webpack_require__("../../../../../src/app/role/role.component.html"),
            styles: [__webpack_require__("../../../../../src/app/role/role.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_role_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_role_permission_service__["a" /* PermissionService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_user_auth_service__["a" /* AuthService */]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/role/role.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_role_role_component__ = __webpack_require__("../../../../../src/app/role/role.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_role_role_component__["a" /* RoleComponent */] }];
var RoleModule = (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_role_role_component__["a" /* RoleComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], RoleModule);
    return RoleModule;
}());



/***/ })

});
//# sourceMappingURL=role.module.chunk.js.map