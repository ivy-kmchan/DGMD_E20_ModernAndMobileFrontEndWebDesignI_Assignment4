/* KaManTravelMobile.js is for KaMan's Travel mobile website */
$(document).ready(function(){
	$('button').tap(function(submit){
		if($('#name').val().length == 0) {
			$('.nameError').text('Please enter your name.');
			submit.preventDefault(); // we don't want the form to submit because it may be incomplete or not correct
		} 
	}); //end tap
	$('#name').tap(function(){
		$('.nameError').text('');
	}); //end tap

}); //end ready


// swiperight and swipeleft. These two touch events lead user to the previous or next page.
$(document).on('swiperight swipeleft','#home', function(event) {
	 if (event.type == 'swiperight') {
	  $.mobile.changePage("#contact"); // at home page, swiperight leads to the contact page (previous page)
	 }
	 if (event.type == 'swipeleft') {
	  $.mobile.changePage("#about"); // at home page, swipeleft leads to the about page (next page)
 	}
}); // end on

$(document).on('swiperight swipeleft','#about', function(event) {
	 if (event.type == 'swiperight') {
	  $.mobile.changePage("#home"); // at about page, swiperight leads to the home page (previous page)
	 }
	 if (event.type == 'swipeleft') {
	  $.mobile.changePage("#contact"); // at about page, swipeleft leads to the contact page (next page)
 	}
}); // end on

$(document).on('swiperight swipeleft','#contact', function(event) {
	 if (event.type == 'swiperight') {
	  $.mobile.changePage("#about"); // at contact page, swiperight leads to the about page (previous page)
	 }
	 if (event.type == 'swipeleft') {
	  $.mobile.changePage("#home"); // at contact page, swipeleft leads to the home page (next page)
 	}
}); // end on




