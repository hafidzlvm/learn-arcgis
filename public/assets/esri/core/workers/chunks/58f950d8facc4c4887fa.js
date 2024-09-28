"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[980],{10980:(t,e,r)=>{r.r(e),r.d(e,{executeForTopCount:()=>n});var i=r(2272),o=r(24645),s=r(57561);async function n(t,e,r){const n=(0,i.Dl)(t);return(await(0,o.xs)(n,s.A.from(e),{...r})).data.count}},24645:(t,e,r)=>{r.d(e,{$K:()=>h,KW:()=>c,Yb:()=>y,xs:()=>m});var i=r(78888),o=r(84952),s=r(65864),n=r(17136),l=r(21325),u=r(10536),p=r(58501);const a="Layer does not support extent calculation.";function d(t,e){const r=t.geometry,i=t.toJSON(),o=i;if(null!=r&&(o.geometry=JSON.stringify(r),o.geometryType=(0,s.$B)(r),o.inSR=(0,l.YX)(r.spatialReference)),i.topFilter?.groupByFields&&(o.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),i.topFilter?.orderByFields&&(o.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),i.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","):delete o.outFields,i.outSR?o.outSR=(0,l.YX)(i.outSR):r&&i.returnGeometry&&(o.outSR=o.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:r}=t;null==e&&null==r||(o.time=e===r?e:`${e??"null"},${r??"null"}`),delete i.timeExtent}return o}async function y(t,e,r,i){const o=await w(t,e,"json",i);return(0,p.q)(e,r,o.data),o}async function c(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:w(t,e,"json",r,{returnIdsOnly:!0})}async function h(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r,s={},l={}){const p="string"==typeof t?(0,o.An)(t):t,a=e.geometry?[e.geometry]:[];return s.responseType="json",(0,n.el)(a,null,s).then((t=>{const n=t?.[0];null!=n&&((e=e.clone()).geometry=n);const a=(0,u.z)({...p.query,f:r,...l,...d(e,l)});return(0,i.A)((0,o.fj)(p.path,"queryTopFeatures"),{...s,query:{...a,...s.query}})}))}},57561:(t,e,r)=>{r.d(e,{A:()=>f});var i,o=r(90237),s=r(59456),n=r(60945),l=r(66552),u=r(25482),p=r(4718),a=r(10107),d=r(56507),y=r(40608),c=r(43937),h=r(65864);r(44208),r(53966),r(87811);let m=i=class extends u.oY{constructor(t){super(t),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new i({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],m.prototype,"groupByFields",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],m.prototype,"topCount",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],m.prototype,"orderByFields",void 0),m=i=(0,o._)([(0,y.$)("esri.rest.support.TopFilter")],m);const w=m;var F,v=r(16930);const j=new l.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),S=new l.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let R=F=class extends u.oY{constructor(t){super(t),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new F((0,p.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],R.prototype,"distance",void 0),(0,o._)([(0,a.MZ)({types:s.yR,json:{read:h.rS,write:!0}})],R.prototype,"geometry",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],R.prototype,"geometryPrecision",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],R.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],R.prototype,"num",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],R.prototype,"objectIds",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],R.prototype,"orderByFields",void 0),(0,o._)([(0,a.MZ)({type:[String],json:{write:!0}})],R.prototype,"outFields",void 0),(0,o._)([(0,a.MZ)({type:v.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],R.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],R.prototype,"resultType",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],R.prototype,"returnGeometry",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnM",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],R.prototype,"returnZ",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],R.prototype,"start",void 0),(0,o._)([(0,c.K)("start"),(0,c.K)("num")],R.prototype,"writeStart",null),(0,o._)([(0,a.MZ)({type:String,json:{read:{source:"spatialRel",reader:j.read},write:{target:"spatialRel",writer:j.write}}})],R.prototype,"spatialRelationship",void 0),(0,o._)([(0,a.MZ)({type:n.A,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,o._)([(0,a.MZ)({type:w,json:{write:!0}})],R.prototype,"topFilter",void 0),(0,o._)([(0,a.MZ)({type:String,json:{read:S.read,write:{writer:S.write,overridePolicy(t){return{enabled:null!=t&&null!=this.distance&&this.distance>0}}}}})],R.prototype,"units",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],R.prototype,"where",void 0),R=F=(0,o._)([(0,y.$)("esri.rest.support.TopFeaturesQuery")],R),R.from=(0,d.dp)(R);const f=R}}]);