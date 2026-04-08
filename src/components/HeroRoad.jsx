import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';

/**
 * HeroRoad — straight horizontal road on the x-axis at the bottom of the hero.
 * Animated dashed center line + a small plane/icon traveling along it.
 */
export default function HeroRoad({ className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hr-traveler',
                { x: '-10%' },
                { x: '110%', duration: 14, ease: 'none', repeat: -1 }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref} className={`absolute left-0 right-0 bottom-10 w-full pointer-events-none ${className}`}>
            <div className="relative w-full h-20">
                {/* Road body */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 bg-stone-800/40 backdrop-blur-sm border-y border-white/10" />

                {/* Center dashed line */}
                <svg className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-10" preserveAspectRatio="none" viewBox="0 0 1400 40">
                    <line
                        x1="0" y1="20" x2="1400" y2="20"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeDasharray="30 18"
                        className="flight-path"
                    />
                </svg>

                {/* Traveling plane on the road */}
                <div className="hr-traveler absolute top-1/2 -translate-y-1/2 left-0 text-orange-400">
                    <Icon icon="mdi:airplane" width={36} height={36} style={{ transform: 'rotate(-90deg)' }} />
                </div>
            </div>
        </div>
    );
}
