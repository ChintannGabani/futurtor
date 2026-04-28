import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import useSeo from '../../lib/useSeo';

export default function EducationalLoanGuidanceView({ data }) {
    useSeo({
        title: 'Educational Loan Guidance - Study Abroad Financing',
        description: 'Get hassle-free education loan guidance for studying abroad. Futuretor partners with reputed banks, recommends scholarships, and helps with financial documentation.',
        keywords: 'education loan guidance, study abroad loan, abroad scholarship, education loan India, bank tie-up loan',
        path: '/services/educational-loan-guidance',
    });
    if (!data) return null;

    const points = [
        { title: 'Complete Loan Information', desc: 'Education loan related complete information and guidance for your study abroad journey.' },
        { title: 'Scholarship Programs', desc: 'Recommending scholarship beneficial study abroad programs and universities.' },
        { title: 'Reputed Bank Tie-ups', desc: 'Tie-up with reputed banks for the best loan options and interest rates.' },
        { title: 'Hassle-free Processing', desc: 'Simple and hassle-free education loan processing from start to finish.' },
        { title: 'Financial Asset Disclosure', desc: 'Assistance about disclosure of financial assets for visa application requirements.' },
    ];

    return (
        <ServicePageLayout
            title="Loan Guidance"
            badge="Financial Support"
            badgeIcon="mdi:bank-outline"
            description="With Futuretor by your side, financial concerns won't hinder your career aspirations. For parents worried about arranging funds for their child's study abroad dreams, we provide a dedicated approach to help secure the most feasible financial support."
            pointsTitle="Financial Services"
            points={points}
            variant="checklist"
            ctaTitle="Worried About Finances?"
            ctaDesc="Let us help you find the best financial support for your education abroad."
            illustration="noto:money-bag"
            sideIllustrations={['noto:bank', 'noto:money-with-wings']}
        />
    );
}
