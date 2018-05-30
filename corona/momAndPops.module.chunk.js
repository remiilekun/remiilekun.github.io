webpackJsonp(["momAndPops.module"],{

/***/ "../../../../../src/app/shared/stock/stock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stock; });
var Stock = (function () {
    function Stock() {
        this.id = "";
        this.name = "";
        this.region = "";
        this.state = "";
        this.address = "";
        this.country = "";
        this.contact = "";
        this.email = "";
        this.phone = "";
        this.managedBy = "";
        this.approver = "";
    }
    return Stock;
}());



/***/ }),

/***/ "../../../../../src/app/stock/momAndPops/momAndPops.component.html":
/***/ (function(module, exports) {

module.exports = "<div #body class=\"row m-0 px-2 py-3 wow align-items-center justify-content-between\" style=\"animation-name: none; visibility: visible;\">\r\n  <div class=\"col-md-auto py-1 px-0\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"stockCount\">{{ stockCount }} {{ stockCount == 1 ? 'Mom and Pop' : 'Mom and Pops'}} available.</h6>\r\n  </div>\r\n  <!-- <p>Mom and pops</p> -->\r\n  <div class=\"col-md-auto py-1 px-0\">\r\n    <div class=\"input-group \">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input pr-5\" placeholder=\"Search by outlet name\" [ngModel]=\"searchQuery\" (ngModelChange)=\"searchValueChange($event)\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"unseen\" *ngIf=\"stockCount && fetchDone\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>S/N</th>\r\n        <th (click)=\"sortBy('name')\">Outlet Name\r\n          <i *ngIf=\"order === 'name'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('stockhandler')\">Stockhandler ID\r\n          <i *ngIf=\"order === 'stockhandler'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('region')\">Region\r\n          <i *ngIf=\"order === 'region'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('contact')\">Contact Person\r\n          <i *ngIf=\"order === 'contact'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('phone')\">Phone No\r\n          <i *ngIf=\"order === 'phone'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('email')\">Email\r\n          <i *ngIf=\"order === 'email'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('managed')\">Managed By\r\n          <i *ngIf=\"order === 'managed'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n        <th (click)=\"sortBy('approver')\">Stock Approver\r\n          <i *ngIf=\"order === 'approver'\" class=\"fa fa-caret-down\"></i>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let stock of stockArray | orderBy : order; let i = index\" (click)=\"viewStockDetails(stock)\">\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <td class=\"bold-text\">{{ basicFunctions.formatChar(stock.name) }}</td>\r\n        <td>\r\n          <p class=\"mb-0\"> {{ basicFunctions.formatChar(stock.id) }} </p>\r\n        </td>\r\n        <td>{{ basicFunctions.formatChar(stock.region) }}</td>\r\n        <td>{{ basicFunctions.formatChar(stock.contact) }}</td>\r\n        <td>{{ stock.phone }}</td>\r\n        <td>{{ basicFunctions.formatChar(stock.email) }}</td>\r\n        <td>{{ basicFunctions.formatChar(stock.managedBy) }}</td>\r\n        <td>{{ basicFunctions.formatChar(stock.approver) }}</td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</div>\r\n\r\n<div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count wow fadeIn\" *ngIf=\"!stockCount && fetchDone\">\r\n  <div class=\"col-md-4 py-4\">\r\n    <img src=\"../../../assets/svg/addNew.svg\" alt=\"Add New\">\r\n    <h6 class=\"header-text\">No Stocks found</h6>\r\n    <p class=\"sub-text\">Add a stock by clicking on the blue button below.</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [class.hide]=\"fetchDone\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<!-- Stock view Modal-->\r\n<div class=\"modal-container tmd\">\r\n  <div mdbModal #stockViewModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [config]=\"{backdrop: true, ignoreBackdropClick: false}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section px-3 py-1\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\">{{ stockDetails.name }}</h6>\r\n              <p class=\"modal-title light-text w-100\">111222333444</p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Edit Task\" placement=\"top\" (click)=\"openEditTaskModal(stockDetails)\" mdbRippleRadius>\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Delete Task\" placement=\"top\" (click)=\"confirmDelete(stockDetails)\" mdbRippleRadius>\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"stockViewModal.hide()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <p class=\"light-text mb-0\">Stock holder ID</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.id }}</h6>\r\n          <p class=\"light-text mb-0\">Region</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.region }}</h6>\r\n          <p class=\"light-text mb-0\">State</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.state || 'N/A' }}</h6>\r\n          <p class=\"light-text mb-0\">Address</p>\r\n          <p class=\"dark-text mb-2\">{{ stockDetails.address || 'N/A' }}</p>\r\n\r\n          <hr class=\"w-50 mx-0 align-self-center\">\r\n\r\n          <p class=\"light-text mb-0\">Country</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.country || 'N/A' }}</h6>\r\n          <p class=\"light-text mb-0\">Contact Name</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.contact }}</h6>\r\n          <p class=\"light-text mb-0\">Email</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.email }}</h6>\r\n          <p class=\"light-text mb-0\">Phone Number</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.phone }}</h6>\r\n\r\n          <hr class=\"w-50 mx-0 align-self-center\">\r\n\r\n          <p class=\"light-text mb-0\">Managed By</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.managedBy }}</h6>\r\n\r\n          <p class=\"light-text mb-0\">Approved By</p>\r\n          <h6 class=\"dark-text mb-2\">{{ stockDetails.approver }}</h6>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- stock create fab -->\r\n<div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n  <a (click)=\"openCreateStockModal()\" class=\"btn-floating\" mdbRippleRadius>\r\n    <img src=\"../../assets/plus_sign.svg\" alt=\"\">\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/stock/momAndPops/momAndPops.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n.card-unassigned {\n  border-left: 5px solid #c80c24; }\n\n.card-assigned {\n  border-left: 5px solid #1ea9f4; }\n\n.card-declined {\n  border-left: 5px solid #f91e29; }\n\n.card-in-progress {\n  border-left: 5px solid #0d609c; }\n\n.card-pending-review {\n  border-left: 5px solid #f2ce4a; }\n\n.card-paused {\n  border-left: 5px solid #fba94a; }\n\n.card-done {\n  border-left: 5px solid #4caf50; }\n\n.card-accepted {\n  border-left: 5px solid #33db78; }\n\n.unassigned-icon {\n  color: #c80c24; }\n\n.assigned-icon {\n  color: #1ea9f4; }\n\n.declined-icon {\n  color: #f91e29; }\n\n.accepted-icon {\n  color: #33db78; }\n\n.in-progress-icon {\n  color: #0d609c; }\n\n.paused-icon {\n  color: #fba94a; }\n\n.pending-review-icon {\n  color: #f2ce4a; }\n\n.completed-icon {\n  color: #4caf50; }\n\n.alert-icon {\n  color: #Eb5757; }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\ntable tr:nth-child(even) {\n  background-color: #f9f9f9; }\n\ntable tr:hover .table-icon {\n  visibility: visible; }\n\ntable th {\n  font-weight: 500;\n  cursor: pointer; }\n\ntable th,\ntable td {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-top: 1px solid #f9f9f9 !important;\n  color: #252525; }\n\ntable .bold-text {\n  font-weight: bold;\n  color: #4f4f4f; }\n\ntable .table-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\ntable .table-icon {\n  visibility: hidden;\n  color: #9a9a9a;\n  font-size: 1rem;\n  cursor: pointer; }\n\ntable .table-icon:not(:last-child) {\n    margin-right: 10px; }\n\ntable .table-icon--border {\n    visibility: hidden; }\n\ntable .fa-toggle-on {\n  color: #4caf50; }\n\n@media (max-width: 575px) {\n  table td,\n  th {\n    font-size: 0.6rem; }\n  .table-icons {\n    display: block !important; }\n  .table-icon {\n    visibility: visible !important;\n    width: 100% !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .table-icons {\n    visibility: visible;\n    display: block !important; } }\n\n.btn-floating {\n  right: 0;\n  bottom: 0; }\n\ntable tr:nth-child(even) {\n  background-color: #f9f9f9; }\n\ntable tr:hover .table-icon {\n  visibility: visible; }\n\ntable th {\n  font-weight: 500;\n  cursor: pointer; }\n\ntable th,\ntable td {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  border-top: 1px solid #f9f9f9 !important;\n  color: #252525; }\n\ntable .bold-text {\n  font-weight: bold;\n  color: #4f4f4f; }\n\ntable .table-icons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\ntable .table-icon {\n  visibility: hidden;\n  color: #9a9a9a;\n  font-size: 1rem;\n  cursor: pointer; }\n\ntable .table-icon:not(:last-child) {\n    margin-right: 10px; }\n\ntable .table-icon--border {\n    visibility: hidden; }\n\ntable .fa-toggle-on {\n  color: #4caf50; }\n\n@media (max-width: 575px) {\n  table td,\n  th {\n    font-size: 0.6rem; }\n  .table-icons {\n    display: block !important; }\n  .table-icon {\n    visibility: visible !important;\n    width: 100% !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .table-icons {\n    visibility: visible;\n    display: block !important; } }\n\ntr {\n  cursor: pointer; }\n\n@media (max-width: 575px) {\n  #unseen table td:nth-child(3),\n  #unseen table th:nth-child(3),\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6),\n  #unseen table td:nth-child(7),\n  #unseen table th:nth-child(7),\n  #unseen table td:nth-child(8),\n  #unseen table th:nth-child(8),\n  #unseen table td:nth-child(9),\n  #unseen table th:nth-child(9) {\n    display: none; } }\n\n@media (min-width: 576px) and (max-width: 800px) {\n  #unseen table td:nth-child(3),\n  #unseen table th:nth-child(3),\n  #unseen table td:nth-child(4),\n  #unseen table th:nth-child(4),\n  #unseen table td:nth-child(6),\n  #unseen table th:nth-child(6),\n  #unseen table td:nth-child(8),\n  #unseen table th:nth-child(8) {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock/momAndPops/momAndPops.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomAndPopsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_stock_mom_and_pops_service__ = __webpack_require__("../../../../../src/app/shared/stock/mom-and-pops.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_stock_stock__ = __webpack_require__("../../../../../src/app/shared/stock/stock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utility_basic_functions__ = __webpack_require__("../../../../../src/app/shared/utility/basic-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MomAndPopsComponent = (function () {
    function MomAndPopsComponent(MomAndPopService, ref, authService, basicFunctions) {
        this.MomAndPopService = MomAndPopService;
        this.ref = ref;
        this.authService = authService;
        this.basicFunctions = basicFunctions;
        this.fetchDone = true;
        this.order = "name";
        this.stockCount = 101;
        this.stockArray = [
            {
                name: "Adide Stores",
                id: "121241241241",
                region: "Lagos SW",
                contact: "John Doe",
                phone: "08012345678",
                email: "customer@yahoo.com",
                managedBy: "Samuel Doe",
                approver: "Christopher"
            },
            {
                name: "Ozone Cinemas",
                id: "212241241241",
                region: "South West B",
                contact: "BEn Bruce",
                phone: "08012345678",
                email: "ben@yahoo.com",
                managedBy: "Segun Doe",
                approver: "Simi Akindele"
            },
            {
                name: "Olumogun Sons Ltd",
                id: "213512351235",
                region: "South West B",
                contact: "Bamidele Olumogun",
                phone: "08012345678",
                email: "olumogun@yahoo.co.uk",
                managedBy: "Black Panther",
                approver: "Steven Gerrad"
            },
            {
                name: "Mega Plaza",
                id: "121241241241",
                region: "North East",
                contact: "Mega Man",
                phone: "08012345678",
                email: "mega@gmail.com",
                managedBy: "Blofield Bond",
                approver: "Barry Allen"
            },
            {
                name: "Dawkins Institute",
                id: "121241241241",
                region: "North South",
                contact: "Richard Dawkins",
                phone: "08012345678",
                email: "richard@live.com",
                managedBy: "Oluwa Tobi",
                approver: "Cristain Lipson"
            },
            {
                name: "Unilag Stores",
                id: "121241241241",
                region: "South South",
                contact: "Ambode Salako",
                phone: "08012345678",
                email: "ambode@yahoo.com",
                managedBy: "Curious",
                approver: "Sakobi Snake"
            }
        ];
        this.stockDetails = new __WEBPACK_IMPORTED_MODULE_3__shared_stock_stock__["a" /* Stock */]();
    }
    MomAndPopsComponent.prototype.searchValueChange = function (q) {
        this.searchQuery = q;
    };
    MomAndPopsComponent.prototype.sortBy = function (type) {
        this.order = type;
    };
    MomAndPopsComponent.prototype.viewStockDetails = function (stock) {
        this.stockDetails = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__shared_stock_stock__["a" /* Stock */](), stock);
        this.stockViewModal.show();
    };
    MomAndPopsComponent.prototype.openEditTaskModal = function (stock) {
    };
    MomAndPopsComponent.prototype.openCreateStockModal = function () {
    };
    MomAndPopsComponent.prototype.confirmDelete = function (stock) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("stockViewModal"),
        __metadata("design:type", Object)
    ], MomAndPopsComponent.prototype, "stockViewModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], MomAndPopsComponent.prototype, "body", void 0);
    MomAndPopsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-tasks",
            template: __webpack_require__("../../../../../src/app/stock/momAndPops/momAndPops.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stock/momAndPops/momAndPops.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_stock_mom_and_pops_service__["a" /* MomAndPopsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__shared_user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_utility_basic_functions__["a" /* BasicFunctions */]])
    ], MomAndPopsComponent);
    return MomAndPopsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stock/momAndPops/momAndPops.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomAndPopsModule", function() { return MomAndPopsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_stock_momAndPops_momAndPops_component__ = __webpack_require__("../../../../../src/app/stock/momAndPops/momAndPops.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_stock_momAndPops_momAndPops_component__["a" /* MomAndPopsComponent */] }];
var MomAndPopsModule = (function () {
    function MomAndPopsModule() {
    }
    MomAndPopsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_stock_momAndPops_momAndPops_component__["a" /* MomAndPopsComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], MomAndPopsModule);
    return MomAndPopsModule;
}());



/***/ })

});
//# sourceMappingURL=momAndPops.module.chunk.js.map