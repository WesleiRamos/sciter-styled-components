var n,l,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,n){for(var t in n)e[t]=n[t];return e}function h(e){var n=e.parentNode;n&&n.removeChild(e)}function v(e,t,_){var l,o,r,i={};for(r in t)"key"==r?l=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):_),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return y(e,i,l,o,null)}function y(e,n,t,_,o){var r={type:e,props:n,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(r),r}function p(){return{current:null}}function d(e){return e.children}function _(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function b(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return b(e)}}function m(e){(!e.__d&&(e.__d=!0)&&t.push(e)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g)}function g(){for(var e;g.__r=t.length;)e=t.sort(function(e,n){return e.__v.__b-n.__v.__b}),t=[],e.some(function(e){var n,t,_,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(t=[],(_=a({},l)).__v=l.__v+1,j(r,l,_,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,t,null==o?k(l):o,l.__h),z(t,l),l.__e!=o&&b(l)))})}function w(n,t,_,l,o,r,i,u,s,f){var a,p,h,v,m,g,b,C=l&&l.__k||c,S=C.length;for(_.__k=[],a=0;a<t.length;a++)if(null!=(v=_.__k[a]=null==(v=t[a])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?y(null,v,null,null,v):Array.isArray(v)?y(d,{children:v},null,null,null):v.__b>0?y(v.type,v.props,v.key,null,v.__v):v)){if(v.__=_,v.__b=_.__b+1,null===(h=C[a])||h&&v.key==h.key&&v.type===h.type)C[a]=void 0;else for(p=0;p<S;p++){if((h=C[p])&&v.key==h.key&&v.type===h.type){C[p]=void 0;break}h=null}j(n,v,h=h||e,o,r,i,u,s,f),m=v.__e,(p=v.ref)&&h.ref!=p&&(b||(b=[]),h.ref&&b.push(h.ref,null,v),b.push(p,v.__c||m,v)),null!=m?(null==g&&(g=m),"function"==typeof v.type&&v.__k===h.__k?v.__d=s=x(v,s,n):s=P(n,v,h,C,m,s),"function"==typeof _.type&&(_.__d=s)):s&&h.__e==s&&s.parentNode!=n&&(s=k(h))}for(_.__e=g,a=S;a--;)null!=C[a]&&("function"==typeof _.type&&null!=C[a].__e&&C[a].__e==_.__d&&(_.__d=k(l,a+1)),N(C[a],C[a]));if(b)for(a=0;a<b.length;a++)M(b[a],b[++a],b[++a])}function x(e,n,t){for(var _,l=e.__k,o=0;l&&o<l.length;o++)(_=l[o])&&(_.__=e,n="function"==typeof _.type?x(_,n,t):P(t,_,_,l,_.__e,n));return n}function A(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){A(e,n)}):n.push(e)),n}function P(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function C(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||H(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||H(e,o,n[o],t[o],_)}function $(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||s.test(n)?t:t+"px"}function H(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||$(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||$(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?T:I,o):e.removeEventListener(n,o?T:I,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function I(e){this.l[e.type+!1](l.event?l.event(e):e)}function T(e){this.l[e.type+!0](l.event?l.event(e):e)}function j(e,n,t,o,r,i,u,s,c){var f,p,h,v,y,m,k,g,b,C,x,S=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,s=n.__e=t.__e,n.__h=null,i=[s]),(f=l.__b)&&f(n);try{e:if("function"==typeof S){if(g=n.props,b=(f=S.contextType)&&o[f.__c],C=f?b?b.props.value:f.__:o,t.__c?k=(p=n.__c=t.__c).__=p.__E:("prototype"in S&&S.prototype.render?n.__c=p=new S(g,C):(n.__c=p=new _(g,C),p.constructor=S,p.render=O),b&&b.sub(p),p.props=g,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=a({},p.__s)),a(p.__s,S.getDerivedStateFromProps(g,p.__s))),v=p.props,y=p.state,h)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,C)||n.__v===t.__v){p.props=g,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(e){e&&(e.__=n)}),p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(v,y,m)})}p.context=C,p.props=g,p.state=p.__s,(f=l.__r)&&f(n),p.__d=!1,p.__v=n,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=a(a({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),x=null!=f&&f.type===d&&null==f.key?f.props.children:f,w(e,Array.isArray(x)?x:[x],n,t,o,r,i,u,s,c),p.base=n.__e,n.__h=null,p.__h.length&&u.push(p),k&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=L(t.__e,n,t,o,r,i,u,c);(f=l.diffed)&&f(n)}catch(e){n.__v=null,(c||null!=i)&&(n.__e=s,n.__h=!!c,i[i.indexOf(s)]=null),l.__e(e,n,t)}}function z(e,n){l.__c&&l.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){l.__e(e,n.__v)}})}function L(t,_,l,o,r,i,u,s){var c,f,a,p=l.props,d=_.props,v=_.type,y=0;if("svg"===v&&(r=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,i[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=r?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),i=null,s=!1}if(null===v)p===d||s&&t.data===d||(t.data=d);else{if(i=i&&n.call(t.childNodes),f=(p=l.props||e).dangerouslySetInnerHTML,a=d.dangerouslySetInnerHTML,!s){if(null!=i)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===t.innerHTML)||(t.innerHTML=a&&a.__html||""))}if(C(t,d,p,r,s),a)_.__k=[];else if(y=_.props.children,w(t,Array.isArray(y)?y:[y],_,l,o,r&&"foreignObject"!==v,i,u,i?i[0]:l.__k&&k(l,0),s),null!=i)for(y=i.length;y--;)null!=i[y]&&h(i[y]);s||("value"in d&&void 0!==(y=d.value)&&(y!==p.value||y!==t.value||"progress"===v&&!y)&&H(t,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&H(t,"checked",y,p.checked,!1))}return t}function M(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){l.__e(e,t)}}function N(e,n,t){var _,o;if(l.unmount&&l.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||M(_,null,n)),null!=(_=e.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(e){l.__e(e,n)}_.base=_.__P=null}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&N(_[o],n,"function"!=typeof e.type);t||null==e.__e||h(e.__e),e.__e=e.__d=void 0}function O(e,n,t){return this.constructor(e,t)}function S(t,_,o){var r,i,u;l.__&&l.__(t,_),i=(r="function"==typeof o)?null:o&&o.__k||_.__k,u=[],j(_,t=(!r&&o||_).__k=v(d,null,[t]),i||e,e,void 0!==_.ownerSVGElement,!r&&o?[o]:i?null:_.firstChild?n.call(_.childNodes):null,u,!r&&o?o:i?i.__e:_.firstChild,r),z(u,t)}function q(e,n){S(e,n,q)}function B(e,t,_){var l,o,r,i=a({},e.props);for(r in t)"key"==r?l=t[r]:"ref"==r?o=t[r]:i[r]=t[r];return arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):_),y(e.type,i,l||e.key,o||e.ref,null)}function D(e,n){var t={__c:n="__cC"+f++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(m)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}n=c.slice,l={__e:function(e,n){for(var t,_,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e}},u=0,i=function(e){return null!=e&&void 0===e.constructor},_.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},t),this.props)),e&&a(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0,JSX=v;export{S as render,q as hydrate,v as createElement,v as h,d as Fragment,p as createRef,i as isValidElement,_ as Component,B as cloneElement,D as createContext,A as toChildArray,l as options};