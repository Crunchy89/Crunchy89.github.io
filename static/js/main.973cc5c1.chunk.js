(this.webpackJsonpzoel=this.webpackJsonpzoel||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/file_1481423289.a9b456df.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/file_1481423323.cee29e06.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/file_1481423391.95c5ea42.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/logo512.39e3f499.png"},26:function(e,a,t){e.exports=t.p+"static/media/logo.30294ae2.png"},28:function(e,a,t){e.exports=t(39)},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),i=t(7),s=t(8),o=t(10),m=t(9),u=t(1),d=t(22),h=t.n(d),E=t(23),f=t.n(E),g=t(24),p=t.n(g),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={barang:[{gambar:h.a,nama:"Kalung merah",harga:"Rp. 20.000",diskon:"30",detail:"Detail Kalung Merah"},{gambar:f.a,nama:"Mainan anting",harga:"Rp. 15.000",diskon:"30",detail:"Detail Mainan Anting"},{gambar:p.a,nama:"Gelang Kuning",harga:"Rp. 18.000",diskon:"30",detail:"Detail gelang kuning"}]},n}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state.barang;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container row"},l.a.createElement("div",{class:"col s12 card-panel center red",style:{fontSize:"1.5em",fontWeight:600,color:"#fff"}},"Hot Promo !"),l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"row"},e.map((function(e,a){return l.a.createElement("div",{className:"col s12 m4 "},l.a.createElement("div",{class:"card hoverable"},l.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},l.a.createElement("img",{class:"activator",src:e.gambar,alt:"gambar"})),l.a.createElement("div",{class:"card-content"},l.a.createElement("span",{class:"card-title activator grey-text text-darken-4"},e.nama,l.a.createElement("i",{class:"material-icons right"},"more_vert")),l.a.createElement("div",null,e.harga),l.a.createElement("p",{style:{color:"red"}},l.a.createElement("b",null,"Diskon")," ",e.diskon,"%")),l.a.createElement("div",{class:"card-reveal"},l.a.createElement("span",{class:"card-title grey-text text-darken-4"},e.nama,l.a.createElement("i",{class:"material-icons right"},"close")),l.a.createElement("p",null,e.detail)),l.a.createElement("div",{class:"card-action"},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("a",{href:"#",className:"btn green"},l.a.createElement("i",{className:"material-icons left"},"attach_money"),"Beli"),l.a.createElement("a",{href:"#",className:"btn red"},"Cart",l.a.createElement("i",{className:"material-icons right"},"add_shopping_cart"))))))}))))))}}]),t}(n.Component),b=t(13),k=t(25),w=t.n(k),N=t(26),y=t.n(N),j=t(11),x=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={search:!1},n.handeChange=n.handeChange.bind(Object(b.a)(n)),n}return Object(s.a)(t,[{key:"handeChange",value:function(e){e.preventDefault(),this.setState({search:!this.state.search})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"teal darken-3"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(j.b,{to:"/",class:"brand-logo hide-on-med-and-up"},l.a.createElement("img",{src:y.a,alt:"logo",height:"40px"})),l.a.createElement("a",{href:"/",onClick:function(e){return e.preventDefault()},"data-target":"slide-out",className:"sidenav-trigger hide-on-med-and-up"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("div",{className:"right"},l.a.createElement("ul",{id:"nav-mobile",className:"hide-on-small-only"},l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:this.handeChange},l.a.createElement("i",{className:"material-icons right"},"search"),"Search")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"material-icons right"},"add_shopping_cart"),"Keranjang belanja")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"material-icons right"},"person")," Daftar / Masuk")))),l.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-small-only"},l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Hot Promo")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Tracker")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Tentang Kami")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Kontak"))))),this.state.search?l.a.createElement("nav",null,l.a.createElement("div",{class:"nav-wrapper"},l.a.createElement("form",null,l.a.createElement("div",{class:"input-field"},l.a.createElement("input",{id:"search",autoFocus:!0,type:"search",required:!0}),l.a.createElement("label",{class:"label-icon",for:"search"},l.a.createElement("i",{class:"material-icons"},"search")),l.a.createElement("i",{onClick:this.handeChange,class:"material-icons"},"close"))))):""),l.a.createElement("ul",{id:"slide-out",className:"sidenav"},l.a.createElement("li",null,l.a.createElement("div",{className:"user-view"},l.a.createElement("div",{className:"background"},l.a.createElement("img",{src:"https://images.unsplash.com/photo-1471880392079-64cafb1a8b87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"logo",width:"100%"})),l.a.createElement("a",{href:"#user"},l.a.createElement("img",{className:"circle",src:w.a,alt:"logo"})),l.a.createElement("a",{href:"#name"},l.a.createElement("span",{className:"white-text name"},"Toko Mutiara Berkualitas")),l.a.createElement("a",{href:"#email"},l.a.createElement("span",{className:"white-text email"},"GriyaManik@gmail.com")))),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Hot Promo")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Tracker")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Tentang Kami")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Kontak")),l.a.createElement("div",{className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:this.handeChange},l.a.createElement("i",{className:"material-icons right"},"search"),"Search")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"material-icons right"},"add_shopping_cart"),"Keranjang belanja")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"material-icons right"},"person")," Daftar / Masuk"))))}}]),t}(n.Component),C=(t(37),t(38),t(15)),O=t.n(C),_=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){O.a.AutoInit()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(v,null))))}}]),t}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(j.a,null,l.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");D?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(a,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.973cc5c1.chunk.js.map