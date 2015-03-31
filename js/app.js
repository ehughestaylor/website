var navFunc = function(){
	$('.nav-trigger-inner').on('click',function(){
		$('.nav-trigger').toggleClass('open');
		$('.nav-full').slideToggle();
	});
}



// var animatePoints = function(){
//    var waypoint = new Waypoint({
//         element: document.getElementById('section2'),
//         handler: function() {
//          $('header').toggleClass('clear');
//          $('.logo').toggleClass('logo-big').toggleClass('animated rotateIn');
//          $('.project-header').slideToggle();
//          $('.line').toggleClass('black');
//     }
//   });
// }



$(document).ready(function(){
   $('#fullpage').fullpage({
      scrollOverflow: true
   });
	navFunc();
  $('.bio-header').hide();
  $('.project-header').hide();


  $('.philly').hover(function(){
    $('.philly').toggleClass('blue');
    $('.philly-right').slideToggle();
  })
  $('.travel').hover(function(){
    $(this).toggleClass('blue');
    $('.traveling-left').fadeToggle();
  })
  $('.art').hover(function(){
    $(this).toggleClass('blue');
    $('.art-right').slideToggle();
  })
  $('.family').hover(function(){
    $(this).toggleClass('blue');
    $('.family-left').fadeToggle();
  })
  $('.me').hover(function(){
    $(this).toggleClass('blue');
    $('.me-middle').slideToggle();
  })

  $(".port-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top
    }, 1000);
    $('.nav-full').fadeOut();
  });

});