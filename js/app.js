$(window).load(function() {
		// Animate loader off screen
		// $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
	$('#nav').on('mouseenter', function(){
    	$('.dropdown').fadeIn(function(){
    		$('#nav').toggleClass("opaque");
    	});
	})
	$('.dropdown').on('mouseleave', function(){
		$(this).fadeOut();
	})
});