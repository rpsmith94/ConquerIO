"use strict";(self.webpackChunkquant_docs=self.webpackChunkquant_docs||[]).push([[6779],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,v=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?i.createElement(v,a(a({ref:t},d),{},{components:n})):i.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={id:"content",title:"Managing content and revisions",sidebar_label:"Content and revisions"},s=void 0,c={unversionedId:"dashboard/content",id:"dashboard/content",title:"Managing content and revisions",description:"Managing content and revisions is a fundamental part of the Quant offering. Revisions will automatically be created when content change is detected.",source:"@site/docs/dashboard/content.md",sourceDirName:"dashboard",slug:"/dashboard/content",permalink:"/docs/dashboard/content",draft:!1,editUrl:"https://github.com/quantcdn/docs/tree/develop/docs/dashboard/content.md",tags:[],version:"current",frontMatter:{id:"content",title:"Managing content and revisions",sidebar_label:"Content and revisions"},sidebar:"someSidebar",previous:{title:"Get started",permalink:"/docs/dashboard/get-started"},next:{title:"Domains and SSL",permalink:"/docs/dashboard/domains"}},d={},u=[{value:"Managing revisions",id:"managing-revisions",level:2},{value:"View revisions",id:"view-revisions",level:3},{value:"Delete revision",id:"delete-revision",level:3},{value:"Unpublish content",id:"unpublish-content",level:3},{value:"Restore revision",id:"restore-revision",level:3},{value:"Editing or creating new content",id:"editing-or-creating-new-content",level:2},{value:"Using the WYSIWYG editor",id:"using-the-wysiwyg-editor",level:3},{value:"Using the Code editor",id:"using-the-code-editor",level:3}],p={toc:u},h="wrapper";function v(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)(h,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Managing content and revisions is a fundamental part of the Quant offering. Revisions will automatically be created when content change is detected."),(0,r.kt)("p",null,'The "Content" section of the dashboard will provide a full view of all content in the Quant platform. This table will allow for searching and sorting content and displaying the URL, last modified date/time, published status, and revision count.'),(0,r.kt)("p",null,'Click the "View" button to load the URL on the preview domain.'),(0,r.kt)("p",null,'The equivalent can be found for files and media in the "Files & Media" section.'),(0,r.kt)("h2",{id:"managing-revisions"},"Managing revisions"),(0,r.kt)("h3",{id:"view-revisions"},"View revisions"),(0,r.kt)("p",null,'Click on the "View Revisions" button to load the revisions viewer for any piece of content in Quant.'),(0,r.kt)("p",null,"The revisions viewer will allow you to go back in time and view any historic content revision. Metadata values for ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"author_name")," will display if they were provided when the content revision was pushed. Similarly if content had a publish schedule attached it will display in the revision detail."),(0,r.kt)("h3",{id:"delete-revision"},"Delete revision"),(0,r.kt)("p",null,'Provided you have access you may also delete individual revisions from this interface. Click the "Delete revision" button to permanently remove the revision content.'),(0,r.kt)("p",null,"You will be prompted to confirm deletion. This process is not reversible and content is deleted immediately."),(0,r.kt)("h3",{id:"unpublish-content"},"Unpublish content"),(0,r.kt)("p",null,'Click on the "Unpublish" button with the currently published revision selected. This will mark the content as unpublished, and immediately start throwing 404 errors to site visitors.'),(0,r.kt)("p",null,"You will be prompted to confirm the change."),(0,r.kt)("h3",{id:"restore-revision"},"Restore revision"),(0,r.kt)("p",null,'Select any historic revision and click the "Publish revision" button to mark this revision as actively published. This will replace any currently published revision. The content will be immediately available to site visitors.'),(0,r.kt)("p",null,"You will be prompted to confirm the change."),(0,r.kt)("h2",{id:"editing-or-creating-new-content"},"Editing or creating new content"),(0,r.kt)("p",null,'In some instances you may wish to create or edit content directly via the Quant Dashboard. To do this click the "Edit" button next to any content item in the table.'),(0,r.kt)("p",null,"From here you have two options: WYSIWYG or Code editor."),(0,r.kt)("h3",{id:"using-the-wysiwyg-editor"},"Using the WYSIWYG editor"),(0,r.kt)("p",null,"The WYSIWYG editor (built with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/artf/grapesjs"},"Grapes.js"),") attempts to load all assets in a full visual representation. This process may not be perfect, it is likely to fail if the page has a lot of JavaScript requirements that do not render correctly in the inline frame."),(0,r.kt)("p",null,"If the content is too complex, or this process fails, then please use the Code editor."),(0,r.kt)("p",null,"Simply click on any element in the page to edit. Text can be edited directly, and attributes such as classes, id, and simple style options (width, margin, padding, font, etc) can be edited using the panel on the right."),(0,r.kt)("p",null,'For finer grained control you can edit the markup directly by clicking the "Edit Code" button in the top toolbar.'),(0,r.kt)("p",null,'Once you are happy with content change click the "Save" icon and provide a path for the content .'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'You can create an entirely new page by editing a page, then enter a new URL after clicking the "Save" button. This is especially useful when you have content templates to use as a base.')),(0,r.kt)("h3",{id:"using-the-code-editor"},"Using the Code editor"),(0,r.kt)("p",null,"There is a fully fledged Code editor (using the ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco")," editor) built in for more advanced content editing."),(0,r.kt)("p",null,'To open the tool panel press the "F1" key on your keyboard.'),(0,r.kt)("p",null,'To save press "F1" and search for the "Save (new published revision)" action.'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'You can create an entirely new page by editing a page, then enter a new URL after running the "Save (new published revision)" action. This is especially useful when you have content templates to use as a base.')))}v.isMDXComponent=!0}}]);