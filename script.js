


// funtion Oups
    function oups(e) {
        e.preventDefault();
        alert("Oups 😒, les liens ne sont pas encore disponibles.");
        e.stopPropagation();
    }

    function oupsBlog(e) {
        e.preventDefault();
        alert("Oups 😒, l'article n'est pas encore disponible.");
        e.stopPropagation();
    }

    // Mobile menu functionality
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
let lastScroll = window.scrollY;

// Toggle menu
function toggleMenu(force = null) {
    const willHide = force !== null ? force : !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', willHide);
    
    if (willHide) {
        // Reset mobile submenu state when closing menu
        const mPagesPanel = document.getElementById('mPagesPanel');
        const mPagesChevron = document.getElementById('mPagesChevron');
        mPagesPanel?.classList.add('hidden');
        mPagesChevron?.classList.remove('rotate-180');
    }
}

// Click handler for menu button
btn?.addEventListener('click', () => toggleMenu());

// Close menu when clicking on a link
menu?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu(true);
    }
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    if (!menu.classList.contains('hidden')) {
        toggleMenu(true);
    }
});