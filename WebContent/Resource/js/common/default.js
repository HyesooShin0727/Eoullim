
var comingsoonCellcureLab;

(function(ssq){
	var struc={}, config={}, listener={};
	ssq(document).ready(function(){ struc.init() });
	function trace(a){ var b=""; for(var i=0;i<arguments.length;i++){if(i>0)b+=", ";b+=arguments[i];} try{console.log(b);}catch(e){}}
	struc = {
		init : function() {
			struc.regist();
			struc.pageInit();
			listener.start();
			if(!ssq('body').hasClass('cellcure')&&!ssq('body').hasClass('dearsir')&&!ssq('body').hasClass('peaufinee')&&!ssq('body').hasClass('hanskin'))quickMenu.init();
		},
		regist : function() {

		},
		pageInit : function () {
			config.scrollTop = ssq(window).scrollTop();

			skipNavigation();
			searchFn();
			createDesktop();
			createMobile();
			btnTop();
		}
	};
	listener = {
		start : function(){
			ssq(window).on("resize", listener.resizePage); listener.resizePage();
			ssq("a.scroll_buttom").on("click", function(e){ e.preventDefault(); goScroll(ssq(this).attr("href")); });
			ssq("a[href=#]").on("click",function(e){ e.preventDefault(); });
			ssq(window).on("scroll", listener.scrollPage);

		},
		resizePage : function(e) {
			listener.scrollPage();
		},
		scrollPage : function(e) {
			scrollHeader();
		}

	};
	quickMenu = {
		posTop : 0,
		init : function() {
			if($('#wideContents').length > 0){
				$('#quickMenu').hide();
			}else{
				$('#quickMenu').show();
				//quickMenu.posTop = $('.main_area').length > 0 ? $('.main_area').offset().top : ($('#contents').offset().top+50);				
				//171102 doa
				if ( $('#main_visual').length > 0 )
				{
					quickMenu.posTop = $('#main_visual').offset().top;

				}
				else
				{
					if ( $('#contents').length > 0 )
					{
						quickMenu.posTop = $('#contents').offset().top+50;
					}

				}   

				$(window).scroll(function() {
					quickMenu.setPos();
				}).scroll();
				quickMenu.setSlider();
			}
		},
		setPos : function() {
			var scrollTop = $(window).scrollTop()+100;
			if(scrollTop >= quickMenu.posTop){
				$('#quickMenu').addClass('fixed').css({'top': ''});
				//$('#quickMenu').css({'top': scrollTop});
			}else{
				$('#quickMenu').removeClass('fixed').css({'top': quickMenu.posTop});
			}
		},
		setSlider : function() {
			ssq('#recp_slider').slick({
				infinite: false,
			  	slidesToShow: 2,
			 	slidesToScroll: 2,
			 	dots: false,
			 	arrows: true,
			 	vertical: true
			});
		}
	};
	function skipNavigation(){
		var skipNaviAnchor = ssq("#skipNavi > li > a");
		skipNaviAnchor.click(function(){
			ssq(skipNaviAnchor.attr("href"))
			.attr("tabindex","0")
			.css("outline","0")
			.focus();
		});
	}
	function searchFn(){
		var searchBox = ssq('.menuHeader .search_box');
		var btnSearch = ssq('#btnSearch');
		var bgSearch = ssq('.bg_search_box');
		var openSearchBox = function(){
			btnSearch.addClass('on');
			bgSearch.addClass('on');
			searchBox.slideDown();
		};
		var closeSearchBox = function(){
			btnSearch.removeClass('on');
			bgSearch.removeClass('on');
			searchBox.slideUp();
		};
		/* search */
		btnSearch.click(function(e){
			if(btnSearch.hasClass('on')){
				closeSearchBox();
			}else{
				openSearchBox();
			}
			return false;
		});
		bgSearch.click(function(e){
			closeSearchBox();
			return false;
		});
	}

	function createDesktop(){
		var gnb1depth = ssq('#gnb .depth1');
		var gnb2depth = ssq('#gnb .depth2_box');
		var gnb3depth = ssq('#gnb .depth3');
		var gnbLastDepth1 = ssq('.gnb_l > li:last-child .depth2 > li:last-child li:last-child > a');
		var gnbLastDepth2 = ssq('.gnb_r > li .depth2 > li > a:last-child');
		var tmpPathDepth = ssq('#gnb .depth1.active');

		/* gnb */
		gnb1depth.mouseenter(function(){
			ssq(this).siblings().removeClass('over');
			tmpPathDepth.removeClass('active');
			ssq(this).parent().siblings('ul').find('li').removeClass('over').end().addClass('over');
			ssq(this).children('div').fadeIn(500);

			//ssq(this).children('.depth2_box').show();
			setTimeout(function(){
				ssq('#type_slider').slick('setPosition');
				ssq('#sg_slider').slick('setPosition');
				ssq('.gnb .depth3 .goods_list').slick('setPosition');
				ssq('#event_slider').slick('setPosition');
			});
			//TweenMax.fromTo(ssq(this).children('.depth2_box'),0.5,{alpha:0},{alpha:1});
		});
		gnb1depth.mouseleave(function(){
			ssq(this).removeClass('over');
			tmpPathDepth.addClass('active');
			ssq(this).children('div').stop().hide();
			//TweenMax.fromTo(ssq(this).children('.depth2_box'),0.5,{alpha:1},{alpha:0,display:'none'});
		 });
		gnb1depth.keydown(function(){
			ssq(this).siblings().removeClass('over');
			ssq(this).parent().siblings('ul').find('li').removeClass('over').end().addClass('over');
			ssq(this).children('div').fadeIn(500);
			//ssq(this).children('.depth2_box').show();
			setTimeout(function(){
				sliderReset();
			});
			//TweenMax.fromTo(ssq(this).children('.depth2_box'),0.5,{alpha:0},{alpha:1});
		});
		gnbLastDepth1.focusout(function(){
			gnb2depth.stop().hide();
		});
		gnbLastDepth2.focusout(function(){
			gnb2depth.stop().hide();
		});

		gnb2depth.find('.depth2 a').mouseenter(function(){
			if(!ssq(this).parent().hasClass('active')){
				var idx = gnb2depth.find('.depth2 li').index(ssq(this).parent());
				ssq(this).parent().siblings('.active').removeClass('active').end().addClass('active');
				gnb3depth.children('.item').eq(idx).siblings('.active').removeClass('active').end().addClass('active');

				setTimeout(function(){
					sliderReset();
				});

				TweenMax.fromTo(gnb3depth.children('.item').eq(idx),0.5,{alpha:0,y:50},{alpha:1,y:0});
			}

		});

		ssq('#type_slider').slick({
			infinite: true,
		  	slidesToShow: 1,
		 	slidesToScroll: 1,
		 	dots: true,
		 	arrows: false,
		 	fade: true,
		 	autoplay: true,
		 	swipe: false
		});

		ssq('#function_slider').slick({
			infinite: true,
		  	slidesToShow: 1,
		 	slidesToScroll: 1,
		 	dots: true,
		 	arrows: false,
		 	fade: true,
		 	autoplay: true,
		 	swipe: false
		});

		ssq('#brand_slider').slick({
			infinite: true,
		  	slidesToShow: 1,
		 	slidesToScroll: 1,
		 	dots: true,
		 	arrows: false,
		 	fade: true,
		 	autoplay: true,
		 	swipe: false
		});

		/*$('.brand_item a').mouseenter(function(){
			var idx = $('.brand_item').index($(this).parent());
			$('#brand_slider').slick('slickGoTo', idx);
		});*/

		ssq('#sg_slider').slick({
			infinite: true,
		  	slidesToShow: 2,
		 	slidesToScroll: 2,
		 	dots: true,
		 	autoplay: true
		});

		ssq('.gnb .depth3 .goods_list').slick({
			infinite: true,
		  	slidesToShow: 4,
		 	slidesToScroll: 4,
		 	dots: true,
		 	arrows: false,
		 	autoplay: true
		});

		ssq('#event_slider').slick({
			infinite: true,
		  	slidesToShow: 4,
		 	slidesToScroll: 4,
		 	dots: true,
		 	arrows: false,
		 	autoplay: true
		});

		function sliderReset() {
			ssq('#type_slider').slick('setPosition');
			ssq('#function_slider').slick('setPosition');
			ssq('#brand_slider').slick('setPosition');
			ssq('#sg_slider').slick('setPosition');
			ssq('.gnb .depth3 .goods_list').slick('setPosition');
			ssq('#event_slider').slick('setPosition');
		}
	}

	function scrollHeader() {
		var wrap = ssq('#wrap');
		var header = ssq('div#header');
		var miniHeader = ssq('#miniHeader');
		var category = ssq('.gnb .depth2_box');

		/*if (ssq("div.gnb_m").css("display") != "none") {
			header.removeAttr("style");
			return;
		}*/
		var scrollTop = ssq(window).scrollTop();
		var util_menuH = ssq('#header .util_menu').css("display") == "none" ? 0 : ssq('#header .util_menu').innerHeight();
		var top_bannerH = ssq('#header .topBanner').hasClass('hide') ? 0 : ssq('#header .topBanner').innerHeight();
		var topHeadH = util_menuH+top_bannerH;
		if(scrollTop >= topHeadH){
			header.css({"position":"fixed", "top":-topHeadH});
			wrap.css("margin-top", header.innerHeight())
			miniHeader.addClass('mini');
		}else{
			header.css({"position":"", "top": ""});
			wrap.css("margin-top", "");
			miniHeader.removeClass('mini');
		}

		/*var headerY = header.position().top;
		var targetY;
		if (scrollTop < 1) {
			targetY = 0;
			config.scrollTop = 0;
			scrollTop = 0;
		} else if (scrollTop >= topHeadH){
			header.css("top", -topHeadH);
			category.css("top", '');
		} else if (scrollTop > config.scrollTop) {
			// 스크롤 내려가는 경우
			targetY = Math.max(-topHeadH, headerY - (scrollTop-config.scrollTop));
		} else if (scrollTop < config.scrollTop || scrollTop < 1){
			targetY = Math.min(0, headerY + (config.scrollTop-scrollTop));
		}
		header.css("top", targetY);
		category.css("top", header.outerHeight()+targetY);
		config.scrollTop = scrollTop;*/
	}


	function createMobile(){
		var body = ssq('body');
		var btnMenu = ssq('.btn_menu');
		var mGnb = ssq('.gnb_m');
		var bgGnb = ssq('.bg_wrap');
		var gnbDepth1 = ssq('.gnb_m .depth1 > a');
		var gnbDepth2 = ssq('.gnb_m .be_depth3 > a');
		var gnbDepth3 = ssq('.gnb_m .be_depth4 > a');
		/*GNB ON*/
		btnMenu.click(function(e){
			body.addClass('gnb_on');
			closeDepth2();
			return false;
		});
		var closeDepth2 = function(){
			gnbDepth1.parent().removeClass('on');
			gnbDepth2.parent().removeClass('on');
		}
		var closeDepth3 = function(){
			gnbDepth2.parent().removeClass('on');
			gnbDepth3.parent().removeClass('on');
			gnbDepth3.parent().children('ul').slideUp(300);
		}
		/*DEPTH2 ON*/
		gnbDepth1.click(function(e){
			jQuery(this).parent().addClass('on');
			return false;
		});
		gnbDepth2.click(function(e){
			jQuery(this).parent().addClass('on');
			return false;
		});
		/*DEPTH2 CLOSE*/
		ssq('.gnb_m .depth2 > .tit_box > .btn_close').click(function(e){
			closeDepth2();
			return false;
		});
		ssq('.gnb_m .depth3 > .tit_box > .btn_close').click(function(e){
			closeDepth3();
			return false;
		});
		/*DEPTH3 ON/OFF*/
		gnbDepth3.click(function(e){
			ssq(this).parent().toggleClass('on');
			ssq(this).parent().children('ul').slideToggle(300);
			ssq(this).parent().siblings().removeClass('on');
			ssq(this).parent().siblings().children('ul').slideUp(300);
		});
		/*GNB OFF*/
		bgGnb.click(function(e){
			body.removeClass('gnb_on');
			closeDepth3();
			closeDepth2();
			return false;
		});
	}

	function btnTop() {
		/*jQuery("#backTop").hide();
		jQuery(function () {
			jQuery(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					jQuery('#backTop').fadeIn();
				} else {
					jQuery('#backTop').fadeOut();
				}
			});
			jQuery('#backTop a').click(function () {
				jQuery('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});*/
		ssq('#quickMenu .top_btn a').click(function () {
			ssq('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	}

	comingsoonCellcureLab = function () {
		var layerText='<div style="position:relative; width : 400px; height:380px;"><img src="/images/sub/img_lab_comingsoon.jpg" alt="CELLCURE LAB : 준비중입니다." /></div><button type="button" onclick="layer.close();" style="background:none; position : absolute; right : 0; top : -50px"><img src="/images/btn/btn_close.png" style="background:none;"></button></div>';
		layer.text(layerText,"comingsoon", {width:400, height:380, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundClose:true, backgroundColor:"#000000"});
	};

})(jQuery);

function bestSellerMore(){
	$(".bestSellerMore").show()
	$(".bestSellerMore").next().hide()
}

function newArrivalMore(){
	$(".newArrivalMore").show()
	$(".newArrivalMore").next().hide()
}



function showdiv(targetEl, uniqid) {
if(document.getElementById(targetEl))
	document.getElementById(targetEl).style.display="block";
}
function hidediv(targetEl) {
	if(document.getElementById(targetEl))
		document.getElementById(targetEl).style.display="none";
}


var processImg = new Image();
processImg.src = "/images/waiting.gif";
var lang;

function changeToProcess(){
	var imgLang = "";
	if (lang == "ja"){
	imgLang = "ja/";
	}

	if (document.all){
		document.all['checkoutbtn'].innerHTML = "<img src='"+processImg.src+"' name='overItems' id='overItems' border='0'>";
	} else if (document.layers){
		document.layers['checkoutbtn'].innerHTML = "<img src='"+processImg.src+"' name='overItems' id='overItems' border='0'>";
	} else if (document.getElementById){
		document.getElementById('checkoutbtn').innerHTML = "<img src='"+processImg.src+"' name='overItems' id='overItems' border='0'>";
	}
}

function changeToLoading(){
	if (document.all){
		document.all['loading'].innerHTML = "<div style='text-align: center;'><img name='overItems' id='overItems' src='/images/waiting.gif' border='0'></div>";
	} else if (document.layers){
		document.layers['loading'].innerHTML = "<div style='text-align: center;'><img name='overItems' id='overItems' src='/images/waiting.gif' border='0'></div>";
	} else if (document.getElementById){
		document.getElementById('loading').innerHTML = "<div style='text-align: center;'><img name='overItems' id='overItems' src='/images/waiting.gif' border='0'></div>";
	}
}

function searchRun() {
	var gnbFormObj = document.searchForm;
	var FormObj = document.searchFormReal;

	if(gnbFormObj.searchItem.value=="" || gnbFormObj.searchItem.value=="검색") {
		alert("검색어를 입력하세요");
		gnbFormObj.searchItem.value = "";
		gnbFormObj.searchItem.focus();
		return;
	}
	else {
		tempItem = escape(gnbFormObj.searchItem.value);
		if (tempItem == "검색") {
			tempItem = "";
			gnbFormObj.searchItem.value = "";
		}
		else {
			FormObj.sWord.value = gnbFormObj.searchItem.value;
			FormObj.submit();
		}
	}
}

function searchRun2() {
	var gnbFormObj = document.searchForm2;
	var FormObj = document.searchFormReal;

	if(gnbFormObj.searchItem.value=="" || gnbFormObj.searchItem.value == "검색어를 입력하세요") {
		alert("검색어를 입력하세요");
		gnbFormObj.searchItem.value = "";
		gnbFormObj.searchItem.focus();
		return;
	}
	else {
		tempItem = escape(gnbFormObj.searchItem.value);
		if (tempItem == "검색어를 입력하세요") {
			tempItem = "";
			gnbFormObj.searchItem.value = "";
		}
		else {
			FormObj.sWord.value = gnbFormObj.searchItem.value;
			FormObj.submit();
		}
	}
}

function searchRun3() {
	var gnbFormObj = document.searchForm3;
	var FormObj = document.searchFormReal;

	if(gnbFormObj.searchItem.value=="" || gnbFormObj.searchItem.value == "검색어를 입력하세요") {
		alert("검색어를 입력하세요");
		gnbFormObj.searchItem.value = "";
		gnbFormObj.searchItem.focus();
		return;
	}
	else {
		tempItem = escape(gnbFormObj.searchItem.value);
		if (tempItem == "검색어를 입력하세요") {
			tempItem = "";
			gnbFormObj.searchItem.value = "";
		}
		else {

			FormObj.sWord.value = gnbFormObj.searchItem.value;
			FormObj.submit();
		}
	}
}

function searchRun4() {
    var gnbFormObj = document.searchForm4;
    var FormObj = document.searchFormReal;

    if (gnbFormObj.searchItem4.value == "" || gnbFormObj.searchItem4.value == "검색어를 입력하세요") {
        alert("검색어를 입력하세요");
        gnbFormObj.searchItem4.value = "";
        gnbFormObj.searchItem4.focus();
        return;
    }
    else {
        tempItem = escape(gnbFormObj.searchItem4.value);
        if (tempItem == "검색어를 입력하세요") {
            tempItem = "";
            gnbFormObj.searchItem4.value = "";
        }
        else {
            FormObj.sWord.value = gnbFormObj.searchItem4.value;
            FormObj.submit();
        }
    }
}


//소셜댓글 값리턴
function commentResult(a, b, c, d) {

 var rtnVal = false;

	var imgName = "";
	var shareList = "";
	if ( a == "insert")	{
		imgName = d.imageName;
		shareList = d.shareList
	}

 jQuery.ajax({

     url: "/ext/comment_action.asp",
     type: "post",
     data: {
         action : a,
         result: b,
         object : c,
         contentNo : jQuery("#EventNo").val(),
						imgName : imgName,
						shareList : shareList
//		      contentCategory : contentCategory
     },
     success: function () {

         return false;

     },
     error: function () {

         return false;


     }
 })

 //console.log(a + " " + b + " " + c + " " + d);
 return true;

}

//소셜댓글 값리턴
function commentResultProduct(a, b, c, d) {

 var rtnVal = false;

	var imgName = "";
	var shareList = "";
	var extPoint = 0;
	if ( a == "insert")	{
		imgName = d.imageName;
		shareList = d.shareList
		extPoint = d.extPoint;
	}

 jQuery.ajax({

     url: "/ext/commentProduct_action.asp",
     type: "post",
     data: {
         action : a,
         result: b,
         object : c,
         contentNo : jQuery("#ProductNo").val(),
			imgName : imgName,
			shareList : shareList,
			extPoint : extPoint
//		      contentCategory : contentCategory
     },
     success: function () {

         return false;

     },
     error: function () {

         return false;


     }
 })

 //console.log(a + " " + b + " " + c + " " + d);
 return true;

}


function cjTracking(orno) {
	window.open('http://nexs.cjgls.com/web/detail.jsp?slipno='+orno,'cjTracking','toolbar=yes,location=no,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=800,height=600');
}

function cjTrackingM(orno) {
	window.open('https://www.doortodoor.co.kr/parcel/doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACTM&invc_no='+orno,'cjTracking','toolbar=yes,location=no,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=800,height=600');
}

function hyundaiTracking(orno) {
	window.open('http://www.hlc.co.kr/personalService/tracking/06/tracking_goods_result.jsp?sflag=01&InvNo='+orno,'hyundaiTracking','toolbar=yes,location=no,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=1024,height=800');
}

function hjTracking(orno) {
	window.open('http://www.hanjin.co.kr/Delivery_html/inquiry/result_waybill.jsp?wbl_num='+orno,'cjTracking','toolbar=yes,location=no,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=1024,height=800');
}

function kgTracking(orno) {
    window.open('http://www.kglogis.co.kr/delivery/popup_tracking.jsp?item_no=' + orno, 'kgTracking', 'toolbar=yes,location=no,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=1024,height=800');
}

function lotTracking(orno) {
    window.open('http://www.hlc.co.kr/hydex/jsp/tracking/trackingViewCus.jsp?InvNo=' + orno, 'lotTracking', 'toolbar=yes,location=no,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=1024,height=800');
}
function loginReq(){
	top.location.href="/member/login.asp"
}







/*
if ("geolocation" in navigator) {
	function geo_success(position) {
	  alert(position.coords.latitude, position.coords.longitude);
	}

	function geo_error() {
	  alert("위치 정보를 사용할 수 없습니다.");
	}

	var geo_options = {
	  enableHighAccuracy: true,
	  maximumAge        : 30000,
	  timeout           : 27000
	};

	navigator.geolocation.getCurrentPosition(geo_success, geo_error);
	navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
} else {

}
*/






function AddWishList_List(pno,scate,pprice,psize) {
	/// 2016-06-17 이한수 리스트에서 위시
	OrderCheck = true;


	if (OrderCheck) {
		var val = "wish";
		var strQuery;

		document.form2.ProductNo.value = pno;
		document.form2.suzzestcategory.value = scate;
		document.form2.ProductPrice.value = pprice;
		document.form2.ProductSize.value = psize;

		strQuery = "";
		strQuery = jQuery(":input",document.form2).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;
				if (msg !="") { alert(msg); }
				if (returnurl !="") {
					top.location.href=returnurl;
				}
				else {
					top.location.reload();
				}
			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

function AddToShoppingbag_List(pno,scate,pprice,psize) {
	/// 2016-06-17 이한수 리스트에서 카트
	OrderCheck = true;


	if (OrderCheck) {
		var val = "";
		var strQuery;

		document.form2.ProductNo.value = pno;
		document.form2.suzzestcategory.value = scate;
		document.form2.ProductPrice.value = pprice;
		document.form2.ProductSize.value = psize;

		strQuery = "";
		strQuery = jQuery(":input",document.form1).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;
				dataFrame.location.href = "/product/put_cart_log.asp?" + strQuery;
				var categorys = document.form2.suzzestcategory.value;
				setTimeout(function(){
					if (codetype == "add")  {
					    yon = confirm("장바구니에 추가되었습니다.\n\n지금 장바구니를 확인하시겠습니까?");
					    if (yon) {
					        top.location.href = '/order/cart.asp';
						}
						else {
							return;
						}
					}
					if (msg !="") { alert(msg); }
				},100)

			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

function checkout_List(num,pno,scate,pprice,psize) {
	/// 2016-06-17 이한수 리스트에서 주문
	OrderCheck = true;

//	if (document.form2.ProductSize.value=="") {alert("\n사이즈를 선택해 주세요");OrderCheck = false;}

	if (OrderCheck) {
		var val = num;
		var strQuery;

		document.form2.ProductNo.value = pno;
		document.form2.suzzestcategory.value = scate;
		document.form2.ProductPrice.value = pprice;
		document.form2.ProductSize.value = psize;

		strQuery = "";
		strQuery = jQuery(":input",document.form2).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;

				var categorys = document.form2.suzzestcategory.value;
/*
				suzzestSet("cart", document.form2.ProductNo.value, {
					"c1" : categorys.substring(0,3),
					"c2" : categorys.substring(3,6),
					"c3" : categorys.substring(6,9)
				});
*/

				//suzzestSet("cart", document.form1.ProductNo.value, document.form1.CodeTypeNo.value);

				dataFrame.location.href = "/product/put_cart_log.asp?" + strQuery;
				setTimeout(function(){
					if (msg !="") { alert(msg); }
					if (returnurl !="") {
						top.location.href=returnurl;
					}
					else {
						top.location.reload();
					}
				},100)

			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

//모바일 체크
function chkMobile(){
	var ua = window.navigator.userAgent.toLowerCase();
	var tempVal = false;
	if ( /iphone/.test(ua) || /ipad/.test(ua) ||/android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
		tempVal = true
	}
	return tempVal
}

var quickPop;
function quickPopup(pno) {

	$.ajax({
		url : "/product/quickPopup.asp",
		method : "post",
		dataType : "html",
		data : {
			productNo : pno
		},
		success : function(html){
			var formStr = html;
			quickPop = new CoverLayer(formStr, {
				bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
				bg_opacity : 0.75, 		// 백그라운드 투명도. 기본값:0.75
				close_btn_id : "closeBtn1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
				z_index : 99998, 			// 레이어의 z-index 값 기본값:99990
				cast_speed : 500,		// 레이어 생성 트위닝 속도
				close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
				scroll_fix : false
				//align_x : "left",			// "center"(기본값), "left", "right"
				//align_x_value : 50,				// 정수, 0(기본값)
				//align_y : "top",			// "middle"(기본값), "left", "right"
				//align_y_value : 50				// 정수, 0(기본값)
			})

			setTimeout(function(){
				$("div.quick_popup div.option_list > ul > li > a").off()
				$("div.quick_popup div.option_list > ul > li > a").on("click",function(e){
					var o = $(this)
					if(o.hasClass("soldout") || o.hasClass("complete")){
					}else{
						$("div.quick_popup div.option_list > ul > li > a[class!=souldout]").removeClass("complete");
						$(this).addClass("complete");
						$("div.quick_popup div.goods_btn .btn_style1").attr("href", o.attr("data-chechoutParam"));
						$("div.quick_popup div.goods_btn .btn_style2").attr("href", o.attr("data-wishParam"));
						$("div.quick_popup div.goods_btn .btn_style3").attr("href", o.attr("data-cartParam"));
					}
					e.preventDefault();
				})
				$("div.quick_popup div.goods_btn a").off()
				$("div.quick_popup div.goods_btn a").on("click",function(e){
					var o = $(this);
					if(o.attr("href") == ""){
						alert("옵션을 선택해주세요");
						e.preventDefault();
						return false;
					}
				})
			},100)


		}
	})

}
var brandSettingPopup;
function brandSetting() {
	var formStr = "";
	jQuery.ajax({
		type: "GET",
		data: '',
		url: "/member/brand_setting_popup.asp",
		dataType : "HTML",
		success: function(data) {
			formStr = data;
			brandSettingPopup = new CoverLayer(formStr, {
				bg_color : "#fff", 		// 백그라운드 색상 기본값:"#000"
				bg_opacity : 0.75, 		// 백그라운드 투명도. 기본값:0.75
				close_btn_id : "btnClose1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
				z_index : 9999, 			// 레이어의 z-index 값 기본값:99990
				cast_speed : 500,		// 레이어 생성 트위닝 속도
				close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
				scroll_fix : false
			});
		}
	});
}


/* doa s */
function popSetting(url) 
{
	var formStr = "";
	jQuery.ajax({
		type: "GET",
		data: '',
		url: url,
		//url: "/member/test/pop_nonmember.asp",
		dataType : "HTML",
		success: function(data) {
			formStr = data;
			var popupLayer = new CoverLayer(formStr, {
				bg_color : "#fff", 		// 백그라운드 색상 기본값:"#000"
				bg_opacity : 0.75, 		// 백그라운드 투명도. 기본값:0.75
				close_btn_id : "btnClose1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
				z_index : 9999, 			// 레이어의 z-index 값 기본값:99990
				cast_speed : 500,		// 레이어 생성 트위닝 속도
				close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
				scroll_fix : false
			});
		}
	});
}

/* doa e */


var gatewayFn = function () {
	var _this = this, YTP = null,
		menuInitSet = false;

	this.init = function () {

	}

	this.menuInit = function () {
		menuInitSet = true;

		$(".gw_contant").slick({
	        dots:false,
	        arrows:false,
	        infinite: true,
	        fade: true,
  			cssEase: 'linear'
	    });

		$("#gateway .gw_menu .depth1 > li > a").on("click",function(e){
			var _depth1 = $(this).parent();
				_idx = $("#gateway .gw_menu .depth1 > li").index($(this).parent());
			if(!_depth1.hasClass("active")){

				$("#gateway").removeClass('style1 style2 style3').addClass('style'+(_idx+1));

				$('.gw_contant').slick('slickGoTo', _idx);

				_depth1.siblings('.active').removeClass("active").end().addClass("active");
				TweenMax.to($(".gw_menu .depth2"),0.5,{height:0});
				var depth2H = 0;
				_depth1.find(".depth2 li").each(function() {
					depth2H += $(this).outerHeight();
				});
				TweenMax.fromTo(_depth1.find(".depth2"),0.5,{height:0},{height:depth2H});
			}
		});
		$("#gateway .gw_menu .depth1 > li:first-child > a").trigger("click");
	}

	this.show = function (time) {
		//console.log(document.body.scrollWidth, window.innerWidth);

		if(!menuInitSet) {
			_this.menuInit();
		}
		if(time || time == undefined){
			TweenMax.fromTo($('#gateway'),0.5,{top:-200+"%",alpha:0},{top:0+"%",alpha:1, onComplete:function(){
				$("body").addClass("noscroll");
				$('.gw_contant').slick('setPosition');
				YTP == null ? _this.YTP('EMuWLmnf8VA') : YTP.playVideo();
			}});

		}else{
			TweenMax.fromTo($('#wrap'),0.5,{alpha:0},{alpha:1,delay:2});
		}
		//$("body").addClass("noscroll");
	}

	this.YTP = function(videoId) {
		$('#module-video').YTPlayer({
	        fitToBackground: true,
	        videoId: videoId,
	        pauseOnScroll: false,
	        playerVars: {
	          modestbranding: 0,
	          autoplay: 1,
	          controls: 0,
	          showinfo: 0,
	          branding: 0,
	          rel: 0,
	          autohide: 1,
	          loop: 1
	        },
	        events:{
	        	'onReady':function(e) {
	        		YTP = e.target;
	        		YTP.mute(); //음소거
				}
			}
	    });
	}

	this.hide = function (link) {
		TweenMax.fromTo($('#gateway'),0.5,{top:0+"%",alpha:1},{top:-200+"%",alpha:0, onComplete:function(){
			YTP.pauseVideo();
			setTimeout(function() {
				if(link) window.location.href = link;
			 },700);
		}});
		$("body").removeClass("noscroll");
	}

	_this.init();
}
var gateway = new gatewayFn();


/* images로드체크 */
$.fn.imagesLoaded = function (fn) {
    var $imgs = this.find('img[src!=""]'), imgArr = {cpl : [], err : []};
    if (!$imgs.length){
        if(fn) fn();
        return;
    }
    var dfds = [], cnt = 0;
    $imgs.each(function(){
        var _this = this;
        var dfd = $.Deferred();
        dfds.push(dfd);
        var img = new Image();
        img.onload = function(){
            imgArr.cpl.push(_this);
            check();
        }
        img.onerror = function(){
            imgArr.err.push(_this);
            check();
        }
        img.src = this.src;
    });
    function check(){
        cnt++;
        if(cnt === $imgs.length){
            if(fn) fn.call(imgArr);
        }
    }
}


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  if(t <= 0) t = 0;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(target, endtime) {
  var clock = target;

  function updateClock() {
    var t = getTimeRemaining(endtime);

    var days = t.days;
    var hour = ('0' + (t.hours+(days*24))).slice(-2);
    var minute = ('0' + t.minutes).slice(-2);
    var second = ('0' + t.seconds).slice(-2);
    clock.html("<span>"+hour.substring(0,1)+"</span><span>"+hour.substring(1,2)+"</span>"+":"+"<span>"+minute.substring(0,1)+"</span><span>"+minute.substring(1,2)+"</span>"+":"+"<span>"+second.substring(0,1)+"</span><span>"+second.substring(1,2)+"</span>").css("visibility", "visible");

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

$(function(){
	$('.timeRemaining').each(function() {
		//var EndTime = new Date($(this).text());

		var date = new Date();
		date.setHours(0);
	    date.setMinutes(0);
	    date.setSeconds(0);
	    date.setDate(date.getDate() + 1);
	    var nextTime = date.getTime(); // 내일 0시 0분 으로 설정

	    var EndTime = new Date(nextTime);

		initializeClock($(this), EndTime);
	});

	function antiqueEventTrigger() {
		var nowDate = new Date();
		var eventEndDate = new Date('2017-05-11 23:59');
		var eventEnd = nowDate > eventEndDate ? true : false;

		console.log(nowDate,eventEndDate);

		$(".promotionEvent_img").each(function() {
			if(eventEnd){
				$(this).attr("src", "http://www.celltrionskincure.com/promotion/20170410/images/img_promotion_end.jpg");
			}else{
				$(this).attr("src", "http://www.celltrionskincure.com/promotion/20170410/images/img_promotion.jpg");
			}
		});

		$(".promotionEvent1_btn").click(function() {
			if(eventEnd){
				alert('이벤트가 종료되었습니다.');
				return false
			}else{
				window.location.href = "http://www.celltrionskincure.com/promotion/20170410/promotion_event1.asp";
			}
		});
	}
	//antiqueEventTrigger();
});


/*협력사 임직원 퇴사자 처리*/
var resignerPop;
function resignerPopup(type) {

	var url;

	switch(type) {
	    case 1:
	        url = "/member/resigner_popup.asp";
	        break;
	    case 2:
	        url = "/member/resigner_popup2.asp";
	        break;
	    case 3:
	        url = "/member/resigner_verify_popup.asp";
	        break;
	    case 4:
	        url = "/member/resigner_verify_complete_popup.asp";
	        break;
	    case 5:
	        url = "/member/resigner_verify_popup2.asp";
	        break;
	    case 6:
	        url = "/member/resigner_verify_complete_popup2.asp";
	        break;
	}

	$.ajax({
		url : url,
		method : "post",
		dataType : "html",
		data : {},
		success : function(html){
			reviewPop1 = new CoverLayer(html, {
				bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
				bg_opacity : 0.75, 		    // 백그라운드 투명도. 기본값:0.75
				close_btn_id : "btnClose1", // 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
				z_index : 9999998, 			// 레이어의 z-index 값 기본값:99990
				cast_speed : 500,		    // 레이어 생성 트위닝 속도
				close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
				scroll_fix : false
				//align_x : "left",			// "center"(기본값), "left", "right"
				//align_x_value : 50,		// 정수, 0(기본값)
				//align_y : "top",			// "middle"(기본값), "left", "right"
				//align_y_value : 50		// 정수, 0(기본값)
			});
		}
	});
}
