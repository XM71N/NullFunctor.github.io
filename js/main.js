jQuery(document).ready(function(){

	$( "a.btn_menu" ).click(function () {
	  if ( $( ".menu_content" ).is( ":hidden" ) ) {
	    $( ".menu_content" ).fadeIn('fast');
		$('body').css( "overflow", "hidden" );
		setTimeout(function() {
	        $( ".menu" ).slideDown();
	    }, 100);

	  } else {
	    $( ".menu_content" ).hide();
		$( ".menu" ).slideUp('fast');
		$('body').css( "overflow", "inherit" );
	  }
	});

	$( "a.btn_close" ).click(function () {
		$( ".menu" ).slideUp('fast');
		$('body').css( "overflow", "inherit" );
		setTimeout(function() {
	        $( ".menu_content" ).hide();
	    }, 200);
	});


	$( ".list_tutorials li .box_hover" ).click(function () {
		$(this).parent().find('.popup_box').fadeIn();
		$(this).parent().find('.popup_shadow').fadeIn();
		var getAttr = $(this).attr("data-src");
      	$(this).parent().find("#video_play").attr("src",getAttr);

	});

	$( "a.btn_close_popup, .popup_shadow" ).click(function () {
		$( ".popup_shadow" ).fadeOut();
		$( ".popup_box" ).fadeOut();
		$(this).parent().find("#video_play").attr("src"," ");
	});


	$( "a.lang_select" ).click(function () {
		if ( $( ".lang_popup" ).is( ":hidden" ) ) {
			$( ".lang_popup" ).show();
		} else {
			$( ".lang_popup" ).hide();
		}
		return false;
	});

	$( ".lang_list a" ).click(function (e) {
		e.preventDefault();
		const nextPage = this.href;
		const selectedLang = nextPage.match(/(\w+)$/i)[1];
		setCookie('lang', selectedLang);
		location.href = nextPage;
	});

	function scrollNav() {
	  $('ul.sub_menu li a').click(function(){
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top - 0
	    }, 700);
	    return false;
	  });
	}
	scrollNav();

}); //end Document ready

function setCookie(key, value) {
	const expires = new Date();
	expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
	document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

const replaceWidgetLink = function(selector) {
	$('.coinmarketcap-currency-widget').attr('href', $(selector).attr('href'));
}

const waitForElement = function(selector, callback) {
	if ($(selector).length) {
	  callback(selector);
	} else {
	  setTimeout(function() {
		waitForElement(selector, callback);
	  }, 100);
	}
};

const bitcoinVWidgetLink = 'nav .coinmarketcap-currency-widget div div:first-child span a';

waitForElement(bitcoinVWidgetLink, replaceWidgetLink);