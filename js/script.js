$(document).ready(function(){
   var height = $(window).height() - 210;  //getting windows height
   console.log("Height: ", height);
   $('.carousel .item').css('height',height+'px');
   $('.carousel-inner').css('height',height+'px');   //and setting height of carousel
});

$(window).resize(function(){
   var height = $(window).height() - 210;  //getting windows height
   console.log("Height: ", height);
   $('.carousel-item').css('height',height+'px');
   $('.carousel-inner').css('height',height+'px');   //and setting height of carousel
});

$(function(){
	$('.header').load("header.html"); 
	$('.footer').load("footer.html");
	$('.summary').load("summary.html");
});