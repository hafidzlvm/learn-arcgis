"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8003],{60945:(e,t,r)=>{r.d(t,{A:()=>m});var i,s=r(90237),o=r(25482),n=r(88930),a=r(10107),l=(r(44208),r(53966),r(87811),r(36005)),p=r(40608),u=r(43937),d=r(56400);let c=i=class extends o.oY{static get allTime(){return h}static get empty(){return y}static fromArray(e){return new i({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,s=e.end?.getTime()??e.end;return t===i&&r===s}expandTo(e,t=d.qU){if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,n.lL)(r,e,t));let s=this.end;if(s){const r=(0,n.lL)(s,e,t);s=s.getTime()===r.getTime()?r:(0,n.S1)(r,1,e,t)}return new i({start:r,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,s=e.start?.getTime()??-1/0,o=e.end?.getTime()??1/0;let n,a;return s>=t&&s<=r?n=s:t>=s&&t<=o&&(n=t),r>=s&&r<=o?a=r:o>=t&&o<=r&&(a=o),null==n||null==a||isNaN(n)||isNaN(a)?i.empty:new i({start:n===-1/0?null:new Date(n),end:a===1/0?null:new Date(a)})}offset(e,t,r=d.qU){if(this.isEmpty||this.isAllTime)return this.clone();const s=new i,{start:o,end:a}=this;return null!=o&&(s.start=(0,n.S1)(o,e,t,r)),null!=a&&(s.end=(0,n.S1)(a,e,t,r)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return h.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,s._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,s._)([(0,l.w)("end")],c.prototype,"readEnd",null),(0,s._)([(0,u.K)("end")],c.prototype,"writeEnd",null),(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,s._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,s._)([(0,l.w)("start")],c.prototype,"readStart",null),(0,s._)([(0,u.K)("start")],c.prototype,"writeStart",null),c=i=(0,s._)([(0,p.$)("esri.TimeExtent")],c);const h=new c,y=new c({start:void 0,end:void 0}),m=c},4902:(e,t,r)=>{r.d(t,{PH:()=>a,sA:()=>n});var i=r(90237),s=r(40608);let o=0;const n=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+o++})}};return t=(0,i._)([(0,s.$)("esri.core.Identifiable")],t),t},a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:o++})}};return t=(0,i._)([(0,s.$)("esri.core.Identifiable.NumericIdentifiable")],t),t};let l=class extends(n(class{})){};l=(0,i._)([(0,s.$)("esri.core.Identifiable")],l)},92071:(e,t,r)=>{r.d(t,{P:()=>_,L:()=>S});var i=r(90237),s=r(69622),o=r(76953),n=r(4718),a=r(35666);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new l,r=this._originStores[a.Gr.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,n.o8)(e),a.Gr.DEFAULTS)}));for(let r=a.Gr.SERVICE;r<a.AU;r++){const i=this._originStores[r];i&&i.forEach(((i,s)=>{e&&e.has(s)||t.set(s,(0,n.o8)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=a.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=a.Gr.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r?.get(e),s=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),s!==i}originOf(e){return this._propertyOriginMap.get(e)||a.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var p=r(45917),u=r(88620),d=r(40608);const c=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,u.oY)(this),r=t.store,i=new l;t.store=i,(0,o.k)(t,r,i)}read(e,t){(0,p.L)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,a.aB)(t);if("string"==typeof e)return r.get(e,i);const s={};return e.forEach((e=>{s[e]=r.get(e,i)})),s}originOf(e){return(0,a.OL)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,a.aB)(t),s=(0,u.oY)(this);let o;o="string"==typeof e?"*"===e?r.keys(i):[e]:e,o.forEach((e=>{s.invalidate(e),r.revert(e,i),s.commit(e)}))}};return t=(0,i._)([(0,d.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,u.oY)(e).store}let y=class extends(c(s.A)){};y=(0,i._)([(0,d.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);var m=r(16649),g=r(49422);const f=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return v(this).delete(e,(0,a.aB)(t))}write(e,t){return(0,g.M)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,u.oY)(this).setAtOrigin(e,t,(0,a.aB)(r))}removeOrigin(e){const t=v(this),r=(0,a.aB)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),a.Gr.USER)}updateOrigin(e,t){const r=v(this),i=(0,a.aB)(t),s=(0,m.Jt)(this,e);for(let t=i+1;t<a.AU;++t)r.delete(e,t);r.set(e,s,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,d.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function v(e){return(0,u.oY)(e).store}const _=e=>{let t=class extends(f(c(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,d.$)("esri.core.MultiOriginJSONSupport")],t),t};let S=class extends(_(s.A)){};S=(0,i._)([(0,d.$)("esri.core.MultiOriginJSONSupport")],S)},36708:(e,t,r)=>{r.d(t,{C_:()=>c,OH:()=>m,Vh:()=>g,on:()=>d,pc:()=>f,wB:()=>l,z7:()=>p}),r(60999),r(5503);var i=r(37955),s=r(36563),o=r(97768),n=r(74887),a=r(14012);function l(e,t,r={}){return u(e,t,r,h)}function p(e,t,r={}){return u(e,t,r,y)}function u(e,t,r={},i){let s=null;const n=r.once?(e,r)=>{i(e)&&((0,o.xt)(s),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(s=(0,a.Cn)(e,n,r.sync,r.equals),r.initial){const t=e();n(t,t)}return s}function d(e,t,r,n={}){let a=null,p=null,u=null;function d(){a&&p&&(p.remove(),n.onListenerRemove?.(a),a=null,p=null)}function c(e){n.once&&n.once&&(0,o.xt)(u),r(e)}const h=l(e,((e,r)=>{d(),(0,i.wb)(e)&&(a=e,p=(0,i.on)(e,t,c),n.onListenerAdd?.(e))}),{sync:n.sync,initial:!0});return u=(0,s.hA)((()=>{h.remove(),d()})),u}function c(e,t){return function(e,t,r){if((0,n.G4)(r))return Promise.reject((0,n.NK)());const i=e();if(t?.(i))return Promise.resolve(i);let a=null;function l(){a=(0,o.xt)(a)}return new Promise(((i,o)=>{a=(0,s.vE)([(0,n.u7)(r,(()=>{l(),o((0,n.NK)())})),u(e,(e=>{l(),i(e)}),{sync:!1,once:!0},t??h)])}))}(e,y,t)}function h(e){return!0}function y(e){return!!e}r(80559);const m={sync:!0},g={initial:!0},f={sync:!0,initial:!0}},54239:(e,t,r)=>{r.d(t,{A:()=>_});var i,s=r(90237),o=r(4576),n=r(66552),a=r(25482),l=r(83047),p=r(67076),u=r(10107),d=(r(44208),r(53966),r(36005)),c=r(40608),h=r(43937);const y=(0,n.O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),m=y.jsonValues.slice();(0,o.Xy)(m,"orthometric");const g=(0,n.O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let f=i=class extends a.oY{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return y.write(e,t,r)}readHeightModel(e,t,r){return y.read(e)||(r?.messages&&r.messages.push(function(e,t){return new p.A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:r})),null)}readHeightUnit(e,t,r){return g.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readHeightUnitService(e,t,r){return(0,l.LA)(e)||g.read(e)||(r?.messages&&r.messages.push(v(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new i({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,l.k1)(t);return new i({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new i;return t.read(e,{origin:"web-scene"}),t}};function v(e,t){return new p.A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,s._)([(0,u.MZ)({type:y.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:m,default:"ellipsoidal"}}}})],f.prototype,"heightModel",void 0),(0,s._)([(0,h.K)("web-scene","heightModel")],f.prototype,"writeHeightModel",null),(0,s._)([(0,d.w)(["web-scene","service"],"heightModel")],f.prototype,"readHeightModel",null),(0,s._)([(0,u.MZ)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],f.prototype,"heightUnit",void 0),(0,s._)([(0,d.w)("web-scene","heightUnit")],f.prototype,"readHeightUnit",null),(0,s._)([(0,d.w)("service","heightUnit")],f.prototype,"readHeightUnitService",null),(0,s._)([(0,u.MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],f.prototype,"vertCRS",void 0),(0,s._)([(0,d.w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],f.prototype,"readVertCRS",null),f=i=(0,s._)([(0,c.$)("esri.geometry.HeightModelInfo")],f);const _=f},84453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var i,s=r(90237),o=r(49186),n=r(53966),a=r(92071),l=r(74887),p=r(36708),u=r(10107),d=(r(44208),r(87811),r(36005)),c=r(40608),h=r(87024),y=r(4146),m=r(52136),g=r(18768),f=r(69208),v=r(16131),_=r(8303),S=r(25036),M=r(58947),w=r(10873),b=r(50805),I=r(78888),x=r(5503),A=r(25482),Z=r(84952),O=(r(59456),r(4718)),T=r(67076),P=r(43937),E=r(57251),U=r(39829);let R=i=class extends A.oY{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer?.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,E.canProjectWithoutEngine)(e.spatialReference,i.layer.spatialReference))return void(i?.messages&&i.messages.push(new T.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const s=new U.A;(0,E.projectPolygon)(e,s,i.layer.spatialReference),t[r]=s.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new i({geometry:(0,O.o8)(this.geometry),type:this.type})}};(0,s._)([(0,u.MZ)({type:U.A}),(0,h.P)()],R.prototype,"geometry",void 0),(0,s._)([(0,P.K)(["web-scene","portal-item"],"geometry")],R.prototype,"writeGeometry",null),(0,s._)([(0,u.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,h.P)()],R.prototype,"type",void 0),R=i=(0,s._)([(0,c.$)("esri.layers.support.SceneModification")],R);const L=R;var N;let D=N=class extends((0,A.Te)(x.A.ofType(L))){constructor(e){super(e),this.url=null}clone(){return new N({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new N;for(const i of e)r.add(L.fromJSON(i,t));return r}static async fromUrl(e,t,r){const i={url:(0,Z.An)(e),origin:"service"},s=await(0,I.A)(e,{responseType:"json",signal:r?.signal}),o=t.toJSON(),n=[];for(const e of s.data)n.push(L.fromJSON({...e,geometry:{...e.geometry,spatialReference:o}},i));return new N({url:e,items:n})}};(0,s._)([(0,u.MZ)({type:String})],D.prototype,"url",void 0),D=N=(0,s._)([(0,c.$)("esri.layers.support.SceneModifications")],D);const $=D;var k=r(24212),j=r(97159);let C=class extends((0,M.w6)((0,g.b)((0,v.q)((0,_.A)((0,S.j)((0,a.P)((0,f.d)((0,m.p)(y.A))))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,j.f)(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,l.QP)(e)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await $.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(M.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(M.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new o.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new o.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new o.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,k.XF)(n.A.getLogger(this),(0,k.B)(t,"absolute-height",e)),(0,k.XF)(n.A.getLogger(this),(0,k.tW)(t,e))}};(0,s._)([(0,u.MZ)({type:String,readOnly:!0})],C.prototype,"geometryType",void 0),(0,s._)([(0,u.MZ)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,s._)([(0,u.MZ)({type:["IntegratedMeshLayer"]})],C.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],C.prototype,"type",void 0),(0,s._)([(0,u.MZ)({type:b.W4,readOnly:!0})],C.prototype,"nodePages",void 0),(0,s._)([(0,u.MZ)({type:[b.uV],readOnly:!0})],C.prototype,"materialDefinitions",void 0),(0,s._)([(0,u.MZ)({type:[b.Ot],readOnly:!0})],C.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,u.MZ)({type:[b.L0],readOnly:!0})],C.prototype,"geometryDefinitions",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],C.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,u.MZ)({type:$}),(0,h.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],C.prototype,"modifications",void 0),(0,s._)([(0,d.w)(["web-scene","portal-item"],"modifications")],C.prototype,"readModifications",null),(0,s._)([(0,u.MZ)(w.Yj)],C.prototype,"elevationInfo",null),(0,s._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],C.prototype,"path",void 0),C=(0,s._)([(0,c.$)("esri.layers.IntegratedMeshLayer")],C);const F=C},4146:(e,t,r)=>{r.d(t,{A:()=>S});var i=r(90237),s=(r(59456),r(78888)),o=r(60945),n=r(49186),a=r(65529),l=r(4902),p=r(92474),u=r(53966),d=r(74887),c=r(84952),h=r(10107),y=(r(44208),r(87811),r(40608)),m=r(92602),g=r(5443),f=r(16930);let v=0,_=class extends(a.A.EventedMixin((0,l.sA)(p.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new g.A(-180,-90,180,90,f.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+v++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=f.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await r.e(7982).then(r.bind(r,27982))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:i}=await r.e(5613).then(r.bind(r,45613));try{return await i(t)}catch(e){const r=t?.portalItem,i=r?.id||"unset",s=r?.portal?.url||m.A.portalUrl;throw u.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+i+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,d.zf)(e)||u.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,c.An)(this.url)}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,s.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,h.MZ)({type:String})],_.prototype,"attributionDataUrl",void 0),(0,i._)([(0,h.MZ)({type:g.A})],_.prototype,"fullExtent",void 0),(0,i._)([(0,h.MZ)({readOnly:!0})],_.prototype,"hasAttributionData",null),(0,i._)([(0,h.MZ)({type:String,clonable:!1})],_.prototype,"id",void 0),(0,i._)([(0,h.MZ)({type:Boolean,nonNullable:!0})],_.prototype,"legendEnabled",void 0),(0,i._)([(0,h.MZ)({type:["show","hide","hide-children"]})],_.prototype,"listMode",void 0),(0,i._)([(0,h.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],_.prototype,"opacity",void 0),(0,i._)([(0,h.MZ)({clonable:!1})],_.prototype,"parent",void 0),(0,i._)([(0,h.MZ)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],_.prototype,"persistenceEnabled",void 0),(0,i._)([(0,h.MZ)({type:Boolean})],_.prototype,"popupEnabled",void 0),(0,i._)([(0,h.MZ)({type:Boolean})],_.prototype,"attributionVisible",void 0),(0,i._)([(0,h.MZ)({type:f.A})],_.prototype,"spatialReference",void 0),(0,i._)([(0,h.MZ)({type:String})],_.prototype,"title",void 0),(0,i._)([(0,h.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0),(0,i._)([(0,h.MZ)()],_.prototype,"url",void 0),(0,i._)([(0,h.MZ)({type:o.A})],_.prototype,"visibilityTimeExtent",void 0),(0,i._)([(0,h.MZ)({type:Boolean,nonNullable:!0})],_.prototype,"visible",void 0),_=(0,i._)([(0,y.$)("esri.layers.Layer")],_);const S=_},52136:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(90237),s=r(10107),o=(r(44208),r(53966),r(87811),r(40608));const n=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,s.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.$)("esri.layers.mixins.APIKeyMixin")],t),t}},18768:(e,t,r)=>{r.d(t,{b:()=>l});var i=r(90237),s=r(53966),o=r(10107),n=(r(44208),r(87811),r(40608)),a=r(60694);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Jf)(e,s.A.getLogger(this)))}};return(0,i._)([(0,o.MZ)()],t.prototype,"title",null),(0,i._)([(0,o.MZ)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.$)("esri.layers.mixins.ArcGISService")],t),t}},69208:(e,t,r)=>{r.d(t,{d:()=>n});var i=r(90237),s=r(10107),o=(r(44208),r(53966),r(87811),r(40608));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,s.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,o.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},8303:(e,t,r)=>{r.d(t,{A:()=>w});var i=r(90237),s=r(92602),o=r(70333),n=r(78888),a=r(60999),l=r(49186),p=r(53966),u=r(97768),d=r(74887),c=r(84952),h=r(10107),y=(r(44208),r(87811),r(36005)),m=r(40608),g=r(43937),f=r(83531),v=r(20655),_=r(80812),S=r(41318),M=r(10407);const w=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await Promise.all([r.e(5356),r.e(1204)]).then(r.bind(r,41204));return(0,d.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,d.zf)(e)||p.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,d.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,d.QP)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,M.It)(r);let s,n;if(i)s=r.portal.url;else try{s=await(0,f.wI)(this.url,t)}catch(e){(0,d.QP)(e)}if(!s||!(0,c.b8)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;n=await(o.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,d.QP)(e)}const a=!0,l=!1,p=!1;if(!n)return{features:{edit:a,fullEdit:l},content:{updateItem:p}};try{if(i?await r.reload():(r=new _.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,M.It)(r)}catch(e){(0,d.QP)(e)}return{features:{edit:a,fullEdit:l},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,d.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?o.id?.findCredential(this.url):null;if(!t)return!0;const r=b.credential===t?b.user:await this._fetchEditingUser(e);return b.credential=t,b.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=o.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=v.A.getDefault();if(s&&s.loaded&&(0,c.S8)(s.restUrl)===(0,c.S8)(i))return s.user;const l=`${i}/community/self`,p=null!=e?e.signal:null,u=await(0,a.Ke)((0,n.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?S.A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||v.A.getDefault());return r&&i&&!(0,c.ut)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,h.MZ)({type:_.default})],t.prototype,"portalItem",null),(0,i._)([(0,y.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,g.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,m.$)("esri.layers.mixins.PortalLayer")],t),t},b={credential:null,user:null}},25036:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(90237),s=r(10107),o=(r(44208),r(53966),r(87811),r(40608));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,s.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,o.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},50805:(e,t,r)=>{r.d(t,{L0:()=>f,Ot:()=>h,W4:()=>l,uV:()=>d});var i=r(90237),s=r(25482),o=r(10107),n=(r(44208),r(53966),r(87811),r(93223)),a=r(40608);let l=class extends s.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,o.MZ)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,o.MZ)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,o.MZ)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],l);let p=class extends s.oY{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,o.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],p.prototype,"id",void 0),(0,i._)([(0,o.MZ)({type:Number})],p.prototype,"factor",void 0),p=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],p);let u=class extends s.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,o.MZ)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,i._)([(0,o.MZ)({type:p})],u.prototype,"baseColorTexture",void 0),(0,i._)([(0,o.MZ)({type:p})],u.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,o.MZ)({type:Number})],u.prototype,"metallicFactor",void 0),(0,i._)([(0,o.MZ)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],u);let d=class extends s.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,n.e)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,i._)([(0,o.MZ)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,i._)([(0,o.MZ)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,i._)([(0,n.e)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,i._)([(0,o.MZ)({type:p})],d.prototype,"normalTexture",void 0),(0,i._)([(0,o.MZ)({type:p})],d.prototype,"occlusionTexture",void 0),(0,i._)([(0,o.MZ)({type:p})],d.prototype,"emissiveTexture",void 0),(0,i._)([(0,o.MZ)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,i._)([(0,o.MZ)({type:u})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],d);let c=class extends s.oY{};(0,i._)([(0,o.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],c.prototype,"name",void 0),(0,i._)([(0,n.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],c.prototype,"format",void 0),c=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],c);let h=class extends s.oY{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,o.MZ)({type:[c]})],h.prototype,"formats",void 0),(0,i._)([(0,o.MZ)({type:Boolean})],h.prototype,"atlas",void 0),h=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],h);let y=class extends s.oY{};(0,i._)([(0,n.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),(0,i._)([(0,o.MZ)({type:Number})],y.prototype,"component",void 0),y=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],y);let m=class extends s.oY{};(0,i._)([(0,n.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,i._)([(0,o.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],m);let g=class extends s.oY{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,o.MZ)({type:Number})],g.prototype,"offset",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"position",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"normal",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"uv0",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"color",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"uvRegion",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"featureId",void 0),(0,i._)([(0,o.MZ)({type:y})],g.prototype,"faceRange",void 0),(0,i._)([(0,o.MZ)({type:m})],g.prototype,"compressedAttributes",void 0),g=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],g);let f=class extends s.oY{};(0,i._)([(0,n.e)({triangle:"triangle"})],f.prototype,"topology",void 0),(0,i._)([(0,o.MZ)()],f.prototype,"geometryBuffers",void 0),f=(0,i._)([(0,a.$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],f)},24212:(e,t,r)=>{function i(e,t){return function(e,t){return t?.mode?t.mode:function(e){return e?l:p}(e).mode}(null!=e&&e.hasZ,t)}function s(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function o(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function n(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function a(e,t){t&&e.warn(".elevationInfo=",t)}r.d(t,{$7:()=>o,B:()=>s,XF:()=>a,tW:()=>n,w7:()=>i}),r(83047),r(16271);const l={mode:"absolute-height",offset:0},p={mode:"on-the-ground",offset:null}}}]);