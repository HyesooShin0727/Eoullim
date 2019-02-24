<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>쿠폰상세보기</title>
<link rel="stylesheet" href="/Eoulim/notice/common/css/css.css"
	type="text/css">

<script type="text/javascript">
	function open_win_noresizable(url, name) {
		var oWin = window
				.open(url, name,
						"scrollbars=no, status=no, resizable=no, width=600, height=500");
	}
</script>
</head>
<body>
	<table width="100%" border="0" cellspacing="0" cellpadding="2">
		<tr>
			<td align="center"><h2>쿠폰 상세보기</h2></td>
		</tr>
		<tr>
			<td height="20"></td>
		</tr>
	</table>
	<table width="100%" border="0" cellspacing="0" cellpadding="0">
		<tr bgcolor="#777777">
			<td colspan="2" height="1"></td>
		</tr>
		<tr>
			<td width="100" bgcolor="#F4F4F4">쿠폰명</td>
			<td width="500" bgcolor="#FFFFFF">&nbsp;&nbsp;
			<s:property value="resultClass.coupon_name" />
			</td>
		</tr>
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		<tr>
			<td bgcolor="#F4F4F4">쿠폰 사용 가능 금액</td>
			<td bgcolor="#FFFFFF">&nbsp;&nbsp;
			<s:property value="resultClass.coupon_price" />
			</td>
		</tr>
		
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4">쿠폰 타입</td>
			<td bgcolor="#FFFFFF">&nbsp;&nbsp;
			<s:if test = "resultClass.coupon_type == 1">
				가격할인
				</td>
				</tr>
			
				<tr bgcolor="#777777">
					<td height="1" colspan="2"></td>
				</tr>
			
				<tr>
					<td bgcolor="#F4F4F4">할인 가격</td>
					<td bgcolor="#FFFFFF">&nbsp;&nbsp;
					<s:property value = "resultClass.coupon_discash"/>원
					</td>
				</tr>
			</s:if>
			<s:elseif test = "resultClass.coupon_type == 2">
				퍼센트할인
			</td>
			</tr>
			
			<tr bgcolor="#777777">
				<td height="1" colspan="2"></td>
			</tr>
			
			<tr>
				<td bgcolor="#F4F4F4">할인율</td>
				<td bgcolor="#FFFFFF">&nbsp;&nbsp;
				<s:property value = "resultClass.coupon_disrate"/>%
				</td>
			</tr>
			</s:elseif>

		<tr bgcolor="#777777">
			<td colspan="2" height="1"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4">쿠폰 발급일</td>
			<td bgcolor="#FFFFFF">&nbsp;&nbsp;
			<s:property value="resultClass.coupon_startdate" />
			</td>
		</tr>
		
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
		
		<tr>
			<td bgcolor="#F4F4F4">쿠폰 만료일</td>
			<td bgcolor="#FFFFFF">&nbsp;&nbsp;
			<s:property value="resultClass.coupon_enddate" />
			</td>
		</tr>
		
		<tr bgcolor="#777777">
			<td height="1" colspan="2"></td>
		</tr>
	
		<tr>
			<td align="right" colspan="2">
				<input name="list" type="button" value="목록" class="inputb"
				onClick="javascript:location.href='CouponBoxAction.action?currentPage=<s:property value="currentPage" />'">

			</td>
		</tr>
	</table>
</body>
</html>