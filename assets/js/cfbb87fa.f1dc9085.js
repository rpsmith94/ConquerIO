"use strict";(self.webpackChunkquant_docs=self.webpackChunkquant_docs||[]).push([[4201],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8126:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"search",title:"Enable Quant Search",sidebar_label:"Search"},s=void 0,c={unversionedId:"dashboard/search",id:"dashboard/search",title:"Enable Quant Search",description:"Overview",source:"@site/docs/dashboard/search.md",sourceDirName:"dashboard",slug:"/dashboard/search",permalink:"/ConquerIO/docs/dashboard/search",draft:!1,editUrl:"https://github.com/quantcdn/docs/tree/develop/docs/dashboard/search.md",tags:[],version:"current",frontMatter:{id:"search",title:"Enable Quant Search",sidebar_label:"Search"},sidebar:"someSidebar",previous:{title:"Custom headers",permalink:"/ConquerIO/docs/dashboard/custom-http-headers"},next:{title:"Forms",permalink:"/ConquerIO/docs/dashboard/forms"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Search subscription",id:"search-subscription",level:2},{value:"Enable search on the project",id:"enable-search-on-the-project",level:2},{value:"Configuring search",id:"configuring-search",level:2},{value:"Content extractors",id:"content-extractors",level:3},{value:"Faceting",id:"faceting",level:3},{value:"WordPress",id:"wordpress",level:4},{value:"Drupal",id:"drupal",level:4},{value:"Creating search pages",id:"creating-search-pages",level:2},{value:"Search filters",id:"search-filters",level:3},{value:"Advanced layout/display override",id:"advanced-layoutdisplay-override",level:3}],d={toc:p},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Quant Search is an optional service that will allow you to create and maintain search pages with minimal effort."),(0,o.kt)("p",null,"When search is enabled on a project all content change will automatically be tracked in the search index. Similarly when content is unpublished or deleted it will be removed from the index."),(0,o.kt)("h2",{id:"search-subscription"},"Search subscription"),(0,o.kt)("p",null,"Search is a bolt-on subscription which can be managed on a per account/organization basis, meaning a single search subscription can be used for all projects within an account."),(0,o.kt)("p",null,'Navigate to the "Subscription" section of the Dashboard and click "Change plan" in the Search section to add or update a subscription.'),(0,o.kt)("h2",{id:"enable-search-on-the-project"},"Enable search on the project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to the "Projects" section of the dashboard'),(0,o.kt)("li",{parentName:"ol"},'Click "Edit" on any project you wish to enable search on'),(0,o.kt)("li",{parentName:"ol"},'Check the "Enable Search" checkbox and save')),(0,o.kt)("h2",{id:"configuring-search"},"Configuring search"),(0,o.kt)("p",null,"Once enabled, search can be configured on a per-project basis."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to the "Search" section" of the dashboard'),(0,o.kt)("li",{parentName:"ol"},'Click the "Edit" button to configure search')),(0,o.kt)("h3",{id:"content-extractors"},"Content extractors"),(0,o.kt)("p",null,"Quant will extract content from your markup to structure for search. The default structure for a search record:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title"),": The page title (the first ",(0,o.kt)("inlineCode",{parentName:"li"},"h1")," on a page by default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"content"),": The content associated with the record (the meta ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," value by default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"image"),": Optional URL containing an image (the meta ",(0,o.kt)("inlineCode",{parentName:"li"},"og:image")," value by default)")),(0,o.kt)("p",null,"These values can be altered using xpath selectors. If these xpath selectors are configured incorrectly records may not appear in search."),(0,o.kt)("p",null,"If you need assistance configuring xpath selectors for your site, please contact support."),(0,o.kt)("h3",{id:"faceting"},"Faceting"),(0,o.kt)("p",null,"If you are using the Drupal or WordPress plugins Quant will automatically know about tags, categories, content type and custom taxonomy terms attached to content."),(0,o.kt)("p",null,"This can be used to expose facets (user-selectable filters) on your search pages."),(0,o.kt)("h4",{id:"wordpress"},"WordPress"),(0,o.kt)("p",null,"WordPress will automatically populate the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tags")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"categories")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"content_type"))),(0,o.kt)("p",null,"Including these facet values will enable filtering on these values."),(0,o.kt)("h4",{id:"drupal"},"Drupal"),(0,o.kt)("p",null,"Drupal will automatically populate ",(0,o.kt)("inlineCode",{parentName:"p"},"content_type")," for any nodes, but also include any taxonomy terms attached to a node."),(0,o.kt)("p",null,"To include taxonomies in your facet list simply add any vocabulary machine name in the facet list."),(0,o.kt)("h2",{id:"creating-search-pages"},"Creating search pages"),(0,o.kt)("p",null,"Search pages can be created via the Quant dashboard."),(0,o.kt)("p",null,"These search pages can generate functional search pages with a single click, allowing customize facets, content filters, templates and design."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to the "Search" section of the dashboard'),(0,o.kt)("li",{parentName:"ol"},'Click "Create" under the search pages section'),(0,o.kt)("li",{parentName:"ol"},"Choose from on of the predefined templates"),(0,o.kt)("li",{parentName:"ol"},"Enter a search URL, and optional page title/sub-title"),(0,o.kt)("li",{parentName:"ol"},"Optionally choose facets to include for display"),(0,o.kt)("li",{parentName:"ol"},'Optionally filter the result set (see "Filtering" below)'),(0,o.kt)("li",{parentName:"ol"},"In the design section optionally choose facet position, tag display options, and provide custom CSS")),(0,o.kt)("h3",{id:"search-filters"},"Search filters"),(0,o.kt)("p",null,"Search filters can be applied to limit the content being displayed on a search page. Use this to restrict the search results to a subset of your content."),(0,o.kt)("p",null,"You may enter as many filters you like, some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'content_type:"recipe"'),': Restrict all results to those with a content type of "recipe"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'recipe_category:"Vegetarian" OR recipe_category:"Vegan"'),": Restrict all results to recipes that have certain categories/tags assigned")),(0,o.kt)("p",null,"Use a combination of these filters to create dynamic listing pages, or subsets of search results as desired."),(0,o.kt)("h3",{id:"advanced-layoutdisplay-override"},"Advanced layout/display override"),(0,o.kt)("p",null,"Quant will generate content for any search pages made through the Dashboard."),(0,o.kt)("p",null,'For complex use cases, or modifying the layout and styling you may edit this content directly from the "Content" section of the dashboard via the Code editor.'))}m.isMDXComponent=!0}}]);