'use strict';

const slider = document.querySelector('.slider');
if (slider) {

	const swiper = new Swiper('.slider', {
		loop: true,
		grabCursor: true,
		autoHeight: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

		mousewheel: {
			sensitivity: 1,
			eventsTarget: '.slider',
		},

		autoplay: {
			delay: 4000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
	});
}