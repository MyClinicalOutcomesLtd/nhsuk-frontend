(()=>{var e={405:()=>{NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,value:function(e){return this.filter((function(t){return t===e})).length>0}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n})}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,o(i.key),i)}}function i(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"KEY_SPACE",32),i(this,"DEBOUNCE_TIMEOUT_IN_SECONDS",1),this.$module=t,this.debounceFormSubmitTimer=null}var n,o;return n=e,(o=[{key:"handleKeyDown",value:function(e){var t=e.target;"button"===t.getAttribute("role")&&e.keyCode===this.KEY_SPACE&&(e.preventDefault(),t.click())}},{key:"debounce",value:function(e){var t=this;if("true"===e.target.getAttribute("data-prevent-double-click"))return this.debounceFormSubmitTimer?(e.preventDefault(),!1):void(this.debounceFormSubmitTimer=setTimeout((function(){t.debounceFormSubmitTimer=null}),1e3*this.DEBOUNCE_TIMEOUT_IN_SECONDS))}},{key:"init",value:function(){this.$module.addEventListener("keydown",this.handleKeyDown.bind(this)),this.$module.addEventListener("click",this.debounce.bind(this))}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===r(o)?o:String(o)),i)}var o}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$module=t,this.$textarea=t.querySelector(".nhsuk-js-character-count"),this.$visibleCountMessage=null,this.$screenReaderCountMessage=null,this.lastInputTimestamp=null}var t,n,i;return t=e,i=[{key:"getDataset",value:function(e){var t={},n=e.attributes;if(n)for(var i=0;i<n.length;i++){var o=n[i],a=o.name.match(/^data-(.+)/);a&&(t[a[1]]=o.value)}return t}}],(n=[{key:"init",value:function(){if(this.$textarea){var t=this.$module,n=this.$textarea,i=document.getElementById("".concat(n.id,"-info"));n.insertAdjacentElement("afterend",i);var o=document.createElement("div");o.className="nhsuk-character-count__sr-status nhsuk-u-visually-hidden",o.setAttribute("aria-live","polite"),this.$screenReaderCountMessage=o,i.insertAdjacentElement("afterend",o);var a=document.createElement("div");a.className=i.className,a.classList.add("nhsuk-character-count__status"),a.setAttribute("aria-hidden","true"),this.$visibleCountMessage=a,i.insertAdjacentElement("afterend",a),i.classList.add("nhsuk-u-visually-hidden"),this.options=e.getDataset(t);var r=this.defaults.characterCountAttribute;this.options.maxwords&&(r=this.defaults.wordCountAttribute),this.maxLength=t.getAttribute(r),this.maxLength&&(n.removeAttribute("maxlength"),this.bindChangeEvents(),"onpageshow"in window?window.addEventListener("pageshow",this.updateCountMessage.bind(this)):window.addEventListener("DOMContentLoaded",this.updateCountMessage.bind(this)),this.updateCountMessage())}}},{key:"count",value:function(e){return this.options.maxwords?(e.match(/\S+/g)||[]).length:e.length}},{key:"bindChangeEvents",value:function(){var e=this.$textarea;e.addEventListener("keyup",this.handleKeyUp.bind(this)),e.addEventListener("focus",this.handleFocus.bind(this)),e.addEventListener("blur",this.handleBlur.bind(this))}},{key:"checkIfValueChanged",value:function(){this.$textarea.oldValue||(this.$textarea.oldValue=""),this.$textarea.value!==this.$textarea.oldValue&&(this.$textarea.oldValue=this.$textarea.value,this.updateCountMessage())}},{key:"updateCountMessage",value:function(){this.updateVisibleCountMessage(),this.updateScreenReaderCountMessage()}},{key:"updateVisibleCountMessage",value:function(){var e=this.$textarea,t=this.$visibleCountMessage,n=this.maxLength-this.count(e.value);this.isOverThreshold()?t.classList.remove("nhsuk-character-count__message--disabled"):t.classList.add("nhsuk-character-count__message--disabled"),n<0?(e.classList.add("nhsuk-textarea--error"),t.classList.remove("nhsuk-hint"),t.classList.add("nhsuk-error-message")):(e.classList.remove("nhsuk-textarea--error"),t.classList.remove("nhsuk-error-message"),t.classList.add("nhsuk-hint")),t.innerHTML=this.formattedUpdateMessage()}},{key:"updateScreenReaderCountMessage",value:function(){var e=this.$screenReaderCountMessage;this.isOverThreshold()?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",!0),e.innerHTML=this.formattedUpdateMessage()}},{key:"formattedUpdateMessage",value:function(){var e,t,n=this.$textarea,i=this.options,o=this.maxLength-this.count(n.value),a="character";return i.maxwords&&(a="word"),a+=-1===o||1===o?"":"s",e=o<0?"too many":"remaining",t=Math.abs(o),"You have ".concat(t," ").concat(a," ").concat(e)}},{key:"isOverThreshold",value:function(){var e=this.$textarea,t=this.options,n=this.count(e.value);return this.maxLength*(t.threshold?t.threshold:0)/100<=n}},{key:"handleKeyUp",value:function(){this.updateVisibleCountMessage(),this.lastInputTimestamp=Date.now()}},{key:"handleFocus",value:function(){var e=this;this.valueChecker=setInterval((function(){(!e.lastInputTimestamp||Date.now()-500>=e.lastInputTimestamp)&&e.checkIfValueChanged()}),1e3)}},{key:"handleBlur",value:function(){clearInterval(this.valueChecker)}}])&&s(t.prototype,n),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();u.prototype.defaults={characterCountAttribute:"data-maxlength",wordCountAttribute:"data-maxwords"};var c=function(e,t){if(e&&t){var n="true"===e.getAttribute(t)?"false":"true";e.setAttribute(t,n)}},l=function(e,t){if(e&&t){var n=e.getAttribute("aria-controls");if(n){var i=document.getElementById(n);i&&(e.checked?(i.classList.remove(t),e.setAttribute("aria-expanded",!0)):(i.classList.add(t),e.setAttribute("aria-expanded",!1)))}}},h=function(e){e.form.querySelectorAll('input[type="checkbox"]').forEach((function(e){return l(e,"nhsuk-checkboxes__conditional--hidden")}))},d=function(e){e.form.querySelectorAll('input[type="checkbox"][data-checkbox-exclusive-group="'.concat(e.getAttribute("data-checkbox-exclusive-group"),'"]')).forEach((function(t){e.form===t.form&&t!==e&&(t.checked=!1)})),h(e)},b=function(e){e.form.querySelectorAll('input[type="checkbox"][data-checkbox-exclusive][data-checkbox-exclusive-group="'.concat(e.getAttribute("data-checkbox-exclusive-group"),'"]')).forEach((function(t){e.form===t.form&&(t.checked=!1)})),h(e)};function v(e){(function(e){if("A"!==e.tagName||!1===e.href)return!1;var t=document.querySelector(e.hash);if(!t)return!1;var n=function(e){var t=e.closest("fieldset");if(t){var n=t.getElementsByTagName("legend");if(n.length){var i=n[0];if("checkbox"===e.type||"radio"===e.type)return i;var o=i.getBoundingClientRect().top,a=e.getBoundingClientRect();if(a.height&&window.innerHeight&&a.top+a.height-o<window.innerHeight/2)return i}}return document.querySelector("label[for='".concat(e.getAttribute("id"),"']"))||e.closest("label")}(t);return!!n&&(n.scrollIntoView(),t.focus({preventScroll:!0}),!0)})(e.target)&&e.preventDefault()}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==f(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===f(o)?o:String(o)),i)}var o}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIsOpen=!1,this.navigation=document.querySelector(".nhsuk-navigation"),this.navigationList=document.querySelector(".nhsuk-header__navigation-list"),this.mobileMenu=document.createElement("ul"),this.mobileMenuToggleButton=document.querySelector(".nhsuk-header__menu-toggle"),this.mobileMenuCloseButton=document.createElement("button"),this.mobileMenuContainer=document.querySelector(".nhsuk-mobile-menu-container"),this.breakpoints=[],this.width=document.body.offsetWidth}var t,n;return t=e,n=[{key:"init",value:function(){var e=this;this.navigation&&this.navigationList&&this.mobileMenuToggleButton&&this.mobileMenuContainer&&(this.setupMobileMenu(),this.calculateBreakpoints(),this.updateNavigation(),this.doOnOrientationChange(),this.handleResize=this.debounce((function(){e.calculateBreakpoints(),e.updateNavigation()})),this.mobileMenuToggleButton.addEventListener("click",this.toggleMobileMenu.bind(this)),window.addEventListener("resize",this.handleResize),window.addEventListener("orientationchange",this.doOnOrientationChange()))}},{key:"debounce",value:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];clearTimeout(t),t=setTimeout((function(){e.apply(n,a)}),i)}}},{key:"calculateBreakpoints",value:function(){for(var e=0,t=0;t<this.navigationList.children.length;t++)e+=this.navigationList.children[t].offsetWidth,this.breakpoints[t]=e}},{key:"setupMobileMenu",value:function(){this.mobileMenuContainer.appendChild(this.mobileMenu),this.mobileMenu.classList.add("nhsuk-header__drop-down","nhsuk-header__drop-down--hidden")}},{key:"closeMobileMenu",value:function(){this.menuIsOpen=!1,this.mobileMenu.classList.add("nhsuk-header__drop-down--hidden"),this.navigation.style.marginBottom=0,this.mobileMenuToggleButton.setAttribute("aria-expanded","false"),this.mobileMenuToggleButton.focus(),this.mobileMenuCloseButton.removeEventListener("click",this.closeMobileMenu.bind(this)),document.removeEventListener("keydown",this.handleEscapeKey.bind(this))}},{key:"handleEscapeKey",value:function(e){"Escape"===e.key&&this.closeMobileMenu()}},{key:"openMobileMenu",value:function(){this.menuIsOpen=!0,this.mobileMenu.classList.remove("nhsuk-header__drop-down--hidden");var e=this.mobileMenu.offsetHeight;this.navigation.style.marginBottom="".concat(e,"px"),this.mobileMenuToggleButton.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.handleEscapeKey.bind(this)),this.mobileMenuCloseButton.addEventListener("click",this.closeMobileMenu.bind(this))}},{key:"toggleMobileMenu",value:function(){this.menuIsOpen?this.closeMobileMenu():this.openMobileMenu()}},{key:"updateNavigation",value:function(){var e=this.navigation.offsetWidth,t=this.navigationList.children.length;if(e<this.breakpoints[t-1]){if(this.mobileMenuToggleButton.classList.add("nhsuk-header__menu-toggle--visible"),this.mobileMenuContainer.classList.add("nhsuk-mobile-menu-container--visible"),2===t)return;for(;e<this.breakpoints[t-1];)this.mobileMenu.insertBefore(this.navigationList.children[t-2],this.mobileMenu.firstChild),t-=1}else if(e>this.breakpoints[t])for(;e>this.breakpoints[t];)this.navigationList.insertBefore(this.mobileMenu.removeChild(this.mobileMenu.firstChild),this.mobileMenuContainer),t+=1;this.mobileMenu.children.length||(this.mobileMenuToggleButton.classList.remove("nhsuk-header__menu-toggle--visible"),this.mobileMenuContainer.classList.remove("nhsuk-mobile-menu-container--visible")),document.body.offsetWidth!==this.width&&this.menuIsOpen&&this.closeMobileMenu()}},{key:"doOnOrientationChange",value:function(){var e=this;90===window.orientation&&setTimeout((function(){e.calculateBreakpoints(),e.updateNavigation()}),200)}}],n&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===y(o)?o:String(o)),i)}var o}var k=function(){function e(t,n,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$module=t,this.namespace=n,this.responsive=i,this.historyEnabled=o,this.$tabs=t.querySelectorAll(".".concat(this.namespace,"__tab")),this.keys={down:40,left:37,right:39,up:38},this.jsHiddenClass="".concat(this.namespace,"__panel--hidden"),this.showEvent=new CustomEvent("tab.show"),this.hideEvent=new CustomEvent("tab.hide")}var t,n,i;return t=e,i=[{key:"getHref",value:function(e){var t=e.getAttribute("href");return t.slice(t.indexOf("#"),t.length)}}],(n=[{key:"init",value:function(){"function"==typeof window.matchMedia&&this.responsive?this.setupResponsiveChecks():this.setup()}},{key:"setupResponsiveChecks",value:function(){this.mql=window.matchMedia("(min-width: 641px)"),this.mql.addEventListener("change",this.checkMode.bind(this)),this.checkMode()}},{key:"checkMode",value:function(){this.mql.matches?this.setup():this.teardown()}},{key:"setup",value:function(){var e=this,t=this.$module,n=this.$tabs,i=t.querySelector(".".concat(this.namespace,"__list")),o=t.querySelectorAll(".".concat(this.namespace,"__list-item"));if(n&&i&&o){i.setAttribute("role","tablist"),o.forEach((function(e){e.setAttribute("role","presentation")})),n.forEach((function(t){e.setAttributes(t),t.boundTabClick=e.onTabClick.bind(e),t.boundTabKeydown=e.onTabKeydown.bind(e),t.addEventListener("click",t.boundTabClick,!0),t.addEventListener("keydown",t.boundTabKeydown,!0),e.hideTab(t)}));var a=this.getTab(window.location.hash)||this.$tabs[0];this.showTab(a),this.historyEnabled&&(t.boundOnHashChange=this.onHashChange.bind(this),window.addEventListener("hashchange",t.boundOnHashChange,!0))}}},{key:"teardown",value:function(){var e=this,t=this.$module,n=this.$tabs,i=t.querySelector(".".concat(this.namespace,"__list")),o=t.querySelectorAll(".".concat(this.namespace,"__list-item"));n&&i&&o&&(i.removeAttribute("role"),o.forEach((function(e){e.removeAttribute("role","presentation")})),n.forEach((function(t){t.removeEventListener("click",t.boundTabClick,!0),t.removeEventListener("keydown",t.boundTabKeydown,!0),e.unsetAttributes(t)})),this.historyEnabled&&window.removeEventListener("hashchange",t.boundOnHashChange,!0))}},{key:"onHashChange",value:function(){var e=window.location.hash,t=this.getTab(e);if(t)if(this.changingHash)this.changingHash=!1;else{var n=this.getCurrentTab();this.hideTab(n),this.showTab(t),t.focus()}}},{key:"hideTab",value:function(e){this.unhighlightTab(e),this.hidePanel(e)}},{key:"showTab",value:function(e){this.highlightTab(e),this.showPanel(e)}},{key:"getTab",value:function(e){return this.$module.querySelector(".".concat(this.namespace,'__tab[href="').concat(e,'"]'))}},{key:"setAttributes",value:function(t){var n=e.getHref(t).slice(1);t.setAttribute("id","tab_".concat(n)),t.setAttribute("role","tab"),t.setAttribute("aria-controls",n),t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1");var i=this.getPanel(t);i.setAttribute("role","tabpanel"),i.setAttribute("aria-labelledby",t.id),i.classList.add(this.jsHiddenClass)}},{key:"unsetAttributes",value:function(e){e.removeAttribute("id"),e.removeAttribute("role"),e.removeAttribute("aria-controls"),e.removeAttribute("aria-selected"),e.removeAttribute("tabindex");var t=this.getPanel(e);t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("tabindex"),t.classList.remove(this.jsHiddenClass)}},{key:"onTabClick",value:function(e){e.target.classList.contains("".concat(this.namespace,"__tab"))||(e.stopPropagation(),e.preventDefault()),e.preventDefault();var t=e.target,n=this.getCurrentTab();this.hideTab(n),this.showTab(t),this.createHistoryEntry(t)}},{key:"createHistoryEntry",value:function(t){if(this.historyEnabled){var n=this.getPanel(t),i=n.id;n.id="",this.changingHash=!0,window.location.hash=e.getHref(t).slice(1),n.id=i}}},{key:"onTabKeydown",value:function(e){switch(e.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),e.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),e.preventDefault()}}},{key:"activateNextTab",value:function(){var e,t=this.getCurrentTab(),n=t.parentNode.nextElementSibling;n&&(e=n.querySelector(".".concat(this.namespace,"__tab"))),e&&(this.hideTab(t),this.showTab(e),e.focus(),this.createHistoryEntry(e))}},{key:"activatePreviousTab",value:function(){var e,t=this.getCurrentTab(),n=t.parentNode.previousElementSibling;n&&(e=n.querySelector(".".concat(this.namespace,"__tab"))),e&&(this.hideTab(t),this.showTab(e),e.focus(),this.createHistoryEntry(e))}},{key:"getPanel",value:function(t){return this.$module.querySelector(e.getHref(t))}},{key:"showPanel",value:function(e){var t=this.getPanel(e);t.classList.remove(this.jsHiddenClass),t.dispatchEvent(this.showEvent)}},{key:"hidePanel",value:function(e){var t=this.getPanel(e);t.classList.add(this.jsHiddenClass),t.dispatchEvent(this.hideEvent)}},{key:"unhighlightTab",value:function(e){e.setAttribute("aria-selected","false"),e.parentNode.classList.remove("".concat(this.namespace,"__list-item--selected")),e.setAttribute("tabindex","-1")}},{key:"highlightTab",value:function(e){e.setAttribute("aria-selected","true"),e.parentNode.classList.add("".concat(this.namespace,"__list-item--selected")),e.setAttribute("tabindex","0")}},{key:"getCurrentTab",value:function(){return this.$module.querySelector(".".concat(this.namespace,"__list-item--selected .").concat(this.namespace,"__tab"))}}])&&g(t.prototype,n),i&&g(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();n(405),document.addEventListener("DOMContentLoaded",(function(){var e,t,n;(new p).init(),e=document.querySelector("h1"),t=document.querySelector(".nhsuk-skip-link"),e&&t&&(t.addEventListener("click",(function(t){t.preventDefault(),e.setAttribute("tabIndex","-1"),e.focus()})),e.addEventListener("blur",(function(t){t.preventDefault(),e.removeAttribute("tabIndex")}))),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).scope;(void 0===e?document:e).querySelectorAll('[data-module="nhsuk-button"]').forEach((function(e){new a(e).init()}))}({scope:n=document}),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).scope;(void 0===e?document:e).querySelectorAll('[data-module="nhsuk-character-count"]').forEach((function(e){new u(e).init()}))}({scope:n}),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).scope,t=(void 0===e?document:e).querySelectorAll(".nhsuk-checkboxes .nhsuk-checkboxes__input"),n=function(e){l(e.target,"nhsuk-checkboxes__conditional--hidden"),e.target.checked&&(e.target.hasAttribute("data-checkbox-exclusive")?d(e.target):b(e.target))};"onpageshow"in window?window.addEventListener("pageshow",(function(){return t.forEach((function(e){return h(e)}))})):window.addEventListener("DOMContentLoaded",(function(){return t.forEach((function(e){return h(e)}))})),t.forEach((function(e){return h(e)})),t.forEach((function(e){e.addEventListener("change",n)}))}({scope:n}),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).scope,t=void 0===e?document:e;if("boolean"!=typeof document.createElement("details").open){var n=t.querySelectorAll("details");n.length&&n.forEach((function(e,n){e.hasAttribute("nhsuk-polyfilled")||function(e,n){e.setAttribute("nhsuk-polyfilled","true"),e.id||e.setAttribute("id","nhsuk-details".concat(n));var i=t.querySelector("#".concat(e.id," .nhsuk-details__text"));i.id||i.setAttribute("id","nhsuk-details__text".concat(n));var o=t.querySelector("#".concat(e.id," .nhsuk-details__summary"));o.setAttribute("role","button"),o.setAttribute("aria-controls",i.id),o.setAttribute("tabIndex","0"),1==(null!==e.getAttribute("open"))?(o.setAttribute("aria-expanded","true"),i.setAttribute("aria-hidden","false")):(o.setAttribute("aria-expanded","false"),i.setAttribute("aria-hidden","true"),i.style.display="none"),o.addEventListener("click",(function(){c(o,"aria-expanded"),c(i,"aria-hidden"),i.style.display="true"===i.getAttribute("aria-hidden")?"none":"",e.hasAttribute("open")?e.removeAttribute("open"):e.setAttribute("open","open")})),o.addEventListener("keydown",(function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),o.click())}))}(e,n)}))}}({scope:n}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.focusOnPageLoad,n=void 0===t||t,i=e.scope,o=(void 0===i?document:i).querySelector(".nhsuk-error-summary");o&&(n&&o.focus(),o.addEventListener("click",v))}({scope:n}),function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).scope,t=(void 0===e?document:e).querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__input"),n=function(){t.forEach((function(e){return l(e,"nhsuk-radios__conditional--hidden")}))};"onpageshow"in window?window.addEventListener("pageshow",n):window.addEventListener("DOMContentLoaded",n),n(),t.forEach((function(e){e.addEventListener("change",n)}))}({scope:n}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.namespace,n=void 0===t?"nhsuk-tabs":t,i=e.responsive,o=void 0===i||i,a=e.historyEnabled,r=void 0===a||a,s=e.scope;(void 0===s?document:s).querySelectorAll('[data-module="'.concat(n,'"]')).forEach((function(e){new k(e,n,o,r).init()}))}({scope:n})}))})()})();