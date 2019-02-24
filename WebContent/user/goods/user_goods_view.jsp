<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<!-- 2018-01-10 DOA �߰� -->
<link rel="canonical" href="http://www.celltrionskincure.com/">


<title>어울림</title>
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#38af29" />
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#ffffff" />
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style"
	content="black-translucent" />

<!--<meta http-equiv="refresh" content="600">-->
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="now">
<meta http-equiv="Expires" content=0>


<meta name="naver-site-verification"
	content="0f46f5ad1b63f95c16f07ab927f4ab5bcc4d1977" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" />
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />


<link rel="stylesheet" href="Resource/css/pages/import.css" />

<script type="text/javascript"
	src="http://gc.kis.v2.scr.kaspersky-labs.com/59C14B23-8FBE-3B4A-A0ED-BA008DDFBB16/main.js"
	charset="UTF-8"></script>
<script src="Resource/js/common/libs/modernizr.custom.js"></script>
<script src="Resource/js/common/libs/greensock/TweenMax.min.js"></script>
<script src="Resource/js/common/libs/greensock/easing/EasePack.min.js"></script>
<script src="Resource/js/common/libs/jquery-1.9.1.min.js"></script>

<script src="Resource/js/common/libs/slick.min.js"></script>
<script src="Resource/js/common/libs/jquery.event.move.js"></script>
<script src="Resource/js/common/libs/jquery.rwdImageMaps.min.js"></script>

<script src="Resource/js/common/styleship/mighty.base.1.5.5.min.js"></script>
<script src="Resource/js/common/styleship/mighty.slide.4.2.2.min.js"></script>
<script src="Resource/js/common/styleship/matizResizeMap.1.0.0.min.js"></script>
<script src="Resource/js/common/styleship/matizCoverLayer.3.1.0.min.js"></script>
<script src="Resource/js/common/styleship/mighty.sort.1.2.1.min.js"></script>
<script
	src="Resource/js/common/libs/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="Resource/js/common/styleship/matizResizeMap.1.0.0.min.js"></script>
<script src="Resource/js/pages/jquery.youtubebackground.js"></script>

<script src="Resource/js/common/default.js"></script>
<script src="Resource/js/common/cookie.js"></script>

<script type="text/javascript" src="//wcs.naver.net/wcslog.js">
	
</script>


<script>
	$(function() {

		$.cachedScript = function(url, options) {
			options = $.extend(options || {}, {
				dataType : "script",
				cache : true,
				url : url,
				async : false
			});
			return $.ajax(options);
		};

		function async_call(js, cb) {
			$.cachedScript(js).done(function() {
				if (cb != undefined) {
					return eval(cb)();
				}
			})
		}

		switch (location.protocol) {
		case 'http:':
			async_call('http://service.stylecomment.com/common/js/social.js');
			break;
		case 'https:':
			break;
		}

	});
</script>
<script>
	function BuyCheck(index) {
		if (index == 1) {
			var cnt = document.getElementById("selectCount");
			var color = document.getElementsByName("selectColor");
			var selectedIndex = color[0].selectedIndex;
			//alert(selectedIndex);
			
			window.location.href = 'AddToOrderAction.action?one_goods_no=${resultClass.goods_no}&cnt='+cnt.value+'&colorIndex='+selectedIndex;
		}
		if (index == 2) {
			var color = document.getElementsByName("selectColor");
			var selectedIndex = color[0].selectedIndex;
			alert(selectedIndex);
			//alert('장바구니에 추가되었습니다.');
			window.location.href = 'AddCartAction.action?goods_no=${resultClass.goods_no}&colorIndex='+selectedIndex;

		}
		if (index == 3) {
			var url = 'AddWishAction.action?goods_no=${resultClass.goods_no}';
			alert('찜목록에 추가되었습니다.');
			window.location.href = url;
		}
		if (index == 4) {
			alert('관심상품으로 등록되었습니다.');
			document.form.action = 'AddWish.action?goods_no=${resultClass.goods_no}';
		}
		document.form.submit();
	}
</script>


<link rel="stylesheet" href="Resource/css/pages/product.css">
<script src="Resource/js/pages/scroller.js"></script>

<link rel="stylesheet" href="Resource/css/pages/table.css">
<link rel="stylesheet" href="Resource/css/pages/list.css">
<script src="Resource/js/pages/view.js"></script>
<script src="Resource/js/pages/reviewPopup.js"></script>
<script src="Resource/js/pages/product.js"></script>
<script src="Resource/js/pages/linkedForm2.js"></script>
<script src="Resource/js/pages/starPoint.js"></script>
<script src="Resource/js/pages/productQna.js"></script>

<script type="text/javascript"
	src="http://apis.daum.net/maps/maps3.js?apikey=a1643e6baa894de73dc28a4f3daa9eba"></script>




<!-- Withpang Shop Log Tracker v3.0 strat -->
<script type="text/javascript">
	
</script>

<script async="true" src="https://cdn.megadata.co.kr/js/enliple_min2.js"
	onload="mobRfShop()"></script>
<!-- Withpang Shop Log Tracker v3.0 end  -->

</head>
<body>

	<div class="product_wrap">
		<div class="info_box">
			<div class="photo_wrap">
				<div class="photo">
					<img id="imgLarge"
						src="/Eoullim/upload/<s:property value="resultClass.goods_savname.split(',')[0]"/>"
						alt="" />
				</div>
			</div>


			<!-- //photo_wrap -->
			<div class="info_wrap">
				<div class="goods_name">
					<p class="brand">
						<s:property value="resultClass.goods_bname" />
					</p>
					<p class="name">
						<s:property value="resultClass.goods_name" />
					</p>
				</div>
				<div class="goods_info">
					<div class="info_l">
						<dl>
							<dt>판매가</dt>
							<dd>
								<s:property value="resultClass.goods_price" />
								원
							</dd>
						</dl>



					</div>
				</div>

				<div class="goods_tab" id="goodsTab1">
					<h2 class="tab1 on">
						<a href="#">온라인 구매</a>
					</h2>
					<div class="cont">

						<fieldset>
							<legend class="acc-hidden">온라인구매 수량 설정</legend>
							<div class="goods_select_option">
								<!-- 2016-08-18 select + option -->

								<div class="goods_option">
									<p>
										<span class="productExpression"><s:property
												value="resultClass.goods_name" /></span> -
										<s:property value="resultClass.goods_price" />
										원
									</p>
									<div class="quantity">
										<select name="selectColor" id="selectColor">
											<option>색상선택</option>
											<s:iterator value="colorList" status="stat">
												<option value="<s:property />"><s:property /></option>
											</s:iterator>
										</select>
										<select name="selectCount" id="selectCount">
											<option>수량선택</option>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
										
									</div>
								</div>
							</div>
							<div class="goods_total">
								<dl>
									<dt>배송비</dt>
									<dd>
										2,500원<span> (10,000원 이상 무료배송)</span>

									</dd>
								</dl>
								<dl class="total">
									<dt>합계금액</dt>
									<dd id="buytotal"><s:property value="resultClass.goods_price" />원</dd>
								</dl>
							</div>
							<div class="goods_btn btn_3">
								<a href="javascript:BuyCheck(1);" class="btn_style1">바로구매</a> <a
									href="javascript:BuyCheck(2)" class="btn_style3" id="cartBtn">장바구니
									담기</a> <a href="javascript:BuyCheck(3)" class="btn_style2"
									id="wishBtn"><img
									src="/Eoullim/Resource/images/btn/btn_wish_on.png" /></a>

							</div>

							</form>
					</div>

					<!-- <div class="no_btn">죄송합니다. 현재 품절되었거나 준비중인 상품입니다.</div> -->
					</fieldset>

				</div>
				<!-- // info_wrap -->
			</div>
		</div>

		<!-- 상세보기 -->
		<div class="detail_wrap">
			<div class="goods_detail">
				<ul class="detail_tab" id="detailTab">
					<li class="on"><a onclick="showDetail('detailInfo');">상세정보</a></li>
				</ul>

				<div class="detail_tab_info">
				<s:iterator value="imageList" status="stat">
					<img src="/Eoullim/upload/<s:property/>" ><br>
				</s:iterator>
				</div>
			</div>
		</div>


		<!--// product_wrap -->

		<script language="javascript">
			//클릭 강제 이벤트
			function showRiview() {

				$("#dtl_Review").trigger('click');
			}

			function showDetail(t) {

				$('.detail_tab_info > div').each(function() {
					$(this).hide();

				});

				$("#" + t).show();

			}

			function Fn_P_Change(obj) {
				jQuery.ajax({
					type : "POST",
					data : "productcode=" + obj,
					url : "/product/ProductNo_ajax.asp",
					dataType : "text",
					success : function(data) {

						//alert(data);
						$("input[name=ProductNo]").val(data);
					},
					error : function(e) {
						//alert("e");
					}
				});
			}
		</script>
	</div>
	<!-- end of :: contents -->




</body>