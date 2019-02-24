<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>비밀번호 확인</title>

<link href="/Eoullim/user/member/style.css" rel="stylesheet" type="text/css">

<script type="text/javascript">
	function locationURL()
	{
			alert('전송 되었습니다.');
			window.location.href="msgbox.action?msgboxtype=<s:property value = "msgboxtype"/>&currentPage=1";
		
		window.close();	
	}
</script>
</head>
<body>
<script>locationURL()</script>
</body>
</html>