const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.navbar-item');
const navbarWrapper = document.querySelector('.navbar-wrapper');
const bgImage = document.querySelector('.bg-image');

const CLEAR_BLUR_SECTIONS = new Set(['about', 'contact']);

let isManualNavigating = false;
let scrollTimeout;

const indicator = document.createElement('div');
indicator.className = 'navbar-indicator';
navbarWrapper.appendChild(indicator);

function detectSection() {
    let activeSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const midpoint = window.innerHeight / 2;
        const inViewport = rect.top < midpoint && rect.bottom > midpoint;

        if (inViewport) {
            activeSection = section.id;
        }
    });

    const shouldBlur = activeSection !== 'about' && activeSection !== 'contact';
    return { activeSection, shouldBlur };
}

function updateUI(activeItem) {
    if (!activeItem) return;

    const left = activeItem.offsetLeft;
    const width = activeItem.offsetWidth;
    indicator.style.left = left + 'px';
    indicator.style.width = width + 'px';

    navItems.forEach(item => {
        item.classList.toggle('navbar-item-selected', item === activeItem);
    });
}

function updateBlur(shouldBlur) {
    if (shouldBlur) {
        bgImage.classList.add('bg-blurred');
    } else {
        bgImage.classList.remove('bg-blurred');
    }
}

function onScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (isManualNavigating) return;

        const { activeSection, shouldBlur } = detectSection();

        if (activeSection) {
            const activeItem = document.querySelector(`[href="#${activeSection}"]`);
            updateUI(activeItem);
        }

        updateBlur(shouldBlur);
    }, 16);
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        isManualNavigating = true;
        updateUI(item);
    });
});

window.addEventListener('scroll', onScroll);

window.addEventListener('load', () => {
    const initialSection = document.querySelector('section:target') || sections[0];
    const initialItem = document.querySelector(`[href="#${initialSection.id}"]`);
    updateUI(initialItem);

    const { shouldBlur } = detectSection();
    updateBlur(shouldBlur);
});