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
const elMenuFeatures = document.querySelectorAll('.menu-features__link');

const elBookmarkLink = document.querySelector('.js-bookmark-link');
const elSearchLink = document.querySelector('.js-search-link');
const elShareLink = document.querySelector('.js-share-link');

const elBookmarkInfo = document.querySelector('.js-bookmark-info');
const elSearchInfo = document.querySelector('.js-search-info');
const elShareInfo = document.querySelector('.js-share-info');

if (elBookmarkLink) {
    elBookmarkLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleFeature(elBookmarkInfo, elBookmarkLink);
    });
}

if (elSearchLink) {
    elSearchLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleFeature(elSearchInfo, elSearchLink);
    });
}

if (elShareLink) {
    elShareLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleFeature(elShareInfo, elShareLink);
    });
}

function toggleFeature(activeInfo, activeLink) {
    const allInfos = [elBookmarkInfo, elSearchInfo, elShareInfo];
    const allLinks = [elBookmarkLink, elSearchLink, elShareLink];
    
    allInfos.forEach(info => {
        if (info !== activeInfo) {
            info.classList.remove('features__content--active');
        }
    });

    allLinks.forEach(link => {
        if (link !== activeLink) {
            link.classList.remove('menu-features__link--active');
        }
    });

    activeInfo.classList.add('features__content--active');
    activeLink.classList.add('menu-features__link--active');
}

// FAQ
const elAccordionHeader = document.querySelectorAll('.accordion__header');
const elAccordionContent = document.querySelectorAll('.accordion__content');
const elAccordionBadge = document.querySelectorAll('.accordion__icon');

elAccordionHeader.forEach((ac, index) => {
    ac.addEventListener('click', function () {
        // Hozirgi bosilgan accordionni toggle qilish
        elAccordionContent[index].classList.toggle('accordion__active');
        elAccordionBadge[index].classList.toggle('accordion__rotate');

        // Barcha boshqa accordionlarni yopish
        elAccordionContent.forEach((content, i) => {
            if (i !== index) {
                content.classList.remove('accordion__active');
                elAccordionBadge[i].classList.remove('accordion__rotate');
            }
        });
    });
});