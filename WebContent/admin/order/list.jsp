<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>쿠폰 목록</title>
<link rel="stylesheet" href="Resource/css/pages/import.css"/> 
<link href="/Eoullim/user/member/style.css" rel="stylesheet" type="text/css">
    
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
<center>
	<!-- start of :: contents -->
		<div id="contents">
			<div class="customer_wrap">
				<!-- lnb_wrap -->
				<div class="con_wrap">			
					</div>
					<h2>주문 관리</h2><br><br>
					<div></div>
					<div class="faq_table customer_faq_table">
						<table>
							<colgroup>
								<col style="width:12%"/>
								<col/>
								<col style="width:18%"/>
							</colgroup>
							<thead>
								<tr>
									<th width = "10%"><strong>주문번호</strong></th>
									<th width = "15%"><strong>주문 아이디</strong></th>
									<th width = "25%"><strong>주문 상품</strong></th>
									<th width = "10%"><strong>주문 총 가격</strong></th>
									<th width = "15%"><strong>주문 상태</strong></th>
									<th width = "25%"><strion>주문 상태 변경</strion></th>
								</tr>
							</thead>
							<tbody>
							<s:iterator value="list" status="stat">
								<tr>
									<td><s:property value="order_no" /></td>
									<td><s:property value="order_member_id" /></td> 		
									<td><s:property value="order_goods_name"/></td> 
									<td><s:property value="order_total"/></td>
									<td>
									<s:if test = "order_state == 1">
										주문접수
									</s:if>
									<s:elseif test = "order_state == 2">
										결제완료
									</s:elseif>
									<s:elseif test = "order_state == 3">
										상품준비중
									</s:elseif>
									<s:elseif test = "order_state == 4">
										배송중
									</s:elseif>
									<s:elseif test = "order_state == 5">
										배송완료
									</s:elseif>
									</td>
									<td>
									<form action = "orderstatemodify.action" method = "post">
										<s:hidden name="order_no" value="%{order_no}" />
										<select name = "selectstate">
											<option value = "1">주문접수</option>
											<option value = "2">결제완료</option>
											<option value = "3">상품준비중</option>
											<option value = "4">배송중</option>
											<option value = "5">배송완료</option>
										</select>
										<input type = "submit" value = "상태변경"/>
									</form>
									</td>
								</tr>
							</s:iterator>
							<s:if test="list.size() <= 0">
								<tr>
									<td colspan="5" align="center">주문이 없습니다</td>
								</tr>
							</s:if>
							<tr align="center">
								<td colspan="7"><s:property value="pagingHtml" escape="false" /></td>
							</tr>
							</tbody>
						</table>
					<tr align="center">
							<td colspan="6">
								<form>
								<select name="searcht" style="width: 100px; height: 30px;">
									<option value="order_member_id">주문자</option>
								</select>
								<s:textfield name="searchk" theme="simple" value="" cssStyle="width:200px; height:30px;" maxlength="20" />
									<input name="submit" type="submit" value="검색" class="submit">
								</form>
							</td>
						</tr>
					</div>
				</div>
				<!-- //con_wrap -->
			</div>
			<!--//customer_wrap-->
		</div>
		<!-- end of :: contents -->
</center>
</body>
</html>
