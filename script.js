/***** Selecting DOM elements ********/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const featureSection = document.querySelector('#section__features');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const openModal = function (e) {
    e.preventDefault();

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

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