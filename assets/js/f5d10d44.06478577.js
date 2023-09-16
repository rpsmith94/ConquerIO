"use strict";(self.webpackChunkquant_docs=self.webpackChunkquant_docs||[]).push([[7158],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={slug:"custom-404",title:"Create custom 404 error page",sidebar_label:"Customize 404 page"},l=void 0,c={unversionedId:"custom-404",id:"custom-404",title:"Create custom 404 error page",description:"Custom 404 pages are easy with Quant. Any content pushed to QuantCDN with the special /_quant404 route will become the active 404 page.",source:"@site/docs/custom-404.md",sourceDirName:".",slug:"/custom-404",permalink:"/docs/custom-404",draft:!1,editUrl:"https://github.com/quantcdn/docs/tree/develop/docs/custom-404.md",tags:[],version:"current",frontMatter:{slug:"custom-404",title:"Create custom 404 error page",sidebar_label:"Customize 404 page"},sidebar:"someSidebar",previous:{title:"Go-live process",permalink:"/docs/golive"},next:{title:"Get started",permalink:"/docs/integrations/overview"}},s={},p=[{value:"WordPress",id:"wordpress",level:2},{value:"Drupal",id:"drupal",level:2},{value:"Static Generators",id:"static-generators",level:2},{value:"Create via the Quant Dashboard",id:"create-via-the-quant-dashboard",level:2}],d={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Custom 404 pages are easy with Quant. Any content pushed to QuantCDN with the special ",(0,o.kt)("inlineCode",{parentName:"p"},"/_quant404")," route will become the active 404 page."),(0,o.kt)("p",null,"Note: The content of this page may be cached for up to 30 minutes. Please allow time for changes to display."),(0,o.kt)("h2",{id:"wordpress"},"WordPress"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set the 404 page in QuantCDN settings (Settings > QuantCDN) - for example ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to/404-page"),"."),(0,o.kt)("li",{parentName:"ol"},"Ensure the 404 page is pushed into Quant (Batches > Custom routes and 404 page)"),(0,o.kt)("li",{parentName:"ol"},"From now on any change to the 404 page content will automatically update the 404 error page in QuantCDN")),(0,o.kt)("h2",{id:"drupal"},"Drupal"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure the 404 configuration is set in Drupal (Configuration > Site Information > Default 404 page)"),(0,o.kt)("li",{parentName:"ol"},"When the node is updated or a seed takes places the 404 page will be updated")),(0,o.kt)("h2",{id:"static-generators"},"Static Generators"),(0,o.kt)("p",null,"Ensure you have content under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/_quant404")," path (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/_quant404/index.html"),") before running ",(0,o.kt)("inlineCode",{parentName:"p"},"quant deploy"),"."),(0,o.kt)("h2",{id:"create-via-the-quant-dashboard"},"Create via the Quant Dashboard"),(0,o.kt)("p",null,"You can also create custom 404 content directly via the Quant Dashboard using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/dashboard/content#editing-or-creating-new-content"},"WYSIWYG or Code editors"),". Remember to save under the special ",(0,o.kt)("inlineCode",{parentName:"p"},"_quant404")," route."))}f.isMDXComponent=!0}}]);