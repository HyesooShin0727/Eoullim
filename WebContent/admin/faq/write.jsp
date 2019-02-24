<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="Resource/css/pages/import.css" />

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
<script type="text/javascript">
	function validation() {
		var frm = document.forms(0);

		if (frm.faq_sub.value == "") {
			alert("제목을 입력해주세요♥");
			return false;
		} else if (frm.faq_content.value == "") {
			alert("내용을 입력해주세요♥");
			return false;
		}
		return true;
	}
</script>

<body>
	<!-- start of :: contents -->

	<div id="contents">
		<div class="mypage_wrap">
			<div class="lnb_wrap">

				<h2 class="title_style">
					<a href="adminfaqlist.action">리뷰게시판</a>
				</h2>
				<ul>
					<li><a href="adminfaqlist.action">목록으로</a></li>
				</ul>

			</div>
			<!-- con_wrap -->
			<center>
				<div class="con_wrap">

					<s:if test="resultClass == NULL">
						<h2 class="title_style2">FAQ 작성</h2>
						<form name="myform" action="adminfaqwrite.action" method="post"
							encType="multipart/form-data">
					</s:if>

					<s:else>
						<h2 class="title_style2">FAQ 수정</h2>
						<form action="adminfaqmodify.action" method="post" method="post"
							encType="multipart/form-data">
							<s:hidden name="faq_no" value="%{faq_no}" />
							<s:hidden name="currentPage" value="%{currentPage}" />
					</s:else>

					<fieldset>
						<table class="basic_table qna_table">
							<tbody>
								<tr> 
									<th><label for="">타입</label></th>
									<td><s:select name="faq_type"
										list="%{#{'type1':'Type1', 'type2':'Type2', 'type3':'Type3', 'type4':'Type4', 'type5':'Type5', 'type6':'Type6', 'type7':'Type7' }}">
										</s:select>
									</td>
								</tr>
								
								<tr>
									<th><label for="">제목</label></th>
									<td><input type="text" class="input_size3" name="faq_sub" 
											maxlength="100" value="<s:property value = "%{resultClass.faq_sub}"/>">
									</td>
								</tr>
								
								<tr>
									<th><label for="">내용</label></th>
									<td><textarea name="faq_content">
										<s:property value="%{resultClass.faq_content}" /></textarea></td>
								</tr>
								
							</tbody>
						</table>
						<!-- faq_table -->
						<s:if test="resultClass == NULL">
							<div class="btn_box1" id="loading">
								<input type="submit" value="작성하기" onClick="validation()">
							</div>
						</s:if>
						<s:else>
							<div class="btn_box1" id="loading">
								<input type="submit" value="수정하기">
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