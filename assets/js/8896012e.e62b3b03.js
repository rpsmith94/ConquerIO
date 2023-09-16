"use strict";(self.webpackChunkquant_docs=self.webpackChunkquant_docs||[]).push([[6724],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:e},c),{},{components:n})):r.createElement(g,l({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[p]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2023:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Managing the firewall",sidebar_label:"Manage"},u=void 0,s={unversionedId:"security/waf/management",id:"security/waf/management",title:"Managing the firewall",description:"The web application firewall that is provided by Quant uses industry best practices as a starting position to help you portect your origin servers.",source:"@site/docs/security/waf/management.md",sourceDirName:"security/waf",slug:"/security/waf/management",permalink:"/docs/security/waf/management",draft:!1,editUrl:"https://github.com/quantcdn/docs/tree/develop/docs/security/waf/management.md",tags:[],version:"current",frontMatter:{title:"Managing the firewall",sidebar_label:"Manage"},sidebar:"someSidebar",previous:{title:"Get started",permalink:"/docs/security/waf/get-started"},next:{title:"911xxx",permalink:"/docs/security/waf/crs/910"}},c={},p=[{value:"Identifying breaches",id:"identifying-breaches",level:2}],d={toc:p},m="wrapper";function g(t){var e=t.components,o=(0,a.Z)(t,l);return(0,i.kt)(m,(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The web application firewall that is provided by Quant uses industry best practices as a starting position to help you portect your origin servers."),(0,i.kt)("p",null,"This configuration makes attempts to account for various types of common usage patterns \u2014 however it will not take into consideration architecture decisions that have been made for your application."),(0,i.kt)("p",null,"When enabling the WAF you need to ensure that you can identify blocks and add exceptions. This will allow you to tune the WAF to meet your requirements."),(0,i.kt)("h2",{id:"identifying-breaches"},"Identifying breaches"),(0,i.kt)("p",null,"When the WAF blocks a request it will create a log message identifying which rule has been breached. These logs can be accessed from your ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.quantcdn.io/security/waf-log"},"Quant Dashboard"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quant WAF logs",src:n(7301).Z,width:"1956",height:"1034"})),(0,i.kt)("p",null,"Each log entry will include the following information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,i.kt)("td",{parentName:"tr",align:null},"10.0.0.1"),(0,i.kt)("td",{parentName:"tr",align:null},"The requests originating IP address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Location"),(0,i.kt)("td",{parentName:"tr",align:null},"AU"),(0,i.kt)("td",{parentName:"tr",align:null},"The geolocation of the IP address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"waf"),(0,i.kt)("td",{parentName:"tr",align:null},"Which type of block was triggered")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"report"),(0,i.kt)("td",{parentName:"tr",align:null},"The mode that the WAF was operatiing in when triggered")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rule ID"),(0,i.kt)("td",{parentName:"tr",align:null},"93210"),(0,i.kt)("td",{parentName:"tr",align:null},"The ruleset rule id that triggered the block")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Domain"),(0,i.kt)("td",{parentName:"tr",align:null},"test.com"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain that triggered the WAF")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"/home"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL path that was restricted")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:null},"GET"),(0,i.kt)("td",{parentName:"tr",align:null},"The request method that was used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User agent"),(0,i.kt)("td",{parentName:"tr",align:null},"python-requests"),(0,i.kt)("td",{parentName:"tr",align:null},"The user agent of the connecting client")))),(0,i.kt)("p",null,"The logs can be used when tuning the WAF and the request details can be used in the configuration of the WAF rule to allow/disallow the request pattern."))}g.isMDXComponent=!0},7301:function(t,e,n){e.Z=n.p+"assets/images/dashboard-loc-1157a9314b5bf9fbd0f0fc9c59ca01cb.png"}}]);