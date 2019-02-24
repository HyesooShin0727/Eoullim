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
<SCRIPT type="text/javascript">
	function chktype(oElement){
		if(oElement.value == '1'){
			document.cwrite.basic_table qna_table.discash.disabled=false;
			document.cwrite.basic_table qna_table.disrate.disabled=true;
			document.getElementById("disrate").value = 0;
		}else if(oElement.value == '2'){
			document.cwrite.basic_table qna_table.disrate.disabled=false;
			document.cwrite.basic_table qna_table.discash.disabled=true;
			document.getElementById("discash").value = 0;
		}else if(oElement.value == '0'){
			document.cwrite.basic_table qna_table.disrate.disabled=true;
			document.getElementById("disrate").value = 0;
			document.cwrite.basic_table qna_table.discash.disabled=true;
			document.getElementById("discash").value = 0;
		}
	}
	
	$(function() {
	    $( "#datepicker" ).basic_table qna_table.datepicker({
	    	dateFormat: 'yy-mm-dd'
	    });
	});
</SCRIPT>
</head>

<body>
	<!-- start of :: contents -->
	
		<div id="contents">
			<div class="mypage_wrap">
				<div class="lnb_wrap">				

					<h2 class="title_style"><a href="admincouponlist.action">쿠폰관리</a></h2>
					<ul>
						<li><a href="admincouponlist.action">목록으로</a></li>
					</ul>
					
				</div>
				<!-- con_wrap -->
				<center>
				<div class="con_wrap">	
					<s:if test="resultClass == NULL">
					<h2 class="title_style2">쿠폰 작성</h2>	
					<form name = "cwrite" action="CouponWriteAction.action" method="post">
						<s:param name="currentPage">
							<s:property value="currentPage" />
						</s:param>
					</s:if>
					<s:else>
					<h2 class="title_style2">쿠폰 수정</h2>	
					<form action="CouponModifyAction.action" method="post">
						<s:hidden name="coupon_no" value="%{resultClass.coupon_no}" />
						<s:hidden name="currentPage" value="%{currentPage}" />
					</s:else>
						<fieldset>
							<table class="basic_table qna_table">
								<tbody>
									<tr>
										<th>
											<label for="">쿠폰명</label>
										</th>	
										<td>
											<input type="text" class="input_size3" name="coupon_name" maxlength="100" value = "<s:property value = "%{resultClass.coupon_name}"/>">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">쿠폰 사용 가능 가격</label>
										</th>	
										<td>
											<input type="text" class="input_size3" name="coupon_price" maxlength="100" value = "<s:property value = "%{resultClass.coupon_price}"/>">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">쿠폰 타입</label>
										</th>
										<td>
											<select name="coupon_type" id="type.select" onChange="chktype(this)">
												<option value="0" selected> 선택하세요</option>
												<option value="1">가격할인</option>
												<option value="2">퍼센트할인</option>
											</select>
										</td>
									</tr>
									<tr>
										<th>
											<label for="">할인률</label>
										</th>	
										<td>
											<input type="text" id = "disrate" name="coupon_disrate" maxlength="100" value = "<s:property value = "%{resultClass.coupon_disrate}"/>">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">할인가격</label>
										</th>	
										<td>
											<input type="text" id = "discash" name="coupon_discash" maxlength="100" value = "<s:property value = "%{resultClass.coupon_discash}"/>">
										</td>
									</tr>
									<tr>
										<th>
											<label for="">쿠폰 만료일</label>
										</th>	
										<td>
											<input type="text" id="datepicker" name="coupon_enddate" maxlength="100" value = "<s:property value = "%{resultClass.coupon_enddate}"/>">
										</td>
									</tr>
								</tbody>
							</table>
							<!-- qna_table -->
							<s:if test="resultClass == NULL">
							<div class="btn_box1" id="loading">
								<input class="hreflink" type ="submit" value = "작성하기" onClick="validation()">
							</div>
							</s:if>
							<s:else>
							<div class="btn_box1" id="loading">
								<input class="hreflink" type ="submit" value = "수정하기" >
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