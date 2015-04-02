var navFunc = function(){
	$('.nav-trigger-inner').on('click',function(){
		$('.nav-trigger').toggleClass('open');
		$('.nav-full').slideToggle();
	});
}



var animatePoints = function(){
   var waypoint = new Waypoint({
        element: document.getElementById('section2'),
        handler: function() {
         $('header').toggleClass('clear');
         $('.logo').toggleClass('logo-big').toggleClass('animated rotateIn');
         $('.project-header').slideToggle();

    }
  })
  var newWaypoint = new Waypoint({
        element: document.getElementById('section1'),
        handler: function() {
          $('.line').toggleClass('black');
    }
  });
}

var showPhotos= function(){

  $('.philly').hover(function(){
    $('.philly').toggleClass('red');
    $('.philly-right').slideToggle();
  })
  $('.travel').hover(function(){
    $(this).toggleClass('red');
    $('.traveling-left').fadeToggle();
  })
  $('.art').hover(function(){
    $(this).toggleClass('red');
    $('.art-right').slideToggle();
  })
  $('.family').hover(function(){
    $(this).toggleClass('red');
    $('.family-left').fadeToggle();
  })
  $('.me').hover(function(){
    $(this).toggleClass('red');
    $('.me-middle').slideToggle();
  })
}



$(document).ready(function(){
	navFunc();
  showPhotos();
  $('.bio-header').hide();
  $('.project-header').hide();
  animatePoints();
  $(".port-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#section2").offset().top
      }, 1000);
      $('.nav-full').fadeOut();
      $('.nav-trigger').toggleClass('open');
  })
  $(".contact-button").on('click', function(){
      $('html, body').animate({
          scrollTop: $("#section3").offset().top
      }, 1000);
      $('.nav-full').fadeOut();
      $('.nav-trigger').toggleClass('open');
  }) 
  $(".about-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#section1").offset().top
      }, 1000);
      $('.nav-full').fadeOut();
      $('.nav-trigger').toggleClass('open');
  })
});