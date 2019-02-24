<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>마이페이지</title>
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

	<script src="Resource/js/common/default.js"></script>
	<script src="Resource/js/common/cookie.js"></script>

	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
	<link rel="stylesheet" href="Resource/css/pages/member.css">
	<script src="Resource/js/pages/login.js"></script>
	<script src="Resource/js/pages/member.js"></script>
	<link rel="stylesheet" href="Resource/css/common/jquery-ui.css">	
	<link rel="stylesheet" href="Resource/css/pages/table.css">
	<link rel="stylesheet" href="Resource/css/pages/mypage.css">
	<script src="Resource/js/pages/mypage.js"></script>
</head>
<body>
		<div id="contents">
			<div class="mypage_wrap">
				<!-- lnb_wrap -->
				<div class="lnb_wrap">

					<h2 class="title_style"><a href="mypagemain.action">마이페이지</a></h2>
					<ul>
						<li><a href="myorder.action">주문/배송</a></li><!-- 현재 페이지에서 클래스 on -->
						<li><a href="msgbox.action?msgboxtype=rev">쪽지</a></li>
						<li><a href="mycoupon.action">쿠폰</a></li>
                        <li><a href="UWListAction.action">찜목록</a></li>
						<li><a href="qnalistAction.action">1:1문의</a></li>
						<li><a href="modifyform.action">회원정보 수정</a></li>
					</ul>
					
				</div>
				<!-- //lnb_wrap -->
				<!-- con_wrap -->
				<div class="con_wrap">
					<div id="grade_box">
						<div class="grade_icon">
							<i class="ic-set ic-op-grade" style="background-image: url('Resource/images/sub/img_grade02.png');"></i>
						</div>
						<div class="grade_info">
							<p class="info_txt_big"><strong><s:property value = "%{member.member_name}"/></strong> 고객님 <strong>어울림</strong>에 오신걸 <strong>환영</strong>합니다.</p>
						</div>	
					</div>

					<div class="point_wrap">
						
						<div class="col">
							<i class="ico-coupon"></i>
							보유쿠폰 <a style="cursor:pointer;" href="mycoupon.action"><strong><s:property value = "%{CtotalCount}"/></strong></a>장
						</div>
					</div>  

        
					<h2 class="title_style2 withline"><strong>최근 1달간 주문 내역</strong></h2>
					

					<ul class="order_step_new">

						<li><a href="">
							<i class="order-step-1"></i>
							<p>주문접수<span><s:property value = "%{OtotalCount1}"/></span></p>
						</a></li>
						<li><a href="">
							<i class="order-step-2"></i>
							<p>결제완료<span><s:property value = "%{OtotalCount2}"/></span></p>
						</a></li>
						<li><a href="">
							<i class="order-step-3"></i>
							<p>상품준비중<span><s:property value = "%{OtotalCount3}"/></span></p>
						</a></li>
						<li><a href="">
							<i class="order-step-4"></i>
							<p>배송중<span><s:property value = "%{OtotalCount4}"/></span></p>
						</a></li>
						<li><a href="">
							<i class="order-step-5"></i>
							<p>배송완료<span><s:property value = "%{OtotalCount5}"/></span></p>
						</a></li>
					</ul>

					<div class="rv_write_wrap">
						
						<p>* 어울림에서 판매하는 다양한 상품들의 리뷰를 작성해 보세요&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
						<a href="reviewlistAction.action" class="btn_style1">리뷰쓰기</a>
					</div>

					<!-- order_view_table -->
					<div class="table_type3 order_view_table">

						<!-- paging -->
						<div class="paging">
							<!--div-->
								
							<!--/div-->
						</div>
						<!-- //paging -->
					</div>
					<!-- //order_view_table -->

					<!-- return_area -->
					<div class="return_area">
						<dl>
							<dt>취소접수/배송지 변경</dt>
							<dd>
								01. 주문접수, 주문완료 단계에 있는 경우 <br class="t_hidden">
								해당 상품의 [주문취소] 버튼을 누르시면 <br class="t_hidden">
								바로 취소하실 수 있으며, 배송지 변경 적용 시 <br class="t_hidden">바로 적용됩니다.
							</dd>
							<dd>
								02. 배송준비/발송완료 단계에 있는 경우 <br class="t_hidden">
								물류로 배송 요청을 한 상태로 <br class="t_hidden">
								주문취소 및 배송지 변경이 불가합니다.
							</dd>
						</dl>
                        <dl>
							<dt>교환, 반품처리</dt>
							<dd>
								01. 고객사랑센터 (1588-8829) 로 접수 후 <br class="t_hidden">
								안내에 따라 교환, 반품처리를 해주셔야 <br class="t_hidden">
								빠른 처리가 가능합니다.
							</dd>
							<dd>
								02. 주문접소, 주문완료 단계에 있는 경우 <br class="t_hidden">
								동일 상품의 옵션 변경 및 동일 가격의 <br class="t_hidden">상품에 한해 교환이 가능합니다. <br>
								다른 가격대 상품으로 교환 시 주문취소 후 <br class="t_hidden">재주문 부탁드립니다.
							</dd>
							<dd>
                                03. 셀트리온스킨큐어 온라인 쇼핑몰에서 <br class="t_hidden">
                                구매하신 제품은 재판매가 가능한 사용하시지 <br class="t_hidden">
                                않은 제품에 한하여 반품이 가능하며 제품을 <br class="t_hidden">
                                반품하실 때에는 배송 받으셨던 포장 박스에 <br class="t_hidden">
                                제품을 넣어 보내주세요. 
                            </dd>
                            <dd>
                                04. 고객님의 변심에 의한 반품의 경우 <br class="t_hidden">
                                제품 수령 7일 이내에 반품 신청이 가능하며, <br class="t_hidden">
                                제공받은 상품이 주문 제품의 내용과 다르거나 <br class="t_hidden">
                                계약 내용과 다르게 이행된 경우에는 <br class="t_hidden">
                                상품을 공급받은 날로부터 3개월 이내, <br class="t_hidden">
                                그 사실을 안 날 또는 알 수 있었던 날부터 <br class="t_hidden">
                                30일 내에 교환 및 반품 신청이 가능합니다.
                            </dd>
                            <dd>
                                05. 단, 아래와 같은 경우는 예외로 인정하여  <br class="t_hidden">
                                반품이 불가합니다. <br class="t_hidden">
                                - 고객님의 과실로 상품이 훼손 또는 변형된 경우 <br class="t_hidden">
                                - 포장을 개봉하였거나 포장이 훼손되어  <br class="t_hidden">
                                  상품 가치가 현저히 상실된 경우 <br class="t_hidden">
                                - 시간의 경과에 의하여 재판매가 곤란할 정도로  <br class="t_hidden">
                                  상품의 가치가 현저히 감소한 경우  <br class="t_hidden">
                                - 고객님의 사용, 구성품 누락 또는 일부 소비에 <br class="t_hidden">
                                  의하여 상품의 가치가 현저히 감소한 경우 <br class="t_hidden">
                                - 제품 인수 시 포함되어 있던 사은품 및 샘플 <br class="t_hidden">
                                  등이 누락 된 경우 <br class="t_hidden">
                                - 셀트리온스킨큐어를 통한 반품 신청절차 없이 <br class="t_hidden">
                                  본인 판단하에 반송한 경우 
                            </dd>
                            <dd>
                                06. 물품 하자에 의한 반품을 제외하고 제조일 <br class="t_hidden">
                                불만 및 고객변심에 의한 반품/교환인 경우 <br class="t_hidden"> 
                                반품택배비는 고객님 부담입니다. <br class="t_hidden">
                                반품/교환 신청 시 상기 반품이 불가한 <br class="t_hidden">
                                경우에 해당 될 경우, 처리되지 않고 고객님께 <br class="t_hidden">
                                다시 반송 처리 되오니 이점 양지하여 
                                주시기 바랍니다.
							</dd>
						</dl>
						<dl>
							<dt>환불처리</dt>
							<dd>
								01. 반품 완료가 되면 결제하셨던 수단에 따라 <br class="t_hidden">
								각기 다른 방식으로 처리됩니다.
							</dd>
							<dd>
								02. 카드결제는 승인취소가 되며, 일반적으로 <br class="t_hidden">
								카드사에서는 승인 취소일로부터 <br class="t_hidden">4~5일 (영업일기준) 이후에
								취소 확인이 가능합니다.
							</dd>
							<dd>
								03. 현금(무통장/실시간 계좌이체/에스크로 등) <br class="t_hidden">
								결제건은 반품이 완료되면, 반품 완료일로부터 <br class="t_hidden">
								영업일 기준 3일내에 결제금액을 환불해드립니다.
							</dd>
						</dl>
					</div>
					<!-- //return_area -->                    
                    
                    				

				</div>
				<!-- //con_wrap -->
			</div>
		</div>
		<!-- end of :: contents -->
</body></html>