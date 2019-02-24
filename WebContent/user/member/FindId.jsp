<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.HashMap"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
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

	<script src="Resource/js/common/default.js?"></script>
	<script src="Resource/js/common/cookie.js"></script>

	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
	<link rel="stylesheet" href="Resource/css/pages/member.css">
	<script src="Resource/js/pages/login.js"></script>
	<script src="Resource/js/pages/member.js"></script>
	<link rel="stylesheet" href="Resource/css/pages/table.css">

<script language="javascript">
	function check() {
		
		var f = document.Reg_form;
		
		if(f.member_id.value == ""){
			alert("아이디를 입력해주십시오");
			f.member_id.focus();
			return false;
		}
			
		if(f.member_jumin1.value ==""){
			alert("주민등록번호를 입력해주십시오");
			f.member_jumin1.focus();
			return false;
		}
			
		if(f.member_jumin2.value ==""){
			alert("주민등록번호를 입력해주십시오");
			f.member_jumin2.focus();
			return false;
		}	
	}
</script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
	<form name="hi" action="findIdAction.action">

		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" style="padding-top: 50px; padding-bottom: 50px;">

					<table width="600" height="250" border="0" class="findform">
						<tr>
							<td align="center" class="text01"><h2>아이디 찾기</h2></td>
						</tr>
						<tr>
							<div class="input_area">
							<td align="center" style="padding-bottom: 20px;">
								<table border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td class="text01" style="padding-right: 15px;">이름</td>
										<td height="35">
										<input type="text" name="member_name" size="17" style="width: 230px; height: 26px; border: 1px solid rgb(204,204,204);"></td>
									</tr>
									
									<tr> 
										<td class="text01" style="padding-right: 15px;">주민등록번호</td>
										<td height="35">
										<input type="password" name="member_jumin1" size="17" style="width: 230px; height: 26px; border: 1px solid rgb(204,204,204);">&nbsp;-&nbsp;
										<input type="password" name="member_jumin2" size="17" style="width: 230px; height: 26px; border: 1px solid rgb(204,204,204);">
										</td>
									</tr>
								</table>
							</td>
							</div>
						</tr>
						<tr>
							<td align="center" style="padding-bottom: 30px;">
							<input type="submit" value="아이디찾기" class="submit"></td>
						</tr>


					</table> 
					</form>
				</td>
			</tr>
		</table>
</body>
</html>
