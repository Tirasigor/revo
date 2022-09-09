const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav-side');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', (e) => {
	e.preventDefault;
	burger.classList.toggle('header__burger_active');
	burgerMenu.classList.toggle('header__nav-side_active');
	overlay.classList.toggle('overlay_active');
});
document.addEventListener('click', (e) => {
	e.stopPropagation;
	if (e.target !== burger) {
		burger.classList.remove('header__burger_active');
		burgerMenu.classList.remove('header__nav-side_active');
		overlay.classList.remove('overlay_active');
	}
});

document.addEventListener('keydown', function (e) {
	if (e.key === 'Tab' || e.key === 'Escape') {
		burger.classList.remove('header__burger_active');
		burgerMenu.classList.remove('header__nav-side_active');
		overlay.classList.remove('overlay_active');
	}
});