"use strict";(self.webpackChunkadobe_template_generator=self.webpackChunkadobe_template_generator||[]).push([[2509,4657,9461],{765:function(e){function t(e){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function e(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(e).join(""):""},a=function t(a){for(var s=[],i=0;i<a.length;i++){var o=a[i],r=!1;if("string"!==typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===n(o.content[0].content[1])&&s.pop():"/>"===o.content[o.content.length-1].content||s.push({tagName:n(o.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===o.type&&"{"===o.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?s[s.length-1].openedBraces--:r=!0),(r||"string"===typeof o)&&s.length>0&&0===s[s.length-1].openedBraces){var g=n(o);i<a.length-1&&("string"===typeof a[i+1]||"plain-text"===a[i+1].type)&&(g+=n(a[i+1]),a.splice(i+1,1)),i>0&&("string"===typeof a[i-1]||"plain-text"===a[i-1].type)&&(g=n(a[i-1])+g,a.splice(i-1,1),i--),a[i]=new e.Token("plain-text",g,null,g)}o.content&&"string"!==typeof o.content&&t(o.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)}))}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]},7369:function(e,t,n){var a=n(765),s=n(9669);function i(e){e.register(a),e.register(s);var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t)}e.exports=i,i.displayName="tsx",i.aliases=[]},9669:function(e){function t(e){e.languages.typescript=e.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),e.languages.ts=e.languages.typescript}e.exports=t,t.displayName="typescript",t.aliases=["ts"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.81d163ba.chunk.js.map