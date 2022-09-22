/*  
 * @package ThemeNio @ver/1.6
 * jQuery init();
**/
jQuery(document).ready(function($) {
	$('ul li:last-child').addClass('last');
	$('ul li:first-child').addClass('first');
	// DROPDOWN MENU
	$('.inav ul').superfish({
		delay:  500,
		speed:	'normal',
		speedOut: 'slow',
		autoArrows:  false, 
		disableHI:   true,
		dropShadows: false
	});
	// MENU MOBILE
	$("#nav-icon").on("click", function(){
		$(this).prev('ul.menu').slideToggle();
		$(this).toggleClass("show");
	});
	// NO CLICK
	$('#nav ul .no-click').find('a:first').click(function(){
		return false;
	});
 	$('.section-nav a, .scroll-down a').click(function() {
		var herf = $(this).attr('href');
		$.scrollTo(herf, 800);
		return false;
	});	
	if(jQuery().waypoint) {
		$('.animated').waypoint(function() {
			var typ = $(this).data('animate'), dur = $(this).data('duration'), dly = $(this).data('delay');
			$(this).css('visibility', 'visible'); $(this).addClass('animated	'+typ);
			if(dur) {
				$(this).css('-moz-animation-duration', dur+'s');
				$(this).css('-webkit-animation-duration', dur+'s');
				$(this).css('-ms-animation-duration', dur+'s');
				$(this).css('-o-animation-duration', dur+'s');
				$(this).css('animation-duration', dur+'s');
			}
			if (dly) {
				$(this).css('-webkit-animation-delay', dly+'s');
				$(this).css('-moz-animation-delay', dly+'s');
				$(this).css('-o-animation-delay', dly+'s');
				$(this).css('-ms-animation-delay', dly+'s');
				$(this).css('animation-delay', dly+'s');
			}
		},{ triggerOnce: true, offset: '85%' });
	}
});