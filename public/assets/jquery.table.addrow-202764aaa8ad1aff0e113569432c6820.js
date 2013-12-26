(function(a){if(typeof a.fn.btnAddRow=="undefined"){var b=[],c="ExpandableTable";function d(a,b){a&&this.init(a,b)}d.prototype.init=function(d,e){return b.push(this),this.target=a(d).data(c,this),this.maxRow=e,this.seed=Math.round(Math.random()*1e4),this.onAddRow=[],this},d.prototype.live=function(){if(!this.goLive){var b=this;this.update(),a(".addRow"+this.seed).live("click",function(){var a=b.addRow()}),a(".delRow"+this.seed).live("click",function(){var c=a(this).closest("."+b.cloneClass),d=c.clone();c.hide().find("*").each(function(b,c){!a(c).data("destroy");for(var d in a(c).data("destroy"))a(c).data("destroy")[d](c)}),c.remove(),a(".addRow"+b.seed).attr("disabled",!1),b.update(),b.deleteCallBack&&a.isFunction(b.deleteCallBack)&&b.deleteCallBack(d)}),a(".autoAdd"+this.seed).live("keyup",function(){(this.nodeName.toLowerCase()=="textarea"&&a(this).html()!=""||this.nodeName.toLowerCase()=="textarea"&&a(this).val()!=""||this.nodeName.toLowerCase()=="input"&&a(this).val()!="")&&b.addrow()}),this.goLive=!0}return this},d.prototype.updateRowNumber=function(){var b=this;return b.rowNumColumn&&a("."+b.cloneClass,b.target).each(function(c,d){var e=c+1;a("."+b.rowNumColumn,a(d)).each(function(b,c){a(c).is(":text, textarea")?a(c).val(e):a(c).text(e)})}),b},d.prototype.updateInputBoxName=function(){return a("."+this.cloneClass,this.target).each(function(b,c){var d=b+1;a("input,textarea",a(c)).each(function(b,c){if(a(c).attr("name")!=""){var e=a(c).attr("name").replace(/\d+$/,"")+d;a(c).attr("name",e)}})}),this},d.prototype.updateInputBoxId=function(){var b=this;return a("."+b.cloneClass,this.target).each(function(b,c){var d=b+1;a("input,textarea",a(c)).each(function(b,c){if(a(c).attr("id")!=""){var e=a(c).attr("id").replace(/\d+$/,"")+d;a(c).removeAttr("id").attr("id",e)}})}),this},d.prototype.updateOddRowCSS=function(){return this.oddRowCSS&&(this.target.find("."+this.oddRowCSS).removeClass(this.oddRowCSS),this.target.find("tr:odd").addClass(this.oddRowCSS)),this},d.prototype.updateEvenRowCSS=function(){return this.evenRowCSS&&(this.target.find("."+this.evenRowCSS).removeClass(this.evenRowCSS),this.target.find("tr:even").addClass(this.evenRowCSS)),this},d.prototype.updateRowCount=function(){if(this.displayRowCountTo){var b=a("."+this.cloneClass,this.target).size();a("."+this.displayRowCountTo,this.target).each(function(c,d){var e=d.nodeName.toLowerCase();e=="input"||e=="textarea"?a(d).val(b):a(d).html(b)})}return this},d.prototype.update=function(){var b=this;return this.delRowButtons=a(".delRow"+this.seed,this.target),this.delRowButtons.size()==1?this.delRowButtons.hide():this.autoAddRow?this.delRowButtons.not(":last").show():this.delRowButtons.show(),this.autoAddRow&&(this.target.find(".autoAdd"+this.seed).removeClass("autoAdd"+b.seed),this.target.find("."+b.cloneClass+":last").find("input,textarea").addClass("autoAdd"+this.seed)),this.inputBoxAutoNumber&&(this.updateInputBoxName(),this.updateInputBoxId()),this.inputBoxAutoId&&this.updateInputBoxId(),this.hideFirstOnly&&this.hideFirstOnly!=""&&(a("."+this.cloneClass).eq(0).find("."+this.hideFirstOnly).hide(),a("."+this.cloneClass).not(":first").find("."+this.hideFirstOnly).show()),this.showFirstOnly&&this.showFirstOnly!=""&&(a("."+this.cloneClass).eq(0).find("."+this.showFirstOnly).show(),a("."+this.cloneClass).not(":first").find("."+this.showFirstOnly).hide()),this.updateRowNumber().updateOddRowCSS().updateEvenRowCSS().updateRowCount(),this},d.prototype.addRow=function(){var b;if(!this.maxRow||this.maxRow&&a("."+this.cloneClass).size()<this.maxRow){this.delRowButtons.show();var c=a("."+this.cloneClass+":last",this.target);this.newRow=b=c.clone(),b.find("input:text").val(""),b.find("textarea").text(""),this.autoAddRow&&b.find("."+this.cloneClass).hide(),b.insertAfter(c),this.ignoreClass&&this.ignoreClass!=""&&b.find("."+this.ignoreClass).each(function(){this.nodeName.toLowerCase()!="input"||a(this).attr("type").toLowerCase()!="text"&&a(this).attr("type").toLowerCase()!="hidden"?this.nodeName.toLowerCase()=="td"?a(this).html(" "):a(this).html()!=""&&a(this).text(""):a(this).val("")}),b.find("input:hidden").not("."+this.cloneClass).val(""),this.hideFirstOnly&&this.hideFirstOnly!=""&&b.find("."+this.hideFirstOnly).show(),this.showFirstOnly&&this.showFirstOnly!=""&&b.find("."+this.hideFirstOnly).hide(),this.maxRow&&a("."+this.cloneClass).size()>=this.maxRow&&a(".addRow"+this.seed).attr("disabled",!0),this.target.find("."+this.cloneClass+":first").closest("tr").find("*").each(function(c,d){if(a(this).data("init")){var e=b.find("*").eq(c),f=e[0];e.data("init",{});for(var g in a(this).data("init"))e.data("init")[g]=a(this).data("init")[g],e.data("init")[g](f)}}),this.update()}return this.addCallBack&&a.isFunction(this.addCallBack)&&this.addCallBack(b),b},a.fn.btnAddRow=a.fn.tableAutoAddRow=function(e,f){var g;typeof e=="object"?g=f&&a.isFunction(f)?f:null:g=e&&a.isFunction(e)?e:null,e=a.extend({maxRow:null,ignoreClass:null,rowNumColumn:null,autoAddRow:!1,oddRowCSS:null,evenRowCSS:null,inputBoxAutoNumber:!1,inputBoxAutoId:!1,displayRowCountTo:null,maxRowAttr:null,hideFirstOnly:null,showFirstOnly:null,cloneClass:null,evenRowAttr:null,oddRowAttr:null,rowCountAttr:null,autoNumAttr:null,autoIdAttr:null},e),this.each(function(){var b,f,h;typeof e.cloneClass=="string"&&e.cloneClass!=""?a(this).closest("table").find("."+e.cloneClass).size()>0?(b=a(this).closest("table"),h=e.cloneClass):a(this).closest("."+e.cloneClass).size()>0?(b=a(this).closest("."+e.cloneClass).closest("table"),h=e.cloneClass):b=this.nodeName.toLowerCase()=="table"?a(this):a(this).closest("table"):b=this.nodeName.toLowerCase()=="table"?a(this):a(this).closest("table"),e.maxRowAttr&&typeof a(this).attr(e.maxRowAttr)!="undefined"&&(e.maxRow=a(this).attr(e.maxRowAttr)),e.oddRowAttr&&typeof a(this).attr(e.oddRowAttr)!="undefined"&&(e.oddRowCSS=a(this).attr(e.oddRowAttr)),e.evenRowAttr&&typeof a(this).attr(e.evenRowAttr)!="undefined"&&(e.evenRowCSS=a(this).attr(e.evenRowAttr)),e.rowCountAttr&&typeof a(this).attr(e.rowCountAttr)!="undefined"&&(e.displayRowCountTo=a(this).attr(e.rowCountAttr)),e.autoNumAttr&&typeof a(this).attr(e.autoNumAttr)!="undefined"&&(e.inputBoxAutoNumber=a(this).attr(e.autoNumAttr)),e.autoIdAttr&&typeof a(this).attr(e.autoIdAttr)!="undefined"&&(e.inputBoxAutoId=a(this).attr(e.autoIdAttr)),b.size()>0&&(typeof b.data(c)=="undefined"||b.data(c)===null?(f=new d(b,e.maxRow),this.nodeName.toLowerCase()!="table"&&a(this).addClass("addRow"+f.seed).data(c,f)):this.nodeName.toLowerCase()!="table"&&a(this).addClass("addRow"+b.data(c).seed).data(c,b.data(c)),a(this).data(c)&&(f=a(this).data(c)),f.maxRow=e.maxRow,f.maxRow=e.maxRow,f.ignoreClass=e.ignoreClass,f.rowNumColumn=e.rowNumColumn,f.oddRowCSS=e.oddRowCSS,f.evenRowCSS=e.evenRowCSS,f.autoAddRow=e.autoAddRow,f.inputBoxAutoNumber=e.inputBoxAutoNumber,f.displayRowCountTo=e.displayRowCountTo,f.hideFirstOnly=e.hideFirstOnly,f.showFirstOnly=e.showFirstOnly,typeof h=="string"&&f.cloneClass!=h?f.cloneClass=h:f.cloneClass="cloneRow"+f.seed,f.updateRowCount(),f.addCallBack=g)});for(var h=0;h<b.length;h++)b[h].goLive||b[h].live()},a.fn.btnDelRow=function(e,f){var g;typeof e=="object"?g=f&&a.isFunction(f)?f:null:g=e&&a.isFunction(e)?e:null,e=a.extend({cloneClass:null},e),this.each(function(){var b,f,h;a(this).closest("."+e.cloneClass).size()>0?(f=a(this).closest("."+e.cloneClass).closest("table"),h=e.cloneClass):f=a(this).hide().closest("table"),f.size()>0&&(typeof f.data(c)=="undefined"||f.data(c)===null?(b=new d(f),a(this).addClass("delRow"+b.seed).data(c,b)):a(this).addClass("delRow"+f.data(c).seed).data(c,f.data(c)),a(this).data(c)&&(b=a(this).data(c),b.deleteCallBack=g),typeof b.cloneClass!="string"||b.cloneClass==""?(b.cloneClass="cloneRow"+b.seed,a(this).closest("tr").addClass("cloneRow"+b.seed)):typeof h=="string"?b.cloneClass=h:(b.cloneClass="cloneRow"+b.seed,a(this).closest("tr").addClass("cloneRow"+b.seed)),b.update())});for(var h=0;h<b.length;h++)b[h].goLive||b[h].live()}}})(jQuery)