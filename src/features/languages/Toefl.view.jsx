import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2, Globe, Zap } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import useSeo from '../../lib/useSeo';
import { TOEFL_DATA } from '../../data/examPrepData';

gsap.registerPlugin(ScrollTrigger);

export default function ToeflView({ data = TOEFL_DATA }) {
    useSeo({
        title: 'TOEFL Exam Preparation - Test of English as a Foreign Language',
        description: 'Prepare for TOEFL with expert coaching. TOEFL iBT format accepted by 11,500+ universities globally. 30 hours coaching, 5 mock tests, ETS-trained faculty.',
        keywords: 'TOEFL exam, TOEFL iBT, TOEFL training, English proficiency test USA',
        path: '/languages/toefl',
    });

    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.toefl-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.toefl-format-card', { rotateY: 90, autoAlpha: 0 }, { rotateY: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.toefl-formats', start: 'top 85%', once: true } });
            gsap.fromTo('.toefl-section-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.toefl-sections-grid', start: 'top 85%', once: true } });
            gsap.fromTo('.toefl-skill', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.toefl-skills', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-[#0B1121] to-[#131d35]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="toefl-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:school" width={20} /><span>TOEFL - USA & Global Study</span>
                    </div>
                    <h1 className="toefl-hero-el invisible text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">{TOEFL_DATA.hero.heading}</h1>
                    <p className="toefl-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed mb-8">{TOEFL_DATA.hero.subHeading}</p>
                    <Link to="/contact-us">
                        <button className="toefl-hero-el invisible px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2">
                            {TOEFL_DATA.hero.cta} <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* QUICK STATS */}
            <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="toefl-hero-el invisible">
                        <p className="text-3xl font-black text-orange-500">11,500+</p>
                        <p className="text-xs font-semibold text-stone-600 mt-1">Universities Accept TOEFL</p>
                    </div>
                    <div className="toefl-hero-el invisible">
                        <p className="text-3xl font-black text-orange-500">160+</p>
                        <p className="text-xs font-semibold text-stone-600 mt-1">Countries</p>
                    </div>
                    <div className="toefl-hero-el invisible">
                        <p className="text-3xl font-black text-orange-500">30-40</p>
                        <p className="text-xs font-semibold text-stone-600 mt-1">Test Dates/Year</p>
                    </div>
                    <div className="toefl-hero-el invisible">
                        <p className="text-3xl font-black text-orange-500">2 Hours</p>
                        <p className="text-xs font-semibold text-stone-600 mt-1">Test Duration</p>
                    </div>
                </div>
            </section>

            {/* TEST FORMATS - UNIQUE DESIGN */}
            <section className="toefl-formats relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Test Options</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Multiple Test Formats</h2>
                        <p className="text-stone-600 mt-4 text-base">Take TOEFL your way - at test center or from home</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TOEFL_DATA.formats.map((format, idx) => (
                            <div key={idx} className="toefl-format-card invisible group perspective">
                                <div className={`${format.color} absolute -inset-1 rounded-2xl blur-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-500`} />
                                <div className="relative bg-white rounded-2xl p-8 border-2 border-stone-100 group-hover:border-orange-300 transition-all h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-16 h-16 rounded-xl ${format.color} flex items-center justify-center shadow-lg`}>
                                            <Icon icon={format.icon} width={32} className="text-white" />
                                        </div>
                                        <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm">{format.score}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{format.title}</h3>
                                    <p className="text-stone-600 mb-6 font-medium flex-grow">{format.description}</p>
                                    <ul className="space-y-3 pt-6 border-t border-stone-200">
                                        {format.details.map((detail, dIdx) => (
                                            <li key={dIdx} className="flex gap-2 text-stone-700 text-sm">
                                                <span className="text-orange-500 font-bold">✓</span>
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

            {/* SECTIONAL BREAKDOWN */}
            <section className="toefl-sections-grid relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Test Breakdown</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Four Essential Skills</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {TOEFL_DATA.sections.map((section, idx) => (
                            <div key={idx} className="toefl-section-card invisible group">
                                <div className="bg-gradient-to-br from-white to-stone-50 rounded-xl p-8 border-2 border-stone-200 group-hover:border-orange-300 transition-all h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                            <Icon icon={section.skills[0] === 'Skimming & scanning' ? 'mdi:book' : 'mdi:headphones'} width={24} className="text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-stone-900">{section.name}</h3>
                                            <p className="text-sm text-orange-600 font-semibold">{section.duration}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Format</p>
                                            <p className="text-stone-700 font-medium">{section.tasks}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Description</p>
                                            <p className="text-stone-600 text-sm">{section.description}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-3">Key Skills</p>
                                            <div className="flex flex-wrap gap-2">
                                                {section.skills.map((skill, sIdx) => (
                                                    <span key={sIdx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCORING SYSTEM */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Scoring</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Understand Your Score</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Score Breakdown */}
                        <div className="space-y-4">
                            {TOEFL_DATA.scoring.breakdown.map((score, idx) => (
                                <div key={idx} className="toefl-skill invisible group bg-white rounded-lg p-6 border border-stone-200 hover:shadow-lg hover:border-orange-300 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center font-bold text-orange-600">{score.range}</div>
                                            <div>
                                                <p className="font-bold text-stone-900">{score.label}</p>
                                                <p className="text-xs text-stone-500">{score.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Key Info */}
                        <div className="space-y-4">
                            <div className="toefl-skill invisible bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-8 border-2 border-orange-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="text-orange-600" size={28} />
                                    <h3 className="text-xl font-bold text-stone-900">Score Range</h3>
                                </div>
                                <p className="text-4xl font-black text-orange-600 mb-4">{TOEFL_DATA.scoring.scale}</p>
                                <p className="text-stone-700 font-semibold">{TOEFL_DATA.scoring.breakdown[1].description}</p>
                            </div>
                            <div className="toefl-skill invisible bg-white rounded-lg p-6 border-2 border-stone-200">
                                <p className="text-sm font-bold text-orange-600 uppercase tracking-wide mb-3">Note</p>
                                <p className="text-stone-700 font-medium">{TOEFL_DATA.scoring.noNegativeMarking}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRAINING FEATURES */}
            <section className="toefl-skills relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Coaching Program</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Expert Training Features</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TOEFL_DATA.trainingFeatures.map((feature, idx) => (
                            <div key={idx} className="toefl-skill invisible group bg-gradient-to-br from-orange-50/50 to-white rounded-lg p-6 border border-orange-200/30 hover:border-orange-300 hover:shadow-lg transition-all">
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

            {/* SPECIAL FEATURES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Why TOEFL</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">Why Choose TOEFL?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Offered 30-40 times annually globally',
                            'At-home testing available with online proctoring',
                            'Results in 4-8 calendar days',
                            'Test at your preferred time & location',
                            '4 free score reports to institutions',
                            'USA universities prefer TOEFL',
                        ].map((feature, idx) => (
                            <div key={idx} className="toefl-skill invisible flex gap-3 items-start bg-white rounded-lg p-6 border border-stone-200 hover:border-orange-300">
                                <CheckCircle2 size={24} className="text-orange-500 shrink-0 mt-1" />
                                <p className="text-stone-700 font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DATES & FEES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Upcoming Dates */}
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                            <Icon icon="mdi:calendar-outline" width={28} className="text-orange-500" />
                            Upcoming Test Dates
                        </h3>
                        <div className="space-y-3">
                            {TOEFL_DATA.upcomingDates.map((dateObj, idx) => (
                                <div key={idx} className="toefl-section-card invisible bg-gradient-to-r from-orange-50 to-white rounded-lg p-4 border border-orange-200/50 hover:border-orange-300">
                                    <p className="font-bold text-stone-900">{dateObj.month}</p>
                                    <p className="text-orange-600 font-semibold text-sm mt-2">{dateObj.dates}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fees */}
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                            <Zap className="text-orange-500" size={28} />
                            Test Fees
                        </h3>
                        <div className="space-y-3">
                            {Object.entries(TOEFL_DATA.fees).map(([key, value]) => (
                                <div key={key} className="toefl-section-card invisible bg-white rounded-lg p-4 border border-stone-200 hover:border-orange-300 flex justify-between items-center">
                                    <p className="font-medium text-stone-700">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                    <p className="font-bold text-orange-600 text-lg">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.05} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">Ready to Master TOEFL?</h2>
                    <p className="text-white/90 text-base sm:text-lg mb-8">Start your TOEFL journey today with expert ETS-trained faculty!</p>
                    <Link to="/contact-us">
                        <button className="px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold text-base hover:bg-stone-100 shadow-xl transition-all inline-flex items-center gap-3">
                            Begin TOEFL Prep <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
