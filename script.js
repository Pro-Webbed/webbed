document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    let index = 1; // Start with the middle item active

    const updateCarousel = () => {
        products.forEach((product, i) => {
            product.classList.remove('left', 'active', 'right');
            if (i === index) {
                product.classList.add('active');
            } else if (i === (index + 2) % 3) {
                product.classList.add('left');
            } else {
                product.classList.add('right');
            }
        });
    };

    document.getElementById('prev').addEventListener('click', () => {
        index = (index + 2) % 3;
        updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % 3;
        updateCarousel();
    });

    updateCarousel(); // Initial layout
});