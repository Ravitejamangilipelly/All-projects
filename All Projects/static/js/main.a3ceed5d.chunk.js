(this["webpackJsonpprojects-app"]=this["webpackJsonpprojects-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(3),n=s.n(a),r=s(4),o=s(5),p=s(7),l=s(6),d=(s(12),s(0)),j=function(e){var t=e.tabDetails,s=e.clickTabItem,i=e.isActive,c=t.tabId,a=t.displayText,n=i?"active-tab-btn":"";return Object(d.jsx)("li",{className:"tab-item-container ",children:Object(d.jsx)("button",{type:"button",className:"tab-btn ".concat(n),onClick:function(){s(c)},children:a})})},b=(s(14),function(e){var t=e.projectDetails,s=t.projectId,i=t.imageURL,c=t.description,a=t.title;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"project-item-container",children:[Object(d.jsx)("img",{className:"project-item-image",src:i,alt:"project-item ".concat(s)}),Object(d.jsxs)("div",{className:"project-item-details-container",children:[Object(d.jsx)("h1",{className:"project-item-title",children:a}),Object(d.jsx)("p",{className:"project-item-description",children:c})]})]})})}),g=(s(15),function(){return Object(d.jsx)("nav",{className:"nav-header",children:Object(d.jsxs)("div",{className:"nav-content",children:[Object(d.jsx)("p",{className:"website-logo",children:"MR"}),Object(d.jsxs)("ul",{className:"nav-menu",children:[Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"social-network-img",src:"https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png",alt:"Linked In"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"social-network-img",src:"https://assets.ccbp.in/frontend/react-js/projects-github-img.png",alt:"Git Hub"})}),Object(d.jsx)("li",{children:Object(d.jsx)("img",{className:"social-network-img",src:"https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png",alt:"Twitter"})})]})]})})}),m=(s(16),[{tabId:"STATIC",displayText:"Static"},{tabId:"RESPONSIVE",displayText:"Responsive"},{tabId:"DYNAMIC",displayText:"Dynamic"}]),h=[{projectId:0,category:"STATIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-s3-img.png",title:"Music Page",description:"The music page enables the users to browse through the images of all-time favorite music albums."},{projectId:1,category:"STATIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-s4-img.png",title:"Tourism Website",description:"A tourism website enables the user to browse through the images of popular destinations."},{projectId:2,category:"STATIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-s1-img.png",title:"Advanced Technologies",description:"A website that gives you a basic understanding of Advanced Technologies."},{projectId:3,category:"STATIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-s2-img.png",title:"Happy Meals",description:"Discover the best foods in over 1,000 restaurants."},{projectId:4,category:"RESPONSIVE",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-r4-img.png",title:"VR Website",description:"VR Website enables users to explore AR and VR Products and Industry happenings."},{projectId:5,category:"RESPONSIVE",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",title:"Food Munch",description:"Food Much Website is a user-centric food tech website."},{projectId:6,category:"RESPONSIVE",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-r3-img.png",title:"Portfolio",description:"A portfolio is the best alternative for a resume to showcase your skills to the digital world."},{projectId:7,category:"RESPONSIVE",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-r1-img.png",title:"Design",description:"A website to showcase the best features and give more information about the Design tool."},{projectId:8,category:"DYNAMIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-d3-img.png",title:"Speed Typing Test",description:"Speed Typing Test Application is capable of calculating the time to type the randomly generated quote."},{projectId:9,category:"DYNAMIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-d1-img.png",title:"Random Joke Page",description:"Random Joke Page is an API-based dynamic Web Application that generates a new joke."},{projectId:10,category:"DYNAMIC",imageURL:"https://assets.ccbp.in/frontend/react-js/projects-d2-img.png",title:"Sizing An Image",description:"This is a dynamic web application capable of adjusting the size of an element using DOM manipulations."}],u=function(e){Object(p.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={activeTabId:m[0].tabId},e.clickTabItem=function(t){e.setState({activeTabId:t})},e.getFilteredProjects=function(){var t=e.state.activeTabId;return h.filter((function(e){return e.category===t}))},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.state.activeTabId,s=this.getFilteredProjects();return Object(d.jsxs)("div",{className:"app-container",children:[Object(d.jsx)(g,{}),Object(d.jsx)("h1",{className:"title",children:"Projects"}),Object(d.jsx)("p",{className:"description",children:"Your skills and achievements showcase your strengths and abilities. Speak about any new skills or software you learnt to perform the project responsibilities."}),Object(d.jsx)("ul",{className:"tabs-container",children:m.map((function(s){return Object(d.jsx)(j,{tabDetails:s,clickTabItem:e.clickTabItem,isActive:t===s.tabId},s.tabId)}))}),Object(d.jsx)("ul",{className:"project-list-container",children:s.map((function(e){return Object(d.jsx)(b,{projectDetails:e},e.projectId)}))})]})}}]),s}(i.Component);n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a3ceed5d.chunk.js.map