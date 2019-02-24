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

	<script src="Resource/js/common/default.js?"></script>
	<script src="Resource/js/common/cookie.js"></script>

	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
	<link rel="stylesheet" href="Resource/css/pages/member.css">
	<script src="Resource/js/pages/login.js"></script>
	<script src="Resource/js/pages/member.js"></script>
	<link rel="stylesheet" href="Resource/css/pages/table.css">

<style type="text/css">
#form td.tdstyle2 {background-color :#000000; border:#ccc 1px solid; width:400px; padding:20px; font-size:14px; font-weight:bold; color:#000;}

</style>
<script language="javascript">
	function check() {
		
		var f = document.Reg_form;
		
		if(f.member_id.value == ""){
			alert("아이디를 입력해주십시오");
			f.member_id.focus();
			return false;
		}
		
		/* if(f.confirm_id.value == ""){
			alert("아이디 중복체크를 해주세요");
			f.member_id.focus();
			return false;
		} */
		
		if(f.member_passwd1.value=""){
			alert("비밀번호를 입력해주십시오");
			f.member_passwd1.focus();
			return false;
		}
		
		if(f.member_passwd1.value != f.member_passwd2.value){
			alert("비밀번호를 다르게 입력했습니다");
			f.member_passwd2.select();
			return false;
		}
		
		if(f.member_name.value == ""){
			alert("이름을 입력해주십시오");
			f.member.focus();
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
		
		if(f.member_zipcode.value == ""){
			alert("우편번호를 검색하여 입력해주십시오");
			f.member_zipcode.focus();
			return false;
		}
		
		if(f.member_address1.value == ""){
			alert("기본주소를 입력해주십시오 ")
			f.member_address1.focus();
			return false;
		}
		
		if(f.member_address2.value == ""){
			alert("상세주소를 입력해주십시오")
			f.member_address2.focus();
			return false;
		}
		
		if(f.member_phone.value == ""){
			alert("전화번호를 입력해주십시오");
			f.phone.focus
			return false;
		}
		
		if(f.member_email1.value == ""){
			alert("이메일을 입력해주십시오");
			f.member_email1();
			return false;
		}
		
		if(f.member_email2.value == ""){
			alert("이메일을 입력해주십시오");
			f.member_email2();
			return false;
		}
	}
	
	function openConfirmId(){
		var url="CheckIdAction.action?member_id="+ document.Reg_form.member_id.value;
		var chk=document.Reg_form;
		if(chk.member_id.value==""){
			alert("ID를 입력하세요");
			chk.member_id.focus();
			return false;
		}
		if (chk.member_id.value.length < 2) {
			alert("최소 2자리 이상 입력해주세요!");
			chk.member_id.focus();
			return false;
		}
		open(url, "confirm", "toolbar=no,location=no,status=no,menubar=no,"+
		 "scrollbars=no,resizable=no,width=420,height=200");
	}

</script>

<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>

<script language="Javascript">
	function checkemailaddy() {
		if(Reg_form.email3.value == '1'){
			Reg_form.member_email2.readonly = false;
			Reg_form.member_email2.value = '';
			Reg_form.member_email2.focus();
		}else{
			Reg_form.member_email2.readonly = true;
			Reg_form.member_email2.value = Reg_form.email3.value;
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

<meta http-equiv="Content-Type" content="text/html; charset="utf-8">
<title> 회원가입 </title>
<link href="/Eoullim/user/member/style.css?ver=1" rel="stylesheet" type="text/css">
</head>
<body>
<% request.setCharacterEncoding("utf-8"); %>
<div id="contents">
			<h2 class="title_style">회원 가입하기</h2>		
			<div class="member_wrap">		
				<ul class="step_style">
					<li>
						<img src="Resource/images/sub/join_step01.jpg" alt="회원약관 동의" class="tm_hidden"/>
						<p>회원약관 동의</p>
					</li>
					<li>
						<img src="Resource/images/sub//join_step02_on.jpg" alt="회원정보입력" class="tm_hidden"/>
						<p>회원정보입력</p>
					</li>
					<li>
						<img src="Resource/images/sub//join_step03.jpg" alt="가입완료" class="tm_hidden"/>
						<p>가입완료</p>
					</li>
				</ul>	

<center>
	<form name="Reg_form" action="joinAction.action" method="post" onsubmit=return check()">
	<legend class="hidden">회원가입 정보 입력 폼</legend>
		<div class="join_table">
			<p class="join_table_txt1"></p>
	
		<table align = "center" width="800" border="0" cellspacing="0" cellpadding="0" id="form">
			<tr>
				<td align="left" class="tdstyle2" colspan="2">기본정보</td>
			</tr>
			
			<tr> 
				<td class="tdstyle1">아이디<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle"><input type="text" name="member_id" maxlength="20" size="28">
				<input type="button" name="confirm_id" value="중복확인" onclick="openConfirmId()">
				<input type="hidden" name="confirm_id" value="">영문/숫자를 이용하여 4~12자로 입력하세요</td>
			</tr>
			
			<tr>
				<td class="tdstyle1">비밀번호<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle"><input type="password" maxlength="14" name="member_passwd1" size="30"> 영문/숫자를 이용하여 4~12자로 입력하세요</td>
			</tr>
			
			<tr>
				<td class="tdstyle1">비밀번호확인<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td	valign="middle"><input type="password" maxlength="14" name="member_passwd2" size="30"> 비밀번호를 재입력해주세요</td>
			</tr>
			
			<tr>
				<td class="tdstyle1">이름<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>		
				<td valign="middle"><input type="text" name="member_name" size="28"> 회원가입후 수정이 불가능합니다 </td>
			</tr>
			
			<tr>
				<td class="tdstyle1">성별<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle">
					<input type="radio" name="member_sex" value="남자">남자
				    <input type="radio" name="member_sex" value="여자">여자</td>
		    </tr>
		    
			<tr>	
				<td class="tdstyle1">주민등록번호<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle">
					<input type="text" name="member_jumin1" size="6" maxlength="6"> -
					<input type="password" name="member_jumin2" size=7" maxlength="7"></td>
			</tr>
			
			<tr>
				<td class="tdstyle1">우편번호<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle">	
					<input type="text" id="member_zipcode" name="member_zipcode" size="28" placeholder="검색버튼을 이용해주세요">
					<input type="button" value="검색" onclick="DaumPostcode()" class="hreflink2"><br></td>
			</tr>
			
			<tr>
				<td class="tdstyle1">주소<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle">
					<input type="text" id="member_address1" name="member_address1" placeholder="자동기입" size="60"><br>
					<input type="text" id="member_address2" name="member_address2" placeholder="상세주소를 입력해주세요" size="60"></td>
			</tr>
				<td class="tdstyle1">휴대폰번호<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle"><input type="text" name="member_phone" maxlength="11" size=28" placeholder="ex)01012345678"> "-" 없이 숫자만 입력하세요</td>
			
			<tr>
				<td class="tdstyle1">이메일<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
				<td valign="middle">
					<input name="member_email1" type="text" class="box" id="member_email1" size="15"> @
					<input name="member_email2" type="text" class="box" id="member_email2" size="20">
					<select name="email3" id="email.select" onChange="checkemailaddy();">
						<option value="" selected> 선택하세요</option>
						<option value="naver.com">naver.com</option>
						<option value="gmail.com">gmail.com</optuon>
						<option value="hanmail.com">hanmail.com</option>
						<option value="yahoo.co.kr">yahoo.co.kr</option>
						<option value="1">직접입력</option>
					</select>
			</tr>		
			<tr>
				<td class="tdstyle1">환불계좌정보<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td> 
				<td valign="middle">예금주<input type="text" name="member_depositor" size="28"><br><br>
									은행명<input type="text" name="member_bankname" size="28"><br><br>
									계좌번호<input type="text" name="member_accountno" size="28" placeholder="ex)0524603123303"> "-" 없이 숫자만 입력하세요 <br>
				</td>
			</tr>
			<tr>
				<td class="tdstyle1">카카오톡아이디</td>
				<td valign="middle"><input type="text" name="member_kakaoid" maxlength="20" size="28"> 
			</tr>
			<tr>
				<td colspan="2" align="center" style="border: 0px;">
				<input type="submit" value="회원가입" class="submit">
				<input type="button" value="취 소" onClick="location.href='main.action'" class="hreflink"></td>
				
			</tr>
		</table>
		</div>
	</legend>
	</form>	
	</center>
</body>
</html>