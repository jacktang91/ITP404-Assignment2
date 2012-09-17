(function(){
	//event delegation
	$('#gallery').on('click','.like', function(){
		var $this=$(this); 	
		var parent = $this.parent();
		var numLiked = parseInt($('.like-count').html());

		parent.addClass('active'); 

		numLiked = numLiked + 1;
		$('.like-count').html(numLiked);

		$this.replaceWith('<label>Liked!</label>');


	});

	$('#gallery a.fancybox').lightBox();

})(jQuery);