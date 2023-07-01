"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[859],{4723:function(t,n,e){e.d(n,{Z:function(){return m}});var r,c,a,o,i=e(7689),u=e(1087),s=e(168),p=e(225),l=p.Z.div(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),h=p.Z.div(c||(c=(0,s.Z)(["\n  position: relative;\n  > a {\n    text-decoration: none;\n  }\n"]))),f=p.Z.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),d=p.Z.h3(o||(o=(0,s.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding-bottom: 10px;\n  color: white;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));\n  text-align: center;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n"]))),v=e(5548),g=e(184),m=function(t){var n=t.movies,e=(0,i.TH)();return(0,g.jsx)(l,{children:n.map((function(t){return(0,g.jsx)(h,{children:(0,g.jsxs)(u.rU,{to:"".concat(t.id),state:{from:e},children:[(0,g.jsx)(f,{src:t.poster_path?"".concat(v.I8).concat(t.poster_path):"https://via.placeholder.com/200x300",width:"200",height:"300",alt:t.title}),(0,g.jsx)(d,{children:t.title})]})},t.id)}))})}},5548:function(t,n,e){e.d(n,{$4:function(){return i},$h:function(){return r},Ad:function(){return s},I8:function(){return o},LM:function(){return u},_n:function(){return c},m5:function(){return a}});var r="e228a48ce493c266d1ac0e25cdb4d9c4",c="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w200/",o="https://image.tmdb.org/t/p/w500/",i="https://image.tmdb.org/t/p/original/",u="trending/movie/day",s="search/movie"},4859:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(5861),c=e(9439),a=e(4687),o=e.n(a),i=e(2791),u=e(4723),s=e(171),p=e(184),l=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],a=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.p1)();case 3:n=t.sent,console.log(n),a(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Welcome"}),(0,p.jsx)("img",{src:"https://via.placeholder.com/960x240",alt:""}),(0,p.jsx)(u.Z,{movies:e})]})}},171:function(t,n,e){e.d(n,{Y5:function(){return p},cl:function(){return h},p1:function(){return u},zv:function(){return d}});var r=e(5861),c=e(4687),a=e.n(c),o=e(1243),i=e(5548);function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i._n).concat(i.LM,"?api_key=").concat(i.$h));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i._n,"movie/").concat(n,"?api_key=").concat(i.$h,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i._n).concat(i.Ad,"?api_key=").concat(i.$h,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(i._n,"movie/").concat(n,"/credits?api_key=").concat(i.$h,"&language=en-US"));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=859.78720c29.chunk.js.map