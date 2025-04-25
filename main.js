document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle for mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    // Highlight active nav link and mini-map flag on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.minecraft-nav-link');
    const mapFlags = document.querySelectorAll('.map-flag');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-link');
            }
        });

        mapFlags.forEach(flag => {
            flag.classList.remove('active');
            if (flag.getAttribute('data-section') === current) {
                flag.classList.add('active');
            }
        });
    });
});