import{_ as a}from"./wd-icon.av9Pe6hJ.js";import{u as t,r as e,br as s,bs as r,bt as l,d as i,e as n,f as o,h as c,F as u,bo as d,n as g,o as m,i as p,aE as f,t as _,v as h,bp as j,A as w,D as v,p as b,s as y,E as k}from"./index-B2xpwpwA.js";import{r as x}from"./uni-app.es.DSnRb9Bl.js";import{_ as C}from"./wd-navbar.Cm5X2aH8.js";import{_ as F}from"./wd-gap.BTJcE1Vl.js";import{_ as A}from"./history.BEd1wJ1N.js";import{_ as E}from"./arrow-right.CUcqDX27.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./props.3mmIwxF7.js";const z=I({__name:"withdrawal",setup(I){const{t:z}=t(),D=e([{img:"/static/icons/bank-card.png",name:z("recharge.currency"),navigateFn:s,judge:!1},{img:"/static/icons/digital-currency.png",name:z("recharge.digitalCurrency"),navigateFn:r,judge:!1},{img:"/static/icons/wallet.png",name:z("recharge.wallet"),navigateFn:l,judge:!1}]);return d({support_type:1}).then((a=>{for(let t=0;t<a.data.length;t++)"legal_currency"===a.data[t]&&(D.value[0].judge=!0),"digital_currency"===a.data[t]&&(D.value[1].judge=!0),"purse"===a.data[t]&&(D.value[2].judge=!0)})),(t,e)=>{const s=x(i("wd-icon"),a),r=g,l=v,d=x(i("wd-navbar"),C),I=x(i("wd-gap"),F),z=k;return m(),n(u,null,[o(d,{safeAreaInsetTop:"",title:"",bordered:!1,"custom-style":"background-color: #121317;"},{left:c((()=>[o(s,{name:"thin-arrow-left",size:"28rpx",color:"#fff",onClick:p(f)},null,8,["onClick"])])),title:c((()=>[o(r,{class:"text-eee-17"},{default:c((()=>[_(h(t.$t("withdrawal")),1)])),_:1})])),right:c((()=>[o(l,{class:"right-icon",src:A,onClick:e[0]||(e[0]=a=>p(j)({type:!0}))})])),_:1}),o(I,{"bg-color":"#121317",height:"30rpx"}),o(r,null,{default:c((()=>[(m(!0),n(u,null,w(D.value,((a,t)=>(m(),b(r,{key:t},{default:c((()=>[a.judge?(m(),b(r,{key:0,class:"list",onClick:a.navigateFn},{default:c((()=>[o(r,{class:"list-item"},{default:c((()=>[o(r,{class:"list-item-left"},{default:c((()=>[o(r,{class:"list-item-left-icon"},{default:c((()=>[o(l,{src:a.img,mode:""},null,8,["src"])])),_:2},1024),o(r,{class:"list-item-left-text"},{default:c((()=>[o(z,null,{default:c((()=>[_(h(a.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{src:E,mode:"",class:"list-item-right"})])),_:2},1024)])),_:2},1032,["onClick"])):y("",!0)])),_:2},1024)))),128))])),_:1})],64)}}},[["__scopeId","data-v-970a13c5"]]);export{z as default};
