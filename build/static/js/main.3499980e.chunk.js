(this["webpackJsonpcar-shop"]=this["webpackJsonpcar-shop"]||[]).push([[0],{126:function(e,t,c){},127:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},143:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(49),r=c.n(s),i=(c(126),c(127),c(20)),o=c(24),j=c(200),l=c(199),d=c(202),b=c(204),h=c(197),m=c(203),x=c(73),u=c.n(x),O=c(16),p=c(100),f={apiKey:"AIzaSyDqbbGFvt6T1R9MDodL7fHchVKZHeKTNZI",authDomain:"car-shop-26bfe.firebaseapp.com",projectId:"car-shop-26bfe",storageBucket:"car-shop-26bfe.appspot.com",messagingSenderId:"543278266086",appId:"1:543278266086:web:b27991e6ec4c496ddfed27"},g=function(){Object(p.a)(f)},v=c(54);g();var y=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),i=r[0],o=r[1],j=Object(a.useState)(""),l=Object(O.a)(j,2),d=l[0],b=l[1],h=Object(a.useState)(!1),m=Object(O.a)(h,2),x=m[0],u=m[1],p=Object(v.b)(),f=function(e,t){var c={email:e,displayName:t};fetch("http://localhost:5000/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then()};Object(a.useEffect)((function(){var e=Object(v.c)(p,(function(e){n(e||{}),o(!1)}));return function(){return e}}),[]),Object(a.useEffect)((function(){fetch("http://localhost:5000/users/".concat(c.email)).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[c.email]);return{user:c,isAdmin:x,isLoading:i,authError:d,registerUser:function(e,t,c,a,s,r,i){o(!0),Object(v.a)(p,e,t).then((function(t){b(""),n({email:e,displayName:c,phoneNumber:a,district:s}),f(e,c),Object(v.f)(p.currentUser,{email:e,displayName:c,district:s,phoneNumber:a}).then((function(){})).catch((function(e){})),r.replace("/")})).catch((function(e){b(e.message),console.log(e)})).finally((function(){return o(!1)}))},loginUser:function(e,t,c,a){o(!0),Object(v.d)(p,e,t).then((function(e){var t,n=(null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)||"/";a.replace(n),b("")})).catch((function(e){b(e.message)})).finally((function(){return o(!1)}))},logout:function(){o(!0),Object(v.e)(p).then((function(){})).catch((function(e){})).finally((function(){return o(!1)}))}}},N=c(0),w=Object(a.createContext)(null),S=function(e){var t=e.children,c=y();return Object(N.jsx)(w.Provider,{value:c,children:t})},C=function(){return Object(a.useContext)(w)},P=function(){var e=C(),t=e.user,c=e.logout;return Object(N.jsx)(l.a,{sx:{flexGrow:1},children:Object(N.jsx)(j.a,{position:"static",children:Object(N.jsxs)(d.a,{children:[Object(N.jsxs)(m.a,{size:"small",edge:"start",color:"inherit","aria-label":"menu",children:[Object(N.jsx)(u.a,{}),(null===t||void 0===t?void 0:t.email)?Object(N.jsxs)(b.a,{style:{marginLeft:"5px"},children:[Object(N.jsxs)("span",{style:{color:"PeachPuff"},children:["Welcome,"," "]})," ",Object(N.jsx)("span",{style:{color:"DarkOrange"},children:t.displayName})]}):Object(N.jsx)(b.a,{})]}),Object(N.jsx)(b.a,{variant:"h4",component:"div",sx:{flexGrow:1},children:"Modern Car Shop"}),Object(N.jsx)(i.b,{style:{textDecoration:"none",color:"yellowgreen"},to:"/home",children:Object(N.jsx)(h.a,{color:"inherit",children:"Home"})}),Object(N.jsx)(i.b,{style:{textDecoration:"none",color:"yellowgreen"},to:"/products",children:Object(N.jsx)(h.a,{color:"inherit",children:"Explore Cars"})}),(null===t||void 0===t?void 0:t.email)?Object(N.jsxs)(l.a,{children:[Object(N.jsx)(i.c,{style:{textDecoration:"none",color:"white"},to:"/dashboardHome",children:Object(N.jsx)(h.a,{color:"inherit",children:"Dashboard"})}),Object(N.jsx)(h.a,{onClick:c,color:"inherit",children:"Logout"})]}):Object(N.jsx)(i.c,{style:{textDecoration:"none",color:"white"},to:"/login",children:Object(N.jsx)(h.a,{color:"inherit",children:"Login"})})]})})})},k=(c(136),c.p+"static/media/banner1.26fb273d.jpg"),B=function(){return Object(N.jsxs)("div",{className:"banner-container container-fluid",children:[Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:k,alt:""})}),Object(N.jsxs)("div",{className:"banner-descrition text-center",children:[Object(N.jsx)("h1",{children:"Amazing Car Shops"}),Object(N.jsx)("h4",{children:"Best and Luxury Cars"})]})]})},H=(c(137),function(){return Object(N.jsxs)("div",{className:"footer App",children:[Object(N.jsx)("hr",{}),Object(N.jsx)("h1",{children:"Follow us on"}),Object(N.jsxs)("div",{className:"icons",children:[Object(N.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-twitter"}),Object(N.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-facebook-f"}),Object(N.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-instagram-square"}),Object(N.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-whatsapp-square"}),Object(N.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-youtube"}),Object(N.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fas fa-envelope"})]}),Object(N.jsx)("p",{className:"fst-italic mt-4",children:"Copyright \xa9 2021 CodersWorld. All Rights Reserved"})]})}),D=(c(138),function(e){var t=e.product,c=t.index,a=t.picture,n=t.about,s=t.price,r=t.name;return Object(N.jsxs)("div",{className:"product",children:[Object(N.jsx)("img",{className:"text-center",src:a,alt:""}),Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsx)("h4",{children:r}),Object(N.jsxs)("h5",{children:["Price: ",s]}),Object(N.jsx)("p",{children:n}),Object(N.jsx)(i.b,{style:{textDecoration:"none"},to:"/purchase/".concat(c),children:Object(N.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(N.jsx)("button",{className:"btn btn-warning text-decoration-none",type:"button",children:"Purchase Now"})})})]})]})}),A=(c(139),function(e){var t=e.carCounter,c=Object(a.useState)([]),n=Object(O.a)(c,2),s=n[0],r=n[1];if(Object(a.useEffect)((function(){fetch("https://intense-temple-81535.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),t){var i=s.slice(0,6);return Object(N.jsx)("div",{className:"mt-4 products",children:i.map((function(e){return Object(N.jsx)(D,{product:e},e.index)}))})}return Object(N.jsx)("div",{className:"mt-4 products",children:s.map((function(e){return Object(N.jsx)(D,{product:e},e.index)}))})}),F=(c(140),c.p+"static/media/buyer3.439c8070.jpg"),E=c.p+"static/media/buyer4.1d903163.jpg",I=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"comments-container text-center",children:[Object(N.jsxs)("h1",{children:["What Our ",Object(N.jsx)("span",{className:"text-info",children:"Buyers"})," Are Saying"]}),Object(N.jsx)("p",{className:"text-secondary",children:"Here are some comments our valuable buyers given"}),Object(N.jsxs)("div",{className:"comments",children:[Object(N.jsxs)("div",{className:"text-center single-comment left-comment",children:[Object(N.jsx)("img",{src:F,alt:""}),Object(N.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, et architecto! Dolorem, esse ea qui tempore magnam delectus saepe necessitatibus."})]}),Object(N.jsxs)("div",{className:"text-center single-comment",children:[Object(N.jsx)("img",{src:E,alt:""}),Object(N.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati aliquid eos, temporibus sunt iure non quisquam ducimus ex unde?"})]})]})]})})},L=c(19),T=function(e){var t=e.singleReview,c=t.name,a=t.comment,n=t.rating;return n=parseInt(n),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"my-4",children:[Object(N.jsxs)("h2",{children:[Object(N.jsx)("i",{className:"fas fa-user-edit"})," ",Object(N.jsx)("span",{className:"text-secondary",children:c})]}),Object(N.jsxs)("h4",{className:"text-danger mb-3",children:[Object(N.jsx)("i",{className:"far fa-comment text-dark"})," ",a]}),Object(L.a)(Array(n)).map((function(e){return Object(N.jsx)("i",{class:"fa fa-star text-warning fs-5"})})),Object(L.a)(Array(5-n)).map((function(e){return Object(N.jsx)("i",{class:"far fa-star fs-5"})}))]}),Object(N.jsx)("hr",{className:"mx-auto",style:{marginTop:"-20px",height:"2px",width:"50%"}})]})},q=(c(141),function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://intense-temple-81535.herokuapp.com/review").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(N.jsxs)("div",{className:"text-center",children:[Object(N.jsxs)("h2",{children:["Site ",Object(N.jsx)("span",{className:"text-warning",children:"Reviews"})]}),Object(N.jsxs)("h5",{style:{color:"cadetBlue"},className:"mb-5",children:["Give me Your valuable instructions ",Object(N.jsx)(i.b,{to:"/dashboardHome/review",className:"btn",children:"Here"})]}),Object(N.jsx)("hr",{className:"mx-auto",style:{color:"chocolate",marginTop:"-35px",height:"2px",width:"40%"}}),Object(N.jsx)("section",{className:"review mt-5",children:c.map((function(e){return Object(N.jsx)(T,{singleReview:e},e._id)}))})]})}),M=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(P,{}),Object(N.jsx)(B,{}),Object(N.jsxs)("h1",{className:"mt-4",children:[Object(N.jsx)("span",{className:"text-primary",children:"Featured"})," ",Object(N.jsx)("span",{className:"text-success",children:"Cars"})]}),Object(N.jsx)(A,{carCounter:6}),Object(N.jsx)("hr",{}),Object(N.jsx)(q,{}),Object(N.jsx)("hr",{}),Object(N.jsx)(I,{}),Object(N.jsx)(H,{})]})},R=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(P,{}),Object(N.jsx)(A,{})]})},Y=c(39),z=c(212),U=c(191),J=c(213),G=c(194),W=c(198),K=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=C(),r=s.user,j=s.loginUser,l=s.isLoading,d=s.authError,m=Object(o.h)(),x=Object(o.g)(),u=function(e){var t=e.target.name,a=e.target.value,s=Object(Y.a)({},c);s[t]=a,n(s)};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(P,{}),Object(N.jsx)(z.a,{children:Object(N.jsx)(W.a,{container:!0,spacing:2,children:Object(N.jsxs)(W.a,{item:!0,sx:{ml:"8%",mt:"10%"},xs:12,md:12,children:[Object(N.jsx)(b.a,{variant:"body1",gutterBottom:!0,style:{fontSize:"2em",color:"orange"},children:"Login"}),Object(N.jsxs)("form",{onSubmit:function(e){j(c.email,c.password,m,x),e.preventDefault()},children:[Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",name:"email",onChange:u,variant:"standard"}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Password",type:"password",name:"password",onChange:u,variant:"standard"}),Object(N.jsx)(h.a,{sx:{width:"80%",m:1},type:"submit",variant:"contained",children:"Login"}),Object(N.jsx)(i.c,{style:{textDecoration:"none"},to:"/register",children:Object(N.jsx)(h.a,{variant:"text",children:"New User? Please Register"})}),l&&Object(N.jsx)(J.a,{}),(null===r||void 0===r?void 0:r.email)&&Object(N.jsx)(G.a,{severity:"success",children:"Login successfully!"}),d&&Object(N.jsx)(G.a,{severity:"error",children:d})]})]})})})]})},V=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(o.g)(),r=Object(o.h)(),j=C(),l=j.user,d=j.registerUser,m=j.isLoading,x=j.authError,u=function(e){var t=e.target.name,a=e.target.value,s=Object(Y.a)({},c);s[t]=a,n(s)};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(P,{}),Object(N.jsx)(z.a,{children:Object(N.jsx)(W.a,{container:!0,spacing:2,children:Object(N.jsxs)(W.a,{item:!0,sx:{mt:8},xs:12,md:12,children:[Object(N.jsx)(b.a,{variant:"body1",gutterBottom:!0,children:"Register"}),!m&&Object(N.jsxs)("form",{onSubmit:function(e){c.password===c.password2?(d(c.email,c.password,c.name,c.phone,c.district,s,r),e.preventDefault()):alert("Your password did not match")},children:[Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Name",name:"name",onBlur:u,variant:"standard"}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",name:"email",type:"email",onBlur:u,variant:"standard"}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Password",type:"password",name:"password",onBlur:u,variant:"standard"}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"ReType Your Password",type:"password",name:"password2",onBlur:u,variant:"standard"}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"District",name:"district",onBlur:u,variant:"standard"}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Phone Number",name:"phone",onBlur:u,variant:"standard"}),Object(N.jsx)(h.a,{sx:{width:"75%",m:1},type:"submit",variant:"contained",children:"Register"}),Object(N.jsx)(i.c,{style:{textDecoration:"none"},to:"/login",children:Object(N.jsx)(h.a,{variant:"text",children:"Already Registered? Please Login"})})]}),m&&Object(N.jsx)(J.a,{}),(null===l||void 0===l?void 0:l.email)&&Object(N.jsx)(G.a,{severity:"success",children:"User Created successfully!"}),x&&Object(N.jsx)(G.a,{severity:"error",children:x})]})})})]})},Z=c(190),_=c(205),$=c(196),Q=200;var X=function(e){var t=e.window,c=a.useState(!1),n=Object(O.a)(c,2),s=n[0],r=n[1],o=C(),x=(o.user,o.isAdmin);console.log("isAdmin: ",x);var p=function(){r(!s)},f=Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{}),Object(N.jsx)(_.a,{}),Object(N.jsx)(i.b,{to:"/home",children:"Home"}),Object(N.jsx)("br",{}),x.admin?Object(N.jsxs)(l.a,{children:[Object(N.jsx)(i.b,{to:"/dashboardHome/makeAdmin",children:Object(N.jsx)(h.a,{color:"inherit",children:"Make Admin"})}),Object(N.jsx)(i.b,{to:"/dashboardHome/addProduct",children:Object(N.jsx)(h.a,{color:"inherit",children:"Add Product"})}),Object(N.jsx)(i.b,{to:"/dashboardHome/manageOrders",children:Object(N.jsx)(h.a,{color:"inherit",children:"Manage Orders"})}),Object(N.jsx)(i.b,{to:"/dashboardHome/manageProduct",children:Object(N.jsx)(h.a,{color:"inherit",children:"Manage Product"})})]}):Object(N.jsxs)(l.a,{children:[Object(N.jsx)(i.b,{to:"/dashboardHome/payment",children:Object(N.jsx)(h.a,{color:"inherit",children:"PayMent"})}),Object(N.jsx)("br",{}),Object(N.jsx)(i.b,{to:"/dashboardHome/review",children:Object(N.jsx)(h.a,{color:"inherit",children:"Review"})}),Object(N.jsx)("br",{}),Object(N.jsx)(i.b,{to:"/dashboardHome/myOrder",children:Object(N.jsx)(h.a,{color:"inherit",children:"My Orders"})})]})]}),g=void 0!==t?function(){return t().document.body}:void 0;return Object(N.jsxs)(l.a,{sx:{display:"flex"},children:[Object(N.jsx)(Z.a,{}),Object(N.jsx)(j.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(Q,"px)")},ml:{sm:"".concat(Q,"px")}},children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(m.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:p,sx:{mr:2,display:{sm:"none"}},children:Object(N.jsx)(u.a,{})}),Object(N.jsx)(b.a,{variant:"h6",noWrap:!0,component:"div",children:"Dashboard"})]})}),Object(N.jsxs)(l.a,{component:"nav",sx:{width:{sm:Q},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(N.jsx)($.a,{container:g,variant:"temporary",open:s,onClose:p,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Q}},children:f}),Object(N.jsx)($.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Q}},open:!0,children:f})]}),Object(N.jsx)(l.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(Q,"px)")}}})]})},ee=c(106),te=["children"],ce=function(e){var t=e.children,c=Object(ee.a)(e,te),a=C(),n=a.user;return a.isLoading?Object(N.jsx)(J.a,{}):Object(N.jsx)(o.b,Object(Y.a)(Object(Y.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(N.jsx)(o.a,{to:{pathname:"/login",state:{from:c}}})}}))},ae=function(){var e=Object(o.i)().id,t=C(),c=t.user,n=t.isLoading,s=Object(a.useState)([]),r=Object(O.a)(s,2),j=r[0],l=r[1],d=Object(a.useState)({}),b=Object(O.a)(d,2),m=b[0],x=b[1];Object(a.useEffect)((function(){fetch("https://intense-temple-81535.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]);for(var u={},p=j.length,f=0;f<p;f++)j[f].index===parseInt(e)&&(u=j[f]);var g=u,v=g.picture,y=g.price,w=g.name;m.name=c.displayName,m.email=c.email,m.carName=w,m.price=y,m.picture=v;var S=function(e){var t=e.target.name,c=e.target.value,a=Object(Y.a)({},m);a[t]=c,x(a)};return Object(N.jsxs)(z.a,{sx:{mt:2},children:[Object(N.jsxs)("h2",{className:"text-info",children:["Purchase Your Car |",Object(N.jsxs)("span",{className:"text-warning",children:["| ",w]})]}),Object(N.jsx)("hr",{style:{paddingBottom:"2px",color:"chocolate"}}),Object(N.jsxs)(W.a,{container:!0,spacing:6,children:[Object(N.jsx)(W.a,{item:!0,xs:6,md:6,sx:{mt:1},children:Object(N.jsx)("img",{style:{width:"90%"},src:v,alt:w})}),Object(N.jsx)(W.a,{item:!0,xs:6,md:6,children:!n&&Object(N.jsxs)("form",{onSubmit:function(e){fetch("https://intense-temple-81535.herokuapp.com/order",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(m)}).then((function(e){return e.json()})).then((function(e){console.log(e.result),e.result.insertedId&&alert("Order Booked Successfully!")})),e.preventDefault()},children:[Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Name",defaultValue:c.displayName,name:"name",variant:"standard",required:!0}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",defaultValue:c.email,name:"email",type:"email",variant:"standard",required:!0}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your district",name:"district",onBlur:S,variant:"standard",required:!0}),Object(N.jsx)(U.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your phone",name:"phone",onBlur:S,variant:"standard",required:!0}),Object(N.jsx)(h.a,{sx:{width:"75%",m:1},type:"submit",variant:"contained",children:"Place Order"}),Object(N.jsx)("br",{}),Object(N.jsx)(i.b,{to:"/home",className:"btn",children:"Home"})]})})]}),Object(N.jsx)("hr",{style:{marginTop:"30px",paddingBottom:"8px",color:"chocolate"}})]})},ne=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=function(e){var t=e.target.name,a=e.target.value;"rating"===t&&parseInt(a)>5&&(a=5);var s=Object(Y.a)({},c);s[t]=a,n(s)};return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{className:"my-3",children:["Leave a ",Object(N.jsx)("span",{className:"text-danger",children:"Review"})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("form",{onSubmit:function(e){fetch("https://intense-temple-81535.herokuapp.com/review",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){console.log(e.result),e.result.insertedId&&(console.log("rakib"),alert("Review Submitted Successfully!"))})),e.preventDefault()},children:[Object(N.jsxs)("div",{className:"mb-3 w-50 m-auto",children:[Object(N.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Your Name"}),Object(N.jsx)("input",{name:"name",className:"form-control",id:"exampleFormControInput1",placeholder:"Enter your name",onBlur:s,required:!0})]}),Object(N.jsxs)("div",{className:"mb-3 w-50 m-auto",children:[Object(N.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Your Email Address"}),Object(N.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleFormControInput1",placeholder:"name@example.com",onBlur:s,required:!0})]}),Object(N.jsxs)("div",{className:"mb-3 w-50 m-auto",children:[Object(N.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Rating"}),Object(N.jsx)("input",{type:"number",name:"rating",className:"form-control",id:"exampleFormControInput1",placeholder:"rating point",onBlur:s,required:!0})]}),Object(N.jsxs)("div",{className:"mb-3 w-50 m-auto",children:[Object(N.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Comment"}),Object(N.jsx)("textarea",{className:"form-control",name:"comment",id:"exampleFormControlTextarea1",rows:"3",onBlur:s,required:!0})]}),Object(N.jsx)(h.a,{sx:{width:"25%",m:1},type:"submit",variant:"contained",children:"Submit Review"})]}),Object(N.jsx)(i.b,{to:"/home",className:"btn",children:"Back to Home"})]})},se=c(207),re=c(211),ie=c(210),oe=c(206),je=c(208),le=c(209),de=c(201),be=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],s=C().user;return Object(a.useEffect)((function(){var e="https://intense-temple-81535.herokuapp.com/order?email=".concat(s.email);fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{className:"my-4",children:[Object(N.jsx)("span",{className:"text-info",children:"Total Orders:"})," ",Object(N.jsx)("span",{className:"text-danger",children:c.length})]}),Object(N.jsx)(oe.a,{component:de.a,children:Object(N.jsxs)(se.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(N.jsx)(je.a,{children:Object(N.jsxs)(le.a,{children:[Object(N.jsx)(ie.a,{sx:{fontSize:"25px"},children:"Car"}),Object(N.jsx)(ie.a,{align:"right",sx:{fontSize:"25px"},children:"Name"}),Object(N.jsx)(ie.a,{align:"right",sx:{fontSize:"25px"},children:"Client"}),Object(N.jsx)(ie.a,{align:"right",sx:{fontSize:"25px"},children:"E-mail"}),Object(N.jsx)(ie.a,{align:"right",sx:{fontSize:"25px"},children:"Price"})]})}),Object(N.jsx)(re.a,{children:c.map((function(e){return Object(N.jsxs)(le.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(N.jsx)(ie.a,{component:"th",scope:"row",children:Object(N.jsx)("img",{src:e.picture,alt:e.name})}),Object(N.jsx)(ie.a,{align:"right",children:e.carName}),Object(N.jsx)(ie.a,{align:"right",children:e.name}),Object(N.jsx)(ie.a,{align:"right",children:e.email}),Object(N.jsxs)(ie.a,{align:"right",children:["$",e.price]})]},e._id)}))})]})})]})},he=function(){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{className:"my-5",children:[Object(N.jsx)("span",{className:"text-success",children:"PayMent"})," ",Object(N.jsx)("span",{className:"text-orange",children:"Comming"})," ",Object(N.jsx)("span",{className:"text-success",children:"Soon!"})]}),Object(N.jsx)(i.b,{to:"/dashboardHome",className:"btn",children:"Back to DashBoard"})]})},me=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(O.a)(s,2);r[0],r[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"my-5",children:"Make an Adming"}),Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c);var t={email:c};fetch("http://localhost:5000/users/admin",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount?alert("Make Admin Successfully!"):e.matchedCount?alert("Already Admin!"):alert("Sorry! Email didn't match with our user list")}))},children:[Object(N.jsx)(U.a,{label:"Email",type:"email",onBlur:function(e){n(e.target.value)},variant:"standard",required:!0}),Object(N.jsx)(h.a,{sx:{marginTop:"10px",width:"10%"},type:"submit",variant:"contained",children:"Add Admin"})]})]})},xe=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h2",{children:"This is ManageOrders"})})},ue=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h2",{children:"This is Manage Product"})})},Oe=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("h2",{children:"This is add product page"})})};var pe=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(S,{children:Object(N.jsx)(i.a,{children:Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{exact:!0,path:"/",children:Object(N.jsx)(M,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/home",children:Object(N.jsx)(M,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/products",children:Object(N.jsx)(R,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/login",children:Object(N.jsx)(K,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/register",children:Object(N.jsx)(V,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/payment",children:Object(N.jsx)(he,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/review",children:Object(N.jsx)(ne,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/myOrder",children:Object(N.jsx)(be,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/makeAdmin",children:Object(N.jsx)(me,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/manageProduct",children:Object(N.jsx)(ue,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/manageOrders",children:Object(N.jsx)(xe,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/dashboardHome/addProduct",children:Object(N.jsx)(Oe,{})}),Object(N.jsx)(ce,{exact:!0,path:"/dashboardHome",children:Object(N.jsx)(X,{})}),Object(N.jsx)(ce,{exact:!0,path:"/purchase/:id",children:Object(N.jsx)(ae,{})})]})})})})},fe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,215)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(pe,{})}),document.getElementById("root")),fe()}},[[143,1,2]]]);
//# sourceMappingURL=main.3499980e.chunk.js.map