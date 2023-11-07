import{g as G,d as I}from"./contracts-4ce4998f.js";function F(K,C){for(var f=0;f<C.length;f++){const y=C[f];if(typeof y!="string"&&!Array.isArray(y)){for(const l in y)if(l!=="default"&&!(l in K)){const v=Object.getOwnPropertyDescriptor(y,l);v&&Object.defineProperty(K,l,v.get?v:{enumerable:!0,get:()=>y[l]})}}}return Object.freeze(Object.defineProperty(K,Symbol.toStringTag,{value:"Module"}))}var T={exports:{}};(function(K,C){(function(f,y){K.exports=y()})(I,function(){function f(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(s){return typeof s}:f=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},f(t)}function y(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function l(t,s){for(var e=0;e<s.length;e++){var n=s[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,s,e){return s&&l(t.prototype,s),e&&l(t,e),t}function x(t){return O(t)||R(t)||D(t)||U()}function O(t){if(Array.isArray(t))return k(t)}function R(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function D(t,s){if(t){if(typeof t=="string")return k(t,s);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return k(t,s)}}function k(t,s){(s==null||s>t.length)&&(s=t.length);for(var e=0,n=new Array(s);e<s;e++)n[e]=t[e];return n}function U(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=function(){function t(s){y(this,t),this.sourceStr=s,this.subCombos=t.parseComboStr(s),this.keyNames=this.subCombos.reduce(function(e,n){return e.concat(n)},[])}return v(t,[{key:"check",value:function(e){for(var n=0,i=0;i<this.subCombos.length;i+=1)if(n=this._checkSubCombo(this.subCombos[i],n,e),n===-1)return!1;return!0}},{key:"isEqual",value:function(e){if(!e||typeof e!="string"&&f(e)!=="object"||(typeof e=="string"&&(e=new t(e)),this.subCombos.length!==e.subCombos.length))return!1;for(var n=0;n<this.subCombos.length;n+=1)if(this.subCombos[n].length!==e.subCombos[n].length)return!1;for(var i=0;i<this.subCombos.length;i+=1){for(var r=this.subCombos[i],o=e.subCombos[i].slice(0),a=0;a<r.length;a+=1){var u=r[a],d=o.indexOf(u);d>-1&&o.splice(d,1)}if(o.length!==0)return!1}return!0}},{key:"_checkSubCombo",value:function(e,n,i){e=e.slice(0),i=i.slice(n);for(var r=n,o=0;o<e.length;o+=1){var a=e[o];if(a[0]==="\\"){var u=a.slice(1);(u===t.comboDeliminator||u===t.keyDeliminator)&&(a=u)}var d=i.indexOf(a);if(d>-1&&(e.splice(o,1),o-=1,d>r&&(r=d),e.length===0))return r}return-1}}]),t}();b.comboDeliminator=">",b.keyDeliminator="+",b.parseComboStr=function(t){for(var s=b._splitStr(t,b.comboDeliminator),e=[],n=0;n<s.length;n+=1)e.push(b._splitStr(s[n],b.keyDeliminator));return e},b._splitStr=function(t,s){for(var e=t,n=s,i="",r=[],o=0;o<e.length;o+=1)o>0&&e[o]===n&&e[o-1]!=="\\"&&(r.push(i.trim()),i="",o+=1),i+=e[o];return i&&r.push(i.trim()),r};var E=function(){function t(s){y(this,t),this.localeName=s,this.activeTargetKeys=[],this.pressedKeys=[],this._appliedMacros=[],this._keyMap={},this._killKeyCodes=[],this._macros=[]}return v(t,[{key:"bindKeyCode",value:function(e,n){typeof n=="string"&&(n=[n]),this._keyMap[e]=n}},{key:"bindMacro",value:function(e,n){typeof n=="string"&&(n=[n]);var i=null;typeof n=="function"&&(i=n,n=null);var r={keyCombo:new b(e),keyNames:n,handler:i};this._macros.push(r)}},{key:"getKeyCodes",value:function(e){var n=[];for(var i in this._keyMap){var r=this._keyMap[i].indexOf(e);r>-1&&n.push(i|0)}return n}},{key:"getKeyNames",value:function(e){return this._keyMap[e]||[]}},{key:"setKillKey",value:function(e){if(typeof e=="string"){for(var n=this.getKeyCodes(e),i=0;i<n.length;i+=1)this.setKillKey(n[i]);return}this._killKeyCodes.push(e)}},{key:"pressKey",value:function(e){if(typeof e=="string"){for(var n=this.getKeyCodes(e),i=0;i<n.length;i+=1)this.pressKey(n[i]);return}this.activeTargetKeys.length=0;for(var r=this.getKeyNames(e),o=0;o<r.length;o+=1)this.activeTargetKeys.push(r[o]),this.pressedKeys.indexOf(r[o])===-1&&this.pressedKeys.push(r[o]);this._applyMacros()}},{key:"releaseKey",value:function(e){if(typeof e=="string")for(var n=this.getKeyCodes(e),i=0;i<n.length;i+=1)this.releaseKey(n[i]);else{var r=this.getKeyNames(e),o=this._killKeyCodes.indexOf(e);if(o!==-1)this.pressedKeys.length=0;else for(var a=0;a<r.length;a+=1){var u=this.pressedKeys.indexOf(r[a]);u>-1&&this.pressedKeys.splice(u,1)}this.activeTargetKeys.length=0,this._clearMacros()}}},{key:"_applyMacros",value:function(){for(var e=this._macros.slice(0),n=0;n<e.length;n+=1){var i=e[n];if(i.keyCombo.check(this.pressedKeys)){i.handler&&(i.keyNames=i.handler(this.pressedKeys));for(var r=0;r<i.keyNames.length;r+=1)this.pressedKeys.indexOf(i.keyNames[r])===-1&&this.pressedKeys.push(i.keyNames[r]);this._appliedMacros.push(i)}}}},{key:"_clearMacros",value:function(){for(var e=0;e<this._appliedMacros.length;e+=1){var n=this._appliedMacros[e];if(!n.keyCombo.check(this.pressedKeys)){for(var i=0;i<n.keyNames.length;i+=1){var r=this.pressedKeys.indexOf(n.keyNames[i]);r>-1&&this.pressedKeys.splice(r,1)}n.handler&&(n.keyNames=null),this._appliedMacros.splice(e,1),e-=1}}}}]),t}(),L=function(){function t(s,e,n,i){y(this,t),this._locale=null,this._currentContext="",this._contexts={},this._listeners=[],this._appliedListeners=[],this._locales={},this._targetElement=null,this._targetWindow=null,this._targetPlatform="",this._targetUserAgent="",this._isModernBrowser=!1,this._targetKeyDownBinding=null,this._targetKeyUpBinding=null,this._targetResetBinding=null,this._paused=!1,this._contexts.global={listeners:this._listeners,targetWindow:s,targetElement:e,targetPlatform:n,targetUserAgent:i},this.setContext("globalThis")}return v(t,[{key:"setLocale",value:function(e,n){var i=null;return typeof e=="string"?n?(i=new E(e),n(i,this._targetPlatform,this._targetUserAgent)):i=this._locales[e]||null:(i=e,e=i._localeName),this._locale=i,this._locales[e]=i,i&&(this._locale.pressedKeys=i.pressedKeys),this}},{key:"getLocale",value:function(e){return e||(e=this._locale.localeName),this._locales[e]||null}},{key:"bind",value:function(e,n,i,r){if((e===null||typeof e=="function")&&(r=i,i=n,n=e,e=null),e&&f(e)==="object"&&typeof e.length=="number"){for(var o=0;o<e.length;o+=1)this.bind(e[o],n,i);return this}return this._listeners.push({keyCombo:e?new b(e):null,pressHandler:n||null,releaseHandler:i||null,preventRepeat:!1,preventRepeatByDefault:r||!1,executingHandler:!1}),this}},{key:"addListener",value:function(e,n,i,r){return this.bind(e,n,i,r)}},{key:"on",value:function(e,n,i,r){return this.bind(e,n,i,r)}},{key:"bindPress",value:function(e,n,i){return this.bind(e,n,null,i)}},{key:"bindRelease",value:function(e,n){return this.bind(e,null,n,preventRepeatByDefault)}},{key:"unbind",value:function(e,n,i){if((e===null||typeof e=="function")&&(i=n,n=e,e=null),e&&f(e)==="object"&&typeof e.length=="number"){for(var r=0;r<e.length;r+=1)this.unbind(e[r],n,i);return this}for(var o=0;o<this._listeners.length;o+=1){var a=this._listeners[o],u=!e&&!a.keyCombo||a.keyCombo&&a.keyCombo.isEqual(e),d=!n&&!i||!n&&!a.pressHandler||n===a.pressHandler,h=!n&&!i||!i&&!a.releaseHandler||i===a.releaseHandler;u&&d&&h&&(this._listeners.splice(o,1),o-=1)}return this}},{key:"removeListener",value:function(e,n,i){return this.unbind(e,n,i)}},{key:"off",value:function(e,n,i){return this.unbind(e,n,i)}},{key:"setContext",value:function(e){if(this._locale&&this.releaseAllKeys(),!this._contexts[e]){var n=this._contexts.global;this._contexts[e]={listeners:[],targetWindow:n.targetWindow,targetElement:n.targetElement,targetPlatform:n.targetPlatform,targetUserAgent:n.targetUserAgent}}var i=this._contexts[e];return this._currentContext=e,this._listeners=i.listeners,this.stop(),this.watch(i.targetWindow,i.targetElement,i.targetPlatform,i.targetUserAgent),this}},{key:"getContext",value:function(){return this._currentContext}},{key:"withContext",value:function(e,n){var i=this.getContext();return this.setContext(e),n(),this.setContext(i),this}},{key:"watch",value:function(e,n,i,r){var o=this;this.stop();var a=typeof globalThis<"u"||typeof globalThis<"u"?globalThis:typeof window<"u"?window:{};if(!e){if(!a.addEventListener&&!a.attachEvent){if(this._currentContext==="globalThis")return;throw new Error("Cannot find window functions addEventListener or attachEvent.")}e=a}if(typeof e.nodeType=="number"&&(r=i,i=n,n=e,e=a),!e.addEventListener&&!e.attachEvent)throw new Error("Cannot find addEventListener or attachEvent methods on targetWindow.");this._isModernBrowser=!!e.addEventListener;var u=e.navigator&&e.navigator.userAgent||"",d=e.navigator&&e.navigator.platform||"";n&&n!==null||(n=e.document),i&&i!==null||(i=d),r&&r!==null||(r=u),this._targetKeyDownBinding=function(c){o.pressKey(c.keyCode,c),o._handleCommandBug(c,d)},this._targetKeyUpBinding=function(c){o.releaseKey(c.keyCode,c)},this._targetResetBinding=function(c){o.releaseAllKeys(c)},this._bindEvent(n,"keydown",this._targetKeyDownBinding),this._bindEvent(n,"keyup",this._targetKeyUpBinding),this._bindEvent(e,"focus",this._targetResetBinding),this._bindEvent(e,"blur",this._targetResetBinding),this._targetElement=n,this._targetWindow=e,this._targetPlatform=i,this._targetUserAgent=r;var h=this._contexts[this._currentContext];return h.targetWindow=this._targetWindow,h.targetElement=this._targetElement,h.targetPlatform=this._targetPlatform,h.targetUserAgent=this._targetUserAgent,this}},{key:"stop",value:function(){if(!(!this._targetElement||!this._targetWindow))return this._unbindEvent(this._targetElement,"keydown",this._targetKeyDownBinding),this._unbindEvent(this._targetElement,"keyup",this._targetKeyUpBinding),this._unbindEvent(this._targetWindow,"focus",this._targetResetBinding),this._unbindEvent(this._targetWindow,"blur",this._targetResetBinding),this._targetWindow=null,this._targetElement=null,this}},{key:"pressKey",value:function(e,n){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.pressKey(e),this._applyBindings(n),this}},{key:"releaseKey",value:function(e,n){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.releaseKey(e),this._clearBindings(n),this}},{key:"releaseAllKeys",value:function(e){if(this._paused)return this;if(!this._locale)throw new Error("Locale not set");return this._locale.pressedKeys.length=0,this._clearBindings(e),this}},{key:"pause",value:function(){return this._paused?this:(this._locale&&this.releaseAllKeys(),this._paused=!0,this)}},{key:"resume",value:function(){return this._paused=!1,this}},{key:"reset",value:function(){return this.releaseAllKeys(),this._listeners.length=0,this}},{key:"_bindEvent",value:function(e,n,i){return this._isModernBrowser?e.addEventListener(n,i,!1):e.attachEvent("on"+n,i)}},{key:"_unbindEvent",value:function(e,n,i){return this._isModernBrowser?e.removeEventListener(n,i,!1):e.detachEvent("on"+n,i)}},{key:"_getGroupedListeners",value:function(){var e=[],n=[],i=this._listeners;return this._currentContext!=="globalThis"&&(i=[].concat(x(i),x(this._contexts.global.listeners))),i.sort(function(r,o){return(o.keyCombo?o.keyCombo.keyNames.length:0)-(r.keyCombo?r.keyCombo.keyNames.length:0)}).forEach(function(r){for(var o=-1,a=0;a<n.length;a+=1)(n[a]===null&&r.keyCombo===null||n[a]!==null&&n[a].isEqual(r.keyCombo))&&(o=a);o===-1&&(o=n.length,n.push(r.keyCombo)),e[o]||(e[o]=[]),e[o].push(r)}),e}},{key:"_applyBindings",value:function(e){var n=this,i=!1;e||(e={}),e.preventRepeat=function(){i=!0},e.pressedKeys=this._locale.pressedKeys.slice(0);for(var r=this._locale.activeTargetKeys,o=this._locale.pressedKeys.slice(0),a=this._getGroupedListeners(),u=function(c){var w=a[c],g=w[0].keyCombo;if(g===null||g.check(o)&&r.some(function(P){return g.keyNames.includes(P)})){for(var M=0;M<w.length;M+=1){var p=w[M];!p.executingHandler&&p.pressHandler&&!p.preventRepeat&&(p.executingHandler=!0,p.pressHandler.call(n,e),p.executingHandler=!1,(i||p.preventRepeatByDefault)&&(p.preventRepeat=!0,i=!1)),n._appliedListeners.indexOf(p)===-1&&n._appliedListeners.push(p)}if(g)for(var m=0;m<g.keyNames.length;m+=1){var B=o.indexOf(g.keyNames[m]);B!==-1&&(o.splice(B,1),m-=1)}}},d=0;d<a.length;d+=1)u(d)}},{key:"_clearBindings",value:function(e){e||(e={}),e.pressedKeys=this._locale.pressedKeys.slice(0);for(var n=0;n<this._appliedListeners.length;n+=1){var i=this._appliedListeners[n],r=i.keyCombo;(r===null||!r.check(this._locale.pressedKeys))&&(i.preventRepeat=!1,(r!==null||e.pressedKeys.length===0)&&(this._appliedListeners.splice(n,1),n-=1),!i.executingHandler&&i.releaseHandler&&(i.executingHandler=!0,i.releaseHandler.call(this,e),i.executingHandler=!1))}}},{key:"_handleCommandBug",value:function(e,n){var i=["shift","ctrl","alt","capslock","tab","command"];n.match("Mac")&&this._locale.pressedKeys.includes("command")&&!i.includes(this._locale.getKeyNames(e.keyCode)[0])&&this._targetKeyUpBinding(e)}}]),t}();function q(t,s,e){t.bindKeyCode(3,["cancel"]),t.bindKeyCode(8,["backspace"]),t.bindKeyCode(9,["tab"]),t.bindKeyCode(12,["clear"]),t.bindKeyCode(13,["enter"]),t.bindKeyCode(16,["shift"]),t.bindKeyCode(17,["ctrl"]),t.bindKeyCode(18,["alt","menu"]),t.bindKeyCode(19,["pause","break"]),t.bindKeyCode(20,["capslock"]),t.bindKeyCode(27,["escape","esc"]),t.bindKeyCode(32,["space","spacebar"]),t.bindKeyCode(33,["pageup"]),t.bindKeyCode(34,["pagedown"]),t.bindKeyCode(35,["end"]),t.bindKeyCode(36,["home"]),t.bindKeyCode(37,["left"]),t.bindKeyCode(38,["up"]),t.bindKeyCode(39,["right"]),t.bindKeyCode(40,["down"]),t.bindKeyCode(41,["select"]),t.bindKeyCode(42,["printscreen"]),t.bindKeyCode(43,["execute"]),t.bindKeyCode(44,["snapshot"]),t.bindKeyCode(45,["insert","ins"]),t.bindKeyCode(46,["delete","del"]),t.bindKeyCode(47,["help"]),t.bindKeyCode(145,["scrolllock","scroll"]),t.bindKeyCode(188,["comma",","]),t.bindKeyCode(190,["period","."]),t.bindKeyCode(191,["slash","forwardslash","/"]),t.bindKeyCode(192,["graveaccent","`"]),t.bindKeyCode(219,["openbracket","["]),t.bindKeyCode(220,["backslash","\\"]),t.bindKeyCode(221,["closebracket","]"]),t.bindKeyCode(222,["apostrophe","'"]),t.bindKeyCode(48,["zero","0"]),t.bindKeyCode(49,["one","1"]),t.bindKeyCode(50,["two","2"]),t.bindKeyCode(51,["three","3"]),t.bindKeyCode(52,["four","4"]),t.bindKeyCode(53,["five","5"]),t.bindKeyCode(54,["six","6"]),t.bindKeyCode(55,["seven","7"]),t.bindKeyCode(56,["eight","8"]),t.bindKeyCode(57,["nine","9"]),t.bindKeyCode(96,["numzero","num0"]),t.bindKeyCode(97,["numone","num1"]),t.bindKeyCode(98,["numtwo","num2"]),t.bindKeyCode(99,["numthree","num3"]),t.bindKeyCode(100,["numfour","num4"]),t.bindKeyCode(101,["numfive","num5"]),t.bindKeyCode(102,["numsix","num6"]),t.bindKeyCode(103,["numseven","num7"]),t.bindKeyCode(104,["numeight","num8"]),t.bindKeyCode(105,["numnine","num9"]),t.bindKeyCode(106,["nummultiply","num*"]),t.bindKeyCode(107,["numadd","num+"]),t.bindKeyCode(108,["numenter"]),t.bindKeyCode(109,["numsubtract","num-"]),t.bindKeyCode(110,["numdecimal","num."]),t.bindKeyCode(111,["numdivide","num/"]),t.bindKeyCode(144,["numlock","num"]),t.bindKeyCode(112,["f1"]),t.bindKeyCode(113,["f2"]),t.bindKeyCode(114,["f3"]),t.bindKeyCode(115,["f4"]),t.bindKeyCode(116,["f5"]),t.bindKeyCode(117,["f6"]),t.bindKeyCode(118,["f7"]),t.bindKeyCode(119,["f8"]),t.bindKeyCode(120,["f9"]),t.bindKeyCode(121,["f10"]),t.bindKeyCode(122,["f11"]),t.bindKeyCode(123,["f12"]),t.bindKeyCode(124,["f13"]),t.bindKeyCode(125,["f14"]),t.bindKeyCode(126,["f15"]),t.bindKeyCode(127,["f16"]),t.bindKeyCode(128,["f17"]),t.bindKeyCode(129,["f18"]),t.bindKeyCode(130,["f19"]),t.bindKeyCode(131,["f20"]),t.bindKeyCode(132,["f21"]),t.bindKeyCode(133,["f22"]),t.bindKeyCode(134,["f23"]),t.bindKeyCode(135,["f24"]),t.bindMacro("shift + `",["tilde","~"]),t.bindMacro("shift + 1",["exclamation","exclamationpoint","!"]),t.bindMacro("shift + 2",["at","@"]),t.bindMacro("shift + 3",["number","#"]),t.bindMacro("shift + 4",["dollar","dollars","dollarsign","$"]),t.bindMacro("shift + 5",["percent","%"]),t.bindMacro("shift + 6",["caret","^"]),t.bindMacro("shift + 7",["ampersand","and","&"]),t.bindMacro("shift + 8",["asterisk","*"]),t.bindMacro("shift + 9",["openparen","("]),t.bindMacro("shift + 0",["closeparen",")"]),t.bindMacro("shift + -",["underscore","_"]),t.bindMacro("shift + =",["plus","+"]),t.bindMacro("shift + [",["opencurlybrace","opencurlybracket","{"]),t.bindMacro("shift + ]",["closecurlybrace","closecurlybracket","}"]),t.bindMacro("shift + \\",["verticalbar","|"]),t.bindMacro("shift + ;",["colon",":"]),t.bindMacro("shift + '",["quotationmark","'"]),t.bindMacro("shift + !,",["openanglebracket","<"]),t.bindMacro("shift + .",["closeanglebracket",">"]),t.bindMacro("shift + /",["questionmark","?"]),s.match("Mac")?t.bindMacro("command",["mod","modifier"]):t.bindMacro("ctrl",["mod","modifier"]);for(var n=65;n<=90;n+=1){var i=String.fromCharCode(n+32),r=String.fromCharCode(n);t.bindKeyCode(n,i),t.bindMacro("shift + "+i,r),t.bindMacro("capslock + "+i,r)}var o=e.match("Firefox")?59:186,a=e.match("Firefox")?173:189,u=e.match("Firefox")?61:187,d,h;s.match("Mac")&&(e.match("Safari")||e.match("Chrome"))?(d=91,h=93):s.match("Mac")&&e.match("Opera")?(d=17,h=17):s.match("Mac")&&e.match("Firefox")&&(d=224,h=224),t.bindKeyCode(o,["semicolon",";"]),t.bindKeyCode(a,["dash","-"]),t.bindKeyCode(u,["equal","equalsign","="]),t.bindKeyCode(d,["command","windows","win","super","leftcommand","leftwindows","leftwin","leftsuper"]),t.bindKeyCode(h,["command","windows","win","super","rightcommand","rightwindows","rightwin","rightsuper"]),t.setKillKey("command")}var _=new L;return _.setLocale("us",q),_.Keyboard=L,_.Locale=E,_.KeyCombo=b,_})})(T);var A=T.exports;const $=G(A),S=F({__proto__:null,default:$},[A]);export{S as k};
