<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
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

	<script src="Resource/js/common/default.js?"></script>
	<script src="Resource/js/common/cookie.js"></script>

	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
	<link rel="stylesheet" href="Resource/css/pages/member.css">
	<script src="Resource/js/pages/login.js"></script>
	<script src="Resource/js/pages/member.js"></script>
	<link rel="stylesheet" href="Resource/css/pages/table.css">


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ID/PW 찾기 </title>
</head>
<body>
<div id="contents">
			<h2 class="title_style">아이디 / 비밀번호 찾기</h2>
				<div class="member_wrap">		
				<div class="idpw_search">
					<h3>
						아이디, 비밀번호가 생각나지 않으세요?<br/>
						<span>본인 정보 인증을 통해 어울림 회원 아이디,<br class="d_hidden"/> 비밀번호를 찾으실 수 있습니다.</span>
					</h3>
					<!-- 아이디 찾기 -->
					<div class="id_search">
						<h4>아이디 찾기</h4>
						<p>아래 인증방법을 선택하시면, 본인 정보 인증을 통해  <br class="d_hidden"/>고객님의 아이디를 찾아드립니다.</p>
						<div class="btn_box1">
							<a class="btn_phone" href="findidform.action">아이디 찾기</a>
						</div>				
					</div>
					<!-- //아이디 찾기 -->
					<!-- 비밀번호 찾기 -->
					<div class="pw_search">
						<h4>비밀번호 찾기</h4>
						<p>아래 인증방법을 선택하시면, 본인 정보 인증을 통해<br class="d_hidden"/> 고객님의 비밀번호를 찾아드립니다.</p>
						<form>
							<fieldset>
							<legend class="hidden">비밀번호 찾기 아이디 입력 폼</legend>
								<div class="btn_box1">
									<a class="btn_phone" href="findpwform.action">비밀번호 찾기</a>
								</div>
							</fieldset>
						</form>
					</div>
					<!-- /비밀번호 찾기 -->
				</div>
			</div>
			<!-- end of :: member_warp -->
		</div>
		<!-- end of :: contents -->
</body>
</html>