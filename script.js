// Animasi muncul halus (Fade In) saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 150); // Efek staggered delay antar kartu
    });
});

// Smooth Scroll untuk tombol navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});