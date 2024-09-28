"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9423],{83349:(t,e,r)=>{r.d(e,{e:()=>u});var n,i,o,s=r(11053),x={exports:{}};n=x,i=function(){function t(t,r,i){i=i||2;var o,s,x,a,h,l,f,y=r&&r.length,c=y?r[0]*i:t.length,v=e(t,0,c,i,!0),_=[];if(!v||v.next===v.prev)return _;if(y&&(v=u(t,r,v,i)),t.length>80*i){o=x=t[0],s=a=t[1];for(var d=i;d<c;d+=i)(h=t[d])<o&&(o=h),(l=t[d+1])<s&&(s=l),h>x&&(x=h),l>a&&(a=l);f=0!==(f=Math.max(x-o,a-s))?1/f:0}return n(v,_,i,o,s,f),_}function e(t,e,r,n,i){var o,s;if(i===B(t,e,r,n)>0)for(o=e;o<r;o+=n)s=b(o,t[o],t[o+1],s);else for(o=r-n;o>=e;o-=n)s=b(o,t[o],t[o+1],s);if(s&&p(s,s.next)){var x=s.next;R(s),s=x}return s}function r(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!p(n,n.next)&&0!==T(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(R(n),(n=e=i)===n.next)break;r=!0}}while(r||n!==e);return e}function n(t,e,u,a,h,l,f){if(t){!f&&l&&y(t,a,h,l);for(var c,v,_=t;t.prev!==t.next;)if(c=t.prev,v=t.next,l?o(t,a,h,l):i(t))e.push(c.i/u),e.push(t.i/u),e.push(v.i/u),R(t),t=v.next,_=v.next;else if((t=v)===_){f?1===f?n(t=s(r(t),e,u),e,u,a,h,l,2):2===f&&x(t,e,u,a,h,l):n(r(t),e,u,a,h,l,1);break}}}function i(t){var e=t.prev,r=t,n=t.next;if(T(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(_(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&T(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function o(t,e,r,n){var i=t.prev,o=t,s=t.next;if(T(i,o,s)>=0)return!1;for(var x=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,a=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,h=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,l=c(x,u,e,r,n),f=c(a,h,e,r,n),y=t.prevZ,v=t.nextZ;y&&y.z>=l&&v&&v.z<=f;){if(y!==t.prev&&y!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,y.x,y.y)&&T(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,v!==t.prev&&v!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,v.x,v.y)&&T(v.prev,v,v.next)>=0)return!1;v=v.nextZ}for(;y&&y.z>=l;){if(y!==t.prev&&y!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,y.x,y.y)&&T(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=f;){if(v!==t.prev&&v!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,v.x,v.y)&&T(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function s(t,e,n){var i=t;do{var o=i.prev,s=i.next.next;!p(o,s)&&g(o,i,i.next,s)&&m(o,s)&&m(s,o)&&(e.push(o.i/n),e.push(i.i/n),e.push(s.i/n),R(i),R(i.next),i=t=s),i=i.next}while(i!==t);return r(i)}function x(t,e,i,o,s,x){var u=t;do{for(var a=u.next.next;a!==u.prev;){if(u.i!==a.i&&d(u,a)){var h=L(u,a);return u=r(u,u.next),h=r(h,h.next),n(u,e,i,o,s,x),void n(h,e,i,o,s,x)}a=a.next}u=u.next}while(u!==t)}function u(t,n,i,o){var s,x,u,h=[];for(s=0,x=n.length;s<x;s++)(u=e(t,n[s]*o,s<x-1?n[s+1]*o:t.length,o,!1))===u.next&&(u.steiner=!0),h.push(v(u));for(h.sort(a),s=0;s<h.length;s++)i=r(i=l(h[s],i),i.next);return i}function a(t,e){return t.x-e.x}function h(t){if(t.next.prev===t)return t;let e=t;for(;;){const r=e.next;if(r.prev===e||r===e||r===t)break;e=r}return e}function l(t,e){var n=function(t,e){var r,n=e,i=t.x,o=t.y,s=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var x=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=i&&x>s){if(s=x,x===i){if(o===n.y)return n;if(o===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===s)return r;var u,a=r,h=r.x,l=r.y,y=1/0;n=r;do{i>=n.x&&n.x>=h&&i!==n.x&&_(o<l?i:s,o,h,l,o<l?s:i,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(i-n.x),m(n,t)&&(u<y||u===y&&(n.x>r.x||n.x===r.x&&f(r,n)))&&(r=n,y=u)),n=n.next}while(n!==a);return r}(t,e);if(!n)return e;var i=L(n,t),o=r(n,n.next);let s=h(i);return r(s,s.next),o=h(o),h(e===n?o:e)}function f(t,e){return T(t.prev,t,e.prev)<0&&T(e.next,t,t.next)<0}function y(t,e,r,n){var i=t;do{null===i.z&&(i.z=c(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,o,s,x,u,a=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,n=r,x=0,e=0;e<a&&(x++,n=n.nextZ);e++);for(u=a;x>0||u>0&&n;)0!==x&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,x--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,a*=2}while(s>1)}(i)}function c(t,e,r,n,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function v(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next}while(e!==t);return r}function _(t,e,r,n,i,o,s,x){return(i-s)*(e-x)-(t-s)*(o-x)>=0&&(t-s)*(n-x)-(r-s)*(e-x)>=0&&(r-s)*(o-x)-(i-s)*(n-x)>=0}function d(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&g(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}(t,e)&&(m(t,e)&&m(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==t);return n}(t,e)&&(T(t.prev,t,e.prev)||T(t,e.prev,e))||p(t,e)&&T(t.prev,t,t.next)>0&&T(e.prev,e,e.next)>0)}function T(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function p(t,e){return t.x===e.x&&t.y===e.y}function g(t,e,r,n){var i=A(T(t,e,r)),o=A(T(t,e,n)),s=A(T(r,n,t)),x=A(T(r,n,e));return i!==o&&s!==x||!(0!==i||!w(t,r,e))||!(0!==o||!w(t,n,e))||!(0!==s||!w(r,t,n))||!(0!==x||!w(r,e,n))}function w(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function A(t){return t>0?1:t<0?-1:0}function m(t,e){return T(t.prev,t,t.next)<0?T(t,e,t.next)>=0&&T(t,t.prev,e)>=0:T(t,e,t.prev)<0||T(t,t.next,e)<0}function L(t,e){var r=new U(t.i,t.x,t.y),n=new U(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function b(t,e,r,n){var i=new U(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function R(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function U(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B(t,e,r,n){for(var i=0,o=e,s=r-n;o<r;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}return t.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,s=Math.abs(B(t,0,o,r));if(i)for(var x=0,u=e.length;x<u;x++){var a=e[x]*r,h=x<u-1?e[x+1]*r:t.length;s-=Math.abs(B(t,a,h,r))}var l=0;for(x=0;x<n.length;x+=3){var f=n[x]*r,y=n[x+1]*r,c=n[x+2]*r;l+=Math.abs((t[f]-t[c])*(t[y+1]-t[f+1])-(t[f]-t[y])*(t[c+1]-t[f+1]))}return 0===s&&0===l?0:Math.abs((l-s)/s)},t.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[i][o][s]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r},t},void 0!==(o=i())&&(n.exports=o);const u=(0,s.g)(x.exports)},32488:(t,e,r)=>{r.d(e,{A:()=>Z});const n=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],i=["آ","أ","إ","ا"],o=["ﻵ","ﻷ","ﻹ","ﻻ"],s=["ﻶ","ﻸ","ﻺ","ﻼ"],x=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],u=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],a=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],h=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],l=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],f=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],y=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],c=["ء","ف"],v=["غ","ي"],_=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],d=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],T=0,p=1,g=2,w=3,A=4,m=5,L=6,b=7,R=8,U=10,B=11,F=12,N=18,V=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],S=100,E=[S+0,T,T,T,T,S+1,S+2,S+3,p,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,S+4,A,A,A,T,A,T,A,T,A,A,A,T,T,A,A,T,T,T,T,T,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,T,T,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,T,T,A,A,T,T,A,A,T,T,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,T,T,T,S+5,b,b,S+6,S+7],M=[[N,N,N,N,N,N,N,N,N,L,m,L,R,m,N,N,N,N,N,N,N,N,N,N,N,N,N,N,m,m,m,L,R,A,A,B,B,B,A,A,A,A,A,U,9,U,9,9,g,g,g,g,g,g,g,g,g,g,9,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,A,N,N,N,N,N,N,m,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,9,A,B,B,B,B,A,A,A,A,T,A,A,N,A,A,B,B,g,g,A,T,A,A,A,g,T,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,T,T,T,T,T,T,T,T],[T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,T,T,T,T,T,T,T,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,T,A,A,A,A,A,A,A,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,p,F,p,F,F,p,F,F,p,F,A,A,A,A,A,A,A,A,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A,A,A,A,A,p,p,p,p,p,A,A,A,A,A,A,A,A,A,A,A],[w,w,w,w,A,A,A,A,b,B,B,b,9,b,A,A,F,F,F,F,F,F,F,F,F,F,F,b,A,A,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,w,w,w,w,w,w,w,w,w,w,B,w,w,b,b,b,F,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,F,F,F,F,F,F,F,w,A,F,F,F,F,F,F,b,b,F,F,A,F,F,F,F,b,b,g,g,g,g,g,g,g,g,g,g,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,A,b,b,F,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,A,A,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,F,F,F,F,F,F,F,F,F,F,F,b,A,A,A,A,A,A,A,A,A,A,A,A,A,A,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,F,F,F,F,F,F,F,F,F,p,p,A,A,A,A,p,A,A,A,A,A],[R,R,R,R,R,R,R,R,R,R,R,N,N,N,T,p,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,R,m,13,14,15,16,17,9,B,B,B,B,B,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,9,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,R,N,N,N,N,N,A,A,A,A,A,N,N,N,N,N,N,g,T,A,A,g,g,g,g,g,g,U,U,A,A,A,T,g,g,g,g,g,g,g,g,g,g,U,U,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A],[T,T,T,T,T,T,T,A,A,A,A,A,A,A,A,A,A,A,A,T,T,T,T,T,A,A,A,A,A,p,F,p,p,p,p,p,p,p,p,p,p,U,p,p,p,p,p,p,p,p,p,p,p,p,p,A,p,p,p,p,p,A,p,A,p,p,A,p,p,A,p,p,p,p,p,p,p,p,p,p,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,F,F,F,F,F,F,F,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,9,A,9,A,A,9,A,A,A,A,A,A,A,A,A,B,A,A,U,U,A,A,A,A,A,B,B,A,A,A,A,A,b,b,b,b,b,A,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,A,A,N],[A,A,A,B,B,B,A,A,A,A,A,U,9,U,9,9,g,g,g,g,g,g,g,g,g,g,9,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,A,A,A,A,A,A,A,A,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,A,A,A,T,T,T,T,T,T,A,A,T,T,T,T,T,T,A,A,T,T,T,T,T,T,A,A,T,T,T,A,A,A,B,B,A,A,A,B,B,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A]];class Z{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,e,r){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,e,r){nt=[],ot=[];for(let n=0;n<r;n++)t[n]=n,e[n]=n,nt[n]=n}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(e,r))return t;e=this.inputFormat,r=this.outputFormat;let n=t;const x=st,h=K(e.charAt(1)),f=K(r.charAt(1)),c=("I"===e.charAt(0)?"L":e.charAt(0))+h,v=("I"===r.charAt(0)?"L":r.charAt(0))+f,_=e.charAt(2)+r.charAt(2);x.defInFormat=c,x.defOutFormat=v,x.defSwap=_;const d=k(t,c,v,_,x);let T=!1;return"R"===r.charAt(1)?T=!0:"C"!==r.charAt(1)&&"D"!==r.charAt(1)||(T="rtl"===this.checkContextual(d)),this.sourceToTarget=nt,this.targetToSource=function(t){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[t[r]]=r;return e}(this.sourceToTarget),it=this.targetToSource,n=e.charAt(3)===r.charAt(3)?d:"S"===r.charAt(3)?function(t,e,r){if(0===e.length)return"";void 0===t&&(t=!0);const n=(e=String(e)).split("");let i=0,x=1,h=n.length;t||(i=n.length-1,x=-1,h=1);const f=function(t,e,r,n,i){let x=0;const h=[];let f=0;for(let i=e;i*r<n;i+=r)if(j(t[i])||H(t[i])){if("ل"===t[i]&&W(t,i+r,r,n)){t[i]=et(t[i+r],0===x?o:s),i+=r,tt(t,i,r,n),h[f]=i,f++,x=0;continue}const e=t[i];1===x?t[i]=P(t,i+r,r,n)?$(t[i]):G(t[i],a):!0===P(t,i+r,r,n)?t[i]=G(t[i],l):t[i]=G(t[i],u),H(e)||(x=1),!0===X(e)&&(x=0)}else x=0;return h}(n,i,x,h);let y="";for(let e=0;e<n.length;e++)J(f,f.length,e)>-1?(rt(it,e,!t,-1),nt.splice(e,1)):y+=n[e];return y}(T,d):function(t,e,r){if(0===t.length)return"";void 0===e&&(e=!0);let n="";const o=(t=String(t)).split("");for(let r=0;r<t.length;r++){let s=!1;if(o[r]>="ﹰ"&&o[r]<"\ufeff"){const x=t.charCodeAt(r);o[r]>="ﻵ"&&o[r]<="ﻼ"?(e?(r>0&&" "===o[r-1]?n=n.substring(0,n.length-1)+"ل":(n+="ل",s=!0),n+=i[(x-65269)/2]):(n+=i[(x-65269)/2],n+="ل",r+1<t.length&&" "===o[r+1]?r++:s=!0),s&&(rt(it,r,!0,1),nt.splice(r,0,nt[r]))):n+=y[x-65136]}else n+=o[r]}return n}(d,T),this.sourceToTarget=nt,this.targetToSource=it,this.levels=ot,n}_inputFormatSetter(t){if(!lt.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!lt.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,e){return t?this._inputFormatSetter(t):t=this.inputFormat,e?this._outputFormatSetter(e):e=this.outputFormat,t!==e}checkContextual(t){let e=O(t);if("ltr"!==e&&"rtl"!==e){try{e=document.dir.toLowerCase()}catch(t){}"ltr"!==e&&"rtl"!==e&&(e="ltr")}return e}hasBidiChar(t){return ft.test(t)}}function k(t,e,r,n,i){const o=function(t,e,r){if(void 0===e.inFormat&&(e.inFormat=r.defInFormat),void 0===e.outFormat&&(e.outFormat=r.defOutFormat),void 0===e.swap&&(e.swap=r.defSwap),e.inFormat===e.outFormat)return e;const n=e.inFormat.substring(0,1),i=e.outFormat.substring(0,1);let o,s=e.inFormat.substring(1,4),x=e.outFormat.substring(1,4);return"C"===s.charAt(0)&&(o=O(t),s="ltr"===o||"rtl"===o?o.toUpperCase():"L"===e.inFormat.charAt(2)?"LTR":"RTL",e.inFormat=n+s),"C"===x.charAt(0)&&(o=O(t),"rtl"===o?x="RTL":"ltr"===o?(o=function(t){const e=t.split("");return e.reverse(),O(e.join(""))}(t),x=o.toUpperCase()):x="L"===e.outFormat.charAt(2)?"LTR":"RTL",e.outFormat=i+x),e}(t,{inFormat:e,outFormat:r,swap:n},i);if(o.inFormat===o.outFormat)return t;e=o.inFormat,r=o.outFormat,n=o.swap;const s=e.substring(0,1),x=e.substring(1,4),u=r.substring(0,1),a=r.substring(1,4);if(i.inFormat=e,i.outFormat=r,i.swap=n,"L"===s&&"VLTR"===r){if("LTR"===x)return i.dir=at,C(t,i);if("RTL"===x)return i.dir=ht,C(t,i)}if("V"===s&&"V"===u)return i.dir="RTL"===x?ht:at,z(t,i);if("L"===s&&"VRTL"===r)return"LTR"===x?(i.dir=at,t=C(t,i)):(i.dir=ht,t=C(t,i)),z(t);if("VLTR"===e&&"LLTR"===r)return i.dir=at,C(t,i);if("V"===s&&"L"===u&&x!==a)return t=z(t),"RTL"===x?k(t,"LLTR","VLTR",n,i):k(t,"LRTL","VRTL",n,i);if("VRTL"===e&&"LRTL"===r)return k(t,"LRTL","VRTL",n,i);if("L"===s&&"L"===u){const e=i.swap;return i.swap=e.substr(0,1)+"N","RTL"===x?(i.dir=ht,t=C(t,i),i.swap="N"+e.substr(1,2),i.dir=at,t=C(t,i)):(i.dir=at,t=C(t,i),i.swap="N"+e.substr(1,2),t=k(t,"VLTR","LRTL",i.swap,i)),t}return t}function O(t){const e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return e?e[0]<="z"?"ltr":"rtl":""}function C(t,e){const r=t.split(""),n=[];return D(r,n,e),function(t,e,r){if(0!==r.hiLevel&&r.swap.substr(0,1)!==r.swap.substr(1,2))for(let r=0;r<t.length;r++)1===e[r]&&(t[r]=Q(t[r]))}(r,n,e),Y(2,r,n,e),Y(1,r,n,e),ot=n,r.join("")}function D(t,e,r){const n=t.length,i=r.dir?d:_;let o=0,s=-1;const x=[],u=[];r.hiLevel=r.dir,r.lastArabic=!1,r.hasUbatAl=!1,r.hasUbatB=!1,r.hasUbatS=!1;for(let e=0;e<n;e++)x[e]=I(t[e]);for(let a=0;a<n;a++){const n=o,h=q(t,x,u,a,r);u[a]=h,o=i[n][h];const l=240&o;o&=15;const f=i[o][xt];if(e[a]=f,l>0)if(16===l){for(let t=s;t<a;t++)e[t]=1;s=-1}else s=-1;if(i[o][ut])-1===s&&(s=a);else if(s>-1){for(let t=s;t<a;t++)e[t]=f;s=-1}x[a]===m&&(e[a]=0),r.hiLevel|=f}r.hasUbatS&&function(t,e,r,n){for(let i=0;i<r;i++)if(t[i]===L){e[i]=n.dir;for(let r=i-1;r>=0&&t[r]===R;r--)e[r]=n.dir}}(x,e,n,r)}function I(t){const e=t.charCodeAt(0),r=E[e>>8];return r<S?r:M[r-S][255&e]}function z(t,e){const r=t.split("");if(e){const t=[];D(r,t,e),ot=t}return r.reverse(),nt.reverse(),r.join("")}function J(t,e,r){for(let n=0;n<e;n++)if(t[n]===r)return n;return-1}function j(t){for(let e=0;e<c.length;e++)if(t>=c[e]&&t<=v[e])return!0;return!1}function P(t,e,r,n){for(;e*r<n&&H(t[e]);)e+=r;return!!(e*r<n&&j(t[e]))}function W(t,e,r,n){for(;e*r<n&&H(t[e]);)e+=r;let o=" ";if(!(e*r<n))return!1;o=t[e];for(let t=0;t<i.length;t++)if(i[t]===o)return!0;return!1}function Y(t,e,r,n){if(n.hiLevel<t)return;if(1===t&&n.dir===ht&&!n.hasUbatB)return e.reverse(),void nt.reverse();const i=e.length;let o,s,x,u,a,h=0;for(;h<i;){if(r[h]>=t){for(o=h+1;o<i&&r[o]>=t;)o++;for(s=h,x=o-1;s<x;s++,x--)u=e[s],e[s]=e[x],e[x]=u,a=nt[s],nt[s]=nt[x],nt[x]=a;h=o}h++}}function q(t,e,r,n,i){const o=e[n];return{UBAT_L:()=>(i.lastArabic=!1,T),UBAT_R:()=>(i.lastArabic=!1,p),UBAT_ON:()=>A,UBAT_AN:()=>w,UBAT_EN:()=>i.lastArabic?w:g,UBAT_AL:()=>(i.lastArabic=!0,i.hasUbatAl=!0,p),UBAT_WS:()=>A,UBAT_CS:()=>{let t,o;return n<1||n+1>=e.length||(t=r[n-1])!==g&&t!==w||(o=e[n+1])!==g&&o!==w?A:(i.lastArabic&&(o=w),o===t?o:A)},UBAT_ES:()=>(n>0?r[n-1]:m)===g&&n+1<e.length&&e[n+1]===g?g:A,UBAT_ET:()=>{if(n>0&&r[n-1]===g)return g;if(i.lastArabic)return A;let t=n+1;const o=e.length;for(;t<o&&e[t]===B;)t++;return t<o&&e[t]===g?g:A},UBAT_NSM:()=>{if("VLTR"===i.inFormat){const r=e.length;let i=n+1;for(;i<r&&e[i]===F;)i++;if(i<r){const r=t[n].charCodeAt(0),o=r>=1425&&r<=2303||64286===r,s=e[i];if(o&&(s===p||s===b))return p}}return n<1||e[n-1]===m?A:r[n-1]},UBAT_B:()=>(i.lastArabic=!0,i.hasUbatB=!0,i.dir),UBAT_S:()=>(i.hasUbatS=!0,A),UBAT_LRE:()=>(i.lastArabic=!1,A),UBAT_RLE:()=>(i.lastArabic=!1,A),UBAT_LRO:()=>(i.lastArabic=!1,A),UBAT_RLO:()=>(i.lastArabic=!1,A),UBAT_PDF:()=>(i.lastArabic=!1,A),UBAT_BN:()=>A}[V[o]]()}function Q(t){let e,r=0,i=n.length-1;for(;r<=i;)if(e=Math.floor((r+i)/2),t<n[e][0])i=e-1;else{if(!(t>n[e][0]))return n[e][1];r=e+1}return t}function X(t){for(let e=0;e<f.length;e++)if(f[e]===t)return!0;return!1}function $(t){for(let e=0;e<x.length;e++)if(t===x[e])return h[e];return t}function G(t,e){for(let r=0;r<x.length;r++)if(t===x[r])return e[r];return t}function H(t){return t>="ً"&&t<="ٕ"}function K(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function tt(t,e,r,n){for(;e*r<n&&H(t[e]);)e+=r;return e*r<n&&(t[e]=" ",!0)}function et(t,e){for(let r=0;r<i.length;r++)if(t===i[r])return e[r];return t}function rt(t,e,r,n){for(let i=0;i<t.length;i++)(t[i]>e||!r&&t[i]===e)&&(t[i]+=n)}let nt=[],it=[],ot=[];const st={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},xt=5,ut=6,at=0,ht=1,lt=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,ft=/[\u0591-\u06ff\ufb1d-\ufefc]/},15585:(t,e,r)=>{r.d(e,{F:()=>u,l:()=>a});var n=r(2741),i=r(44208);const o=128e3;let s=null,x=null;async function u(){return s||(s=async function(){const t=(0,i.A)("esri-csp-restrictions")?await r.e(177).then(r.bind(r,50177)).then((t=>t.l)):await r.e(3091).then(r.bind(r,13091)).then((t=>t.l));x=await t.default({locateFile:t=>(0,n.s)(`esri/core/libs/libtess/${t}`)})}()),s}function a(t,e){const r=Math.max(t.length,o);return x.triangulate(t,e,r)}},18989:(t,e,r)=>{r.d(e,{A:()=>n});class n{constructor(t=0,e=0,r=0,n=0){this.x=t,this.y=e,this.width=r,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}},83773:(t,e,r)=>{r.d(e,{i:()=>c});var n=r(15294),i=r(76213);function o(t,e){return t.x===e.x&&t.y===e.y}function s(t){if(!t)return;const e=t.length;if(e<=1)return;let r=0;for(let n=1;n<e;n++)o(t[n],t[r])||++r===n||(t[r]=t[n]);t.length=r+1}function x(t,e){return t.x=e.y,t.y=-e.x,t}function u(t,e){return t.x=-e.y,t.y=e.x,t}function a(t,e){return t.x=e.x,t.y=e.y,t}function h(t,e){return t.x=-e.x,t.y=-e.y,t}function l(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function f(t,e){return t.x*e.x+t.y*e.y}function y(t,e,r,n){return t.x=e.x*r+e.y*n,t.y=e.x*n-e.y*r,t}class c{constructor(t,e,r){this._writeVertex=t,this._writeTriangle=e,this._canUseThinTessellation=r,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,e,r=this._canUseThinTessellation){s(t),r&&e.halfWidth<i.Gh&&!e.offset?this._tessellateThin(t,e):this._tessellate(t,e)}_tessellateThin(t,e){if(t.length<2)return;const r=e.wrapDistance||65535;let n=e.initialDistance||0,i=!1,o=t[0].x,s=t[0].y;const x=t.length;for(let e=1;e<x;++e){i&&(i=!1,n=0);let x=t[e].x,u=t[e].y,a=x-o,h=u-s,l=Math.sqrt(a*a+h*h);if(a/=l,h/=l,n+l>r){i=!0;const t=(r-n)/l;l=r-n,x=(1-t)*o+t*x,u=(1-t)*s+t*u,--e}const f=this._writeVertex(o,s,0,0,a,h,h,-a,0,-1,n),y=this._writeVertex(o,s,0,0,a,h,-h,a,0,1,n);n+=l;const c=this._writeVertex(x,u,0,0,a,h,h,-a,0,-1,n),v=this._writeVertex(x,u,0,0,a,h,-h,a,0,1,n);this._writeTriangle(f,y,c),this._writeTriangle(y,c,v),o=x,s=u}}_tessellate(t,e){const r=t[0],i=t[t.length-1],s=o(r,i),c=s?3:2;if(t.length<c)return;const v=e.pixelCoordRatio,_=null!=e.capType?e.capType:n.xR.BUTT,d=null!=e.joinType?e.joinType:n.JO.MITER,T=null!=e.miterLimit?Math.min(e.miterLimit,4):2,p=null!=e.roundLimit?Math.min(e.roundLimit,1.05):1.05,g=null!=e.halfWidth?e.halfWidth:2,w=!!e.textured;let A,m,L,b=null;const R=this._prevNormal,U=this._nextNormal;let B=-1,F=-1;const N=this._joinNormal;let V,S;const E=this._textureNormalLeft,M=this._textureNormalRight,Z=this._textureNormal;let k=-1,O=-1;const C=e.wrapDistance||65535;let D=e.initialDistance||0;const I=this._writeVertex,z=this._writeTriangle,J=(t,e,r,n,i,o)=>{const s=I(m,L,V,S,r,n,t,e,i,o,D);return k>=0&&O>=0&&s>=0&&z(k,O,s),k=O,O=s,s};s&&(A=t[t.length-2],U.x=i.x-A.x,U.y=i.y-A.y,F=l(U),U.x/=F,U.y/=F);let j=!1;for(let e=0;e<t.length;++e){if(j&&(j=!1,D=0),A&&(R.x=-U.x,R.y=-U.y,B=F,D+B>C&&(j=!0)),j){const r=(C-D)/B;B=C-D,A={x:(1-r)*A.x+r*t[e].x,y:(1-r)*A.y+r*t[e].y},--e}else A=t[e];m=A.x,L=A.y;const r=e<=0&&!j,i=e===t.length-1;if(r||(D+=B),b=i?s?t[1]:null:t[e+1],b?(U.x=b.x-m,U.y=b.y-L,F=l(U),U.x/=F,U.y/=F):(U.x=void 0,U.y=void 0),!s){if(r){u(N,U),V=N.x,S=N.y,_===n.xR.SQUARE&&(J(-U.y-U.x,U.x-U.y,U.x,U.y,0,-1),J(U.y-U.x,-U.x-U.y,U.x,U.y,0,1)),_===n.xR.ROUND&&(J(-U.y-U.x,U.x-U.y,U.x,U.y,-1,-1),J(U.y-U.x,-U.x-U.y,U.x,U.y,-1,1)),_!==n.xR.ROUND&&_!==n.xR.BUTT||(J(-U.y,U.x,U.x,U.y,0,-1),J(U.y,-U.x,U.x,U.y,0,1));continue}if(i){x(N,R),V=N.x,S=N.y,_!==n.xR.ROUND&&_!==n.xR.BUTT||(J(R.y,-R.x,-R.x,-R.y,0,-1),J(-R.y,R.x,-R.x,-R.y,0,1)),_===n.xR.SQUARE&&(J(R.y-R.x,-R.x-R.y,-R.x,-R.y,0,-1),J(-R.y-R.x,R.x-R.y,-R.x,-R.y,0,1)),_===n.xR.ROUND&&(J(R.y-R.x,-R.x-R.y,-R.x,-R.y,1,-1),J(-R.y-R.x,R.x-R.y,-R.x,-R.y,1,1));continue}}let o,c,I=(W=U,-((P=R).x*W.y-P.y*W.x));if(Math.abs(I)<.01)f(R,U)>0?(N.x=R.x,N.y=R.y,I=1,o=Number.MAX_VALUE,c=!0):(u(N,U),I=1,o=1,c=!1);else{N.x=(R.x+U.x)/I,N.y=(R.y+U.y)/I,o=l(N);const t=(o-1)*g*v;c=o>4||t>B&&t>F}V=N.x,S=N.y;let z=d;switch(d){case n.JO.BEVEL:o<1.05&&(z=n.JO.MITER);break;case n.JO.ROUND:o<p&&(z=n.JO.MITER);break;case n.JO.MITER:o>T&&(z=n.JO.BEVEL)}switch(z){case n.JO.MITER:if(J(N.x,N.y,-R.x,-R.y,0,-1),J(-N.x,-N.y,-R.x,-R.y,0,1),i)break;if(w){const t=j?0:D;k=this._writeVertex(m,L,V,S,U.x,U.y,N.x,N.y,0,-1,t),O=this._writeVertex(m,L,V,S,U.x,U.y,-N.x,-N.y,0,1,t)}break;case n.JO.BEVEL:{const t=I<0;let e,r,n,o;if(t){const t=k;k=O,O=t,e=E,r=M}else e=M,r=E;if(c)n=t?u(this._innerPrev,R):x(this._innerPrev,R),o=t?x(this._innerNext,U):u(this._innerNext,U);else{const e=t?h(this._inner,N):a(this._inner,N);n=e,o=e}const s=t?x(this._bevelStart,R):u(this._bevelStart,R);J(n.x,n.y,-R.x,-R.y,e.x,e.y);const l=J(s.x,s.y,-R.x,-R.y,r.x,r.y);if(i)break;const f=t?u(this._bevelEnd,U):x(this._bevelEnd,U);if(c){const t=this._writeVertex(m,L,V,S,-R.x,-R.y,0,0,0,0,D);k=this._writeVertex(m,L,V,S,U.x,U.y,o.x,o.y,e.x,e.y,D),O=this._writeVertex(m,L,V,S,U.x,U.y,f.x,f.y,r.x,r.y,D),this._writeTriangle(l,t,O)}else{if(w){const t=this._bevelMiddle;t.x=(s.x+f.x)/2,t.y=(s.y+f.y)/2,y(Z,t,-R.x,-R.y),J(t.x,t.y,-R.x,-R.y,Z.x,Z.y),y(Z,t,U.x,U.y),k=this._writeVertex(m,L,V,S,U.x,U.y,t.x,t.y,Z.x,Z.y,D),O=this._writeVertex(m,L,V,S,U.x,U.y,o.x,o.y,e.x,e.y,D)}else{const t=k;k=O,O=t}J(f.x,f.y,U.x,U.y,r.x,r.y)}if(t){const t=k;k=O,O=t}break}case n.JO.ROUND:{const t=I<0;let e,r;if(t){const t=k;k=O,O=t,e=E,r=M}else e=M,r=E;const n=t?h(this._inner,N):a(this._inner,N);let s,l;c?(s=t?u(this._innerPrev,R):x(this._innerPrev,R),l=t?x(this._innerNext,U):u(this._innerNext,U)):(s=n,l=n);const v=t?x(this._roundStart,R):u(this._roundStart,R),_=t?u(this._roundEnd,U):x(this._roundEnd,U),d=J(s.x,s.y,-R.x,-R.y,e.x,e.y),T=J(v.x,v.y,-R.x,-R.y,r.x,r.y);if(i)break;const p=this._writeVertex(m,L,V,S,-R.x,-R.y,0,0,0,0,D);c||this._writeTriangle(k,O,p);const g=h(this._outer,n),A=this._writeVertex(m,L,V,S,U.x,U.y,_.x,_.y,r.x,r.y,D);let b,B;const F=o>2;if(F){let e;o!==Number.MAX_VALUE?(g.x/=o,g.y/=o,e=f(R,g),e=(o*(e*e-1)+1)/e):e=-1,b=t?x(this._startBreak,R):u(this._startBreak,R),b.x+=R.x*e,b.y+=R.y*e,B=t?u(this._endBreak,U):x(this._endBreak,U),B.x+=U.x*e,B.y+=U.y*e}y(Z,g,-R.x,-R.y);const C=this._writeVertex(m,L,V,S,-R.x,-R.y,g.x,g.y,Z.x,Z.y,D);y(Z,g,U.x,U.y);const z=w?this._writeVertex(m,L,V,S,U.x,U.y,g.x,g.y,Z.x,Z.y,D):C,j=p,P=w?this._writeVertex(m,L,V,S,U.x,U.y,0,0,0,0,D):p;let W=-1,Y=-1;if(F&&(y(Z,b,-R.x,-R.y),W=this._writeVertex(m,L,V,S,-R.x,-R.y,b.x,b.y,Z.x,Z.y,D),y(Z,B,U.x,U.y),Y=this._writeVertex(m,L,V,S,U.x,U.y,B.x,B.y,Z.x,Z.y,D)),w?F?(this._writeTriangle(j,T,W),this._writeTriangle(j,W,C),this._writeTriangle(P,z,Y),this._writeTriangle(P,Y,A)):(this._writeTriangle(j,T,C),this._writeTriangle(P,z,A)):F?(this._writeTriangle(p,T,W),this._writeTriangle(p,W,Y),this._writeTriangle(p,Y,A)):(this._writeTriangle(p,T,C),this._writeTriangle(p,z,A)),c?(k=this._writeVertex(m,L,V,S,U.x,U.y,l.x,l.y,e.x,e.y,D),O=A):(k=w?this._writeVertex(m,L,V,S,U.x,U.y,l.x,l.y,e.x,e.y,D):d,this._writeTriangle(k,P,A),O=A),t){const t=k;k=O,O=t}break}}}var P,W}}}}]);