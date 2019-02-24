<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>댓글비밀번호 확인</title>
<link rel="stylesheet" href="/Eoullim/review/common/css/css.css"
	type="text/css">
</head>
<body>
	<h2>비밀번호 확인</h2>
	<form action="reviewcommentcheckAction.action" method="post">
		<s:hidden name="rcomment_no" value="%{rcomment_no}" />
		<s:hidden name="rcomment_orgno" value="%{rcomment_orgno}" />
		<s:hidden name="currentPage" value="%{currentPage}" />
		<s:hidden name= "rboard_no" value = "%{rboard_no}"/>

		<table width="300" border="0" cellspacing="0" cellpadding="0">
			<tr bgcolor="#777777">
				<td height="1" colspan="2"></td>
			</tr>
			<tr>
				<td width="200" bgcolor="#F4F4F4">비밀번호</td>
				<td width="350" bgcolor="#FFFFFF">&nbsp;&nbsp; <s:textfield
						name="rcomment_passwd" theme="simple" cssStyle="width:100px"
						maxlength="20" /> &nbsp;&nbsp; 
						<input name="submit" type="submit"
					value="확인" class="hreflink">
				</td>
			<tr>
			<tr bgcolor="#777777">
				<td height="1" colspan="2"></td>
			</tr>

		</table>
	</form>

</body>
</html>