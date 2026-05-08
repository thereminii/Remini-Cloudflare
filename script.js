const featureCards = document.querySelectorAll('.feature-card, .platform-card, .overview-box');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(5,5,7,.95)';
    } else {
        header.style.background = 'rgba(5,5,7,.65)';
    }
});