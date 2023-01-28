"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[747],{3489:(T,h,i)=>{i.d(h,{g:()=>m});var a=i(4650),v=i(7392),o=i(4006);let m=(()=>{class t{constructor(){this.min=0,this.max=125,this.valueChange=new a.vpe}ngOnInit(){}sum(){this.value++,this.onChange()}subs(){this.value--,this.onChange()}onChange(){this.valueChange.emit({title:this.title,value:this.value})}}return t.\u0275fac=function(u){return new(u||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-input-group"]],inputs:{title:"title",value:"value",min:"min",max:"max"},outputs:{valueChange:"valueChange"},decls:15,vars:7,consts:[[1,"row"],[1,"col"],["color","primary",1,"text-center"],[1,"xc"],[1,"row","w-100"],[1,"btn","btn-lg","rounded","btn-outline-dark","col",3,"disabled","click"],["type","number",1,"col",3,"min","max","value","ngModel","ngModelChange"],[1,"btn","btn-sucess","rounded","btn-outline-dark","btn-lg","col",3,"disabled","click"]],template:function(u,r){1&u&&(a.TgZ(0,"div",0)(1,"div",1)(2,"span",2)(3,"h2"),a._uU(4),a.qZA()(),a.TgZ(5,"div",3)(6,"div",4)(7,"button",5),a.NdJ("click",function(){return r.subs()}),a.TgZ(8,"mat-icon"),a._uU(9,"remove"),a.qZA()(),a.TgZ(10,"input",6),a.NdJ("ngModelChange",function(y){return r.value=y}),a.qZA(),a.TgZ(11,"button",7),a.NdJ("click",function(){return r.sum()}),a.TgZ(12,"mat-icon"),a._uU(13,"add"),a.qZA()()()()()(),a._UZ(14,"hr")),2&u&&(a.xp6(4),a.Oqu(r.title),a.xp6(3),a.Q6J("disabled",r.value<=0),a.xp6(3),a.Q6J("min",r.min)("max",r.max)("value",r.value)("ngModel",r.value),a.xp6(1),a.Q6J("disabled",r.value>=23))},dependencies:[v.Hw,o.Fj,o.wV,o.JJ,o.qQ,o.Fd,o.On],styles:["input[type=number][_ngcontent-%COMP%]{text-align:center;border:1px transparent;border-radius:50% 20%/10% 40%;background-color:#def6f7}input[type=number][_ngcontent-%COMP%]{-webkit-appearance:textfield!important;appearance:textfield!important}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none}input[type=number][_ngcontent-%COMP%]{width:120px;margin-right:4px;margin-left:4px;font-size:1.5rem}.xc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),t})()},7747:(T,h,i)=>{i.r(h),i.d(h,{TabsModule:()=>P});var a=i(6895),v=i(3060),o=i(4006);class m{constructor(){this.activityId=0,this.hours=0,this.placements=0,this.videos=0,this.returnVisits=0,this.date=new Date,this.userId=1}}var t=i(4650),c=i(925),u=i(529),r=i(4961);let g=(()=>{class n{constructor(e,s){this.httpClient=e,this.userService=s}get userId(){return this.userService.getUser().userId}getActivity(){return this.httpClient.get(c.Cq.GETACTIVITIES+this.userId)}getPastActivity(e){return this.httpClient.get(c.Cq.GETPASTACTIVITY+this.userId+"/"+e)}save(e){return this.httpClient.post(c.Cq.SAVEACTIVITY,e)}update(e){return this.httpClient.put(c.Cq.UPDATEACTIVITY,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u.eN),t.LFG(r.f))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var y=i(678),f=i(14),b=i(4218),I=i(3489),C=i(3683);const A=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class n{constructor(e,s,p,l){this.dailyActivity=e,this.fb=s,this.modalService=p,this.userService=l,this.activity=new m,this.getData()}ngOnInit(){this.getData()}editPastDate(e){this.activity=new m,this.activity.date=e;var s=new Date(this.activity.date).toISOString();this.dailyActivity.getPastActivity(s).subscribe({next:p=>this.activity=p})}getData(){this.dailyActivity.getActivity().subscribe({next:e=>this.activity=e,error:e=>{this.modalService.showMessage("An error occured while getting the data! "+e.message),console.log(e)}})}getDate(){return this.activity.date}receiveData(e){switch(e.title){case"Hours":this.activity.hours=e.value;break;case"Placements":this.activity.placements=e.value;break;case"Videos":this.activity.videos=e.value;break;case"Revisitas":this.activity.returnVisits=e.value}this.save()}save(){this.mainForm=this.fb.group({activityId:[this.activity.activityId,[]],hours:[this.activity.hours,[o.kI.required]],placements:[this.activity.placements,[o.kI.required]],videos:[this.activity.videos,[o.kI.required]],returnVisits:[this.activity.returnVisits,[o.kI.required]],userId:[0,[o.kI.required]],date:[this.activity.date,[o.kI.required]]}),this.mainForm.patchValue({userId:this.userService.getUser().userId}),this.mainForm.valid?this.activity.activityId?this.dailyActivity.update(this.mainForm.value).subscribe({error:e=>{this.modalService.showMessage("An error occured while saving the data! "+e.message),console.log(e)}}):this.dailyActivity.save(this.mainForm.value).subscribe({error:e=>{this.modalService.showMessage("An error occured while saving the data! "+e.message),console.log(e)}}):this.modalService.showMessage("Please fill all the fields!")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g),t.Y36(o.qu),t.Y36(y.Z),t.Y36(r.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tabs"]],decls:14,vars:11,consts:[[3,"title","showCalendar","editingDate"],[1,"justify-content-center"],[1,"text-center","mt-2"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["title","Hours",3,"value","max","valueChange"],["title","Placements",3,"value","valueChange"],["title","Videos",3,"value","valueChange"],["title","Revisitas",3,"value","valueChange"]],template:function(e,s){1&e&&(t.TgZ(0,"app-header",0),t.NdJ("editingDate",function(l){return s.editPastDate(l)}),t.qZA(),t.TgZ(1,"mat-toolbar")(2,"mat-toolbar-row",1)(3,"span",2)(4,"h3"),t._uU(5),t.ALo(6,"date"),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",4)(9,"app-input-group",5),t.NdJ("valueChange",function(l){return s.receiveData(l)}),t.qZA(),t.TgZ(10,"app-input-group",6),t.NdJ("valueChange",function(l){return s.receiveData(l)}),t.qZA(),t.TgZ(11,"app-input-group",7),t.NdJ("valueChange",function(l){return s.receiveData(l)}),t.qZA(),t.TgZ(12,"app-input-group",8),t.NdJ("valueChange",function(l){return s.receiveData(l)}),t.qZA()()(),t._UZ(13,"app-footer")),2&e&&(t.Q6J("title","Home")("showCalendar",!0),t.xp6(5),t.Oqu(t.xi3(6,8,s.getDate(),"EEEE dd, MMMM yyyy")),t.xp6(4),t.Q6J("value",s.activity.hours)("max",125),t.xp6(1),t.Q6J("value",s.activity.placements),t.xp6(1),t.Q6J("value",s.activity.videos),t.xp6(1),t.Q6J("value",s.activity.returnVisits))},dependencies:[f.G,b.c,I.g,C.Ye,C.rD,a.uU]}),n})()},{path:"students",loadChildren:()=>Promise.all([i.e(592),i.e(861)]).then(i.bind(i,6861)).then(n=>n.StudentsModule)},{path:"goals",loadChildren:()=>Promise.all([i.e(592),i.e(689)]).then(i.bind(i,8689)).then(n=>n.GoalsModule)},{path:"progress",loadChildren:()=>Promise.all([i.e(592),i.e(373)]).then(i.bind(i,4373)).then(n=>n.ProgressModule)},{path:"shared",loadChildren:()=>Promise.resolve().then(i.bind(i,6838)).then(n=>n.SharedComponentsModule)}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.Bz.forChild(A),v.Bz]}),n})();var D=i(6838);let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,M,D.SharedComponentsModule]}),n})()}}]);