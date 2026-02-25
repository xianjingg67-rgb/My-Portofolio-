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
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingSpeed = 500;
    }
    setTimeout(handleTyping, typingSpeed);
}

// --- LINK SOSIAL MEDIA ---
function openSocial(platform) {
    const urls = {
        'instagram': 'https://instagram.com',
        'tiktok': 'https://tiktok.com',
        'facebook': 'https://facebook.com',
        'whatsapp': 'https://wa.me'
    };
    if (urls[platform]) window.open(urls[platform], '_blank');
}

window.onload = handleTyping;
