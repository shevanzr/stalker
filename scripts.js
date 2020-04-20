function inWindow(s){
  let scrollTop = $(window).scrollTop();
  let windowHeight = $(window).height();
  let currentEls = $(s);
  let result = [];
  currentEls.each(function(){
    let el = $(this);
    let offset = el.offset();
    if(scrollTop <= offset.top && (el.height() / 2 + offset.top) <= (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
} // взято с http://jquery.page2page.ru/index.php5/Элементы_в_видимой_области_окна_браузера

window.addEventListener('scroll', function(e) {
	let percentOfScroll = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100

	document.querySelector('.progress').style.width = percentOfScroll + '%';
	if( percentOfScroll*document.body.clientHeight > 30000 ) {
		$('.menu').addClass('scrolled');
	} else {
		$('.menu').removeClass('scrolled');
	}

	let images = inWindow("div.img");
	images.addClass('showed');

});

$(window).on('load', function () {
	$('#p_prldr').find('.preloader_img').fadeOut();
	$('#p_prldr').delay(250).fadeOut('slow');
	setTimeout(() => {
		$('html').removeClass('ovf_h');
	}, 250);

	let percentOfScroll = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
	if( percentOfScroll*document.body.clientHeight > 30000 ) {
		$('.menu').addClass('scrolled');
	} else {
		$('.menu').removeClass('scrolled');
	}

	setTimeout(() => {
		let images = inWindow("div.img");
		images.addClass('showed');
	}, 600);

});

function menu_open() {
	$('.menu_window').toggleClass('menu_active');
	setTimeout(() => { $('html').toggleClass('ovf_h'); }, 600);
}

function menu_close() {
	$('.menu_window').toggleClass('menu_closed');
	$('html').toggleClass('ovf_h');
	setTimeout(() => { 
		$('.menu_window').toggleClass('menu_closed');
		$('.menu_window').toggleClass('menu_active');
	}, 600);
}

// SlickSlider's

$(document).ready(function() {
	$('.timeline').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		draggable: false,
		swipe: false,
		appendDots: $('.timeline_dots')
	});
});

// timeline animation (взято со stackoverflow, чутка переделано)

function initProgress() {
	let activeDist = $('.slick-active').position();
	activeDist = activeDist.left;
	$(".timeline_up").stop().animate({
		width: activeDist + "px"
	}, 300);
}
$('.timeline_dots').click(function() {
	initProgress();
});
$(window).resize(function() {
	initProgress();
});

setTimeout(() => {
	initProgress();
}, 10);

$('.flex_slider-item').click(function() {
	if( $(this).hasClass('flex_slider-active') ) {
		$('.flex_slider-active').html('Mod\'s name');
		$('.flex_slider-active').removeClass('flex_slider-active');
	} else {
		$('.flex_slider-active').html('Mod\'s name');
		$('.flex_slider-active').removeClass('flex_slider-active');
		$(this).addClass('flex_slider-active');
		if( $(this).hasClass('flex_slider-item-first') ) {
			$(this).html('Это измененный html<br>Тут попозже будет описание мода номер 1)');
		} else
		if( $(this).hasClass('flex_slider-item-second') ) {
			$(this).html('Это измененный html<br>Тут попозже будет описание мода номер 2)');
		} else
		if( $(this).hasClass('flex_slider-item-third') ) {
			$(this).html('Это измененный html<br>Тут попозже будет описание мода номер 3)');
		} else
		if( $(this).hasClass('flex_slider-item-fourth') ) {
			$(this).html('Это измененный html<br>Тут попозже будет описание мода номер 4)');
		}
		$('.flex_slider').hover(function() {}, function() {
			$('.flex_slider-active').html('Mod\'s name');
			$('.flex_slider-active').removeClass('flex_slider-active');
		});
	}
});
