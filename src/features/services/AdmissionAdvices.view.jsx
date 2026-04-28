import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import useSeo from '../../lib/useSeo';

export default function AdmissionAdvicesView({ data }) {
    useSeo({
        title: 'Admission Advice - University Selection & Application',
        description: 'Personalized admission advice from Futuretor experts. University selection, course recommendation, document review, SOP help, and visa application support.',
        keywords: 'admission advice, university selection, study abroad admission, course recommendation, document review, Futuretor admission consultant',
        path: '/services/admission-advices',
    });
    if (!data) return null;

    const points = [
        { title: 'University Selection', desc: 'Helping you choose the best-fit institutions based on your goals, interests, and budget.' },
        { title: 'Course Recommendation', desc: 'Assisting you in selecting the right course to align with your career aspirations.' },
        { title: 'Application Assistance', desc: 'From filling out application forms to writing compelling personal statements, we handle every aspect.' },
        { title: 'Document Review', desc: 'Ensuring all necessary documents, including transcripts, recommendation letters, and SOPs, meet university requirements.' },
        { title: 'Visa Application Support', desc: 'Offering guidance and assistance in preparing your visa application for a hassle-free process.' },
    ];

    return (
        <ServicePageLayout
            title="Admission Advices"
            badge="Expert Guidance"
            badgeIcon="mdi:lightbulb-outline"
            description="At Futuretor, we understand that applying to study abroad can be overwhelming, and every detail matters. Our expert team offers end-to-end application services to ensure your application is prepared meticulously and submitted on time."
            pointsTitle="Our Guidance Areas"
            points={points}
            variant="cards-alt"
            footerText="Our dedicated team works with you every step of the way, providing personalised support to ensure your application stands out. With our expertise, you can feel confident that your study abroad dreams are in safe hands."
            ctaTitle="Need Admission Guidance?"
            ctaDesc="Get personalized support to make your application stand out."
            illustration="noto:graduation-cap"
            sideIllustrations={['noto:school', 'noto:open-book']}
        />
    );
}
