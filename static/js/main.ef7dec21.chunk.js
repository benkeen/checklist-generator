(this["webpackJsonpchecklist-generator"]=this["webpackJsonpchecklist-generator"]||[]).push([[0],{66:function(e,t,n){e.exports=n(87)},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(15),o=n.n(r),c=n(8),i=n(47),u=n(48),s=n(13),m=n(42),d=n(49),p=n.n(d),h=n(57),E=n(17),f=n(6),g=n(59),y=n(50),v=n.n(y),b=function(e){return function(t){(function(e){return new Promise((function(t){v.a.parse(e,{complete:function(e){return t(e)}})}))})(e).then((function(n){t({type:"SET_DATA",payload:{uploadedFilename:e.path,data:n.data}})}))}},w=function(e,t){var n=e.indexOf(t);return n>-1&&e.splice(n,1),e},C={pageIndex:0,uploadedFilename:"",data:null,rows:{},sortedRows:[],builderTab:0,format:"html",textIndentNumSpaces:4,htmlIndentWidth:50,rowClassPrefix:"cg-col-"},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET":return Object(f.a)({},e,{data:null,uploadedFilename:"",rows:{},sortedRows:[],builderTab:0});case"SET_PAGE_INDEX":return Object(f.a)({},e,{pageIndex:t.payload.pageIndex});case"SET_DATA":return Object(f.a)({},e,{uploadedFilename:t.payload.uploadedFilename,data:t.payload.data});case"SELECT_COLUMN":var n=t.payload,a=n.rowId,l=n.colIndex;return Object(f.a)({},e,{rows:Object(f.a)({},e.rows,Object(E.a)({},a,Object(f.a)({},e.rows[a],{colIndex:l})))});case"ADD_ROW":var r=Object(g.a)(6);return Object(f.a)({},e,{sortedRows:[].concat(Object(h.a)(e.sortedRows),[r]),rows:Object(f.a)({},e.rows,Object(E.a)({},r,{colIndex:null,indent:!0,format:"{{it.VALUE}}"}))});case"DELETE_ROW":var o=w(e.sortedRows,t.payload.rowId),c=Object(f.a)({},e.rows);return delete c[t.payload.rowId],Object(f.a)({},e,{sortedRows:o,rows:c});case"TOGGLE_ROW_INDENTATION":return Object(f.a)({},e,{rows:Object(f.a)({},e.rows,Object(E.a)({},t.payload.rowId,Object(f.a)({},e.rows[t.payload.rowId],{indent:!e.rows[t.payload.rowId].indent})))});case"UPDATE_ROW_FORMAT":var i=t.payload,u=i.rowId,s=i.format;return Object(f.a)({},e,{rows:Object(f.a)({},e.rows,Object(E.a)({},u,Object(f.a)({},e.rows[u],{format:s})))});case"SET_BUILDER_TAB":return Object(f.a)({},e,{builderTab:t.payload.tab});case"UPDATE_FORMAT":return Object(f.a)({},e,{format:t.payload.format});case"UPDATE_HTML_INDENT_WIDTH":return Object(f.a)({},e,{htmlIndentWidth:t.payload.htmlIndentWidth});case"UPDATE_ROW_CLASS_PREFIX":return Object(f.a)({},e,{rowClassPrefix:t.payload.prefix});case"UPDATE_TEXT_INDENT_NUM_SPACES":return Object(f.a)({},e,{textIndentNumSpaces:t.payload.numSpaces});default:return e}},O=Object(s.c)({settings:T}),x={key:"root",storage:p.a},I=Object(m.a)(x,O),N="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,S=Object(s.e)(I,N(Object(s.a)(u.a))),k=Object(m.b)(S),_=S,j=n(18),R=n(51),D=function(e,t,n){for(var a=[],l=[],r=function(r){var o=0;t.forEach((function(t){var c=t.colIndex,i=t.format,u=t.indent,s=e[r][c];if(o=u?o+1:o,a[c]!==s){var m=P(e[r]);l.push({colIndex:c,value:F(i,Object(f.a)({VALUE:s},m),n),indent:o}),a[c]=s}}))},o=1;o<e.length;o++)r(o);return l},P=function(e){var t={};return e.forEach((function(e,n){t["COL"+(n+1)]=e})),t},F=function(e,t,n){var a="invalid syntax for this row",l="html"===n?'<span class="invalidRow">'.concat(a,"</span>"):"--- ".concat(a," ---");try{l=R.render(e,t)}catch(r){}return l},A=function(e,t,n,a,l,r){var o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],c=D(e,t,n),i="",u=parseInt(a||0,10),s=parseInt(l||0,10);return o?c.forEach((function(e){var t=e.value,a=e.indent;"html"===n?i+='<div style="padding-left: '.concat((a-1)*s,'px">').concat(t,"</div>"):i+=" ".repeat((a-1)*u)+t+"\n"})):c.forEach((function(e){var t=e.value,a=e.colIndex,l=e.indent;if("html"===n){var o="".concat(r).concat(a+1," ").concat(r,"indent-").concat(l);i+='<div class="'.concat(o,'">').concat(t,"</div>\n")}else i+=" ".repeat((l-1)*u)+t+"\n"})),i},L=function(e){return e.settings.data},U=function(e){return e.settings.uploadedFilename},W=function(e){return e.settings.pageIndex},M=function(e){return e.settings.builderTab},H=function(e){return e.settings.format},z=function(e){return e.settings.textIndentNumSpaces},B=function(e){return e.settings.htmlIndentWidth},G=function(e){return e.settings.rowClassPrefix},V=Object(j.a)((function(e){return e.settings.sortedRows}),(function(e){return e.settings.rows}),(function(e,t){return e.map((function(e){return Object(f.a)({},t[e],{rowId:e})}))})),X=Object(j.a)(L,(function(e){return null!==e})),J=Object(j.a)(L,(function(e){return e.length?e[0]:[]})),q=Object(j.a)(L,V,H,z,B,(function(e,t,n,a,l){return A(e,t,n,a,l)})),Y=Object(j.a)(L,V,H,z,B,G,(function(e,t,n,a,l,r){return A(e,t,n,a,l,r,!1)})),$=Object(j.a)(V,B,G,(function(e,t,n){var a=[];return e.filter((function(e){return e.indent})).forEach((function(e,l){a.push(".".concat(n,"indent-").concat(l+1," { margin-left: ").concat(t*l,"px; }"))})),a.join("\n")})),K=n(55),Q=n(117),Z=n(116),ee=n(118),te=n(119),ne=n(113),ae=n(120),le=n(54),re=n.n(le),oe=n(123),ce=n(112),ie=n(122),ue=function(e){var t=e.steps,n=e.activeStep;return l.a.createElement("div",{className:"navStepper"},l.a.createElement(oe.a,{activeStep:n},t.map((function(e,t){var n={},a={};return n.completed=!1,l.a.createElement(ce.a,Object.assign({key:e},n),l.a.createElement(ie.a,a,e))}))))},se=n(114),me=function(e){var t=e.onNext;return l.a.createElement("div",null,l.a.createElement("h1",null,"Checklist Generator"),l.a.createElement("div",{className:"introPanel"},l.a.createElement("div",null,l.a.createElement("p",null,"This is a simple, free online tool that ",l.a.createElement("i",null,"takes a CSV file that looks like this...")),l.a.createElement("img",{src:"./table.png",width:415,height:252,alt:"Original CSV table format example"})),l.a.createElement("div",null,l.a.createElement("p",null,"and ",l.a.createElement("i",null,"converts it to a checklist that looks like this"),"..."),l.a.createElement("img",{src:"./checklist.png",width:230,height:395,alt:"Generated checklist example"}))),l.a.createElement("h2",null,"Features"),l.a.createElement("ul",null,l.a.createElement("li",null,"Works on any CSV content that has the same format as shown above, where a column has a repeated value for all children."),l.a.createElement("li",null,"Lets you generate HTML or plain text checklists."),l.a.createElement("li",null,"Allows you to extract only the data you want to present."),l.a.createElement("li",null,"Uses a templating language for generating the content, so you can apply logic to output different row values based on your data set, as well as format each row according to whatever rules you want."),l.a.createElement("li",null,"Stores your settings and data as you progress, so you won't lose anything if you accidentally navigate away.")),l.a.createElement(se.a,{variant:"outlined",size:"small",color:"primary",onClick:t},"Get Started \xbb"))},de=n(56),pe=(n(78),Object(c.b)((function(e){return{uploadedFilename:U(e),hasUploadedData:X(e)}}),(function(e){return{onUploadFile:function(t){return e(b(t))},onReset:function(){return e({type:"RESET"})}}}))((function(e){var t=e.onPrev,n=e.onNext,a=e.uploadedFilename,r=e.hasUploadedData,o=e.onUploadFile,c=e.onReset,i=l.a.useCallback((function(e){o(e[0])}),[o]),u=Object(de.a)({onDrop:i}),s=u.getRootProps,m=u.getInputProps,d=u.isDragActive;return l.a.createElement("div",null,r?l.a.createElement("p",null,"You have an uploaded file: ",l.a.createElement("b",null,a)," (data is stored in your browser's local storage). ",l.a.createElement("span",{className:"link",onClick:c},"Click here to reset")," and upload another."):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",Object.assign({className:"dragDropUpload"},s()),l.a.createElement("input",m()),d?l.a.createElement("p",null,"Drop the file here ..."):l.a.createElement("p",null,"Drag and drop your file here, or click to select a file.")),l.a.createElement("p",null,"If you don't have a file on hand, you can use this ",l.a.createElement("a",{href:"./demo-data.csv",target:"_blank"},"demo file")," that illustrates a typical compatible format.")),r?l.a.createElement("footer",null,l.a.createElement(se.a,{variant:"outlined",size:"small",color:"secondary",onClick:t,style:{marginRight:10,minWidth:20}},"\xab"),l.a.createElement(se.a,{variant:"outlined",size:"small",color:"primary",onClick:n},"Continue \xbb")):null)}))),he=n(121),Ee=n(115),fe=n(53),ge=n.n(fe),ye=Object(c.b)((function(e){return{columns:J(e)}}))((function(e){var t=e.value,n=e.columns,a=e.onChange;return l.a.createElement("select",{defaultValue:t,onChange:function(e){return a(parseInt(e.target.value))}},l.a.createElement("option",{value:""},"Please select"),n.map((function(e,t){return l.a.createElement("option",{value:t,key:t},e,"  (COL",t+1,")")})))})),ve=(n(79),function(e){var t=e.format,n=e.content;return"html"===t?l.a.createElement("div",{className:"displayPanel",dangerouslySetInnerHTML:{__html:n}}):l.a.createElement("div",{className:"displayPanel textFormat"},n)}),be=Object(c.b)((function(e){return{format:H(e),content:q(e)}}))(ve),we=(n(80),Object(c.b)((function(e){return{rows:V(e)}}),(function(e){return{onAddRow:function(){return e({type:"ADD_ROW"})},onDeleteRow:function(t){return e(function(e){return{type:"DELETE_ROW",payload:{rowId:e}}}(t))},onSelectColumn:function(t,n){return e(function(e,t){return{type:"SELECT_COLUMN",payload:{rowId:e,colIndex:t}}}(t,n))},onToggleRowIndentation:function(t){return e(function(e){return{type:"TOGGLE_ROW_INDENTATION",payload:{rowId:e}}}(t))},onUpdateRowFormat:function(t,n){return e(function(e,t){return{type:"UPDATE_ROW_FORMAT",payload:{rowId:e,format:t}}}(t,n))}}}))((function(e){var t=e.rows,n=e.onAddRow,a=e.onDeleteRow,r=e.onSelectColumn,o=e.onToggleRowIndentation,c=e.onUpdateRowFormat,i=l.a.createElement("p",null,"Click the Add Row link below to start building your checklist.");return t.length&&(i=t.map((function(e,t){var n=e.rowId,i=e.colIndex,u=e.format,s=e.indent;return l.a.createElement("div",{className:"builderRow",key:t},l.a.createElement("div",{className:"colDropdown"},l.a.createElement(ye,{value:i,onChange:function(e){return r(n,e)}})),l.a.createElement("div",{className:"indentCol"},l.a.createElement("input",{type:"checkbox",checked:s,onChange:function(){return o(n)},id:"".concat(n,"-indent")}),l.a.createElement("label",{htmlFor:"".concat(n,"-indent")},"Indent")),l.a.createElement("div",{className:"formatCol"},l.a.createElement("input",{type:"text",value:u,onChange:function(e){return c(n,e.target.value)}})),l.a.createElement("div",{className:"deleteRow",onClick:function(){return a(n)}},l.a.createElement(ge.a,{style:{fontSize:20}})))}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"builderTable"},i),l.a.createElement("span",{className:"link",onClick:function(e){e.preventDefault(),n()}},"Add Row \xbb"),l.a.createElement(be,null))}))),Ce=function(e){var t=e.format,n=e.onChangeFormat,a=e.htmlIndentWidth,r=e.onChangeHtmlIndentWidth,o=e.rowClassPrefix,c=e.onChangeRowClassPrefix,i=e.textIndentNumSpaces,u=e.onChangeTextIndentNumSpaces;return l.a.createElement("div",{className:"builderSettings"},l.a.createElement("div",null,l.a.createElement("div",{className:"settingsCol1"},"Format"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"htmlFormat",checked:"html"===t,onChange:function(){return n("html")}}),l.a.createElement("label",{htmlFor:"htmlFormat"},"HTML"),l.a.createElement("input",{type:"radio",id:"textFormat",checked:"text"===t,onChange:function(){return n("text")}}),l.a.createElement("label",{htmlFor:"textFormat"},"Text"))),"html"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"settingsCol1"},"Indent width"),l.a.createElement("div",null,l.a.createElement("input",{type:"number",value:a,style:{width:40},onChange:function(e){return r(e.target.value,10)}}),"px")),l.a.createElement("div",null,l.a.createElement("div",{className:"settingsCol1"},"HTML class prefix"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)}})))):l.a.createElement("div",null,l.a.createElement("div",{className:"settingsCol1"},"Num character indent"),l.a.createElement("div",null,l.a.createElement("input",{type:"number",value:i,style:{width:40},onChange:function(e){return u(e.target.value,10)}}))))},Te=Object(c.b)((function(e){return{format:H(e),textIndentNumSpaces:z(e),htmlIndentWidth:B(e),rowClassPrefix:G(e)}}),(function(e){return{onChangeFormat:function(t){return e(function(e){return{type:"UPDATE_FORMAT",payload:{format:e}}}(t))},onChangeHtmlIndentWidth:function(t){return e({type:"UPDATE_HTML_INDENT_WIDTH",payload:{htmlIndentWidth:t}})},onChangeRowClassPrefix:function(t){return e(function(e){return{type:"UPDATE_ROW_CLASS_PREFIX",payload:{prefix:e}}}(t))},onChangeTextIndentNumSpaces:function(t){return e(function(e){return{type:"UPDATE_TEXT_INDENT_NUM_SPACES",payload:{numSpaces:e}}}(t))}}}))(Ce),Oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"This page lets you build your checklist by choosing specific columns out of your CSV file to be displayed. You have the choice of indenting each column (using the indentation style you specify on the Settings tab) and customizing the content of the rows however you want."),l.a.createElement("h2",null,"Placeholders"),l.a.createElement("p",null,"This application uses ",l.a.createElement("a",{href:"https://squirrelly.js.org/",target:"_blank",rel:"noopener noreferrer"},"SquirrellyJS")," as the template engine. That's what allows you to enter ",l.a.createElement("i",null,"placeholders")," in the row fields, which get converted to the values from your spreadsheet. Here's a few tips:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"{{it.VALUE}}")," outputs the value of whatever column you've selected in the dropdown for that row."),l.a.createElement("li",null,l.a.createElement("b",null,"{{it.COL1}}, {{it.COL2}}, {{it.COL3}}, ...")," outputs the value of values from ",l.a.createElement("i",null,"any")," column from your spreadsheet. For convenience, the dropdown lists the column numbers in parentheses, so they're easy to find."),l.a.createElement("li",null,"If you want to use simple boolean logic, like only output a value from another field if it has a value, you can write: ",l.a.createElement("b",null,'{{@if(it.COL5 !== "none")}}{{it.COL5}}{{/if}}'),". Bit of a mouthful, but that's how the template language works. Welcome to programming!")),l.a.createElement("h2",null,"Settings"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",null,"Format"),": this setting controls whether the generated output is HTML or text. HTML provides more option for styling, but the text option is handier if you plan on copying & pasting it into a document somewhere."),l.a.createElement("li",null,"If you're constructing an HTML checklist (see the ",l.a.createElement("i",null,"Settings")," tab option), you can enter HTML into the rows to change their appearance, e.g. ",l.a.createElement("b",null,"<h2>{{it.VALUE}}</h2>")," or ","<b>Heading here:</b> {{it.VALUE}}",". But be aware that when you embed the content onto your own sites, whatever CSS is used there will be used to style the rows, so it won't look identical to what you see here. E.g. fonts, colours and sizes may differ."),l.a.createElement("li",null,"The ",l.a.createElement("b",null,"HTML class prefix")," setting appears for the ",l.a.createElement("i",null,"HTML")," format only. That applies a class to every row which you can use for your own styling. Values from a particular column will be given a class for that column, e.g. with a prefix value of ",l.a.createElement("b",null,"cg-col-"),", you'll see ",l.a.createElement("b",null,"cg-col-5")," in the generated content for all values from the 5th column. This value is also used for indentation. Depending on which columns you select in the builder table to be indented, they will get a ",l.a.createElement("b",null,"cg-col-indent-N")," class applied. That is what allows the indentation styles to be applied.")))},xe=function(e){var t=e.children;return e.value!==e.index?null:l.a.createElement("div",{style:{padding:"20px 0 0"}},t)},Ie=Object(c.b)((function(e){return{hasUploadedData:X(e),builderTab:M(e)}}),(function(e){return{onUploadFile:function(t){return e(b(t))},setBuilderTab:function(t){return e(function(e){return{type:"SET_BUILDER_TAB",payload:{tab:e}}}(t))}}}))((function(e){var t=e.onPrev,n=e.onNext,a=e.builderTab,r=e.setBuilderTab;return l.a.createElement(l.a.Fragment,null,l.a.createElement(he.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return r(t)}},l.a.createElement(Ee.a,{label:"Build"}),l.a.createElement(Ee.a,{label:"Settings"}),l.a.createElement(Ee.a,{label:"Help"})),l.a.createElement(xe,{value:a,index:0},l.a.createElement(we,null),l.a.createElement("footer",null,l.a.createElement(se.a,{variant:"outlined",size:"small",color:"secondary",onClick:t,style:{marginRight:10,minWidth:20}},"\xab"),l.a.createElement(se.a,{variant:"outlined",size:"small",color:"primary",onClick:n},"Continue \xbb"))),l.a.createElement(xe,{value:a,index:1},l.a.createElement(Te,null)),l.a.createElement(xe,{value:a,index:2},l.a.createElement(Oe,null)))})),Ne=n(58),Se=n(28),ke=n(29),_e=n.n(ke),je=(n(85),Object(c.b)((function(e){return{format:H(e),generatedContent:Y(e),generatedCss:$(e)}}),(function(){return{}}))((function(e){var t=e.onPrev,n=e.onReturn,a=e.format,r=e.generatedContent,o=e.generatedCss,c=l.a.useState(0),i=Object(Ne.a)(c,2),u=i[0],s=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Done!"),function(){if("html"===a){var e='<html>\n<head>\n<style type="text/css">\n'.concat(o,"\n</style>\n</head>\n<body>\n").concat(r,"\n</body>\n</html>");return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"The tabs below contain your HTML and CSS for embedding your checklist into your own websites."),l.a.createElement(he.a,{value:u,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){return s(t)}},l.a.createElement(Ee.a,{label:"HTML"}),l.a.createElement(Ee.a,{label:"CSS"}),l.a.createElement(Ee.a,{label:"Single HTML page"})),l.a.createElement(xe,{value:u,index:0},l.a.createElement("div",{className:"generatePanel"},r),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(Se.CopyToClipboard,{text:r},l.a.createElement(se.a,{variant:"contained",disableElevation:!0,size:"small",color:"primary",startIcon:l.a.createElement(_e.a,null)},"Copy to clipboard")))),l.a.createElement(xe,{value:u,index:1},l.a.createElement("div",{className:"generatePanel"},o),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(Se.CopyToClipboard,{text:o},l.a.createElement(se.a,{variant:"contained",disableElevation:!0,size:"small",color:"primary",startIcon:l.a.createElement(_e.a,null)},"Copy to clipboard")))),l.a.createElement(xe,{value:u,index:2},l.a.createElement("div",{className:"generatePanel"},e),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(Se.CopyToClipboard,{text:e},l.a.createElement(se.a,{variant:"contained",disableElevation:!0,size:"small",color:"primary",startIcon:l.a.createElement(_e.a,null)},"Copy to clipboard")))))}return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"The block below contains your generated content."),l.a.createElement("div",{className:"generatePanel"},r),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(Se.CopyToClipboard,{text:r},l.a.createElement(se.a,{variant:"contained",disableElevation:!0,size:"small",color:"primary",startIcon:l.a.createElement(_e.a,null)},"Copy to clipboard"))))}(),l.a.createElement("br",null),l.a.createElement("footer",null,l.a.createElement(se.a,{variant:"outlined",size:"small",color:"secondary",onClick:t,style:{marginRight:10,minWidth:20}},"\xab"),l.a.createElement(se.a,{variant:"outlined",size:"small",color:"primary",onClick:n},"Start again")))}))),Re="https://github.com/benkeen/checklist-generator",De=Object(K.a)({typography:{fontFamily:["Open Sans","sans-serif"].join(",")}}),Pe=Object(Z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Fe=["Intro","Upload file","Build checklist","Generate"],Ae=function(e){var t=e.pageIndex,n=e.setPageIndex,a=Pe();return l.a.createElement(Q.a,{theme:De},l.a.createElement(l.a.Fragment,null,l.a.createElement(ee.a,{position:"fixed",className:"appBar"},l.a.createElement(te.a,null,l.a.createElement(ne.a,{variant:"h6",className:a.title},"Checklist Generator"),l.a.createElement("div",null,l.a.createElement(ae.a,{"aria-label":"github",className:a.margin,onClick:function(){return window.open(Re,"_blank")}},l.a.createElement(re.a,null))))),l.a.createElement("div",{className:"app"},l.a.createElement(ue,{steps:Fe,activeStep:t}),0===t?l.a.createElement(me,{onNext:function(){return n(t+1)}}):1===t?l.a.createElement(pe,{onPrev:function(){return n(t-1)},onNext:function(){return n(t+1)}}):2===t?l.a.createElement(Ie,{onPrev:function(){return n(t-1)},onNext:function(){return n(t+1)}}):3===t?l.a.createElement(je,{onPrev:function(){return n(t-1)},onReturn:function(){return n(t-3)}}):null)))},Le=Object(c.b)((function(e){return{pageIndex:W(e)}}),(function(e){return{setPageIndex:function(t){return e(function(e){return{type:"SET_PAGE_INDEX",payload:{pageIndex:e}}}(t))}}}))(Ae),Ue=(n(86),function(){return l.a.createElement(c.a,{store:_},l.a.createElement(i.a,{loading:null,persistor:k},l.a.createElement(Le,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.ef7dec21.chunk.js.map