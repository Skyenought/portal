"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[785],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(o),u=r,h=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6424:function(e,t,o){o.r(t),o.d(t,{default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],c={},l={unversionedId:"faq/troubleshooting",id:"faq/troubleshooting",isDocsHomePage:!1,title:"Trouble Shooting",description:"1. goctl has already installed, but it shows command not found: goctl when executing commands.",source:"@site/docs/faq/troubleshooting.md",sourceDirName:"faq",slug:"/faq/troubleshooting",permalink:"/docs/faq/troubleshooting",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/faq/troubleshooting.md",version:"current",lastUpdatedAt:1653044750,formattedLastUpdatedAt:"5/20/2022",frontMatter:{},sidebar:"docs",previous:{title:"Trace",permalink:"/docs/deployment/trace"},next:{title:"Error",permalink:"/docs/faq/error"}},d=[{value:"1. goctl has already installed, but it shows <code>command not found: goctl</code> when executing commands.",id:"1-goctl-has-already-installed-but-it-shows-command-not-found-goctl-when-executing-commands",children:[]},{value:"2. How to call rpc",id:"2-how-to-call-rpc",children:[]},{value:"3. proto uses import, how the goctl command needs to be written.",id:"3-proto-uses-import-how-the-goctl-command-needs-to-be-written",children:[]},{value:"4. Assuming that <code>base.proto</code> is introduced by main proto, why not generate <code>base.pb.go</code>.",id:"4-assuming-that-baseproto-is-introduced-by-main-proto-why-not-generate-basepbgo",children:[]},{value:"5. How does the model control the cache time",id:"5-how-does-the-model-control-the-cache-time",children:[]},{value:"6. jwt forensics how to implement",id:"6-jwt-forensics-how-to-implement",children:[]},{value:"7. how to use api middleware",id:"7-how-to-use-api-middleware",children:[]},{value:"8. how to disable the output statistics log (stat)?",id:"8-how-to-disable-the-output-statistics-log-stat",children:[]},{value:"9. rpc direct connection and service discovery connection mode writing",id:"9-rpc-direct-connection-and-service-discovery-connection-mode-writing",children:[]}],p={toc:d};function s(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-goctl-has-already-installed-but-it-shows-command-not-found-goctl-when-executing-commands"},"1. goctl has already installed, but it shows ",(0,i.kt)("inlineCode",{parentName:"h3"},"command not found: goctl")," when executing commands."),(0,i.kt)("p",null,"If you installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"go get"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," should be located in ",(0,i.kt)("inlineCode",{parentName:"p"},"$GOPATH"),".\nYou can check the full path with ",(0,i.kt)("inlineCode",{parentName:"p"},"go env GOPATH"),", whether your ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"$GOPATH"),"\nWhether your ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," is in ",(0,i.kt)("inlineCode",{parentName:"p"},"$GOPATH")," or in another directory, the reason for the above problem is that the directory where ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," is located is not in ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," (environment variable)."),(0,i.kt)("h3",{id:"2-how-to-call-rpc"},"2. How to call rpc"),(0,i.kt)("p",null,"You can refer to ","[rpc writing and calling]"," in the Quick Start (...) for this question. /advance/rpc-call), which describes the logic for using rpc calls."),(0,i.kt)("h3",{id:"3-proto-uses-import-how-the-goctl-command-needs-to-be-written"},"3. proto uses import, how the goctl command needs to be written."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," for import proto specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"BasePath")," provides ",(0,i.kt)("inlineCode",{parentName:"p"},"protoc")," flag mapping, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"--proto_path, -I"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"goctl")," will pass this flag value to ",(0,i.kt)("inlineCode",{parentName:"p"},"protoc"),"."),(0,i.kt)("h3",{id:"4-assuming-that-baseproto-is-introduced-by-main-proto-why-not-generate-basepbgo"},"4. Assuming that ",(0,i.kt)("inlineCode",{parentName:"h3"},"base.proto")," is introduced by main proto, why not generate ",(0,i.kt)("inlineCode",{parentName:"h3"},"base.pb.go"),"."),(0,i.kt)("p",null,"For a file like ",(0,i.kt)("inlineCode",{parentName:"p"},"base.proto"),", the developer usually has a need for message reuse, and the source is not only the ",(0,i.kt)("inlineCode",{parentName:"p"},"proto")," file written by the developer, but also the ",(0,i.kt)("inlineCode",{parentName:"p"},"google.proto")," file.\nIt may also come from some basic proto provided in ",(0,i.kt)("inlineCode",{parentName:"p"},"google.golang.org/grpc"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"google/protobuf/any.proto"),", if generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"goctl"),"\nthen the point of centralizing these proto's would be lost."),(0,i.kt)("h3",{id:"5-how-does-the-model-control-the-cache-time"},"5. How does the model control the cache time"),(0,i.kt)("p",null,"NewNodeConn",(0,i.kt)("inlineCode",{parentName:"p"},"can be passed with the optional parameter"),"cache.WithExpiry` to control the cache time to 1 day, for example, with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"sqlc.NewNodeConn(conn,redis,cache.WithExpiry(24*time.Hour))\n")),(0,i.kt)("h3",{id:"6-jwt-forensics-how-to-implement"},"6. jwt forensics how to implement"),(0,i.kt)("p",null,"Please refer to ","[jwt forensics]","(... /advance/jwt)"),(0,i.kt)("h3",{id:"7-how-to-use-api-middleware"},"7. how to use api middleware"),(0,i.kt)("p",null,"Please refer to ","[middleware]","(... /advance/middleware) /advance/middleware)"),(0,i.kt)("h3",{id:"8-how-to-disable-the-output-statistics-log-stat"},"8. how to disable the output statistics log (stat)?"),(0,i.kt)("p",null,"logx.DisableStat()"),(0,i.kt)("h3",{id:"9-rpc-direct-connection-and-service-discovery-connection-mode-writing"},"9. rpc direct connection and service discovery connection mode writing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// mode1: cluster direct connection\n// conf:=zrpc.NewDirectClientConf([]string{"ip:port"}, "app", "token")\n\n// mode2: etcd service discovery\n// conf:=zrpc.NewEtcdClientConf([]string{"ip:port"}, "key", "app", "token")\n// client, _ := zrpc.NewClient(conf)\n\n// mode3: ip direct connection mode\n// client, _ := zrpc.NewClientWithTarget("127.0.0.1:8888")\n')),(0,i.kt)("p",null,"faq will update from time to time the problems you encounter, you are also welcome to write the common problems here via pr."))}s.isMDXComponent=!0}}]);