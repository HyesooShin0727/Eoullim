<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>쿠폰 생성</title>
<link rel="stylesheet" href="/Eoulim/notice/common/css/css.css" type="text/css">
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" /> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>  
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>  
<SCRIPT type="text/javascript">
	function validation() {

		var frm = document.forms(0);

		if (frm.subject.value == "") {
			alert("제목을 입력해주세요.");
			return false;
		}

		else if (frm.content.value == "") {
			alert("내용을 입력해주세요.");
			return false;
		}

		return true;
	}
	
	function chktype(oElement){
		if(oElement.value == '1'){
			document.forms[0].coupon_discash.disabled=false;
			document.forms[0].coupon_disrate.disabled=true;
			document.getElementById("disrate").value = 0;
		}else if(oElement.value == '2'){
			document.forms[0].coupon_disrate.disabled=false;
			document.forms[0].coupon_discash.disabled=true;
			document.getElementById("discash").value = 0;
		}else if(oElement.value == '0'){
			document.forms[0].coupon_disrate.disabled=true;
			document.getElementById("disrate").value = 0;
			document.forms[0].coupon_discash.disabled=true;
			document.getElementById("discash").value = 0;
		}
	}
	
	$(function() {
	    $( "#datepicker" ).datepicker({
	    	dateFormat: 'yy-mm-dd'
	    });
	});
</SCRIPT>

</head>
<body>
	<s:if test="resultClass == NULL">
		<table width="100%" border="0" cellspacing="0" cellpadding="2">
			<tr>
				<td align="center"><h2>쿠폰 작성</h2></td>
			</tr>
		</table>
		<form action="CouponWriteAction.action" method="post"
			enctype="multipart/form-data" onsubmit="return validation();">
			<s:hidden name="currentPage" value="%{currentPage}" />
		</s:if>
	<s:else>
		<table width="100%" border="0" cellspacing="0" cellpadding="2">
			<tr>
				<td align="center"><h2>쿠폰 수정</h2></td>
			</tr>
		</table>
		<form action="CouponModifyAction.action" method="post"
			enctype="multipart/form-data">
			<s:hidden name="coupon_no" value="%{resultClass.coupon_no}" />
			<s:hidden name="currentPage" value="%{currentPage}" />
	</s:else>
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td align="right" colspan="2"><font color="#FF0000">*</font>는 필수
				입력사항입니다.</td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		<tr>
			<td width="100" bgcolor="#F4F4F4"><font color="#FF0000">*</font>쿠폰명</td>
			<td width="500" bgcolor="#FFFFFF"><s:textfield name="coupon_name"
					theme="simple"  value="%{resultClass.coupon_name}"
					cssStyle="width:370px" maxlength="50" /></td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font>쿠폰 사용 가능 가격</td>
			<td bgcolor="#FFFFFF"><s:textfield name="coupon_price" theme="simple"  value="%{resultClass.coupon_price}"
					 cssStyle="width:100px"
					maxlength="20"/></td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font>쿠폰 타입</td>
			<td bgcolor="#FFFFFF">
			<select name="coupon_type" id="type.select" onChange="chktype(this)">
						<option value="0" selected> 선택하세요</option>
						<option value="1">가격할인</option>
						<option value="2">퍼센트할인</option>
			</select>
			</td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>

		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font>할인률</td>
			<td bgcolor="#FFFFFF"><s:textfield id = "disrate" name="coupon_disrate" theme="simple" value="%{resultClass.coupon_disrate}"
					 cssStyle="width:100px"
					maxlength="20" disabled = "true"/></td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font>할인 가격</td>
			<td bgcolor="#FFFFFF"><s:textfield id = "discash" name="coupon_discash" theme="simple" value="%{resultClass.coupon_discash}"
					 cssStyle="width:100px"
					maxlength="20" disabled = "true"/></td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4"><font color="#FF0000">*</font>쿠폰 만료일</td>
			<td bgcolor="#FFFFFF"><s:textfield id="datepicker" name = "coupon_enddate" theme ="simple" value = "%{resultClass.coupon_enddate}"
			 cssStyle="width:100px" maxlength="20"/></td>
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
			<td align="right" colspan="2"><input name="submit" type="submit"
				value="작성완료" class="inputb"> <input name="list"
				type="button" value="목록" class="inputb"
				onClick="javascript:location.href='CouponListAction.action?currentPage=<s:property value="currentPage"/>'">
			</td>
		</tr>
	</table>
</body>
</html>