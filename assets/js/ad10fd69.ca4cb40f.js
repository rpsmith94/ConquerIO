"use strict";(self.webpackChunkquant_docs=self.webpackChunkquant_docs||[]).push([[7773],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4937:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],l={id:"page-rules-waf",title:"Web Application Firewall (WAF)",sidebar_label:"Web Application Firewall (WAF)"},s=void 0,p={unversionedId:"dashboard/page-rules-waf",id:"dashboard/page-rules-waf",title:"Web Application Firewall (WAF)",description:"The Quant Web Application Firewall has full support for the latest OWASP Core Rule Set, as well as support for integrated Project Honeypot, bot protection, rate limiting, and geo controls.",source:"@site/docs/dashboard/page-rules-waf.md",sourceDirName:"dashboard",slug:"/dashboard/page-rules-waf",permalink:"/ConquerIO/docs/dashboard/page-rules-waf",draft:!1,editUrl:"https://github.com/quantcdn/docs/tree/develop/docs/dashboard/page-rules-waf.md",tags:[],version:"current",frontMatter:{id:"page-rules-waf",title:"Web Application Firewall (WAF)",sidebar_label:"Web Application Firewall (WAF)"},sidebar:"someSidebar",previous:{title:"CDN Proxy",permalink:"/ConquerIO/docs/dashboard/page-rules-proxy"},next:{title:"Crawler",permalink:"/ConquerIO/docs/dashboard/crawler"}},d={},c=[{value:"Enable WAF",id:"enable-waf",level:2},{value:"Rules and overrides",id:"rules-and-overrides",level:2},{value:"Block dictionaries",id:"block-dictionaries",level:2},{value:"Http:BL (Project Honeypot)",id:"httpbl-project-honeypot",level:2},{value:"Rate limiting",id:"rate-limiting",level:2},{value:"IP rate limiting",id:"ip-rate-limiting",level:3},{value:"Request header rate limiting",id:"request-header-rate-limiting",level:3},{value:"Custom 403 error pages",id:"custom-403-error-pages",level:2},{value:"Log viewer",id:"log-viewer",level:2}],u={toc:c},h="wrapper";function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,n.kt)(h,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Quant Web Application Firewall has full support for the latest OWASP Core Rule Set, as well as support for integrated Project Honeypot, bot protection, rate limiting, and geo controls."),(0,n.kt)("p",null,"It may be enabled with granular controls on each domain/route configured to proxy back to your origin server."),(0,n.kt)("h2",{id:"enable-waf"},"Enable WAF"),(0,n.kt)("p",null,'To enable the WAF, simply tick the "Enable WAF" checkbox on any proxy configuration.'),(0,n.kt)("p",null,"Set the WAF to either ",(0,n.kt)("strong",{parentName:"p"},"Report")," or ",(0,n.kt)("strong",{parentName:"p"},"Block")," mode to either report on WAF hits or block them."),(0,n.kt)("p",null,'Use the WAF level slider to change the level of strictness enforced by the WAF. This equates to the ModSecurity Core Rule Set "Paranoia" levels associated with each rule. The default and recommended level is 1.'),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When enabling the WAF it is recommended you start in ",(0,n.kt)("strong",{parentName:"p"},"Report")," mode for a period to monitor WAF hits and find and remove false positives through standard browsing behavior. Once you are satisfied you are no longer receiving false positives, move to ",(0,n.kt)("strong",{parentName:"p"},"Block")," mode.")),(0,n.kt)("h2",{id:"rules-and-overrides"},"Rules and overrides"),(0,n.kt)("p",null,'Use the "Rules and overrides" section to disable certain WAF rules, block (or allow) certain IP addresses or ranges, and block based on ',(0,n.kt)("inlineCode",{parentName:"p"},"User-Agent")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Referer")," headers."),(0,n.kt)("p",null,'Use the "Always allow from IPs" to allow trusted users or networks to bypass the WAF.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rules and overrides example",src:o(8268).Z,width:"1081",height:"785"})),(0,n.kt)("h2",{id:"block-dictionaries"},"Block dictionaries"),(0,n.kt)("p",null,"Enable block dictionaries to block known bad bots, user-agents, referers and IP addresses associated with bad actors as seen across our network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," We consider these safe to enable, however keep an eye on the WAF hits to ensure you are not inadvertently blocking a crawler or bot you may want to allow. These dictionaries may be overridden if you need further control, contact support for further assistance."),(0,n.kt)("h2",{id:"httpbl-project-honeypot"},"Http:BL (Project Honeypot)"),(0,n.kt)("p",null,"If you are a member of Project Honeypot and have a valid API key you may integrate directly with the Http:BL service. From the Http:BL ",(0,n.kt)("a",{parentName:"p",href:"https://www.projecthoneypot.org/httpbl.php"},"overview page"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Http:BL is a system that allows website administrators to take advantage of the data generated by Project Honey Pot in order to keep suspicious and malicious web robots off their sites. Project Honey Pot tracks harvesters, comment spammers, and other suspicious visitors to websites. Http:BL makes this data available to any member of Project Honey Pot in an easy and efficient way.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Project Honeypot",src:o(9584).Z,width:"361",height:"355"})),(0,n.kt)("p",null,"These options protect against known harvesters, bots, spammers and other malicious actors as picked up by the Project Honeypot network of spam traps."),(0,n.kt)("h2",{id:"rate-limiting"},"Rate limiting"),(0,n.kt)("p",null,"Rate limiting options are a powerful protection against high traffic events."),(0,n.kt)("h3",{id:"ip-rate-limiting"},"IP rate limiting"),(0,n.kt)("p",null,"IP rate limiting is useful to prevent attacks or excessive traffic from individuals, bots and crawlers. Set the mode to either ",(0,n.kt)("strong",{parentName:"p"},"Report")," or ",(0,n.kt)("strong",{parentName:"p"},"Enabled")," to toggle between report and blocking modes."),(0,n.kt)("p",null,"Next, specify a RPS (requests per second) threshold in seconds, as well as a cool-down period in seconds. The user will be receive a ",(0,n.kt)("inlineCode",{parentName:"p"},"429: Too Many Requests")," response during the cool-down period, and this traffic will be kept away from your origin server."),(0,n.kt)("h3",{id:"request-header-rate-limiting"},"Request header rate limiting"),(0,n.kt)("p",null,"You may also use rate limiting grouped by a request header. This can be used on an API service for instance to limit requests by a known group (for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"X-API-Organization"),"), or any other identifier as seen in the request headers."),(0,n.kt)("p",null,"As with IP rate limiting you may set the RPS threshold and cool-down period to control the traffic."),(0,n.kt)("h2",{id:"custom-403-error-pages"},"Custom 403 error pages"),(0,n.kt)("p",null,"When a request is blocked by the WAF you may wish to display a custom 403 page explaining why, and allowing them an avenue to contact you if they feel the block is a false positive."),(0,n.kt)("p",null,"Create a new static page at the ",(0,n.kt)("inlineCode",{parentName:"p"},"/_quant_waf_403")," route. You may wish to use the WYSIWYG or Code editors to do this, see the ",(0,n.kt)("a",{parentName:"p",href:"./content"},"Content section")," for more detail."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please allow up to 30 minutes for changes to the custom 403 page to display to end users.")),(0,n.kt)("h2",{id:"log-viewer"},"Log viewer"),(0,n.kt)("p",null,"The last 30 days of WAF hits are stored and can be viewed directly via the log viewer in the Quant Dashboard."),(0,n.kt)("p",null,"Navigate to the Security & WAF > WAF Logs section to access the log viewer."),(0,n.kt)("p",null,"You may optionally filter logs by IP address, Location, Rule type, Mode (Report vs. Block), Rule ID, Domain, and URL."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Log viewer",src:o(1355).Z,width:"2866",height:"1194"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Advanced log forwarding options are available. If you require logs forwarded to your own logging platform please contact your support representative.")))}m.isMDXComponent=!0},9584:function(e,t,o){t.Z=o.p+"assets/images/waf-httpbl-014cbe04fe6711d8019a9b9302032990.png"},1355:function(e,t,o){t.Z=o.p+"assets/images/waf-log-viewer-6a99eff881855a88db101d61bce40ede.png"},8268:function(e,t,o){t.Z=o.p+"assets/images/waf-rules-overrides-8e23832f11a72337529d30106b40fc50.png"}}]);