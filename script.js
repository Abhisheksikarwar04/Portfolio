const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: null, y: null, radius: 120 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            this.x -= dx / 20;
            this.y -= dy / 20;
        }
    }

    draw() {
        const isLight = document.body.classList.contains("light");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isLight
            ? "rgba(63,100,255,0.55)"
            : "rgba(100,255,218,0.75)";
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 14000);
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    const isLight = document.body.classList.contains("light");
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const distance = dx * dx + dy * dy;

            if (distance < 9000) {
                ctx.strokeStyle = isLight
                    ? "rgba(63,100,255,0.10)"
                    : "rgba(124,156,255,0.13)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateBackground);
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
});

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateBackground();

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});