(this.webpackJsonpexcellence_technosoft=this.webpackJsonpexcellence_technosoft||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(16),r=n.n(s),i=(n(28),n(46),n(47),n(24)),o=n(6),j=n(41),l=n(9),u=(n(48),n(85)),d=n(86),b=n(87),O=n(90),x=n(89),h=n(1);var g=function(){var e;console.log("assignement1"),localStorage.getItem("task")?(console.log("iff"),e=JSON.parse(localStorage.getItem("task"))):(localStorage.setItem("task",JSON.stringify([])),e=[]),console.log({data:e});var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(e),i=Object(l.a)(r,2),o=i[0],g=i[1],m=Object(c.useState)(1001),f=Object(l.a)(m,2),v=f[0],p=f[1],k=Object(c.useState)(!1),N=Object(l.a)(k,2),P=N[0],y=N[1],S=Object(c.useState)(""),_=Object(l.a)(S,2),C=_[0],H=_[1],T=Object(c.useState)(null),w=Object(l.a)(T,2),E=w[0],A=w[1];Object(c.useEffect)((function(){localStorage.setItem("task",JSON.stringify(o))}),[o]);var D=function(){y((function(e){return!e}))},F=function(){p((function(e){return e+1})),g((function(e){var t={};return t.id=v,t.tasks=a,[].concat(Object(j.a)(o),[t])})),s("")},I=function(e){var t=Number(e.target.id);D(),H(o[t].tasks),A(t)},J=function(e){var t=Number(e.target.id);g(o.filter((function(e){return e.id!==t})))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)(d.a,{children:Object(h.jsxs)("h4",{style:{marginTop:"1%"},children:["Total Tasks:- ",o.length]})}),Object(h.jsx)("br",{}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b.a,{xs:!0,md:!0,lg:"10",children:Object(h.jsx)("input",{type:"text",className:"input_box",value:a,placeholder:"Type task here...",onKeyPress:function(e){"Enter"===e.key&&F()},defaultValue:"",onChange:function(e){s(e.target.value)}})}),Object(h.jsx)(b.a,{xs:!0,md:!0,lg:"2",children:Object(h.jsx)(O.a,{variant:"success",onClick:F,children:"Add New"})})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(u.a,{style:{minHeight:"10vh"},children:Object(h.jsx)("div",{className:"tasks_container",children:o.length>0?o.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"items_container",children:[Object(h.jsx)("input",{type:"text",className:"task_input_box",value:e.tasks,defaultValue:"",disabled:!0}),Object(h.jsx)(O.a,{variant:"primary",id:t,onClick:I,children:"Edit"}),Object(h.jsx)(O.a,{variant:"danger",id:e.id,onClick:J,children:"Delete"})]},e.id),Object(h.jsx)("br",{})]},t)})):Object(h.jsx)("div",{style:{textAlign:"center"},children:"Nothing to show"})})}),Object(h.jsxs)(x.a,{show:P,size:"lg",onHide:D,children:[Object(h.jsx)(x.a.Header,{closeButton:!0,children:Object(h.jsx)(x.a.Title,{children:"Edit Task"})}),Object(h.jsx)(x.a.Body,{children:Object(h.jsx)("input",{type:"text",className:"task_input_box",value:C,onChange:function(e){H(e.target.value)},defaultValue:""})}),Object(h.jsxs)(x.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:D,children:"Close"}),Object(h.jsx)(O.a,{variant:"primary",onClick:function(e){o[E].tasks=C,D()},children:"Save Changes"})]})]})]})},m=n(39),f=n.n(m),v=[{Header:"Profile",accessor:"avatar"},{Header:"Email",accessor:"email"},{Header:"FirstName",accessor:"first_name"},{Header:"LastName",accessor:"last_name"}],p=n(2),k=n(23),N=(n(73),n(88));var P=function(e){var t=e.columnsData,n=e.canPreviousPage,a=e.value,s=e.previousPageHandler,r=e.nextPageHandler,i=e.currentPage;console.log(a);var o=Object(c.useMemo)((function(){return t}),[]),j=Object(c.useMemo)((function(){return a}),[]),l=Object(k.useTable)({columns:o,data:j},k.usePagination),u=l.getTableProps,d=l.getTableBodyProps,b=l.headerGroups,O=l.page,x=l.prepareRow;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(N.a,Object(p.a)(Object(p.a)({striped:!0,bordered:!0,hover:!0,size:"sm"},u()),{},{children:[Object(h.jsx)("thead",{children:b.map((function(e){return Object(h.jsx)("tr",Object(p.a)(Object(p.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,t){return Object(h.jsx)("th",Object(p.a)(Object(p.a)({},e.getHeaderProps()),{},{children:e.render("Header")}),t)}))}))}))}),Object(h.jsx)("tbody",Object(p.a)(Object(p.a)({},d()),{},{children:O.map((function(e,t){return x(e),Object(h.jsx)("tr",Object(p.a)(Object(p.a)({},e.getRowProps()),{},{children:e.cells.map((function(e,t){return console.log("---",e),Object(h.jsx)("td",Object(p.a)(Object(p.a)({},e.getCellProps),{},{children:0!==t?e.render("Cell"):Object(h.jsx)("img",{className:"avatar",src:e.value,alt:"Not Found"})}),t)}))}),t)}))}))]})),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{children:["Current Page"," ",Object(h.jsx)("strong",{children:i})," "]})," ",Object(h.jsx)("button",{onClick:function(){return s()},disabled:n,children:"Previous"}),Object(h.jsx)("button",{onClick:function(){return r()},children:"Next"})]})]})};n(74);var y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(1),r=Object(l.a)(s,2),i=r[0],o=r[1],j=Object(c.useState)(!0),u=Object(l.a)(j,2),d=u[0],b=u[1],O=Object(c.useState)(!0),x=Object(l.a)(O,2),g=x[0],m=x[1];return Object(c.useEffect)((function(){f.a.get("".concat("https://reqres.in/api/users?page=").concat(i)).then((function(e){var t=e.data;console.log(t.data),a(t.data),b(!d)})).catch((function(e){console.log(e)})),1===i&&m(!0)}),[i]),d?Object(h.jsx)("div",{className:"table_container",children:"Loading..."}):Object(h.jsxs)("div",{className:"table_container",children:[Object(h.jsx)("br",{}),Object(h.jsx)(P,{columnsData:v,canPreviousPage:g,currentPage:i,nextPageHandler:function(){o((function(e){return e+1})),console.log({currentPage:i}),m(!1),b(!d)},previousPageHandler:function(){console.log({currentPage:i}),1===i?(o(1),m(!0)):(o((function(e){return e-1})),b(!d))},value:n})]})};n(75),n(76);var S=function(e){var t=e.val;return Object(h.jsx)("div",{className:"card_container",children:Object(h.jsx)("span",{className:"task_name",children:t.name})})},_=[{id:1,name:"Assigment 1",details:"Todo App.",url:"/assignment1"},{id:2,name:"Assigment 2",details:"Display a list of users.",url:"/assignment2"}];var C=function(){var e=_.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(i.b,{to:e.url,style:{textDecoration:"none"},children:Object(h.jsx)(S,{val:e},e.id)})},e.id)}));return Object(h.jsxs)(i.a,{children:[Object(h.jsx)("div",{className:"home_container",children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/assignment1",children:Object(h.jsx)(u.a,{className:"assignment_container",children:Object(h.jsx)(g,{})})}),Object(h.jsx)(o.a,{path:"/assignment2",children:Object(h.jsx)(u.a,{className:"assignment_container",children:Object(h.jsx)(y,{})})})]})]})};var H=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(C,{})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.f2f5e069.chunk.js.map