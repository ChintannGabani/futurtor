import React from 'react';
import GermanView from './German.view';
import { LANGUAGES_DATA, TESTIMONIALS_SECTION } from '../../data/constants';

export default function GermanContainer() {
    const data = LANGUAGES_DATA['german'];
    
    const whyChooseUs = {
        heading: "Why Choose Us for German Language?",
        points: [
            {
                title: "Goethe-Institute Aligned Curriculum",
                desc: "Our courses are designed in accordance with international standards, giving you the best foundation in the German language."
            },
            {
                title: "Small Class Sizes",
                desc: "We keep our classes small to ensure you get personalized support and focused learning for better attention."
            },
            {
                title: "Focus on All Four Skills",
                desc: "Reading, Writing, Listening, and Speaking — we emphasize a well-rounded approach to mastering German."
            },
            {
                title: "Real-World Application",
                desc: "You'll not only learn the language but also gain cultural insights and practical language use for living, working, or studying in Germany."
            },
            {
                title: "Technical Focus",
                desc: "We specialize in providing tailored German language courses with a focus on technical vocabulary, helping professionals in engineering, IT, business."
            },
            {
                title: "Constant Support & Affordable Fees",
                desc: "We offer 24/7 support with practice sessions ensuring no one is left behind, along with competitive pricing and flexible payment plans."
            }
        ]
    };

    const benefits = {
        heading: "Benefits of learning The German language",
        points: [
            {
                title: "Access to Career Opportunities",
                desc: "German is widely spoken in the business world, particularly in fields like engineering, technology, finance, and science. Mastering German opens up job opportunities in Germany, Austria, Switzerland."
            },
            {
                title: "Widely Used in Research",
                desc: "German is a dominant language in academic research."
            },
            {
                title: "Access to Scholarships",
                desc: "Many German-speaking universities offer scholarships to international students."
            },
            {
                title: "Study Abroad Opportunities",
                desc: "Opens doors to studying in top German-speaking universities."
            },
            {
                title: "Tech Industry Advantage",
                desc: "German is a key language in tech and engineering sectors."
            }
        ]
    };

    return (
        <GermanView 
            heroData={data} 
            whyChooseUs={whyChooseUs} 
            benefits={benefits} 
            testimonials={TESTIMONIALS_SECTION}
        />
    );
}
