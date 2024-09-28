"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7301],{46130:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(76553);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},76553:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},87301:(e,t,r)=>{r.d(t,{save:()=>d,saveAs:()=>m});var a=r(71530),n=r(10407);const o="Stream Service",i="Feed",s="stream-layer-save",l="stream-layer-save-as";function p(e){return{isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function u(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function c(e,t){const{parsedUrl:r,title:a,fullExtent:o}=e;t.url=r.path,t.title||=a,t.extent=null,null!=o&&(t.extent=await(0,n.sQ)(o)),(0,n.OM)(t,n.mm.METADATA),(0,n.LG)(t,n.mm.SINGLE_LAYER)}async function d(e,t){return(0,a.UN)({layer:e,itemType:o,additionalItemType:i,validateLayer:p,createItemData:u,errorNamePrefix:s},t)}async function m(e,t,r){return(0,a.Uh)({layer:e,itemType:o,validateLayer:p,createItemData:u,errorNamePrefix:l,newItem:t,setItemProperties:c},r)}},71530:(e,t,r)=>{r.d(t,{UN:()=>g,Uh:()=>b});var a=r(49186),n=r(46130),o=r(20655),i=r(80812),s=r(88788),l=r(10407),p=r(49864),u=r(26121);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function d(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function m(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if((0,p.X)(t),function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function f(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:n})}function y(e){const{newItem:t,itemType:r}=e;let a=i.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.A.getDefault(),m({...e,item:a}),a}function w(e){return(0,s.m)(e,"portal-item")}async function v(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function h(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e),f(e);const p=r.portalItem,u=o?o(p):w(p),d=await v(r,u,{...t,supplementalUnsupportedErrors:l}),m=await a({layer:r,layerJSON:d},p);return await(i?.(r,p)),h(p),await p.update({data:m}),(0,n.v)(u),await(s?.(p,u)),p}async function b(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e);const p=y(e),u=o?o(p):w(p),d=await v(r,u,{...t,supplementalUnsupportedErrors:l}),m=await a({layer:r,layerJSON:d},p);return await i(r,p),h(p),await async function(e,t,r){const a=e.portal;await a.signIn(),await(a.user?.addItem({item:e,data:t,folder:r?.folder}))}(p,m,t),r.portalItem=p,(0,n.v)(u),await(s?.(p,u)),p}},88788:(e,t,r)=>{r.d(t,{m:()=>i,v:()=>o});var a=r(84952),n=r(20655);function o(e,t){return{...s(e,t),readResourcePaths:[]}}function i(e,t,r){const n=(0,a.An)(e.itemUrl);return{...s(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function s(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},49864:(e,t,r)=>{r.d(t,{X:()=>i});var a=r(92602),n=r(49186),o=r(926);function i(e){if(a.A.apiKey&&(0,o.Q)(e.portal.url))throw new n.A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}},26121:(e,t,r)=>{r.d(t,{c:()=>i,d:()=>n});var a=r(49186);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function i(e,t,r){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new a.A(e,t,r)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((({name:e})=>!(o.has(e)||t.includes(e))))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);