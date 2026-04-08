import React, { useEffect, useRef, useId } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Icon } from '@iconify/react';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * ScrollPlane — an SVG dashed flight path that DRAWS itself as you scroll
 * through the section, with a small plane traveling along the path tied to
 * scroll position (no continuous JS loop — pure scrub).
 *
 * Performance: only animates when section is in viewport. Uses GPU transforms.
 *
 * @param {object} props
 * @param {string} [props.variant='curve1'] — curve1 | curve2 | wave
 * @param {string} [props.color='#f97316']
 * @param {boolean} [props.dark=false]
 */
export default function ScrollPlane({ variant = 'curve1', color = '#f97316', dark = false }) {
    const wrapperRef = useRef(null);
    const pathRef = useRef(null);
    const planeRef = useRef(null);
    const reactId = useId();
    const pathId = `sp-path-${reactId.replace(/:/g, '')}`;

    const paths = {
        curve1: 'M 30 480 Q 350 80, 700 320 T 1370 120',
        curve2: 'M 1370 480 Q 1050 80, 700 320 T 30 120',
        wave: 'M 20 300 Q 200 100, 400 300 T 800 300 T 1200 300 T 1380 300',
    };
    const d = paths[variant] || paths.curve1;

    useEffect(() => {
        if (!wrapperRef.current || !pathRef.current || !planeRef.current) return;

        const ctx = gsap.context(() => {
            // Make sure path total length matches strokeDasharray for clean draw-in
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            // Place plane at start, hide initially
            gsap.set(planeRef.current, { autoAlpha: 0 });

            // Master timeline tied to scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    scrub: 1,
                },
            });

            tl.to(pathRef.current, {
                strokeDashoffset: 0,
                ease: 'none',
            }, 0);

            tl.to(planeRef.current, {
                autoAlpha: 1,
                duration: 0.05,
            }, 0);

            tl.to(planeRef.current, {
                motionPath: {
                    path: pathRef.current,
                    align: pathRef.current,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                },
                ease: 'none',
            }, 0);
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const bgPathColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(249,115,22,0.1)';
    const planeColor = dark ? 'text-white' : 'text-orange-500';

    return (
        <div ref={wrapperRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1400 600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Background ghost path (always visible, very faint) */}
                <path
                    d={d}
                    stroke={bgPathColor}
                    strokeWidth="2"
                    strokeDasharray="4 8"
                    fill="none"
                />
                {/* Animated drawing path */}
                <path
                    ref={pathRef}
                    id={pathId}
                    d={d}
                    stroke={color}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    style={{ filter: `drop-shadow(0 0 4px ${color}55)` }}
                />
                {/* City dots — start, middle, end */}
                <circle cx="30" cy={variant === 'curve2' ? '120' : '480'} r="6" fill={color} />
                <circle cx="700" cy="320" r="6" fill={color} />
                <circle cx="1370" cy={variant === 'curve2' ? '120' : '120'} r="6" fill={color} />
            </svg>

            {/* Plane that follows the path */}
            <div ref={planeRef} className="absolute top-0 left-0" style={{ willChange: 'transform' }}>
                <Icon icon="mdi:airplane" width={42} className={`${planeColor} drop-shadow-lg`} />
            </div>
        </div>
    );
}
