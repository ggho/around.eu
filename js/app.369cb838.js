(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/around-eu/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("v-toolbar-title",[t._v("around.eu")]),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),n("v-content",[n("Landing")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"mb-4 text-center"},[n("h1",{staticClass:"display-1 font-weight-bold mb-3"},[t._v(" Travel around Europe "),n("br"),t._v("in a sustainable way ")])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("SearchForm")],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1)],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",[n("v-navigation-drawer",{attrs:{fixed:"",temporary:"",right:"",width:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-toolbar",[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!1}}},[n("v-icon",[t._v("arrow_back_ios")])],1),n("v-text-field",{attrs:{autofocus:"",placeholder:"From: City, Station or Port","hide-details":"auto"}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("near_me")])],1)],1),n("v-list",[t._l(t.searchResults,(function(e,r){return[n("v-list-item",{key:r,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1),t._l(e.children,(function(e,r){return n("v-list-item",{key:r,staticClass:"pl-12",attrs:{"no-action":"",link:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)}))]}))],2)],1),n("v-container",[n("v-row",[n("v-col",{staticClass:"d-flex justify-space-between",attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.singleOrReturnItems,dense:"","hide-details":"auto"},model:{value:t.singleOrReturn,callback:function(e){t.singleOrReturn=e},expression:"singleOrReturn"}}),n("v-spacer"),n("v-btn",{staticClass:"ma-2 mr-n2",attrs:{tile:"",text:"",small:""}},[n("v-icon",{attrs:{left:""}},[t._v("person")]),t._v("1 ")],1)],1)],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{"single-line":"","prepend-inner-icon":"place",placeholder:"From: City, Station or Port","hide-details":"auto"},on:{click:function(e){t.drawer=!0}}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{"single-line":"","prepend-inner-icon":"place",placeholder:"To: City, Station or Port","hide-details":"auto"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{"single-line":"","prepend-inner-icon":"calendar_today",placeholder:"Depart","hide-details":"auto"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{"single-line":"",placeholder:"Return","hide-details":"auto"}})],1)],1)],1),n("v-btn",{staticClass:"mt-6",attrs:{color:"primary"}},[t._v("Primary")])],1)],1)],1)},c=[],u={name:"SearchForm",data:function(){return{singleOrReturn:"round",singleOrReturnItems:[{text:"Round-trip",value:"round"},{text:"One-way",value:"one"}],drawer:null,searchResults:[{icon:"place",text:"Stockholm, Sweden",children:[{icon:"train",text:"Stockholm Centralstation"},{icon:"directions_bus",text:"Cityterminalen, Stockholm"},{icon:"directions_boat",text:"Cruise Terminal, Stockholm"}]}]}}},d=u,v=n("2877"),p=Object(v["a"])(d,l,c,!1,null,null,null),f=p.exports,m={name:"Landing",components:{SearchForm:f},data:function(){return{whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},h=m,b=Object(v["a"])(h,i,s,!1,null,null,null),y=b.exports,_={name:"App",components:{Landing:y},data:function(){return{drawer:null}}},w=_,x=Object(v["a"])(w,o,a,!1,null,null,null),g=x.exports,k=n("ce5b"),C=n.n(k);n("bf40");r["default"].use(C.a);var O=new C.a({theme:{themes:{light:{primary:"#00bfa5",accent:"#00FF00",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"md"}});n("d5e8"),n("5363");r["default"].config.productionTip=!1,new r["default"]({vuetify:O,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.369cb838.js.map