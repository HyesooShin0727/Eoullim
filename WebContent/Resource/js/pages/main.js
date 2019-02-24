(function(ssq){
	var	struc={}, config={}, listener={};
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
			mainSlider();
			var mainNewTab = new MainTab('#mainNewBrandTab'),
				mainNewBrandTab1 = new MainTab('#cellcureNew'),
				mainNewBrandTab2 = new MainTab('#dearsirNew'),
				mainNewBrandTab3 = new MainTab('#peaufineeNew'),
				mainNewBrandTab4 = new MainTab('#hanskinNew'),
				mainBestTab = new MainTab('#mainBestBrandTab'),
				mainBestBrandTab1 = new MainTab('#cellcureBest'),
				mainBestBrandTab2 = new MainTab('#dearsirBest'),
				mainBestBrandTab3 = new MainTab('#peaufineeBest'),
				mainBestBrandTab4 = new MainTab('#hanskinBest'),
				mainBannerSlider = new Show1DotsSlider('.main_banner2 .slider_area .slider_box'),
				mainGoodsSlider = new Show1DotsSlider('.main_goods > .slider_box'),
				mainEventSlider = new Show1DotsSlider('.main_event > .slider_box'),
				mainGiftSlider = new Show1DotsSlider('.main_gift > .slider_box'),
				mainReivewSlider = new Show1DotsSlider('.main_review > .slider_box'),
				mainLoungeSlider = new Show1DotsSlider('.main_lounge > .slider_box'),
				mainPatentTab = new Tabs("#main_patent"),
				mainBrandChoice = new mainBrandChoiceFn("#main_brand > ul > li > .inner");
		}
	};
	listener = {
		start : function(){
			ssq(window).bind("resize", listener.resizePage); listener.resizePage();
			ssq(window).on("scroll", listener.scrollPage); listener.scrollPage();
			ssq("a[href=#]").on("click",function(e){
				e.preventDefault();
			})
			ssq('.video_area > a').click(function(){
				ssq(this).html('<div class="video_con"><iframe src="' + jQuery(this).attr('data-video') +'?autoplay=1&showinfo=0&rel=0&vp=hd1080&fs=0&wmode=opaque" frameborder="0" allowfullscreen></iframe></div>');
			});

		},
		resizePage : function(e) {
		},
		scrollPage : function(e) {
			//setScrollCast();
		}
	};
	function mainSlider() {
		/*ssq("#mainSlider").on('init', function(event, slick, direction){
			ssq('#mainSlider .slick-dots').append('<li class="slick-player"><button class="pause"></button></li>');
			ssq('#mainSlider .slick-player').click(function(e) {
				if(ssq(this).find('button').hasClass('pause')){
					//alert('pause');
					ssq('#mainSlider').slick('slickPause');
					ssq(this).find('button').removeClass('pause').addClass('play');
				}else if(ssq(this).find('button').hasClass('play')){
					//alert('play');
					ssq('#mainSlider').slick('slickPlay');
					ssq(this).find('button').removeClass('play').addClass('pause');
				}
			});
		});*/
		/*
		ssq("#mainSliderNav").on('init', function(event, slick, direction){
			ssq('#mainSliderNav').append('<div class="slick-player"><button class="pause"></button></div>');
			ssq('#mainSliderNav .slick-player').click(function(e) {
				if(ssq(this).find('button').hasClass('pause')){
					//alert('pause');
					ssq('#mainSlider').slick('slickPause');
					ssq(this).find('button').removeClass('pause').addClass('play');
				}else if(ssq(this).find('button').hasClass('play')){
					//alert('play');
					ssq('#mainSlider').slick('slickPlay');
					ssq(this).find('button').removeClass('play').addClass('pause');
				}
			});
		});

		*/

	    ssq('#mainSlider').on('init', function (event, slick) {
	        $(this).append('<div class="page-num" style="z-index:700" ><span class="current"></span> / <span class="total"></span></div>');
	        $('.current').text(slick.currentSlide + 1);
	        $('.total').text(slick.slideCount);
	    });

		ssq('#mainSlider').slick({
			infinite: true,
			dots: true,
			arrows: true, // 171011 - doa
			fade: true,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			//asNavFor: '#mainSliderNav',
			customPaging : function(slider, i) {
		        var text = ssq(slider.$slides[i]).find('img').attr('alt');
		        return '<button>'+text+'</button>';
		    }
		})
		.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		    $('.current').text(nextSlide + 1);
		});

		ssq('#hotSlider').slick({
		    infinite: true,
		    //dots: true,
		    arrows: true,
		    autoplay: true,
		    autoplaySpeed: 3000,
		    slidesToShow: 1,
		    swipeToSlide: true,
            centerPadding : 20,
		    centerMode: true,
		    variableWidth: true,
		});

		ssq('#eventSlider').on('init', function (event, slick) {
		    $(this).append('<div class="page-num" style="z-index:700" ><span class="currentEvent"></span> / <span class="totalEvent"></span></div>');
		    $('.currentEvent').text(slick.currentSlide + 1);
		    $('.totalEvent').text(slick.slideCount);
		});

		ssq('#eventSlider').slick({
			infinite: true,
			dots: true,
			arrows: true, // 171011 - doa
			fade: true,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			swipeToSlide: true,
		})
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.currentEvent').text(nextSlide + 1);
        });


		ssq('#BrandC_slider').slick({
		    infinite: true,
		    //dots: true,
		    arrows: true,
		    autoplay: true,
		    autoplaySpeed: 3000,
		    slidesToShow: 5,
		    slidesToScroll: 1,
		    swipeToSlide: true,

		});

		ssq('#BrandH_slider').slick({
		    infinite: true,
		    //dots: true,
		    arrows: true,
		    autoplay: true,
		    autoplaySpeed: 3000,
		    slidesToShow: 5,
		    slidesToScroll: 1,
		    swipeToSlide: true,
		});

		ssq('#BrandP_slider').slick({
		    infinite: true,
		    //dots: true,
		    arrows: true,
		    autoplay: true,
		    autoplaySpeed: 3000,
		    slidesToShow: 5,
		    slidesToScroll: 1,
		    swipeToSlide: true,
		});

		ssq('#BrandD_slider').slick({
		    infinite: true,
		    //dots: true,
		    arrows: true,
		    autoplay: true,
		    autoplaySpeed: 3000,
		    slidesToShow: 5,
		    slidesToScroll: 1,
		    swipeToSlide: true,
		});


		/*
		ssq('#mainSliderNav').slick({
		   //slidesToShow: 5, // doa 
		   slidesToShow: 1, // doa 
		   slidesToScroll: 1,
		   asNavFor: '#mainSlider',
		   dots: false,
		   arrows: false,
		   centerMode: true,
		   focusOnSelect: true,
		   variableWidth: true
		});
		*/
	}
	function MainTab(selector){
		this.mainTabHeading = null;
		this.mainTabCont = null;

		this.init(selector);
		this.initEvent();
	}
	MainTab.prototype.init = function(selector){
		this.mainTabHeading = ssq(selector + ' > .tab_menu');
		this.mainTabCont = ssq(selector+' > .tab_con');
		ssq(selector+' > .tab_menu:not(.on)').next().hide();
	}
	MainTab.prototype.initEvent = function(){
		var objThis = this;
		this.mainTabHeading.children('a').click(function(e){
			e.preventDefault();
			//var slider = ssq(this).parent().next().find('.slider_box');
			objThis.mainTabHeading.removeClass('on');
			ssq(this).parent().addClass('on');
			objThis.mainTabCont.hide();
			ssq(this).parent().next().show();
			/*
			if(slider){
				slider.slick('setPosition');
			}
			*/
		});
	}
	function Show1DotsSlider(selector){
		this.slider = null;
		this.init(selector);
	}
	Show1DotsSlider.prototype.init = function(selector){
		this.slider = ssq(selector);
		this.slider.slick({
			infinite: true,
			dots: true,
			arrows: false,
			fade: true,
			autoplay: false, // 171011 - doa
			autoplaySpeed: 3000,
			slidesToShow: 1
		});
	}

	function mainInstaSlider(){
		/*
		var slider = ssq('#instaSlider');
		slider.slick({
			infinite: true,
			dots: true,
			arrows: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1
		});
		*/
	}
	function setScrollCast() {

		var winScl = ssq(window).scrollTop();
		var winHg = ssq(window).height();
		var hdrH = ssq('#header').innerHeight();
		ssq('.main_banner > div').each(function(){
			var con = ssq(this);
			var conTop = con.offset().top;
			var conHg = con.height();
			if (winScl+winHg >= conTop && winScl + hdrH <conTop + conHg) {
				con.addClass('on');
			} else {
				con.removeClass('on');
			}
		});
	}

	var Tabs = function (selector) {
		var _this = this;
		// 171011 doa 
		/*
		this.init = function () {
			var idx = ssq(selector+' > .tab_menu > ul > li').index(ssq(selector+' > .tab_menu > ul > li.on'));
			_this.tabOn(idx);

			ssq(selector+' > .tab_menu > ul > li').children('a').click(function(e){
				e.preventDefault();
				if(!ssq(this).parent().hasClass('on')){
					ssq(this).parent().siblings('.on').removeClass('on').end().addClass('on');
					idx = ssq(selector+' > .tab_menu > ul > li').index(ssq(this).parent());
					_this.tabOn(idx);
				}
			});
		}

		this.tabOn = function (idx) {
			ssq(selector+' > .tab_cont > ul > li').hide();
			ssq(selector+' > .tab_cont > ul > li').eq(idx).show();

			var slider = ssq(selector+' > .tab_cont > ul > li').find('.slider_box');
			if(slider){
				slider.slick('setPosition');
			}
		}

		_this.init();
		*/
		// 171011 doa 
		ssq(selector+' > .tab_cont > ul > li').hide();
		ssq(selector+' > .tab_cont > ul > li').eq(0).show();
	}

	function mainBrandChoiceFn(selector) {
		ssq(selector).mouseenter(function() {
			ssq(this).find(".cover li").each(function(i) {
				TweenMax.fromTo(ssq(this),0.3,{alpha:0, y:-5},{alpha:1, y:0, delay:0.15*i});
			});
		});
	}

})(jQuery);
