import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, Star, Phone, Mail, MapPin, Send } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg, PassportStamps } from '../../components/SectionDecorations';
import HeroRoad from '../../components/HeroRoad';
import TestimonialMarquee from '../../components/TestimonialMarquee';
import { FOOTER_DATA } from '../../data/constants';
import MarqueeTrail from '../../components/MarqueeTrail';
import ScrollPlane from '../../components/ScrollPlane';
import MagneticCard from '../../components/MagneticCard';
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

export default function HomeView({ data }) {
    useSeo({
        title: 'Study Abroad & Immigration Consultancy in Surat',
        description: "FutureTor — India's trusted overseas education & immigration consultancy. Expert German, IELTS, PTE training, visa services, and 100% visa success rate. Step beyond borders today.",
        keywords: 'study abroad consultancy, immigration consultancy Surat, German classes Surat, IELTS coaching, PTE training, student visa, overseas education India, FutureTor',
        path: '/',
    });
    if (!data) return null;
    const { hero, whatWeDo, vision, testimonials } = data;
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // HERO - Stagger in
            gsap.fromTo('.hero-element', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.18, ease: 'power3.out', delay: 0.3 });
            gsap.to('.hero-bg-img', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 } });

            // SERVICES - Rotate in from different directions
            gsap.fromTo('.service-card', { y: 60, autoAlpha: 0, rotateY: 15 }, { y: 0, autoAlpha: 1, rotateY: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.services-section', start: 'top 85%', once: true } });

            // STATS - Scale up with bounce
            gsap.fromTo('.stat-item', { scale: 0.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.stats-section', start: 'top 85%', once: true } });

            // VISION - Clip reveal
            gsap.fromTo('.vision-content', { x: -60, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.vision-section', start: 'top 80%', once: true } });
            gsap.fromTo('.vision-img-wrap', { x: 60, autoAlpha: 0, scale: 0.9 }, { x: 0, autoAlpha: 1, scale: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.vision-section', start: 'top 80%', once: true } });

            // JOURNEY - Draw line + stagger steps
            gsap.fromTo('.journey-line-fill', { scaleY: 0 }, { scaleY: 1, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: '.journey-section', start: 'top 85%', once: true } });
            gsap.fromTo('.journey-step', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.7, stagger: 0.25, ease: 'power3.out', scrollTrigger: { trigger: '.journey-section', start: 'top 85%', once: true } });

            // COUNTRIES - Zoom in cards
            gsap.fromTo('.country-card', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.countries-section', start: 'top 85%', once: true } });

            // TESTIMONIALS - Slide from alternate sides
            document.querySelectorAll('.testimonial-card').forEach((card, i) => {
                gsap.fromTo(card, { x: i % 2 === 0 ? -50 : 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%', once: true } });
            });

            // CONTACT - Rise up
            gsap.fromTo('.contact-element', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.contact-section', start: 'top 85%', once: true } });

        }, pageRef);
        return () => ctx.revert();
    }, []);

    const countries = [
        { name: 'Germany', flag: 'twemoji:flag-germany', color: 'from-yellow-400 to-red-500' },
        { name: 'Canada', flag: 'twemoji:flag-canada', color: 'from-red-500 to-red-700' },
        { name: 'Australia', flag: 'twemoji:flag-australia', color: 'from-blue-600 to-blue-800' },
        { name: 'United Kingdom', flag: 'twemoji:flag-united-kingdom', color: 'from-blue-700 to-red-600' },
        { name: 'United States', flag: 'twemoji:flag-united-states', color: 'from-blue-600 to-red-500' },
        { name: 'New Zealand', flag: 'twemoji:flag-new-zealand', color: 'from-blue-800 to-red-600' },
    ];

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">

            {/* ========== HERO ========== */}
            <section className="hero-section relative pt-28 sm:pt-32 pb-32 sm:pb-44 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[92vh] flex items-center">
                <div className="hero-bg-img absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1121] via-[#0B1121]/80 to-[#0B1121]/90" />
                <div className="absolute inset-0 pattern-grid opacity-20" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.03} />
                <PlaneAnimation />
                <HeroRoad />

                <div className="relative max-w-7xl mx-auto z-20 w-full">
                    <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
                        <div className="hero-element invisible inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-xs sm:text-sm text-orange-400 font-semibold backdrop-blur-sm">
                            <Star size={14} className="text-orange-500 fill-orange-500" />
                            <span>India's Trusted Overseas Consultancy</span>
                        </div>
                        <h1 className="hero-element invisible text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight mb-5 text-white leading-[1.1]">
                            Step Beyond Borders with <span className="text-orange-500">Professional Overseas</span> Support
                        </h1>
                        <p className="hero-element invisible text-base sm:text-lg text-stone-300/90 mb-3 leading-relaxed max-w-2xl lg:max-w-none">
                            {hero.subHeading}
                        </p>
                        <div className="hero-element invisible flex items-center gap-2 mb-8 justify-center lg:justify-start">
                            <span className="text-yellow-400 text-lg tracking-wider">★★★★★</span>
                            <span className="text-stone-300 text-sm">{hero.description}</span>
                        </div>
                        <div className="hero-element invisible flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <Link to={hero.buttonLink}>
                                <button className="btn-premium px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 hover:bg-orange-600 hover:-translate-y-1 transition-all w-full sm:w-auto">
                                    {hero.buttonText} <ArrowRight size={18} />
                                </button>
                            </Link>
                            <Link to="/about-us">
                                <button className="px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center w-full sm:w-auto gap-2">
                                    <Icon icon="mdi:information-outline" width={18} /> Learn More
                                </button>
                            </Link>
                        </div>

                        {/* Trusted by strip */}
                        <div className="hero-element invisible flex flex-wrap items-center gap-5 mt-10 pt-8 border-t border-white/10 justify-center lg:justify-start">
                            <span className="text-stone-500 text-xs uppercase tracking-wider font-semibold">Trusted for</span>
                            {[
                                { icon: 'twemoji:flag-germany', label: 'Germany' },
                                { icon: 'twemoji:flag-canada', label: 'Canada' },
                                { icon: 'twemoji:flag-australia', label: 'Australia' },
                                { icon: 'twemoji:flag-united-kingdom', label: 'UK' },
                            ].map((c, i) => (
                                <div key={i} className="flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
                                    <Icon icon={c.icon} width={18} />
                                    <span className="text-stone-300 text-xs font-medium">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* ========== STATS BAR ========== */}
            <section className="stats-section relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-stone-900/5 border border-stone-100 p-6 sm:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            { val: '500', suf: '+', label: 'Happy Students', icon: 'mdi:account-group' },
                            { val: '100', suf: '%', label: 'Visa Success', icon: 'mdi:shield-check' },
                            { val: '5', suf: '+', label: 'Years Experience', icon: 'mdi:trophy-outline' },
                            { display: '24/7', label: 'Support', icon: 'mdi:headset' },
                        ].map((s, i) => (
                            <div key={i} className="stat-item invisible flex items-center gap-3 sm:gap-4">
                                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                                    <Icon icon={s.icon} width={24} className="text-orange-500" />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-black text-stone-900">
                                        {s.val ? <CountUp target={s.val} suffix={s.suf} /> : s.display}
                                    </div>
                                    <div className="text-stone-400 text-[10px] sm:text-xs font-medium">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== WHAT WE DO (Horizontal scroll-like cards) ========== */}
            <section className="services-section relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-stone-50 overflow-hidden">
                <div className="absolute right-0 top-[10%] opacity-[0.03]">
                    <Icon icon="mdi:airplane" width={400} className="text-orange-500" style={{ transform: 'rotate(-20deg)' }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* Left - heading */}
                        <div className="lg:w-1/3 lg:sticky lg:top-32">
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Expertise</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 text-stone-900 tracking-tight leading-tight">{whatWeDo.heading}</h2>
                            <p className="text-stone-500 leading-relaxed mb-6">{whatWeDo.description}</p>
                            <Link to="/services" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
                                View All Services <ArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Right - cards */}
                        <div className="lg:w-2/3 space-y-6">
                            {whatWeDo.services.map((service, idx) => {
                                const illustrations = ['noto:passport-control', 'noto:graduation-cap', 'noto:airplane-departure'];
                                return (
                                    <MagneticCard key={idx} intensity={6} className="service-card invisible">
                                        <div className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-stone-100 hover:shadow-xl hover:border-orange-200 transition-all duration-500 cursor-pointer overflow-hidden">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                <Icon icon={illustrations[idx]} width={56} className="drop-shadow-md" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                                <p className="text-stone-500 text-sm leading-relaxed mb-3">{service.description}</p>
                                                <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all">
                                                    Learn More <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </MagneticCard>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== COUNTRIES WE SERVE ========== */}
            <section className="countries-section relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-white overflow-hidden">
                <FlightRoute className="top-[5%] left-0 w-full h-[180px]" color="#f97316" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Global Reach</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-stone-900 tracking-tight">Countries We <span className="text-orange-500">Serve</span></h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {countries.map((country, idx) => (
                            <div key={idx} className="country-card invisible group text-center p-5 sm:p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform">
                                    <Icon icon={country.flag} width={40} height={40} />
                                </div>
                                <h4 className="text-stone-800 font-bold text-xs sm:text-sm">{country.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== MARQUEE DIVIDER ========== */}
            <div className="bg-stone-50 border-y border-stone-100">
                <MarqueeTrail direction="left" speed={45} />
            </div>

            {/* ========== VISION (Asymmetric layout) ========== */}
            <section className="vision-section relative w-full z-10 bg-[#0B1121] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.025} />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 relative">
                    <div className="vision-content invisible lg:col-span-3 p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative z-10 order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                <Icon icon="mdi:eye-outline" width={20} className="text-orange-500" />
                            </div>
                            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Our Vision</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 text-white tracking-tight leading-tight">{vision.heading}</h2>
                        <div className="space-y-4 text-stone-300 leading-relaxed text-sm sm:text-base">
                            {vision.paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>
                        <Link to="/about-us" className="inline-flex items-center gap-2 text-orange-500 font-bold mt-8 hover:gap-3 transition-all">
                            About Us <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="vision-img-wrap invisible lg:col-span-2 relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center order-1 lg:order-2 p-8">
                        {/* Glow */}
                        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-500/10 blur-[100px]" />
                        {/* Dotted ring */}
                        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-orange-500/20 animate-spin-slow" style={{ animation: 'spin 40s linear infinite' }} />
                        {/* Large transparent illustration */}
                        <Icon icon="noto:graduation-cap" width={260} className="relative z-10 drop-shadow-2xl" />
                        {/* Floating accent icons around */}
                        <Icon icon="noto:airplane" width={56} className="absolute top-[15%] right-[15%] z-10 drop-shadow-xl" style={{ transform: 'rotate(-25deg)' }} />
                        <Icon icon="noto:globe-showing-europe-africa" width={64} className="absolute bottom-[18%] left-[15%] z-10 drop-shadow-xl" />
                        <Icon icon="noto:books" width={48} className="absolute top-[22%] left-[18%] z-10 drop-shadow-xl" />
                    </div>
                </div>
            </section>

            {/* ========== JOURNEY ROADMAP (Unique visual timeline) ========== */}
            <section className="journey-section relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-stone-50 overflow-hidden">
                <PassportStamps className="inset-0 w-full h-full hidden lg:block" />
                <ScrollPlane variant="curve1" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Your Roadmap</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-stone-900 tracking-tight">How We <span className="text-orange-500">Help</span> You Succeed</h2>
                    </div>

                    <div className="relative">
                        <div className="journey-line-fill absolute left-[28px] sm:left-[31px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500 via-amber-400 to-emerald-500 hidden md:block origin-top rounded-full" />

                        {[
                            { step: '01', title: 'Free Consultation', desc: 'Understand your goals, academic background, and eligibility.', icon: 'mdi:chat-processing-outline', color: 'bg-orange-500' },
                            { step: '02', title: 'Language Training', desc: 'German A1-C1 or IELTS/PTE coaching with Goethe-aligned curriculum.', icon: 'mdi:translate', color: 'bg-blue-500' },
                            { step: '03', title: 'University Application', desc: 'Applications to best-fit universities with professional SOP writing.', icon: 'mdi:school-outline', color: 'bg-indigo-500' },
                            { step: '04', title: 'Visa Approval', desc: 'Complete visa file, financial guidance, and mock interview coaching.', icon: 'mdi:passport', color: 'bg-purple-500' },
                            { step: '05', title: 'Arrival & Settlement', desc: 'Airport pickup, accommodation, bank setup, and job guidance.', icon: 'mdi:airplane-landing', color: 'bg-emerald-500' },
                        ].map((item, idx) => (
                            <div key={idx} className="journey-step invisible flex gap-4 sm:gap-8 mb-8 sm:mb-12 last:mb-0 relative items-start">
                                <div className={`w-14 sm:w-16 h-14 sm:h-16 rounded-xl ${item.color} text-white flex items-center justify-center shrink-0 shadow-lg relative z-10`}>
                                    <Icon icon={item.icon} width={26} />
                                </div>
                                <div className="flex-1 bg-white rounded-xl p-5 sm:p-6 border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
                                    <span className="text-stone-300 font-black text-xs">STEP {item.step}</span>
                                    <h3 className="text-lg font-bold text-stone-900 mb-1">{item.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS — Compact 2-row marquee ========== */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full bg-[#0B1121] z-10 overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-15" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-10">
                        <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-3 block">{testimonials.subtitle}</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">Stories from <span className="text-orange-500">Real Students</span></h2>
                    </div>

                    <TestimonialMarquee testimonials={testimonials.list} dark={true} />
                </div>
            </section>

            {/* ========== MARQUEE DIVIDER (dark) ========== */}
            <div className="bg-[#0B1121] border-y border-white/5">
                <MarqueeTrail direction="right" speed={50} dark />
            </div>

            {/* ========== CONTACT (Split design) ========== */}
            <section className="contact-section relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start relative z-10">
                    <div className="contact-element invisible bg-stone-50 border border-stone-100 rounded-2xl p-8 sm:p-10">
                        <h2 className="text-xl sm:text-2xl font-black text-stone-900 mb-2 tracking-tight">Submit Your Inquiry</h2>
                        <p className="text-stone-500 mb-6 text-sm">Get in touch for personalized training, exam preparation, and consultancy.</p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your First Name" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 outline-none transition-colors" />
                                <input type="email" placeholder="Email Address *" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 outline-none transition-colors" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Study Destination *" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 outline-none transition-colors" />
                                <input type="text" placeholder="Course *" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 outline-none transition-colors" />
                            </div>
                            <textarea placeholder="Your Message *" rows={3} className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 outline-none transition-colors resize-none" />
                            <button type="submit" className="btn-premium w-full bg-orange-500 text-white font-bold py-3.5 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                                Submit Your Inquiry <Send size={18} />
                            </button>
                        </form>
                    </div>
                    <div className="contact-element invisible lg:sticky lg:top-36 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-4">Get in Touch</h2>
                        {[
                            { icon: <MapPin size={20} />, label: 'Visit Us', value: FOOTER_DATA.address },
                            { icon: <Phone size={20} />, label: 'Call Us', value: FOOTER_DATA.phones.join(' | ') },
                            { icon: <Mail size={20} />, label: 'Email Us', value: FOOTER_DATA.email },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-all shrink-0">
                                    <span className="text-orange-500 group-hover:text-white transition-colors">{item.icon}</span>
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">{item.label}</p>
                                    <p className="text-stone-700 font-medium text-sm">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Icon icon="mdi:airplane" width={300} className="text-white absolute right-[-5%] top-[-20%]" style={{ transform: 'rotate(-30deg)' }} />
                    <Icon icon="mdi:earth" width={200} className="text-white absolute left-[-3%] bottom-[-30%]" />
                </div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-center lg:text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-tight">
                            Ready to Start Your Global Journey?
                        </h2>
                        <p className="text-orange-100 text-base">Join 500+ students who achieved their study abroad dreams.</p>
                    </div>
                    <Link to="/contact-us">
                        <button className="px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold text-base hover:bg-orange-50 shadow-xl transition-all flex items-center gap-3 whitespace-nowrap">
                            Get Free Consultation <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
