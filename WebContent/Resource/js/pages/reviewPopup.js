var reviewPopup;
var reviewImgPopup;

$(function(){

	var reviewPop1;
	var productNo = null;
	var commentNo = null;
	var imgNo = null;

	reviewPopup = (function(v1,v2){

		productNo = v1
		commentNo = v2

		$.ajax({
			url : "/lounge/reviewPopup.asp",
			method : "post",
			dataType : "html",
			data : {
				productNo : v1,
				commentNo : v2
			},
			success : function(html){
				reviewPop1 = new CoverLayer(html, {
					bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
					bg_opacity : 0.75, 		    // 백그라운드 투명도. 기본값:0.75
					close_btn_id : "closeBtn1", // 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
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
		})

	});

	reviewImgPopup = (function(prdNo,comNo,imgNo){
		productNo = prdNo
		commentNo = comNo
		imgNo = imgNo;

		$.ajax({
			url : "/lounge/reviewImgPopup.asp",
			method : "post",
			dataType : "html",
			data : {
				productNo : prdNo,
				commentNo : comNo,
				imgNo: imgNo
			},
			success : function(html){
				reviewPop1 = new CoverLayer(html, {
					bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
					bg_opacity : 0.75, 		    // 백그라운드 투명도. 기본값:0.75
					close_btn_id : "closeBtn1", // 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
					z_index : 9999998, 			// 레이어의 z-index 값 기본값:99990
					cast_speed : 500,		    // 레이어 생성 트위닝 속도
					close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
					scroll_fix : false,
					//align_x : "left",			// "center"(기본값), "left", "right"
					//align_x_value : 50,		// 정수, 0(기본값)
					//align_y : "top",			// "middle"(기본값), "left", "right"
					//align_y_value : 60		// 정수, 0(기본값)
				});
			}
		})
	})
})