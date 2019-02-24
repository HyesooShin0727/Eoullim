<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" href="Resource/css/pages/import.css" />
<link href="/Eoullim/user/member/style.css" rel="stylesheet" type="text/css">

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
<script
	src="Resource/js/common/libs/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="Resource/js/common/styleship/matizResizeMap.1.0.0.min.js"></script>
<script src="Resource/js/pages/jquery.youtubebackground.js"></script>

<script src="Resource/js/common/default.js"></script>
<script src="Resource/js/common/cookie.js"></script>

<script type="text/javascript" src="//wcs.naver.net/wcslog.js">
	
</script>
<link rel="stylesheet" href="Resource/css/pages/member.css">
	<script src="Resource/js/pages/login.js"></script>
	<script src="Resource/js/pages/member.js"></script>
	<link rel="stylesheet" href="Resource/css/common/jquery-ui.css">
		<link rel="stylesheet" href="Resource/css/pages/table.css">
			<link rel="stylesheet" href="Resource/css/pages/mypage.css">
				<link rel="stylesheet" href="Resource/css/pages/customer.css">
					<script src="Resource/js/pages/mypage.js"></script>
					<link rel="stylesheet" href="Resource/css/pages/list.css">
						<script src="Resource/js/pages/list.js"></script>
						<script src="Resource/js/pages/faq.js"></script>
<script type="text/javascript">
	function open_win_noresizable(url, name) {
		var oWin = window
				.open(url, name,
						"scrollbars=no, status=no, resizable=no, width=600, height=500");

	}
</script>

<script>
	function validation() {

		var frm = document.forms[0];

		if (frm.uboard_sub.value == "") {
			alert("제목을 입력해주세요♥");
			return false;
		} else if (frm.uboard_member_name.value == "") {
			alert("이름을 입력해주세요♥");
			return false;
		} else if (frm.uboard_passwd.value == "") {
			alert("비밀번호를 입력해주세요♥");
			return false;
		} else if (frm.uboard_content.value == "") {
			alert("내용을 입력해주세요♥");
			return false;
		}
		return true;
	}
</script>

</head>
<body>

	<!-- start of :: contents -->

	<div id="contents">
		<div class="mypage_wrap">
			<div class="lnb_wrap">

				<h2 class="title_style">
					<a href="qnalistAction.action">QnA 게시판</a>
				</h2>
				<ul>
					<li><a href="qnalistAction.action">목록으로</a></li>
				</ul>

			</div>
			<!-- con_wrap -->
			<center>
				<div class="con_wrap">
					<h2 class="title_style2">Q&A 답변</h2>
	
					<s:if test="reply">
						<table width="600" border="0" cellspacing="0" cellpadding="2">
						</table>
						<form action="adminqnareplyaction.action" method="post" encType="multipart/form-data" onsubmit="return validation();">
							<s:hidden name="ref" value="%{resultClass.ref}" />
							<s:hidden name="re_level" value="%{resultClass.re_level}" />
							<s:hidden name="re_step" value="%{resultClass.re_step}" />
					</s:if>			
<fieldset>				
	<table class="basic_table qna_table">
	<tbody>
	
	<tr>
		<th><label for="">제목</label></th>
		<td><input type="text" class="input_size3" name="qna_sub" 
			value="<s:property value = "%{resultClass.qna_sub}"/>" maxlength="100" /></td>
	</tr>
	<tr>
		<th><label for="">내용</label></th>
		<td><textarea name="qna_content"
			value="<s:property value="%{resultClass.qna_content}"/>"></textarea></td>
	</tr>
	</tbody>
</table>


		<s:if test="resultClass == NULL">
			<div class="btn_box1" id="loading">
				<input type="submit" value="글쓰기" class="submit"/>
			</div>
			</s:if>
			<s:else>
			<div class="btn_box1" id="loading">
				<input type="submit" value="답변달기" class="hreflink"/>
			</div>
			</s:else>
</fieldset>

				</div>
				<!-- //con_wrap -->
			</center>
		</div>
	</div>
	<!-- end of :: contents -->
</body>
</html>