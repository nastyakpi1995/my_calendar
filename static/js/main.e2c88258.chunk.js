(window.webpackJsonpmy_calendar=window.webpackJsonpmy_calendar||[]).push([[0],{102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),i=(t(94),t(25)),s=t(12),o=t(19),m=t(17),h=t(22),d=t(23),u=t(27),_=(t(67),t(106)),v=t(108),p=t(147),g=t(144),E=t(141),f=t(143),b=t(61),y=t(69),O=t(148),N=t(149);t(95);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach(function(a){Object(s.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var D=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",eventDate:"",eventTime:"",notes:""},t.handleDateChange=function(e){t.setState(function(a){return j({},a,{eventDate:e})})},t.handleDateChange__time=function(e){t.setState(function(a){return j({},a,{eventTime:e})})},t.handleSubmit=function(){var e=t.props.handleChangeEvent,a=t.state.mapOnInfo;console.log(a),e(t.state),t.setState({eventDate:"",eventTime:"",notes:"",title:""})},t.handleChange=function(e){var a=e.target.value;t.setState(function(e){return j({},e,{notes:a})})},t.handleChange__title=function(e){var a=e.target.value;t.setState(function(e){return j({},e,{title:a})})},t.handleFullWidthChange=function(e){t.setState({mapOnInfo:{setFullWidth:e.target.checked}})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.handleClose,t=e.setOpen,n=e.handleChangeEvent,c=e.fullWidth,l=e.color,i=e.handleDelete;return r.a.createElement("div",null,r.a.createElement(p.a,{handleChangeEvent:n,open:t,onClose:a,fullWidth:c,color:l,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(E.a,null,r.a.createElement("button",{className:"dialog__button",type:"button",onClick:a},"x"),r.a.createElement(v.a,{autoFocus:!0,margin:"dense",id:"name",label:"event name",onChange:this.handleChange__title,value:this.state.title,name:"title",type:"text",fullWidth:!0}),r.a.createElement(y.b,{utils:b.a},r.a.createElement(f.a,{container:!0,justify:"space-around"},r.a.createElement(O.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",name:"eventDate",id:"date-picker-inline",label:"event date",value:this.state.eventDate,onChange:this.state.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(y.b,{utils:b.a},r.a.createElement(f.a,{container:!0,justify:"space-around"},r.a.createElement(N.a,{margin:"normal",id:"time-picker",label:"event time",name:"eventTime",value:this.state.eventTime,onChange:this.handleDateChange__time,KeyboardButtonProps:{"aria-label":"event time"}}))),r.a.createElement(v.a,{autoFocus:!0,margin:"dense",id:"name",label:"notes",onChange:this.handleChange,value:this.state.notes,name:"notes",type:"text",fullWidth:!0})),r.a.createElement(g.a,null,r.a.createElement(_.a,{onClick:function(){return i()},color:"primary",classname:"button__Cansel"},"Cancel"),r.a.createElement("button",{onClick:this.handleSubmit,className:"button__Save"},"Save"))))}}]),a}(r.a.Component),w=t(44),S=t(72),k=t(73),P=t(74),x=t(75),W=t(76),I=(t(102),function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__search__title"},"impekable"),r.a.createElement("div",{className:"header__search__input"},r.a.createElement("div",{className:"header__serch__container"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"header__search"}),r.a.createElement("input",{name:"search",type:"text",className:"n__header__input",placeholder:"Search transactions, invoices or help"}))),r.a.createElement("img",{alt:"planet",className:"header__planet hide",src:"img/SupportIocn.svg"}),r.a.createElement("img",{alt:"planet",className:"header__avatar hide",src:"img/Avatar@2x.png"}),r.a.createElement("img",{alt:"path",className:"header__planet hide",src:"img/Path_9.svg"}),r.a.createElement("img",{alt:"planet",className:"header__planet hide",src:"img/Path_3.svg"}),r.a.createElement("img",{alt:"planet",className:"header__planet hide",src:"img/Divider.svg"}),r.a.createElement("p",{className:"header__name"},"John Doe"),r.a.createElement("img",{alt:"planet",className:"header__planet",src:"img/Path_26.svg"}),r.a.createElement("img",{alt:"planet",className:"header__avatar",src:"img/Avatar@2x.png"})),r.a.createElement("div",{className:"main"}))}),T=(t(103),function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Home"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Dashboard"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Inbox"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Products"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Invoices"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Customers"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Chat Room"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Calendar"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Help Center"),r.a.createElement("div",{className:"main__search__input"},r.a.createElement("img",{src:"img/icon_search.svg",alt:"search",className:"main__search"}),"Settings"))});function A(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={setOpen:!1,open:!1,calendarEvents:[],id:""},t.handleChangeEvent=function(e){console.log(e),t.setState(function(a){return{setOpen:!1,calendarEvents:a.calendarEvents.map(function(t){return t.id===a.id?function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?A(t,!0).forEach(function(a){Object(s.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},t,{title:e.title,end:e.eventTime,notes:e.notes,start:e.eventTime}):t}),mapOnInfo:{}}})},t.handleEvent=function(e){var a=e.event,n=t.state.calendarEvents.map(function(a){return a.id===+e.event.id?a.id:""}).find(function(a){return a===+e.event.id});a.allDay&&(t.setState({setOpen:!0,id:n}),e.jsEvent.preventDefault())},t.handleDelete=function(){t.setState(function(e){return{setOpen:!1,calendarEvents:e.calendarEvents.filter(function(a){return a.id!==e.id})}})},t.handleDateClick=function(e){console.log(e.dayEl.style),t.setState(function(a){return{calendarEvents:[].concat(Object(i.a)(a.calendarEvents),[{timeZone:"local",title:"",notes:"",start:e.date,allDay:e.allDay,end:e.date,id:Date.now()}])}})},t.handleClickOpen=function(){t.setState({setOpen:!0})},t.handleClose=function(){t.setState({setOpen:!1})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){localStorage.getItem("calendarEvents")&&this.setState({calendarEvents:JSON.parse(localStorage.getItem("calendarEvents"))})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("calendarEvents",JSON.stringify(this.state.calendarEvents))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement("div",{className:"main__container"},r.a.createElement(T,null),r.a.createElement("div",{className:"main__calendar__n"},r.a.createElement("h4",{className:"main__calendar_ni"},"Calendar"),r.a.createElement(P.a,{className:"clendar__main",defaultView:"dayGridMonth",plugins:[w.d,W.a,S.a,k.a,x.a],events:this.state.calendarEvents,dateClick:this.handleDateClick,eventClick:this.handleEvent,eventLimit:"true",header:{left:'" " today,prev,next',center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},footer:{center:""},buttonText:{prevYear:"",prev:"Back",next:"Next",today:"Today",month:"Month",week:"Week",day:"Day",list:"Agenda"}})),r.a.createElement(D,{handleChangeEvent:this.handleChangeEvent,handleClose:this.handleClose,id:this.state.calendarEvents.map(function(e){return e.id}),setOpen:this.state.setOpen,handleDelete:this.handleDelete})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,a,t){},89:function(e,a,t){e.exports=t(104)},94:function(e,a,t){},95:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.e2c88258.chunk.js.map