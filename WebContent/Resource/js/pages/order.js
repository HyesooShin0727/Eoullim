(function (ssq) {
    var struc = {}, config = {}, listener = {};
    var _mainImgs, mainListSub;
    ssq(document).ready(function () { struc.init() });
    function trace(a) { var b = ""; for (var i = 0; i < arguments.length; i++) { if (i > 0) b += ", "; b += arguments[i]; } try { console.log(b); } catch (e) { } }
    struc = {
        init: function () {
            struc.regist();
            struc.pageMethod();
            listener.start();
        },
        regist: function () {

        },
        pageMethod: function () {
            relatedSlide();
        }
    };
    listener = {
        start: function () {
            ssq(window).bind("resize", listener.resizePage); listener.resizePage();
            ssq("a.scroll_buttom").on("click", function (e) { e.preventDefault(); goScroll(ssq(this).attr("href")); });
            ssq("a[href=#]").on("click", function (e) {
                e.preventDefault();
            })
        },
        resizePage: function (e) {

        }
    };

    function relatedSlide() {
        jQuery('.recommend_slide > div')
			.on('init', function (e, slick) {
			    if (ssq(".slick-dots").size() > 0) ssq("#btnControls").css("display", "inline");
			    else ssq("#btnControls").css("display", "none");
			})
			.on('breakpoint', function (e, slick, breakpoint) {
			    if (ssq(".slick-dots").size() > 0) ssq("#btnControls").css("display", "inline");
			    else ssq("#btnControls").css("display", "none");
			});
        jQuery('.recommend_slide > div').slick({
            infinite: true,
            dots: true,
            arrows: false,
            //fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
				{
				    breakpoint: 1200,
				    settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3
				    }
				},
				{
				    breakpoint: 768,
				    settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				    }
				}
            ]
        });
        jQuery('#btnControls').on('click', function () {
            var controlsBtn = jQuery(this);
            if (controlsBtn.hasClass('paused')) {
                jQuery('.recommend_slide > div').slick('slickPlay');
                controlsBtn.removeClass('paused');
                controlsBtn.addClass('play');
            } else {
                jQuery('.recommend_slide > div').slick('slickPause');
                controlsBtn.removeClass('play');
                controlsBtn.addClass('paused');
            }
        });
    }
})(jQuery);
var pickPop;
function pickPopup() {
    var formStr = "";
    formStr += '<div class="pick_popup">';
    formStr += '	<div class="popup_inner">';
    formStr += '		<p class="pick_info">';
    formStr += '			<strong>강남점</strong>';
    formStr += '			<span>서초구 강남대로</span>';
    formStr += '			<span>00-0000-0000</span>';
    formStr += '		</p>';
    formStr += '		<div class="pick_map"><img src="/images/_temp/img_map01.jpg" alt="임시 이미지" class="tm_hidden"><img src="/images/_temp/img_map01_m.jpg" alt="임시 이미지" class="d_hidden"></div>';
    formStr += '	</div>';
    formStr += '	<button class="close" id="closeBtn1">팝업닫기</button>';
    formStr += '</div>';

    pickPop = new CoverLayer(formStr, {
        bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
        bg_opacity: 0.4, 		// 백그라운드 투명도. 기본값:0.75
        close_btn_id: "closeBtn1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
        z_index: 99998, 			// 레이어의 z-index 값 기본값:99990
        cast_speed: 500,		// 레이어 생성 트위닝 속도
        close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
        scroll_fix: false
        //align_x : "left",			// "center"(기본값), "left", "right"
        //align_x_value : 50,				// 정수, 0(기본값)
        //align_y : "top",			// "middle"(기본값), "left", "right"
        //align_y_value : 50				// 정수, 0(기본값)
    });
};
/* 주문자정보 수정 */
var addrAddPop;
function ordererPopup() {
    var formStr = "";
    formStr += '	<div class="orderer_popup">';
    formStr += '		<h2 class="popup_title">주문자정보 수정</h2>';
    formStr += '		<form>';
    formStr += '			<fieldset>';
    formStr += '				<legend class="hidden">주문자정보 수정 폼</legend>';
    formStr += '					<p class="txt">단체/회사 이름으로 보내거나 선물하시는 경우<br class="d_hidden t_hidden"/> 보내는 분의<br class="m_hidden"/>이름을 추가로 나타낼 수 있습니다.</p>';
    formStr += '					<table class="popup_table2">';
    formStr += '						<caption class="hidden">보내시는 분</caption>';
    formStr += '						<tbody>';
    formStr += '							<tr>';
    formStr += '								<th><label for="">보내시는 분</label></th>';
    formStr += '								<td><input type="text" class="input_size1"/></td>';
    formStr += '							</tr>';
    formStr += '						</tbody>';
    formStr += '					</table>';
    formStr += '					<div class="btn_box1"><a href="#" class="btn_style8">수정하기</a></div>';
    formStr += '			</fieldset>';
    formStr += '		</form>';
    formStr += '		<div class="close"><button id="closeBtn2"><img src="/images/btn/btn_close4.png" alt="닫기" /></button></div>';
    formStr += '	</div>';

    addrAddPop = new CoverLayer(formStr, {
        bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
        bg_opacity: 0.75, 		// 백그라운드 투명도. 기본값:0.75
        close_btn_id: "closeBtn2", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
        z_index: 99999, 			// 레이어의 z-index 값 기본값:99990
        cast_speed: 500,		// 레이어 생성 트위닝 속도
        close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
        scroll_fix: false
        //align_x : "left",			// "center"(기본값), "left", "right"
        //align_x_value : 50,				// 정수, 0(기본값)
        //align_y : "top",			// "middle"(기본값), "left", "right"
        //align_y_value : 50				// 정수, 0(기본값)
    }
   );
}


/*주문자정보 수정*/
var ordererchange;
function ordererchange() {
    var formStr = "";
    formStr += '	<div class="join_popup">';
    formStr += '		<h2 class="popup_title">주문자정보 수정</h2>';
    formStr += '		<form>';
    formStr += '			<fieldset class="join_field">';
    formStr += '				<legend class="hidden">주문자정보 수정 폼</legend>';
    formStr += '				<div class="check_box">';
    formStr += '					<label for="idCheck1">보내시는 분</label>';
    formStr += '					<input type="text" id="idCheck1" class="id_input" placeholder="styleship" />';
    formStr += '					<a href="#" class="btn_style5">중복확인</a>';
    formStr += '				</div>';
    formStr += '			</fieldset>';
    formStr += '		</form>';
    formStr += '		<div class="close"><button id="closeBtn1"><img src="/images/btn/btn_close4.png" alt="닫기" /></button></div>'
    formStr += '	</div>';

    idCheckPop1 = new CoverLayer(formStr, {
        bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
        bg_opacity: 0.75, 		// 백그라운드 투명도. 기본값:0.75
        close_btn_id: "closeBtn1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
        z_index: 99999, 			// 레이어의 z-index 값 기본값:99990
        cast_speed: 500,		// 레이어 생성 트위닝 속도
        close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
        scroll_fix: false
        //align_x : "left",			// "center"(기본값), "left", "right"
        //align_x_value : 50,				// 정수, 0(기본값)
        //align_y : "top",			// "middle"(기본값), "left", "right"
        //align_y_value : 50				// 정수, 0(기본값)
    }
   );
}



function amountChang_cart(mode, val, limit) {
    var reAMOUNT = parseInt(jQuery("#ProductQuantity" + val).val());
    if (mode == "up") {
        if (limit > 0 && (reAMOUNT + 1) > limit) {
            alert('해당 제품은 ' + limit + '개 이상 주문이 불가능한 제품 입니다.');
            return;
        }
        jQuery("#ProductQuantity" + val).val(reAMOUNT + 1);
    } else if (mode == "down") {
        if (reAMOUNT > 1) {
            jQuery("#ProductQuantity" + val).val(reAMOUNT - 1);
        }
    }
}

function itemSum() {
    var sum = 0;
    var besongbi = 0;
    var total = 0;
    var count = form1.checkwish.length;
    var fee = form1.deliveryFee.value;
    var freelimit = form1.deliveryFree.value;

    if (count == undefined) {
        if (form1.checkwish.checked == true) {
            aaa = jQuery("input[name=checkwish]").attr("val");
            sum += parseInt(aaa, 10);
        }

        if (parseInt(sum, 10) >= parseInt(freelimit, 10)) {
            besongbi = 0;
        }
        else {
            besongbi = fee;
            if (parseInt(sum, 10) == 0) {
                besongbi = 0;
            }
            total = parseInt(sum, 10) + parseInt(besongbi, 10);
        }
    } else {
        for (var i = 0; i < count; i++) {
            if (form1.checkwish[i].checked == true) {
                aaa = jQuery("input[name=checkwish]").eq(i).attr("val");
                sum += parseInt(aaa, 10);
            }
        }

        if (parseInt(sum, 10) >= parseInt(freelimit, 10)) {
            besongbi = 0;
        }
        else {
            besongbi = fee;
            if (parseInt(sum, 10) == 0) {
                besongbi = 0;
            }
        }

        total = parseInt(sum, 10) + parseInt(besongbi, 10);
    }

    tempText = PrintComma(total) + "원";
    tempText2 = PrintComma(besongbi) + "원";
    tempText3 = PrintComma(sum) + "원";
    jQuery("#totalPrice").html(tempText);
    jQuery("#deliveryPrice").html(tempText2);
    jQuery("#checkPrice").html(tempText3);

}

function PrintComma(srcNumber) {
    var txtNumber = '' + srcNumber;
    var rxSplit = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
    var arrNumber = txtNumber.split('.');
    arrNumber[0] += '.';
    do {
        arrNumber[0] = arrNumber[0].replace(rxSplit, '$1,$2');
    } while (rxSplit.test(arrNumber[0]));

    if (arrNumber.length > 1) {
        return arrNumber.join('');
    }
    else {
        return arrNumber[0].split('.')[0];
    }
}

function useCoupon_D(val) {
    xmlhttp = initXMLHttp();

    var obj = document.getElementById("mc_layer" + val);
    obj.innerHTML = "<img src=/images/waiting.gif>";

    randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);

    xmlhttp.open("GET", "/order/pay_d_coupon.asp?facNo=" + val + "&randNo=" + randNo);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnval;
            returnval = xmlhttp.responseText;

            var index1, page;
            index1 = returnval.indexOf("|");
            TEXT1 = returnval.substring(0, index1);

            var returnWords, index2, pagecount;
            returnWords = returnval.substring(returnval.indexOf("|") + 1);
            index2 = returnWords.indexOf("|");
            TEXT2 = returnWords.substring(0, index2);

            if (TEXT1 == 0)	// success!
            {
                document.user.transpay.value = parseInt(document.user.transpay.value, 10) - parseInt(TEXT2, 10);
                document.user.Delivery_coupon.value = "Y";
                document.getElementById("deli_price" + val).innerHTML = "0원";
                document.getElementById("transprice").innerHTML = document.user.transpay.value;
                obj.innerHTML = "무료배송 쿠폰적용됨";
                recalc_aj();
            }
            else			// fail!
            {
                process(TEXT2);
                obj.innerHTML = "<a href=\"javascript:useCoupon_D('" + val + "');void(0);\" class=\"btn_coupon\">무료배송쿠폰 사용하기</a>"
                recalc_aj();
            }
        }
    }
    xmlhttp.send(null);
}

/*나의 배송주소록*/
var myAddrPop1;
function myAddrPopup1() {
    var formStr = "";
    jQuery.ajax({
        type: "POST",
        url: "/order/pop_delivery.asp",
        dataType: "HTML",
        success: function (data) {
            formStr = data;

            myAddrPop1 = new CoverLayer(formStr, {
                bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
                bg_opacity: 0.75, 		// 백그라운드 투명도. 기본값:0.75
                close_btn_id: "closeBtn1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
                z_index: 99998, 			// 레이어의 z-index 값 기본값:99990
                cast_speed: 500,		// 레이어 생성 트위닝 속도
                close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
                scroll_fix: false
                //align_x : "left",			// "center"(기본값), "left", "right"
                //align_x_value : 50,				// 정수, 0(기본값)
                //align_y : "top",			// "middle"(기본값), "left", "right"
                //align_y_value : 50				// 정수, 0(기본값)
            });
        },
        error: function (e) {
            //alert("e");
        }
    });
}

/*배송지 추가*/
var addrAddPop1;
function addrAddPopup1(val) {
    var formStr = "";
    jQuery.ajax({
        type: "POST",
        data: "addrNo=" + val,
        url: "/order/pop_delivery_write.asp",
        dataType: "HTML",
        success: function (data) {
            formStr = data;
            addrAddPop1 = new CoverLayer(formStr, {
                bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
                bg_opacity: 0.75, 		// 백그라운드 투명도. 기본값:0.75
                close_btn_id: "closeBtn2", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
                z_index: 99998, 			// 레이어의 z-index 값 기본값:99990
                cast_speed: 500,		// 레이어 생성 트위닝 속도
                close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
                scroll_fix: false
                //align_x : "left",			// "center"(기본값), "left", "right"
                //align_x_value : 50,				// 정수, 0(기본값)
                //align_y : "middle"		// "middle"(기본값), "left", "right"
                //align_y_value : 50				// 정수, 0(기본값)
            });
        },
        error: function (e) {
            //alert("e");
        }
    });
}

/*배송지 수정*/
var addrAddPop2;
function addrAddPopup2(val) {
    var formStr = "";

    var addrVal = jQuery("input[name='AddressNo']:checked").val();

    if (addrVal == undefined || addrVal == '') {
        if (document.addr.AddressNo2.value != '') {
            addrVal = jQuery("#AddressNo2 option:selected").val();
        }
    }

    if (addrVal == undefined || addrVal == '') {
        alert("주소를 선택해 주세요");
    }
    else {

        jQuery.ajax({
            type: "POST",
            data: "addrNo=" + addrVal,
            url: "/order/pop_delivery_write.asp",
            dataType: "HTML",
            success: function (data) {
                formStr = data;
                addrAddPop1 = new CoverLayer(formStr, {
                    bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
                    bg_opacity: 0.75, 		// 백그라운드 투명도. 기본값:0.75
                    close_btn_id: "closeBtn2", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
                    z_index: 99998, 			// 레이어의 z-index 값 기본값:99990
                    cast_speed: 500,		// 레이어 생성 트위닝 속도
                    close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
                    scroll_fix: false
                    //align_x : "left",			// "center"(기본값), "left", "right"
                    //align_x_value : 50,				// 정수, 0(기본값)
                    //align_y : "top",			// "middle"(기본값), "left", "right"
                    //align_y_value : 50				// 정수, 0(기본값)
                });
            },
            error: function (e) {
                //alert("e");
            }
        });

    }


}

function pay_delivery_iframe() {

    var sizeWidth2 = 645;//jQuery(window).width() * 0.90;	//가로 = 화면 넓이의 80%
    var sizeHeight2 = 590; //sizeWidth2 * 1.2;	//세로 = 가로의 60%

    if (chkMobile()) {	//모바일
        sizeWidth2 = 324;
        sizeHeight2 = 590;
    } else {	//PC
        if (sizeWidth2 > 645) { sizeWidth2 = 645 };
        if (sizeHeight2 > 590) { sizeHeight2 = 590 };
    }
    scrollTo(0, 0)
    layer.iframe("/order/pop_delivery.asp", "pop_delivery", { width: sizeWidth2, height: sizeHeight2, alignX: "50%", alignY: "50%", background: true, backgroundOpacity: 0.8, backgroundColor: "#333" });
    /*
	var layerText='<div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div><iframe name="inneriframe" width="645" height="265" id="inneriframe" src="/order/pop_delivery.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
	layer.text(layerText,"cathpop", {width:645, height:265, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return;
	*/
}

function pay_copyInfomation() {
    var checkVal = jQuery("#same").is(":checked");
    if (checkVal) {
        document.user.OrderDName.value = document.user.OrderOName.value;
        document.user.OrderDZip.value = document.user.OrderOZip.value;
        document.user.OrderDAddress1.value = document.user.OrderOAddress1.value;
        document.user.OrderDAddress2.value = document.user.OrderOAddress2.value;
        document.user.OrderDRoadAddress.value = document.user.OrderORoadAddress.value;
        //document.user.OrderDEmail.value = document.user.OrderOEmail.value;
        document.user.OrderDTel11.value = document.user.OrderOTel11.value;
        document.user.OrderDTel12.value = document.user.OrderOTel12.value;
        document.user.OrderDTel13.value = document.user.OrderOTel13.value;
        document.user.OrderDTel21.value = document.user.OrderOTel21.value;
        document.user.OrderDTel22.value = document.user.OrderOTel22.value;
        document.user.OrderDTel23.value = document.user.OrderOTel23.value;
    }
    else {
        document.user.OrderDName.value = "";
        document.user.OrderDZip.value = "";
        document.user.OrderDAddress1.value = "";
        document.user.OrderDAddress2.value = "";
        document.user.OrderDRoadAddress.value = "";
        document.user.OrderDTel11.value = "";
        document.user.OrderDTel12.value = "";
        document.user.OrderDTel13.value = "";
        document.user.OrderDTel21.value = "";
        document.user.OrderDTel22.value = "";
        document.user.OrderDTel23.value = "";
    }
}

function pay_copyDefault() {
    document.user.OrderDName.value = document.user.aOrderOName.value;
    document.user.OrderDZip.value = document.user.aOrderOZip.value;
    document.user.OrderDAddress1.value = document.user.aOrderOAddress1.value;
    document.user.OrderDAddress2.value = document.user.aOrderOAddress2.value;
    document.user.OrderDRoadAddress.value = document.user.aOrderORoadAddress.value;
    //document.user.OrderDEmail.value = document.user.aOrderOEmail.value;
    document.user.OrderDTel11.value = document.user.aOrderOTel11.value;
    document.user.OrderDTel12.value = document.user.aOrderOTel12.value;
    document.user.OrderDTel13.value = document.user.aOrderOTel13.value;
    document.user.OrderDTel21.value = document.user.aOrderOTel21.value;
    document.user.OrderDTel22.value = document.user.aOrderOTel22.value;
    document.user.OrderDTel23.value = document.user.aOrderOTel23.value;
}

function pay_copyReset() {
    document.user.OrderDName.value = "";
    document.user.OrderDZip.value = "";
    document.user.OrderDAddress1.value = "";
    document.user.OrderDAddress2.value = "";
    document.user.OrderDRoadAddress.value = "";

    //document.user.OrderDEmail.value = "";
    document.user.OrderDTel11.value = "";
    document.user.OrderDTel12.value = "";
    document.user.OrderDTel13.value = "";
    document.user.OrderDTel21.value = "";
    document.user.OrderDTel22.value = "";
    document.user.OrderDTel23.value = "";
}

function pay_deliveryCopy(val) {
    if (val == 1) {
        pay_copyDefault();
    }
    else if (val == 2) {
        pay_copyInfomation();
    }
    else if (val == 3) {
        pay_copyReset();
    }
    islandCheck();
}

//이메일 유효성 체크  추가 ( 2018-06-01 박준영 )
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}


function pay_checkout() {
    if (document.user.OrderOName.value == "") {
        alert("주문자 성명을 입력하세요");
        document.user.OrderOName.focus();
        return false;
    }
    else if (document.user.OrderOTel21.value == "" || document.user.OrderOTel22.value == "" || document.user.OrderOTel23.value == "") {
        alert("주문자 휴대폰번호를 입력하세요");
        document.user.OrderOTel21.focus();
        return false;
    }
    else if (document.user.OrderDName.value == "") {
        alert("수취인 성명을 입력하세요");
        document.user.OrderDName.focus();
        return false;
    }
    else if (document.user.OrderDZip.value == "") {
        alert("수취인 우편번호를 입력하세요");
        document.user.OrderDZip.focus();
        return false;
    }

    else if (document.user.OrderDAddress1.value == "") {
        alert("수취인 주소를 입력하세요");
        document.user.OrderDAddress2.focus();
        return false;
    }
    else if (document.user.OrderDTel21.value == "" || document.user.OrderDTel22.value == "" || document.user.OrderDTel23.value == "") {
        alert("주문자 휴대폰번호를 입력하세요");
        document.user.OrderDTel21.focus();
        return false;
    }
    else if (document.user.OrderOEmail.value == "") {
        alert("주문자 이메일정보를 입력하세요");
        document.user.OrderOEmail.focus();
        return false;
    }
    else {
        var fullEmail = (document.user.OrderOEmail.value);
        if (!validateEmail(fullEmail)) {
            alert("\n올바르지 않은 이메일 주소입니다..");
            document.user.OrderOEmail.focus();
            return;
        }
    }


    /*
	if (parseInt(document.user.usemile.value) == parseInt(parseInt(document.user.totalpaytemp.value) - parseInt(document.user.transpay.value) - parseInt(document.user.coup1sale.value)) ) {
		if (!document.user.gopaymethod[4].checked) {
			alert("주문금액과 사용하실 적립금이 같으므로 결제방법을 전액적립금 결제로 선택해 주세요.");
			document.user.gopaymethod[4].focus();
		    return false;
		}
	    if (parseInt(document.user.coup2sale.value) > 0 || parseInt(document.user.coup3sale.value) > 0)	{
				alert("전액적립금결제는 쿠폰사용이 되지 않습니다.");
				document.user.gopaymethod3[4].checked = false;
		    return false;
	    }
	}
	*/

    /* 사은품 값 초기화 */
    document.user.giftEventValue.value = "";

    /* 이벤트 오브젝트가 있을때만 실행 #################### 2014-08-12 ######################################## */
    var giftObj = jQuery("#giftDiv");
    //alert(giftObj.css("display"));

    var objselectDiv = jQuery(".giftClass");
    var boolselectDiv = jQuery("input:radio[name=giftEvent]:checked");

    if (giftObj.css("display") != "none") {
        if (objselectDiv.length) {
            if (boolselectDiv.length < 1) {
                alert("사은품을 선택해주세요");
                return false;
            }
            else {
                document.user.giftEventValue.value = boolselectDiv.val();
            }
        }
    }
    /* 이벤트 오브젝트가 있을때만 실행 #################### 2014-08-12 ######################################## */


    if (document.user.use_rnd1.value != "ok") {
        if (!document.user.use_rnd1.checked) {
            alert("개인정보제공에 동의하셔야 주문 가능합니다.");
            document.user.use_rnd1.focus();
            return;
        }
    }

    if (document.user.OrderContents.value == "배송관련 요청 사항을 50자 이내로 기재해주세요.") {
        document.user.OrderContents.value = "";
    }

    document.user.OrderOZip.value = document.user.OrderDZip.value;
    document.user.OrderOAddress1.value = document.user.OrderDAddress1.value;
    document.user.OrderOAddress2.value = document.user.OrderDAddress2.value;
    document.user.OrderORoadAddress.value = document.user.OrderDRoadAddress.value;

    form = document.user;
    radioBtn = form.gopaymethod;
    var bChecked = false;

    if (radioBtn) {
        if (radioBtn.length > 1) {
            for (i = 0; i < radioBtn.length; i++) {
                if (radioBtn[i].checked) {
                    bChecked = true;
                }
            }
        }
        else {
            if (radioBtn.checked) {
                bChecked = true;
            }
        }
        if (bChecked) {

            var radioValue = jQuery("input:radio[name='gopaymethod']:checked").val();

            if (radioValue == "card") {
                if (parseInt(document.user.totalpay.value) <= 0) {
                    alert("카드결제금액이 마이너스 또는 0원이 될 수는 없습니다.");
                    return false;
                }

                changeToProcess();

                document.user.pay_type.value = "card";
                document.user.method = "post";
                document.user.action = "/order/pay_behind.asp";
                document.user.target = "pFrame";
                document.user.submit();
            }
            else if (radioValue == "iche") {
                if (parseInt(document.user.totalpay.value) <= 0) {
                    alert("이체금액이 마이너스 또는 0원이 될 수는 없습니다.");
                    return false;
                }

                changeToProcess();

                document.user.method = "post";
                document.user.pay_type.value = "iche";
                document.user.action = "/order/pay_behind.asp";
                document.user.target = "pFrame";
                document.user.submit();
            }
            else if (radioValue == "bank") {
                if (parseInt(document.user.totalpay.value) <= 0) {
                    alert("무통장입금액이 마이너스 또는 0원이 될 수는 없습니다.");
                    return false;
                }

                changeToProcess();

                document.user.pay_type.value = "bank";
                document.user.method = "post";
                document.user.action = "/order/pay_behind.asp";
                document.user.target = "pFrame";
                document.user.submit();
            }
            else if (radioValue == "escrow") {
                if (parseInt(document.user.totalpay.value) <= 0) {
                    alert("무통장입금액이 마이너스 또는 0원이 될 수는 없습니다.");
                    return false;
                }

                changeToProcess();

                document.user.pay_type.value = "escrow";
                document.user.method = "post";
                document.user.action = "/order/pay_behind.asp";
                document.user.target = "pFrame";
                document.user.submit();
            }
            else if (radioValue == "phone") {
                if (parseInt(document.user.totalpay.value) <= 0) {
                    alert("휴대폰소액결제액이 마이너스 또는 0원이 될 수는 없습니다.");
                    return false;
                }

                changeToProcess();

                document.user.pay_type.value = "phone";
                document.user.method = "post";
                document.user.action = "/order/pay_behind.asp";
                document.user.target = "pFrame";
                document.user.submit();
            }
            else if (radioValue == "kakaopay") {
                if (parseInt(document.user.totalpay.value) <= 0) {
                    alert("결제금액이 마이너스 또는 0원이 될 수는 없습니다.");
                    return false;
                }

                changeToProcess();

                document.user.pay_type.value = "kakaopay";
                document.user.method = "post";
                document.user.action = "/order/pay_behind.asp";
                document.user.target = "pFrame";
                document.user.submit();
            }

        }
        else {
            alert("결제방식을 선택해 주세요!");
            return false;
        }
    }
    else {
        alert("결제방식을 선택해 주세요!");
        return false;
    }
}

function order_check3() {
    //alert(document.iniForm.totalpay.value);
    //alert(document.iniForm.totalprice.value);
    //alert(document.iniForm.usemile.value);
    //alert(document.iniForm.transpay.value);

    if (confirm("전액적립금 결제로 주문하시겠습니까?")) {
        changeToProcess();

        document.iniForm.method = "post";
        document.iniForm.pay_type.value = 3;				//// 1신용카드 2무통장입금 3전액적립금 4계좌이체 5에스크로 /////
        document.iniForm.action = "/order/put_db.asp";
        document.iniForm.submit();
    }
}

function allwishCheck(checkeds) {
    var obj = document.getElementsByName('cartcheck');
    for (i = 0; i < obj.length; i++) {
        obj[i].checked = checkeds;
    }
}
function allCheckControl() {
    var obj = document.getElementById('checkCon');
    obj.checked = false;
}


function AddCartGiftForGrade(coupon_id) {

 

    jQuery.ajax({
        type: "POST",
        data: "coupon_id=" + coupon_id,
        url: "/product/put_cart_gift_behind.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert(e);
        }
    });

}





function CheckedBuy() {
    form = document.form1;
    checkbox = form.checkwish;
    var nIdx = 0;
    var bChecked = false;
    var pids = "";

    if (checkbox) {
        if (checkbox.length > 1) {
            for (i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    bChecked = true;
                    pids += checkbox[i].value + "|";
                }
            }
        }
        else {
            if (checkbox.checked) {
                bChecked = true;
                pids += checkbox.value + "|";
            }
        }

        if (bChecked) {
            var val = "checkedbuy";
            var strQuery;

            strQuery = "";
            strQuery = jQuery(":input", document.form1).serialize();

            jQuery.ajax({
                type: "POST",
                data: "mode=" + val + "&checkwish=" + pids + "&" + new Date().getTime(),
                url: "/product/put_cart_behind.asp",
                dataType: "JSON",
                success: function (data) {
                    codetype = data.codetype;
                    msg = data.msg;
                    returnurl = data.returnurl;

                    if (msg != "") { alert(msg); }
                    if (returnurl != "") {
                        top.location.href = returnurl;
                    }
                    else {
                        top.location.reload();
                    }
                },
                error: function (e) {
                    //alert("e");
                }
            });
        }
        else {
            alert("상품을 선택하세요"); return;
        }
    }
    else {
        alert('상품이 없습니다.');
        return;
    }
}

function CheckedAllBuy(f) {
    //	CheckedAllClear(f);
    //	var checkItem = f.checkwish;
    //	if(checkItem) {
    //		if (checkItem.length > 1) {
    //			for(i=0;i<checkItem.length;i++){
    //				if(checkItem[i].checked) {
    //					checkItem[i].checked=false;
    //				}
    //				else {
    //					checkItem[i].checked=true;
    //				}
    //			}
    //		}
    //		else {
    //			if(checkItem.checked) {
    //				checkItem.checked=false;
    //			}
    //			else {
    //				checkItem.checked=true;
    //			}
    //		}
    //	}
    jQuery("input[name=checkwish]").prop("checked", true);
    CheckedBuy();
}

function CheckBuyOne(f, tval) {
    CheckedAllClear(f);

    var pids = tval;

    var val = "buyone";
    var strQuery;

    strQuery = "";
    strQuery = jQuery(":input", document.form1).serialize();

    jQuery.ajax({
        type: "POST",
        data: "mode=" + val + "&checkwish=" + pids + "|" + "&" + new Date().getTime(),
        url: "/product/put_cart_behind.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert("e");
        }
    });
}

function cart_action(val, val2, val3) {
    var strQuery;
    strQuery = "";
    strQuery = jQuery(":input", document.form1).serialize();

    jQuery.ajax({
        type: "POST",
        data: "mode=" + val + "&ProductNo=" + val2 + "&ProductSize=" + val3 + "&" + new Date().getTime(),
        url: "/product/put_cart_behind.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert("e");
        }
    });
}

function cart_recal() {
    var strQuery;
    var val = "recalculate";
    strQuery = "";
    strQuery = jQuery(":input", document.form1).serialize();

    jQuery.ajax({
        type: "POST",
        data: "mode=" + val + "&" + strQuery + "&" + new Date().getTime(),
        url: "/product/put_cart_behind.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert("e");
        }
    });
}

function cart_resize(no) {
    var val = "resize";

    var tempVal = jQuery("#selectSize" + no).val();
    var pno = jQuery("#selectSize" + no).attr("data-pno");
    var qty = jQuery("#selectSize" + no).attr("data-qty");
    var osize = jQuery("#selectSize" + no).attr("data-size");

    if (tempVal == osize) {
        alert("장바구니에 담긴 사이즈와 동일한 사이즈를 선택하셨습니다.");
        return;
    }

    jQuery.ajax({
        type: "POST",
        data: "mode=" + val + "&ProductNo=" + pno + "&ProductSize=" + tempVal + "&ProductQuantity=" + qty + "&nowSize=" + osize + "&" + new Date().getTime(),
        url: "/product/put_cart_behind.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert("e");
        }
    });
}

function CheckedAll(f) {
    var checkItem = f.cartcheck;
    if (checkItem) {
        if (checkItem.length > 1) {
            for (i = 0; i < checkItem.length; i++) {
                if (checkItem[i].checked) {
                    checkItem[i].checked = false;
                }
                else {
                    checkItem[i].checked = true;
                }
            }
        }
        else {
            if (checkItem.checked) {
                checkItem.checked = false;
            }
            else {
                checkItem.checked = true;
            }
        }
    }
}

function CheckedAllClear(f) {
    var checkItem = f.cartcheck;
    if (checkItem) {
        if (checkItem.length > 1) {
            for (i = 0; i < checkItem.length; i++) {
                checkItem[i].checked = false;
            }
        }
        else {
            checkItem.checked = false;
        }
    }
}

function CheckedCart() {
    form = document.form1;
    checkbox = form.cartcheck;
    var nIdx = 0;
    var bChecked = false;
    var pids = "";

    if (checkbox) {
        if (checkbox.length > 1) {
            for (i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    bChecked = true;
                    pids += checkbox[i].value + "|";
                }
            }
        }
        else {
            if (checkbox.checked) {
                bChecked = true;
                pids += checkbox.value + "|";
            }
        }

        if (bChecked) {
            form.checkwish.value = pids;
            form.action = "/product/checkwish_cart.asp";
            form.method = "post";
            form.target = "dataFrame";
            form.submit();

            return true;
        }
        else {
            alert("상품을 선택하세요"); return;
        }
    }
    else {
        alert('상품이 없습니다.');
        return;
    }
}

function CheckedDel() {
    form = document.form1;
    checkbox = form.checkwish;
    var nIdx = 0;
    var bChecked = false;
    var pids = "";

    if (checkbox) {
        if (checkbox.length > 1) {
            for (i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    bChecked = true;
                    pids += checkbox[i].value + "|";
                }
            }
        }
        else {
            if (checkbox.checked) {
                bChecked = true;
                pids += checkbox.value + "|";
            }
        }

        if (bChecked) {
            var val = "checkeddel";
            var strQuery;

            strQuery = "";
            strQuery = jQuery(":input", document.form1).serialize();

            jQuery.ajax({
                type: "POST",
                data: "mode=" + val + "&checkwish=" + pids + "&" + new Date().getTime(),
                url: "/product/put_cart_behind.asp",
                dataType: "JSON",
                success: function (data) {
                    codetype = data.codetype;
                    msg = data.msg;
                    returnurl = data.returnurl;

                    if (msg != "") { alert(msg); }
                    if (returnurl != "") {
                        top.location.href = returnurl;
                    }
                    else {
                        top.location.reload();
                    }
                },
                error: function (e) {
                    //alert("e");
                }
            });
        }
        else {
            alert("상품을 선택하세요"); return;
        }
    }
    else {
        alert('상품이 없습니다.');
        return;
    }
}

function CheckedSoldOut() {
    var val = "soldout";
    var strQuery;

    strQuery = "";
    strQuery = jQuery(":input", document.form1).serialize();

    jQuery.ajax({
        type: "POST",
        data: "mode=" + val + "&" + strQuery + "&" + new Date().getTime(),
        url: "/product/put_cart_behind.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert("e");
        }
    });
}

function CheckedWish() {
    form = document.form1;
    checkbox = form.checkwish;
    var nIdx = 0;
    var bChecked = false;
    var pids = "";

    if (checkbox) {
        if (checkbox.length > 1) {
            for (i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    bChecked = true;
                    pids += checkbox[i].value + "|";
                }
            }
        }
        else {
            if (checkbox.checked) {
                bChecked = true;
                pids += checkbox.value + "|";
            }
        }

        if (bChecked) {
            var val = "checkedwish";
            var strQuery;

            strQuery = "";
            strQuery = jQuery(":input", document.form1).serialize();

            jQuery.ajax({
                type: "POST",
                data: "mode=" + val + "&checkwish=" + pids + "&" + new Date().getTime(),
                url: "/product/put_cart_behind.asp",
                dataType: "JSON",
                success: function (data) {
                    codetype = data.codetype;
                    msg = data.msg;
                    returnurl = data.returnurl;

                    if (msg != "") { alert(msg); }
                    if (returnurl != "") {
                        top.location.href = returnurl;
                    }
                    else {
                        top.location.reload();
                    }
                },
                error: function (e) {
                    //alert("e");
                }
            });
        }
        else {
            alert("상품을 선택하세요"); return;
        }
    }
    else {
        alert('상품이 없습니다.');
        return;
    }
}


function wish_recal() {
    var strQuery;
    var val = "recalculate";
    strQuery = "";
    strQuery = jQuery(":input", document.form1).serialize();

    jQuery.ajax({
        type: "POST",
        data: "mode=" + val + "&" + strQuery + "&" + new Date().getTime(),
        url: "/product/put_wish.asp",
        dataType: "JSON",
        success: function (data) {
            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            codetype = data.codetype;
            msg = data.msg;
            returnurl = data.returnurl;

            if (msg != "") { alert(msg); }
            if (returnurl != "") {
                top.location.href = returnurl;
            }
            else {
                top.location.reload();
            }
        },
        error: function (e) {
            //alert("e");
        }
    });
}

function pay_result(val) {
    document.getElementById("total_price").innerHTML = PrintComma(document.ini.totalprice.value);
    document.getElementById("total_delivery").innerHTML = PrintComma(document.ini.transpay.value);
    if (document.ini.usemile.value == "") {
        document.getElementById("total_mile").innerHTML = 0;
    }
    else {
        document.getElementById("total_mile").innerHTML = PrintComma(document.ini.usemile.value);
    }
    if (document.ini.OrderUseCouponPrice.value == "") {
        document.getElementById("total_coupon").innerHTML = 0;
    }
    else {
        document.getElementById("total_coupon").innerHTML = PrintComma(document.ini.OrderUseCouponPrice.value);
    }
    document.getElementById("total_pay").innerHTML = PrintComma(document.ini.totalpay.value);
    if (val == 2) {
        document.getElementById("total_pay2").innerHTML = PrintComma(document.ini.totalpay.value);
    }
}

function is_check_em() {
    var f = document.user;

    if (f.em_m_usecheck.checked == true) {
        f.em_usemile.readOnly = false;
        f.em_usemile.value = "0";

        if (parseInt(f.em_usemiletemp.value, 10) != 0) {
            if (parseInt(f.em_usemiletemp.value, 10) < parseInt(f.em_minPoint.value, 10)) {
                alert("임직원 포인트는 " + PrintComma(f.em_minPoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                f.em_m_usecheck.checked = false;
                f.em_usemile.value = "";
                return;
            }
        }


        // 복지 포인트 사용 시 마일리지 사용불가
        // 동시 결제 가능하여 주석 처리 ( 2018-04-27 박준영 )

        //if (f.m_usecheck_mile.checked === true) {
        //    alert('임직원 포인트는 마일리지와 동시 사용이 불가능합니다.')
        //}
        //f.m_usecheck_mile.checked = false

        //$("#usemile_point").attr({
        //    'readonly': true,
        //    'value': 0
        //});

        f.em_usemile.focus();
        recalc_pay();
        recalc_gift();

    }
    else {
        f.em_usemile.readOnly = true;
        f.em_usemile.value = "0";
        recalc_pay();
        recalc_gift();
    }
}


function is_check() {
    /* 미사용 - 2018-04-27 박준영 
    console.log('is_check');
    var f = document.user;

    if (f.m_usecheck.checked == true) {
        // 임직원 포인트 여부 검사
        // 2018-02-08 임직원 포인트 소지시에도 적립금 사용가능
		//if (document.getElementById("em_usemile")) {
		//	if (parseInt(f.em_usemiletemp.value, 10) != parseInt(f.em_usemile.value, 10)) {
		//		alert("임직원 포인트 소진 후 적립금 또는 마일리지 사용이 가능합니다.");
		//		event.preventDefault();
		//		return;
		//	}
		//}
		
        f.usemile.readOnly = false;
        f.usemile.value = "";

        if (parseInt(f.usemiletemp.value) != 0) {
            if (parseInt(f.usemiletemp.value, 10) < parseInt(f.minPoint.value, 10)) {
                alert("적립금은 " + PrintComma(f.minPoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                f.m_usecheck.checked = false;
                f.usemile.value = "";
                return;
            }
        }

        // 적립금 사용 시 마일리지 사용불가
        if (f.m_usecheck_mile.checked === true) {
            alert('적립금은 마일리지와 동시 사용이 불가능합니다.')
        }
        f.m_usecheck_mile.checked = false

        $("#usemile_point").attr({
            'readonly': true,
            'value': 0
        });

        f.usemile.focus();
        recalc_pay();
        recalc_gift();
    }
    else {
        f.usemile.readOnly = true;
        f.usemile.value = "";
        recalc_pay();
        recalc_gift();
    }
    */
}


function is_check_mile() {
    console.log('is_check_mile')
    var f = document.user;
    if (f.m_usecheck_mile.checked == true) {

        f.usemile_point.readOnly = false;
        f.usemile_point.value = 0;
        f.usemile_point.focus();
        recalc_pay2();
        recalc_gift();
    }
    else {

        f.usemile_point.readOnly = true;
        f.usemile_point.value = "0";
        recalc_pay2();
        recalc_gift();
    }
}
function pay_change_em() {
    var f = document.user;

    if (f.em_usemile.value == "") {
        f.em_usemile.value = 0;
    }

    var strpay = f.em_usemile.value;

    var onvalue = strpay;
    count = 0
    for (i = 0; i < onvalue.length; i++) {
        ls_one_char = onvalue.charAt(i);
        if (ls_one_char.search(/[0-9]/) == -1) {
            count++
        }
    }

    if (count != 0) {
        alert("숫자만 가능합니다.")
        f.em_usemile.value = 0;
        f.em_usemile.focus();
        return;

    }

    var strcnt = strpay.length;

    if (f.em_m_usecheck.checked) {

        // 적립금 여부 검사
        if (document.getElementById("usemile")) {
            if (parseInt(f.usemile.value, 10) > 0) {
                console.log("usemile:" + f.usemile.value);
                console.log("em_usemiletemp:" + f.em_usemiletemp.value);
                console.log("em_usemile:" + f.em_usemile.value);

                // 사용가능한 임직원 최대값 확인
                if (parseInt(f.em_usemile.value, 10) > parseInt(f.em_usemiletemp.value, 10)) {
                    alert("사용하실 임직원 포인트가 고객님의 임직원 포인트보다 많습니다.");
                    user.em_usemile.value = "0";
                    f.usemile.value = 0;
                    f.usemile.readOnly = true;
                    f.m_usecheck.checked = false;

                    //recalc_pay_em();
                    recalc_pay();
                    return;
                }
                /* 2018-02-08 임직원 포인트 소지시에도 적립금 사용가능
				if (parseInt(f.em_usemiletemp.value) != parseInt(f.em_usemile.value)) {
					alert("임직원 포인트 소진 완료 후 적립금 또는 마일리지 사용이 가능합니다.");
					f.usemile.value = 0;
					f.usemile.readOnly = true;
					f.m_usecheck.checked = false;
					//recalc_pay_em();
					recalc_pay();
					return;
				}
				*/
            }
        }

        if (parseInt(f.em_usemile.value) != 0) {
            if (parseInt(f.em_usemile.value, 10) < parseInt(f.em_usePoint.value, 10)) {
                alert("임직원 포인트는 " + PrintComma(f.em_usePoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                f.em_usemile.value = 0;
                f.em_usemile.focus();
            }
        }

        if (parseInt(f.em_usemile.value, 10) < 0) {
            alert("사용하실 임직원 포인트를 정상적으로 입력 해 주세요");
            f.em_usemile.value = 0;
        }

        if (parseInt(f.em_usemile.value, 10) > parseInt(f.em_usemiletemp.value, 10)) {
            alert("사용하실 임직원 포인트가 고객님의 임직원 포인트보다 많습니다.");
            f.em_usemile.value = 0;
        }

        if (parseInt(f.em_usemile.value, 10) > parseInt(parseInt(f.totalpaytemp.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10) - parseInt(f.usemile_point.value, 10))) {
            alert("사용하실 임직원 포인트가 주문금액보다 많습니다.\n(배송비는 임직원 포인트 사용이 불가합니다.)");
            f.em_usemile.value = 0;
        }

        if (parseInt(f.em_usemile.value) == parseInt(parseInt(f.totalpaytemp.value) - parseInt(f.OrderUseCouponPrice.value) - parseInt(f.usemile_point.value, 10))) {
            if (strpay == "" || strpay == 0) {
            }
            else {
                if (strpay.substring(strcnt - 2) == "00") {
                    alert("전액 사용은 불가능 하며, 카드 결제의 경우 최소 1,000원 이상 실결제가 필요 합니다.");
                    f.em_usemile.value = 0;
                }
                else {
                    alert("임직원 포인트 사용은 백원단위로 사용이 가능합니다.");
                    f.em_usemile.value = 0;
                }
            }
        }
        else {
            if (strpay == "" || strpay == 0) {
            }
            else {
                if (strpay.substring(strcnt - 2) == "00") {
                }
                else {
                    alert("임직원 포인트 사용은 백원단위로 사용이 가능합니다.");
                    f.em_usemile.value = 0;
                }
            }
        }
    }
    //recalc_pay_em();
    recalc_pay();
    recalc_gift();
}

function pay_change() {

    /* 주석처리 ( 사용안함 )
    var f = document.user;
    var strpay = f.usemile.value;

    var onvalue = strpay;
    count = 0
    for (i = 0; i < onvalue.length; i++) {
        ls_one_char = onvalue.charAt(i);
        if (ls_one_char.search(/[0-9]/) == -1) {
            count++
        }
    }

    if (count != 0) {
        alert("숫자만 가능합니다.")
        f.usemile.value = 0;
        f.usemile.focus();
        return;

    }

    var strcnt = strpay.length;

    if (f.m_usecheck.checked) {
        if (parseInt(f.usemile.value) != 0) {
            if (parseInt(f.usemile.value) < parseInt(f.minPoint.value)) {
                alert("적립금은 " + PrintComma(f.minPoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                user.usemile.value = "";
                user.usemile.focus();
            }
        }

        if (parseInt(f.usemile.value) < 0) {
            alert("사용하실 적립금을 정상적으로 입력 해 주세요");
            user.usemile.value = "";
        }

        if (parseInt(f.usemile.value) > parseInt(f.usemiletemp.value)) {
            alert("사용하실 적립금이 고객님의 적립금보다 많습니다.");
            user.usemile.value = "";
        }

        if (parseInt(f.usemile.value) > parseInt(parseInt(f.totalpaytemp.value) - parseInt(f.OrderUseCouponPrice.value))) {
            alert("사용하실 적립금이 주문금액보다 많습니다.\n(배송비는 적립금 사용이 불가합니다.)");
            user.usemile.value = "";
        }

        if (parseInt(f.usemile.value) == parseInt(parseInt(f.totalpaytemp.value) - parseInt(f.transpay.value) - parseInt(f.coup1sale.value))) {
            if (strpay == "" || strpay == 0) {
            }
            else {
                if (strpay.substring(strcnt - 2) == "00") {
                    alert("전액 사용은 불가능 하며, 카드 결제의 경우 최소 1,000원 이상 실결제가 필요 합니다.");
                    user.usemile.value = "0";
                }
                else {
                    alert("적립금 사용은 백원단위로 사용이 가능합니다.");
                    user.usemile.value = ""
                }
            }
        }
        else {
            if (strpay == "" || strpay == 0) {
            }
            else {
                if (strpay.substring(strcnt - 2) == "00") {
                }
                else {
                    alert("적립금 사용은 백원단위로 사용이 가능합니다.");
                    user.usemile.value = ""
                }
            }
        }
    }
    recalc_pay();
    recalc_gift();
    */
}


function pay_change_mile() {


    var f = document.user;

    if (f.usemile_point.value == "") {
        f.usemile_point.value = 0;
    }

    var strpay = f.usemile_point.value;
    var strcnt = strpay.length;
    var minPoint = 0;
    if (f.m_usecheck_mile.checked) {
        if (parseInt(f.usemile_point.value) != 0) {
            if (parseInt(f.usemile_point.value) < parseInt(minPoint)) {
                alert("적립금은 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                user.usemile_point.value = 0;
                user.usemile_point.focus();
            }
        }

        if (parseInt(f.usemile_point.value) < 0) {
            alert("사용하실 적립금을 정상적으로 입력 해 주세요");
            user.usemile_point.value = 0;
        }

        if (parseInt(f.usemile_point.value) > parseInt(f.usemiletemp_point.value)) {
            alert("사용하실 적립금이 고객님의 적립금보다 많습니다.");
            user.usemile_point.value = 0;
        }

        if (parseInt(f.usemile_point.value) > parseInt(parseInt(f.totalpaytemp.value) - parseInt(f.OrderUseCouponPrice.value) - parseInt(f.em_usemile.value, 10))) {
            alert("사용하실 적립금이 주문금액보다 많습니다.\n(배송비는 적립금 사용이 불가합니다.)");
            user.usemile_point.value = 0;
        }

        if (parseInt(f.usemile_point.value) == parseInt(parseInt(f.totalpaytemp.value) - parseInt(f.OrderUseCouponPrice.value) - parseInt(f.em_usemile.value, 10))) {
            if (strpay == "" || strpay == 0) {
            }
            else {
                if (strpay.substring(strcnt - 2) == "00") {
                    alert("전액 사용은 불가능 하며, 카드 결제의 경우 최소 1,000원 이상 실결제가 필요 합니다.");
                    user.usemile_point.value = 0;
                }
                else {
                    alert("마일리지 사용은 백원단위로 사용이 가능합니다..");
                    user.usemile_point.value = 0;
                }
            }
        }
        else {
            if (strpay == "" || strpay == 0) {
            }
            else {
                if (parseInt(strpay.substring(strcnt - 2)) == "00") {
                }
                else {
                    alert("마일리지 사용은 백원단위로 사용이 가능합니다.");
                    user.usemile_point.value = 0;
                }
            }
        }


        if (parseInt(f.strFsale.value) == 0) {

            if (parseInt(f.usemile_point.value) < 3000 && parseInt(f.usemile_point.value) >= 100) {
                alert("첫 회 마일리지 결제 시, 3천 점 이상부터 사용 가능합니다.");
                user.usemile_point.value = 0;
                return;
            }
        }
    }
    recalc_pay2();
    recalc_gift();
}

function recalc_pay() {
    var f = document.user;

    if (f.usemile.value == "") {
        f.usemile.value = 0;
    }

    if (document.getElementById("em_usemile")) {
        if (f.em_usemile.value == "") {
            f.em_usemile.value = 0;
        }
        f.totalprice.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile_point.value, 10) - parseInt(f.em_usemile.value, 10) + parseInt(f.transpay.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10);

        f.em_usemile1.value = f.em_usemile.value;
        f.em_usermile.value = parseInt(f.em_usemiletemp.value, 10) - parseInt(f.em_usemile.value, 10);

        f.usemile1.value = f.usemile.value;
        f.usermile.value = parseInt(f.usemiletemp.value, 10) - parseInt(f.usemile.value, 10);

        f.totalpay.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile_point.value, 10) - parseInt(f.em_usemile.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10) + parseInt(f.transpay.value, 10);
        f.OrderTotalPrice.value = f.totalpay.value;

        if (f.em_usemile.value > 0) {
            if (f.totalpay.value < 0) {
                f.m_usecheck.checked = false;
                f.em_usemile.value = "";
                recalc_pay();
            }

            if (parseInt(f.em_usemiletemp.value) != 0) {
                if (parseInt(f.em_usemile.value) < parseInt(f.minPoint.value)) {
                    alert("임직원 포인트는 " + PrintComma(f.minPoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                    f.em_usemile.value = 0;
                    return;
                }
            }
        }
    }
    else {
        f.totalprice.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile_point.value, 10) + parseInt(f.transpay.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10);
        f.usemile1.value = f.usemile.value;
        f.usermile.value = parseInt(f.usemiletemp.value, 10) - parseInt(f.usemile.value, 10);
        f.totalpay.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile_point.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10) + parseInt(f.transpay.value, 10);
        f.OrderTotalPrice.value = f.totalpay.value;
    }

    if (f.usemile.value > 0) {
        if (f.totalpay.value < 0) {
            f.m_usecheck.checked = false;
            f.usemile.value = "";
            recalc_pay();
        }

        if (parseInt(f.usemiletemp.value) != 0) {
            if (parseInt(f.usemile.value) < parseInt(f.minPoint.value)) {
                alert("적립금은 " + PrintComma(f.minPoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                f.usemile.value = "";
                return;
            }
        }
    }

    if (document.getElementById("empointcost")) {
        document.getElementById("empointcost").innerHTML = PrintComma(f.em_usemile.value) + '원';
    }

    if (document.getElementById("pointcost")) {
        document.getElementById("pointcost").innerHTML = PrintComma(f.usemile_point.value) + '원';
    }

    document.getElementById("transprice").innerHTML = PrintComma(f.transpay.value);
    document.getElementById("div_price2").innerHTML = PrintComma(f.totalpay.value) + '원';
    if (document.getElementById("div_price3")) {
        document.getElementById("div_price3").innerHTML = PrintComma(f.totalpay.value) + ' M';
    }

}


/*
function recalc_pay_em(){
	if (document.user.em_usemile.value == ""){
		user.em_usemile.value = 0;
	}

	user.totalprice.value = parseInt(document.user.totalpaytemp.value,10) - parseInt(document.user.em_usemile.value,10) + parseInt(document.user.transpay.value,10) - parseInt(document.user.OrderUseCouponPrice.value,10);
	user.em_usemile1.value = document.user.em_usemile.value;
	user.em_usermile.value = parseInt(document.user.em_usemiletemp.value,10) - parseInt(document.user.em_usemile.value,10);
	user.totalpay.value = parseInt(document.user.totalpaytemp.value,10) - parseInt(document.user.em_usemile.value,10) - parseInt(document.user.OrderUseCouponPrice.value,10) + parseInt(document.user.transpay.value,10);
	user.OrderTotalPrice.value = document.user.totalpay.value;


	if (document.user.em_usemile.value > 0){
		// 적립금 사용시 마이너스인 경우 kish value reset
		if (document.user.totalpay.value < 0){
			user.m_usecheck.checked = false;
			user.em_usemile.value="";
			recalc_pay_em();
		}

		if (parseInt(document.user.em_usemiletemp.value) != 0 ) {
			if (parseInt(document.user.em_usemile.value) < parseInt(document.user.minPoint.value) ) {
				alert("임직원 포인트는 " + PrintComma(document.user.minPoint.value) +"원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
				user.em_usemile.value="";
				return;
			}
		}
	}

	if (document.getElementById("empointcost")) {
		document.getElementById("empointcost").innerHTML = PrintComma(document.user.em_usemile.value) + '원';
	}
	document.getElementById("transprice").innerHTML = PrintComma(document.user.transpay.value);
	document.getElementById("div_price2").innerHTML = PrintComma(document.user.totalpay.value) + '원';
}
*/



function recalc_pay2() {
    // 오브젝트
    var f = document.user;

    // 임직원 
    if (document.getElementById("em_usemile")) {
        if (f.em_usemile.value == "") {
            f.em_usemile.value = 0;
        }


        // 총 금액
        f.totalprice.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile.value, 10) - parseInt(f.usemile_point.value, 10) - parseInt(f.em_usemile.value, 10) + parseInt(f.transpay.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10);

        f.em_usemile1.value = f.em_usemile.value;
        f.em_usermile.value = parseInt(f.em_usemiletemp.value, 10) - parseInt(f.em_usemile.value, 10);

        f.usemile1.value = f.usemile.value;
        f.usermile.value = parseInt(f.usemiletemp.value, 10) - parseInt(f.usemile.value, 10);

        f.totalpay.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile.value, 10) - parseInt(f.usemile_point.value, 10) - parseInt(f.em_usemile.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10) + parseInt(f.transpay.value, 10);
        f.OrderTotalPrice.value = f.totalpay.value;

        if (f.em_usemile.value > 0) {
            if (f.totalpay.value < 0) {
                f.m_usecheck.checked = false;
                f.em_usemile.value = "";
                recalc_pay();
            }

            if (parseInt(f.em_usemiletemp.value) != 0) {
                if (parseInt(f.em_usemile.value) < parseInt(f.minPoint.value)) {
                    alert("임직원 포인트는 " + PrintComma(f.minPoint.value) + "원 이상시 사용 가능하며, 100원 단위로 적용됩니다1. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
                    f.em_usemile.value = "";
                    return;
                }
            }
        }
    }
    else {

        if (f.usemile_point.value == "") {
            f.usemile_point.value = 0;
        }

        // 일반
        f.totalprice.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile_point.value, 10) + parseInt(f.transpay.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10);

        f.usemile2.value = f.usemile_point.value;
        f.usermile_point.value = parseInt(f.usemiletemp_point.value, 10) - parseInt(f.usemile_point.value, 10);

        f.totalpay.value = parseInt(f.totalpaytemp.value, 10) - parseInt(f.usemile_point.value, 10) - parseInt(f.OrderUseCouponPrice.value, 10) + parseInt(f.transpay.value, 10);
        f.OrderTotalPrice.value = f.totalpay.value;
    }

    if (f.usemile_point.value > 0) {
        if (f.totalpay.value < 0) {
            f.m_usecheck.checked = false;
            f.usemile_point.value = "";
            recalc_pay();
        }



        String.prototype.right = function (length) {
            if (this.length <= length) {
                return this;
            }
            else {
                return this.substring(this.length - length, this.length);
            }
        }

        var temp_mile = f.usemiletemp_point.value;

        //if (temp_mile.right(2) != "00" ) {

        //		alert("적립금은 100원 단위로 적용됩니다3. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
        //		f.usemile.value="";
        //		return;

        //}
    }

    if (document.getElementById("empointcost")) {
        document.getElementById("empointcost").innerHTML = PrintComma(f.em_usemile.value) + '원';
    }

    if (document.getElementById("pointcost")) {
        document.getElementById("pointcost").innerHTML = PrintComma(f.usemile_point.value) + '원';
    }

    document.getElementById("transprice").innerHTML = PrintComma(f.transpay.value);
    document.getElementById("div_price2").innerHTML = PrintComma(f.totalpay.value) + '원';
}

/*
function recalc_pay_em(){
	if (document.user.em_usemile.value == ""){
		user.em_usemile.value = 0;
	}

	user.totalprice.value = parseInt(document.user.totalpaytemp.value,10) - parseInt(document.user.em_usemile.value,10) + parseInt(document.user.transpay.value,10) - parseInt(document.user.OrderUseCouponPrice.value,10);
	user.em_usemile1.value = document.user.em_usemile.value;
	user.em_usermile.value = parseInt(document.user.em_usemiletemp.value,10) - parseInt(document.user.em_usemile.value,10);
	user.totalpay.value = parseInt(document.user.totalpaytemp.value,10) - parseInt(document.user.em_usemile.value,10) - parseInt(document.user.OrderUseCouponPrice.value,10) + parseInt(document.user.transpay.value,10);
	user.OrderTotalPrice.value = document.user.totalpay.value;


	if (document.user.em_usemile.value > 0){
		// 적립금 사용시 마이너스인 경우 kish value reset
		if (document.user.totalpay.value < 0){
			user.m_usecheck.checked = false;
			user.em_usemile.value="";
			recalc_pay_em();
		}

		if (parseInt(document.user.em_usemiletemp.value) != 0 ) {
			if (parseInt(document.user.em_usemile.value) < parseInt(document.user.minPoint.value) ) {
				alert("임직원 포인트는 " + PrintComma(document.user.minPoint.value) +"원 이상시 사용 가능하며, 100원 단위로 적용됩니다. \n금액 입력시 특수문자는 제외후 숫자만 넣어주세요.");
				user.em_usemile.value="";
				return;
			}
		}
	}

	if (document.getElementById("empointcost")) {
		document.getElementById("empointcost").innerHTML = PrintComma(document.user.em_usemile.value) + '원';
	}
	document.getElementById("transprice").innerHTML = PrintComma(document.user.transpay.value);
	document.getElementById("div_price2").innerHTML = PrintComma(document.user.totalpay.value) + '원';
}
*/

function recalc_gift() {
    if (jQuery("#giftDiv").length) {
        jQuery.ajax({
            type: "POST",
            url: "/order/pay_gift.asp",
            dataType: "HTML",
            success: function (data) {
                jQuery("#giftDiv").html(data);
            },
            error: function (e) {
                //alert("e");
            }
        });
    }
}

function PriceProcess(Price) {
    return (Math.round(Price / 100 - 0.5)) * 100
}

function is_check1(radio) {
    var CouponArray = radio.value.split(",");
    var CouponNo = Math.round(CouponArray[0]);
    var CouponPrice = PriceProcess(Math.round(CouponArray[1]));
    document.user.OrderUseCoupon.value = CouponNo;
    document.user.OrderUseCouponPrice.value = CouponPrice;
    recalc_pay();
    recalc_gift();
}

function orderConfirm(val) {
    yorn = confirm("구매확정하시겠습니까?");
    if (yorn) {
        document.orderForm.oOrderNo.value = val;
        document.orderForm.target = 'oFrame';
        document.orderForm.action = '/order/order_result.asp';
        document.orderForm.submit();
    }
}

function orderCancel(val) {
    yorn = confirm("주문취소하시겠습니까?");
    if (yorn) {
        document.orderForm.oOrderNo.value = val;
        document.orderForm.target = 'oFrame';
        document.orderForm.action = '/order/order_cancel_result.asp';
        document.orderForm.submit();
    }
}

function orderCancel2(val) {
    yorn2 = confirm("주문취소접수하시겠습니까?");
    if (yorn2) {
        document.orderForm.oOrderNo.value = val;
        document.orderForm.target = 'oFrame';
        document.orderForm.action = '/order/order_cancelorder_result.asp';
        document.orderForm.submit();
    }
}

function childwinClose() {
    window.open("/inicis/childwin.html", "childwin", "width=300,height=160");
    window.open('about:blank', 'childwin').close();
}

function addressChg() {
    SSQ("#ori").fadeOut();
}
function addressModify() {
    if (document.user.OrderOName.value == "") {
        alert("주문자 성명을 입력하세요");
        document.user.OrderOName.focus();
        return false;
    }
        /*
            else if (document.user.OrderOZip1.value == "" || document.user.OrderOZip1.value.length < 3) {
                alert("주문자 우편번호앞자리를 입력하세요");
                document.user.OrderOZip1.focus();
                return false;
            }
        
            else if (document.user.OrderOAddress1.value == "" || document.user.OrderOAddress2.value) {
                alert("주문자 주소를 입력하세요");
                document.user.OrderOAddress2.focus();
                return false;
            }
        */
    else if (document.user.OrderOTel21.value == "" || document.user.OrderOTel22.value == "" || document.user.OrderOTel23.value == "") {
        alert("주문자 휴대폰번호를 입력하세요");
        document.user.OrderOTel21.focus();
        return false;
    }
    else if (document.user.OrderDName.value == "") {
        alert("수취인 성명을 입력하세요");
        document.user.OrderDName.focus();
        return false;
    }
    else if (document.user.OrderDZip.value == "" || document.user.OrderDZip.value.length < 3) {
        alert("수취인 우편번호를 입력하세요");
        document.user.OrderDZip.focus();
        return false;
    }

    else if (document.user.OrderDAddress1.value == "") {
        alert("수취인 주소를 입력하세요");
        document.user.OrderDAddress2.focus();
        return false;
    }
    else if (document.user.OrderDTel21.value == "" || document.user.OrderDTel22.value == "" || document.user.OrderDTel23.value == "") {
        alert("주문자 휴대폰번호를 입력하세요");
        document.user.OrderDTel21.focus();
        return false;
    }

    yorn2 = confirm("배송지를 수정하시겠습니까?");
    if (yorn2) {
        document.user.target = 'oFrame';
        document.user.action = '/order/order_address_result.asp';
        document.user.submit();
    }
}

function process(rsp) {
    setTimeout(rsp, 3);
}

function Fn_gift_coupon(giftValue) {
    $("#couponValue").val(giftValue);
}
function useCoupon(couponValue) {

    if (document.ucoupon.popupCoupon2.value == "" && document.ucoupon.popupCoupon3.value == "") {
        if (confirm("선택하신 쿠폰이 없습니다. 쿠폰 사용팝업을 닫으시겠습니까?")) {
            closeCoverLayer();
            return;
        }
        else {
            return;
        }
    }

    if ($("#couponChangeValue").val() == "1") {
        if ($("#couponValue").val() == "") {
            alert("사은품을 선택해주세요.");
            return;
        }
    }
    coup2 = document.ucoupon.popupCoupon2.value;
    coup3 = document.ucoupon.popupCoupon3.value;
    cno = document.ucoupon.cartNo.value;
    pno = document.ucoupon.pageNo.value;

    xmlhttp = initXMLHttp();

    randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);

    var obj = document.getElementById("mc_layer");
    obj.innerHTML = "<img src=/images/waiting.gif>";

    xmlhttp.open("GET", "/order/pop_coupon_r.asp?cartNo=" + cno + "&pageNo=" + pno + "&coup2=" + coup2 + "&coup3=" + coup3 + "&randNo=" + randNo + "&couponValue=" + couponValue);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnval;
            returnval = xmlhttp.responseText;

            var index1, page;
            index1 = returnval.indexOf("|");
            TEXT1 = returnval.substring(0, index1);

            var returnWords, index2, pagecount;
            returnWords = returnval.substring(returnval.indexOf("|") + 1);
            index2 = returnWords.indexOf("|");
            TEXT2 = returnWords.substring(0, index2);

            if (TEXT1 == 0)	// success!
            {
                IF_CouponNameText = returnval.split("|");
                //alert(TEXT2);
                recalc_aj();
                getAjaxHtml2("/order/pay_cartList_ajax.asp?randNo=" + randNo + "&IF_CouponNameText=" + IF_CouponNameText[2], "cartList", "");
                closeCoverLayer();
                //document.getElementById("mc_layer").innerHTML = "<a href='javascript:useCoupon();'><img src='/images/popup/btn_coupon.gif' alt='구폰 사용하기' /></a>"
            }
            else			// fail!
            {
                recalc_aj();
                //document.getElementById("mc_layer").innerHTML = "<a href='javascript:useCoupon();' class='red mb5'>쿠폰 사용</a>"
                process(TEXT2);
                //self.reload();
            }
        }
    }
    xmlhttp.send(null);
}


function pay_coupon_cancel(cNo, kk) {
    xmlhttp = initXMLHttp();

    randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);

    var obj = document.getElementById("c_layer" + kk);
    obj.innerHTML = "<img src=/images/waiting.gif>";
    xmlhttp.open("GET", "/order/pop_coupon_c.asp?cartNo=" + cNo + "&randNo=" + randNo);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnval;
            returnval = xmlhttp.responseText;

            var index1, page;
            index1 = returnval.indexOf("|");
            TEXT1 = returnval.substring(0, index1);

            var returnWords, index2, pagecount;
            returnWords = returnval.substring(returnval.indexOf("|") + 1);
            index2 = returnWords.indexOf("|");
            TEXT2 = returnWords.substring(0, index2);

            if (TEXT1 == 0)	// success!
            {
                //alert(TEXT2);
                recalc_aj();
                getAjaxHtml2("/order/pay_cartList_ajax.asp?randNo=" + randNo, "cartList", "");
                //document.getElementById("c_layer"+kk).innerHTML = "<a href='javascript:pay_coupon_iframe("+cNo+","+kk+");void(0);' class='btn_black mt10'>쿠폰 조회/적용</a>"
            }
            else			// fail!
            {
                recalc_aj();
                //document.getElementById("c_layer"+kk).innerHTML = "<a href='javascript:pay_coupon_cancelLayer("+cNo+","+kk+");void(0);' class='btn_black mt10'>쿠폰사용 취소</a>"
                process(TEXT2);
                self.reload();
            }
        }
    }
    xmlhttp.send(null);
}

function recalc_aj() {
    jQuery.ajax({
        type: "POST",
        url: "/order/pay_recalc.asp",
        dataType: "JSON",
        success: function (data) {
            jQuery("#sale_total").html(PrintComma(data.sale) + '원');
            jQuery("#coup1price").html(PrintComma(data.coup1));
            jQuery("#coup2price").html(PrintComma(data.coup2));
            jQuery("#coup3price").html(PrintComma(data.coup3));
            //jQuery("#salerate").html(data.salerate);

            document.user.OrderUseCouponPrice.value = data.sale;
            document.user.totalpay.value = data.cart;
            document.user.totalprice.value = data.cart;
            document.user.totalpaytemp.value = data.cart;
            document.user.temptotal.value = data.cart;

            document.user.coup1sale.value = data.coup1;
            document.user.coup2sale.value = data.coup2;
            document.user.coup3sale.value = data.coup3;

            //recalc_pay();
            recalc_pay2();
            recalc_gift();
        },
        error: function (e) {
            //alert("e");
        }
    });
}

/*
function recalc_aj_em() {
	jQuery.ajax({
		type: "POST",
		url: "/order/pay_recalc.asp",
		dataType : "JSON",
		success: function(data) {
			jQuery("#sale_total").html(PrintComma(data.sale) + '원');
			jQuery("#coup1price").html(PrintComma(data.coup1));
			jQuery("#coup2price").html(PrintComma(data.coup2));
			jQuery("#coup3price").html(PrintComma(data.coup3));
			//jQuery("#salerate").html(data.salerate);

			document.user.OrderUseCouponPrice.value = data.sale;
			document.user.totalpay.value = data.cart;
			document.user.totalprice.value = data.cart;
			document.user.totalpaytemp.value = data.cart;
			document.user.temptotal.value = data.cart;

			document.user.coup1sale.value = data.coup1;
			document.user.coup2sale.value = data.coup2;
			document.user.coup3sale.value = data.coup3;

			recalc_pay_em();
			recalc_gift();
		},
		error: function(e) {
			//alert("e");
		}
	});
}
*/

function getAjaxHtml2(url, idname, val) {
    jQuery.ajax({
        type: "GET",
        url: url,
        dataType: "html",
        data: val,
        beforeSend: function () {
        },
        error: function () {
            //alert("error");
        },
        success: function (msg) {
            jQuery("#" + idname).html(msg);
        },
        complete: function () {
            //window.scrollTo(0, 0);
        }
    });
}


function addrSubmit() {
    var objF = document.getElementById('addr');
    if (objF.addrtitle.value == '') { alert('배송지이름을 입력해주세요'); objF.addrtitle.focus(); return; }
    if (objF.addrname.value == '') { alert('배송지명을 입력해주세요'); objF.addrname.focus(); return; }
    //	if(objF.tel1_1.value == '' || objF.tel1_2.value == '' || objF.tel1_3.value == ''){alert('전화번호를 입력해주세요'); objF.tel1_1.focus(); return; }
    if (objF.tel2_1.value == '' || objF.tel2_2.value == '' || objF.tel2_3.value == '') { alert('휴대폰을 입력해주세요'); objF.tel2_1.focus(); return; }
    if (objF.zipcode.value == '') { alert('우편번호를 입력해주세요'); objF.zipcode.focus(); return; }
    if (objF.addr1.value == '') { alert('주소를 입력해주세요'); objF.addr1.focus(); return; }

    objF.submit();
}

function addr_zipcode() {
    winMem = window.open("/order/zipcode_addr.asp", "zip", "width=350,height=410,menubar=no,scrollbars=no")
}

function addr_choice() {
    var addrVal = jQuery("input[name='AddressNo']:checked").val();
    var tempVal = jQuery("input[name='AddressNo']:checked").attr("ref");


    if (typeof addrVal == "undefined" || addrVal == '') {
        if (document.addr.AddressNo2.value != '') {
            addrVal = jQuery("#AddressNo2 option:selected").attr("ref");
            tempVal = addrVal; //document.addr.AddressNo2.value;
        }
    }
    if (typeof addrVal == "undefined" || addrVal == '') {
        alert("주소를 선택해 주세요");
    }
    else {
        document.user.OrderDName.value = tempVal.split('^')[0]
        document.user.OrderDZip.value = tempVal.split('^')[1]
        document.user.OrderDRoadAddress.value = tempVal.split('^')[2]
        document.user.OrderDAddress1.value = tempVal.split('^')[3]
        document.user.OrderDAddress2.value = tempVal.split('^')[4]
        document.user.OrderDTel11.value = tempVal.split('^')[5]
        document.user.OrderDTel12.value = tempVal.split('^')[6]
        document.user.OrderDTel13.value = tempVal.split('^')[7]
        document.user.OrderDTel21.value = tempVal.split('^')[8]
        document.user.OrderDTel22.value = tempVal.split('^')[9]
        document.user.OrderDTel23.value = tempVal.split('^')[10]
        islandCheck();
        closeCoverLayer();
    }
}

function selectAddr(val) {
    var tempVal = val;

    var tel2 = val.split('^')[8] + "-" + val.split('^')[9] + "-" + val.split('^')[10]

    jQuery("#addr1").html(val.split('^')[3]);
    jQuery("#addr2").html(val.split('^')[0]);
    jQuery("#addr3").html(tel2);
}


function addr_update() {
    var addrVal = jQuery("input[name='AddressNo']:checked").val();

    if (addrVal == undefined || addrVal == '') {
        if (document.addr.AddressNo2.value != '') {
            addrVal = jQuery("#AddressNo2 option:selected").val();
        }
    }

    if (addrVal == undefined || addrVal == '') {
        alert("주소를 선택해 주세요");
    }
    else {
        location.href = "pop_delivery_write.asp?addrNo=" + addrVal;
    }
}



function addr_delete() {
    var addrVal = jQuery("input[name='AddressNo']:checked").val();

    if (addrVal == undefined || addrVal == '') {
        if (document.addr.AddressNo2.value != '') {
            addrVal = jQuery("#AddressNo2 option:selected").val();
        }
    }

    if (addrVal == undefined || addrVal == '') {
        alert("주소를 선택해 주세요");
    }
    else {
        //location.href="pop_delivery_delete.asp?addrNo="+ addrVal;
        jQuery.ajax({
            type: "POST",
            data: "addrNo=" + addrVal,
            url: "/order/pop_delivery_delete.asp",
            dataType: "HTML",
            success: function (data) {
                formStr = data;
                addrAddPop1 = new CoverLayer(formStr, {
                    bg_color: "white", 		// 백그라운드 색상 기본값:"#000"
                    bg_opacity: 0.75, 		// 백그라운드 투명도. 기본값:0.75
                    close_btn_id: "closeBtn2", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
                    z_index: 99998, 			// 레이어의 z-index 값 기본값:99990
                    cast_speed: 500,		// 레이어 생성 트위닝 속도
                    close_click: false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
                    scroll_fix: false
                    //align_x : "left",			// "center"(기본값), "left", "right"
                    //align_x_value : 50,				// 정수, 0(기본값)
                    //align_y : "top",			// "middle"(기본값), "left", "right"
                    //align_y_value : 50				// 정수, 0(기본값)
                });
            },
            error: function (e) {
                //alert("e");
            }
        });

    }
}

function addr_choice2() {
    var addrVal = jQuery("input[name='AddressNo']:checked").val();
    var tempVal = jQuery("input[name='AddressNo']:checked").attr("ref");

    if (addrVal == undefined || addrVal == '') {
        if (document.addr.AddressNo2.value != '') {
            addrVal = document.addr.AddressNo2.value;
            tempVal = jQuery("#AddressNo2 option:selected").attr("ref");
        }
    }

    if (addrVal == undefined || addrVal == '') {
        alert("주소를 선택해 주세요");
    }
    else {
        parent.document.user.OrderDName.value = tempVal.split('^')[0]
        parent.document.user.OrderDZip.value = tempVal.split('^')[1]
        //parent.document.user.OrderDZip2.value = tempVal.split('^')[2]
        parent.document.user.OrderDRoadAddress.value = tempVal.split('^')[3]
        parent.document.user.OrderDAddress1.value = tempVal.split('^')[4]
        parent.document.user.OrderDAddress2.value = tempVal.split('^')[5]
        parent.document.user.OrderDTel11.value = tempVal.split('^')[6]
        parent.document.user.OrderDTel12.value = tempVal.split('^')[7]
        parent.document.user.OrderDTel13.value = tempVal.split('^')[8]
        parent.document.user.OrderDTel21.value = tempVal.split('^')[9]
        parent.document.user.OrderDTel22.value = tempVal.split('^')[10]
        parent.document.user.OrderDTel23.value = tempVal.split('^')[11]
        parent.document.user.OrderDRoadAddress.value = tempVal.split('^')[12]
        parent.islandCheck();
        parent.layer.closeAll();
    }
}

function pay_coupon_iframe(val, val2) {
    var tempUrl = "/order/pop_coupon.asp?cno=" + val + "&no=" + val2;
    //var layerText='<div style="overflow:auto;position:relative;-webkit-overflow-scrolling:touch;"><iframe name="inneriframe" width="660" height="400" id="inneriframe" src="'+ tempUrl +'" style="width: 100%; height: 100%;" allowtransparency="true"></iframe></div>';
    //layer.text(layerText,"pay_coupon", {width:640, height:400, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
    layer.iframe(tempUrl, "pay_coupon", { width: 640, height: 400, alignX: "50%", alignY: "50%", background: true, backgroundOpacity: 0.8, backgroundColor: "#333" });
}

function useCouponLayer() {
    if (document.ucoupon.popupCoupon2.value == "" && document.ucoupon.popupCoupon3.value == "") {
        if (confirm("선택하신 쿠폰이 없습니다. 쿠폰 사용팝업을 닫으시겠습니까?")) {
            parent.layer.closeAll();
            return;
        } else {
            return;
        }
    }

    coup2 = document.ucoupon.popupCoupon2.value;
    coup3 = document.ucoupon.popupCoupon3.value;
    cno = document.ucoupon.cartNo.value;
    pno = document.ucoupon.pageNo.value;
    var xmlhttp = "";
    xmlhttp = initXMLHttp();

    randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);

    //var obj = document.getElementById("mc_layer");
    //obj.innerHTML = "<img src=/images/waiting.gif>";
    xmlhttp.open("GET", "/order/pop_coupon_r.asp?cartNo=" + cno + "&pageNo=" + pno + "&coup2=" + coup2 + "&coup3=" + coup3 + "&randNo=" + randNo);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnval;
            returnval = xmlhttp.responseText;

            var index1, page;
            index1 = returnval.indexOf("|");
            TEXT1 = returnval.substring(0, index1);

            var returnWords, index2, pagecount;
            returnWords = returnval.substring(returnval.indexOf("|") + 1);
            index2 = returnWords.indexOf("|");
            TEXT2 = returnWords.substring(0, index2);

            if (TEXT1 == 0)	// success!
            {
                //alert(TEXT2);
                parent.recalc_aj();
                parent.getAjaxHtml2("/order/pay_cartList_ajax.asp?randNo=" + randNo, "cartList", "");
                parent.layer.closeAll();
                //document.getElementById("mc_layer").innerHTML = "<a href='javascript:useCoupon();'><img src='/images/popup/btn_coupon.gif' alt='구폰 사용하기' /></a>"
            }
            else			// fail!
            {
                parent.recalc_aj();
                //document.getElementById("mc_layer").innerHTML = "<a href='javascript:useCoupon();' class='red mb5'>쿠폰 사용</a>"
                process(TEXT2);
                //self.reload();
            }
        }
    }
    xmlhttp.send(null);
}


function initXMLHttp() {
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
            } catch (e) { }
        }
    }
    if (!xmlHttp) {
        alert('Cannot create XMLHTTP instance');
        return false;
    }
    return xmlHttp;
}

function pay_coupon_cancelLayer(cNo, kk) {
    xmlhttp = initXMLHttp();

    randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);

    //var obj = document.getElementById("c_layer"+kk);
    //obj.innerHTML = "<img src=/images/waiting.gif>";
    xmlhttp.open("GET", "/order/pop_coupon_c.asp?cartNo=" + cNo + "&randNo=" + randNo);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var returnval;
            returnval = xmlhttp.responseText;

            var index1, page;
            index1 = returnval.indexOf("|");
            TEXT1 = returnval.substring(0, index1);

            var returnWords, index2, pagecount;
            returnWords = returnval.substring(returnval.indexOf("|") + 1);
            index2 = returnWords.indexOf("|");
            TEXT2 = returnWords.substring(0, index2);

            if (TEXT1 == 0)	// success!
            {
                //alert(TEXT2);
                recalc_aj();
                getAjaxHtml2("/order/pay_cartList_ajax.asp?randNo=" + randNo, "cartList", "");
                //document.getElementById("c_layer"+kk).innerHTML = "<a href='javascript:pay_coupon("+cNo+","+kk+");void(0);' class='btn_black mt10'>쿠폰 조회/적용</a>"
            }
            else			// fail!
            {
                recalc_aj();
                //document.getElementById("c_layer"+kk).innerHTML = "<a href='javascript:pay_coupon_cancel("+cNo+","+kk+");void(0);' class='btn_black mt10'>쿠폰사용취소</a>"
                process(TEXT2);
                self.reload();
            }
        }
    }
    xmlhttp.send(null);
}


function islandCheck() {
    randNo = Math.floor((Math.random() * (999999 - 1 + 1)) + 1);
    var island_zipcode = document.user.OrderDZip.value;
    var p = 0;
    var finalTranspay = document.user.Delivery_price.value;
    var isEmployee = $('#em_usemile').length;
    jQuery.ajax({
        type: "POST",
        url: "/order/island_ajax.asp",
        data: "zipcode=" + island_zipcode + "&randNo=" + randNo,
        dataType: "JSON",
        async: false,
        //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        success: function (data) {
            if (data.status == "0") { // success!
                p = data.addpay;
                // #HJ 무료배송의 경우는 도서산간도 무료처리
                if (parseInt(document.user.Delivery_price.value, 10) > 0) {
                    finalTranspay = parseInt(document.user.Delivery_price.value, 10) + parseInt(p, 10);

                    if (p > 0) {
                        document.user.addpay.value = p;
                        document.user.OrderIsisland.value = 1;
                        islandPay.innerHTML = " (도서산간지역 " + PrintComma(p) + "원 포함) ";
                        addDelivery.innerHTML = " (도서산간지역 " + PrintComma(p) + "원 추가 됩니다) ";
                    } else {
                        document.user.addpay.value = 0;
                        document.user.OrderIsisland.value = 0;
                        islandPay.innerHTML = "";
                        addDelivery.innerHTML = "";
                    }
                    document.user.transpay.value = finalTranspay;
                    recalc_pay();
                    /*
					if(isEmployee > 0){
						recalc_pay_em();
					}else{
						recalc_pay();
					}
					*/
                }
            } else { // fail!
                document.user.transpay.value = finalTranspay;
                recalc_pay();
                /*
				if(isEmployee > 0){
					recalc_pay_em();
				}else{
					recalc_pay();
				}
				*/

                //alert(data.msg);
            }
        },
        error: function (e) {
            document.user.transpay.value = finalTranspay;
            //alert("e");
        }
    });
}

function cartEmpty() {
    alert("장바구니에서 주문체크된 상품이 없습니다.");
    top.location.href = "/order/cart.asp";
}

function CheckedAll2(f) {

    jQuery("input[id^=checkProduct]").prop("checked", jQuery("#checkAll").prop("checked"));

    jQuery("input[id^=checkProduct]").click(function () {
        if (jQuery("input[id^=checkProduct]").length - jQuery("input[id^=checkProduct]:checked").length == 0) {
            jQuery("#checkAll").prop("checked", true);
        } else {
            jQuery("#checkAll").prop("checked", false);
        }
    })

}

function cartpriceWrong() {
    alert("주문하시는 장바구니금액과 결제금액의 합계가 맞지않습니다.\n\n장바구니로 이동하겠습니다");
    top.window.scrollTo(0, 0);
    top.location.href = "/order/cart.asp";
}

function viewCard(n) {
    if (n == 2) {
        eGiftCardEvent("show");
    } else {
        eGiftCardEvent("hide");
    }
}

var eGiftEvent = "hide";

function eGiftCardEvent(ev) {
    eGiftEvent = ev;
    if (ev == "show") {
        $(".reserve_area").show();
        $(".reserve_area input[type=text]").on("keyup", function (e) {
            giftCalc($(this));
        })
        $(".reserve_area input[name=eGiftCardAllCheck]").on("click", function (e) {
            var chk = $(this).prop("checked");
            if (chk) {
                $(".reserve_area input[type=text]").each(function () {
                    var o = $(this);
                    o.val(parseInt(o.attr("data-max-value")));
                    giftCalc(o);
                })
            } else {

            }
        })
        function giftCalc(o) {
            var amtTemp = parseInt(o.val());
            var amtMax = parseInt(o.attr("data-max-value"));
            var amtTotMax = parseInt($("input[name=OrderTotalPrice]").val());
            amtTemp = isNaN(amtTemp) ? 0 : amtTemp;
            if (amtMax < amtTemp) {
                amtTemp = amtMax;
            }
            if (amtTotMax < amtTemp) {
                amtTemp = amtTotMax;
            }
            o.val(amtTemp);
        }
    } else {
        $(".reserve_area").hide();
        $(".reserve_area input[type=text]").off("keyup");
        $(".reserve_area input[name=eGiftCardAllCheck]").on("click");
    }
}

var eGiftCardEventTimer = setInterval(function () {
    if (eGiftEvent == "show") {
        var amtTot = 0;
        var amtTotMax = parseInt($("input[name=OrderTotalPrice]").val());
        $("input[name=eGiftCardAmt]").each(function () {
            var valTmp = parseInt($(this).val());
            valTmp = isNaN(valTmp) ? 0 : valTmp;
            if ((amtTotMax - valTmp) < 0) {
                $(this).val(valTmp + (amtTotMax - valTmp));
            } else {
                amtTot += valTmp;
                amtTotMax -= valTmp;
            }
        })
        $("#eGiftCardTotleAmt").val(amtTot);
    }
}, 10);


function pay_credit() {
    if (document.user.goodname.value == "") {
        alert("상품명이 빠졌습니다. 필수항목입니다.");
        return false;
    }
    else if (document.user.price.value == "") {
        alert("결제금액이 빠졌습니다. 필수항목입니다.");
        return false;
    }
    else if (document.user.buyername.value == "") {
        alert("구매자명이 빠졌습니다. 필수항목입니다.");
        return false;
    }
    else if (document.user.buyeremail.value == "") {
        alert("구매자 이메일주소가 빠졌습니다. 필수항목입니다.");
        return false;
    }
    else if (document.user.buyertel.value == "") {
        alert("구매자 연락처가 빠졌습니다. 필수항목입니다.");
        return false;
    }
    else if (document.user.OrderDZip.value == "") {
        alert("수취인 우편번호를 입력하세요");
        document.user.OrderDZip.focus();
        return false;
    }
    else if (document.user.OrderDAddress1.value == "") {
        alert("수취인 주소를 입력하세요");
        document.user.OrderDAddress2.focus();
        return false;
    }
    else if (document.user.cardnumber.value == "") {
        alert("신용카드번호를 입력해 주세요");
        document.user.cardnumber.focus();
        return false;
    }
    else if (document.user.authfield1.value == "") {
        alert("생년월일을 입력해 주세요 (6자리)\nex)771230 ");
        document.user.authfield1.focus();
        return false;
    }
    else if (document.user.authfield2.value == "") {
        alert("카드비밀번호를 입력해 주세요.");
        document.user.authfield2.focus();
        return false;
    }

    // 더블클릭으로 인한 중복승인을 방지하려면 반드시 confirm()을
    // 사용하십시오.
    if (confirm("입력하신 정보로 결제하시겠습니까?")) {
        changeToProcess();
        document.user.method = "post";
        document.user.action = "/order/credit_result.asp";
        document.user.submit();
    }
    else {
        return false;
    }
}