(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(18),s=n.n(o),a=(n(23),n(3)),r=(n.p,n(24),n(0));var l=function(t){var e=t.pokemons,n=t.clickHandler;return Object(r.jsxs)("select",{id:"searchSuggestions",onChange:function(t){return n(t.target.value)},children:[" ",e.map((function(t){return Object(r.jsx)("option",{value:t,children:t})}))," "]})};var d=function(t){var e=Object(c.useState)(""),n=Object(a.a)(e,2),i=n[0],o=n[1];return Object(r.jsxs)("div",{className:"searchArea",children:[Object(r.jsx)("input",{onChange:function(e){o(e.target.value),t.searchSuggestions(e.target.value)},placeholder:"Search for Pokemons"}),Object(r.jsx)("button",{onClick:function(){t.search(i)},children:"Search"}),Object(r.jsx)(l,{clickHandler:t.search,pokemons:t.suggestions})]})},j=n(5),u=n(6),h=n(8),b=n(7),p=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).state={front:!0},c}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.pokemon;return"landing"===e?Object(r.jsxs)("div",{className:"pokemonDetails landing",hidden:this.props.show,children:["Welcome to our Pokedex!",Object(r.jsx)("br",{}),"You can start by searching or clicking on the random button."]}):e.types?Object(r.jsxs)("div",{className:"pokemonDetails",hidden:this.props.show,children:[Object(r.jsxs)("ul",{hidden:this.props.show,children:[Object(r.jsxs)("li",{children:["Name: ",e.name]}),Object(r.jsxs)("li",{children:["Height: ",e.height]}),Object(r.jsxs)("li",{children:["Weight: ",e.weight]}),Object(r.jsxs)("li",{children:["Types:"," ",e.types.map((function(e){return Object(r.jsxs)("button",{className:"typeButton",onClick:function(){return t.props.typeOnClick(e)},children:[" ",e," "]})}))]})]}),Object(r.jsx)("img",{alt:"front",src:this.state.front?e.front_default:e.back_default,hidden:this.props.show,onMouseOver:function(){t.setState({front:!1})},onMouseOut:function(){t.setState({front:!0})}}),Object(r.jsx)("button",{hidden:this.props.show,className:e.catched?"catched":"",id:"catchButton",onClick:e.catched?function(){return t.props.releasePokemon(e.name)}:function(){return t.props.catchPokemon(e.name)},children:Object(r.jsx)("span",{class:"iconify","data-icon":"mdi-pokeball","data-inline":"false"})})]}):Object(r.jsx)("div",{className:"pokemonDetails Error",hidden:this.props.show,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Error : Not Found"}),Object(r.jsx)("li",{children:"Code : 404"}),Object(r.jsx)("li",{children:"Try : Search or click for random pokemon! "})]})})}}]),n}(c.Component);var O=function(t){var e=t.pokemon,n=t.clickHandler;return Object(r.jsxs)("li",{className:"typeListItem",children:[Object(r.jsxs)("button",{onClick:function(){n(e.name)},children:[e.name," "]}),Object(r.jsx)("br",{}),Object(r.jsx)("img",{alt:"front",id:"listItemImg",src:e.front_default})]})},f=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){return Object(j.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{id:"ulDiv",children:[Object(r.jsx)("h2",{id:"typeTitle",children:this.props.listType}),Object(r.jsx)("ul",{id:"typeList",children:this.props.list.map((function(e){return Object(r.jsx)(O,{clickHandler:t.props.clickHandler,pokemon:e})}))})]})}}]),n}(c.Component),m=n(4),x=n.n(m);var g=function(t){var e=t.on;return Object(r.jsx)("div",{className:"loader",hidden:e})};var k=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)("landing"),s=Object(a.a)(o,2),l=s[0],j=s[1],u=Object(c.useState)(""),h=Object(a.a)(u,2),b=h[0],O=h[1],m=Object(c.useState)([]),k=Object(a.a)(m,2),v=k[0],y=k[1],C=Object(c.useState)(!0),S=Object(a.a)(C,2),N=S[0],w=S[1];function P(t){y([]),H(),x.a.get("/api/pokemon/".concat(t)).then((function(t){T(),j(t.data)})).catch((function(t){j("Not-Found"),T()}))}function D(){H(),x.a.get("/api/collection").then((function(t){i(t.data),T(),O("")}))}function H(){w(!1)}function T(){w(!0)}return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{id:"searchDiv",children:[Object(r.jsx)("h1",{id:"title",children:"POKEDEX"}),Object(r.jsx)(d,{search:P,searchSuggestions:function(t){t.length>0?x.a.get("/api/collection/suggestions/".concat(t)).then((function(t){y(t.data)})):y([])},suggestions:v}),Object(r.jsx)(g,{on:N}),Object(r.jsx)(p,{show:!N,catchPokemon:function(t){x.a.post("/api/collection/catch/".concat(t)).then((function(t){j(t.data);var e=n.concat([t.data]);i(e)})),D()},pokemon:l,typeOnClick:function(t){H(),O(t),x.a.get("/api/type/".concat(t)).then((function(t){i(t.data),T()}))},releasePokemon:function(t){x.a.delete("/api/collection/release/".concat(t)).then((function(e){j(e.data);var c=n.filter((function(e){return e.name!==t}));i(c)})),D()}})]}),Object(r.jsxs)("div",{id:"center",children:[Object(r.jsx)("button",{id:"collection",onClick:D,children:"My Collection"}),Object(r.jsxs)("button",{id:"randomPokemon",onClick:function(){H(),x.a.get("/api/pokemon/random").then((function(t){j(t.data),T()}))},children:[" ","Random",Object(r.jsx)("br",{})," "]})]}),Object(r.jsxs)("div",{id:"listDiv",children:[" ",Object(r.jsx)(f,{clickHandler:P,list:n,listType:b})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),o(t),s(t)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.f3eb01c9.chunk.js.map