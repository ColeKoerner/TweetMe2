(this["webpackJsonpapc-web"]=this["webpackJsonpapc-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),i=(n(15),n.p+"static/media/logo.6ce24c58.svg"),o=(n(16),n(8)),l=n(3),u=n(2),j=n(10);function d(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="http://localhost:8000/api".concat(t);s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){403===s.status&&("Authentication credentials were not provided."===s.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(s.response,s.status)},s.onerror=function(e){n({message:"The request was an error"},400)},s.send(a)}function b(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),d("GET",n,e)}function f(e,t,n){var c="/tweets/";e&&(c="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),d("GET",c,t)}var O=n(0);function m(e){var t=e.tweet,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,s=e.className?e.className:"btn btn-primary btn-sm",r=n.display?n.display:"Action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},o="like"===n.type?"".concat(a," ").concat(r):r;return Object(O.jsx)("button",{className:s,onClick:function(e){e.preventDefault(),function(e,t,n){d("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)},children:o})}function p(e){var t=e.username;return Object(O.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profile/".concat(t)},children:e.children})}function h(e){var t=e.user,n=e.includeFullName,c=e.hideLink,s=!0===n?"".concat(t.first_name," ").concat(t.last_name," - "):null;return Object(O.jsxs)(a.a.Fragment,{children:[s,!0===c?"@".concat(t.username):Object(O.jsxs)(p,{username:t.username,children:[" @",t.username," "]})]})}function w(e){var t=e.user,n=e.hideLink,c=Object(O.jsx)("span",{className:"mx-2 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return!0===n?c:Object(O.jsxs)(p,{username:t.username,children:[" ",c," "]})}var x=n(9),v=n.n(x);function g(e){return Object(O.jsx)("span",{className:e.className,children:v()(e.children).format("0a")})}function N(e){var t=e.user,n=e.didFollowToggle,c=e.profileLoading,a=t&&t.is_following?"Unfollow":"Follow";a=c?"Loading...":a;return t?Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{user:t,hideLink:!0}),Object(O.jsx)("p",{children:Object(O.jsx)(h,{user:t,includeFullName:!0,hideLink:!0})}),Object(O.jsxs)("p",{children:[Object(O.jsx)(g,{children:t.follower_count})," ",1===t.follower_count?"follower":"followers"]}),Object(O.jsxs)("p",{children:[Object(O.jsx)(g,{children:t.following_count})," following"]}),Object(O.jsx)("p",{children:t.location}),Object(O.jsx)("p",{children:t.bio}),Object(O.jsxs)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!c&&n(a)},children:[a," "]})]}):null}function y(e){var t=e.username,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),o=Object(u.a)(i,2),l=o[0],j=o[1],b=Object(c.useState)(!1),f=Object(u.a)(b,2),m=f[0],p=f[1],h=function(e,t){200===t&&j(e)};Object(c.useEffect)((function(){!1===s&&(!function(e,t){d("GET","/profiles/".concat(e,"/"),t)}(t,h),r(!0))}),[s,r,t]);return!1===s?"Loading...":l?Object(O.jsx)(N,{user:l,didFollowToggle:function(e){!function(e,t,n){var c={action:"".concat(t&&t).toLowerCase()};d("POST","/profiles/".concat(e,"/follow"),n,c)}(t,e,(function(e,t){200===t&&j(e),p(!1)})),p(!0)},profileLoading:m}):null}function k(e){var t=e.tweet;return t.parent?Object(O.jsx)(T,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function T(e){var t=e.tweet,n=e.didRetweet,s=e.hideActions,r=e.isRetweet,i=e.retweeter,o=Object(c.useState)(e.tweet?e.tweet:null),l=Object(u.a)(o,2),d=l[0],b=l[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===r?"".concat(f," p-2 border rounded"):f;var p=window.location.pathname.match(Object(j.a)(/([0-9]+)/,{tweetid:1})),x=p?p.groups.tweetid:-1,v="".concat(t.id)==="".concat(x),g=function(e,t){200===t?b(e):201===t&&n&&n(e)};return Object(O.jsxs)("div",{className:f,children:[!0===r&&Object(O.jsx)("div",{className:"mb-2",children:Object(O.jsxs)("span",{className:"small text-muted",children:["Retweet via ",Object(O.jsx)(h,{user:i})]})}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"",children:Object(O.jsx)(w,{user:t.user})}),Object(O.jsxs)("div",{className:"col-11",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:Object(O.jsx)(h,{includeFullName:!0,user:t.user})}),Object(O.jsx)("p",{children:t.content}),Object(O.jsx)(k,{tweet:t,retweeter:t.user})]}),Object(O.jsxs)("div",{className:"btn btn-group px-0",children:[d&&!0!==s&&Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(m,{tweet:d,didPerformAction:g,action:{type:"like",display:"Likes"}}),Object(O.jsx)(m,{tweet:d,didPerformAction:g,action:{type:"unlike",display:"UnLike"}}),Object(O.jsx)(m,{tweet:d,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})]}),!0===v?null:Object(O.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})]})}function S(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(u.a)(i,2),j=o[0],d=o[1],b=Object(c.useState)(null),m=Object(u.a)(b,2),p=m[0],h=m[1],w=Object(c.useState)(!1),x=Object(u.a)(w,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(l.a)(e.newTweets).concat(s);t.length!==j.length&&d(t)}),[e.newTweets,j,s]),Object(c.useEffect)((function(){if(!1===v){f(e.username,(function(e,t){200===t?(h(e.next),r(e.results),g(!0)):alert("There was an error")}))}}),[s,v,g,e.username]);var N=function(e){var t=Object(l.a)(s);t.unshift(e),r(t);var n=Object(l.a)(j);n.unshift(j),d(n)};return Object(O.jsxs)(a.a.Fragment,{children:[j.map((function(e,t){return Object(O.jsx)(T,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==p&&Object(O.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==p){f(e.username,(function(e,t){if(200===t){h(e.next);var n=Object(l.a)(j).concat(e.results);r(n),d(n)}else alert("There was an error")}),p)}},className:"btn btn-outline-primary",children:"Load Next"})]})}function E(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(u.a)(i,2),j=o[0],d=o[1],f=Object(c.useState)(null),m=Object(u.a)(f,2),p=m[0],h=m[1],w=Object(c.useState)(!1),x=Object(u.a)(w,2),v=x[0],g=x[1];Object(c.useEffect)((function(){var t=Object(l.a)(e.newTweets).concat(s);t.length!==j.length&&d(t)}),[e.newTweets,j,s]),Object(c.useEffect)((function(){if(!1===v){b((function(e,t){200===t&&(h(e.next),r(e.results),g(!0))}))}}),[s,v,g,e.username]);var N=function(e){var t=Object(l.a)(s);t.unshift(e),r(t);var n=Object(l.a)(j);n.unshift(j),d(n)};return Object(O.jsxs)(a.a.Fragment,{children:[j.map((function(e,t){return Object(O.jsx)(T,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==p&&Object(O.jsx)("button",{onClick:function(e){if(e.preventDefault(),null!==p){b((function(e,t){if(200===t){h(e.next);var n=Object(l.a)(j).concat(e.results);r(n),d(n)}}),p)}},className:"btn btn-outline-primary",children:"Load Next"})]})}function L(e){var t=a.a.createRef(),n=e.didTweet,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured at create tweet. Try again."))};return Object(O.jsx)("div",{className:e.className,children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;d("POST","/tweets/create/",c,{content:n}),t.current.value=""},children:[Object(O.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Tweet"})]})})}function R(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(O.jsxs)("div",{className:e.className,children:[!0===r&&Object(O.jsx)(L,{didTweet:function(e){Object(l.a)(a).unshift(e),s(e)},className:"col-12 mb-3"}),Object(O.jsx)(S,Object(o.a)({newTweets:a},e))]})}function A(e){var t=e.tweetId,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)(null),o=Object(u.a)(i,2),l=o[0],j=o[1],b=function(e,t){200===t?j(e):alert("Error while finding tweet")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){d("GET","/tweets/".concat(e,"/"),t)}(t,b),r(!0))}),[s,r,t]),null===l?null:Object(O.jsx)(T,{tweet:l,className:e.className})}var F=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(O.jsxs)("p",{children:["Edit ",Object(O.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(O.jsx)("div",{children:Object(O.jsx)(R,{})}),Object(O.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};document.getElementById("root")&&r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root"));var q=a.a.createElement,P=document.getElementById("apc-web");P&&r.a.render(q(R,P.dataset),P);var D=document.getElementById("apc-web-feed");D&&r.a.render(q((function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(O.jsxs)("div",{className:e.className,children:[!0===r&&Object(O.jsx)(L,{didTweet:function(e){Object(l.a)(a).unshift(e),s(e)},className:"col-12 mb-3"}),Object(O.jsx)(E,Object(o.a)({newTweets:a},e))]})}),D.dataset),D),document.querySelectorAll(".apc-web-detail").forEach((function(e){r.a.render(q(A,e.dataset),e)})),document.querySelectorAll(".apc-web-profile-badge").forEach((function(e){r.a.render(q(y,e.dataset),e)})),C()}},[[18,1,2]]]);
//# sourceMappingURL=main.1acf4cc5.chunk.js.map