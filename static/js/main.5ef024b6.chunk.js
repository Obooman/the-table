(this["webpackJsonpthe-table"]=this["webpackJsonpthe-table"]||[]).push([[0],{14:function(e,t,r){e.exports={columnTitle:"main_columnTitle__1FTAc",sort:"main_sort__2z94d"}},19:function(e,t,r){e.exports={rowHeaderItem:"main_rowHeaderItem__3Llca"}},21:function(e,t,r){e.exports={cell:"main_cell__1Fu2A"}},24:function(e,t,r){e.exports=r(35)},35:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(9),c=r.n(a),l=r(3),s=r(4),i=r(17),u=r.n(i),f=r(8),p=r.n(f);function d(e){var t,r=e.size,a=e.cellSize,c=e.getData,i=e.onClick,f=e.theme,d=void 0===f?{}:f,m=e.scrollLeft,v=void 0===m?0:m,b=e.scrollTop,h=void 0===b?0:b,w=e.onScroll,E=e.children,_=Object(n.useRef)(),O=Object(n.useState)([0,0]),j=Object(s.a)(O,2),y=j[0],g=j[1],C=Object(n.useState)([0,0]),x=Object(s.a)(C,2),T=x[0],S=x[1],k=Object(n.useState)([0,0]),M=Object(s.a)(k,2),N=M[0],B=M[1],I=Object(n.useState)([0,0]),L=Object(s.a)(I,2),z=L[0],A=L[1];Object(n.useEffect)((function(){var e=_.current.offsetWidth,t=_.current.offsetHeight,n=Math.ceil(e/a[0]),o=Math.ceil(t/a[1]),c=r[0]%n,l=r[1]%o,s=(2*n>r[0]?r[0]:2*n)+c,i=(2*o>r[1]?r[1]:2*o)+l,u=parseInt(r[0]/n)-1,f=parseInt(r[1]/o)-1;u>2&&(u-=1),f>2&&(f-=1),B([n,o]),S([s,i]),A([u,f])}),[r,a]),Object(n.useEffect)((function(){var e=_.current,t=function(){var t=e.scrollTop,r=e.scrollLeft,n=!1,o=Object(s.a)(y,2),c=o[0],l=o[1],i=parseInt(r/(N[0]*a[0])),u=parseInt(t/(N[1]*a[1]));(i=i>z[0]?z[0]:i)!==c&&(n=!0),(u=u>z[1]?z[1]:u)!==l&&(n=!0),n&&g([i,u]),w&&w({scrollLeft:r,scrollTop:t})};return e.addEventListener("scroll",t,!1),function(){return e.removeEventListener("scroll",t,!1)}}),[T,y,a,w,N,z]);var V=u()((t={},Object(l.a)(t,p.a.grey,d.isGrey),Object(l.a)(t,p.a.tableContainer,!0),Object(l.a)(t,p.a.barless,d.barless),t));return Object(n.useEffect)((function(){_.current.scrollLeft=v,_.current.scrollTop=h}),[v,h]),o.a.createElement("div",{ref:_,className:V},o.a.createElement("div",{style:{width:r[0]*a[0],height:r[1]*a[1],overflow:"hidden"},onClick:i},o.a.createElement("div",{className:p.a.tableContent,style:{width:T[0]*a[0],height:T[1]*a[1],left:y[0]*N[0]*a[0],top:y[1]*N[1]*a[1]}},Array.from({length:T[0]}).map((function(e,t){return Array.from({length:T[1]}).map((function(e,r){return c({relative:{row:r,column:t},absolute:{row:y[1]*N[1]+r,column:y[0]*N[0]+t}})}))}))),E))}var m=r(2),v=r(19),b=r.n(v),h=Object(m.b)((function(e){return{scrollTop:e.editor.scrollPosition.scrollTop}}))((function(e){var t=e.scrollTop;return o.a.createElement(d,{size:[1,1e3],cellSize:[60,20],getData:function(e){var t=e.relative,r=t.row,n=t.column,a=e.absolute.row;return o.a.createElement("span",{className:b.a.rowHeaderItem,key:"".concat(r,"-").concat(n),style:{left:60*n,top:20*r}},a+1)},theme:{barless:!0,isGrey:!0},scrollTop:t})})),w="a".charCodeAt(0),E="z".charCodeAt(0)-w+1;var _=r(14),O=r.n(_),j=r(23),y=r(1),g=function(e){return"string"===typeof e},C=function(e){return+e+1-+e===1},x=function(e){return void 0===e};function T(e,t){var r={};return Object.values(e).sort((function(e,r){return function(e,r){for(var n=0,o=t.length-1;o>=0&&0===n;){var a,c,l=t[o],s=l.column,i=l.sortMode;e&&r||(n=0);var u=null===e||void 0===e||null===(a=e[s])||void 0===a?void 0:a.value,f=null===r||void 0===r||null===(c=r[s])||void 0===c?void 0:c.value;x(u)&&x(u)&&(n=0),n=i===S.increase?x(u)&&!x(f)?-1:!x(u)&&x(f)?1:g(u)&&C(f)?-1:C(u)&&g(f)?1:g(u)&&g(f)?u.localeCompare(f):u-f:x(u)&&!x(f)?1:!x(u)&&x(f)?-1:g(u)&&C(f)?1:C(u)&&g(f)?-1:g(u)&&g(f)?f.localeCompare(u):f-u,o--}return n}(e,r)})).forEach((function(e,t){r[t]=e})),{rows:r}}var S={increase:"increase",decrease:"decrease"},k={state:{sortType:{},sorters:[]},reducers:{updateSorter:function(e,t){var r=t.nextSorters,n=t.currentSorter,o=Object(y.a)(Object(y.a)({},e.sortType),{},Object(l.a)({},n.column,n));return n.sortMode?o[n.column]=n:delete o[n.column],{sorters:r,sortType:o}}},effects:function(e){return{sort:function(t,r){var n,o=t.column,a=r.sorter,c=a.sortType,l=a.sorters,s=c[o];s?s.sortMode===S.increase?(s.sortMode=S.decrease,n=l.filter((function(e){return e.column!==o})).concat([s])):(s.sortMode=null,n=l.filter((function(e){return e.column!==o}))):(s={column:o,sortMode:S.increase},n=[].concat(Object(j.a)(l),[s])),e.sorter.updateSorter({nextSorters:n,currentSorter:s}),e.sheets.rebuildSheets(T(r.sheets.rows,n))}}}},M=Object(m.b)((function(e){return{scrollLeft:e.editor.scrollPosition.scrollLeft,sortType:e.sorter.sortType}}))((function(e){var t=e.scrollLeft,r=e.sortType,n=e.dispatch;return o.a.createElement(d,{size:[1e3,1],cellSize:[60,20],getData:function(e){var t,a,c=e.relative,l=c.row,s=c.column,i=e.absolute.column;return o.a.createElement("span",{key:"".concat(l,"-").concat(s),className:O.a.columnTitle,style:{left:60*s,top:20*l},onClick:function(){n.sorter.sort({column:i})}},function(e){for(var t="";e>=0;)t=String.fromCharCode(e%E+w)+t,e=Math.floor(e/E)-1;return t}(i).toUpperCase(),o.a.createElement("span",{className:O.a.sort},(null===(t=r[i])||void 0===t?void 0:t.sortMode)===S.increase&&"\u2b06",(null===(a=r[i])||void 0===a?void 0:a.sortMode)===S.decrease&&"\u2b07"))},theme:{isGrey:!0,barless:!0},scrollLeft:t})})),N=r(20),B=function(e){var t=e.toString();return/\./.test(t)?t.length-t.indexOf(".")-1:0},I={ExpressionStatement:!0,BinaryExpression:!0,UnaryExpression:!0,CallExpression:!0,Literal:!0,Identifier:!0},L="addition",z="subtraction",A="multiplication",V=function(e,t,r){var n=Math.pow(10,Math.max(B(e),B(t)));switch(r){case L:return(e*n+t*n)/n;case z:return(e*n-t*n)/n;case A:return e*n*t*n/n/n;default:throw new Error("Invalid arithmetic operator")}};var P=function(e){return/^[a-z]{1,3}\d{1,8}$$/gim.test(e)},U=function(e){return 0};function F(){for(var e=0,t=0,r=0,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];for(;e<o.length;){var c=o[e];"string"===typeof c&&(c=Number(c)),"number"!==typeof c&&(c=0);var l=B(c);l>r?(t*=Math.pow(10,l-r),c*=Math.pow(10,l),r=l):l<=r&&(c*=Math.pow(10,r)),t+=c,e++}return t/Math.pow(10,r)}var H={SUM:F,AVG:function(){return 0===arguments.length?0:F.apply(void 0,arguments)/arguments.length},PI:function(){return Math.PI}},G=function(e){return e.toUpperCase()in H},W=function(e){return G(e)&&H[e.toUpperCase()]},D=document.createElement("canvas").getContext("2d");function R(e){return void 0===e?0:(D.font="16px sans-serif",D.measureText(e).width)}var J=r(5),Q=r.n(J),Z=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.dispatch,r=e.onBlur,a=e.sheets,c=e.row,l=e.col,i=(a.rows[c]||{})[l]||{expression:"",value:""},u=Object(n.useState)(parseInt(R(i.expression)/59)+1),f=Object(s.a)(u,2),p=f[0],d=f[1];Object(n.useEffect)((function(){d(parseInt(R(i.expression)/59)+1)}),[i.expression]);var m=function(e){var n,o,a=e.target.value,i=/^=/.test(a);if(i){var u=function(e,t,r){var n=t.isVariable,o=t.getVariableValue,a=r.isFunction,c=r.getFunction;try{return[!1,function e(t){if(!I[t.type])throw new Error("Unsupported syntax block"+t.type);if("Literal"===t.type){if(!/\d+/.test(t.value))throw new Error("invalid literal value");return t.value}if("UnaryExpression"===t.type){if(!/\+|-/.test(t.operator))throw new Error("Invalid Unary Expression");return"+"===t.operator?e(t.argument):-e(t.argument)}if("BinaryExpression"===t.type){var r=e(t.right);switch(t.operator){case"+":return V(e(t.left),e(t.right),L);case"-":return V(e(t.left),e(t.right),z);case"*":return V(e(t.left),e(t.right),A);case"/":if(0===r)throw new Error("Got 0 as division");return e(t.left)/r;case"%":if(0===r)throw new Error("Got 0 as division");return e(t.left)%r;default:throw new Error("Unknown operator detected")}}if("CallExpression"===t.type){var l=t.callee.name;if(a(l))return c(l).apply(this,t.arguments.map((function(t){return e(t)})));throw new Error("calling unknown inset function")}if("Identifier"===t.type){if(n(t.name))return o(t.name);throw new Error("using undefined variable")}}(N.a(e,{ecmaVersion:2020}).body[0].expression)]}catch(l){return[l,0]}}(o=a.slice(1),{isVariable:P,getVariableValue:U},{isFunction:G,getFunction:W}),f=Object(s.a)(u,2),p=f[0],d=f[1];n=p?"#ERROR":d}else n=a;t.sheets.updateValue({row:c,column:l,isExpression:i,value:n,expression:o}),r&&r(e)};return o.a.createElement("div",null,o.a.createElement("div",{className:Q.a.focusBlock,style:{width:59*p},onChange:function(e){R(e.target.value)>59*p&&d(p+1)},onClick:function(e){e.stopPropagation()}},o.a.createElement("input",{defaultValue:i.isExpression?"=".concat(i.expression):i.value,autoFocus:!0,type:"text",className:Q.a.editingBorderTextContent,onBlur:function(e){m(e),r&&r(e)},onKeyDown:function(e){"Enter"===e.key&&m(e)}})))})),$=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.sheets,r=e.row,n=e.col,a=(t.rows[r]||{})[n]||{},c="value"in a?a.value:"";return o.a.createElement("div",{className:Q.a.focusBlock},c)})),q="focused",K="editing",X={state:{mode:"normal",cell:{width:60,height:20},scrollPosition:{scrollLeft:0,scrollTop:0},focusCell:{row:0,col:0}},reducers:{updateScrollPosition:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{scrollPosition:t})},updateMode:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{mode:t})},updateFocusCell:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{focusCell:t})}},effects:function(e){return{}}},Y=Object(m.b)((function(e){return{sheets:e.sheets,mode:e.editor.mode,focusCell:e.editor.focusCell}}))((function(e){var t=e.dispatch,r=e.focusCell,n=r.row,a=r.col,c=e.mode,l={left:60*a,top:20*n};return c===q?o.a.createElement("div",{onDoubleClick:function(e){t.editor.updateMode(K)},onClick:function(e){e.stopPropagation()},className:Q.a.activeCellWrapper,style:l},o.a.createElement($,{row:n,col:a})):c===K?o.a.createElement("div",{className:Q.a.activeCellWrapper,style:l},o.a.createElement(Z,{row:n,col:a,onBlur:function(){t.editor.updateMode(q)}})):null})),ee=r(21),te=r.n(ee);var re=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.relative,r=t.row,n=t.column,a=e.absolute,c=a.row,l=a.column,s=(e.sheets.rows[c]||{})[l]||{},i="value"in s?s.value:"";return o.a.createElement("div",{className:te.a.cell,key:"".concat(r,"-").concat(n),style:{left:60*n,top:20*r}},i)})),ne=Object(m.b)((function(e){return{sheets:e.sheets}}))((function(e){var t=e.dispatch,r=e.sheets;return o.a.createElement(d,{size:[1e3,1e3],cellSize:[60,20],getData:function(e){var t,n,a=e.relative,c=a.row,l=a.column,s=e.absolute,i=s.row,u=s.column;return(null===(t=r.rows)||void 0===t||null===(n=t[i])||void 0===n?void 0:n[u])?o.a.createElement(re,Object.assign({key:"".concat(c,"-").concat(l)},e)):null},onClick:function(e){t.editor.updateFocusCell({row:parseInt(e.nativeEvent.offsetY/20),col:parseInt(e.nativeEvent.offsetX/60)}),t.editor.updateMode(q)},theme:{isGrey:!1},onScroll:function(e){t.editor.updateScrollPosition(e)}},o.a.createElement(Y,null))})),oe=r(6),ae=r.n(oe);var ce=function(){return o.a.createElement("div",{className:ae.a.app},o.a.createElement("div",{className:ae.a.tableApplication},o.a.createElement("div",{className:ae.a.rowsTitle},o.a.createElement("div",{className:ae.a.cornerBlock}),o.a.createElement(h,null)),o.a.createElement("div",{className:ae.a.dataContent},o.a.createElement("div",{className:ae.a.columnHeader},o.a.createElement(M,null)),o.a.createElement("div",{className:ae.a.contentTable},o.a.createElement(ne,null)))))},le=r(22),se={state:{rows:{}},reducers:{updateValue:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{rows:Object(y.a)(Object(y.a)({},e.rows),{},Object(l.a)({},t.row,Object(y.a)(Object(y.a)({},e.rows[t.row]),{},Object(l.a)({},t.column,t))))})},changeRow:function(e,t){var r=e.rows[999];return delete e.rows[999],Object(y.a)(Object(y.a)({},e),{},{rows:{0:r}})},rebuildSheets:function(e,t){return t}},effects:{}},ie=Object(le.init)({models:{sheets:se,editor:X,sorter:k}});window.store=ie;var ue=ie;c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:ue},o.a.createElement(ce,null))),document.getElementById("root"))},5:function(e,t,r){e.exports={focusBlock:"main_focusBlock__1BEst",editingBorder:"main_editingBorder__QkzpS",editingBorderTextContent:"main_editingBorderTextContent___xjOU",activeCellWrapper:"main_activeCellWrapper__2b12p"}},6:function(e,t,r){e.exports={app:"app_app__cewju",tableApplication:"app_tableApplication__3tpc6",rowsTitle:"app_rowsTitle__2Zbtn",cornerBlock:"app_cornerBlock__iLuJQ",dataContent:"app_dataContent__3hjQe",columnHeader:"app_columnHeader__298vN",contentTable:"app_contentTable__1qSbT"}},8:function(e,t,r){e.exports={grey:"main_grey__2Mkp3",tableContent:"main_tableContent__3uOra",barless:"main_barless__hNoCM",tableContainer:"main_tableContainer__2Zf2n",focus:"main_focus__-eHuC",cell:"main_cell__2WWoR"}}},[[24,1,2]]]);
//# sourceMappingURL=main.5ef024b6.chunk.js.map