document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    hiddenElements.forEach((el) => observer.observe(el));
});