import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';
import { Icon } from '@iconify/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * TestimonialMarquee — unique compact two-row infinite marquee for reviews.
 *
 * Design:
 *  - Row 1 scrolls left-to-right, Row 2 scrolls right-to-left
 *  - Cards are compact (max ~340px) so many reviews fit in small vertical space
 *  - Pause-on-hover (per row, smooth)
 *  - Entrance: cards fade up with stagger when section enters viewport
 *  - Edge fade masks
 *  - Each card has the rotating-quote-mark accent + avatar initial
 *
 * Performance:
 *  - GSAP timeline with `xPercent: -50` + duplicated content = perfectly seamless loop
 *  - Single requestAnimationFrame per row (driven by GSAP ticker)
 *  - All transforms are GPU (translate3d via xPercent)
 *  - ScrollTrigger entrance fires once
 */
export default function TestimonialMarquee({ testimonials, dark = false }) {
    const sectionRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const tween1Ref = useRef(null);
    const tween2Ref = useRef(null);

    // Split testimonials into 2 rows
    const half = Math.ceil(testimonials.length / 2);
    const rowA = testimonials.slice(0, half);
    const rowB = testimonials.slice(half).length ? testimonials.slice(half) : testimonials;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance stagger
            gsap.fromTo('.tm-card',
                { autoAlpha: 0, y: 40, scale: 0.92 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: { amount: 0.6, from: 'random' },
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );

            // Row 1 — left to right (xPercent goes from 0 to -50 because we duplicated)
            tween1Ref.current = gsap.to(row1Ref.current, {
                xPercent: -50,
                ease: 'none',
                duration: 50,
                repeat: -1,
            });

            // Row 2 — right to left (start from -50, go to 0)
            gsap.set(row2Ref.current, { xPercent: -50 });
            tween2Ref.current = gsap.to(row2Ref.current, {
                xPercent: 0,
                ease: 'none',
                duration: 60,
                repeat: -1,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const pause = (which) => {
        const t = which === 1 ? tween1Ref.current : tween2Ref.current;
        if (t) gsap.to(t, { timeScale: 0, duration: 0.5, ease: 'power2.out' });
    };
    const resume = (which) => {
        const t = which === 1 ? tween1Ref.current : tween2Ref.current;
        if (t) gsap.to(t, { timeScale: 1, duration: 0.5, ease: 'power2.out' });
    };

    const cardBg = dark ? 'bg-white/[0.04] border-white/10' : 'bg-white border-stone-100';
    const textColor = dark ? 'text-stone-200' : 'text-stone-600';
    const nameColor = dark ? 'text-white' : 'text-stone-900';
    const roleColor = dark ? 'text-stone-400' : 'text-stone-500';
    const fadeColor = dark ? 'from-[#0B1121]' : 'from-stone-50';

    const Card = ({ t, idx }) => (
        <div className="tm-card shrink-0 w-[300px] sm:w-[340px]" style={{ willChange: 'transform, opacity' }}>
            <div className={`relative ${cardBg} backdrop-blur-sm rounded-2xl p-6 border h-full hover:border-orange-400/50 transition-all duration-500 group`}>
                {/* Floating quote mark */}
                <div className="absolute -top-3 -left-2 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Quote size={16} className="text-white" fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 text-orange-400 mb-3 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>

                {/* Quote */}
                <p className={`${textColor} text-[13.5px] leading-relaxed mb-5 line-clamp-5`}>
                    {t.quote}
                </p>

                {/* Author */}
                <div className={`flex items-center gap-3 pt-4 border-t ${dark ? 'border-white/10' : 'border-stone-100'}`}>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
                        {t.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className={`font-bold ${nameColor} text-[13px] truncate`}>{t.name}</h4>
                        <p className={`${roleColor} text-[11px] truncate`}>{t.role}</p>
                    </div>
                    <Icon icon="twemoji:flag-germany" width={18} className="shrink-0 opacity-80" />
                </div>
            </div>
        </div>
    );

    return (
        <div ref={sectionRef} className="relative">
            {/* Edge fade masks */}
            <div className={`absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-20 pointer-events-none bg-gradient-to-r ${fadeColor} to-transparent`} />
            <div className={`absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-20 pointer-events-none bg-gradient-to-l ${fadeColor} to-transparent`} />

            {/* Row 1 */}
            <div
                className="overflow-hidden py-3"
                onMouseEnter={() => pause(1)}
                onMouseLeave={() => resume(1)}
            >
                <div ref={row1Ref} className="flex gap-5 w-max">
                    {[...rowA, ...rowA].map((t, idx) => (
                        <Card key={`r1-${idx}`} t={t} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div
                className="overflow-hidden py-3 mt-2"
                onMouseEnter={() => pause(2)}
                onMouseLeave={() => resume(2)}
            >
                <div ref={row2Ref} className="flex gap-5 w-max">
                    {[...rowB, ...rowB].map((t, idx) => (
                        <Card key={`r2-${idx}`} t={t} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Trust strip at bottom */}
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        {['S', 'H', 'P', 'A'].map((letter, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold border-2 ${dark ? 'border-[#0B1121]' : 'border-white'} shadow-sm`}>
                                {letter}
                            </div>
                        ))}
                    </div>
                    <span className={`text-sm font-semibold ${nameColor}`}>500+ Happy Students</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-orange-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className={`text-sm font-bold ${nameColor}`}>4.9/5</span>
                    <span className={`text-xs ${roleColor}`}>average rating</span>
                </div>
            </div>
        </div>
    );
}
