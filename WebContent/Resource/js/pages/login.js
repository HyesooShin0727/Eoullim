(function(ssq){
	var	struc={}, config={}, listener={};
	var  _mainImgs , mainListSub;
	ssq(document).ready(function(){ struc.init() });
	function trace(a){ var b=""; for(var i=0;i<arguments.length;i++){if(i>0)b+=", ";b+=arguments[i];} try{console.log(b);}catch(e){}}
	struc = {
		init : function() {
			struc.regist(); 
			struc.pageMethod();
			listener.start();
		},
		regist : function() {

		},
		pageMethod : function () {
			loginBox();
		}
	};
	listener = {
		start : function(){
			ssq(window).bind("resize", listener.resizePage); listener.resizePage();
			ssq("a[href=#]").on("click",function(e){
				e.preventDefault();
			})
		},
		resizePage : function(e) {
		
		}
	};

	function loginBox(){
		jQuery('.member_login > h4:not(.on)').next().hide();
		jQuery('.member_login > h4 > a').click(function(e){
			jQuery('.member_login > h4').removeClass('on');
			jQuery(this).parent().addClass('on');
			jQuery('.member_login > .cont').hide();
			jQuery(this).parent().next().show();
		});
	}
	

	
})(jQuery);