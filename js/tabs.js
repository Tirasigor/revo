const tabsItems = document.querySelectorAll('.giftset__item');
const tabsButtons = document.querySelectorAll('.giftset__button')

tabsButtons.forEach(element => {
	element.addEventListener('click', () => {
		let tabId = element.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		tabsButtons.forEach(item => {
			item.classList.remove('giftset__button_active');
		});

		tabsItems.forEach(item => {
			item.classList.remove('giftset__item_active');
		});

		element.classList.add('giftset__button_active');
		currentTab.classList.add('giftset__item_active');
	});
});