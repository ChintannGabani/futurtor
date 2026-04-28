import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2, Calendar, Zap } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import useSeo from '../../lib/useSeo';
import { IELTS_DATA } from '../../data/examPrepData';

gsap.registerPlugin(ScrollTrigger);

export default function IeltsView({ data = IELTS_DATA }) {
    useSeo({
        title: 'IELTS Exam Preparation - International English Language Testing',
        description: 'Master IELTS with our comprehensive coaching. Choose from Paper, Computer, or Online formats. Expert trainers, 30 hours of coaching, 20 mock tests included.',
        keywords: 'IELTS exam, IELTS training, IELTS coaching India, English proficiency test',
        path: '/languages/ielts',
    });

    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ielts-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.ielts-mode-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.ielts-modes', start: 'top 85%', once: true } });
            gsap.fromTo('.ielts-section', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.ielts-sections', start: 'top 85%', once: true } });
            gsap.fromTo('.ielts-type', { scale: 0.9, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ielts-types', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/90 to-[#0B1121]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="ielts-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:language-html5" width={20} /><span>IELTS - International Proficiency</span>
                    </div>
                    <h1 className="ielts-hero-el invisible text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">{IELTS_DATA.hero.heading}</h1>
                    <p className="ielts-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed mb-8">{IELTS_DATA.hero.subHeading}</p>
                    <Link to="/contact-us">
                        <button className="ielts-hero-el invisible px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2">
                            {IELTS_DATA.hero.cta} <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* TEST FORMAT INFO */}
            <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(IELTS_DATA.overview.testFormat).map(([key, value]) => (
                            <div key={key} className="ielts-hero-el invisible bg-white rounded-lg p-4 border border-stone-200 text-center">
                                <p className="text-stone-500 text-xs font-semibold uppercase tracking-wider mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                                <p className="text-lg font-bold text-stone-900">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEST MODES - UNIQUE DESIGN */}
            <section className="ielts-modes relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Choose Your Format</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Three Flexible Test Modes</h2>
                        <p className="text-stone-600 mt-4 text-base">Select the format that works best for you</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {IELTS_DATA.modes.map((mode, idx) => (
                            <div key={idx} className="ielts-mode-card invisible group relative">
                                <div className={`${mode.color} absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative bg-white rounded-2xl p-8 border-2 border-stone-100 group-hover:border-orange-300 transition-all duration-300">
                                    <div className={`w-16 h-16 rounded-xl ${mode.color} flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon icon={mode.icon} width={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{mode.title}</h3>
                                    <p className="text-stone-600 mb-6 font-medium">{mode.description}</p>
                                    <ul className="space-y-3">
                                        {mode.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex gap-2 text-stone-700 text-sm">
                                                <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IELTS TYPES/VARIANTS */}
            <section className="ielts-types relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Exam Variants</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Types of IELTS</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {IELTS_DATA.types.map((type, idx) => (
                            <div key={idx} className="ielts-type invisible bg-white rounded-xl p-6 border border-stone-100 hover:shadow-xl hover:border-orange-200 transition-all">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                                    <Icon icon={type.icon} width={24} className="text-orange-600" />
                                </div>
                                <h3 className="font-bold text-stone-900 mb-2 text-lg">{type.name}</h3>
                                <p className="text-stone-600 text-sm">{type.usage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEST SECTIONS */}
            <section className="ielts-sections relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Test Structure</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">The Four Components</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {IELTS_DATA.sections.map((section, idx) => (
                            <div key={idx} className="ielts-section invisible">
                                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-200/50 h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-3xl font-black text-orange-500">{idx + 1}</div>
                                        <div className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">{section.duration}</div>
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">{section.name}</h3>
                                    <p className="text-sm text-stone-600 mb-3">{section.questions}</p>
                                    <p className="text-sm text-stone-700 leading-relaxed">{section.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCORING */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Scoring System</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">IELTS Band Scale (0-9)</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            {IELTS_DATA.scoring.bands.map((band, idx) => (
                                <div key={idx} className="ielts-section invisible bg-white rounded-lg p-6 border border-stone-200 hover:border-orange-300 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-xl">{band.band}</div>
                                        <div>
                                            <p className="font-bold text-stone-900 text-lg">{band.level}</p>
                                            <p className="text-stone-600 text-sm">{band.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border-2 border-orange-200">
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">Key Information</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <CheckCircle2 size={24} className="text-orange-500 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-stone-900">Typical Requirement</p>
                                        <p className="text-stone-600 text-sm">{IELTS_DATA.scoring.requirement}</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={24} className="text-orange-500 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-stone-900">Score Validity</p>
                                        <p className="text-stone-600 text-sm">2 years from test date</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 size={24} className="text-orange-500 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-stone-900">No Negative Marking</p>
                                        <p className="text-stone-600 text-sm">All answers count equally</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRAINING FEATURES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Program</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">What We Offer</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {IELTS_DATA.trainingFeatures.map((feature, idx) => (
                            <div key={idx} className="ielts-section invisible bg-gradient-to-br from-orange-50/50 to-white rounded-lg p-6 border border-orange-200/30 hover:border-orange-300 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                        <Icon icon={feature.icon} width={24} className="text-orange-600" />
                                    </div>
                                    <h3 className="font-bold text-stone-900 text-lg">{feature.title}</h3>
                                </div>
                                <p className="text-stone-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           

            {/* CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-[#0B1121] to-[#131d35] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.02} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Ready to Ace IELTS?</h2>
                    <p className="text-stone-400 text-base sm:text-lg mb-8">Choose your test mode, join our expert coaching, and achieve your target band score.</p>
                    <Link to="/contact-us">
                        <button className="btn-premium px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-3">
                            Enroll Now <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
