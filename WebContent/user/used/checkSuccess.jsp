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
		if(window.name == 'modify'){
			window.opener.parent.location.href="usedmodifyform.action?uboard_no=<s:property value="uboard_no" />&currentPage=<s:property value="currentPage" />";			
		}else if(window.name == 'delete'){
			alert('삭제 되었습니다.');
			window.opener.parent.location.href="useddeleteAction.action?uboard_no=<s:property value="uboard_no" />&currentPage=<s:property value="currentPage" />";
		}else if(window.name == 'cdelete'){
			alert('코멘트가 삭제 되었습니다.');
			window.opener.parent.location.href="useddeletecommentAction.action?currentPage=<s:property value="currentPage" />&ucomment_no=<s:property value="ucomment_no" />&ucomment_orgno=<s:property value="ucomment_orgno" />";
			/* window.opener.parent.location.href="Ucomment_deleteAction.action?ucomment_no=<s:property value="ucomment_no" />&ucomment_orgno=<s:property value="ucomment_orgno" />&currentPage=<s:property value="currentPage" />"; */ 
		}
		window.close();	
	}
</script>
</head>
<body>
<script>locationURL()</script>
</body>
</html>