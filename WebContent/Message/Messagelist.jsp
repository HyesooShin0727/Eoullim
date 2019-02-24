<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
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
	<link rel="stylesheet" href="Resource/css/pages/list.css">
	<script src="Resource/js/pages/list.js"></script>
	
</head>
<body>
	<!-- start of :: contents -->
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
					<h2 class="title_style2">쪽지</h2>	
					<!-- mypage_tab -->
					<ul class="mypage_tab">
					<s:if test = "%{msgboxtype=='rev'}">
						<li><a class="on" href="#">받은 쪽지함</a></li><!-- 현재 페이지에서 클래스 on -->
						<li><a href="msgbox.action?msgboxtype=send">보낸 쪽지함</a></li>
					</s:if>
					<s:elseif test="%{msgboxtype=='send'}">
						<li><a href="msgbox.action?msgboxtype=rev">받은 쪽지함</a></li>
						<li><a class="on" href="#">보낸 쪽지함</a></li>
					</s:elseif>
					</ul>
					<!-- //mypage_tab -->

					<div class="table_type2 coupon_table">
						<table>
							<thead>
								<tr>
									<th width = "10%">번호</th>
									<th width = "30%">제목</th>
									<s:if test = "%{msgboxtype=='rev'}">
									<th width = "10%">보낸사람</th>
									<th width = "20%">보낸날짜</th>
									</s:if>
									<s:elseif test="%{msgboxtype=='send'}">
									<th width = "10%">받는사람</th>
									<th width = "20%">받은날짜</th>
									</s:elseif>
									
								</tr>
							</thead>
							<tbody>
							<s:iterator value = "list" status = "stat">
							<s:url id="viewURL" action="msgviewAction">
								<s:param name="msg_no">
									<s:property value="msg_no" />
								</s:param>
								<s:param name="currentPage">
									<s:property value="currentPage" />
								</s:param>
								<s:param name="msgboxtype">
									<s:property value="msgboxtype"/>
								</s:param>
							</s:url>
							<tr>
								<td><s:property value="msg_no" /></td>
								<td><s:a href="%{viewURL}"><s:property value="msg_sub" /></s:a></td>
								<s:if test = "%{msgboxtype=='rev'}">
								<td><s:property value="msg_send_id"/></td>
								</s:if>
								<s:elseif test="%{msgboxtype=='send'}">
								<td><s:property value="msg_rev_id"/></td>
								</s:elseif>
								<td><s:property value="msg_regdate"/></td>
							</s:iterator>
							<s:if test="list.size() <= 0">
								<tr>
									<td colspan="5" align="center">받은 쪽지가 없습니다.</td>
								</tr>
							</s:if>
							</tr>
							</tbody>
						</table>
						<!-- paging -->
						<div class="paging">
								<td colspan="5"><s:property value="pagingHtml" escape="false" /></td>
						</div>
						<!-- //paging -->
					</div>
					<div class="btn_box1 btn_1">
						<a class="btn_style8" href="msgwriteform.action?msgboxtype=<s:property value = "msgboxtype"/>">쪽지보내기</a>
					</div>
				</div>
				<!-- //con_wrap -->
			</div>
		</div>
		<!-- end of :: contents -->

</body>
</html>
