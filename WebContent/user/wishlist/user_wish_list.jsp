<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">

<link rel="canonical" href="http://www.celltrionskincure.com/">
<title>어울림</title>
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


<!-- 전체선택 / 전체해제 -->
<script>
	function check_all() {
		var chk = form1.goods.length;
		/* alert(chk); */
		for (i = 0; i < chk; i++) {
			form1.goods[i].checked = true;
		}
	}
	function uncheck_all() {
		var chk = form1.goods.length;
		for (i = 0; i < chk; i++) {
			form1.goods[i].checked = false;
		}
	}
</script>

<!-- 장바구니 추가 -->
<script>
	function BuyCheck(index, goods_no) {
		if (index == 2) {
			alert('장바구니에 추가되었습니다.');
			window.location.href = 'AddCartAction.action?goods_no=' + goods_no;
		}
		document.form.submit();
	}
</script>

<script>
	function DeleteWish(goods_no) {
		window.location.href = 'WishDeleteAction.action?goods_no=' + goods_no;
		alert('삭제되었습니다.');
		document.form.submit();
	}
</script>

<script>
	function CheckGoodsToCart() {
		// 체크한 상품들 장바구니로 넘기기.
		var msg = "";
		var list = document.getElementsByName("goods");
		// alert(list.length);
		for (i = 0; i < list.length; i++) {
			if (list[i].checked)
				msg += list[i].value + ",";
		}
		alert(msg);

		window.location.href = 'AddCartAction.action?msg=' + msg;
		alert('선택한 상품이 장바구니로 이동했습니다.')
		document.form.submit();
	}
</script>

<script>
	function CheckGoodsDelete() {
		var msg = "";
		var list = document.getElementsByName("goods");
		for (i = 0; i < list.length; i++) {
			if (list[i].checked)
				msg += list[i].value + ",";
		} // if문 끝.
		alert(msg);
		window.location.href = 'WishDeleteAction.action?msg=' + msg;
		alert('선택한 상품을 찜하기 목록에서 삭제했습니다.');
		document.form.submit();
	}
</script>


<link rel="stylesheet" href="Resource/css/pages/list.css">
<link rel="stylesheet" href="Resource/css/pages/mypage.css">
<link rel="stylesheet" href="Resource/css/pages/table.css">
<link rel="stylesheet" href="Resource/css/pages/order.css">
<link rel="stylesheet" href="Resource/css/pages/sub.css">
<script src="Resource/js/pages/order.js"></script>
<script src="Resource/js/pages/product.js"></script>

</head>

<body>
<!-- start of :: contents -->
		<div id="contents">
			<div class="mypage_wrap">
				<!-- lnb_wrap -->
				<div class="lnb_wrap">				

					<h2 class="title_style"><a href="mypagemain.action">마이페이지</a></h2>
					<ul>
						<li><a href="/mypage/myOrder.asp">주문/배송</a></li><!-- 현재 페이지에서 클래스 on -->
						<li><a href="msgbox.action?msgboxtype=rev">쪽지</a></li>
						<li><a href="mycoupon.action">쿠폰</a></li>
                        <li><a href="UWListAction.action">찜목록</a></li>
						<li><a href="qnalistAction.action">1:1문의</a></li>
						<li><a href="modifyform.action">회원정보 수정</a></li>
					</ul>
				</div>
			<!-- con_wrap -->
	<div class="con_wrap">

		<h2 class="title_style2">찜하기</h2>
		<form name="form6" id="form6" target="dataFrame">
			<input type="hidden" name="checkwish">
		</form>
		<form name="form1">
			<input type="hidden" name="deliveryFee" value="3000"> <input
				type="hidden" name="deliveryFree" value="20000">
			<fieldset>
				<legend class="acc-hidden">상품 선택 및 수량 선택 폼</legend>
				<div class="cart_check">
					<div class="check_box fl">
						<input onclick='check_all();' type="button" value="전체선택">&nbsp;&nbsp;
						<input onclick='uncheck_all();' type="button" value="전체해제">
					</div>
					<div class="btn_box1 fr">
						<a class="btn_style7 fl" href="javascript:CheckGoodsToCart()"><span>선택상품</span>
							장바구니<span>담기</span></a> <a class="btn_style7 fl"
							href="javascript:CheckGoodsDelete()">선택<span>상품 </span>삭제
						</a>
					</div>

				</div>
				<div class="table_type1 cart_table wish_table">

					<table>
						<caption class="hidden">상품정보, 주문수량, 상품금액, 주문금액, 주문상태 테이블</caption>
						<colgroup>
							<col style="width: 25px">
							<col style="width: 120px">
							<col style="">
							<col style="width: 225px">
							<col style="width: 115px">
							<col style="width: 110px">
						</colgroup>
						<thead>
							<tr>
								<th colspan="2">일시</th>
								<th>상품정보</th>
								<th>주문수량</th>
								<th>상품금액</th>
								<th>주문상태</th>
							</tr>
						</thead>
						<tbody>
							<s:iterator value="goodsList" status="stat">
								<s:url id="viewURL" action="UGViewAction">
									<s:param name="goods_no">
										<s:property value="goods_no" />
									</s:param>
									<s:param name="currentPage">
										<s:property value="currentPage" />
									</s:param>
								</s:url>

								<tr>
									<td class="check"><input type="checkbox" name="goods"
										id="goods" value="<s:property value="goods_no"/>"></td>
									<td class="date">2018-12-12 <span> 오후 2:10:11</span></td>
									<td class="name">
										<div class="photo">

											<s:a href="%{viewURL}">
												<img
													src="/Eoullim/upload/<s:property value="goods_savname.split(',')[0]"/>"
													width="250" height="150" alt="">
											</s:a>

										</div>
										<div class="txt">

											<dl>
												<dt>
													<s:a href="%{viewURL}">
														<s:property value="goods_name" />
													</s:a>
												</dt>
											</dl>
										</div>
									</td>
									<td>

									</td>
									<td><s:property value="goods_price" />원</td>
									<td class="condition">
										<div style="display: inline-block;">
											<dl>
												<dt>
													<a
														href="javascript:BuyCheck(2,<s:property value="goods_no" />)"><img
														src="/Eoullim/Resource/images/btn/cart_condition03.gif"
														alt=""></a>
												</dt>
												<dd>장바구니</dd>
											</dl>
											<dl>
												<dt>
													<a
														href="javascript:DeleteWish(<s:property value="goods_no"/>)"><img
														src="/Eoullim/Resource/images/btn/cart_condition02.gif"
														alt=""></a>
												</dt>
												<dd>삭제</dd>
											</dl>
										</div>
									</td>
								</tr>
							</s:iterator>
						</tbody>
						<s:if test="goodsList.size() <= 0">
							<tr align="center">
								<td colspan="5" align="center">찜하기 한 상품이 없습니다 :(</td>
							</tr>
						</s:if>

					</table>
					<div class="btn_box1 fr">
						<a class="btn_style7 fl" href="javascript:CheckGoodsToCart()"><span>선택상품</span>
							장바구니<span>담기</span></a> <a class="btn_style7 fl"
							href="goodslistAction.action">쇼핑<span>계속 </span>하기
						</a>
					</div>
				</div>
				<!-- paging -->
				<div class="paging">
					<!--div-->
					<a class='on'>1</a>
					<!--/div-->
				</div>
				<!-- //paging -->
			</fieldset>
		</form>
		<!-- //today_list -->
	</div>
	<!-- //con_wrap -->
			</div>
			<!-- //mypage_wrap -->
		</div>
		<!-- end of :: contents -->
</body>
</html>