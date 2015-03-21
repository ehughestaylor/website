var navFunc = function(){
	$('.nav-trigger-inner').on('click',function(){
		$('.nav-trigger').toggleClass('open');
		$('.nav-full').slideToggle();
	});
}


$(document).ready(function(){
	navFunc();

	var waypoint = new Waypoint({
  		element: document.getElementById('section2'),
  		handler: function() {
    	 $('header').toggleClass('black');
    	 $('.logo').toggleClass('logo-big').toggleClass('animated rotateIn');
  }
})

});