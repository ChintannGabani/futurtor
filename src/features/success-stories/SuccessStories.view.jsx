import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { 
    CheckCircle2, 
    ArrowRight, 
    X, 
    GraduationCap, 
    Calendar, 
    Building2, 
    Award, 
    Clock, 
    Percent, 
    ArrowUpRight,
    Search
} from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute, WorldMapBg } from '../../components/SectionDecorations';
import useSeo from '../../lib/useSeo';

gsap.registerPlugin(ScrollTrigger);

function CountUp({ target, suffix = '' }) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const st = ScrollTrigger.create({
            trigger: el, start: 'top 95%', once: true,
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

export default function SuccessStoriesView({ stories }) {
    useSeo({
        title: 'Success Stories',
        description: 'Read the success stories of our students who secured study visas and scholarships in top universities across Germany, Finland, Ireland, and Switzerland with Futuretor.',
        keywords: 'student success stories, study abroad success, Germany visa success, Finland student visa, Futuretor immigration results, study in Europe',
        path: '/success-stories',
    });

    const [selectedCountry, setSelectedCountry] = useState('All');
    const [selectedStory, setSelectedStory] = useState(null);
    const pageRef = useRef(null);

    // Initial page load animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ss-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.ss-stat-card', { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.6 });
        }, pageRef);
        return () => ctx.revert();
    }, []);

    // Stagger cards on filter change
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.story-card', 
                { y: 30, autoAlpha: 0 }, 
                { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', overwrite: 'auto' }
            );
        }, pageRef);
        return () => ctx.revert();
    }, [selectedCountry]);

    const countries = ['All', ...new Set(stories.map(s => s.country))];
    const filteredStories = selectedCountry === 'All' 
        ? stories 
        : stories.filter(s => s.country === selectedCountry);

    // Close modal on escape press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedStory(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            
            {/* ===== HERO SECTION ===== */}
            <section className="relative pt-28 sm:pt-36 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1121] via-[#0B1121]/90 to-[#131d35]" />
                <div className="absolute inset-0 pattern-grid opacity-15" />
                <WorldMapBg className="inset-0 w-full h-full text-white" opacity={0.03} />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />

                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="ss-hero-el inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:certificate-outline" width={16} /><span>100% Visa Success Track</span>
                    </div>
                    <h1 className="ss-hero-el text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">
                        Student <span className="text-orange-500">Success Stories</span>
                    </h1>
                    <p className="ss-hero-el text-base sm:text-lg text-stone-300/90 max-w-2xl mx-auto leading-relaxed">
                        Discover how we helped ambitious students secure admissions, scholarships, and study visas for world-class public and private universities.
                    </p>
                </div>

                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* ===== STATS BAR (Floating) ===== */}
            <section className="relative -mt-16 sm:-mt-20 z-20 px-4 sm:px-6 lg:px-8 pb-10">
                <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        { val: '1000', suf: '+', label: 'Visas Approved', icon: 'mdi:passport' },
                        { val: '500', suf: '+', label: 'Happy Students', icon: 'mdi:account-group-outline' },
                        { val: '100', suf: '%', label: 'Visa Success Rate', icon: 'mdi:shield-check-outline' },
                        { val: '50', suf: '+', label: 'Scholarships Secured', icon: 'mdi:school-outline' }
                    ].map((stat, i) => (
                        <div key={i} className="ss-stat-card bg-white rounded-2xl shadow-xl shadow-stone-900/5 border border-stone-100 p-5 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3 text-orange-500 group-hover:scale-110 transition-transform">
                                <Icon icon={stat.icon} width={22} />
                            </div>
                            <div className="text-xl sm:text-2xl font-black text-stone-900">
                                <CountUp target={stat.val} suffix={stat.suf} />
                            </div>
                            <div className="text-stone-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== INTERACTIVE FILTER TABS ===== */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-1.5 rounded-2xl border border-stone-200/60 shadow-sm max-w-full overflow-x-auto">
                        {countries.map((country) => (
                            <button
                                key={country}
                                onClick={() => setSelectedCountry(country)}
                                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 shrink-0 ${
                                    selectedCountry === country
                                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                                        : 'text-stone-600 hover:text-orange-600 hover:bg-stone-50'
                                }`}
                            >
                                {country !== 'All' && (
                                    <Icon 
                                        icon={
                                            country === 'Finland' ? 'flag:fi-4x3' :
                                            country === 'Germany' ? 'flag:de-4x3' :
                                            country === 'Ireland' ? 'flag:ie-4x3' :
                                            'flag:ch-4x3'
                                        } 
                                        width={16} 
                                        className="rounded-sm shadow-sm"
                                    />
                                )}
                                <span>{country}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SUCCESS STORIES GRID ===== */}
            <section className="pb-24 px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="max-w-7xl mx-auto">
                    {filteredStories.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200/50 shadow-sm">
                            <Icon icon="mdi:folder-open-outline" width={48} className="text-stone-300 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-stone-700">No stories found</h3>
                            <p className="text-stone-400 text-sm mt-1">We are currently updating records for this destination.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredStories.map((story) => (
                                <div 
                                    key={story.id} 
                                    className="story-card bg-white rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 flex flex-col overflow-hidden group"
                                >
                                    {/* Card Header: Polaroid Image & Visa Badge */}
                                    <div className="p-6 pb-4 bg-gradient-to-b from-stone-50 to-white border-b border-stone-100 flex items-center gap-5 relative">
                                        
                                        {/* Polaroid Frame */}
                                        <div className="relative shrink-0 w-24 h-28 bg-white p-1.5 shadow-md border border-stone-200/60 rounded-md rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500">
                                            <img 
                                                src={story.avatar} 
                                                alt={story.name} 
                                                className="w-full h-20 object-cover rounded"
                                            />
                                            <div className="text-[8px] font-bold text-stone-400 text-center mt-1 truncate">
                                                {story.name.split(' ')[0]}
                                            </div>
                                            {/* Flag overlay on photo */}
                                            <div className="absolute top-2 right-2 shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
                                                <Icon icon={story.flag} width={16} className="rounded-sm" />
                                            </div>
                                        </div>

                                        {/* Visa Badge & Title */}
                                        <div className="flex-grow flex flex-col justify-center">
                                            <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider self-start mb-2 animate-pulse">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                                <span>Visa Approved</span>
                                            </div>
                                            <h3 className="text-lg font-black text-stone-900 leading-snug group-hover:text-orange-600 transition-colors">
                                                {story.name}
                                            </h3>
                                            <span className="text-xs text-orange-500 font-bold flex items-center gap-1 mt-0.5">
                                                <Icon icon="mdi:map-marker-outline" /> {story.country}
                                            </span>
                                        </div>

                                        {/* Approved Stamp Accent */}
                                        <div className="absolute right-4 top-2 text-[10px] font-bold text-orange-500/10 border border-orange-500/10 rounded px-1.5 py-0.5 rotate-12 uppercase select-none pointer-events-none">
                                            Futuretor Verified
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        
                                        {/* Academic Details */}
                                        <div className="space-y-2 mb-5">
                                            <div className="flex gap-2">
                                                <GraduationCap size={15} className="text-stone-400 shrink-0 mt-0.5" />
                                                <span className="text-stone-600 text-xs font-semibold leading-relaxed">
                                                    {story.course}
                                                </span>
                                            </div>
                                            <div className="flex gap-2">
                                                <Building2 size={15} className="text-stone-400 shrink-0 mt-0.5" />
                                                <span className="text-stone-500 text-xs font-medium leading-relaxed">
                                                    {story.university}
                                                </span>
                                            </div>
                                            <div className="flex gap-2">
                                                <Calendar size={15} className="text-stone-400 shrink-0 mt-0.5" />
                                                <span className="text-stone-400 text-xs font-semibold">
                                                    Intake: {story.intake}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Financial Highlights Pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-dashed border-stone-100">
                                            <span className="px-2.5 py-1 bg-stone-50 border border-stone-200/50 rounded-lg text-stone-600 text-[10px] font-bold flex items-center gap-1">
                                                <Icon icon="mdi:currency-eur" width={11} className="text-stone-400" />
                                                <span>Fees: {story.tuitionFee.split(' ')[0]}</span>
                                            </span>
                                            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700 text-[10px] font-black flex items-center gap-1">
                                                <Percent size={11} className="text-emerald-500" />
                                                <span>{story.scholarship.replace(" Scholarship", "")}</span>
                                            </span>
                                            {story.savings !== '0' && (
                                                <span className="px-2.5 py-1 bg-orange-50 border border-orange-100/60 rounded-lg text-orange-700 text-[10px] font-bold flex items-center gap-1">
                                                    <Icon icon="mdi:piggy-bank-outline" width={11} className="text-orange-500" />
                                                    <span>Saved: {story.savings.split(' ')[0]}</span>
                                                </span>
                                            )}
                                        </div>

                                        {/* Quote Excerpt */}
                                        <p className="text-stone-500 text-[13px] leading-relaxed italic line-clamp-3 mb-6 relative pl-3 border-l-2 border-orange-300">
                                            "{story.testimonial}"
                                        </p>

                                        {/* Card Footer Button */}
                                        <button 
                                            onClick={() => setSelectedStory(story)}
                                            className="mt-auto w-full py-2.5 rounded-xl border border-stone-200 hover:border-orange-500 text-stone-700 hover:text-orange-600 font-bold text-xs tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 group/btn bg-stone-50/50 hover:bg-orange-50/20"
                                        >
                                            <span>Read Success Interview</span>
                                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ===== DETAIL POPUP MODAL ===== */}
            {selectedStory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all duration-300">
                    <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200/50 flex flex-col md:flex-row animate-[zoomIn_0.3s_cubic-bezier(0.16,1,0.3,1)] max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
                        
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedStory(null)}
                            className="absolute top-4 right-4 z-30 p-2 bg-stone-900/10 text-stone-800 hover:bg-stone-900/20 rounded-full transition-colors"
                        >
                            <X size={18} />
                        </button>

                        {/* Left Column (Visual Card header / Image) */}
                        <div className="md:w-2/5 bg-gradient-to-br from-[#0B1121] to-[#1a294d] text-white p-8 flex flex-col justify-between items-center text-center relative shrink-0">
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />
                            
                            <div className="relative z-10 flex flex-col items-center">
                                {/* Large Visa Approved stamp */}
                                <div className="border-2 border-emerald-500 text-emerald-500 rounded px-3 py-1 font-black text-xs tracking-widest uppercase mb-6 rotate-[-6deg] bg-emerald-950/20 shadow-md">
                                    VISA APPROVED
                                </div>

                                {/* Large Image */}
                                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl mb-4 group">
                                    <img 
                                        src={selectedStory.avatar} 
                                        alt={selectedStory.name} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-black">{selectedStory.name}</h3>
                                <p className="text-orange-400 font-bold text-xs mt-1 flex items-center gap-1 justify-center">
                                    <Icon icon={selectedStory.flag} width={14} className="rounded-sm" /> 
                                    <span>Study in {selectedStory.country}</span>
                                </p>
                            </div>

                            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 w-full text-xs text-stone-300/80">
                                <div>Intake Session</div>
                                <div className="font-bold text-white mt-1 text-sm">{selectedStory.intake}</div>
                            </div>
                        </div>

                        {/* Right Column (Complete Content & Details) */}
                        <div className="md:w-3/5 p-8 flex flex-col">
                            <h4 className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-1">Success Interview</h4>
                            <h3 className="text-xl font-black text-stone-900 mb-4">{selectedStory.course}</h3>
                            
                            {/* University Box */}
                            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/50 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">
                                    <Building2 size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">Institution</div>
                                    <div className="text-stone-800 text-sm font-extrabold leading-snug">{selectedStory.university}</div>
                                </div>
                            </div>

                            {/* Full Testimonial Quote */}
                            <div className="relative mb-6 pl-4 border-l-4 border-orange-500">
                                <p className="text-stone-600 text-sm leading-relaxed italic">
                                    "{selectedStory.testimonial}"
                                </p>
                            </div>

                            {/* Service Highlights */}
                            <div>
                                <h5 className="text-xs font-bold text-stone-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                                    <Icon icon="mdi:checkbox-marked-circle-outline" className="text-orange-500" />
                                    <span>How Futuretor Assisted:</span>
                                </h5>
                                <div className="flex flex-wrap gap-1.5">
                                    {selectedStory.highlights.map((highlight, idx) => (
                                        <span 
                                            key={idx} 
                                            className="px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-orange-700 text-xs font-bold flex items-center gap-1"
                                        >
                                            <CheckCircle2 size={12} className="text-orange-500" />
                                            <span>{highlight}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Congratulatory Tag */}
                            <div className="mt-8 pt-5 border-t border-stone-100 flex justify-between items-center text-xs">
                                <span className="text-stone-400 font-medium">Verification Stamp</span>
                                <span className="text-emerald-600 font-bold flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                    <Icon icon="mdi:shield-check" /> Verified Visa Success
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* ===== CALL TO ACTION SECTION ===== */}
            <section className="relative py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Icon icon="mdi:airplane" width={300} className="text-white absolute right-[-5%] top-[-20%]" style={{ transform: 'rotate(-30deg)' }} />
                    <Icon icon="mdi:earth" width={200} className="text-white absolute left-[-3%] bottom-[-30%]" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                        Start Your Own Success Story
                    </h2>
                    <p className="text-orange-100 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Join our hundreds of successful students. Get expert counseling, language preparation, university application support, and study visa consulting today.
                    </p>
                    <Link to="/contact-us">
                        <button className="px-8 py-4 rounded-full bg-white text-orange-600 font-bold hover:bg-orange-50 shadow-xl transition-all flex items-center gap-2.5 mx-auto group">
                            <span>Get Free Counseling</span> 
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
