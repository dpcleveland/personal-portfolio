// Grey out other pictures on mouseover
// Call with .picture class
$(function() {
	var elems = $('.picture');
	elems.on('mouseenter mouseleave', function(e) {
		elems.not(this).stop(true).fadeTo('fast', e.type == 'mouseenter' ? 0.5 : 1);
	});
});
