"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9234],{2741:(e,t,r)=>{r.d(t,{s:()=>i});var s=r(92602),n=(r(78888),r(49186)),o=r(53966),a=r(84952);function i(e){if(!s.A.assetsPath)throw o.A.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.A("assets:path-not-set","config.assetsPath is not set");return(0,a.fj)(s.A.assetsPath,e)}},78888:(e,t,r)=>{r.d(t,{A:()=>f});var s=r(92602),n=r(70333),o=r(49186),a=r(44208),i=r(4718),l=r(74887),c=r(84952),u=r(39131),d=r(926),p=r(56058);async function f(e,t){e instanceof URL&&(e=e.toString()),t?.query instanceof URLSearchParams&&(t.query=(0,c.zf)(t.query.toString().replaceAll("+"," ")));const o=(0,c.DB)(e),i=(0,c.w8)(e);i||o||(e=(0,c.S8)(e));const u={url:e,requestOptions:{...t}},f=e=>({data:e,getAllHeaders:S,getHeader:S,httpStatus:200,requestOptions:u.requestOptions,url:u.url}),y=(0,c.sC)(e,m.internalInterceptors);if(y){const e=await C(y,u);if(null!=e)return f(e)}let w=(0,c.sC)(e);if(w){const e=await C(w,u);if(null!=e)return f(e);w.after||w.error||(w=null)}if(e=u.url,"image"===(t=u.requestOptions).responseType&&((0,a.A)("host-webworker")||(0,a.A)("host-node")))throw L("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),u);if("head"===t.method){if(t.body)throw L("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),u);if(o||i)throw L("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),u)}if(await async function(){(0,a.A)("host-webworker")&&!h&&(h=await r.e(369).then(r.bind(r,40369)))}(),h)return h.execute(e,t);const b=new AbortController,T=(0,l.u7)(t,(()=>b.abort())),q={controller:b,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:w,params:u,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},k=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,o=e.controller.signal,a=r.body;let i=null,c=null;if(g&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(c=a),e.fetchOptions={cache:r.cacheBust?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:o},(i||c)&&(e.fetchOptions.body=i||c),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&s.A.apiKey&&(0,d.Q)(t)&&(r.query||(r.query={}),r.query.token=s.A.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!v(t)&&!(0,l.G4)(o)){let s;"immediate"===r.authMode?(await N(),s=await n.id.getCredential(t,{signal:o}),e.credential=s):"no-prompt"===r.authMode?(await N(),s=await n.id.getCredential(t,{prompt:!1,signal:o}).catch((()=>{})),e.credential=s):n.id&&(s=n.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await A(e)}while(!await O(e,t,r))}catch(r){const s=L("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(s),s}const o=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,c.FL)(o)){const e=(0,c.$z)(o,!0);e&&m.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&(0,p.tz)(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&n.id){const e=n.id.findServerInfo(a.server);let t=e?.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=n.id.findCredential(t,a.userId);e&&-1===n.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getAllHeaders:t?()=>Array.from(t.headers):S,getHeader:t?e=>t.headers.get(e):S,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(q).finally((()=>T?.remove()));return w?.after?.(k),k}let h;const m=s.A.request,g="FormData"in globalThis,y=new Set([499,498,403,401]),w=new Set(["COM_0056","COM_0057","SB_0008"]),b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],S=()=>null,T=Symbol();function q(e){const t=(0,c.$z)(e);return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||(0,c.FL)(t)}function L(e,t,r,s){let n="Error";const a={url:r.url,requestOptions:r.requestOptions,getAllHeaders:S,getHeader:S,ssl:!1};if(t instanceof o.A)return t.details?(t.details=(0,i.o8)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=s&&(()=>Array.from(s.headers)),r=s&&(e=>s.headers.get(e)),o=s?.status,i=t.message;i&&(n=i),e&&r&&(a.getAllHeaders=e,a.getHeader=r),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||o||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=T in t?t[T]:t}return(0,l.zf)(t)?(0,l.NK)():new o.A(e,n,a)}async function N(){n.id||await Promise.all([r.e(6285),r.e(6845),r.e(8438),r.e(2857)]).then(r.bind(r,67112))}function v(e){return b.some((t=>t.test(e)))}async function A(e){let t=e.params.url;const r=e.params.requestOptions,s=e.fetchOptions??{},o=(0,c.w8)(t)||(0,c.DB)(t),i=r.responseType||"json",d=o?0:null!=r.timeout?r.timeout:m.timeout;let h=!1;if(!o){e.useSSL&&(t=(0,c.lM)(t));let o={...r.query};e.credentialToken&&(o.token=e.credentialToken);let i=(0,c.x0)(o);(0,a.A)("esri-url-encodes-apostrophe")&&(i=i.replaceAll("'","%27"));const l=t.length+1+i.length;let d;h="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>m.maxUrlLength;const f=r.useProxy||!!(0,c.zs)(t);if(f){const e=(0,c.s_)(t);d=e.path,!h&&d.length+1+l>m.maxUrlLength&&(h=!0),e.query&&(o={...e.query,...o})}if("HEAD"===s.method&&(h||f)){if(h){if(l>m.maxUrlLength)throw L("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw L("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(f)throw L("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(h?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,c.a6)(t,o):(s.body=(0,c.x0)(o),s.headers||(s.headers={}),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,c.a6)(t,o),f&&(e.useProxy=!0,t=`${d}?${t}`),o.token&&g&&s.body instanceof FormData&&!(0,u.$E)(t)&&s.body.set("token",o.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,c.FX)(t,(0,c.Xq)()))if((0,c.FL)(t))e.withCredentials=!0;else if(n.id){const r=n.id.findServerInfo(t);r?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include",(0,p.xW)(t)&&await(0,p.m3)(h?(0,c.a6)(t,o):t))}let y,w,b=0,S=!1;d>0&&(b=setTimeout((()=>{S=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)w=s,w.url=t;else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||h||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!o&&!e.useProxy&&m.proxyUrl&&!q(t)){if(f._beforeFetch&&await f._beforeFetch(t,s),y=await fetch(t,s),f._afterFetch&&await f._afterFetch(y),e.useProxy||function(e){const t=(0,c.$z)(e);t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===r.responseType)w=y;else if("HEAD"!==s.method)if(y.ok){switch(i){case"array-buffer":w=await y.arrayBuffer();break;case"blob":case"image":w=await y.blob();break;default:w=await y.text()}if(b&&(clearTimeout(b),b=0),"json"===i||"xml"===i||"document"===i)if(w)switch(i){case"json":w=JSON.parse(w);break;case"xml":w=k(w,"application/xml");break;case"document":w=k(w,"text/html")}else w=null;if(w){if("array-buffer"===i||"blob"===i){const e=y.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&w["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(w).json();e.error&&(w=e)}catch{}}"image"===i&&w instanceof Blob&&(w=await x(URL.createObjectURL(w),e,!0))}}else{w=await y.text();try{w=JSON.parse(w)}catch{}}}else w=await x(t,e)}catch(s){if("AbortError"===s.name){if(S)throw(0,p.ql)();throw(0,l.NK)("Request canceled")}if(!(!y&&s instanceof TypeError&&m.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||q(t))throw s;e.redoRequest=!0,(0,c.oy)({proxyUrl:m.proxyUrl,urlPrefix:(0,c.$z)(t)??""})}finally{b&&clearTimeout(b)}return[y,w]}async function C(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=L("request:interceptor",e,t)}if((s instanceof Error||s instanceof o.A)&&(r=L("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}function k(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function O(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let o,a;if(r&&(r.error&&"object"==typeof r.error?o=r.error:"error"===r.status&&Array.isArray(r.messages)&&(o={...r},o[T]=r,o.details=r.messages)),!o&&!t.ok)throw o=new Error(`Unable to load ${t.url} status: ${t.status}`),o[T]=r,o;let i,l=null;o&&(a=Number(o.code),l=o.hasOwnProperty("subcode")?Number(o.subcode):null,i=o.messageCode,i=i?.toUpperCase());const c=s.authMode;if(403===a&&(4===l||o.message?.toLowerCase().includes("ssl")&&!o.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==c||498===a)&&void 0!==a&&y.has(a)&&!v(e.params.url)&&(403!==a||(!i||!w.has(i))&&(null==l||2===l&&e.credentialToken))){await N();try{const t=await n.id.getCredential(e.params.url,{error:L("request:server",o,e.params),prompt:"no-prompt"!==c,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===c)return e.credential=void 0,e.credentialToken=void 0,!1;o=t}}if(o)throw o;return!0}function x(e,t,r=!1){const s=t.controller.signal,n=new Image;return t.withCredentials?n.crossOrigin="use-credentials":n.crossOrigin="anonymous",n.alt="",n.fetchPriority=m.priority,n.src=e,(0,p.Sx)(n,e,r,s)}f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"],f._beforeFetch=void 0,f._afterFetch=void 0},926:(e,t,r)=>{r.d(t,{Q:()=>o});var s=r(84952);const n=new Set(["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]);function o(e){const t=(0,s.$z)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!n.has(t)&&!e.endsWith("/sharing/rest/generateToken")}},56058:(e,t,r)=>{r.d(t,{Sx:()=>i,c8:()=>d,m3:()=>h,ql:()=>u,tz:()=>p,xW:()=>f});var s=r(92602),n=r(44208),o=r(74887),a=r(84952);function i(e,t,r=!1,s){return new Promise(((a,i)=>{if((0,o.G4)(s))return void i(l());let c=()=>{p(),i(new Error(`Unable to load ${t}`))},u=()=>{const t=e;p(),a(t)},d=()=>{if(!e)return;const t=e;p(),t.src="",i(l())};const p=()=>{(0,n.A)("esri-image-decode")||(e.removeEventListener("error",c),e.removeEventListener("load",u)),c=null,u=null,e=null,null!=s&&s.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};null!=s&&s.addEventListener("abort",d),(0,n.A)("esri-image-decode")?e.decode().then(u,c):(e.addEventListener("error",c),e.addEventListener("load",u))}))}function l(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}const c="Timeout exceeded";function u(){return new Error(c)}function d(e){return"object"==typeof e&&!!e&&"message"in e&&e.message===c}function p(e){s.A.request.crossOriginNoCorsDomains||(s.A.request.crossOriginNoCorsDomains={});const t=s.A.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,a.$z)(r)??""]=0:(t[(0,a.$z)("http://"+r)??""]=0,t[(0,a.$z)("https://"+r)??""]=0)}function f(e){const t=s.A.request.crossOriginNoCorsDomains;if(t){let r=(0,a.$z)(e);if(r)return r=r.toLowerCase(),!(0,a.FX)(r,(0,a.Xq)())&&t[r]<Date.now()-36e5}return!1}async function h(e){const t=s.A.request.crossOriginNoCorsDomains,r=(0,a.$z)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const n=(0,a.An)(e);e=n.path,"json"===n.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}},79234:(e,t,r)=>{var s,n,o,a,i,l,c,u,d,p,f,h,m,g,y;r.r(t),r.d(t,{destroyWasm:()=>L,initialize:()=>N,process:()=>q}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(s||(s={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(n||(n={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(o||(o={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(a||(a={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(i||(i={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(c||(c={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(d||(d={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(p||(p={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(f||(f={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(h||(h={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(m||(m={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(g||(g={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(y||(y={}));var w=r(2741);function b(e){return(0,w.s)(`esri/libs/lyr3d/${e}`)}let S,T;async function q(e){if(await N(),e.inputs.length<1)return{result:{status:y.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const t={ptrs:[],sizes:[]};for(const r of e.inputs){const e=T._malloc(r.byteLength);new Uint8Array(T.HEAPU8.buffer,e,r.byteLength).set(new Uint8Array(r)),t.ptrs.push(e),t.sizes.push(r.byteLength)}const r=T.process(e.jobDescJson,t,e.isMissingResourceCase),s=r.status===y.Succeeded&&r.data,n=r.status===y.MissingInputs&&r.missingInputUrls.length>0;if(s){const e=r.data.slice();r.data=e}else n&&(r.jobDescJson=r.jobDescJson.slice(0),r.originalInputs=e.inputs);for(let e=0;e<t.ptrs.length;++e)T._free(t.ptrs[e]);const o=[];if(s)o.push(r.data.buffer);else if(n)for(const t of e.inputs)o.push(t);return{result:r,transferList:o}}function L(){T&&(T.uninitialize_lyr3d_worker_wasm(),T=null)}function N(){return T?Promise.resolve():(S||(S=new Promise((e=>r.e(2343).then(r.bind(r,2343)).then((e=>e.l)).then((({default:t})=>{const r=t({locateFile:b,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e})).then((e=>{T=e,T.initialize_lyr3d_worker_wasm(),S=null}))),S)}}}]);