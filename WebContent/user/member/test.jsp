<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>회원정보 수정 성공</title>
</head>
<body>
<form name="mypageUpdate" action="modifyAction.action" method="post" onsubmit="return check()">

		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr>
				<td align="center" style="padding: 50px;">
					<table width="700" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td height="40" align="center" class="text01 formbar" colspan="2">회원정보수정</td>
						</tr>
						<tr>
							<td height="60"></td>
						</tr>
					</table>
					<table width="700" border="0" cellspacing="0" cellpadding="0"
						id="form">
						<tr>
							<td align="left" class="tdstyle2" colspan="2">기본정보</td>
						</tr>
						<tr>
							<td class="tdstyle1">아이디
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle">
							<s:property value="%{resultClass.member_id}" />
						</tr>
						
						<tr>
							<td class="tdstyle1">비밀번호
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td><input type="password" name="member_passwd1" size="30"	onfocus="on(this)" onblur="off(this)">
						    <font class="BFONT">영문/숫자를 이용하여 4~12자로 입력하세요</font></td>
						</tr>
						
						<tr>
							<td class="tdstyle1">비밀번호확인
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle">
							<input type="password" name="member_passwd2 size="30" onfocus="on(this)" onblur="off(this)">
						    <font class="BFONT">비밀번호를 재입력 해주세요</font></td>
						</tr>
						
						<tr>
							<td class="tdstyle1">이 름
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle">
							<s:property value="%{resultClass.member_name}" />
							</td>
						</tr>
						
						<tr>
							<td class="tdstyle1"><img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle">
							<s:property value="%{resultClass.member_jumin1}" /> - 
							<s:property value="%{resultClass.member_jumin2}" /></td>
						</tr>
						
						<tr>
							<td class="tdstyle1">
							우편번호<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle">
							<s:textfield name="member_zipcode" id="member_zipcode" theme="simple" value="%{resultClass.member_zipcode}" />
								<input type="button" value="검색" onclick="DaumPostcode()">
								검색 버튼을 눌러 주소를 입력해 주세요</td>
						</tr>
						
						<tr>
							<td class="tdstyle1">주 소
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>

							<td valign="middle">
							<s:textfield name="member_address1" id="member_address1" theme="simple" value="%{resultClass.member_address1}" /><br>
							<s:textfield name="member_address2" id="member_address2" theme="simple" value="%{resultClass.member_address2}" /></td>
						</tr>

						<tr>
							<td class="tdstyle1">휴대폰번호
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle"><s:textfield name="member_phone" theme="simple" value="%{resultClass.member_phone}" /> 
								"-" 없이 숫자만 입력하세요</td>
						</tr>
						
						<tr>
							<td class="tdstyle1">이메일<img
								src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif">
								</td>
							<td valign="middle">
							<s:textfield name="member_email1" id="member_email1" theme="simple" value="%{resultClass.member_email1}" /> @ 
							<s:textfield name="member_email2" id="member_email2" theme="simple" value="%{resultClass.member_email2}" />
								<select name="email3"  id="email3" onChange="checkemailaddy();">
									<option value="" selected>선택하세요</option>
									<option value="naver.com">naver.com</option>
									<option value="gmail.com">gmail.com</option>
									<option value="hanmail.com">hanmail.com</option>
									<option value="yahoo.co.kr">yahoo.co.kr</option>
									<option value="1">직접입력</option>
									
							</select>
							</td>
						</tr>
					</table>
					
					<table width="700" border="0" cellspacing="0" cellpadding="0" id="form">

						<tr>
							<td align="left" class="tdstyle2" colspan="2">회원추가정보</td>
						</tr>
						
						<tr>
							<td class="tdstyle1">환불계좌 정보
							<img src="//img.echosting.cafe24.com/skin/base/common/ico_required.gif"></td>
							<td valign="middle">
							예금주 <s:textfield name="member_depositor" theme="simple" value="%{resultClass.member_depositor}" /><br> <br> 
							은행명<s:textfield name="member_bankname" theme="simple" value="%{resultClass.member_bankname}" /> <br><br> 
							계좌번호<s:textfield name="member_accountno" theme="simple" value="%{resultClass.member_accountno}" /><br>
							</td>
						</tr>

					</td>
				</tr>
				
				<tr>
					<td colspan="2" align="center" style="border: 0px;">
					<input type="submit" value="수정" class="submit">
					<input type="button" value="취 소" onclick="history.go(-1)" class="hreflink">
						&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
					<input type="button" value="회원탈퇴" onclick="document.location.href='deleteAction.action'" class="submit">
								</td>
								
				</tr>
			</table>
</form>
</body>
</html>