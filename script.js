/***** Selecting DOM elements ********/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const featureSection = document.querySelector('#section__features');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const navLinks = document.querySelector('.nav__links');
const tabs = document.querySelectorAll('.processes__tab');
const tabsContainer = document.querySelector('.processes__tab-container');
const tabsContent = document.querySelectorAll('.processes__content');
const nav = document.querySelector('.nav');

/***** open modal ********/

const openModal = function (e) {
    e.preventDefault();

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

/***** close modal ********/
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/***** Cookies ********/
const cookieMsg = document.createElement('div');
cookieMsg.classList.add('cookie-message');
cookieMsg.innerHTML = 'This website uses cookies to ensure you get the best experience on our website. <button class="btn btn--close-cookie">Accept</button>';
header.append(cookieMsg);

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    cookieMsg.remove();
})

/***** fade animation for nav ********/
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const hoveredLink = e.target;
        const siblings = hoveredLink.closest('.nav').querySelectorAll('.nav__link');
        const logo = hoveredLink.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if (el !== hoveredLink) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/***** Scrolling ********/
btnScrollTo.addEventListener('click', function () {
    featureSection.scrollIntoView({ behavior: 'smooth' });
});

navLinks.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

/***** tabs ********/

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.processes__tab');

    if (!clicked) return;

    // removing active classes
    tabs.forEach(t => t.classList.remove('processes__tab--active'));
    tabsContent.forEach(tc => tc.classList.remove('processes__content--active'));

    // activate tab
    clicked.classList.add('processes__tab--active');

    // activate tab content 
    document.querySelector(`.processes__content--${clicked.dataset.tab}`).classList.add('processes__content--active');
});

/***** Sticky Nav ********/

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        nav.classList.add('sticky')
    }
    else {
        nav.classList.remove('sticky');
    }
}

const headerObserverOption = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
};

const headerObserver = new IntersectionObserver(stickyNav, headerObserverOption);
headerObserver.observe(header);