(this["webpackJsonpcar-shop"]=this["webpackJsonpcar-shop"]||[]).push([[0],{130:function(e,t,c){},131:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(50),r=c.n(s),i=(c(130),c(131),c(24)),o=c(23),j=c(202),d=c(201),l=c(203),b=c(205),x=c(200),u=c(204),h=c(73),m=c.n(h),O=c(16),p=c(103),f={apiKey:"AIzaSyDqbbGFvt6T1R9MDodL7fHchVKZHeKTNZI",authDomain:"car-shop-26bfe.firebaseapp.com",projectId:"car-shop-26bfe",storageBucket:"car-shop-26bfe.appspot.com",messagingSenderId:"543278266086",appId:"1:543278266086:web:b27991e6ec4c496ddfed27"},g=function(){Object(p.a)(f)},v=c(56);g();var y=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),i=r[0],o=r[1],j=Object(a.useState)(""),d=Object(O.a)(j,2),l=d[0],b=d[1],x=Object(v.b)();Object(a.useEffect)((function(){var e=Object(v.c)(x,(function(e){n(e||{}),o(!1)}));return function(){return e}}),[]);return{user:c,isLoading:i,authError:l,registerUser:function(e,t,c,a,s,r,i){o(!0),Object(v.a)(x,e,t).then((function(t){b(""),n({email:e,displayName:c,phoneNumber:a,district:s}),Object(v.f)(x.currentUser,{email:e,displayName:c,district:s,phoneNumber:a}).then((function(){})).catch((function(e){})),r.replace("/")})).catch((function(e){b(e.message),console.log(e)})).finally((function(){return o(!1)}))},loginUser:function(e,t,c,a){o(!0),Object(v.d)(x,e,t).then((function(e){var t,n=(null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)||"/";a.replace(n),b("")})).catch((function(e){b(e.message)})).finally((function(){return o(!1)}))},logout:function(){o(!0),Object(v.e)(x).then((function(){})).catch((function(e){})).finally((function(){return o(!1)}))}}},w=c(0),N=Object(a.createContext)(null),S=function(e){var t=e.children,c=y();return Object(w.jsx)(N.Provider,{value:c,children:t})},D=function(){return Object(a.useContext)(N)},C=function(){var e=D(),t=e.user,c=e.logout;return Object(w.jsx)(d.a,{sx:{flexGrow:1},children:Object(w.jsx)(j.a,{position:"static",children:Object(w.jsxs)(l.a,{children:[Object(w.jsxs)(u.a,{size:"small",edge:"start",color:"inherit","aria-label":"menu",children:[Object(w.jsx)(m.a,{}),(null===t||void 0===t?void 0:t.email)?Object(w.jsxs)(b.a,{style:{marginLeft:"5px"},children:[Object(w.jsxs)("span",{style:{color:"PeachPuff"},children:["Welcome,"," "]})," ",Object(w.jsx)("span",{style:{color:"DarkOrange"},children:t.displayName})]}):Object(w.jsx)(b.a,{})]}),Object(w.jsx)(b.a,{variant:"h4",component:"div",sx:{flexGrow:1},children:"Modern Car Shop"}),Object(w.jsx)(i.b,{style:{textDecoration:"none",color:"yellowgreen"},to:"/home",children:Object(w.jsx)(x.a,{color:"inherit",children:"Home"})}),Object(w.jsx)(i.b,{style:{textDecoration:"none",color:"yellowgreen"},to:"/products",children:Object(w.jsx)(x.a,{color:"inherit",children:"Explore Cars"})}),(null===t||void 0===t?void 0:t.email)?Object(w.jsxs)(d.a,{children:[Object(w.jsx)(i.c,{style:{textDecoration:"none",color:"white"},to:"/dashboard",children:Object(w.jsx)(x.a,{color:"inherit",children:"Dashboard"})}),Object(w.jsx)(x.a,{onClick:c,color:"inherit",children:"Logout"})]}):Object(w.jsx)(i.c,{style:{textDecoration:"none",color:"white"},to:"/login",children:Object(w.jsx)(x.a,{color:"inherit",children:"Login"})})]})})})},B=(c(138),c.p+"static/media/banner1.26fb273d.jpg"),L=function(){return Object(w.jsxs)("div",{className:"banner-container container-fluid",children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:B,alt:""})}),Object(w.jsxs)("div",{className:"banner-descrition text-center",children:[Object(w.jsx)("h1",{children:"Amazing Car Shops"}),Object(w.jsx)("h4",{children:"Best and Luxury Cars"})]})]})},P=(c(139),function(){return Object(w.jsxs)("div",{className:"footer App",children:[Object(w.jsx)("hr",{}),Object(w.jsx)("h1",{children:"Follow us on"}),Object(w.jsxs)("div",{className:"icons",children:[Object(w.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-twitter"}),Object(w.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-facebook-f"}),Object(w.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-instagram-square"}),Object(w.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-whatsapp-square"}),Object(w.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fab fa-youtube"}),Object(w.jsx)("i",{className:"bg-secondary mx-3 p-2 fs-1 fas fa-envelope"})]}),Object(w.jsx)("p",{className:"fst-italic mt-4",children:"Copyright \xa9 2021 CodersWorld. All Rights Reserved"})]})}),k=(c(140),function(e){var t=e.product,c=t.index,a=t.picture,n=t.about,s=t.price,r=t.name;return Object(w.jsxs)("div",{className:"product",children:[Object(w.jsx)("img",{className:"text-center",src:a,alt:""}),Object(w.jsxs)("div",{className:"text-center",children:[Object(w.jsx)("h4",{children:r}),Object(w.jsxs)("h5",{children:["Price: ",s]}),Object(w.jsx)("p",{children:n}),Object(w.jsx)(i.b,{style:{textDecoration:"none"},to:"/purchase/".concat(c),children:Object(w.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(w.jsxs)("button",{className:"btn btn-warning text-decoration-none",type:"button",children:["Purchase Now ",c]})})})]})]})}),Y=(c(141),function(e){var t=e.carCounter,c=Object(a.useState)([]),n=Object(O.a)(c,2),s=n[0],r=n[1];if(Object(a.useEffect)((function(){fetch("https://intense-temple-81535.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),t){var i=s.slice(0,6);return Object(w.jsx)("div",{className:"mt-4 products",children:i.map((function(e){return Object(w.jsx)(k,{product:e},e.index)}))})}return Object(w.jsx)("div",{className:"mt-4 products",children:s.map((function(e){return Object(w.jsx)(k,{product:e},e.index)}))})}),E=(c(142),c.p+"static/media/buyer3.439c8070.jpg"),I=c.p+"static/media/buyer4.1d903163.jpg",F=function(){return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"comments-container text-center",children:[Object(w.jsxs)("h1",{children:["What Our ",Object(w.jsx)("span",{className:"text-info",children:"Buyers"})," Are Saying"]}),Object(w.jsx)("p",{className:"text-secondary",children:"Here are some comments our valuable buyers given"}),Object(w.jsxs)("div",{className:"comments",children:[Object(w.jsxs)("div",{className:"text-center single-comment left-comment",children:[Object(w.jsx)("img",{src:E,alt:""}),Object(w.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, et architecto! Dolorem, esse ea qui tempore magnam delectus saepe necessitatibus."})]}),Object(w.jsxs)("div",{className:"text-center single-comment",children:[Object(w.jsx)("img",{src:I,alt:""}),Object(w.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati aliquid eos, temporibus sunt iure non quisquam ducimus ex unde?"})]})]})]})})},q=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(C,{}),Object(w.jsx)(L,{}),Object(w.jsxs)("h1",{className:"mt-4",children:[Object(w.jsx)("span",{className:"text-primary",children:"Featured"})," ",Object(w.jsx)("span",{className:"text-success",children:"Cars"})]}),Object(w.jsx)(Y,{carCounter:6}),Object(w.jsx)("hr",{}),Object(w.jsx)(F,{}),Object(w.jsx)(P,{})]})},R=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(C,{}),Object(w.jsx)(Y,{})]})},A=c(44),M=c(211),T=c(192),U=c(212),z=c(195),H=c(198),G=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=D(),r=s.user,j=s.loginUser,d=s.isLoading,l=s.authError,u=Object(o.h)(),h=Object(o.g)(),m=function(e){var t=e.target.name,a=e.target.value,s=Object(A.a)({},c);s[t]=a,n(s)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(M.a,{children:Object(w.jsx)(H.a,{container:!0,spacing:2,children:Object(w.jsxs)(H.a,{item:!0,sx:{ml:"8%",mt:"10%"},xs:12,md:12,children:[Object(w.jsx)(b.a,{variant:"body1",gutterBottom:!0,style:{fontSize:"2em",color:"orange"},children:"Login"}),Object(w.jsxs)("form",{onSubmit:function(e){j(c.email,c.password,u,h),e.preventDefault()},children:[Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",name:"email",onChange:m,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Password",type:"password",name:"password",onChange:m,variant:"standard"}),Object(w.jsx)(x.a,{sx:{width:"80%",m:1},type:"submit",variant:"contained",children:"Login"}),Object(w.jsx)(i.c,{style:{textDecoration:"none"},to:"/register",children:Object(w.jsx)(x.a,{variant:"text",children:"New User? Please Register"})}),d&&Object(w.jsx)(U.a,{}),(null===r||void 0===r?void 0:r.email)&&Object(w.jsx)(z.a,{severity:"success",children:"Login successfully!"}),l&&Object(w.jsx)(z.a,{severity:"error",children:l})]})]})})})]})},W=function(){var e=Object(a.useState)({}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(o.g)(),r=Object(o.h)(),j=D(),d=j.user,l=j.registerUser,u=j.isLoading,h=j.authError,m=function(e){var t=e.target.name,a=e.target.value,s=Object(A.a)({},c);s[t]=a,n(s)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(M.a,{children:Object(w.jsx)(H.a,{container:!0,spacing:2,children:Object(w.jsxs)(H.a,{item:!0,sx:{mt:8},xs:12,md:12,children:[Object(w.jsx)(b.a,{variant:"body1",gutterBottom:!0,children:"Register"}),!u&&Object(w.jsxs)("form",{onSubmit:function(e){c.password===c.password2?(l(c.email,c.password,c.name,c.phone,c.district,s,r),e.preventDefault()):alert("Your password did not match")},children:[Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Name",name:"name",onBlur:m,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",name:"email",type:"email",onBlur:m,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Password",type:"password",name:"password",onBlur:m,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"ReType Your Password",type:"password",name:"password2",onBlur:m,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"District",name:"district",onBlur:m,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Phone Number",name:"phone",onBlur:m,variant:"standard"}),Object(w.jsx)(x.a,{sx:{width:"75%",m:1},type:"submit",variant:"contained",children:"Register"}),Object(w.jsx)(i.c,{style:{textDecoration:"none"},to:"/login",children:Object(w.jsx)(x.a,{variant:"text",children:"Already Registered? Please Login"})})]}),u&&Object(w.jsx)(U.a,{}),(null===d||void 0===d?void 0:d.email)&&Object(w.jsx)(z.a,{severity:"success",children:"User Created successfully!"}),h&&Object(w.jsx)(z.a,{severity:"error",children:h})]})})})]})},J=c(191),K=c(207),V=c(199),Z=c(107),Q=c.n(Z),X=c(206),$=c(196),_=c(208),ee=c(209),te=c(108),ce=c.n(te),ae=200;var ne=function(e){var t=e.window,c=a.useState(!1),n=Object(O.a)(c,2),s=n[0],r=n[1],o=a.useState(new Date),h=Object(O.a)(o,2),p=(h[0],h[1],function(){r(!s)}),f=Object(w.jsxs)("div",{children:[Object(w.jsx)(l.a,{}),Object(w.jsx)(K.a,{}),Object(w.jsx)(i.b,{to:"/home",children:Object(w.jsx)(x.a,{color:"inherit",children:"Home"})}),Object(w.jsx)("br",{}),Object(w.jsx)(i.b,{to:"/products",children:Object(w.jsx)(x.a,{color:"inherit",children:"Our Cars"})}),Object(w.jsx)(X.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(w.jsxs)($.a,{button:!0,children:[Object(w.jsx)(_.a,{children:t%2===0?Object(w.jsx)(Q.a,{}):Object(w.jsx)(ce.a,{})}),Object(w.jsx)(ee.a,{primary:e})]},e)}))})]}),g=void 0!==t?function(){return t().document.body}:void 0;return Object(w.jsxs)(d.a,{sx:{display:"flex"},children:[Object(w.jsx)(J.a,{}),Object(w.jsx)(j.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(ae,"px)")},ml:{sm:"".concat(ae,"px")}},children:Object(w.jsxs)(l.a,{children:[Object(w.jsx)(u.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:p,sx:{mr:2,display:{sm:"none"}},children:Object(w.jsx)(m.a,{})}),Object(w.jsx)(b.a,{variant:"h6",noWrap:!0,component:"div",children:"Dashboard"})]})}),Object(w.jsxs)(d.a,{component:"nav",sx:{width:{sm:ae},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(w.jsx)(V.a,{container:g,variant:"temporary",open:s,onClose:p,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ae}},children:f}),Object(w.jsx)(V.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ae}},open:!0,children:f})]}),Object(w.jsxs)(d.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(ae,"px)")}},children:[Object(w.jsx)(l.a,{}),Object(w.jsx)(b.a,{paragraph:!0,children:Object(w.jsx)(H.a,{container:!0,spacing:2,children:Object(w.jsx)(H.a,{item:!0,xs:12,sm:12,md:12,children:Object(w.jsx)(Y,{})})})})]})]})},se=c(111),re=["children"],ie=function(e){var t=e.children,c=Object(se.a)(e,re),a=D(),n=a.user;return a.isLoading?Object(w.jsx)(U.a,{}):Object(w.jsx)(o.b,Object(A.a)(Object(A.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(w.jsx)(o.a,{to:{pathname:"/login",state:{from:c}}})}}))},oe=function(){var e=Object(o.i)().id,t=D(),c=t.user,n=t.isLoading,s=Object(a.useState)([]),r=Object(O.a)(s,2),i=r[0],j=r[1],d=Object(a.useState)({}),l=Object(O.a)(d,2),b=l[0],u=l[1];Object(a.useEffect)((function(){fetch("https://intense-temple-81535.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return j(e)}))}),[]);for(var h={},m=i.length,p=0;p<m;p++)i[p].index===parseInt(e)&&(h=i[p]);var f=h,g=f.picture,v=f.price,y=f.name;b.name=c.displayName,b.email=c.email,b.carName=y,b.price=v;var N=function(e){var t=e.target.name,c=e.target.value,a=Object(A.a)({},b);a[t]=c,u(a)};return Object(w.jsxs)(M.a,{sx:{mt:2},children:[Object(w.jsxs)("h2",{className:"text-info",children:["Purchase Your Car |",Object(w.jsxs)("span",{className:"text-warning",children:["| ",y]})]}),Object(w.jsx)("hr",{style:{paddingBottom:"2px",color:"chocolate"}}),Object(w.jsxs)(H.a,{container:!0,spacing:6,children:[Object(w.jsx)(H.a,{item:!0,xs:6,md:6,sx:{mt:1},children:Object(w.jsx)("img",{style:{width:"90%"},src:g,alt:y})}),Object(w.jsx)(H.a,{item:!0,xs:6,md:6,children:!n&&Object(w.jsxs)("form",{onSubmit:function(e){fetch("http://localhost:5000/order",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(b)}).then((function(e){return e.json()})).then((function(e){console.log(e.result),e.result.insertedId&&(console.log("rakib"),alert("Order Booked Successfully!"))})),e.preventDefault()},children:[Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Name",defaultValue:c.displayName,name:"name",variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",defaultValue:c.email,name:"email",type:"email",variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your district",name:"district",onBlur:N,variant:"standard"}),Object(w.jsx)(T.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your phone",name:"phone",onBlur:N,variant:"standard"}),Object(w.jsx)(x.a,{sx:{width:"75%",m:1},type:"submit",variant:"contained",children:"Place Order"})]})})]}),Object(w.jsx)("hr",{style:{marginTop:"30px",paddingBottom:"8px",color:"chocolate"}})]})};var je=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(S,{children:Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.d,{children:[Object(w.jsx)(o.b,{exact:!0,path:"/",children:Object(w.jsx)(q,{})}),Object(w.jsx)(o.b,{exact:!0,path:"/home",children:Object(w.jsx)(q,{})}),Object(w.jsx)(o.b,{exact:!0,path:"/products",children:Object(w.jsx)(R,{})}),Object(w.jsx)(o.b,{exact:!0,path:"/login",children:Object(w.jsx)(G,{})}),Object(w.jsx)(o.b,{exact:!0,path:"/register",children:Object(w.jsx)(W,{})}),Object(w.jsx)(ie,{exact:!0,path:"/dashboard",children:Object(w.jsx)(ne,{})}),Object(w.jsx)(ie,{exact:!0,path:"/purchase/:id",children:Object(w.jsx)(oe,{})})]})})})})},de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,214)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(je,{})}),document.getElementById("root")),de()}},[[144,1,2]]]);
//# sourceMappingURL=main.838b6828.chunk.js.map