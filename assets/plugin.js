require(['gitbook', 'jQuery'], function(gitbook, $, page) {

	var title;
	var author;

	function insertDonateLink() {
		if ($('.sidebar-header').length == 0) {
			html = '<div class="sidebar-header"><h1 class="title">'+title+'</h1></div>';
			$('.book-summary').prepend(html)

			$('.summary li:last').html('<a>作者：'+author+'</a>')
		}
	}

	gitbook.events.bind('start', function(e, config) {
		title = config['sidebar-style'].title;
		author = config['sidebar-style'].author;
		insertDonateLink();
	});

	gitbook.events.bind('page.change', function() {
		insertDonateLink();
	});
});
