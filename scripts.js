window.addEventListener('scroll', function(e) {
	let percentOfScroll = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100

	document.querySelector('.progress').style.width = percentOfScroll + '%';
	if( percentOfScroll*document.body.clientHeight > 120000 ) {
		$('.menu').css({ 'backgroundColor' : '#ddd' });
	} else {
		$('.menu').css({ 'backgroundColor' : 'rgba(255,255,255,0)' });
	}

	console.log(percentOfScroll*document.body.clientHeight);

});

$(window).on('load', function () {
	$('#p_prldr').find('.preloader_img').fadeOut();
	$('#p_prldr').delay(250).fadeOut('slow');
});

function menu_open() {
	$('.menu_window').toggleClass('menu_active');
	$('html').toggleClass('ovf_h');
}

function menu_close() {
	$('.menu_window').toggleClass('menu_closed');
	setTimeout(() => {  $('.menu_window').toggleClass('menu_closed'); $('.menu_window').toggleClass('menu_active'); $('html').toggleClass('ovf_h'); }, 600);
}