<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호 확인</title>
<link rel="stylesheet" href="/Eoullim/review/common/css/css.css"
	type="text/css">
	<%@ taglib prefix="s" uri="/struts-tags"%>
<script type="text/javascript">
	function locationURL() {
		if (window.name == 'modify')
			window.opener.parent.location.href = "reviewmodifyform.action?rboard_no=<s:property value="rboard_no" />&currentPage=<s:property value="currentPage" />";
		else if (window.name == 'delete') {
			alert('삭제되었습니다.');
			window.opener.parent.location.href = "reviewdeleteAction.action?rboard_no=<s:property value="rboard_no" />&currentPage=<s:property value="currentPage" />";
		} else if (window.name == 'cdelete') {
			alert('코멘트가 삭제 되었습니다.');
			window.opener.parent.location.href = "reviewcommentdeleteAction.action?rcomment_no=<s:property value="rcomment_no" />&rboard_no=<s:property value = "rboard_no"/>&rcomment_orgno=<s:property value="rcomment_orgno" />&currentPage=<s:property value="currentPage" />";
		}

		window.close();
	}
</script>
</head>
<body>
	<script>
		locationURL()
	</script>
</body>
</html>