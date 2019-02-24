<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title> 회원 관리 상세보기 </title>

<link href="/Eoullim/common/css/style.css" rel="stylesheet" type="text/css">
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

	<table width="100%" border="0" cellspacing="0" cellpadding="1">
			<tr>
				<td align="center">
				
	<table width="600" border="0" cellspacing="0" cellpadding="2" align="center">
		<tr>
			<td height="20"></td>
		</tr>
		
		<tr>
			<td align="center" class="text01 formbar"><h2>회원 관리 상세보기</h2></td>

		</tr>
		<tr>
			<td height="20"></td>
		</tr>

	<table width="80%" border="0" cellspacing="0" cellpadding="0"  id="form">
		<tr>
			<td align="right" colspan="2"></td>
		</tr>
		
		<tr bgcolor="#777777">
			<td colspan="2" height="1"></td>
		</tr>
		
		<tr bgcolor="#777777">
			<td colspan="2" height="1"></td>
		</tr>
		
		<tr>
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td width="80" class="tdstyle1">회원번호</td>
			<td width="500">
				<s:property value="resultClass.member_no" /></td>
		</tr>

		<tr>
			<td width="80" class="tdstyle1">회원 이름</td>
			<td width="500">
				<s:property value="resultClass.member_name" /></td>
		</tr>
		<tr>
			<td width="80" class="tdstyle1">회원 아이디</td>
			<td width="500">
				<s:property value="resultClass.member_id" /></td>
		</tr>

		<tr>
			<td width="80" class="tdstyle1">주민등록번호</td>
			<td width="500">
				<s:property value="resultClass.member_jumin1" />-
				<s:property value="resultClass.member_jumin2" /></td>
		</tr>
		<tr>
			<td width="80" class="tdstyle1">연락처</td>
			<td width="500">
				<s:property value="resultClass.member_phone" /></td>
		</tr>
		<tr>
			<td width="80" class="tdstyle1">이메일</td>
			<td width="500">
				<s:property value="resultClass.member_email1" />@
				<s:property value="resultClass.member_email2" /></td>
		</tr>
		<tr>
			<td width="80" class="tdstyle1">주소</td>
			<td width="500">
				( <s:property value="resultClass.member_zipcode" />)
				<s:property value="resultClass.member_address1" /> 
				<s:property value="resultClass.member_address2" />
			</td>
		</tr>
		
		<tr>
			<td width="80" class="tdstyle1">가입날짜</td>
			<td width="500"><s:property value="resultClass.member_regdate" /></td>
		</tr>
		<tr>
			<td width="100" class="tdstyle1">예금주</td>
			<td width="500"><s:property value="resultClass.member_depositor" />
			</td>
		</tr>
		<tr>
			<td width="100" class="tdstyle1">계좌번호</td>
			<td width="500">( <s:property value="resultClass.member_bankname" />
				) <s:property value="resultClass.member_accountno" />
			</td>
		</tr>





		<tr>
			<td colspan="2" height="10"></td>
		</tr>

		<tr>
			<td colspan="2" align="right">

				<input name="delete_b" type="button" value="회원삭제" class="hreflink"
					onClick="javascript:location.href='adminmemberdelete.action?member_no=<s:property value="resultClass.member_no" />&currentPage=<s:property value="currentPage" />','delete'"/>
				
				<input name="list_b" type="button" value="목록" class="submit"
					onClick="javascript:location.href='adminmemberlist.action?currentPage=<s:property value="currentPage" />'">
			
				</form>
			</td>
		</tr>

	</table>
	
	
</body>
</html>