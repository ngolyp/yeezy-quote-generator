(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{18:function(t,e,a){t.exports=a(42)},23:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(12),i=a.n(r),c=(a(23),a(13)),u=a(14),s=a(16),l=a(15),h=a(17),m=function(t){var e=t.quote,a=t.author;return o.a.createElement("div",null,o.a.createElement("span",{id:"text"},'"',e,'"'),o.a.createElement("br",null),o.a.createElement("span",{id:"author"},"-",a))},d=a(2),w=a.n(d),f=(a(41),function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={quote:"",author:""},a.newQuote=function(){w.a.get("https://api.kanye.rest/").then((function(t){a.setState({quote:t.data.quote}),console.log(a.state)}))},a.tweetURL="https://twitter.com/intent/tweet?hashtags=kanyequotes&related=freecodecamp&text="+a.state.quote,a}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;w.a.get("https://api.kanye.rest/").then((function(e){t.setState({quote:e.data.quote,author:"Kanye West"})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"quote-box"},o.a.createElement("div",{className:"header"},"Yeezy Said What?!?!?"),o.a.createElement(m,{quote:this.state.quote,author:this.state.author}),o.a.createElement("button",{onClick:this.newQuote},"New Quote"),o.a.createElement("a",{href:this.tweetURL,id:"tweet-quote",title:"Tweet this quote!",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter"})))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.94dbfe2d.chunk.js.map