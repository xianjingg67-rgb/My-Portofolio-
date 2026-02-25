// --- ANIMASI MENGETIK ---
const textToType = "Lukman Al Khakim";
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function handleTyping() {
    const target = document.getElementById("typing");
    if (!target) return;

    if (!isDeleting) {
        target.innerHTML = textToType.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    } else {
        target.innerHTML = textToType.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === textToType.length) {
        isDeleting = true;
        typingSpeed = 2000; // Jeda saat selesai mengetik
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingSpeed = 500;
    }

    setTimeout(handleTyping, typingSpeed);
}

// --- NAVIGASI HALAMAN ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    
    // Scroll ke atas otomatis saat ganti halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- LINK SOSIAL MEDIA ---
function openSocial(platform) {
    const urls = {
        'instagram': 'https://instagram.com',
        'tiktok': 'https://tiktok.com',
        'facebook': 'https://facebook.com',
        'whatsapp': 'https://wa.me'
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank');
    }
}

// Jalankan animasi saat window dimuat
window.onload = () => {
    handleTyping();
};
