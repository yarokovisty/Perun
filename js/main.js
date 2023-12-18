$(document).ready(function() {
	$('.sliders').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,

		prevArrow: '<button class="btn slider-btn slider-prev"><img src="img/arrow-left-solid-purple.png" alt=""></button>',
		nextArrow: '<button class="btn slider-btn slider-next"><img src="img/arrow-right-solid-purple.png" alt=""></button>',

		dots: true,

		responsive: [
		{
			breakpoint: 1880,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,

				arrows: false,
			}
		},
		{
			breakpoint: 1630,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,

				arrows: false,
			}
		},
		{
			breakpoint: 1090,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,

				arrows: false,
			}
		},
		]
	})

	$('.galleries').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,

		prevArrow: '<button class="btn gallery-btn gallery-prev"><img src="img/arrow-left-solid.png" alt=""></button>',
		nextArrow: '<button class="btn gallery-btn gallery-next"><img src="img/arrow-right-solid.png" alt=""></button>',

		responsive: [
		{
			breakpoint: 1250,
			settings: {
				infinite: true,
				dots: true,
				arrows: false,
			}
		},

		{
			breakpoint: 1030,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrows: false,
			}
		}

		]
	})

	$('.slide-container').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,

		prevArrow: '<button class="btn gallery-btn gallery-prev"><img src="img/arrow-left-solid.png" alt=""></button>',
		nextArrow: '<button class="btn gallery-btn gallery-next"><img src="img/arrow-right-solid.png" alt=""></button>',

		responsive: [
		{
			breakpoint: 1480,
			settings: {
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
			}

		},

		{
			breakpoint: 990,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				
			}

		},

		{
			breakpoint: 500,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				
			}

		},

		]
	})

	$('.container-company').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,

		prevArrow: '<button class="btn gallery-btn gallery-prev"><img src="img/arrow-left-solid.png" alt=""></button>',
		nextArrow: '<button class="btn gallery-btn gallery-next"><img src="img/arrow-right-solid.png" alt=""></button>',

		responsive: [
		{
			breakpoint: 1640,
			settings: {
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
			}

		},

		{
			breakpoint: 1230,
			settings: {
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
			}

		},

		{
			breakpoint: 810,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}

		},

		{
			breakpoint: 500,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				
			}

		},


		]
	})
	



});