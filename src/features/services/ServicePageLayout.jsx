import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import HeroRoad from '../../components/HeroRoad';

gsap.registerPlugin(ScrollTrigger);

export default function ServicePageLayout({ title, badge, badgeIcon, description, points, pointsTitle, footerText, ctaTitle, ctaDesc, variant = 'grid', accentColor = 'orange', illustration = 'noto:briefcase', sideIllustrations = [] }) {
    const contentRef = useRef(null);
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.sp-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });

            if (variant === 'grid') {
                gsap.fromTo('.sp-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
            } else if (variant === 'timeline') {
                gsap.fromTo('.sp-timeline-line', { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
                gsap.fromTo('.sp-step', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
            } else if (variant === 'split') {
                gsap.fromTo('.sp-left', { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
                gsap.fromTo('.sp-right', { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
            } else if (variant === 'numbered') {
                gsap.fromTo('.sp-num-item', { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
            } else if (variant === 'checklist') {
                gsap.fromTo('.sp-check', { x: -30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
            } else if (variant === 'cards-alt') {
                gsap.fromTo('.sp-alt-card', { y: 50, autoAlpha: 0, rotateX: 8 }, { y: 0, autoAlpha: 1, rotateX: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 85%', once: true } });
            }
        }, pageRef);
        return () => ctx.revert();
    }, [variant]);

    const pointIcons = ['mdi:check-decagram-outline', 'mdi:shield-check-outline', 'mdi:account-check-outline', 'mdi:file-check-outline', 'mdi:star-outline', 'mdi:hand-heart-outline'];
    const stepColors = ['bg-orange-500', 'bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-rose-500', 'bg-amber-500'];

    const renderContent = () => {
        if (!points || points.length === 0) return null;

        switch (variant) {
            // ===== TIMELINE: Vertical numbered steps =====
            case 'timeline':
                return (
                    <div className="max-w-4xl mx-auto relative">
                        <div className="sp-timeline-line absolute left-[28px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500 via-blue-500 to-emerald-500 hidden md:block origin-top rounded-full" />
                        {points.map((point, idx) => {
                            const isObj = typeof point === 'object';
                            return (
                                <div key={idx} className="sp-step invisible flex gap-5 sm:gap-8 mb-8 last:mb-0 items-start">
                                    <div className={`w-14 h-14 rounded-xl ${stepColors[idx % stepColors.length]} text-white flex items-center justify-center shrink-0 shadow-lg relative z-10 text-lg font-black`}>
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1 bg-white rounded-xl p-5 sm:p-6 border border-stone-100 shadow-sm">
                                        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1">{isObj ? point.title : point}</h3>
                                        {isObj && point.desc && <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );

            // ===== SPLIT: 2-column with icon list left, description right =====
            case 'split':
                return (
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="sp-left invisible space-y-4">
                            {points.map((point, idx) => {
                                const isObj = typeof point === 'object';
                                return (
                                    <div key={idx} className="flex gap-4 items-start p-5 rounded-xl bg-white border border-stone-100 hover:border-orange-200 transition-all group">
                                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all">
                                            <CheckCircle2 size={18} className="text-orange-500 group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 text-sm mb-1">{isObj ? point.title : point}</h4>
                                            {isObj && point.desc && <p className="text-stone-500 text-xs leading-relaxed">{point.desc}</p>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="sp-right invisible bg-[#0B1121] rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                            <div className="absolute inset-0 pattern-grid opacity-15" />
                            <div className="relative z-10">
                                <Icon icon="mdi:lightbulb-on-outline" width={36} className="text-orange-500 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-4">Why This Matters</h3>
                                <p className="text-stone-300 text-sm leading-relaxed">{footerText || description}</p>
                                <Link to="/contact-us" className="inline-flex items-center gap-2 text-orange-500 font-bold mt-6 text-sm hover:gap-3 transition-all">
                                    Get Expert Help <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                );

            // ===== NUMBERED: Big number + content rows =====
            case 'numbered':
                return (
                    <div className="max-w-4xl mx-auto space-y-6">
                        {points.map((point, idx) => {
                            const isObj = typeof point === 'object';
                            return (
                                <div key={idx} className="sp-num-item invisible flex gap-5 items-start group">
                                    <div className="text-4xl sm:text-5xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors leading-none pt-1 select-none shrink-0 w-16 text-right">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1 pb-6 border-b border-stone-100 group-hover:border-orange-200 transition-colors">
                                        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">{isObj ? point.title : point}</h3>
                                        {isObj && point.desc && <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );

            // ===== CHECKLIST: Clean checkmark list with side accent =====
            case 'checklist':
                return (
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-100 shadow-sm relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-400 rounded-r-full" />
                            <div className="space-y-5">
                                {points.map((point, idx) => {
                                    const isObj = typeof point === 'object';
                                    return (
                                        <div key={idx} className="sp-check invisible flex gap-4 items-start group">
                                            <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                                                <Icon icon="mdi:check" width={16} className="text-orange-500 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-stone-900 text-sm">{isObj ? point.title : point}</h4>
                                                {isObj && point.desc && <p className="text-stone-500 text-xs leading-relaxed mt-1">{point.desc}</p>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );

            // ===== CARDS-ALT: Alternating left-right cards =====
            case 'cards-alt':
                return (
                    <div className="max-w-5xl mx-auto space-y-6">
                        {points.map((point, idx) => {
                            const isObj = typeof point === 'object';
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={idx} className={`sp-alt-card invisible flex flex-col sm:flex-row gap-5 items-start ${isEven ? '' : 'sm:flex-row-reverse'}`}>
                                    <div className={`w-14 h-14 rounded-xl ${stepColors[idx % stepColors.length]} flex items-center justify-center shrink-0 shadow-lg`}>
                                        <Icon icon={pointIcons[idx % pointIcons.length]} width={26} className="text-white" />
                                    </div>
                                    <div className={`flex-1 bg-white rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all ${isEven ? '' : 'sm:text-right'}`}>
                                        <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1">{isObj ? point.title : point}</h3>
                                        {isObj && point.desc && <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );

            // ===== GRID (default): Standard card grid =====
            default:
                return (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${points.length >= 4 ? 'lg:grid-cols-4' : points.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-4 sm:gap-6`}>
                        {points.map((point, idx) => {
                            const isObj = typeof point === 'object';
                            return (
                                <div key={idx} className="sp-card invisible premium-card rounded-xl sm:rounded-2xl p-6 sm:p-8 group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                        <Icon icon={pointIcons[idx % pointIcons.length]} width={22} className="text-orange-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{isObj ? point.title : point}</h3>
                                    {isObj && point.desc && <p className="text-stone-500 text-sm leading-relaxed">{point.desc}</p>}
                                </div>
                            );
                        })}
                    </div>
                );
        }
    };

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">

            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[50vh] sm:min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/90 to-[#0B1121]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <HeroRoad />

                {/* Hero illustrations - sides */}
                <Icon icon={illustration} width={130} className="absolute left-[6%] top-1/2 -translate-y-1/2 z-10 drop-shadow-2xl hidden lg:block -rotate-6 opacity-90" />
                <Icon icon={sideIllustrations[0] || 'noto:airplane'} width={110} className="absolute right-[6%] top-1/3 z-10 drop-shadow-2xl hidden lg:block rotate-6 opacity-90" />
                <Icon icon={sideIllustrations[1] || 'noto:passport-control'} width={70} className="absolute right-[14%] bottom-[28%] z-10 drop-shadow-xl hidden xl:block opacity-80" />

                <div className="relative max-w-5xl mx-auto z-20 text-center w-full px-4">
                    <div className="sp-hero-el invisible inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-xs sm:text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon={badgeIcon || 'mdi:briefcase-outline'} width={16} />
                        <span>{badge || 'Expert Service'}</span>
                    </div>
                    <h1 className="sp-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-white leading-[1.08]">{title}</h1>
                    <p className="sp-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed">{description}</p>
                </div>

                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* CONTENT */}
            <section ref={contentRef} className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    {pointsTitle && (
                        <div className="text-center mb-12 sm:mb-16 px-4">
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">What We Offer</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-stone-900 tracking-tight">{pointsTitle}</h2>
                        </div>
                    )}
                    {renderContent()}
                </div>
            </section>

            {/* FOOTER TEXT (only for variants that don't use it in split) */}
            {footerText && variant !== 'split' && (
                <section className="relative py-16 sm:py-20 px-4 bg-white border-t border-stone-100">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <Icon icon="mdi:format-quote-open" width={32} className="text-orange-200 mx-auto mb-4" />
                        <p className="text-stone-600 text-base sm:text-lg leading-relaxed italic">{footerText}</p>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-[#0B1121] to-[#131d35] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.02} />
                <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">{ctaTitle || 'Ready to Get Started?'}</h2>
                    <p className="text-stone-400 text-base sm:text-lg mb-6 sm:mb-8">{ctaDesc || "Don't wait. Get expert guidance today."}</p>
                    <Link to="/contact-us">
                        <button className="btn-premium px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-3">
                            Submit Inquiry <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
