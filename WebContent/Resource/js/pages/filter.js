/*
	2016.07.11 Create 박재영
*/

var filterParam = "";
var filterAddParam = "";
var filterPageMove;
var filterSort;
var filterPSize;
var filterPage;
var filterNo;
var filterThumSize;
var filterSetup;

$(function(){

	var searchTimer;
	var lastParam;

	var pageSize = 15;
	var pageNo = 1;
	var sort = 1;
	var no = '';
	var ref = '';
	var thumSize = 'm';

	var listMode = $("div.product_wrap").attr("data-viewmode");

	filterSetup = (function(v1){
		for(var i in v1){
			if(v1[i] != ""){
				eval(i + "='" + v1[i] + "'");
			}
		}
	})

	filterSort = (function(v){
		sort = v;
		lastParam = "force";
		productLoad()
	})

	filterPSize = (function(v){
		pageSize = v;
		lastParam = "force";
		productLoad()
	})

	filterPage = (function(v){
		pageNo = v;
		lastParam = "force";
		productLoad()
	})

	filterNo = (function(v1,v2){
		if(v1){ no = ((v1 != 1) ? v1 : "") }
		if(v2){ ref = ((v2 != 1) ? v2 : "") }
		lastParam = "category";
		productLoad()
	})

	filterThumSize = (function(v){
		thumSize = v;
		lastParam = "force"
		productLoad();
	})



	filterInit();

	switch(listMode){
		case "pc" :
			if(location.hash != ""){
				lastParam = "reload";
				productLoad();
			}
			break;
	}

	function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	function getCateNo() {
		var  cateNo = getUrlParameter('no');
		if((getUrlParameter('no') == undefined || getUrlParameter('no') == "") && location.hash == ""){
			console.log(1);
			cateNo = 1;
		}else if(getUrlParameter('no') == undefined || location.hash != ""){
			var cookieData = unescape(cookie.get("param")),
				cookieVariables = cookieData.split('&'),
				param;
			for (var i = 0; i < cookieVariables.length; i++) {
				param = cookieVariables[i].split('=');
				if (param[0] === 'no') {
		            cateNo = param[1] === undefined ? true : param[1];
		        }
			}
		}else{
			cateNo = getUrlParameter('no');
		}
		return cateNo;
	}

	function filterInit(){

		switch(listMode){
			case "pc" :
				$(".lnb_wrap > .btn_box > .selected_box a").off();
				$(".lnb_wrap > .btn_box > .btn_reset").off();
				$(".lnb_wrap .select_box input").off();

				$(".lnb_wrap > .btn_box > .selected_box a").on("click", function(){
					optionRemove(this);
				})

				$(".lnb_wrap > .btn_box > .btn_reset").on("click",function(){
					cookie.set("param", "");
					location.href="list.asp"
				})

				$(".lnb_wrap .select_box input").on("click",
					function(e){
						optionAction(this);
					}
				)

				$(".lnb_wrap .category_box li > a[href]").on("click", function(e){
					if(!$(this).parent().hasClass('depth1')){
						$('.category_box .depth1 ul li').removeClass('on');
						$(this).parent().siblings('.on').removeClass('on').end().addClass('on');
						$(this).parent().siblings().children('ul').slideUp(300);
					}
					categoryLink($(this));
					e.preventDefault();
				})

				$('.category_box li[data-no]').each(function() {
					if($(this).data('no') == getCateNo()){
						$('.category_box .depth1 ul li').removeClass('on');
						$(this).siblings('.on').removeClass('on').end().addClass('on');
						if(!$(this).closest('.depth1').hasClass('on')){
							$(this).closest('.depth1').toggleClass('on');
							$(this).closest('.depth1').children('ul').slideToggle(300);
							$(this).closest('.depth1').siblings().removeClass('on');
							$(this).closest('.depth1').siblings().children('ul').slideUp(300);
						}
					}
				});

				break;
			case "mobile" :
				/*
				$(".lnb_wrap > .btn_box > .selected_box a").off();
				$(".lnb_wrap > .btn_box > .btn_reset").off();
				$(".lnb_wrap .select_box input").off();
				*/
				/*
				$(".lnb_wrap > .btn_box > .selected_box a").on("click", function(){
					optionRemove(this);
				})
				*/

				$(".layer_inner > .btn > a.btn_style1").on("click",function(e){
					lastParam = "filter";
					productLoad();
					e.preventDefault();
				})

				$(".layer_inner > .btn > a.btn_style2").on("click",function(e){
					cookie.set("param", "");
					location.href="list.asp"
					e.preventDefault();
				})

				$(".product_wrap ul#filterCate > li[data-param=brand] > ul > li > input").on("click",
					function(){
						optionAction(this);
					}
				)

/*
var params = "";
var paramTemp = "";
$("div#filterLayer > .layer_inner > ul#filterCate > li[data-param]").each(function(){
	var paramName = $(this).attr("data-param");
	var paramTemp = "";
	var o = $("input:checked", this);
	o.each(function(){
		var t = $(this)
		if(paramTemp != "") paramTemp += "&"
		paramTemp += paramName + "=" + $(this).val();
		console.log(paramTemp);
	})
	if(paramTemp != "") {
		if(params != ""){
			params += "&" + paramTemp
		}else{
			params += paramTemp
		}
	}
	console.log(params)
})
/*

				/*
				$(".product_wrap ul#filterCate > li > ul > li > input").on("click",
					function(){
						optionAction(this);
					}
				)
				*/

				/*
				$(".lnb_wrap .category_box li > a[href]").on("click", function(e){
					categoryLink($(this));
					e.preventDefault();
				})
				*/
				break;
		}

	}


	function categoryLink(o){
		var link = o.attr("href");
		var param = link.split("?")[(link.split("?")).length-1];
		var paramArr = param.split("&");
		var no = "";
		var ref = "";
		try{no = paramArr[0].split("=")[1]}catch(e){}
		try{ref = paramArr[1].split("=")[1]}catch(e){}
		filterNo(no,ref);
	}

	function optionAction(o){
		var o = $(o);
		var ov = o.val();
		var ot = o.next().text();
		var op = (function(){
			var tmp = o;
			for(i=1;i<10;i++){
				tmp = tmp.parent();
				if(tmp.attr("data-param") != undefined){
					break;
				}
			}
			return tmp.attr("data-param");
		})();
		lastParam = op;

		if(o.prop("checked")){
			if(o.attr("type") == "radio") $(".lnb_wrap > .btn_box > .selected_box > a[data-param=" + op + "]").remove();
			$(".lnb_wrap > .btn_box > .selected_box").append("<a href='#' data-param='" + op + "' data-value='" + ov + "'><span>" + ot + "</span></a>");
			$(".lnb_wrap > .btn_box > .selected_box a").each(function(n,o){
				$(o).off();
				$(o).on("click", function(){
					optionRemove(this);
				})
			})
		}else{
			$(".lnb_wrap > .btn_box > .selected_box > a[data-param=" + op + "][data-value=" + ov + "]").remove();
		}
		optionApply();
	}

	setInterval(function(){
		if($(".lnb_wrap > .btn_box > .selected_box").text().trim() == ""){
			$(".lnb_wrap > .btn_box > .selected_box").hide();
		}else{
			$(".lnb_wrap > .btn_box > .selected_box").show();
		}
	},100)


	//옵션제거
	function optionRemove(o){
		//var o = $(this);
		var o = $(o);
		var ov = o.attr("data-value");
		var ot = o.text();
		var op = o.attr("data-param");
		var to = $(".lnb_wrap > .btn_box");
		lastParam = op;

		o.remove();
		$(".lnb_wrap > .select_box div[data-param=" + op + "] input[value=" + ov + "]").prop("checked",false);
		/*
		if($("a[data-param][data-value]",to).length == 0){
			to.hide();
		}
		*/

		optionApply();

	}

	function optionApply(){
		clearTimeout(searchTimer);
		searchTimer = setTimeout(function(){
			productLoad()
		},100)
	}

	function paramsBuild(){

		var params = "";
		/*
		if(no == "" && ref == ""){
			params = location.search.replace("?","");
		}
		*/

		$(".lnb_wrap > .btn_box > .selected_box a[data-param][data-value]").each(function(n,o){
			if(params != "") params += "&"
			params += $(o).attr("data-param") + "=" + $(o).attr("data-value")
		})

		return params;

	}

	function productLoad(){

		var params = paramsBuild();

		params += (function(){
			var tmp = "";
			if(params != "") tmp = "&"
			tmp += "pageSize=" + pageSize;
			tmp += "&pageNo=" + (pageNo || 1);
			tmp += "&sort=" + sort;
			tmp += "&no=" + no;
			tmp += "&ref=" + ref;
			tmp += "&thumSize=" + thumSize;
			return tmp;
		})();

		if(lastParam != "reload"){
			cookie.set("param", params);
		}else{
			params = unescape(cookie.get("param"));
		}

		location.hash = "searching";
		filterParam = params;

		switch(listMode){
			case 'pc' :
				$.ajax({
					url : "/product/list.asp",
					method : "get",
					dataType : "html",
					data : params,
					success : function(html){
						var data = $.parseHTML(html);
						if(lastParam != "category"){
							if(lastParam == "brand" || lastParam == "reload" || lastParam == "force"){
								//$(".lnb_wrap").html(data[3]);
								$(".lnb_wrap").html($(html).find('.lnb_wrap').html());
								lastParam = "";
							}else{
								//$(".category_box").html($(".category_box",data[3]).html());
								$(".category_box").html($(html).find('.category_box').html());
							}
							lnbRefresh();
							filterInit();
						}
						//$(".list_wrap").html(data[7]);
						$(".location").html($(html).find('.location').html());
						$(".list_wrap").html($(html).find('.list_wrap').html());

					}
				});
				break;
			case 'mobile' :

				if(lastParam == "filter" || lastParam == "force" || lastParam == "category"){

					var params = "";
					var paramTemp = "";
					$("div#filterLayer > .layer_inner > ul#filterCate > li[data-param]").each(function(){
						var paramName = $(this).attr("data-param");
						var paramTemp = "";
						var o = $("input:checked", this);
						paramTemp = paramName + "=";
						o.each(function(){
							var t = $(this)
							if(paramTemp != paramName + "=") paramTemp += ","
							paramTemp += $(this).val();
						})
						if(paramTemp != "") {
							if(params != ""){
								params += "&" + paramTemp
							}else{
								params += paramTemp
							}
						}
					})

					location.href = "list.asp?" + params + "&" + filterParam;


				}else{

					$.ajax({
						url : "/product/list_mobile.asp",
						method : "post",
						dataType : "html",
						data : params,
						success : function(html){
//							console.log(new Date())
							var data = $.parseHTML(html);
							if(lastParam != "category"){
								var targetHtml= $("div#filterLayer > .layer_inner > ul#filterCate", data[1]);
								$("div#filterLayer > .layer_inner > ul#filterCate").html(targetHtml.html());
								//$(".category_box").html($(".category_box",data[3]).html());
								lnbRefresh();
								filterInit();
							}
							$(".list_wrap").html(data[7]);

						}
					})

				}

				break;
		}



	}

})