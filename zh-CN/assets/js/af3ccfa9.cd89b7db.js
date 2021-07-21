(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[1508],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,y=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1986:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={id:"Development_guide",title:"\u5f00\u53d1\u6307\u5357",sidebar_label:"\u5f00\u53d1\u6307\u5357"},o=void 0,p={unversionedId:"Development_guide",id:"Development_guide",isDocsHomePage:!1,title:"\u5f00\u53d1\u6307\u5357",description:"Alaya\u517c\u5bb9EVM\u548cWASM\u865a\u62df\u673a\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u9ad8\u7ea7\u8bed\u8a00\u6765\u7f16\u5199\u5408\u7ea6\u3002\u8fd9\u5927\u5927\u964d\u4f4e\u4e86\u7f16\u5199\u5408\u7ea6\u7684\u5b66\u4e60\u95e8\u69db\uff0c\u540c\u65f6\u63d0\u9ad8\u4e86\u5904\u7406\u5408\u7ea6\u4ea4\u6613\u7684\u6027\u80fd\u3002\u8be5\u7ae0\u8282\u7684\u6587\u6863\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5728Alaya\u7f51\u7edc\u4e0a\u5feb\u901f\u7f16\u5199\u3001\u90e8\u7f72\u3001\u8c03\u8bd5\u5408\u7ea6\uff0c\u5e76\u57fa\u4e8e\u5408\u7ea6\u5f00\u53d1\u5404\u7c7bDapp\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/Development_guide.md",sourceDirName:".",slug:"/Development_guide",permalink:"/alaya-devdocs/zh-CN/Development_guide",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/Development_guide.md",version:"current",frontMatter:{id:"Development_guide",title:"\u5f00\u53d1\u6307\u5357",sidebar_label:"\u5f00\u53d1\u6307\u5357"},sidebar:"docs",previous:{title:"Alaya\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/alaya-devdocs/zh-CN/Command_Line_Tools"},next:{title:"\u5f00\u53d1\u7f51\u7edc",permalink:"/alaya-devdocs/zh-CN/Join_the_dev_network"}},u=[{value:"\u4ec0\u4e48\u662fDapp?",id:"\u4ec0\u4e48\u662fdapp",children:[]},{value:"\u5982\u4f55\u5f00\u53d1Dapp?",id:"\u5982\u4f55\u5f00\u53d1dapp",children:[{value:"\u5f00\u53d1\u73af\u5883\u51c6\u5907",id:"\u5f00\u53d1\u73af\u5883\u51c6\u5907",children:[]},{value:"\u5408\u7ea6\u5f00\u53d1",id:"\u5408\u7ea6\u5f00\u53d1",children:[]},{value:"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1",id:"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1",children:[]},{value:"\u5982\u4f55\u53d1\u5e03PRC Token\uff1f",id:"\u5982\u4f55\u53d1\u5e03prc-token\uff1f",children:[]}]}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Alaya\u517c\u5bb9EVM\u548cWASM\u865a\u62df\u673a\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u9ad8\u7ea7\u8bed\u8a00\u6765\u7f16\u5199\u5408\u7ea6\u3002\u8fd9\u5927\u5927\u964d\u4f4e\u4e86\u7f16\u5199\u5408\u7ea6\u7684\u5b66\u4e60\u95e8\u69db\uff0c\u540c\u65f6\u63d0\u9ad8\u4e86\u5904\u7406\u5408\u7ea6\u4ea4\u6613\u7684\u6027\u80fd\u3002\u8be5\u7ae0\u8282\u7684\u6587\u6863\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5728Alaya\u7f51\u7edc\u4e0a\u5feb\u901f\u7f16\u5199\u3001\u90e8\u7f72\u3001\u8c03\u8bd5\u5408\u7ea6\uff0c\u5e76\u57fa\u4e8e\u5408\u7ea6\u5f00\u53d1\u5404\u7c7bDapp\u5e94\u7528\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662fdapp"},"\u4ec0\u4e48\u662fDapp?"),(0,l.kt)("p",null,"Dapp\uff0c\u5373Decentralized Application\uff0c\u662f\u6784\u5efa\u5728\u533a\u5757\u94fe\u4e0a\u7684\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5f00\u53d1dapp"},"\u5982\u4f55\u5f00\u53d1Dapp?"),(0,l.kt)("p",null,"\u4ece\u5f00\u53d1\u8005\u89d2\u5ea6\u51fa\u53d1\uff0cDapp\u5e94\u7528\u672c\u8d28\u4e0a\u662f\u548c\u5408\u7ea6\u4ea4\u4e92\u7684\u4e00\u4e2a\u8fc7\u7a0b\u3002\u53ef\u4ee5\u901a\u8fc7web\u7aef\u76f4\u63a5\u8c03\u7528\u5408\u7ea6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7SDKs\u548c\u5408\u7ea6\u4ea4\u4e92\u3002\u6574\u4e2a\u5f00\u53d1\u8fc7\u7a0b\u5927\u81f4\u5206\u4e3a\u5f00\u53d1\u73af\u5883\u51c6\u5907\u3001\u5408\u7ea6\u5f00\u53d1\u3001\u524d\u7aef\u548c\u540e\u53f0\u5f00\u53d1\u4e09\u5927\u8fc7\u7a0b\u3002"),(0,l.kt)("h3",{id:"\u5f00\u53d1\u73af\u5883\u51c6\u5907"},"\u5f00\u53d1\u73af\u5883\u51c6\u5907"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u5f00\u53d1\u9700\u8981\uff0c\u9009\u62e9\u4ee5\u4e0b\u51e0\u79cd\u73af\u5883\u534f\u52a9\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Private_network"},"\u79c1\u6709\u7f51\u7edc")," - \u5728\u672c\u5730\u642d\u5efa\u4e00\u4e2a\u79c1\u6709\u8282\u70b9\u6216\u8005\u7f51\u7edc\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u5f00\u53d1\u8c03\u8bd5\u672c\u5730\u5e94\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Join_the_dev_network"},"\u5f00\u53d1\u7f51\u7edc")," - \u63a5\u5165\u5230\u5f00\u53d1\u7f51\u7edc\u53ef\u4ee5\u5e2e\u52a9\u5728\u8f83\u4e3a\u5f00\u653e\u7684\u73af\u5883\u6d4b\u8bd5\u4f60\u7684\u4ee3\u7801\u3002")),(0,l.kt)("h3",{id:"\u5408\u7ea6\u5f00\u53d1"},"\u5408\u7ea6\u5f00\u53d1"),(0,l.kt)("h4",{id:"\u5f00\u53d1\u5de5\u5177"},"\u5f00\u53d1\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Alaya-Truffle"},"Alaya-Truffle")," - \u4e00\u4e2a\u652f\u6301 WASM \u548c Solidity \u7684\u5408\u7ea6\u5f00\u53d1\u6846\u67b6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/IDE"},"IDE")," - \u4e00\u4e2a\u652f\u6301 WASM \u548cSolidtiy \u7684\u754c\u9762\u5316\u5408\u7ea6\u5f00\u53d1\u5de5\u5177\u3002")),(0,l.kt)("h4",{id:"solidity-\u5408\u7ea6\u5f00\u53d1"},"Solidity \u5408\u7ea6\u5f00\u53d1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Solidity_Getting_started"},"\u5f00\u53d1\u5165\u95e8")," - \u4f60\u53ef\u4ee5\u4e86\u89e3\u5982\u4f55\u5728Alaya\u7f51\u7edc\u90e8\u7f72\u3001\u7f16\u8bd1\u3001\u53d1\u5e03\u3001\u8c03\u7528\u5408\u7ea6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Solidity_Best_practices"},"\u6700\u4f73\u5b9e\u8df5")," - \u5bf9\u4e8e\u5982\u4f55\u5408\u7406\u8bbe\u7f6e\u624b\u7eed\u8d39\uff0c\u5982\u4f55\u89c4\u907f\u56e0\u4ea4\u6613\u5931\u8d25\u6263\u9664\u624b\u7eed\u8d39\u7b49\u5408\u7ea6\u7f16\u5199\u89c4\u8303\u7684\u4ecb\u7ecd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Solidity_Development_costs"},"\u5f00\u53d1\u6210\u672c")," - \u4ecb\u7ecd\u5728Alaya\u4e0aSolidity\u5408\u7ea6\u90e8\u7f72\u8c03\u7528\u7684\u624b\u7eed\u8d39\u6210\u672c\u4ee5\u53ca\u548c\u4ee5\u592a\u574a\u624b\u7eed\u8d39\u7684\u5bf9\u6bd4\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Solidity_Contract_security"},"\u5b89\u5168\u6307\u5357")," - \u4ecb\u7ecd\u5982\u4f55\u63d0\u9ad8\u5408\u7ea6\u7684\u5b89\u5168\u6027"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Solidity_Migration_tutorial"},"\u5408\u7ea6\u8fc1\u79fb")," - \u9664\u4e86\u81ea\u5df1\u7f16\u5199\u5408\u7ea6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4ece\u4ee5\u592a\u574a\u6216\u5176\u4ed6\u652f\u6301Solidity\u5408\u7ea6\u7684\u516c\u94fe\u4e0a\u8fc1\u79fb\u5408\u7ea6\u5230Alaya\u7f51\u7edc")),(0,l.kt)("h4",{id:"wasm-\u5408\u7ea6\u5f00\u53d1"},"WASM \u5408\u7ea6\u5f00\u53d1"),(0,l.kt)("p",null,"WASM\u5408\u7ea6\u76ee\u524d\u53ea\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"C++"),"\u8bed\u8a00\u5f00\u53d1\uff0c\u4e5f\u6b22\u8fce\u5927\u5bb6\u7ee7\u7eed\u6269\u5c55\u5176\u4ed6\u4e3b\u6d41\u8bed\u8a00\u7684\u5408\u7ea6\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Wasm_Getting_started"},"\u5f00\u53d1\u5165\u95e8")," - \u4ecb\u7ecd\u5982\u4f55\u5728 Alaya \u4e0a\u7f16\u8bd1\u53d1\u5e03\u8c03\u7528 WASM \u5408\u7ea6 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Wasm_Development_costs"},"\u5f00\u53d1\u6210\u672c")," - \u4ecb\u7ecd\u5728 Alaya \u4e0a Wasm \u5408\u7ea6\u90e8\u7f72\u8c03\u7528\u7684\u624b\u7eed\u8d39\u6210\u672c\u4ee5\u53ca\u548c\u4ee5\u592a\u574a\u624b\u7eed\u8d39\u7684\u5bf9\u6bd4\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Wasm_Best_practices"},"\u6700\u4f73\u5b9e\u8df5")," - \u5bf9\u4e8e\u5982\u4f55\u5408\u7406\u8bbe\u7f6e\u624b\u7eed\u8d39\uff0c\u5982\u4f55\u89c4\u907f\u56e0\u4ea4\u6613\u5931\u8d25\u6263\u9664\u624b\u7eed\u8d39\u7b49\u5408\u7ea6\u7f16\u5199\u89c4\u8303\u7684\u4ecb\u7ecd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Wasm_API"},"\u5408\u7ea6\u5e93"))),(0,l.kt)("h3",{id:"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1"},"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u76f4\u63a5\u901a\u8fc7Web\u524d\u7aef\u4e0e\u5408\u7ea6\u76f4\u63a5\u4ea4\u4e92\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Samurai_API"},"Samurai API")," - \u63d0\u4f9b Web \u94b1\u5305\u5f00\u53d1\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/JS_SDK"},"JS SDK")," - \u5982\u4f55\u4f7f\u7528JS\u4e0e\u5408\u7ea6\u6216 Alaya \u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u901a\u8fc7\u7f16\u5199\u540e\u7aef\u4ee3\u7801\u6765\u548c\u5408\u7ea6\u6216Alaya\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\uff0c\u4ee5\u4e0b\u4e0d\u540c\u8bed\u8a00\u7684 SDK \u53ef\u4ee5\u63d0\u4f9b\u5e2e\u52a9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/alaya-devdocs/zh-CN/Java_SDK"},"JAVA SDK"))),(0,l.kt)("h3",{id:"\u5982\u4f55\u53d1\u5e03prc-token\uff1f"},"\u5982\u4f55\u53d1\u5e03PRC Token\uff1f"),(0,l.kt)("p",null,"\u7531\u4e8eAlaya\u7ee7\u627f\u4e86EVM\u865a\u62df\u673a\uff0c\u7406\u8bba\u4e0a\u53ef\u4ee5\u517c\u5bb9\u6240\u6709\u4ee5\u592a\u574a\u6807\u51c6\u534f\u8bae\u7684 Token \uff0c\u76ee\u524d\u5e38\u7528\u7684 Token \u534f\u8bae\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/ARC20"},"ARC-20"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"/alaya-devdocs/zh-CN/ARC721"},"ARC-721"),"."))}c.isMDXComponent=!0}}]);