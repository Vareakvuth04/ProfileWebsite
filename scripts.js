const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = [];
const dropCount = 150;

for (let i = 0; i < dropCount; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.3
    });
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const drop of drops) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - 1, drop.y + drop.length);
        ctx.strokeStyle = `rgba(96, 165, 250, ${drop.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = -drop.length;
            drop.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(drawRain);
}

drawRain();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
let isPlaying = false;

toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.textContent = '🔇';
    } else {
        music.play();
        toggleBtn.textContent = '🔊';
    }
    isPlaying = !isPlaying;
});

const robot = document.getElementById('robot');
const speech = document.getElementById('speech');
const greetings = ['Hello!', 'Hi there!', 'Welcome!', 'Hey!', 'Hello!'];

robot.addEventListener('click', () => {
    const msg = greetings[Math.floor(Math.random() * greetings.length)];
    speech.textContent = msg;
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
