const elOpenMenuBtn = document.querySelector('.js-open-menu');
const elCloseMenuBtn = document.querySelector('.js-close-menu');
const elMobileHeader = document.querySelector('.mobile-header');
const elHeaderLogo = document.querySelector('.site-header__logo');

if (elOpenMenuBtn) {
    elOpenMenuBtn.addEventListener('click', function () {
        elMobileHeader.classList.add('mobile-header--active');
        elHeaderLogo.classList.add('logo-hamburger-none');
        elOpenMenuBtn.classList.add('logo-hamburger-none');
    });
};

if (elCloseMenuBtn) {
    elCloseMenuBtn.addEventListener('click', function () {
        elMobileHeader.classList.remove('mobile-header--active');
        elHeaderLogo.classList.remove('logo-hamburger-none');
        elOpenMenuBtn.classList.remove('logo-hamburger-none');
    });
};
