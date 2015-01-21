(function($) {
    "use strict"; 
    $(function() {	

	    // layout teasers using masonry	
	    $('#teasers').imagesLoaded( function() {
			$('#teasers').masonry({
				gutter: 15,
				isResizable: true,
				itemSelector: '.teaser'
			});
			$('#teasers').masonry('bindResize');
		}); 	    


		
		// teaser thumb hover effect
		$('.thumb img').hover(
			function() {
		    	$(this).fadeTo('fast', 0.3);
			}, function() {
				$(this).fadeTo('fast', 1);
		  	}
		);
		// remove trailing slash from tag list
	    $('.tags').each(function() {
			$('.slash:last', this).remove();
		});		
 	}); 
}(jQuery));
