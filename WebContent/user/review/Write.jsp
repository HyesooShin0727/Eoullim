<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="Resource/css/pages/import.css"/> 
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
	<script src="Resource/js/common/libs/jquery.mCustomScrollbar.concat.min.js"></script>
	<script src="Resource/js/common/styleship/matizResizeMap.1.0.0.min.js"></script>
	<script src="Resource/js/pages/jquery.youtubebackground.js"></script>

	<script src="Resource/js/common/default.js"></script>
	<script src="Resource/js/common/cookie.js"></script>

	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
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

		if (frm.rboard_sub.value == "") {
			alert("제목을 입력해주세요♥");
			return false;
		} else if (frm.rboard_content.value == "") {
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

					<h2 class="title_style"><a href="reviewlistAction.action">리뷰게시판</a></h2>
					<ul>
						<li><a href="reviewlistAction.action">목록으로</a></li>
					</ul>
					
				</div>
				<!-- con_wrap -->
				<center>
				<div class="con_wrap">	
					<s:if test="resultClass == NULL">
					<h2 class="title_style2">리뷰 작성</h2>	
					<form name="myform" method="post" action="reviewwriteAction.action" encType="multipart/form-data">
						<s:param name="rboard_goods">
							<s:property value="rboard_goods" />
						</s:param>
					</s:if>
					<s:else>
					<h2 class="title_style2">리뷰 수정</h2>	
					<form name="myform" action="reviewmodifyAction.action" method="post" enctype="multipart/form-data">
						<s:hidden name="rboard_no" value="%{resultClass.rboard_no}" />
						<s:hidden name="currentPage" value="%{currentPage}" />
						<s:hidden name="img_File" value="%{resultClass.img_File }"/>
					</s:else>
						<fieldset>
							<table class="basic_table qna_table">
								<tbody>
									<tr>
										<th>
											<label for="">제목</label>
										</th>	
										<td>
											<input type="text" class="input_size3" name="rboard_sub" maxlength="100" value = "<s:property value = "%{resultClass.rboard_sub}"/>">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">동영상 URL</label>
										</th>	
										<td>
											<input type="text" class="input_size3" name="video_file" maxlength="100" value = "<s:property value = "%{resultClass.video_file}"/>">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">내용</label>
										</th>
										<td>
											<textarea name="rboard_content"><s:property value = "%{resultClass.rboard_content}"/></textarea>
										</td>
									</tr>
									<tr>
										<th>
											<label for="">파일첨부</label>
										</th>
										<td>
											<input type="file" name="uploads">
											<input type="file" name="uploads">
											<input type="file" name="uploads">
											<input type="file" name="uploads">
											<p class="txt1">* 전체 최대 용량 8MB, 이미지 파일(jpeg, png, gif) 1개
											첨부 가능합니다.</p>
										<br /> <s:if test="resultClass.img_file != NULL">
     									&nbsp;<s:property value="resultClass.img_file" />
											<p>
												<font color="red"> * 파일이 등록 되어 있습니다. 다시 업로드하면 기존의 파일은
													삭제됩니다.</font>
											</p>
										</s:if></td>
										</td>
									</tr>
								</tbody>
							</table>
							<!-- qna_table -->
							<s:if test="resultClass == NULL">
							<div class="btn_box1" id="loading">
								<input type ="submit" value = "작성하기" class="submit" onClick="validation()">
							</div>
							</s:if>
							<s:else>
							<div class="btn_box1" id="loading">
								<input type ="submit" value = "수정하기" class="submit">
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