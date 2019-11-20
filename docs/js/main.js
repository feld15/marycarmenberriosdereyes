 (function(){
	   
	$(document).ready(function(){
	var contador = 1;
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$(".display").css("display", "block");
			$("header").addClass("bg-gradient");
			$('nav').animate(
			{  left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$(".display").slideToggle();
			$("header").removeClass("bg-gradient");
		}
	})
});


$(window).resize(function(){
	var ancho = $(window).width();

	if ( ancho < 1180 ) {
	   $("#lace").text("Mary Carmen Berrios de Reyes");

	} else {
	   $("#lace").text("T.E.L Mary Carmen Berrios de Reyes");
	}

	if(ancho > 900 ) {
		$("nav").css("display", "");
		$("nav").css("left", "");
		$("header").removeClass("bg-gradient");
	 }

	if ( ancho < 700 ) {
		$("#lace").text("M.C.B.R");
 
	 }
 });


 $('[data-fancybox="gallery"]').fancybox({
	buttons: [
		"zoom",
		"share",
		"slideShow",
		"fullScreen",
		"thumbs",
		"close"
	  ],
});


$(".list-galeria").mouseover(function(){
  $(".list-galeria").addClass("galeria-before");
});

$(".list-galeria").click(function(){
	$(".list-galeria").removeClass("galeria-before");
})


$('.principal').masonry({
	// options
	itemSelector: '.col-flex',
  });

  }())