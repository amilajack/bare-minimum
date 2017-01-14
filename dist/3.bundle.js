webpackJsonp([3],{84:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var a=this;"pastGpa"===t&&Number(e.target.value)>4?swal({title:"Impossible!",text:"You can't have a gpa higher than a 4.0!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"}):"pastGpa"===t&&Number(e.target.value)<0?swal({title:"Impossible!",text:"You can't have a gpa lower than a 0!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"}):"pastUnits"===t&&Number(e.target.value)<0&&swal({title:"Oh dear!",text:"You can't have negative units!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"}),this.setState(r({},t,e.target.value),function(){return a.calculate()})}function u(e,t,a,n){var r=this,o=this.state.courses,s=o[e];o[e]={course:t,grade:a,units:n},s&&s.course!==t?this.setState({courses:o}):this.setState({courses:o},function(){return r.calculate()})}function c(){for(var e=this.state,t=e.courses,a=e.pastGpa,n=e.pastUnits,r=Object.keys(t),o=0,s=0,l=0;l<r.length;l+=1){var i=r[l],u=t[i],c=u.grade,d=u.units,f=u.course,p=this.gradeToNumber(c);if("number"==typeof p&&c&&d)o+=p*Number(d),s+=Number(d);else if("number"!=typeof p&&c&&d)return void swal({title:"Oops!",text:f?"Your grade for "+f+" doesn't look right!":"One of your grades doesn't look right!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"})}isNaN(Number(a))||isNaN(Number(n))||(o+=Number(a)*n,s+=Number(n));var m=o/s*1e3%10>=5,h=m?Math.ceil(o/s*100)/100:Math.floor(o/s*100)/100;if(!isNaN(h))if(10*h%10!==0){var g=h.toFixed(2);this.setState({gpa:g})}else{var y=h.toFixed(1);this.setState({gpa:y})}}function d(e){var t=e.toUpperCase();switch(t){case"A+":return 4;case"A":return 4;case"A-":return 3.7;case"B+":return 3.3;case"B":return 3;case"B-":return 2.7;case"C+":return 2.3;case"C":return 2;case"C-":return 1.7;case"D+":return 1.3;case"D":return 1;case"D-":return 0;case"F+":return 0;case"F":return 0;case"F-":return 0;default:return e}}function f(){var e=this.state.inputCount;this.setState({inputCount:e+1})}function p(){var e=this.state.gpa;e?swal({title:"Nice!",text:this.gpaStringBuilder(e),confirmButtonColor:"#009688",animation:"slide-from-top"}):swal({title:"Ugh oh!",text:"It appears you haven't added any classes!",confirmButtonColor:"#009688",animation:"slide-from-top",type:"warning"})}function m(e){var t=Number(e);return t>=4?"Damn you're rocking a "+e:t<4&&t>=3.8?"Good job you have a solid "+e:t<3.8&&t>=3?"Awesome you got a "+e:t<3&&t>=2.5?"Not bad, you're getting a "+e:t<2.5?"You have a "+e:void 0}function h(){for(var e=this,t=this.state.inputCount,a=[],n=0;n<t;n+=1)a.push(b.default.createElement(C.default,{inputCount:n,stateToParent:this.stateFromChild}));return b.default.createElement("div",{className:"container col-md-12",style:{marginTop:"13vh",paddingLeft:"2%",paddingRight:"2%",marginBottom:10}},b.default.createElement("div",{className:"well infobox col-md-6 col-md-offset-3"},b.default.createElement("h3",{className:"text-center",style:{marginTop:25,marginBottom:15,fontSize:"5vw 5h",color:"#2e2d2d"}},"GPA Calculator"),b.default.createElement("div",{className:"row"},b.default.createElement("div",{className:"form-group has-success is-empty col-md-2 col-xs-5 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px"}},b.default.createElement("label",{htmlFor:"pastGPA",className:"form-label",style:{fontWeight:550}},"Past GPA ",b.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),b.default.createElement("input",{type:"number",className:"form-control",id:"pastGPA",autoComplete:"off",placeholder:"3.8",onChange:function(t){return e.onInputChange(t,"pastGpa")},style:{fontSize:"1.2vh"}})),b.default.createElement("div",{className:"form-group has-success is-empty col-md-2 col-xs-5",style:{paddingLeft:"5px",paddingRight:"5px"}},b.default.createElement("label",{htmlFor:"pastUnits",className:"form-label",style:{fontWeight:550}},"Past Units ",b.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),b.default.createElement("input",{type:"number",className:"form-control",id:"pastUnits",autoComplete:"off",placeholder:"60",onChange:function(t){return e.onInputChange(t,"pastUnits")},style:{fontSize:"1.2vh"}}))),a,b.default.createElement("div",{className:"row",style:{paddingTop:"1px"}},b.default.createElement("div",{className:"col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1",style:{padding:0}},b.default.createElement("div",{className:"pull-left col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},b.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.addClass,style:{backgroundColor:"#009688"}},"Add Class")),b.default.createElement("div",{className:"pull-right col-md-6 col-xs-6",style:{paddingLeft:"5px",paddingRight:"5px"}},b.default.createElement("a",{className:"btn btn-primary no-padding col-md-12 col-xs-12",onClick:this.showGpa,style:{backgroundColor:"#009688"}},"Calculate"))))))}Object.defineProperty(t,"__esModule",{value:!0});var g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=a(2),b=n(y),v=a(152),C=n(v),N=function(e){function t(e){o(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={courses:{},pastGpa:"",pastUnits:"",inputCount:4,gpa:""},a.stateFromChild=a.stateFromChild.bind(a),a.addClass=a.addClass.bind(a),a.calculate=a.calculate.bind(a),a.showGpa=a.showGpa.bind(a),a.onInputChange=a.onInputChange.bind(a),a}return l(t,e),g(t,[{key:"onInputChange",value:i},{key:"stateFromChild",value:u},{key:"calculate",value:c},{key:"gradeToNumber",value:d},{key:"addClass",value:f},{key:"showGpa",value:p},{key:"gpaStringBuilder",value:m},{key:"render",value:h}]),t}(b.default.Component);t.default=N},152:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){this.setState({randGrade:this.createRandGrades()})}function u(e,t){var a=this;this.setState(r({},t,e.target.value),function(){return a.setInParent()})}function c(){var e=this.state,t=e.course,a=e.grade,n=e.units;this.props.stateToParent(this.createId(),t,a,n)}function d(){var e=this.props.inputCount;return"courseGpa"+e}function f(){var e=Math.floor(6*Math.random()+1);switch(e){case 1:return"A+";case 2:return"A";case 3:return"A-";case 4:return"B+";case 5:return"B";default:return"A-"}}function p(e){var t=this.state.randGrade,a=[{name:"Math 133A",grade:t,units:"3"},{name:"Astro 10",grade:t,units:"2"},{name:"Phys 50",grade:t,units:"4"},{name:"Math 129A",grade:t,units:"3"},{name:"Math 42",grade:t,units:"3"},{name:"CS 46B",grade:t,units:"4"},{name:"Engl 1B",grade:t,units:"2"},{name:"Kin 08",grade:t,units:"2"}];return e<a.length?a[e]:{name:"Classy McClassFace",grade:"A++",units:"4.20"}}function m(){var e=this,t=this.props.inputCount,a=this.renderCourses(t);return y.default.createElement("div",{className:"row"},y.default.createElement("div",{className:"form-group has-success is-empty col-md-4 col-xs-4 col-xs-offset-1",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("label",{htmlFor:t+"grade",className:"form-label",style:{fontWeight:550}},"Class ",y.default.createElement("span",{className:"semi-bold",style:{color:"#99999c",fontSize:"1.3vh",fontWeight:500}},"(optional)")),y.default.createElement("input",{type:"text",className:"form-control",id:t+"grade",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"course")},placeholder:a.name,style:{fontSize:"1.2vh"}})),y.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("label",{htmlFor:t+"grade",className:"form-label",style:{fontWeight:550}},"Grade"),y.default.createElement("input",{maxLength:"2",type:"text",className:"form-control",id:t+"grade",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"grade")},placeholder:a.grade,style:{fontSize:"1.2vh"}})),y.default.createElement("div",{className:"form-group has-success is-empty col-md-3 col-xs-3",style:{paddingLeft:"5px",paddingRight:"5px"}},y.default.createElement("label",{htmlFor:t+"grade",className:"form-label",style:{fontWeight:550}},"Units"),y.default.createElement("input",{type:"number",maxLength:"1",className:"form-control",id:t+"grade",autoComplete:"off",onChange:function(t){return e.onInputChange(t,"units")},placeholder:a.units,style:{fontSize:"1.2vh"}})))}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),g=a(2),y=n(g),b=function(e){function t(e){o(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={course:"",grade:"",units:"",randGrade:""},a.onInputChange=a.onInputChange.bind(a),a.setInParent=a.setInParent.bind(a),a}return l(t,e),h(t,[{key:"componentWillMount",value:i},{key:"onInputChange",value:u},{key:"setInParent",value:c},{key:"createId",value:d},{key:"createRandGrades",value:f},{key:"renderCourses",value:p},{key:"render",value:m}]),t}(y.default.Component);t.default=b,b.propTypes={inputCount:y.default.PropTypes.number,stateToParent:y.default.PropTypes.func}}});
//# sourceMappingURL=3.bundle.js.map