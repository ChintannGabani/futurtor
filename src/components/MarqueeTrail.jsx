import React from 'react';
import { Icon } from '@iconify/react';

/**
 * MarqueeTrail — pure-CSS infinite horizontal scroll of immigration/study icons
 * with dashed trail. GPU-only (transform: translateX). Zero JS animation loop.
 *
 * Use as a section divider between content sections — performant on every device.
 *
 * @param {object} props
 * @param {'left'|'right'} [props.direction='left']
 * @param {number} [props.speed=40] — seconds per loop
 * @param {boolean} [props.dark=false]
 */
export default function MarqueeTrail({ direction = 'left', speed = 40, dark = false }) {
    const items = [
        { icon: 'mdi:airplane', size: 30 },
        { icon: 'mdi:earth', size: 28 },
        { icon: 'mdi:passport', size: 28 },
        { icon: 'mdi:school', size: 30 },
        { icon: 'mdi:book-open-page-variant', size: 28 },
        { icon: 'mdi:bag-suitcase-outline', size: 30 },
        { icon: 'mdi:certificate-outline', size: 28 },
        { icon: 'mdi:airplane-takeoff', size: 32 },
        { icon: 'mdi:translate', size: 28 },
        { icon: 'mdi:map-marker-radius', size: 28 },
    ];

    // Duplicate the row so the marquee loops seamlessly
    const row = [...items, ...items];
    const iconColor = dark ? 'text-white/30' : 'text-orange-500/50';
    const lineColor = dark ? 'border-white/20' : 'border-orange-500/30';
    const dashColor = dark ? 'rgba(255,255,255,0.2)' : 'rgba(249,115,22,0.3)';

    const directionClass = direction === 'left' ? 'mt-marquee-left' : 'mt-marquee-right';

    return (
        <div className="relative overflow-hidden py-8 select-none">
            {/* Edge fade masks */}
            <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${dark ? 'bg-gradient-to-r from-[#0B1121] to-transparent' : 'bg-gradient-to-r from-stone-50 to-transparent'}`} />
            <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${dark ? 'bg-gradient-to-l from-[#0B1121] to-transparent' : 'bg-gradient-to-l from-stone-50 to-transparent'}`} />

            {/* Background dashed center line */}
            <div
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5"
                style={{
                    backgroundImage: `repeating-linear-gradient(to right, ${dashColor} 0, ${dashColor} 12px, transparent 12px, transparent 22px)`,
                }}
            />

            {/* Marquee row */}
            <div
                className={`flex gap-12 ${directionClass}`}
                style={{ animationDuration: `${speed}s`, willChange: 'transform' }}
            >
                {row.map((item, i) => (
                    <div key={i} className="flex items-center gap-12 shrink-0">
                        <Icon icon={item.icon} width={item.size} height={item.size} className={`${iconColor} drop-shadow-sm`} />
                        <div className={`w-16 border-t-2 border-dashed ${lineColor}`} />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes mt-scroll-left {
                    from { transform: translate3d(0, 0, 0); }
                    to { transform: translate3d(-50%, 0, 0); }
                }
                @keyframes mt-scroll-right {
                    from { transform: translate3d(-50%, 0, 0); }
                    to { transform: translate3d(0, 0, 0); }
                }
                .mt-marquee-left {
                    animation: mt-scroll-left linear infinite;
                }
                .mt-marquee-right {
                    animation: mt-scroll-right linear infinite;
                }
            `}</style>
        </div>
    );
}
