webpackJsonp([1],{159:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.OPEN_FINAL_GRADE_MODAL="bare-minimum/OPEN_FINAL_GRADE_MODAL",r=t.CLOSE_FINAL_GRADE_MODAL="bare-minimum/CLOSE_FINAL_GRADE_MODAL";t.openFinalGradeModal=function(e){return{type:n,payload:e}},t.closeFinalGradeModal=function(){return{type:r}}},160:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1],n=t.type,r=t.payload;switch(n){case o.OPEN_FINAL_GRADE_MODAL:return Object.assign({},e,{isModalOpen:!0,modalData:r});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(159),o=r(l),i={isModalOpen:!1,modalData:null};t.default=a},162:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(6),c=r(u),d=n(254),s=r(d),f=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"container col-md-12",style:{marginTop:"10vh",paddingLeft:"2%",paddingRight:"2%"}},c.default.createElement("div",{className:"well infobox col-md-6 col-md-offset-3"},c.default.createElement(s.default,null)))}}]),t}(c.default.Component);t.default=f},254:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(6),s=a(d),f=n(223),p=n(159),m=r(p),g=function(e){return{isModalOpen:e.finalGrade.isModalOpen}},h=function(e){return{openModal:function(t){e(m.openFinalGradeModal(t))}}},y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currentGrade:"",finalWeight:"",requiredGrade:""},n.onInputChange=n.onInputChange.bind(n),n.calculateGrade=n.calculateGrade.bind(n),n.onCalculate=n.onCalculate.bind(n),n.errorStringBuilder=n.errorStringBuilder.bind(n),n}return u(t,e),c(t,[{key:"onInputChange",value:function(e,t){this.setState(l({},t,e.target.value))}},{key:"onCalculate",value:function(){var e=this.state,t=e.currentGrade,n=e.finalWeight,r=e.requiredGrade;""===t||""===n||""===r||Number(n)>100?this.missingFormElements():this.noMissingElements()}},{key:"calculateGrade",value:function(){var e=Number(this.state.requiredGrade)/100,t=Number(this.state.finalWeight)/100,n=Number(this.state.currentGrade)/100,r=(e-(1-t)*n)/t*100;return r.toFixed(2)}},{key:"errorStringBuilder",value:function(){var e=this.state,t=e.currentGrade,n=e.finalWeight,r=e.requiredGrade;return""===t&&""!==n&&""!==r?"Please input your current grade.":""!==t&&""===n&&""!==r?"Please input your final percentage.":""!==t&&""!==n&&""===r?"Please input your target goal grade.":""===t&&""===r&&""!==n?"Please input your current grade and target goal grade.":""===t&&""!==r&&""===n?"Please input your current grade and final percentage.":""!==t&&""===r&&""===n?"Please input your target goal grade and final percentage":""===t&&""===n&&""===r?"Please input your current grade, target goal grade, and final percentage.":Number(n)>100?"Your final percentage can't be more than 100%":""}},{key:"calculatorStringBuilder",value:function(e){var t="";t+=Number(e)<=50?"You only need ":"You will nead at least ",t+=""+(""+e+"% on your final to get a ")+this.state.requiredGrade+"% overall.";var n=Number(e);return n>100&&(t+=" May the force be with you!"),n<=100&&n>=90&&(t+=" You can do it!"),n<90&&n>=70&&(t+=" You got this in the bag!"),n<70&&n>=0&&(t+=" What's the point of studying honestly?"),n<0&&(t+=" Just stay in bed at this point!"),t}},{key:"missingFormElements",value:function(){swal({title:"Ugh oh!",text:this.errorStringBuilder(),confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"})}},{key:"noMissingElements",value:function(){swal({title:"You can do it!",text:this.calculatorStringBuilder(this.calculateGrade()),confirmButtonColor:"#009688",animation:"slide-from-top"})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{style:{marginTop:10}},s.default.createElement("h2",{className:"text-center",style:{marginTop:25,marginBottom:15,fontSize:"5vw 5h",color:"#2e2d2d"}},"Final Grade Calculator"),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:10}},s.default.createElement("label",{htmlFor:"currentGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",paddingLeft:0,fontSize:"1.3vw 2vh",lineHeight:"2.2vh",paddingTop:".8vh"}},"Your current grade:"),s.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},s.default.createElement("input",{className:"form-control",type:"number",value:this.state.currentGrade,onChange:function(t){return e.onInputChange(t,"currentGrade")},placeholder:"90",id:"currentGrade"})),s.default.createElement("label",{className:"col-md-2",htmlFor:"currentGrade",style:{paddingTop:"10px",paddingLeft:8}},"%.")),s.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:10}},s.default.createElement("label",{htmlFor:"requiredGrade",className:"col-xs-5 col-form-label semi-bold",style:{paddingRight:".8vw",textAlign:"right",fontSize:14,paddingLeft:0,paddingTop:".8vh"}},"You want a:"),s.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},s.default.createElement("input",{className:"form-control",type:"number",value:this.state.requiredGrade,onChange:function(t){return e.onInputChange(t,"requiredGrade")},placeholder:"90",id:"requiredGrade"})),s.default.createElement("label",{htmlFor:"requiredGrade",style:{paddingTop:"10px",paddingLeft:8}},"% in the class.")),s.default.createElement("div",{className:"row form-group has-success is-empty",style:{margin:"10px"}},s.default.createElement("label",{htmlFor:"final",className:"col-xs-5 col-form-label semi-bold text-left",style:{paddingRight:".8vw",textAlign:"right",fontSize:14,paddingLeft:0,paddingTop:".8vh"}},"Final's worth:"),s.default.createElement("div",{className:"col-xs-2",style:{paddingLeft:0,paddingRight:0}},s.default.createElement("input",{className:"form-control",type:"number",value:this.state.finalWeight,onChange:function(t){return e.onInputChange(t,"finalWeight")},placeholder:"10",id:"final"})),s.default.createElement("label",{htmlFor:"final",style:{paddingTop:"10px",paddingLeft:4}},"% of your grade.")),s.default.createElement("div",{className:"row",style:{marginLeft:"4%",marginRight:"4%",textAlign:"center"}},s.default.createElement("a",{className:"btn btn-primary col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3",onClick:this.onCalculate,style:{backgroundColor:"#009688"}},"Calculate",s.default.createElement("span",{className:"glyphicon glyphicon-heart",style:{paddingLeft:2}})))))}}]),t}(s.default.Component);t.default=(0,f.connect)(g,h)(y)}});
//# sourceMappingURL=1.bundle.js.map