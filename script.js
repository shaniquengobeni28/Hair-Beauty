document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.getElementById('hero-heading');

    if (heroHeading) {
        const text = heroHeading.textContent;
        heroHeading.textContent = '';

        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'letter' + (char === ' ' ? ' space' : '');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * 0.05}s`;
            heroHeading.appendChild(span);
        });
    }

    const rotatingImages = document.querySelectorAll('.service-img-wrap img[data-slides]');

    rotatingImages.forEach((img) => {
        const slides = img.dataset.slides.split(',').map((src) => src.trim());
        if (slides.length < 2) return;

        let index = 0;

        setInterval(() => {
            index = (index + 1) % slides.length;
            img.style.opacity = 0;

            setTimeout(() => {
                img.src = slides[index];
                img.style.opacity = 1;
            }, 300); // matches the CSS opacity transition below
        }, 3000);
    });
});