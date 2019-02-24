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
<link href="/Eoullim/user/member/style.css" rel="stylesheet" type="text/css">
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


<link rel="stylesheet" href="Resource/css/pages/order.css">
<link rel="stylesheet" href="Resource/css/pages/table.css">
<link rel="stylesheet" href="Resource/css/pages/list.css">
<script src="Resource/js/pages/order.js"></script>
<script src="Resource/js/pages/product.js"></script>

<script>
	function payCheck() {
		alert('결제가 되부렀다 ');
		/*  msg = "결제하시겠습니까?";
		  if (confirm(msg)!=0) {
		       // Yes click
		  	window.location.href = 'InsertOrderAction.action?cart_no=' + cart_no
			alert('삭제되었습니다.');
			document.form.submit();
		  } else {
		      // no click 
		  } */
	}
	// myconfirm
</script>
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
	function DaumPostcode() {

		new daum.Postcode(
				{

					oncomplete : function(data) {

						// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

						// 각 주소의 노출 규칙에 따라 주소를 조합한다.

						// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.

						var fullAddr = ''; // 최종 주소 변수

						var extraAddr = ''; // 조합형 주소 변수

						// 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.

						if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우

							fullAddr = data.roadAddress;

						} else { // 사용자가 지번 주소를 선택했을 경우(J)

							fullAddr = data.jibunAddress;

						}

						// 사용자가 선택한 주소가 도로명 타입일때 조합한다.

						if (data.userSelectedType === 'R') {

							//법정동명이 있을 경우 추가한다.

							if (data.bname !== '') {

								extraAddr += data.bname;

							}

							// 건물명이 있을 경우 추가한다.

							if (data.buildingName !== '') {

								extraAddr += (extraAddr !== '' ? ', '
										+ data.buildingName : data.buildingName);

							}

							// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.

							fullAddr += (extraAddr !== '' ? ' (' + extraAddr
									+ ')' : '');

						}

						// 우편번호와 주소 정보를 해당 필드에 넣는다.

						document.getElementById('rec_zipcode').value = data.zonecode; //5자리 새우편번호 사용

						document.getElementById('rec_address1').value = fullAddr;

						// 커서를 상세주소 필드로 이동한다.

						document.getElementById('rec_address2').focus();

					}

				}).open();

	}
</script>
</head>

<body>
	<div id="contents">
		<h2 class="title_style">주문하기</h2>
		<div class="order_wrap">
			<!--shopping_step-->
			<ul class="shopping_step">
				<li><img src="/Eoullim/Resource/images/sub/shopping_step01.jpg"
					alt="장바구니" class="tm_hidden" /> <img
					src="/Eoullim/images/sub/shopping_step01_m.jpg" alt="장바구니"
					class="d_hidden" />
					<p>장바구니</p></li>
				<li><img
					src="/Eoullim/Resource/images/sub/shopping_step02_on.jpg"
					alt="배송정보" class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step02_m_on.jpg"
					alt="배송정보" class="d_hidden" />
					<p>배송정보</p></li>
				<li><img src="/Eoullim/Resource/images/sub/shopping_step03.jpg"
					alt="결제하기" class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step03_m.jpg" alt="결제하기"
					class="d_hidden" />
					<p>결제하기</p></li>
				<li><img src="/Eoullim/Resource/images/sub/shopping_step04.jpg"
					alt="주문완료" class="tm_hidden" /> <img
					src="/Eoullim/Resource/images/sub/shopping_step04_m.jpg" alt="주문완료"
					class="d_hidden" />
					<p>주문완료</p></li>
			</ul>
			<!--//shopping_step-->
			<fieldset>
				<legend class="hidden">상품 선택 및 수량 선택 폼</legend>

				<!-- check_out table -->
				<div id="cartList">

					<div class="table_type1 checkout_table">
						<table>
							<colgroup>
								<col>
								<col style="width: 95px">
								<col style="width: 120px">
								<col style="width: 120px">
								<col style="width: 120px">
								<col style="width: 120px">
								<col style="width: 120px">
								<col style="width: 150px">
							</colgroup>
							<thead>
								<tr>
									<th>상품정보</th>
									<th>주문수량</th>
									<th>상품색상</th>
									<th>상품금액</th>
									<th>결제금액</th>
								</tr>

							</thead>
							<tbody>
								<s:iterator value="cart_List" status="stat">
									<tr>
										<td class="name">
											<div class="photo">
												<img
													src="/Eoullim/upload/<s:property value="cart_goods_img.split(',')[0]"/>"
													width="250" height="150" alt="">
											</div>
											<div class="txt">
												<dl>
													<dt>
														<a><s:property value="cart_goods_name" /></a>
													</dt>
												</dl>
											</div>
										</td>
										<!-- 주문수량 -->
										<td><s:property value="cart_goods_cnt" /></td>
										
										<td><s:property value="cart_goods_color" /></td>
									
										<!-- 상품금액 -->
										<td><s:property value="cart_goods_price" />원</td>
										<!-- 하나의 상품에 대한 총 가격. (전체 결제금액 아님) -->
										<td><s:property value="cart_goods_total" />원</td>
										<!-- 결제금액 -->
									</tr>
								</s:iterator>

								<tr class="delivery">
									<td colspan="8">
										<p>
											<span class="d_hidden t_hidden">*</span><span
												class="m_hidden">※</span>동일 사은품은<br
												class="d_hidden t_hidden"> 동일 주문번호에 1개만 부여됩니다.
										</p> 출고지 : 팀장홍승표의집 / 배송비 0원
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!--// check_out table -->
				<div class="btn_box5">
						<td><input class = "hreflink" type = button value = "쿠폰선택" onClick = "javascript:location.href='selectcoupon.action?msg=<s:property value = "%{msg}"/>&payTotal=<s:property value = "%{payTotal}"/>'"/></td>
				</div>





				<!-- price_box-->
				<div class="price_box cart_price_box pay_price_box">
					<dl>
						<dt>상품합계</dt>
						<dd>
							<s:property value="payTotal" />
						</dd>
					</dl>
					<dl class="sale">
						<dt>쿠폰 할인</dt>
						<s:if test = "coupon.coupon_type == 1">
							<dd id="sale_total"><s:property value = "%{coupon.coupon_discash}"/>원 할인</dd>
						</s:if>
						<s:elseif test="coupon.coupon_type == 2">
							<dd id="sale_total"><s:property value = "%{coupon.coupon_disrate}"/>% 할인</dd>
						</s:elseif>
						<s:else>
							<dd id="sale_total">0원 할인</dd>
						</s:else>
					</dl>

					<dl class="delivery">
						<dt>배송비</dt>
						<dd>
							<span id="transprice">0</span>원 <span class="pcolor1"
								style="font-size: 0.6em;" id="islandPay"></span>
						</dd>
					</dl>


					<dl class="total">
						<dt>총 결제금액</dt>
						<dd id="div_price2">
							<s:property value="payTotal" />
						</dd>

					</dl>
				</div>

				<!-- //price_box -->

				<!-- order_info_table -->
				<h3 class="order_title">주문자 정보</h3>

				<!--a href="javascript:ordererPopup()" class="btn_style6 btn_order_modify">주문자정보 수정</a-->

				<s:form method="post" action="InsertOrderAction.action" enctype="multipart/form-data">
					<input type="hidden" name="coupon_no" value = "<s:property value = "coupon_no"/>"/>
					<input type="hidden" name="cart_msg" value="<s:property value="cart_msg"/>" />
					<input type="hidden" name="goods_msg" value="<s:property value="goods_msg"/>" />
					<input type="hidden" name="payTotal" value="<s:property value="payTotal"/>" />
					<input type="hidden" name="payTotal" value="<s:property value="cnt"/>" />
					<input type="hidden" name="color" value="<s:property value="color"/>" />
					<!-- <input type="hidden" name="cart" -->
						
					<!-- 전체주문금액 전달 -->
					 <table class="basic_table b_line order_table">
						<caption class="hidden">이름, 휴대폰, e-mail 정보가 있는 테이블</caption>
						<tbody>
							<tr>
								<th><label for="orderName2">이름</label></th>
								<td><s:textfield name="order_name" theme="simple"
										value="%{memberClass.member_name}" /> <span>* 단체/회사
										이름으로 보내거나 선물하시는 경우 보내는 분의 이름을 수정하시면 됩니다.</span></td>
							</tr>
							<tr>
								<th><label for="orderPhone">휴대폰</label></th>
								<td><s:textfield name="order_phone" theme="simple"
										value="%{memberClass.member_phone}" />"-" 없이 숫자만 입력하세요</td>
							</tr>
							
							<tr class="last">
								<th><label for="email">E-MAIL</label></th>
								<td><s:textfield name="order_email1" theme="simple"
										value="%{memberClass.member_email1}" /> @ <s:textfield
										name="order_email2" theme="simple"
										value="%{memberClass.member_email2}" /></td>
							</tr>

							<!--// order_info_table -->
							<!-- order_table -->

							<tr>
								<td width="100"><div class="title_area">
										<h3 class="order_title">배송지 정보</h3>
									</div></td>
							</tr>
							<tr>
							</tr>
							<tr>
								<td valign="middle" class="tdstyle1">이름</td> 
								<td><s:textfield theme="simple" name="rec_name" value="%{memberClass.member_name}" /></td>
							</tr>

							<tr>
								<th><label for="orderTel">전화번호</label></th>
								<td><s:textfield name="rec_phone" size="28" theme="simple"
										value="%{memberClass.member_phone}" />"-" 없이 숫자만 입력하세요</td>
							</tr>
							<tr>
								<td class="tdstyle1">우편번호<img
									src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
								<td valign="middle"><input type="text" id="rec_zipcode"
									name="rec_zipcode" size="28" placeholder="검색버튼을 이용해주세요">
									<input type="button" value="검색" onclick="DaumPostcode()"
									class="hreflink2"><br></td>
							</tr>

							<tr>
								<td class="tdstyle1">주소<img
									src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
								<td valign="middle"><input type="text" id="rec_address1"
									name="rec_address1" placeholder="자동기입" size="60"><br>
									<input type="text" name="rec_address2" id="rec_address2"
									placeholder="상세주소를 입력해주세요" size="60"></td>
							</tr>
							
						</tbody>
					</table> 
					<div class="btn_box4" id="checkoutbtn">
				<input class = "hreflink" type="submit" value="결제" width="12"> 
				<input type = "button" class = "hreflink" value = "취소" onClick="javascript:location.href='goodslistAction.action'">
			</div>
				</s:form>
				<!--// order_table -->
			</fieldset>
			
		</div>
		<!-- end of :: order_wrap -->
	</div>
	<!-- end of :: contents -->
</body>
</html>