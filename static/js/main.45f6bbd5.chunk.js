(this["webpackJsonpdemo-context-api"]=this["webpackJsonpdemo-context-api"]||[]).push([[0],{39:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=a(5),u=l.a.createContext();var i=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(5),s=Object(o.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)("name"),f=Object(o.a)(d,2),E=f[0],g=f[1],b=Object(n.useState)(0),v=Object(o.a)(b,2),h={completed:r,displayCount:m,sortField:E,totalTasks:v[0],toggleShowCompleted:function(){return c((function(e){return!e}))},setDisplayCount:p,setSortField:g,setTotalTasks:v[1]};return l.a.createElement(u.Provider,{value:h},e.children)},s=(a(44),a(23)),m=a(17),p=a(7),d=a(14),f=a(22),E=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),l=a[0],r=a[1];return[function(e){e.persist(),r(Object(f.a)(Object(f.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))},function(t){t.persist(),t.preventDefault(),t.target.reset();r({}),e(l)}]},g=function(e){var t=E((function(t){e.handleSubmit(t)})),a=Object(o.a)(t,2),n=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{onSubmit:r},l.a.createElement("h3",null,"Add Item"),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"To Do Item"),l.a.createElement(p.a.Control,{name:"text",placeholder:"Add To Do List Item",onChange:n,required:!0})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Difficulty Rating"),l.a.createElement(p.a.Control,{defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",onChange:n})),l.a.createElement(p.a.Group,null,l.a.createElement(p.a.Label,null,"Assigned To"),l.a.createElement(p.a.Control,{type:"text",name:"assignee",placeholder:"Assigned To",onChange:n})),l.a.createElement(m.a,{variant:"outline-dark",type:"submit"},"Add Item")))},b=a(70),v=a(69),h=function(e){for(var t=e.tasksPerPage,a=e.totalTasks,n=e.paginate,r=[],c=1;c<=Math.ceil(a/t);c++)r.push(c);return l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination"},r.map((function(e){return l.a.createElement("li",{key:e,className:"page-item"},l.a.createElement(m.a,{variant:"outline-dark",onClick:function(){return n(e)},href:"#"},e))}))))};var C=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)(1),r=Object(o.a)(a,2),c=r[0],i=r[1],s=e.list;"name"===t.sortField?s.sort((function(e,t){return e.assignee.toUpperCase()>t.assignee.toUpperCase()?1:e.assignee.toUpperCase()<t.assignee.toUpperCase()?-1:0})):"difficulty"===t.sortField?s.sort((function(e,t){return e.difficulty-t.difficulty})):"task"===t.sortField&&s.sort((function(e,t){return e.text.toUpperCase()>t.text.toUpperCase()?1:e.text.toUpperCase()<t.text.toUpperCase()?-1:0})),t.completed&&(s=s.filter((function(e){return!e.complete})));var p=c*t.displayCount,d=p-t.displayCount,f=s.slice(d,p);return t.setTotalTasks(s.length),l.a.createElement("section",null,l.a.createElement("ul",null,f.map((function(t){return l.a.createElement("li",{className:"complete-".concat(t.complete.toString()),key:t._id},l.a.createElement(b.a,null,l.a.createElement(b.a.Header,{closeButton:!1},l.a.createElement(v.a,{className:t.complete?"completeBadge":"pendingBadge"},t.complete?"Complete":"Pending"),l.a.createElement("strong",null,t.assignee),l.a.createElement(m.a,{className:"btn-close",onClick:function(){return e.handleDelete(t._id)}},"X")),l.a.createElement(b.a.Body,{onClick:function(){return e.handleComplete(t)}},l.a.createElement("p",null,t.text),l.a.createElement("small",null,"difficulty: ",t.difficulty))))}))),l.a.createElement("div",null,l.a.createElement(h,{tasksPerPage:t.displayCount,totalTasks:t.totalTasks,paginate:function(e){return i(e)}})))};var j=function(e){var t=Object(n.useContext)(u);return l.a.createElement("section",{className:"settings"},l.a.createElement("h4",null,"Settings"),l.a.createElement("div",null,l.a.createElement(m.a,{variant:"outline-dark",onClick:function(){return t.toggleShowCompleted()}},"Toggle show completed")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"sortby"},"sort by:"),l.a.createElement("select",{name:"sortby",onChange:function(e){return t.setSortField(e.target.value)}},l.a.createElement("option",{value:"name"},"name"),l.a.createElement("option",{value:"difficulty"},"difficulty"),l.a.createElement("option",{value:"task"},"task"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"displayNum"},"display:"),l.a.createElement("select",{name:"displayNum",onChange:function(e){return t.setDisplayCount(e.target.value)}},l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"20"},"20"))))},y=a(37),O=a.n(y),k=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(null),c=Object(o.a)(r,2),u=c[0],i=c[1],s=Object(n.useState)(null),m=Object(o.a)(s,2),p=m[0],d=m[1];return[a,u,p,function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};l(!0),O()({method:t,url:e,headers:{"Content-Type":"application/json"},data:a}).then((function(e){return i(e.data)})).catch((function(e){return d(e)})).finally((function(){return l(!1)}))}]},T="https://brsmith-api-server.herokuapp.com/todos",S=function(){var e=k(),t=Object(o.a)(e,4),a=t[0],l=t[1],r=t[3],c=k(),u=Object(o.a)(c,4),i=u[1],s=u[2],m=u[3],p=function(){r(T,"GET")};return Object(n.useEffect)(p,[i,s]),[a,null===l?[]:l,p,function(e){m(T,"POST",e)},function(e){var t="".concat(T,"/").concat(e);m(t,"DELETE")},function(e){e.complete=!e.complete;var t=e._id,a="".concat(T,"/").concat(t);m(a,"PUT",e)}]},x=(a(66),function(){var e=S(),t=Object(o.a)(e,6),a=t[1],r=t[2],c=t[3],u=t[4],i=t[5];return Object(n.useEffect)(r,[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h2",null,"There are ",a.filter((function(e){return!e.complete})).length," Items To Complete")),l.a.createElement("div",null,l.a.createElement(j,null)),l.a.createElement("section",{className:"todo"},l.a.createElement("div",null,l.a.createElement(g,{handleSubmit:c})),l.a.createElement("div",null,l.a.createElement(C,{list:a,handleDelete:u,handleComplete:i}))))});var F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{bg:"light",variant:"light"},l.a.createElement(s.a.Brand,{href:"#"},"Home")),l.a.createElement(x,null))};function D(){return l.a.createElement(i,null,l.a.createElement(F,null))}var N=document.getElementById("root");c.a.render(l.a.createElement(D,null),N)}},[[39,1,2]]]);
//# sourceMappingURL=main.45f6bbd5.chunk.js.map