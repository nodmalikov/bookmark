// HEADER
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

// FEATURES
const elMenuFeatures = document.querySelector('.menu-features__link');

const elBookmarkLink = document.querySelector('.js-bookmark-link');
const elSearchLink = document.querySelector('.js-search-link');
const elShareLink = document.querySelector('.js-share-link');

const elBookmarkInfo = document.querySelector('.js-bookmark-info');
const elSearchInfo = document.querySelector('.js-search-info');
const elShareInfo = document.querySelector('.js-share-info');

if (elBookmarkLink) {
    elBookmarkLink.addEventListener('click', function () {
        elBookmarkInfo.classList.add('features__content--active');
        elMenuFeatures.classList.add('menu-features__link--active');
        elSearchInfo.classList.remove('features__content--active');
        elSearchLink.classList.remove('menu-features__link--active');
        elShareInfo.classList.remove('features__content--active');
        elShareLink.classList.remove('menu-features__link--active');
    });
}

if (elSearchLink) {
    elSearchLink.addEventListener('click', function () {
        elSearchInfo.classList.add('features__content--active');
        elSearchLink.classList.add('menu-features__link--active');
        elBookmarkInfo.classList.remove('features__content--active');
        elMenuFeatures.classList.remove('menu-features__link--active');
        elShareInfo.classList.remove('features__content--active');
        elShareLink.classList.remove('menu-features__link--active');
    });
}

if (elShareLink) {
    elShareLink.addEventListener('click', function () {
        elShareInfo.classList.add('features__content--active');
        elShareLink.classList.add('menu-features__link--active');
        elBookmarkInfo.classList.remove('features__content--active');
        elMenuFeatures.classList.remove('menu-features__link--active');
        elSearchInfo.classList.remove('features__content--active');
        elSearchLink.classList.remove('menu-features__link--active');
    });
}
