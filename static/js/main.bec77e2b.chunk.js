(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e){e.exports=[{id:"moshfeu@gmail.com",name:"Mosh Feuchtwanger",avatar:"https://avatars3.githubusercontent.com/u/3723951?s=460&v=4",title:"Frontend at @wix",description:"Hi, I'm Mosh and I will love to help! \ud83e\udd2a",country:"Israel",tags:["frontend","javascript","reactjs","html","css"],channels:[{type:"email",id:"moshfeu@gmail.com"},{type:"slack",id:"UFL4N8ETE"},{type:"linkedin",id:"moshfeu"}]},{id:"crysfel@bleext.com",name:"Crysfel Villa",avatar:"https://avatars0.githubusercontent.com/u/219207?s=88&v=4",title:"Sr. Engineer at @invisionapp",description:"Hi, I'm Crysfel! Let me know how can I help \ud83d\udc68\u200d\ud83d\udcbb",country:"USA",tags:["frontend","javascript","react","native","css"],channels:[{type:"email",id:"crysfel@bleext.com"},{type:"slack",id:"UCQ9GL8UB"}]},{id:"me@ahmadsantarissy.com",name:"Ahmad Santarissy",avatar:"https://avatars0.githubusercontent.com/u/522352?s=460&v=4",title:"co-CEO @RelativelyFund",description:"Passionate coder and tech advisor",country:"Jordan",tags:["javascript","react","web","php"],channels:[{type:"email",id:"me@ahmadsantarissy.com"},{type:"facebook",id:"asantarissy"},{type:"linkedin",id:"asantarissy"}]},{id:"asjas@outlook.com",name:"A-J Roos",avatar:"https://avatars0.githubusercontent.com/u/3828967?s=400&v=4",title:"JavaScript Web Developer",description:"I'm a JavaScript Web Developer. Ask me any questions that you have.",country:"South Africa",tags:["javascript","reactjs","gatsby","nodejs","express"],channels:[{type:"email",id:"asjas@outlook.com"},{type:"twitter",id:"_asjas"},{type:"slack",id:"UCQHCSC3F"}]},{id:"dhanjalbhavdeep@gmail.com",name:"Bhavdeep Dhanjal",avatar:"https://avatars3.githubusercontent.com/u/19860968?s=400&v=4",title:"Software Engineer",description:"Hi! I am BD. Would love to help in any way \ud83d\ude42",country:"India",tags:["javascript","react","node","fp"],channels:[{type:"email",id:"dhanjalbhavdeep@gmail.com"},{type:"linkedin",id:"bhavdeep-dhanjal"},{type:"twitter",id:"bhavdeepdhanjal"}]}]},170:function(e,t,a){e.exports=a(318)},175:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},312:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(38),c=a.n(i),o=(a(175),a(27)),s=a(28),l=a(30),u=a(29),m=a(31),h=(a(178),a(145)),d=a(83),p=a(327),v=a(328),f=a(144),g=a(4),y=a.n(g),b=(a(180),a(326)),w=a(146),E=a.n(w),k=a(147),j=a.n(k),S=a(82),C=a.n(S),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).resetComponent=function(){a.setState({isLoading:!1,results:[],value:""}),a.props.onReset()},a.handleResultSelect=function(e,t){var n=t.result;a.setState({value:n.title}),a.props.handleResultSelect(n)},a.handleSearchChange=function(e,t){var n=t.value,r=a.props.source;a.setState({isLoading:!0,value:n}),setTimeout(function(){if(a.state.value.length<1)return a.resetComponent();var e=new RegExp(j()(a.state.value),"i");a.setState({isLoading:!1,results:C()(r,function(t){return e.test(t.title)})})},300)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.resetComponent()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.value,n=e.results;return r.a.createElement("div",{className:"search-wrapper"},r.a.createElement(b.a,{input:"search",loading:t,onResultSelect:this.handleResultSelect,onSearchChange:E()(this.handleSearchChange,500,{leading:!0}),results:n,value:a,placeholder:this.props.placeholder,className:"search-input"}))}}]),t}(n.Component),O=(a(312),a(143)),L=a(325),A={slack:{icon:"slack",url:"https://coding-coach.slack.com/team/{id}"},email:{icon:"at",url:"mailto:{id}"},linkedin:{icon:"linkedin",url:"https://www.linkedin.com/in/{id}"},facebook:{icon:"facebook",url:"https://www.facebook.com/{id}"},twitter:{icon:"twitter",url:"https://twitter.com/{id}"}};var M=a(158),I=a.n(M);function T(){return JSON.parse(localStorage.getItem("favs")||"[]")}var R=function(e,t,a){return e.map(function(e,n){return r.a.createElement(L.a,{className:"mentor-card",key:n},r.a.createElement("header",null,r.a.createElement(O.a,{as:"button",corner:"right",onClick:a.bind(null,e)},r.a.createElement(f.a,{name:"heart",color:t.indexOf(e.id)>-1?"red":"black"})),r.a.createElement("img",{src:e.avatar,alt:"".concat(e.name,"'s avatar")}),r.a.createElement("div",{className:"details"},r.a.createElement(L.a.Header,null,e.name),r.a.createElement(L.a.Meta,null,e.title),e.tags.map(function(e,t){return r.a.createElement(O.a,{className:"mentor-tag",key:t},e)}))),r.a.createElement("div",{className:"details"},r.a.createElement(L.a.Description,null,r.a.createElement(f.a,{className:"mentor-quote",name:"quote left"}),e.description)),r.a.createElement(p.a.Group,{attached:"bottom"},e.channels.map(function(e){var t=function(e){var t=e.type,a=e.id,n=A[t];return{icon:n.icon,url:n.url.replace("{id}",a)}}(e),a=t.icon,n=t.url;return r.a.createElement("a",{className:"ui black basic button channel-link",key:e.type,href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{name:a}),r.a.createElement("span",null,e.type))})))})},x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={page:1,favs:T()},a.loadMore=function(){a.setState({page:a.state.page+1})},a.onToggleFav=function(e){var t=function(e){var t=T(),a=t.indexOf(e.id);return a>-1?t.splice(a,1):t.push(e.id),localStorage.setItem("favs",JSON.stringify(t)),t}(e);a.setState({favs:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.mentors!==this.props.mentors&&this.setState({page:1})}},{key:"render",value:function(){var e=this.props,t=e.mentors,a=e.className,n=this.state,i=n.page,c=n.favs,o=t.slice(0,10*i);return r.a.createElement("div",{className:y()(["mentors-wrapper",a])},r.a.createElement(L.a.Group,{centered:!0,className:"mentors-cards"},r.a.createElement(I.a,{className:"ui centered cards mentors-cards",loadMore:this.loadMore,hasMore:o.length<t.length},R(o,c,this.onToggleFav))))}}]),t}(n.Component),F=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width||628,height:e.height||348,viewBox:"0 0 628 348"},r.a.createElement("g",{fill:e.color||"#FFF",fillRule:"evenodd"},r.a.createElement("polygon",{points:"407 46.595 534.639 174 407 301.405 453.681 348 628 174 453.681 0"}),r.a.createElement("path",{d:"M388,301.404983 L260.309746,174 L388,46.5950165 L341.243142,0 L213.395634,127.404983 L166.796029,174 L137.337112,203.35695 C125.387266,215.421113 107.308026,219.09616 91.5713583,212.659957 C75.8346911,206.223754 65.5586778,190.951578 65.5586778,174 C65.5586778,157.048422 75.8346911,141.776246 91.5713583,135.340043 C107.308026,128.90384 125.387266,132.578887 137.337112,144.64305 L151.909317,159.164815 L198.666175,112.569799 L184.09397,98.0480336 C153.262621,67.3014871 106.879638,58.0944242 66.5791953,74.7212474 C26.2787524,91.3480705 0,130.533311 0,174 C0,217.466689 26.2787524,256.651929 66.5791953,273.278753 C106.879638,289.905576 153.262621,280.698513 184.09397,249.951966 L213.552888,220.595017 L341.400396,348 L388,301.404983 Z"})))},U=a(159),z=a.n(U),D=d.tags,J=d.countries,Y=function(e){return{title:e}},W=D.map(Y),_=J.map(Y),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mentors:z()(h)},a.handleTagSelect=function(e){a.setState({tag:e.title})},a.handleCountrySelect=function(e){a.setState({country:e.title})},a.filterMentors=function(e){var t=a.state,n=t.tag,r=t.country;return(!n||e.tags.includes(n))&&(!r||e.country===r)},a.resetTag=function(){a.setState({tag:""})},a.resetCountry=function(){a.setState({country:""})},a.toggleFields=function(){a.setState({fieldsIsActive:!a.state.fieldsIsActive})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.mentors,a=e.fieldsIsActive,n=t.filter(this.filterMentors);return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"main-header"},r.a.createElement("a",{className:"logo",href:"/"},r.a.createElement(F,{width:110,height:50,color:"#68d5b1"}),r.a.createElement("span",null,"CODING COACH ALPHA")),r.a.createElement("div",{className:"social"},r.a.createElement(p.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"github",color:"black",href:"https://github.com/Coding-Coach/find-a-mentor",target:"_blank"}),r.a.createElement(p.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"twitter",color:"twitter",href:"https://twitter.com/codingcoach_io",target:"_blank"}),r.a.createElement(p.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"facebook",color:"facebook",href:"https://www.facebook.com/codingcoachio/",target:"_blank"}),r.a.createElement(p.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"slack",color:"purple",href:"https://coding-coach.slack.com/join/shared_invite/enQtNTE2NDY4NTczNzE0LTMyOTAyZTFiYjE4OTUzYjgwYzk5MzlmYjgwNjUyNDZlZGY3NGVhYmU1NjdmZDQ3MmQ3YjRhYjJkMjM4OTYwNDA",target:"_blank"}))),r.a.createElement("div",{className:"filters-outer"},r.a.createElement("div",{className:"filters"},r.a.createElement(v.a,{as:"h1"},r.a.createElement("div",null,"Find a mentor",r.a.createElement(p.a,{size:"huge",floated:"right",className:"tertiary mobile",icon:!0,onClick:this.toggleFields},r.a.createElement(f.a,{name:"filter"}))),r.a.createElement(v.a.Subheader,null,t.length," mentors available")),r.a.createElement("div",{className:"fields"},r.a.createElement(N,{placeholder:"Language or Technology",source:W,handleResultSelect:this.handleTagSelect,onReset:this.resetTag}),r.a.createElement(N,{placeholder:"Country",source:_,handleResultSelect:this.handleCountrySelect,onReset:this.resetCountry})))),r.a.createElement(x,{className:y()({active:a}),mentors:n}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(329),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={width:0},a.handleOnUpdate=function(e,t){var n=t.width;return a.setState({width:n})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.width<=B.a.onlyMobile.maxWidth;return r.a.createElement(B.a,{className:"device-".concat(e?"mobile":"desktop"),fireOnMount:!0,onUpdate:this.handleOnUpdate},this.props.children)}}]),t}(n.Component);c.a.render(r.a.createElement(G,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e){e.exports={tags:["frontend","javascript","reactjs","html","css","react","native","web","php","gatsby","nodejs","express","node","fp"],countries:["Israel","USA","Jordan","South Africa","India"]}}},[[170,2,1]]]);
//# sourceMappingURL=main.bec77e2b.chunk.js.map