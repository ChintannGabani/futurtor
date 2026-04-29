import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
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

export default function AboutView({ data }) {
    useSeo({
        title: 'About Us',
        description: 'Learn about Futuretor — India\'s trusted overseas education and immigration consultancy. Our certified team has been guiding students to global success since 2019.',
        keywords: 'about Futuretor, immigration consultancy India, overseas education experts, study abroad consultants Surat, certified immigration team',
        path: '/about-us',
    });
    if (!data) return null;
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ab-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 });

            gsap.fromTo('.ab-story-img', { x: -60, autoAlpha: 0, scale: 0.95 }, { x: 0, autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.ab-story', start: 'top 80%', once: true } });
            gsap.fromTo('.ab-story-text', { x: 60, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.ab-story', start: 'top 80%', once: true } });

            gsap.fromTo('.ab-value', { y: 50, autoAlpha: 0, rotateY: 15 }, { y: 0, autoAlpha: 1, rotateY: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.ab-values', start: 'top 85%', once: true } });

            gsap.fromTo('.ab-promise-item', { x: -30, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ab-promise', start: 'top 85%', once: true } });

            gsap.fromTo('.ab-reason', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.ab-reasons', start: 'top 85%', once: true } });

            gsap.fromTo('.ab-stat', { y: 30, autoAlpha: 0, scale: 0.8 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.ab-stats', start: 'top 85%', once: true } });

            gsap.fromTo('.ab-team-card', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.ab-team', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">

            {/* ===== HERO - Full-width immersive ===== */}
            <section className="relative pt-28 sm:pt-36 pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1121] via-[#0B1121]/85 to-[#131d35]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.03} />
                <PlaneAnimation />
                <FlightRoute className="bottom-[20%] left-0 w-full h-[180px]" color="#f97316" />

                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="ab-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:hand-heart-outline" width={16} /><span>Experts Since 2019</span>
                    </div>
                    <h1 className="ab-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">
                        About <span className="text-orange-500">Futuretor</span>
                    </h1>
                    <p className="ab-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed">
                        When candidates like you, eager to build a prosperous career abroad and achieve success, search for terms like <span className="text-orange-300 italic">"India's Leading Language Academy and consultant,"</span> you are faced with millions of results in just a few seconds. Futuretor is one of those countless immigration companies in India, and we may not always appear on the first page of search results. However, you're here now, pursuing your dream of studying and working abroad.
                    </p>
                </div>

                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* ===== OUR STORY - Asymmetric split ===== */}
            <section className="ab-story relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                    {/* Illustration - 2 cols */}
                    <div className="ab-story-img invisible lg:col-span-2 relative">
                        <div className="absolute -inset-4 bg-orange-500/10 blur-3xl rounded-3xl" />
                        <div className="relative bg-gradient-to-br from-white to-stone-100 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
                            {/* Illustration scene */}
                            <div className="relative h-[350px] sm:h-[450px] flex items-center justify-center p-8">
                                {/* Decorative dotted rings */}
                                <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-orange-500/15" />
                                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-dashed border-orange-500/20" />
                                {/* Soft glow */}
                                <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-orange-500/15 to-yellow-400/15 blur-3xl" />
                                {/* Center: Classical building (Brandenburg-style) */}
                                <Icon icon="noto:classical-building" width={200} className="relative z-10 drop-shadow-2xl" />
                                {/* Floating accents */}
                                <Icon icon="noto:airplane" width={56} className="absolute top-[10%] right-[10%] z-10 drop-shadow-xl -rotate-12" />
                                <Icon icon="noto:graduation-cap" width={56} className="absolute top-[12%] left-[10%] z-10 drop-shadow-xl rotate-6" />
                                <Icon icon="noto:globe-showing-europe-africa" width={48} className="absolute bottom-[18%] left-[12%] z-10 drop-shadow-xl" />
                                <Icon icon="noto:passport-control" width={48} className="absolute bottom-[18%] right-[12%] z-10 drop-shadow-xl" />
                            </div>
                            {/* Caption */}
                            <div className="px-6 py-3 border-t border-stone-200 bg-stone-50/50">
                                <p className="text-stone-500 text-xs italic text-center">A large stone building with columns and statues — Brandenburg Gate, Germany</p>
                            </div>
                            {/* Floating stats badge */}

                        </div>
                    </div>

                    {/* Text - 3 cols */}
                    <div className="ab-story-text invisible lg:col-span-3">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Story</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight mb-6 leading-tight">
                            Built on <span className="text-orange-500">Trust</span>, Driven by Results
                        </h2>
                        <p className="text-stone-600 text-[15px] leading-relaxed mb-5">
                            This isn't by chance. You've likely come to us through a recommendation from a friend, relative, or colleague who has already benefitted from our expert Immigration and Education Consulting services. Futuretor has helped countless students realize their dreams and <span className="font-semibold text-stone-700">"Worth the World."</span>
                        </p>
                        <p className="text-stone-600 text-[15px] leading-relaxed mb-8">
                            It's this proven track record that differentiates us from the millions of companies out there — our work speaks for itself. We don't just process applications, we build futures.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Immigration Expert', 'Certified Counselors', 'Germany Office'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-orange-600 text-sm font-semibold">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MARQUEE DIVIDER ===== */}
            <div className="bg-stone-50 border-y border-stone-100">
                <MarqueeTrail direction="left" speed={45} />
            </div>

            {/* ===== CORE VALUES - Icon cards with different colors ===== */}
            <section className="ab-values relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-white overflow-hidden">
                <ScrollPlane variant="curve2" />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">What Drives Us</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
                        {[
                            { icon: 'mdi:heart-outline', title: 'Student First', desc: 'We put ourselves in your shoes. We see the dreams you see and we care for your goals.', color: 'bg-rose-500' },
                            { icon: 'mdi:shield-check-outline', title: 'Transparency', desc: 'No hidden fees, no false promises. Honest guidance every step of the way.', color: 'bg-blue-500' },
                            { icon: 'mdi:lightbulb-on-outline', title: 'Innovation', desc: 'Technology-driven approach combining deep domain knowledge with modern tools.', color: 'bg-amber-500' },
                            { icon: 'mdi:handshake-outline', title: 'Commitment', desc: 'We are here to see our success in your success. We are here. Always.', color: 'bg-emerald-500' },
                        ].map((value, idx) => (
                            <div key={idx} className="ab-value invisible bg-stone-50 rounded-2xl p-7 border border-stone-100 hover:shadow-xl hover:border-orange-200 hover:-translate-y-2 transition-all duration-500 group">
                                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <Icon icon={value.icon} width={28} className="text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-stone-900 mb-2">{value.title}</h3>
                                <p className="text-stone-500 text-[15px] leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROMISE - Dark section with checklist ===== */}
            <section className="ab-promise relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.025} />
                <FlightRoute className="top-[10%] left-0 w-full h-[150px]" color="#f97316" direction="right-to-left" />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    <div>
                        <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-3 block">Our Commitment</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-6 leading-tight">{data.promise.heading}</h2>
                        <p className="text-stone-300 text-[15px] leading-relaxed mb-8">{data.promise.text}</p>
                        <div className="space-y-4">
                            {data.promise.points.map((point, idx) => (
                                <div key={idx} className="ab-promise-item invisible flex gap-3 items-center group">
                                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all">
                                        <CheckCircle2 size={16} className="text-orange-500 group-hover:text-white" />
                                    </div>
                                    <span className="text-stone-200 font-medium text-[15px]">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why #1 card */}
                    <div className="ab-reasons space-y-5">
                        <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-black text-white mb-6">{data.reasons.heading}</h3>
                            <div className="space-y-4">
                                {data.reasons.list.map((reason, idx) => (
                                    <div key={idx} className="ab-reason invisible flex gap-4 items-center p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-orange-500/30 transition-all group">
                                        <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                            <Icon icon={idx === 0 ? 'mdi:office-building-outline' : 'mdi:currency-eur'} width={24} className="text-white" />
                                        </div>
                                        <span className="text-stone-200 font-bold text-[15px]">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STATS - Floating cards ===== */}
            <section className="ab-stats relative -mt-10 z-20 px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-stone-900/5 border border-stone-100 p-6 sm:p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            { val: '500', suf: '+', label: 'Happy Students', icon: 'mdi:account-group' },
                            { val: '100', suf: '%', label: 'Visa Success', icon: 'mdi:shield-check' },
                            { val: '5', suf: '+', label: 'Years Experience', icon: 'mdi:trophy-outline' },
                            { display: '24/7', label: 'Support', icon: 'mdi:headset' },
                        ].map((s, i) => (
                            <div key={i} className="ab-stat invisible flex items-center gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                                    <Icon icon={s.icon} width={24} className="text-orange-500" />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-black text-stone-900">
                                        {s.val ? <CountUp target={s.val} suffix={s.suf} /> : s.display}
                                    </div>
                                    <div className="text-stone-400 text-xs font-medium">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TEAM/EXPERTISE - What makes us different ===== */}
            <section className="ab-team relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Our Expertise</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">What Makes Us <span className="text-orange-500">Different</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'mdi:office-building-marker-outline',
                                title: 'Branch Office in Germany',
                                desc: 'Unlike other consultants, we have a physical presence in Germany. Our on-ground team provides real-time support for students after arrival.',
                                illustration: 'noto:office-building',
                                accents: ['twemoji:flag-germany', 'noto:handshake'],
                            },
                            {
                                icon: 'mdi:certificate-outline',
                                title: 'Goethe-Aligned Training',
                                desc: 'Our German language courses are aligned with Goethe-Institut standards — the gold standard for German language certification worldwide.',
                                illustration: 'noto:graduation-cap',
                                accents: ['noto:open-book', 'noto:writing-hand'],
                            },
                            {
                                icon: 'mdi:account-heart-outline',
                                title: 'End-to-End Support',
                                desc: 'From your first consultation to landing in your dream country, we handle language training, applications, visa, and post-arrival support.',
                                illustration: 'noto:red-heart',
                                accents: ['noto:airplane', 'noto:passport-control'],
                            },
                        ].map((item, idx) => (
                            <MagneticCard key={idx} intensity={5} className="ab-team-card invisible">
                                <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl hover:border-orange-200 transition-all duration-500 group">
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center">
                                        {/* Decorative dotted ring */}
                                        <div className="absolute w-40 h-40 rounded-full border-2 border-dashed border-orange-500/15 group-hover:border-orange-500/30 transition-colors duration-500" />
                                        <div className="absolute w-28 h-28 rounded-full bg-orange-500/10 blur-2xl" />
                                        {/* Center illustration */}
                                        <Icon icon={item.illustration} width={100} className="relative z-10 drop-shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500" />
                                        {/* Floating accents */}
                                        <Icon icon={item.accents[0]} width={36} className="absolute top-5 right-6 z-10 drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-500" />
                                        <Icon icon={item.accents[1]} width={36} className="absolute bottom-5 left-6 z-10 drop-shadow-lg group-hover:translate-y-1 transition-transform duration-500" />
                                        {/* Bottom-left icon badge */}
                                        <div className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg z-20">
                                            <Icon icon={item.icon} width={22} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                                        <p className="text-stone-500 text-[15px] leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </MagneticCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA - Orange gradient ===== */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Icon icon="mdi:airplane" width={300} className="text-white absolute right-[-5%] top-[-20%]" style={{ transform: 'rotate(-30deg)' }} />
                    <Icon icon="mdi:earth" width={200} className="text-white absolute left-[-3%] bottom-[-30%]" />
                </div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 text-center lg:text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">Ready to Start Your Journey?</h2>
                        <p className="text-orange-100 text-base">We are here. Always. Let us simplify the immigration process for you.</p>
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
