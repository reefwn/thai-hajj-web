"use strict";(self["webpackChunkthai_hajj"]=self["webpackChunkthai_hajj"]||[]).push([[112],{6112:(e,l,a)=>{a.r(l),a.d(l,{default:()=>N});var t=a(3673);const o={class:"q-pa-md q-mx-auto",style:{"max-width":"720px"}},i={class:"row items-center justify-end"},p={class:"bg-grey-3 q-mt-md q-mb-lg"},n={class:"row items-center justify-end"},u={class:"q-my-lg"},s={class:"q-my-lg"},d={class:"row justify-between"};function r(e,l,a,r,m,c){const b=(0,t.up)("q-input"),g=(0,t.up)("q-btn"),f=(0,t.up)("q-date"),y=(0,t.up)("q-popup-proxy"),w=(0,t.up)("q-icon"),V=(0,t.up)("q-card-section"),v=(0,t.up)("q-card"),h=(0,t.up)("q-expansion-item"),_=(0,t.up)("q-uploader"),W=(0,t.up)("q-toggle"),q=(0,t.up)("q-spinner-ios"),$=(0,t.up)("q-form"),x=(0,t.up)("q-page"),j=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(x,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.Wm)($,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{filled:"",modelValue:e.firstName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.firstName=l),label:e.$t("application.firstName")+" *",rules:[l=>l&&l.length>0||e.$t("application.error.empty")]},null,8,["modelValue","label","rules"]),(0,t.Wm)(b,{filled:"",modelValue:e.lastName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.lastName=l),label:e.$t("application.lastName")+" *","lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("application.error.empty")]},null,8,["modelValue","label","rules"]),(0,t.Wm)(b,{filled:"",modelValue:e.dob,"onUpdate:modelValue":l[3]||(l[3]=l=>e.dob=l),mask:"date",label:e.$t("application.dob")+" *","lazy-rules":"",rules:["date"]},{append:(0,t.w5)((()=>[(0,t.Wm)(w,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{ref:"dobRef",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{modelValue:e.dob,"onUpdate:modelValue":l[2]||(l[2]=l=>e.dob=l)},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t.wy)((0,t.Wm)(g,{label:e.$t("application.close"),color:"primary",flat:""},null,8,["label"]),[[j]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","label"]),(0,t.Wm)(b,{filled:"",modelValue:e.idCard,"onUpdate:modelValue":l[4]||(l[4]=l=>e.idCard=l),label:e.$t("application.idCard")+" *","lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("application.error.empty"),l=>l&&13===l.length||e.$t("application.error.length")]},null,8,["modelValue","label","rules"]),(0,t._)("div",p,[(0,t.Wm)(h,{modelValue:e.passportExpanded,"onUpdate:modelValue":l[8]||(l[8]=l=>e.passportExpanded=l),icon:"contact_page",label:e.$t("application.passport.title"),caption:e.$t("application.passport.description")},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{class:"bg-grey-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{filled:"",modelValue:e.passportNumber,"onUpdate:modelValue":l[5]||(l[5]=l=>e.passportNumber=l),label:e.$t("application.passport.number")+" *","lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("application.error.empty")]},null,8,["modelValue","label","rules"]),(0,t.Wm)(b,{filled:"",modelValue:e.passportExiredDate,"onUpdate:modelValue":l[7]||(l[7]=l=>e.passportExiredDate=l),mask:"date",label:e.$t("application.passport.expiredDate")+" *","lazy-rules":"",rules:["date"]},{append:(0,t.w5)((()=>[(0,t.Wm)(w,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{ref:"passportExiredDateRef",cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{modelValue:e.passportExiredDate,"onUpdate:modelValue":l[6]||(l[6]=l=>e.passportExiredDate=l)},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t.wy)((0,t.Wm)(g,{label:e.$t("application.close"),color:"primary",flat:""},null,8,["label"]),[[j]])])])),_:1},8,["modelValue"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","label"])])),_:1})])),_:1})])),_:1},8,["modelValue","label","caption"])]),(0,t._)("div",u,[(0,t.Wm)(_,{style:{width:"100%"},url:"http://localhost:4444/upload",label:e.$t("application.selfImage"),"auto-upload":"",multiple:"",accept:"image/*",onRejected:e.onRejected},null,8,["label","onRejected"])]),(0,t._)("div",s,[(0,t.Wm)(_,{style:{width:"100%"},url:"http://localhost:4444/upload",label:e.$t("application.housingDocument"),"auto-upload":"",multiple:"",accept:".pdf, image/*",onRejected:e.onRejected},null,8,["label","onRejected"])]),(0,t.Wm)(W,{modelValue:e.accept,"onUpdate:modelValue":l[9]||(l[9]=l=>e.accept=l),label:e.$t("application.termAndCond")},null,8,["modelValue","label"]),(0,t._)("div",d,[(0,t._)("div",null,[(0,t.Wm)(g,{label:e.$t("application.submit"),type:"submit",color:"primary",loading:e.submitting},{loading:(0,t.w5)((()=>[(0,t.Wm)(q)])),_:1},8,["label","loading"]),(0,t.Wm)(g,{label:e.$t("application.reset"),type:"reset",color:"primary",flat:"",class:"q-ml-sm"},null,8,["label"])]),(0,t._)("div",null,[(0,t.Wm)(g,{label:e.$t("application.save"),type:"submit",color:"primary",loading:e.submitting},{loading:(0,t.w5)((()=>[(0,t.Wm)(q)])),_:1},8,["label","loading"])])])])),_:1},8,["onSubmit","onReset"])])])),_:1})}var m=a(1959),c=a(8825),b=a(5948);const g=(0,t.aZ)({name:"Application",setup(){const e=(0,c.Z)(),l=(0,b.QT)(),a=(0,m.iH)(null),t=(0,m.iH)(null),o=(0,m.iH)(null),i=(0,m.iH)(null),p=(0,m.iH)(null),n=(0,m.iH)(null),u=(0,m.iH)(!1),s=(0,m.iH)(null),d=(0,m.iH)(!1),r=(0,m.iH)(null),g=(0,m.iH)(!1);return{firstName:a,lastName:t,dob:o,idCard:i,passportExiredDate:p,passportNumber:n,accept:u,dobRef:s,passportExpanded:d,passportExiredDateRef:r,submitting:g,checkFileType(e){return e.filter((e=>["image/jpg","image/jpeg","image/png"].includes(e.type)))},onRejected(){e.notify({type:"negative",message:l.t("application.error.upload")})},onSubmit(){u.value?(g.value=!0,setTimeout((()=>{e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:l.t("application.submitted")}),g.value=!1}),3e3)):e.notify({color:"red-5",textColor:"white",icon:"warning",message:l.t("application.failToSubmit")})},onReset(){a.value=null,t.value=null,o.value=null,i.value=null,p.value,n.value=null,u.value=!1}}}});var f=a(4260),y=a(4379),w=a(5269),V=a(4842),v=a(4554),h=a(3944),_=a(643),W=a(4607),q=a(4615),$=a(151),x=a(5589),j=a(3768),Z=a(8886),Q=a(8506),R=a(677),C=a(7518),E=a.n(C);const H=(0,f.Z)(g,[["render",r]]),N=H;E()(g,"components",{QPage:y.Z,QForm:w.Z,QInput:V.Z,QIcon:v.Z,QPopupProxy:h.Z,QDate:_.Z,QBtn:W.Z,QExpansionItem:q.Z,QCard:$.Z,QCardSection:x.Z,QUploader:j.Z,QToggle:Z.Z,QSpinnerIos:Q.Z}),E()(g,"directives",{ClosePopup:R.Z})}}]);