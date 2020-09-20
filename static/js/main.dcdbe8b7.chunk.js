(this["webpackJsonpthe-table"]=this["webpackJsonpthe-table"]||[]).push([[0],{18:function(e,t,r){e.exports=r(29)},29:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(8),c=r.n(o),l=r(4),i=r(3),s=r(14),u=r.n(s),f=r(6),p=r.n(f);function d(e){var t,r=e.size,o=e.cellSize,c=e.getData,s=e.onClick,f=e.theme,d=void 0===f?{}:f,m=e.scrollLeft,b=void 0===m?0:m,v=e.scrollTop,h=void 0===v?0:v,w=e.onScroll,E=e.children,g=Object(n.useRef)(),O=Object(n.useState)([0,0]),_=Object(i.a)(O,2),j=_[0],y=_[1],x=Object(n.useState)([0,0]),C=Object(i.a)(x,2),S=C[0],k=C[1],B=Object(n.useState)([0,0]),T=Object(i.a)(B,2),I=T[0],N=T[1];Object(n.useEffect)((function(){var e=g.current.offsetWidth,t=g.current.offsetHeight,n=Math.ceil(e/o[0]*2),a=Math.ceil(t/o[1]*2),c=r[0]%n,l=parseInt(r[0]/n);n+=c;var i=r[1]%a,s=parseInt(r[1]/a);a+=i,n>r[0]&&(n=r[0],l=0),a>r[1]&&(a=r[1],s=0),k([n,a]),N([l,s])}),[r,o]),Object(n.useEffect)((function(){var e=g.current,t=function(){var t=e.scrollTop,r=e.scrollLeft,n=S[0]/2*o[0],a=S[1]/2*o[1],c=Object(i.a)(j,2),l=c[0],s=c[1],u=!1,f=l,p=s;parseInt(r/n)!==l&&f<=I[0]&&(f=parseInt(r/n),u=!0),parseInt(t/a)!==s&&p<=I[1]&&(p=parseInt(t/a),u=!0),u&&y([f,p]),w&&w({scrollLeft:r,scrollTop:t})};return e.addEventListener("scroll",t,!1),function(){return e.removeEventListener("scroll",t,!1)}}),[S,j,I,o,w]);var M=u()((t={},Object(l.a)(t,p.a.grey,d.isGrey),Object(l.a)(t,p.a.tableContainer,!0),Object(l.a)(t,p.a.barless,d.barless),t));return Object(n.useEffect)((function(){console.log(b,h),g.current.scrollLeft=b,g.current.scrollTop=h}),[b,h]),a.a.createElement("div",{ref:g,className:M},a.a.createElement("div",{style:{width:r[0]*o[0],height:r[1]*o[1],overflow:"hidden"},onClick:s},a.a.createElement("div",{className:p.a.tableContent,style:{width:S[0]*o[0],height:S[1]*o[1],left:j[0]*S[0]/2*o[0],top:j[1]*S[1]/2*o[1]}},Array.from({length:S[0]}).map((function(e,t){return Array.from({length:S[1]}).map((function(e,r){return a.a.createElement("div",{className:p.a.cell,style:{left:60*t,top:20*r}},c(j[1]*S[1]/2+r,j[0]*S[0]/2+t))}))}))),E))}var m=r(1),b=Object(m.b)((function(e){return{scrollTop:e.editor.scrollPosition.scrollTop}}))((function(e){var t=e.scrollTop;return a.a.createElement(d,{size:[1,80],cellSize:[60,20],getData:function(e,t){return e+1},theme:{barless:!0,isGrey:!0},scrollTop:t})})),v="a".charCodeAt(0),h="z".charCodeAt(0)-v+1;var w=Object(m.b)((function(e){return{scrollLeft:e.editor.scrollPosition.scrollLeft}}))((function(e){var t=e.scrollLeft;return a.a.createElement(d,{size:[30,1],cellSize:[60,20],getData:function(e,t){return function(e){for(var t="";e>=0;)t=String.fromCharCode(e%h+v)+t,e=Math.floor(e/h)-1;return t}(t).toUpperCase()},theme:{isGrey:!0,barless:!0},scrollLeft:t})})),E=r(16),g=function(e){var t=e.toString();return/\./.test(t)?t.length-t.indexOf(".")-1:0},O={ExpressionStatement:!0,BinaryExpression:!0,UnaryExpression:!0,CallExpression:!0,Literal:!0,Identifier:!0},_="addition",j="subtraction",y="multiplication",x=function(e,t,r){var n=Math.pow(10,Math.max(g(e),g(t)));switch(r){case _:return(e*n+t*n)/n;case j:return(e*n-t*n)/n;case y:return e*n*t*n/n/n;default:throw new Error("Invalid arithmetic operator")}};var C=function(e){return/^[a-z]{1,3}\d{1,8}$$/gim.test(e)},S=function(e){return 1};function k(){for(var e=0,t=0,r=0,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];for(;e<a.length;){var c=a[e];"string"===typeof c&&(c=Number(c)),"number"!==typeof c&&(c=0);var l=g(c);l>r?(t*=Math.pow(10,l-r),c*=Math.pow(10,l),r=l):l<=r&&(c*=Math.pow(10,r)),t+=c,e++}return t/Math.pow(10,r)}var B={SUM:k,AVG:function(){return 0===arguments.length?0:k.apply(void 0,arguments)/arguments.length},PI:function(){return Math.PI}},T=function(e){return e.toUpperCase()in B},I=function(e){return T(e)&&B[e.toUpperCase()]},N=document.createElement("canvas").getContext("2d");function M(e){return N.font="16px sans-serif",N.measureText(e).width}var L=r(7),V=r.n(L),z=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.onBlur,r=e.sheets,o=e.row,c=e.col,l=(r.rows[o]||{})[c]||{expression:"",value:""},s=Object(n.useState)(""),u=Object(i.a)(s,2),f=u[0],p=u[1],d=Object(n.useState)(parseInt(M(l.expression)/59)+1),m=Object(i.a)(d,2),b=m[0],v=m[1];return a.a.createElement("div",null,a.a.createElement("div",{className:V.a.focusBlock,style:{width:59*b},onClick:function(e){e.stopPropagation()}},a.a.createElement("input",{defaultValue:l.expression,autoFocus:!0,type:"text",onChange:function(e){var t=e.target.value;if(M(t)>59*b&&v(b+1),/^=/.test(t)){var r=function(e,t,r){var n=t.isVariable,a=t.getVariableValue,o=r.isFunction,c=r.getFunction;try{return[!1,function e(t){if(!O[t.type])throw new Error("Unsupported syntax block"+t.type);if("Literal"===t.type){if(!/\d+/.test(t.value))throw new Error("invalid literal value");return t.value}if("UnaryExpression"===t.type){if(!/\+|-/.test(t.operator))throw new Error("Invalid Unary Expression");return"+"===t.operator?e(t.argument):-e(t.argument)}if("BinaryExpression"===t.type){var r=e(t.right);switch(t.operator){case"+":return x(e(t.left),e(t.right),_);case"-":return x(e(t.left),e(t.right),j);case"*":return x(e(t.left),e(t.right),y);case"/":if(0===r)throw new Error("Got 0 as division");return e(t.left)/r;case"%":if(0===r)throw new Error("Got 0 as division");return e(t.left)%r;default:throw new Error("Unknown operator detected")}}if("CallExpression"===t.type){var l=t.callee.name;if(o(l))return c(l).apply(this,t.arguments.map((function(t){return e(t)})));throw new Error("calling unknown inset function")}if("Identifier"===t.type){if(n(t.name))return a(t.name);throw new Error("using undefined variable")}}(E.a(e,{ecmaVersion:2020}).body[0].expression)]}catch(l){return[l,0]}}(t.slice(1),{isVariable:C,getVariableValue:S},{isFunction:T,getFunction:I}),n=Object(i.a)(r,2),a=n[0],o=n[1];p(a?"#ERROR":o)}else p(t)},className:V.a.editingBorderTextContent,onBlur:t,onKeyDown:function(e){"Enter"===e.key&&console.log("updateValue")}})),f)})),U=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.sheets,r=e.row,n=e.col,o=(t.rows[r]||{})[n]||{};return a.a.createElement("div",{className:V.a.focusBlock},o.value||"")})),A=function(e){e.dispatch;var t=e.row,r=e.col,o=Object(n.useState)(!1),c=Object(i.a)(o,2),l=c[0],s=c[1];return a.a.createElement("div",null,l?a.a.createElement(z,{row:t,col:r,onBlur:function(){s(!1)}}):a.a.createElement("div",{onDoubleClick:function(e){s(!0)},onClick:function(e){e.stopPropagation()}},a.a.createElement(U,{row:t,col:r})))};Object(m.b)((function(e){return{sheets:e.sheets}}))(A);var P=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.col,r=e.row,n=(e.sheets.rows[r]||{})[t]||{};return a.a.createElement("div",null,n.value||"")})),G=Object(m.b)()((function(e){var t=e.dispatch,r=Object(n.useState)([0,0]),o=Object(i.a)(r,2),c=o[0],l=o[1];return a.a.createElement(d,{size:[30,80],cellSize:[60,20],getData:function(e,t){return a.a.createElement(P,{row:e,col:t})},onClick:function(e){l([parseInt(e.nativeEvent.offsetX/60),parseInt(e.nativeEvent.offsetY/20)])},theme:{isGrey:!1},onScroll:function(e){t.editor.updateScrollPosition(e)}},a.a.createElement("div",{style:{position:"absolute",left:60*c[0],top:20*c[1]}},a.a.createElement(A,{row:c[1],col:c[0]})))})),D=r(5),R=r.n(D);var F=function(){return a.a.createElement("div",{className:R.a.app},a.a.createElement("div",{className:R.a.tableApplication},a.a.createElement("div",{className:R.a.rowsTitle},a.a.createElement("div",{className:R.a.cornerBlock}),a.a.createElement(b,null)),a.a.createElement("div",{className:R.a.dataContent},a.a.createElement("div",{className:R.a.columnHeader},a.a.createElement(w,null)),a.a.createElement("div",{className:R.a.contentTable},a.a.createElement(G,null)))))},H=r(17),J=r(2),Q={rows:{11:{},12:{}},columns:{1:{}}},W={row:Q.rows[12],col:Q.columns[1],value:25,refedBy:[],isExpression:!0,expression:"A11*2+1"},Z={row:Q.rows[11],col:Q.columns[1],value:12,refedBy:[W],isExpression:!0,expression:"1+4*2+SUM(1,2)"};Q.rows[11][1]=Z,Q.rows[12][1]=W;var $={state:Q,reducers:{updateValue:function(e,t){return Object(J.a)(Object(J.a)({},e),{},{rows:Object(J.a)(Object(J.a)({},e.rows),{},Object(l.a)({},t.row,Object(J.a)(Object(J.a)({},e.rows[t.row]),{},Object(l.a)({},t.column,t.value))))})},changeRow:function(e,t){var r=e.rows[11];return delete e.rows[11],Object(J.a)(Object(J.a)({},e),{},{rows:Object(J.a)(Object(J.a)({},e.rows),{},{13:r})})}},effects:{}},q={state:{mode:"",expression:"",selectedValue:{},cell:{width:60,height:20},scrollPosition:{scrollLeft:0,scrollTop:0}},reducers:{updateScrollPosition:function(e,t){return Object(J.a)(Object(J.a)({},e),{},{scrollPosition:t})}},effects:function(e){return{}}},K=Object(H.init)({models:{sheets:$,editor:q}});window.store=K;var X=K;c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m.a,{store:X},a.a.createElement(F,null))),document.getElementById("root"))},5:function(e,t,r){e.exports={app:"app_app__cewju",tableApplication:"app_tableApplication__3tpc6",rowsTitle:"app_rowsTitle__2Zbtn",cornerBlock:"app_cornerBlock__iLuJQ",dataContent:"app_dataContent__3hjQe",columnHeader:"app_columnHeader__298vN",contentTable:"app_contentTable__1qSbT"}},6:function(e,t,r){e.exports={grey:"main_grey__2Mkp3",tableContent:"main_tableContent__3uOra",barless:"main_barless__hNoCM",tableContainer:"main_tableContainer__2Zf2n",focus:"main_focus__-eHuC",cell:"main_cell__2WWoR"}},7:function(e,t,r){e.exports={focusBlock:"main_focusBlock__1BEst",editingBorder:"main_editingBorder__QkzpS",editingBorderTextContent:"main_editingBorderTextContent___xjOU"}}},[[18,1,2]]]);
//# sourceMappingURL=main.dcdbe8b7.chunk.js.map