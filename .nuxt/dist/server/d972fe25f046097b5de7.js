exports.ids=[3],exports.modules={29:function(t,e,o){"use strict";o.r(e);var l=o(2),r=o.n(l),d={head(){return{title:this.photoDetail.alt_description||"Wallpaper"}},asyncData:async t=>({photoDetail:(await r()({method:"get",url:"https://api.unsplash.com/photos/"+t.params.id+"/?client_id=2167f5134f20935d08854393daff02cb5f161faac45310bf90bf49bd820740c7"}).catch(t=>{})).data}),mounted(){console.log(this.photoDetail.urls.raw)}},c=o(1),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._ssrNode('<div class="content">',"</div>",[t._ssrNode('<div class="middle">',"</div>",[t._ssrNode('<div class="photoDetail">',"</div>",[t._ssrNode('<div class="description"><span class="text">'+t._ssrEscape(t._s(t.photoDetail.alt_description))+"</span> <a"+t._ssrAttr("href",t.photoDetail.urls.raw)+' download class="download">Download Photo</a></div> <img'+t._ssrAttr("title",t.photoDetail.description)+t._ssrAttr("src",t.photoDetail.urls.regular)+' class="img"> <div class="description2">'+t._ssrEscape(t._s(t.photoDetail.description))+'</div> <div class="tagsHead">Tags : </div> '),t._ssrNode('<ul class="tagsWrap">',"</ul>",t._l(t.photoDetail.tags,(function(e,l){return t._ssrNode("<li>","</li>",[o("nuxt-link",{staticClass:"tags",attrs:{to:{name:"categories-category",params:{category:e.title}}}},[t._v(t._s(e.title)+"\n            ")])],1)})),0)],2)])])])}),[],!1,null,null,"172ae2da");e.default=component.exports}};