(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){},282:function(e,t,a){e.exports=a(490)},287:function(e,t,a){},355:function(e,t){},490:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),i=a.n(c),o=(a(287),a(21)),l=a(22),s=a(24),u=a(23),h=a(25),p=a(494),m=a(493),d=a(33),f=a(491),b=a(20),v=a(87),E=a.n(v),w=a(88),k=a.n(w),g=a(91),O=a.n(g),j=a(68),A=a.n(j),y=a(89),N=a.n(y),U=a(183),x=a.n(U);var S=Object(b.withStyles)({root:{flexGrow:1},grow:{flexGrow:1,textAlign:"left"},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(N.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(x.a,null)),r.a.createElement(O.a,{variant:"h6",color:"inherit",className:t.grow},"Authentication App"),r.a.createElement(A.a,{component:f.a,to:"/ReactAuthenticationApp/",color:"inherit"},"Home"),r.a.createElement(A.a,{component:f.a,to:"/ReactAuthenticationApp/Members",color:"inherit"},"Member Area"))))}),C=a(12),R=a.n(C),M=a(34),D=a(127),W=a(54),B=a.n(W),T=a(55),F=(a(122),a(123),Object(d.withAuth)(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:null},a.checkAuthentication=Object(M.a)(R.a.mark(function e(){var t;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.auth.isAuthenticated();case 2:(t=e.sent)!==a.state.authenticated&&a.setState({authenticated:t});case 4:case"end":return e.stop()}},e,this)})),a.login=Object(M.a)(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.login("/ReactAuthenticationApp/");case 1:case"end":return e.stop()}},e,this)})),a.logout=Object(M.a)(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.logout("/ReactAuthenticationApp/");case 1:case"end":return e.stop()}},e,this)})),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(M.a)(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(M.a)(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(null===this.state.authenticated)return null;var e=this.state.authenticated?r.a.createElement("div",null,r.a.createElement("p",null,"You have entered the app, ",r.a.createElement(f.a,{to:"/members"},"click here")," "),r.a.createElement(D.a,{onClick:this.logout,variant:"contained",color:"primary",className:J.button},"Logout")):r.a.createElement("div",null,r.a.createElement("p",null,"For demo purposes, you can use the following login credentials: ",r.a.createElement("br",null)," Username: John@doe.com ",r.a.createElement("br",null)," Password: Admin1234"),r.a.createElement(D.a,{onClick:this.login,variant:"contained",color:"primary",className:J.button},"Login"));return r.a.createElement("div",{className:"Full"},r.a.createElement(T.b,{fluid:!0},r.a.createElement(T.a,{fluid:!0},r.a.createElement(B.a,{className:"Card"},r.a.createElement("h1",{className:"display-4"},"Welcome to the authentication app!"),r.a.createElement("p",{className:"lead"},"This application was made with React, Okta for user authentication, Matieral Ui & Bootstrap"),r.a.createElement("p",null,"This app also utilizes tokens in local storage to display details about the user"),e))))}}]),t}(n.Component))),J=function(e){return{card:{minWidth:275}}},L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentUserName:"",currentUserEmail:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("okta-token-storage"));this.setState({currentUserName:e.idToken.claims.name,currentUserEmail:e.idToken.claims.email})}},{key:"render",value:function(){var e=this.state,t=e.currentUserEmail,a=e.currentUserName;return r.a.createElement("div",{className:"Full"},r.a.createElement(T.b,{fluid:!0},r.a.createElement(T.a,{fluid:!0},r.a.createElement(B.a,{className:"Card"},r.a.createElement("h1",null,"Welcome, ",a),r.a.createElement("p",null,"Your email is: ",t)))))}}]),t}(n.Component),G=a(492),I=a(185),q=a.n(I),Y=(a(486),a(488),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=i.a.findDOMNode(this);this.widget=new q.a({baseUrl:this.props.baseUrl,logo:"logotodo.png"}),this.widget.renderEl({el:e},this.props.onSuccess,this.props.onError)}},{key:"componentWillUnmount",value:function(){this.widget.remove()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Full"})}}]),t}(n.Component)),_=Object(d.withAuth)(function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSuccess=function(e){if("SUCCESS"===e.status)return a.props.auth.redirect({sessionToken:e.session.token})},a.onError=function(e){console.log("error logging in",e)},a.state={authenticated:null},a.checkAuthentication(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"checkAuthentication",value:function(){var e=Object(M.a)(R.a.mark(function e(){var t;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.auth.isAuthenticated();case 2:(t=e.sent)!==this.state.authenticated&&this.setState({authenticated:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return null===this.state.authenticated?null:this.state.authenticated?r.a.createElement(G.a,{to:{pathname:"/"}}):r.a.createElement(Y,{baseUrl:this.props.baseUrl,onSuccess:this.onSuccess,onError:this.onError})}}]),t}(n.Component));function z(e){e.history.push("/login")}var H=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.Security,{issuer:"https://dev-645483.oktapreview.com/oauth2/default",client_id:"0oaieqxwnjM40bGLK0h7",redirect_uri:window.location.origin+"/implicit/callback",onAuthRequired:z},r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(m.a,{path:"/ReactAuthenticationApp/",exact:!0,component:F}),r.a.createElement(d.SecureRoute,{path:"ReactAuthenticationApp/Members",exact:!0,component:L}),r.a.createElement(m.a,{path:"ReactAuthenticationApp/login",render:function(){return r.a.createElement(_,{baseUrl:"https://dev-645483.oktapreview.com"})}}),r.a.createElement(m.a,{path:"ReactAuthenticationApp/implicit/callback",component:d.ImplicitCallback}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[282,2,1]]]);
//# sourceMappingURL=main.22ff3afd.chunk.js.map