"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[854],{3854:(dt,A,s)=>{s.r(A),s.d(A,{StudentsModule:()=>it});var d=s(6895),u=s(9299),i=s(4006),t=s(4650),F=s(1135),b=s(529),l=s(925),T=s(4961);let m=(()=>{class n{constructor(e,r){this.httpClient=e,this.userService=r,this._studentList=new F.X([]),this.authToken=localStorage.getItem("jwt"),this.headers=new b.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.authToken}`}),this.requestOptions={headers:this.headers}}get userId(){return this.userService.getUser().userId}getStudents(){return this.httpClient.get(l.Cq.GETSTUDENTS+this.userId,this.requestOptions).subscribe(e=>{this._studentList.next(e)}),this._studentList.asObservable()}getStudent(e){return this.httpClient.get(l.Cq.GETSTUDENT+e+"/"+this.userId,this.requestOptions)}save(e){return this.httpClient.post(l.Cq.SAVESTUDENT,e,this.requestOptions)}visit(e){return this.httpClient.post(l.Cq.VISITSTUDENT,e,this.requestOptions)}delete(e){return this.httpClient.delete(l.Cq.DELETESTUDENT+e,this.requestOptions)}update(e){return this.httpClient.put(l.Cq.UPDATESTUDENT,e,this.requestOptions)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN),t.LFG(T.f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=s(678);let L=(()=>{class n{constructor(e){this.httpClient=e,this._placements=new F.X([])}getPlacements(){return this.httpClient.get(l.Cq.GETPLACEMENTS).subscribe(e=>{this._placements.next(e)},e=>{}),this._placements.asObservable()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=s(14),v=s(4218),x=s(7392),c=s(9549),U=s(4144),k=s(4859),O=s(455),E=s(4385),w=s(3238),g=s(4463);function J(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function j(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function M(n,o){if(1&n&&(t.TgZ(0,"mat-option",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.placementId),t.xp6(1),t.Oqu(t.lcZ(2,2,e.name))}}function Y(n,o){if(1&n&&(t.TgZ(0,"mat-option",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(t.lcZ(2,2,e.name))}}function V(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}const Q=function(){return["/app/students"]};let q=(()=>{class n{constructor(e,r,a,p,h,S,C){this.studentsService=e,this.formBuilder=r,this.modalService=a,this.placementsService=p,this.router=h,this.route=S,this.userService=C,this.placements=[],this.mode="Create",this.days=[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:7,name:"Sunday"}],this.route.params.subscribe(Z=>{let st=Z.id;this.studentsService.getStudents().subscribe(at=>{this.student=at.find(ut=>ut.studentId==st),this.mode=this.student?"Edit":"Create",this.student&&this.mainForm.patchValue(this.student)})})}ngOnInit(){this.mainForm=this.formBuilder.group({studentId:[0,i.kI.required],name:["",i.kI.required],phone:[""],placementId:[""],address:["",i.kI.required],active:[!0,i.kI.required],dayToVisit:["",i.kI.required],observations:[""],userId:[0,i.kI.required],isStudent:[!1,i.kI.required]}),this.mainForm.patchValue({userId:this.userService.getUser().userId}),this.placementsService.getPlacements().subscribe({next:e=>this.placements=e})}getError(e){if(null!=this.mainForm.get(e)){if(this.mainForm.get(e).hasError("required"))return`El campo ${e} es obligatorio.`;if(this.mainForm.get(e).hasError("email"))return`El campo ${e} debe ser un email v\xe1lido.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 8 caracteres.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 11 caracteres.`}return""}get errorControl(){return this.mainForm.controls}submitForm(){this.mainForm.valid?this.student?this.studentsService.update(this.mainForm.value).subscribe({next:e=>{e>0&&this.modalService.showMessage("Student updated!"),this.router.navigate(["/students"])},error:e=>{this.modalService.showMessage("An error occured while updating the student!")}}):this.studentsService.save(this.mainForm.value).subscribe({next:e=>{e>0&&this.modalService.showMessage("Student saved!"),this.router.navigate(["/students"])},error:e=>{this.modalService.showMessage("An error occured while saving the student!")}}):this.modalService.showMessage("Please fill all the required fields!")}deleteStudent(e){e?this.modalService.showConfirmMessage("Are you sure you want to delete this student?")&&this.studentsService.delete(e).subscribe(r=>{this.modalService.showMessage("Student deleted!")}):this.modalService.showMessage("An error occured while deleting the student!")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(i.qu),t.Y36(_.Z),t.Y36(L),t.Y36(u.F0),t.Y36(u.gz),t.Y36(T.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-form"]],decls:76,vars:48,consts:[[3,"title"],[1,"container","col-md-8","mt-3"],[1,"row"],[1,"col-12"],[3,"formGroup"],[1,"col-xl-6","col-md-12","col-sm-12"],["matInput","","type","text","formControlName","name"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"col-xl-6","col-md-12"],["matInput","","type","text","formControlName","phone"],["appearance","fill",1,"col-xl-6","col-md-12"],["formControlName","placementId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","dayToVisit"],[1,"col-md-12","col-xl-12","col-xs-12","col-12"],["matInput","","type","text","formControlName","address"],[1,"row","justify-content-center"],["formControlName","isStudent",1,"col-6"],["formControlName","active",1,"col-6"],["matInput","","type","text","formControlName","observations"],[1,"row","mt-2","pb-3","mb-3","justify-content-between"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","btn-outline-dark",3,"routerLink"],["href","javascript:void(0)","type","submit",1,"btn","btn-dark",3,"click"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"value"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.ALo(1,"translate"),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"form",4)(6,"div",2)(7,"mat-form-field",5)(8,"mat-label"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,J,3,0,"button",7),t.TgZ(13,"mat-error"),t._uU(14),t.qZA()(),t.TgZ(15,"mat-form-field",8)(16,"mat-label"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t._UZ(19,"input",9),t.YNc(20,j,3,0,"button",7),t.TgZ(21,"mat-error"),t._uU(22),t.qZA()()(),t.TgZ(23,"div",2)(24,"mat-form-field",10)(25,"mat-label"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"mat-select",11)(29,"mat-option"),t._uU(30,"Clear"),t.qZA(),t.YNc(31,M,3,4,"mat-option",12),t.qZA(),t.TgZ(32,"mat-error"),t._uU(33),t.qZA()(),t.TgZ(34,"mat-form-field",10)(35,"mat-label"),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"mat-select",13)(39,"mat-option"),t._uU(40,"Clear"),t.qZA(),t.YNc(41,Y,3,4,"mat-option",12),t.qZA(),t.TgZ(42,"mat-error"),t._uU(43),t.qZA()()(),t.TgZ(44,"div",2)(45,"mat-form-field",14)(46,"mat-label"),t._uU(47),t.ALo(48,"translate"),t.qZA(),t._UZ(49,"input",15),t.YNc(50,V,3,0,"button",7),t.TgZ(51,"mat-error"),t._uU(52),t.qZA()()(),t.TgZ(53,"div",16)(54,"mat-slide-toggle",17),t._uU(55),t.ALo(56,"translate"),t.qZA(),t.TgZ(57,"mat-slide-toggle",18),t._uU(58),t.ALo(59,"translate"),t.qZA()(),t.TgZ(60,"mat-form-field",3)(61,"mat-label"),t._uU(62),t.ALo(63,"translate"),t.qZA(),t._UZ(64,"input",19),t.YNc(65,N,3,0,"button",7),t.TgZ(66,"mat-error"),t._uU(67),t.qZA()()(),t.TgZ(68,"div",20)(69,"a",21),t._uU(70),t.ALo(71,"translate"),t.qZA(),t.TgZ(72,"button",22),t.NdJ("click",function(){return r.submitForm()}),t._uU(73),t.ALo(74,"translate"),t.qZA()()()()(),t._UZ(75,"app-footer")),2&e&&(t.s9C("title",t.lcZ(1,25,r.mode+" Student")),t.xp6(5),t.Q6J("formGroup",r.mainForm),t.xp6(4),t.Oqu(t.lcZ(10,27,"Name")),t.xp6(3),t.Q6J("ngIf",r.mainForm.get("name").value),t.xp6(2),t.hij(" ",r.getError("name")," "),t.xp6(3),t.Oqu(t.lcZ(18,29,"Phone")),t.xp6(3),t.Q6J("ngIf",r.mainForm.get("phone").value),t.xp6(2),t.hij(" ",r.getError("phone")," "),t.xp6(4),t.Oqu(t.lcZ(27,31,"Placement")),t.xp6(5),t.Q6J("ngForOf",r.placements),t.xp6(2),t.hij(" ",r.getError("placementId")," "),t.xp6(3),t.Oqu(t.lcZ(37,33,"Day to visit")),t.xp6(5),t.Q6J("ngForOf",r.days),t.xp6(2),t.hij(" ",r.getError("dayToVisit")," "),t.xp6(4),t.Oqu(t.lcZ(48,35,"Address")),t.xp6(3),t.Q6J("ngIf",r.mainForm.get("address").value),t.xp6(2),t.hij(" ",r.getError("address")," "),t.xp6(3),t.Oqu(t.lcZ(56,37,"Student")),t.xp6(3),t.Oqu(t.lcZ(59,39,"Active")),t.xp6(4),t.Oqu(t.lcZ(63,41,"Observations")),t.xp6(3),t.Q6J("ngIf",r.mainForm.get("observations").value),t.xp6(2),t.hij(" ",r.getError("observations")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(47,Q)),t.xp6(1),t.hij(" ",t.lcZ(71,43,"Cancel"),""),t.xp6(3),t.hij(" ",t.lcZ(74,45,"Save"),""))},dependencies:[d.sg,d.O5,f.G,v.c,x.Hw,c.TO,c.KE,c.hX,c.R9,U.Nt,k.lW,O.Rr,E.gD,w.ey,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,u.yS,u.Od,g.X$],styles:["a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{max-width:45%}"]}),n})();var y=s(9602);const R=function(n){return["/app/students/return-visits/history/",n]},D=function(){return["/app/students"]};let G=(()=>{class n{constructor(e,r,a,p,h,S){this.studentsService=e,this.formBuilder=r,this.modalService=a,this.router=p,this.route=h,this.userService=S,this.route.params.subscribe(C=>{let Z=C.student;Z&&(this.student=JSON.parse(Z))})}ngOnInit(){this.mainForm=this.formBuilder.group({visitId:["0",i.kI.required],studentId:["",i.kI.required],notes:[""],date:[new Date,i.kI.required],userId:[0,i.kI.required],active:[!0,i.kI.required]}),this.mainForm.patchValue({userId:this.userService.getUser().userId}),this.student&&this.mainForm.patchValue({studentId:this.student.studentId})}getError(e){if(null!=this.mainForm.get(e)){if(this.mainForm.get(e).hasError("required"))return`El campo ${e} es obligatorio.`;if(this.mainForm.get(e).hasError("email"))return`El campo ${e} debe ser un email v\xe1lido.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 8 caracteres.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 11 caracteres.`}return""}get errorControl(){return this.mainForm.controls}submitForm(){console.log(this.mainForm),this.mainForm.valid?this.studentsService.visit(this.mainForm.value).subscribe({next:e=>{e>0&&(this.modalService.showMessage("Visit saved!"),this.router.navigate(["/app/students"]))},error:e=>{this.modalService.showMessage("An error occured while saving the visit!")}}):this.modalService.showMessage("Please fill all the required fields!")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(i.qu),t.Y36(_.Z),t.Y36(u.F0),t.Y36(u.gz),t.Y36(T.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-return-visit-form"]],decls:43,vars:36,consts:[[3,"title"],[1,"container","col-md-8","col-xl-8","pb-5"],[1,"row","justify-content-center"],[1,"col-12","pb-5"],[1,"pb-2","text-center"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"formGroup"],[1,"col-xl-12","col-md-12"],["matInput","","type","date","formControlName","date",3,"matDatepicker"],["picker",""],[1,"col-xl-12","col-md-12","col-sm-12"],["matInput","","type","textarea","formControlName","notes"],[1,"row","justify-content-between"],["align","start",1,"col"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","btn-outline-dark",3,"routerLink"],["align","end",1,"col"],["href","javascript:void(0)","type","submit",1,"btn","btn-dark",3,"click"]],template:function(e,r){if(1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"hr"),t.TgZ(5,"p",4),t._uU(6),t.ALo(7,"translate"),t.ALo(8,"translate"),t.ALo(9,"translate"),t.TgZ(10,"a",5),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._uU(13,". "),t.qZA(),t._UZ(14,"hr"),t.TgZ(15,"form",6)(16,"div",2)(17,"mat-form-field",7)(18,"mat-label"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t._UZ(21,"input",8)(22,"mat-datepicker",null,9),t.TgZ(24,"mat-error"),t._uU(25),t.qZA()(),t.TgZ(26,"mat-form-field",10)(27,"mat-label"),t._uU(28),t.ALo(29,"translate"),t.qZA(),t._UZ(30,"input",11),t.TgZ(31,"mat-error"),t._uU(32),t.qZA()()(),t.TgZ(33,"div",12)(34,"div",13)(35,"a",14),t._uU(36),t.ALo(37,"translate"),t.qZA()(),t.TgZ(38,"div",15)(39,"a",16),t.NdJ("click",function(){return r.submitForm()}),t._uU(40),t.ALo(41,"translate"),t.qZA()()()()()()(),t._UZ(42,"app-footer")),2&e){const a=t.MAs(23);t.Q6J("title","Return Visit Form"),t.xp6(6),t.xDo(" ",t.lcZ(7,17,"You are registering a return visit to")," ",r.student.name.trim(),". ",t.lcZ(8,19,"You can see the history of return visits to")," ",r.student.name.trim()," ",t.lcZ(9,21,"by clicking")," "),t.xp6(4),t.Q6J("routerLink",t.VKq(33,R,r.student.studentId)),t.xp6(1),t.Oqu(t.lcZ(12,23,"here")),t.xp6(4),t.Q6J("formGroup",r.mainForm),t.xp6(4),t.Oqu(t.lcZ(20,25,"Date")),t.xp6(2),t.Q6J("matDatepicker",a),t.xp6(4),t.hij(" ",r.getError("date")," "),t.xp6(3),t.Oqu(t.lcZ(29,27,"Notes")),t.xp6(4),t.hij(" ",r.getError("notes")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(35,D)),t.xp6(1),t.hij(" ",t.lcZ(37,29,"Cancel"),""),t.xp6(4),t.hij(" ",t.lcZ(41,31,"Save"),"")}},dependencies:[f.G,v.c,y.Mq,y.hl,c.TO,c.KE,c.hX,U.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,u.yS,u.Od,g.X$]}),n})();var I=s(5350);function $(n,o){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",9),t._uU(3),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"p",10),t._uU(6),t.qZA()()()),2&n){const e=o.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,e.date)),t.xp6(3),t.hij("",e.notes||"no notes were found",".")}}function z(n,o){1&n&&(t.TgZ(0,"div",11),t._UZ(1,"app-no-data-found"),t.qZA())}let P=(()=>{class n{constructor(e,r){this.studentService=e,this.route=r,this.route.params.subscribe(a=>{this.studentService.getStudent(a.id).subscribe(h=>{this.student=h})})}ngOnInit(){}getDayToVisit(){return this.student.dayToVisit?l.hn[this.student.dayToVisit]:""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-return-visits-list"]],decls:13,vars:7,consts:[[3,"title"],[1,"container","col-md-8","col-xl-8","pb-5"],[1,"row","justify-content-center"],[1,"col-12","pb-5"],[1,"pb-2","text-center"],["class","col-12 card flex-md-row mb-1 box-shadow h-md-250",4,"ngFor","ngForOf"],["class","col-10 mt-3",4,"ngIf"],[1,"col-12","card","flex-md-row","mb-1","box-shadow","h-md-250"],[1,"card-body","d-flex","flex-column","align-items-start"],[1,"mb-1","text-muted"],[1,"card-text","mb-auto"],[1,"col-10","mt-3"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"hr"),t.TgZ(5,"p",4),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"hr"),t.TgZ(9,"div",2),t.YNc(10,$,7,4,"div",5),t.YNc(11,z,2,0,"div",6),t.qZA()()()(),t._UZ(12,"app-footer")),2&e&&(t.Q6J("title","Return Visit History"),t.xp6(6),t.AsE(" ",t.lcZ(7,5,"You are viewing the return visits record of")," ",null==r.student?null:r.student.name,". "),t.xp6(4),t.Q6J("ngForOf",r.student.returnVisits),t.xp6(1),t.Q6J("ngIf",!r.student.returnVisits||r.student.returnVisits.length<1))},dependencies:[d.sg,d.O5,f.G,v.c,I.i,d.uU,g.X$],styles:[".card[_ngcontent-%COMP%]{margin-top:3%;border-left:6px solid #ccc!important;background-color:beige!important;border-color:#ffd740!important}"]}),n})();class X{}const B=function(n){return["return-visits/history/",n]},H=function(n){return["form/",n]};let K=(()=>{class n{constructor(e,r,a){this.studentService=e,this.modalService=r,this.router=a,this.student=new X}ngOnInit(){}registerReturnVisit(){this.router.navigate(["/app/students/return-visit-form",JSON.stringify(this.student)])}delete(){this.modalService.showConfirmMessage("Are you sure you want to delete this student?").subscribe(e=>{console.log(e),e&&this.studentService.delete(this.student.studentId).subscribe(r=>{console.log(r),this.modalService.showMessage("Student deleted successfully")})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(_.Z),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{student:"student"},decls:29,vars:15,consts:[[1,"card","mt-3"],[1,"card-body","row"],["xmlns","http://www.w3.org/2000/svg","width","128","height","128","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-person-lines-fill","col-3","mt-3"],["d","M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"],[1,"col-9"],[1,"d-flex","justify-content-between"],[1,"card-title"],[1,"d-flex","justify-content-end"],[1,"btn",3,"click"],["routerLinkActive","router-link-active",1,"btn",3,"routerLink"],[1,"card-text"],[1,"row","justify-content-end"],[1,"col","col-xl-4","col-md-4","col-sm-4"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","d-block","btn-outline-dark",3,"routerLink"],["href","javascript:void(0)",1,"btn","d-block","btn-dark",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA(),t.kcU(),t.TgZ(4,"div",4)(5,"div",5)(6,"div")(7,"h2",6),t._uU(8),t.qZA()(),t.TgZ(9,"div",7)(10,"button",8),t.NdJ("click",function(){return r.delete()}),t.TgZ(11,"mat-icon"),t._uU(12,"delete_outline"),t.qZA()(),t.TgZ(13,"button",9)(14,"mat-icon"),t._uU(15,"history"),t.qZA()()()(),t.TgZ(16,"p",10),t._uU(17),t._UZ(18,"br"),t._uU(19),t.qZA(),t.TgZ(20,"div",11)(21,"div",12)(22,"a",13),t._uU(23),t.ALo(24,"translate"),t.qZA()(),t.TgZ(25,"div",12)(26,"a",14),t.NdJ("click",function(){return r.registerReturnVisit()}),t._uU(27),t.ALo(28,"translate"),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Oqu(r.student.name),t.xp6(5),t.Q6J("routerLink",t.VKq(11,B,r.student.studentId)),t.xp6(4),t.hij("",r.student.placementName," "),t.xp6(2),t.hij(" ",r.student.observations,""),t.xp6(3),t.Q6J("routerLink",t.VKq(13,H,r.student.studentId)),t.xp6(1),t.hij(" ",t.lcZ(24,7,"Edit"),""),t.xp6(4),t.hij(" ",t.lcZ(28,9,"Return Visit"),""))},dependencies:[x.Hw,u.rH,u.yS,u.Od,g.X$],styles:[".card[_ngcontent-%COMP%]{border-left:6px solid #ccc!important;background-color:beige!important;border-color:#ffd740!important}"]}),n})();function W(n,o){1&n&&t._UZ(0,"app-card",7),2&n&&t.Q6J("student",o.$implicit)}function tt(n,o){if(1&n&&(t.TgZ(0,"div",5),t.YNc(1,W,1,1,"app-card",6),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.studentList)}}function et(n,o){1&n&&(t.TgZ(0,"div",8),t._UZ(1,"app-no-data-found"),t.qZA())}const nt=[{path:"",component:(()=>{class n{constructor(e){this.studentService=e,this.studentList=new Array}ngOnInit(){this.studentService.getStudents().subscribe(e=>{this.studentList=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-students"]],decls:6,vars:4,consts:[[3,"title","showAddStudent"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","col-12 pb-5",4,"ngIf"],["class","col-8 mt-3",4,"ngIf"],[1,"col-12","pb-5"],[3,"student",4,"ngFor","ngForOf"],[3,"student"],[1,"col-8","mt-3"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,tt,2,1,"div",3),t.YNc(4,et,2,0,"div",4),t.qZA()(),t._UZ(5,"app-footer")),2&e&&(t.Q6J("title","Students")("showAddStudent",!0),t.xp6(3),t.Q6J("ngIf",r.studentList),t.xp6(1),t.Q6J("ngIf",!r.studentList||r.studentList.length<1))},dependencies:[d.sg,d.O5,f.G,v.c,I.i,K]}),n})()},{path:"form",component:q},{path:"form/:id",component:q},{path:"return-visit-form/:student",component:G},{path:"return-visits/history/:id",component:P}];let rt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(nt),u.Bz]}),n})();var ot=s(9461);let it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,ot.SharedComponentsModule,rt]}),n})()}}]);