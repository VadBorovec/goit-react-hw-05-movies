"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{4723:function(n,t,e){e.d(t,{Z:function(){return j}});var r,c,a,o,i,u,s,p,l=e(7689),f=e(1087),h=e(168),d=e(225),v=d.Z.section(r||(r=(0,h.Z)(["\n  margin-bottom: 1rem;\n  padding: 1rem;\n"]))),m=d.Z.div(c||(c=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, auto));\n  gap: 16px;\n"]))),x=d.Z.div(a||(a=(0,h.Z)(["\n  position: relative;\n"]))),g=d.Z.img(o||(o=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Z=d.Z.h3(i||(i=(0,h.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding-bottom: 10px;\n  color: ",";\n  text-shadow: 1px 2px 0 ",";\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));\n  text-align: center;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),w=d.Z.div(u||(u=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem;\n"]))),y=d.Z.h2(s||(s=(0,h.Z)(["\n  color: ",";\n  text-shadow: 2px 4px 0 ",";\n  font-size: 24px;\n  margin-bottom: 0.5rem;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent})),b=d.Z.p(p||(p=(0,h.Z)(["\n  color: ",";\n  font-size: 18px;\n"])),(function(n){return n.theme.colors.light})),_=e(5548),k=e(184),j=function(n){var t=n.movies,e=(0,l.TH)();return(0,k.jsxs)(v,{children:[(0,k.jsx)(m,{children:t&&t.map((function(n){var t=n.id,r=n.poster_path,c=n.title;return(0,k.jsx)(x,{children:(0,k.jsxs)(f.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,k.jsx)(g,{src:r?"".concat(_.I8).concat(r):"https://via.placeholder.com/200x300",width:"200",height:"300",alt:c}),(0,k.jsx)(Z,{children:c})]})},t)}))}),!t&&(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{children:"Sorry, no movies found."}),(0,k.jsx)(b,{children:"Please try again later."})]})]})}},5548:function(n,t,e){e.d(t,{$4:function(){return i},$h:function(){return r},Ad:function(){return p},I8:function(){return o},IZ:function(){return s},LM:function(){return u},_n:function(){return c},m5:function(){return a}});var r="e228a48ce493c266d1ac0e25cdb4d9c4",c="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w200/",o="https://image.tmdb.org/t/p/w500/",i="https://image.tmdb.org/t/p/original/",u="trending/movie/day",s="trending/movie/week",p="search/movie"},9076:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,c,a,o=e(5861),i=e(9439),u=e(4687),s=e.n(u),p=e(2791),l=e(1087),f=e(4723),h=e(168),d=e(225),v=e(8617),m=d.Z.div(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),x=d.Z.input(c||(c=(0,h.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),g=(0,d.Z)(v.G4C)(a||(a=(0,h.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),Z=e(184),w=function(n){var t=n.value,e=n.onChange;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(g,{}),(0,Z.jsx)(x,{type:"text",value:t,onChange:function(n){return e(n.target.value)}})]})},y=e(171),b=function(){var n,t=(0,p.useState)([]),e=(0,i.Z)(t,2),r=e[0],c=e[1],a=(0,l.lr)(),u=(0,i.Z)(a,2),h=u[0],d=u[1],v=null!==(n=h.get("name"))&&void 0!==n?n:"";(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.cl)(v);case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]);var m=r.filter((function(n){return n.title.toLowerCase().includes(v.toLowerCase())}));return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(w,{value:v,onChange:function(n){d(""!==n?{name:n}:{})}}),(0,Z.jsx)(f.Z,{movies:m})]})}},171:function(n,t,e){e.d(t,{JH:function(){return p},Y5:function(){return f},cl:function(){return d},p1:function(){return u},tx:function(){return g},zv:function(){return m}});var r=e(5861),c=e(4687),a=e.n(c),o=e(1243),i=e(5548);function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i._n).concat(i.LM,"?api_key=").concat(i.$h));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var t,e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i._n).concat(i.IZ,"?api_key=").concat(i.$h));case 3:return t=n.sent,e=t.data.results,r=Math.floor(Math.random()*e.length),n.abrupt("return",e[r]);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i._n,"movie/").concat(t,"?api_key=").concat(i.$h,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i._n).concat(i.Ad,"?api_key=").concat(i.$h,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i._n,"movie/").concat(t,"/credits?api_key=").concat(i.$h,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(i._n,"movie/").concat(t,"/reviews?api_key=").concat(i.$h,"&language=en-US&page=1"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=76.9eb3ad1f.chunk.js.map