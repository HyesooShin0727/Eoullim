<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title> 회원 관리 리스트 </title>
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
					<h2>회원 관리</h2><br><br>
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
									<th width = "10%"><strong>회원 번호</strong></th>
									<th width = "20%"><strong>회원 이름</strong></th>
									<th width = "20%"><strong>회원 아이디</strong></th>
									<th width = "20%"><strong>회원 전화번호</strong></th>
									<th width = "20%"><strong>회원 가입날짜</strong></th>
									<th width = "10%"><strong>회원삭제</strong></th>
								</tr>
							</thead>
							<tbody>
							<s:iterator value="list" status="stat">
								<s:url id="viewURL" action="adminmemberview">
									<s:param name="member_no">
										<s:property value="member_no" />
									</s:param>
									<s:param name="member_id">
										<s:property value="member_id" />
									</s:param>
									<s:param name="currentPage">
										<s:property value="currentPage" />
									</s:param>
								</s:url>
								<tr>
									<td><s:property value="member_no" /></td>
									<td><s:a href="%{viewURL}"><s:property value="member_name" /></s:a></td> 		
									<td><s:a href="%{viewURL}"><s:property value="member_id" /></s:a></td>
									<td><s:property value="member_phone" /></td>
									<td><s:property value="member_regdate" /></td>
									<td><input name="delete" type="button" value="회원삭제" class="hreflink" onClick="javascript:location.href='adminmemberdelete.action?member_no=<s:property value="member_no" />&currentPage=<s:property value="currentPage" />','delete'"/> </td>
								</tr>
							</s:iterator>
							<s:if test="list.size() <= 0">
								<tr>
									<td colspan="5" align="center">등록된 회원이 없습니다</td>
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
								<select name="searchNum" style="width: 100px; height: 30px;">
									<option value="0">이름</option>
									<option value="1">ID</option>
								</select>
								<s:textfield name="searchKeyword" theme="simple" value="" cssStyle="width:200px; height:30px;" maxlength="20" />
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