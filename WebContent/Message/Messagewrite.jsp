<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="Resource/css/pages/import.css"/> 
    
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
<SCRIPT type="text/javascript">
	function validation() {

		if (myform.msg_sub.value == "") {
			alert("제목을 입력해주세요.");
			return false;
		}

		else if (myform.msg_content.value == "") {
			alert("내용을 입력해주세요.");
			return false;
		}

		return true;
	}
	
	function findrevid(){
		var url = "findrevidAction.action"
		
		open(url, "confirm","toolbar=no,location=no,status=no,menubar=no,"+
		 "scrollbars=no,resizable=no,width=2000,height=2000");
	}
</SCRIPT>	
</head>
<body>
	<!-- start of :: contents -->
		<div id="contents">
			<div class="mypage_wrap">
				<!-- lnb_wrap -->
				<div class="lnb_wrap">				

					<h2 class="title_style"><a href="mypagemain.action">마이페이지</a></h2>
					<ul>
						<li><a href="myorder.action">주문/배송</a></li><!-- 현재 페이지에서 클래스 on -->
						<li><a href="msgbox.action?msgboxtype=rev">쪽지</a></li>
						<li><a href="mycoupon.action">쿠폰</a></li>
                        <li><a href="UWListAction.action">찜목록</a></li>
						<li><a href="qnalistAction.action">1:1문의</a></li>
						<li><a href="modifyform.action">회원정보 수정</a></li>
					</ul>
					
				</div>
				<!-- //lnb_wrap -->
				<!-- con_wrap -->
				<div class="con_wrap">	
					<h2 class="title_style2">쪽지 작성</h2>	
					<form name="myform" method="post" action="msgwriteAction.action?msgboxtype=<s:property value="msgboxtype"/>&currentPage=<s:property value = "currentPage"/>">
						<fieldset>
							<!-- qna_table -->
							<table class="basic_table qna_table">
								<tbody>
									<tr>
										<th>
											<label for="">제목</label>
										</th>	
										<td>
											<input type="text" class="input_size3" name="msg_sub" maxlength="100">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">받는사람</label>
										</th>	
										<td>
											<input type="text" class="input_size3" id="msg_rev_id" name="msg_rev_id" maxlength="100" placeholder="회원 검색 이용">
										</td>
										<td>
											<input type="button" value="검색" onclick="findrevid()"><br></td>
										</td>
									</tr>
									<tr>
										<th>
											<label for="">내용</label>
										</th>
										<td>
											<textarea name="msg_content"></textarea>
										</td>
									</tr>
								</tbody>
							</table>
							<!-- qna_table -->
							<div class="btn_box1" id="loading">
								<input type ="submit" value = "보내기">
							</div>
						</fieldset>
					</form>


				</div>
				<!-- //con_wrap -->
			</div>
		</div>
		<!-- end of :: contents -->
</body>
</html>