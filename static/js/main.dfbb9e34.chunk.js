(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(t,e,n){t.exports={input:"ContactForm_input__2WZLh",label:"ContactForm_label__vrVo4",btn:"ContactForm_btn__30CoA"}},function(t,e,n){t.exports={list:"ContactList_list__1Lcko",list__item:"ContactList_list__item__29fW4",list__text:"ContactList_list__text__8k6ia",list__btn:"ContactList_list__btn__14RxA"}},,,,,,function(t,e,n){t.exports={filterInput:"Filter_filterInput__2JZAW",filterLabel:"Filter_filterLabel__2lMuu"}},,function(t,e,n){t.exports={container:"Container_container__2NELd"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=(n(18),n(13)),o=n(4),l=n(5),u=n(7),b=n(6),d=(n(19),n(23)),m=n(11),h=n.n(m),j=n(0);var f=function(t){var e=t.children;return Object(j.jsx)("div",{className:h.a.container,children:e})},_=n(12),p=n(2),C=n.n(p),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.resetForm=function(){t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault(),t.props.addNewContact(t.state),t.resetForm()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{className:C.a.label,children:["Name",Object(j.jsx)("input",{className:C.a.input,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.handleChange,required:!0})]}),Object(j.jsxs)("label",{className:C.a.label,children:["Number",Object(j.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleChange,required:!0})]}),Object(j.jsx)("button",{className:C.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=x,v=n(3),N=n.n(v),g=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:N.a.list__item,children:[Object(j.jsxs)("p",{className:N.a.list__text,children:[a,": ",c]}),Object(j.jsx)("button",{className:N.a.list__btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(9),w=n.n(y),A=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:w.a.filterLabel,children:["Find contacts by name",Object(j.jsx)("input",{className:w.a.filterInput,type:"text",value:e,onChange:n})]})},L=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name===c.name}))?alert("".concat(c.name," already exists")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.filter,n=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(O,{addNewContact:this.addNewContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(A,{value:e,onChange:this.changeFilter}),Object(j.jsx)(g,{contacts:n,deleteContact:this.deleteContact})]})}}]),n}(a.Component),F=L;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.dfbb9e34.chunk.js.map