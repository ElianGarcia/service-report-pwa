"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[373],{4373:(x,c,o)=>{o.r(c),o.d(c,{ProgressModule:()=>y});var i=o(6895),u=o(6633),d=o(9299),t=o(4650),l=o(9609),p=o(14),g=o(4218),m=o(5350),h=o(925),C=o(7009),f=o(7392),a=o(3546);let v=(()=>{class e{constructor(n){this.snackBar=n,this.hoursCount=0,this.placementsCount=0,this.videosCount=0,this.returnVisitsCount=0}ngOnInit(){this.hoursCount=this.data.hours||0,this.placementsCount=this.data.placements||0,this.videosCount=this.data.videos||0,this.returnVisitsCount=this.data.returnVisits||0}getMessage(){let n=`This is my field service report for the month of ${this.getMonth()} \n`;return n+=`*Hours:* ${this.hoursCount} \n`,n+=`*Placements:* ${this.placementsCount} \n`,n+=`*Videos:* ${this.videosCount} \n`,n+=`*Return Visits:* ${this.returnVisitsCount}`,n}getMonth(){return this.data.month?h.zC[this.data.month-1]:""}getLink(){return`whatsapp://send?text=${this.getMessage()}`}copyToClipboard(){let n=`This is my field service report for the month of ${this.getMonth()} \n`;n+=`*Hours:* ${this.hoursCount} \n`,n+=`*Placements:* ${this.placementsCount} \n`,n+=`*Videos:* ${this.videosCount} \n`,n+=`*Return Visits:* ${this.returnVisitsCount}`,navigator.clipboard.writeText(n),this.snackBar.open("Copied to clipboard","Close",{duration:1e3})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{data:"data"},decls:30,vars:5,consts:[[1,"example-card","justify-content-center","mt-2"],["href","javascript:void(0)",2,"color","black",3,"click"],[1,"justify-content-center",2,"width","100%"]],template:function(n,r){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"a",1),t.NdJ("click",function(){return r.copyToClipboard()}),t.TgZ(6,"mat-icon"),t._uU(7,"content_copy"),t.qZA()()()(),t.TgZ(8,"mat-card-content"),t._UZ(9,"br"),t.TgZ(10,"table",2)(11,"tr")(12,"th"),t._uU(13,"Hours"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Placements"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Videos"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Return Visits"),t.qZA()(),t._UZ(20,"br"),t.TgZ(21,"tr")(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.qZA()()()()()),2&n&&(t.xp6(3),t.Oqu(r.getMonth()),t.xp6(20),t.Oqu(r.hoursCount),t.xp6(2),t.Oqu(r.placementsCount),t.xp6(2),t.Oqu(r.videosCount),t.xp6(2),t.Oqu(r.returnVisitsCount))},dependencies:[f.Hw,a.a8,a.dk,a.dn,a.n5],styles:[".example-card[_ngcontent-%COMP%]{max-width:100%}.headers[_ngcontent-%COMP%] > .nav-item[_ngcontent-%COMP%]{font-size:large}.nav-item[_ngcontent-%COMP%]{font-weight:500;font-size:large}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:0 solid black;border-collapse:collapse;text-align:center;font-size:large}  .mat-card-header-text{margin:0 16px;text-align:center;width:97%}mat-card[_ngcontent-%COMP%]{background-color:#f1efd5}@media (max-width: 600px){th[_ngcontent-%COMP%]{font-size:medium}}"]}),e})();function Z(e,s){1&e&&t._UZ(0,"app-card",7),2&e&&t.Q6J("data",s.$implicit)}function P(e,s){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,Z,1,1,"app-card",6),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.list)}}function T(e,s){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-no-data-found"),t.qZA())}const M=[{path:"",component:(()=>{class e{constructor(n){this.goalsService=n,this.list=void 0}ngOnInit(){this.getData()}getData(){this.goalsService.getProgress().subscribe(n=>{this.list=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress"]],decls:6,vars:3,consts:[[3,"title"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","col-12",4,"ngIf"],["class","col-10 mt-3",4,"ngIf"],[1,"col-12"],[3,"data",4,"ngFor","ngForOf"],[3,"data"],[1,"col-10","mt-3"]],template:function(n,r){1&n&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,P,2,1,"div",3),t.YNc(4,T,2,0,"div",4),t.qZA()(),t._UZ(5,"app-footer")),2&n&&(t.Q6J("title","Progress"),t.xp6(3),t.Q6J("ngIf",r.list),t.xp6(1),t.Q6J("ngIf",!r.list||r.list.length<1))},dependencies:[i.sg,i.O5,p.G,g.c,m.i,v]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,u.SharedComponentsModule,O]}),e})()}}]);