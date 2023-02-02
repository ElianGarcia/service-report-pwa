"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[854],{3854:(st,S,s)=>{s.r(S),s.d(S,{StudentsModule:()=>nt});var m=s(6895),u=s(3060),o=s(4006),t=s(4650),C=s(1135),d=s(925),F=s(529),Z=s(4961);let l=(()=>{class n{constructor(e,r){this.httpClient=e,this.userService=r,this._studentList=new C.X([])}get userId(){return this.userService.getUser().userId}getStudents(){return this.httpClient.get(d.Cq.GETSTUDENTS+this.userId).subscribe(e=>{console.log(e),this._studentList.next(e)}),this._studentList.asObservable()}getStudent(e){return this.httpClient.get(d.Cq.GETSTUDENT+e+"/"+this.userId)}save(e){return this.httpClient.post(d.Cq.SAVESTUDENT,e)}visit(e){return this.httpClient.post(d.Cq.VISITSTUDENT,e)}delete(e){return this.httpClient.delete(d.Cq.DELETESTUDENT+e)}update(e){return this.httpClient.put(d.Cq.UPDATESTUDENT,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.eN),t.LFG(Z.f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=s(678);let q=(()=>{class n{constructor(e){this.httpClient=e,this._placements=new C.X([])}getPlacements(){return this.httpClient.get(d.Cq.GETPLACEMENTS).subscribe(e=>{this._placements.next(e)},e=>{}),this._placements.asObservable()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=s(14),v=s(4218),U=s(7392),c=s(9549),A=s(4144),x=s(4859),E=s(455),k=s(4385),w=s(3238);function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function Y(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function L(n,i){if(1&n&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.placementId),t.xp6(1),t.Oqu(e.name)}}function M(n,i){if(1&n&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function j(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function V(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}const O=function(){return["/app/students"]};let y=(()=>{class n{constructor(e,r,a,p,h,T,_){this.studentsService=e,this.formBuilder=r,this.modalService=a,this.placementsService=p,this.router=h,this.route=T,this.userService=_,this.placements=[],this.mode="Create",this.days=[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:7,name:"Sunday"}],this.route.params.subscribe(g=>{let rt=g.id;this.studentsService.getStudents().subscribe(it=>{this.student=it.find(ot=>ot.studentId==rt),this.mode=this.student?"Edit":"Create",this.student&&this.mainForm.patchValue(this.student)})})}ngOnInit(){this.mainForm=this.formBuilder.group({studentId:[0,o.kI.required],name:["",o.kI.required],phone:[""],placementId:["",o.kI.required],address:["",o.kI.required],active:[!0,o.kI.required],dayToVisit:["",o.kI.required],observations:[""],userId:[0,o.kI.required]}),this.mainForm.patchValue({userId:this.userService.getUser().userId}),this.placementsService.getPlacements().subscribe({next:e=>this.placements=e})}getError(e){if(null!=this.mainForm.get(e)){if(this.mainForm.get(e).hasError("required"))return`El campo ${e} es obligatorio.`;if(this.mainForm.get(e).hasError("email"))return`El campo ${e} debe ser un email v\xe1lido.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 8 caracteres.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 11 caracteres.`}return""}get errorControl(){return this.mainForm.controls}submitForm(){this.mainForm.valid?this.student?this.studentsService.update(this.mainForm.value).subscribe({next:e=>{e>0&&this.modalService.showMessage("Student updated!"),this.router.navigate(["/students"])},error:e=>{this.modalService.showMessage("An error occured while updating the student!")}}):this.studentsService.save(this.mainForm.value).subscribe({next:e=>{e>0&&this.modalService.showMessage("Student saved!"),this.router.navigate(["/students"])},error:e=>{this.modalService.showMessage("An error occured while saving the student!")}}):this.modalService.showMessage("Please fill all the required fields!")}deleteStudent(e){e?this.modalService.showConfirmMessage("Are you sure you want to delete this student?")&&this.studentsService.delete(e).subscribe(r=>{this.modalService.showMessage("Student deleted!")}):this.modalService.showMessage("An error occured while deleting the student!")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l),t.Y36(o.qu),t.Y36(b.Z),t.Y36(q),t.Y36(u.F0),t.Y36(u.gz),t.Y36(Z.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-form"]],decls:64,vars:16,consts:[[3,"title"],[1,"container","col-md-8"],[1,"row"],[1,"col-12"],[3,"formGroup"],[1,"col-xl-6","col-md-12","col-sm-12"],["matInput","","type","text","formControlName","name"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"col-xl-6","col-md-12"],["matInput","","type","text","formControlName","phone"],["appearance","fill",1,"col-xl-6","col-md-12"],["formControlName","placementId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","dayToVisit"],[1,"col-md-10"],["matInput","","type","text","formControlName","address"],["formControlName","active",1,"col-md-2"],[1,"col-md-12"],["matInput","","type","text","formControlName","observations"],[1,"row","mt-2","d-flex","justify-content-between"],["align","start",1,"col"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","btn-outline-dark",3,"routerLink"],["align","end",1,"col"],["href","javascript:void(0)","type","submit",1,"btn","btn-dark",3,"click"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"value"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",2)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.YNc(10,J,3,0,"button",7),t.TgZ(11,"mat-error"),t._uU(12),t.qZA()(),t.TgZ(13,"mat-form-field",8)(14,"mat-label"),t._uU(15,"Tel\xe9fono"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,Y,3,0,"button",7),t.TgZ(18,"mat-error"),t._uU(19),t.qZA()()(),t.TgZ(20,"div",2)(21,"mat-form-field",10)(22,"mat-label"),t._uU(23,"Publicacion con la que estudia"),t.qZA(),t.TgZ(24,"mat-select",11)(25,"mat-option"),t._uU(26,"Clear"),t.qZA(),t.YNc(27,L,2,2,"mat-option",12),t.qZA(),t.TgZ(28,"mat-error"),t._uU(29),t.qZA()(),t.TgZ(30,"mat-form-field",10)(31,"mat-label"),t._uU(32,"Dia preferido para visitar"),t.qZA(),t.TgZ(33,"mat-select",13)(34,"mat-option"),t._uU(35,"Clear"),t.qZA(),t.YNc(36,M,2,2,"mat-option",12),t.qZA(),t.TgZ(37,"mat-error"),t._uU(38),t.qZA()()(),t.TgZ(39,"div",2)(40,"mat-form-field",14)(41,"mat-label"),t._uU(42,"Direccion"),t.qZA(),t._UZ(43,"input",15),t.YNc(44,j,3,0,"button",7),t.TgZ(45,"mat-error"),t._uU(46),t.qZA()(),t.TgZ(47,"mat-slide-toggle",16),t._uU(48,"Activo"),t.qZA()(),t.TgZ(49,"mat-form-field",17)(50,"mat-label"),t._uU(51,"Observaciones"),t.qZA(),t._UZ(52,"input",18),t.YNc(53,V,3,0,"button",7),t.TgZ(54,"mat-error"),t._uU(55),t.qZA()()(),t.TgZ(56,"div",19)(57,"div",20)(58,"a",21),t._uU(59," Cancelar"),t.qZA()(),t.TgZ(60,"div",22)(61,"a",23),t.NdJ("click",function(){return r.submitForm()}),t._uU(62," Guardar"),t.qZA()()()()()(),t._UZ(63,"app-footer")),2&e&&(t.Q6J("title",r.mode+" Estudiante"),t.xp6(4),t.Q6J("formGroup",r.mainForm),t.xp6(6),t.Q6J("ngIf",r.mainForm.get("name").value),t.xp6(2),t.hij(" ",r.getError("name")," "),t.xp6(5),t.Q6J("ngIf",r.mainForm.get("phone").value),t.xp6(2),t.hij(" ",r.getError("phone")," "),t.xp6(8),t.Q6J("ngForOf",r.placements),t.xp6(2),t.hij(" ",r.getError("placementId")," "),t.xp6(7),t.Q6J("ngForOf",r.days),t.xp6(2),t.hij(" ",r.getError("dayToVisit")," "),t.xp6(6),t.Q6J("ngIf",r.mainForm.get("address").value),t.xp6(2),t.hij(" ",r.getError("address")," "),t.xp6(7),t.Q6J("ngIf",r.mainForm.get("observations").value),t.xp6(2),t.hij(" ",r.getError("observations")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(15,O)))},dependencies:[m.sg,m.O5,f.G,v.c,U.Hw,c.TO,c.KE,c.hX,c.R9,A.Nt,x.lW,E.Rr,k.gD,w.ey,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,u.yS,u.Od]}),n})();var I=s(9602);const N=function(n){return["/app/students/return-visits/history/",n]},Q=function(){return["/app/students"]};let G=(()=>{class n{constructor(e,r,a,p,h,T){this.studentsService=e,this.formBuilder=r,this.modalService=a,this.router=p,this.route=h,this.userService=T,this.route.params.subscribe(_=>{let g=_.student;g&&(this.student=JSON.parse(g))})}ngOnInit(){this.mainForm=this.formBuilder.group({visitId:["0",o.kI.required],studentId:["",o.kI.required],notes:[""],date:[new Date,o.kI.required],userId:[0,o.kI.required],active:[!0,o.kI.required]}),this.mainForm.patchValue({userId:this.userService.getUser().userId}),this.student&&this.mainForm.patchValue({studentId:this.student.studentId})}getError(e){if(null!=this.mainForm.get(e)){if(this.mainForm.get(e).hasError("required"))return`El campo ${e} es obligatorio.`;if(this.mainForm.get(e).hasError("email"))return`El campo ${e} debe ser un email v\xe1lido.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 8 caracteres.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 11 caracteres.`}return""}get errorControl(){return this.mainForm.controls}submitForm(){console.log(this.mainForm),this.mainForm.valid?this.studentsService.visit(this.mainForm.value).subscribe({next:e=>{e>0&&(this.modalService.showMessage("Visit saved!"),this.router.navigate(["/app/students"]))},error:e=>{this.modalService.showMessage("An error occured while saving the visit!")}}):this.modalService.showMessage("Please fill all the required fields!")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l),t.Y36(o.qu),t.Y36(b.Z),t.Y36(u.F0),t.Y36(u.gz),t.Y36(Z.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-return-visit-form"]],decls:35,vars:12,consts:[[3,"title"],[1,"container","col-md-8","col-xl-8","pb-5"],[1,"row","justify-content-center"],[1,"col-12","pb-5"],[1,"pb-2","text-center"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"formGroup"],[1,"col-xl-12","col-md-12"],["matInput","","type","date","formControlName","date",3,"matDatepicker"],["picker",""],[1,"col-xl-12","col-md-12","col-sm-12"],["matInput","","type","textarea","formControlName","notes"],[1,"row","justify-content-between"],["align","start",1,"col"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","btn-outline-dark",3,"routerLink"],["align","end",1,"col"],["href","javascript:void(0)","type","submit",1,"btn","btn-dark",3,"click"]],template:function(e,r){if(1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"hr"),t.TgZ(5,"p",4),t._uU(6),t.TgZ(7,"a",5),t._uU(8,"here"),t.qZA(),t._uU(9,". "),t.qZA(),t._UZ(10,"hr"),t.TgZ(11,"form",6)(12,"div",2)(13,"mat-form-field",7)(14,"mat-label"),t._uU(15,"Date"),t.qZA(),t._UZ(16,"input",8)(17,"mat-datepicker",null,9),t.TgZ(19,"mat-error"),t._uU(20),t.qZA()(),t.TgZ(21,"mat-form-field",10)(22,"mat-label"),t._uU(23,"Notes"),t.qZA(),t._UZ(24,"input",11),t.TgZ(25,"mat-error"),t._uU(26),t.qZA()()(),t.TgZ(27,"div",12)(28,"div",13)(29,"a",14),t._uU(30," Cancelar"),t.qZA()(),t.TgZ(31,"div",15)(32,"a",16),t.NdJ("click",function(){return r.submitForm()}),t._uU(33," Guardar"),t.qZA()()()()()()(),t._UZ(34,"app-footer")),2&e){const a=t.MAs(18);t.Q6J("title","Return Visit Form"),t.xp6(6),t.AsE(" You are registering a return visit to ",r.student.name,". You can see the history of return visits to ",r.student.name," by clicking "),t.xp6(1),t.Q6J("routerLink",t.VKq(9,N,r.student.studentId)),t.xp6(4),t.Q6J("formGroup",r.mainForm),t.xp6(5),t.Q6J("matDatepicker",a),t.xp6(4),t.hij(" ",r.getError("date")," "),t.xp6(6),t.hij(" ",r.getError("notes")," "),t.xp6(3),t.Q6J("routerLink",t.DdM(11,Q))}},dependencies:[f.G,v.c,I.Mq,I.hl,c.TO,c.KE,c.hX,A.Nt,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,u.yS,u.Od]}),n})();function R(n,i){if(1&n&&(t.TgZ(0,"div",6)(1,"div",7)(2,"div",8),t._uU(3),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"p",9),t._uU(6),t.qZA()()()),2&n){const e=i.$implicit;t.xp6(3),t.Oqu(t.lcZ(4,2,e.date)),t.xp6(3),t.hij("",e.notes||"no notes were found",".")}}let D=(()=>{class n{constructor(e,r){this.studentService=e,this.route=r,this.route.params.subscribe(a=>{this.studentService.getStudent(a.id).subscribe(h=>{this.student=h})})}ngOnInit(){}getDayToVisit(){return this.student.dayToVisit?d.hn[this.student.dayToVisit]:""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-return-visits-list"]],decls:11,vars:3,consts:[[3,"title"],[1,"container","col-md-8","col-xl-8","pb-5"],[1,"row","justify-content-center"],[1,"col-12","pb-5"],[1,"pb-2","text-center"],["class","col-12 card flex-md-row mb-1 box-shadow h-md-250",4,"ngFor","ngForOf"],[1,"col-12","card","flex-md-row","mb-1","box-shadow","h-md-250"],[1,"card-body","d-flex","flex-column","align-items-start"],[1,"mb-1","text-muted"],[1,"card-text","mb-auto"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"hr"),t.TgZ(5,"p",4),t._uU(6),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"div",2),t.YNc(9,R,7,4,"div",5),t.qZA()()()(),t._UZ(10,"app-footer")),2&e&&(t.Q6J("title","Return Visit History"),t.xp6(6),t.hij(" You are viewing the return visits record of ",null==r.student?null:r.student.name,". "),t.xp6(3),t.Q6J("ngForOf",r.student.returnVisits))},dependencies:[m.sg,f.G,v.c,m.uU]}),n})();var z=s(5350);class ${}const B=function(n){return["form/",n]};let P=(()=>{class n{constructor(e,r,a){this.studentService=e,this.modalService=r,this.router=a,this.student=new $}ngOnInit(){}registerReturnVisit(){this.router.navigate(["/app/students/return-visit-form",JSON.stringify(this.student)])}delete(){this.modalService.showConfirmMessage("Are you sure you want to delete this student?").subscribe(e=>{console.log(e),e&&this.studentService.delete(this.student.studentId).subscribe(r=>{console.log(r),this.modalService.showMessage("Student deleted successfully")})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l),t.Y36(b.Z),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{student:"student"},decls:23,vars:6,consts:[[1,"card","mt-1"],[1,"card-body","row"],["xmlns","http://www.w3.org/2000/svg","width","128","height","128","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-person-lines-fill","col-3","mt-3"],["d","M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"],[1,"col-9"],[1,"d-flex","justify-content-between"],[1,"card-title"],[1,"btn",3,"click"],[1,"card-text"],[1,"row","justify-content-end"],[1,"col","col-xl-4","col-md-4","col-sm-4"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","d-block","btn-outline-dark",3,"routerLink"],["href","javascript:void(0)",1,"btn","d-block","btn-dark",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA(),t.kcU(),t.TgZ(4,"div",4)(5,"div",5)(6,"div")(7,"h2",6),t._uU(8),t.qZA()(),t.TgZ(9,"button",7),t.NdJ("click",function(){return r.delete()}),t.TgZ(10,"mat-icon"),t._uU(11,"delete_outline"),t.qZA()()(),t.TgZ(12,"p",8),t._uU(13),t._UZ(14,"br"),t._uU(15),t.qZA(),t.TgZ(16,"div",9)(17,"div",10)(18,"a",11),t._uU(19," Editar"),t.qZA()(),t.TgZ(20,"div",10)(21,"a",12),t.NdJ("click",function(){return r.registerReturnVisit()}),t._uU(22," Revisita"),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Oqu(r.student.name),t.xp6(5),t.hij("",r.student.placementName," "),t.xp6(2),t.hij(" ",r.student.observations,""),t.xp6(3),t.Q6J("routerLink",t.VKq(4,B,r.student.studentId)))},dependencies:[U.Hw,u.yS,u.Od]}),n})();function X(n,i){1&n&&t._UZ(0,"app-card",7),2&n&&t.Q6J("student",i.$implicit)}function H(n,i){if(1&n&&(t.TgZ(0,"div",5),t.YNc(1,X,1,1,"app-card",6),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.studentList)}}function K(n,i){1&n&&(t.TgZ(0,"div",8),t._UZ(1,"app-no-data-found"),t.qZA())}const W=[{path:"",component:(()=>{class n{constructor(e){this.studentService=e,this.studentList=new Array}ngOnInit(){this.studentService.getStudents().subscribe(e=>{this.studentList=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-students"]],decls:6,vars:4,consts:[[3,"title","showAddStudent"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","col-12 pb-5",4,"ngIf"],["class","col-8 mt-3",4,"ngIf"],[1,"col-12","pb-5"],[3,"student",4,"ngFor","ngForOf"],[3,"student"],[1,"col-8","mt-3"]],template:function(e,r){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,H,2,1,"div",3),t.YNc(4,K,2,0,"div",4),t.qZA()(),t._UZ(5,"app-footer")),2&e&&(t.Q6J("title","Students")("showAddStudent",!0),t.xp6(3),t.Q6J("ngIf",r.studentList),t.xp6(1),t.Q6J("ngIf",!r.studentList||r.studentList.length<1))},dependencies:[m.sg,m.O5,f.G,v.c,z.i,P]}),n})()},{path:"form",component:y},{path:"form/:id",component:y},{path:"return-visit-form/:student",component:G},{path:"return-visits/history/:id",component:D}];let tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(W),u.Bz]}),n})();var et=s(6838);let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,et.SharedComponentsModule,tt]}),n})()}}]);