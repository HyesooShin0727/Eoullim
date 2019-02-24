var lnbRefresh;
(function(ssq){
	var	struc={}, config={}, listener={};
	ssq(document).ready(function(){ struc.init() });
	function trace(a){ var b=""; for(var i=0;i<arguments.length;i++){if(i>0)b+=", ";b+=arguments[i];} try{console.log(b);}catch(e){}}
	struc = {
		init : function() {
			struc.regist();
			struc.pageMethod();
			listener.start();
		},
		regist : function() {

		},
		pageMethod : function () {
			lnbCate('#lnb > .depth1 > a');
			lnbCate('#goodsCate .depth1 > a');
			lnbCate('#filterCate .depth1 > a');
			goodsLayer('#btnCate', '#cateLayer');
			goodsLayer('#btnFilter', '#filterLayer');
			customScrollBar();
		}
	};
	listener = {
		start : function(){
			ssq(window).bind("resize", listener.resizePage); listener.resizePage();
			ssq("a.scroll_buttom").on("click", function(e){ e.preventDefault(); goScroll(ssq(this).attr("href")); });
			ssq("a[href=#]").on("click",function(e){
				e.preventDefault();
			})
		},
		resizePage : function(e) {
		}
	};

	lnbRefresh = (function(){
		listCategoryRefresh();
		customScrollBar();
	})

	listCategoryRefresh = (function(){
		lnbCate('#lnb > .depth1 > a');
		lnbCate('#filterCate .depth1 > a');
	})


	function lnbCate(obj){
		var lnbDepth1 = ssq(obj);
		lnbDepth1.on("click",function(e){
			e.preventDefault();
			ssq(this).parent().toggleClass('on');
			ssq(this).parent().children('ul').slideToggle(300);
			ssq(this).parent().siblings().removeClass('on');
			ssq(this).parent().siblings().children('ul').slideUp(300);
		});
	}
	function customScrollBar(){
		ssq("#scrollbarLine").mCustomScrollbar();
		ssq("#scrollbarFunction").mCustomScrollbar();
		ssq("#scrollbarPrice").mCustomScrollbar();
	}
	function goodsLayer(obj, obj2){
		var body = ssq('body');
		var btnOpen = ssq(obj);
		var layerBox = ssq(obj2);
		var btnClose = layerBox.children('.btn_close');
		btnOpen.on("click",function(e){
			e.preventDefault();
			layerBox.addClass('on');
			body.addClass('layer_on');
		});
		btnClose.on("click",function(e){
			e.preventDefault();
			layerBox.find('li').removeClass('on');
			layerBox.find('li').children('ul').slideUp(300);
			layerBox.removeClass('on');
			body.removeClass('layer_on');
		});
	}
})(jQuery);
