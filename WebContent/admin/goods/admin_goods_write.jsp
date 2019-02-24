<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>새 상품 등록</title>
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
<script type="text/javascript">
	function validation() {
		var frm = document.forms[0];

		if (frm.goods_name.value == "") {
			alert("입력해주세요");
			return false;
		} else if (frm.name.value == "") {
			alert("입력해주세요");
			return false;
		} else if (frm.password.value == "") {
			alert("입력해주세요");
			return false;
		} else if (frm.content.value == "") {
			alert("입력해주세요");
			return false;
		}

		return true;
	}

	$(document).ready(function() {
		$("#content").cleditor();
	});
</script>


<!-- 셀렉트박스 관련 자바스크립트 -->
<script>
	function categoryChange(e) {

		var good_a = new Array("마스카라", "아이섀도우", "아이팔레트", "아이라이너", "아이브로우");
		var good_b = new Array("베이스", "프라이머", "블러셔", "셰이딩", "하이라이터", "파운데이션",
				"파우더");
		var good_c = new Array("립스틱", "립팔레트", "틴트", "립락커");
		var target = document.getElementById("goods_type2");

		if (e.value == "Eyes")
			var d = good_a;
		else if (e.value == "Face")
			var d = good_b;
		else if (e.value == "Lip")
			var d = good_c;

		target.options.length = 0;

		for (x in d) {
			var opt = document.createElement("option");
			opt.value = d[x];
			opt.innerHTML = d[x];
			target.appendChild(opt);
		}
	}
</script>

</head>
<body>
<center>
	<s:if test="resultClass == NULL">
		<table width="80%" border="0" cellspacing="0" cellpadding="2">
			<tr>
				<td align="center" class="text01 formbar"><h2>상품 등록</h2></td>
			</tr>
		</table>
		<form name="signform" action="admingoodswrite.action"
			method="post" enctype="multipart/form-data"
			onsubmit="return validation();">
	</s:if>

	<s:else>
		<table width="60%" border="0" cellspacing="0" cellpadding="2">
			<tr>
				<td align="center" class="text01 formbar"><h2>상품 수정</h2></td>
			</tr>
		</table>
		<form action="admingoodsmodify.action" method="post"
			enctype="multipart/form-data">
			<s:hidden name="goods_no" value="%{resultClass.goods_no}" />
			<s:hidden name="currentPage" value="%{currentPage}" />
			<s:hidden name="old_file" value="%{resultClass.goods_savfile}" />
	</s:else>

	<table width="600" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="right" colspan="2"><font color="#FF0000">*</font>는 필수
				입력사항입니다.</td>
		</tr>

		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td width="150" bgcolor="#F4F4F4"><font color="#FF0000">*</font>
				상품명</td>
			<td width="500" class="tdstyle2"><s:textfield name="goods_name"
					theme="simple" value="%{resultClass.goods_name}"
					cssStyle="width:370px" maxlength="50" /></td>
		</tr>

		<tr>
			<td width="150" bgcolor="#F4F4F4"><font color="#FF0000">*</font>
				브랜드명</td>
			<td width="500" class="tdstyle2">
			<select name="goods_bname"
				id="goods_bname">
					<option>---------------</option>
					<option value="ETUDEHOUSE">ETUDEHOUSE</option>
					<option value="LANEIGE">LANEIGE</option>
					<option value="LUNA">LUNA</option>
					<option value="TONYMORY">TONYMORY</option>
					<option value="WLAB">WLAB</option>
			</select></td>
			
		</tr>

		<tr>
			<td width="150" bgcolor="#F4F4F4"><font color="#FF0000">*</font>
				상품 색상</td>
			<td width="500" class="tdstyle2"><s:textfield name="goods_color"
					theme="simple" value="%{resultClass.goods_color}"
					cssStyle="width:370px" maxlength="2000" /></td>
		</tr>
		<tr>
			<td width="150" bgcolor="#F4F4F4"><font color="#FF0000">*</font>
				상품 가격</td>
			<td width="500" class="tdstyle2"><s:textfield name="goods_price"
					theme="simple" value="%{resultClass.goods_price}"
					cssStyle="width:370px" maxlength="50" /></td>
		</tr>

		<tr>
			<td width="150" bgcolor="#F4F4F4"><font color="#FF0000">*</font>
				상품 재고</td>
			<td width="500" class="tdstyle2"><s:textfield
					name="goods_totalcnt" theme="simple"
					value="%{resultClass.goods_totalcnt}" cssStyle="width:370px"
					maxlength="50" /></td>
		</tr>

		<!-- 2단 셀렉트박스  -->
		<tr>
			<td width="150" bgcolor="#F4F4F4"><font color="#FF0000">*</font>
				상품 카테고리</td>

			<td><select name="goods_type1" onchange="categoryChange(this)">
					<option>-----</option>
					<option value="Eyes">Eyes</option>
					<option value="Face">Face</option>
					<option value="Lip">Lip</option>
			</select> <select name="goods_type2" id="goods_type2">
					<option>--------</option>
			</select></td>
			

		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상품 내용</td>
			<td class="tdstyle2"><s:textarea name="goods_content"
					theme="simple" value="%{resultClass.goods_content}" cols="50"
					rows="10" /></td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상품메인사진</td>
			<td class="tdstyle2"><s:file label="File1" name="uploads"
					theme="simple" /></td>
		</tr>

		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진1</td>
			<td class="tdstyle2"><s:file label="File2" name="uploads"
					theme="simple" /></td>

		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진2</td>
			<td class="tdstyle2"><s:file label="File3" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진3</td>
			<td class="tdstyle2"><s:file label="File4" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진4</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진5</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진6</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진7</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진8</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진9</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진10</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진11</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진12</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진13</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진14</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진15</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진16</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진17</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진18</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진19</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font> 상세사진20</td>
			<td class="tdstyle2"><s:file label="File5" name="uploads"
					theme="simple" />
		</tr>
		

		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td height="10" colspan="2"></td>
		</tr>

		<tr>
			<td align="right" colspan="2"><input name="submit" type="submit"
				value="작성완료" class="submit"> <input name="list"
				type="button" value="목록" class="hreflink"
				onClick="javascript:location.href='admingoodslist.action?currentPage=<s:property value="currentPage" />'">
			</td>
		</tr>

	</table>
	</form>
</center>
</body>
</html>