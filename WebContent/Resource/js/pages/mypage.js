jQuery(function(){
	jQuery('.down_list >li:nth-child(3n)').addClass('last');
})
jQuery(function() {
	var today = new Date(); 
	var year = '2010:' + today. getFullYear(); //년도 범위 설정
	
	var clareCalendar = {
		showOn: "button",
		buttonImage: "/images/btn/btn_calendar.gif",
		buttonImageOnly: true,

		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd', //형식(2012-03-03)
		autoSize: true, //오토리사이즈(body등 상위태그의 설정에 따른다)
		changeMonth: true, //월변경가능
		changeYear: true, //년변경가능
		showMonthAfterYear: true, //년 뒤에 월 표시
		buttonImageOnly: true, //이미지표시
		yearRange: year //2014년 부터 현재년 가지
	};
	
	jQuery( "#dateFrom" ).datepicker(
		clareCalendar,
		{
		buttonText: "시작 날짜",
		onClose: function( selectedDate ) {
			jQuery( "#dateTo" ).datepicker( "option", "minDate", selectedDate );
		}
	});
	jQuery( "#dateTo" ).datepicker(
		clareCalendar,
		{
		buttonText: "마지막 날짜",
		onClose: function( selectedDate ) {
			jQuery( "#dateFrom" ).datepicker( "option", "maxDate", selectedDate );
		}
	});

});

jQuery(document).ready(function(){
	jQuery(".order_search .date_slc li a").click(function(e){
		jQuery(".order_search .date_slc li a[class=on]").removeClass("on");
		jQuery(this).addClass("on");
	})
});


function searchDate(sdate, term){
	jQuery("#dateFrom").val(sdate);
	jQuery("#dateTo").val(jQuery("#nowDate").val());
	jQuery("#searchDate").val(term);
};


