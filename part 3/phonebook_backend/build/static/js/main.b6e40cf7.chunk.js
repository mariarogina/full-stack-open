(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(16),a=n.n(s),o=n(3),i=n(4),j=n.n(i),u=n(0),d=function(e){var t=e.person,n=e.handleRemovePerson;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{children:[t.name," ",t.number,Object(u.jsx)("button",{className:"del_btn",onClick:function(){var e;e=t.name,window.confirm("Want to delete ".concat(e,"?"))&&n(t.id)},children:"Delete"})]})})},l=n(43),b=function(e){var t=e.persons,n=e.handleRemovePerson;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)(d,{person:e,handleRemovePerson:n},Object(l.a)())}))})})},h=function(e){var t=e.handleSetSearchString;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",onChange:function(e){return t(e)}})})},O=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(t){return e.addPerson(t)},children:[Object(u.jsxs)("div",{children:["name:",Object(u.jsx)("input",{type:"text",onChange:function(t){return e.handleSetName(t)},required:!0})]}),Object(u.jsxs)("div",{children:["number:",Object(u.jsx)("input",{type:"text",onChange:function(t){return e.handleSetPhone(t)},required:!0})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},f=function(e){var t=e.message,n=e.notifClass;return Object(u.jsx)("div",{className:n,children:Object(u.jsx)("p",{children:t})})},x="/api/persons",m=function(){return j.a.get(x)},p=function(e){return j.a.post(x,e)},v=function(e){return j.a.delete("".concat(x,"/").concat(e))},g=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),i=a[0],j=a[1],d=Object(c.useState)(""),l=Object(o.a)(d,2),x=l[0],g=l[1],S=Object(c.useState)(""),P=Object(o.a)(S,2),w=P[0],C=P[1],k=Object(c.useState)([]),N=Object(o.a)(k,2),y=N[0],D=N[1],R=Object(c.useState)(""),F=Object(o.a)(R,2),q=F[0],E=F[1],J=Object(c.useState)(""),A=Object(o.a)(J,2),B=A[0],I=A[1];Object(c.useEffect)((function(){m().then((function(e){console.log("promise fulfilled"),r(e.data),D(e.data)}))}),[]);var M=function(e){e.preventDefault();var t=y.filter((function(e){return e.name.includes(i)}));r(t)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),q.length>0?Object(u.jsx)("p",{children:Object(u.jsx)(f,{notifClass:"error",message:q})}):B.length>0?Object(u.jsx)("p",{children:Object(u.jsx)(f,{notifClass:"success",message:B})}):Object(u.jsx)("p",{}),Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),r(y),M(e)}(e)},children:[Object(u.jsx)("p",{children:"Filter shown with"}),Object(u.jsx)(h,{handleSetSearchString:function(e){j(e.target.value)}})]}),Object(u.jsx)("h2",{children:"Add a New "}),Object(u.jsx)(O,{addPerson:function(e){e.preventDefault();var t={name:x,number:w};p(t).then((function(e){return r(n.concat(e.data)),I("".concat(t.name," has been added")),C(""),g(""),n})).catch((function(e){console.log(e.response.data),E(e.message),console.log(q)}))},handleSetPhone:function(e){C(e.target.value)},handleSetName:function(e){g(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("div",{children:Object(u.jsx)(b,{persons:n,handleRemovePerson:function(e){v(e).then((function(){return r(n.filter((function(t){return t.id!==e})))}))}})})]})};n(40);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b6e40cf7.chunk.js.map