(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,function(t,r,n){"use strict";n.r(r),n.d(r,"data",(function(){return a})),n.d(r,"name",(function(){return u})),n.d(r,"part1",(function(){return i})),n.d(r,"part2",(function(){return c}));var e=n(14),a=n(28),u="Fuel",i=function(t){return e.part1(t)},c=function(t){return e.part2(t)}},function(t,r,n){"use strict";n.r(r),n.d(r,"part1",(function(){return e})),n.d(r,"part2",(function(){return a})),n.d(r,"data",(function(){return u})),n.d(r,"name",(function(){return i}));var e=n(15),a=n(16),u=n(29),i="IntCode"},function(t,r){t.exports=function(t){for(var r=0;;){var e=t[r];if(99===e)return t;var a=n[e];if(!a)return;r=a(t,r)}};var n={1:function(t,r){var n=t[++r],e=t[++r];return t[t[++r]]=t[n]+t[e],r+1},2:function(t,r){var n=t[++r],e=t[++r];return t[t[++r]]=t[n]*t[e],r+1}}},function(t,r,n){"use strict";n.r(r),n.d(r,"part1",(function(){return e})),n.d(r,"part2",(function(){return a})),n.d(r,"data",(function(){return u})),n.d(r,"name",(function(){return i}));var e=n(18),a=n(19),u=n(33),i="Line Crossing"},function(t,r,n){"use strict";n.r(r),n.d(r,"part1",(function(){return e})),n.d(r,"part2",(function(){return a})),n.d(r,"data",(function(){return u})),n.d(r,"name",(function(){return i}));var e=n(20),a=n(21),u=n(34),i="Passwords"},function(t,r,n){"use strict";n.r(r),n.d(r,"part1",(function(){return e})),n.d(r,"part2",(function(){return a})),n.d(r,"data",(function(){return u})),n.d(r,"name",(function(){return i}));var e=n(22),a=n(23),u=n(35),i="IntCode2"},function(t,r){t.exports=function(t,r){for(var n=[],a=0;;){var u=t[a];if("99"===u)return n;var i=e(String(u));if(!i.command)return;a=i.command(t,r,n,i.paramModes,a)}};var n={1:function(t,r,n,e,a){var u=Number(t[++a]),i=Number(t[++a]),c=Number(t[++a]),o=0===e[0]?Number(t[u]):u,f=0===e[1]?Number(t[i]):i;return t[c]=Number(o)+Number(f),a+1},2:function(t,r,n,e,a){var u=Number(t[++a]),i=Number(t[++a]),c=Number(t[++a]),o=0===e[0]?Number(t[u]):u,f=0===e[1]?Number(t[i]):i;return t[c]=Number(o)*Number(f),a+1},3:function(t,r,n,e,a){var u=Number(t[++a]),i=r.pop();return t[u]=i,a+1},4:function(t,r,n,e,a){var u=Number(t[++a]),i=0===e[0]?t[u]:u;return n.push(i),a+1},5:function(t,r,n,e,a){var u=Number(t[++a]);if(0===e[0]?0!==Number(t[u]):0!==u){var i=Number(t[++a]);return 0===e[1]?Number(t[i]):i}return a+2},6:function(t,r,n,e,a){var u=Number(t[++a]);if(0===e[0]?0===Number(t[u]):0===u){var i=Number(t[++a]);return 0===e[1]?Number(t[i]):i}return a+2},7:function(t,r,n,e,a){var u=Number(t[++a]),i=Number(t[++a]),c=(0===e[0]?Number(t[u]):u)<(0===e[1]?Number(t[i]):i)?1:0;return t[Number(t[++a])]=c,a+1},8:function(t,r,n,e,a){var u=Number(t[++a]),i=Number(t[++a]),c=(0===e[0]?Number(t[u]):u)===(0===e[1]?Number(t[i]):i)?1:0;return t[Number(t[++a])]=c,a+1}},e=function(t){var r=t.slice(-2),e=0,a=0,u=0;return t.length>2&&(e=Number(t.slice(-3,-2))),t.length>3&&(a=Number(t.slice(-4,-3))),t.length>4&&(u=Number(t.slice(-5,-4))),{command:n[Number(r)],paramModes:[e,a,u]}}},,,function(t,r){t.exports={part1:function(t){return t.split("\n").filter((function(t){return t})).reduce((function(t,r){return t+n(Number(r))}),0)},part2:function(t){return t.split("\n").filter((function(t){return t})).reduce((function(t,r){return t+e(Number(r))}),0)}};var n=function(t){return Math.floor(t/3)-2},e=function(t){for(var r=n(t),e=0;r>0;){var a=Math.floor(r/3)-2;r=a,a>0&&(e+=r)}return n(t)+e}},function(t,r,n){var e=n(7);t.exports=function(t){var r=t.split(",").map((function(t){return Number(t)}));return r[1]=12,r[2]=2,e(r)[0]}},function(t,r,n){var e=n(17),a=n(7);t.exports=function(t){for(var r=t.split(",").map((function(t){return Number(t)})),n=0;n<100;n++)for(var u=0;u<100;u++){var i=r.slice(0);i[1]=n,i[2]=u;var c=a(i);if(19690720===e(c,1)[0])return"i: ".concat(n,", j: ").concat(u)}}},,function(t,r,n){var e=n(30),a=n(31),u=(n(32),function(){"use strict";function t(r,n){e(this,t),this.x=r,this.y=n}return a(t,[{key:"right",value:function(t){return this.x+=t,this}},{key:"left",value:function(t){return this.x-=t,this}},{key:"up",value:function(t){return this.y+=t,this}},{key:"down",value:function(t){return this.y-=t,this}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}()),i={},c=[];t.exports=function(t){var r;return t.split("\n").filter((function(t){return t})).forEach((function(t,r){var n=new u(0,0);t.split(",").forEach((function(t){for(var e=t.substring(0,1),a=Number(t.substring(1)),u=0;u<a;u++){switch(e){case"R":n.right(1);break;case"L":n.left(1);break;case"U":n.up(1);break;case"D":n.down(1)}var o=n.toString();i[o]=i[o]||[],i[o].push(r),i[o].includes(0)&&i[o].includes(1)&&c.push(o)}}))})),c.forEach((function(t){var n=function(t){return t.split(",").reduce((function(t,r){return t+Math.abs(1*Number(r))}),0)}(t);r?n<r&&(r=n):r=n})),r}},function(t,r,n){var e=n(30),a=n(31),u=(n(32),function(){"use strict";function t(r,n){e(this,t),this.x=r,this.y=n}return a(t,[{key:"right",value:function(t){return this.x+=t,this}},{key:"left",value:function(t){return this.x-=t,this}},{key:"up",value:function(t){return this.y+=t,this}},{key:"down",value:function(t){return this.y-=t,this}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y)}}]),t}()),i={},c=[];t.exports=function(t){var r;return t.split("\n").filter((function(t){return t})).forEach((function(t,r){var n=new u(0,0),e=0;t.split(",").forEach((function(t){for(var a=t.substring(0,1),u=Number(t.substring(1)),o=0;o<u;o++){switch(e++,a){case"R":n.right(1);break;case"L":n.left(1);break;case"U":n.up(1);break;case"D":n.down(1)}var f=n.toString();i[f]=i[f]||[],i[f][r]=i[f][r]||e,i[f][0]&&i[f][1]&&c.push(i[f][0]+i[f][1])}}))})),c.forEach((function(t){r?t<r&&(r=t):r=t})),r}},function(t,r,n){var e=n(17);t.exports=function(t){return a(t).filter(u).length};var a=function(t){for(var r=t.split("-"),n=e(r,2),a=n[0],u=n[1],i=[],c=a;c<=u;c++)i.push(String(c));return i},u=function(t){return i(t)&&c(t)&&o(t)},i=function(t){return 6===t.length&&Number.isInteger(Number(t))},c=function(t){for(var r=0;r<t.length-1;r++)if(t[r]===t[r+1])return!0;return!1},o=function(t){for(var r=0;r<t.length-1;r++)if(t[r]>t[r+1])return!1;return!0}},function(t,r,n){var e=n(17);t.exports=function(t){return a(t).filter(u).length};var a=function(t){for(var r=t.split("-"),n=e(r,2),a=n[0],u=n[1],i=[],c=a;c<=u;c++)i.push(String(c));return i},u=function(t){return i(t)&&c(t)&&o(t)},i=function(t){return 6===t.length&&Number.isInteger(Number(t))},c=function(t){for(var r=0;r<t.length-1;r++)if(t[r]===t[r+1]&&t[r]!==t[r+2]&&(0===r||t[r]!==t[r-1]))return!0;return!1},o=function(t){for(var r=0;r<t.length-1;r++)if(t[r]>t[r+1])return!1;return!0}},function(t,r,n){var e=n(11);t.exports=function(t){var r=t.split(",");return e(r,[1]).pop()}},function(t,r,n){var e=n(11);t.exports=function(t){var r=t.split(",");return e(r,[5])}},,,,,function(t,r,n){t.exports=n.p+"static/media/data.6a51b99e.txt"},function(t,r,n){t.exports=n.p+"static/media/data.94724336.txt"},,,,function(t,r,n){t.exports=n.p+"static/media/data.fe215d0a.txt"},function(t,r,n){t.exports=n.p+"static/media/data.25cf68ee.txt"},function(t,r,n){t.exports=n.p+"static/media/data.9fc5e460.txt"},,,,,,,function(t,r,n){t.exports=n(62)},,,,,function(t,r,n){},,function(t,r,n){},,,,,,,,,function(t,r,n){var e={"./day1":5,"./day1/":5,"./day1/data.txt":28,"./day1/fuel":14,"./day1/fuel.js":14,"./day1/index":5,"./day1/index.js":5,"./day2":6,"./day2/":6,"./day2/data.txt":29,"./day2/index":6,"./day2/index.js":6,"./day2/intCode":7,"./day2/intCode.js":7,"./day2/part1":15,"./day2/part1.js":15,"./day2/part2":16,"./day2/part2.js":16,"./day3":8,"./day3/":8,"./day3/data.txt":33,"./day3/index":8,"./day3/index.js":8,"./day3/part1":18,"./day3/part1.js":18,"./day3/part2":19,"./day3/part2.js":19,"./day4":9,"./day4/":9,"./day4/data.txt":34,"./day4/index":9,"./day4/index.js":9,"./day4/part1":20,"./day4/part1.js":20,"./day4/part2":21,"./day4/part2.js":21,"./day5":10,"./day5/":10,"./day5/data.txt":35,"./day5/index":10,"./day5/index.js":10,"./day5/intCode":11,"./day5/intCode.js":11,"./day5/part1":22,"./day5/part1.js":22,"./day5/part2":23,"./day5/part2.js":23};function a(t){var r=u(t);return n(r)}function u(t){if(!n.o(e,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=u,t.exports=a,a.id=58},,,,function(t,r,n){"use strict";n.r(r);var e=n(0),a=n.n(e),u=n(36),i=n.n(u),c=(n(47),n(24)),o=n.n(c),f=n(37),s=n(40),d=n(41),p=n(12),l=n(3);n(49);function m(){return a.a.createElement("div",null,Object(d.a)(Array(24).keys()).map((function(t){return a.a.createElement("p",{key:t},a.a.createElement(p.b,{to:"/day/".concat(t+1)},"Day ",t+1))})))}function v(){var t,r=Object(l.f)().dayNumber;try{t=n(58)("./day".concat(r))}catch(e){}return a.a.createElement("div",{className:"day-wrapper"},t?a.a.createElement("h2",null,"Day: ",r," (",t.name,") - ",a.a.createElement("a",{href:"https://github.com/McInkay/adventofcode2019/tree/master/day".concat(r)},"source")):a.a.createElement("h2",null,"Day ",r," not implemented yet"),t&&a.a.createElement(y,{day:t}))}function y(t){var r=t.day,n=Object(e.useState)(""),u=Object(s.a)(n,2),i=u[0],c=u[1];return Object(e.useEffect)((function(){function t(){return(t=Object(f.a)(o.a.mark((function t(){var n,e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(r.data);case 2:return n=t.sent,console.log(n),t.next=6,n.text();case 6:e=t.sent,c(e);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[r.data]),a.a.createElement("div",{className:"day"},a.a.createElement("textarea",{className:"data-input",placeholder:"Loading Data...",value:i,onChange:function(t){var r=t.target.value;return c(r)}}),a.a.createElement("div",{className:"output-1"},"Part 1: ",i?r.part1(i):"Missing input data"),a.a.createElement("div",{className:"output-2"},"Part 2: ",i?r.part2?r.part2(i):"No part 2 code":"Missing input data"))}i.a.render(a.a.createElement((function(){return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("p",null," ",a.a.createElement(p.b,{to:"/"},"Al's Advent of Code ")," ")),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/day/:dayNumber"},a.a.createElement(v,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(m,null)))))}),null),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.3797f29b.chunk.js.map