(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"],{"098b":function(e,t,n){"use strict";n.r(t);var i=n("978a"),r=n("ae0d");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("e017");var s,o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=u.exports},"5b1b":function(e,t,n){},"978a":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i})},ae0d:function(e,t,n){"use strict";n.r(t);var i=n("c255"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=r.a},c255:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,a,s,o=500,u=0,f={props:{top:{type:Number,default:0}},data:function(){return{pageDeviation:0,pageTransition:0,refreshReady:!1,refreshing:!1}},computed:{pageTop:function(){return e.upx2px(this.top)}},created:function(){e.getSystemInfo({success:function(e){console.log(n(e," at components\\mix-pulldown-refresh\\mix-pulldown-refresh.vue:74")),a=e.platform,o=e.windowHeight}})},methods:{pageTouchstart:function(e){s=!1,this.pageTransition=0,i=e.touches[0].pageY},pageTouchmove:function(e){s||(r=.4*(e.touches[0].pageY-i),r>=0&&(this.pageDeviation=r,this.$emit("setEnableScroll",!1)),r>=50&&!1===this.refreshReady?this.refreshReady=!0:r<50&&!0===this.refreshReady&&(this.refreshReady=!1),"ios"===a&&e.touches[0].pageY>o+10&&this.pageTouchend())},pageTouchend:function(){s=!0,0!==r&&(this.pageTransition=.3,r>=50?this.startPulldownRefresh():this.pageDeviation=0,!0===this.refreshReady&&(this.refreshReady=!1),this.$emit("setEnableScroll",!0),i=r=0)},startPulldownRefresh:function(){+new Date-u<100||(u=+new Date,this.refreshing=!0,this.pageDeviation=e.upx2px(90),this.$emit("refresh"))},endPulldownRefresh:function(){this.refreshing=!1,this.pageDeviation=e.upx2px(0)}}};t.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},e017:function(e,t,n){"use strict";var i=n("5b1b"),r=n.n(i);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component',
    {
        'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("098b"))
        })
    },
    [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]
]);
