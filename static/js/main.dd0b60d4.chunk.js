(this["webpackJsonpakva-dejon-plus-app"]=this["webpackJsonpakva-dejon-plus-app"]||[]).push([[0],{18:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=(t(23),t(6)),s=t(1),i=t(9),u=t.n(i),m=function(e,a,t){Object(n.useEffect)((function(){if(null!==e){var n=function(n){e.current&&!e.current.contains(n.target)&&e.current.classList.remove(t),n.target.parentNode&&n.target.parentNode.parentNode&&n.target.parentNode.parentNode.classList.contains("products-list")||a&&a.current.classList.contains("make-room")&&(console.log(n.target.parentNode.parentNode),a.current.classList.remove("make-room"))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}}),[e,a,t])};var d=function(e){var a=e.children?e.children.ref:null,t=Object(n.useRef)(null);return m(a,t,"products-list-active"),c.a.createElement("li",{className:"nav-link",ref:t,id:e.id},c.a.createElement(o.b,{to:e.location,onMouseOver:function(){e.children&&e.children.ref&&e.children.ref.current.classList.add("products-list-active"),t&&"products"===t.current.id&&t.current.classList.add("make-room")}},e.name),e.children)};var v=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(n.useEffect)((function(){window.onresize=function(){window.matchMedia("(min-width: 1100px)")&&(t.current.classList.remove("nav-links-active"),a.current.children.forEach((function(e){e.classList.remove("toggler")})))}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"company-logo"},c.a.createElement(o.b,{to:"/akva-dejon-plus/home"},c.a.createElement("img",{src:u.a,alt:"company logo left side"}))),c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"nav-links",ref:t},c.a.createElement(d,{location:"/akva-dejon-plus/home",name:"\u041f\u043e\u0447\u0435\u0442\u043d\u0430"}),c.a.createElement(d,{location:"/akva-dejon-plus/products",name:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438",id:"products"},c.a.createElement("ul",{className:"products-list",ref:e},c.a.createElement("li",null,c.a.createElement(o.b,{to:"/akva-dejon-plus/products/ch"},"\u0425\u0435\u043c\u0438\u0441\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/akva-dejon-plus/products/hr"},"\u041f\u0440\u0435\u0445\u0440\u0430\u043d\u0431\u0435\u043d\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438")))),c.a.createElement("li",{className:"nav-logo"},c.a.createElement(o.b,{to:"/akva-dejon-plus/home"},c.a.createElement("img",{src:u.a,alt:"company logo"}))),c.a.createElement(d,{location:"/akva-dejon-plus/about",name:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438"}),c.a.createElement(d,{location:"/akva-dejon-plus/contact",name:"\u041f\u043e\u0447\u0435\u0442\u043d\u0430"}))),c.a.createElement("div",{className:"hamburger",ref:a,onClick:function(){t.current.classList.toggle("nav-links-active"),a.current.children.forEach((function(e){e.classList.toggle("toggler")}))}},c.a.createElement("div",{className:"line line1"}),c.a.createElement("div",{className:"line line2"}),c.a.createElement("div",{className:"line line3"}))))))};var p=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"feature"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:u.a,alt:"company logo"})),c.a.createElement(o.b,{to:"/akva-dejon-plus/home"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438")))};var E=function(e){var a=e.divId,t=e.title;return c.a.createElement("div",{className:"product-block ".concat(a),onMouseEnter:function(){return e.toggleBg(a,!0)},onMouseLeave:function(){return e.toggleBg(a,!1)}},c.a.createElement("div",{className:"child"},c.a.createElement("div",{className:"product-body"},c.a.createElement("h1",{className:"product-title"},t," \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438")),c.a.createElement("div",{className:"bottles"})))},f=t(17),g=t(0),h=g.useState,k=g.useEffect,b=function(e){var a=h(null),t=Object(f.a)(a,2),n=t[0],c=t[1];return k((function(){c(document.querySelector(e))}),[e]),n};var N=function(){var e=b(".prehranbeni"),a=b(".hemiski"),t=function(t,n){if(a&&e)switch(t){case"prehranbeni":return void a.classList.toggle("transparent-bg",n);case"hemiski":return void e.classList.toggle("transparent-bg",n);default:return}};return c.a.createElement("div",{className:"main-blocks"},c.a.createElement(E,{toggleBg:t,divId:"prehranbeni",title:"\u041f\u0440\u0435\u0445\u0440\u0430\u043d\u0431\u0435\u043d\u0438"}),c.a.createElement(E,{toggleBg:t,divId:"hemiski",title:"\u0425\u0435\u043c\u0438\u0441\u043a\u0438"}))};var j=function(){return c.a.createElement("div",null,"products")};var w=function(){return c.a.createElement("div",null,"about")};var L=function(){return c.a.createElement("div",null,"contact")};var x=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/akva-dejon-plus",component:p}),c.a.createElement(v,null)),c.a.createElement(s.a,{exact:!0,path:"/akva-dejon-plus/home",component:N}),c.a.createElement(s.a,{exact:!0,path:"/akva-dejon-plus/products",component:j}),c.a.createElement(s.a,{exact:!0,path:"/akva-dejon-plus/about",component:w}),c.a.createElement(s.a,{exact:!0,path:"/akva-dejon-plus/contact",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/akva-dejon-logo-transparent.cfb9db0b.png"}},[[18,1,2]]]);
//# sourceMappingURL=main.dd0b60d4.chunk.js.map