document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mudCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuración de partículas
    const particles = [];
    const maxParticles = 5000;
    const colors = ['#5c3a21', '#4a2e17', '#3a2516'];

    // Clase Particle (sin cambios)
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 60 + 40;
            this.opacity = Math.random() * 0.6 + 0.4;
            this.rotation = Math.random() * 360;
            this.image = new Image();
            this.image.src = 'mancha.png';
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.drawImage(
                this.image,
                -this.size / 2,
                -this.size / 2,
                this.size,
                this.size
            );
            ctx.restore();
        }
    }

    // Función para crear partículas (sin cambios)
    let currentCount = 0;
    const createParticles = () => {
        if (currentCount >= maxParticles) return;

        for (let i = 0; i < 5; i++) {
            particles.push(new Particle());
            currentCount++;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => particle.draw());
        requestAnimationFrame(createParticles);
    };

    // Delay de 1 segundo (1000ms) antes de iniciar
    setTimeout(() => {
        createParticles(); // Comienza después de 1 segundo
    }, 1500);

    // Redimensionar canvas (sin cambios)
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});