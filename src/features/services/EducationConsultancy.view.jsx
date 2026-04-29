import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import useSeo from '../../lib/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function EducationConsultancyView({ data }) {
    useSeo({
        title: 'Education Consultancy - Top Study Visa Consultant',
        description: "Futuretor is India's top study visa consultant offering personalized educational planning, course advice, and career guidance based on your profile, budget, and goals.",
        keywords: 'education consultancy India, study visa consultant, college gateway, course recommendation, career planning, Futuretor education consultant',
        path: '/services/education-consultancy',
    });
    if (!data) return null;
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ec-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.ec-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.ec-cards', start: 'top 85%', once: true } });
            gsap.fromTo('.ec-feature', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ec-features', start: 'top 85%', once: true } });
            gsap.fromTo('.ec-img', { x: 50, autoAlpha: 0, scale: 0.95 }, { x: 0, autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.ec-features', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const pillars = [
        { icon: 'mdi:earth', title: 'Popular Courses', desc: 'Guidance based on popular courses in your target country and global market trends.' },
        { icon: 'mdi:account-star-outline', title: 'Student Caliber', desc: 'Personalized advice based on your academic strengths and career interests.' },
        { icon: 'mdi:cash-multiple', title: 'Budget Planning', desc: 'Recommendations considering your budget and financial requirements.' },
        { icon: 'mdi:trending-up', title: 'Trending Courses', desc: 'Insights on the latest trending professional courses worldwide.' },
    ];

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/90 to-[#0B1121]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="ec-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:school-outline" width={16} /><span>Independent Planning</span>
                    </div>
                    <h1 className="ec-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">Education Consultancy</h1>
                    <p className="ec-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed">{data.description1}</p>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* ADVISORY PILLARS - Colored icon cards */}
            <section className="ec-cards relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">What We Offer</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">Core Advisory Pillars</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((p, idx) => {
                            const colors = ['bg-orange-500', 'bg-blue-500', 'bg-emerald-500', 'bg-purple-500'];
                            return (
                                <div key={idx} className="ec-card invisible bg-white rounded-2xl p-7 border border-stone-100 hover:shadow-xl hover:border-orange-200 transition-all duration-500 group">
                                    <div className={`w-14 h-14 rounded-xl ${colors[idx]} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon icon={p.icon} width={28} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">{p.title}</h3>
                                    <p className="text-stone-500 text-[15px] leading-relaxed">{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FEATURES - Split layout with image */}
            <section className="ec-features relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <span className="text-orange-500 font-bold tracking-widest text-xs mb-3 block">Why Futuretor</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight mb-6 leading-tight">India's Smartest <span className="text-orange-500">College Gateway</span></h2>
                        <p className="text-stone-500 text-[15px] leading-relaxed mb-8">{data.description2}</p>
                        <div className="space-y-4">
                            {['Deep domain knowledge in higher education', 'Technology-driven personalized insights', 'Credible and transparent counseling', '24/7 support and guidance'].map((item, i) => (
                                <div key={i} className="ec-feature invisible flex gap-3 items-center group">
                                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all">
                                        <CheckCircle2 size={16} className="text-orange-500 group-hover:text-white" />
                                    </div>
                                    <span className="text-stone-700 font-medium text-[15px]">{item}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact-us" className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all">
                            Consult Now <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="ec-img invisible relative flex items-center justify-center h-[400px]">
                        <div className="absolute inset-4 bg-orange-500/10 blur-3xl rounded-3xl" />
                        {/* Decorative dotted rings */}
                        <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-orange-500/15" />
                        <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-orange-500/20" />
                        {/* Center illustration */}
                        <Icon icon="noto:graduation-cap" width={220} className="relative z-10 drop-shadow-2xl" />
                        {/* Floating accents */}
                        <Icon icon="noto:books" width={64} className="absolute top-[10%] right-[10%] z-10 drop-shadow-xl rotate-6" />
                        <Icon icon="noto:globe-showing-europe-africa" width={56} className="absolute bottom-[10%] left-[10%] z-10 drop-shadow-xl" />
                        <Icon icon="noto:trophy" width={48} className="absolute top-[15%] left-[15%] z-10 drop-shadow-xl -rotate-6" />
                        <Icon icon="noto:airplane" width={56} className="absolute bottom-[12%] right-[12%] z-10 drop-shadow-xl -rotate-12" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-[#0B1121] to-[#131d35] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.02} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">India's Smartest College Gateway</h2>
                    <p className="text-stone-400 text-base sm:text-lg mb-8">Deep domain knowledge in higher education with technology, innovation, and credibility.</p>
                    <Link to="/contact-us">
                        <button className="btn-premium px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-3">
                            Submit Inquiry <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
