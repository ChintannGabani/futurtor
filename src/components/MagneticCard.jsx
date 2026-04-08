import React, { useRef } from 'react';
import gsap from 'gsap';

/**
 * MagneticCard — wraps children with a hover effect where the card gently
 * tilts toward the cursor (3D rotateX/rotateY) and a glow follows the cursor.
 *
 * Performance: only animates on mousemove inside the card. No continuous loop.
 * Animation uses GPU transforms (rotateX/rotateY/translate3d) only.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 * @param {number} [props.intensity=8] — max tilt in degrees
 */
export default function MagneticCard({ children, className = '', intensity = 8 }) {
    const ref = useRef(null);
    const glowRef = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateY = ((x - cx) / cx) * intensity;
        const rotateX = -((y - cy) / cy) * intensity;

        gsap.to(el, {
            rotateX,
            rotateY,
            duration: 0.4,
            ease: 'power2.out',
            transformPerspective: 800,
        });

        if (glowRef.current) {
            gsap.to(glowRef.current, {
                x: x - 80,
                y: y - 80,
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        }
    };

    const handleLeave = () => {
        const el = ref.current;
        if (!el) return;
        gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: 'power2.out',
        });
        if (glowRef.current) {
            gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
        }
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={`relative ${className}`}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
            {/* Cursor-following glow */}
            <div
                ref={glowRef}
                className="pointer-events-none absolute top-0 left-0 w-40 h-40 rounded-full bg-orange-500/15 blur-3xl opacity-0"
                style={{ willChange: 'transform, opacity' }}
            />
            {children}
        </div>
    );
}
