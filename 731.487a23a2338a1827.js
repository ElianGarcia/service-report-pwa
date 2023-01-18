"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[731],{7731:(x,u,i)=>{i.r(u),i.d(u,{AuthModule:()=>y});var m=i(6895),c=i(3060),s=i(4006),t=i(4650),g=i(678),d=i(4961),f=i(14),v=i(7392),l=i(9549),h=i(4144),Z=i(4859);function C(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function w(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.value="")}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function A(o,e){1&o&&(t.TgZ(0,"ion-chip",16),t._uU(1,"Incorrect username or password."),t.qZA())}const F=function(){return["/forgot-password"]},L=function(){return["/register"]};let p=(()=>{class o{constructor(n,r,a,k){this.fb=n,this.modal=r,this.userService=a,this.router=k,this.invalidLogin=!1}ngOnInit(){this.mainForm=this.fb.group({username:["eligarcia",[s.kI.required]],password:["123456",[s.kI.required]]}),this.userService.isUserAuthenticated()&&this.router.navigateByUrl("")}login(){this.invalidLogin=!1,this.mainForm.valid?this.userService.login(this.mainForm.value).subscribe(n=>{console.log(n);const a=n.user;localStorage.setItem("jwt",n.token),localStorage.setItem("user",JSON.stringify(a)),this.invalidLogin=!1,this.router.navigate([""])},n=>{console.log(n),(n.status=401)&&(this.invalidLogin=!0)}):this.modal.showMessage("Please fill all the fields!")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(g.Z),t.Y36(d.f),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:29,vars:11,consts:[[3,"title"],[1,"container","col-md-8","pb-5","mt-5"],[1,"row"],[1,"col-12","d-flex","justify-content-center"],[1,"col-md-6","login-form-2","rounded-end",3,"formGroup"],[1,"col-12","mt-3"],["matInput","","type","text","formControlName","username"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"col-12","mt-2"],["matInput","","type","password","formControlName","password"],["color","danger","class","mb-2",4,"ngIf"],[1,"row","justify-content-end","mb-3","mt-3"],["type","submit","value","Login",1,"col-4","btn","d-block","btn-dark",3,"click"],["routerLinkActive","router-link-active","href","javascript:void(0)",1,"col-md-6","btnForgetPwd","text-start",3,"routerLink"],["routerLinkActive","router-link-active","href","javascript:void(0)",1,"col-md-6","btnForgetPwd","text-end",3,"routerLink"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["color","danger",1,"mb-2"]],template:function(n,r){1&n&&(t._UZ(0,"app-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1"),t._uU(6,"Login"),t.qZA(),t.TgZ(7,"mat-form-field",5)(8,"mat-label"),t._uU(9,"Username"),t.qZA(),t._UZ(10,"input",6),t.YNc(11,C,3,0,"button",7),t.TgZ(12,"mat-error"),t._uU(13),t.qZA()(),t.TgZ(14,"mat-form-field",8)(15,"mat-label"),t._uU(16,"Password"),t.qZA(),t._UZ(17,"input",9),t.YNc(18,w,3,0,"button",7),t.TgZ(19,"mat-error"),t._uU(20),t.qZA()(),t.YNc(21,A,2,0,"ion-chip",10),t.TgZ(22,"div",11)(23,"input",12),t.NdJ("click",function(){return r.login()}),t.qZA()(),t.TgZ(24,"span",2)(25,"a",13),t._uU(26,"Forgot Password?"),t.qZA(),t.TgZ(27,"a",14),t._uU(28,"New User?"),t.qZA()()()()()()),2&n&&(t.Q6J("title","Login"),t.xp6(4),t.Q6J("formGroup",r.mainForm),t.xp6(7),t.Q6J("ngIf",r.mainForm.get("username").value),t.xp6(2),t.hij(" ",r.mainForm.get("username").errors," "),t.xp6(5),t.Q6J("ngIf",r.mainForm.get("password").value),t.xp6(2),t.hij(" ",r.mainForm.get("password").errors," "),t.xp6(1),t.Q6J("ngIf",r.invalidLogin),t.xp6(4),t.Q6J("routerLink",t.DdM(9,F)),t.xp6(2),t.Q6J("routerLink",t.DdM(10,L)))},dependencies:[m.O5,c.yS,c.Od,f.G,v.Hw,l.TO,l.KE,l.hX,l.R9,h.Nt,Z.lW,s.Fj,s.JJ,s.JL,s.sg,s.u]}),o})();const T=[{path:"",component:p},{path:"login",component:p},{path:"register",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-register"]],decls:2,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"register works!"),t.qZA())}}),o})()},{path:"forgot-password",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-password-forgot"]],decls:2,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"password-forgot works!"),t.qZA())}}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(T),c.Bz]}),o})();var U=i(1299);let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,b,U.q]}),o})()}}]);