

$( document ).ready(function() {
  
	$('.quick-facts li').click(function(){
		$('.quick-facts li p').slideUp(300);
		$('p', this).slideDown(300);
	});

	$(".video").fitVids();

});