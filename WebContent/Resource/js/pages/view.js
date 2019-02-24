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
			imgLarge();
			viewSlider();
			goodsSlider('#goodsSlider1');
			goodsSlider('#goodsSlider2');
			goodsSlider('#goodsSlider3');
			goodsTab('#goodsTab1');
			goodsTab('#goodsTab2');
			goodsMobileDetail();
			giftSlider('#giftSlider');
			giftSlider('#colorSlider');
			giftSlider('#ingredientSlider');
		}
	};
	listener = {
		start : function(){
			ssq(window).bind("resize", listener.resizePage); listener.resizePage();
			ssq("a[href=#]").on("click",function(e){
				e.preventDefault();
			});
		},
		resizePage : function(e) {
		
		}
	};
	function imgLarge(){
		var thumbImg = ssq('#thumbImg')
		var ImgLarge = ssq('#imgLarge');
		thumbImg.children('li').each(function(i){
			 var obj = ssq(this);
			 obj.children('a').bind('click', function(e){
				 var obj = ssq(this);
				 var objImg = obj.children('img:first');
				 var data = objImg.attr('data-large'); 
					ImgLarge.attr('src',data);
					thumbImg.children('li').removeClass('on');
					obj.parent('li').addClass('on');
			 })
		 });	
	}
	function viewSlider(){
		var vSlider = ssq('#viewSlider');
		vSlider.slick({
			infinite: false,
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}
	function goodsTab(obj){
		var goodsTabHeading = ssq(obj+' > h2');
		var goodsTabCont = ssq(obj+' > .cont');
		ssq(obj+' > h2:not(.on)').next().hide();
		goodsTabHeading.children('a').click(function(e){
			goodsTabHeading.removeClass('on');
			ssq(this).parent().addClass('on');
			goodsTabCont.hide();
			ssq(this).parent().next().show();
			return false;
		});
	}
	function goodsSlider(obj){
		var gSlider = ssq(obj);
		gSlider.slick({
			infinite: false,
			dots: true,
			arrows: false,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				}
			]
		});
	}
	function goodsMobileDetail(){
		var detailTab = ssq('#goodsDetail > li > h2 > a');
		detailTab.click(function(e){
			e.preventDefault;
			var tabOffset = ssq('#goodsDetail').offset();
			var hH = ssq('#header').height();
			ssq(this).parents('li').toggleClass('on');
			ssq(this).parents('li').siblings().removeClass('on');
			console.log(tabOffset);
			ssq('html, body').stop().animate({
				scrollTop: tabOffset.top - hH
			}, 500);
					
		});
	}
	function giftSlider(obj){
	var gfSlider = ssq(obj);
		gfSlider.slick({
			infinite: false,
			dots: true,
			arrows: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					autoplay: false,
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				}
			]
		});
	}
	
})(jQuery);

jQuery(function(ssq){
	var articleAnchor = ssq('.qna_list .q > span > a');
	var article = ssq('.qna_list > .qna_b > .article');
	article.addClass('hide');
	article.find('.a').hide();
	articleAnchor.click(function(){
		var myArticle = ssq(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show');
			article.find('.a').slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
		}
		return false;
	});
});
var pickPop,  fixPop1;
function pickPopup(no) {
		no == 0 || no == undefined ? no = "" : no = no;
	
	if ( no != "" )	{
		jQuery.ajax({
			url : "/ext/store_data.asp",
			type : "get",
			data : "storeNo="+no,
			success : function(data){
				if ( data != "") {
					result = eval(data);

					var storeNo = result[0].storeNo;
					var storeName = unescape(result[0].storeName);
					var storeAddress = unescape(result[0].storeAddress);
					var storeTel = result[0].storeTel;
					var storeX = result[0].storeX;
					var storeY = result[0].storeY;

					var formStr = "";
					formStr += '<div class="pick_popup">';
					formStr += '	<div class="popup_inner">';
					formStr += '		<p class="pick_info">';
					formStr += '			<strong>' + storeName + '</strong>';
					formStr += '			<span>' + storeAddress + '</span>';
					formStr += '			<span>' + storeTel + '</span>';
					formStr += '		</p>';
					formStr += '		<div class="pick_map" id="store_map" style="width:100%;"><!--img src="/images/_temp/img_map01.jpg" alt="임시 이미지" class="tm_hidden"><img src="/images/_temp/img_map01_m.jpg" alt="임시 이미지" class="d_hidden"--></div>';
					formStr += '	</div>';
					formStr += '	<button class="close" id="closeBtn1">팝업닫기</button>';
					formStr += '</div>';

					pickPop = new CoverLayer(formStr, {
						bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
						bg_opacity : 0.4, 		// 백그라운드 투명도. 기본값:0.75
						close_btn_id : "closeBtn1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
						z_index : 99998, 			// 레이어의 z-index 값 기본값:99990
						cast_speed : 500,		// 레이어 생성 트위닝 속도
						close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
						scroll_fix : false
						//align_x : "left",			// "center"(기본값), "left", "right"
						//align_x_value : 50,				// 정수, 0(기본값)
						//align_y : "top",			// "middle"(기본값), "left", "right"
						//align_y_value : 50				// 정수, 0(기본값)
					});
					loadDaumMap( storeY, storeX );
				}
			}
		})
	}
};
function loadDaumMap( storeLAT, storeLNG ){
	
	var storeLAT = storeLAT;
	var storeLNG = storeLNG;

	var position = new daum.maps.LatLng(storeLAT, storeLNG);
	var container = document.getElementById('store_map');

	var options = {
		center: position,
		level: 4,
		mapTypeId: daum.maps.MapTypeId.ROADMAP
	};

	map = new daum.maps.Map(container, options);

	var zoomControl = new daum.maps.ZoomControl();
	map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
	
	map.setCenter( position );
	
	var imageSize = new daum.maps.Size(40, 42); 
	var imageSrc = "http://i1.daumcdn.net/localimg/localimages/07/mapjsapi/default_marker.png";
	// 마커 이미지를 생성합니다    
	var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize); 
	
	// 마커를 생성합니다
	marker = new daum.maps.Marker({
		map: map, // 마커를 표시할 지도
		position: new daum.maps.LatLng(storeLAT, storeLNG), // 마커를 표시할 위치
		image : markerImage // 마커 이미지 
	});
}

function fixBuyPopup(v1) {

	$.ajax({
		url : "/product/view_mobile_buypop.asp",
		method : "post",
		dataType : "html",
		data : {
			productNo : v1
		},
		success : function(html){
			
			fixPop1 = new CoverLayer(html, {
				bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
				bg_opacity : 0.4, 		// 백그라운드 투명도. 기본값:0.75
				close_btn_id : "closeBtn2ActiveBtn", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
				z_index : 99998, 			// 레이어의 z-index 값 기본값:99990
				cast_speed : 500,		// 레이어 생성 트위닝 속도
				close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
				scroll_fix : false,
				align_x : "left",			// "center"(기본값), "left", "right" 
				//align_x_value : 30,				// 정수, 0(기본값)
				align_y : "bottom"			// "middle"(기본값), "left", "right"
				//align_y_value : 0				// 정수, 0(기본값)
			});					
			
			setTimeout(function(){
				linkFormInit();
				var goodsTabHeading = jQuery('#goodsTab2 > h2');
				var goodsTabCont = jQuery('#goodsTab2 > .cont');
				jQuery('#goodsTab2 > h2:not(.on)').next().hide();
				goodsTabHeading.children('a').click(function(e){
					goodsTabHeading.removeClass('on');
					jQuery(this).parent().addClass('on');
					goodsTabCont.hide();
					jQuery(this).parent().next().show();
					return false;
				});
			},100);

		
		}
	})		

};


$("form[linkChild] > input").on("change", function(){
	var o = $(this);
	var on = $(this).attr("name");
	$("form[linkForm] > input[name='" + on + "']").val(o.val());
})


function qnaWriteSend(){

	var obj = document.myform;
	
	if(obj.BoardTitle.value == ""){
		alert("문의하실 제목을 적어주세요.");
		obj.BoardTitle.focus();
		return false;
	}
	if(obj.BoardContents.value == ""){
		alert("문의하실 내용을 적어주세요.");
		obj.BoardContents.focus();
		return false;
	}
	
	changeToLoading();	
	obj.submit();

}