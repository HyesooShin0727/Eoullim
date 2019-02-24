(function(ssq){
	var	struc={}, config={}, listener={};
	ssq(document).ready(function(){ struc.init() });
	function trace(a){ var b=""; for(var i=0;i<arguments.length;i++){if(i>0)b+=", ";b+=arguments[i];} try{console.log(b);}catch(e){}}
	struc = {
		init : function() {
			//struc.regist();
			struc.pageMethod();
			//listener.start();
		},
		regist : function() {

		},
		pageMethod : function () {
			detailTab();
			//scrollController();
		}
	};
	listener = {
		start : function(){
			ssq(window).bind("resize", listener.resizePage); listener.resizePage();
			ssq("a[href=#]").on("click",function(e){
				e.preventDefault();
			});
			ssq(window).on('scroll', function() {scrollController();});
		},
		resizePage : function(e) {
			scrollController();
			if (ssq("div.gnb_m").css("display") != "none") {
				ssq('#detailTab').removeAttr("style");
				ssq('#goodsCart').removeAttr("style");
			}
		}
	};

	var detailTabScroll = true;
	// 스크롤 시 화면에 픽스되는 요소 제어
	function scrollController() {
		var currentScrollTop = ssq(window).scrollTop();
		var hH = ssq("#header").height()+ssq("#header").position().top;
		var ftH = ssq("#footer").height() + 292;
		var asH = ssq("#goodsCart").height();
		var scroll_pos = ssq('div.detail_wrap').offset().top - hH;
		//trace(currentScrollTop, scroll_pos, hH);
		var max_scl =  ssq(document).height()-(asH+ftH) - hH-20;
		if (currentScrollTop < scroll_pos) {
			ssq('.detail_wrap').removeClass('scroll_fix');
			ssq('#detailTab').removeClass('scroll_fix')
				.removeAttr("style");
			ssq('#goodsCart').removeClass('scroll_fix')
				.removeClass('scroll_max')
				.removeAttr("style");
		} else if (currentScrollTop < max_scl) {
			ssq('.detail_wrap').addClass('scroll_fix');
			ssq('#detailTab').addClass('scroll_fix')
				.css({"margin-top":(hH-100)});
			ssq('#goodsCart').removeClass('scroll_max')
				.addClass('scroll_fix')
				.removeAttr("style")
				.css({"margin-top":(hH-100)});
		} else {
			ssq('#goodsCart').removeClass('scroll_max')
				.addClass('scroll_fix')
				.removeAttr("style")
				.css({"margin-top":(hH-100)-(currentScrollTop - max_scl)});
		}

		if(detailTabScroll){
			var detailTabIdx = 0;
			ssq('#detailTab > li > a').each(function (i) {
				var offset = ssq(this.hash).offset();
				var tabH =  ssq('#detailTab').height();
				var hH = ssq('#header').height();
				if(offset.top-(hH+tabH)+10 <= currentScrollTop){
					detailTabIdx = i;
					ssq(this).parent().siblings('.on').removeClass('on').end().addClass('on');
				}
			});
		}
	}
	function detailTab() {
	    var detailTab = ssq('#detailTab > li > a');
	    detailTab.click(function (e) {
	        e.preventDefault();
	        detailTabScroll = false;
	        var tabH = ssq('#detailTab').height();
	        var hH = ssq('#header').height();
	        ssq(this).parent().addClass('on');
	        ssq(this).parent().siblings().removeClass('on');
	        console.log(hH, tabH);
	        ssq('html, body').stop().animate({
	            scrollTop: this.offsetTop + (hH + tabH) - 50 
	        }, 500, function () { detailTabScroll = true; });
	    });
	}

})(jQuery);