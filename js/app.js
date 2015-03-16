// $(window).load(function() {
// 		// Animate loader off screen
// 		$(".se-pre-con").fadeOut("slow");
// });
var fullWidth = function(){
	$('#projects').on('click',function(){
		$("div.project-left").removeClass('project-left').addClass('full-width');
		$(".about-right").hide();
	});
};

$(document).ready(function(){
	fullWidth();
	$('#nav').on('mouseenter', function(){
    	$('.dropdown-home').fadeIn();
	})
	$('.dropdown-home').on('mouseleave', function(){
		$(this).fadeOut();
	})
	$('#nav').on('click', function(){
    	$('.dropdown-home').fadeToggle();
	})
});