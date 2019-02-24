<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>비밀번호 확인</title>

<link rel="stylesheet" href="/Eoullim/review/common/css/css.css"
	type="text/css">

</head>
<body>
<h2>비밀번호 확인</h2>
	<form action="usedcheckAction.action" method="post">
		<s:hidden name="Uboard_no" value="%{Uboard_no}" />
		<s:hidden name="currentPage" value="%{currentPage}" />
		
		<table width="250" border="0" cellspacing="0" cellpadding="0">
			
			<tr bgcolor="#777777">
				<td height="1" colspan="2"></td>
			</tr>
			<tr>
				<td width="200" bgcolor="#F4F4F4"> 비밀번호</td>
				<td width="350" bgcolor="#FFFFFF">
					&nbsp;&nbsp; <s:textfield name="Uboard_passwd" theme="simple" cssStyle="width:100px" maxlength="20" />
					&nbsp;&nbsp; <input name="submit" type="submit" value="확인" class="hreflink">
				</td>
			</tr>
			<tr bgcolor="#777777">
				<td height="1" colspan="2"></td>
			</tr>
		</table>
	</form>
</body>
</html>