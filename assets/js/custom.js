/*------------------------------
 * Copyright 2014 Pixelized
 * http://www.pixelized.cz
 *
 * Velvet theme v1.0
------------------------------*/

var scrolloffset = 139;

//PRELOADER
$(window).load(function() { 
	$('#status').fadeOut();
	$('#preloader').fadeOut(); 
});

//FIXED NAVBAR
$(window).scroll(function(){
	if($('header.navbar').hasClass('navbar-offset')) {
		scrolloffset = 69;
	}
	else {
		scrolloffset = 139;
	}
	
	//FIXED NAVBAR AFTER SCROLL
	if($(window).width() > 767) {
		if($(window).scrollTop() > $(window).height() - 200) {
			$('header.navbar').addClass('navbar-offset');
			$('header.navbar').removeClass('navbar-static-top');
			$('header.navbar').addClass('navbar-fixed-top');
		}
		else {
			$('header.navbar').removeClass('navbar-offset');
			$('header.navbar').removeClass('navbar-fixed-top');
			$('header.navbar').addClass('navbar-static-top');
		}
	}
});

$(document).ready(function() {	
	//FIXED NAVBAR - EXTRA SMALL DEVICES
	if($(window).width() <= 767) {
		$('header.navbar').addClass('navbar-offset');
		$('header.navbar').removeClass('navbar-static-top');
		$('header.navbar').addClass('navbar-fixed-top');
	}
	
	//SCROLLING
	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - scrolloffset}, 1000, function(){window.location.hash = hash;});
	});
	
	//PARALLAX INIT
	$('.separator-quote').parallax("50%", 0.1);	
	$('.separator-testimonials').parallax("50%", 0.1);	
	
	//PORTFOLIO - ISOTOPE
	var $container = $('.portfolio-init');
	$container.isotope({
	  	itemSelector: '.portfolio-item',
	});
	
	$('.portfolio-filter .btn-group a').click(function(e) {
		$('.portfolio-filter .btn-group a').removeClass('active');
		$(this).addClass('active');
		
        var category = $(this).attr('data-filter');
		$container.isotope({
			filter: category
		});
    });
	
	//TWITTER QUERY
	var twitterOptions = {
		"id": '541286991938457600',
		"domId": '',
		"customCallback": handleTweets,
		"maxTweets": 2,
		"enableLinks": true,
		"showUser": false,
		"showImages": false,
		"showInteraction": false
	};
	
	function handleTweets(tweets) {
		var n = tweets.length;
		var i = 0;
		var element = document.getElementById('twitter-wrapper');
		var html = '<ul class="list-unstyled">';
		while(i < n) {
		  html += '<li>' + tweets[i] + '</li>';
		  i++;
		}
		html += '</ul>';
		element.innerHTML = html;
	}
	
	twitterFetcher.fetch(twitterOptions);
		
	//OWL CAROUSEL		
	$("#owl-carousel-testimonials").owlCarousel({
		autoPlay: 5000, 
		singleItem : true,
		slideSpeed : 500
  	});
		
	//MAGNIFIC POPUP
	$('.show-image').magnificPopup({type:'image'});
	
	//VEGAS
	//$.vegas({src:'assets/images/home-1.jpg'})('overlay', {src:'assets/images/overlay.png'});
	
	$.vegas('slideshow', {
		delay:6000,
		backgrounds:[
			{ src:'assets/images/home-1.jpg', fade:1500 },
			{ src:'assets/images/home-2.jpg', fade:1500 },
			{ src:'assets/images/home-3.jpg', fade:1500 },
			{ src:'assets/images/home-4.jpg', fade:1500 },
		]
	})('overlay', {src:'assets/images/overlay.png'});
	
	//VIDEO INIT
	$('.separator-video').videoBG({
		mp4:'assets/video/video.mp4',
		webm:'assets/video/video.webm',
		scale:true,
		zIndex:0
	});
	
	$('video').each(function(){this.muted=true})
	
	//WAYPOINTS
	$('.separator-numbers').waypoint(function(){$('.separator-numbers .number').countTo();},{offset:'100%'});
	$('.about-us-wrapper .progress-bar').waypoint(function(){$(this).css("width",$(this).attr("aria-valuenow") + "%")},{offset:'100%'});
	
	//ANIMATIONS
	if($(window).width() > 767) {	
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'85%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'85%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'85%'});
	}
});



