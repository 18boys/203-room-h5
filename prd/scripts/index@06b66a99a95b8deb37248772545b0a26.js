(function(e){var t={id:"624b017aec859a48d3c98140b61779f3",filename:"fastclick.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){"use strict";function e(t,n){function s(e,t){return function(){return e.apply(t,arguments)}}var i;n=n||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=n.touchBoundary||10;this.layer=t;this.tapDelay=n.tapDelay||200;this.tapTimeout=n.tapTimeout||700;if(e.notNeeded(t)){return}var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var u=this;for(var a=0,f=o.length;a<f;a++){u[o[a]]=s(u[o[a]],u)}if(r){t.addEventListener("mouseover",this.onMouse,true);t.addEventListener("mousedown",this.onMouse,true);t.addEventListener("mouseup",this.onMouse,true)}t.addEventListener("click",this.onClick,true);t.addEventListener("touchstart",this.onTouchStart,false);t.addEventListener("touchmove",this.onTouchMove,false);t.addEventListener("touchend",this.onTouchEnd,false);t.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;if(e==="click"){i.call(t,e,n.hijacked||n,r)}else{i.call(t,e,n,r)}};t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;if(e==="click"){i.call(t,e,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(t,e,n,r)}}}if(typeof t.onclick==="function"){i=t.onclick;t.addEventListener("click",function(e){i(e)},false);t.onclick=null}}var n=navigator.userAgent.indexOf("Windows Phone")>=0;var r=navigator.userAgent.indexOf("Android")>0&&!n;var i=/iP(ad|hone|od)/.test(navigator.userAgent)&&!n;var s=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var o=i&&/OS [6-7]_\d/.test(navigator.userAgent);var u=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(i&&e.type==="file"||e.disabled){return true}break;case"label":case"iframe":case"video":return true}return/\bneedsclick\b/.test(e.className)};e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!r;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};e.prototype.sendClick=function(e,t){var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};e.prototype.determineEventType=function(e){if(r&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};e.prototype.focus=function(e){var t;if(i&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};e.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};e.prototype.getTargetElementFromEventTarget=function(e){if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};e.prototype.onTouchStart=function(e){var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(i){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!s){if(n.identifier&&n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};e.prototype.onTouchMove=function(e){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};e.prototype.findControl=function(e){if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(e){var t,n,u,a,f,l=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}if(e.timeStamp-this.trackingClickStart>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(o){f=e.changedTouches[0];l=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||l;l.fastClickScrollParent=this.targetElement.fastClickScrollParent}u=l.tagName.toLowerCase();if(u==="label"){t=this.findControl(l);if(t){this.focus(l);if(r){return false}l=t}}else if(this.needsFocus(l)){if(e.timeStamp-n>100||i&&window.top!==window&&u==="input"){this.targetElement=null;return false}this.focus(l);this.sendClick(l,e);if(!i||u!=="select"){this.targetElement=null;e.preventDefault()}return false}if(i&&!s){a=l.fastClickScrollParent;if(a&&a.fastClickLastScrollTop!==a.scrollTop){return true}}if(!this.needsClick(l)){e.preventDefault();this.sendClick(l,e)}return false};e.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};e.prototype.onMouse=function(e){if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};e.prototype.onClick=function(e){var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};e.prototype.destroy=function(){var e=this.layer;if(r){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};e.notNeeded=function(e){var t;var n;var i;var s;if(typeof window.ontouchstart==="undefined"){return true}n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(n){if(r){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(n>31&&document.documentElement.scrollWidth<window.outerWidth){return true}}}else{return true}}if(u){i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(i[1]>=10&&i[2]>=3){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"||e.style.touchAction==="manipulation"){return true}s=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(s>=27){t=document.querySelector("meta[name=viewport]");if(t&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true}}if(e.style.touchAction==="none"||e.style.touchAction==="manipulation"){return true}return false};e.attach=function(t,n){return new e(t,n)};if(typeof define==="function"&&typeof define.amd==="object"&&define.amd){define(function(){return e})}else if(typeof t!=="undefined"&&t.exports){t.exports=e.attach;t.exports.FastClick=e}else{window.FastClick=e}})()}(t.exports,t,e);e.____MODULES["624b017aec859a48d3c98140b61779f3"]=t.exports})(this);(function(e){var t={id:"39bbf7c0c02391a3e76dad4fd8ba0d20",filename:"iphone-inline-video.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){"use strict";function e(e,t,n,r){function o(n){i=t(o,r);e(n-(s||n));s=n}var i;var s;return{start:function(){if(!i){o(0)}},stop:function(){n(i);i=null;s=0}}}function n(t){return e(t,requestAnimationFrame,cancelAnimationFrame)}function r(e,t,n){function r(r){if(!n||n(e,t)){r.stopImmediatePropagation()}}e.addEventListener(t,r);return r}function i(e,t,n,r){function i(){return n[t]}function s(e){n[t]=e}if(r){s(e[t])}Object.defineProperty(e,t,{get:i,set:s})}function s(e,t,n){n.addEventListener(t,function(){return e.dispatchEvent(new Event(t))})}function o(e,t){Promise.resolve().then(function(){e.dispatchEvent(new Event(t))})}function h(e){var t=new Audio;s(e,"play",t);s(e,"playing",t);s(e,"pause",t);t.crossOrigin=e.crossOrigin;t.src=e.src||e.currentSrc||"data:";return t}function m(e,t,n){if((v||0)+200<Date.now()){e[f]=true;v=Date.now()}if(!n){e.currentTime=t}p[++d%3]=t*100|0/100}function g(e){return e.driver.currentTime>=e.video.duration}function y(e){var t=this;if(t.video.readyState>=t.video.HAVE_FUTURE_DATA){if(!t.hasAudio){t.driver.currentTime=t.video.currentTime+e*t.video.playbackRate/1e3;if(t.video.loop&&g(t)){t.driver.currentTime=0}}m(t.video,t.driver.currentTime)}else if(t.video.networkState===t.video.NETWORK_IDLE&&t.video.buffered.length===0){t.video.load()}if(t.video.ended){delete t.video[f];t.video.pause(true)}}function b(){var e=this;var t=e[a];if(e.webkitDisplayingFullscreen){e[l]();return}if(t.driver.src!=="data:"&&t.driver.src!==e.src){m(e,0,true);t.driver.src=e.src}if(!e.paused){return}t.paused=false;if(e.buffered.length===0){e.load()}t.driver.play();t.updater.start();if(!t.hasAudio){o(e,"play");if(t.video.readyState>=t.video.HAVE_ENOUGH_DATA){o(e,"playing")}}}function w(e){var t=this;var n=t[a];n.driver.pause();n.updater.stop();if(t.webkitDisplayingFullscreen){t[c]()}if(n.paused&&!e){return}n.paused=true;if(!n.hasAudio){o(t,"pause")}if(t.ended&&!t.webkitDisplayingFullscreen){t[f]=true;o(t,"ended")}}function E(e,t){var r={};e[a]=r;r.paused=true;r.hasAudio=t;r.video=e;r.updater=n(y.bind(r));if(t){r.driver=h(e)}else{e.addEventListener("canplay",function(){if(!e.paused){o(e,"playing")}});r.driver={src:e.src||e.currentSrc||"data:",muted:true,paused:true,pause:function(){r.driver.paused=true},play:function(){r.driver.paused=false;if(g(r)){m(e,0)}},get ended(){return g(r)}}}e.addEventListener("emptied",function(){var n=!r.driver.src||r.driver.src==="data:";if(r.driver.src&&r.driver.src!==e.src){m(e,0,true);r.driver.src=e.src;if(n||!t&&e.autoplay){r.driver.play()}else{r.updater.stop()}}},false);e.addEventListener("webkitbeginfullscreen",function(){if(!e.paused){e.pause();e[l]()}else if(t&&r.driver.buffered.length===0){r.driver.load()}});if(t){e.addEventListener("webkitendfullscreen",function(){r.driver.currentTime=e.currentTime});e.addEventListener("seeking",function(){if(p.indexOf(e.currentTime*100|0/100)<0){r.driver.currentTime=e.currentTime}})}}function S(e){var t=e[f];delete e[f];return!e.webkitDisplayingFullscreen&&!t}function x(e){var t=e[a];e[l]=e.play;e[c]=e.pause;e.play=b;e.pause=w;i(e,"paused",t.driver);i(e,"muted",t.driver,true);i(e,"playbackRate",t.driver,true);i(e,"ended",t.driver);i(e,"loop",t.driver,true);r(e,"seeking",function(e){return!e.webkitDisplayingFullscreen});r(e,"seeked",function(e){return!e.webkitDisplayingFullscreen});r(e,"timeupdate",S);r(e,"ended",S)}function T(e,t){if(t===void 0)t={};if(e[a]){return}if(!t.everywhere){if(!u){return}if(!(t.iPad||t.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent)){return}}e.pause();var n=e.autoplay;e.autoplay=false;E(e,!e.muted);x(e);e.classList.add("IIV");if(e.muted&&n){e.play();e.addEventListener("playing",function r(){e.autoplay=true;e.removeEventListener("playing",r)})}if(!/iPhone|iPod|iPad/.test(navigator.platform)){console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}var u=typeof document==="object"&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches;var a="bfred-it:iphone-inline-video";var f="bfred-it:iphone-inline-video:event";var l="bfred-it:iphone-inline-video:nativeplay";var c="bfred-it:iphone-inline-video:nativepause";var p=[];var d=0;var v;if(typeof t!=="undefined"&&t.exports){t.exports=T}return T})()}(t.exports,t,e);e.____MODULES["39bbf7c0c02391a3e76dad4fd8ba0d20"]=t.exports})(this);(function(e){var t={id:"f56678f7cdc029bb0701372f7b0c8d2c",filename:"video.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){function r(e,t,n){var i='<video id="my_video" style="object-fit:fill"  preload="load" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portrait" src=""></video>';$("#"+e).append(i);__VideoHTML=$("#my_video");r.setWidthAndHeight(100,100);r.setSrc(t);setInterval(function(){},2e3);__VideoHTML.on("loadedmetadata",function(){n()})}__VideoHTML=null;r.setWidthAndHeight=function(e,t){__VideoHTML.css("width",e+"%");__VideoHTML.css("height",t+"%")};r.play=function(){document.getElementById("my_video").play()};r.pause=function(){document.getElementById("my_video").pause()};r.setSrc=function(e){document.getElementById("my_video").src=e};t.exports=r}(t.exports,t,e);e.____MODULES["f56678f7cdc029bb0701372f7b0c8d2c"]=t.exports})(this);(function(e){var t={id:"3113e2d630aad98b9a4b721557d35bc1",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){var i=e.____MODULES["624b017aec859a48d3c98140b61779f3"];var s=e.____MODULES["39bbf7c0c02391a3e76dad4fd8ba0d20"];var o=e.____MODULES["f56678f7cdc029bb0701372f7b0c8d2c"];i(document.body);var u=document.body.clientWidth,a=document.body.clientHeight,f=375,l=604;console.log(u,a);var c=function(){this.timer="";this.$body=$(".pageWrapper");this.$home=$(".home");this.$full_page=$(".full-page");this.$comment_page=$(".comment-page");this.$share_page=$(".share-page");this.$loading=$(".loading");this.init()};c.prototype={init:function(){this._reset();this._initHomePage();this._loadVedio()},_reset:function(){this.$body.css({"-webkit-transform":"scaleX("+u/f+") scaleY("+a/l+")",transform:"scaleX("+u/f+") scaleY("+a/l+")"})},_loadVedio:function(){console.log("eeeeeeee");var e=this},_initHomePage:function(){var e=this;$(document).on("click",".loading",function(t){e.$home.addClass("hidden").removeClass("visibility");e._initFullPage()})},_initFullPage:function(){var e=this;e.$full_page.addClass("visibility").removeClass("hidden");var t=document.getElementById("full-vidio");s(t);t.play();$(t).on("ended",function(t){e._initCommentPage();e.$full_page.addClass("hide").removeClass("on")})},_initCommentPage:function(){var e=this;this.$comment_page.addClass("visibility").removeClass("hidden");$(document).on("click",".comment-page .share-button",function(t){e._initSharePage()})},_initSharePage:function(){this.$share_page.addClass("visibility").removeClass("hidden");$(document).on("click",".share-page",function(e){$(".share-page").addClass("hidden").removeClass("visibility")})}};new c}(t.exports,t,e);e.____MODULES["3113e2d630aad98b9a4b721557d35bc1"]=t.exports})(this)