$(document).ready(function() {
	$('.tabs-control a').click(function(e) {
		e.preventDefault();
		var tabsBlock = $(this).closest('.tabs');
		var tabTarget = tabsBlock.find( $(this).data('target') );
		if(tabTarget.length) {
			tabsBlock.find('.tabs-tab').removeClass('active');
			$(this).addClass('active').siblings('a').removeClass('active');
			tabTarget.addClass('active');
		}
	});
});