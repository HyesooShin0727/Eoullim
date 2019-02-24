<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>어울림</title>
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
<style type="text/css">
#form td.tdstyle2 {
	background: #2bae9f;
	border: #ccc 1px solid;
	width: 400px;
	padding: 20px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
}

#form td.tdstyle1 {
	background: #eee;
	width: 120px;
	text-align: left;
	vertical-align: middle;
}
</style>
<script type="text/javascript">
	function open_win_noresizable(url, name) {
		var oWin = window
				.open(url, name,
						"scrollbars=no, status=no, resizable=no, width=600, height=500");

	}
</script>
</head>

<body>
<center>
	<table width="80%" border="0" cellspacing="0" cellpadding="2">
		<tr>
			<td align="center" class="text01 formbar"><h2>상품 상세보기</h2></td>
		</tr>
	</table>
	<br>

	<table width="80%" border="0" cellspacing="0" cellpadding="0" id="form">

		<tr>
			<td width="100" class="tdstyle1"><b>번호</b></td>
			<td width="500"><s:property value="resultClass.goods_no" /></td>
		</tr>

		<tr>
			<td width="100" class="tdstyle1"><b>상품명</b></td>
			<td width="500"><s:property value="resultClass.goods_name" /></td>
		</tr>
		
		<tr>
			<td width="100" class="tdstyle1"><b>브랜드명</b></td>
			<td width="500"><s:property value="resultClass.goods_bname" /></td>
		</tr>

		<tr>
			<td width="100" class="tdstyle1"><b>내용</b></td>
			<td width="500">${resultClass.goods_content }</td>
		</tr>
		
		<tr>
			<td width="100" class="tdstyle1"><b>색상</b></td>
			<td width="500"><s:property value="resultClass.goods_color" />
			</td>
		</tr>
		
		<!-- price,type,totalcnt -->
		<tr>
			<td width="100" class="tdstyle1"><b>가격</b></td>
			<td width="500"><s:property value="resultClass.goods_price" />
			</td>
		</tr>
		
		<tr>
			<td width="100" class="tdstyle1"><b>재고</b></td>
			<td width="500"><s:property value="resultClass.goods_totalcnt" />
			</td>
		</tr>
		
		<tr>
			<td width="100" class="tdstyle1"><b>타입1</b></td>
			<td width="500"><s:property value="resultClass.goods_type1" />
			</td>
		</tr>
		
		<tr>
			<td width="100" class="tdstyle1"><b>타입2</b></td>
			<td width="500"><s:property value="resultClass.goods_type2" />
			</td>
		</tr>
		
		<!-- s -->
		
		<tr>
			<td width="100" class="tdstyle1"><b>조회수</b></td>
			<td width="500"><s:property value="resultClass.goods_readcnt" />
			</td>
		</tr>
		
		<tr>
			<td width="100" class="tdstyle1"><b>등록날짜</b></td>
			<td width="500"><s:property value="resultClass.goods_regdate" />
			</td>
		</tr>
		<tr>
			<td height="100"></td>
		</tr>

		</tr>
		
		</table>
		<table>
			<tr>
			<td><input name="modify_b" type="button" value="수정" class="submit"
				onClick="javascript:location.href='admingoodsmodifyform.action?goods_no=<s:property value="resultClass.goods_no" />&currentPage=<s:property value="currentPage" />','modify'"></td>
				<td><input name="delete_b" type="button" value="삭제" class="hreflink"
				onClick="javascript:location.href='admingoodsdelete.action?goods_no=<s:property value="resultClass.goods_no" />&currentPage=<s:property value="currentPage" />','delete'"></td>
				<td><input name="list_b" type="button" value="목록" class="submit"
				onClick="javascript:location.href='admingoodslist.action?currentPage=<s:property value="currentPage" />'"></td>
			</tr>
			
		</table>
</center>
</body>
</html>















