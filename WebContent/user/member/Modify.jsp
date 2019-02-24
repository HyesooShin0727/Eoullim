<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
<script language="javascript">
	function check() {

		var f = document.mypageUpdate;

		if (f.M_PASSWD.value == "") {
			alert("비밀번호를 입력해주십시오");
			f.M_PASSWD.focus();
			return false;
		}

		if (f.M_PASSWD.value != f.M_PASSWD2.value) {
			alert("비빌번호를 다르게 입력했습니다.");
			f.M_PASSWD2.select();
			return false; 
		}

		if (f.M_ZIPCODE.value == "") {
			alert("우편번호를 검색하여 입력해주십시오");
			f.M_ZIPCODE.focus();
			return false;
		}

		if (f.M_ADDR1.value == "") {
			alert("기본주소를 입력해주십시오");
			f.M_ADDR1.focus();
			return false;
		}

		if (f.M_ADDR2.value == "") {
			alert("상세주소를 입력해주십시오");
			f.M_ADDR2.focus();
			return false;
		}

		if (f.M_PHONE.value == "") {
			alert("전화번호를 입력해주십시오");
			f.phone.focus();
			return false;
		}

		if (f.M_EMAIL.value == "") {
			alert("이메일을 입력해주십시오");
			f.M_EMAIL.focus();
			return false;
		}
	}

	function openConfirmId() {
		var url = "memberIdCheck.action?id=" + document.Reg_form.id.value;
		var f = document.Reg_form; //문서.Form name="";
		var idPs = /^[0-9a-zA-Z]{4,12}$/; //아이디 비밀번호 체크표현식
		if (f.id.value == "") {
			alert("아이디를 입력해주세요.");
			f.id.focus();
			return false;
		}

		open(url,"confirm",
				 "toolbar=no, location=no, status=co, menubar=no, scrollbars=no, resizable=no, width=400, height=200");
	}
</script>

<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script language="Javascript">
	function checkemailaddy() {
		if (myform.email3.value == '1') {
			myform.member_email2.readonly = false;
			myform.member_email2.value = '';
			myform.member_email2.focus();
		} else {
			myform.member_email2.readonly = true;
			myform.member_email2.value = myform.email3.value;
		}
	}
</script>

<script>
	function DaumPostcode() {

		new daum.Postcode(
				{

					oncomplete : function(data) {

						// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

						// 각 주소의 노출 규칙에 따라 주소를 조합한다.

						// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.

						var fullAddr = ''; // 최종 주소 변수

						var extraAddr = ''; // 조합형 주소 변수

						// 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.

						if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우

							fullAddr = data.roadAddress;

						} else { // 사용자가 지번 주소를 선택했을 경우(J)

							fullAddr = data.jibunAddress;

						}

						// 사용자가 선택한 주소가 도로명 타입일때 조합한다.

						if (data.userSelectedType === 'R') {

							//법정동명이 있을 경우 추가한다.

							if (data.bname !== '') {

								extraAddr += data.bname;

							}

							// 건물명이 있을 경우 추가한다.

							if (data.buildingName !== '') {

								extraAddr += (extraAddr !== '' ? ', '
										+ data.buildingName : data.buildingName);

							}

							// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.

							fullAddr += (extraAddr !== '' ? ' (' + extraAddr
									+ ')' : '');

						}

						// 우편번호와 주소 정보를 해당 필드에 넣는다.
						
						document.getElementById('member_zipcode').value = data.zonecode; //5자리 새우편번호 사용

						document.getElementById('member_address1').value = fullAddr;

						// 커서를 상세주소 필드로 이동한다.

						document.getElementById('member_address2').focus();
					}
				}).open();
	}
</script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>회원정보수정</title>
</head>
<body>
<!-- start of :: contents -->
		<div id="contents">
			<div class="mypage_wrap">
				<!-- lnb_wrap -->
				<div class="lnb_wrap">
					
					<h2 class="title_style"><a href="mypagemain.action">마이페이지</a></h2>
					<ul>
						<li><a href="/mypage/myOrder.asp">주문/배송</a></li><!-- 현재 페이지에서 클래스 on -->
						<li><a href="/mypage/cancel.asp">취소/반품</a></li>
						<li><a href="mycoupon.action">쿠폰</a></li>
                        <li><a href="/mypage/wishlist.asp">찜목록</a></li>
						<li><a href="/mypage/qna.asp">1:1문의</a></li>
						<li><a href="modifyform.action">회원정보 수정</a></li>
					</ul>
					
				</div>
				<!-- //lnb_wrap -->
				<!-- con_wrap -->
				<div class="con_wrap">
					<h2 class="title_style2">회원정보 수정하기</h2>

					

					<form  name="passForm" method="post" action="PassUpdateAction.action">
						<fieldset>
							<legend class="hidden">비밀번호 변경하기 폼</legend>
							<table class="basic_table password_table">
								<caption class="hidden">기존 비밀번호, 새로운 비밀번호 입력 테이블</caption>
								<tbody>
									<tr class="first">
										<th>아이디</th>
										<td>
											${resultClass.member_id}
											<a href="byeAction.action" class="btn_style2">회원 탈퇴하기</a>
										</td>
									</tr>
									<tr>
										<th><label for="">기존 비밀번호</label></th>
										<td>
											<input type="password" name="chk_passwd" id="chk_passwd"  maxlength="16" class="input_size2 mr"/>
											<span class="txt">현재 사용중인 비밀번호를 입력해주세요.</span>
										</td>
									</tr>
									<tr>
										<th>
											<label for="">새 비밀번호</label>
										</th>
										<td>
											<input type="password" name="member_passwd1" id="member_passwd1"  maxlength="16"><em id="pwResult" style="color:#cc3333; font-style:normal; font-family:dotum; font-size:12px;"></em>
											<span class="m_hidden">숫자,영소문자,특수문자 3가지를 선택하여 8자 이상 20자 이하</span>
                                            <span class="m_hidden" style="margin-left:48%;">또는 2가지를 선택하여 10자 이상 20자 이하로 설정.</span>
                                            <span  class="d_hidden t_hidden" >숫자,영소문자,특수문자 3가지를 선택하여 8자 이상 20자 이하 <br /> 또는 2가지를 선택하여 10자 이상 20자 이하로 설정.</span>
										</td>
									</tr>
									<tr>
										<th>
											<label for="">비밀번호 <br class="d_hidden t_hidden"/>확인</label>
										</th>
										<td>
											<input type="password" name="member_passwd2" id="member_passwd2">
											<span>비밀번호를 한번 더 입력해주세요.	</span>
										</td>
									</tr>
								</tbody>
							</table>
							<div class="btn_box1">
								<input type = "submit" value ="변경하기">
							</div>
						</fieldset>
					</form>
					<form name="myform" method="post" action="InfomUpdateAction.action">
						<fieldset>
							<legend class="hidden">회원정보 수정 폼</legend>
							<table class="join_table modify_table">
								<caption class="hidden">생년월일, 배송주소, 이메일주소, 이메일 수신여부, 휴대폰, SMS 수선여부, 전화번호 입력 테이블</caption>
								<tbody>
									<tr class="first">
										<th>이름</th>
										<td class="name">${resultClass.member_name}</td>
									</tr>
									<tr>
										<th>생년월일</th>
										<td>${resultClass.member_jumin1}</td>	
									</tr>
									<tr>
										<th>배송 주소</th>
										<td>
											<div class="addr1">
												<input class="input_size5 mr" type="text" name="member_zipcode" id = "member_zipcode" value="${resultClass.member_zipcode}" readonly>
												<a class="btn_style2" href="javascript:DaumPostcode()">우편번호 검색</a>
												<div class="addr">
													<label for="address3" class="addr_label">도 로 명</label><input type="text" name="member_address1" id="member_address1" class="input_size14 " value="${resultClass.member_address1}" readonly ><br />
													<label for="address2" class="addr_label">상세주소</label><input	type="text" name="member_address2" id="member_address2" class="input_size14" value="${resultClass.member_address2}" onblur="getXY();"/>
													<input type="hidden" name="MemberLocationX" id="MemberLocationX" class="input_size14 " value="" readonly >
													<input type="hidden" name="MemberLocationY" id="MemberLocationY" class="input_size14 " value="" readonly >
												</div>
											</div>
										</td>
									</tr>

									<tr>
										<th><label for="">이메일</label></th>
										<td class="emali">
											<input class="input_size5 mr" type="text" value="${resultClass.member_email1}" name="member_email1" id = "member_email1">@
											<input class="input_size7" type="text" value="${resultClass.member_email2}" name="member_email2" id = "member_email2">
											<select class="select_size3" name="email3"  id="email3" onChange="checkemailaddy();">
												<option value="" selected>선택하세요</option>
												<option value="naver.com">naver.com</option>
												<option value="gmail.com">gmail.com</option>
												<option value="hanmail.com">hanmail.com</option>
												<option value="yahoo.co.kr">yahoo.co.kr</option>
												<option value="1">직접입력</option>
											</select>
										</td>
									</tr>
									<tr class="cellphone_modify">
										<th>
											<label for="">휴대폰</label>
										</th>
										<td>
											<input class="input_size5 mr" type="text" name="member_phone" maxlength="11" size=28" value="${resultClass.member_phone}"> <span class="txt">"-" 없이 숫자만 입력하세요</span>
										</td>
									</tr>

								</tbody>
							</table>
							<!-- //order_table -->
							<div class="btn_box1">
								<input type = "submit" value = "확인">
							</div>
						</fieldset>
					</form>

				</div>
				<!-- //con_wrap -->
			</div>
		</div>
		<!-- end of :: contents -->

</body>
</html>