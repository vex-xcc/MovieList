(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{112:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),l=a.n(i),r=(a(75),a(30)),o=a(18),s=a(19),m=a(21),u=a(20),v=a(22),d=(a(76),a(138)),g=a(142),h=a(143),p=a(62),f=function(e){return c.a.createElement("div",{className:"co"},c.a.createElement(d.a,null,c.a.createElement(g.a,{bg:"dark",variant:"dark"},c.a.createElement(g.a.Brand,{href:"#home"},"Movi List "),c.a.createElement(h.a,{inline:!0,onSubmit:e.handleDetails},c.a.createElement(p.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:e.handleChange})))))},E=(a(81),a(82),a(35));a(83);function b(e){return c.a.createElement("div",{className:"card__collection clear-fix",onClick:function(){e.viewMovieDetails(e.movieId)}},c.a.createElement("div",{className:"cards cards--three"},null==e.image?c.a.createElement("img",{className:"img-responsive",variant:"top",src:"https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png",alt:"Movie Image"}):c.a.createElement("img",{className:"img-responsive",variant:"top",src:"https://image.tmdb.org/t/p/w780/".concat(e.image),alt:"Movie Image"}),c.a.createElement("span",{className:"cards--three__rect-1"},c.a.createElement("span",{className:"shadow-1"}),c.a.createElement("p",null,e.title)),c.a.createElement("span",{className:"cards--three__rect-2"},c.a.createElement("span",{className:"shadow-2"})),c.a.createElement("span",{className:"cards--three__circle"}),c.a.createElement("ul",{className:"cards--three__list"},c.a.createElement("li",{class:"w3-xxxlarge"},c.a.createElement(E.a,{value:e.voteAverage,maxValue:10,text:"".concat(0===e.voteAverage?"NR":10*e.voteAverage,"%")})," "))))}var w=a(139),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(w.a,{className:"cardg"},this.props.content.map((function(t,a){return c.a.createElement(b,{key:a,image:t.poster_path,alt:"Card image cap",movieId:t.id,title:t.title,overview:t.overview,voteAverage:t.vote_average,viewMovieDetails:e.props.viewMovieDetails})})))}}]),t}(c.a.Component),y=(a(84),a(144));function _(e){for(var t=[],a=function(a){t.push(c.a.createElement(y.a.Item,{className:"pagination",active:e.currentPage===a?"active":"",key:a,onClick:function(){return e.nextPage(a)||e.nextPageMain(a)}},a))},n=1;n<=10;n++)a(n);return c.a.createElement("div",null,c.a.createElement(y.a,{className:"pg"},e.currentPage>1?c.a.createElement(y.a.Prev,{onClick:function(){return e.nextPage(e.currentPage-1)||e.nextPageMain(e.currentPage-1)}}," ","<"," "):"",t,e.currentPage>=1?c.a.createElement(y.a.Next,{onClick:function(){return e.nextPage(e.currentPage+1)||e.nextPageMain(e.currentPage+1)}}," ",">"):""))}var M=a(25),P=a(12),C=(a(85),a(15)),x=(a(99),a(68)),N=a(140),S=a(141),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggle=function(e){var t=a.state.toggle,n=a.state.open;a.setState({toggle:!t,open:!n,currentID:e})},a.dell=function(){var e=a.state.hide;a.setState({hide:!e})},a.updatereview=function(e){console.log(e);var t={};t["/name"]=a.state.name,t["/review"]=a.state.review,C.database().ref("reviews").child(e).update(t),a.db.ref("reviews").on("child_changed",(function(e){console.log(e)}))},a.removereview=function(e){C.database().ref("reviews").child(e).remove(),a.db.ref("reviews").on("child_removed",(function(e){var t=a.state.reviews;t=t.filter((function(t){return t.id!==e.key})),a.setState({reviews:t})}))},a.hndClick=function(){var e=a.state.isFave;a.setState({isFave:!e})},a.state={open:!1,toggle:!1,hide:!0,reviews:[],name:"",review:"",isFave:!1,currentID:""},a.createreviews=a.createreviews.bind(Object(P.a)(a)),a}return Object(v.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.db=C.database(),this.listenForChange()}},{key:"listenForChange",value:function(){var e=this;this.db.ref("reviews").on("child_added",(function(t){var a={id:t.key,name:t.val().name,review:t.val().review,isFave:t.val().isFave},n=e.state.reviews;n.push(a),e.setState({reviews:n})}))}},{key:"onChangeHandler",value:function(e,t){this.setState(Object(M.a)({},t,e.target.value))}},{key:"createreviews",value:function(){C.database().ref("reviews").push({name:this.state.name,review:this.state.review,isFave:this.state.isFave})}},{key:"render",value:function(){var e=this,t=this.state.isFave,a=this.state.open,n=this.props.currentMovie,i="https://image.tmdb.org/t/p/w780/".concat(n.poster_path);return c.a.createElement("div",null,c.a.createElement("div",{class:"movie_card",id:"bright",style:{backgroundImage:"url(".concat(i,")")}},c.a.createElement("div",{class:"info_section"},c.a.createElement("div",{class:"movie_header"},null==n.poster_path?c.a.createElement("img",Object(M.a)({className:"locandina",alt:"...",src:"https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png"},"alt","Movie Image")):c.a.createElement("img",Object(M.a)({className:"locandina",alt:"...",src:"https://image.tmdb.org/t/p/w780/".concat(n.poster_path)},"alt","Movie Image")),"  ",c.a.createElement("h1",null,n.title),c.a.createElement("h4",null),c.a.createElement("span",{class:"minutes"},c.a.createElement("div",{className:"cl"},c.a.createElement(E.a,{value:n.vote_average,maxValue:10,text:"".concat(0===n.vote_average?"NR":10*n.vote_average,"%")}))),c.a.createElement("p",{class:"type"})),c.a.createElement("div",{class:"movie_desc"},c.a.createElement("p",{class:"text"},n.overview)),c.a.createElement("div",{class:"movie_social"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"material-icons",onClick:this.props.closeMovieDetails},"arrow_back")),c.a.createElement("li",null,c.a.createElement("i",{className:"material-icons",onClick:this.hndClick,style:t?{color:"red"}:{color:""}},"\ue87d")),c.a.createElement("li",null,c.a.createElement("i",{className:"material-icons",onClick:this.toggle},"chat_bubble")),c.a.createElement("li",null,c.a.createElement("i",{className:"material-icons",onClick:this.dell},"delete"))))),c.a.createElement("div",{class:"blur_back bright_back"})),!0===this.state.hide?this.state.reviews.map((function(t){return c.a.createElement("div",{class:"movie_card",id:"tomb",key:t.id,style:{backgroundImage:"url(".concat(i,")")}},c.a.createElement("div",{class:"info_section"},c.a.createElement("div",{class:"movie_header"},null==n.poster_path?c.a.createElement("img",Object(M.a)({className:"locandina",alt:"...",src:"https://p.kindpng.com/picc/s/62-629944_frame-decorative-movie-cinema-empty-frame-film-bingkai.png"},"alt","Movie Image")):c.a.createElement("img",Object(M.a)({className:"locandina",alt:"...",src:"https://image.tmdb.org/t/p/w780/".concat(n.poster_path)},"alt","Movie Image")),c.a.createElement("h1",null,t.name),c.a.createElement("h4",null),c.a.createElement("span",{class:"minutes"}),c.a.createElement("p",{class:"type"})),c.a.createElement("div",{class:"movie_desc"},c.a.createElement("p",{class:"text"},t.review,"     ")),c.a.createElement("div",{class:"movie_social"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{class:"material-icons",onClick:function(){return e.removereview(t.id)}},"delete")),c.a.createElement("li",null,c.a.createElement("i",{class:"material-icons",onClick:function(){return e.toggle(t.id)}},"edit"))))),c.a.createElement("div",{class:"blur_back tomb_back"}))})):"",c.a.createElement(x.a,{open:a,onRequestClose:this.toggle},c.a.createElement("div",null,c.a.createElement(N.a,{controlId:"formBasicEmail",onSubmit:this.createreviews},c.a.createElement("input",{style:{display:"block",margin:"10px 0"},type:"text",name:"name",placeholder:"Name",onChange:function(t){return e.onChangeHandler(t,"name")},value:this.state.name}),c.a.createElement("input",{style:{display:"block"},type:"textarea",name:"review",placeholder:"review",onChange:function(t){return e.onChangeHandler(t,"review")},value:this.state.review}),c.a.createElement("input",{style:{display:"block",margin:"10px 0"},type:"checkbox",name:"name",placeholder:"Name",onChange:function(t){return e.onChangeHandler(t,e.state.isFave)},value:this.state.name}),c.a.createElement(S.a,{style:{margin:"10px 19px 10px 0"},outline:!0,color:"secondary",onClick:this.createreviews},"Submit"),c.a.createElement(S.a,{outline:!0,color:"secondary",onClick:function(){return e.updatereview(e.state.currentID)}},"update")))))}}]),t}(c.a.Component),O=a(29),D=a.n(O),I=(a(131),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).nextPage=function(t){D()({method:"GET",url:"https://api.themoviedb.org/3/search/movie?api_key=".concat(e.apiKey,"&query=").concat(e.state.userseach,"&page=").concat(t)}).then((function(a){console.log(a),console.log("tootalPage is ".concat(a.data.total_pages)),e.setState({content:Object(r.a)(a.data.results),currentPageSearch:t})})).catch((function(e){console.log(e)}))},e.handleDetails=function(t){t.preventDefault();var a="https://api.themoviedb.org/3/search/movie?api_key=".concat(e.apiKey,"&query=").concat(e.state.userseach);D()({method:"GET",url:a}).then((function(t){console.log(t),console.log("Fetching details for ".concat(t.data.results)),console.log(t.data),e.setState({content:Object(r.a)(t.data.results),totalPages:t.data.total_pages})})).catch((function(e){console.log(e)}))},e.handleChange=function(t){e.setState({userseach:t.target.value})},e.nextPageMain=function(t){var a="https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(e.apiKey,"&language=en-US&page=").concat(t);D()({method:"GET",url:a}).then((function(a){console.log(a),console.log("Fetching details for ".concat(a.data.results)),console.log(a.data),e.setState({content:Object(r.a)(a.data.results),currentPage:t})})).catch((function(e){console.log(e)}))},e.handleChange=function(t){e.setState({userseach:t.target.value})},e.viewMovieDetails=function(t){var a=e.state.content.filter((function(e){return e.id===t})),n=a.length>0?a[0]:null;e.setState({currentMovie:n})},e.closeMovieDetails=function(){e.setState({currentMovie:null})},e.state={content:[],userseach:"",totalPages:0,currentPage:1,currentMovie:null},e.apiKey="4fd33d28863c5cbcf0ffb8bb958c5213",e}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state;return c.a.createElement("div",{className:"film-library"},null==e.currentMovie?c.a.createElement("div",null,c.a.createElement(f,{handleDetails:this.handleDetails,handleChange:this.handleChange}),c.a.createElement(k,{content:e.content,viewMovieDetails:this.viewMovieDetails})):c.a.createElement(j,{currentMovie:e.currentMovie,closeMovieDetails:this.closeMovieDetails}),e.totalPages>=2&&null==e.currentMovie?c.a.createElement(_,{currentPageSearch:e.currentPageSearch,pages:e.totalPages,totalMainPages:e.totalMainPages,totalSearchPages:e.totalSearchPages,nextPageMain:this.nextPageMain,nextPage:this.nextPage,currentPage:e.currentPage}):"")}},{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(this.apiKey,"&language=en-US");D()({method:"GET",url:t}).then((function(t){console.log(t),console.log("Fetching details for ".concat(t.data.results)),console.log(t.data),e.setState({content:Object(r.a)(t.data.results),totalPages:t.data.total_pages})})).catch((function(e){console.log(e)}))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));C.initializeApp({apiKey:"AIzaSyDMv2Y_7-iIkay5y8rwMZY786ERLB6qKmQ",authDomain:"movielis.firebaseapp.com",databaseURL:"https://movielis.firebaseio.com",projectId:"movielis",storageBucket:"movielis.appspot.com",messagingSenderId:"389292091667"}),l.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(132)},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.d3fdd7a1.chunk.js.map