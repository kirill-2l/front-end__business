$(document).ready(function () {
		svg4everybody({});
});

$(document).ready(function(){
	$('.step').hover(
		function() {
			$( this ).addClass('step--active');
		}, function() {
			$( this ).removeClass('step--active');
		}
	);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
			});
	});
});
const navMenu = () => {
	const burger = document.querySelector('.nav__burger');
	const nav = document.querySelector('.nav__menu-wrapper');
	const navItem = document.querySelectorAll('.nav__item');

	burger.addEventListener('click',() => {
		nav.classList.toggle('nav__menu-wrapper-active');
		navItem.forEach((link, i) => {
			if(link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
			}
		});
		burger.classList.toggle('burger-active');
	});

}

navMenu();
