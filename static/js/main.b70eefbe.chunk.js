(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={message:"Notification_message__2M8Gu"}},17:function(t,e,n){},2:function(t,e,n){t.exports={Stat__list:"Statistics_Stat__list__1hYpf",Stat__item:"Statistics_Stat__item__3noB_"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(5),i=n.n(c),o=(n(17),n(6)),r=n(7),l=n(8),b=n(12),u=n(11),_=n(4),d=n.n(_),j=n(0),h=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:d.a.Control__list,children:e.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"button",onClick:n,className:d.a.Control__button,children:t})},t)}))})})},m=n(2),x=n.n(m),f=function(t){var e=t.good,n=t.neutral,a=t.bad,s=t.total,c=t.positivePercentage;return Object(j.jsxs)("ul",{className:x.a.Stat__list,children:[Object(j.jsxs)("li",{className:x.a.Stat__item,children:["Good: ",e]}),Object(j.jsxs)("li",{className:x.a.Stat__item,children:["Neutral: ",n]}),Object(j.jsxs)("li",{className:x.a.Stat__item,children:["Bad: ",a]}),Object(j.jsxs)("li",{className:x.a.Stat__item,children:["Total: ",s]}),Object(j.jsxs)("li",{className:x.a.Stat__item,children:["Positive feedback: ",c,"%"]})]})},v=n(9),O=n.n(v),g=function(t){var e=t.title,n=t.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:O.a.h1,children:e}),n]})},p=n(10),S=n.n(p),k=function(t){var e=t.message;return Object(j.jsx)("p",{className:S.a.message,children:e})},N=function(t){Object(b.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0,total:0},t.visibleStatistics=!1,t.increment=function(e){t.visibleStatistics=!0,t.setState((function(t){var n=e.target.textContent.toLowerCase();return Object(o.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(t,e,n){return t+n+e},t.countPositiveFeedback=function(t,e,n){var a=t+n+e;return(0===a?0:t/a*100).toFixed()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,s=this.increment;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{title:"Please leave feedback",children:Object(j.jsx)(h,{onLeaveFeedback:s,options:["good","neutral","bad"]})}),Object(j.jsx)(g,{title:"Statistics",children:!0===this.visibleStatistics?Object(j.jsx)(f,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(e,n,a),positivePercentage:this.countPositiveFeedback(e,n,a)}):Object(j.jsx)(k,{message:"No feedback given"})})]})}}]),n}(a.Component);n(19);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={Control__list:"Controls_Control__list__1v8KQ",Control__button:"Controls_Control__button__v1AGX"}},9:function(t,e,n){t.exports={h1:"Section_h1__WbobD"}}},[[20,1,2]]]);
//# sourceMappingURL=main.b70eefbe.chunk.js.map