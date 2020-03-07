(this["webpackJsonpreact-examination"]=this["webpackJsonpreact-examination"]||[]).push([[0],{108:function(e,t,a){e.exports=a(187)},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"playerlist",(function(){return I}));var r=a(0),s=a.n(r),l=a(6),i=a.n(l),o=a(31),c=a(25),p=a(86),m=a.n(p),d=a(189);var u=a(1),h=a.n(u),y=a(87),E=a.n(y);class O extends r.Component{render(){return s.a.createElement("input",{type:"text",autoFocus:!0,className:h()("form-control",E.a.addPlayerInput),placeholder:"Type the name of a player",value:this.state.name,onChange:this.handleChange.bind(this),onKeyDown:this.handleSubmit.bind(this)})}constructor(e,t){super(e,t),this.state={name:this.props.name||""}}handleChange(e){this.setState({name:e.target.value})}handleSubmit(e){const t=e.target.value.trim();13===e.which&&(this.props.addPlayer(t),this.setState({name:""}))}}var S=O,b=a(71),A=a(88),L=a.n(A),R=a(27),P=a.n(R);class f extends r.Component{render(){return s.a.createElement("li",{className:P.a.playerListItem},s.a.createElement("div",{className:P.a.playerInfos},s.a.createElement("div",null,s.a.createElement("span",null,this.props.name)),s.a.createElement("div",null,s.a.createElement("small",null,this.props.team," \xb7 ",this.props.position))),s.a.createElement("div",{className:P.a.playerActions},s.a.createElement("button",{className:"btn btn-default ".concat(P.a.btnAction),onClick:()=>this.props.starPlayer(this.props.id)},s.a.createElement("i",{className:h()("fa",{"fa-star":this.props.starred,"fa-star-o":!this.props.starred})})),s.a.createElement("button",{className:"btn btn-default ".concat(P.a.btnAction),onClick:()=>this.props.deletePlayer(this.props.id)},s.a.createElement("i",{className:"fa fa-trash"}))))}}var T=f,N=a(188);var v=Object(c.b)(e=>({visible:e.playerlist.visible}))(e=>{const t=e.players,a=e.visible,n=Object(r.useState)(1),l=Object(b.a)(n,2),i=l[0],o=l[1],c=Object(r.useState)([]),p=Object(b.a)(c,2),m=p[0],d=p[1],u=t.length;Object(r.useEffect)(()=>{console.log(t,i),d(t.slice(5*(i-1),5*i))},[t,i]),Object(r.useEffect)(()=>{o(1)},[a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:L.a.playerList},m.map((t,a)=>s.a.createElement(T,Object.assign({key:a,id:a,name:t.name,team:t.team,position:t.position,starred:t.starred},e.actions)))),s.a.createElement(N.a,{showQuickJumper:!0,defaultCurrent:1,current:i,pageSize:5,total:u,onChange:e=>{o(e)}}))});const w=(e,t)=>{switch(console.log(e,t),t){case"SF":return e.filter(e=>"SF"===e.position);case"PG":return e.filter(e=>"PG"===e.position);case"ALL":return e}};class C extends r.Component{render(){console.log(this.props);const e=this.props,t=e.playerlist,a=void 0===t?[]:t,n=e.handleShow,r={addPlayer:this.props.addPlayer,deletePlayer:this.props.deletePlayer,starPlayer:this.props.starPlayer};return s.a.createElement("div",{className:m.a.playerListApp},s.a.createElement("h1",null,"NBA Players"),s.a.createElement(S,{addPlayer:r.addPlayer}),s.a.createElement(d.a,{onClick:()=>{n("SF")}},'"show SF"'),s.a.createElement(d.a,{onClick:()=>{n("PG")}},'"show PG"'),s.a.createElement(d.a,{onClick:()=>{n("ALL")}},'"show ALL"'),s.a.createElement(v,{players:a,actions:r}))}}var F=Object(c.b)((function(e){return{playerlist:w(e.playerlist.playersById,e.playerlist.visible)}}),e=>({addPlayer:t=>{e({type:"ADD_PLAYER",name:t})},deletePlayer:t=>{e(function(e){return{type:"DELETE_PLAYER",id:e}}(t))},starPlayer:t=>{e(function(e){return{type:"STAR_PLAYER",id:e}}(t))},handleShow:t=>{e(function(e){return console.log(e),{type:"HANDLE_SHOW",id:e}}(t))}}))(C),g=a(37);const j={playersById:[{name:"LeBron James",team:"LOS ANGELES LAKERS",position:"SF",starred:!0},{name:"Kevin Duran",team:"GOLDEN STATE WARRIORS",position:"SF",starred:!1},{name:"Anthony Davis",team:"NEW ORLEANS PELICANS",position:"PF",starred:!1},{name:"Stephen Curry",team:"GOLDEN STATE WARRIORS",position:"PG",starred:!1},{name:"James Harden",team:"HOUSTON ROCKETS",position:"SG",starred:!1},{name:"Kawhi Leonard",team:"TORONTO RAPTORS",position:"SF",starred:!1},{name:"Kawhi Leonard2",team:"TORONTO RAPTORS",position:"SF",starred:!1},{name:"Kawhi Leonard3",team:"TORONTO RAPTORS",position:"SF",starred:!1},{name:"Kawhi Leonard4",team:"TORONTO RAPTORS",position:"SF",starred:!1},{name:"Kawhi Leonard5",team:"TORONTO RAPTORS",position:"SF",starred:!1},{name:"Kawhi Leonard66",team:"TORONTO RAPTORS",position:"SF",starred:!1}],visible:"ALL"};function I(e=j,t){switch(t.type){case"ADD_PLAYER":return Object(g.a)({},e,{playersById:[...e.playersById,{name:t.name,team:"LOS ANGELES LAKERS",position:"SF"}]});case"DELETE_PLAYER":return Object(g.a)({},e,{playersById:e.playersById.filter((e,a)=>a!==t.id)});case"STAR_PLAYER":let a=[...e.playersById],n=a.find((e,a)=>a===t.id);return n.starred=!n.starred,Object(g.a)({},e,{playersById:a});case"HANDLE_SHOW":return Object(g.a)({},e,{visible:t.id});default:return e}}const D=Object(o.b)(n),B=Object(o.c)(D);class K extends r.Component{render(){return s.a.createElement("div",null,s.a.createElement(c.a,{store:B},s.a.createElement(F,null)))}}a(186);i.a.render(s.a.createElement(K,null),document.getElementById("root"))},27:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[108,1,2]]]);
//# sourceMappingURL=main.40e1a262.chunk.js.map