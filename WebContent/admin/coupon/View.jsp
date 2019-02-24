<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>쿠폰상세보기</title>
<link rel="stylesheet" href="/Eoulim/notice/common/css/css.css"
	type="text/css">
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
		<table width="100%" border="0" cellspacing="0" cellpadding="1">
			<tr>
				<td align="center">
				
	<table width="600" border="0" cellspacing="0" cellpadding="2" align="center">
		<tr>
			<td height="20"></td>
		</tr>
		
		<tr>
			<td align="center" class="text01 formbar"><h2>쿠폰 상세보기</h2></td>

		</tr>
		<tr>
			<td height="20"></td>
		</tr>

	<table width="80%" border="0" cellspacing="0" cellpadding="0"  id="form">
		<tr>
			<td align="right" colspan="2"></td>
		</tr>
		
		<tr>
			<td width="80" class="tdstyle1">쿠폰명</td>
			<td width="500">
				<s:property value="resultClass.coupon_name" /></td>
		</tr>

		<tr>
			<td width="80" class="tdstyle1">쿠폰 사용 가능 금액</td>
			<td width="500">
				<s:property value="resultClass.coupon_price" /></td>
		</tr>
		<tr>
			<td width="80" class="tdstyle1">쿠폰 타입</td>
			<td width="500">
			<s:if test = "resultClass.coupon_type == 1">
				가격할인
				</td>
				</tr>
				<tr>
					<td width="80" class="tdstyle1">할인 가격</td>
					<td width="500">
					<s:property value = "resultClass.coupon_discash"/>원</td>
				</tr>
			</s:if>
			<s:elseif test = "resultClass.coupon_type == 2">
				퍼센트할인
			</td>
			</tr>		
			<tr>
				<td  width="80" class="tdstyle1">할인율</td>
				<td width="500">
				<s:property value = "resultClass.coupon_disrate"/>%
				</td>
			</tr>
			</s:elseif>
		

		<tr>
			<td width="80" class="tdstyle1">쿠폰 발급일</td>
			<td width="500">
				<s:property value="resultClass.coupon_startdate" /></td>
		</tr>
		<tr>
			<td width="80" class="tdstyle1">쿠폰 만료일</td>
			<td width="500">
				<s:property value="resultClass.coupon_enddate" /></td>
		</tr>
		<tr>
			<td colspan="2" height="10"></td>
		</tr>
	
		<tr>
			<td align="right" colspan="2">
			 	<input name="list" type="button" value="수정" class="hreflink"
				onClick="javascript:location.href='CouponModifyForm.action?coupon_no=<s:property value="resultClass.coupon_no" />&currentPage=<s:property value="currentPage" />'">

				<input name="list" type="button" value="삭제" class="hreflink"
				onClick="javascript:location.href='CouponDeleteAction.action?coupon_no=<s:property value="resultClass.coupon_no" />&currentPage=<s:property value="currentPage" />'">

				<input name="list" type="button" value="목록" class="hreflink"
				onClick="javascript:location.href='admincouponlist.action?currentPage=<s:property value="currentPage" />'">

			</td>
		</tr>
	</table>
</body>
</html>