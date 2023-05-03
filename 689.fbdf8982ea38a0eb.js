"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[689],{8689:(w,h,n)=>{n.r(h),n.d(h,{GoalsModule:()=>Y});var p=n(6895),u=n(9299),r=n(4006),e=n(4650),m=n(3137),C=n(678),v=n(4961),g=n(4463),f=n(14),Z=n(4218),_=n(3489);const T=function(){return["/app/progress"]};let A=(()=>{class t{constructor(o,a,l,i,d,c){this.goalService=o,this.modalService=a,this.fb=l,this.router=i,this.userService=d,this.translate=c}ngOnInit(){this.getData()}getData(){let o=this.userService.getUser().userId;this.goalService.getGoal(o).subscribe(a=>{this.goal=a})}receiveData(o){switch(o.title){case"Hours":this.goal.hours=o.value;break;case"Placements":this.goal.placements=o.value;break;case"Videos":this.goal.videos=o.value;break;case"Return Visits":this.goal.returnVisits=o.value}this.save()}goBack(){this.router.navigate(["/app/goals"])}save(){if(this.mainForm=this.fb.group({goalId:[this.goal.goalId,[]],hours:[this.goal.hours,[r.kI.required,r.kI.max(150)]],placements:[this.goal.placements,[r.kI.required]],videos:[this.goal.videos,[r.kI.required]],returnVisits:[this.goal.returnVisits,[r.kI.required]],userId:[this.goal.userId,[r.kI.required]]}),!this.mainForm.valid)return this.mainForm.controls.hours.invalid?(this.translate.get("InvalidHours").subscribe(o=>{this.modalService.showMessage(o)}),void(this.goal.hours=0)):void this.translate.get("AllFieldsRequired").subscribe(o=>{this.modalService.showMessage(o)});this.goal.goalId?this.goalService.update(this.mainForm.value).subscribe(o=>{}):this.goalService.save(this.mainForm.value).subscribe({next:o=>{}})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.p),e.Y36(C.Z),e.Y36(r.qu),e.Y36(u.F0),e.Y36(v.f),e.Y36(g.sK))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form"]],decls:16,vars:14,consts:[[3,"title"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center","pt-3","pb-5"],[1,"pb-2","text-center"],["routerLinkActive","router-link-active",3,"routerLink"],["title","Hours",3,"value","max","valueChange"],["title","Placements",3,"value","valueChange"],["title","Videos",3,"value","valueChange"],["title","Return Visits",3,"value","valueChange"]],template:function(o,a){1&o&&(e._UZ(0,"app-header",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"hr"),e.TgZ(4,"p",3),e._uU(5),e.ALo(6,"translate"),e.TgZ(7,"a",4),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e._UZ(10,"hr"),e.TgZ(11,"app-input-group",5),e.NdJ("valueChange",function(i){return a.receiveData(i)}),e.qZA(),e.TgZ(12,"app-input-group",6),e.NdJ("valueChange",function(i){return a.receiveData(i)}),e.qZA(),e.TgZ(13,"app-input-group",7),e.NdJ("valueChange",function(i){return a.receiveData(i)}),e.qZA(),e.TgZ(14,"app-input-group",8),e.NdJ("valueChange",function(i){return a.receiveData(i)}),e.qZA()()(),e._UZ(15,"app-footer")),2&o&&(e.Q6J("title","Edit Goals"),e.xp6(5),e.hij(" ",e.lcZ(6,9,"Here you can adjust your monthly goals, which will be reflected in the ")," "),e.xp6(2),e.Q6J("routerLink",e.DdM(13,T)),e.xp6(1),e.Oqu(e.lcZ(9,11,"Progress tab.")),e.xp6(3),e.Q6J("value",null==a.goal?null:a.goal.hours)("max",140),e.xp6(1),e.Q6J("value",null==a.goal?null:a.goal.placements),e.xp6(1),e.Q6J("value",null==a.goal?null:a.goal.videos),e.xp6(1),e.Q6J("value",null==a.goal?null:a.goal.returnVisits))},dependencies:[u.yS,u.Od,f.G,Z.c,_.g,g.X$],styles:["a[_ngcontent-%COMP%]{text-decoration:none;font-weight:700;color:#000}"]}),t})();var x=n(5350),I=n(7392);function U(t,s){1&t&&(e.TgZ(0,"th")(1,"mat-icon"),e._uU(2,"directions_bike"),e.qZA()())}function b(t,s){1&t&&(e.TgZ(0,"th")(1,"mat-icon"),e._uU(2,"military_tech"),e.qZA()())}function q(t,s){1&t&&(e.TgZ(0,"th"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"Remaining")))}function M(t,s){1&t&&(e.TgZ(0,"th"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"Overcome")))}function J(t,s){if(1&t&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(o.values.remaining)}}function F(t,s){if(1&t&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Oqu(-1*o.values.remaining)}}let G=(()=>{class t{constructor(){}ngOnInit(){if("Hours"===this.title){let o=Math.floor(60*this.values.actual.toFixed(2)),l=Math.floor(60*this.values.goal.toFixed(2))-o,i=Math.floor(l/60),c=.6-(this.values.actual-Math.floor(this.values.actual));c=Math.round(100*c),this.values.remaining=i+"."+(c<10?"0":"")+c,this.values.actual=this.values.actual.toFixed(2)}}overcomed(){return this.values.remaining<1}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card"]],inputs:{title:"title",icon:"icon",values:"values"},decls:32,vars:15,consts:[[1,"bg"],[1,"card","mt-2"],[2,"width","100%"],[4,"ngIf"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"br"),e.TgZ(3,"table",2)(4,"tr")(5,"th")(6,"mat-icon"),e._uU(7),e.qZA()(),e.TgZ(8,"th")(9,"mat-icon"),e._uU(10,"timeline"),e.qZA()(),e.YNc(11,U,3,0,"th",3),e.YNc(12,b,3,0,"th",3),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"tr")(15,"th"),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"th"),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.YNc(21,q,3,3,"th",3),e.YNc(22,M,3,3,"th",3),e.qZA(),e._UZ(23,"br"),e.TgZ(24,"tr")(25,"td"),e._uU(26),e.qZA(),e.TgZ(27,"td"),e._uU(28),e.qZA(),e.YNc(29,J,2,1,"td",3),e.YNc(30,F,2,1,"td",3),e.qZA(),e._UZ(31,"br"),e.qZA()()()),2&o&&(e.xp6(7),e.Oqu(a.icon),e.xp6(4),e.Q6J("ngIf",!a.overcomed()),e.xp6(1),e.Q6J("ngIf",a.overcomed()),e.xp6(4),e.Oqu(e.lcZ(17,11,a.title)),e.xp6(3),e.Oqu(e.lcZ(20,13,"Goal")),e.xp6(2),e.Q6J("ngIf",!a.overcomed()),e.xp6(1),e.Q6J("ngIf",a.overcomed()),e.xp6(4),e.Oqu(a.values.actual),e.xp6(2),e.Oqu(a.values.goal),e.xp6(1),e.Q6J("ngIf",!a.overcomed()),e.xp6(1),e.Q6J("ngIf",a.overcomed()))},dependencies:[p.O5,I.Hw,g.X$],styles:["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:0 solid black;border-collapse:collapse;text-align:center;font-size:large}.card[_ngcontent-%COMP%]{background-color:#f1efd5}th[_ngcontent-%COMP%]{width:33%}"]}),t})();function O(t,s){if(1&t&&(e.TgZ(0,"div",5),e._UZ(1,"app-card",6)(2,"app-card",6)(3,"app-card",6)(4,"app-card",6),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("icon","schedule")("title","Hours")("values",o.hours),e.xp6(1),e.Q6J("icon","books")("title","Placements")("values",o.placements),e.xp6(1),e.Q6J("icon","perm_media")("title","Videos")("values",o.videos),e.xp6(1),e.Q6J("icon","directions_walk")("title","Visits")("values",o.returnVisits)}}function y(t,s){1&t&&(e.TgZ(0,"div",7),e._UZ(1,"app-no-data-found"),e.qZA())}const Q=[{path:"",component:(()=>{class t{constructor(o,a,l){this.goalService=o,this.router=a,this.userService=l,this.goal=void 0}ngOnInit(){this.getData()}getData(){let o=this.userService.getUser().userId;this.goalService.getGoal(o).subscribe({next:a=>{this.goal=a,this.assignValues()}})}assignValues(){this.videos={actual:this.goal.progress.videos,goal:this.goal.videos,remaining:this.goal.videos-this.goal.progress.videos},this.placements={actual:this.goal.progress.placements,goal:this.goal.placements,remaining:this.goal.placements-this.goal.progress.placements},this.hours={actual:this.goal.progress.hours,goal:this.goal.hours,remaining:0},this.returnVisits={actual:this.goal.progress.returnVisits,goal:this.goal.returnVisits,remaining:this.goal.returnVisits-this.goal.progress.returnVisits}}edit(){this.router.navigate(["/app/goals"])}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(m.p),e.Y36(u.F0),e.Y36(v.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-goals"]],decls:6,vars:4,consts:[[3,"title","showEditGoal"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","pb-5",4,"ngIf"],["class","col-8 mt-3",4,"ngIf"],[1,"pb-5"],[3,"icon","title","values"],[1,"col-8","mt-3"]],template:function(o,a){1&o&&(e._UZ(0,"app-header",0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,O,5,12,"div",3),e.YNc(4,y,2,0,"div",4),e.qZA()(),e._UZ(5,"app-footer")),2&o&&(e.Q6J("title","Goals")("showEditGoal",!0),e.xp6(3),e.Q6J("ngIf",a.goal),e.xp6(1),e.Q6J("ngIf",!a.goal))},dependencies:[p.O5,f.G,Z.c,x.i,G]}),t})()},{path:"form",component:A}];let V=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(Q),u.Bz]}),t})();var S=n(9461);let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,V,S.SharedComponentsModule]}),t})()}}]);