<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<?xml version="1.0" encoding="UTF-8" ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
</head>

<body>
	<!-- start of :: contents -->

	<div id="contents">
		<div class="mypage_wrap">
			<div class="lnb_wrap">

				<h2 class="title_style">
					<a href="adminnoticelist.action">공지사항 리스트</a>
				</h2>
				<ul>
					<li><a href="adminnoticelist.action">목록으로</a></li>
				</ul>

			</div>
			<!-- con_wrap -->
			<center>
				<div class="con_wrap">

					<s:if test="resultClass == NULL">
						<h2 class="title_style2">공지사항 작성</h2>
						<form name="myform" action="adminnoticewriteAction.action" method="post"
							enctype="multipart/form-data">
							<!-- onsubmit="return validation();"> -->
					</s:if>
					
					<s:else>
						<h2 class="title_style2">공지사항 작성</h2>
						<form name="myform" action="adminnoticemodifyAction.action" method="post"
							enctype="multipart/form-data">
							<s:hidden name="notice_no" value="%{resultClass.notice_no}" />
							<s:hidden name="currentPage" value="%{currentPage}" />
					</s:else>

					<fieldset>
						<table class="basic_table qna_table">
							<tbody>

								<tr>
									<th><label for="">제목</label></th>
									<td><input type="text" class="input_size3"
										name="notice_sub" maxlength="100"
										value="<s:property value = "%{resultClass.notice_sub}"/>">
									</td>
								</tr>

								<tr>
									<th><label for="">내용</label></th>
									<td><textarea name="notice_content">
										<s:property value="%{resultClass.notice_content}" /></textarea></td>
								</tr>

							</tbody>
						</table>

						<s:if test="resultClass == NULL">
							<div class="btn_box1" id="loading">
								<input type="submit" class="submit" value="작성하기" onClick="validation()">
							</div>
						</s:if>
						<s:else>
							<div class="btn_box1" id="loading">
								<input type="submit" class="hreflink" value="수정하기">
							</div>
						</s:else>
					</fieldset>
					</form>


				</div>
				<!-- //con_wrap -->
			</center>
		</div>
	</div>
	<!-- end of :: contents -->

</body>
</html>
</body>
</html>