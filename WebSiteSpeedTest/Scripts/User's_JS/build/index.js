!function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";var n=r(1),a=r(2),i=r(3),o=r(7),s=r(13);$(document).ready(function(){var t=$("#inputUrlErorrs"),e=$("#startTestWaiter");e.hide();var r=$("#startTestDefaultText"),l=$("#startTestBtn"),u=l.attr("data-url"),c=$("#input_url"),h=$("#modalWaiter");h.hide();var p=new o.Displayer("#chartContainer","#tableContainer"),d=new s.Notifier(function(t){p.show(),p.visualize(t)});l.click(function(n){n.preventDefault();var a=c.val(),i=a.match(/^(ftp|http|https):\/\/[^ "]+$/);i?(c.removeClass("field-error"),e.show(),r.hide(),t.html(""),p.clean(),$.ajax({type:"POST",url:u,data:{url:a,connectionId:d.connectionId},success:function(n){n?(t.html(n),e.hide(),r.show(),c.addClass("field-error")):(e.hide(),r.show(),p.sortAndDisplay())},error:function(){e.hide(),r.show(),c.addClass("field-error"),p.hide()}})):c.addClass("field-error")}),$("#historyBtn").click(function(){h.show();var t=$(this).attr("data-update-custom"),e=$(t);$.ajax({type:$(this).attr("data-ajax-method"),url:$(this).attr("data-url"),success:function(r){h.hide(),e.html(r),i.Initializer.pagerInit(t+" ul.pager a","#historyTable")}})});var f=document.querySelector("#historyContainer");f.addEventListener("click",function(t){t.preventDefault();var e=$(t.target);if(e.is("a")&&"collapse"===e.attr("data-toggle")&&"true"===e.attr("data-switch")){var r=e.attr("href"),o=e.attr("data-url");n.Ajax.run(a.HttpMethod.POST,o,{historyRowId:r.slice(1),startIndex:0},function(t){$(r).html(t),e.attr("data-switch","false"),i.Initializer.pagerInit(r+" ul.pager a","#sitemapTable")})}})})},function(t,e,r){"use strict";var n=r(2),a=function(){function t(){}return t.run=function(t,e,r,a){$.ajax({type:n.HttpMethod[t],url:e,data:r}).done(a)},t}();e.Ajax=a},function(t,e){"use strict";!function(t){t[t.GET=0]="GET",t[t.POST=1]="POST",t[t.PUT=2]="PUT",t[t.DELETE=3]="DELETE"}(e.HttpMethod||(e.HttpMethod={}));e.HttpMethod;!function(t){t[t.First=1]="First",t[t.Next=2]="Next",t[t.Previous=3]="Previous",t[t.Last=4]="Last"}(e.PagerElementRole||(e.PagerElementRole={}));e.PagerElementRole},function(t,e,r){"use strict";var n=r(4),a=r(6),i=function(){function t(){}return t.pagerInit=function(t,e){var r;try{r=new a.Pager(t)}catch(t){return}var i=new n.PagerAjaxHandler(r,e);r.nextBtn.click=function(){i.sendAjaxRequest(r.nextBtn)},r.previousBtn.click=function(){i.sendAjaxRequest(r.previousBtn)}},t}();e.Initializer=i},function(t,e,r){"use strict";var n=r(5),a=r(1),i=r(2),o=function(){function t(t,e){this.pager=t,this.updateTarget=e}return t.prototype.sendAjaxRequest=function(t){var e=this;if(t.isEnabled){var r;r=t.rowId?{historyRowId:t.rowId,startIndex:t.startIndex}:new n.HistoryAjaxData(t.startIndex),a.Ajax.run(i.HttpMethod.POST,t.url,r,function(t){$(e.updateTarget).html(t.contentHistory),e.pagerBtnStyleToggle(t)})}},t.prototype.pagerBtnStyleToggle=function(t){this.pager.previousBtn.startIndex=t.historyPager.previousStartIndex,this.pager.previousBtn.isEnabled=!t.historyPager.isFirstPage,this.pager.nextBtn.startIndex=t.historyPager.nextStartIndex,this.pager.nextBtn.isEnabled=!t.historyPager.isLastPage},t}();e.PagerAjaxHandler=o},function(t,e){"use strict";var r=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},n=function(){function t(t){this.results=t}return t.prototype.sortModelExceptFirst=function(){var t=this.results.shift();this.sortModel(),this.results.unshift(t)},t.prototype.sortModel=function(){this.results.sort(function(t,e){return t.mintime-e.mintime})},t.prototype.push=function(t){this.results.push(t)},t}();e.MeasurementsViewModel=n;var a=function(){function t(t){this.startIndex=t}return t}();e.HistoryAjaxData=a;var i=function(){function t(){}return t}();e.MeasurementResult=i;var o=function(t){function e(e,r){t.call(this,e),this.historyRowId=r}return r(e,t),e}(a);e.SitemapAjaxData=o;var s=function(){function t(){}return t}();e.HistoryPage=s;var l=function(){function t(){}return t}();e.HistoryPager=l},function(t,e,r){"use strict";var n=r(2),a=function(){function t(t){this.element=$(t)}return Object.defineProperty(t.prototype,"click",{set:function(t){this.element.click(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isEnabled",{get:function(){return!this.element.parent().hasClass("disabled")},set:function(t){t?this.element.parent().removeClass("disabled"):this.element.parent().addClass("disabled")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"role",{get:function(){return n.PagerElementRole[this.element.attr("data-role")]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startIndex",{get:function(){return+this.element.attr("data-start-index")},set:function(t){this.element.attr("data-start-index",t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this.element.attr("href")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowId",{get:function(){return this.element.attr("data-history-row-id")},enumerable:!0,configurable:!0}),t}();e.PagerBtn=a;var i=function(){function t(t){this.selector=t,this.getPagerElements(t)}return t.prototype.getPagerElements=function(t){var e=this,r=$(t);if(0===r.length)throw"selector does not indicate page elements";r.each(function(t,r){switch(n.PagerElementRole[$(r).attr("data-role")]){case n.PagerElementRole.Next:e.nextBtn=new a(r);break;case n.PagerElementRole.Previous:e.previousBtn=new a(r)}})},t}();e.Pager=i},function(t,e,r){"use strict";var n=r(5),a=n.MeasurementsViewModel,i=r(8),o=r(11),s=function(){function t(t,e){this.isHidden=!0,this.model=new a,this.chartDisplayer=new i.ChartDisplayer(t,this.model),this.tableDisplayer=new o.TableDisplayer(e,this.model)}return t.prototype.visualize=function(t){this.format(t),this.model.push(t),this.chartDisplayer.display(t),this.tableDisplayer.display(t)},t.prototype.clean=function(){this.model.results=[],this.tableDisplayer.clear(),this.chartDisplayer.clear()},t.prototype.sortAndDisplay=function(){this.model.sortModelExceptFirst(),this.chartDisplayer.display(),this.tableDisplayer.display()},t.prototype.show=function(){this.isHidden&&(this.chartDisplayer.show(),this.tableDisplayer.show(),this.isHidden=!1)},t.prototype.hide=function(){this.isHidden||(this.chartDisplayer.hide(),this.tableDisplayer.hide(),this.isHidden=!0)},t.prototype.format=function(t){t.mintime=+t.mintime.toFixed(2),t.maxtime=+t.maxtime.toFixed(2)},t}();e.Displayer=s},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},a=r(9),i=r(10),o=function(t){function e(e,r){t.call(this,e,r),this.chartInit(this.htmlElement),this.dataInit(),this.chart.create()}return n(e,t),e.prototype.displayFromLocalModel=function(){this.replaceChartData(this.splitModel()),this.chart.update()},e.prototype.displayFromOuterModel=function(t){this.updateChart(t)},e.prototype.clear=function(){this.modelParts=new s,this.replaceChartData(this.modelParts)},e.prototype.updateModelParts=function(t){this.modelParts.urls.push(t.url),this.modelParts.minValues.push(t.mintime),this.modelParts.maxValues.push(t.maxtime)},e.prototype.updateChart=function(t){this.updateModelParts(t),this.chart.update()},e.prototype.replaceChartData=function(t){this.chart.data[0].x=t.urls,this.chart.data[1].x=t.urls,this.chart.data[0].y=t.maxValues,this.chart.data[1].y=t.minValues},e.prototype.splitModel=function(){for(var t=new s,e=0,r=this.model.results;e<r.length;e++){var n=r[e];t.urls.push(n.url),t.minValues.push(n.mintime),t.maxValues.push(n.maxtime)}return t},e.prototype.dataInit=function(){this.modelParts=new s;var t={x:this.modelParts.urls,y:this.modelParts.maxValues,name:"Max",type:"bar",marker:{color:"rgb(55, 83, 109)"}},e={x:this.modelParts.urls,y:this.modelParts.minValues,name:"Min",type:"bar",marker:{color:"rgb(26, 118, 255)"}},r=[t,e];this.chart.data=r},e.prototype.chartInit=function(t){var e=$(t),r=975,n=450;e.hide(),this.chart=new i.Chart;var a={font:{family:"Segoe UI, Times New Roman, Open Sans, verdana, arial, sans-serif",color:"#444"},title:"Load Time Results",barmode:"overlay",autosize:!0,width:r,height:n,xaxis:{title:"Urls",showticklabels:!1,autorange:!0},yaxis:{title:"Time (s)",autorange:!0,titlefont:{size:16,color:"rgb(107, 107, 107)"},tickfont:{size:14,color:"rgb(107, 107, 107)"}},legend:{x:0,y:1,bgcolor:"rgba(255, 255, 255, 0)",bordercolor:"rgba(255, 255, 255, 0)"}};this.chart.layout=a,this.chart.canvasElement=t},e}(a.ElementDisplayer);e.ChartDisplayer=o;var s=function(){function t(){this.urls=[],this.minValues=[],this.maxValues=[]}return t}()},function(t,e){"use strict";var r=function(){function t(t,e){this.htmlElement=document.querySelector(t),this.model=e}return t.prototype.display=function(t){t?this.displayFromOuterModel(t):this.displayFromLocalModel()},t.prototype.show=function(){this.htmlElement.style.display="block"},t.prototype.hide=function(){this.htmlElement.style.display="none"},t}();e.ElementDisplayer=r},function(t,e){"use strict";var r=function(){function t(){}return t.prototype.create=function(){Plotly.newPlot(this.canvasElement,this.data,this.layout)},t.prototype.update=function(){Plotly.redraw(this.canvasElement)},t}();e.Chart=r},function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},a=r(9),i=r(12),o=function(t){function e(e,r){t.call(this,e,r),this.tableMakerInit()}return n(e,t),e.prototype.tableMakerInit=function(){var t=["Url","Min (s)","Max (s)"],e=["url","mintime","maxtime"],r=new i.HeaderPropertyMaper(t,e);this.tableMaker=new i.TableMaker(this.htmlElement,r),this.tableMaker.tableClass="table table-bordered table-hover",this.tableMaker.createTabelInContainer()},e.prototype.displayFromLocalModel=function(){this.tableMaker.curentColumnNumber=1,this.tableMaker.fillTableFrom(this.model.results),this.tableMaker.curentColumnNumber=1},e.prototype.displayFromOuterModel=function(t){this.tableMaker.addRow(t)},e.prototype.clear=function(){var t=this.tableMaker.tableElement.children[0];t&&(t.innerHTML=""),this.tableMaker.addHeader()},e}(a.ElementDisplayer);e.TableDisplayer=o},function(t,e){"use strict";var r=function(){function t(t,e){this.numberColumn=!0,this.maper=e,this.tableContainer=t,this.curentColumnNumber=1}return t.prototype.makeHeaderRow=function(){var t="";return t+="<tr>",t+=this.makeHeadersByMaper(),t+="</tr>"},t.prototype.makeHeadersByMaper=function(){for(var t=this.numberColumn?"<th>#</th>":"",e=0,r=this.maper.list;e<r.length;e++){var n=r[e];t+="<th>"+n.headerName+"</th>"}return t},t.prototype.makeTableRow=function(t){var e=document.createElement("tr");return e.innerHTML=this.maper?this.makeTableDataByMaper(t):this.makeTableDataByDefault(t),e},t.prototype.makeClassAttribute=function(t){return""+(t?"class="+t:"")},t.prototype.addRows=function(t){for(var e=0,r=t;e<r.length;e++){var n=r[e];this.addRow(n)}},t.prototype.fillTableFrom=function(t,e){switch(void 0===e&&(e=n.Replace),e){case n.Append:this.addRows(t);break;case n.Replace:this.tableElement.innerHTML="",this.addHeader(),this.addRows(t)}},t.prototype.addRow=function(t){this.tableElement.children[0].appendChild(this.makeTableRow(t))},t.prototype.addHeader=function(){this.tableElement.innerHTML=this.makeHeaderRow()},t.prototype.createTabelInContainer=function(t){var e=t||this.tableContainer;if(!e)throw Error("I can not insert a table into nowhere, tableContainer is undefined");var r=document.createElement("table");this.tableClass&&(r.className=this.tableClass),this.tableElement=r,e.appendChild(r)},t.prototype.makeTableDataByDefault=function(t){var e=this.addRowCounter();for(var r in t)e+="<td>"+t[r]+"</td>";return e},t.prototype.makeTableDataByMaper=function(t){for(var e=this.addRowCounter(),r=0,n=this.maper.list;r<n.length;r++){var a=n[r];e+="<td>"+t[a.propertyName]+"</td>"}return e},t.prototype.addRowCounter=function(){return this.numberColumn?"<td>"+this.curentColumnNumber++ +"</td>":""},t}();e.TableMaker=r,function(t){t[t.Replace=0]="Replace",t[t.Append=1]="Append"}(e.InsertionMode||(e.InsertionMode={}));var n=e.InsertionMode,a=function(){function t(t,e){this.list=[],t&&e&&this.addMap(t,e)}return t.prototype.addMap=function(t,e){if(t.length!==e.length)throw Error("Arrays must have the same length");for(var r=0;r<t.length;r++)this.list.push(new i(t[r],e[r]))},t}();e.HeaderPropertyMaper=a;var i=function(){function t(t,e){this.headerName=t,this.propertyName=e}return t}();e.HeaderProperty=i},function(t,e){"use strict";var r=function(){function t(t){var e=$.connection.notificationHub;e.client.displayMessage=t;var r=this;$.connection.hub.start().done(function(){r.connectionId=$.connection.hub.id})}return t}();e.Notifier=r}]);
//# sourceMappingURL=index.js.map