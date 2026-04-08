import React from 'react';
import IeltsToeflPteView from './IeltsToeflPte.view';
import { LANGUAGES_DATA } from '../../data/constants';

export default function IeltsToeflPteContainer() {
    const data = LANGUAGES_DATA['ielts-toefl-pte'];

    const heroData = {
        ...data,
        offeringsText: data.description || "We specialize in IELTS and PTE preparation, focusing on the four key modules: Reading, Listening, Writing, and Speaking. From day one, we emphasize speaking practice to build confidence. Our highly skilled coaching faculty and excellent results are a testament to the quality of instruction we provide.",
    };

    const modules = [
        { title: "Listening", desc: "Understand various English accents and dialogues with precision." },
        { title: "Reading", desc: "Analyze complex academic and general texts to interpret information quickly." },
        { title: "Writing", desc: "Express complex ideas clearly and coherently in correct written English." },
        { title: "Speaking", desc: "Communicate fluently and build confidence from day one with daily practice." }
    ];

    const scoreInfo = [
        "IELTS score is graded on a band scale from 0-9",
        "Generally the score required for UG is at least 6 bands & for PG is 6.5 or more",
        "It usually takes 15 days to receive the hard copy of the result",
        "The score is valid for 2 years globally"
    ];

    return (
        <IeltsToeflPteView
            heroData={heroData}
            modules={modules}
            scoreInfo={scoreInfo}
        />
    );
}
