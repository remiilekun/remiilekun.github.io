webpackJsonp(["region.module"],{

/***/ "../../../../../src/app/region/region.component.html":
/***/ (function(module, exports) {

module.exports = "<div #body class=\"row p-4 content-top m-0\">\r\n  <div class=\"col-12 col-md-7 px-0 align-self-center\">\r\n    <h6 class=\"dark-text m-0\" *ngIf=\"regionCount\">{{ regionCount }} {{ regionCount == 1 ? 'region' : 'regions'}}</h6>\r\n  </div>\r\n  <div class=\"col-9 col-md-4 px-0 py-1\">\r\n    <div class=\"input-group region-search\">\r\n      <span class=\"input-group-addon search-icon\" id=\"basic-addon1\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </span>\r\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search by Region Name or Country\" [ngModel]=\"searchQuery\"\r\n        (ngModelChange)=\"searchValueChange($event)\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-3 col-md-1 d-flex justify-content-end\">\r\n    <a class=\"btn-floating m-0\" mdbRippleRadius (click)=\"openCreateModal()\">\r\n      <img src=\"../../assets/svg/plus_sign.svg\" alt=\" \">\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content-body\" *ngIf=\"(regionService.fetchDone | async)\">\r\n  <div class=\"row m-0 p-0 justify-content-center align-items-center text-center zero-count\" *ngIf=\"!regionCount\">\r\n    <div class=\"col-md-4 py-4\">\r\n      <img src=\"../../assets/svg/aooemp.svg\" alt=\"Add New\">\r\n      <h6 class=\"header-text\">No regions found</h6>\r\n      <p class=\"sub-text m-0\">There are currently no regions created on the system.</p>\r\n      <p class=\"sub-text\">Add a region by clicking on the blue button below.</p>\r\n    </div>\r\n  </div>\r\n  <!--card views for displaying areas-->\r\n  <div class=\"row m-0\">\r\n    <div *ngFor=\"let region of regions | async\" class=\"col-sm-6 col-md-4 col-lg-3 pb-4 float-right\">\r\n      <div class=\"default-card wow fadeIn card\" data-wow-delay=\"0.25s\" (click)=\"showRegionDetail(region)\">\r\n        <div class=\"card-body\">\r\n          <h6 class=\"card-text mb-2 semi-dark-label\">{{region.regionName}}</h6>\r\n          <p class=\"card-text mb-0 light-text\">{{region.country}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--individual modal cardview  upon clicking-->\r\n    <div class=\"modal-container\">\r\n      <div mdbModal #displayCard=\"mdb-modal\" class=\"modal fade\" id=\"modalViewCard\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"displayCardModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <!--Content-->\r\n          <div class=\"modal-content\">\r\n            <!--Body-->\r\n\r\n            <div class=\"modal-header\">\r\n              <div class=\"row m-0 head-content\">\r\n                <div class=\"title-section py-1\">\r\n                  <h6 class=\"modal-title semi-dark-label w-100\">{{ regionDetails.regionName }}</h6>\r\n                  <p class=\"modal-title light-text w-100\">{{regionDetails.country}}</p>\r\n                </div>\r\n                <div class=\"d-flex justify-content-end btn-section\">\r\n                  <button class=\"btn align-self-center\" mdbTooltip=\"Edit region\" placement=\"top\" mdbRippleRadius (click)=\"updateRegion(regionDetails)\">\r\n                    <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n\r\n                  <button class=\"btn align-self-center\" mdbTooltip=\"Delete region\" placement=\"top\" (click)=\"promptRegionDelete(regionDetails)\"\r\n                    mdbRippleRadius>\r\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn align-self-center\" mdbTooltip=\"Close\" placement=\"top\" mdbRippleRadius (click)=\"displayCard.hide()\">\r\n                    <i class=\"fa fa-close\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p class=\"light-text mb-1\">State(s)</p>\r\n              <p class=\"dark-text mb-2\">{{stateName.join(', ')}}</p>\r\n            </div>\r\n          </div>\r\n          <!--/.Content-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- create region Modal form-->\r\n    <div class=\"modal-container\">\r\n      <div mdbModal #createRegionModal=\"mdb-modal\" class=\"modal fade\" id=\"modalContactForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <!--Content-->\r\n          <div class=\"modal-content\">\r\n\r\n\r\n            <!--Header-->\r\n            <div class=\"modal-header p-4\">\r\n              <h6 class=\"modal-title w-100\" style=\"font-weight:500; color:grey;\">{{regionForCreate.regionId && regionForCreate.regionId.length > 0 ? 'Edit' : 'Create'}} region</h6>\r\n            </div>\r\n            <!--Body-->\r\n            <div class=\"modal-body p-4\">\r\n              <form #regionForm=\"ngForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 mb\">\r\n                    <div class=\"md-form pt-2 form-sm m-0\">\r\n                      <input mdbActive type=\"text\" id=\"form19\" class=\"form-control m-0\" [class.is-invalid]=\"regionName.errors && (regionName.dirty || regionName.touched)\"\r\n                        required #regionName=\"ngModel\" name=\"regionName\" [(ngModel)]=\"regionForCreate.regionName\">\r\n                      <label for=\"regionName\" [ngClass]=\"regionForCreate.regionId && regionForCreate.regionId.length > 0  ? 'active' : '' \">Region name</label>\r\n                      <div *ngIf=\"regionName.errors && (regionName.dirty || regionName.touched)\">\r\n                        <div [hidden]=\"!regionName.errors.required\" class=\"text-danger error\">\r\n                          <small class=\"val-error m-0\">Please enter a Region Name</small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <mdb-ng-select placeholder=\"Country\" [(ngModel)]=\"selectedCountry\" [filterEnabled]=\"true\" [options]=\"countries | async\" [class.is-invalid-select]=\"country.errors && (country.dirty || country.touched)\"\r\n                        required #country=\"ngModel\" (focusin)=\"countryActive = true\" name=\"country\" (ngModelChange)=\"onCountryChange($event)\">\r\n                      </mdb-ng-select>\r\n                      <label *ngIf=\"regionForCreate.regionId && regionForCreate.regionId.length > 0; else elseBlock\" class=\"label-active\" for=\"country\">Country</label>\r\n                      <ng-template #elseBlock>\r\n                        <label [ngClass]=\"countryActive ? 'label-active' : 'label-inactive'\" for=\"country\">Country</label>\r\n                      </ng-template>\r\n                    </div>\r\n                    <div *ngIf=\"country.errors && (country.dirty || country.touched)\" class=\"col-md-12 \">\r\n                      <div [hidden]=\"!country.errors.required\" class=\"text-danger error2\">\r\n                        <small class=\"val-error\">Please Select a Country</small>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"md-form form-sm m-0\">\r\n                      <mdb-ng-select placeholder=\"List of States \" [multiple]=true [options]=\"states | async\" [class.is-invalid-select]=\"state.errors && (state.dirty || state.touched)\"\r\n                        required #state=\"ngModel\" name=\"state\" (focusin)=\"StatesActive = true\" [(ngModel)]=\"selectedStates\"\r\n                        (ngModelChange)=\"onStatesChange($event)\">\r\n                      </mdb-ng-select>\r\n                      <label *ngIf=\"regionForCreate.regionId && regionForCreate.regionId.length > 0; else elseBlock1\" class=\"label-active\" for=\"state\">List of States </label>\r\n                      <ng-template #elseBlock1>\r\n                        <label [ngClass]=\"StatesActive ? 'label-active' : 'label-inactive'\" for=\"state\">List of States </label>\r\n                      </ng-template>\r\n                    </div>\r\n                    <div *ngIf=\"state.errors && (state.dirty || state.touched)\" class=\"col-md-12 \">\r\n                      <div [hidden]=\"!state.errors.required\" class=\"text-danger error2\">\r\n                        <small class=\"val-error\">Please Select a State</small>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"btn-groupe w-100 d-flex justify-content-end\">\r\n                    <button type=\"button \" class=\"btn text-uppercase \" aria-label=\"Cancel \" (click)=\"createRegionModal.hide(); regionForm.reset();\"\r\n                      mdbRippleRadius>cancel\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn text-uppercase \" mdbRippleRadius (click)=\"submitRegion()\" mdbRippleRadius [disabled]=\"!regionForm.form.valid\">save\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n          <!--/.Content-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-container\">\r\n      <div mdbModal #deleteCard=\"mdb-modal\" class=\"modal modal-sm fade \" tabindex=\"-1 \" role=\"dialog\r\n                        \" aria-labelledby=\"deleteRoleModalLabel \" aria-hidden=\"true \">\r\n        <div class=\"modal-dialog \" role=\"document \">\r\n          <div class=\"modal-content delete-modal-content \">\r\n            <div class=\"modal-body m-1 \">\r\n              <h4 class=\"heavytext \">\r\n                Are you sure you want to delete region \"{{regionForDelete.regionName}}\"?\r\n              </h4>\r\n              <p class=\"pr-4 placeholder reviewtext \">\r\n                Please take your time to review this region details.\r\n              </p>\r\n              <div class=\"btn-groupe w-100 d-flex justify-content-end \">\r\n                <button class=\"btn text-uppercase \" (click)=\"deleteCard.hide()\" mdbRippleRadius>cancel</button>\r\n                <button class=\"btn text-uppercase \" (click)=\"removeRegion(regionForDelete) \" mdbRippleRadius>delete</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- buttom right round call to action button-->\r\n    <!-- <div class=\"fixed-action-btn \">\r\n      <a class=\"btn-floating area-but \" mdbRippleRadius (click)=\"openCreateModal()\">\r\n        <img src=\"../../assets/svg/plus_sign.svg\" alt=\" \">\r\n      </a>\r\n    </div> -->\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader-container\" [hidden]=\"regionService.fetchDone | async\">\r\n  <app-material-spinner></app-material-spinner>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/region/region.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold-text {\n  font-weight: bold; }\n\n.big-text {\n  margin: 0;\n  font-size: 14px; }\n\n.text-center {\n  text-align: center !important; }\n\n.normal-font {\n  font-size: 1rem; }\n\n.small-font {\n  font-size: 0.75rem; }\n\n.semi-dark-label {\n  font-weight: 500;\n  color: #676767; }\n\n.light-text {\n  color: #9a9a9a;\n  font-size: 12px; }\n\n.semi-dark-text {\n  color: #676767; }\n\n.medium-dark-text {\n  color: #000000;\n  font-size: 13px;\n  font-weight: 400; }\n\n.dark-text {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500; }\n\n.grey-text {\n  color: #9a9a9a !important;\n  font-size: 0.7rem; }\n\n.dark-grey-text {\n  color: #545353 !important; }\n\n.deep-blue-text {\n  color: #07417d !important; }\n\n.blue-text {\n  color: #004f91; }\n\n.dark-label {\n  font-weight: bold;\n  color: #000000; }\n\n.small-label {\n  font-size: 12px; }\n\n.light-bg {\n  background: #f7f7f7 !important; }\n\n.grey-bg {\n  background: #9a9a9a !important; }\n\n.semi-grey-bg {\n  background: #ededeb !important; }\n\n.semi-grey-bg-2 {\n  background: #e7e7e7 !important; }\n\n.light-grey-bg {\n  background: #f4f4f4 !important; }\n\n.bg-none {\n  background: none !important; }\n\n.my-1 {\n  padding: 0;\n  margin: 5px 5px 5px 15px; }\n\n.toleft {\n  margin-left: 13em; }\n\n.mt-c-m1 {\n  margin-top: -2em; }\n\n.no-pb {\n  padding-bottom: 0px !important; }\n\n.filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.v {\n  visibility: visible !important; }\n\n:host ::ng-deep mdb-date-picker .md-form {\n  margin-bottom: 0; }\n\n:host ::ng-deep mdb-date-picker .md-form input {\n    font-size: 0.8rem; }\n\n:host ::ng-deep mdb-date-picker .picker__frame {\n  top: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__table {\n  background: white;\n  margin: 0; }\n\n:host ::ng-deep mdb-date-picker .picker__footer {\n  background: white; }\n\n:host ::ng-deep mdb-date-picker .picker__holder {\n  overflow-y: none; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a,\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option {\n  color: #495057;\n  font-weight: 400; }\n\n:host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > a .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li > span .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value .deselect-option,\n  :host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.option .deselect-option {\n    line-height: 0; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.placeholder {\n  color: #bbbbbb;\n  visibility: hidden !important; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.value,\n:host ::ng-deep .md-form mdb-ng-select > div > div.single > div.placeholder,\n:host ::ng-deep .md-form .md-form.form-sm input {\n  padding: 0; }\n\n:host ::ng-deep .md-form .form-control {\n  margin-bottom: 0; }\n\n:host ::ng-deep .md-form [type=\"checkbox\"] + label::before {\n  margin-top: -8px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div > div.toggle {\n  color: #bbbbbb;\n  font-size: 6px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple > div.toggle {\n  top: 5px; }\n\n:host ::ng-deep .md-form mdb-ng-select > div > div.multiple {\n  padding: 5px 0 4px 0; }\n\n:host ::ng-deep .md-form .form-control::-webkit-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-moz-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control:-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control::-ms-input-placeholder {\n  color: #bbbbbb; }\n\n:host ::ng-deep .md-form .form-control,\n:host ::ng-deep .md-form textarea {\n  color: #495057 !important;\n  border-bottom: 1px solid #bdbdbd;\n  -webkit-box-shadow: 0 0.3px 0 0 #bdbdbd;\n          box-shadow: 0 0.3px 0 0 #bdbdbd;\n  font-size: 0.8rem !important; }\n\n:host ::ng-deep .md-form .form-control:focus,\n  :host ::ng-deep .md-form textarea:focus {\n    border-bottom: 1px solid #4285f4;\n    -webkit-box-shadow: 0 1px 0 0 #4285f4;\n            box-shadow: 0 1px 0 0 #4285f4; }\n\n:host ::ng-deep .md-form .lig input {\n  padding-left: 0; }\n\n:host ::ng-deep .md-form .lig span i {\n  font-size: 1rem;\n  color: #bdbdbd; }\n\n:host ::ng-deep .md-form .disabled {\n  opacity: 0.5 !important; }\n\n.fixed-action-btn {\n  bottom: 5vh;\n  right: 5vh; }\n\n.btn-floating {\n  background: #f27023;\n  width: 40px;\n  height: 40px; }\n\n.btn-floating .fa {\n    width: 100%; }\n\n.btn-group {\n  position: unset; }\n\n.btn-group a {\n    position: relative;\n    padding: 0.25rem 1rem;\n    padding-left: 0; }\n\n.btn-group a i {\n      position: absolute;\n      right: 6px;\n      top: 8px; }\n\n.btn-groupe .btn {\n  padding: 0.4rem;\n  margin: 0;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #07417d !important; }\n\n.btn-flat {\n  padding: 8px 10px; }\n\n.btn-transparent {\n  color: #676767;\n  background: none;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all; }\n\n@media (max-width: 575px) {\n  .btn {\n    font-size: 0.6rem; }\n    .btn-floating {\n      right: 1px !important;\n      width: 37px;\n      height: 37px; } }\n\n.search-block {\n  background-color: #f7f7f7;\n  border-radius: 1px;\n  color: #a8a8a8; }\n\n.search-icon {\n  border: none;\n  background-color: #f7f7f7; }\n\n.search-input {\n  height: 100%;\n  margin: 0;\n  border: none;\n  background-color: #f7f7f7;\n  padding: 10px 10px 10px 0; }\n\n.search-input:focus {\n    border-bottom: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.dropdown-toggle-sort {\n  background-color: #f7f7f7 !important;\n  color: #9a9a9a !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.dropdown-toggle-sort:hover, .dropdown-toggle-sort:focus {\n    background-color: #f7f7f7 !important;\n    color: #9a9a9a !important; }\n\n.dropdown-item.active, .dropdown-item:active {\n  background-color: #f7f7f7 !important; }\n\nsmall.val-error {\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 0.8;\n  position: relative;\n  top: 1px; }\n\n.map-modal {\n  margin-top: 15vh; }\n\n.map-modal agm-map {\n    height: 60vh; }\n\n.freq-badge {\n  font-size: 0.8rem;\n  text-align: center;\n  background: #e7e7e7;\n  color: #252525;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 500px;\n  font-weight: 500; }\n\n.rb {\n  border-right: 1px solid #d9d7d7; }\n\n.tb {\n  border-top: 1px solid #d9d7d7; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.confirm-modal h4 {\n  font-size: 16px;\n  color: #000;\n  font-weight: bold; }\n\n.confirm-modal p {\n  font-size: 12px;\n  color: #afafaf; }\n\n.modal-content--fixed {\n  position: fixed;\n  width: 100%;\n  margin-top: 40px !important;\n  overflow-y: hidden;\n  height: 80vh; }\n\n.modal-content .head-content {\n  width: 100%; }\n\n.modal-content .head-content .title-section {\n    width: 65%; }\n\n.modal-content .head-content .btn {\n    padding: 0.4rem;\n    background: none;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #676767; }\n\n.modal-content .head-content .btn:hover {\n      background: none !important; }\n\n.modal-content .head-content .btn .fa {\n      color: #676767 !important; }\n\n.modal-content .head-content .btn-section {\n      width: 35%; }\n\n.modal-content .error {\n  margin-left: -1.2em;\n  font-size: 70%; }\n\n.modal-body {\n  background: #f7f7f7; }\n\n.modal-body--fixed {\n    position: fixed;\n    margin-top: 65px;\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100%; }\n\n.modal-container ::ng-deep .modal {\n  overflow-y: auto !important; }\n\n@media (max-width: 575px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; }\n  .btn {\n    font-size: 0.6rem !important; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .modal-content {\n    margin-top: 25px; }\n  .confirm-modal {\n    margin-top: 50px; } }\n\n@media (min-width: 768px) {\n  .modal-content {\n    margin-top: 90px; }\n  .confirm-modal {\n    margin-top: 120px; } }\n\n.mb {\n  margin-bottom: 1.5rem !important; }\n\n.select-label {\n  -webkit-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  position: absolute;\n  top: 0.8rem;\n  left: 0; }\n\n.label-active {\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n  color: #bbbbbb !important;\n  visibility: visible; }\n\n.label-inactive {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  color: #bbbbbb !important; }\n\n.error small {\n  margin-left: -2.1em;\n  font-size: 70%; }\n\n.error2 small {\n  margin-left: -1.1em;\n  font-size: 70%; }\n\n.default-card {\n  min-height: 80px; }\n\n.default-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: #555555; }\n\n.default-subname {\n  font-size: 14px;\n  color: #a4a1a1; }\n\n.region-count {\n  font-size: 14px;\n  color: #a4a1a1; }\n\n.selectborder {\n  border: none; }\n\n.selectborder input {\n    padding-left: 0; }\n\n.input-group .form-control {\n  padding-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/region/region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_region_region_service__ = __webpack_require__("../../../../../src/app/shared/region/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_location_location_service__ = __webpack_require__("../../../../../src/app/shared/location/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_region_region__ = __webpack_require__("../../../../../src/app/shared/region/region.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegionComponent = (function () {
    function RegionComponent(locationService, regionService, ref) {
        this.locationService = locationService;
        this.regionService = regionService;
        this.ref = ref;
        this.stateName = [];
        this.regionDetails = new __WEBPACK_IMPORTED_MODULE_3__shared_region_region__["a" /* Region */]();
        this.regionForDelete = new __WEBPACK_IMPORTED_MODULE_3__shared_region_region__["a" /* Region */]();
        this.regionForCreate = new __WEBPACK_IMPORTED_MODULE_3__shared_region_region__["a" /* Region */]();
        this.regionCount = 0;
        this.regions = this.regionService.regions;
        this.countries = this.locationService.countries;
        this.states = this.locationService.states;
        this.fetchDone = false;
        this.countryActive = false;
        this.StatesActive = false;
    }
    RegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regionService.getRegions().subscribe();
        this.regions.subscribe(function (data) {
            _this.regionCount = data.length;
        });
        this.states.subscribe(function (data) {
            var stateIds = [];
            _this.regionForCreate.states.forEach(function (state) {
                data.forEach(function (v) {
                    if (state.name.toLowerCase() === v.label.toLowerCase()) {
                        stateIds.push(v.value);
                    }
                });
            });
            _this.onStatesChange(stateIds);
        });
    };
    RegionComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        if (countryId) {
            this.selectedCountry = countryId;
            this.locationService.getStates(this.selectedCountry);
            this.countries.value.forEach(function (v) {
                if (v.value === _this.selectedCountry) {
                    _this.regionForCreate.country = v.label;
                }
            });
        }
    };
    RegionComponent.prototype.onStatesChange = function (stateIds) {
        var _this = this;
        if (stateIds && stateIds.length > 0) {
            var states_1 = [];
            stateIds.forEach(function (v) {
                return _this.states.value.forEach(function (p) {
                    if (v === p.value) {
                        var val = { id: p.value, name: p.label };
                        states_1.push(val);
                    }
                });
            });
            this.selectedStates = stateIds;
            this.regionForCreate.states = states_1;
            this.ref.detectChanges();
        }
    };
    RegionComponent.prototype.promptRegionDelete = function (region) {
        this.deleteCard.show();
        this.regionForDelete = region;
    };
    RegionComponent.prototype.removeRegion = function (region) {
        this.displayCard.hide();
        this.deleteCard.hide();
        this.regionService.deleteRegion(region);
    };
    RegionComponent.prototype.showRegionDetail = function (region) {
        var _this = this;
        this.stateName = [];
        this.regionDetails = region;
        this.regionDetails.states.forEach(function (data) {
            _this.stateName.push(data.name);
        });
        this.displayCard.show();
    };
    RegionComponent.prototype.submitRegion = function () {
        this.regionService.createOrUpdate(this.regionForCreate);
        this.createRegionModal.hide();
    };
    RegionComponent.prototype.updateRegion = function (region) {
        var _this = this;
        this.regionForCreate = Object.assign(new __WEBPACK_IMPORTED_MODULE_3__shared_region_region__["a" /* Region */](), region);
        this.countries.value.forEach(function (v) {
            if (v.label.toLowerCase() === region.country.toLowerCase()) {
                _this.onCountryChange(v.value);
            }
        });
        this.createRegionModal.show();
    };
    RegionComponent.prototype.openCreateModal = function () {
        this.regionForCreate = new __WEBPACK_IMPORTED_MODULE_3__shared_region_region__["a" /* Region */]();
        this.selectedCountry = "";
        this.selectedStates = [];
        this.regionForm.reset();
        this.createRegionModal.show();
    };
    RegionComponent.prototype.searchValueChange = function (q) {
        this.searchQuery = q;
        this.regionService.searchTerm.next(this.searchQuery);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("displayCard"),
        __metadata("design:type", Object)
    ], RegionComponent.prototype, "displayCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("deleteCard"),
        __metadata("design:type", Object)
    ], RegionComponent.prototype, "deleteCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("createRegionModal"),
        __metadata("design:type", Object)
    ], RegionComponent.prototype, "createRegionModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("regionForm"),
        __metadata("design:type", Object)
    ], RegionComponent.prototype, "regionForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("body"),
        __metadata("design:type", Object)
    ], RegionComponent.prototype, "body", void 0);
    RegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-region",
            template: __webpack_require__("../../../../../src/app/region/region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/region/region.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_location_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_region_region_service__["a" /* RegionService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/region/region.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionModule", function() { return RegionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_region_region_component__ = __webpack_require__("../../../../../src/app/region/region.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: "", component: __WEBPACK_IMPORTED_MODULE_3_app_region_region_component__["a" /* RegionComponent */] }];
var RegionModule = (function () {
    function RegionModule() {
    }
    RegionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0_app_shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(routes)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_region_region_component__["a" /* RegionComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], RegionModule);
    return RegionModule;
}());



/***/ })

});
//# sourceMappingURL=region.module.chunk.js.map