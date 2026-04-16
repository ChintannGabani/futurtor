import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2, Zap, Clock } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import useSeo from '../../lib/useSeo';
import { PTE_DATA } from '../../data/examPrepData';

gsap.registerPlugin(ScrollTrigger);

export default function PteView({ data = PTE_DATA }) {
    useSeo({
        title: 'PTE Exam Preparation - Pearson Test of English',
        description: 'Prepare for PTE with expert coaching. Fast results in 48 hours! Accepted by 35,000+ universities. 30 hours training, 3 full-length mock tests, Pearson-trained faculty.',
        keywords: 'PTE exam, PTE Academic, PTE training, English proficiency test',
        path: '/languages/pte',
    });

    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.pte-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.pte-type-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.pte-types', start: 'top 85%', once: true } });
            gsap.fromTo('.pte-section-accordion', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.pte-sections', start: 'top 85%', once: true } });
            gsap.fromTo('.pte-feature', { scale: 0.9, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.pte-features-grid', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-gradient-to-br from-[#0B1121] via-[#0B1121] to-orange-900/20 overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="pte-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Zap size={18} /><span>PTE - Fast Results in 48 Hours</span>
                    </div>
                    <h1 className="pte-hero-el invisible text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">{PTE_DATA.hero.heading}</h1>
                    <p className="pte-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed mb-8">{PTE_DATA.hero.subHeading}</p>
                    <Link to="/contact-us">
                        <button className="pte-hero-el invisible px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2">
                            {PTE_DATA.hero.cta} <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* KEY STATS - HIGHLIGHTED */}
            <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="pte-hero-el invisible text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-lg border-2 border-orange-200">
                            <p className="text-3xl font-black text-orange-600">48 Hrs</p>
                            <p className="text-xs font-semibold text-stone-600 mt-2">Result Declaration</p>
                        </div>
                        <div className="pte-hero-el invisible text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-lg border-2 border-orange-200">
                            <p className="text-3xl font-black text-orange-600">35,000+</p>
                            <p className="text-xs font-semibold text-stone-600 mt-2">Universities Worldwide</p>
                        </div>
                        <div className="pte-hero-el invisible text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-lg border-2 border-orange-200">
                            <p className="text-3xl font-black text-orange-600">10-90</p>
                            <p className="text-xs font-semibold text-stone-600 mt-2">Scoring Scale</p>
                        </div>
                        <div className="pte-hero-el invisible text-center p-4 bg-gradient-to-br from-orange-50 to-white rounded-lg border-2 border-orange-200">
                            <p className="text-3xl font-black text-orange-600">62+</p>
                            <p className="text-xs font-semibold text-stone-600 mt-2">Test Centers in India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PTE TYPES/VARIANTS */}
            <section className="pte-types relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Exam Types</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Choose Your PTE Track</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PTE_DATA.testTypes.map((type, idx) => (
                            <div key={idx} className="pte-type-card invisible group h-full">
                                <div className={`bg-white rounded-xl p-8 border-2 border-stone-200 group-hover:border-orange-300 transition-all h-full flex flex-col`}>
                                    <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6">
                                        <Icon icon={type.icon} width={28} className="text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">{type.name}</h3>
                                    <div className="mb-4 flex-grow">
                                        <p className="text-sm font-semibold text-orange-600 mb-2">{type.level} Level</p>
                                        <p className="text-stone-600 text-sm">{type.usage}</p>
                                    </div>
                                    <div className="pt-4 border-t border-stone-200">
                                        <p className="text-xs text-stone-500 font-semibold mb-1">Score</p>
                                        <p className="text-lg font-black text-orange-600">{type.score}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEST SECTIONS - EXPANDABLE */}
            <section className="pte-sections relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Test Breakdown</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">How PTE is Structured</h2>
                    </div>
                    <div className="space-y-4">
                        {PTE_DATA.sections.map((section, idx) => (
                            <details key={idx} className="pte-section-accordion invisible group bg-white rounded-lg border-2 border-stone-200 group-hover:border-orange-300 transition-all cursor-pointer overflow-hidden">
                                <summary className="flex items-center justify-between p-6 font-bold text-lg text-stone-900 hover:bg-stone-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                            <Icon icon={section.icon} width={20} className="text-orange-600" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-lg font-bold">{section.name}</p>
                                            <p className="text-sm text-orange-600 font-semibold">{section.duration}</p>
                                        </div>
                                    </div>
                                    <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="px-6 pb-6 pt-0 border-t border-stone-200 bg-stone-50">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-3">Description</p>
                                            <p className="text-stone-700 leading-relaxed">{section.description}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-3">
                                                {section.tasks ? 'Tasks/Components' : 'Details'}
                                            </p>
                                            {section.components ? (
                                                <ul className="space-y-2">
                                                    {section.components.map((comp, cIdx) => (
                                                        <li key={cIdx} className="flex gap-2 text-stone-700">
                                                            <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-1" />
                                                            <span className="text-sm">{comp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-stone-700">{section.tasks}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCORING */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Scoring</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">PTE Score Interpretation</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {PTE_DATA.scoring.bands.map((band, idx) => (
                            <div key={idx} className="pte-feature invisible bg-white rounded-lg p-6 border-2 border-stone-200 hover:border-orange-300 transition-all">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-16 h-16 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-2xl">{band.range.split('-')[0]}</div>
                                        <div>
                                            <p className="font-bold text-stone-900 text-lg">{band.level}</p>
                                            <p className="text-xs text-stone-500">Score Range</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-stone-700 text-sm">{band.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 border-2 border-orange-200">
                        <p className="text-stone-700 text-center font-medium">{PTE_DATA.scoring.individualSkills}</p>
                    </div>
                </div>
            </section>

            {/* UNIQUE ADVANTAGES */}
            <section className="pte-features-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Why PTE</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">PTE Advantages</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PTE_DATA.uniqueFeatures.map((feature, idx) => (
                            <div key={idx} className="pte-feature invisible group bg-gradient-to-br from-orange-50/50 to-white rounded-lg p-6 border border-orange-200/30 hover:border-orange-300 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-all">
                                        <Icon icon={feature.icon} width={24} className="text-orange-600" />
                                    </div>
                                    <h3 className="font-bold text-stone-900">{feature.title}</h3>
                                </div>
                                <p className="text-stone-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRAINING FEATURES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Coaching</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Our PTE Training Program</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PTE_DATA.trainingFeatures.map((feature, idx) => (
                            <div key={idx} className="pte-feature invisible group bg-white rounded-lg p-6 border-2 border-stone-200 group-hover:border-orange-300 group-hover:shadow-lg transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                        <Icon icon={feature.icon} width={24} className="text-orange-600" />
                                    </div>
                                    <h3 className="font-bold text-stone-900">{feature.title}</h3>
                                </div>
                                <p className="text-stone-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMING & FEES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Timings */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <Clock className="text-orange-500" size={28} />
                            <h3 className="text-2xl font-bold text-stone-900">Class Timings</h3>
                        </div>
                        <div className="space-y-3">
                            {PTE_DATA.timings.map((timing, idx) => (
                                <div key={idx} className="pte-section-accordion invisible bg-gradient-to-r from-orange-50 to-white rounded-lg p-4 border-2 border-orange-200/50 hover:border-orange-300">
                                    <p className="font-bold text-stone-900">{timing.duration}</p>
                                    <p className="text-orange-600 font-semibold text-sm mt-2">{timing.schedule}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fees & Test Centers */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <Zap className="text-orange-500" size={28} />
                            <h3 className="text-2xl font-bold text-stone-900">Fees & Centers</h3>
                        </div>
                        <div className="space-y-3">
                            {Object.entries(PTE_DATA.fees).map(([key, value]) => (
                                <div key={key} className="pte-section-accordion invisible bg-white rounded-lg p-4 border-2 border-stone-200 hover:border-orange-300 flex justify-between items-center">
                                    <p className="font-medium text-stone-700">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                    <p className="font-bold text-orange-600 text-lg">{value}</p>
                                </div>
                            ))}
                            <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-4 border-2 border-orange-200 mt-4">
                                <p className="text-sm font-semibold text-orange-900">Test Centers</p>
                                <p className="text-sm text-orange-800 mt-1">{PTE_DATA.testCenters}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UPCOMING DATES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Schedule</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Upcoming Test Dates</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PTE_DATA.upcomingDates.map((dateObj, idx) => (
                            <div key={idx} className="pte-feature invisible text-center bg-white rounded-lg p-6 border-2 border-stone-200 hover:border-orange-300 hover:shadow-lg transition-all">
                                <p className="font-bold text-stone-900 text-lg mb-3">{dateObj.month}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {dateObj.dates.split(', ').map((date, dIdx) => (
                                        <span key={dIdx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">{date}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-[#0B1121] via-orange-900 to-orange-800 overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.03} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Join Thousands of Successful Students</h2>
                    <p className="text-white/90 text-base sm:text-lg mb-8">Start your PTE preparation today and get results in 48 hours!</p>
                    <Link to="/contact-us">
                        <button className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-3">
                            Get Started Now <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
