import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';
import { ArrowRight } from 'lucide-react';
import PlaneAnimation from '../../components/PlaneAnimation';
import { FlightRoute } from '../../components/SectionDecorations';
import HeroRoad from '../../components/HeroRoad';
import useSeo from '../../lib/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function LanguagesView({ title, description }) {
    useSeo({
        title: 'Language Programs - German, IELTS, PTE Coaching',
        description: 'Master German A1-C1 with Goethe-aligned curriculum or ace IELTS, TOEFL & PTE with expert coaching. Small class sizes, personalized training, and proven success.',
        keywords: 'German language classes Surat, IELTS coaching, PTE training, TOEFL preparation, Goethe institute aligned, language academy India',
        path: '/languages',
    });
    const pageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.lang-hero-el', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.lang-card',
                { y: 50, autoAlpha: 0, rotateX: 10 },
                { y: 0, autoAlpha: 1, rotateX: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: { trigger: '.lang-cards', start: 'top 85%', once: true } }
            );
        }, pageRef);
        return () => ctx.revert();
    }, []);

    const courses = [
        {
            title: 'German Language',
            desc: 'Master German from A1 to C1 levels with Goethe-Institute aligned curriculum and expert native-level guidance.',
            icon: 'twemoji:flag-germany',
            stats: '7 Levels',
            link: '/languages/german',
            gradient: 'from-yellow-400 via-red-500 to-stone-900',
            features: ['A1 to C1 Levels', 'Goethe-Aligned', 'Technical Vocabulary', '24/7 Support'],
        },
        {
            title: 'IELTS / TOEFL / PTE',
            desc: 'Expert coaching for all major English proficiency tests with focus on Reading, Listening, Writing & Speaking.',
            icon: 'twemoji:flag-united-kingdom',
            stats: '4 Modules',
            link: '/languages/ielts-toefl-pte',
            gradient: 'from-blue-600 via-red-500 to-blue-800',
            features: ['Band 7+ Target', '500+ Students', 'Mock Tests', 'Speaking Focus'],
        }
    ];

    return (
        <div ref={pageRef} className="flex flex-col w-full relative min-h-screen bg-stone-50 overflow-hidden">
            {/* Hero */}
            <section className="relative pt-32 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-8 w-full z-10 bg-[#0B1121] overflow-hidden min-h-[55vh] flex items-center">
                <div className="absolute inset-0 pattern-grid opacity-20" />
                <PlaneAnimation />
                <FlightRoute className="bottom-[15%] left-0 w-full h-[150px]" color="#f97316" />
                <HeroRoad />

                <div className="relative max-w-5xl mx-auto z-20 text-center w-full">
                    <div className="lang-hero-el invisible inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 text-xs sm:text-sm text-orange-400 font-semibold backdrop-blur-sm">
                        <Icon icon="mdi:translate" width={16} />
                        <span>Language Programs</span>
                    </div>
                    <h1 className="lang-hero-el invisible text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white leading-[1.08]">{title || 'Our Languages'}</h1>
                    <p className="lang-hero-el invisible text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
                        {description || 'Comprehensive language programs designed to help you communicate confidently and succeed on the global stage.'}
                    </p>
                </div>
                <div className="wave-divider" style={{ bottom: '-2px' }}>
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C49.71,109.8,110.84,119.29,173.8,111.4,228.32,104.53,277.6,83.18,321.39,56.44Z" fill="#fafaf9" />
                    </svg>
                </div>
            </section>

            {/* Course Cards - Full-width feature cards */}
            <section className="lang-cards relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full bg-stone-50 z-10">
                <div className="max-w-5xl mx-auto space-y-8">
                    {courses.map((course, idx) => (
                        <Link key={idx} to={course.link} className="block">
                            <div className="lang-card invisible group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-500" style={{ perspective: '800px' }}>
                                <div className="flex flex-col sm:flex-row">
                                    {/* Left - colored accent */}
                                    <div className={`sm:w-48 bg-gradient-to-br ${course.gradient} p-6 sm:p-8 flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-4 shrink-0`}>
                                        <Icon icon={course.icon} width={56} height={56} />
                                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-bold">{course.stats}</div>
                                    </div>

                                    {/* Right - content */}
                                    <div className="flex-1 p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">{course.title}</h3>
                                        <p className="text-stone-500 text-sm leading-relaxed mb-5">{course.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {course.features.map((f, i) => (
                                                <span key={i} className="px-3 py-1 bg-stone-50 border border-stone-100 rounded-full text-xs font-medium text-stone-600">{f}</span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                                            Explore Course <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
