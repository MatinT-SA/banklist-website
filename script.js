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
const tabsContent = document.querySelector('.tabs__content');

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

/***** Scrolling ********/
btnScrollTo.addEventListener('click', function (e) {
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

    // active class to clicked tab
    clicked.classList.add('processes__tab--active');
})