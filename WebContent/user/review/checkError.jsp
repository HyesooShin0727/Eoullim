<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>비밀번호 오류</title>
<link rel="stylesheet" href="/StrutsBoard/board/common/css/css.css"
	type="text/css">
<script type="text/javascript">
	function ErrorMessage() {
		alert("비밀번호가 틀립니다.");
		history.back(-1);
	}
</script>
</head>
<body>
	<script>
		ErrorMessage()
	</script>
</body>
</html>