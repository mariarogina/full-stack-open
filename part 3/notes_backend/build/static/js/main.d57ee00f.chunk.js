(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{41:function(t,n,e){"use strict";e.r(n);var c=e(17),o=e.n(c),r=e(8),a=e(6),i=e(2),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"mt-1 mb-1",children:[n.content,Object(u.jsx)("button",{id:"my-button-style",className:"mb-1 ms-3  p-1 btn btn-outline-primary ",onClick:function(){return e(n.id)},children:c})]})},m=e(5),b=e.n(m),d="/api/notes",l=function(){return b.a.get(d).then((function(t){return t.data}))},f=function(t){return b.a.post(d,t).then((function(t){return t.data}))},j=function(t,n){return b.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},p=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],c=n[1],o=Object(i.useState)(""),m=Object(a.a)(o,2),b=m[0],d=m[1],p=Object(i.useState)(!0),h=Object(a.a)(p,2),O=h[0],v=h[1];Object(i.useEffect)((function(){l().then((function(t){c(t)}))}),[]);var x=O?e:e.filter((function(t){return!0===t.important})),g=function(t){var n=e.find((function(n){return n.id===t})),o=Object(r.a)(Object(r.a)({},n),{},{important:!n.important});j(t,o).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(o){alert("the note '".concat(n.content,"' was already deleted from server")),c(e.filter((function(n){return n.id!==t})))}))};return Object(u.jsxs)("div",{className:"ms-4 mt-3",children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{className:"mb-3 mt-2 btn btn-primary",onClick:function(){return v(!O)},children:["Show ",O?"important":"all"]})}),Object(u.jsx)("ul",{children:x.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:g},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(){return function(t){t.preventDefault();var n={content:b,date:(new Date).toISOString(),important:Math.random()>.5};f(n).then((function(t){c(e.concat(t)),d("")}))}()},children:[Object(u.jsx)("input",{value:b,onChange:function(){return console.log(t.target.value),void d(t.target.value);var t}}),Object(u.jsx)("button",{type:"submit",className:"ms-3 btn btn-success",children:"Save"})]})]})};o.a.render(Object(u.jsx)(p,{notes:[{id:1,content:"HTML is easy",date:"2019-05-30T17:30:31.098Z",important:!0},{id:2,content:"Browser can execute only JavaScript",date:"2019-05-30T18:39:34.091Z",important:!1},{id:3,content:"GET and POST are the most important methods of HTTP protocol",date:"2019-05-30T19:20:14.298Z",important:!0}]}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d57ee00f.chunk.js.map