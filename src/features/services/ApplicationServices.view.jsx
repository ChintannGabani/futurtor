import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import useSeo from '../../lib/useSeo';

export default function ApplicationServicesView({ data }) {
    useSeo({
        title: 'University Application Services - SOP & Document Help',
        description: 'Expert university application services from Futuretor. Choose the right universities, complete forms, get a professional SOP, and stay on top of immigration timelines.',
        keywords: 'university application services, SOP writing, study abroad applications, statement of purpose, university selection',
        path: '/services/application-services',
    });
    if (!data) return null;

    const points = [
        { title: 'Choosing the Right Universities', desc: 'Expert help selecting the best-fit universities for your profile.' },
        { title: 'Application Form Completion', desc: 'Fill up your application form in accordance with all requirements.' },
        { title: 'Statement of Purpose', desc: 'Get a professional SOP tailored and ready for your applications.' },
        { title: 'Immigration Updates', desc: 'Stay updated about the dates of immigration procedures.' },
    ];

    return (
        <ServicePageLayout
            title="Application Services"
            badge="Expert Applications"
            badgeIcon="mdi:file-document-edit-outline"
            description="We offer a wide range of courses from prestigious global universities. Filling out university applications can be challenging and requires a thorough and meticulous approach from our advisors, ensuring each application is completed accurately and on time."
            pointsTitle="Application Protocol"
            points={points}
            variant="timeline"
            ctaTitle="Ready to Apply?"
            ctaDesc="Let our experts handle your university applications with precision."
            illustration="noto:memo"
            sideIllustrations={['noto:graduation-cap', 'noto:writing-hand']}
        />
    );
}
