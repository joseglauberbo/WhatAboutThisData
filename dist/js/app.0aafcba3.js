(function(t){function e(e){for(var r,a,i=e[0],u=e[1],l=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("img",{attrs:{src:n("5fbe")}}),r("router-view")],1)},s=[],a={name:"App",components:{}},i=a,u=(n("034f"),n("2877")),l=Object(u["a"])(i,o,s,!1,null,null,null),c=l.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("InitialText"),n("Button")],1)},m=[],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lobster&display=swap",rel:"stylesheet"}}),n("h1",{attrs:{id:"myclass"}},[t._v(" This website has focus in show you better visualizations about some data that are open to public. Below you can choose the subject that interests you most. I hope you have fun!!!")])])}],d=(n("4160"),n("ac1f"),n("1276"),n("159b"),{name:"InitialText",methods:{typeWriter:function(t){var e=t.innerHTML.split("");t.innerHTML="",e.forEach((function(e,n){setTimeout((function(){return t.innerHTML+=e}),85*n)}))}},mounted:function(){var t=document.getElementById("myclass");console.log(this.typeWriter(t))}}),v=d,y=(n("fe67"),Object(u["a"])(v,b,h,!1,null,null,null)),_=y.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buttons"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lobster&display=swap",rel:"stylesheet"}}),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"efect",attrs:{type:"button"}},[t._v(" Home ")])]),n("router-link",{attrs:{to:"/music"}},[n("button",{staticClass:"efect",attrs:{type:"button"}},[t._v(" Music ")])]),n("router-link",{attrs:{to:"/politic"}},[n("button",{staticClass:"efect",attrs:{type:"button"}},[t._v(" Politic ")])])],1)},w=[],O={name:"Button"},j=O,x=(n("8274"),Object(u["a"])(j,g,w,!1,null,null,null)),C=x.exports,M={name:"Home",components:{InitialText:_,Button:C}},k=M,E=Object(u["a"])(k,p,m,!1,null,null,null),B=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Button"),n("CardMusic")],1)},T=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containerCards"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lobster&display=swap",rel:"stylesheet"}}),n("router-link",{attrs:{to:"/music/1"}},[n("button",{staticClass:"buttonsCards",attrs:{type:"button"}},[t._v(" browsing what I hear on spotify ")])])],1)},L=[],S={name:"CardMusic"},H=S,I=(n("e151"),Object(u["a"])(H,P,L,!1,null,null,null)),R=I.exports,J={name:"Music",components:{CardMusic:R,Button:C}},W=J,z=Object(u["a"])(W,$,T,!1,null,null,null),A=z.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Button")],1)},D=[],F={name:"Politic",components:{Button:C}},G=F,K=Object(u["a"])(G,q,D,!1,null,null,null),N=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lobster&display=swap",rel:"stylesheet"}}),n("router-link",{attrs:{to:"/music"}},[n("ButtonReturn")],1)],1)},U=[],V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buttons"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lobster&display=swap",rel:"stylesheet"}}),n("button",{staticClass:"buttonReturn",attrs:{type:"button"}},[t._v(" Return ")])])}],Y={name:"ButtonReturn"},Z=Y,tt=(n("b79c"),Object(u["a"])(Z,V,X,!1,null,null,null)),et=tt.exports,nt={name:"SpotifyMusic",components:{ButtonReturn:et}},rt=nt,ot=Object(u["a"])(rt,Q,U,!1,null,null,null),st=ot.exports;r["a"].use(f["a"]);var at=new f["a"]({mode:"history",routes:[{path:"/",name:"Home",component:B},{path:"/music",name:"Music",component:A},{path:"/politic",name:"Politic",component:N},{path:"/music/1",name:"SpotifyMusic",component:st}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(c)},router:at}).$mount("#app")},"5fbe":function(t,e,n){t.exports=n.p+"img/logo2.9409895d.png"},8274:function(t,e,n){"use strict";var r=n("d277"),o=n.n(r);o.a},"85ec":function(t,e,n){},ab20:function(t,e,n){},b79c:function(t,e,n){"use strict";var r=n("da1f"),o=n.n(r);o.a},bb81:function(t,e,n){},d277:function(t,e,n){},da1f:function(t,e,n){},e151:function(t,e,n){"use strict";var r=n("bb81"),o=n.n(r);o.a},fe67:function(t,e,n){"use strict";var r=n("ab20"),o=n.n(r);o.a}});
//# sourceMappingURL=app.0aafcba3.js.map