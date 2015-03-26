var navFunc = function(){
	$('.nav-trigger-inner').on('click',function(){
		$('.nav-trigger').toggleClass('open');
		$('.nav-full').slideToggle();
	});
}
$(".port-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
    $('.nav-full').fadeOut();
});


$(document).ready(function(){
	navFunc();
	$('.project-header').hide();

	var waypoint = new Waypoint({
  		element: document.getElementById('section2'),
  		handler: function() {
    	 $('header').toggleClass('clear');
    	 $('.logo').toggleClass('logo-big').toggleClass('animated rotateIn');
    	 $('.project-header').slideToggle();
    	 $('.line').toggleClass('black');
  }
})

});