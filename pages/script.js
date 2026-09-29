const menuButton = document.querySelector('#menuBtn');
const mobileMenu = document.querySelector('#mobileMenu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', isOpen);
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open menu');
        });
    });
}

document.querySelector('#findInternship')?.addEventListener('click', () => {
    document.querySelector('#jobs')?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.light-button')?.addEventListener('click', () => {
    document.querySelector('#explore')?.scrollIntoView({ behavior: 'smooth' });
});