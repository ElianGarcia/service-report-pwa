"use strict";(self.webpackChunkservice_report_pwa=self.webpackChunkservice_report_pwa||[]).push([[592],{3895:(i,n,e)=>{e.d(n,{k:()=>r});class r{}},3137:(i,n,e)=>{e.d(n,{p:()=>l});var r=e(529),_=e(1135),h=e(3895),o=e(925),a=e(4650),u=e(4961);let l=(()=>{class s{constructor(t,E){this.httpClient=t,this.userService=E,this._goal=new _.X(new h.k),this.authToken=localStorage.getItem("jwt"),this.headers=new r.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.authToken}`}),this.requestOptions={headers:this.headers}}getGoal(t){return this.httpClient.get(o.Cq.GETGOALS+t,this.requestOptions)}getProgress(){let t=this.userService.getUser().userId;return this.httpClient.get(o.Cq.GETPROGRESS+t,this.requestOptions)}save(t){return this.httpClient.post(o.Cq.SAVEGOAL,t,this.requestOptions)}update(t){return this.httpClient.put(o.Cq.UPDATEGOAL,t,this.requestOptions)}}return s.\u0275fac=function(t){return new(t||s)(a.LFG(r.eN),a.LFG(u.f))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);