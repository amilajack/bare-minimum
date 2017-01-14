webpackJsonp([1],{80:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.OPEN_FINAL_GRADE_MODAL="bare-minimum/OPEN_FINAL_GRADE_MODAL",n=t.CLOSE_FINAL_GRADE_MODAL="bare-minimum/CLOSE_FINAL_GRADE_MODAL";t.openFinalGradeModal=function(e){return{type:a,payload:e}},t.closeFinalGradeModal=function(){return{type:n}}},81:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1],a=t.type,n=t.payload;switch(a){case l.OPEN_FINAL_GRADE_MODAL:return Object.assign({},e,{isModalOpen:!0,modalData:n});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(80),l=n(o),i={isModalOpen:!1,modalData:null};t.default=r},83:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){this.setState({currentTab:e})}function u(){var e=this.state.currentTab;switch(e){case"gradeCalc":return f.default.createElement(g.default,null);case"weightedGrade":return f.default.createElement(m.default,null);default:return"gradeCalc"}}function s(){var e=this,t=this.state.currentTab;return f.default.createElement("div",{className:"container col-md-12",style:{marginTop:"10vh",paddingLeft:"2%",paddingRight:"2%"}},f.default.createElement("div",{className:"well infobox col-md-6 col-md-offset-3"},f.default.createElement("div",{className:"row","data-example-id":"simple-nav-tabs"},f.default.createElement("ul",{className:"nav nav-tabs navtabs no-padding scrolling"},f.default.createElement("li",{role:"presentation",className:"gradeCalc"===t?"active":"",style:{backgroundColor:"#f5f5f5"}},f.default.createElement("a",{onClick:function(){return e.onTabChange("gradeCalc")},style:{paddingLeft:".8vw",paddingRight:".8vw"}},"Final Grade Calc")),f.default.createElement("li",{role:"presentation",className:"weightedGrade"===t?"active":""},f.default.createElement("a",{onClick:function(){return e.onTabChange("weightedGrade")},style:{paddingLeft:".8vw",paddingRight:".8vw"}},"Weighted Grade Calc")))),this.renderTabContent()))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(2),f=n(d),p=a(149),g=n(p),h=a(150),m=n(h);a(161);var y=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={currentTab:"gradeCalc"},a.onTabChange=a.onTabChange.bind(a),a.renderTabContent=a.renderTabContent.bind(a),a}return l(t,e),c(t,[{key:"onTabChange",value:i},{key:"renderTabContent",value:u},{key:"render",value:s}]),t}(f.default.Component);t.default=y},149:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){this.setState(o({},t,e.target.value))}function c(){var e=this.state,t=e.currentGrade,a=e.finalWeight,n=e.requiredGrade;""===t||""===a||""===n||Number(a)>100?this.missingFormElements():this.noMissingElements()}function d(){var e=Number(this.state.requiredGrade)/100,t=Number(this.state.finalWeight)/100,a=Number(this.state.currentGrade)/100,n=(e-(1-t)*a)/t*100;return n.toFixed(2)}function f(){var e=this.state,t=e.currentGrade,a=e.finalWeight,n=e.requiredGrade;return""===t&&""!==a&&""!==n?"Please input your current grade.":""!==t&&""===a&&""!==n?"Please input your final percentage.":""!==t&&""!==a&&""===n?"Please input your target goal grade.":""===t&&""===n&&""!==a?"Please input your current grade and target goal grade.":""===t&&""!==n&&""===a?"Please input your current grade and final percentage.":""!==t&&""===n&&""===a?"Please input your target goal grade and final percentage":""===t&&""===a&&""===n?"Please input your current grade, target goal grade, and final percentage.":Number(a)>100?"Your final percentage can't be more than 100%":""}function p(e){var t="";t+=Number(e)<=50?"You only need ":"You will nead at least ",t+=""+(""+e+"% on your final to get a ")+this.state.requiredGrade+"% overall.";var a=Number(e);return a>100&&(t+=" May the force be with you!"),a<=100&&a>=90&&(t+=" You can do it!"),a<90&&a>=70&&(t+=" You got this in the bag!"),a<70&&a>=0&&(t+=" What's the point of studying honestly?"),a<0&&(t+=" Just stay in bed at this point!"),t}function g(){swal({title:"Ugh oh!",text:this.errorStringBuilder(),confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"})}function h(){swal({title:"You can do it!",text:this.calculatorStringBuilder(this.calculateGrade()),confirmButtonColor:"#009688",animation:"slide-from-top"})}function m(){var e=this;return v.default.createElement("div",{style:{marginTop:10}},v.default.createElement("h3",{className:"text-center",style:{marginTop:25,marginBottom:15,fontSize:"5vw 5h",color:"#2e2d2d"}},"Final Grade Calculator"),v.default.createElement("div",{className:"row"},v.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:10}},v.default.createElement("label",{htmlFor:"currentGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",paddingLeft:0,fontSize:"1.3vw 2vh",lineHeight:"2.2vh",paddingTop:".8vh",fontWeight:400}},"Your current grade:"),v.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},v.default.createElement("input",{className:"form-control",type:"number",value:this.state.currentGrade,onChange:function(t){return e.onInputChange(t,"currentGrade")},placeholder:"92.4",id:"currentGrade"})),v.default.createElement("label",{className:"col-md-2",htmlFor:"currentGrade",style:{paddingTop:"10px",paddingLeft:8,fontWeight:400}},"%.")),v.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:10}},v.default.createElement("label",{htmlFor:"requiredGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",fontSize:14,paddingLeft:0,paddingTop:".8vh",fontWeight:400}},"You want a:"),v.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},v.default.createElement("input",{className:"form-control",type:"number",value:this.state.requiredGrade,onChange:function(t){return e.onInputChange(t,"requiredGrade")},placeholder:"90",id:"requiredGrade"})),v.default.createElement("label",{htmlFor:"requiredGrade",style:{paddingTop:"10px",paddingLeft:8,fontWeight:400}},"% in the class.")),v.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:"10px"}},v.default.createElement("label",{htmlFor:"final",className:"col-xs-5 col-form-label semi-bold text-left",style:{paddingRight:".8vw",textAlign:"right",fontSize:14,paddingLeft:0,paddingTop:".8vh",fontWeight:400}},"Final's worth:"),v.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},v.default.createElement("input",{className:"form-control",type:"number",value:this.state.finalWeight,onChange:function(t){return e.onInputChange(t,"finalWeight")},placeholder:"10",id:"final"})),v.default.createElement("label",{htmlFor:"final",style:{paddingTop:"10px",paddingLeft:4,fontWeight:400}},"% of your grade.")),v.default.createElement("div",{className:"row",style:{marginLeft:"4%",marginRight:"4%",textAlign:"center"}},v.default.createElement("a",{className:"btn btn-primary col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3",onClick:this.onCalculate,style:{backgroundColor:"#009688"}},"Calculate"))))}Object.defineProperty(t,"__esModule",{value:!0});var y=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(2),v=r(b),w=a(72),C=a(80),E=n(C),N=function(e){return{isModalOpen:e.finalGrade.isModalOpen}},x=function(e){return{openModal:function(t){e(E.openFinalGradeModal(t))}}},_=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={currentGrade:"",finalWeight:"",requiredGrade:""},a.onInputChange=a.onInputChange.bind(a),a.calculateGrade=a.calculateGrade.bind(a),a.onCalculate=a.onCalculate.bind(a),a.errorStringBuilder=a.errorStringBuilder.bind(a),a}return u(t,e),y(t,[{key:"onInputChange",value:s},{key:"onCalculate",value:c},{key:"calculateGrade",value:d},{key:"errorStringBuilder",value:f},{key:"calculatorStringBuilder",value:p},{key:"missingFormElements",value:g},{key:"noMissingElements",value:h},{key:"render",value:m}]),t}(v.default.Component);t.default=(0,w.connect)(N,x)(_)},150:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){this.setState(r({},t,e.target.value))}function s(e,t,a,n){var r=this.state.categories,o=r[e];r[e]={category:t,grade:a,weight:n},o&&o.category!==t?this.setState({categories:r}):this.setState({categories:r})}function c(){var e=this.state,t=e.categories,a=e.requiredGrade,n=e.finalWeight,r=Object.keys(t),o=this.inputToNumber(a),l=this.inputToNumber(n),i=0,u=0;if(!o)return void swal({title:"Ugh Oh!",text:"The grade you want doesn't look right!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"});if(!l)return void swal({title:"Ugh Oh!",text:"The final's weight doesn't look right!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"});for(var s=0;s<r.length;s+=1){var c=r[s],d=t[c],f=d.category,p=d.grade,g=d.weight,h=this.inputToNumber(p),m=this.inputToNumber(g);if(!h)return void swal({title:"Oops!",text:f?"Your grade for "+f+" doesn't look right!":"One of your grades doesn't look right!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"});if(!m)return void swal({title:"Oops!",text:f?"Your weight for "+f+" doesn't look right!":"One of your weights doesn't look right!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"});h&&m&&(u+=m,i+=h*m)}if(0===u)return void swal({title:"Oops!",text:"Looks like you haven't added any categories!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"});if(u+l!==1)return void swal({title:"Oops!",text:u+l>1?"Your total percentage can't be greater than 100!":"Your total percentage can't be less than 100!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"});var y=(o-i)/l*100,b=1e3*y%10>=5,v=b?Math.ceil(100*y)/100:Math.floor(100*y)/100;isNaN(v)?swal({title:"Oops!",text:"Something went wrong, make sure your inputs are right!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"}):swal({title:"You can do it!",text:this.calculatorStringBuilder(v),confirmButtonColor:"#009688",animation:"slide-from-top"})}function d(e){var t="";t+=Number(e)<=50?"You only need ":"You will nead at least ",t+=""+(""+e+"% on your final to get a ")+this.state.requiredGrade+"% overall.";var a=Number(e);return a>100&&(t+=" May the force be with you!"),a<=100&&a>=90&&(t+=" You can do it!"),a<90&&a>=70&&(t+=" You got this in the bag!"),a<70&&a>=0&&(t+=" What's the point of studying honestly?"),a<0&&(t+=" Just stay in bed at this point!"),t}function f(e){return"%"===e.substring(e.length-1)?Number(e.substring(0,e.length-1))/100:isNaN(Number(e))?void 0:Number(e)/100}function p(){var e=this.state.inputCount;this.setState({inputCount:e+1})}function g(){for(var e=this,t=this.state.inputCount,a=[],n=0;n<t;n+=1)a.push(y.default.createElement(v.default,{inputCount:n,stateToParent:this.stateFromChild}));return y.default.createElement("div",null,y.default.createElement("h3",{className:"text-center",style:{marginTop:25,marginBottom:2,fontSize:"5vw 5h",color:"#2e2d2d"}},"Weighted Final Grade Calculator"),y.default.createElement("p",{className:"text-center",style:{marginBottom:15,fontSize:"1.6vh",color:"#5d5d5d"}},"% sign is not neccesary"),y.default.createElement("div",{className:"row"},y.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("label",{htmlFor:"requiredGrade",className:"form-label",style:{fontWeight:500,fontSize:"1.8vh"}},"You want a:"),y.default.createElement("input",{maxLength:"3",type:"text",className:"form-control",id:"requiredGrade",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"requiredGrade")},placeholder:"93%",style:{fontSize:"1.7vh"}})),y.default.createElement("div",{className:"form-group has-success is-empty col-md-5 col-xs-5 ",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("label",{htmlFor:"finalWeight",className:"form-label",style:{fontWeight:500,fontSize:"1.8vh"}},"Final's worth:"),y.default.createElement("input",{maxLength:"3",type:"text",className:"form-control",id:"finalWeight",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"finalWeight")},placeholder:"20%",style:{fontSize:"1.7vh"}}))),a,y.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},y.default.createElement("div",{className:"col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1",style:{padding:0}},y.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addCategory,style:{backgroundColor:"#009688",fontSize:"2vh"}},"Add Category")),y.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.calculate,style:{backgroundColor:"#009688",fontSize:"2vh"}},"Calculate")))))}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),m=a(2),y=n(m),b=a(151),v=n(b),w=function(e){function t(e){o(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={categories:{},requiredGrade:"",finalWeight:"",inputCount:2},a.stateFromChild=a.stateFromChild.bind(a),a.addCategory=a.addCategory.bind(a),a.onInputChange=a.onInputChange.bind(a),a.calculate=a.calculate.bind(a),a}return i(t,e),h(t,[{key:"onInputChange",value:u},{key:"stateFromChild",value:s},{key:"calculate",value:c},{key:"calculatorStringBuilder",value:d},{key:"inputToNumber",value:f},{key:"addCategory",value:p},{key:"render",value:g}]),t}(y.default.Component);t.default=w},151:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var a=this;this.setState(r({},t,e.target.value),function(){return a.setInParent()})}function s(){var e=this.state,t=e.category,a=e.grade,n=e.weight;this.props.stateToParent(this.createId(),t,a,n)}function c(){var e=this.props.inputCount;return"weightedGrade"+e}function d(e){var t=(this.state.randGrade,[{category:"Homework",grade:"85%",weight:"30%"},{category:"Midterm 1",grade:"90%",weight:"15%"},{category:"Midterm 2",grade:"95%",weight:"15%"},{category:"Participation",grade:"100%",weight:"5%"},{category:"Clickers",grade:"98%",weight:"10%"},{category:"Essays",grade:"87%",weight:"15%"},{category:"Assignments",grade:"99%",weight:"25%"}]);return e<t.length?t[e]:{category:"Classy McClassFace",grade:"100%",weight:"25%"}}function f(){var e=this,t=this.props.inputCount,a=this.renderCategories(t);return h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-xs-4 col-md-offset-1 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px"}},h.default.createElement("label",{htmlFor:t+"grade",className:"form-label",style:{fontWeight:500,fontSize:"1.6vh"}},"Category ",h.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),h.default.createElement("input",{type:"text",className:"form-control",id:t+"category",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"category")},placeholder:a.category,style:{fontSize:"1.7vh"}})),h.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px"}},h.default.createElement("label",{htmlFor:t+"grade",className:"form-label",style:{fontWeight:500,fontSize:"1.6vh"}},"Current Grade"),h.default.createElement("input",{maxLength:"3",type:"text",className:"form-control",id:t+"grade",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"grade")},placeholder:a.grade,style:{fontSize:"1.7vh"}})),h.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px"}},h.default.createElement("label",{htmlFor:t+"weight",className:"form-label",style:{fontWeight:500,fontSize:"1.6vh"}},"Weight"),h.default.createElement("input",{type:"text",maxLength:"3",className:"form-control",id:t+"weight",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"weight")},placeholder:a.weight,style:{fontSize:"1.7vh"}})))}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(2),h=n(g),m=function(e){function t(e){o(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={category:"",grade:"",weight:"",randPercentage:""},a.onInputChange=a.onInputChange.bind(a),a.setInParent=a.setInParent.bind(a),a}return i(t,e),p(t,[{key:"onInputChange",value:u},{key:"setInParent",value:s},{key:"createId",value:c},{key:"renderCategories",value:d},{key:"render",value:f}]),t}(h.default.Component);t.default=m,m.propTypes={inputCount:h.default.PropTypes.number,stateToParent:h.default.PropTypes.func}},157:function(e,t,a){t=e.exports=a(158)(),t.push([e.id,".navtabs>li>a{background-color:transparent!important;color:#2e2d2d;font-size:1.2vh;margin:0;border-left:1px #ddd}.navtabs>li>a:hover{background-color:#ddd!important;margin:0}.navtabs>li.active>a,.navtabs>li.active>a:focus,.navtabs>li.active>a:hover{color:#009688;background-color:#e7e7e7;font-weight:450;font-size:1.2vh;margin:0}",""])},161:function(e,t,a){var n=a(157);"string"==typeof n&&(n=[[e.id,n,""]]),a(298)(n,{}),n.locals&&(e.exports=n.locals)}});
//# sourceMappingURL=1.bundle.js.map