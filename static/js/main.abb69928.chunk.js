(this.webpackJsonpcalculatorfcc=this.webpackJsonpcalculatorfcc||[]).push([[0],{328:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a.n(n),i=a(82),c=a.n(i),o=(a(91),a(35)),r=a(330),u=(a(92),{background:"#023047"}),s={background:"#E63946"},m={background:"#A8DADC",position:"absolute",height:130,bottom:5},d=function(e){var t=e.initialize,a=e.operators,n=e.evaluate,i=e.addToInput;return l.a.createElement("div",null,l.a.createElement("button",{className:"jumbo",id:"clear",onClick:t,style:s,value:"AC"},"AC"),l.a.createElement("button",{id:"divide",onClick:a,style:u,value:"/"},"/"),l.a.createElement("button",{id:"multiply",onClick:a,style:u,value:"x"},"x"),l.a.createElement("button",{id:"seven",onClick:i,value:"7"},"7"),l.a.createElement("button",{id:"eight",onClick:i,value:"8"},"8"),l.a.createElement("button",{id:"nine",onClick:i,value:"9"},"9"),l.a.createElement("button",{id:"subtract",onClick:a,style:u,value:"-"},"-"),l.a.createElement("button",{id:"four",onClick:i,value:"4"},"4"),l.a.createElement("button",{id:"five",onClick:i,value:"5"},"5"),l.a.createElement("button",{id:"six",onClick:i,value:"6"},"6"),l.a.createElement("button",{id:"add",onClick:a,style:u,className:"operators",value:"+"},"+"),l.a.createElement("button",{id:"one",onClick:i,value:"1"},"1"),l.a.createElement("button",{id:"two",onClick:i,value:"2"},"2"),l.a.createElement("button",{id:"three",onClick:i,value:"3"},"3"),l.a.createElement("button",{className:"jumbo",id:"zero",onClick:i,value:"0"},"0"),l.a.createElement("button",{id:"decimal",onClick:i,value:"."},"."),l.a.createElement("button",{id:"equals",onClick:n,style:m,value:"="},"="))},v=function(e){var t=e.currentVal;return l.a.createElement("div",{className:"outputScreen",id:"display"},t)},b=function(e){var t=e.formula;return l.a.createElement("div",{className:"formulaScreen"},t)},f=a(83),E=a.n(f),p=/[*+-/]$/;var k=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("0"),u=Object(o.a)(c,2),s=u[0],m=u[1],f=Object(n.useState)(!1),k=Object(o.a)(f,2),h=k[0],g=k[1],C=function(){i(""),m("0"),g(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App",id:"app"},l.a.createElement(E.a,{params:{particles:{number:{value:100},size:{value:3},move:{speed:1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),l.a.createElement("div",{id:"calculator",className:"calculator"},l.a.createElement(b,{formula:a}),l.a.createElement(v,{currentVal:s}),l.a.createElement(d,{addToInput:function(e){if("Digit Limit Met"!==s){var t=e.target.value;s.length>21?function(){var e=s;m("Digit Limit Met"),console.log(e),setTimeout((function(){return m(e)}),1e3)}():"0"===t&&""===a?m("0"):h?(C(),i(t),m(t)):(i(a+t),m(a+t))}},operators:function(e){var t=e.target.value;if("Digit Limit Met"!==s&&("-"===t&&(h?(i(s+t),m(t),g(!1)):a.endsWith("-")?i(a):(i(a+t),m(t))),!p.test(a)&&""!==a))if("x"===t)h?(i(s+t.replace("x","*")),g(!1)):(i(a+t.replace("x","*")),m(t));else if("+"!==t&&"/"!==t||a.endsWith("-")){if(a.endsWith("-"))if(h)i(s+t),m(t),g(!1);else{var n=a.slice(0,-1);i(n+t),m(t)}}else h?(i(s+t),m(t),g(!1)):(i(a+t),m(t))},evaluate:function(){if("Digit Limit Met"!==s){var e=a;if(""!==a&&!1===h){for(;p.test(e);)e=e.slice(0,-1);if("-"===a)return;var t=r.a(e);m(t),i(e+"="+t),g(!0)}}},initialize:C})),l.a.createElement("p",{className:"footer"},"dev by -"," ",l.a.createElement("a",{target:"blank",href:"https://fb.me/mi5ke"},"Mikael G")),l.a.createElement("p",{className:"footer",id:"bot"},l.a.createElement("a",{target:"blank",href:"https://github.com/GoglichidzeMike/Calculator"},"this project on Git"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(328)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.abb69928.chunk.js.map