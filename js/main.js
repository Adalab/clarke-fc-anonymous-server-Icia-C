// Variables
var page = document.querySelector('.page');
var btnOpenMenu = page.querySelector('.nav-trigger');
var btnClose = page.querySelector('.nav-close');

// Functions
function openMenu() {
	page.classList.add('page--nav-visible');
};

function closeMenu() {
	page.classList.remove('page--nav-visible');
};

//Events
btnOpenMenu.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
