<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<?xml version="1.0" encoding="utf-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
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
<head>
</head>

<script type="text/javascript">
</script>

<body>
	<s:if test="resultClass.member_id != null">
	<div id="contents">
			<h2 class="title_style">아이디 찾기 결과</h2>
			<div class="member_wrap">
				<h3 class="login_txt">
				<s:property value="resultClass.member_name" /></b> 님의 아이디는  <b>
					<s:property value="resultClass.member_id" /></b> 입니다 <br>&nbsp;
					<input type="button" value="로그인 화면으로" onclick="location.href='loginform.action'"/>
			</h3>
		</div>
	</div>
	</s:if>				
	
	<s:else>
	<div id="contents">
			<h2 class="title_style">아이디 찾기 결과</h2>
			<div class="member_wrap">
				<h3 class="login_txt">
				입력하신 정보에 해당하는 아이디가 없습니다 <br><br>
				
				이름과 주민등록번호를 다시 입력하시기 바랍니다
				<br><br>
				<input type="button" value="로그인 화면으로" onclick="location.href='loginform.action'"/>
			</h3>
		</div>
	</div>
	</s:else>
</body>
</html>		
		