webpackJsonp([5],{cldP:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o("LMZF"),a=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),i=o("hLvp"),d=function(){},c=o("W64w"),r=o("HQRX"),l=o("AcZ/"),g=o("BPz8"),m=o("1K9N"),p=o("UHIZ"),_=e._4({encapsulation:0,styles:[[".bold-text[_ngcontent-%COMP%]{font-weight:700}.big-text[_ngcontent-%COMP%]{margin:0;font-size:14px}.text-center[_ngcontent-%COMP%]{text-align:center!important}.normal-font[_ngcontent-%COMP%]{font-size:1rem}.small-font[_ngcontent-%COMP%]{font-size:.75rem}.semi-dark-label[_ngcontent-%COMP%]{font-weight:500;color:#676767}.light-text[_ngcontent-%COMP%]{color:#9a9a9a;font-size:12px}.semi-dark-text[_ngcontent-%COMP%]{color:#676767}.medium-dark-text[_ngcontent-%COMP%]{color:#000;font-size:13px;font-weight:400}.dark-text[_ngcontent-%COMP%]{color:#000;font-size:14px;font-weight:500}.grey-text[_ngcontent-%COMP%]{color:#9a9a9a!important;font-size:.7rem}.dark-grey-text[_ngcontent-%COMP%]{color:#545353!important}.deep-blue-text[_ngcontent-%COMP%]{color:#07417d!important}.blue-text[_ngcontent-%COMP%]{color:#004f91}.dark-label[_ngcontent-%COMP%]{font-weight:700;color:#000}.small-label[_ngcontent-%COMP%]{font-size:12px}.light-bg[_ngcontent-%COMP%]{background:#f7f7f7!important}.grey-bg[_ngcontent-%COMP%]{background:#9a9a9a!important}.semi-grey-bg[_ngcontent-%COMP%]{background:#ededeb!important}.semi-grey-bg-2[_ngcontent-%COMP%]{background:#e7e7e7!important}.light-grey-bg[_ngcontent-%COMP%]{background:#f4f4f4!important}.bg-none[_ngcontent-%COMP%]{background:none!important}.my-1[_ngcontent-%COMP%]{padding:0;margin:5px 5px 5px 15px}.toleft[_ngcontent-%COMP%]{margin-left:13em}.mt-c-m1[_ngcontent-%COMP%]{margin-top:-2em}.no-pb[_ngcontent-%COMP%]{padding-bottom:0!important}.filler[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.v[_ngcontent-%COMP%]{visibility:visible!important}.card-unassigned[_ngcontent-%COMP%]{border-left:5px solid #c80c24}.card-assigned[_ngcontent-%COMP%]{border-left:5px solid #1ea9f4}.card-declined[_ngcontent-%COMP%]{border-left:5px solid #f91e29}.card-in-progress[_ngcontent-%COMP%]{border-left:5px solid #0d609c}.card-pending-review[_ngcontent-%COMP%]{border-left:5px solid #f2ce4a}.card-paused[_ngcontent-%COMP%]{border-left:5px solid #fba94a}.card-done[_ngcontent-%COMP%]{border-left:5px solid #4caf50}.card-accepted[_ngcontent-%COMP%]{border-left:5px solid #33db78}.unassigned-icon[_ngcontent-%COMP%]{color:#c80c24}.assigned-icon[_ngcontent-%COMP%]{color:#1ea9f4}.declined-icon[_ngcontent-%COMP%]{color:#f91e29}.accepted-icon[_ngcontent-%COMP%]{color:#33db78}.in-progress-icon[_ngcontent-%COMP%]{color:#0d609c}.paused-icon[_ngcontent-%COMP%]{color:#fba94a}.pending-review-icon[_ngcontent-%COMP%]{color:#f2ce4a}.completed-icon[_ngcontent-%COMP%]{color:#4caf50}.alert-icon[_ngcontent-%COMP%]{color:#eb5757}[_nghost-%COMP%]     mdb-date-picker .md-form{margin-bottom:0}[_nghost-%COMP%]     mdb-date-picker .md-form input{font-size:.8rem}[_nghost-%COMP%]     mdb-date-picker .picker__frame{top:0}[_nghost-%COMP%]     mdb-date-picker .picker__table{background:#fff;margin:0}[_nghost-%COMP%]     mdb-date-picker .picker__footer{background:#fff}[_nghost-%COMP%]     mdb-date-picker .picker__holder{overflow-y:none}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single{border-bottom:1px solid #bdbdbd;-webkit-box-shadow:0 .3px 0 0 #bdbdbd;box-shadow:0 .3px 0 0 #bdbdbd;font-size:.8rem}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple>div.option, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple>div.placeholder, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.placeholder, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.value, [_nghost-%COMP%]     .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li>a, [_nghost-%COMP%]     .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li>span{color:#495057;font-weight:400}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple>div.option .deselect-option, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple>div.placeholder .deselect-option, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.placeholder .deselect-option, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.value .deselect-option, [_nghost-%COMP%]     .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li>a .deselect-option, [_nghost-%COMP%]     .md-form mdb-ng-select mdb-select-dropdown .dropdown-content li>span .deselect-option{line-height:0}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple>div.placeholder, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.placeholder{color:#bbb;visibility:hidden!important}[_nghost-%COMP%]     .md-form .md-form.form-sm input, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.placeholder, [_nghost-%COMP%]     .md-form mdb-ng-select>div>div.single>div.value{padding:0}[_nghost-%COMP%]     .md-form .form-control{margin-bottom:0}[_nghost-%COMP%]     .md-form [type=checkbox]+label:before{margin-top:-8px}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div>div.toggle{color:#bbb;font-size:6px}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple>div.toggle{top:5px}[_nghost-%COMP%]     .md-form mdb-ng-select>div>div.multiple{padding:5px 0 4px 0}[_nghost-%COMP%]     .md-form .form-control::-webkit-input-placeholder{color:#bbb}[_nghost-%COMP%]     .md-form .form-control:-moz-placeholder, [_nghost-%COMP%]     .md-form .form-control::-moz-placeholder{color:#bbb}[_nghost-%COMP%]     .md-form .form-control:-ms-input-placeholder, [_nghost-%COMP%]     .md-form .form-control::-ms-input-placeholder{color:#bbb}[_nghost-%COMP%]     .md-form .form-control, [_nghost-%COMP%]     .md-form textarea{color:#495057!important;border-bottom:1px solid #bdbdbd;-webkit-box-shadow:0 .3px 0 0 #bdbdbd;box-shadow:0 .3px 0 0 #bdbdbd;font-size:.8rem!important}[_nghost-%COMP%]     .md-form .form-control:focus, [_nghost-%COMP%]     .md-form textarea:focus{border-bottom:1px solid #4285f4;-webkit-box-shadow:0 1px 0 0 #4285f4;box-shadow:0 1px 0 0 #4285f4}[_nghost-%COMP%]     .md-form .lig input{padding-left:0}[_nghost-%COMP%]     .md-form .lig span i{font-size:1rem;color:#bdbdbd}[_nghost-%COMP%]     .md-form .disabled{opacity:.5!important}.fixed-action-btn[_ngcontent-%COMP%]{bottom:5vh;right:5vh}.btn-floating[_ngcontent-%COMP%]{background:#f27023;width:40px;height:40px}.btn-floating[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{width:100%}.btn-group[_ngcontent-%COMP%]{position:unset}.btn-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;padding:.25rem 1rem;padding-left:0}.btn-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:6px;top:8px}.btn-groupe[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.4rem;margin:0;background:none;border:none;-webkit-box-shadow:none;box-shadow:none;font-size:14px;font-weight:500;color:#07417d!important}.btn-flat[_ngcontent-%COMP%]{padding:8px 10px}.btn-transparent[_ngcontent-%COMP%]{color:#676767;background:none;border:none;-webkit-box-shadow:none;box-shadow:none;-webkit-transition:all .2s;transition:all .2s}@media (max-width:575px){.btn[_ngcontent-%COMP%]{font-size:.6rem}.btn-floating[_ngcontent-%COMP%]{right:1px!important;width:37px;height:37px}}.search-block[_ngcontent-%COMP%]{background-color:#f7f7f7;border-radius:1px;color:#a8a8a8}.search-icon[_ngcontent-%COMP%], .search-input[_ngcontent-%COMP%]{border:none;background-color:#f7f7f7}.search-input[_ngcontent-%COMP%]{height:100%;margin:0;padding:10px 10px 10px 0}.search-input[_ngcontent-%COMP%]:focus{border-bottom:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.dropdown-toggle-sort[_ngcontent-%COMP%]{-webkit-box-shadow:none;box-shadow:none}.dropdown-toggle-sort[_ngcontent-%COMP%], .dropdown-toggle-sort[_ngcontent-%COMP%]:focus, .dropdown-toggle-sort[_ngcontent-%COMP%]:hover{background-color:#f7f7f7!important;color:#9a9a9a!important}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{background-color:#f7f7f7!important}small.val-error[_ngcontent-%COMP%]{font-size:10px;font-weight:500;line-height:.8;position:relative;top:1px}.map-modal[_ngcontent-%COMP%]{margin-top:15vh}.map-modal[_ngcontent-%COMP%]   agm-map[_ngcontent-%COMP%]{height:60vh}.freq-badge[_ngcontent-%COMP%]{font-size:.8rem;text-align:center;background:#e7e7e7;color:#252525;-webkit-box-shadow:none;box-shadow:none;border-radius:500px;font-weight:500}.rb[_ngcontent-%COMP%]{border-right:1px solid #d9d7d7}.tb[_ngcontent-%COMP%]{border-top:1px solid #d9d7d7}.no-padding[_ngcontent-%COMP%]{padding:0!important}.confirm-modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;color:#000;font-weight:700}.confirm-modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#afafaf}.modal-content--fixed[_ngcontent-%COMP%]{position:fixed;width:100%;margin-top:40px!important;overflow-y:hidden;height:80vh}.modal-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]{width:100%}.modal-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{width:65%}.modal-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.4rem;background:none;border:none;-webkit-box-shadow:none;box-shadow:none;color:#676767}.modal-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:none!important}.modal-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{color:#676767!important}.modal-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   .btn-section[_ngcontent-%COMP%]{width:35%}.modal-content[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{margin-left:-1.2em;font-size:70%}.modal-body[_ngcontent-%COMP%]{background:#f7f7f7}.modal-body--fixed[_ngcontent-%COMP%]{position:fixed;margin-top:65px;overflow-y:scroll;height:100vh;width:100%}.modal-container[_ngcontent-%COMP%]     .modal{overflow-y:auto!important}@media (max-width:575px){.modal-content[_ngcontent-%COMP%]{margin-top:25px}.confirm-modal[_ngcontent-%COMP%]{margin-top:50px}.btn[_ngcontent-%COMP%]{font-size:.6rem!important}}@media (min-width:576px) and (max-width:767px){.modal-content[_ngcontent-%COMP%]{margin-top:25px}.confirm-modal[_ngcontent-%COMP%]{margin-top:50px}}@media (min-width:768px){.modal-content[_ngcontent-%COMP%]{margin-top:90px}.confirm-modal[_ngcontent-%COMP%]{margin-top:120px}}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .table-icon[_ngcontent-%COMP%]{visibility:visible}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:500;cursor:pointer}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important;border-top:1px solid #f9f9f9!important;color:#252525}table[_ngcontent-%COMP%]   .bold-text[_ngcontent-%COMP%]{font-weight:700;color:#4f4f4f}table[_ngcontent-%COMP%]   .table-icons[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}table[_ngcontent-%COMP%]   .table-icon[_ngcontent-%COMP%]{visibility:hidden;color:#9a9a9a;font-size:1rem;cursor:pointer}table[_ngcontent-%COMP%]   .table-icon[_ngcontent-%COMP%]:not(:last-child){margin-right:10px}table[_ngcontent-%COMP%]   .table-icon--border[_ngcontent-%COMP%]{visibility:hidden}table[_ngcontent-%COMP%]   .fa-toggle-on[_ngcontent-%COMP%]{color:#4caf50}@media (max-width:575px){table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:.6rem}.table-icons[_ngcontent-%COMP%]{display:block!important}.table-icon[_ngcontent-%COMP%]{visibility:visible!important;width:100%!important}}@media (min-width:576px) and (max-width:767px){.table-icons[_ngcontent-%COMP%]{visibility:visible;display:block!important}}.btn-floating[_ngcontent-%COMP%]{right:0;bottom:0}"]],data:{}});function s(n){return e._29(0,[(n()(),e._6(0,16777216,null,null,2,"router-outlet",[],null,null,null,null,null)),e._5(1,212992,null,0,p.s,[p.b,e.P,e.j,[8,null],e.h],null,null),(n()(),e._27(-1,null,["\n"])),(n()(),e._27(-1,null,["\n"]))],function(n,t){n(t,1,0)},null)}var b=e._2("app-task",a,function(n){return e._29(0,[(n()(),e._6(0,0,null,null,1,"app-task",[],null,null,null,s,_)),e._5(1,114688,null,0,a,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),f=o("Un6q"),M=o("0nO6"),C=o("9iV4"),O=o("edXr"),P=o("TMwh"),h=o("EI9y"),u=o("vD//"),x=o("j0cC"),v=o("niGO"),k=o("Wv1J"),w=o("q+Vp"),y=o("8mhs"),z=o("AZWs"),A=o("YK3D"),j=o("D0bl"),T=o("hQlu"),F=o("7GAF"),X=o("G185"),Z=o("GpQu"),D=o("Ogh1"),E=o("JFtD"),I=o("LXlW"),J=o("KeTJ"),K=o("JPeB"),N=o("fUo4"),R=o("kP+6"),W=o("8ud4"),q=o("vVoZ"),G=o("hFoj"),U=o("RpcX"),B=o("xkIc"),L=o("zkyZ"),Q=o("ijuU"),V=o("vpNW"),H=o("8Edy"),S=o("2DMo"),Y=o("AyeD"),$=o("F+I1"),nn=o("k1BE"),tn=o("T2Au");o.d(t,"TaskModuleNgFactory",function(){return on});var on=e._3(d,[],function(n){return e._17([e._18(512,e.j,e.Z,[[8,[c.a,r.a,l.a,g.a,m.a,b]],[3,e.j],e.v]),e._18(4608,f.m,f.l,[e.s,[2,f.u]]),e._18(4608,M.v,M.v,[]),e._18(4608,C.j,C.o,[f.d,e.z,C.m]),e._18(4608,C.p,C.p,[C.j,C.n]),e._18(5120,C.a,function(n){return[n]},[C.p]),e._18(4608,C.l,C.l,[]),e._18(6144,C.k,null,[C.l]),e._18(4608,C.i,C.i,[C.k]),e._18(6144,C.b,null,[C.i]),e._18(5120,C.g,C.q,[C.b,[2,C.a]]),e._18(4608,C.c,C.c,[C.g]),e._18(4608,O.a,O.a,[]),e._18(4608,P.c,P.c,[]),e._18(4608,P.h,P.b,[]),e._18(5120,P.j,P.k,[]),e._18(4608,P.i,P.i,[P.c,P.h,P.j]),e._18(4608,P.g,P.a,[]),e._18(5120,P.e,P.l,[P.i,P.g]),e._18(5120,h.a,u.a,[]),e._18(5120,x.a,u.b,[P.e]),e._18(4608,v.a,v.a,[h.a,x.a]),e._18(512,f.c,f.c,[]),e._18(512,M.s,M.s,[]),e._18(512,M.f,M.f,[]),e._18(512,C.e,C.e,[]),e._18(512,C.d,C.d,[]),e._18(512,k.a,k.a,[]),e._18(512,k.f,k.f,[]),e._18(512,k.c,k.c,[]),e._18(512,k.b,k.b,[]),e._18(512,k.d,k.d,[]),e._18(512,k.e,k.e,[]),e._18(512,w.a,w.a,[]),e._18(512,y.a,y.a,[]),e._18(512,z.a,z.a,[]),e._18(512,A.a,A.a,[]),e._18(512,j.a,j.a,[]),e._18(512,T.a,T.a,[]),e._18(512,F.a,F.a,[]),e._18(512,X.a,X.a,[]),e._18(512,Z.a,Z.a,[]),e._18(512,D.a,D.a,[]),e._18(512,E.a,E.a,[]),e._18(512,I.a,I.a,[]),e._18(512,J.a,J.a,[]),e._18(512,P.f,P.f,[]),e._18(512,K.a,K.a,[]),e._18(512,N.a,N.a,[]),e._18(512,R.a,R.a,[]),e._18(512,W.a,W.a,[]),e._18(512,q.a,q.a,[]),e._18(512,G.a,G.a,[]),e._18(512,U.a,U.a,[]),e._18(512,B.a,B.a,[]),e._18(512,L.a,L.a,[]),e._18(512,Q.a,Q.a,[]),e._18(512,V.a,V.a,[]),e._18(512,H.a,H.a,[]),e._18(512,S.a,S.a,[]),e._18(512,Y.a,Y.a,[]),e._18(512,$.a,$.a,[]),e._18(512,nn.a,nn.a,[]),e._18(512,tn.a,tn.a,[]),e._18(512,p.r,p.r,[[2,p.w],[2,p.n]]),e._18(512,d,d,[]),e._18(256,C.m,"XSRF-TOKEN",[]),e._18(256,C.n,"X-XSRF-TOKEN",[]),e._18(1024,p.l,function(){return[[{path:"",component:a,children:[{path:"",canActivate:[i.a],loadChildren:"app/task/activetask/activetask.module#ActiveTaskModule"},{path:"active",canActivate:[i.a],loadChildren:"app/task/activetask/activetask.module#ActiveTaskModule"},{path:"escalated",canActivate:[i.a],loadChildren:"app/task/escalatedtasks/escalatedtasks.module#EscalatedTasksModule"},{path:"inactive",canActivate:[i.a],loadChildren:"app/task/in-activetasks/in-activetasks.module#InActiveTaskModule"},{path:"archived",canActivate:[i.a],loadChildren:"app/task/archivedtasks/archivedtasks.module#ArchivedTasksModule"},{path:"review",canActivate:[i.a],loadChildren:"app/task/task-review/task-review.module#TaskReviewModule"}]}]]},[])])})}});