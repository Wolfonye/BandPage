$(document).ready(function(){
    var scrollDauer = 600,
        opVerringerungNach = 350,
        einblendenNach = 150;
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > einblendenNach) {
			$('.headjumper').fadeIn();
            $('.headjumper').addClass('isVisible');
		} else {
			$('.headjumper').fadeOut();
            $('.headjumper').removeClass('lowOp');
		}
        if ($(this).scrollTop() > opVerringerungNach) {
            $('.headjumper').addClass('lowOp');
        }
	});

	//Click event to scroll to top
	$('.headjumper').click(function(){
		$('html, body').animate({scrollTop : $("#pagehead").offset().top
    },scrollDauer);
		return false;
	});

});
