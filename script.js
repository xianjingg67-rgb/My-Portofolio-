// --- ANIMASI MENGETIK ---
const text = "Lukman Al Khakim";
let i = 0;
let deleting = false;

function playTyping() {
    const target = document.getElementById("typing");
    if (!target) return;

    if (!deleting) {
        target.innerHTML = text.slice(0, i + 1);
        i++;
    } else {
        target.innerHTML = text.slice(0, i - 1);
        i--;
    }

    if (i === text.length) {
        deleting = true;
        setTimeout(playTyping, 2000);
    } else if (i === 0) {
        deleting = false;
        setTimeout(playTyping, 500);
    } else {
        setTimeout(playTyping, deleting ? 100 : 150);
    }
}

// --- FUNGSI SOSIAL MEDIA ---
function openSocial(name) {
    const links = {
        'instagram': 'https://instagram.com',
        'tiktok': 'https://tiktok.com',
        'facebook': 'https://facebook.com',
        'whatsapp': 'https://wa.me'
    };
    window.open(links[name], '_blank');
}

// Start
document.addEventListener("DOMContentLoaded", playTyping);
