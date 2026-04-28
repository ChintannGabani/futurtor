import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import HeroRoad from '../../components/HeroRoad';
import MarqueeTrail from '../../components/MarqueeTrail';
import ScrollPlane from '../../components/ScrollPlane';
import useSeo from '../../lib/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesView({ data }) {
    useSeo({
        title: 'Our Services - Visa, Education Consulting & Loan Guidance',
        description: 'Complete overseas education services: Education Consultancy, Application Services, Visa Services, Loan Guidance, Admission Advice & After-Arrival Support. 100% visa success rate.',
        keywords: 'study abroad services, visa consultancy, education loan guidance, application services, admission advice, after arrival support, Futuretor services',
        path: '/services',
    });
    if (!data) return null;

    const cardsRef = useRef(null);
    const trustRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.svc-hero-el', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2 });

            gsap.fromTo('.svc-card',
                { y: 50, autoAlpha: 0, scale: 0.95 },
                {
                    y: 0, autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true }
                }
            );

            gsap.fromTo('.trust-el',
                { y: 40, autoAlpha: 0 },
                {
                    y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: trustRef.current, start: 'top 80%', once: true }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const servicesList = [
        { title: 'Education Consultancy', desc: 'Expert educational planning and career awareness programs.', icon: 'mdi:school-outline', link: '/services/education-consultancy' },
        { title: 'Application Services', desc: 'Complete university application support with SOP writing.', icon: 'mdi:file-document-edit-outline', link: '/services/application-services' },
        { title: 'Loan Guidance', desc: 'Financial planning and education loan assistance.', icon: 'mdi:bank-outline', link: '/services/educational-loan-guidance' },
        { title: 'Admission Advices', desc: 'End-to-end admission guidance for global universities.', icon: 'mdi:lightbulb-outline', link: '/services/admission-advices' },
        { title: 'Visa Services', desc: '100% visa success rate with expert preparation.', icon: 'mdi:passport-biometric', link: '/services/visa-services' },
        { title: 'After Arrival Support', desc: 'Post-landing assistance for a smooth transition.', icon: 'mdi:airplane-landing', link: '/services/after-arrival-support' },
    ];

    return (
        <div className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">

            {/* HERO */}
            <section className="relative pt-36 pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/70 to-[#0B1121]" />
                <div className="absolute inset-0 pattern-grid opacity-30" />
                <PlaneAnimation />
                <HeroRoad />

                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="svc-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:briefcase-outline" width={16} />
                        <span>Professional Consulting</span>
                    </div>
                    <h1 className="svc-hero-el invisible hero-heading font-black tracking-tight mb-6 text-white">Our Services</h1>
                    <p className="svc-hero-el invisible text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
                        Expert guidance for studying abroad. We simplify the journey with precise, reliable, and premium support tailored to your goals.
                    </p>
                </div>

                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* MARQUEE DIVIDER */}
            <div className="bg-stone-50 border-y border-stone-100">
                <MarqueeTrail direction="left" speed={45} />
            </div>

            {/* SERVICES GRID */}
            <section ref={cardsRef} className="relative py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10 overflow-hidden">
                <ScrollPlane variant="curve1" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">What We Offer</span>
                        <h2 className="text-3xl lg:text-5xl font-black text-stone-900 tracking-tight">How We Help You Succeed</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicesList.map((service, idx) => (
                            <Link key={idx} to={service.link}>
                                <div className="svc-card invisible premium-card rounded-2xl p-8 h-full group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                                        <Icon icon={service.icon} width={28} className="text-orange-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                                    <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST SECTION */}
            <section ref={trustRef} className="relative py-28 px-4 sm:px-6 lg:px-8 w-full bg-[#0B1121] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-30" />
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="trust-el invisible">
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            End-to-end guidance from <span className="text-orange-500">application</span> to <span className="text-orange-500">arrival</span>
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-8">
                            High visa success rate with 500+ satisfied students. Transparent, personalized counseling tailored to your goals.
                        </p>
                        <div className="space-y-4">
                            {['Transparent process with no hidden fees', '1-on-1 Personalized Counseling', 'Post Visa Arrival Support', 'Dedicated Case Managers'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-stone-300">
                                    <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={14} className="text-orange-500" />
                                    </div>
                                    <span className="font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="trust-el invisible relative flex items-center justify-center h-[400px]">
                        <div className="absolute inset-4 bg-orange-500/10 blur-3xl rounded-3xl" />
                        {/* Decorative dotted rings */}
                        <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-white/15" />
                        <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-orange-500/20" />
                        {/* Center illustration */}
                        <Icon icon="noto:handshake" width={220} className="relative z-10 drop-shadow-2xl" />
                        {/* Floating accents */}
                        <Icon icon="noto:graduation-cap" width={64} className="absolute top-[10%] right-[10%] z-10 drop-shadow-xl rotate-6" />
                        <Icon icon="noto:airplane" width={56} className="absolute bottom-[12%] right-[12%] z-10 drop-shadow-xl -rotate-12" />
                        <Icon icon="noto:passport-control" width={56} className="absolute top-[15%] left-[10%] z-10 drop-shadow-xl" />
                        <Icon icon="noto:trophy" width={48} className="absolute bottom-[15%] left-[15%] z-10 drop-shadow-xl" />
                    </div>
                </div>
            </section>
        </div>
    );
}
