<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>로그인</title>
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

</head>
<body>

	<form method="post" action="loginAction.action">
		<div id="contents">
			<h2 class="title_style">회원 로그인</h2>
			<div class="member_wrap">
				<h3 class="login_txt">
					어울림을 방문해주셔서 감사합니다.<br/>
					로그인하시면 어울림의 <br class="d_hidden t_hidden"/><span>다양한 서비스</span>와 <span>혜택</span>을 누리실 수 있습니다.♥
					
				</h3>
				<div class="login_box">
					<!-- login_form -->
					<!-- <form id="loginForm" name="loginForm" action="verify_result.asp" method="post" target="dataFrame"> -->
						<fieldset>
							<legend class="hidden">로그인 폼</legend>
							<div class="member_login">
								<h4 class="member on"><a href="#">회원로그인</a></h4>
								<div class="cont">
									<div>
										<div class="input_area">
											<p>
												<label for="" >아이디</label>
												<input type="text" class="member_input" name="member_id" placeholder="아이디"/>
											</p>
											<p>
												<label for="" >비밀번호</label>
												<input type="password" class="member_input" name="member_passwd1" value="" placeholder="비밀번호" onkeydown="if (event.keyCode==13) loginCheck();void(0);"/>
											</p>
										</div>
										<input type ="submit" class="btn_style8 btn" value = "로그인" onclick="document.location.href='loginAction.action"/>
									</div>
								<!-- 	<input type="checkbox" class="member_check" name="idsave" id="idsave" value="1" />
									<label for="idsave" class="check_label">아이디 저장</label>
									<div class="login_sns">
									</div> -->
								</div>
								<h4 class="no_member"><a href="#">관리자 로그인</a></h4>
								<div class="cont">
									<input type="hidden" name="mode" value="NonMember" />
									<div>
										<div>
										<div class="input_area">
											<p>
												<label for="" >아이디</label>
												<input type="text" class="member_input" name="admin_id" placeholder="아이디" />
											</p>
											<p>
												<label for="" >비밀번호</label>
												<input type="password" class="member_input" name="admin_passwd1" value="" placeholder="비밀번호" onkeydown="if (event.keyCode==13) loginCheck();void(0);"/>
											</p>
										</div>
										<input type ="submit" class="btn_style8 btn" value = "로그인" onclick="document.location.href='loginAction.action'"/>
									</div>
							</div>
						</fieldset>
					</form>

					<!-- //login_form -->
				</div>
				<div class="login_etc_box">
					<dl>
						<dt class="bg1"></dt>
						<dd>
							<span>아직 어울림의<br class="d_hidden"/> 회원이 아니신가요?</span>
							<span class="txt m_hidden t_hidden">어울림 회원만의 특별한 혜택을 누릴 수 있습니다.</span>
							<div class="login_etc_btn">
								<a href="joinform1.action" class="btn_style11">회원가입하기</a>
							</div>
						</dd>
					</dl>
					<dl>
						<dt class="bg2"></dt>
						<dd>
							<span>아이디/비밀번호를<br class="d_hidden"/> 잊으셨나요?</span>
							<span class="txt m_hidden t_hidden">고객님의 본인 정보 인증으로 찾을 수 있습니다.</span>
							<div class="login_etc_btn">
								<a href="findform.action" class="btn_style11">아이디/비밀번호 찾기</a>
							</div>
						</dd>
					</dl>
				</div>
			</div>
			<!-- end of :: member_wrap -->
		</div>
		<!-- end of :: contents -->
		</form>

	</body>

</html>