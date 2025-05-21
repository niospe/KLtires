// Efecto hover mejorado para botones
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Carrusel de reseñas (opcional)
let currentReview = 0;
const reviews = document.querySelectorAll('.review-card');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? 'block' : 'none';
    });
}

// Cambia de reseña cada 5 segundos (opcional)
setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}, 5000);
