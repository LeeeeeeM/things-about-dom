webpackJsonp([1],{"/NIM":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(e){n("fPOo")},null,null).exports,c=n("/ocq"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lui-header"},[t("ul",[t("li",[t("router-link",{attrs:{to:"/vanilla-event"}},[this._v("原生DOM事件")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:"/simulate-event"}},[this._v("自定义DOM事件")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:"/vue-data-cons"}},[this._v("Vue一致性")])],1)])])},staticRenderFns:[]};var a=n("VU/8")({},s,!1,function(e){n("/NIM")},"data-v-64dee2ba",null).exports,u=n("//Fk"),l=n.n(u),v=console.log,d={data:function(){return{infoList:[]}},mounted:function(){var e=this;console.log=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];v.apply(void 0,n),e.infoList.push(n)}},beforeDestroy:function(){console.log=v},methods:{clear:function(e){e.preventDefault(),this.infoList=[]}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lui-console"},[n("div",{staticClass:"lui-console__button",on:{contextmenu:e.clear}},[e._v("右键清空")]),e._v(" "),e._l(e.infoList,function(t,r){return n("div",{key:r,staticClass:"lui-console__list"},e._l(t,function(t,r){return n("span",{key:r,staticClass:"lui-console__span"},[e._v(e._s("   "+t+"   "))])}),0)})],2)},staticRenderFns:[]};var f=n("VU/8")(d,h,!1,function(e){n("tVFy")},null,null).exports;function p(e){console.log("inner"),l.a.resolve().then(function(){console.log("inner promise micro",e.currentTarget)}),setTimeout(function(){console.log("inner setTimeout macro",e.currentTarget)})}function m(e){console.log("inner1"),l.a.resolve().then(function(){console.log("inner1 promise micro",e.currentTarget)}),setTimeout(function(){console.log("inner1 setTimeout macro",e.currentTarget)})}function b(e){console.log("outer"),l.a.resolve().then(function(){console.log("outer promise micro",e.currentTarget)}),setTimeout(function(){console.log("outer setTimeout macro",e.currentTarget)})}function g(e){console.log("document"),l.a.resolve().then(function(){console.log("document promise micro",e.currentTarget)}),setTimeout(function(){console.log("document setTimeout macro",e.currentTarget)})}var k={components:{Console:f},mounted:function(){var e=this.$$inner=document.getElementById("inner"),t=this.$$outer=document.getElementById("outer");e.addEventListener("click",p),e.addEventListener("click",p,!0),e.addEventListener("click",m),e.addEventListener("click",m,!0),t.addEventListener("click",b),t.addEventListener("click",b,!0),document.addEventListener("click",g),document.addEventListener("click",g,!0);var n=new Event("click",{bubbles:!0,cancelable:!0});e.dispatchEvent(n)},beforeDestroy:function(){document.removeEventListener("click",g),document.removeEventListener("click",g,!0),this.$$inner.removeEventListener("click",p),this.$$inner.removeEventListener("click",p,!0),this.$$inner.removeEventListener("click",m),this.$$inner.removeEventListener("click",m,!0),this.$$outer.removeEventListener("click",b),this.$$outer.removeEventListener("click",b,!0)}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),t("console")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"outer"}},[t("div",{attrs:{id:"inner"}},[this._v("可点击区域")])])}]};var E,T=n("VU/8")(k,_,!1,function(e){n("wq7Z")},null,null).exports,x=n("Dd8w"),y=n.n(x),L=n("Zx67"),$=n.n(L),C=n("Zrlr"),w=n.n(C),V=n("wxAW"),O=n.n(V),D=n("zwoO"),F=n.n(D),I=n("Pf15"),j=n.n(I),A=n("Xxa5"),M=n.n(A),N=n("exGp"),R=n.n(N),U=(E=R()(M.a.mark(function e(t,n,r){var i,o,c,s,a,u,l,v,d,h;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(i=t._eventTargetListeners[n.type],o=i&&i.capture&&i.capture.fn||[],c=i&&i.capture&&i.capture.hash||[],s=i&&i.bubble&&i.bubble.fn||[],a=i&&i.bubble&&i.bubble.hash||[],u=0,l=0,v={fn:[],hash:[]};u<o.length&&l<s.length;)c[u]._order>=a[l]._order?(v.fn.push(s[l]),v.hash.push(a[l]),l++):(v.fn.push(o[u]),v.hash.push(c[u]),u++);for(;l<s.length;)v.fn.push(s[l]),v.hash.push(a[l]),l++;for(;u<o.length;)v.fn.push(o[u]),v.hash.push(c[u]),u++;d=0,h=v.fn.length;case 12:if(!(d<h)){e.next=22;break}if(!r){e.next=18;break}return e.next=16,v.fn[d].call(t,n);case 16:e.next=19;break;case 18:v.fn[d].call(t,n);case 19:d++,e.next=12;break;case 22:case"end":return e.stop()}},e,this)})),function(e,t,n){return E.apply(this,arguments)});function Z(e,t){return e.capture===t.capture&&e.once===t.once&&e.passive===t.passive}var q=function(e){function t(e){w()(this,t);var n=F()(this,(t.__proto__||$()(t)).call(this));return n.type=e,n.children=[],n.parent=null,n}return j()(t,e),O()(t,[{key:"appendChild",value:function(e){-1===this.children.indexOf(e)&&(e.parent=this,this.children.push(e))}},{key:"removeChild",value:function(e){var t=this.children.indexOf(e);-1!==t&&(this.children.splice(t,1),e.parent=null)}},{key:"insertBefore",value:function(e,t){var n=this.children.indexOf(e);this.children.splice(n,0,t),t.parent=this}},{key:"toJSON",value:function(){return y()({},this,{parent:this.parent&&this.parent.type,children:this.children.map(function(e){return e.type})})}}]),t}(function(){function e(){w()(this,e),this._eventTargetListeners={},this.order=0}return O()(e,[{key:"addEventListener",value:function(e,t,n){var r=(n=n instanceof Object?{capture:!!n.capture,once:!!n.once,passive:!!n.passive,_order:this.order++}:{capture:!!n,once:!1,passive:!1,_order:this.order++}).capture?"capture":"bubble",i=this._eventTargetListeners[e]=this._eventTargetListeners[e]||{};i[r]=i[r]=i[r]||{fn:[],hash:[]};var o=i[r].fn.indexOf(t);-1===o?(i[r].fn.push(t),i[r].hash.push(n)):Z(n,i[r].hash[o])||(i[r].fn.push(t),i[r].hash.push(n))}},{key:"removeEventListener",value:function(e,t,n){var r=(n=n instanceof Object?{capture:!!n.capture,once:!!n.once,passive:!!n.passive}:{capture:!!n,once:!1,passive:!1}).capture?"capture":"bubble",i=this._eventTargetListeners[e]=this._eventTargetListeners[e]||{};i[r]=i[r]=i[r]||{fn:[],hash:[]};var o=i[r].fn.indexOf(t);-1===o||Z(n,i[r].hash[o])&&(i[r].fn.splice(o,1),i[r].hash.splice(o,1)),0===i[r].fn.length&&(i[r]=null)}},{key:"dispatchEvent",value:function(){var e=R()(M.a.mark(function e(t){var n,r,i,o,c,s,a,u,l,v,d=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t.target=this,n=this,r=[];n&&n.parent;)r.push(n.parent),n=n.parent;i=r.slice().reverse(),o=i.length,i.push(this),i=i.concat(r),c=0;case 9:if(!i.length){e.next=48;break}if(s=void 0,n=i.shift(),t.currentTarget=n,!(c<o)){e.next=17;break}s=t.phase="capture",e.next=32;break;case 17:if(!(c>o)){e.next=23;break}if(s=t.phase="bubble",t.bubbles){e.next=21;break}return e.abrupt("break",48);case 21:e.next=32;break;case 23:if(s=t.phase="target",!d){e.next=29;break}return e.next=27,U(this,t,d);case 27:e.next=30;break;case 29:U(this,t,d);case 30:return c++,e.abrupt("continue",9);case 32:a=n._eventTargetListeners[t.type],u=a[s].fn||[],l=0,v=u.length;case 35:if(!(l<v)){e.next=45;break}if(!d){e.next=41;break}return e.next=39,u[l].call(n,t);case 39:e.next=42;break;case 41:u[l].call(n,t);case 42:l++,e.next=35;break;case 45:c++,e.next=9;break;case 48:if(!d){e.next=54;break}return e.next=51,null;case 51:t.currentTarget=e.sent,e.next=55;break;case 54:t.currentTarget=null;case 55:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),B=function(e){function t(){var e;w()(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=F()(this,(e=t.__proto__||$()(t)).call.apply(e,[this].concat(r)));return o.type="dom",o}return j()(t,e),O()(t,[{key:"createElement",value:function(e){var t=new q(e);return t._root=this,t}},{key:"createEvent",value:function(e){return new P(e)}}]),t}(q),P=function(){function e(t,n){w()(this,e),this.type=t,this.initEvent(n)}return O()(e,[{key:"initEvent",value:function(e){this.bubbles=e.bubbles||!1,this.cancelable=e.cancelable||!1}},{key:"toJSON",value:function(){return{type:this.type}}}]),e}(),J={components:{Console:f},mounted:function(){var e=new B,t=e.createElement("div");t.id="div1";var n=e.createElement("div");n.id="div2";var r=e.createElement("div");r.id="div3",e.appendChild(t),e.appendChild(r),e.insertBefore(t,n);var i=e.createElement("div");i.id="div10";var o=e.createElement("div");o.id="div11";var c=e.createElement("div");function s(e){console.log("inner"),l.a.resolve().then(function(){console.log("inner","promise","micro",e.currentTarget)}),setTimeout(function(){console.log("inner","setTimeout","macro",e.currentTarget)})}function a(e){console.log("inner1"),l.a.resolve().then(function(){console.log("inner1 promise micro",e.currentTarget)}),setTimeout(function(){console.log("inner1 setTimeout macro",e.currentTarget)})}function u(e){console.log("outer"),l.a.resolve().then(function(){console.log("outer","promise","micro",e.currentTarget)}),setTimeout(function(){console.log("outer","setTimeout","marco",e.currentTarget)})}function v(e){console.log("document"),l.a.resolve().then(function(){console.log("document","promise","micro",e.currentTarget)}),setTimeout(function(){console.log("document","setTimeout","macro",e.currentTarget)})}c.id="div12",t.appendChild(i),t.appendChild(o),t.appendChild(c),o.addEventListener("click",s),o.addEventListener("click",s,!0),o.addEventListener("click",a),o.addEventListener("click",a,!0),t.addEventListener("click",u),t.addEventListener("click",u,!0),e.addEventListener("click",v),e.addEventListener("click",v,!0),this.$dom=o},methods:{syncEmit:function(){var e=new P("click",{bubbles:!0,cancelable:!0});this.$dom&&this.$dom.dispatchEvent(e,!1)},simulateClick:function(){var e=new P("click",{bubbles:!0,cancelable:!0});this.$dom&&this.$dom.dispatchEvent(e,!0)}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"button-group"},[t("div",{staticClass:"button-test",on:{click:this.syncEmit}},[this._v("同步触发")]),this._v(" "),t("div",{staticClass:"button-test",on:{click:this.simulateClick}},[this._v("模拟事件点击")])]),this._v(" "),t("console")],1)},staticRenderFns:[]};var H=n("VU/8")(J,S,!1,function(e){n("ZTD5")},null,null).exports,W={"1.0.28":"https://cdn.bootcss.com/vue/1.0.28/vue.js","2.5.3":"https://cdn.bootcss.com/vue/2.5.3/vue.js","2.6.1":"https://cdn.bootcss.com/vue/2.6.1/vue.js"};var z={mounted:function(){this.$$_appDom=document.getElementById("vue-data")},methods:{loadVue:function(e){var t=this;return function(e){var t=document.createElement("script");return t.src=W[e],document.head.appendChild(t),new l.a(function(e,n){t.onload=function(t){console.log(t),e()}})}(e).then(function(){var n=document.createElement("div");t.$$_appDom.appendChild(n),new window.Vue({template:'<div><div v-if="loading">{{x}}</div>\n            <div>{{name}}</div>\n            <button @click="clickEvent">点击'+e+"</button></div>",data:function(){return{loading:!1,name:""}},mounted:function(){this.deal()},methods:{deal:function(){var e=this;this.loading=!1;var t=1e3*Math.random()>>0;l.a.resolve().then(function(){e.loading=!0,e.name=t}).then(function(){e.x=t})},clickEvent:function(){this.deal()}}}).$mount(n)})}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"vue-data"}},[n("div",{staticClass:"button-group"},[n("div",{staticClass:"button-test",on:{click:function(t){return e.loadVue("1.0.28")}}},[e._v("加载1.0.28")]),e._v(" "),n("div",{staticClass:"button-test",on:{click:function(t){return e.loadVue("2.5.3")}}},[e._v("加载2.5.3")]),e._v(" "),n("div",{staticClass:"button-test",on:{click:function(t){return e.loadVue("2.6.1")}}},[e._v("加载2.6.1")])])])},staticRenderFns:[]};var X=n("VU/8")(z,G,!1,function(e){n("bqyI")},null,null).exports;r.a.use(c.a);var K=new c.a({routes:[{path:"/",name:"Index",component:a},{path:"/vanilla-event",name:"VanillaEvent",component:T},{path:"/simulate-event",name:"SimulateEvent",component:H},{path:"/vue-data-cons",name:"VueDataCons",component:X}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:K,components:{App:o},template:"<App/>"})},ZTD5:function(e,t){},bqyI:function(e,t){},fPOo:function(e,t){},tVFy:function(e,t){},wq7Z:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.28f60256fd97b538f1d1.js.map