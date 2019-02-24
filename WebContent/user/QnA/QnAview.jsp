<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
<head>
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
	<link rel="stylesheet" href="Resource/css/pages/customer.css">
	<script src="Resource/js/pages/mypage.js"></script>
	<link rel="stylesheet" href="Resource/css/pages/list.css">
	<script src="Resource/js/pages/list.js"></script>
	<script src="Resource/js/pages/faq.js"></script>
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
                        <li><a href="/mypage/wishlist.asp">찜목록</a></li>
						<li><a href="qnalistAction.action">1:1문의</a></li>
						<li><a href="modifyform.action">회원정보 수정</a></li>
					</ul>
					
				</div>
				<!-- //lnb_wrap -->
		<!-- con_wrap -->
				<div class="con_wrap">	
					<div class="select_box m_lnb no_over d_hidden">
						<a href="#">QnA</a>
					</div>
		
					<h2 class="title_style2">QnA</h2>	
					<div class="customer_view">
						<h2 class="tit"><s:property value="resultClass.qna_sub"/></h2>
						<div class="view_box">
							<div>
							<s:property value="resultClass.qna_content"/>
							</div>
							<s:if test = "resultClass.img_file == null">
							</s:if>
							<s:else>
								<img src = "/Eoullim/upload/<s:property value = "resultClass.img_file"/>">
							</s:else>
						</div>
					</div>
					<s:if test = "replyClass != null">
					<hr>
					<br>
					<br>
					<h2 class="title_style2">답변</h2>
					<div class="customer_view">
						<h2 class="tit"><s:property value="replyClass.qna_sub"/></h2>
						<div class="view_box">
							<div>
							<s:property value="replyClass.qna_content"/>
							</div>
							<s:if test = "replyClass.img_file == null">
							</s:if>
							<s:else>
								<img src = "/Eoullim/upload/<s:property value = "replyClass.img_file"/>">
							</s:else>
						</div>
					</div>
					</s:if>
					<!--view_sns_box-->
					<div class="view_sns_box">
					</div>
					<div class="view_top_box bottom">
							<a href="qnalistAction.action" class="btn_back">BACK TO LIST</a>
					</div>
					<!-- //view_sns_box -->
					</div>
				</div>
				<!-- //con_wrap -->
			</div>
			<!--//customer_wrap-->		

		</div>
		<!-- end of :: contents -->
</body>
</html>