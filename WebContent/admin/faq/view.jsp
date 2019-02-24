<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<link rel="stylesheet" href="Resource/css/pages/import.css" />
<link href="/Eoullim/user/member/style.css" rel="stylesheet"
	type="text/css">

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
<center>
	<!-- start of :: contents -->
		<div id="contents">
			<div class="mypage_wrap">
			<div class="lnb_wrap">

				<h2 class="title_style">
					<a href="adminfaqlist.action">FAQ</a>
				</h2>
				<ul>
					<li><a href="adminfaqlist.action">목록으로</a></li>
				</ul>

			</div>
				<!-- //lnb_wrap -->
		<!-- con_wrap -->
				<div class="con_wrap">	
					<div class="select_box m_lnb no_over d_hidden">

						
					<a href="#">FAQ</a>

					</div>
		
					<h2 class="title_style2">FAQ</h2>	
					<div class="customer_view">
						<h2 class="tit"><s:property value="resultClass.faq_sub"/></h2>
						<div class="view_box">
							<div>
							<s:property value="resultClass.faq_content"/>
							</div>
						</div>
					</div>
					<!--view_sns_box-->
					<div class="view_sns_box">
					</div>
					<div class="view_top_box bottom">
					<td align="right" colspan="2">
			<s:url id="modifyURL" action="modifyForm">
					<s:param name="faq_no">
						<s:property value="faq_no" />
					</s:param>
				</s:url> <s:url id="deleteURL" action="deleteAction">
					<s:param name="no">
						<s:property value="no" />
					</s:param>
				</s:url> <input name="list" type="button" value="수정" class="hreflink"
				onClick="javascript:location.href='adminfaqmodifyform.action?faq_no=<s:property value="resultClass.faq_no" />&currentPage=<s:property value="currentPage" />'">

					<input name="list" type="button" value="삭제" class="hreflink"
					onClick="javascript:location.href='adminfaqdelete.action?faq_no=<s:property value="resultClass.faq_no" />&currentPage=<s:property value="currentPage" />','delete'">

					</div>
					<!-- //view_sns_box -->
					</div>
				</div>
				<!-- //con_wrap -->
			</div>
			<!--//customer_wrap-->		

		</div>
			
		</tr>
	</table>
</body>
</center>
</html>
<!--  -->