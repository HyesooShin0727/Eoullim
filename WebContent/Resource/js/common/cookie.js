//쿠키 set/get
//2016-05-12 박재영
var cookie = {

	set : (function( cookieName, cookieValue, expireDate ){

		if(!expireDate) expireDate = 1

		var today = new Date();
		today.setDate( today.getDate() + parseInt( expireDate ) );
		document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/; expires=" + today.toGMTString() + ";";

		return true;

	}),

	setSession : (function( cookieName, cookieValue ){

		document.cookie = cookieName + "=" + escape( cookieValue ) + "; path=/;";

		return true;

	}),

	get : (function( cookieName ){

		var searchStr = cookieName;
		var returnVal = "";
		var cookies = (document.cookie).split("; ");
		for(var i in cookies){
			try{
				var tempVal = (cookies[i].replace("=","===========")).split("===========");
				if(tempVal[0] == searchStr){
					returnVal = tempVal[1];
					break;
				}
			}catch(e){
			}
		}
		return returnVal;

	})

}