$(function() {
	'use strict';
	
	var preloader = document.getElementById('preloader')
	$(document).ready(function(){
		$(preloader).fadeOut('slow','linear')
	})

	var window_width = $(window).width(),
		window_height = window.innerHeight;

	$('.fullscreen').css('height', window_height);


	$('.toggle_icon').on('click', function() {
		$('body').toggleClass('open');
	});

    
});
