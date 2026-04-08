import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';

const floatingIcons = [
    { icon: 'mdi:airplane', size: 38, x: '8%', y: '15%', color: 'text-orange-500', op: 0.07 },
    { icon: 'mdi:passport', size: 30, x: '85%', y: '25%', color: 'text-orange-500', op: 0.07 },
    { icon: 'mdi:earth', size: 46, x: '75%', y: '60%', color: 'text-sky-500', op: 0.06 },
    { icon: 'mdi:school', size: 34, x: '12%', y: '70%', color: 'text-orange-500', op: 0.07 },
    { icon: 'mdi:file-document-outline', size: 28, x: '50%', y: '8%', color: 'text-stone-500', op: 0.06 },
    { icon: 'mdi:airplane-takeoff', size: 36, x: '30%', y: '80%', color: 'text-orange-500', op: 0.07 },
    { icon: 'mdi:map-marker', size: 26, x: '92%', y: '45%', color: 'text-orange-500', op: 0.07 },
    { icon: 'mdi:book-open-page-variant', size: 30, x: '60%', y: '85%', color: 'text-orange-500', op: 0.06 },
    { icon: 'mdi:compass-outline', size: 34, x: '20%', y: '40%', color: 'text-sky-500', op: 0.06 },
    { icon: 'mdi:briefcase-outline', size: 28, x: '70%', y: '15%', color: 'text-orange-500', op: 0.06 },
    // Additional themed icons
    { icon: 'mdi:account-school-outline', size: 36, x: '45%', y: '55%', color: 'text-orange-500', op: 0.06 },
    { icon: 'mdi:certificate-outline', size: 30, x: '5%', y: '90%', color: 'text-orange-500', op: 0.06 },
    { icon: 'mdi:bank-outline', size: 32, x: '95%', y: '80%', color: 'text-stone-500', op: 0.06 },
    { icon: 'mdi:airplane-landing', size: 34, x: '38%', y: '30%', color: 'text-sky-500', op: 0.06 },
    { icon: 'mdi:bag-suitcase-outline', size: 30, x: '15%', y: '55%', color: 'text-orange-500', op: 0.06 },
    { icon: 'mdi:translate', size: 28, x: '82%', y: '8%', color: 'text-orange-500', op: 0.06 },
];

export default function AnimatedBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const icons = containerRef.current?.querySelectorAll('.floating-bg-icon');
            icons?.forEach((el, i) => {
                gsap.to(el, {
                    y: `random(-30, 30)`,
                    x: `random(-20, 20)`,
                    rotation: `random(-12, 12)`,
                    duration: `random(14, 22)`,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: i * 0.4,
                });
            });

            // Plane that flies across the entire viewport
            gsap.fromTo('.bg-fly-plane',
                { x: '-15vw', y: '0vh', rotation: -8 },
                { x: '110vw', y: '-8vh', rotation: -12, duration: 28, ease: 'none', repeat: -1, delay: 1 }
            );
            gsap.fromTo('.bg-fly-plane-2',
                { x: '110vw', y: '0vh', rotation: 165 },
                { x: '-15vw', y: '6vh', rotation: 170, duration: 36, ease: 'none', repeat: -1, delay: 6 }
            );

            // Slow rotating globe
            gsap.to('.bg-rotating-globe', {
                rotation: 360,
                duration: 60,
                ease: 'none',
                repeat: -1,
                transformOrigin: '50% 50%',
            });

            // Pulsing glow
            gsap.to('.bg-pulse-glow', {
                scale: 1.25,
                opacity: 0.18,
                duration: 4,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
                stagger: 1.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-stone-50">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#78716c 1px, transparent 1px)', backgroundSize: '35px 35px' }} />

            {/* Soft pulsing glow blobs */}
            <div className="bg-pulse-glow absolute top-[12%] left-[12%] w-[260px] h-[260px] rounded-full bg-orange-300/10 blur-[120px]" />
            <div className="bg-pulse-glow absolute bottom-[18%] right-[10%] w-[320px] h-[320px] rounded-full bg-sky-300/10 blur-[140px]" />
            <div className="bg-pulse-glow absolute top-[55%] left-[45%] w-[200px] h-[200px] rounded-full bg-orange-400/10 blur-[100px]" />

            {/* Floating immigration icons */}
            {floatingIcons.map((item, i) => (
                <div
                    key={i}
                    className={`floating-bg-icon absolute ${item.color}`}
                    style={{ left: item.x, top: item.y, opacity: item.op }}
                >
                    <Icon icon={item.icon} width={item.size} height={item.size} />
                </div>
            ))}

            {/* Slowly rotating large globe outline */}
            <div className="bg-rotating-globe absolute -right-32 top-1/3 text-orange-400/[0.05]">
                <Icon icon="mdi:earth" width={520} height={520} />
            </div>

            {/* Plane crossing the whole screen */}
            <div className="bg-fly-plane absolute top-[18%] left-0 text-orange-500/30">
                <Icon icon="mdi:airplane" width={42} height={42} />
            </div>
            <div className="bg-fly-plane-2 absolute top-[68%] left-0 text-sky-500/25">
                <Icon icon="mdi:airplane" width={32} height={32} />
            </div>

            {/* Multiple flight routes across screen */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Route 1 - main orange */}
                <path
                    d="M-30 300 C 200 150, 450 350, 700 200 S 1100 100, 1430 280"
                    stroke="#f97316"
                    strokeWidth="1.8"
                    strokeDasharray="10 8"
                    className="flight-path"
                    opacity="0.18"
                />
                {/* Route 2 - secondary */}
                <path
                    d="M-30 600 C 250 450, 500 600, 750 480 S 1050 350, 1430 550"
                    stroke="#f97316"
                    strokeWidth="1.4"
                    strokeDasharray="8 6"
                    className="flight-path"
                    opacity="0.12"
                    style={{ animationDelay: '-7s' }}
                />
                {/* Route 3 - lighter blue */}
                <path
                    d="M-30 800 C 300 700, 600 820, 900 720 S 1200 650, 1430 760"
                    stroke="#0ea5e9"
                    strokeWidth="1.2"
                    strokeDasharray="6 6"
                    className="flight-path"
                    opacity="0.1"
                    style={{ animationDelay: '-12s' }}
                />

                {/* Small airplane icons along paths */}
                <g opacity="0.18">
                    <text x="680" y="195" fontSize="22" fill="#f97316" transform="rotate(-15 680 195)">&#9992;</text>
                    <text x="1100" y="270" fontSize="18" fill="#f97316" transform="rotate(-10 1100 270)">&#9992;</text>
                    <text x="350" y="550" fontSize="20" fill="#0ea5e9" transform="rotate(10 350 550)">&#9992;</text>
                </g>

                {/* Dotted city markers */}
                <g opacity="0.22">
                    <circle cx="80" cy="305" r="4" fill="#f97316" />
                    <circle cx="700" cy="200" r="4" fill="#f97316" />
                    <circle cx="1380" cy="280" r="4" fill="#f97316" />
                    <circle cx="120" cy="610" r="3" fill="#f97316" />
                    <circle cx="750" cy="480" r="3" fill="#f97316" />
                    <circle cx="1380" cy="555" r="3" fill="#f97316" />
                </g>
            </svg>

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-transparent to-stone-50/50" />
        </div>
    );
}
