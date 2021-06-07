(function(t){function e(e){for(var c,d,r=e[0],a=e[1],s=e[2],u=0,b=[];u<r.length;u++)d=r[u],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&b.push(n[d][0]),n[d]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);l&&l(e);while(b.length)b.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],c=!0,r=1;r<o.length;r++){var a=o[r];0!==n[a]&&(c=!1)}c&&(i.splice(e--,1),t=d(d.s=o[0]))}return t}var c={},n={app:0},i=[];function d(e){if(c[e])return c[e].exports;var o=c[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=c,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)d.d(o,c,function(e){return t[e]}.bind(null,c));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var l=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"155d":function(t,e,o){},"36ef":function(t,e,o){"use strict";o("f4b2")},"52f1":function(t,e,o){},"55ea":function(t,e,o){"use strict";o("155d")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var c=o("7a23"),n={class:"todo"},i={class:"todo__top-line"},d=Object(c["f"])("div",{class:"todo__logo"},"todo",-1),r={class:"todo__body"},a={class:"todo__content",ref:"content"},s={key:0,class:"todo__start"},l=Object(c["f"])("h1",{class:"todo__header"},"To-Do list is empty",-1),u={"transition-duration":".3s","item-selector":".todo-item",gutter:"10"};function b(t,e,o,b,f,O){var j=Object(c["n"])("TodoEditor"),p=Object(c["n"])("TodoMenu"),h=Object(c["n"])("TodoItem"),g=Object(c["o"])("masonry-tile"),m=Object(c["o"])("masonry");return Object(c["i"])(),Object(c["d"])("div",n,[Object(c["f"])(c["b"],{name:"overlay"},{default:Object(c["s"])((function(){return[t.overlayShow?(Object(c["i"])(),Object(c["d"])("div",{key:0,onClick:e[1]||(e[1]=function(e){return t.overlayShow=!1}),class:"todo__overlay"})):Object(c["e"])("",!0)]})),_:1}),Object(c["f"])(c["b"],{name:"editor"},{default:Object(c["s"])((function(){return[t.overlayShow?(Object(c["i"])(),Object(c["d"])(j,{key:0,onCancel:e[2]||(e[2]=function(e){return t.overlayShow=!1}),itemId:t.created},null,8,["itemId"])):Object(c["e"])("",!0)]})),_:1}),Object(c["f"])("div",i,[d,Object(c["f"])("button",{onClick:e[3]||(e[3]=function(t){return O.callEditor(!1)}),class:"todo__add-btn"})]),Object(c["f"])("div",r,[Object(c["f"])(p),Object(c["f"])("div",a,[t.isTodo?Object(c["e"])("",!0):(Object(c["i"])(),Object(c["d"])("div",s,[l,Object(c["f"])("button",{onClick:e[4]||(e[4]=function(t){return O.callEditor(!1)}),class:"todo__created hover-shadow"}," Create First To-Do ")])),Object(c["t"])(Object(c["f"])("div",u,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["m"])(t.todos,(function(t){return Object(c["t"])((Object(c["i"])(),Object(c["d"])(h,{onEdit:O.callEditor,key:t.created,todo:t},null,8,["onEdit","todo"])),[[g]])})),128))],512),[[m]])],512)])])}var f=o("5530"),O=Object(c["v"])("data-v-f15fd6a4");Object(c["k"])("data-v-f15fd6a4");var j={class:"todo__menu"},p={class:"todo__tags"};Object(c["j"])();var h=O((function(t,e,o,n,i,d){var r=Object(c["n"])("TodoTag"),a=Object(c["n"])("TodoCheck");return Object(c["i"])(),Object(c["d"])("div",j,[Object(c["f"])("ul",p,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["m"])(t.tags,(function(t,e){return Object(c["i"])(),Object(c["d"])(r,{key:t.created,id:e,bg:t.bg,title:t.title,onSelect:d.select},null,8,["id","bg","title","onSelect"])})),128))]),Object(c["f"])(a,{onChange:t.hideDoneTasks,onClick:e[1]||(e[1]=function(e){return t.checked=!t.checked}),check:t.checked,label:"Hide Done Tasks"},null,8,["onChange","check"])])})),g=Object(c["f"])("div",{class:"todo__checkbox"},[Object(c["f"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[Object(c["f"])("path",{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})])],-1),m={class:"todo__checkbox-label"};function v(t,e,o,n,i,d){return Object(c["i"])(),Object(c["d"])("div",{class:["todo__checkbox-wrap",{"todo__checkbox-checked":o.check}],onClick:e[1]||(e[1]=function(){return d.handler&&d.handler.apply(d,arguments)})},[g,Object(c["f"])("div",m,Object(c["p"])(o.label),1)],2)}var _={props:{label:{type:String,required:!0},check:{type:Boolean,required:!1}},data:function(){return{checked:!1}},methods:{handler:function(){this.checked=!this.checked,this.$emit("change",this.checked)}}};o("36ef");_.render=v;var T=_,k=Object(c["v"])("data-v-65da8066");Object(c["k"])("data-v-65da8066");var y={class:"tag__title"};Object(c["j"])();var x=k((function(t,e,o,n,i,d){return Object(c["i"])(),Object(c["d"])("li",{class:["todo__tag tag",{tag__selected:t.selected}],onClick:e[1]||(e[1]=function(){return d.handler&&d.handler.apply(d,arguments)})},[Object(c["f"])("span",{style:d.background,class:"tag__bg"},null,4),Object(c["f"])("span",y,Object(c["p"])(o.title),1)],2)})),w=(o("a9e3"),{props:{id:{type:Number,required:!0},bg:{type:String,required:!0},title:{type:String,required:!0},tags:{type:Array,required:!1}},data:function(){return{selected:!1}},methods:{handler:function(){this.selected=!this.selected,this.$emit("select",{selected:this.selected,id:this.id})}},computed:{background:function(){return"background-color: ".concat(this.bg)}},mounted:function(){this.tags&&-1!==this.tags.indexOf(this.id)&&(this.selected=!0)}});o("55ea");w.render=x,w.__scopeId="data-v-65da8066";var D=w,S=o("5502"),C={name:"Todo",components:{TodoCheck:T,TodoTag:D},data:function(){return{idList:[],checked:!1}},methods:Object(f["a"])(Object(f["a"])({},Object(S["b"])(["toggleFilter","hideDoneTasks"])),{},{select:function(t){var e=t.id;this.toggleFilter(e)}}),computed:Object(f["a"])({},Object(S["c"])(["tags"]))};o("893b");C.render=h,C.__scopeId="data-v-f15fd6a4";var E=C,F=(o("a4d3"),o("e01a"),Object(c["v"])("data-v-75cc0f85"));Object(c["k"])("data-v-75cc0f85");var L={class:"todo__editor"},I={class:"todo__buttons-panel"},q={class:"todo__title-panel"},$={class:"todo__label"},M=Object(c["f"])("div",{class:"todo__title"},"Title",-1),P={class:"todo__count"},B={class:"todo__content-panel"},A={class:"todo__label"},J=Object(c["f"])("div",{class:"todo__title"},"Description",-1),N={class:"todo__count"},V={class:"todo__tags-panel"},U=Object(c["f"])("span",{class:"todo__title"},"Tags",-1),z={class:"todo__tags-list"};Object(c["j"])();var H=F((function(t,e,o,n,i,d){var r=Object(c["n"])("TodoTag");return Object(c["i"])(),Object(c["d"])("div",L,[Object(c["f"])("div",I,[Object(c["f"])("button",{onClick:e[1]||(e[1]=function(e){return t.$emit("cancel")}),class:"todo__cancel"},"Cancel"),Object(c["f"])("button",{onClick:e[2]||(e[2]=function(){return d.addTodo&&d.addTodo.apply(d,arguments)}),class:"tobo__add hover-shadow"},Object(c["p"])(t.edit?"Edit":"Add"),1)]),Object(c["f"])("div",q,[Object(c["f"])("label",$,[M,Object(c["t"])(Object(c["f"])("input",{onKeyup:e[3]||(e[3]=Object(c["u"])((function(){return d.focusFromDesc&&d.focusFromDesc.apply(d,arguments)}),["enter"])),maxlength:t.maxTitle,ref:"title","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.title=e}),type:"text",placeholder:"add a title..."},null,40,["maxlength"]),[[c["q"],t.title,void 0,{trim:!0}]])]),Object(c["f"])("div",P,Object(c["p"])(d.maxTitleLen)+"/"+Object(c["p"])(t.maxTitle),1)]),Object(c["f"])("div",B,[Object(c["f"])("label",A,[J,Object(c["t"])(Object(c["f"])("textarea",{ref:"desc","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.description=e}),maxlength:t.maxDescription,placeholder:"add a description..."},null,8,["maxlength"]),[[c["q"],t.description,void 0,{trim:!0}]])]),Object(c["f"])("div",N,Object(c["p"])(d.maxDescriptionLen)+"/"+Object(c["p"])(t.maxDescription),1)]),Object(c["f"])("div",V,[U,Object(c["f"])("ul",z,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["m"])(t.tags,(function(e,o){return Object(c["i"])(),Object(c["d"])(r,{key:e.created,id:o,bg:e.bg,title:e.title,tags:t.tagsList,onSelect:d.select},null,8,["id","bg","title","tags","onSelect"])})),128))])])])})),K=(o("a434"),o("fb6a"),{name:"TodoEditor",components:{TodoTag:D},emits:{cancel:null},props:{itemId:{type:Number}},data:function(){return{title:"",description:"",tagsList:[],maxTitle:100,maxDescription:600,edit:!1,index:0}},methods:Object(f["a"])(Object(f["a"])({},Object(S["b"])(["addStateTodo","editTodo"])),{},{select:function(t){var e=t.id,o=t.selected;o?this.tagsList.push(e):this.tagsList.splice(this.tagsList.indexOf(e),1)},addTodo:function(){(this.title||this.description)&&(this.edit?(this.editTodo({index:this.index,newTodo:{title:this.title,description:this.description,tags:this.tagsList}}),this.edit=!1,this.$nextTick(this.$redrawVueMasonry)):this.addStateTodo({title:this.title,description:this.description,tags:this.tagsList}),this.title=this.description="",this.tagsList=[],this.$emit("cancel"))},focusFromDesc:function(){this.$refs.desc.focus()}}),computed:Object(f["a"])(Object(f["a"])({},Object(S["c"])(["tags","getTodos"])),{},{maxTitleLen:function(){return this.maxTitle-this.title.length},maxDescriptionLen:function(){return this.maxDescription-this.description.length}}),created:function(){var t=this;this.itemId&&(this.edit=!0,this.getTodos.some((function(e,o){e.created===t.itemId&&(t.title=e.title,t.description=e.description,t.tagsList=e.tags.slice(),t.index=o)})))},mounted:function(){var t=this;setTimeout((function(){return t.$refs.title.focus()}),300)}});o("60e2");K.render=H,K.__scopeId="data-v-75cc0f85";var G=K,Q=Object(c["v"])("data-v-331f55b2");Object(c["k"])("data-v-331f55b2");var R={class:"todo-item__top-panel"},W={class:"todo-item__heading"},X={class:"todo-item__mnu-btn"},Y=Object(c["f"])("svg",{viewBox:"0 0 331 93",xmlns:"http://www.w3.org/2000/svg"},[Object(c["f"])("circle",{cx:"46.5",cy:"46.5",r:"46.5"}),Object(c["f"])("circle",{cx:"284.5",cy:"46.5",r:"46.5"}),Object(c["f"])("circle",{cx:"165.5",cy:"46.5",r:"46.5"})],-1),Z={class:"todo-item__mnu"},tt={class:"todo-item__description"},et={class:"todo-item__bottom-panel"},ot={class:"todo-item__tags-list"};Object(c["j"])();var ct=Q((function(t,e,o,n,i,d){var r=Object(c["n"])("TodoCheck");return Object(c["i"])(),Object(c["d"])("div",{class:["todo-item",{"todo-item__done":o.todo.done}]},[Object(c["f"])("div",R,[Object(c["f"])("h2",W,Object(c["p"])(o.todo.title),1),Object(c["f"])("button",X,[Y,Object(c["f"])("div",Z,[Object(c["f"])("ul",null,[Object(c["f"])("li",null,[Object(c["f"])("button",{onClick:e[1]||(e[1]=function(e){return t.$emit("edit",o.todo.created)})},"Edit...")]),Object(c["f"])("li",null,[Object(c["f"])("button",{onClick:e[2]||(e[2]=function(e){return t.deleteTodo(o.todo.created)})},"Delete")])])])])]),Object(c["f"])("div",tt,[Object(c["f"])("p",null,Object(c["p"])(o.todo.description),1)]),Object(c["f"])("div",et,[Object(c["f"])("ul",ot,[(Object(c["i"])(!0),Object(c["d"])(c["a"],null,Object(c["m"])(d.tagsBg,(function(t){return Object(c["i"])(),Object(c["d"])("li",{key:t,style:"background-color: ".concat(t),class:"todo-item__tag"},null,4)})),128))]),Object(c["f"])(r,{onClick:e[3]||(e[3]=function(e){return t.todoDoneToggle(o.todo.created)}),check:o.todo.done,label:"Done"},null,8,["check"])])],2)})),nt=(o("159b"),{name:"TodoItem",props:{todo:{type:Object}},components:{TodoCheck:T},data:function(){return{}},methods:Object(f["a"])({},Object(S["b"])(["deleteTodo","todoDoneToggle"])),computed:Object(f["a"])(Object(f["a"])({},Object(S["c"])(["tags"])),{},{tagsBg:function(){var t=this,e=[];return this.todo.tags.forEach((function(o){return e.push(t.tags[o].bg)})),e}}),emits:{edit:null}});o("56da");nt.render=ct,nt.__scopeId="data-v-331f55b2";var it=nt,dt={components:{TodoMenu:E,TodoEditor:G,TodoItem:it},data:function(){return{overlayShow:!1,created:0}},methods:{callEditor:function(t){this.created=t||0,this.overlayShow=!0}},computed:Object(f["a"])({},Object(S["c"])(["isTodo","todos"]))};o("e97b");dt.render=b;var rt=dt,at=(o("4de4"),o("caad"),o("2532"),o("af87")),st=function(t){var e="AppTodos",o=localStorage.getItem(e);o&&t.commit("importTodos",JSON.parse(o)),t.subscribe((function(t,o){localStorage.setItem(e,JSON.stringify(o.todos))}))},lt=Object(S["a"])({state:{tags:[{created:"83274qw876",title:"work",bg:"#D2CEFF"},{created:"83274erw87",title:"study",bg:"#D1E5F7"},{created:"832asd7487",title:"entertainment",bg:"#FFCECE"},{created:"832bv74876",title:"family",bg:"#DAF2D6"}],todos:[],filters:[],hideDoneTasks:!1},getters:{todos:function(t){var e=t.todos.filter((function(e){return!t.hideDoneTasks||!e.done}));return 0===t.filters.length?e:e.filter((function(e){return t.filters.some((function(t){return e.tags.includes(t)}))}))},getTodos:function(t){return t.todos},tags:function(t){return t.tags},isTodo:function(t){return t.todos.length>0},tagsBg:function(t,e){var o=[];return e.forEach((function(e){return o.push(t.tags[e].bg)})),o}},mutations:{addStateTodo:function(t,e){t.todos.push({title:e.title,description:e.description,tags:e.tags,created:Date.now(),done:!1})},editTodo:function(t,e){return t.todos[e.index]=at["Object"].assign(t.todos[e.index],e.newTodo)},deleteTodo:function(t,e){t.todos.some((function(o,c){if(o.created===e)return t.todos.splice(c,1),!0}))},todoDoneToggle:function(t,e){return t.todos.some((function(t){if(t.created===e)return t.done=!t.done,!0}))},toggleFilter:function(t,e){var o=t.filters.indexOf(e);-1===o?t.filters.push(e):t.filters.splice(o,1)},importTodos:function(t,e){return t.todos=e},hideDoneTasks:function(t,e){return t.hideDoneTasks=e}},actions:{addStateTodo:function(t,e){var o=t.commit;return o("addStateTodo",e)},deleteTodo:function(t,e){var o=t.commit;return o("deleteTodo",e)},todoDoneToggle:function(t,e){var o=t.commit;return o("todoDoneToggle",e)},toggleFilter:function(t,e){var o=t.commit;return o("toggleFilter",e)},hideDoneTasks:function(t,e){var o=t.commit;return o("hideDoneTasks",e)},editTodo:function(t,e){var o=t.commit;return o("editTodo",e)}},plugins:[st]}),ut=(o("ea42"),o("14b7")),bt=o("1fa0"),ft=Object(ut["a"])(),Ot=Object(c["c"])(rt);Ot.config.globalProperties.emitter=ft,Ot.use(lt).use(bt["a"]).mount("#app")},"56da":function(t,e,o){"use strict";o("7981")},"60e2":function(t,e,o){"use strict";o("7906")},7906:function(t,e,o){},7981:function(t,e,o){},"893b":function(t,e,o){"use strict";o("52f1")},e97b:function(t,e,o){"use strict";o("f7ec")},ea42:function(t,e,o){},f4b2:function(t,e,o){},f7ec:function(t,e,o){}});
//# sourceMappingURL=app.7406fb10.js.map