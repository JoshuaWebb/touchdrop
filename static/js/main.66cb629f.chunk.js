(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,i){},117:function(e,t,i){},119:function(e,t,i){},121:function(e,t,i){},123:function(e,t,i){},125:function(e,t,i){},127:function(e,t,i){},129:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(68),r=i.n(o),c=i(23),s=i(33),l=(i(79),i(85),i(88),i(108),i(114),i(3)),u=i(4),h=i(8),d=i(6),f=i(7),p=i(1),v=(i(45),function(e){var t=e.items.map(function(e){return a.a.createElement("li",{key:e.text,onClick:e.onClick,className:"button"},e.text)});return a.a.createElement("div",{className:"menu"},a.a.createElement("ul",null,t))}),m="PLAYING",b="MAIN",g=[{fill:"#708090"},{fill:"#f5c635"},{fill:"#ee8817"},{fill:"#47b450"},{fill:"#ee575b"},{fill:"#9155f4"},{fill:"#009fd4"}],y=function(e){var t=[{text:"ZEN MODE",onClick:function(){e.setGameMode("ZEN"),e.start()}},{text:"LINE TARGET MODE",onClick:function(){e.setGameMode("LINE TARGET"),e.start()}},{text:"CUSTOMIZE STYLE",onClick:function(){e.setMenu("STYLE")}},{text:"IMPORT / EXPORT SETTINGS",onClick:function(){e.setMenu("IMPORT_EXPORT")}}];return a.a.createElement(v,{items:t})},k=i(19),w=i(2),E=(i(117),i(119),function(e){var t="grid-block "+(e.flash?"grid-block-flash ":"")+(e.piece!==O?"piece-block ":"")+(!1===e.placeable?"cannot-place ":"");return a.a.createElement("rect",{x:e.x,y:e.y,width:e.blockSize,height:e.blockSize,style:e.blockStyles[e.piece],className:t})}),O=-1,S=[[[0,1,2,3],[2,2,2,2],[3,2,1,0],[1,1,1,1]],[[2,2,1,0],[2,1,1,1],[0,0,1,2],[0,1,1,1]],[[0,1,1,0],[1,1,0,0],[1,0,0,1],[0,0,1,1]],[[0,1,1,2],[2,2,1,1],[2,1,1,0],[0,0,1,1]],[[1,0,1,2],[2,1,1,1],[1,2,1,0],[0,1,1,1]],[[0,0,1,2],[2,1,1,1],[2,2,1,0],[0,1,1,1]],[[2,1,1,0],[2,2,1,1],[0,1,1,2],[0,0,1,1]]],x=[[[1,1,1,1],[0,1,2,3],[2,2,2,2],[3,2,1,0]],[[0,1,1,1],[2,2,1,0],[2,1,1,1],[0,0,1,2]],[[0,0,1,1],[0,1,1,0],[1,1,0,0],[1,0,0,1]],[[0,0,1,1],[0,1,1,2],[2,2,1,1],[2,1,1,0]],[[0,1,1,1],[1,0,1,2],[2,1,1,1],[1,2,1,0]],[[0,1,1,1],[0,0,1,2],[2,1,1,1],[2,2,1,0]],[[0,0,1,1],[2,1,1,0],[2,2,1,1],[0,1,1,2]]];S.length;function M(e,t,i,n,a){if(i!==O&&-1!==n&&-1!==e&&-1!==t){var o=j(e,t,i,n,a),r=!o&&j(e,t+1,i,n,a);return!o&&r}return!1}function j(e,t,i,n,a){for(var o=S[i][n],r=x[i][n],c=a.blocks[0].length,s=a.length,l=P(e,t,i,n),u=l.xOffset,h=l.yOffset,d=0;d<o.length;d++){var f=u+o[d],p=h+r[d];if(f<0)return!0;if(f>=c||p>=s)return!0;var v=a.blocks[p]||a.hiddenBlocks[-1*p-1];if(void 0===v)return!0;if(v[f]!==O)return!0}return!1}function P(e,t,i,n){var a=N(i,n);return{xOffset:e-C(i,n),yOffset:t-(T(i,n)+a-1)}}function C(e,t){for(var i=S[e][t],n=i[0],a=1;a<i.length;a++){var o=i[a];n=n<o?n:o}return n}function T(e,t){for(var i=x[e][t],n=i[0],a=1;a<i.length;a++){var o=i[a];n=n<o?n:o}return n}function N(e,t){for(var i=x[e][t],n=i[0],a=i[0],o=1;o<i.length;o++){var r=i[o];n=n<r?n:r,a=a>r?a:r}return a-n+1}var D=function(e){var t=e.piece,i=e.orientation,n=e.blockSize,o=e.placeable,r=e.cx,c=e.cy,s=e.x,l=e.y,u=e.blockStyles;if(t===O||-1===i)return null;var h,d,f=S[t][i],p=x[t][i],v=function(e,t){for(var i=S[e][t],n=i[0],a=i[0],o=1;o<i.length;o++){var r=i[o];n=n<r?n:r,a=a>r?a:r}return a-n+1}(t,i),m=N(t,i),b=C(t,i),g=T(t,i);return void 0!==r&&void 0!==c?(h=r-b*n-v*n/2,d=c-g*n-m*n/2):(h=s-b*n,d=l-(g+m-1)*n),f.map(function(e,i){var r=p[i];return a.a.createElement(E,{key:i,x:h+e*n,y:d+r*n,placeable:o,piece:t,blockStyles:u,blockSize:n})})},F=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e))).changeHandler=function(e){var t=e.target.name,n=e.target.value;i.setState({colors:Object(w.a)({},i.state.colors,Object(k.a)({},t,{fill:n}))})},i.save=function(){var e={blockStyles:Object.values(i.state.colors)};i.props.updateConfig(e),i.props.setMenu(b)},i.reset=function(){i.setState({colors:Object.assign({},g)})},i.cancel=function(){i.props.setMenu(b)},i.state={colors:Object.assign({},e.config.blockStyles)},i}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.config.blockStyles,i=[0,0,104,104],n=t.map(function(t,n){return a.a.createElement("li",{key:n,className:"color-config-item"},a.a.createElement("svg",{shapeRendering:"crispEdges",preserveAspectRatio:"xMidYMid slice",width:78,height:58.5,viewBox:i},a.a.createElement(D,{piece:n,orientation:0,blockSize:26,blockStyles:e.state.colors,cx:52,cy:52})),a.a.createElement("label",{className:"color-picker",style:{backgroundColor:e.state.colors[n].fill,width:"30px",height:"30px"},htmlFor:"cp-"+n},a.a.createElement("input",{className:"color-picker",type:"color",id:"cp-"+n,name:n,value:e.state.colors[n].fill,onChange:e.changeHandler})),a.a.createElement("input",{type:"text",id:"ct-"+n,name:n,value:e.state.colors[n].fill,onChange:e.changeHandler}))});return a.a.createElement("div",{className:"menu"},a.a.createElement("ul",{className:"color-config-items"},n),a.a.createElement("ul",null,a.a.createElement("li",{className:"button cancel",onClick:this.cancel},"CANCEL"),a.a.createElement("li",{className:"button reset",onClick:this.reset},"RESET TO DEFAULTS"),a.a.createElement("li",{className:"button save",onClick:this.save},"SAVE")))}}]),t}(n.Component);i(121);function A(e){var t=(e%1e3).toFixed(0);t=("000"+t).slice(-3);var i=Math.floor(e/1e3).toFixed(0),n=Math.floor(i/60),a="";return n>59&&(n=(n-=60*(a=Math.floor(n/60)))>=10?n:"0"+n),i=(i=Math.floor(i%60))>=10?i:"0"+i,""!==a?a+":"+n+":"+i+"."+t:n+":"+i+"."+t}function L(e){return e&&"object"===typeof e&&!Array.isArray(e)}var I={set:function(e,t){if(e){null!==t&&void 0!==t||window.localStorage.removeItem(e);var i,n=t.constructor.name;switch(n){case"Array":case"Object":i=JSON.stringify(t);break;case"String":i=t;break;case"Number":i=t.toString();break;default:throw new Error("Type ".concat(n," not supported"))}window.localStorage.setItem(e,"pd:".concat(n,":").concat(i))}},get:function(e){var t=localStorage.getItem(e);if(null!==t){var i=function(e,t,i){var n=e.split(t),a=n.splice(0,i-1);return a.push(n.join(t)),a}(t,":",3);if(i.length<3||"pd"!==i[0])return t;var n,a=i[1],o=i[2];switch(a){case"Array":case"Object":n=JSON.parse(o);break;case"String":n=o;break;case"Number":n=Number(o);break;default:throw new Error("Non-facade value '".concat(t,"' was stored")+"but was attempted to be retrieved through the facade.")}return n}}};function R(e,t){var i=Object.keys(e),n=Object.keys(t),a=new Set(i),o=new Set(n);if(a.size!==o.size)return!1;var r=!0,c=!1,s=void 0;try{for(var l,u=a[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var h=l.value;if(!o.has(h))return!1}}catch(d){c=!0,s=d}finally{try{r||null==u.return||u.return()}finally{if(c)throw s}}return!0}var z="config";function G(e,t){var i=function e(t,i){var n=Object.assign({},t);return L(t)&&L(i)&&Object.keys(i).forEach(function(a){L(i[a])&&a in t?n[a]=e(t[a],i[a]):Object.assign(n,Object(k.a)({},a,i[a]))}),n}(e.config,t.config);return U(i)?(I.set(z,i),Object(w.a)({},e,{config:i})):e}function U(e){if(!e)return!1;if(0!==e.version)return!1;if(!e.blockStyles)return!1;if(!R(e.blockStyles,g))return!1;for(var t=Object.keys(e.blockStyles),i=0;i<t.length;i++){var n=t[i];if(!R(e.blockStyles[n],g[n]))return!1}return!0}var W=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e))).validateInput=function(e){var t=!0;try{t=U(JSON.parse(e))}catch(i){t=!1}return t},i.changeHandler=function(e){var t=e.target.value,n=i.validateInput(t);i.setState({config:t,valid:n})},i.save=function(){if(i.state.valid){var e=JSON.parse(i.state.config);i.props.updateConfig(e),i.props.setMenu(b)}},i.back=function(){i.props.setMenu(b)},i.state={config:JSON.stringify(e.config),valid:!0},i}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"menu"},a.a.createElement("div",{id:"config-text-holder"},a.a.createElement("textarea",{id:"config-text",value:this.state.config,className:this.state.valid?"":"invalid-input",onChange:this.changeHandler})),a.a.createElement("ul",null,a.a.createElement("li",{className:"button cancel",onClick:this.back},"BACK"),a.a.createElement("li",{className:"button save",onClick:this.save},"SAVE")))}}]),t}(n.Component),B="SET_ACTIVE_GRID_POSITION",_="CYCLE_PIECES",H="SELECT_ORIENTATION",Y="NEXT_PIECE",J="PLACE_BLOCK",X="CHECK_PLACEABILITY",Z="UPDATE_STATS",V="RESET",K="RESIZE",$="SET_GAME_STATE",q="SET_GAME_MODE",Q="SET_MENU",ee="UPDATE_TIMER",te="UPDATE_CONFIG",ie="LOAD_CONFIG",ne=function(e){return{type:q,gameMode:e}},ae=Object(c.b)(function(e){return{config:e.config,menu:e.menu,gameMode:e.gameMode,lineTarget:e.lineTarget}},function(e){return{setMenu:function(t){e(function(e){return{type:Q,menu:e}}(t))},setGameMode:function(t){e(ne(t))},updateConfig:function(t){e(function(e){return{type:te,config:e}}(t))}}}),oe=ae(y),re=ae(F),ce=ae(W),se=function(e){switch(e.menu){case"STYLE":return a.a.createElement(re,null);case"IMPORT_EXPORT":return a.a.createElement(ce,null);case b:default:return a.a.createElement(oe,{start:e.start})}},le=(i(123),function(e){var t=e.gameMode,i=e.linesCleared,n=e.blockCount,o=[{text:"NEW GAME",onClick:e.reset},{text:"MAIN MENU",onClick:e.mainMenu}],r=[{name:"Total Pieces",value:n},{name:"Total Lines",value:i},{name:"Time",value:A(e.timerMillis)}].map(function(e){return a.a.createElement("div",{className:"row",key:e.name},a.a.createElement("span",{className:"name"},e.name,": "),a.a.createElement("span",{className:"value"},e.value))});return a.a.createElement("div",{className:"end-screen"},a.a.createElement("div",null,a.a.createElement("h1",{className:"mode-name"},t),a.a.createElement("h1",null,"FINISH")),a.a.createElement("div",{className:"statistics"},r),a.a.createElement("div",null,a.a.createElement(v,{items:o})))}),ue=(i(125),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.x,i=e.y,n=e.width,o=e.height,r=e.blockSize,c=e.rows,s=e.cols,l=[],u=1;u<s;u++)l.push(a.a.createElement("line",{key:"cl".concat(u),x1:t+u*r,y1:i,x2:t+u*r,y2:i+o,className:"grid-line"}));for(var h=1;h<c;h++)l.push(a.a.createElement("line",{key:"rl".concat(h),x1:t,y1:i+h*r,x2:t+n,y2:i+h*r,className:"grid-line"}));return a.a.createElement("g",null,a.a.createElement("rect",{id:"field-background",style:{fill:"#232323"},x:t,y:i,width:n,height:o,pointerEvents:"none"}),l)}}]),t}(a.a.PureComponent)),he=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var i=this.props,n=i.activePosition,a=i.blockCount;return n.row!==e.activePosition.row||n.col!==e.activePosition.col||a!==e.blockCount}},{key:"render",value:function(){for(var e=this.props,t=e.x,i=e.y,n=e.width,o=e.height,r=e.blockSize,c=e.rows,s=e.cols,l=e.blockStyles,u=e.activePosition,h=u.row,d=u.col,f=[],p=0;p<c;p++)for(var v=0;v<s;v++){var m=p*s+v,b=this.props.blocks[p][v],g=a.a.createElement(E,{id:m,key:m,x:t+v*r,y:i+p*r,blockSize:r,blockStyles:l,piece:b,flash:p===h&&v===d});f.push(g)}return a.a.createElement("g",{id:"field"},a.a.createElement(ue,{x:t,y:i,width:n,height:o,rows:c,cols:s,blockSize:r}),f,a.a.createElement("rect",{id:"field-border",style:{fill:"transparent",strokeWidth:1,stroke:"#FFFFFF"},x:t,y:i,width:n,height:o,pointerEvents:"none"}))}}]),t}(n.Component),de=function(e){return a.a.createElement("text",{textAnchor:"end",x:e.x,y:e.y,style:{fontFamily:"Roboto",fontSize:30,fill:"#cfabec"}},e.linesCleared," / ",e.target)},fe=function(e){var t=e.x,i=e.y,n=A(e.timerMillis);return a.a.createElement("text",{x:t,y:i,style:{fontSize:30,fill:"#cfabec"}},n)},pe=(i(127),function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={pressed:!1},i.touchStart=i.touchStart.bind(Object(p.a)(Object(p.a)(i))),i.touchEnd=i.touchEnd.bind(Object(p.a)(Object(p.a)(i))),i}return Object(f.a)(t,e),Object(u.a)(t,[{key:"touchStart",value:function(e){e.stopPropagation(),this.setState({pressed:!0})}},{key:"touchMove",value:function(e){e.stopPropagation()}},{key:"touchEnd",value:function(e){e.stopPropagation(),this.setState({pressed:!1})}},{key:"render",value:function(){var e={fill:this.state.pressed&&this.props.pressedColor||this.props.color},t={pointerEvents:"none",userSelect:"none",fontFamily:"Roboto",fontSize:14,fill:this.props.textColor||"white"};return a.a.createElement("g",{onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd,onClick:this.props.onPressed},a.a.createElement("rect",{x:this.props.x,y:this.props.y,rx:6,ry:6,width:this.props.width,height:this.props.height,style:e,className:"button "+this.props.className,shapeRendering:"auto"}),a.a.createElement("text",{x:this.props.x+this.props.width/2,y:this.props.y+this.props.height/2,textAnchor:"middle",style:t,className:"button "+this.props.className,alignmentBaseline:"central",dominantBaseline:"central"},this.props.text))}}]),t}(n.Component)),ve={fill:"transparent",strokeWidth:1.5,stroke:"#FFFFFF"},me={fill:"#FFFFFF3F",strokeWidth:1.5,stroke:"#FFFFFF"},be=function(e){var t=e.x,i=e.y,n=e.width,o=e.height,r=e.piece,c=e.orientation,s=e.selected,l=e.blockStyles,u=(n-8)/4;return a.a.createElement("g",null,a.a.createElement("rect",{fill:"transparent",x:t,y:i,rx:6,ry:6,width:n,height:o,shapeRendering:"auto",style:s?me:ve}),a.a.createElement(D,{piece:r,orientation:c,blockSize:u,blockStyles:l,cx:t+n/2,cy:i+o/2}))},ge=function(e){var t=e.x,i=e.y,n=e.width,o=e.height,r=e.piece,c=e.blockStyles;if(void 0===r||r===O)return null;var s=(n-8)/4;return a.a.createElement(D,{piece:r,orientation:1,blockSize:s,blockStyles:c,cx:t+n/2,cy:i+o/2})},ye=function(e){var t,i=[window.innerWidth/-2,-680,window.innerWidth,680],n=e.config.blockStyles,o=e.previewSlots.map(function(t,i){return a.a.createElement(ge,{key:"pp".concat(i),x:t.x,y:t.y,width:t.width,height:t.height,piece:e.nextPieces[i],blockStyles:n})}),r=e.orientationSelectors.map(function(t,i){return a.a.createElement(be,{key:"ori".concat(i),x:t.x,y:t.y,width:t.width,height:t.height,orientation:t.orientation,piece:e.currentPiece,blockStyles:n,selected:e.orientation===t.orientation})}),c=e.fieldDimensions,s=c.x,l=c.y,u=c.width,h=c.height,d=c.rows,f=c.cols,p=c.blockSize;switch(e.gameMode){case"LINE TARGET":var v=s+85,m=l-10,b=s+140;t=a.a.createElement(a.a.Fragment,null,a.a.createElement(de,{x:v,y:m,linesCleared:e.linesCleared,target:e.lineTarget}),a.a.createElement(fe,{x:b,y:m,timerMillis:e.timerMillis}));break;default:t=null}var g=s+26*e.activePosition.col,y=l+26*e.activePosition.row,k=-1!==e.activePosition.row?a.a.createElement(D,{x:g,y:y,piece:e.currentPiece,orientation:e.orientation,placeable:e.placeable,blockStyles:n,blockSize:26}):null;return a.a.createElement("svg",{id:"game-canvas",preserveAspectRatio:"xMidYMax meet",shapeRendering:"crispEdges",textRendering:"optimizeLegibility",style:{touchAction:"none",width:e.windowWidth,height:e.windowHeight},onTouchStart:e.touchStart,onTouchMove:e.touchMove,onTouchEnd:e.touchEnd,onMouseDown:e.mouseDown,onMouseMove:e.mouseMove,onMouseUp:e.mouseUp,viewBox:i},a.a.createElement(he,{activePosition:e.activePosition,x:s,y:l,width:u,height:h,blockSize:p,blockStyles:n,rows:d,cols:f,blocks:e.blocks,blockCount:e.blockCount}),k,r,o,t,a.a.createElement(pe,{x:s+u+8,y:l+8,width:58,height:32,text:"RESET",color:"#ec3636",pressedColor:"#dc2626",onPressed:e.reset}),a.a.createElement(pe,{x:s+u+8,y:l+8+32+8,width:58,height:32,text:"MENU",color:"#3e3e3e",pressedColor:"#292929",onPressed:e.mainMenu}))},ke=function(){function e(t){Object(l.a)(this,e),this.bag=[0,1,2,3,4,5,6],this.random=t,this.index=this.bag.length}return Object(u.a)(e,[{key:"next",value:function(){return this.index===this.bag.length&&(!function(e){for(var t,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random,a=e.length;a;)i=Math.floor(n()*a--),t=e[a],e[a]=e[i],e[i]=t}(this.bag,this.random),this.index=0),this.bag[this.index++]}}]),e}(),we=[3,0,1,2],Ee=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e))).initialiseLayout(),i.keydown=i.keydown.bind(Object(p.a)(Object(p.a)(i))),i.gameLoop=i.gameLoop.bind(Object(p.a)(Object(p.a)(i))),i.selectOrientation=i.selectOrientation.bind(Object(p.a)(Object(p.a)(i))),i.updateOrientation=i.updateOrientation.bind(Object(p.a)(Object(p.a)(i))),i.init=i.init.bind(Object(p.a)(Object(p.a)(i))),i.start=i.start.bind(Object(p.a)(Object(p.a)(i))),i.mainMenu=i.mainMenu.bind(Object(p.a)(Object(p.a)(i))),i.pause=i.pause.bind(Object(p.a)(Object(p.a)(i))),i.dragMove=i.dragMove.bind(Object(p.a)(Object(p.a)(i))),i.dragEnd=i.dragEnd.bind(Object(p.a)(Object(p.a)(i))),i.mouseDown=i.mouseDown.bind(Object(p.a)(Object(p.a)(i))),i.mouseMove=i.mouseMove.bind(Object(p.a)(Object(p.a)(i))),i.mouseUp=i.mouseUp.bind(Object(p.a)(Object(p.a)(i))),i.touchMove=i.touchMove.bind(Object(p.a)(Object(p.a)(i))),i.touchEnd=i.touchEnd.bind(Object(p.a)(Object(p.a)(i))),i.touchStart=i.touchMove,i.mouseDown=i.mouseDown.bind(Object(p.a)(Object(p.a)(i))),i.mouseMove=i.mouseMove.bind(Object(p.a)(Object(p.a)(i))),i.mouseUp=i.mouseUp.bind(Object(p.a)(Object(p.a)(i))),i.init(),e.loadConfig(),i}return Object(f.a)(t,e),Object(u.a)(t,[{key:"initialiseLayout",value:function(){this.fieldDimensions={x:-162.5,y:-620,blockSize:26,rows:20,cols:10,width:260,height:520};var e=(70*we.length+16*(we.length-1))/-2;this.orientationSelectors=we.map(function(t,i){return{x:e+86*i,y:-84,width:70,height:70,orientation:t}});var t=this.fieldDimensions.x+260,i=this.fieldDimensions.y+520-65;this.previewSlots=Array(this.props.previewLength).fill(0).map(function(e,n){return{x:t+(0===n?0:5),y:i-55*n,width:65-(0===n?0:10),height:65-(0===n?0:10),index:n}})}},{key:"selectOrientation",value:function(e){this.orientation=e}},{key:"keydown",value:function(e){switch(e.keyCode){case 188:this.pieceDebug.next=!1,this.pieceDebug.prev=!0;break;case 190:this.pieceDebug.next=!0,this.pieceDebug.prev=!1}}},{key:"init",value:function(){this.pieceDebug={next:!1,prev:!1},this.nextPieces=[],this.randomizer=new ke(Math.random),this.activeTouches=0,this.mouseIsDown=!1,this.activePosition={row:-1,col:-1},this.field={blocks:Array(20).fill(0).map(function(e){return Array(10).fill(O)}),hiddenBlocks:Array(3).fill(0).map(function(e){return Array(10).fill(O)}),lineClearFlags:Array(20).fill(!1),hiddenLineClearFlags:Array(3).fill(!1)},this.nextPieces.length=0,this.linesCleared=0,this.orientation=-1}},{key:"start",value:function(){this.init(),this.props.reset(),this.rollNextPiece(),this.lastPlayingTime=new Date,this.totalTimerMillis=0}},{key:"pause",value:function(){var e="PAUSED",t=new Date;if("PAUSED"===this.props.gameState)e=m,this.lastPlayingTime=t;else{var i=t-this.lastPlayingTime;this.lastPlayingTime=t,this.totalTimerMillis+=i}this.props.setGameState(e)}},{key:"mainMenu",value:function(){this.props.setGameState("MENU")}},{key:"canvasPoint",value:function(e){var t=document.getElementById("game-canvas"),i=t.createSVGPoint();i.x=e.clientX,i.y=e.clientY;var n=i.matrixTransform(t.getScreenCTM().inverse());return{x:n.x,y:n.y}}},{key:"fieldPoint",value:function(e){var t=e.x-this.fieldDimensions.x,i=e.y-this.fieldDimensions.y;return{col:Math.floor(t/26),row:Math.floor(i/26)}}},{key:"updateOrientation",value:function(e){for(var t=e.x,i=e.y,n=0;n<this.orientationSelectors.length;n++){var a=this.orientationSelectors[n];if(i>a.y&&i<a.y+a.height&&t>a.x&&t<a.x+a.width){this.selectOrientation(a.orientation);break}}}},{key:"dragMove",value:function(e){this.updateOrientation(e);var t=this.fieldPoint(e);t.col>-1&&t.col<10&&t.row>-1&&t.row<20&&(this.activePosition.row=t.row,this.activePosition.col=t.col)}},{key:"dragEnd",value:function(){0!==this.activeTouches||this.mouseIsDown||(this.place=!0)}},{key:"mouseDown",value:function(e){e.preventDefault(),this.mouseIsDown=!0;var t=this.canvasPoint(e);this.dragMove(t)}},{key:"mouseMove",value:function(e){if(e.preventDefault(),this.mouseIsDown){var t=this.canvasPoint(e);this.dragMove(t)}}},{key:"mouseUp",value:function(e){e.preventDefault(),this.mouseIsDown=!1,this.dragEnd()}},{key:"touchMove",value:function(e){e.preventDefault(),this.activeTouches=e.touches.length;for(var t=0;t<e.changedTouches.length;t++){var i=e.changedTouches[t],n=this.canvasPoint(i);this.dragMove(n)}}},{key:"touchEnd",value:function(e){e.preventDefault(),this.activeTouches=e.touches.length,this.dragEnd()}},{key:"isLineFilled",value:function(e){for(var t=e.length,i=0;i<t;i++){if(e[i]===O)return!1}return!0}},{key:"setLineClearedFlag",value:function(e,t,i){e>=0?t.lineClearFlags[e]=i:t.hiddenLineClearFlags[-1*e-1]=i}},{key:"getLineClearedFlag",value:function(e,t){return t.lineClearFlags[e]||t.hiddenLineClearFlags[-1*e-1]}},{key:"getRow",value:function(e,t){return t.blocks[e]||t.hiddenBlocks[-1*e-1]}},{key:"downFloatingBlocks",value:function(e){for(var t=e.blocks.length,i=e.blocks[0].length,n=t-1,a=-3;a<t;a++)if(this.getLineClearedFlag(n,e)){for(var o=n;o>-3;o--){for(var r=this.getRow(o-1,e),c=this.getRow(o,e),s=0;s<i;s++){var l=void 0===r?O:r[s];c[s]=l}this.setLineClearedFlag(o,e,this.getLineClearedFlag(o-1,e))}for(var u=0;u<i;u++){e.hiddenBlocks[2][u]=O}}else n--}},{key:"doLineClears",value:function(e){for(var t=0,i=-1,n=e.blocks.length,a=-3;a<n;a++){var o=this.getRow(a,e);if(this.isLineFilled(o)){for(var r=o.length,c=0;c<r;c++)o[c]=O;t++,this.setLineClearedFlag(a,e,!0),-1===i&&(i=a)}}return t>0&&this.downFloatingBlocks(e),t}},{key:"rollNextPiece",value:function(){var e;e=0===this.nextPieces.length?this.randomizer.next():this.nextPieces[0];for(var t=this.nextPieces=this.nextPieces.slice(1);t.length<this.props.previewLength;)t.push(this.randomizer.next());this.props.nextPiece(e,t)}},{key:"checkGameOver",value:function(e,t){if(e===O)return!1;for(var i=0;i<t.blocks.length;i++)for(var n=t.blocks[i],a=0;a<n.length;a++)for(var o=0;o<we.length;o++){if(M(a,i,e,we[o],t))return!1}return!0}},{key:"gameLoop",value:function(){if(this.props.setActiveGridPosition(this.activePosition),this.props.checkPlaceability(this.activePosition.col,this.activePosition.row,this.props.currentPiece,this.orientation,this.field),this.props.gameState===m){var e=new Date,t=e-this.lastPlayingTime;if(this.lastPlayingTime=e,this.totalTimerMillis+=t,this.checkGameOver(this.props.currentPiece,this.field)&&this.props.setGameState("END"),this.place){var i=!1;if(this.props.placeable){!function(e,t,i,n,a){for(var o=S[i][n],r=x[i][n],c=P(e,t,i,n),s=c.xOffset,l=c.yOffset,u=0;u<o.length;u++){var h=s+o[u],d=l+r[u];(a.blocks[d]||a.hiddenBlocks[-1*d-1])[h]=i}}(this.activePosition.col,this.activePosition.row,this.props.currentPiece,this.orientation,this.field);var n=this.doLineClears(this.field);this.linesCleared+=n,this.props.updateStats(this.linesCleared),this.props.placeBlock(this.field),i=!0}switch(this.props.gameMode){case"ZEN":break;case"LINE TARGET":this.linesCleared>=this.props.lineTarget&&this.props.setGameState("END")}this.place=!1,i&&(this.activePosition.row=-1,this.activePosition.col=-1,this.orientation=-1,this.rollNextPiece())}this.props.selectOrientation(this.orientation),this.pieceDebug.prev=!1,this.pieceDebug.next=!1}this.props.updateTimer(this.totalTimerMillis)}},{key:"componentDidMount",value:function(){var e=this;window.onresize=function(){e.props.resize(window.innerWidth,window.innerHeight)},window.onresize(),document.addEventListener("keydown",this.keydown,!1),setInterval(this.gameLoop,33)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydown)}},{key:"render",value:function(){return"MENU"===this.props.gameState?a.a.createElement(se,{menu:this.props.menu,start:this.start}):"END"===this.props.gameState?a.a.createElement(le,{gameMode:this.props.gameMode,blockCount:this.props.blockCount,linesCleared:this.props.linesCleared,reset:this.start,mainMenu:this.mainMenu,timerMillis:this.props.timerMillis}):a.a.createElement(ye,{gameState:this.props.gameState,activePosition:this.props.activePosition,orientationSelectors:this.orientationSelectors,previewSlots:this.previewSlots,nextPieces:this.props.nextPieces,fieldDimensions:this.fieldDimensions,currentPiece:this.props.currentPiece,orientation:this.props.orientation,placeable:this.props.placeable,blocks:this.props.field.blocks,config:this.props.config,linesCleared:this.props.linesCleared,blockCount:this.props.blockCount,lineTarget:this.props.lineTarget,timerMillis:this.props.timerMillis,gameMode:this.props.gameMode,reset:this.start,mainMenu:this.mainMenu,pause:this.pause,touchStart:this.touchStart,touchMove:this.touchMove,touchEnd:this.touchEnd,mouseDown:this.mouseDown,mouseMove:this.mouseMove,mouseUp:this.mouseUp,windowWidth:this.props.windowWidth,windowHeight:this.props.windowHeight})}}]),t}(n.Component),Oe=Object(c.b)(function(e){return{menu:e.menu,config:e.config,gameState:e.gameState,gameMode:e.gameMode,activePosition:e.activePosition,currentPiece:e.currentPiece,nextPieces:e.nextPieces,previewLength:e.previewLength,orientation:e.orientation,field:e.field,blockCount:e.blockCount,placeable:e.placeable,linesCleared:e.linesCleared,lineTarget:e.lineTarget,windowWidth:e.windowWidth,windowHeight:e.windowHeight,timerMillis:e.timerMillis}},function(e){return{setActiveGridPosition:function(t){e({type:B,activePosition:t})},cyclePieces:function(t){var i;e({type:_,next:(i=t).next,prev:i.prev})},selectOrientation:function(t){e({type:H,orientation:t})},nextPiece:function(t,i){e({type:Y,nextPiece:t,nextPieces:i})},placeBlock:function(t){e(function(e){return{type:J,field:e}}(t))},checkPlaceability:function(t,i,n,a,o){e(function(e,t,i,n,a){return{type:X,x:e,y:t,piece:i,orientation:n,field:a}}(t,i,n,a,o))},updateStats:function(t){e(function(e){return{type:Z,linesCleared:e}}(t))},reset:function(){e({type:V})},resize:function(t,i){e(function(e,t){return{type:K,newWidth:e,newHeight:t}}(t,i))},setGameState:function(t){e(function(e){return{type:$,gameState:e}}(t))},setGameMode:function(t){e(ne(t))},updateTimer:function(t){e(function(e){return{type:ee,timerMillis:e}}(t))},loadConfig:function(){e({type:ie})}}})(Ee);var Se=function(e,t){return e.activePosition.row===t.activePosition.row&&e.activePosition.col===t.activePosition.col?e:Object(w.a)({},e,{activePosition:Object(w.a)({},t.activePosition)})};var xe=function(){};var Me=function(e,t){return e.orientation===t.orientation?e:Object(w.a)({},e,{orientation:t.orientation})};var je=function(e,t){return Object(w.a)({},e,{currentPiece:t.nextPiece,nextPieces:t.nextPieces})},Pe=i(48);var Ce=function(e,t){var i=t.field.blocks,n=function(e,t){for(var i=[],n=e.length,a=0;a<n;a++)for(var o=t[a],r=e[a],c=o.length,s=0;s<c;s++){var l=o[s];if(r[s]!==l){i.push(a);break}}return i}(e.field.blocks,i);if(0===n.length)return e;var a=Object(Pe.a)(e.field.blocks),o=!0,r=!1,c=void 0;try{for(var s,l=n[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var u=s.value;a[u]=Object(Pe.a)(i[u])}}catch(h){r=!0,c=h}finally{try{o||null==l.return||l.return()}finally{if(r)throw c}}return Object(w.a)({},e,{field:Object(w.a)({},e.field,{blocks:a}),blockCount:e.blockCount+1})},Te=function(e,t){var i=t.x,n=t.y,a=t.piece,o=t.orientation,r=t.field,c=e.placeable,s=M(i,n,a,o,r);return c===s?e:Object(w.a)({},e,{placeable:s})};var Ne=function(e,t){return e.linesCleared===t.linesCleared?e:Object(w.a)({},e,{linesCleared:t.linesCleared})},De=function(e,t){return e.timerMillis===t.timerMillis?e:Object(w.a)({},e,{timerMillis:t.timerMillis})};var Fe=function(e,t){return Object(w.a)({},e,{windowWidth:t.newWidth,windowHeight:t.newHeight})},Ae=function(e,t){var i=t.gameState;return"PAUSED"===t.gameState&&"PAUSED"===e.gameState&&(i=m),Object(w.a)({},e,{gameState:i})},Le=function(e,t){return Object(w.a)({},e,{gameMode:t.gameMode})},Ie=function(e,t){return Object(w.a)({},e,{menu:t.menu})},Re={gameState:"MENU",activePosition:{row:-1,col:-1},currentPiece:O,previewLength:5,nextPieces:[],orientation:-1,placeable:!1,blockCount:0,linesCleared:0,lineTarget:40,timerMillis:0,field:{blocks:Array(20).fill(0).map(function(e){return Array(10).fill(O)})},config:{version:0,blockStyles:g}};var ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Se(e,t);case _:return xe(e,t);case H:return Me(e,t);case Y:return je(e,t);case J:return Ce(e,t);case X:return Te(e,t);case Z:return Ne(e,t);case ee:return De(e,t);case te:return G(e,t);case ie:return function(e){var t=I.get(z);return t?Object(w.a)({},e,{config:t}):e}(e);case K:return Fe(e,t);case $:return Ae(e,t);case q:return Le(e,t);case Q:return Ie(e,t);case V:return Object(w.a)({},Re,{config:e.config,windowWidth:e.windowWidth,windowHeight:e.windowHeight,gameMode:e.gameMode,gameState:m});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=Object(s.b)(ze);r.a.render(a.a.createElement(c.a,{store:Ge},a.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,i){},70:function(e,t,i){e.exports=i(129)}},[[70,2,1]]]);
//# sourceMappingURL=main.66cb629f.chunk.js.map