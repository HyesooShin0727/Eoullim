jQuery(function(SSQ){
	// Frequently Asked Question
	var article = SSQ('.faq_list>.faq_body>.article');
	article.addClass('hide');
	article.find('.a').hide();
	//article.eq(0).removeClass('hide');
	// article.eq(0).find('.a').show();
	SSQ('.faq_list>.faq_body>.article>.q>span>a').click(function(){
		var myArticle = SSQ(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show');
			article.find('.a').slideUp(100);
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
			myArticle.find('.a').slideUp(100);
		}
		return false;
	});
	SSQ('.faq>.faq_header>.showAll').click(function(){ 
		var hidden = SSQ('.faq>.faq_body>.article.hide').length;
		if(hidden > 0){
			article.removeClass('hide').addClass('show');
			article.find('.a').slideDown(100);
		} else {
			article.removeClass('show').addClass('hide');
			article.find('.a').slideUp(100);
		}
	});
});