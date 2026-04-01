// GSAP Animations for Sienna RM
document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not found. Animations disabled.');
        return;
    }

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Section Animations
    gsap.from('.hero-content h1', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5
    });

    gsap.from('.hero-content p', {
        duration: 1.2,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });

    gsap.from('.hero-content .btn', {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 1.1
    });

    // Section Titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            duration: 1,
            y: 40,
            opacity: 0,
            ease: 'power3.out'
        });
    });

    // Grid Cards Staggered Reveal
    gsap.utils.toArray('.grid-container').forEach(container => {
        gsap.from(container.querySelectorAll('.grid-card'), {
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        });
    });

    // About Section Fade In
    if (document.querySelector('.about-grid')) {
        gsap.from('.about-content', {
            scrollTrigger: {
                trigger: '.about-grid',
                start: 'top 75%'
            },
            duration: 1.2,
            x: -50,
            opacity: 0,
            ease: 'power2.out'
        });
        
        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about-grid',
                start: 'top 75%'
            },
            duration: 1.2,
            x: 50,
            opacity: 0,
            ease: 'power2.out'
        });
    }

    // Sticky CTA Pulse Enhancement
    const stickyCta = document.querySelector('.sticky-cta');
    if (stickyCta) {
        gsap.to(stickyCta, {
            scale: 1.05,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
});
