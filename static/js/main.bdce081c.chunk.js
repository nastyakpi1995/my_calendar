(window.webpackJsonpmy_calendar=window.webpackJsonpmy_calendar||[]).push([[0],{52:function(e,t,a){},65:function(e,t,a){e.exports=a(76)},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),i=(a(70),a(17)),o=a(13),s=a(30),d=a(18),h=a(35),u=a(36),m=a(41),p=(a(52),a(121)),v=a(123),g=a(125),f=a(120),E=a(115),O=a(116),b=a(114),y=a(128),w=a(122),C=a(126),_=a(118),k=a(127),j=a(119),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={mapOnInfo:{fullWidth:!0,setFullWidth:!0,color:"white",changeBacground:"black",title:""}},a.handleSubmit=function(){var e=a.props.handleChangeEvent,t=a.state.mapOnInfo;console.log(t),e(t)},a.handlecolorChange=function(e){var t=e.target.value;a.setState({mapOnInfo:{fullWidth:!0,setFullWidth:!0,color:"black",title:"",changeBacground:t}})},a.handleChange=function(e){var t=e.target,n=t.value,l=t.name;a.setState({mapOnInfo:Object(o.a)({fullWidth:!0,setFullWidth:!0,color:"black",changeBacground:"white"},l,n)})},a.handleFullWidthChange=function(e){a.setState({mapOnInfo:{fullWidth:!0,color:"black",changeBacground:"white",title:"",setFullWidth:e.target.checked}})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleClose,a=e.setOpen,n=e.handleChangeEvent,r=e.fullWidth,c=e.color,i=e.handleDelete;return l.a.createElement("div",null,l.a.createElement(g.a,{handleChangeEvent:n,open:a,onClose:t,fullWidth:r,color:c,"aria-labelledby":"max-width-dialog-title"},l.a.createElement(b.a,{id:"form-dialog-title"},"New Event"),l.a.createElement(E.a,null,l.a.createElement(O.a,null,"Edit event"),l.a.createElement(v.a,{autoFocus:!0,margin:"dense",id:"name",label:"Eddit name",onChange:this.handleChange,value:this.state.title,name:"title",type:"text",fullWidth:!0}),l.a.createElement("form",{onCange:this.handleSubmit,noValidate:!0},l.a.createElement(_.a,null,l.a.createElement(k.a,{htmlFor:"max-width"},"color"),l.a.createElement(w.a,{value:c,onChange:this.handlecolorChange,inputProps:{name:"max-width",id:"max-width"}},l.a.createElement(y.a,{value:!1},"false"),l.a.createElement(y.a,{value:"blue"},"blue"),l.a.createElement(y.a,{value:"red"},"red"),l.a.createElement(y.a,{value:"white"},"white"),l.a.createElement(y.a,{value:"yellow"},"yellow"),l.a.createElement(y.a,{value:"green"},"green"))),l.a.createElement(j.a,{control:l.a.createElement(C.a,{checked:this.fullWidth,onChange:this.handleFullWidthChange,value:"title"}),label:"Full width"}))),l.a.createElement(f.a,null,l.a.createElement(p.a,{onClick:function(){return i()},color:"primary"},"Delete"),l.a.createElement(p.a,{onClick:this.handleSubmit,color:"primary"},"Subscribe"))))}}]),t}(l.a.Component),D=a(32),W=a(54),N=a(55),P=a(56),I=a(57),F=(a(75),function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__search__input"},l.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"header__search"}),l.a.createElement("input",{name:"search",type:"text",className:"n__header__input",placeholder:"Search transactions, invoices or help"})),l.a.createElement("img",{alt:"planet",className:"header__planet",src:"img/SupportIocn.svg"}),l.a.createElement("img",{alt:"path",className:"header__planet",src:"img/Path_9.svg"}),l.a.createElement("img",{alt:"planet",className:"header__planet",src:"img/Path_3.svg"}),l.a.createElement("img",{alt:"planet",className:"header__planet",src:"img/Divider.svg"}),l.a.createElement("p",{className:"header__name"},"John Doe"),l.a.createElement("img",{alt:"planet",className:"header__planet",src:"img/Path_26.svg"}),l.a.createElement("img",{alt:"planet",className:"header__avatar",src:"img/Avatar@2x.png"})),l.a.createElement("div",{className:"main"}))});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={setOpen:!1,open:!1,calendarEvents:[],id:"",color:""},a.handleChangeEvent=function(e){console.log(e),a.setState(function(t){var a=t.calendarEvents.map(function(a){return a.id===t.id?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a,{title:e.title}):a});return{color:e.changeBacground,setOpen:!1,calendarEvents:a}})},a.handleEvent=function(e){var t=e.event,n=a.state.calendarEvents.map(function(t){return t.id===+e.event.id?t.id:""}).find(function(t){return t===+e.event.id});t.allDay&&(a.setState({setOpen:!0,id:n}),e.jsEvent.preventDefault())},a.handleDelete=function(){a.setState(function(e){return{setOpen:!1,calendarEvents:e.calendarEvents.filter(function(t){return t.id!==e.id})}})},a.handleDateClick=function(e){a.setState(function(t){return{calendarEvents:[].concat(Object(i.a)(t.calendarEvents),[{timeZone:"local",title:t.title,start:e.date,allDay:e.allDay,end:new Date,id:Date.now(),bacground:e.dayEl.style.backgroundColor=t.color}])}})},a.handleClickOpen=function(){a.setState({setOpen:!0})},a.handleClose=function(){a.setState({setOpen:!1})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("calendarEvents")&&this.setState({calendarEvents:JSON.parse(localStorage.getItem("calendarEvents"))})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("calendarEvents",JSON.stringify(this.state.calendarEvents))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(F,null),l.a.createElement(P.a,{defaultView:"dayGridMonth",plugins:[D.d,I.a,W.a,N.a],events:this.state.calendarEvents,dateClick:this.handleDateClick,eventClick:this.handleEvent,header:{left:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"}}),l.a.createElement(S,{handleChangeEvent:this.handleChangeEvent,handleClose:this.handleClose,id:this.state.calendarEvents.map(function(e){return e.id}),setOpen:this.state.setOpen,handleDelete:this.handleDelete}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[65,1,2]]]);
//# sourceMappingURL=main.bdce081c.chunk.js.map