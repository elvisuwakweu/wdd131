const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const triggers = document.querySelectorAll('.lightbox-trigger');
const closeBtn = document.querySelector('.close');

// Open Lightbox
triggers.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        caption.textContent = img.getAttribute('data-caption');
    });
});

// Close Lightbox on X click
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox by clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Close Lightbox on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});
