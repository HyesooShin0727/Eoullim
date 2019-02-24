function goPage(page){
	document.sFrm.page.value = page;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function searchKeyword(){
	document.sFrm.page.value = 1;
	document.sFrm.submit();
}
function searchKeyword2(){
	document.sFrm2.page.value = 1;
	document.sFrm2.submit();
}
function changeValue(val1,val2){
	jQuery("input[name='"+val2+"']").val(val1);
}

function choiceColor(){
	var colors;
	colors = jQuery("#colorTemp").val();
	document.sFrm.colorVal.value = colors;
	document.sFrm.page.value = 1;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}
/*
function choicePrice(){
	var price1, price2;
	price1 = jQuery("#price1").val();
	price2 = jQuery("#price2").val();
	document.sFrm.page.value = 1;
	document.sFrm.priceS.value = price1;
	document.sFrm.priceE.value = price2;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}
*/
function changePrice(val){
	document.sFrm.page.value = 1;
	document.sFrm.priceVal.value = val;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function changeSort(val){
	document.sFrm.page.value = 1;
	document.sFrm.sortVal.value = val;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function changeGubun(val){
	document.sFrm.page.value = 1;
	document.sFrm.gubunVal.value = val;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function changeCount(val){
	document.sFrm.page.value = 1;
	document.sFrm.countVal.value = val;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function changeViewAll(val){
	document.sFrm.page.value = 1;
	document.sFrm.viewAll.value = val;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function choiceColorPrice(){
	var price11, price22;
	price11 = jQuery("#price11").val();
	price22 = jQuery("#price22").val();
	document.sFrm.priceS.value = price11;
	document.sFrm.priceE.value = price22;
	var colors;
	colors = jQuery("#colorTemp2").val();
	document.sFrm.colorVal.value = colors;
	document.sFrm.page.value = 1;
	//document.sFrm.sWord.value = unescape(document.sFrm.sWord.value);
	document.sFrm.submit();
}

function lnb_mobile_category(mode,num,cateVal) {
	var formStr = "";
	var whereName = "";
	randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);
	if (num == 1) {
		whereName = "#lnb1ul";
		whereUrl = "/product/LNB/lnb_ajax_category1.asp";
		jQuery("#lnb1ul").html("");
		jQuery("#lnb1ul").parent().find(".select_a").html("대분류");
	}
	if (num == 2) {
		whereName = "#lnb2ul";
		whereUrl = "/product/LNB/lnb_ajax_category2.asp";
		jQuery("#lnb2ul").html("");
		jQuery("#lnb2ul").parent().find(".select_a").html("중분류");
		jQuery("#lnb3ul").html("");
		jQuery("#lnb3ul").parent().find(".select_a").html("아이템");
	}
	if (num == 3) {
		whereName = "#lnb3ul";
		whereUrl = "/product/LNB/lnb_ajax_category3.asp";
		jQuery("#lnb3ul").html("");
		jQuery("#lnb3ul").parent().find(".select_a").html("아이템");
	}

	jQuery.ajax({
		type: "POST",
		data: "mode="+mode+"&no="+cateVal+"&randNo="+ randNo,
		url: whereUrl,
		dataType : "HTML",
		success: function(data) {
			formStr = data;
			if (mode == "title") {
				jQuery(whereName).parent().find(".select_a").html(formStr);
			}
			else {
				jQuery(whereName).html(formStr);
			}
		},
		error: function(e) {
			//alert("e");
		}
	});
}

function lnb_mobile_brand(brandVal,genderVal) {
	var formStr = "";
	randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);
	jQuery.ajax({
		type: "POST",
		data: "BrandCodeNo="+brandVal+"&gender="+genderVal+"&randNo="+ randNo,
		url: "/product/LNB/lnb_ajax_brand.asp",
		dataType : "HTML",
		success: function(data) {
			formStr = data;
			if (genderVal == "") {
				jQuery("#lnb1ul").html(formStr);
			}
			else {
				jQuery("#lnb2ul").html(formStr);
				jQuery("#cateTag1").attr("href","javascript:void(0);");
			}
		},
		error: function(e) {
			//alert("e");
		}
	});
}


var xmlHttp = false;

function initXMLHttp()
{
  var xmlHttp = false;

  if (window.XMLHttpRequest) { // Mozilla, Safari,...
     xmlHttp = new XMLHttpRequest();
     if (xmlHttp.overrideMimeType) {
     	// set type accordingly to anticipated content type
        //xmlHttp.overrideMimeType('text/xml');
        xmlHttp.overrideMimeType('text/html');
     }
  } else if (window.ActiveXObject) { // IE
     try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (e) {
        try {
           xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
     }
  }
  if (!xmlHttp) {
     alert('Cannot create XMLHTTP instance');
     return false;
  }
    return xmlHttp;
}


function only_number() {
   if(((event.keyCode<48)||(event.keyCode>57))&&(event.keyCode!=45))
      event.returnValue=false;
}

function PrintComma(srcNumber) {
	var txtNumber = '' + srcNumber;
	var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
	var arrNumber = txtNumber.split('.');
	arrNumber[0] += '.';
	do
	{
		arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
	} while (rxSplit.test(arrNumber[0]));

	if (arrNumber.length > 1)
	{
		return arrNumber.join('');
	}
	else
	{
		return arrNumber[0].split('.')[0];
    }
}

function winTop() {
    window.scrollTo(0, 0);
}

function loginChk() {
	alert('로그인 후 이용해주세요');
	top.location.href = '/member/login.asp?refferUrl=' + escape(location.href);
}

function get_coupon(pno) {
	if (pno == "") {
		//alert("로그인 후 발급 받으실 수 있습니다.");
	} else {
		jQuery.ajax({
			type: "POST",
			url: "/product/get_coupon.asp",
			data: "ProductNo=" + pno,
			dataType : "JSON",
			success: function(data) {
				coupon = data.coupon;
				msg = data.msg;
				if (msg !="") { alert(msg); }
			},
			error: function(e) {
				//alert("e");
			}
		});
	}
}

function checkout(num) {
	OrderCheck = true;

	if (jQuery("#option1Val").length > 0 ) {
		if (document.form1.ProductOption1.value=="") {alert("\n옵션을 선택해 주세요");OrderCheck = false;}
	}

	if (OrderCheck) {
		var val = num;
		var strQuery;

		strQuery = "";
		strQuery = jQuery(":input",document.form1).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;
				dataFrame.location.href = "/product/put_cart_log.asp?" + strQuery;
				var categorys = document.form1.suzzestcategory.value;

				dataFrame.location.href = "/product/put_cart_log.asp?" + strQuery;
				setTimeout(function(){
					if (msg !="") { alert(msg); }
					if (returnurl !="") {
						top.location.href=returnurl;
					}
					else {
						top.location.reload();
					}
				},100)

			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

function AddWishList() {
	OrderCheck = true;

	if (jQuery("#option1Val").length > 0 ) {
		if (document.form1.ProductOption1.value=="") {alert("\n옵션을 선택해 주세요");OrderCheck = false;}
	}

	if (OrderCheck) {
		var val = "wish";
		var strQuery;

		strQuery = "";
		strQuery = jQuery(":input",document.form1).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;

				if (msg !="") { alert(msg); }
				if (returnurl !="") {
					top.location.href=returnurl;
				}
				else {
					//top.location.reload();
				}
			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

function AddToShoppingbag() {
	OrderCheck = true;

	if (jQuery("#option1Val").length > 0 ) {
		if (document.form1.ProductOption1.value=="") {alert("\n옵션을 선택해 주세요");OrderCheck = false;}
	}

	if (OrderCheck) {
		var val = "";
		var strQuery;

		strQuery = "";
		strQuery = jQuery(":input",document.form1).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "addToCartAction.action",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;

				var categorys = document.form1.suzzestcategory.value;
				/*suzzestSet("cart", document.form1.ProductNo.value, {
					"c1" : categorys.substring(0,3),
					"c2" : categorys.substring(3,6),
					"c3" : categorys.substring(6,9)
				});	*/


				dataFrame.location.href = "addCartAction.action" + strQuery;
				setTimeout(function(){
					if (codetype == "add")  {
					    yon = confirm("장바구니에 추가되었습니다.\n\n지금 장바구니를 확인하시겠습니까?");
					    if (yon) {
					    	top.location.href = '/order/cart.asp';
						}
						else {
							return;
						}

						// ACE 카운터 장바구니 추가
						AEC_F_D(jQuery("#ProductNo").val(),'i',jQuery("#ProductQuantity").val());
					}
					if (msg !="") { alert(msg); }
				},100)

			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

function clickOption(elem,val){
	var optText = jQuery(elem).parent().find(".select_a").html();
	var optVal = val;
	if (optVal == undefined) { optVal = ""; }
	if (elem == "#option1Val") {
		jQuery("#option1Val2").parent().find(".select_a").html(optText);
		document.form1.ProductOption1.value = optVal;
	}
	if (elem == "#option1Val2") {
		jQuery("#option1Val").parent().find(".select_a").html(optText);
		document.form1.ProductOption1.value = optVal;
	}
	if (elem == "#Qoption1Val") {
		document.formQ.ProductOption1.value = optVal;
	}

	if (elem == "#option3Val") {
		jQuery("#option3Val2").parent().find(".select_a").html(optText);
		document.form1.ProductOption3.value = optVal;
	}
	if (elem == "#option3Val2") {
		jQuery("#option3Val").parent().find(".select_a").html(optText);
		document.form1.ProductOption3.value = optVal;
	}
	if (elem == "#Qoption3Val") {
		document.formQ.ProductOption3.value = optVal;
	}
}

function clickSize(val){
	jQuery("#ProductSize").val(val);
}

function clickImage(val){
	jQuery(".photo").find("img:eq(0)").attr("src",val);
}
function amountChang(mode, limit){
	var reAMOUNT = parseInt(jQuery("#ProductQuantity").val());

	if(mode == "up"){
		if (limit > 0 && (reAMOUNT + 1) > limit) {
			alert('해당 제품은 '+ limit +'개 이상 주문이 불가능한 제품 입니다.');
			return;
		}
		jQuery("#ProductQuantity").val(reAMOUNT+1);
		jQuery("#ProductQuantity_n").val(reAMOUNT+1);
	}else if(mode =="down"){
		if(reAMOUNT>1){
			jQuery("#ProductQuantity").val(reAMOUNT-1);
			jQuery("#ProductQuantity_n").val(reAMOUNT-1);
		}
	}

	jQuery(".amount").val(parseInt(jQuery("#ProductQuantity").val()));
	reAMOUNT = parseInt(jQuery("#ProductQuantity").val());
	var pprice = parseInt(jQuery("#ProductPrice").val());
	var buytotal = parseInt(parseInt(reAMOUNT) *parseInt(pprice));
	jQuery("#buytotal").html(PrintComma(buytotal) + '원');
	jQuery(".buytotal").html(PrintComma(buytotal) + '원');
}

jQuery(document).ready(function() {
	jQuery(".numeric").css("ime-mode","disabled");
  jQuery(".numeric").keydown(function(e)
  {
   // 키입력에 사용되는 몇몇 키는 허용..delete, backspace, esc 등등
   if (e.keyCode==46 || e.keyCode==8 || e.keyCode==9 || e.keyCode==27 || e.keyCode==13 || (e.keyCode==65 && e.ctrlKey===true) || (e.keyCode>=35 && e.keyCode<=39) ) {
      return;
   }
   else  {
    if(e.shiftKey || (e.keyCode<48 || e.keyCode>57) && (e.keyCode<96 || e.keyCode>105)) {
     //모바일 IE 브라우저의 경우 문자입력시 빈값이 남는다
     if(jQuery(this).val().length == 0) {
      jQuery(this).val('');
     }
			//모바일 크롬 브라우저의 경우 특수문자가 다 0으로 넘어오고  e.preventDefault(); 이벤트 실행이 안되는 버그수정
     if(e.keyCode == 0) {
      jQuery(this).val('');
     }
     else {
			e.preventDefault();
     }
    }
  }});
});



function QamountChang(mode){
	var reAMOUNT = parseInt(jQuery("#QProductQuantity").val());
	if(mode == "up"){
		jQuery("#QProductQuantity").val(reAMOUNT+1);
	}else if(mode =="down"){
		if(reAMOUNT>1){
			jQuery("#QProductQuantity").val(reAMOUNT-1);
		}
	}
}

function QAddToShoppingbag() {
	OrderCheck = true;

	if (jQuery("#Qoption1Val").length > 0 ) {
		if (document.formQ.ProductOption1.value=="") {alert("\n옵션을 선택해 주세요");OrderCheck = false;}
	}

	if (OrderCheck) {
		var val = "";
		var strQuery;

		strQuery = "";
		strQuery = jQuery(":input",document.formQ).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;
				/*
				var categorys = document.formQ.suzzestcategory.value;
				suzzestSet("cart", document.formQ.ProductNo.value, {
					"c1" : categorys.substring(0,3),
					"c2" : categorys.substring(3,6),
					"c3" : categorys.substring(6,9)
				});
				*/
				dataFrame.location.href = "/product/put_cart_log.asp?" + strQuery;
				setTimeout(function(){
					if (codetype == "add")  {
					    yon = confirm("장바구니에 추가되었습니다.\n\n지금 장바구니를 확인하시겠습니까?");
					    if (yon) {
					    	top.location.href = '/order/cart.asp';
						}
						else {
							return;
						}
					}
					if (msg !="") { alert(msg); }
				},100)
			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}

function Qcheckout(num) {
	OrderCheck = true;

	if (jQuery("#Qoption1Val").length > 0 ) {
		if (document.formQ.ProductOption1.value=="") {alert("\n옵션을 선택해 주세요");OrderCheck = false;}
	}

	if (OrderCheck) {
		var val = num;
		var strQuery;

		strQuery = "";
		strQuery = jQuery(":input",document.formQ).serialize();

		jQuery.ajax({
			type: "POST",
			data: "mode="+ val + "&" + strQuery + "&" + new Date().getTime(),
			url: "/product/put_cart_behind.asp",
			dataType : "JSON",
			success: function(data) {
				codetype = data.codetype;
				msg = data.msg;
				returnurl = data.returnurl;
				/*
				var categorys = document.formQ.suzzestcategory.value;
				suzzestSet("cart", document.formQ.ProductNo.value, {
					"c1" : categorys.substring(0,3),
					"c2" : categorys.substring(3,6),
					"c3" : categorys.substring(6,9)
				});
				*/
				//suzzestSet("cart", document.formQ.ProductNo.value, document.formQ.CodeTypeNo.value);

				dataFrame.location.href = "/product/put_cart_log.asp?" + strQuery;
				setTimeout(function(){
					if (msg !="") { alert(msg); }
					if (returnurl !="") {
						top.location.href=returnurl;
					}
					else {
						top.location.reload();
					}
				},100)


			},
			error: function(e) {
				//alert("e");
			}
		});
	}else
		return;
}