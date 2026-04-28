import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { Phone, Mail, MapPin, Send, ArrowRight, Clock, MessageSquare } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import HeroRoad from '../../components/HeroRoad';
import useSeo from '../../lib/useSeo';
import { FOOTER_DATA } from '../../data/constants';

gsap.registerPlugin(ScrollTrigger);

export default function ContactView({ data }) {
    useSeo({
        title: 'Contact Us',
        description: 'Get in touch with Futuretor for personalized study abroad and immigration consultation. Visit our Surat office or call +91 9824939425. Free consultation available.',
        keywords: 'contact Futuretor, study abroad consultancy contact, immigration consultant Surat, Futuretor phone number, Futuretor address',
        path: '/contact-us',
    });
    if (!data) return null;
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ct-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 });

            gsap.fromTo('.ct-info-card', { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.ct-info-cards', start: 'top 88%', once: true } });

            gsap.fromTo('.ct-form-wrap', { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.ct-form-section', start: 'top 85%', once: true } });
            gsap.fromTo('.ct-side-wrap', { x: 50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.ct-form-section', start: 'top 85%', once: true } });

            gsap.fromTo('.ct-faq', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ct-faq-section', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">

            {/* ===== HERO ===== */}
            <section className="relative pt-28 sm:pt-36 pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1121] via-[#0B1121]/85 to-[#131d35]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.03} />
                <PlaneAnimation />
                <FlightRoute className="bottom-[18%] left-0 w-full h-[180px]" color="#f97316" />
                <HeroRoad />

                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="ct-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                    </div>
                    <h1 className="ct-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">
                        Let's Start Your <span className="text-orange-500">Journey</span> Together
                    </h1>
                    <p className="ct-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* ===== CONTACT INFO CARDS - Floating bar ===== */}
            <section className="ct-info-cards relative -mt-14 z-20 px-4 sm:px-6 lg:px-8 mb-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                    {[
                        { icon: <Phone size={22} />, label: 'Call Us', value: FOOTER_DATA.phones[0] || '', sub: FOOTER_DATA.phones[1] || '', color: 'bg-orange-500', href: `tel:${(FOOTER_DATA.phones[0] || '').replace(/\s/g, '')}` },
                        { icon: <Mail size={22} />, label: 'Email Us', value: FOOTER_DATA.email, sub: '', color: 'bg-blue-500', href: `mailto:${FOOTER_DATA.email}` },
                        { icon: <MapPin size={22} />, label: 'Visit Us', value: FOOTER_DATA.address.split(',')[0] + ',' + (FOOTER_DATA.address.split(',')[1] || ''), sub: FOOTER_DATA.address.split(',').slice(2).join(',').trim(), color: 'bg-emerald-500' },
                    ].map((card, idx) => (
                        <a key={idx} href={card.href || '#'} className="ct-info-card invisible bg-white rounded-2xl p-6 border border-stone-100 shadow-xl shadow-stone-900/5 hover:shadow-2xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-500 group block">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                                    {card.icon}
                                </div>
                                <div>
                                    <p className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-1">{card.label}</p>
                                    <p className="text-stone-900 font-bold text-[15px]">{card.value}</p>
                                    <p className="text-stone-500 text-sm">{card.sub}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ===== FORM + SIDE CONTENT ===== */}
            <section className="ct-form-section relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full z-10 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

                    {/* Form - 3 cols */}
                    <div className="ct-form-wrap invisible lg:col-span-3">
                        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-stone-100 shadow-sm relative overflow-hidden">
                            {/* Orange accent top */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />

                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                                    <Send size={18} className="text-orange-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">Submit Your Inquiry</h2>
                            </div>
                            <p className="text-stone-500 mb-8 text-[15px]">Get in touch for personalized language training, exam preparation, and consultancy services. We're here to support your journey.</p>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-stone-600 text-sm font-semibold mb-2">Your First Name</label>
                                        <input type="text" placeholder="e.g. Rahul" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-3.5 text-stone-900 text-[15px] focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-stone-600 text-sm font-semibold mb-2">Email Address *</label>
                                        <input type="email" placeholder="e.g. rahul@email.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-3.5 text-stone-900 text-[15px] focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-stone-600 text-sm font-semibold mb-2">Study Destination *</label>
                                        <input type="text" placeholder="e.g. Germany" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-3.5 text-stone-900 text-[15px] focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-stone-600 text-sm font-semibold mb-2">Course *</label>
                                        <input type="text" placeholder="e.g. Computer Science" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-3.5 text-stone-900 text-[15px] focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-stone-600 text-sm font-semibold mb-2">Your Message *</label>
                                    <textarea placeholder="Tell us about your goals and how we can help..." rows={5} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-3.5 text-stone-900 text-[15px] focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/10 outline-none transition-all resize-none" />
                                </div>
                                <button type="submit" className="btn-premium w-full bg-orange-500 text-white font-bold py-4 rounded-xl text-base hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                                    Submit Your Inquiry <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Side content - 2 cols */}
                    <div className="ct-side-wrap invisible lg:col-span-2 space-y-6 lg:sticky lg:top-32">
                        {/* Quick connect */}
                        <div className="bg-[#0B1121] rounded-2xl p-7 relative overflow-hidden">
                            <div className="absolute inset-0 pattern-grid opacity-10" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                        <Clock size={18} className="text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-base">Quick Connect</h3>
                                    </div>
                                </div>
                                <div className="space-y-3 mt-5">
                                    {FOOTER_DATA.phones.map((phone, i) => (
                                        <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all group">
                                            <Icon icon="mdi:phone" width={18} className="text-orange-400" />
                                            <div>
                                                <p className="text-white text-sm font-medium">{phone}</p>
                                            </div>
                                        </a>
                                    ))}
                                    <a href={`mailto:${FOOTER_DATA.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all group">
                                        <Icon icon="mdi:email-outline" width={18} className="text-orange-400" />
                                        <div>
                                            <p className="text-white text-sm font-medium">{FOOTER_DATA.email}</p>
                                            <p className="text-stone-500 text-xs">Email anytime</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Office address */}
                        <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
                            <div className="h-[180px] bg-stone-100 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.597!2d72.87!3d21.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzEyLjAiTiA3MsKwNTInMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" title="Futuretor Location"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-stone-900 font-bold text-[15px]">Futuretor Immigration</p>
                                        <p className="text-stone-500 text-sm">{FOOTER_DATA.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust badges */}

                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            {/* <section className="ct-faq-section relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-white overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Common Questions</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">Frequently Asked <span className="text-orange-500">Questions</span></h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'How do I start the process?', a: 'Simply fill the inquiry form above or call us. We\'ll schedule a free consultation to understand your goals and create a personalized plan.' },
                            { q: 'What is your visa success rate?', a: 'We have a 100% visa success rate for study abroad programs. Our expert team ensures complete file preparation and interview coaching.' },
                            { q: 'Do you provide German language training?', a: 'Yes! We offer Goethe-Institute aligned German courses from A1 to C1 levels, plus IELTS/PTE coaching.' },
                            { q: 'Do you have an office in Germany?', a: 'Yes, we have a branch office in Germany that provides on-ground support for students after arrival - including airport pickup, accommodation, and bank setup.' },
                            { q: 'What are your fees?', a: 'We offer the lowest charges and fees compared to other consultants. Contact us for a detailed fee structure tailored to your specific needs.' },
                        ].map((faq, idx) => (
                            <details key={idx} className="ct-faq invisible group">
                                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 bg-stone-50 rounded-xl border border-stone-100 cursor-pointer hover:border-orange-200 transition-all list-none">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-open:bg-orange-500 transition-all">
                                            <Icon icon="mdi:help" width={16} className="text-orange-500 group-open:text-white" />
                                        </div>
                                        <span className="text-stone-900 font-bold text-[15px]">{faq.q}</span>
                                    </div>
                                    <Icon icon="mdi:chevron-down" width={20} className="text-stone-400 group-open:rotate-180 transition-transform shrink-0" />
                                </summary>
                                <div className="px-5 sm:px-6 pb-5 pt-3 ml-12">
                                    <p className="text-stone-600 text-[15px] leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ===== CTA ===== */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Icon icon="mdi:chat-processing" width={250} className="text-white absolute right-[-3%] top-[-15%]" style={{ transform: 'rotate(15deg)' }} />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">Still Have Questions?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="tel:+919824939425" className="px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold hover:bg-orange-50 shadow-xl transition-all flex items-center gap-2">
                            <Phone size={18} /> Call Now
                        </a>
                        <a href="mailto:info@futuretor.com" className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                            <Mail size={18} /> Email Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
