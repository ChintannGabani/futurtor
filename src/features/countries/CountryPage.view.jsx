import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight, CheckCircle2, MapPin, FileText, Plane, Briefcase, BookOpen, Send, AlertCircle } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import useSeo from '../../lib/useSeo';
import { consultationService } from '../../services/consultationService';

gsap.registerPlugin(ScrollTrigger);

export default function CountryPageView({ data }) {
    useSeo({
        title: `Study in ${data.name} - Futuretor Education Consultancy`,
        description: data.hero.description,
        keywords: `study in ${data.name}, higher education, university admissions, visa consultancy`,
        path: `/study-abroad/${data.slug}`,
    });

    // Form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        course: data.popularCourses[0]?.name || '',
        consent: false,
    });

    const [formStatus, setFormStatus] = useState({
        loading: false,
        error: null,
        success: false,
    });

    if (!data) return null;
    const pageRef = useRef(null);
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        if (scrollRef.current) {
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        }
    };
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.country-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.hero-stat', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.5)' });
            gsap.fromTo('.country-card', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.country-cards', start: 'top 85%', once: true } });
            gsap.fromTo('.country-feature', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.country-features', start: 'top 85%', once: true } });
            gsap.fromTo('.country-step', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.country-steps', start: 'top 85%', once: true } });
            gsap.fromTo('.uni-card', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.universities-grid', start: 'top 85%', once: true } });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const handleConsultationClick = () => {
        document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Form input handler
    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Form submission handler
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
            setFormStatus({ loading: false, error: 'Please fill in all required fields', success: false });
            return;
        }

        if (!formData.consent) {
            setFormStatus({ loading: false, error: 'Please accept the consent', success: false });
            return;
        }

        setFormStatus({ loading: true, error: null, success: false });

        try {
            const response = await consultationService.saveConsultation({
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                course: formData.course,
                country: data.name,
            });

            if (response.success) {
                setFormStatus({ loading: false, error: null, success: true });
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    course: data.popularCourses[0]?.name || '',
                    consent: false,
                });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setFormStatus({ loading: false, error: null, success: false });
                }, 5000);
            }
        } catch (error) {
            setFormStatus({ loading: false, error: 'Failed to save consultation. Please try again.', success: false });
        }
    };

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* HERO */}
            <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/90 to-[#0B1121]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="country-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon={data.heroIcon} width={20} /><span>{data.name}</span>
                    </div>
                    <h1 className="country-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">{data.hero.title}</h1>
                    <p className="country-hero-el invisible text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto leading-relaxed mb-8">{data.hero.description}</p>

                    {/* CTA Buttons */}
                    <div className="country-hero-el invisible flex flex-wrap gap-4 justify-center">
                        <button onClick={handleConsultationClick} className="px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-2">
                            <span>{data.ctas.primary}</span>
                            <ArrowRight size={18} />
                        </button>
                        <a href="#universities" className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all">
                            {data.ctas.secondary}
                        </a>
                    </div>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* HERO STATS */}
            <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {data.heroStats.map((stat, idx) => (
                            <div key={idx} className="hero-stat invisible text-center">
                                <div className="text-3xl sm:text-4xl font-black text-orange-600 mb-2">{stat.value}</div>
                                <div className="text-sm sm:text-base font-semibold text-stone-700">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY STUDY */}
            <section className="country-features relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">{data.whyStudy.heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {data.whyStudy.points.map((point, idx) => (
                            <div key={idx} className="country-feature invisible bg-gradient-to-br from-orange-50 to-stone-50 rounded-2xl p-8 border border-orange-200/30 hover:shadow-lg transition-all">
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{point.title}</h3>
                                <p className="text-stone-600 text-[15px] leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TOP UNIVERSITIES */}
            <section id="universities" className="universities-grid relative py-20 sm:py-28 w-full bg-gradient-to-br from-stone-50 to-stone-100 z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Excellence in Education</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-4">Top Universities in {data.name}</h2>
                        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg">Study at world-renowned institutions where thousands of Indian students have achieved their academic goals</p>
                    </div>
                </div>

                {/* Full Width Horizontal Scroll Container */}
                <div className="w-full relative group/slider">
                    <div 
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className={`flex overflow-x-auto gap-8 pb-12 pt-6 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: 'max(1rem, calc((100vw - 80rem) / 2))', paddingRight: 'max(1rem, calc((100vw - 80rem) / 2))' }}
                    >
                        {data.topUniversities.map((university, idx) => (
                            <div 
                                key={idx} 
                                className="uni-card shrink-0 w-[85vw] sm:w-[420px] snap-center group bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/60 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 relative overflow-hidden invisible"
                            >
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/80 group-hover:to-orange-100/40 transition-all duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Unique Bookmark Rank Badge */}
                                    <div className="absolute top-0 right-6 sm:right-8 bg-gradient-to-b from-orange-500 to-orange-600 text-white px-4 pb-5 pt-4 rounded-b-2xl shadow-lg flex flex-col items-center transform group-hover:translate-y-2 transition-transform duration-500">
                                        <span className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-90">Rank</span>
                                        <span className="text-2xl font-black leading-none">#{university.ranking.value}</span>
                                    </div>

                                    {/* Logo Place */}
                                    <div className="h-28 flex items-center justify-start mb-8 pr-20">
                                        {university.logo ? (
                                            <img src={university.logo} alt={university.shortName} className="max-h-full max-w-[240px] object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-500 origin-left" />
                                        ) : (
                                            <div className="h-16 w-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 font-bold text-2xl border border-stone-200">
                                                {university.shortName.charAt(0)}
                                            </div>
                                        )}
                                    </div>

                                    {/* University Name and Category */}
                                    <div className="pr-10 mb-8 flex-grow">
                                        <h3 className="font-bold text-2xl text-stone-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-300">{university.shortName}</h3>
                                        <div className="inline-flex items-center gap-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <p className="text-stone-600 font-medium text-base">{university.popularFor}</p>
                                        </div>
                                    </div>

                                    {/* Ranking Label bottom */}
                                    <div className="flex items-center gap-3 pt-6 border-t border-stone-100 mt-auto">
                                        <div className="p-2.5 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-base font-semibold text-stone-700">{university.ranking.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Spacer item to allow scrolling fully to the end */}
                        <div className="shrink-0 w-4 sm:w-8"></div>
                    </div>

                    {/* Scroll indicators / hint */}
                    <div className="flex justify-center items-center gap-3 mt-2 text-stone-400">
                        <ArrowRight size={18} className="animate-pulse text-orange-400" />
                        <span className="text-sm font-semibold tracking-widest uppercase">Swipe to explore</span>
                        <ArrowRight size={18} className="animate-pulse text-orange-400" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Info Box */}
                    <div className="mt-16 bg-white rounded-3xl p-6 md:p-8 border border-orange-100 bg-gradient-to-r from-orange-50/80 to-transparent shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                            <div className="p-4 bg-orange-100 rounded-2xl text-orange-600 shrink-0">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-stone-900 text-xl mb-2">Study at Top-Ranked Institutions</h4>
                                <p className="text-stone-600 text-lg leading-relaxed">All universities listed here are internationally recognized and offer excellent opportunities for Indian students seeking quality education in {data.name}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* POPULAR COURSES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Academics</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">Popular Courses in {data.name}</h2>
                        <p className="text-stone-600 mt-4">Study the most in-demand courses offered by leading universities</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.popularCourses.map((course, idx) => (
                            <div key={idx} className="country-card invisible bg-gradient-to-br from-orange-50 to-stone-50 rounded-xl p-8 border border-orange-200/30 hover:shadow-lg transition-all text-center">
                                <Icon icon={course.icon} width={48} className="text-orange-500 mx-auto mb-4" />
                                <h3 className="font-bold text-stone-900">{course.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COST OF STUDYING */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Finances</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">{data.costOfStudying.heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tuition Fees */}
                        <div className="country-card invisible bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-all">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                                <BookOpen size={24} className="text-orange-500" />
                                Tuition Fees
                            </h3>
                            <div className="space-y-4">
                                {data.costOfStudying.tuitionFees.map((fee, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-stone-100 last:border-0">
                                        <span className="text-stone-700 font-medium">{fee.degree}</span>
                                        <span className="text-orange-600 font-bold">{fee.cost}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Living Expenses */}
                        <div className="country-card invisible bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-all">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                                <Briefcase size={24} className="text-orange-500" />
                                Living Expenses
                            </h3>
                            <div className="space-y-4">
                                {data.costOfStudying.livingExpenses.map((expense, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-stone-100 last:border-0">
                                        <span className="text-stone-700 font-medium">{expense.item}</span>
                                        <span className="text-orange-600 font-bold">{expense.cost}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCHOLARSHIPS */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">{data.scholarships.heading}</h2>
                    </div>
                    <div className="country-feature invisible bg-gradient-to-r from-orange-50 to-stone-50 rounded-2xl p-8 border border-orange-200/30 mb-8">
                        <p className="text-stone-700 leading-relaxed">{data.scholarships.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.scholarships.organizations.map((org, idx) => (
                            <a key={idx} href={org.url} target="_blank" rel="noopener noreferrer" className="country-card invisible bg-white rounded-xl p-6 border border-stone-100 hover:border-orange-300 hover:shadow-lg transition-all text-center group">
                                <h3 className="font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{org.name}</h3>
                                <p className="text-stone-500 text-sm truncate group-hover:text-orange-500">{org.url}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAREER PROSPECTS */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Employment</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">{data.careerProspects.heading}</h2>
                        <p className="text-stone-600 mt-4 max-w-2xl mx-auto">{data.careerProspects.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.careerProspects.sectors.map((sector, idx) => (
                            <div key={idx} className="country-card invisible bg-white rounded-xl p-8 border border-stone-100 hover:shadow-lg hover:border-orange-300 transition-all text-center">
                                <Icon icon={sector.icon} width={48} className="text-orange-500 mx-auto mb-4" />
                                <h3 className="font-bold text-stone-900">{sector.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS REQUIRED */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Requirements</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">{data.documents.heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* General Documents */}
                        <div className="country-feature invisible">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                                <FileText size={24} className="text-orange-500" />
                                General Documents
                            </h3>
                            <ul className="space-y-3">
                                {data.documents.items.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-stone-600 text-[15px]">
                                        <CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Financial Proof */}
                        <div className="country-feature invisible">
                            <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                                <Briefcase size={24} className="text-orange-500" />
                                Financial Proof
                            </h3>
                            <ul className="space-y-3">
                                {data.documents.financialProof.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-stone-600 text-[15px]">
                                        <CheckCircle2 size={20} className="text-orange-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISA PROCESS */}
            <section className="country-steps relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Immigration</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">{data.visaProcess.heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.visaProcess.steps.map((step, idx) => (
                            <div key={idx} className="country-step invisible flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">{idx + 1}</div>
                                </div>
                                <div>
                                    <p className="text-stone-700 font-medium">{step}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* SUCCESS STORIES */}
            <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Success Stories</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">Student Testimonials</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.successStories.map((story, idx) => (
                            <div key={idx} className="country-card invisible bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-lg transition-all">
                                <div className="mb-6">
                                    <div className="flex items-center gap-0.5 text-orange-500 mb-3">
                                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                                    </div>
                                    <p className="text-stone-600 text-[15px] leading-relaxed italic">"{story.review}"</p>
                                </div>
                                <div className="border-t border-stone-100 pt-4">
                                    <p className="font-bold text-stone-900">{story.name}</p>
                                    <p className="text-orange-600 text-sm font-semibold">{story.university}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONSULTATION FORM */}
            <section id="consultation-form" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-white z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight mb-4">Book Your Free Consultation</h2>
                        <p className="text-stone-600">Connect with our expert counselors to start your {data.name} education journey</p>
                    </div>

                    {/* Success Message */}
                    {formStatus.success && (
                        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                            <CheckCircle2 size={24} className="text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-emerald-900">Consultation Saved Successfully!</p>
                                <p className="text-emerald-700 text-sm">Your consultation data has been saved to our Excel database. We will contact you soon!</p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {formStatus.error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                            <AlertCircle size={24} className="text-red-600 shrink-0 mt-0.5" />
                            <div>
                                <p className="font-bold text-red-900">Error</p>
                                <p className="text-red-700 text-sm">{formStatus.error}</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="bg-stone-50 rounded-2xl p-8 md:p-12 border border-stone-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="text-sm font-semibold text-stone-700 block mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-orange-500 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-stone-700 block mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-orange-500 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="text-sm font-semibold text-stone-700 block mb-2">Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleFormChange}
                                    placeholder="Enter your mobile number"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-orange-500 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-stone-700 block mb-2">Preferred Course *</label>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-orange-500 focus:outline-none text-stone-700 transition-colors"
                                    required
                                >
                                    {data.popularCourses.map((course, idx) => (
                                        <option key={idx}>{course.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="text-sm font-semibold text-stone-700 block mb-3">Consent *</label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleFormChange}
                                    className="mt-1 w-4 h-4 cursor-pointer"
                                    required
                                />
                                <span className="text-sm text-stone-600">{data.consultationForm.consent}</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus.loading}
                            className="w-full py-3.5 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 disabled:bg-orange-300 transition-all flex items-center justify-center gap-2"
                        >
                            {formStatus.loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Get Free Consultation
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>



            {/* FINAL CTA */}
            <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-r from-[#0B1121] to-[#131d35] overflow-hidden">
                <div className="absolute inset-0 pattern-grid opacity-10" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.02} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">Ready to Start Your {data.name} Journey?</h2>
                    <p className="text-stone-400 text-base sm:text-lg mb-8">Futuretor is here to guide you every step of the way. Let's make your study abroad dreams a reality!</p>
                    <Link to="/contact-us">
                        <button className="btn-premium px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold text-base hover:bg-orange-600 shadow-xl shadow-orange-500/25 transition-all inline-flex items-center gap-3">
                            Start Your Application <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
