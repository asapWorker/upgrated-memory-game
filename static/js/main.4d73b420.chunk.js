(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(39)},22:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r,a,i=n(0),o=n.n(i),c=n(8),u=n.n(c),s=n(3),f=(n(22),n(1)),l=n(6),d=n(5),m="/upgrated-memory-game/images/",p="easy",h="middle",v="hard",b="loading",g="loaded",y="pause_end",w="countdown",O="countdown_end",j="activity",E="ready",x="finish",L=1100,N=3,S="unmarked",k="correct",A="wrong",I="visible",_="invisible",R=(r={},Object(d.a)(r,p,12),Object(d.a)(r,h,20),Object(d.a)(r,v,20),r),D=(a={},Object(d.a)(a,p,0),Object(d.a)(a,h,4),Object(d.a)(a,v,9),a),G="show-menu",C="start-game",P="finish-game",T="restart-game",F="permit-choosing",M="deny-finishing",q="choose-item",J="no-item",U={ref:null},Y=Object(l.b)({name:"game",initialState:{level:null,gameId:null,step:b,prevStep:void 0},reducers:{startGame:function(t,e){t.level=e.payload,t.gameId=Date.now(),t.step=b,t.prevStep=void 0},restartGame:function(t){t.gameId=Date.now(),t.step=b,t.prevStep=void 0},finishLoading:function(t){t.step=g},makePause:function(t){t.prevStep=t.step,t.step="pause"},finishPause:function(t){t.step=y},makeCountdown:function(t){t.prevStep=t.step,t.step=w},finishCountdown:function(t){t.step=O},startActivity:function(t){t.prevStep=t.step,t.step=j},setReady:function(t){t.step=E},finishGame:function(t){t.step=x},setInitResult:function(t,e){t.result=e.payload},changeResult:function(t,e){e.payload===k?t.result+=1:t.result-=1}}}),z=Y.reducer,B=Y.actions,$=B.startGame,H=B.restartGame,K=B.finishLoading,Q=B.makePause,V=B.finishPause,W=B.makeCountdown,X=B.finishCountdown,Z=B.startActivity,tt=B.setReady,et=B.finishGame,nt=B.setInitResult,rt=B.changeResult,at=n(7);function it(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ot(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var ct=function(t,e){return Math.round(t/R[e]*100)},ut=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},st=function(t){var e,n=R[t],r=lt(t),a=ut(1,10),i=new Array(n).fill(null),o=it(ft(0,n-1,r));try{for(o.s();!(e=o.n()).done;){i[e.value]=a}}catch(d){o.e(d)}finally{o.f()}for(var c=ft(0,n-r-1,D[t]),u=0,s=a,f=11,l=0;l<n;l++)i[l]||(c.includes(u)?((s+=1)>10&&(s=1),i[l]=s):(i[l]=f,(f+=1)>20&&(f=11)),u++);return{list:i,repeatedItem:a,repeatedItemNum:r}},ft=function(t,e,n){for(var r=0,a=new Set;r<n;){var i=ut(t,e);a.has(i)||(a.add(i),r++)}return Array.from(a)},lt=function(t){return t===p?ut(3,5):t===h?ut(6,7):ut(5,6)},dt=function(t,e){if(t.length){if(e.length){for(var n=Math.min(t.length,e.length),r=Math.max(t.length,e.length)-n,a=0;a<n;a++)t[a]!==e[a]&&r++;return r}return t.length}return e.length},mt=function(t,e){var n=0,r=0;if(t===R[p]?(n=4,r=3):(n=5,r=4),"portrait-primary"===e){var a=[n,r];r=a[0],n=a[1]}return[r,n]},pt=function(){var t=window.screen.orientation.type,e=[],n=[],r=-1,a=-1,i=null,o=0,c=void 0,u=void 0,f=function(t){if(-1===r)r=0,a=0;else switch(t.code){case"ArrowDown":m(1);break;case"ArrowUp":m(-1);break;case"ArrowLeft":d(-1);break;case"ArrowRight":d(1)}e[i]||e[r].focus()};function l(){e[i].classList.remove("disabled-focus"),n.splice(n.indexOf(i),1),a=n.indexOf(r),i=null}var d=function(t){var o=a+t;o<0||(o>=n.length&&(o=0),r=n[a=o],e[i]&&l())},m=function(t){if(o)if(r>=o)d(t);else{var c=r;do{c+=u*t}while(c>=0&&c<o&&!n.includes(c));c>=o?(r=o,a=n.indexOf(r)):c>=0&&c!==r&&(r=c,a=n.indexOf(r)),e[i]&&l()}else d(t)};return[function(){var l,d=arguments.length>0&&void 0!==arguments[0]&&arguments[0],m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(r>=0&&e[r]&&e[r].blur(),i=null,e=[],m){var p,h=mt(m,t),v=Object(s.a)(h,2);c=v[0],u=v[1],(p=e).push.apply(p,Object(at.a)(document.querySelectorAll(".img-btn")))}o=m,(l=e).push.apply(l,Object(at.a)(document.querySelectorAll(".managing-btn"))),r=-1,a=-1,n=new Array(e.length).fill(0),d&&n.pop(),n=n.map(function(t,e){return e}),document.addEventListener("keydown",f)},function(){n.push(e.length-1)},function(t){r>=0&&e[r].focused&&e[r].blur(),e[i]&&l(),r=t,a=n.indexOf(t),e[i=t].classList.add("disabled-focus")},function(){window.screen.orientation.onchange=function(){var e=window.screen.orientation.type;if(c&&e!==t){var n=[u,c];c=n[0],u=n[1]}}}]}(),ht=Object(s.a)(pt,4),vt=ht[0],bt=ht[1],gt=ht[2],yt=ht[3];function wt(t){var e=Object(f.b)(),n=Object(f.c)(function(t){return t.assistant.data}),r=Object(i.useRef)(),a=Object(i.useRef)(),c=Object(i.useRef)();function u(n){U.ref.sendData({action:{action_id:C}}),r.current.disabled=a.current.disabled=c.current.disabled=!0,t.changeAppScreen(),e($(n))}return Object(i.useEffect)(function(){vt()},[]),Object(i.useEffect)(function(){n.type===C&&u(n.payload)},[n]),o.a.createElement("div",{className:"menu"},o.a.createElement("button",{ref:r,className:"btn menu-btn managing-btn",onClick:function(){return u(p)}},"\u041b\u0435\u0433\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"),o.a.createElement("button",{ref:a,className:"btn menu-btn managing-btn",onClick:function(){return u(h)}},"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"),o.a.createElement("button",{ref:c,className:"btn menu-btn managing-btn",onClick:function(){return u(v)}},"\u0421\u043b\u043e\u0436\u043d\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"))}var Ot=n(16);n(31),n(33),n(35);function jt(t){var e=Object(i.useState)(S),n=Object(s.a)(e,2),r=n[0],a=n[1],c=Object(f.c)(function(t){return t.game.level}),u=Object(f.c)(function(t){return t.game.step}),l=Object(f.c)(function(t){return t.game.prevStep}),d=Object(f.c)(function(t){return t.assistant.data}),p=Object(f.b)();return Object(i.useEffect)(function(){a(S)},[t]),Object(i.useEffect)(function(){r!==S&&(p(rt(r)),u===j&&p(tt()))},[r]),Object(i.useEffect)(function(){d.type===q&&(Number(d.payload)===t.imgInd&&(r===S?h():U.ref.sendData({action:{action_id:J}})))},[d]),o.a.createElement("div",{className:"item level-"+c+" "+r},(u===b||u===g||u===w&&l===g)&&o.a.createElement("div",{className:"img-wrapper"}),u===x&&r!==S&&o.a.createElement("div",{className:"img-wrapper finish-step "+r}),(u===j||u===E)&&o.a.createElement("button",{disabled:r!==S,className:"btn img-btn",onClick:h},t.imgInd),t.imgName?o.a.createElement("object",{tabIndex:-1,type:"image/svg+xml",data:m+t.imgName+".svg",className:"img",onLoad:t.imageIsLoaded},"smile svg image"):null);function h(){U.ref.sendData({action:{action_id:q}}),t.isRepeated?a(k):a(A),gt(t.imgInd-1)}}function Et(){var t=Object(f.c)(function(t){return t.game.level}),e=Object(f.c)(function(t){return t.game.gameId}),n=Object(i.useState)(new Array(R[t]).fill(null)),r=Object(s.a)(n,2),a=r[0],c=r[1],u=Object(i.useState)(-1),l=Object(s.a)(u,2),d=l[0],m=l[1],p=Object(i.useRef)([]),h=Object(f.b)();return Object(i.useEffect)(function(){var e=st(t);m(dt(p.current,e.list)),p.current=e.list,c(e.list.map(function(t,n){return o.a.createElement(jt,{key:n,imgName:t,imgInd:n+1,isRepeated:t===e.repeatedItem,imageIsLoaded:v})})),h(nt(R[t]-e.repeatedItemNum))},[e]),Object(i.useEffect)(function(){d||h(K())},[d]),o.a.createElement("div",{className:"board level-".concat(t)},a);function v(){m(function(t){return t-1})}}n(37);var xt=null;function Lt(){var t=Object(f.c)(function(t){return t.game}),e=t.level,n=t.step,r=t.result,a=t.gameId,c=Object(f.b)(),u=Object(i.useState)(-1),l=Object(s.a)(u,2),d=l[0],m=l[1];return Object(i.useEffect)(function(){return function(){xt&&clearTimeout(xt),m(-1)}},[a]),Object(i.useEffect)(function(){n!==g&&n!==y||(c(W()),m(N))},[n]),Object(i.useEffect)(function(){d>0?xt=setTimeout(function(){m(function(t){return t-1})},L):0===d&&c(X())},[d]),o.a.createElement("div",{className:"wrapper "+([b,g,w,O,x].includes(n)?I:_)},o.a.createElement("div",{className:"content"},n===b||n===g?o.a.createElement("iframe",{title:"spinner",src:"/upgrated-memory-game/spinner.html"}):n===w||n===O?o.a.createElement("span",{className:"countdown"},-1===d?3:d):n===x?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"result-label"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),o.a.createElement("span",{className:"result"},"".concat(ct(r,e),"%"))):null))}function Nt(){Nt=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,n){return t[e]=n}}function s(t,e,n,a){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),c=new L(a||[]);return r(o,"_invoke",{value:O(t,n,c)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var l={};function d(){}function m(){}function p(){}var h={};u(h,i,function(){return this});var v=Object.getPrototypeOf,b=v&&v(v(N([])));b&&b!==e&&n.call(b,i)&&(h=b);var g=p.prototype=d.prototype=Object.create(h);function y(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;r(this,"_invoke",{value:function(r,i){function o(){return new e(function(a,o){!function r(a,i,o,c){var u=f(t[a],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,o,c)},function(t){r("throw",t,o,c)}):e.resolve(l).then(function(t){s.value=t,o(s)},function(t){return r("throw",t,o,c)})}c(u.arg)}(r,i,a,o)})}return a=a?a.then(o,o):o()}})}function O(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return S()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=j(o,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:m,configurable:!0}),m.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),u(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new w(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},y(g),u(g,c,"Generator"),u(g,i,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}var St=null,kt=function(){return function(){var t=Object(Ot.a)(Nt().mark(function t(e){return Nt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e(Q()),St=setTimeout(function(){e(V())},3e3);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};function At(t){var e=Object(f.c)(function(t){return t.game.gameId}),n=Object(f.c)(function(t){return t.game.step}),r=Object(f.c)(function(t){return t.game.level}),a=Object(f.c)(function(t){return t.game.result}),c=Object(f.c)(function(t){return t.game.prevStep}),u=Object(f.c)(function(t){return t.assistant.data}),s=Object(f.b)(),l=Object(i.useRef)(),d=Object(i.useRef)(),m=Object(i.useRef)();return Object(i.useEffect)(function(){return function(){St&&clearTimeout(St)}},[]),Object(i.useEffect)(function(){return m.current.disabled=!0,function(){St&&clearTimeout(St)}},[e]),Object(i.useEffect)(function(){n===O?s(c===g?kt():Z()):n===E?m.current.disabled=!1:n===x&&(m.current.disabled=!0),n===j?(U.ref.sendData({action:{action_id:F}}),vt(!0,R[r])):n===E?bt():n!==b&&n!==x||vt(!0)},[n]),Object(i.useEffect)(function(){if(u.type===T)h();else if(u.type===G)p();else if(u.type===P)n===E?v():U.ref.sendData({action:{action_id:M}});else if(u.type===q){var t=Number(u.payload);(t<=0||t>R[r])&&u.sendData({action:{action_id:J}})}},[u]),o.a.createElement("div",{className:"game"},o.a.createElement(Lt,null),o.a.createElement(Et,null),o.a.createElement("div",{className:"bottom-interface"},o.a.createElement("button",{ref:l,className:"btn game-btn managing-btn",onClick:h},"\u0417\u0430\u043d\u043e\u0432\u043e"),o.a.createElement("button",{ref:d,className:"btn game-btn managing-btn",onClick:p},"\u041c\u0435\u043d\u044e"),o.a.createElement("button",{ref:m,className:"btn game-btn managing-btn",onClick:v},"\u0413\u043e\u0442\u043e\u0432\u043e")));function p(){U.ref.sendData({action:{action_id:G}}),t.changeAppScreen()}function h(t){U.ref.sendData({action:{action_id:T}}),s(H())}function v(){U.ref.sendData({action:{action_id:P,payload:ct(a,r)}}),s(et())}}var It=n(41),_t=Object(l.b)({name:"assistant",initialState:{clientAssistant:null,data:{type:"init",payload:null}},reducers:{changeAssistantData:function(t,e){t.data=e.payload}}}),Rt=_t.reducer,Dt=_t.actions.changeAssistantData,Gt=function(t){return Object(It.a)({getState:t})};var Ct=function(){var t=Object(f.b)(),e=Object(i.useState)(!0),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(i.useEffect)(function(){yt(),U.ref=Gt(function(){return"initialize"}),U.ref.on("data",function(e){var n=e.action;n&&t(Dt(n))})},[]),r?o.a.createElement(wt,{changeAppScreen:c}):o.a.createElement(At,{changeAppScreen:c});function c(){a(function(t){return!t})}},Pt=Object(l.a)({reducer:{game:z,assistant:Rt}}),Tt=document.getElementById("root");u.a.render(o.a.createElement(f.a,{store:Pt},o.a.createElement(Ct,null)),Tt)}},[[17,2,1]]]);
//# sourceMappingURL=main.4d73b420.chunk.js.map