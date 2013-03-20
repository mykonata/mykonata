
//Set Cofon
Cufon.replace('h1');
Cufon.replace('h2', { hover: true, hoverables: { h2: true } });
Cufon.replace('h3', { hover: true, hoverables: { h3: true } });
Cufon.replace('h4', { hover: true, hoverables: { h4: true } });
Cufon.replace('h5', { hover: true, hoverables: { h5: true } });
Cufon.replace('h6', { hover: true, hoverables: { h6: true } });
//image link function
$(document).ready(function() {
	$('a.imgLink img').hover(function(){
		$(this).fadeTo('slow', 0.4);
	}, function() {
		$(this).fadeTo('fast', 1);
	});
});
//validation function
jQuery(document).ready(function($){
	$("#commentForm").validate();
	$("#contactForm").validate();
});