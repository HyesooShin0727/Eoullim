var productStarPoint = 5;
$(function(){
	$("div.grade_box > span > i").on({
		"mouseover" : function(e){
			$(this).addClass("star_on").prevAll().addClass("star_on");
			$(this).nextAll().removeClass("star_on");
		},
		"mouseout" : function(e){
			var idx = productStarPoint - 1;
			var obj = $("div.grade_box > span > i").eq(idx);
			obj.addClass("star_on").prevAll().addClass("star_on")
			obj.nextAll().removeClass("star_on");
		},
		"click" : function(e){
			productStarPoint = $(this).index() + 1;
		}
	})
	$("select.sel_star").on("change",function(){
		productStarPoint = parseInt($(this).val());
	})
	
	
	$("div.review_star > span.star > i").on({
		"mouseover" : function(e){
			$(this).addClass("on").prevAll().addClass("on");
			$(this).nextAll().removeClass("on");
		},
		"mouseout" : function(e){
			var idx = productStarPoint - 1;
			var obj = $("div.review_star > span.star > i").eq(idx);
			obj.addClass("on").prevAll().addClass("on");
			obj.nextAll().removeClass("on");
		},
		"click" : function(e){
			productStarPoint = $(this).index() + 1;
			$(this).parents('form').find('input[name=score]').val(productStarPoint)
			//console.log($(this).parents('form').find('input[name=score]').val(productStarPoint));
			//console.log(productStarPoint);
		}
		
	})
	
	$("select.sel_star").on("change",function(){
		productStarPoint = parseInt($(this).val());
	})
	
	
	
	
})

function productStarPointPrint(o){
	//console.log(o);
	var obj = $("li.reply[data-seq=" + o.seq + "]");
	var extPoint = o.extPoint;
	$("div.list_subject > p.time",obj).prepend(function(){
		var tmpHtml = "<span class=\"star\">";
		for(i=1;i<=extPoint;i++){
			tmpHtml += "<img src=\"/images/social/ico_star_on.png\" alt=\"별" + i + "점\" />"
		}
		for(i=extPoint;i<5;i++){
			tmpHtml += "<img src=\"/images/social/ico_star.png\" alt=\"별" + i + "점\" />"
		}
		tmpHtml += "</span>";
		return tmpHtml;
	});
}