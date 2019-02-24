<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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

<title>중고거래게시글 상세보기</title>

<link href="/Eoullim/common/css/style.css" rel="stylesheet"
	type="text/css">
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

<script type="text/javascript">
	// 새창이 열리는 함수 정의
	function open_win_noresizable(url, name) {
		var oWin = window
				.open(url, name,
						"scrollbars=no, status=no, resizable=no, width=350, height=200");

	}
</script>

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
						<td align="center" class="text01 formbar"><h2>중고화장품 상세보기</h2></td>

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
							<td width="100" height="20" class="tdstyle2"><b>제목</b></td>
							<td width="600"><s:property value="resultClass.uboard_sub" />
							</td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td class="tdstyle1" height="20"><b>이름</b></td>
							<td><s:property value="resultClass.uboard_member_name" /></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20">조회수</td>
							<td width="600"><s:property
									value="resultClass.uboard_readhit" /></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr>
							<td width="100" height="20">등록날짜</td>
							<td width="600"><s:property
									value="resultClass.uboard_regdate" /></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<tr bgcolor="#777777">
							<td height="1" colspan="2"></td>
						</tr>

						<table width="700" border="0" cellspacing="0" cellpadding="0"
							align="center">
							<tr>
								<td colspan="2" align="center">
									<!-- 올린 파일 사진 --> <s:if
										test="%{resultClass.uboard_file_savname == null}"></s:if> <s:else>
										<img
											src="/Eoullim/upload/<s:property value="resultClass.uboard_file_savname"/>"
											width="700px">
									</s:else>
								</td>
							</tr>

							<tr>
								<td clospan="2"><s:property
										value="resultClass.uboard_content" /></td>
							</tr>

							<tr bgcolor="#777777">
								<td height="1" colspan="2"></td>
							</tr>
							<tr bgcolor="#777777">
								<td colspan="2" height="1"></td>
							</tr>

							<tr>
								<td height="10" colspan="2"></td>
							</tr>

							<!--  -->

							<tr>
								<td colspan="2" height="10">
									<form action="usedwritecommentAction.action" method="post"
										enctype="multipart/form-data">
										<!-- onsubmit="return validation();"> -->
										<table>
											<tr>
												<s:hidden name="ucomment_orgno"
													value="%{resultClass.uboard_no}" />
												<s:hidden name="uboard_no" value="%{resultClass.uboard_no}" />
												<s:hidden name="currentPage" value="%{currentPage}" />

												<%-- 댓글의 댓글 처리할경우 넘겨야 할 값들 
								   		<s:hidden name="ref" value="0" />
										<s:hidden name="re_level" value="0" />
										<s:hidden name="re_step" value="0" />
									    --%>
												<td align="left"><s:textarea name="ucomment_content"
														theme="simple" value="" cols="77" rows="3" /></td>
												<td colspan="2" align="right"><input name="submit"
													type="submit" value="작성완료" class="inputb"></td>

												<%-- 
											<td align="left"><s:textarea name="ucomment_content"
													theme="simple" value="" cols="60" rows="3" /></td>
											</tr>

											<tr>
												<td colspan="2" align="right"><input name="submit"
												type="submit" value="댓글달기" class="inputb"></td>
											</tr>
 --%>
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
							<!-- 댓글 처리 시작-->
							<s:iterator value="commentlist" status="stat">
								<tr>
									<td height="10" width="30%" align="center"><s:property
											value="ucomment_id" /><br> <s:property
											value="ucomment_regdate" /><br> <br></td>
									<td width="60%"><s:property value="ucomment_content" /></td>
									<td width="10%"><a
										href="javascript:open_win_noresizable('usedcommentcheck.action?ucomment_no=<s:property value="ucomment_no" />
               &ucomment_orgno=<s:property value="ucomment_orgno"/>&currentPage=<s:property value="currentPage" />','cdelete')">[댓글삭제]</a>
								</tr>


								<%--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
					<a href="javascript:open_win_noresizable('Ucomment_checkForm.action?ucomment_no='<s:property value="ucomment_no" />
					&ucomment_orgno=<s:property value="ucomment_orgno"/>&currentPage=<s:property value="currentPage" />','cdelete')">[댓글달기]</a>
					 --%>
						</tr>

						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>

						</s:iterator>

						</form>
						</td>
						</tr>

						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>

						<tr bgcolor="#777777">
							<td colspan="2" height="1"></td>
						</tr>

						<tr>
							<td colspan="2" height="40"><s:if
									test="commentlist.size() <= 0">
									<br>
									<br>댓글없음<br>
									<br></td>
						</tr>
						</s:if>

						<!-- 댓글 처리 끝-->

						<tr>
							<td align="right" colspan="2">
								<s:url id="modifyURL" action="Uboard_modifyForm">
									<s:param name="uboard_no">
										<s:property value="uboard_no" />
									</s:param>
								</s:url> 
								
								<s:url id="deleteURL" action="Uboard_deleteAction">
									<s:param name="uboard_no">
										<s:property value="uboard_no" />
								</s:param>

								</s:url> <input name="list" type="button" value="답변달기" class="submit"
								onClick="javascript:location.href='Uboard_replyForm.action?uboard_no=<s:property value="uboard_no" />&currentPage=<s:property value="currentPage" />'">
								<s:if test="%{resultClass.uboard_member_id == session.member_id}">
									<input name="list" type="button" value="수정하기" class="hreflink"
										onClick="javascript:open_win_noresizable('usedcheck.action?uboard_no=<s:property value="resultClass.uboard_no" />&currentPage=<s:property value="currentPage" />','modify')">

									<input name="list" type="button" value="삭제하기" class="submit"
										onClick="javascript:open_win_noresizable('usedcheck.action?uboard_no=<s:property value="resultClass.uboard_no" />&currentPage=<s:property value="currentPage" />','delete')">
								</s:if> <input name="list" type="button" value="목록가기" class="hreflink"
								onClick="javascript:location.href='usedlistAction.action?currentPage=<s:property value="currentPage" />'"></td>
						</tr>
					</table>
</body>
</html>

<!-- 댓글 시작 부분부터 백업(19.01.02) -->
<!-- 
		
		<tr bgcolor="#777777">
			<td colspan="2" height="1"></td>
		</tr>
		
		<tr>
			<td colspan="2" height="10"></td>
		</tr>
		
		<tr>
			<td colspan="2" height="10">
				<form action="Uboard_writeCommentAction.action" method="post" onsubmit="return validation();">
					<table>
-->
<!-- 세션으로 로그인상태 구분하여 댓글 처리 -->
<%-- 
						<c:choose>
							<c:when test="${session.member_id != null}">
								<tr>
									<tr>
										<h3>COMMENT</h3>
										<td width="170">이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름&nbsp;&nbsp;
											${session.member_id} 
											<br> 비밀번호
											 <s:textfield name="ucomment_passwd" theme="simple" value=""
												cssStyle="width:100px" maxlength="20" />
										</td>
										<input type="hidden" name="ucomment_name" value="${session.member_id}"/>
										
										<s:hidden name="ucomment_orgno" value="%{resultClass.uboard_no}" />
										
										<!-- !!!!!!!!!!!!!!!!!!!!!!!!수정!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
										<s:hidden name="ucomment_no" value="%{resultClass.uboard_no}" />
										<s:hidden name="currentPage" value="%{currentPage}" />
										<!-- !!!!!!!!!!!!!!!!!!!!!!!!수정!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
									</tr>
									
									<tr>
										<td align="left">
										<s:textarea name="ucomment_content" theme="simple" value="" cols="100" rows="6" /></td>
									</tr>
									
									<tr>
										<td colspan="2" align="right">
										<input name="submit" type="submit" value="OK" class="inputb"></td>
									</tr>

								</tr>
							</c:when>
							
							<c:when test="${session.member_id == null}">
								<tr>
									<td><h4>회원에게만 댓글 작성 권한이 있습니다.</h4></td>
								</tr>
							</c:when>	
						</c:choose>
							 --%>

<!-- 
								 <tr>
									<td width="170">이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름 
										<s:textfield name="ucomment_id" theme="simple" value=""
										cssStyle="width:100px" maxlength="20" />
										<br> 비밀번호 
										<s:textfield name="ucomment_passwd" theme="simple" value=""
											cssStyle="width:100px" maxlength="20" /></td>
									
									<s:hidden name="ucomment_orgno" value="%{resultClass.uboard_no}" />
									
									<s:hidden name="uboard_no" value="%{resultClass.uboard_no}" />
									<s:hidden name="currentPage" value="%{currentPage}" />
									
							
									<td align="left">
									<s:textarea name="ucomment_content" theme="simple" value="" cols="60" rows="3" /></td>
						</tr>
						
						<tr>
							<td colspan="2" align="right">
							<input name="submit" type="submit" value="작성완료" class="inputb"></td>
						</tr> 
							
					</table>
				</form>
			</td>
		</tr>

		<tr bgcolor="#777777">
			<td colspan="2" height="1"></td>
		</tr>

		
		
		<s:iterator value="commentlist" status="stat">
			<tr>
				<td height="10" width="130" align="center">
					<s:property value="ucomment_id" /><br> 
					<s:property value="ucomment_regdate" /><br><br></td>
				<td>
					<s:property value="ucomment_content" /> 
					<a href="javascript:open_win_noresizable('Ucomment_checkForm.action?ucomment_no=<s:property value="ucomment_no" />
					&ucomment_orgno=<s:property value="ucomment_orgno"/>&currentPage=<s:property value="currentPage" />','cdelete')">[delete]</a>
				</td>
			</tr>
			<tr bgcolor="#777777">
				<td colspan="2" height="1"></td>
			</tr>
		</s:iterator>
		
		<tr>
			<td colspan="2" height="10">
			<s:if test="commentlist.size() <= 0">
				댓글없음
			</td>
		</tr>
		</s:if>

		<tr>
			<td align="right" colspan="2">
			<s:url id="modifyURL" action="Uboard_modifyForm">
				<s:param name="uboard_no">
					<s:property value="uboard_no" />
				</s:param>
			</s:url> 
			
			<s:url id="deleteURL" action="Uboard_deleteAction">
				<s:param name="uboard_no">
					<s:property value="uboard_no" />
				</s:param>

			</s:url> 
			
			<input name="list" type="button" value="답변달기" class="submit"
				onClick="javascript:location.href='Uboard_replyForm.action?uboard_no=<s:property value="uboard_no" />&currentPage=<s:property value="currentPage" />'"> 
					
			<input name="list" type="button" value="수정하기" class="hreflink"
				onClick="javascript:open_win_noresizable('Uboard_checkForm.action?uboard_no=<s:property value="resultClass.uboard_no" />&currentPage=<s:property value="currentPage" />','modify')">

			<input name="list" type="button" value="삭제하기" class="submit"
				onClick="javascript:open_win_noresizable('Uboard_checkForm.action?uboard_no=<s:property value="resultClass.uboard_no" />&currentPage=<s:property value="currentPage" />','delete')">

			<input name="list" type="button" value="목록가기" class="hreflink"
				onClick="javascript:location.href='Uboard_listAction.action?currentPage=<s:property value="currentPage" />'"></td>
		</tr>
	</table>

</body>
</html>
-->

<!-- 세션으로 로그인상태 구분하여 댓글 처리 -->
<%-- 
						<c:choose>
							<c:when test="${session.member_id != null}">
								<tr>
									<tr>
										<h3>COMMENT</h3>
										<td width="170">이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름&nbsp;&nbsp;
											${session.member_id} 
											<br> 비밀번호
											 <s:textfield name="ucomment_passwd" theme="simple" value=""
												cssStyle="width:100px" maxlength="20" />
										</td>
										<input type="hidden" name="ucomment_name" value="${session.member_id}"/>
										
										<s:hidden name="ucomment_orgno" value="%{resultClass.uboard_no}" />
										
										<!-- !!!!!!!!!!!!!!!!!!!!!!!!수정!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
										<s:hidden name="ucomment_no" value="%{resultClass.uboard_no}" />
										<s:hidden name="currentPage" value="%{currentPage}" />
										<!-- !!!!!!!!!!!!!!!!!!!!!!!!수정!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
									</tr>
									
									<tr>
										<td align="left">
										<s:textarea name="ucomment_content" theme="simple" value="" cols="100" rows="6" /></td>
									</tr>
									
									<tr>
										<td colspan="2" align="right">
										<input name="submit" type="submit" value="OK" class="inputb"></td>
									</tr>

								</tr>
							</c:when>
							
							<c:when test="${session.member_id == null}">
								<tr>
									<td><h4>회원에게만 댓글 작성 권한이 있습니다.</h4></td>
								</tr>
							</c:when>	
						</c:choose>
							 --%>


<!--  <td width="170">이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름 
										 <s:textfield name="ucomment_id" theme="simple" value=""
										cssStyle="width:100px" maxlength="20" />
										<br> 비밀번호 
										<s:textfield name="ucomment_passwd" theme="simple" value=""
											cssStyle="width:100px" maxlength="20" /></td>-->

<!-- 첨부파일 다운로드 -->
<%-- 
		<tr>
			<td bgcolor="#FFFFFF">첨부파일</td>	
			<td bgcolor="#FFFFFF">
				<s:url id="download" action="uboard_fileDownloadAction">
					<s:param name="uboard_no">
						<s:property value="uboard_no" />
					</s:param>
				</s:url> 
				
					<s:a href="%{download}">
						<s:property value="resultClass.uboard_file_orgname"/>
					</s:a>
			</td>
		</tr>
		 --%>
