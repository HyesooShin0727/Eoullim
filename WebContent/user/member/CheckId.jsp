<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<?xml version="1.0" encoding="utf-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<link href="/Eoullim/user/member/style.css" rel="stylesheet" type="text/css">
<head>
<script type="text/javascript">
	function windowclose(){
		opener.document.Reg_form.member_id.value="${member_id}";
		self.close();
	}
	
	function check() {
		var f=document.checkId; // 문서.Form name="";
		if(f.member_id.value==""){
			alret("닉네임을 입력해주세요.");
			f.member_id.focus();
			return false;
		}
		if(f.member_id.value.length<2){
			alret("최소 2자리 이상 입력해주세요");
			f.member_id.focus();
			return false;
		}
	}
</script>
</head>
<body bgcolor=#f5f5f5>
	<s:if test="chkno==1">
		<form name="checkId" action="CheckIdAction.action" method="post" onsubmit="return check()">
		<table width=400 border=0 cellspacing=0 cellpadding=5 class="btable">
			<tr>
				<td align= "center">
				<br/>
				<br/>
				<br/>
				<br/>
					<font>${member_id}는 이미 사용중 입니다.</font><br/>
					<font>다른 ID를 선택하세요!</font><br/>
					<br/>
					<br/>
					<input type="text" size="10" maxlength="20" name="member_id" />
					<input type="submit" value="중복확인">
				</td>
			</tr>
		</table>
		</form>
	</s:if>
	
	<s:else>
		<table width="400 border=0 cellspacing=0 cellpadding=5">
			<tr>
				<td align=center>
				<br/>
				<br/>
				<br/>
				<br/>
					입력하신<b>${member_id}</b>은(는)</br>
				사용할 수 있는 닉네임입니다.</font>
				<br/><br/>
				<input type="button" value="닫기" onclick="windowclose()"/>
				</td>
			</tr>
		</table>
	</s:else>
</body>
</html>