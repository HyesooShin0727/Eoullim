<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
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
<script src="Resource/js/common/libs/jquery.mCustomScrollbar.concat.min.js"></script>
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
			<div class="customer_wrap">
				<!-- lnb_wrap -->
				<div class="con_wrap"></div>
				<h2>중고거래 게시판</h2>
				<br>
				<br>
				<div></div>
				<div class="faq_table customer_faq_table">
					<table>
						<colgroup>
							<col style="width: 12%" />
							<col />
							<col style="width: 18%" />
						</colgroup>
						<thead>
							<tr>
								<th width="10%"><strong>번호</strong></th>
								<th width="10%"><strong>상품이미지</strong></th>
								<th width="40%"><strong>제목</strong></th>
								<th width="10%"><strong>아이디</strong></th>
								<th width="10%"><strong>조회수</strong></th>
								<th width="20%"><strong>등록날짜</strong></th>
							</tr>
						</thead>
						<tbody>
							<s:iterator value="list" status="stat">
								<s:url id="viewURL" action="usedviewAction">
									<s:param name="uboard_no">
										<s:property value="uboard_no" />
									</s:param>

									<s:param name="currentPage">
										<s:property value="currentPage" />
									</s:param>
								</s:url>

								<tr>
									<td><s:property value="uboard_no" /></td>
									<s:if test="%{uboard_file_savname == null}">
										<td></td>
									</s:if>
									<s:else>
										<td><img src="/Eoullim/upload/<s:property value="uboard_file_savname"/>"
											width="50" height="50" /></td>
									</s:else>
									<td class="title" align="left"><s:if test="re_level != 0">
											<c:forEach var="i" begin="1" end="${re_level}">&nbsp;&nbsp;&nbsp;</c:forEach>
											<img src="/Eoullim/upload/icon_reply.gif" />
										</s:if> <s:a href="%{viewURL}">
											<s:property value="uboard_sub" />
										</s:a></td>
									<td><s:property value="uboard_member_id" /></td>
									<td><s:property value="uboard_readhit" /></td>
									<td><s:property value="uboard_regdate" /></td>
								</tr>
							</s:iterator>
							<s:if test="list.size() <= 0">
								<tr>
									<td colspan="5" align="center">등록된 게시물이 없습니다.</td>
								</tr>
							</s:if>
							<tr align="center">
								<td colspan="7"><s:property value="pagingHtml"
										escape="false" /></td>
							</tr>
							<tr align="right">
								<td colspan="7">
								<input class="submit" type="button" value="글쓰기"
									onClick="javascript:location.href='usedwriteform.action?currentPage=<s:property value="currentPage" />';"></td>
							</tr>
						</tbody>
					</table>
					<tr align="center">
						<td colspan="5">
							<form>
								<select name="searcht" style="width: 100px; height: 30px;">
									<option value="uboard_sub">제목</option>
									<option value="uboard_content">내용</option>
									<option value="uboard_member_id">아이디</option>
								</select>

								<s:textfield name="searchk" theme="simple" value=""
									cssStyle="width:200px; height:30px;" maxlength="20" />
								<input type="hidden" name="currentPage"
									value='<s:property value="currentPage"/>'> <input
									name="submit" type="submit" value="SEARCH" class="hreflink">
							</form>
						</td>
					</tr>

				</div>
			</div>
			<!-- //con_wrap -->
		</div>
		<!--//customer_wrap-->
		</div>
		<!-- end of :: contents -->
	</center>
</body>
</html>