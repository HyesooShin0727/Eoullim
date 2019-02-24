<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Wishlist</title>
<link rel="stylesheet" href="/Eoulim/notice/common/css/css.css"
	type="text/css">
</head>
<script language="javascript">
	function sele(n) {
		if (n == 0) { //삭제
			
			document.form.action = "wishlist_checkdelete.action"
		}else if (n == 1) {//장바구니 : insert 필요 
			
			document.form.action = "wishlist_basketlist.action"
		}
		return false;
	}

	function chkBox(bool) { // 전체선택/해제 
		var obj = document.getElementsByName("chk");
		for (var i = 0; i < obj.length; i++)
			obj[i].checked = bool;
		return itemSum(this.form);
		alert("1.");
	}


</script>
<body>
<form name="form">
	<table width="600" border="0" cellspacing="0" cellpadding="2">
		<tr>
			<td height="30"></td>
		</tr>
		<tr>
			<td align="left"><h2>MY Wishlist</h2></td>
		</tr>
		<tr>
			<td height="50"></td>
		</tr>
	</table>


	<table width="1000" border="0" cellspacing="0" cellpadding="2">
		<tr>
			<td height="20"></td>
		</tr>
		<tr align="center" bgcolor="#F9F9F9">
			<td width="50"><input type="checkbox" value=""
					class="checkbox" onclick=chkBox(this.checked) checked /></td>
			<td width="130"><strong>IMAGE</strong></td>
			<td width="300"><strong>PRODUCT INFO</strong></td>
			<td width="80"><strong>TOTAL</strong></td>
			
		</tr>


		<s:iterator value="list" status="stat">
			<!-- http://localhost:8080/StrutsBoard/viewAction.action?no=2&currentPage=1 -->
			<s:url id="viewURL" action="GoodsView">
				<s:param name="goods_no">
					<s:property value="W_GOODS_NO" />
				</s:param>
				<s:param name="currentPage">
					<s:property value="currentPage" />
				</s:param>
			</s:url>

			<tr  align="center">
				<td width="50"><input type="checkbox" name="chk" checked value="<s:property value="W_NO"/>"/></td>
				<td><img src="/3T/upload/${W_GOODS_IMG}"
					width="50"></td>
				<td align="center"><s:a href="%{viewURL}"><s:property value="W_GOODS_NAME" /></s:a></td>
				<td align="center"><s:property value="W_GOODS_AMOUNT" /></td>
			</tr>


		</s:iterator>

		<s:if test="list.size() <= 0">
			<tr bgcolor="#FFFFFF" align="center">
				<td colspan="4">등록된 게시물이 없습니다.</td>
			</tr>

		</s:if>

		<tr align="right">
			<td width="80">선택한상품을</td>
			<td align="left"><input name="submit" type="submit"
				value="삭제하기" style="background-color: #B8B8B8;"  onclick="sele(0);"/></td>
			<td align="center"><input name="submit" type="submit"
				value="장바구니 담기" style="background-color: #B8B8B8;" onclick="sele(1);"/>
			</td>
			
		</tr>
		<tr>
			<td height="20"></td>
		</tr>
   		<tr height="50" align="center">
    		<td colspan="4"><s:property value="pagingHtml"  escape="false" /></td>
    	   </tr>
			
		
		</table>
		</form>
</body>
</html>











