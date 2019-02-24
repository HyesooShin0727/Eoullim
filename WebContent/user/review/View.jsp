<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="Resource/css/pages/import.css" />
<!-- <link href="/Eoullim/user/member/style.css" rel="stylesheet" type="text/css"> -->
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
<title>리뷰게시판 상세보기</title>
<link href="/Eoullim/common/css/style.css" rel="stylesheet"
	type="text/css">
<script type="text/javascript">
	function open_win_noresizable(url, name) {
		var oWin = window
				.open(url, name,
						"scrollbars=no, status=no, resizable=no, width=350, height=200");
	}
</script>

<style type="text/css">
#form td.tdstyle2 {
	background-color: #000000;
	border: #ccc 1px solid;
	width: 400px;
	padding: 20px;
	font-size: 14px;
	font-weight: bold;
	color: #000;
}
</style>

</head>
<body>
	<table width="100%" border="0" cellspacing="0" cellpadding="1">
		<tr>
			<td align="center">

				<table width="600" border="0" cellspacing="0" cellpadding="2"
					align="center">
					<tr>
						<td height="20"></td>
					</tr>

					<tr>
						<td align="center" class="text01 formbar"><h2>리뷰게시판 상세보기
							</h2></td>

					</tr>
					<tr>
						<td height="20"></td>
					</tr>

					<table width="700" border="0" cellspacing="0" cellpadding="0"
						align="center">
						<tr>
							<td align="right" colspan="2"></td>
						</tr>

						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>

						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>

						<tr>
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20" class="tdstyle2"><b>번호</b></td>
							<td width="600"><s:property value="resultClass.rboard_no" />
							</td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20" class="tdstyle2"><b>제목</td>
							<td width="600"><s:property value="resultClass.rboard_sub" />
							</td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20"><b>글쓴이</b></td>
							<td width="600"><s:property value="resultClass.rboard_id" />
							</td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20"><b>조회수</b></td>
							<td width="600"><s:property
									value="resultClass.rboard_readhit" /></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20"><b>등록날짜</b></td>
							<td width="600"><s:property
									value="resultClass.rboard_regdate" /></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>
					</table>

					<table width="700" border="0" cellspacing="0" cellpadding="0"
						align="center">

						<tr>
							<td colspan="2" align="center"><br> <br> <s:if
									test="%{resultClass.video_file == null}">
								</s:if> <s:else>
									<iframe src=<s:property value="resultClass.video_file" />
										height="400px" width="700px" scrolling="no"></iframe>
									<br>
									<br></td>
							</s:else>
							</td>
						</tr>

						<tr>

							<s:if test="resultClass.img_file.split(',')[0] != null">
								<td colspan="0" align="center"><img
									src="/Eoullim/upload/<s:property value="resultClass.img_file.split(',')[0]"/>"
									width="700"><br> <br></td>
							</s:if>
						</tr>
						<tr>
							<s:if test="resultClass.img_file.split(',')[1] != null">
								<td colspan="0" align="center"><img
									src="/Eoullim/upload/<s:property value="resultClass.img_file.split(',')[1]"/>"
									width="700"><br> <br></td>
							</s:if>
						</tr>

						<tr>
							<s:if test="resultClass.img_file.split(',')[2]!=null">
								<td colspan="0" align="center"><img
									src="/Eoullim/upload/<s:property value="resultClass.img_file.split(',')[2]"/>"
									width="700"><br> <br></td>
							</s:if>
						</tr>

						<tr>
							<s:if test="resultClass.img_file.split(',')[3]!=null">
								<td colspan="0" align="center"><img
									src="/Eoullim/upload/<s:property value="resultClass.img_file.split(',')[3]"/>"
									width="700"><br> <br></td>
							</s:if>
						</tr>

						<tr>
							<!-- <td width="10"><b>내용</b></td> -->
							<td colspan="2"><s:property
									value="resultClass.rboard_content" /></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td height="10" colspan="2"></td>
						</tr>

						<tr>
							<td colspan="2" height="10">
								<form action="reviewwritecommentAction.action" method="post">
									<table>
										<tr>
											<s:hidden name="rcomment_orgno" value="%{rboard_no}" />
											<s:hidden name="rboard_no" value="%{rboard_no}" />
											<s:hidden name="rcomment_no"
												value="%{resultClass.rcomment_no}" />
											<s:hidden name="currentPage" value="%{currentPage}" />
											<%-- <s:hidden name="rboard_no" value="%{resultClass.rboard_no}" /> --%>
											<td align="left"><s:textarea name="rcomment_content"
													theme="simple" value="" cols="77" rows="3" /></td>
											<td colspan="2" align="right"><input name="submit"
												type="submit" value="작성완료" class="inputb"></td>
										</tr>
									</table>
								</form>
							</td>
						</tr>
						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>
					</table>

					<table width="700" border="0" cellspacing="0" cellpadding="0"
						align="center">

						<s:iterator value="commentlist" status="stat">
							<tr>
								<td height="10" width="30%" align="center">
									<s:property value="rcomment_id" /><br> 
									<s:property value="rcomment_regdate" /><br> <br></td>
								<td width="60%"><s:property value="rcomment_content" /></td>
								<td width="10%">
									<a href="javascript:open_win_noresizable('reviewcommentcheck.action?rcomment_no=<s:property value="rcomment_no" />&rboard_no=<s:property value="rboard_no"/>&rcomment_orgno=<s:property value="rcomment_orgno"/>&currentPage=<s:property value="currentPage"/>','cdelete')">[댓글삭제]</a>
								</td>
							</tr>
							<tr bgcolor="#7777777">
								<td colspan="2" height="1"></td>
							</tr>
						</s:iterator>
						<tr>
							<td colspan="2" height="10"><s:if
									test="commentlist.size() <= 0">
		댓글없음
		</s:if></td>
						</tr>
						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>
						<tr>
							<td colspan="2" height="10"></td>
						</tr>
						<tr>
							<td align="right" colspan="2"><s:url id="modifyURL"
									action="modifyForm">
									<s:param name="rboard_no">
										<s:property value="rboard_no" />
									</s:param>
								</s:url> <s:url id="deleteURL" action="deleteAction">
									<s:param name="rcomment_no">
										<s:property value="rcomment_no" />
									</s:param>
								</s:url> <input name="list" type="button" value="목록" class="hreflink"
								onClick="javascript:location.href='reviewlistAction.action?currentPage=<s:property value="currentPage" />'">
								<s:if test="%{resultClass.rboard_id == session.member_id}">
									<input name="list" type="button" value="수정" class="submit"
										onClick="javascript:open_win_noresizable('reviewcheck.action?rboard_no=<s:property value="resultClass.rboard_no" />&currentPage=<s:property value="currentPage" />','modify')">
									<input name="list" type="button" value="삭제" class="submit"
										onClick="javascript:open_win_noresizable('reviewcheck.action?rboard_no=<s:property value="resultClass.rboard_no" />&currentPage=<s:property value="currentPage" />','delete')">
								</s:if> <input name="list" type="button" value="좋아요♥" class="hreflink"
								onClick="javascript:location.href=('reviewLikesAction.action?rboard_no=<s:property value="resultClass.rboard_no"/>&currentPage=<s:property value="currentPage"/>')">

							</td>
						</tr>
					</table>
</body>
</html>