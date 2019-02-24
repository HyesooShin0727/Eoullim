var qnaWriteResult;
var qnaWriteCall;
var qnaListCall;
var qnaListPage;
var qnaProductNo;
var qnaModifyCall;
var qnaDeleteCall;
$(function(){
	
	var qnaPageNo = 1;
	var qnaProductNo = (function(){
		return $("div.detail_qna").attr("data-productNo");
	})()
	
	qnaWriteCall = (function(){

		$.ajax({
			url : "/product/qna/qna_write.asp",
			method : "post",
			dataType : "html",
			data : {
				productNo : qnaProductNo,
				pageNo : qnaPageNo
			},
			success : function(html){
				$("div.detail_qna > div.qna_list").hide();
				$("div.detail_qna > form").remove();
				$("div.detail_qna").append(html);
			}
		})
		
	})
	
	qnaModifyCall = (function(n){

		$.ajax({
			url : "/product/qna/qna_write.asp",
			method : "post",
			dataType : "html",
			data : {
				productNo : qnaProductNo,
				qnaNo : n,
				pageNo : qnaPageNo
			},
			success : function(html){
				$("div.detail_qna > div.qna_list").hide();
				$("div.detail_qna > form").remove();
				$("div.detail_qna").append(html);
			}
		})
		
	})
	
	qnaListCall = (function(){
		
		$.ajax({
			url : "/product/qna/qna_list.asp",
			method : "post",
			dataType : "html",
			data : {
				productNo : qnaProductNo,
				pageNo : qnaPageNo
			},
			success : function(html){
				
				$("div.detail_qna > div.qna_list").show().html(html);
				$("div.detail_qna > form").remove();
				
				$("div.detail_qna > div.qna_list > ul.qna_b > li.article > .q").off("click");
				$("div.detail_qna > div.qna_list > ul.qna_b > li.article > .q").on("click", function(e){
					var o = $(this).next();
					if(o.css("display") == "block"){
						o.slideUp(100);
					}else{
						$("div.detail_qna > div.qna_list > ul.qna_b > li.article .a").slideUp(100);
						o.slideDown(100);
					}
					e.preventDefault();
				})
				
			}
		})
		
	})
	
	qnaListPage = (function(n){
		
		qnaPageNo = n
		qnaListCall();
		
	})
	
	qnaWriteResult = (function(n){
		
		qnaPageNo = 1
		qnaListCall();
		
	})

	qnaDeleteCall = (function(n){
		
		if(confirm("삭제하시겠습니까?")){
			dataFrame.location.href = "./qna/qna_delete.asp?qNo=" + n
		}
		
	})
	
})