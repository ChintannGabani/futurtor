import React from 'react';
import { useParams } from 'react-router-dom';
import CountryPageView from './CountryPage.view';
import { COUNTRIES_DATA_ENHANCED } from '../../data/countriesDataV2';

export default function CountryPageContainer() {
    const { slug } = useParams();
    const countryData = COUNTRIES_DATA_ENHANCED[slug];

    if (!countryData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-stone-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-stone-900 mb-4">Country Not Found</h1>
                    <p className="text-stone-600 mb-8">The country you're looking for doesn't exist yet.</p>
                    <a href="/study-abroad" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all">
                        Back to Study Abroad
                    </a>
                </div>
            </div>
        );
    }

    return <CountryPageView data={countryData} />;
}
