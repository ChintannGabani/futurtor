import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FOOTER_DATA } from '../../data/constants';
import logoDark from '../../assets/company_logo/logo_dark.png';

gsap.registerPlugin(ScrollTrigger);

export default function FooterView() {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.footer-col',
                { y: 40, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: footerRef.current, start: 'top 85%', once: true } }
            );
        }, footerRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#0B1121] text-white pt-20 pb-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/[0.03] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

            <svg className="absolute top-20 left-0 w-full h-20 opacity-[0.04]" viewBox="0 0 1200 80" fill="none">
                <path d="M0 40 Q 300 10 600 40 T 1200 40" stroke="#f97316" strokeWidth="2" className="flight-path" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

                    {/* Brand */}
                    <div className="footer-col invisible flex flex-col gap-6">
                        <Link to="/" className="flex items-center">
                            <img src={logoDark} alt="FutureTor — Study Abroad & Immigration Consultancy" className="h-12 w-auto object-contain mix-blend-lighten" />
                        </Link>
                        <p className="text-stone-400 leading-relaxed text-[15px]">
                            {FOOTER_DATA.vision}
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: FaFacebook, label: 'Facebook' },
                                { Icon: FaTwitter, label: 'Twitter' },
                                { Icon: FaInstagram, label: 'Instagram' },
                                { Icon: FaLinkedin, label: 'LinkedIn' },
                            ].map(({ Icon: SocialIcon, label }, i) => (
                                <a key={i} href="#" aria-label={label} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group">
                                    <SocialIcon size={16} className="text-stone-400 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="footer-col invisible">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">Consultancy</h4>
                        <ul className="flex flex-col gap-3.5">
                            {[
                                { label: 'Education Consultancy', href: '/services/education-consultancy' },
                                { label: 'Application Services', href: '/services/application-services' },
                                { label: 'Visa Services', href: '/services/visa-services' },
                                { label: 'Loan Guidance', href: '/services/educational-loan-guidance' },
                                { label: 'German Language', href: '/languages/german' },
                                { label: 'IELTS Training', href: '/languages/ielts-toefl-pte' },
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link to={item.href} className="text-stone-400 hover:text-white transition-colors text-[15px] flex items-center gap-2 group">
                                        <Icon icon="mdi:chevron-right" width={14} className="text-orange-500/50 group-hover:text-orange-500 transition-colors" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col invisible">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3 items-start group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                    <MapPin size={16} className="text-orange-500" />
                                </div>
                                <p className="text-stone-400 text-[15px] leading-relaxed">{FOOTER_DATA.address}</p>
                            </div>
                            <div className="flex gap-3 items-center group">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                    <Mail size={16} className="text-orange-500" />
                                </div>
                                <a href={`mailto:${FOOTER_DATA.email}`} className="text-stone-400 hover:text-white transition-colors text-[15px]">{FOOTER_DATA.email}</a>
                            </div>
                            {FOOTER_DATA.phones.map((phone, i) => (
                                <div key={i} className="flex gap-3 items-center group">
                                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                                        <Phone size={16} className="text-orange-500" />
                                    </div>
                                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-stone-400 hover:text-white transition-colors text-[15px]">{phone}</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-col invisible">
                        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
                        <p className="text-stone-400 mb-5 text-[15px]">Get the latest updates on immigration and education.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 pr-12 text-[15px] text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-orange-500/50 transition-colors"
                            />
                            <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Send size={14} />
                            </button>
                        </form>
                        <p className="text-stone-500 text-sm mt-3">Your email for updates. We respect your privacy.</p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FutureTor Immigration & Consultancy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
