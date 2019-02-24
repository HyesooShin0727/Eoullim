var fixSPopup;
function fixSharePopup(nUrl) {
	var formStr = "";
		formStr += '<div class="fix_popup" id="mSnsPopup">';
		formStr += '	<div class="share_m">';
		formStr += '		<p>공유하기</p>	';
		formStr += '		<div class="ssSocial-Sharing" ';
		formStr += '				data-requestUrl="' + nUrl+ '" ';
		formStr += '				data-btnimage="/images/btn/ico_twitter.svg,/images/btn/ico_facebook.svg,/images/btn/ico_kakaostory.svg" ';
		formStr += '				data-requestSns="T,F,KS"> ';
		formStr += '		</div> ';
/*
		formStr += '		<div>';
		formStr += '			<a href=""><img src="/images/btn/ico_twitter.svg" alt="트위터 공유하기"></a>';
		formStr += '			<a href=""><img src="/images/btn/ico_facebook.svg" alt="페이스북 공유하기"></a>';
		formStr += '			<a href=""><img src="/images/btn/ico_kakaostory.svg" alt="카카오스토리 공유하기"></a>';
		formStr += '		</div>';
*/
		formStr += '	</div>';
		formStr += '	<button class="close" id="closeBtn2">팝업닫기</button>';
		formStr += '</div>';
		fixSPopup = new CoverLayer(formStr, {
			bg_color : "white", 		// 백그라운드 색상 기본값:"#000"
			bg_opacity : 0.4, 		// 백그라운드 투명도. 기본값:0.75
			close_btn_id : "closeBtn2", 	// 레이어 닫기 버튼 DOM id, 기본값:"closeBtn"
			z_index : 99998, 			// 레이어의 z-index 값 기본값:99990
			cast_speed : 500,		// 레이어 생성 트위닝 속도
			close_click : false,		// 어느곳이나 클릭시 닫힘 여부, 활성화:true, 비활성화:false(기본값)
			scroll_fix : false,
			align_x : "left",			// "center"(기본값), "left", "right"
			//align_x_value : 30,				// 정수, 0(기본값)
			align_y : "bottom"		// "middle"(기본값), "left", "right"
			//align_y_value : 0				// 정수, 0(기본값)
		});
};