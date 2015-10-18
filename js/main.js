(function($) {
	$('.team').on('click touchstart', function(){
		alerta($(this).attr('title'), $(this).attr('class'));
	});
	$('#mensaje').on('click touchstart', function(){
		$('#overlay').fadeOut();
		$('#mensaje').slideUp();

	});

	var alerta = function(texto,clase) {
		$('#mensaje').html('<div class="'+clase+'"/><br>'+texto);
		$('#overlay').fadeIn();
		$('#mensaje').slideDown();
	};

})(jQuery);
