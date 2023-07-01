"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[978],{5548:function(n,t,e){e.d(t,{$4:function(){return u},$h:function(){return r},Ad:function(){return p},I8:function(){return o},IZ:function(){return s},LM:function(){return i},_n:function(){return c},m5:function(){return a}});var r="e228a48ce493c266d1ac0e25cdb4d9c4",c="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w200/",o="https://image.tmdb.org/t/p/w500/",u="https://image.tmdb.org/t/p/original/",i="trending/movie/day",s="trending/movie/week",p="search/movie"},4978:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,c,a=e(5861),o=e(9439),u=e(4687),i=e.n(u),s=e(2791),p=e(7689),l=e(1087),h=e(8617),f=e(168),d=e(225),v=(0,d.Z)(l.rU)(r||(r=(0,f.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),x=e(184),g=function(n){var t=n.to,e=n.children;return(0,x.jsxs)(v,{to:t,children:[(0,x.jsx)(h.jTe,{size:"24"}),e]})},m=d.Z.img(c||(c=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),w=e(171),j=e(5548),k=function(){var n,t,e=(0,p.UO)().id,r=(0,s.useState)(null),c=(0,o.Z)(r,2),u=c[0],h=c[1],f=(0,p.TH)(),d=(0,s.useRef)(null!==(n=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.Y5)(e);case 3:t=n.sent,h(t),console.log(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),u?(0,x.jsxs)("main",{children:[(0,x.jsx)(g,{to:d.current,children:"Go back"}),(0,x.jsx)(m,{src:u.backdrop_path?"".concat(j.$4).concat(u.backdrop_path):"https://via.placeholder.com/960x540",width:"960",height:"540",alt:u.title}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:u.title}),(0,x.jsx)("p",{children:u.overview}),(0,x.jsx)("h2",{children:"Genres"}),u.genres&&(0,x.jsx)("p",{children:u.genres.map((function(n){return n.name})).join(", ")})]}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("h3",{children:"Additional information"}),(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading subpage..."}),children:(0,x.jsx)(p.j3,{})})]}):(0,x.jsx)("div",{children:"Loading..."})}},171:function(n,t,e){e.d(t,{JH:function(){return p},Y5:function(){return h},cl:function(){return d},p1:function(){return i},tx:function(){return m},zv:function(){return x}});var r=e(5861),c=e(4687),a=e.n(c),o=e(1243),u=e(5548);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u._n).concat(u.LM,"?api_key=").concat(u.$h));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var t,e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u._n).concat(u.IZ,"?api_key=").concat(u.$h));case 3:return t=n.sent,e=t.data.results,r=Math.floor(Math.random()*e.length),n.abrupt("return",e[r]);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u._n,"movie/").concat(t,"?api_key=").concat(u.$h,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u._n).concat(u.Ad,"?api_key=").concat(u.$h,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u._n,"movie/").concat(t,"/credits?api_key=").concat(u.$h,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u._n,"movie/").concat(t,"/reviews?api_key=").concat(u.$h,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=978.ca545439.chunk.js.map