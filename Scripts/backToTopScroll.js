/*-------------ZULETZT GEÄNDERT AM 07.08.2016---------------------------------*/

/*das Folgende ist ein Ansatz, der das Fading über das adden und removen von CSS-Klassen regelt.
Etwas weniger clean als das obere, aber der Effekt ist smoother so; evtl wär es auch mit obigem Ansatz schöner
gegangen, aber dafür fehlt mir noch das Wissen...ru (was heißt denn hier "oben"? 20.12.16)*/
$(document).ready(function(){
    var scrollDauer = 600,
        opVerringerungNach = 350,
        einblendenNach = 150;
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > einblendenNach) {
            $('.headjumper').addClass('isVisible');
		} else {
            $('.headjumper').removeClass('isVisible');
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






















































/*ARTEFAKT

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
*/
