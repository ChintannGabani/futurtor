import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import TestimonialMarquee from '../../components/TestimonialMarquee';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import HeroRoad from '../../components/HeroRoad';
import MarqueeTrail from '../../components/MarqueeTrail';
import ScrollPlane from '../../components/ScrollPlane';
import useSeo from '../../lib/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function GermanView({ heroData, whyChooseUs, benefits, testimonials }) {
    useSeo({
        title: 'German Language Classes - A1 to C1 Goethe Aligned',
        description: 'Learn German from A1 to C1 with Futuretor — Goethe-aligned curriculum, small batches, technical vocabulary focus, and 24/7 support. Best German classes in Surat.',
        keywords: 'German language classes Surat, learn German A1 C1, Goethe institute aligned, German for engineers, study in Germany, German classes India',
        path: '/languages/german',
    });
    if (!heroData) return null;

    const heroRef = useRef(null);
    const whyRef = useRef(null);
    const benefitsRef = useRef(null);
    const testimonialRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero: scale-in + rotate entrance
            gsap.fromTo('.de-hero-flag',
                { scale: 0, autoAlpha: 0, rotation: -180 },
                { scale: 1, autoAlpha: 1, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)', delay: 0.3 }
            );
            gsap.fromTo('.de-hero-text',
                { y: 80, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power4.out', delay: 0.6 }
            );

            // Why Choose Us: alternating rows slide from left/right
            gsap.utils.toArray('.de-why-row').forEach((row, idx) => {
                gsap.fromTo(row,
                    { x: idx % 2 === 0 ? -120 : 120, autoAlpha: 0 },
                    {
                        x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out',
                        scrollTrigger: { trigger: row, start: 'top 85%', once: true }
                    }
                );
            });

            // Benefits: horizontal stagger with scale pop
            gsap.fromTo('.de-benefit-item',
                { scale: 0.6, autoAlpha: 0, y: 40 },
                {
                    scale: 1, autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'back.out(1.7)',
                    scrollTrigger: { trigger: benefitsRef.current, start: 'top 80%', once: true }
                }
            );

            // Testimonial section fade up
            gsap.fromTo('.de-testimonial-wrap',
                { y: 60, autoAlpha: 0 },
                {
                    y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: testimonialRef.current, start: 'top 80%', once: true }
                }
            );

            // CTA: clip-path reveal
            gsap.fromTo('.de-cta-inner',
                { autoAlpha: 0, scale: 0.9 },
                {
                    autoAlpha: 1, scale: 1, duration: 0.7, ease: 'power3.out',
                    scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', once: true }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const whyIcons = [
        'mdi:school-outline', 'mdi:account-group-outline', 'mdi:certificate-outline',
        'mdi:book-open-page-variant-outline', 'mdi:earth', 'mdi:cog-outline',
        'mdi:headphones', 'mdi:currency-eur'
    ];

    const whyIllustrations = [
        'noto:graduation-cap',
        'noto:teacher',
        'noto:open-book',
        'noto:globe-showing-europe-africa',
        'noto:gear',
        'noto:headphone',
        'noto:money-with-wings',
        'noto:writing-hand',
    ];

    return (
        <div className="flex flex-col w-full relative min-h-screen bg-neutral-50 overflow-hidden">

            {/* ===== HERO - Centered flag-centric layout ===== */}
            <section ref={heroRef} className="relative pt-28 pb-36 px-4 sm:px-6 lg:px-8 w-full z-10 overflow-hidden min-h-[85vh] flex items-center justify-center">
                {/* Germany-themed bg */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

                {/* German flag stripe accents */}
                <div className="absolute top-0 left-0 right-0 h-2 flex">
                    <div className="flex-1 bg-black" />
                    <div className="flex-1 bg-red-600" />
                    <div className="flex-1 bg-yellow-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                    <div className="flex-1 bg-black" />
                    <div className="flex-1 bg-red-600" />
                    <div className="flex-1 bg-yellow-400" />
                </div>

                <PlaneAnimation />
                <HeroRoad />

                <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
                    {/* Large flag emblem */}
                    <div className="de-hero-flag invisible mb-8 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-yellow-400/60 shadow-2xl shadow-yellow-400/20 flex items-center justify-center bg-black/40 backdrop-blur-md">
                        <span className="text-6xl sm:text-7xl select-none">🇩🇪</span>
                    </div>

                    <div className="de-hero-text invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-6 text-sm text-yellow-300 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:map-marker-radius-outline" width={16} className="text-yellow-400" />
                        <span>Goethe-Aligned Curriculum</span>
                    </div>

                    <h1 className="de-hero-text invisible text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-white leading-tight">
                        {heroData.title}
                    </h1>

                    <p className="de-hero-text invisible text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl leading-relaxed mb-10">
                        Master German from A1 to C1 with native-level fluency. Expert-crafted modules designed for Indian students pursuing higher education and careers in Germany.
                    </p>

                    <div className="de-hero-text invisible flex flex-col sm:flex-row items-center gap-4">
                        <Link to="/contact-us">
                            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold flex items-center gap-2 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 transition-all duration-300">
                                Begin Your Journey <ArrowRight size={18} />
                            </button>
                        </Link>
                        <div className="flex items-center gap-2 text-stone-400 text-sm">
                            <div className="flex -space-x-2">
                                {['R', 'S', 'A', 'P'].map((letter, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 flex items-center justify-center text-white text-xs font-bold border-2 border-black/50">
                                        {letter}
                                    </div>
                                ))}
                            </div>
                            <span>500+ students trained</span>
                        </div>
                    </div>
                </div>

                {/* Angular divider instead of wave */}
                <div className="absolute bottom-0 left-0 right-0 z-30">
                    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
                        <polygon points="0,80 720,20 1440,80" fill="#fafafa" />
                    </svg>
                </div>
            </section>

            {/* ===== MARQUEE DIVIDER ===== */}
            <div className="bg-neutral-50 border-y border-stone-200">
                <MarqueeTrail direction="left" speed={45} />
            </div>

            {/* ===== WHY CHOOSE US - 2-column alternating rows ===== */}
            <section ref={whyRef} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 w-full z-10 bg-neutral-50 overflow-hidden">
                <WorldMapBg className="inset-0 w-full h-full text-stone-500" opacity={0.04} />
                <FlightRoute className="top-10 left-0 right-0 h-40 w-full" color="#dc2626" direction="left-to-right" />
                <ScrollPlane variant="curve1" color="#dc2626" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16 sm:mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Why Futurtor
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">{whyChooseUs.heading}</h2>
                    </div>

                    <div className="space-y-16 sm:space-y-20">
                        {whyChooseUs.points.map((point, idx) => (
                            <div
                                key={idx}
                                className={`de-why-row invisible flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-14 items-center`}
                            >
                                {/* Illustration side */}
                                <div className="w-full lg:w-5/12 flex-shrink-0">
                                    <div className="relative group">
                                        <div className={`absolute -inset-3 bg-gradient-to-br ${idx % 2 === 0 ? 'from-red-500/15 to-yellow-400/15' : 'from-yellow-400/15 to-red-500/15'} rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className="relative rounded-3xl bg-gradient-to-br from-white to-stone-50 border border-stone-200 shadow-lg p-10 sm:p-12 lg:p-14 h-56 sm:h-64 lg:h-72 flex items-center justify-center overflow-hidden">
                                            {/* Decorative dotted ring */}
                                            <div className="absolute inset-6 rounded-2xl border-2 border-dashed border-red-500/15" />
                                            <div className="absolute inset-10 rounded-2xl border-2 border-dashed border-yellow-400/15" />
                                            {/* Soft glow */}
                                            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-red-500/10 to-yellow-400/10 blur-3xl" />
                                            {/* Big illustration */}
                                            <Icon
                                                icon={whyIllustrations[idx % whyIllustrations.length]}
                                                width={140}
                                                className="relative z-10 drop-shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"
                                            />
                                            {/* Number overlay */}
                                            <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/80 backdrop-blur-sm flex items-center justify-center text-yellow-400 font-black text-lg">
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text side */}
                                <div className="w-full lg:w-7/12">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-yellow-400 flex items-center justify-center flex-shrink-0 shadow-md">
                                            <Icon icon={whyIcons[idx % whyIcons.length]} width={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">{point.title}</h3>
                                            <p className="text-stone-500 leading-relaxed text-sm sm:text-base">{point.desc}</p>
                                            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-red-500 to-yellow-400 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS - Staggered grid with numbered cards ===== */}
            <section ref={benefitsRef} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 w-full z-10 bg-stone-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04]">
                    <div className="absolute inset-0 bg-gradient-to-bl from-black via-red-600 to-yellow-400" />
                </div>
                <FlightRoute className="bottom-4 left-0 right-0 h-32 w-full" color="#facc15" direction="right-to-left" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-3 block">Unlock Your Potential</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">{benefits.heading}</h2>
                    </div>

                    {/* 2-column staggered grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.points.map((point, idx) => {
                            const benefitIllustrations = [
                                'noto:briefcase',
                                'noto:microscope',
                                'noto:money-bag',
                                'noto:school',
                                'noto:laptop',
                            ];
                            return (
                                <div
                                    key={idx}
                                    className={`de-benefit-item invisible group ${idx % 2 === 1 ? 'md:mt-8' : ''}`}
                                >
                                    <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 sm:p-8 hover:bg-white/[0.08] hover:border-yellow-400/30 transition-all duration-500 h-full">
                                        {/* Large number watermark */}
                                        <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.04] group-hover:text-yellow-400/10 transition-colors duration-500 select-none">
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>

                                        {/* Floating illustration */}
                                        <div className="absolute -top-4 -right-2 w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                            <Icon icon={benefitIllustrations[idx % benefitIllustrations.length]} width={48} className="drop-shadow-xl" />
                                        </div>

                                        <div className="relative z-10">
                                            <div className="flex gap-1 mb-5">
                                                <div className="h-1 w-4 rounded-full bg-black/60" />
                                                <div className="h-1 w-4 rounded-full bg-red-600" />
                                                <div className="h-1 w-4 rounded-full bg-yellow-400" />
                                            </div>

                                            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 pr-20">
                                                {point.title}
                                            </h4>
                                            <p className="text-stone-400 text-[15px] leading-relaxed">
                                                {point.desc}
                                            </p>

                                            <div className="mt-5 flex items-center gap-2 text-yellow-400/60 group-hover:text-yellow-400 transition-colors text-sm font-semibold">
                                                <CheckCircle2 size={15} />
                                                <span>Included in all levels</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS - Carousel ===== */}
            <section ref={testimonialRef} className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 w-full z-10 bg-neutral-50 overflow-hidden">
                <WorldMapBg className="inset-0 w-full h-full text-stone-500" opacity={0.03} />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="flex gap-0.5 text-yellow-500">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-3">
                            Student Success Stories
                        </h2>
                        <p className="text-stone-500 max-w-xl mx-auto">
                            Hear from students who transformed their futures through our German language program.
                        </p>
                    </div>

                    <div className="de-testimonial-wrap invisible">
                        {testimonials && testimonials.length > 0 && (
                            <TestimonialMarquee testimonials={testimonials} />
                        )}
                    </div>
                </div>
            </section>

            {/* ===== CTA - German-themed ===== */}
            <section ref={ctaRef} className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Layered German flag gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-red-950" />
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-black" />
                    <div className="absolute top-1/3 left-0 w-full h-1/3 bg-red-600" />
                    <div className="absolute top-2/3 left-0 w-full h-1/3 bg-yellow-400" />
                </div>

                <div className="de-cta-inner invisible relative z-10 max-w-4xl mx-auto">
                    <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-3xl p-10 sm:p-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-sm font-semibold mb-8">
                            <Icon icon="mdi:rocket-launch-outline" width={16} />
                            <span>Start Today</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
                            Your German Journey<br className="hidden sm:block" /> Begins Here
                        </h2>
                        <p className="text-stone-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join hundreds of successful students who chose Futurtor as their gateway to Germany. From A1 to C1, we guide you every step of the way.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact-us">
                                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold text-lg hover:scale-105 shadow-xl shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 inline-flex items-center gap-3">
                                    Enroll Now <ArrowRight size={22} />
                                </button>
                            </Link>
                            <Link to="/contact-us" className="text-stone-400 hover:text-yellow-400 transition-colors text-sm font-medium inline-flex items-center gap-1.5">
                                <Icon icon="mdi:phone-outline" width={16} />
                                Schedule a Free Demo
                            </Link>
                        </div>

                        {/* Bottom flag accent */}
                        <div className="flex justify-center gap-2 mt-10">
                            <div className="h-1 w-8 rounded-full bg-black/40" />
                            <div className="h-1 w-8 rounded-full bg-red-600/60" />
                            <div className="h-1 w-8 rounded-full bg-yellow-400/60" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
