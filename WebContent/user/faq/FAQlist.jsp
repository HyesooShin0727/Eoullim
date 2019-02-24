<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
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
</head>
<body>
	<!-- start of :: contents -->
		<div id="contents">
			<div class="customer_wrap">
				<!-- lnb_wrap -->
				<div class="lnb_wrap customer_lnb">

					<h2 class="title_style"><a href="#">고객센터</a></h2>				
<ul id="lnb">
	<li class="lnb_faq depth1 on">
		<a href="faqlistAction.action">FAQ</a>
		<ul style='display:block;'">
			<li><a href="faqlistAction.action" class="on">전체</a></li>

			<li><a href="faqlistAction.action?type=주문/배송 " class="">주문/배송</a></li>

			<li><a href="faqlistAction.action?type=제품문의 " class="">제품문의</a></li>

			<li><a href="faqlistAction.action?type=반품/교환 " class="">반품/교환</a></li>

			<li><a href="faqlistAction.action?type=사이트이용관련 " class="">사이트이용관련</a></li>
 
			<li><a href="faqlistAction.action?type=쿠폰 " class="">쿠폰</a></li>

			<li><a href="faqlistAction.action?type=오프라인매장,기타 " class="">오프라인매장,기타</a></li>

		</ul>
	</li>
</ul>

				</div>
				<!-- //lnb_wrap -->
				<!-- con_wrap -->
				<div class="con_wrap">
					<div class="faq_top">
						<h2>어울림 고객센터</h2>
						<p>고객님의 소중한 관심과 의견에 감사 드립니다. 더 큰 만족을 위해 최선을 다하겠습니다.</p>
						<ul class="faq_top_box">
							<li>
								<div class="box_header">
									<h3>FAQ</h3>
									<p>FAQ를 검색해보세요!</p>
								</div>
								<div class="box_cont">
									자주 묻는 질문과 답변을<br/> 확인하실 수 있습니다.
								</div>
							</li>
							<li>
								<div class="box_header">
									<h3>질문과 답변</h3>
									<p>답변을 찾지 못하셨다면!</p>
								</div>
								<div class="box_cont">
									궁금한 사항을 문의해 주시면<br/> 이메일을 통해 답변 드립니다.
								</div>
							</li>
							<li>
								<div class="box_header">
									<h3>고객센터 전화상담</h3>
									<p>1588.8829</p>
								</div>
								<div class="box_cont">
									<p>업무시간: 평일 오전 09시 ~ 오후 18시</p>
									<p>점심시간: 오후 12시 ~ 오후 13시</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="select_box m_lnb no_over d_hidden">

						
	<a href="#">FAQ</a>
	<ul style="display: none">
		<li><a href="faqlistAction.action">FAQ</a></li>

	</ul>

					</div>
					<h2 class="title_style2">전체</h2>
					<div class="faq_table customer_faq_table">
						<table>
							<caption class="hidden">공지사항 번호, 제목, 일시 테이블 </caption>
							<colgroup>
								<col style="width:12%"/>
								<col/>
								<col style="width:18%"/>
							</colgroup>
							<thead>
								<tr>
									<th><strong>번호</strong></th>
									<th><strong>제목</strong></th>
									<th><strong>분류</strong></th>
								</tr>
							</thead>
							<tbody>
							<s:iterator value="list" status="stat">
								<s:url id="viewURL" action="faqviewAction">
									<s:param name="faq_no">
										<s:property value="faq_no" />
									</s:param>
									<s:param name="currentPage">
										<s:property value="currentPage" />
									</s:param>
								</s:url>
								<tr>
									<td><s:property value="faq_no" /></td>
									<td class="title" align="left"><s:a href="%{viewURL}"><s:property value="faq_sub" /></s:a></td>
									<td><s:property value="faq_type" /></td>
								</tr>
							</s:iterator>
							<s:if test="list.size() <= 0">
								<tr>
									<td colspan="5" align="center">등록된 게시물이 없습니다.</td>
								</tr>
							</s:if>
							<tr align="center">
								<td colspan="5"><s:property value="pagingHtml" escape="false" /></td>
							</tr>
							</tbody>
						</table>

					</div>
				</div>
				<!-- //con_wrap -->
			</div>
			<!--//customer_wrap-->
		</div>
		<!-- end of :: contents -->
</body>
</html>