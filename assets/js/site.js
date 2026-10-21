(function () {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = posX + 'px';
            cursorDot.style.top = posY + 'px';
            cursorOutline.animate({ left: posX + 'px', top: posY + 'px' }, { duration: 500, fill: 'forwards' });
        });

        const interactives = document.querySelectorAll('a, button, select, input, textarea, .service-card, .barki-img-card, .product-card, summary');
        interactives.forEach(function (el) {
            el.addEventListener('mouseenter', function () { document.body.classList.add('hovering'); });
            el.addEventListener('mouseleave', function () { document.body.classList.remove('hovering'); });
        });
    }

    let counted = false;
    function startCounters() {
        if (counted) return;
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(function (counter) {
            const target = +counter.getAttribute('data-target');
            const speed = 200;
            const updateCount = function () {
                const count = +counter.innerText;
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
        counted = true;
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.querySelector('.stat-number')) startCounters();
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-up').forEach(function (el) { observer.observe(el); });
    } else {
        document.querySelectorAll('.fade-up').forEach(function (el) { el.classList.add('visible'); });
    }

    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() * 1.5) - 0.75;
                this.speedY = (Math.random() * 1.5) - 0.75;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }
            draw() {
                ctx.fillStyle = '#00F0FF';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            const numberOfParticles = (canvas.height * canvas.width) / 15000;
            for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
                for (let j = i; j < particlesArray.length; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x;
                    const dy = particlesArray[i].y - particlesArray[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(176, 38, 255, ' + (1 - distance / 150) + ')';
                        ctx.lineWidth = 1;
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });

        initParticles();
        animateParticles();
    }

    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }
})();
