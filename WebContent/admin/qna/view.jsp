<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
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
<meta charset="utf-8">
	<title>FAQ 상세보기</title> <!-- <link rel="stylesheet" href="?.css" type="text/css"></link> CSS설정-->
	<script type="text/javascript">
		function open_win_noresizable(url, name) {
			var oWin = window.open(url, name, "scrollbars=no,status=no,resizable=no,width=300,height=150");
		}
	</script>
</head>

<body>
<center>
	<table width="600" border="0" cellspacing="0" cellpadding="2">
		<tr>
			<td align="center"><h2>QnA 상세보기</h2></td>
		</tr>
		<tr>
			<td height="20"></td>
		</tr>
	</table>

	<table width="600" border="0" cellspacing="0" cellpadding="0">

		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td bgcolor="#F4F4F4">번호</td>
			<td bgcolor="#FFFFFF">&nbsp;&nbsp;<s:property
					value="resultClass.qna_no" />
			</td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td width="100" bgcolor="#F4F4F4">제목</td>
			<td width="500" bgcolor="#FFFFFF">&nbsp;&nbsp;<s:property
					value="resultClass.qna_sub" />
			</td>
		</tr>

		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td bgcolor="#F4F4F4">내용</td>
			<td bgcolor="#FFFFFF">&nbsp;&nbsp;<img src="/Eoullim/upload/<s:property value="resultClass.img_file"/>"></img><br><br><s:property
					value="resultClass.qna_content" />
			</td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td height="10" colspan="2"></td>
		</tr>


		<tr>
			<td align="right" colspan="2">
			<s:url id="modifyURL" action="modifyForm">
					<s:param name="qna_no">
						<s:property value="qna_no" />
					</s:param>
			</s:url>
			<s:url id="deleteURL" action="deleteAction">
					<s:param name="no">
						<s:property value="no" />
					</s:param>
			</s:url> 
			<s:if test = "%{member_id == resultClass.qna_name}">
			<input name="list" type="button" value="삭제" class = "hreflink"
				onClick="javascript:location.href='adminqnadelete.action?qna_no=<s:property value="qna_no"/>&currentPage=<s:property value="currentPage" />'" />
			</s:if>
			<s:else>
			<input name="list" type="button" value="답글달기" class="hreflink"
				onClick="javascript:location.href='adminqnareply.action?qna_no=<s:property value="qna_no"/>&currentPage=<s:property value="currentPage" />'" />
			</s:else>
			<input name="list" type="button" value="목록" class="hreflink"
				onClick="javascript:location.href='adminqnalist.action?currentPage=<s:property value="currentPage" />'"></td>
		</tr>

	</table>
</center>
</body>
</html>
<!--  -->