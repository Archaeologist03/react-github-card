(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),s=a(10),l=a(6),o=a(9),i=a(1),c=a(0),u=a.n(c),m=a(7),p=a.n(m),f=(a(16),a(2)),h=a.n(f),d=a(8);function g(){return(g=Object(d.a)(h.a.mark(function e(){var t,a,n,r,s=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"archaeologist03",a="https://api.github.com/users/".concat(t),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log(r.message),e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var v=function(){return g.apply(this,arguments)};var _=function(e){return u.a.createElement("div",{className:"submitName-container"},u.a.createElement("input",{autoFocus:!0,className:"submitName-container__input",placeholder:"Username + Enter",onChange:e.InputChange,onKeyPress:e.InputEnter}))};var b=function(e){return u.a.createElement("div",{className:"displayInfo-container__avatar-container"},u.a.createElement("img",{alt:"github profile pic",src:e.mainState.avatar_url}),u.a.createElement("h3",{className:"displayInfo-container__avatar-container__name"},e.mainState.name),u.a.createElement("h3",{className:"displayInfo-container__avatar-container__bio"},e.mainState.bio))};var E=function(e){return u.a.createElement("div",{className:"displayInfo-container__stats-container"},u.a.createElement("div",{className:"displayInfo-container__stats-container__followers-container"},u.a.createElement("p",{className:"statsNumbers"},e.mainState.followers),u.a.createElement("p",{className:"statsText"},"fallowers")),u.a.createElement("div",{className:"displayInfo-container__stats-container__repos-container"},u.a.createElement("p",{className:"statsNumbers"},e.mainState.public_repos),u.a.createElement("p",{className:"statsText"},"repos")),u.a.createElement("div",{className:"displayInfo-container__stats-container__following-container"},u.a.createElement("p",{className:"statsNumbers"},e.mainState.followers),u.a.createElement("p",{className:"statsText"},"following")))};var w=function(e){return u.a.createElement("div",{className:"displayInfo-container"},e.mainState.message?u.a.createElement("p",{style:{textAlign:"center"}},"User ",e.mainState.message):u.a.createElement(u.a.Fragment,null,u.a.createElement(b,{mainState:e.mainState}),u.a.createElement(E,{mainState:e.mainState})))},y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={login:"",avatar_url:"",bio:"",followers:null,following:null,public_repos:null,url:"",name:"",message:"",inputText:"archaeologist03",enterPressed:!1},a.handleInputChange=a.handleInputChange.bind(Object(i.a)(Object(i.a)(a))),a.handleEnterKey=a.handleEnterKey.bind(Object(i.a)(Object(i.a)(a))),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;v(this.state.inputText).then(function(t){var a=t.login,n=t.avatar_url,r=t.bio,s=t.followers,l=t.following,o=t.public_repos,i=t.url,c=t.name;e.setState({login:a,avatar_url:n,bio:r,followers:s,following:l,public_repos:o,url:i,name:c})}),console.log(this.state,"didmount")}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.url!==t.url}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({inputText:t})}},{key:"handleEnterKey",value:function(e){var t=this;"Enter"===e.key&&this.setState({login:this.state.inputText},function(){t.state.login&&v(t.state.login).then(function(e){var a=e.login,n=e.avatar_url,r=e.bio,s=e.followers,l=e.following,o=e.public_repos,i=e.url,c=e.name,u=e.message;console.log(e),t.setState({login:a,avatar_url:n,bio:r,followers:s,following:l,public_repos:o,url:i,name:c,message:u})})})}},{key:"render",value:function(){return console.log(this.state,"render"),u.a.createElement("div",{className:"container"},u.a.createElement(_,{InputChange:this.handleInputChange,InputEnter:this.handleEnterKey}),u.a.createElement(w,{mainState:this.state}))}}]),t}(u.a.Component);p.a.render(u.a.createElement(y,null),document.querySelector("#root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.c2d4c983.chunk.js.map