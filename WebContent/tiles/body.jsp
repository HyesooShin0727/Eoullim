<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
   
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <link rel="canonical" href="http://www.celltrionskincure.com/">
	

<title>어울림 </title><!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#38af29" />
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#ffffff" />
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="now">
<meta http-equiv="Expires" content=0>


<meta name="naver-site-verification" content="0f46f5ad1b63f95c16f07ab927f4ab5bcc4d1977"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi"/>
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=3" />


	<link rel="stylesheet" href="Resource/css/pages/import.css"/> 
    
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
	<script src="Resource/js/common/libs/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="Resource/js/common/styleship/matizResizeMap.1.0.0.min.js"></script>
	<script src="Resource/js/pages/jquery.youtubebackground.js"></script>

	<script src="Resource/js/common/default.js?v=20180604"></script>
	<script src="Resource/js/common/cookie.js"></script>

	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>

	<link rel="stylesheet" href="Resource/css/pages/main.css">
	<script src="Resource/js/pages/main.js"></script>

	<link rel="stylesheet" href="Resource/css/pages/list.css">
	<script src="Resource/js/pages/facebook.js"></script>
<script>
	var openWin;

	function BuyCheck(index, goods_no) {
		if (index == 1) {
			window.location.href = 'AddToOrderAction.action?one_goods_no='
					+ goods_no + '&cnt=1';
		}
		if (index == 2) {
			var url = 'AddCartAction.action?goods_no=' + goods_no;
			alert('장바구니에 추가되었습니다.');
			window.location.href = url;
			/* open(url, "confirm"); */
		}
		if (index == 3) {
			var url = 'AddWishAction.action?goods_no=' + goods_no;
			alert('찜목록에 추가되었습니다.');
			window.location.href = url;
		}
		document.form.submit();
	}
</script>
</head>

<body>
	<!-- start of :: contents -->
	<div id="mainContents">
		<div id="mask"></div>
		<div class="layerPopup_area"></div>

		<div class="main_area">
			<section class="main_cont" id="main_new">
			<h2 class="main_title">실시간 BEST 10</h2>
			<div class="main_brand_tab" id="mainNewBrandTab">
				<section class="tab_con main_tab" id="hanskinNew">
				<div class="tab_con" id="hanskinNewTab1">
					<div class="slider_box">
						<ul class="goods_list list_5">
							<li>
								<div class="photo">

									<span class="rank">1</span> <a
										href="goodsViewAction.action?goods_no=<s:property value="firstGoods.goods_no"/>">
										<img
										src="/Eoullim/upload/<s:property value="firstGoods.goods_savname.split(',')[0]"/>">
									</a>

									<div class="quick_menu">
										<a
											href="javascript:BuyCheck(3,<s:property value="firstGoods.goods_no"/>)"
											class="btn_wish ">위시리스트 담기</a> <a
											href="javascript:BuyCheck(2,<s:property value="firstGoods.goods_no"/>)"
											class="btn_cart">장바구니 담기</a> <a
											href="javascript:BuyCheck(1,<s:property value="firstGoods.goods_no"/>)"
											class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구매하기</a>
									</div>

									<div class="tag">

										<span class="tm_hidden"> </span> <span class="d_hidden">

										</span>
									</div>
								</div>
								<div class="txt_box">
									<a
										href="goodsViewAction.action?goods_no=<s:property value="firstGoods.goods_no"/>">

										<p class="brand">
											<s:property value="firstGoods.goods_bname" />
										</p>
										<p class="name">
											<s:property value="firstGoods.goods_name" />
										</p>
										<p class="normal_price">
											가격 :
											<s:property value="firstGoods.goods_price" />
											원
										</p>

									</a>
								</div>
							</li>


							<li>
								<div class="photo">

									<span class="rank">2</span> <a
										href="goodsViewAction.action?goods_no=<s:property value="secondGoods.goods_no"/>">
										<img
										src="/Eoullim/upload/<s:property value="secondGoods.goods_savname.split(',')[0]"/>">
									</a>

									<div class="quick_menu">
										<a
											href="javascript:BuyCheck(3,<s:property value="secondGoods.goods_no"/>)"
											class="btn_wish ">위시리스트 담기</a> <a
											href="javascript:BuyCheck(2,<s:property value="secondGoods.goods_no"/>)"
											class="btn_cart">장바구니 담기</a> <a
											href="javascript:BuyCheck(1,<s:property value="secondGoods.goods_no"/>)"
											class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구매하기</a>
									</div>

									<div class="tag">

										<span class="tm_hidden"> </span> <span class="d_hidden">

										</span>
									</div>
								</div>
								<div class="txt_box">
									<a
										href="goodsViewAction.action?goods_no=<s:property value="secondGoods.goods_no"/>">

										<p class="brand">
											<s:property value="secondGoods.goods_bname" />
										</p>
										<p class="name">
											<s:property value="secondGoods.goods_name" />
										</p>
										<p class="normal_price">
											가격 :
											<s:property value="secondGoods.goods_price" />
											원
										</p>

									</a>
								</div>
							</li>


							<li>
								<div class="photo">

									<span class="rank">3</span> <a
										href="goodsViewAction.action?goods_no=<s:property value="thirdGoods.goods_no"/>">
										<img
										src="/Eoullim/upload/<s:property value="thirdGoods.goods_savname.split(',')[0]"/>">
									</a>

									<div class="quick_menu">
										<a
											href="javascript:BuyCheck(3,<s:property value="thirdGoods.goods_no"/>)"
											class="btn_wish ">위시리스트 담기</a> <a
											href="javascript:BuyCheck(2,<s:property value="thirdGoods.goods_no"/>)"
											class="btn_cart">장바구니 담기</a> <a
											href="javascript:BuyCheck(1,<s:property value="thirdGoods.goods_no"/>)"
											class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구매하기</a>
									</div>

									<div class="tag">

										<span class="tm_hidden"> </span> <span class="d_hidden">

										</span>
									</div>
								</div>
								<div class="txt_box">
									<a
										href="goodsViewAction.action?goods_no=<s:property value="thirdGoods.goods_no"/>">

										<p class="brand">
											<s:property value="thirdGoods.goods_bname" />
										</p>
										<p class="name">
											<s:property value="thirdGoods.goods_name" />
										</p>
										<p class="normal_price">
											가격 :
											<s:property value="thirdGoods.goods_price" />
											원
										</p>

									</a>
								</div>
							</li>
							<s:iterator value="list" status="stat">
								<s:url id="viewURL" action="goodsViewAction">
									<s:param name="goods_no">
										<s:property value="goods_no" />
									</s:param>
									<s:param name="currentPage">
										<s:property value="currentPage" />
									</s:param>
								</s:url>

								<li>
									<div class="photo">

										<s:a href="%{viewURL}"
											onclick="ga('send', 'event', 'product', 'click', '쿼드 아이섀도우 × 멘디니', 1);">
											<img
												src="/Eoullim/upload/<s:property value="goods_savname.split(',')[0]"/>"
												width="300" height="250">
										</s:a>

										<div class="quick_menu">

											<a
												href="javascript:BuyCheck(3,<s:property value="goods_no"/>)"
												class="btn_wish ">위시리스트 담기</a> <a
												href="javascript:BuyCheck(2,<s:property value="goods_no"/>)"
												class="btn_cart">장바구니 담기</a> <a
												href="javascript:BuyCheck(1,<s:property value="goods_no"/>)"
												class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;구매하기</a>

										</div>

										<div class="tag">

											<span class="tm_hidden"> </span> <span class="d_hidden">
											</span>
										</div>
									</div>
									<div class="txt_box">
										<a href="%{viewURL}">

											<p class="brand">
												<s:property value="goods_bname" />
											</p>
											<p class="name">
												<s:property value="goods_name" />
											</p>
											<p class="normal_price">
												가격 :
												<s:property value="goods_price" />
												원
											</p>

										</a>
									</div>
								</li>
							</s:iterator>



						</ul>
					</div>
				</div>
				</section>
				<!-- // tab_con :: hanskin -->
			</div>
			</section>
		</div>
		<!-- end of :: contents -->
	</div>
</body>
</html>