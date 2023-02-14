"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[373],{4373:(U,u,s)=>{s.r(u),s.d(u,{ProgressModule:()=>O});var a=s(6895),d=s(6838),c=s(9299),t=s(4650),l=s(9609),p=s(14),h=s(4218),g=s(5350),m=s(925),C=s(7392),i=s(3546);let f=(()=>{class e{constructor(){this.hoursCount=0,this.placementsCount=0,this.videosCount=0,this.returnVisitsCount=0,this.hoursCountStop=setInterval(()=>{0!=this.data.hours&&(this.hoursCount++,this.hoursCount==this.data.hours&&clearInterval(this.hoursCountStop))},75),this.placementsCountStop=setInterval(()=>{0!=this.data.placements&&(this.placementsCount++,this.placementsCount==this.data.placements&&clearInterval(this.placementsCountStop))},75),this.returnVisitsCountStop=setInterval(()=>{0!=this.data.returnVisits&&(this.returnVisitsCount++,this.returnVisitsCount==this.data.returnVisits&&clearInterval(this.returnVisitsCountStop))},75),this.videosCountStop=setInterval(()=>{0!=this.data.videos&&(this.videosCount++,this.videosCount==this.data.videos&&clearInterval(this.videosCountStop))},75)}ngOnInit(){}getMessage(){let n=`This is my field service report for the month of ${this.getMonth()} \n`;return n+=`*Hours:* ${this.hoursCount} \n`,n+=`*Publications:* ${this.placementsCount} \n`,n+=`*Videos:* ${this.videosCount} \n`,n+=`*Return Visits:* ${this.returnVisitsCount}`,n}getMonth(){return this.data.month?m.zC[this.data.month-1]:""}getLink(){return`whatsapp://send?text=${this.getMessage()}`}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{data:"data"},decls:30,vars:6,consts:[[1,"example-card","justify-content-center","mt-2"],[2,"color","black",3,"href"],[1,"justify-content-center",2,"width","100%"]],template:function(n,r){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"a",1)(6,"mat-icon"),t._uU(7,"share"),t.qZA()()()(),t.TgZ(8,"mat-card-content"),t._UZ(9,"br"),t.TgZ(10,"table",2)(11,"tr")(12,"th"),t._uU(13,"Hours"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Placements"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Videos"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Return Visits"),t.qZA()(),t._UZ(20,"br"),t.TgZ(21,"tr")(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.qZA()()()()()),2&n&&(t.xp6(3),t.Oqu(r.getMonth()),t.xp6(2),t.Q6J("href",r.getLink(),t.LSH),t.xp6(18),t.Oqu(r.hoursCount),t.xp6(2),t.Oqu(r.placementsCount),t.xp6(2),t.Oqu(r.videosCount),t.xp6(2),t.Oqu(r.returnVisitsCount))},dependencies:[C.Hw,i.a8,i.dk,i.dn,i.n5],styles:[".example-card[_ngcontent-%COMP%]{max-width:100%}.headers[_ngcontent-%COMP%] > .nav-item[_ngcontent-%COMP%]{font-size:large}.nav-item[_ngcontent-%COMP%]{font-weight:500;font-size:large}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:0 solid black;border-collapse:collapse;text-align:center;font-size:large}  .mat-card-header-text{margin:0 16px;text-align:center;width:97%}@media (max-width: 600px){th[_ngcontent-%COMP%]{font-size:medium}}"]}),e})();function v(e,o){1&e&&t._UZ(0,"app-card",7),2&e&&t.Q6J("data",o.$implicit)}function Z(e,o){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,v,1,1,"app-card",6),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.list)}}function P(e,o){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"app-no-data-found"),t.qZA())}const M=[{path:"",component:(()=>{class e{constructor(n){this.goalsService=n,this.list=void 0}ngOnInit(){this.getData()}getData(){this.goalsService.getProgress().subscribe(n=>{this.list=n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress"]],decls:6,vars:3,consts:[[3,"title"],[1,"container","col-md-8","pb-5"],[1,"row","justify-content-center"],["class","col-12",4,"ngIf"],["class","col-10 mt-3",4,"ngIf"],[1,"col-12"],[3,"data",4,"ngFor","ngForOf"],[3,"data"],[1,"col-10","mt-3"]],template:function(n,r){1&n&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2),t.YNc(3,Z,2,1,"div",3),t.YNc(4,P,2,0,"div",4),t.qZA()(),t._UZ(5,"app-footer")),2&n&&(t.Q6J("title","Progress"),t.xp6(3),t.Q6J("ngIf",r.list),t.xp6(1),t.Q6J("ngIf",!r.list||r.list.length<1))},dependencies:[a.sg,a.O5,p.G,h.c,g.i,f]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(M),c.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,d.SharedComponentsModule,T]}),e})()}}]);