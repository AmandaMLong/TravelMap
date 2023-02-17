/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu1 = $('#menu');

		$menu1.wrapInner('<div class="inner"></div>');

		$menu1._locked = false;

		$menu1._lock = function() {

			if ($menu1._locked)
				return false;

			$menu1._locked = true;

			window.setTimeout(function() {
				$menu1._locked = false;
			}, 350);

			return true;

		};

		$menu1._show = function() {

			if ($menu1._lock())
				$body.addClass('is-menu1-visible');

		};

		$menu1._hide = function() {

			if ($menu1._lock())
				$body.removeClass('is-menu1-visible');

		};

		$menu1._toggle = function() {

			if ($menu1._lock())
				$body.toggleClass('is-menu1-visible');

		};

		$menu1
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu1._hide();

				// Redirect.
					if (href == '#menu1')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu1">Close</a>');

		$body
			.on('click', 'a[href="#menu1"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$men1u._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu1._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu1._hide();

			});

})(jQuery);