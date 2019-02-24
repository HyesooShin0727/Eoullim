function loginChk()
{
	alert("회원가입 또는 로그인을 하신후 사용하시기 바랍니다.")
	location.href = "/member/login.asp";
}

function memberJoin(){location.href='/member/join01.asp'}
function memberSearch(){window.open("/member/pop_idpw_search.asp","pop_idpw_search","scrollbars=no,resizeable=no,width=350,height=250");}
function memberSearch1(){window.open("/member/pop_id_search.asp","pop_id_search","scrollbars=no,resizeable=no,width=350,height=250");}
function memberSearch2(){window.open("/member/pop_pw_search.asp","pop_pw_search","scrollbars=no,resizeable=no,width=350,height=250");}
function mykipage(){shop_change('/member/mypage.asp?page=1');}
function updatePage(){shop_change('/member/update.asp?page=1');}

function idSearch()
{
	var obj = document.searchForm;
	if(obj.memberName.value == "") {alert('이름을 입력해주세요');obj.memberName.focus();return false;}
	if(obj.memberJumin1.value == "") {alert('주민등록번호를 입력해주세요');obj.memberJumin1.focus();return false;}
	if(obj.memberJumin2.value == "") {alert('주민등록번호를 입력해주세요');obj.memberJumin2.focus();return false;}
	obj.action="/member/idpwSearch_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}

function idSearch1()
{
	var obj = document.searchForm;
	if(obj.memberName.value == "") {alert('이름을 입력해주세요');obj.memberName.focus();return false;}
	if(obj.memberJumin1.value == "") {alert('주민등록번호를 입력해주세요');obj.memberJumin1.focus();return false;}
	if(obj.memberJumin2.value == "") {alert('주민등록번호를 입력해주세요');obj.memberJumin2.focus();return false;}
	obj.action="/member/idSearch_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}

function pwSearch()
{
	var obj = document.searchForm;
	if(obj.memberid.value == "") {alert('아이디를 입력해주세요');obj.memberid.focus();return false;}
	if(obj.memberName.value == "") {alert('이름을 입력해주세요');obj.memberName.focus();return false;}
	if(obj.memberJumin1.value == "") {alert('주민등록번호를 입력해주세요');obj.memberJumin1.focus();return false;}
	if(obj.memberJumin2.value == "") {alert('주민등록번호를 입력해주세요');obj.memberJumin2.focus();return false;}
	obj.action="/member/pwSearch_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}

function pwSearch2()
{
    var radiolen = 0;

    radio_button = document.searchForm.pwsearch;

    if (radio_button) {
        if (radio_button.length > 1) {
            for (i = 0; i < radio_button.length; i++) {
                if (radio_button[i].checked) {
                    radiolen = 1;
                }
            }
        }
        else {
            if (radio_button.checked) {
                radiolen = 1;
                }
        }

        if (radiolen == 0) {
            alert("선택해 주세요");
            return false;
        }

    	document.searchForm.action="/member/pwSearch_result_page2.asp";
    	document.searchForm.method="post";
    	document.searchForm.target="dataFrame";
    	document.searchForm.submit();
    }

}

var nameCheck;
var agreeCheck;
var memberName;
var memberJumin;
var idCheck;
function nameCheck_fn()
{
	var obj = document.nameCheck;
	if( obj.mb_name.value == "")
	{
		alert("이름을 입력하십시오!");
		obj.mb_name.focus();
		return false;
	}

	if (obj.jumin1.value=="") {alert("\n주민번호 앞자리를 입력해주세요.");obj.jumin2.focus();return false;}
	if (obj.jumin2.value=="") {alert("\n주민번호 뒷자리를 입력해주세요.");obj.jumin2.focus();return false;}

	jumin = obj.jumin1.value + obj.jumin2.value;

	if (jumin != "" )
	{
		var ssn = jumin
		if(ssn.length < 13)
		{
			alert("주민등록번호에 오류가 있습니다. 다시 확인하여 주십시오.");
			obj.jumin1.focus();
			return false;
		}

		var rn;
		rn= ssn;
		var sum=0;
		for(i=0;i<8;i++) { sum+=rn.substring(i,i+1)*(i+2); }
		for(i=8;i<12;i++) { sum+=rn.substring(i,i+1)*(i-6); }
		sum=11-(sum%11);
		if (sum>=10) { sum-=10; }
		if (rn.substring(12,13) != sum || (rn.substring(6,7) !=1 && rn.substring(6,7) != 2 && rn.substring(6,7) !=3 && rn.substring(6,7) != 4))
		{
			alert("주민등록번호에 오류가 있습니다. 다시 확인하십시오.");
			obj.jumin1.focus();
			return false;
		}
	}
	//if (obj.agree.checked == false) {alert("\n이용약관과 개인정보취급방침 동의에 체크해 주세요.");obj.agree.focus();return false;}

	obj.action="/member/nameCheck.asp";
	//obj.action="/member/join02.asp";
	obj.method="post";
	obj.target="dataFrame3";

	return true;

	//obj.submit();

}

function agreePass()
{
	var obj = document.nameCheck;
	if(nameCheck == "1")
	{
		obj.mb_name.value = memberName;
		obj.jumin.value = memberJumin;
		obj.action="join_02.asp";
		obj.method="post";
		obj.target="_self";
		obj.submit();
	}
	else
	{
		alert('실명인증을 먼저해주세요');
	}
}

function checkid()  <!--이넘은 아이디 중복체킹을 할 때 새로운 창을 띄워준다. -->
{
   if (document.myform.memberId.value.length < 6) {
      alert("\회원 ID는 6자리 이상이어야 합니다.");
      document.myform.memberId.focus();
      return;
   }
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var memberId = document.myform.memberId.value;

    if(strFirst.indexOf(memberId.substring(0,1))<0) {
      alert("\nID 첫 글자는 영문자만 가능합니다.");
      document.myform.memberId.focus();
      return;
    }

    for(var n=0; n < memberId.length; n++) {
      thisChar = memberId.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 ID 는 조회할 수 없습니다.") ;
            document.myform.memberId.focus();
            return;
        }
    }

    for (i=0; i < memberId.length; i++) {
        if(strAll.indexOf(memberId.substring(i,i+1))<0)
        {
            alert("\nID 에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            document.myform.memberId.focus();
            return;
        }
    }

	window.open("/member/popup_idcheck.asp?mb_id="+memberId,"checkid","scrollbars=no,resizeable=no,width=335,height=300");
	return;
}

function checkid2()  <!--이넘은 아이디 중복체킹을 할 때 새로운 창을 띄워준다. -->
{
   if (document.myform.memberId.value.length < 6) {
      alert("\회원 ID는 6자리 이상이어야 합니다.");
      document.myform.memberId.focus();
      return;
   }

    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var memberId = document.myform.memberId.value;

    if(strFirst.indexOf(memberId.substring(0,1))<0) {
      alert("\nID 첫 글자는 영문자만 가능합니다.");
      document.myform.memberId.focus();
      return;
    }

    for(var n=0; n < memberId.length; n++) {
      thisChar = memberId.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 ID 는 조회할 수 없습니다.") ;
            document.myform.memberId.focus();
            return;
        }
    }

    for (i=0; i < memberId.length; i++) {
        if(strAll.indexOf(memberId.substring(i,i+1))<0)
        {
            alert("\nID 에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            document.myform.memberId.focus();
            return;
        }
    }
	if(chkMobile()){
		var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="250" id="inneriframe" src="/member/popup_idcheck.asp?mb_id='+memberId+'" scrolling="no" allowtransparency="true"></iframe>';
		 layer.text(layerText,"checkid", {width:290, height:290, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		//window.open("/member/popup_idcheck.asp?mb_id="+memberId,"checkid","scrollbars=no,resizeable=no,width=335,height=300");
		return;
	}else{
		var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="250" id="inneriframe" src="/member/popup_idcheck.asp?mb_id='+memberId+'" style="width: 100%; height: 100%;" scrolling="no" allowtransparency="true"></iframe>';
		 layer.text(layerText,"checkid", {width:505, height:335, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		//window.open("/member/popup_idcheck.asp?mb_id="+memberId,"checkid","scrollbars=no,resizeable=no,width=335,height=300");
		return;
	}
}

function checkid3()  <!--이넘은 아이디 중복체킹을 할 때 새로운 창을 띄워준다. -->
{
   if (document.passForm.TranSmemberId.value.length < 6) {
      alert("\회원 ID는 6자리 이상이어야 합니다.");
      document.passForm.TranSmemberId.focus();
      return;
   }

    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var TranSmemberId = document.passForm.TranSmemberId.value;

    if(strFirst.indexOf(TranSmemberId.substring(0,1))<0) {
      alert("\nID 첫 글자는 영문자만 가능합니다.");
      document.passForm.TranSmemberId.focus();
      return;
    }

    for(var n=0; n < TranSmemberId.length; n++) {
      thisChar = TranSmemberId.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 ID 는 조회할 수 없습니다.") ;
            document.passForm.TranSmemberId.focus();
            return;
        }
    }

    for (i=0; i < TranSmemberId.length; i++) {
        if(strAll.indexOf(TranSmemberId.substring(i,i+1))<0)
        {
            alert("\nID 에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            document.passForm.TranSmemberId.focus();
            return;
        }
    }
	if(chkMobile()){
		var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="250" id="inneriframe" src="/member/popup_idcheck2.asp?mb_id='+TranSmemberId+'" scrolling="no" allowtransparency="true"></iframe>';
		 layer.text(layerText,"checkid", {width:290, height:290, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		//window.open("/member/popup_idcheck.asp?mb_id="+TranSmemberId,"checkid","scrollbars=no,resizeable=no,width=335,height=300");
		return;
	}else{
		var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="250" id="inneriframe" src="/member/popup_idcheck2.asp?mb_id='+TranSmemberId+'" style="width: 100%; height: 100%;" scrolling="no" allowtransparency="true"></iframe>';
		 layer.text(layerText,"checkid", {width:505, height:335, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		//window.open("/member/popup_idcheck.asp?mb_id="+TranSmemberId,"checkid","scrollbars=no,resizeable=no,width=335,height=300");
		return;
	}
}
function searchZip()
{
	window.open("/member/pop_zipcode.asp","searchCode","resizeable=no,width=720,height=890, scrollbars=yes");
	return;
}

function searchZip2()
{
	var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="640" height="626" id="inneriframe" src="/member/zipcode.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
	 layer.text(layerText,"filapop", {width:640, height:626, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	//window.open("/member/pop_zipcode.asp","searchZip","resizeable=no,width=720,height=890, scrollbars=yes");
	return;
}

function postSubmit()
{
	yorn = confirm("전송하시겠습니까?");
	if(yorn)
	{
	var PostValue = document.getElementById("PostS").value;
	opener.document.myform.zipcode1.value = address[PostValue][0].substring(0,3);
	opener.document.myform.zipcode2.value = address[PostValue][0].substring(4,7);
	opener.document.myform.address1.value = address[PostValue][1]+" "+ address[PostValue][2]+" "+ address[PostValue][3];
	self.close();
	}
}


function checkid_pop() {
   if (document.myform.memberId.value.length < 6  ) {
      alert("\회원 ID는 6자리 이상이어야 합니다.");
      document.myform.memberId.focus();
      return;
   }
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var memberId = document.myform.memberId.value;

    if(strFirst.indexOf(memberId.substring(0,1))<0) {
      alert("\nID 첫 글자는 영문자만 가능합니다.");
      document.myform.memberId.focus();
      return;
    }

    for(var n=0; n < memberId.length; n++) {
      thisChar = memberId.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 ID 는 조회할 수 없습니다.") ;
            document.myform.memberId.focus();
            return;
        }
    }

    for (i=0; i < memberId.length; i++) {
        if(strAll.indexOf(memberId.substring(i,i+1))<0) {
            alert("\nID 에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            document.myform.memberId.focus();
            return;
        }
    }

	myform.submit();
}

function email_chg(objmove) {
  var obj = document.myform;
  if (objmove.options[objmove.options.selectedIndex].value == "") {
  	obj.email2.value = objmove.options[objmove.options.selectedIndex].value;
  	//obj.mb_Email2.disabled = false;
  }
  else {
  	obj.email2.value = objmove.options[objmove.options.selectedIndex].value;
  	//obj.mb_Email2.disabled = true;
  }
}

function checkid_submit(mb_id)
{
	opener.myform.memberId.value = mb_id;
	opener.idCheck = 1;
	self.close();
}

function checkBirth()
{
			b_sum = new Date(document.myform.birthY.value,(document.myform.birthM.value - 1),document.myform.birthD.value)
			if ( b_sum.getYear() % 100 != document.myform.birthY.value.substr(2,4) || b_sum.getMonth() != (document.myform.birthM.value - 1)|| b_sum.getDate() != document.myform.birthD.value) {alert("생년월일을 확인하세요");return false;}
}

function changeTel1()
{
	var obj = document.myform;
	if(obj.tel1_1.value == "000")
	{
		obj.tel1_2.value = "";
		obj.tel1_3.value = "";
		obj.tel1_2.readOnly = true;
		obj.tel1_3.readOnly = true;
	}
	else
	{
		obj.tel1_2.readOnly = false;
		obj.tel1_3.readOnly = false;
	}
}

function changeTel2()
{
	var obj = document.myform;
	if(obj.tel2_1.value == "000")
	{
		obj.tel2_2.value = "";
		obj.tel2_3.value = "";
		obj.tel2_2.readOnly = true;
		obj.tel2_3.readOnly = true;
	}
	else
	{
		obj.tel2_2.readOnly = false;
		obj.tel2_3.readOnly = false;
	}
}

function loginCheck()
{
	var obj = document.loginForm;
	if(obj.mb_id.value == "")
	{
		obj.mb_id.focus();
		alert("아이디를 입력해주세요");
		return false;
	}
	if(obj.password.value == "")
	{
		obj.password.focus();
		alert("암호를 입력해주세요");
		return false;
	}

	obj.action="/member/verify_result.asp";
	//obj.action="verify_result.asp";

	obj.submit();
}

function Merrychk(v){
  if (v=="1")  {
    document.getElementById("MerryTr").style.display="";
  }
  else {
    document.getElementById("MerryTr").style.display="none";
  }
}


function changeToProcess(){

    var processImg = new Image();
    processImg.src = "/images/waiting.gif";
    var lang;

    var imgLang = "";
	if (lang == "ja"){
	imgLang = "ja/";
	}

	if (document.all){
		document.all['checkoutbtn'].innerHTML = "<img src='"+processImg.src+"' name='overItems' id='overItems' border='0'>";
	} else if (document.layers){
		document.layers['checkoutbtn'].innerHTML = "<img src='"+processImg.src+"' name='overItems' id='overItems' border='0'>";
	} else if (document.getElementById){
		document.getElementById('checkoutbtn').innerHTML = "<img src='"+processImg.src+"' name='overItems' id='overItems' border='0'>";
	}
}

var is_setting;

//이메일 유효성 체크  추가 ( 2018-06-01 박준영 )
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}



function sendform()   <!--이부분은 회원가입시의 빈값을 체킹하는 부분이다.!!-->
{
	var obj = document.myform;

	if(obj.id_check.value=="") {
		alert("아이디 중복체크를 해주세요!");
		obj.memberId.focus();
		return;
	}


	if(obj.memberId.value=="") {
		alert("아이디를 입력하십시오!");
		obj.memberId.focus();
		return;
	}
   if ( obj.memberId.value.length < 6  ) {
      alert("\회원 ID는 6자리 이상이어야 합니다.");
      obj.memberId.focus();
      return;
   }
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var MemberID = obj.memberId.value;
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);


    if(strFirst.indexOf(MemberID.substring(0,1))<0) {
      alert("\nID 첫 글자는 영문자만 가능합니다.");
      obj.MemberID.focus();
      return;
    }

    for(var n=0; n < MemberID.length; n++) {
      thisChar = MemberID.substring(n, n+1);
        if(thisChar==' ') {
            alert("\n공백이 포함된 ID 는 조회할 수 없습니다.") ;
            obj.MemberID.focus();
            return;
        }
    }

    for (i=0; i < MemberID.length; i++) {
        if(strAll.indexOf(MemberID.substring(i,i+1))<0) {
            alert("\nID 에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberID.focus();
            return;
        }
    }

    // 비밀번호 체크
        strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
        strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   

    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

        Passwd = obj.memberPassword.value;
        var num = Passwd.search(/[0-9]/g);                          //숫자
        var eng = Passwd.search(/[a-z]/ig);                         //영소문자
        var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
		if ( Passwd == "")
		{
		    alert("\n비밀번호를 입력해 주세요");
		    obj.memberPassword.focus();
		    return;
		}


		for (var n=0; n < Passwd.length; n++)
		{
		    thisChar = Passwd.substring(n, n+1);
		    if(thisChar==' ')
		    {
		        alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
		        obj.memberPassword.focus();
		        return;
		    }
		}

		for (i=0; i < Passwd.length; i++)
		{
		    if(strAll.indexOf(Passwd.substring(i,i+1))<0)
		    {
		        alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
		        obj.memberPassword.focus();
		        return;
		    }
		}


		if( Passwd.indexOf(strYYMMDD) > -1){
		    alert("비밀번호에 생년월일을 포함할수 없습니다.");
		    return;
		}

		if( Passwd.indexOf(obj.mtel3.value) > -1){
		    alert("비밀번호에 휴대폰을 포함할수 없습니다.");
		    return;
		}

		if(Passwd.indexOf(MemberID)>-1){
		    alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
		    return;
		}


		if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)){
		    alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
		    obj.memberPassword.focus();
		    return;
		}
		else{
		    if ((num < 0 || eng < 0 || spe < 0)){
		        if (Passwd.length < 10 || Passwd.length > 20) {
		            alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
		            obj.memberPassword.focus();
		            return;
		        }
		    }
		    else {
		        if (Passwd.length < 8 || Passwd.length > 20) {
		            alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
		            obj.memberPassword.focus();
		            return;
		        }
		    }
		}


		// 비밀번호 확인
		var rePasswd = obj.memberPassword2.value;
		if (Passwd != rePasswd)
		{
			alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
			obj.memberPassword2.focus();
			return;
		}

		/*
		if(obj.zipcode1.value == "")
		{
			alert('\n주소를 입력해주세요');
			//searchZipD();
			return;
		}

		if(obj.address1.value == "")
		{
			alert('\n주소를 입력해주세요');
			//searchZipD();
			return;
		}
		*/
		/*
		if(obj.address2.value == "")
		{
			alert('\n주소를 입력해주세요');
			obj.address2.focus();
			return;
		}
		*/
		if(obj.email1.value == "")
		{
			alert('\n메일주소를 입력해주세요');
			obj.email1.focus();
			return;
		}
		if(obj.email2.value == "")
		{
			alert('\n메일주소를 입력해주세요');
			obj.email2.focus();
			return;
		}

		var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

		if (!validateEmail (fullEmail)) {
		    alert("\n올바르지 않은 이메일 주소입니다..");
		    obj.email1.focus();
		    return;
		}


		if(obj.mode.value == "ipin"){
			if(obj.mtel1.value == ""){
				alert('\n휴대폰 번호를 입력해주세요');
				obj.mtel1.focus();
				return;
			}
			if(obj.mtel2.value == ""){
				alert('\n휴대폰 번호를 입력해주세요');
				obj.mtel2.focus();
				return;
			}
			if(obj.mtel3.value == ""){
				alert('\n휴대폰 번호를 입력해주세요');
				obj.mtel3.focus();
				return;
			}
		}

		if(obj.MemberIsMaillinglist.checked == false){
			if (confirm("EMAIL 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

			}else{
					obj.MemberIsMaillinglist.focus();
					return;
			}
		}


		if(obj.MemberIsSMS.checked == false){
			if (confirm("SMS 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

			}else{
					obj.MemberIsSMS.focus();
					return;
			}
		}

		if (is_setting == "Click") {
			alert("처리중입니다.\n\n잠시만 기다려 주세요");
		}
		else
		{
			//var url = (obj.memberGroupType.value == "undefinded") ? "member_result.asp" : "member_result_employees.asp";
			//console.log($(this).is('[memberGroupType]'));
			//var url = ($(this).is('[memberGroupType]')) ? "member_result_employees.asp" : "member_result.asp";
			is_setting = "Click";
			jQuery("#loginButton").html("<img src='/images/waiting.gif'>");
			obj.action= "member_result.asp";
			obj.method="post";
			//obj.target="dataFrame"; /* doa */
			obj.submit();
		}
}

function sendformSNS()
{
	var obj = document.myform;
	if(obj.realname.value == ""){
		alert("이름을 입력하세요.");
		obj.realname.focus();;
		return;
	}

	if(obj.birthY.value == "" || obj.birthM.vlaue == "" || obj.birthD.value ==""){
		alert("생연월일을 입력하세요");
		return;
	}

	if(obj.email1.value == ""){
		alert('\n메일주소를 입력해주세요');
		obj.email1.focus();
		return;
	}

	if(obj.email2.value == ""){
		alert('\n메일주소를 입력해주세요');
		obj.email2.focus();
		return;
	}

	var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

	if (!validateEmail (fullEmail)) {
	    alert("\n올바르지 않은 이메일 주소입니다..");
	    obj.email1.focus();
	    return;
	}


	if(obj.mtel1.value == ""){
		alert('\n휴대폰 번호를 입력해주세요');
		obj.mtel1.focus();
		return;
	}

	if(obj.mtel2.value == ""){
		alert('\n휴대폰 번호를 입력해주세요');
		obj.mtel2.focus();
		return;
	}

	if(obj.mtel3.value == ""){
		alert('\n휴대폰 번호를 입력해주세요');
		obj.mtel3.focus();
		return;
	}

	if(obj.MemberIsMaillinglist.checked == false){
		if (confirm("EMAIL 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

		}else{
			obj.MemberIsMaillinglist.focus();
			return;
		}
	}

	if(obj.MemberIsSMS.checked == false){
		if (confirm("SMS 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

		}else{
			obj.MemberIsSMS.focus();
			return;
		}
	}

	if(is_setting == "Click"){
		alert("처리중입니다.\n\n잠시만 기다려 주세요");
	}else{
		is_setting = "Click";
		jQuery("#loginButton").html("<img src='/images/waiting.gif'>");
		obj.action="sns_member_result.asp";
		obj.method="post";
		obj.target="dataFrame";
		obj.submit();
	}
}

function migrationsendform(){

	var obj = document.myform;

	if(obj.id_check.value=="") {
		alert("아이디 중복체크를 해주세요!");
		obj.memberId.focus();
		return;
	}


	if(obj.memberId.value=="") {
		alert("아이디를 입력하십시오!");
		obj.memberId.focus();
		return;
	}
   if ( obj.memberId.value.length < 6  ) {
      alert("\회원 ID는 6자리 이상이어야 합니다.");
      obj.memberId.focus();
      return;
   }
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var MemberID = obj.memberId.value;
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);
    
    if(strFirst.indexOf(MemberID.substring(0,1))<0) {
      alert("\nID 첫 글자는 영문자만 가능합니다.");
      obj.MemberID.focus();
      return;
    }

    for(var n=0; n < MemberID.length; n++) {
      thisChar = MemberID.substring(n, n+1);
        if(thisChar==' ') {
            alert("\n공백이 포함된 ID 는 조회할 수 없습니다.") ;
            obj.MemberID.focus();
            return;
        }
    }

    for (i=0; i < MemberID.length; i++) {
        if(strAll.indexOf(MemberID.substring(i,i+1))<0) {
            alert("\nID 에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberID.focus();
            return;
        }
    }

 // 비밀번호 체크
    strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // 비밀번호 확인 방식 변경 ( 2018-10-16 박준영 )

    Passwd = obj.memberPassword.value;

        var num = Passwd.search(/[0-9]/g);                          //숫자
        var eng = Passwd.search(/[a-z]/ig);                         //영소문자
        var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자

		if ( Passwd == "")
		{
		    alert("\n비밀번호를 입력해 주세요");
		    obj.memberPassword.focus();
		    return;
		}


		for (var n=0; n < Passwd.length; n++)
		{
		    thisChar = Passwd.substring(n, n+1);
		    if(thisChar==' ')
		    {
		        alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
		        obj.memberPassword.focus();
		        return;
		    }
		}

		for (i=0; i < Passwd.length; i++)
		{
		    if(strAll.indexOf(Passwd.substring(i,i+1))<0)
		    {
		        alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
		        obj.memberPassword.focus();
		        return;
		    }
		}


		if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
		    alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
		    obj.memberPassword.focus();
		    return;
		}
		else {
		    if ((num < 0 || eng < 0 || spe < 0)) {
		        if (Passwd.length < 10 || Passwd.length > 20) {
		            alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
		            obj.memberPassword.focus();
		            return;
		        }
		    }
		    else {
		        if (Passwd.length < 8 || Passwd.length > 20) {
		            alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
		            obj.memberPassword.focus();
		            return;
		        }
		    }
		}


		if( Passwd.indexOf(strYYMMDD) > -1){
		    alert("비밀번호에 생년월일을 포함할수 없습니다.");
		    return;
		}
    
		if( Passwd.indexOf(obj.mtel3.value) > -1){
		    alert("비밀번호에 휴대폰을 포함할수 없습니다.");
		    return;
		}

		if(Passwd.indexOf(MemberID)>-1){
		    alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
		    return;
		}

		// 비밀번호 확인
		var rePasswd = obj.memberPassword2.value;
		if (Passwd != rePasswd)
		{
			alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
			obj.memberPassword2.focus();
			return;
		}

		if(obj.zipcode1.value == "")
		{
			alert('\n주소를 입력해주세요');
//			searchZipD();
			return;
		}

		if(obj.address1.value == "")
		{
			alert('\n주소를 입력해주세요');
//			searchZipD();
			return;
		}
		/*
		if(obj.address2.value == "")
		{
			alert('\n주소를 입력해주세요');
			obj.address2.focus();
			return;
		}
		*/
		if(obj.email1.value == "")
		{
			alert('\n메일주소를 입력해주세요');
			obj.email1.focus();
			return;
		}
		if(obj.email2.value == "")
		{
			alert('\n메일주소를 입력해주세요');
			obj.email2.focus();
			return;
		}

		var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

		if (!validateEmail (fullEmail)) {
		    alert("\n올바르지 않은 이메일 주소입니다..");
		    obj.email1.focus();
		    return;
		}


		if(obj.mode.value == "ipin"){
			if(obj.mtel1.value == ""){
				alert('\n휴대폰 번호를 입력해주세요');
				obj.mtel1.focus();
				return;
			}
			if(obj.mtel2.value == ""){
				alert('\n휴대폰 번호를 입력해주세요');
				obj.mtel2.focus();
				return;
			}
			if(obj.mtel3.value == ""){
				alert('\n휴대폰 번호를 입력해주세요');
				obj.mtel3.focus();
				return;
			}
		}

		if(obj.MemberIsMaillinglist.checked == false){
			if (confirm("EMAIL 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

			}else{
					obj.MemberIsMaillinglist.focus();
					return false;
			}
		}


		if(obj.MemberIsSMS.checked == false){
			if (confirm("SMS 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

			}else{
					obj.MemberIsSMS.focus();
					return false;
			}
		}

		if (is_setting == "Click") {
			alert("처리중입니다.\n\n잠시만 기다려 주세요");
		}
		else
		{
			jQuery("#loginButton").html("<img src='/images/waiting.gif'>");
			obj.action="migration_join_result.asp";
			obj.method="post";
			obj.target="dataFrame";
			obj.submit();
		}

}


function migrationAllretire(){
	var obj = document.kcbResultForm;
}




/**
 * 유효한(존재하는) 월(月)인지 체크
 */
function isValidMonth(mm) {
    var m = parseInt(mm,10);
    return (m >= 1 && m <= 12);
}

/**
 * 유효한(존재하는) 일(日)인지 체크
 */
function isValidDay(yyyy, mm, dd) {
    var m = parseInt(mm,10) - 1;
    var d = parseInt(dd,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}


function updateform()
{
	var obj = document.myform;



  if(obj.zipcode1.value == "")
  {
  	alert('\n주소를 입력해주세요');
  	searchZip();
  	return;
  }

  if(obj.address1.value == "")
  {
  	alert('\n주소를 입력해주세요');
		searchZip();
  	return;
  }
    
  if(obj.email1.value == "")
  {
  	alert('\n메일주소를 입력해주세요');
		obj.email.focus();
  	return;
  }

  if(obj.email2.value == "")
  {
      alert('\n메일주소를 입력해주세요');
      obj.email2.focus();
      return;
  }

  var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

  if (!validateEmail (fullEmail)) {
      alert("\n올바르지 않은 이메일 주소입니다..");
      obj.email1.focus();
      return;
  }

/*
	if(obj.MemberIsMaillinglist.checked == false){
		if (confirm("EMAIL 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

		}else{
				obj.MemberIsMaillinglist.focus();
				return false;
		}
	}


	if(obj.MemberIsSMS.checked == false){
		if (confirm("SMS 수신동의를 원치 않으실 경우 \n구매 내역 및 기타 쿠폰, 행사 등의 안내를 받으실 수 없습니다."))	{

		}else{
				obj.MemberIsSMS.focus();
				return false;
		}
	}
*/

	//obj.action="update_result.asp";
	obj.action="/member/update_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}

function dormancyform()
{
	var obj = document.myform;

    // 비밀번호 체크
    strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    Passwd = obj.memberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);

		if ( Passwd == "")
		{
		    alert("\n비밀번호를 입력해 주세요");
		    obj.memberPassword.focus();
		    return;
		}

		for (var n=0; n < Passwd.length; n++)
		{
		    thisChar = Passwd.substring(n, n+1);
		    if(thisChar==' ')
		    {
		        alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
		        obj.memberPassword.focus();
		        return;
		    }
		}

		for (i=0; i < Passwd.length; i++)
		{
		    if(strAll.indexOf(Passwd.substring(i,i+1))<0)
		    {
		        alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
		        obj.memberPassword.focus();
		        return;
		    }
		}

		if( Passwd.indexOf(strYYMMDD) > -1){
		    alert("비밀번호에 생년월일을 포함할수 없습니다.");
		    return;
		}

		if( Passwd.indexOf(obj.mtel3.value) > -1){
		    alert("비밀번호에 휴대폰을 포함할수 없습니다.");
		    return;
		}

		if(Passwd.indexOf(obj.MemberID.value)>-1){
		    alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
		    return;
		}

        if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
            alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
            obj.memberPassword.focus();
            return;
        }
        else {
            if ((num < 0 || eng < 0 || spe < 0)) {
                if (Passwd.length < 10 || Passwd.length > 20) {
                    alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
                    obj.memberPassword.focus();
                    return;
                }
            }
            else {
                if (Passwd.length < 8 || Passwd.length > 20) {
                    alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
                    obj.memberPassword.focus();
                    return;
                }
            }
        }


		// 비밀번호 확인
		var rePasswd = obj.memberPassword2.value;
		if (Passwd != rePasswd)
		{
			alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
			obj.memberPassword2.focus();
			return;
		}

  if(obj.zipcode1.value == "")
  {
  	alert('\n주소를 입력해주세요');
  	searchZip();
  	return;
  }

  if(obj.address1.value == "")
  {
  	alert('\n주소를 입력해주세요');
		searchZip();
  	return;
  }

  if(obj.mtel2.value == "" || obj.mtel3.value == "")
  {
  		alert('\n전화번호를 입력해주세요');
		obj.mtel2.focus();
	  	return;
  }

  if(obj.email1.value == "")
  {
  	alert('\n메일주소를 입력해주세요');
		obj.email.focus();
  	return;
  }

  if(obj.email2.value == "")
  {
      alert('\n메일주소를 입력해주세요');
      obj.email2.focus();
      return;
  }

  var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

  if (!validateEmail (fullEmail)) {
      alert("\n올바르지 않은 이메일 주소입니다..");
      obj.email1.focus();
      return;
  }

	obj.action="dormancy_result.asp";
	//obj.action="/member/update_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}


function updateform_test()
{
	var obj = document.myform;


  if(obj.zipcode1.value == "")
  {
  	alert('\n주소를 입력해주세요');
  	searchZip();
  	return;
  }

  if(obj.address1.value == "")
  {
  	alert('\n주소를 입력해주세요');
		searchZip();
  	return;
  }

  if(obj.mtel2.value == "" || obj.mtel3.value == "")
  {
  		alert('\n전화번호를 입력해주세요');
		obj.mtel2.focus();
	  	return;
  }

  if(obj.email1.value == "")
  {
  	alert('\n메일주소를 입력해주세요');
		obj.email.focus();
  	return;
  }

  if(obj.email2.value == "")
  {
      alert('\n메일주소를 입력해주세요');
      obj.email2.focus();
      return;
  }

  var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

  if (!validateEmail (fullEmail)) {
      alert("\n올바르지 않은 이메일 주소입니다..");
      obj.email1.focus();
      return;
  }

	obj.action="/mypage/test/update_result.asp";
	//obj.action="/member/update_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}

function updateform2()
{
	var obj = document.myform;



  if(obj.zipcode1.value == "")
  {
  	alert('\n주소를 입력해주세요');
  	searchZip();
  	return;
  }

  if(obj.address1.value == "")
  {
  	alert('\n주소를 입력해주세요');
		searchZip();
  	return;
  }

  if(obj.mtel2.value == "" || obj.mtel3.value == "")
  {
  		alert('\n전화번호를 입력해주세요');
		obj.mtel2.focus();
	  	return;
  }

  if(obj.email1.value == "")
  {
  	alert('\n메일주소를 입력해주세요');
		obj.email.focus();
  	return;
  }

  if(obj.email2.value == "")
  {
      alert('\n메일주소를 입력해주세요');
      obj.email2.focus();
      return;
  }

  var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

  if (!validateEmail (fullEmail)) {
      alert("\n올바르지 않은 이메일 주소입니다..");
      obj.email1.focus();
      return;
  }


	obj.action="update_result2.asp";
	//obj.action="/member/update_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();
}


function migration_updateform(){

	var obj = document.myform;


 // 비밀번호 체크
    strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

        Passwd = obj.MemberPassword.value;
        var num = Passwd.search(/[0-9]/g);                          //숫자
        var eng = Passwd.search(/[a-z]/ig);                         //영소문자
        var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자

        var strYYMMDD = ( obj.hidbirthY.value + obj.hidbirthM.value + obj.hidbirthD.value ).substring(2,8);       
                        

		if ( Passwd == "")
		{
		    alert("\n비밀번호를 입력해 주세요");
		    obj.MemberPassword.focus();
		    return;
		}

		for (var n=0; n < Passwd.length; n++)
		{
		    thisChar = Passwd.substring(n, n+1);
		    if(thisChar==' ')
		    {
		        alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
		        obj.MemberPassword.focus();
		        return;
		    }
		}

		for (i=0; i < Passwd.length; i++)
		{
		    if(strAll.indexOf(Passwd.substring(i,i+1))<0)
		    {
		        alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
		        obj.MemberPassword.focus();
		        return;
		    }
		}

		if( Passwd.indexOf(strYYMMDD) > -1){
		    alert("비밀번호에 생년월일을 포함할수 없습니다.");
		    return;
		}

        
		if( Passwd.indexOf(obj.hidmtel3.value) > -1){
		    alert("비밀번호에 휴대폰을 포함할수 없습니다.");
		    return;
		}

		if(Passwd.indexOf(obj.MemberID.value)>-1){
		    alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
		    return;
		}


		if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
		    alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
		    obj.memberPassword.focus();
		    return;
		}
		else {
		    if ((num < 0 || eng < 0 || spe < 0)) {
		        if (Passwd.length < 10 || Passwd.length > 20) {
		            alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
		            obj.memberPassword.focus();
		            return;
		        }
		    }
		    else {
		        if (Passwd.length < 8 || Passwd.length > 20) {
		            alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
		            obj.memberPassword.focus();
		            return;
		        }
		    }
		}


		// 비밀번호 확인
		var rePasswd = obj.MemberPassword2.value;
		if (Passwd != rePasswd)
		{
			alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
			obj.MemberPassword2.focus();
			return;
		}

  if(obj.zipcode1.value == "")
  {
  	alert('\n주소를 입력해주세요');
  	searchZip();
  	return;
  }

  if(obj.address1.value == "")
  {
  	alert('\n주소를 입력해주세요');
		searchZip();
  	return;
  }

  if(obj.mtel2.value == "" || obj.mtel3.value == "")
  {
  		alert('\n전화번호를 입력해주세요');
		obj.mtel2.focus();
	  	return;
  }

  if(obj.email1.value == "")
  {
  	alert('\n메일주소를 입력해주세요');
		obj.email.focus();
  	return;
  }

  if(obj.email2.value == "")
  {
      alert('\n메일주소를 입력해주세요');
      obj.email2.focus();
      return;
  }

  var fullEmail = (obj.email1.value + '@'+ obj.email2.value);

  if (!validateEmail (fullEmail)) {
      alert("\n올바르지 않은 이메일 주소입니다..");
      obj.email1.focus();
      return;
  }

	obj.action="migration_result.asp";
	obj.method="post";
	obj.target="dataFrame";
	obj.submit();

}


function migrationSend(){
	var obj = document.kcbResultForm;
	obj.action = "migration_id.asp"
	obj.target = "dataFrame"
	obj.method = "post"
	obj.submit();
}

var is_setting;

function m_setting()
{
	is_setting = "Click";
}

function retire(){
	if (document.getElementById("MemberPassword"))
	{
		if (document.retireForm.MemberPassword.value == "")
		{
			alert("\n비밀번호를 입력해 주세요");
			document.retireForm.MemberPassword.focus();
			return false;
		}
	}

	if (confirm("회원에서 탈퇴하시겠습니까?\n\n탈퇴를 원하시면 확인버튼을 클릭하세요"))
	{
		retireForm.target = "dataFrame";
		retireForm.action = "retire.asp";
		retireForm.submit();
	}
}


function dormancyRetire(){
	if (confirm("회원에서 탈퇴하시겠습니까?\n\n탈퇴를 원하시면 확인버튼을 클릭하세요"))
	{
			dataFrame.location.href = "retire_dormancy.asp"
	}
}

function retire_send3(){
	if (confirm("회원에서 탈퇴하시겠습니까?\n\n탈퇴를 원하시면 확인버튼을 클릭하세요"))
		{
			agreeForm.target = "dataFrame";
			agreeForm.action = "retire.asp";
			agreeForm.submit();
	}
}

function onRetire(){

	var rtnVal = false;

	if ( document.retireForm.MemberPassword.value == "")
	{
		alert("\n비밀번호를 입력해 주세요");
		document.retireForm.MemberPassword.focus();
		rtnVal = false;
	}else{
		if (confirm("회원에서 탈퇴하시겠습니까?\n\n탈퇴를 원하시면 확인버튼을 클릭하세요"))
		{
			retireForm.target = "dataFrame";
			retireForm.action = "retire.asp";
			rtnVal = true;
		}

	}

	return rtnVal;


}

var KMCIS_window;

function openKMCISWindow(){
		window.name="main"
		var obj = document.agreeForm;
		if (obj.agree1.checked == false) {alert("\n이용약관 동의에 체크해 주세요.");obj.agree1.focus();return false;}
		if (obj.agree2.checked == false) {alert("\개인정보수집 동의에 체크해 주세요.");obj.agree2.focus();return false;}

	KMCIS_window = window.open('/mobile_cert/join_mobile1.asp', 'KMCISWindow', 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );

	if(KMCIS_window == null){
		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 사용자일 경우에는 \n화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
	}
}

function openKMCISWindow2(){
	KMCIS_window = window.open('/mobile_cert/search_mobile_id1.asp', 'KMCISWindow', 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );

	if(KMCIS_window == null){
		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 사용자일 경우에는 \n화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
	}
}

function openKMCISWindow3(){
	var obj = document.searchForm3;

 	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

	KMCIS_window = window.open('/mobile_cert/search_mobile_pw1.asp?plusInfo='+obj.memberID2.value, 'KMCISWindow', 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );

	if(KMCIS_window == null){
		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 사용자일 경우에는 \n화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
	}
}

function openKMCISWindow4(){

	var obj = document.myform;
	if (obj.agree[0].checked == false) {alert("\n개인정보 취급방침에 동의해 주세요.");obj.agree[0].focus();return false;}
	KMCIS_window = window.open('/mobile_cert/guest_pay.asp', 'KMCISWindow', 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250' );

	if(KMCIS_window == null){
		alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 사용자일 경우에는 \n화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
	}
}

function ipin_send(){
	var obj = document.agreeForm;
	if (obj.agree1.checked == false) {alert("\n이용약관 동의에 체크해 주세요.");obj.agree1.focus();return false;}
	if (obj.agree2.checked == false) {alert("\개인정보수집 동의에 체크해 주세요.");obj.agree2.focus();return false;}

	var popupWindow = window.open( "", "kcbPop", "left=200, top=100, status=0, width=450, height=550" );
	document.kcbInForm.target = "kcbPop";
	document.kcbInForm.action = "https://ipin.ok-name.co.kr/tis/ti/POTI01A_LoginRP.jsp";
	document.kcbInForm.submit();
	popupWindow.focus()	;
	return;
}

function ipin_idsearch(){

	var obj = document.myForm;

	var popupWindow = window.open( "", "kcbPop", "left=200, top=100, status=0, width=450, height=550" );
	document.kcbInForm.target = "kcbPop";

	document.kcbInForm.action = "https://ipin.ok-name.co.kr/tis/ti/POTI01A_LoginRP.jsp";

	document.kcbInForm.submit();
	popupWindow.focus()	;
	return	;

}

function ipin_idsearch2(){

	var layerText='<div style="text-align:right;position:absolute;right:-22px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="550" id="inneriframe" src="/member/cert/idsearch_ipin.asp?" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
	 layer.text(layerText,"filapop", {width:450, height:560, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	//layer.iframe("/cert/idsearch_ipin.asp","cathPop", {width:450, height:550, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return	;

}

function ipin_pwsearch(){

	var obj = document.searchForm3;

 	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

	var popupWindow = window.open( "", "kcbPop", "left=200, top=100, status=0, width=450, height=550" );
	document.kcbInForm2.target = "kcbPop";

	document.kcbInForm2.action = "https://ipin.ok-name.co.kr/tis/ti/POTI01A_LoginRP.jsp";

	document.kcbInForm2.submit();
	popupWindow.focus()	;
	return	;

}

function ipin_pwsearch2(){

	var obj = document.searchForm3;

// 	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

	var layerText='<div style="text-align:right;position:absolute;right:-22px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="550" id="inneriframe" src="/member/cert/pwsearch_ipin.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
	 layer.text(layerText,"cellpop", {width:450, height:560, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	//layer.iframe("/cert/pwsearch_ipin.asp?uid=" + obj.memberID2.value,"cathPop", {width:450, height:550, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return	;

}

function ipin_domancy(){

//	var obj = document.searchForm3;

// 	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

	var layerText='<div style="text-align:right;position:absolute;right:-22px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="550" id="inneriframe" src="/member/cert/domancy_ipin.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
	 layer.text(layerText,"cellpop", {width:450, height:560, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	//layer.iframe("/cert/pwsearch_ipin.asp?uid=" + obj.memberID2.value,"cathPop", {width:450, height:550, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return	;

}

function ipin_pwsearch_mobile(){

	var obj = document.searchForm3;

 	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}
	location.href = "/cert/pwsearch_ipin.asp?uid=" + obj.memberID2.value;

	return	;

}

function ipin_guest(){

		var obj = document.myform;
	if(!jQuery("#yes").is(":checked")){
		alert("개인정보 취급방침에 동의해 주세요.");
		return false;
	}

	var popupWindow = window.open( "", "kcbPop", "left=200, top=100, status=0, width=450, height=550" );
	document.kcbInForm.target = "kcbPop";

	document.kcbInForm.action = "https://ipin.ok-name.co.kr/tis/ti/POTI01A_LoginRP.jsp";

	document.kcbInForm.submit();
	popupWindow.focus()	;
	return	;

}

function ipin_guest2(){

		var obj = document.myform;
	if(!jQuery("#yes").is(":checked")){
		alert("개인정보 취급방침에 동의해 주세요.");
		return false;
	}

//	var popupWindow = window.open( "", "kcbPop", "left=200, top=100, status=0, width=450, height=550" );
//	document.kcbInForm.target = "kcbPop";
	parent.jQuery("#cathPop").css("width","450px");
	parent.jQuery("#inneriframe").css("width","450px");
	document.kcbInForm.action = "https://ipin.ok-name.co.kr/tis/ti/POTI01A_LoginRP.jsp";
	document.kcbInForm.submit();
//	popupWindow.focus()	;
	return	;

}

function ipin_guest_mobile(){

		var obj = document.myform;
	if(!jQuery("#yes").is(":checked")){
		alert("개인정보 취급방침에 동의해 주세요.");
		return false;
	}

//	var popupWindow = window.open( "", "kcbPop", "left=200, top=100, status=0, width=450, height=550" );
//	document.kcbInForm.target = "kcbPop";

	document.kcbInForm.action = "https://ipin.ok-name.co.kr/tis/ti/POTI01A_LoginRP.jsp";

	document.kcbInForm.submit();
//	popupWindow.focus()	;
	return	;

}

function safe_send(){

	var obj = document.agreeForm;

	if(obj.agree1.checked == false){
		alert("\n이용약관 동의에 체크해 주세요.");
		obj.agree1.focus();
		return false;
	}
	if(obj.agree2.checked == false){
		alert("\개인정보수집 동의에 체크해 주세요.");
		obj.agree2.focus();
		return false;
	}

		window.open("", "auth_popup", "width=432,height=560,scrollbar=yes");

		document.form1.action = "http://safe.ok-name.co.kr/CommonSvl";
		document.form1.target = "auth_popup";
		document.form1.method = "post";

		document.form1.submit();

}

function safe_pwsearch(){

		window.open("", "auth_popup", "width=432,height=560,scrollbar=yes");

		document.form1.action = "http://safe.ok-name.co.kr/CommonSvl";
		document.form1.target = "auth_popup";
		document.form1.method = "post";

		document.form1.submit();

}

function safe_pwsearch2(){

	var obj = document.searchForm3;
//	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

	var layerText='<div style="text-align:right;position:absolute;right:-22px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="410" height="655" id="inneriframe" src="/member/cert/pwsearch_safe.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
		 layer.text(layerText,"cellpop", {width:410, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	//layer.iframe("/cert/pwsearch_safe.asp?uid=" + obj.memberID2.value,"cathPop", {width:432, height:560, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return	;

}

function safe_domancy(){


	var layerText='<div style="text-align:right;position:absolute;right:-22px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="410" height="655" id="inneriframe" src="/member/cert/domancy_safe.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
		 layer.text(layerText,"cellpop", {width:410, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	return	;

}

function safe_pwsearch_mobile(){

	var obj = document.searchForm3;
	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

	location.href = "/member/cert/pwsearch_safe.asp?uid=" + obj.memberID2.value;
	//layer.iframe("/cert/pwsearch_safe.asp?uid=" + obj.memberID2.value,"cathPop", {width:432, height:560, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return	;

}

function safe_pwsearchGo(){


	var obj = document.searchForm3;

 	if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}
	dataFrame.location.href="idpw_search_iframe.asp";

}

function safe_idsearch(){

		window.open("", "auth_popup", "width=432,height=560,scrollbar=yes");

		document.form1.action = "http://safe.ok-name.co.kr/CommonSvl";
		document.form1.target = "auth_popup";
		document.form1.method = "post";

		document.form1.submit();

}

function safe_idsearch2(){

	var layerText='<div style="text-align:right;position:absolute;right:-22px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="560" id="inneriframe" src="/member/cert/idsearch_safe.asp" style="width: 100%; height: 100%;" allowtransparency="true"></iframe>';
	 layer.text(layerText,"smallpop", {width:410, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

	//layer.iframe("/cert/idsearch_safe.asp","cathPop", {width:432, height:560, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
	return	;

}




function safe_send_Order(){

	if(!jQuery("#yes").is(":checked")){
		alert("개인정보 취급방침에 동의해 주세요.");
		return false;
	}

		window.open("", "auth_popup", "width=432,height=560,scrollbar=yes");

		document.form1.action = "http://safe.ok-name.co.kr/CommonSvl";
		document.form1.target = "auth_popup";
		document.form1.method = "post";

		document.form1.submit();

}

function safe_send_Order_mobile(){

	if(!jQuery("#yes").is(":checked")){
		alert("개인정보 취급방침에 동의해 주세요.");
		return false;
	}


		document.form1.action = "http://safe.ok-name.co.kr/CommonSvl";
		document.form1.method = "post";

		document.form1.submit();

}

function safe_send_Order_mobile2(){

	if(!jQuery("#yes").is(":checked")){
		alert("개인정보 취급방침에 동의해 주세요.");
		return false;
	}
	parent.jQuery("#cathPop").css("width","450px");
	parent.jQuery("#inneriframe").css("width","450px");
	//parent.jQuery("#cathPop").css("height","860px");

		//window.open("", "auth_popup", "width=432,height=560,scrollbar=yes");

		document.form1.action = "http://safe.ok-name.co.kr/CommonSvl";
		//document.form1.target = "auth_popup";
		document.form1.method = "post";

		document.form1.submit();

}

var nIndexBackup = -1

function ShowLayer_comment(nIndex)
{
//	alert(document.getElementById('info_div').style.height);

	if (document.all["BBS1" + nIndex].style.display == "") {
		document.all["BBS1" + nIndex].style.display = "none";
		nIndexBackup = -1;
		return;
	}

	if (nIndexBackup != -1) {
		document.all["BBS1" + nIndexBackup].style.display = "none";
	}

	document.all["BBS1" + nIndex].style.display = "";
	nIndexBackup = nIndex
}

function search_order(frm) {

	var frm = document.loginForm;

	if(frm.OrderOName.value=="" || frm.OrderOName.value=="주문자명") {
		alert("\n주문자명을  입력해주세요")
		frm.OrderOName.focus();
		return;
	}
	if(frm.OrderNo.value=="" || frm.OrderNo.value=="주문번호") {
		alert("\n주문번호를  입력해주세요")
		frm.OrderNo.focus();
		return;
	}
	frm.target = "";
	frm.action = "/mypage/myOrder.asp"
	frm.method = "get";
	frm.submit();
}

function pw_updateform()
{
	var obj = document.myform;

 // 비밀번호 체크
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var sChar = "-_=+\|()*&^%$#@!~`?></;,.:'";

    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    Passwd = obj.memberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);
    
	var sChar_Count = 0;
	var strCheck = false;
	var numberCheck = false;

      if ( Passwd == "")
      {
        alert("\n비밀번호를 입력해 주세요");
        obj.MemberPassword.focus();
        return false;
    }

  for(var i=0; i<Passwd.length; i++){
  	if(sChar.indexOf(Passwd.charAt(i)) != -1){
    sChar_Count++;
   }
   if(strFirst.indexOf(Passwd.charAt(i)) != -1){
    strCheck = true;
   }
   if(number.indexOf(Passwd.charAt(i)) != -1){
    numberCheck = true;
   }
  }

  if(sChar_Count == 0 && strCheck != true && numberCheck == true){
   	//obj.MemberPassword.focus();
//   alert("비밀번호는 숫자로만 입력하실 수 없습니다.");
//   return false;
  }

  if( Passwd.indexOf(strYYMMDD) > -1){
      alert("비밀번호에 생년월일을 포함할수 없습니다.");
      return;
  }

  if( Passwd.indexOf(obj.mtel3.value) > -1){
      alert("비밀번호에 휴대폰을 포함할수 없습니다.");
      return;
  }

  if(Passwd.indexOf(obj.memberId.value)>-1){
      alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
      return;
  }

  for (var n=0; n < Passwd.length; n++)
  {
      thisChar = Passwd.substring(n, n+1);
      if(thisChar==' ')
      {
          alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
          obj.MemberPassword.focus();
          return false;
      }
  }

  for (i=0; i < Passwd.length; i++)
  {
      if(strAll.indexOf(Passwd.substring(i,i+1))<0)
      {
          alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
          obj.MemberPassword.focus();
          return false;
      }
  }



  if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
      alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
      obj.memberPassword.focus();
      return;
  }
  else {
      if ((num < 0 || eng < 0 || spe < 0)) {
          if (Passwd.length < 10 || Passwd.length > 20) {
              alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
              obj.memberPassword.focus();
              return;
          }
      }
      else {
          if (Passwd.length < 8 || Passwd.length > 20) {
              alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
              obj.memberPassword.focus();
              return;
          }
      }
  }








  // 비밀번호 확인
  var rePasswd = obj.memberPassword2.value;
  if (Passwd != rePasswd)
  {
    alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
    obj.MemberPassword2.focus();
    return false;
  }

	obj.method = "post";
	obj.target = "dataFrame";
	obj.action = "/member/pw_result.asp"
	obj.submit();
}


	function chkMobile(){
		var ua = window.navigator.userAgent.toLowerCase();
		var tempVal = false;
		if ( /iphone/.test(ua) || /ipad/.test(ua) ||/android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {
			tempVal = true
		}
		return tempVal
	}

	function safe_send2(){
		var obj = document.agreeForm;
		var w = 450;
		var h = 560;
		var ww = window.document.body.offsetWidth;
		var hh = window.document.body.offsetHeight;

		if(obj.agree1.checked == false){
			alert("\n이용약관 동의에 체크해 주세요.");
			obj.agree1.focus();
			return false;
		}

		if(obj.agree2.checked == false){
			alert("\개인정보수집 및 활용에 대한 동의에 체크해 주세요.");
			obj.agree2.focus();
			return false;
		}

		if(obj.agree3 && obj.agree3.checked == false){
			alert("\패밀리몰 이용약관에 대한 동의에 체크해 주세요.");
			obj.agree3.focus();
			return false;
		}

		if (chkMobile())  {
            $("form[name='form_chk']").attr('action', "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb");
			// document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
			document.form_chk.method = "post";
			document.form_chk.submit();
		}else{
			var layerText='<div style="text-align:right;position:absolute;right:-23px;top:-25px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="410" height="655" id="inneriframe" src="/member/cert/join_safe.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"safe", {width:410, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});


			//layer.iframe("/cert/join_safe.asp","safe", {width:w, height:h, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}

	}

	function safe_send_pre3(){
		var obj = document.agreeForm;
		var w = 450;
		var h = 560;
		var ww = window.document.body.offsetWidth;
		var hh = window.document.body.offsetHeight;

		if(obj.agree1.checked == false){
			alert("\n이용약관 동의에 체크해 주세요.");
			obj.agree1.focus();
			return false;
		}

		if(obj.agree2.checked == false){
			alert("\개인정보수집 및 활용에 대한 동의에 체크해 주세요.");
			obj.agree2.focus();
			return false;
		}

		if(obj.agree3 && obj.agree3.checked == false){
			alert("\패밀리몰 이용약관에 대한 동의에 체크해 주세요.");
			obj.agree3.focus();
			return false;
		}
		location.href = "migration2.asp"

	}

	function safe_send3(){
		var obj = document.agreeForm;
		var w = 450;
		var h = 560;
		var ww = window.document.body.offsetWidth;
		var hh = window.document.body.offsetHeight;

		if (chkMobile())  {
			document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
			document.form_chk.method = "post";
			document.form_chk.submit();
		}else{
			var layerText='<div style="text-align:right;position:absolute;right:-23px;top:-25px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="410" height="655" id="inneriframe" src="/member/cert/oldMem_safe.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"safe", {width:410, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
			//layer.iframe("/cert/join_safe.asp","safe", {width:w, height:h, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}

	}

	function safe_send5(){
		var w = 450;
		var h = 560;
		var ww = window.document.body.offsetWidth;
		var hh = window.document.body.offsetHeight;


		if (chkMobile())  {
			document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
			document.form_chk.method = "post";
			document.form_chk.submit();
		}else{
			var layerText='<div style="text-align:right;position:absolute;right:-23px;top:-25px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="410" height="655" id="inneriframe" src="/member/cert/pwChg_safe2.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"safe", {width:410, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
			//layer.iframe("/cert/join_safe.asp","safe", {width:w, height:h, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}

	}

	function safe_send4(){
		var w = 450;
		var h = 560;
		var ww = window.document.body.offsetWidth;
		var hh = window.document.body.offsetHeight;


		if (chkMobile())  {
			document.form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
			document.form_chk.method = "post";
			document.form_chk.submit();
		}else{
			var layerText='<div style="text-align:right;position:absolute;right:-23px;top:-25px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="560" id="inneriframe" src="/member/cert/dormant_safe.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"safe", {width:401, height:655, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
			//layer.iframe("/cert/join_safe.asp","safe", {width:w, height:h, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}

	}

	function ipin_send2(){
		var obj = document.agreeForm;

		if(obj.agree1.checked == false){
			alert("\n이용약관 동의에 체크해 주세요.");
			obj.agree1.focus();
			return false;
		}

		if(obj.agree2.checked == false){
			alert("\개인정보수집 및 활용에 대한 동의에 체크해 주세요.");
			obj.agree2.focus();
			return false;
		}

		if(obj.agree3 && obj.agree3.checked == false){
			alert("\패밀리몰 이용약관에 대한 동의에 체크해 주세요.");
			obj.agree3.focus();
			return false;
		}

		if (chkMobile())  {

			document.form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
			document.form_ipin.submit();

		}else{

			var layerText='<div style="text-align:right;position:absolute;right:-37px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="590" id="inneriframe" src="/member/cert/join_ipin.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"ipin", {width:450, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

			//layer.iframe("/cert/join_ipin.asp","ipin", {width:500, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}
	}

	function ipin_send3(){
		var obj = document.agreeForm;


		if (chkMobile())  {

			document.form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
			document.form_ipin.submit();

		}else{

			var layerText='<div style="text-align:right;position:absolute;right:-37px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="590" id="inneriframe" src="/member/cert/oldMem_ipin.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"ipin", {width:450, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

			//layer.iframe("/cert/join_ipin.asp","ipin", {width:500, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}
	}

	function ipin_send4(){
		var obj = document.agreeForm;


		if (chkMobile())  {

			document.form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
			document.form_ipin.submit();

		}else{

			var layerText='<div style="text-align:right;position:absolute;right:-37px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="590" id="inneriframe" src="/member/cert/dormant_ipin.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"ipin", {width:450, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

			//layer.iframe("/cert/join_ipin.asp","ipin", {width:500, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}
	}

	function ipin_send5(){
		var obj = document.agreeForm;


		if (chkMobile())  {

			document.form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
			document.form_ipin.submit();

		}else{

			var layerText='<div style="text-align:right;position:absolute;right:-37px;top:-22px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div><iframe name="inneriframe" width="450" height="590" id="inneriframe" src="/member/cert/pwChg_ipin.asp" style="width: 100%; height: 100%;" allowtransparency="true" frameborder="0"></iframe>';
			layer.text(layerText,"ipin", {width:450, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

			//layer.iframe("/cert/join_ipin.asp","ipin", {width:500, height:590, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
		}
	}

	function agree_send(argument) {
		var obj = document.agreeForm;

		if(obj.agree1.checked == false){
			alert("\n이용약관 동의에 체크해 주세요.");
			obj.agree1.focus();
			return false;
		}

		if(obj.agree2.checked == false){
			alert("\개인정보수집 및 활용에 대한 동의에 체크해 주세요.");
			obj.agree2.focus();
			return false;
		}

		if(obj.agree3 && obj.agree3.checked == false){
			alert("\패밀리몰 이용약관에 대한 동의에 체크해 주세요.");
			obj.agree3.focus();
			return false;
		}

		obj.target = "dataFrame"
		obj.method = "post";
		obj.action = "member_result_transform.asp";
		obj.submit();
	}

	function pw_id_check(mode){
		var obj = document.searchForm3;

		if(obj.memberID2.value == "") {alert('아이디를 입력해주세요');obj.memberID2.focus();return;}

		obj.mode.value = mode;
		obj.target = "dataFrame"
		obj.method = "post";
		obj.action = "id_chk.asp";
		obj.submit();
	}

	function id_type_check(mode){
//		var mode =  jQuery("input[name=findID]:checked").val(); //체크박스 값 가져오기

		if (chkMobile())	{ //모바일일 경우
			if ( mode == "safe" ){
				location.href = "/member/cert/idsearch_safe.asp";
			}else{
				location.href = "/member/cert/idsearch_ipin.asp";
			}
		}else{
			if ( mode == "safe" ){
				safe_idsearch2();
			}else{
				ipin_idsearch2();
			}

		}

	}


    /* doa s 팝업 나중에 안씀 defalut.js에 팝업 추가*/
    // function nonmember_check()
    // {

    //     if (chkMobile())
    //     {

    //         //var layerText='<div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div><iframe name="inneriframe" width="100%" height="100%" id="inneriframe" src="/member/test/pop_nonmember.asp" scrolling="no" allowtransparency="true"></iframe>';
    //         var layerText='<div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif" ></button></div><div class="container" style="height:100%;">container</div> ';
    //         layer.text(layerText,"popUP", {width:290, height:330, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

    //     }else{
    //         var layerText='<div style="text-align:right;position:absolute;right:-23px;top:-25px;"><button type="button" onclick="layer.close();" style="background:none;"><img src="/images/btn/btn_close.png" style="background:none;"></button></div>  <div class="container" style="height:100%;">container</div> ';
    //         layer.text(layerText,"popUP", {width:410, height:370, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
    //     }

    //     var $container = $("#layerPopup .container");
    //     $container.load ("/member/test/pop_nonmember.asp");
    // }

    /* doa e*/

function updateform_pw()  // 비밀번호 찾기후 변경하는것..!
{
	var obj = document.myform;

 // 비밀번호 체크
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    Passwd = obj.memberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);

    if ( Passwd == "")
    {
        alert("\n비밀번호를 입력해 주세요");
        obj.MemberPassword.focus();
        return false;
    }

    for (var n=0; n < Passwd.length; n++)
    {
        thisChar = Passwd.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
            obj.MemberPassword.focus();
            return false;
        }
    }

    if( Passwd.indexOf(strYYMMDD) > -1){
        alert("비밀번호에 생년월일을 포함할수 없습니다.");
        return;
    }

    if( Passwd.indexOf(obj.mtel3.value) > -1){
        alert("비밀번호에 휴대폰을 포함할수 없습니다.");
        return;
    }

    if(Passwd.indexOf(obj.memberId.value)>-1){
        alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
        return;
    }

    for (i=0; i < Passwd.length; i++)
    {
        if(strAll.indexOf(Passwd.substring(i,i+1))<0)
        {
            alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberPassword.focus();
            return false;
        }
    }

     if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
         alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
         obj.memberPassword.focus();
         return;
     }
     else {
         if ((num < 0 || eng < 0 || spe < 0)) {
             if (Passwd.length < 10 || Passwd.length > 20) {
                 alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
                 obj.memberPassword.focus();
                 return;
             }
         }
         else {
             if (Passwd.length < 8 || Passwd.length > 20) {
                 alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
                 obj.memberPassword.focus();
                 return;
             }
         }
     }


  // 비밀번호 확인
  var rePasswd = obj.MemberPassword2.value;
  if (Passwd != rePasswd)
  {
    alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
    obj.MemberPassword2.focus();
    return false;
  }

	obj.method = "post";
	obj.target = "dataFrame";
	obj.action = "pwsearch_result.asp";
	obj.submit();
}


function changeLater() {
	//if ( document.getElementById("pwskip").checked ) {
		setCookie( "pwCampaign", "done" , 30);
	//}

	var rtnUrl = jQuery("#rtnUrl").val();

	if ( rtnUrl == "") {
		top.location.href="/main/main.asp";
	}else {
		top.location.href = rtnUrl;
	}
}

function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}


function pwcampaign_updateform()
{
	var obj = document.myform;

 // 비밀번호 체크
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var sChar = "-_=+\|()*&^%$#@!~`?></;,.:'";

    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    var Passwd = obj.MemberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
	var sChar_Count = 0;
	var strCheck = false;
	var numberCheck = false;
	var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);

    if ( Passwd == "")
    {
        alert("\n비밀번호를 입력해 주세요");
        obj.MemberPassword.focus();
        return false;
    }

    for(var i=0; i<Passwd.length; i++){
        if(sChar.indexOf(Passwd.charAt(i)) != -1){
            sChar_Count++;
        }
        if(strFirst.indexOf(Passwd.charAt(i)) != -1){
            strCheck = true;
        }
        if(number.indexOf(Passwd.charAt(i)) != -1){
            numberCheck = true;
        }
    }

      if(sChar_Count == 0 && strCheck != true && numberCheck == true){
   	        //obj.MemberPassword.focus();
            //   alert("비밀번호는 숫자로만 입력하실 수 없습니다.");
            //   return false;
      }


    for (var n=0; n < Passwd.length; n++)
    {
        thisChar = Passwd.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
            obj.MemberPassword.focus();
            return false;
        }
    }

     for (i=0; i < Passwd.length; i++)
     {
        if(strAll.indexOf(Passwd.substring(i,i+1))<0)
        {
            alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberPassword.focus();
            return false;
        }
     }


     if( Passwd.indexOf(strYYMMDD) > -1){
         alert("비밀번호에 생년월일을 포함할수 없습니다.");
         return;
     }

     if( Passwd.indexOf(obj.mtel3.value) > -1){
         alert("비밀번호에 휴대폰을 포함할수 없습니다.");
         return;
     }

     if(Passwd.indexOf(obj.memberId.value)>-1){
         alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
         return;
     }


 
     if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
         alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
         obj.memberPassword.focus();
         return;
     }
     else {
         if ((num < 0 || eng < 0 || spe < 0)) {
             if (Passwd.length < 10 || Passwd.length > 20) {
                 alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
                 obj.memberPassword.focus();
                 return;
             }
         }
         else {
             if (Passwd.length < 8 || Passwd.length > 20) {
                 alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
                 obj.memberPassword.focus();
                 return;
             }
         }
     }


  // 비밀번호 확인
  var rePasswd = obj.MemberPassword2.value;
  if (Passwd != rePasswd)
  {
    alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
    obj.MemberPassword2.focus();
    return false;
  }

	obj.method = "post";
	obj.target = "dataFrame";
	obj.action = "/member/pw_campaign_result.asp"
	obj.submit();
}


function login_pw_updateform()
{
	var obj = document.myform;

 // 비밀번호 체크
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var sChar = "-_=+\|()*&^%$#@!~`?></;,.:'";
    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    var Passwd = obj.MemberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);

	var sChar_Count = 0;
	var strCheck = false;
	var numberCheck = false;

    if ( Passwd == "")
    {
        alert("\n비밀번호를 입력해 주세요");
        obj.MemberPassword.focus();
        return false;
    }

  for(var i=0; i<Passwd.length; i++){
  	if(sChar.indexOf(Passwd.charAt(i)) != -1){
    sChar_Count++;
   }
   if(strFirst.indexOf(Passwd.charAt(i)) != -1){
    strCheck = true;
   }
   if(number.indexOf(Passwd.charAt(i)) != -1){
    numberCheck = true;
   }
  }

  if(sChar_Count == 0 && strCheck != true && numberCheck == true){
   	//obj.MemberPassword.focus();
//   alert("비밀번호는 숫자로만 입력하실 수 없습니다.");
//   return false;
  }

    for (var n=0; n < Passwd.length; n++)
    {
        thisChar = Passwd.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
            obj.MemberPassword.focus();
            return false;
        }
    }

    for (i=0; i < Passwd.length; i++)
    {
        if(strAll.indexOf(Passwd.substring(i,i+1))<0)
        {
            alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberPassword.focus();
            return false;
        }
    }

    if( Passwd.indexOf(strYYMMDD) > -1){
        alert("비밀번호에 생년월일을 포함할수 없습니다.");
        return;
    }

    if( Passwd.indexOf(obj.mtel3.value) > -1){
        alert("비밀번호에 휴대폰을 포함할수 없습니다.");
        return;
    }

    if(Passwd.indexOf(obj.memberId.value)>-1){
        alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
        return;
    }



    if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
        alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
        obj.memberPassword.focus();
        return;
    }
    else {
        if ((num < 0 || eng < 0 || spe < 0)) {
            if (Passwd.length < 10 || Passwd.length > 20) {
                alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
                obj.memberPassword.focus();
                return;
            }
        }
        else {
            if (Passwd.length < 8 || Passwd.length > 20) {
                alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
                obj.memberPassword.focus();
                return;
            }
        }
    }


  // 비밀번호 확인
  var rePasswd = obj.MemberPassword2.value;
  if (Passwd != rePasswd)
  {
    alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
    obj.MemberPassword2.focus();
    return false;
  }

	obj.method = "post";
	obj.target = "dataFrame";
	obj.action = "/member/login_pw_result.asp"
	obj.submit();
}


function dormant_pw_updateform()
{
	var obj = document.myform;

 // 비밀번호 체크
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var sChar = "-_=+\|()*&^%$#@!~`?></;,.:'";

    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    var Passwd = obj.MemberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);

	var sChar_Count = 0;
	var strCheck = false;
	var numberCheck = false;

    if ( Passwd == "")
    {
        alert("\n비밀번호를 입력해 주세요");
        obj.MemberPassword.focus();
        return false;
    }

    for(var i=0; i<Passwd.length; i++){
        if(sChar.indexOf(Passwd.charAt(i)) != -1){
            sChar_Count++;
        }
        if(strFirst.indexOf(Passwd.charAt(i)) != -1){
            strCheck = true;
        }
        if(number.indexOf(Passwd.charAt(i)) != -1){
            numberCheck = true;
        }
    }

    if(sChar_Count == 0 && strCheck != true && numberCheck == true){
        //obj.MemberPassword.focus();
        //   alert("비밀번호는 숫자로만 입력하실 수 없습니다.");
        //   return false;
    }


    for (var n=0; n < Passwd.length; n++)
    {
        thisChar = Passwd.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
            obj.MemberPassword.focus();
            return false;
        }
    }

    for (i=0; i < Passwd.length; i++)
    {
        if(strAll.indexOf(Passwd.substring(i,i+1))<0)
        {
            alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberPassword.focus();
            return false;
        }
    }


    if( Passwd.indexOf(strYYMMDD) > -1){
        alert("비밀번호에 생년월일을 포함할수 없습니다.");
        return;
    }

    if( Passwd.indexOf(obj.mtel3.value) > -1){
        alert("비밀번호에 휴대폰을 포함할수 없습니다.");
        return;
    }

    if(Passwd.indexOf(obj.memberId.value)>-1){
        alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
        return;
    }


    
    if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
        alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
        obj.memberPassword.focus();
        return;
    }
    else {
        if ((num < 0 || eng < 0 || spe < 0)) {
            if (Passwd.length < 10 || Passwd.length > 20) {
                alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
                obj.memberPassword.focus();
                return;
            }
        }
        else {
            if (Passwd.length < 8 || Passwd.length > 20) {
                alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
                obj.memberPassword.focus();
                return;
            }
        }
    }


  // 비밀번호 확인
  var rePasswd = obj.MemberPassword2.value;
  if (Passwd != rePasswd)
  {
    alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
    obj.MemberPassword2.focus();
    return false;
  }

	obj.method = "post";
	obj.target = "dataFrame";
	obj.action = "/member/dormant_pw_result.asp"
	obj.submit();
}


function AllAgreeCheck(){
    var frm = document.join_agree;


    if (frm.joinall_ok.checked == true){
        frm.agree1.checked = true;
        frm.agree2.checked = true;
        if(frm.agree3)frm.agree3.checked = true;
        if(frm.agree4)frm.agree4.checked = true; 

    }else{
        frm.agree1.checked = false;
        frm.agree2.checked = false;
        if(frm.agree3) frm.agree3.checked = false;
        if(frm.agree4) frm.agree4.checked = false;
    }
}
/*
function validate(evt) {

  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }


}
*/


jQuery(function(){
	jQuery("input[onkeypress='validate(event)']").removeAttr("onkeypress").attr("type","tel").keydown(function(e){
  	if ( e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 16 ) {
  		// let it happen, don't do anything
  	}
  	else {
  		// Ensure that it is a number and stop the keypress
  		keyCode = parseInt(e.keyCode);
  		if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {

  		}else {
				e.preventDefault();
		}
		/*
  		if (keyCode < 48 || keyCode > 57 || isNaN(String.fromCharCode(keyCode))) {
				e.preventDefault();
  		}
		*/
  	}
	})
	/// 콤마 까지 허용
	jQuery("input[onkeypress='validate2(event)']").removeAttr("onkeypress").attr("type","text").keydown(function(e){
  	if ( e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 16 ) {
  		// let it happen, don't do anything
  	}
  	else {
  		// Ensure that it is a number and stop the keypress
  		keyCode = parseInt(e.keyCode);
  		if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
  		}else {
			if((keyCode == 110 || keyCode == 190)){
			}else{
				e.preventDefault();
			}
		}
		/*
  		if (keyCode < 48 || keyCode > 57 || isNaN(String.fromCharCode(keyCode))) {
				e.preventDefault();
  		}
		*/
  	}
	})
})


function idChoice(){
	var obj = document.choiceForm;
	obj.submit();
}

function migrationChk(){
	if(confirm("기존 쇼핑몰 계정 및 개인정보는 파기됩니다.\n확인을 선택하시면 회원정보 수정페이지로 이동합니다.")){
		document.myform.submit();
	}
}

function receiptType(t){

	if (t == "03")
	{
		jQuery(".receiptTypes").hide();
		jQuery(".custType03").show()
	}else
	{
		jQuery(".receiptTypes").show();
		if (t == "02")
		{
			jQuery(".cash02").show();
			jQuery(".cash01").hide();
			jQuery(".cash04").hide();
			jQuery(".custType03").hide()

			document.myform.cashRcptGbn[2].checked = true;
			cashType('02');

		}else{
			jQuery(".cash02").hide();
			jQuery(".cash01").show();
			jQuery(".cash04").show();
			jQuery(".custType03").hide()

			document.myform.cashRcptGbn[0].checked = true;
			cashType('01');
		}
	}

}

function cashType(t){
	if (t == "01")
	{
		jQuery(".cashRcptGbn_01").show();
		jQuery(".cashRcptGbn_03").hide();
		jQuery(".cashRcptGbn_04").hide();
		jQuery(".cashRcptGbn_02").hide();
	}else if (t == "02")
	{
		jQuery(".cashRcptGbn_02").show();
		jQuery(".cashRcptGbn_04").hide();
		jQuery(".cashRcptGbn_03").hide();
		jQuery(".cashRcptGbn_01").hide();
	}else if (t == "03")
	{
		jQuery(".cashRcptGbn_03").show();
		jQuery(".cashRcptGbn_01").hide();
		jQuery(".cashRcptGbn_04").hide();
		jQuery(".cashRcptGbn_02").hide();
	}else if (t == "04")
	{
		jQuery(".cashRcptGbn_04").show();
		jQuery(".cashRcptGbn_03").hide();
		jQuery(".cashRcptGbn_01").hide();
		jQuery(".cashRcptGbn_02").hide();
	}
}


function passform(){
	var obj = document.myform;
	if(obj.memberPassword.value == "")
	{
		obj.memberPassword.focus();
		alert("암호를 입력해주세요");
		return false;
	}

	obj.submit();
}

function pw_modify()
{
	var obj = document.myform;

 // 비밀번호 체크
    var strAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_=+";
    var strFirst = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var sChar = "-_=+\|()*&^%$#@!~`?></;,.:'";
    // 비밀번호 확인 방식 변경 ( 2018-10-02 박준영 )

    var Passwd = obj.memberPassword.value;
    var num = Passwd.search(/[0-9]/g);                          //숫자
    var eng = Passwd.search(/[a-z]/ig);                         //영소문자
    var spe = Passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);     //특수문자
    var strYYMMDD = (obj.birthY.value + obj.birthM.value + obj.birthD.value).substring(2,8);

	var sChar_Count = 0;
	var strCheck = false;
	var numberCheck = false;

    if ( Passwd == "")
    {
        alert("\n비밀번호를 입력해 주세요");
        obj.MemberPassword.focus();
        return false;
    }

    for(var i=0; i<Passwd.length; i++){
        if(sChar.indexOf(Passwd.charAt(i)) != -1){
            sChar_Count++;
        }
        if(strFirst.indexOf(Passwd.charAt(i)) != -1){
            strCheck = true;
        }
        if(number.indexOf(Passwd.charAt(i)) != -1){
            numberCheck = true;
        }
    }

    if(sChar_Count == 0 && strCheck != true && numberCheck == true){
        //obj.MemberPassword.focus();
        //   alert("비밀번호는 숫자로만 입력하실 수 없습니다.");
        //   return false;
    }

    for (var n=0; n < Passwd.length; n++)
    {
        thisChar = Passwd.substring(n, n+1);
        if(thisChar==' ')
        {
            alert("\n공백이 포함된 비밀번호는 사용할 수 없습니다.") ;
            obj.MemberPassword.focus();
            return false;
        }
    }

    for (i=0; i < Passwd.length; i++)
    {
        if(strAll.indexOf(Passwd.substring(i,i+1))<0)
        {
            alert("\n비밀번호에 허용할 수 없는 문자가 입력되었습니다\n\n다시 입력해 주십시요.");
            obj.MemberPassword.focus();
            return false;
        }
    }

    if( Passwd.indexOf(strYYMMDD) > -1){
        alert("비밀번호에 생년월일을 포함할수 없습니다.");
        return;
    }

    if( Passwd.indexOf(obj.mtel3.value) > -1){
        alert("비밀번호에 휴대폰을 포함할수 없습니다.");
        return;
    }

    if(Passwd.indexOf(obj.MemberID.value)>-1){
        alert("ID가 포함된 비밀번호는 사용하실 수 없습니다.");
        return;
    }


   
    if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
        alert("숫자,영소문자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.");
        obj.memberPassword.focus();
        return;
    }
    else {
        if ((num < 0 || eng < 0 || spe < 0)) {
            if (Passwd.length < 10 || Passwd.length > 20) {
                alert("비밀번호를 10자리 ~ 20자리 이내로 입력해주세요.");
                obj.memberPassword.focus();
                return;
            }
        }
        else {
            if (Passwd.length < 8 || Passwd.length > 20) {
                alert("비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.");
                obj.memberPassword.focus();
                return;
            }
        }
    }



  // 비밀번호 확인
  var rePasswd = obj.memberPassword2.value;
  if (Passwd != rePasswd)
  {
    alert("\n비밀번호가 일치 하지 않습니다.\n\n비밀번호를 재확인 해 주세요.");
    obj.MemberPassword2.focus();
    return false;
  }

	obj.method = "post";
	obj.target = "dataFrame";
	obj.action = "/mypage/pw_modify_result.asp"
	obj.submit();
}


/*아이디 중복체크 -사용 가능한 아이디*/
var dormancyPop1;
function dormancyPopup1() {
	var formStr = "";
		formStr +='	<div class="dormancy_popup">';
		formStr +=' 	<div class="popup_inner">';
		formStr +='		<h2 class="popup_title">휴면 해제가 완료되었습니다.<br/>다시 찾아주셔서 감사합니다.</h2>';
		formStr +=' 		<a class="popup_btn" href="#">정보수정</a>';
		formStr +=' 	</div>';
		formStr +='		<div class="close"><button id="closeBtn1"><img src="/images/btn/btn_close4.png" alt="닫기" /></button></div>'
		formStr +='	</div>';

	 dormancykPop1 = new CoverLayer(formStr, {
			bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
			bg_opacity : 0.75, 		// 백그라운드 투명도. 기본값:0.75
			close_btn_id : "closeBtn1", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
			z_index : 99998, 			// 레이어의 z-index 값 기본값:99990
			cast_speed : 500,		// 레이어 생성 트위닝 속도
			close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
			scroll_fix : false
			//align_x : "left",			// "center"(기본값), "left", "right"
			//align_x_value : 50,				// 정수, 0(기본값)
			//align_y : "top",			// "middle"(기본값), "left", "right"
			//align_y_value : 50				// 정수, 0(기본값)
		}
	);
}


/*협력사 임직원 퇴사자 처리*/
/*
var resignerPop;
function resignerPopup(type) {

	var url;

	switch(type) {
	    case 1:
	        url = "/member/resigner_popup.asp";
	        break;
	    case 2:
	        url = "/member/resigner_popup2.asp";
	        break;
	    case 3:
	        url = "/member/resigner_verify_popup.asp";
	        break;
	    case 4:
	        url = "/member/resigner_verify_complete_popup.asp";
	        break;
	    case 5:
	        url = "/member/resigner_verify_popup2.asp";
	        break;
	    case 6:
	        url = "/member/resigner_verify_complete_popup2.asp";
	        break;
	}

	$.ajax({
		url : url,
		method : "post",
		dataType : "html",
		data : {},
		success : function(html){
			reviewPop1 = new CoverLayer(html, {
				bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
				bg_opacity : 0.75, 		    // 백그라운드 투명도. 기본값:0.75
				close_btn_id : "btnClose1", // 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
				z_index : 9999998, 			// 레이어의 z-index 값 기본값:99990
				cast_speed : 500,		    // 레이어 생성 트위닝 속도
				close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
				scroll_fix : false
				//align_x : "left",			// "center"(기본값), "left", "right"
				//align_x_value : 50,		// 정수, 0(기본값)
				//align_y : "top",			// "middle"(기본값), "left", "right"
				//align_y_value : 50		// 정수, 0(기본값)
			});
		}
	});
}

*/

function Sms_AgreePopup() {

    if(chkMobile()){

        var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="460" id="inneriframe" src="/member/popup_agree_sms.asp" scrolling="yes" allowtransparency="true"></iframe>';
        layer.text(layerText,"checkid", {width:290, height:460, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

        return;
    }else{
   
        var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="335" id="inneriframe" src="/member/popup_agree_sms.asp" style="width: 100%; height: 100%;" scrolling="no" allowtransparency="true"></iframe>';    
        layer.text(layerText,"checkid", {width:450, height:335, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
    
        return;
    }

}


function Em_AgreePopup() {

   

    if(chkMobile()){

        var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="460" id="inneriframe" src="/member/popup_agree_em.asp" scrolling="yes" allowtransparency="true"></iframe>';
        layer.text(layerText,"checkid", {width:290, height:460, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

        return;
    }else{

        var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="335" id="inneriframe" src="/member/popup_agree_em.asp" style="width: 100%; height: 100%;" scrolling="no" allowtransparency="true"></iframe>';    
        layer.text(layerText,"checkid", {width:450, height:335,  alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
    
        return;
    }

}

function Dm_AgreePopup() {

    if(chkMobile()){

        var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="460" id="inneriframe" src="/member/popup_agree_dm.asp" scrolling="yes" allowtransparency="true"></iframe>';
        layer.text(layerText,"checkid", {width:290, height:460, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});

        return;
    }else{

        var layerText='<!--div style="text-align:right;"><button type="button" onclick="layer.close();"><img src="/images/btn/btn_pop_close.gif"></button></div--><iframe name="inneriframe" width="100%" height="335" id="inneriframe" src="/member/popup_agree_dm.asp" style="width: 100%; height: 100%;" scrolling="no" allowtransparency="true"></iframe>';    
        layer.text(layerText,"checkid", {width:450, height:335, alignX:"50%", alignY:"50%", background:true, backgroundOpacity:0.8, backgroundColor:"#333"});
    
        return;
    }

}

