"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[373],{4373:(q,d,s)=>{s.r(d),s.d(d,{ProgressModule:()=>y});var c=s(6895),h=s(9461),u=s(9299),t=s(4650),m=s(9609),C=s(14),v=s(4218),f=s(5350),Z=s(925),P=s(7009),p=s(4463),T=s(7392),i=s(3546);let M=(()=>{class e{constructor(n,o){this.snackBar=n,this.translate=o,this.hoursCount=0,this.placementsCount=0,this.videosCount=0,this.returnVisitsCount=0}ngOnInit(){this.hoursCount=this.data.hours||0,this.placementsCount=this.data.placements||0,this.videosCount=this.data.videos||0,this.returnVisitsCount=this.data.returnVisits||0}getMessage(){let n="";return this.translate.get("fieldServiceReport").subscribe(o=>{n=o.replace("##month",this.getMonth()).replace("##hour",this.hoursCount.toString()).replace("##placement",this.placementsCount.toString()).replace("##video",this.videosCount.toString()).replace("##visit",this.returnVisitsCount.toString()),console.log(n)}),n}getMonth(){return this.data.month?Z.zC[this.data.month-1]:""}getLink(){return`whatsapp://send?text=${this.getMessage()}`}copyToClipboard(){let n="",o="";this.translate.get(this.getMonth()).subscribe(a=>{o=a}),this.translate.get("fieldServiceReport").subscribe(a=>{n=a.replace("##month",o).replace("##hour",this.hoursCount.toString()).replace("##placement",this.placementsCount.toString()).replace("##video",this.videosCount.toString()).replace("##visit",this.returnVisitsCount.toString()),navigator.clipboard.writeText(n),console.log(n)});let l="",g="";this.translate.get("Copied").subscribe(a=>{l=a,this.translate.get("Close").subscribe(S=>{g=S,this.snackBar.open(l,g,{duration:1e3})})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P.ux),t.Y36(p.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{data:"data"},decls:35,vars:19,consts:[[1,"example-card","justify-content-center","mt-2"],["href","javascript:void(0)",2,"color","black",3,"click"],[1,"justify-content-center",2,"width","100%"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div")(6,"a",1),t.NdJ("click",function(){return o.copyToClipboard()}),t.TgZ(7,"mat-icon"),t._uU(8,"content_copy"),t.qZA()()()(),t.TgZ(9,"mat-card-content"),t._UZ(10,"br"),t.TgZ(11,"table",2)(12,"tr")(13,"th"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"th"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"th"),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"th"),t._uU(23),t.ALo(24,"translate"),t.qZA()(),t._UZ(25,"br"),t.TgZ(26,"tr")(27,"td"),t._uU(28),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.qZA()()()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,9,o.getMonth())),t.xp6(11),t.Oqu(t.lcZ(15,11,"Hours")),t.xp6(3),t.Oqu(t.lcZ(18,13,"Placements")),t.xp6(3),t.Oqu(t.lcZ(21,15,"Videos")),t.xp6(3),t.Oqu(t.lcZ(24,17,"Return Visits")),t.xp6(5),t.Oqu(o.hoursCount),t.xp6(2),t.Oqu(o.placementsCount),t.xp6(2),t.Oqu(o.videosCount),t.xp6(2),t.Oqu(o.returnVisitsCount))},dependencies:[T.Hw,i.a8,i.dk,i.dn,i.n5,p.X$],styles:[".example-card[_ngcontent-%COMP%]{max-width:100%}.headers[_ngcontent-%COMP%] > .nav-item[_ngcontent-%COMP%]{font-size:large}.nav-item[_ngcontent-%COMP%]{font-weight:500;font-size:large}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:0 solid black;border-collapse:collapse;text-align:center;font-size:large}  .mat-card-header-text{margin:0 16px;text-align:center;width:97%}mat-card[_ngcontent-%COMP%]{background-color:#f1efd5}@media (max-width: 600px){th[_ngcontent-%COMP%]{font-size:medium}}"]}),e})();function O(e,r){1&e&&t._UZ(0,"app-card",7),2&e&&t.Q6J("data",r.$implicit)}function x(e,r){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,O,1,1,"app-card",6),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.list)}}function A(e,r){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-no-data-found"),t.qZA())}const U=[{path:"",component:(()=>{class e{constructor(n){this.goalsService=n,this.list=void 0}ngOnInit(){this.getData()}getData(){this.goalsService.getProgress().subscribe(n=>{this.list=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress"]],decls:6,vars:3,consts:[[3,"title"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","col-12",4,"ngIf"],["class","col-10 mt-3",4,"ngIf"],[1,"col-12"],[3,"data",4,"ngFor","ngForOf"],[3,"data"],[1,"col-10","mt-3"]],template:function(n,o){1&n&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,x,2,1,"div",3),t.YNc(4,A,2,0,"div",4),t.qZA()(),t._UZ(5,"app-footer")),2&n&&(t.Q6J("title","Progress"),t.xp6(3),t.Q6J("ngIf",o.list),t.xp6(1),t.Q6J("ngIf",!o.list||o.list.length<1))},dependencies:[c.sg,c.O5,C.G,v.c,f.i,M]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(U),u.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,h.SharedComponentsModule,b]}),e})()}}]);