webpackJsonp(["area-of-operation.module"],{

/***/ "../../../../../src/app/area-of-operation/area-of-operation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- count and search row -->\r\n<div #body class=\"row p-4 content-top m-0\">\r\n  <div class=\"col-12 col-md-7 px-0 align-self-center\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"areaCount\">{{ areaCount }} {{ areaCount == 1 || areaCount == 0 ? 'area' : 'areas'}}</h6>\r\n  </div>\r\n  <div class=\"col-9 col-md-4 py-1 px-0\">\r\n    <div class=\"input-group search-block\">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by area, state or country\" [ngModel]=\"searchQuery\"\r\n        (ngModelChange)=\"searchValueChange($event)\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-3 col-md-1 d-flex justify-content-end\">\r\n    <a class=\"btn-floating m-0\" mdbRippleRadius (click)=\"openCreateModal()\">\r\n      <img src=\"../../assets/svg/plus_sign.svg\" alt=\" \">\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content-body\" *ngIf=\"(areaService.fetchDone | async)\">\r\n  <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count\" *ngIf=\"!areaCount\">\r\n    <div class=\"col-md-4 py-4\">\r\n      <img src=\"../../assets/svg/aooemp.svg\" alt=\"Add New\">\r\n      <h6 class=\"header-text\">No areas found</h6>\r\n      <p class=\"sub-text m-0\">There are currently no areas created on the system.</p>\r\n      <p class=\"sub-text\">Add an area by clicking on the blue button below.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <!--card views for displaying areas-->\r\n  <div class=\"row m-0\">\r\n    <div *ngFor=\"let area of areas | async\" class=\"col-sm-6 col-md-4 col-lg-3 pb-4 float-right\">\r\n      <div class=\"default-card wow fadeIn card\" data-wow-delay=\"0.25s\" (click)=\"showAreaDetail(area)\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-text mb-2 semi-dark-label\">{{area.areaName}}</h6>\r\n          <p class=\"card-text mb-0 light-text\"> {{area.state}} - {{area.country}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"areaService.fetchDone | async\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>\r\n\r\n<!--individual modal cardview  upon clicking-->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #displayCard=\"mdb-modal\" class=\"modal fade\" id=\"modalViewCard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"displayCardModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <!--Content-->\r\n      <div class=\"modal-content\">\r\n        <!--Body-->\r\n        <div class=\"modal-header\" style=\"background-color: rgba(0,0,0,0.1);\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section px-3 py-1\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\" style=\"font-weight: 500;\" id=\"myModalLabel\">{{ areaDetails.areaName}}</h6>\r\n              <p class=\"modal-title light-text w-100\" style=\"color:grey;\" id=\"myModalLabel\">{{areaDetails.state}} - {{areaDetails.country}}</p>\r\n            </div>\r\n            <div class=\"d-flex justify-content-end btn-section\">\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Edit Area\" placement=\"top\" mdbRippleRadius (click)=\"updateArea(areaDetails)\">\r\n                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Delete Area\" placement=\"top\" (click)=\"promptAreaDelete(areaDetails)\" mdbRippleRadius>\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n              </button>\r\n              <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"displayCard.hide()\">\r\n                <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-header\">\r\n          <div class=\"row m-0 head-content\">\r\n            <div class=\"title-section px-3 py-1\">\r\n              <h6 class=\"modal-title semi-dark-label w-100\" style=\"color:grey;\" id=\"myModalLabel\">Cities</h6>\r\n              <p class=\"modal-title light-text w-100\" style=\"font-weight: 600;\" id=\"myModalLabel\">{{ areaDetails.cities.join(\", \")}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/.Content-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--pop up create area Modal form-->\r\n<div class=\"modal-container\">\r\n  <div mdbModal #createAreaModal=\"mdb-modal\" class=\"modal fade create-aoo-modal\" id=\"modalContactForm\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header p-4\">\r\n          <h6 class=\"modal-title w-100\" style=\"font-weight:500; color:grey;\">{{ areaForCreate.areaId.length > 0 ? 'Edit' : 'Create'}} area</h6>\r\n        </div>\r\n        <!--Body-->\r\n        <div class=\"modal-body p-4\">\r\n\r\n          <div class=\"loader-container\" [class.hide]=\"citiesFetched\">\r\n            <app-material-spinner></app-material-spinner>\r\n          </div>\r\n          <form #aooForm=\"ngForm\">\r\n            <div class=\"row m-0\">\r\n              <div class=\"col-md-6 mb\">\r\n                <div class=\"md-form form-sm m-0 pt-2\">\r\n                  <input mdbActive type=\"text\" class=\"form-control m-0\" [class.is-invalid]=\"areaName.errors && (areaName.dirty || areaName.touched)\"\r\n                    #areaName=\"ngModel\" name=\"areaName\" required [(ngModel)]=\"areaForCreate.areaName\">\r\n                  <label for=\"areaName\" [ngClass]=\"areaForCreate.areaId.length > 0  ? 'active' : '' \">Area name</label>\r\n                </div>\r\n                <div *ngIf=\"areaName.errors && (areaName.dirty || areaName.touched)\" class=\"col-md-12 \">\r\n                  <div [hidden]=\"!areaName.errors.required\" class=\"text-danger error2\">\r\n                    <small class=\"val-error\">Please Select a City</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 mb\">\r\n                <div class=\"md-form form-sm m-0\">\r\n                  <mdb-ng-select placeholder=\"Country\" [filterEnabled]=\"true\" (ngModelChange)=\"onCountryChange($event)\" [class.is-invalid-select]=\"country.errors && (country.dirty || country.touched)\"\r\n                    #country=\"ngModel\" name=\"country\" (focusin)=\"countryActive = true\" required [(ngModel)]=\"selectedCountry\"\r\n                    [options]=\"countries | async\" required></mdb-ng-select>\r\n                  <label *ngIf=\"areaForCreate.areaId.length > 0; else elseBlock\" class=\"label-active\" for=\"country\">Country</label>\r\n                  <ng-template #elseBlock>\r\n                    <label [ngClass]=\"countryActive ? 'label-active' : 'label-inactive'\" for=\"country\">Country</label>\r\n                  </ng-template>\r\n                </div>\r\n                <div *ngIf=\"country.errors && (country.dirty || country.touched)\" class=\"col-md-12 \">\r\n                  <div [hidden]=\"!country.errors.required\" class=\"text-danger error2\">\r\n                    <small class=\"val-error\">Please Select a Country</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 mb\">\r\n                <div class=\"md-form form-sm m-0\">\r\n                  <mdb-ng-select placeholder=\"State\" [filterEnabled]=\"true\" (ngModelChange)=\"onStateChange($event)\" [class.is-invalid-select]=\"state.errors && (state.dirty || state.touched)\"\r\n                    #state=\"ngModel\" name=\"state\" required (focusin)=\"StateActive = true\" [(ngModel)]=\"selectedState\" [options]=\"states | async\"\r\n                    required></mdb-ng-select>\r\n                  <label *ngIf=\"areaForCreate.areaId.length > 0; else elseBlock1\" class=\"label-active\" for=\"state\">State</label>\r\n                  <ng-template #elseBlock1>\r\n                    <label [ngClass]=\"StateActive ? 'label-active' : 'label-inactive'\" for=\"state\">State</label>\r\n                  </ng-template>\r\n                </div>\r\n                <div *ngIf=\"state.errors && (state.dirty || state.touched)\" class=\"col-md-12 \">\r\n                  <div [hidden]=\"!state.errors.required\" class=\"text-danger error2\">\r\n                    <small class=\"val-error\">Please Select a State</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 mb\">\r\n                <div class=\"md-form form-sm m-0\">\r\n                  <!-- <ng-select [allowClear]=\"true\" [multiple]=\"true\" #city=\"ngModel\" name=\"city\" (focusin)=\"CitiesActive = true\" required [(ngModel)]=\"selectedCities\"\r\n                    [items]=\"cities | async\" required (selected)=\"console.log(selectedCities)\"></ng-select> -->\r\n                  <mdb-ng-select placeholder=\"Cities\" (ngModelChange)=\"onCitiesChange($event)\" [class.is-invalid-select]=\"city.errors && (city.dirty || city.touched)\"\r\n                    #city=\"ngModel\" name=\"city\" (focusin)=\"CitiesActive = true\" required [(ngModel)]=\"selectedCities\" [options]=\"cities | async\"\r\n                    [multiple]=true required></mdb-ng-select>\r\n                  <label *ngIf=\"areaForCreate.areaId.length > 0; else elseBlock2\" class=\"label-active\" for=\"city\">Cities</label>\r\n                  <ng-template #elseBlock2>\r\n                    <label [ngClass]=\"CitiesActive ? 'label-active' : 'label-inactive'\" for=\"city\">Cities</label>\r\n                  </ng-template>\r\n                </div>\r\n                <!-- <div class=\"d-flex justify-content-end\" *ngIf=\"locationService.hasMoreCities\">\r\n                  <p (click)=\"loadMore()\" class=\"load-more\">load more</p>\r\n                </div> -->\r\n                <div *ngIf=\"city.errors && (city.dirty || city.touched)\" class=\"col-md-12 \">\r\n                  <div [hidden]=\"!city.errors.required\" class=\"text-danger error2\">\r\n                    <small class=\"val-error\">Please Select a City</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn-groupe w-100 d-flex justify-content-end\">\r\n                <button type=\"button\" class=\"btn text-uppercase\" aria-label=\"Cancel\" (click)=\"createAreaModal.hide()\" mdbRippleRadius>cancel\r\n                </button>\r\n                <button type=\"submit\" class=\"btn text-uppercase \" mdbRippleRadius [disabled]=\"!aooForm.form.valid\" (click)=\"createArea()\">save\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!--/.Content-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal-container\">\r\n  <div mdbModal #deleteCard=\"mdb-modal\" class=\"modal modal-sm fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteRoleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog \" role=\"document \">\r\n      <div class=\"modal-content delete-modal-content\">\r\n        <div class=\"modal-body p-4\">\r\n          <h4>\r\n            Are you sure you want to delete \"{{areaForDelete.areaName}}\"?\r\n          </h4>\r\n          <p class=\"pr-4\">\r\n            Please take your time to review this region details.\r\n          </p>\r\n          <div class=\"btn-groupe w-100 d-flex justify-content-end \">\r\n            <button class=\"btn text-uppercase\" (click)=\"deleteCard.hide()\" mdbRippleRadius>cancel</button>\r\n            <button class=\"btn text-uppercase\" (click)=\"removeArea(areaForDelete) \" mdbRippleRadius>delete</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- buttom right round call to action button-->\r\n<!-- <div class=\"fixed-action-btn \">\r\n  <a class=\"btn-floating area-but\" mdbRippleRadius (click)=\"openCreateModal()\">\r\n    <img src=\"../../assets/svg/plus_sign.svg\" alt=\" \">\r\n  </a>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/area-of-operation/area-of-operation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.mb {\n  margin-bottom: 1.5rem !important; }\n\n.select-label {\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  position: absolute;\n  top: 0.8rem;\n  left: 0; }\n\n.label-active {\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n  color: #bbbbbb !important;\n  visibility: visible; }\n\n.label-inactive {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  color: #bbbbbb !important; }\n\n.error small {\n  margin-left: -2.1em;\n  font-size: 70%; }\n\n.error2 small {\n  margin-left: -1.1em;\n  font-size: 70%; }\n\n.load-more {\n  font-size: 70%;\n  color: #004f91;\n  font-weight: bold;\n  cursor: pointer;\n  margin: 0;\n  padding-top: 0.3rem;\n  text-transform: capitalize; }\n\n.default-card {\n  min-height: 80px; }\n\n.default-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: #555555; }\n\n.default-subname {\n  font-size: 14px;\n  color: #a4a1a1; }\n\n.area-count {\n  font-size: 14px;\n  color: #a4a1a1; }\n\n.delete-modal-content h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.delete-modal-content p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.placeholder,\n.cardtext {\n  color: grey; }\n\n.heavytext {\n  color: black;\n  font-size: 18px;\n  font-weight: 600; }\n\n.reviewtext {\n  color: grey;\n  font-size: 13px; }\n\n.bot-row {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.selectborder {\n  border: none; }\n\n.selectborder input {\n    padding-left: 0; }\n\n.input-group .form-control {\n  padding-left: 0; }\n\n.modal-body {\n  position: relative; }\n\n.loader-container {\n  background: rgba(255, 255, 255, 0.9); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area-of-operation/area-of-operation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaOfOperationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_area_area_service__ = __webpack_require__("../../../../../src/app/shared/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_location_location_service__ = __webpack_require__("../../../../../src/app/shared/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_area_area__ = __webpack_require__("../../../../../src/app/shared/area/area.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AreaOfOperationComponent = (function () {
    function AreaOfOperationComponent(areaService, locationService, ref) {
        this.areaService = areaService;
        this.locationService = locationService;
        this.ref = ref;
        this.areaForCreate = new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */]();
        this.areaForDelete = new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */]();
        this.areaDetails = new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */]();
        this.areaCount = 0;
        this.countries = this.locationService.countries;
        this.states = this.locationService.states;
        this.cities = this.locationService.cities;
        this.areas = this.areaService.areas;
        this.fetchDone = false;
        this.countryActive = false;
        this.StateActive = false;
        this.CitiesActive = false;
        this.citiesFetched = true;
    }
    AreaOfOperationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaService.getAreas().subscribe();
        this.areas.subscribe(function (data) {
            _this.areaCount = data.length;
        });
        this.cities.subscribe(function (data) {
            var cityIds = [];
            _this.areaForCreate.cities.forEach(function (city) {
                data.forEach(function (v) {
                    if (city.toLowerCase() === v.label.toLowerCase()) {
                        cityIds.push(v.value);
                    }
                });
            });
            _this.onCitiesChange(cityIds);
        });
        this.states.subscribe(function (data) {
            data.forEach(function (v) {
                if (_this.areaForCreate.state.toLowerCase() === v.label.toLowerCase()) {
                    _this.onStateChange(v.value);
                }
            });
        });
    };
    AreaOfOperationComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        if (countryId) {
            this.selectedCountry = countryId;
            this.locationService.getStates(this.selectedCountry);
            this.countries.value.forEach(function (v) {
                if (v.value === _this.selectedCountry) {
                    _this.areaForCreate.country = v.label;
                }
            });
        }
    };
    AreaOfOperationComponent.prototype.onStateChange = function (stateId) {
        var _this = this;
        if (stateId) {
            this.locationService.getCities(stateId);
            this.states.value.forEach(function (v) {
                if (v.value === stateId) {
                    _this.areaForCreate.state = v.label;
                }
            });
            this.selectedState = stateId;
            this.citiesFetched = true;
            this.ref.detectChanges();
        }
    };
    AreaOfOperationComponent.prototype.onCitiesChange = function (cityIds) {
        var _this = this;
        if (cityIds && cityIds.length > 0) {
            var cities_1 = [];
            cityIds.forEach(function (v) {
                return _this.cities.value.forEach(function (p) {
                    if (v === p.value) {
                        cities_1.push(p.label);
                    }
                });
            });
            this.selectedCities = cityIds;
            this.areaForCreate.cities = cities_1;
            this.ref.detectChanges();
        }
    };
    AreaOfOperationComponent.prototype.showAreaDetail = function (area) {
        this.areaDetails = area;
        this.displayCard.show();
    };
    AreaOfOperationComponent.prototype.openCreateModal = function () {
        this.citiesFetched = true;
        this.areaForCreate = new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */]();
        this.selectedCountry = "";
        this.selectedState = "";
        this.selectedCities = [];
        this.aooForm.reset();
        this.createAreaModal.show();
    };
    AreaOfOperationComponent.prototype.createArea = function () {
        this.areaService.createOrUpdate(Object.assign(new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */](), this.areaForCreate));
        this.createAreaModal.hide();
        this.displayCard.hide();
    };
    AreaOfOperationComponent.prototype.updateArea = function (area) {
        var _this = this;
        this.citiesFetched = false;
        this.areaForCreate = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */](), area);
        this.countries.value.forEach(function (v) {
            if (v.label.toLowerCase() === _this.areaForCreate.country.toLowerCase()) {
                _this.onCountryChange(v.value);
            }
        });
        this.createAreaModal.show();
    };
    AreaOfOperationComponent.prototype.promptAreaDelete = function (area) {
        this.deleteCard.show();
        this.areaForDelete = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__shared_area_area__["a" /* Area */](), area);
    };
    AreaOfOperationComponent.prototype.removeArea = function (area) {
        this.displayCard.hide();
        this.deleteCard.hide();
        this.areaService.deleteArea(area);
    };
    AreaOfOperationComponent.prototype.searchValueChange = function (q) {
        this.searchQuery = q;
        this.areaService.searchTerm.next(this.searchQuery);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("displayCard"),
        __metadata("design:type", Object)
    ], AreaOfOperationComponent.prototype, "displayCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("deleteCard"),
        __metadata("design:type", Object)
    ], AreaOfOperationComponent.prototype, "deleteCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("createAreaModal"),
        __metadata("design:type", Object)
    ], AreaOfOperationComponent.prototype, "createAreaModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("aooForm"),
        __metadata("design:type", Object)
    ], AreaOfOperationComponent.prototype, "aooForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], AreaOfOperationComponent.prototype, "body", void 0);
    AreaOfOperationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-area-of-operation",
            template: __webpack_require__("../../../../../src/app/area-of-operation/area-of-operation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area-of-operation/area-of-operation.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_area_area_service__["a" /* AreaService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AreaOfOperationComponent);
    return AreaOfOperationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/area-of-operation/area-of-operation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaOfOperationModule", function() { return AreaOfOperationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_area_of_operation_area_of_operation_component__ = __webpack_require__("../../../../../src/app/area-of-operation/area-of-operation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_area_of_operation_area_of_operation_component__["a" /* AreaOfOperationComponent */] }];
var AreaOfOperationModule = (function () {
    function AreaOfOperationModule() {
    }
    AreaOfOperationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_area_of_operation_area_of_operation_component__["a" /* AreaOfOperationComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], AreaOfOperationModule);
    return AreaOfOperationModule;
}());



/***/ })

});
//# sourceMappingURL=area-of-operation.module.chunk.js.map