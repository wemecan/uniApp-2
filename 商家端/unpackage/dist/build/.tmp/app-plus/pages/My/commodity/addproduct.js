(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/commodity/addproduct"],{"09e7":function(t,n,e){"use strict";var o=e("de45"),a=e.n(o);a.a},3757:function(t,n,e){"use strict";(function(t){e("431f"),e("921b");o(e("66fd"));var n=o(e("ac48"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ac48:function(t,n,e){"use strict";e.r(n);var o=e("cdf2"),a=e("c941");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("09e7");var i,u=e("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports},c941:function(t,n,e){"use strict";e.r(n);var o=e("e6c3"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},cdf2:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o})},de45:function(t,n,e){},e6c3:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{Te:"",text:"",TheStyle:{background:"",color:"",font:""},Img:!1,image:"",ime:"请选择",Brand:"农夫山泉"}},onLoad:function(t){this.Te="Te",this.ime=t.name,this.Brand=t.nane,this.drawPic()},methods:{shuaxin:function(){t.redirectTo({url:"/pages/My/commodity/addproduct"})},randomNum:function(t,n){return Math.floor(Math.random()*(n-t)+t)},randomColor:function(t,n){var e=this.randomNum(t,n),o=this.randomNum(t,n),a=this.randomNum(t,n);return"rgba("+e+","+o+","+a+")"},drawPic:function(){this.TheStyle.background=this.randomColor(180,240);for(var t="ABCEFGHJKLMNPQRSTWXY123456789",n=0;n<4;n++){var e=t[this.randomNum(0,t.length)];this.TheStyle.color=this.randomColor(50,160),this.TheStyle.font=this.randomNum(20,26)+"px SimHei";this.randomNum(20,25),this.randomNum(-20,20);this.text+=e}},Chart:function(){var n=this;t.chooseImage({count:1,sizeType:"original",success:function(t){n.image=t.tempFilePaths,n.Img=!0}})},brand:function(){t.navigateTo({url:"/pages/My/commodity/brand"})},Model:function(){t.navigateTo({url:"/pages/My/commodity/Model"})}}};n.default=e}).call(this,e("6e42")["default"])}},[["3757","common/runtime","common/vendor"]]]);