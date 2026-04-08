import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialCarousel({ testimonials, dark = false }) {
    const [active, setActive] = useState(0);
    const containerRef = useRef(null);
    const total = testimonials.length;

    const goTo = (idx) => {
        const clamped = ((idx % total) + total) % total;
        setActive(clamped);
    };

    useEffect(() => {
        const interval = setInterval(() => goTo(active + 1), 6000);
        return () => clearInterval(interval);
    }, [active]);

    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll('.carousel-card');
        if (!cards) return;
        cards.forEach((card, i) => {
            if (i === active) {
                gsap.to(card, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out' });
                card.style.position = 'relative';
                card.style.pointerEvents = 'auto';
            } else {
                gsap.to(card, { autoAlpha: 0, scale: 0.97, duration: 0.3, ease: 'power2.in' });
                card.style.position = 'absolute';
                card.style.pointerEvents = 'none';
            }
        });
    }, [active]);

    const cardBg = dark ? 'bg-white/[0.06] border-white/10' : 'bg-white border-stone-100';
    const textColor = dark ? 'text-stone-200' : 'text-stone-600';
    const nameColor = dark ? 'text-white' : 'text-stone-900';
    const roleColor = dark ? 'text-stone-400' : 'text-stone-500';
    const arrowBg = dark
        ? 'bg-white/10 hover:bg-orange-500 text-white border-white/10 hover:border-orange-500'
        : 'bg-white hover:bg-orange-500 text-stone-600 hover:text-white border-stone-200 hover:border-orange-500';

    return (
        <div className="relative">
            {/* Cards container */}
            <div ref={containerRef} className="relative">
                {testimonials.map((test, idx) => (
                    <div
                        key={idx}
                        className="carousel-card inset-0"
                        style={{
                            opacity: idx === 0 ? 1 : 0,
                            position: idx === 0 ? 'relative' : 'absolute',
                            top: 0, left: 0, right: 0,
                            pointerEvents: idx === 0 ? 'auto' : 'none',
                        }}
                    >
                        <div className={`${cardBg} backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border relative`}>
                            <div className={`absolute top-4 right-8 text-6xl sm:text-7xl font-serif select-none ${dark ? 'text-white/[0.04]' : 'text-stone-100'}`}>"</div>

                            <div className="relative z-10">
                                <div className="flex gap-0.5 text-orange-400 mb-5">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className={`${textColor} mb-8 leading-relaxed text-base sm:text-lg italic`}>
                                    "{test.quote}"
                                </p>
                                <div className={`flex items-center gap-4 pt-6 border-t ${dark ? 'border-white/10' : 'border-stone-100'}`}>
                                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-base shadow-lg">
                                        {test.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className={`font-bold ${nameColor} text-base`}>{test.name}</h4>
                                        <p className={`${roleColor} text-sm`}>{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation - BELOW the card, always visible */}
            <div className="flex items-center justify-center gap-5 mt-10 relative z-20">
                <button
                    onClick={() => goTo(active - 1)}
                    className={`w-11 h-11 rounded-xl ${arrowBg} border flex items-center justify-center transition-all duration-300 shadow-sm`}
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2.5 items-center">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`rounded-full transition-all duration-300 ${
                                idx === active ? 'bg-orange-500 w-9 h-3' : `${dark ? 'bg-white/20 hover:bg-white/40' : 'bg-stone-200 hover:bg-stone-300'} w-3 h-3`
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => goTo(active + 1)}
                    className={`w-11 h-11 rounded-xl ${arrowBg} border flex items-center justify-center transition-all duration-300 shadow-sm`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
