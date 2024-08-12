// HEADER
const elOpenMenuBtn = document.querySelector('.js-open-menu');
const elCloseMenuBtn = document.querySelector('.js-close-menu');
const elMobileHeader = document.querySelector('.mobile-header');
const elHeaderLogo = document.querySelector('.site-header__logo');
const elHeader = document.querySelector('.site-header');
const elMainContent = document.querySelector('.main-content');

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
        // Toggle current accordion
        const content = elAccordionContent[index];
        const isActive = content.classList.toggle('accordion__active');
        elAccordionBadge[index].classList.toggle('accordion__rotate');
        
        // Set max-height based on the content's scroll height
        if (isActive) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
        
        // Close all other accordions
        elAccordionContent.forEach((otherContent, i) => {
            if (i !== index) {
                otherContent.classList.remove('accordion__active');
                otherContent.style.maxHeight = null;
                elAccordionBadge[i].classList.remove('accordion__rotate');
            }
        });
    });
});

// SCROLL
window.onscroll = function() {
    const offset = elHeader.offsetHeight;
    if (window.scrollY > offset - 20) {
        elHeader.classList.add('header-border');
    } else if (window.scrollY < offset - 20) {
        elHeader.classList.remove('header-border');
    }
}

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);