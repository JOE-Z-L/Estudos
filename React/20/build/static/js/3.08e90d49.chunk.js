(this["webpackJsonpreact-router-6-upgrade"]=this["webpackJsonpreact-router-6-upgrade"]||[]).push([[3],{44:function(e,t,c){e.exports={card:"Card_card__1m44e"}},45:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},48:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(3),o=c(5),a=c(44),s=c.n(a),i=c(1),u=function(e){return Object(i.jsx)("div",{className:s.a.card,children:e.children})},d=c(10),l=c(45),j=c.n(l),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),r=(c[0],c[1]),a=Object(n.useRef)(),s=Object(n.useRef)();return Object(i.jsx)(n.Fragment,{children:Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){r(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=a.current.value,n=s.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(d.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:a})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:s})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})})},f=c(14),x=c(15);t.default=function(){var e=Object(f.a)(x.b),t=e.sendRequest,c=e.status,o=Object(r.o)();Object(n.useEffect)((function(){"completed"===c&&o("/quotes")}),[c,o]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=3.08e90d49.chunk.js.map