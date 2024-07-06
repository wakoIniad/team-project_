var bar = new ProgressBar.Line(splash_text, {
	easing: 'linear',
	duration: 1500,
	strokeWidth: 5,
	color: '#f00',
	trailWidth: 5,
	trailColor: '#eedd00',
	text: {
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-40px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1.5rem',
			color: '#eedd00',
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %');
	}
});


bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	setTimeout(function() {
        $("#splash").fadeOut();
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 0);
		$("body").css('overflow','scroll');
    }, 500);
});