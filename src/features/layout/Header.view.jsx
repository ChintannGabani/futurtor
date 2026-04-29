import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Icon } from '@iconify/react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoLight from '../../assets/company_logo/logo_light.png';
import { FOOTER_DATA } from '../../data/constants';

export default function HeaderView({ navLinks, isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
    const location = useLocation();
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current, { y: -120 }, { y: 0, duration: 1, ease: 'power4.out' });
            gsap.fromTo('.nav-item', { y: -20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.4 });
            gsap.fromTo('.nav-cta', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.9 });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

    return (
        <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-stone-900/5' : 'bg-white shadow-sm border-b border-stone-100'
            }`}>
            {/* Top Bar */}
            <div className={`w-full bg-[#0B1121] text-white hidden md:block transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-14 opacity-100'}`}>
                <div className="max-w-7xl mx-auto py-2 flex justify-between items-center text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-6">
                        {FOOTER_DATA.phones.map((phone, i) => (
                            <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
                                <Phone size={11} className="text-orange-500" /><span>{phone}</span>
                            </a>
                        ))}
                        <a href={`mailto:${FOOTER_DATA.email}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
                            <Mail size={11} className="text-orange-500" /><span>{FOOTER_DATA.email}</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href={FOOTER_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaFacebook size={12} /></a>
                        <a href={FOOTER_DATA.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaYoutube size={12} /></a>
                        <a href={FOOTER_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors"><FaInstagram size={12} /></a>
                        <a href={FOOTER_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors"><Icon icon="ri:twitter-x-fill" width={12} /></a>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
                {/* Logo - no bg via mix-blend-mode */}
                <Link to="/" className="flex items-center z-50 shrink-0">
                    <img
                        src={logoLight}
                        alt="Futuretor — Study Abroad & Immigration Consultancy"
                        className={`w-auto object-contain transition-all duration-300 mix-blend-darken ${isScrolled ? 'h-10' : 'h-12 sm:h-14'}`}
                    />
                </Link>

                {/* Desktop Nav - centered with flex-1 */}
                <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                    {navLinks.map((link, idx) => {
                        const isActive = link.href === '/' ? location.pathname === '/' : location.pathname.startsWith(link.href);
                        return (
                            <div key={idx} className="nav-item relative group">
                                {link.subLinks ? (
                                    <button className={`flex items-center gap-1 px-4 py-2.5 rounded-lg font-semibold text-[15px] transition-all duration-300 ${isActive ? 'text-orange-600' : 'text-stone-600 hover:text-orange-600'
                                        }`}>
                                        {link.label}
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </button>
                                ) : (
                                    <Link to={link.href} className={`px-4 py-2.5 rounded-lg font-semibold text-[15px] transition-all duration-300 block relative ${isActive ? 'text-orange-600' : 'text-stone-600 hover:text-orange-600'
                                        }`}>
                                        {link.label}
                                        {isActive && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-orange-500 rounded-full" />}
                                    </Link>
                                )}
                                {link.subLinks && (
                                    <div className="absolute top-full left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 pt-2">
                                        <div className="bg-white rounded-xl p-1.5 flex flex-col gap-0.5 border border-stone-100 shadow-xl shadow-stone-900/8">
                                            {link.subLinks.map((sub, sIdx) => (
                                                <Link key={sIdx} to={sub.href} className={`px-4 py-3 text-[14px] rounded-lg transition-all font-medium flex items-center gap-2.5 ${location.pathname === sub.href ? 'text-orange-600 bg-orange-50' : 'text-stone-600 hover:text-orange-600 hover:bg-stone-50'
                                                    }`}>
                                                    {sub.icon ? (
                                                        <Icon icon={sub.icon} width={18} className="shrink-0 rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]" />
                                                    ) : (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400/50 shrink-0" />
                                                    )}
                                                    <span className="whitespace-nowrap">{sub.label}</span>
                                                    {sub.comingSoon && (
                                                        <span className="ml-auto flex shrink-0 items-center justify-center text-[9px] leading-none font-bold uppercase tracking-widest text-orange-600 bg-orange-100 border border-orange-200 px-2 py-1 rounded-full animate-pulse shadow-sm">
                                                            Soon
                                                        </span>
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Get Started Button - right side */}
                <Link to="/contact-us" className="ml-4 shrink-0">
                    <button className="btn-premium px-7 py-2.5 rounded-full bg-orange-500 text-white font-bold text-[15px] flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300">
                        <Icon icon="mdi:airplane-takeoff" width={18} />
                        Get Started
                    </button>
                </Link>

                <button className="lg:hidden text-stone-800 z-50 p-2 rounded-lg hover:bg-stone-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-20 px-6 overflow-y-auto">
                    {navLinks.map((link, idx) => (
                        <div key={idx} className="border-b border-stone-100 py-3">
                            <Link to={link.href} className="text-base font-semibold text-stone-900 block py-1.5" onClick={() => !link.subLinks && setMobileMenuOpen(false)}>
                                {link.label}
                            </Link>
                            {link.subLinks && (
                                <div className="mt-2 pl-4 flex flex-col gap-0.5 border-l-2 border-orange-200 ml-2">
                                    {link.subLinks.map((sub, sIdx) => (
                                        <Link key={sIdx} to={sub.href} className="text-stone-500 text-[15px] hover:text-orange-600 font-medium transition-colors py-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                            {sub.icon ? (
                                                <Icon icon={sub.icon} width={16} className="shrink-0 rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.1)]" />
                                            ) : (
                                                <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                                            )}
                                            <span>{sub.label}</span>
                                            {sub.comingSoon && (
                                                <span className="ml-auto flex shrink-0 items-center justify-center text-[9px] leading-none font-bold uppercase tracking-widest text-orange-600 bg-orange-100 border border-orange-200 px-2 py-1 rounded-full animate-pulse shadow-sm">
                                                    Soon
                                                </span>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-6 mb-10">
                        <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                            <button className="w-full py-3.5 rounded-xl bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 text-base">
                                <Icon icon="mdi:airplane-takeoff" width={20} /> Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
