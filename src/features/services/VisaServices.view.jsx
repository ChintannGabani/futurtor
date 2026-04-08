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

export default function VisaServicesView({ data }) {
    useSeo({
        title: 'Visa Services - 100% Student Visa Success Rate',
        description: 'FutureTor offers complete student visa services with a 100% success rate. Visa file preparation, interview coaching, financial guidance, and timely document submission.',
        keywords: 'student visa services, study visa India, visa interview preparation, visa file preparation, 100% visa success rate',
        path: '/services/visa-services',
    });
    if (!data) return null;
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.vs-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.vs-step', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.vs-steps', start: 'top 85%', once: true } });
            gsap.fromTo('.vs-line', { scaleY: 0 }, { scaleY: 1, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: '.vs-steps', start: 'top 85%', once: true } });
            gsap.fromTo('.vs-trust', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.vs-trust-section', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        { icon: 'mdi:file-document-check-outline', title: 'Getting Your Visa File Ready', desc: 'Complete documentation preparation ensuring every form, certificate, and supporting document is organized and submission-ready.', color: 'bg-orange-500' },
        { icon: 'mdi:account-voice', title: 'Visa Interview Preparation', desc: 'Thorough mock interview coaching with real scenario practice to build confidence and ensure you make a strong impression.', color: 'bg-blue-500' },
        { icon: 'mdi:cash-check', title: 'Financial Guidance', desc: 'Expert financial guidance for meeting visa requirements - bank statements, sponsor letters, and fund documentation.', color: 'bg-emerald-500' },
        { icon: 'mdi:clock-check-outline', title: 'Timely Document Submission', desc: 'Ensuring every document is submitted on time with proper formatting and compliance with embassy requirements.', color: 'bg-purple-500' },
    ];

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/90 to-[#0B1121]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <PlaneAnimation />
                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="vs-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 text-sm text-emerald-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:shield-check" width={16} /><span>100% Success Rate</span>
                    </div>
                    <h1 className="vs-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">Visa Services</h1>
                    <p className="vs-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* VISA PROCESS TIMELINE */}
            <section className="vs-steps relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Process</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">Expert Visa Protocol</h2>
                    </div>
                    <div className="relative">
                        <div className="vs-line absolute left-[28px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500 via-blue-500 to-emerald-500 hidden md:block origin-top rounded-full" />
                        {steps.map((step, idx) => (
                            <div key={idx} className="vs-step invisible flex gap-5 sm:gap-8 mb-10 last:mb-0 items-start">
                                <div className={`w-14 h-14 rounded-xl ${step.color} text-white flex items-center justify-center shrink-0 shadow-lg relative z-10`}>
                                    <Icon icon={step.icon} width={26} />
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
                                    <span className="text-stone-300 font-black text-xs">STEP {String(idx + 1).padStart(2, '0')}</span>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
                                    <p className="text-stone-500 text-[15px] leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section className="vs-trust-section relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="vs-trust invisible relative flex items-center justify-center h-[400px]">
                        <div className="absolute inset-4 bg-orange-500/10 blur-3xl rounded-3xl" />
                        {/* Decorative dotted rings */}
                        <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-orange-500/15" />
                        <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-orange-500/20" />
                        {/* Center illustration */}
                        <Icon icon="noto:passport-control" width={220} className="relative z-10 drop-shadow-2xl" />
                        {/* Floating accents */}
                        <Icon icon="noto:airplane" width={64} className="absolute top-[10%] right-[12%] z-10 drop-shadow-xl -rotate-12" />
                        <Icon icon="noto:globe-showing-europe-africa" width={56} className="absolute top-[12%] left-[10%] z-10 drop-shadow-xl" />
                        <Icon icon="noto:check-mark-button" width={48} className="absolute bottom-[14%] right-[14%] z-10 drop-shadow-xl" />
                        {/* Stat badge */}
                        <div className="absolute bottom-2 left-2 z-20 bg-white rounded-xl p-4 shadow-xl border border-orange-100">
                            <div className="text-orange-500 font-black text-2xl">100%</div>
                            <div className="text-stone-600 text-sm font-semibold">Success Rate</div>
                        </div>
                    </div>
                    <div className="vs-trust invisible">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight mb-6 leading-tight">Why Students <span className="text-orange-500">Trust</span> Our Visa Services</h2>
                        <p className="text-stone-500 text-[15px] leading-relaxed mb-8">We understand the complexity and stress of visa applications. Our expert team has successfully processed hundreds of visa applications with a perfect track record.</p>
                        <div className="space-y-4">
                            {['Zero rejection rate in study visa applications', 'Experienced counselors who understand embassy requirements', 'Complete file preparation with no loose ends', 'Mock interviews that mirror actual visa interviews', 'Financial documentation guidance for every country'].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                                    <span className="text-stone-700 font-medium text-[15px]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Icon icon="mdi:passport" width={300} className="text-white absolute right-[-5%] top-[-20%]" style={{ transform: 'rotate(15deg)' }} />
                </div>
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-center lg:text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Ready to Secure Your Visa?</h2>
                        <p className="text-orange-100 text-base">Don't risk rejection. Get expert guidance for your visa today.</p>
                    </div>
                    <Link to="/contact-us">
                        <button className="px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold hover:bg-orange-50 shadow-xl transition-all flex items-center gap-3 whitespace-nowrap">
                            Get Free Consultation <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
