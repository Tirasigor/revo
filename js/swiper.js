var swiperFavorite = new Swiper(".favorite__swiper", {
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			grid: {
				rows: 2,
			},
			spaceBetween: 30,
		},
		889: {
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
			spaceBetween: 30,
		}
	},
	observer: true,
	observeParents: true,
});


var swiperPerson = new Swiper(".person__swiper", {
	// slidesPerView: 3,
	// spaceBetween: 30,
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		720: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1100: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	},
	observer: true,
	observeParents: true,
});

window.addEventListener('load', () => {
	setTimeout(() => {
		swiperFavorite.update();
		swiperPerson.update();
	}, 200)
});