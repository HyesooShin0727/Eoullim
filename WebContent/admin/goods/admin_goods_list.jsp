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
<!-- <SCRIPT type="text/javascript">
	function sendcoupon(){
		var url = "CouponSendform.action"
		
			open(url, "confirm","toolbar=no,location=no,status=no,menubar=no,"+
			 "scrollbars=no,resizable=no,width=600,height=600");
	}
</SCRIPT> -->
</head>
<body>
<center>
	<!-- start of :: contents -->
		<div id="contents">
			<div class="customer_wrap">
				<!-- lnb_wrap -->
				<div class="con_wrap">			
					</div>
					<h2>상품 관리</h2><br><br>
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
									<th width = "5%"><strong>번호</strong></th>
									<th width = "25%"><strong>상품명</strong></th>
									<th width = "10%"><strong>가격</strong></th>
									<th width = "15%"><strong>브랜드명</strong></th>
									<th width = "15%"><strong>타입</strong></th>
									<th width = "10%"><strion>등록날짜</strion></th>
								</tr>
							</thead>
							<tbody>
							<s:iterator value="list" status="stat">
								<s:url id="viewURL" action="admingoodsview">
									<s:param name="goods_no">
										<s:property value="goods_no" />
									</s:param>
									<s:param name="currentPage">
										<s:property value="currentPage" />
									</s:param>
								</s:url>
								<tr>
									<td><s:property value="goods_no" /></td>
									<td><s:a href="%{viewURL}"><s:property value="goods_name" /></s:a></td> 		
									<td><s:property value="goods_price" /></td> 
									<td><s:property value="goods_bname"/></td>
									<td><s:property value="goods_type2"/></td>
									<td><s:property value="goods_regdate"/></td>
								</tr>
							</s:iterator>
							<s:if test="list.size() <= 0">
								<tr>
									<td colspan="5" align="center">등록된 상품이 없습니다</td>
								</tr>
							</s:if>
							<tr align="center">
								<td colspan="7"><s:property value="pagingHtml" escape="false" /></td>
							</tr>
							<tr align="right">
								<td colspan="7"><input type="button" value="상품등록" class="hreflink" onClick="javascript:location.href='admingoodswriteform.action?currentPage=<s:property value="currentPage" />'" />	</td>
							</tr>
							</tbody>
						</table>
					<tr align="center">
							<td colspan="6">
								<form>
								<select name="searcht" style="width: 100px; height: 30px;">
									<option value="goods_name">상품명</option>
									<option value="goods_type2">타입</option>
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
