(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/logo.d5ab31ce.svg"},30:function(e,a,t){e.exports=t(67)},35:function(e,a,t){},40:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(21),r=t.n(l),s=t(12),m=t(22),o=t(29),i=t(28),u=t(7),E=t(1),d=t(10),h=t.n(d),p=(t(35),function(e){return c.a.createElement("header",{className:"header"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{src:h.a,alt:"Logo Space X",className:"logo"})),c.a.createElement("nav",{className:"main-nav nav"},c.a.createElement("ul",{className:"list"},e.rockets.map((function(a,t){return c.a.createElement("li",{key:t,className:"item"},c.a.createElement(u.b,{to:"/rocket",onClick:function(){e.changeRocket(a)},className:"item-link"},a))})))),c.a.createElement("nav",{className:"secondary-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{exact:!0,to:"/",className:"item-link",activeClassName:"active"},"Home")),c.a.createElement("li",{className:"item"},c.a.createElement(u.c,{to:"/calendar",className:"item-link",activeClassName:"active"},"Calendar")))))}),f=(t(40),function(e){var a=e.company;return c.a.createElement("main",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("hgroup",{className:"title"},c.a.createElement("h1",null,c.a.createElement("img",{className:"logo-title",src:h.a,alt:a.name})),c.a.createElement("h2",{className:"subtitle"},a.summary)),c.a.createElement("div",{className:"row"},c.a.createElement("table",{className:"home_table home_table-manager"},c.a.createElement("caption",{className:"home_table-title"},"Manager"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CEO"),c.a.createElement("td",{className:"home_table-column"},a.ceo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"COO"),c.a.createElement("td",{className:"home_table-column"},a.coo)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO"),c.a.createElement("td",{className:"home_table-column"},a.cto)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"CTO PROPULSION"),c.a.createElement("td",{className:"home_table-column"},a.cto_propulsion)))),c.a.createElement("table",{className:"home_table home_table-location"},c.a.createElement("caption",{className:"home_table-title"},"Location"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"State"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.state)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"City"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.city)),c.a.createElement("tr",null,c.a.createElement("td",{className:"home_table-column table-column-left"},"Address"),c.a.createElement("td",{className:"home_table-column"},a.headquarters.address)))),c.a.createElement("video",{id:"video",autoPlay:!0,loop:!0,muted:!0,className:"responsive-video",width:"100%",height:"100%",preload:"auto"},c.a.createElement("source",{type:"video/mp4",src:"https://www.spacex.com/media/mission_reusability.mp4"}),c.a.createElement("source",{type:"video/webm",src:"https://www.spacex.com/media/mission_reusability.webm"})))))}),b=t(24),N=t.n(b),k=(t(48),{"Falcon 1":"moon","Falcon 9":"earth","Falcon Heavy":"mars",other:"space"}),v=function(e){var a=e.rocket,t=e.name;return c.a.createElement("section",{className:"main"},c.a.createElement("h1",{className:"title"},t||a),a&&c.a.createElement("div",{className:"video-container"},c.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,src:"./video/".concat(k.hasOwnProperty(a)?k[a]:k.other,".mp4")})))},g=(t(49),{"Falcon 1":"falcon-1","Falcon 9":"falcon-9","Falcon Heavy":"falcon-heavy",Starship:"starship"}),y=function(e){var a=e.name,t=e.height,n=e.diameter,l=e.mass,r=e.payload_weights,s=e.description;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{rocket:a}),c.a.createElement("section",{className:"features"},c.a.createElement("h2",{className:"features-title"},a," ",c.a.createElement("br",null),"Overview"),c.a.createElement("div",{className:"overview"},c.a.createElement("table",{className:"table"},c.a.createElement("caption",{className:"table-title"},"Size"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"HEIGHT"),c.a.createElement("td",{className:"table-column"},t.meters," m / ",t.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"DIAMETER"),c.a.createElement("td",{className:"table-column"},n.meters," m / ",n.feet," ft")),c.a.createElement("tr",null,c.a.createElement("td",{className:"table-column"},"MASS"),c.a.createElement("td",{className:"table-column"},l.kg," kg / ",l.lb," lb")),r.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"table-column"},"PAYLOAD TO ",e.id.toUpperCase()),c.a.createElement("td",{className:"table-column"},e.kg," kg / ",e.lb," lb"))})))),c.a.createElement(N.a,{speed:14},c.a.createElement("img",{src:"./img/".concat(g[a],".png"),alt:"rocket",className:"rocket"})),c.a.createElement("article",null,c.a.createElement("h3",{className:"features-subtitle"},"DESCRIPTION"),c.a.createElement("p",{className:"features-text"},s)))))},w=(t(50),function(e){var a=e.elon_twitter,t=e.flickr,n=e.twitter,l=e.website;return c.a.createElement("footer",{className:"footer"},c.a.createElement("img",{src:h.a,alt:"logo Space X",className:"logo"}),c.a.createElement("nav",{className:"footer-nav"},c.a.createElement("ul",{className:"list"},c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Elon Musk Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Twitter")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Flickr")),c.a.createElement("li",{className:"item"},c.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank",className:"item-link"},"Website")))),c.a.createElement("p",{className:"footer-text"},"For additional questions, contact",c.a.createElement("a",{className:"footer-link",href:"mailto:rideshare@spacex.com"}," rideshare@spacex.com")))}),_=t(13),O=t(8),x=t.n(O),C=t(11),j=function e(){var a=this;Object(s.a)(this,e),this.baseUrl="https://api.spacexdata.com/v4/",this.getResource=function(){var e=Object(C.a)(x.a.mark((function e(a){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. ".concat(t.status));case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),this.getRocket=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResource(a.baseUrl+"rockets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getLaunches=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResource(a.baseUrl+"launches/past");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getCompany=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getResource(a.baseUrl+"company");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},S=new j,F=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){S.getLaunches().then((function(e){return c(e)}))}),[]);return{data:t,getLaunch:function(e){return t.find((function(a){return a.id===e}))}}},R=(t(52),function(){var e=F().data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{name:"SpaceX Calendar"}),c.a.createElement("section",{className:"calendar"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"calendar-list"},e.map((function(e){return c.a.createElement("li",{className:"calendar-item",key:e.id},c.a.createElement("article",{className:"launches"},c.a.createElement("div",{className:"launches-image"},c.a.createElement("img",{src:e.links.patch.small,alt:""})),c.a.createElement("div",{className:"launches-content"},c.a.createElement("h2",{className:"launches-title"},e.name),c.a.createElement(u.b,{to:"/details/".concat(e.id),className:"button launches-details"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}))))))}),L=t(25),T=(t(65),function(e){var a=Object(n.useState)(null),t=Object(_.a)(a,2),l=t[0],r=t[1],s=F().getLaunch;Object(n.useEffect)((function(){r(s(e.match.params.id))}),[s,e.match.params.id]);var m=Object(E.e)();return l?c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{name:l.name}),c.a.createElement("main",{className:"details"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"details-row"},c.a.createElement("div",{className:"details-image"},c.a.createElement("img",{src:l.links.patch.small,alt:""})),c.a.createElement("div",{className:"details-content"},c.a.createElement("p",{className:"details-description"},l.details))),c.a.createElement(L.a,{className:"details-youtube",videoId:l.links.youtube_id})),c.a.createElement("a",{onClick:m.goBack,className:"button button-back"},"go back"))):c.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430")}),D=(t(66),function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).fetchData=new j,e.state={rocket:"Falcon 1",rocketFeatures:null,rockets:[],company:null},e.changeRocket=function(a){e.setState({rocket:a},e.updateRocket)},e.updateCompany=function(){e.fetchData.getCompany().then((function(a){return e.setState({company:a})}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateRocket(),this.updateCompany()}},{key:"updateRocket",value:function(){var e=this;this.fetchData.getRocket().then((function(a){return e.setState({rockets:a.map((function(e){return e.name}))}),a})).then((function(a){return a.find((function(a){return a.name===e.state.rocket}))})).then((function(a){return e.setState({rocketFeatures:a})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(p,{rockets:this.state.rockets,changeRocket:this.changeRocket}),c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return e.state.company&&c.a.createElement(f,{company:e.state.company})}}),c.a.createElement(E.a,{path:"/rocket",render:function(){return e.state.rocketFeatures&&c.a.createElement(y,e.state.rocketFeatures)}}),c.a.createElement(E.a,{path:"/calendar",component:R}),c.a.createElement(E.a,{path:"/details/:id",component:T}),this.state.company&&c.a.createElement(w,this.state.company.links))}}]),t}(c.a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ce55bee5.chunk.js.map