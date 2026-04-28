import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute } from '../../components/SectionDecorations';
import HeroRoad from '../../components/HeroRoad';
import MarqueeTrail from '../../components/MarqueeTrail';
import ScrollPlane from '../../components/ScrollPlane';
import useSeo from '../../lib/useSeo';

gsap.registerPlugin(ScrollTrigger);

function CountUp({ target, suffix = '' }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const st = ScrollTrigger.create({
            trigger: el, start: 'top 90%', once: true,
            onEnter: () => {
                gsap.fromTo(el, { innerText: 0 }, {
                    innerText: parseInt(target), duration: 2.5, ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate() { el.textContent = Math.floor(this.targets()[0].innerText) + suffix; }
                });
            }
        });
        return () => st.kill();
    }, [target, suffix]);
    return <span ref={ref} className="count-up">0{suffix}</span>;
}

export default function IeltsToeflPteView({ heroData, modules, scoreInfo }) {
    useSeo({
        title: 'IELTS, TOEFL & PTE Coaching - Expert Test Prep',
        description: 'Ace IELTS, TOEFL & PTE with Futuretor expert coaching. Master Reading, Writing, Listening & Speaking with 550+ happy students and 10+ years of experience.',
        keywords: 'IELTS coaching Surat, TOEFL preparation, PTE training, IELTS reading writing speaking, English language test prep India',
        path: '/languages/ielts-toefl-pte',
    });
    if (!heroData) return null;

    const [activeTab, setActiveTab] = useState(0);
    const statsRef = useRef(null);
    const modulesRef = useRef(null);
    const scoreRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero: staggered slide-in from left
            gsap.fromTo('.ielts-hero-text',
                { x: -80, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power4.out', delay: 0.3 }
            );

            // Hero stats card: scale + rotate in from right
            gsap.fromTo('.ielts-hero-card',
                { x: 100, autoAlpha: 0, rotateY: 15, scale: 0.85 },
                { x: 0, autoAlpha: 1, rotateY: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
            );

            // Circular progress rings: draw-in with clip-path
            gsap.fromTo('.ielts-stat-ring',
                { autoAlpha: 0, scale: 0.5, rotation: -90 },
                {
                    autoAlpha: 1, scale: 1, rotation: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.4)',
                    scrollTrigger: { trigger: statsRef.current, start: 'top 80%', once: true }
                }
            );

            // Score tabs: clip-path reveal
            gsap.fromTo('.ielts-score-section',
                { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' },
                {
                    autoAlpha: 1, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power3.inOut',
                    scrollTrigger: { trigger: scoreRef.current, start: 'top 80%', once: true }
                }
            );

            // Bento modules: stagger with different transforms per card
            const bentoAnims = [
                { y: 60, rotation: -3, scale: 0.9 },
                { y: -40, rotation: 2, scale: 0.85 },
                { x: -50, rotation: 3, scale: 0.9 },
                { x: 50, rotation: -2, scale: 0.85 },
            ];
            document.querySelectorAll('.ielts-bento-card').forEach((card, i) => {
                const from = bentoAnims[i % 4];
                gsap.fromTo(card,
                    { autoAlpha: 0, ...from },
                    {
                        autoAlpha: 1, y: 0, x: 0, rotation: 0, scale: 1,
                        duration: 0.9, ease: 'power3.out',
                        scrollTrigger: { trigger: modulesRef.current, start: 'top 80%', once: true, delay: i * 0.15 }
                    }
                );
            });

            // CTA: scale up from center
            gsap.fromTo('.ielts-cta-content',
                { autoAlpha: 0, scale: 0.8, y: 40 },
                {
                    autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', once: true }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const moduleIcons = ['mdi:headphones', 'mdi:book-open-variant', 'mdi:pencil-outline', 'mdi:microphone-outline'];
    const moduleIllustrations = ['noto:headphone', 'noto:open-book', 'noto:writing-hand', 'noto:microphone'];
    const moduleColors = ['from-blue-500 to-cyan-400', 'from-emerald-500 to-teal-400', 'from-amber-500 to-orange-400', 'from-purple-500 to-pink-400'];
    const moduleDescs = [
        'Understand various English accents and dialogues with expert practice.',
        'Analyze complex texts and interpret information quickly and accurately.',
        'Express ideas clearly and coherently in written English with precision.',
        'Communicate fluently and build confidence from day one of training.'
    ];

    // Split scoreInfo into chunks of 3 for tabs
    const tabSize = 3;
    const scoreTabs = [];
    for (let i = 0; i < scoreInfo.length; i += tabSize) {
        scoreTabs.push(scoreInfo.slice(i, i + tabSize));
    }
    const tabLabels = ['Band Basics', 'Score Details', 'Key Facts'];

    // SVG progress ring helper
    const ringRadius = 54;
    const ringCircumference = 2 * Math.PI * ringRadius;

    return (
        <div className="flex flex-col w-full relative min-h-screen bg-slate-50 overflow-hidden">

            {/* ===== HERO: Split layout - Left text, Right stats card ===== */}
            <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-gradient-to-br from-[#0a0f1e] via-[#111936] to-[#0d1428] overflow-hidden min-h-[75vh] flex items-center">
                {/* Exam-themed background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />

                {/* Geometric exam pattern overlay */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(249,115,22,0.3) 39px, rgba(249,115,22,0.3) 40px),
                                          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(249,115,22,0.15) 39px, rgba(249,115,22,0.15) 40px)`
                    }}
                />
                <PlaneAnimation />
                <HeroRoad />

                <div className="relative max-w-7xl mx-auto z-20 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Text content */}
                    <div className="text-left">
                        <div className="ielts-hero-text invisible inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/25 mb-6 text-sm text-orange-400 font-mono tracking-wider">
                            <Icon icon="mdi:trophy-outline" width={16} className="text-orange-500" />
                            <span>EXPERT TEST PREP</span>
                        </div>
                        <h1 className="ielts-hero-text invisible text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-[1.1]">
                            {heroData.title}
                        </h1>
                        <p className="ielts-hero-text invisible text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
                            {heroData.description}
                        </p>
                        <div className="ielts-hero-text invisible flex flex-wrap gap-4">
                            <Link to="/contact-us">
                                <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold flex items-center gap-2 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5">
                                    Start Preparation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <button className="px-8 py-4 rounded-lg border border-white/15 text-white font-semibold hover:bg-white/5 transition-all backdrop-blur-sm">
                                View Scores
                            </button>
                        </div>
                    </div>

                    {/* Right: Floating stats card */}
                    <div className="ielts-hero-card invisible relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/10 blur-3xl rounded-3xl" />
                        {/* Floating illustrations around card */}
                        <Icon icon="noto:graduation-cap" width={72} className="absolute -top-10 -left-6 z-20 drop-shadow-2xl -rotate-12" />
                        <Icon icon="noto:trophy" width={56} className="absolute -bottom-6 -right-4 z-20 drop-shadow-2xl rotate-6" />
                        <div className="relative bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                                    <Icon icon="mdi:chart-line" width={22} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Our Track Record</h3>
                                    <p className="text-slate-400 text-xs">Proven results, year after year</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {heroData.stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white/[0.05] rounded-xl p-5 border border-white/[0.06] hover:border-orange-500/30 transition-colors">
                                        <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-1">
                                            <CountUp target={stat.value.replace('+', '').replace('%', '')} suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''} />
                                        </div>
                                        <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            {heroData.offeringsText && (
                                <p className="text-slate-400 text-sm mt-6 leading-relaxed border-t border-white/[0.06] pt-6">
                                    {heroData.offeringsText}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Angled divider instead of wave */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-slate-100/50" style={{ clipPath: 'polygon(0 100%, 100% 40%, 100% 100%)' }} />
            </section>

            {/* ===== STATS: Circular progress-ring style counters ===== */}
            <section ref={statsRef} className="relative py-24 px-4 bg-slate-50 z-10 overflow-hidden">
                <FlightRoute className="top-0 left-0 w-full h-40 opacity-50" direction="left-to-right" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-mono">Performance Metrics</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">Why Students Trust Us</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
                        {heroData.stats.map((stat, idx) => {
                            const numVal = parseInt(stat.value.replace('+', '').replace('%', ''));
                            const pct = Math.min(numVal, 100);
                            const offset = ringCircumference - (pct / 100) * ringCircumference;
                            const ringColors = ['#f97316', '#3b82f6', '#10b981', '#8b5cf6'];

                            return (
                                <div key={idx} className="ielts-stat-ring invisible flex flex-col items-center">
                                    <div className="relative w-36 h-36 lg:w-44 lg:h-44">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                                            {/* Background ring */}
                                            <circle cx="60" cy="60" r={ringRadius} fill="none" stroke="#e2e8f0" strokeWidth="8" />
                                            {/* Progress ring */}
                                            <circle
                                                cx="60" cy="60" r={ringRadius} fill="none"
                                                stroke={ringColors[idx % 4]}
                                                strokeWidth="8"
                                                strokeLinecap="round"
                                                strokeDasharray={ringCircumference}
                                                strokeDashoffset={offset}
                                                className="transition-all duration-1000"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-2xl lg:text-3xl font-black text-slate-900">
                                                <CountUp target={stat.value.replace('+', '').replace('%', '')} suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''} />
                                            </span>
                                        </div>
                                    </div>
                                    <span className="mt-4 text-sm font-semibold text-slate-600 text-center max-w-[120px]">{stat.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== SCORE INFO: Tabbed layout ===== */}
            <section ref={scoreRef} className="relative py-24 px-4 bg-white z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/[0.03] rounded-full blur-[100px]" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="ielts-score-section invisible">
                        <div className="text-center mb-12">
                            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-mono">Score Breakdown</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">IELTS Score Overview</h2>
                        </div>

                        {/* Tab buttons */}
                        <div className="flex justify-center gap-2 mb-10">
                            {scoreTabs.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${activeTab === idx
                                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    {tabLabels[idx] || `Info ${idx + 1}`}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100 p-8 lg:p-10 shadow-sm min-h-[200px]">
                            <div className="space-y-4">
                                {(scoreTabs[activeTab] || []).map((info, i) => (
                                    <div
                                        key={`${activeTab}-${i}`}
                                        className="flex gap-4 items-start p-4 rounded-xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <CheckCircle2 size={16} className="text-white" />
                                        </div>
                                        <span className="text-slate-700 font-medium text-sm leading-relaxed group-hover:text-slate-900 transition-colors">{info}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MARQUEE DIVIDER ===== */}
            <div className="bg-white border-y border-slate-100">
                <MarqueeTrail direction="right" speed={45} />
            </div>

            {/* ===== MODULES: 2x2 Bento Grid ===== */}
            <section ref={modulesRef} className="relative py-24 px-4 sm:px-6 lg:px-8 w-full z-10 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
                <FlightRoute className="bottom-0 left-0 w-full h-32 opacity-40" direction="right-to-left" />
                <ScrollPlane variant="wave" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-mono">Exam Modules</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">Skills We Master</h2>
                    </div>

                    {/* Bento grid: 2x2 with varied sizes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(200px,auto)]">
                        {modules.map((mod, idx) => {
                            const title = typeof mod === 'string' ? mod : mod.title;
                            const desc = typeof mod === 'string' ? moduleDescs[idx] : mod.desc;
                            // Bento sizing: first card spans 2 cols, last card spans 2 cols
                            const spanClass = idx === 0
                                ? 'md:col-span-2 md:row-span-1'
                                : idx === 1
                                    ? 'md:col-span-1 md:row-span-2'
                                    : idx === 2
                                        ? 'md:col-span-1 md:row-span-1'
                                        : 'md:col-span-2 md:row-span-1';

                            return (
                                <div
                                    key={idx}
                                    className={`ielts-bento-card invisible ${spanClass} group relative rounded-2xl p-8 lg:p-10 overflow-hidden bg-white border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500`}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${moduleColors[idx]} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                                    {/* Top accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${moduleColors[idx]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                                    {/* Floating illustration on the right */}
                                    <div className="absolute top-6 right-6 w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Icon icon={moduleIllustrations[idx % 4]} width={48} className="drop-shadow-lg" />
                                    </div>

                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                        <div>
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${moduleColors[idx]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon icon={moduleIcons[idx]} width={28} className="text-white" />
                                            </div>
                                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                                                {title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                                {desc}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center gap-2 text-orange-500 font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            <span>Learn more</span>
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== CTA: Gradient card style ===== */}
            <section ref={ctaRef} className="relative py-28 px-4 bg-[#0a0f1e] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249,115,22,0.4) 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/[0.06] rounded-full blur-[150px]" />

                <div className="ielts-cta-content invisible max-w-3xl mx-auto relative z-10">
                    <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-10 lg:p-16 text-center shadow-2xl">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-orange-500/20">
                            <Icon icon="mdi:school-outline" width={32} className="text-white" />
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 tracking-tight">Ready to Ace Your IELTS?</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                            Join our expert coaching program and achieve your target band score with personalized training.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact-us">
                                <button className="group px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-3">
                                    Enroll Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/contact-us">
                                <button className="px-10 py-4 rounded-xl border border-white/15 text-white font-bold text-lg hover:bg-white/5 transition-all">
                                    Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
