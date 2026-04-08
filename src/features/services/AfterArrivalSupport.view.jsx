import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import useSeo from '../../lib/useSeo';

export default function AfterArrivalSupportView({ data }) {
    useSeo({
        title: 'After Arrival Support - Airport Pickup & Settlement',
        description: 'Smooth post-landing support for international students: airport pickup, temporary accommodation, bank account opening, and part-time job guidance.',
        keywords: 'after arrival support, airport pickup students, temporary accommodation abroad, bank account abroad, part time job student',
        path: '/services/after-arrival-support',
    });
    if (!data) return null;

    const points = [
        { title: 'Airport Pick Up Support', desc: 'Our associates will be there to receive you at your destination airport.' },
        { title: 'Temporary Accommodation', desc: 'Help with arranging temporary accommodation while you settle in.' },
        { title: 'Bank Account Opening', desc: 'Guidance and assistance in opening a local bank account.' },
        { title: 'Part Time Job Guidance', desc: 'Help finding part-time work opportunities to support your studies.' },
    ];

    return (
        <ServicePageLayout
            title="After Arrival Support"
            badge="Post-Landing Help"
            badgeIcon="mdi:airplane-landing"
            description="The migration process does not end with arrival at the destination. In a new country, students require a few basic things organized before embarking on their studies. Our post-landing assistance ensures a smooth transition in the new country."
            pointsTitle="Arrival Services"
            points={points}
            variant="grid"
            footerText="It is only after our students settle down we feel that we have completed our task."
            ctaTitle="Traveling Soon?"
            ctaDesc="We'll be with you even after you arrive at your destination."
            illustration="noto:airplane-arrival"
            sideIllustrations={['noto:house-with-garden', 'noto:bank']}
        />
    );
}
