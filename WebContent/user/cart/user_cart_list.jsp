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
<style>
table.type01 {
	border-collapse: collapse;
}
</style>
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

<script>
	function DeleteCart(cart_no) {
		window.location.href = 'CartDeleteAction.action?cart_no=' + cart_no
		alert('삭제되었습니다.');
		document.form.submit();
	}
</script>


<script>
function BuyOneCart(cart_no) {
	var msg = "";
	var msg = msg + cart_no + ",";
	window.location.href='AddToOrderAction.action?msg=' + msg;
	document.form.submit();
}
</script>

<script>
	function BuyCheckedGoods() {
		// 체크한 상품들 장바구니로 넘기기.
		var msg = "";
		var list = document.getElementsByName("goods");
		// alert(list.length);
		for (i = 0; i < list.length; i++) {
			if (list[i].checked)
				msg += list[i].value + ",";
		}
		window.location.href = 'AddToOrderAction.action?msg=' + msg;
		document.form.submit();
	}
</script>

<!-- 선택한 상품 장바구니에서 삭제 -->
<script>
	function CheckGoodsDelete() {
		var msg = ""; // msg에 선택한 상품들의 cart_no 넣어줄거임 wish_list에선s goods_no 넣어줌 
		var list = document.getElementsByName("goods");
		for (i = 0; i < list.length; i++) {
			if (list[i].checked)
				msg += list[i].value + ",";
		} // if문 끝.
		alert(msg);
		window.location.href = 'CartDeleteAction.action?msg=' + msg;
		alert('선택한 상품을 장바구니에서 삭제했습니다.');
		document.form.submit();
	}
</script>

<script>
	function change(num) {
		var x = document.getElementById("count");
		var y = Number(x) + num;
		if (y < 1)
			y = 1;
		x.count.value = y;
	}
</script>

<script>
	function Addcnt(cart_no) {
		var td = document.getElementById(cart_no);
		var n = Number(td.innerHTML);
		td.innerHTML = n + 1;
	}
	function Subcnt(cart_no) {
		var td = document.getElementById(cart_no);
		var n = Number(td.innerHTML);
		if (td.innerHTML > 1) {
			td.innerHTML = n - 1;
		}
	}
	function ChangeCartcnt(cart_no) {
		var td = document.getElementById(cart_no);
		var n = Number(td.innerHTML);
		window.location.href = 'CartModifyAction.action?cart_no='+cart_no+'&cart_goods_cnt='+n
		// n 값이 현재 장바구니에 담을 수량을 표시한 수량임
	}
</script>

<link rel="stylesheet" href="Resource/css/pages/order.css">
<link rel="stylesheet" href="Resource/css/pages/table.css">
<link rel="stylesheet" href="Resource/css/pages/list.css">
<script src="Resource/js/pages/order.js"></script>
<script src="Resource/js/pages/product.js"></script>

</head>

<body>
	<!-- start of :: contents -->
	<div id="contents">
		<h2 class="title_style">장바구니</h2>
		<div class="order_wrap">
			<!--shopping_step-->
			<ul class="shopping_step">
				<li><img
					src="/Eoullim/Resource/images/sub/shopping_step01_on.jpg"
					alt="장바구니" class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step01_m_on.jpg"
					alt="장바구니" class="d_hidden" />
					<p>장바구니</p></li>
				<li><img
					src="/Eoullim/Resource/images/sub/shopping_step02.jpg" alt="배송정보"
					class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step02_m.jpg"
					alt="배송정보" class="d_hidden" />
					<p>배송정보</p></li>
				<li><img
					src="/Eoullim/Resource/images/sub/shopping_step03.jpg" alt="결제하기"
					class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step03_m.jpg"
					alt="결제하기" class="d_hidden" />
					<p>결제하기</p></li>
				<li><img
					src="/Eoullim/Resource/images/sub/shopping_step04.jpg" alt="주문완료"
					class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step04_m.jpg"
					alt="주문완료" class="d_hidden" />
					<p>주문완료</p></li>
			</ul>
			<!--//shopping_step-->


			<form name="form1" id="form1">
				<input type="hidden" name="orderMode" id="orderMode" value="cart">
				<input type="hidden" name="deliveryFee" value="2500" /> <input
					type="hidden" name="deliveryFree" value="10000" />
				<fieldset>
					<legend class="acc-hidden">상품 선택 및 수량 선택 폼</legend>
					<h3 class="cart_title">온라인 구매 장바구니</h3>
					<div class="cart_check">
						<div class="check_box fl">
							<input onclick='check_all();' type="button" value="전체선택">&nbsp;&nbsp;
							<input onclick='uncheck_all();' type="button" value="전체해제">
						</div>
						<div class="btn_box1 fr">
							<a class="btn_style7 fr" href="javascript:CheckGoodsDelete();">선택상품
								삭제</a>
						</div>
					</div>
					<div class="table_type1 cart_table">
						<table>
							<caption class="hidden">상품정보, 주문수량, 상품금액, 주문금액, 주문상태
								테이블</caption>
							<colgroup>
								<col style="width: 90px">
								<col style="">
								<col style="width: 255px">
								<col style="width: 160px">
								<col style="width: 160px">
								<col style="width: 160px">
							</colgroup>
							<thead>
								<tr>
									<th colspan="2">상품정보</th>
									<th>주문수량</th>
									<th>상품금액</th>
									<th>주문금액</th>
									<th>주문상태</th>
								</tr>
							</thead>
							<tbody>

								<s:iterator value="cartList" status="stat">
									<s:url id="viewURL" action="UCListAction">
									</s:url>

									<tr>
										<td class="check"><input type="checkbox" name="goods"
											id="goods" value="<s:property value="cart_no"/>"></td>
										<td class="name">
											<div class="photo">
												<img
													src="/Eoullim/upload/<s:property value="cart_goods_img.split(',')[0]"/>"
													width="250" height="150" alt="쿼드 아이섀도우 × 멘디니">
											</div>
											<div class="txt">

												<dl>
													<dt>
														<a><s:property value="cart_goods_no" /></a>
													</dt>
													<dd>
														<s:property value="cart_goods_name" />
													</dd>
												</dl>
											</div>
										</td>

										<td>
											<!-- 장바구니 + , - 할 수 있는 부분 -->
											<table>
												<tr>
													<td><a
														href="javascript:Addcnt(<s:property value="cart_no"/>,<s:property value="cart_goods_cnt"/>);"
														class="btn_plus"><img
															src="/Eoullim/Resource/images/btn/btn_plus.gif" /></a></td>
													<td id=<s:property value="cart_no"/>><s:property value="cart_goods_cnt"/> </td>
													<td><a
														href="javascript:Subcnt(<s:property value="cart_no"/>);"
														class="btn_minus"><img
															src="/Eoullim/Resource/images/btn/btn_minus.gif" /></a></td>
													<td><a href="javascript:ChangeCartcnt(<s:property value="cart_no"/>);"
														class="btn_style6 btn">변경</a></td>
												</tr>
											</table>

										</td>
										<!-- 망할 안나오네 -->
										<td><s:property value="cart_goods_price" />원</td>
										<!-- 상품금액 -->
										<td><s:property value="cart_goods_total" />원</td>
										<!--  한상품에 대한 주문금액 = 개수 * 가격-->
										<td class="condition">
											<div style="display: inline-block;">
												<dl>
													<dt>
														<a
															href="javascript:BuyOneCart(<s:property value="cart_no"/>);"><img
															src="/Eoullim/Resource/images/btn/cart_condition01.gif"
															alt="" /></a>
													</dt>
													<dd>바로주문</dd>
												</dl>
												<dl>
													<dt>
														<a
															href="javascript:DeleteCart(<s:property value="cart_no"/>);"><img
															src="/Eoullim/Resource/images/btn/cart_condition02.gif"
															alt="" /></a>
													</dt>
													<dd>삭제</dd>
												</dl>
											</div>
										</td>
									</tr>
								</s:iterator>
								<s:if test="cartList.size() <= 0">
									<tr align="center">
										<td colspan="5" align="center">장바구니에 담은 상품이 없습니다 :(</td>
									</tr>
								</s:if>
								<tr class="delivery">
									<td colspan="6">출고지 : 팀장홍승표의집 / 배송비 0원</td>
								</tr>
							</tbody>

						</table>
					</div>
					<div class="price_box cart_price_box">
						<dl>
							<dt>상품합계</dt>
							<dd id="checkPrice">
								<s:property value="totalPay" />
								원
							</dd>
						</dl>
						<dl class="delivery">
							<dt>배송비</dt>
							<dd id="deliveryPrice">0원</dd>
						</dl>
						<dl class="total">
							<dt>총 결제금액</dt>
							<dd id="totalPrice">
								<s:property value="totalPay" />
								<span>원</span>
							</dd>
						</dl>
					</div>

					<div class="btn_box5">
						<a href="javascript:BuyCheckedGoods();" class="btn_style8">선택상품주문</a> 
						<a href="goodslistAction.action" class="btn_style2">쇼핑 계속하기</a>
					</div>
				</fieldset>
			</form>
		</div>
		<!-- end of :: order_wrap -->
	</div>
	<!-- end of :: contents -->


</body>
</html>