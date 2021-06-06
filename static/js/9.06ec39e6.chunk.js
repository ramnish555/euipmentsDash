(this.webpackJsonphospital=this.webpackJsonphospital||[]).push([[9],{111:function(e,t,c){"use strict";var r=c(0),s=c.n(r).a.createContext(null);s.displayName="CardContext",t.a=s},325:function(e,t,c){"use strict";var r=c(59),s=c(61),a=c(62),n=c.n(a),d=c(0),j=c.n(d),i=c(63),l=["xl","lg","md","sm","xs"],b=j.a.forwardRef((function(e,t){var c=e.bsPrefix,a=e.className,d=e.noGutters,b=e.as,o=void 0===b?"div":b,h=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),O=Object(i.a)(c,"row"),x=O+"-cols",m=[];return l.forEach((function(e){var t,c=h[e];delete h[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=c&&"object"===typeof c?c.cols:c)&&m.push(""+x+r+"-"+t)})),j.a.createElement(o,Object(r.a)({ref:t},h,{className:n.a.apply(void 0,[a,O,d&&"no-gutters"].concat(m))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},326:function(e,t,c){"use strict";var r=c(59),s=c(61),a=c(62),n=c.n(a),d=c(0),j=c.n(d),i=c(63),l=["xl","lg","md","sm","xs"],b=j.a.forwardRef((function(e,t){var c=e.bsPrefix,a=e.className,d=e.as,b=void 0===d?"div":d,o=Object(s.a)(e,["bsPrefix","className","as"]),h=Object(i.a)(c,"col"),O=[],x=[];return l.forEach((function(e){var t,c,r,s=o[e];if(delete o[e],"object"===typeof s&&null!=s){var a=s.span;t=void 0===a||a,c=s.offset,r=s.order}else t=s;var n="xs"!==e?"-"+e:"";t&&O.push(!0===t?""+h+n:""+h+n+"-"+t),null!=r&&x.push("order"+n+"-"+r),null!=c&&x.push("offset"+n+"-"+c)})),O.length||O.push(h),j.a.createElement(b,Object(r.a)({},o,{ref:t,className:n.a.apply(void 0,[a].concat(O,x))}))}));b.displayName="Col",t.a=b},418:function(e,t,c){"use strict";var r=c(59),s=c(61),a=c(62),n=c.n(a),d=c(0),j=c.n(d),i=c(63),l=c(191),b=function(e){return j.a.forwardRef((function(t,c){return j.a.createElement("div",Object(r.a)({},t,{ref:c,className:n()(t.className,e)}))}))},o=c(111),h=j.a.forwardRef((function(e,t){var c=e.bsPrefix,a=e.className,d=e.variant,l=e.as,b=void 0===l?"img":l,o=Object(s.a)(e,["bsPrefix","className","variant","as"]),h=Object(i.a)(c,"card-img");return j.a.createElement(b,Object(r.a)({ref:t,className:n()(d?h+"-"+d:h,a)},o))}));h.displayName="CardImg",h.defaultProps={variant:null};var O=h,x=b("h5"),m=b("h6"),p=Object(l.a)("card-body"),f=Object(l.a)("card-title",{Component:x}),u=Object(l.a)("card-subtitle",{Component:m}),v=Object(l.a)("card-link",{Component:"a"}),N=Object(l.a)("card-text",{Component:"p"}),y=Object(l.a)("card-header"),w=Object(l.a)("card-footer"),P=Object(l.a)("card-img-overlay"),g=j.a.forwardRef((function(e,t){var c=e.bsPrefix,a=e.className,l=e.bg,b=e.text,h=e.border,O=e.body,x=e.children,m=e.as,f=void 0===m?"div":m,u=Object(s.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(i.a)(c,"card"),N=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return j.a.createElement(o.a.Provider,{value:N},j.a.createElement(f,Object(r.a)({ref:t},u,{className:n()(a,v,l&&"bg-"+l,b&&"text-"+b,h&&"border-"+h)}),O?j.a.createElement(p,null,x):x))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=O,g.Title=f,g.Subtitle=u,g.Body=p,g.Link=v,g.Text=N,g.Header=y,g.Footer=w,g.ImgOverlay=P;t.a=g},452:function(e,t,c){"use strict";var r=c(59),s=c(61),a=c(62),n=c.n(a),d=c(0),j=c.n(d),i=c(63),l=j.a.forwardRef((function(e,t){var c=e.bsPrefix,a=e.className,d=e.striped,l=e.bordered,b=e.borderless,o=e.hover,h=e.size,O=e.variant,x=e.responsive,m=Object(s.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(i.a)(c,"table"),f=n()(a,p,O&&p+"-"+O,h&&p+"-"+h,d&&p+"-striped",l&&p+"-bordered",b&&p+"-borderless",o&&p+"-hover"),u=j.a.createElement("table",Object(r.a)({},m,{className:f,ref:t}));if(x){var v=p+"-responsive";return"string"===typeof x&&(v=v+"-"+x),j.a.createElement("div",{className:v},u)}return u}));t.a=l},455:function(e,t,c){"use strict";c.r(t);var r=c(14),s=c(13),a=c(15),n=c(16),d=c(0),j=c.n(d),i=c(325),l=c(326),b=c(418),o=c(452),h=c(27),O=c(4),x=function(e){Object(a.a)(c,e);var t=Object(n.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(l.a,{children:[Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a.Header,{children:[Object(O.jsx)(b.a.Title,{as:"h5",children:"Basic Table"}),Object(O.jsxs)("span",{className:"d-block m-t-5",children:["use bootstrap ",Object(O.jsx)("code",{children:"Table"})," component"]})]}),Object(O.jsx)(b.a.Body,{children:Object(O.jsxs)(o.a,{responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"First Name"}),Object(O.jsx)("th",{children:"Last Name"}),Object(O.jsx)("th",{children:"Username"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"1"}),Object(O.jsx)("td",{children:"Mark"}),Object(O.jsx)("td",{children:"Otto"}),Object(O.jsx)("td",{children:"@mdo"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"2"}),Object(O.jsx)("td",{children:"Jacob"}),Object(O.jsx)("td",{children:"Thornton"}),Object(O.jsx)("td",{children:"@fat"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"3"}),Object(O.jsx)("td",{children:"Larry"}),Object(O.jsx)("td",{children:"the Bird"}),Object(O.jsx)("td",{children:"@twitter"})]})]})]})})]}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a.Header,{children:[Object(O.jsx)(b.a.Title,{as:"h5",children:"Hover Table"}),Object(O.jsxs)("span",{className:"d-block m-t-5",children:["use props ",Object(O.jsx)("code",{children:"hover"})," with ",Object(O.jsx)("code",{children:"Table"})," component"]})]}),Object(O.jsx)(b.a.Body,{children:Object(O.jsxs)(o.a,{responsive:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"First Name"}),Object(O.jsx)("th",{children:"Last Name"}),Object(O.jsx)("th",{children:"Username"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"1"}),Object(O.jsx)("td",{children:"Mark"}),Object(O.jsx)("td",{children:"Otto"}),Object(O.jsx)("td",{children:"@mdo"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"2"}),Object(O.jsx)("td",{children:"Jacob"}),Object(O.jsx)("td",{children:"Thornton"}),Object(O.jsx)("td",{children:"@fat"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"3"}),Object(O.jsx)("td",{children:"Larry"}),Object(O.jsx)("td",{children:"the Bird"}),Object(O.jsx)("td",{children:"@twitter"})]})]})]})})]}),Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a.Header,{children:[Object(O.jsx)(b.a.Title,{as:"h5",children:"Striped Table"}),Object(O.jsxs)("span",{className:"d-block m-t-5",children:["use props ",Object(O.jsx)("code",{children:"striped"})," with ",Object(O.jsx)("code",{children:"Table"})," component"]})]}),Object(O.jsx)(b.a.Body,{children:Object(O.jsxs)(o.a,{striped:!0,responsive:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"First Name"}),Object(O.jsx)("th",{children:"Last Name"}),Object(O.jsx)("th",{children:"Username"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"1"}),Object(O.jsx)("td",{children:"Mark"}),Object(O.jsx)("td",{children:"Otto"}),Object(O.jsx)("td",{children:"@mdo"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"2"}),Object(O.jsx)("td",{children:"Jacob"}),Object(O.jsx)("td",{children:"Thornton"}),Object(O.jsx)("td",{children:"@fat"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"row",children:"3"}),Object(O.jsx)("td",{children:"Larry"}),Object(O.jsx)("td",{children:"the Bird"}),Object(O.jsx)("td",{children:"@twitter"})]})]})]})})]})]})})})}}]),c}(j.a.Component);t.default=x}}]);
//# sourceMappingURL=9.06ec39e6.chunk.js.map