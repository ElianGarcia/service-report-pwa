"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[861],{6861:(st,p,i)=>{i.r(p),i.d(p,{StudentsModule:()=>R});var c=i(6895),u=i(3060),s=i(4006),t=i(4650),f=i(1135),m=i(925),h=i(529),v=i(4961);let l=(()=>{class n{constructor(e,o){this.httpClient=e,this.userService=o,this._studentList=new f.X([])}get userId(){return this.userService.getUser().userId}getStudents(){return this.httpClient.get(m.Cq.GETSTUDENTS+this.userId).subscribe(e=>{console.log(e),this._studentList.next(e)}),this._studentList.asObservable()}getStudent(e){return this.httpClient.get(m.Cq.GETSTUDENT+e+"/2")}save(e){return this.httpClient.post(m.Cq.SAVESTUDENT,e)}visit(e){return this.httpClient.post(m.Cq.VISITSTUDENT,e)}delete(e){return this.httpClient.delete(m.Cq.DELETESTUDENT+e)}update(e){return this.httpClient.put(m.Cq.UPDATESTUDENT,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN),t.LFG(v.f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=i(678);let b=(()=>{class n{constructor(e){this.httpClient=e,this._placements=new f.X([])}getPlacements(){return this.httpClient.get(m.Cq.GETPLACEMENTS).subscribe(e=>{this._placements.next(e)},e=>{}),this._placements.asObservable()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(h.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Z=i(14),S=i(4218),T=i(7392),d=i(9549),C=i(4144),F=i(4859),x=i(455),A=i(4385),U=i(3238);function I(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function y(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.getError("name")," ")}}function q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function E(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.getError("phone")," ")}}function w(n,r){if(1&n&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.placementId),t.xp6(1),t.Oqu(e.name)}}function J(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.getError("placementId")," ")}}function N(n,r){if(1&n&&(t.TgZ(0,"mat-option",26),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function Y(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.getError("dayToVisit")," ")}}function M(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function k(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.getError("address")," ")}}function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function L(n,r){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.getError("observations")," ")}}const O=function(){return["/app/students"]};let _=(()=>{class n{constructor(e,o,a,X,W,tt,et){this.studentsService=e,this.formBuilder=o,this.modalService=a,this.placementsService=X,this.router=W,this.route=tt,this.userService=et,this.isSubmitted=!1,this.placements=[],this.mode="Create",this.days=[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:7,name:"Sunday"}],this.route.params.subscribe(nt=>{let ot=nt.id;this.studentsService.getStudents().subscribe(rt=>{this.student=rt.find(it=>it.studentId==ot),this.mode=this.student?"Edit":"Create",this.student&&this.mainForm.patchValue(this.student)})})}ngOnInit(){this.mainForm=this.formBuilder.group({studentId:["",s.kI.required],name:["",s.kI.required],phone:["",[s.kI.required,s.kI.minLength(10)]],placementId:["",s.kI.required],address:["",s.kI.required],active:[!0,s.kI.required],dayToVisit:["",s.kI.required],observations:[""],userId:[0,s.kI.required]}),this.mainForm.patchValue({userId:this.userService.getUser().userId}),this.placementsService.getPlacements().subscribe(e=>{this.placements=e})}getError(e){if(null!=this.mainForm.get(e)){if(this.mainForm.get(e).hasError("required"))return`El campo ${e} es obligatorio.`;if(this.mainForm.get(e).hasError("email"))return`El campo ${e} debe ser un email v\xe1lido.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 8 caracteres.`;if(this.mainForm.get(e).hasError("minlength"))return`El campo ${e} debe tener como m\xednimo 11 caracteres.`}return""}get errorControl(){return this.mainForm.controls}submitForm(){this.isSubmitted=!0,this.mainForm.valid?this.student?this.studentsService.update(this.mainForm.value).subscribe(e=>{e>0&&(this.modalService.showMessage("Student updated successfully"),this.router.navigate(["/students"]))},e=>{this.modalService.showMessage("Error updating student")}):this.studentsService.save(this.mainForm.value).subscribe(e=>{e>0&&this.modalService.showMessage("Student saved!")},e=>{this.modalService.showMessage("An error occured while saving the student!")},()=>{this.router.navigate(["/students"])}):this.modalService.showMessage("Please fill all the required fields!")}deleteStudent(e){e?this.modalService.showConfirmMessage("Are you sure you want to delete this student?")&&this.studentsService.delete(e).subscribe(o=>{this.modalService.showMessage("Student deleted!")}):this.modalService.showMessage("An error occured while deleting the student!")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l),t.Y36(s.qu),t.Y36(g.Z),t.Y36(b),t.Y36(u.F0),t.Y36(u.gz),t.Y36(v.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-form"]],decls:58,vars:16,consts:[[3,"title"],[1,"container","col-md-8"],[1,"row"],[1,"col-12"],[3,"formGroup"],[1,"col-xl-6","col-md-12","col-sm-12"],["matInput","","type","text","formControlName","name"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[4,"ngIf"],[1,"col-xl-6","col-md-12"],["matInput","","type","text","formControlName","phone"],["appearance","fill",1,"col-xl-6","col-md-12"],["formControlName","placementId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","dayToVisit"],[1,"col-md-10"],["matInput","","type","text","formControlName","address"],["formControlName","active",1,"col-md-2"],[1,"col-md-12"],["matInput","","type","text","formControlName","observations"],[1,"row","mt-2","d-flex","justify-content-between"],["align","start",1,"col"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","btn-outline-dark",3,"routerLink"],["align","end",1,"col"],["href","javascript:void(0)","type","submit",1,"btn","btn-dark",3,"click"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"value"]],template:function(e,o){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",2)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Nombre"),t.qZA(),t._UZ(9,"input",6),t.YNc(10,I,3,0,"button",7),t.YNc(11,y,2,1,"mat-error",8),t.qZA(),t.TgZ(12,"mat-form-field",9)(13,"mat-label"),t._uU(14,"Tel\xe9fono"),t.qZA(),t._UZ(15,"input",10),t.YNc(16,q,3,0,"button",7),t.YNc(17,E,2,1,"mat-error",8),t.qZA()(),t.TgZ(18,"div",2)(19,"mat-form-field",11)(20,"mat-label"),t._uU(21,"Publicacion con la que estudia"),t.qZA(),t.TgZ(22,"mat-select",12)(23,"mat-option"),t._uU(24,"Clear"),t.qZA(),t.YNc(25,w,2,2,"mat-option",13),t.qZA(),t.YNc(26,J,2,1,"mat-error",8),t.qZA(),t.TgZ(27,"mat-form-field",11)(28,"mat-label"),t._uU(29,"Dia preferido para visitar"),t.qZA(),t.TgZ(30,"mat-select",14)(31,"mat-option"),t._uU(32,"Clear"),t.qZA(),t.YNc(33,N,2,2,"mat-option",13),t.qZA(),t.YNc(34,Y,2,1,"mat-error",8),t.qZA()(),t.TgZ(35,"div",2)(36,"mat-form-field",15)(37,"mat-label"),t._uU(38,"Direccion"),t.qZA(),t._UZ(39,"input",16),t.YNc(40,M,3,0,"button",7),t.YNc(41,k,2,1,"mat-error",8),t.qZA(),t.TgZ(42,"mat-slide-toggle",17),t._uU(43,"Activo"),t.qZA()(),t.TgZ(44,"mat-form-field",18)(45,"mat-label"),t._uU(46,"Observaciones"),t.qZA(),t._UZ(47,"input",19),t.YNc(48,Q,3,0,"button",7),t.YNc(49,L,2,1,"mat-error",8),t.qZA()(),t.TgZ(50,"div",20)(51,"div",21)(52,"a",22),t._uU(53," Cancelar"),t.qZA()(),t.TgZ(54,"div",23)(55,"a",24),t.NdJ("click",function(){return o.submitForm()}),t._uU(56," Guardar"),t.qZA()()()()()(),t._UZ(57,"app-footer")),2&e&&(t.Q6J("title",o.mode+" Estudiante"),t.xp6(4),t.Q6J("formGroup",o.mainForm),t.xp6(6),t.Q6J("ngIf",o.mainForm.get("name").value),t.xp6(1),t.Q6J("ngIf",o.isSubmitted),t.xp6(5),t.Q6J("ngIf",o.mainForm.get("phone").value),t.xp6(1),t.Q6J("ngIf",o.isSubmitted),t.xp6(8),t.Q6J("ngForOf",o.placements),t.xp6(1),t.Q6J("ngIf",o.isSubmitted),t.xp6(7),t.Q6J("ngForOf",o.days),t.xp6(1),t.Q6J("ngIf",o.isSubmitted),t.xp6(6),t.Q6J("ngIf",o.mainForm.get("address").value),t.xp6(1),t.Q6J("ngIf",o.isSubmitted),t.xp6(7),t.Q6J("ngIf",o.mainForm.get("observations").value),t.xp6(1),t.Q6J("ngIf",o.isSubmitted),t.xp6(3),t.Q6J("routerLink",t.DdM(15,O)))},dependencies:[c.sg,c.O5,Z.G,S.c,T.Hw,d.TO,d.KE,d.hX,d.R9,C.Nt,F.lW,x.Rr,A.gD,U.ey,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,u.yS,u.Od]}),n})();var j=i(5350);class G{}const z=function(n){return["form/",n]};let D=(()=>{class n{constructor(e,o){this.studentService=e,this.modalService=o,this.student=new G}ngOnInit(){}delete(){this.modalService.showConfirmMessage("Are you sure you want to delete this student?").subscribe(e=>{console.log(e),e&&this.studentService.delete(this.student.studentId).subscribe(o=>{console.log(o),this.modalService.showMessage("Student deleted successfully")})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l),t.Y36(g.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{student:"student"},decls:23,vars:6,consts:[[1,"card","mt-1"],[1,"card-body","row"],["xmlns","http://www.w3.org/2000/svg","width","128","height","128","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-person-lines-fill","col-3","mt-3"],["d","M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"],[1,"col-9"],[1,"d-flex","justify-content-between"],[1,"card-title"],[1,"btn",3,"click"],[1,"card-text"],[1,"row","justify-content-end"],[1,"col","col-xl-4","col-md-4","col-sm-4"],["href","javascript:void(0)","routerLinkActive","router-link-active",1,"btn","d-block","btn-outline-dark",3,"routerLink"],["href","#",1,"btn","d-block","btn-dark"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.O4$(),t.TgZ(2,"svg",2),t._UZ(3,"path",3),t.qZA(),t.kcU(),t.TgZ(4,"div",4)(5,"div",5)(6,"div")(7,"h2",6),t._uU(8),t.qZA()(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.delete()}),t.TgZ(10,"mat-icon"),t._uU(11,"delete_outline"),t.qZA()()(),t.TgZ(12,"p",8),t._uU(13),t._UZ(14,"br"),t._uU(15),t.qZA(),t.TgZ(16,"div",9)(17,"div",10)(18,"a",11),t._uU(19," Editar"),t.qZA()(),t.TgZ(20,"div",10)(21,"a",12),t._uU(22," Revisita"),t.qZA()()()()()()),2&e&&(t.xp6(8),t.Oqu(o.student.name),t.xp6(5),t.hij("",o.student.placementName," "),t.xp6(2),t.hij(" ",o.student.observations,""),t.xp6(3),t.Q6J("routerLink",t.VKq(4,z,o.student.studentId)))},dependencies:[T.Hw,u.yS,u.Od]}),n})();function P(n,r){1&n&&t._UZ(0,"app-card",7),2&n&&t.Q6J("student",r.$implicit)}function B(n,r){if(1&n&&(t.TgZ(0,"div",5),t.YNc(1,P,1,1,"app-card",6),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.studentList)}}function V(n,r){1&n&&(t.TgZ(0,"div",8),t._UZ(1,"app-no-data-found"),t.qZA())}const $=[{path:"",component:(()=>{class n{constructor(e){this.studentService=e,this.studentList=new Array}ngOnInit(){this.studentService.getStudents().subscribe(e=>{this.studentList=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-students"]],decls:6,vars:4,consts:[[3,"title","showAddStudent"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","col-12 pb-5",4,"ngIf"],["class","col-8 mt-3",4,"ngIf"],[1,"col-12","pb-5"],[3,"student",4,"ngFor","ngForOf"],[3,"student"],[1,"col-8","mt-3"]],template:function(e,o){1&e&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,B,2,1,"div",3),t.YNc(4,V,2,0,"div",4),t.qZA()(),t._UZ(5,"app-footer")),2&e&&(t.Q6J("title","Estudiantes")("showAddStudent",!0),t.xp6(3),t.Q6J("ngIf",o.studentList),t.xp6(1),t.Q6J("ngIf",!o.studentList||o.studentList.length<1))},dependencies:[c.sg,c.O5,Z.G,S.c,j.i,D]}),n})()},{path:"form",component:_},{path:"form/:id",component:_}];let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild($),u.Bz]}),n})();var K=i(6838);let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,K.SharedComponentsModule,H]}),n})()}}]);