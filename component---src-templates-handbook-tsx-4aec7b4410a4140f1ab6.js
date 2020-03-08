(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8u4N":function(e,t,u){"use strict";u.r(t);u("T7D0"),u("rmZQ");var D=u("ERkP"),i=u.n(D),r=u("9Dj+"),n=(u("PN9k"),u("KI7T"),u("Wbzz")),a=(u("Pdbz"),u("XjK0"),u("SCO9"),u("LnO1"),function(e,t){var u,D=t.children,i=Array.isArray(D),r=0;for(D=i?D:D[Symbol.iterator]();;){var n;if(i){if(r>=D.length)break;n=D[r++]}else{if((r=D.next()).done)break;n=r.value}var a=n;a.nodeName===e.toUpperCase()&&(u=a)}if(!u)throw new Error("Could not find a "+e+" in the children of "+t.tagName);return u}),l=function(e){var t=d("li",e.target);if(38==e.keyCode){var u=t.previousElementSibling;if(u)a("a",u).focus();else{var D=d("li",t);a("button",D).focus()}e.preventDefault()}if(40===e.keyCode){var i=t.nextElementSibling;if(i)a("a",i).focus();else{var r=d("li",t).nextElementSibling;a("button",r).focus()}e.preventDefault()}},o=function(e){var t=d("li",e.target);if(38==e.keyCode){var u=t.previousElementSibling;if(!u)return;if(u.classList.contains("open")){var D=a("ul",u).lastElementChild;a("a",D).focus()}else a("button",u).focus();e.preventDefault()}if(40==e.keyCode){if(t.classList.contains("open")){var i=a("ul",t).firstElementChild;a("a",i).focus()}else{var r=t.nextElementSibling;r&&a("button",r).focus()}e.preventDefault()}39==e.keyCode&&(t.classList.remove("closed"),t.classList.add("open"),e.preventDefault()),37==e.keyCode&&(t.classList.remove("open"),t.classList.add("closed"),e.preventDefault())},s=i.a.createElement("svg",{fill:"none",height:"14",viewBox:"0 0 9 14",width:"9",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"m1 13 6-6-6-6",stroke:"#000",strokeWidth:"2"})),c=i.a.createElement("svg",{fill:"none",height:"9",viewBox:"0 0 14 9",width:"14",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"m1 1 6 6 6-6",stroke:"#000",strokeWidth:"2"})),d=function(e,t){for(var u=t.parentElement;u.nodeName!==e.toUpperCase();)if("BODY"===(u=u.parentElement).nodeName)throw new Error("Could not find parent LI for toggle ");return u},p=function(e){var t=d("li",e.target);t.classList.contains("open")?(t.classList.remove("open"),t.classList.add("closed")):(t.classList.remove("closed"),t.classList.add("open"))},E=function(){return i.a.createElement("button",{id:"small-device-button-sidebar",onClick:function(){var e=document.getElementById("sidebar");(null==e?void 0:e.classList.contains("show"))?null==e||e.classList.remove("show"):null==e||e.classList.add("show")}},i.a.createElement("svg",{fill:"none",height:"26",viewBox:"0 0 26 26",width:"26",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{fill:"#fff"},i.a.createElement("path",{d:"m0 1c0-.552285.447715-1 1-1h24c.5523 0 1 .447715 1 1v3h-26z"}),i.a.createElement("path",{d:"m0 11h13 13v4h-26z"}),i.a.createElement("path",{d:"m0 22h26v3c0 .5523-.4477 1-1 1h-24c-.552284 0-1-.4477-1-1z"}))))},F=function(e){return i.a.createElement("nav",{id:"sidebar"},i.a.createElement("ul",null,e.navItems.map((function(t){var u=t.items.find((function(t){return t.id===e.selectedID})),D=[];u?(D.push("open"),D.push("highlighted")):D.push("closed");var r={"aria-expanded":"true","aria-label":t.title+" close"},a={"aria-label":t.title+" expand"},d=u?r:a;return i.a.createElement("li",{className:D.join(" "),key:t.id},i.a.createElement("button",Object.assign({},d,{onClick:p,onKeyDown:o}),t.title,i.a.createElement("span",{className:"open"},c),i.a.createElement("span",{className:"closed"},s)),i.a.createElement("ul",null,t.items.map((function(u){var D={};u.id===e.selectedID&&(D["aria-current"]="page",D.className="highlight");var r="index"===u.id?"":u.id+".html",a="/docs/"+t.directory+"/"+r;return i.a.createElement("li",Object.assign({key:u.id},D),i.a.createElement(n.Link,{to:a,onKeyDown:l},u.title))}))))}))))},m=[{title:"Get Started",id:"get-started",directory:"handbook",index:"typescript-from-scratch",items:[{id:"typescript-from-scratch",title:"TS for the New Programmer"},{id:"typescript-in-5-minutes",title:"TS for JS Programmers"},{id:"typescript-in-5-minutes-oop",title:"TS for OOP Programmers "},{id:"typescript-in-5-minutes-func",title:"TS for Functional Programmers"},{id:"typescript-tooling-in-5-minutes",title:"Tooling in 5 minutes"}]},{title:"Handbook",id:"handbook",directory:"handbook",index:"/",items:[{id:"index",title:"What is the Handbook?"},{id:"basic-types",title:"Basic Types"},{id:"interfaces",title:"Interfaces"},{id:"classes",title:"Classes"},{id:"functions",title:"Functions"},{id:"enums",title:"Enums"},{id:"literal-types",title:"Literal Types"},{id:"unions-and-intersections",title:"Unions and Intersections"},{id:"generics",title:"Generics"}]},{title:"Handbook Reference",id:"handbook-reference",directory:"handbook",index:"the-handbook",items:[{id:"advanced-types",title:"Advanced Types"},{id:"declaration-merging",title:"Declaration Merging"},{id:"decorators",title:"Decorators"},{id:"iterators-and-generators",title:"Iterators and Generators"},{id:"jsx",title:"JSX"},{id:"mixins",title:"Mixins"},{id:"module-resolution",title:"Module Resolution"},{id:"modules",title:"Modules"},{id:"namespaces-and-modules",title:"Namespaces and Modules"},{id:"namespaces",title:"Namespaces"},{id:"symbols",title:"Symbols"},{id:"triple-slash-directives",title:"Triple-Slash Directives"},{id:"type-compatibility",title:"Type Compatibility"},{id:"type-inference",title:"Type Inference"},{title:"Type Checking JavaScript Files",id:"type-checking-javascript-files"},{id:"utility-types",title:"Global Utility Types"},{id:"variable-declarations",title:"Variable Declarations"}]},{title:"Tutorials",id:"tutorials",directory:"handbook",index:"typescript-in-5-minutes",items:[{id:"asp-net-core",title:"ASP.NET Core"},{id:"gulp",title:"Gulp"},{id:"migrating-from-javascript",title:"Migrating from JavaScript"},{id:"react-&-webpack",title:"React & Webpack"},{id:"dom-manipulation",title:"TypeScript & the DOM"}]},{title:"What's New",id:"whats-new",directory:"handbook/release-notes",index:"overview",items:[{id:"overview",title:"Overview"},{id:"typescript-3-8",title:"TypeScript 3.8"},{id:"typescript-3-7",title:"TypeScript 3.7"},{id:"typescript-3-6",title:"TypeScript 3.6"},{id:"typescript-3-5",title:"TypeScript 3.5"},{id:"typescript-3-4",title:"TypeScript 3.4"},{id:"typescript-3-3",title:"TypeScript 3.3"},{id:"typescript-3-2",title:"TypeScript 3.2"},{id:"typescript-3-1",title:"TypeScript 3.1"},{id:"typescript-3-0",title:"TypeScript 3.0"},{id:"typescript-2-9",title:"TypeScript 2.9"},{id:"typescript-2-8",title:"TypeScript 2.8"},{id:"typescript-2-7",title:"TypeScript 2.7"},{id:"typescript-2-6",title:"TypeScript 2.6"},{id:"typescript-2-5",title:"TypeScript 2.5"},{id:"typescript-2-4",title:"TypeScript 2.4"},{id:"typescript-2-3",title:"TypeScript 2.3"},{id:"typescript-2-2",title:"TypeScript 2.2"},{id:"typescript-2-1",title:"TypeScript 2.1"},{id:"typescript-2-0",title:"TypeScript 2.0"},{id:"typescript-1-8",title:"TypeScript 1.8"},{id:"typescript-1-7",title:"TypeScript 1.7"},{id:"typescript-1-6",title:"TypeScript 1.6"},{id:"typescript-1-5",title:"TypeScript 1.5"},{id:"typescript-1-4",title:"TypeScript 1.4"},{id:"typescript-1-3",title:"TypeScript 1.3"},{id:"typescript-1-1",title:"TypeScript 1.1"}]},{title:"Declaration Files",id:"declaration-files",directory:"handbook/declaration-files",index:"introduction",items:[{id:"introduction",title:"Introduction"},{id:"library-structures",title:"Library Structures"},{id:"by-example",title:"By Example"},{id:"do-s-and-don-ts",title:"Do's and Don'ts"},{id:"deep-dive",title:"Deep Dive"},{id:"templates",title:"Templates"},{id:"publishing",title:"Publishing"},{id:"consumption",title:"Consumption"}]},{title:"Project Configuration",id:"project-config",directory:"handbook",index:"compiler-options",items:[{id:"tsconfig-json",title:"tsconfig.json"},{id:"compiler-options",title:"Compiler Options"},{id:"project-references",title:"Project References"},{id:"compiler-options-in-msbuild",title:"Compiler Options in MSBuild"},{id:"integrating-with-build-tools",title:"Integrating with Build Tools"},{id:"configuring-watch",title:"Configuring Watch Mode"},{id:"nightly-builds",title:"Nightly Builds"}]}],f=u("GO2c"),C=u("LuC/"),h=u.n(C);u("Fc+c"),u("2oau");u.d(t,"pageQuery",(function(){return v}));var y=function(e){var t=e.data.markdownRemark;if(!t)return console.log("Could not render:",JSON.stringify(e)),i.a.createElement("div",null);Object(D.useEffect)((function(){var e=document.querySelectorAll("#handbook-content nav ul li a");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(e.target.hash).scrollIntoView({behavior:"smooth",block:"start"})}))}));var t=function(){var t,u=window.scrollY;e.forEach((function(e){try{var D=document.querySelector(e.hash);if(!D)return;D.offsetTop<=u&&(t=e)}catch(i){return}})),e.forEach((function(e){e===t?e.classList.add("current"):e.classList.remove("current")}))};return window.addEventListener("scroll",t,{passive:!0,capture:!0}),t(),function(){window.removeEventListener("scroll",t)}}));var u=e.pageContext;u.previous,u.next;if(!t.frontmatter)throw new Error("No front-matter found for the file with props: "+e);if(!t.html)throw new Error("No html found for the file with props: "+e);var n=t.frontmatter.permalink.split("/").pop().replace(".html","")||"index",a=!t.frontmatter.disable_toc&&t.headings&&t.headings.length&&t.headings.length<=30;return i.a.createElement(r.a,{title:"Handbook - "+t.frontmatter.title,description:t.frontmatter.oneline||"",lang:"en",allSitePage:e.data.allSitePage},i.a.createElement("section",{id:"doc-layout"},i.a.createElement(E,null),i.a.createElement(F,{navItems:m,selectedID:n}),i.a.createElement("div",{id:"handbook-content"},i.a.createElement("h2",null,t.frontmatter.title),i.a.createElement("article",null,i.a.createElement("div",{className:"whitespace raised"},i.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t.html}})),a&&i.a.createElement("aside",{className:"handbook-toc"},i.a.createElement("nav",null,i.a.createElement("h5",null,"On this page"),i.a.createElement("ul",null,t.headings.map((function(e){if(e.depth>2)return null;var t=h()().slug(e.value,!1);return i.a.createElement("li",{key:t},i.a.createElement("a",{href:"#"+t},e.value))})))))))))},v=(t.default=function(e){return i.a.createElement(f.a,{locale:e.pageContext.lang},i.a.createElement(y,e))},"232608133")},"LuC/":function(e,t,u){u("qCVI"),u("rmZQ"),u("RwQI");var D=u("mHBz");e.exports=a;var i=Object.hasOwnProperty,r=/\s/g,n=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;function a(){if(!(this instanceof a))return new a;this.reset()}a.prototype.slug=function(e,t){for(var u=function(e,t){if("string"!=typeof e)return"";t||(e=e.toLowerCase());return e.trim().replace(n,"").replace(D(),"").replace(r,"-")}(e,!0===t),a=u;i.call(this.occurrences,u);)this.occurrences[a]++,u=a+"-"+this.occurrences[a];return this.occurrences[u]=0,u},a.prototype.reset=function(){this.occurrences=Object.create(null)}},mHBz:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}}}]);
//# sourceMappingURL=component---src-templates-handbook-tsx-4aec7b4410a4140f1ab6.js.map