const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.navbar-item');
const navbarWrapper = document.querySelector('.navbar-wrapper');
const bgImage = document.querySelector('.bg-image');

const CLEAR_BLUR_SECTIONS = new Set(['about', 'contact']);

const indicator = document.createElement('div');
indicator.className = 'navbar-indicator';
navbarWrapper.appendChild(indicator);

let isClicking = false;

function moveIndicator(item) {
    indicator.style.left = item.offsetLeft + 'px';
    indicator.style.width = item.offsetWidth + 'px';
    navItems.forEach(i => i.classList.remove('navbar-item-selected'));
    item.classList.add('navbar-item-selected');
}

function updateBlur(sectionId) {
    if (CLEAR_BLUR_SECTIONS.has(sectionId)) {
        bgImage.classList.remove('bg-blurred');
    } else {
        bgImage.classList.add('bg-blurred');
    }
}

const observer = new IntersectionObserver((entries) => {
    if (isClicking) return;
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        const activeItem = document.querySelector(`.navbar-item[href="#${id}"]`);
        if (activeItem) {
            moveIndicator(activeItem);
            updateBlur(id);
        }
    });
}, { rootMargin: '-70% 0px -30% 0px' });

sections.forEach(section => observer.observe(section));

navItems.forEach(item => {
    item.addEventListener('click', () => {
        isClicking = true;
        moveIndicator(item);
        const id = item.getAttribute('href').slice(1);
        updateBlur(id);
        setTimeout(() => { isClicking = false; }, 800)
    });
});

window.addEventListener('load', () => {
    const firstItem = document.querySelector('.navbar-item[href="#about"]');
    if (firstItem) moveIndicator(firstItem);
});