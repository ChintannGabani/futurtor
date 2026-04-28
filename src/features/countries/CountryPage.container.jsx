import React from 'react';
import { useParams } from 'react-router-dom';
import CountryPageView from './CountryPage.view';
import { COUNTRIES_DATA_ENHANCED } from '../../data/countriesDataV2';

export default function CountryPageContainer() {
    const { slug } = useParams();
    
    if (slug !== 'germany') {
        return (
            <div className="flex items-center justify-center min-h-[80vh] bg-stone-50 pt-20">
                <div className="text-center px-4 max-w-lg mx-auto">
                    <div className="mb-8 relative inline-block">
                        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center animate-pulse mx-auto">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 tracking-tight">
                        Coming <span className="text-orange-500">Soon</span>
                    </h1>
                    <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                        We are currently working on bringing you comprehensive details for studying in <span className="font-semibold text-stone-900 capitalize">{slug.replace('-', ' ')}</span>. Stay tuned for exciting updates!
                    </p>
                    <a href="/study-abroad/germany" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 hover:-translate-y-1 shadow-lg shadow-orange-500/30 transition-all duration-300">
                        Explore Germany Meanwhile
                    </a>
                </div>
            </div>
        );
    }

    const countryData = COUNTRIES_DATA_ENHANCED[slug];

    if (!countryData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-stone-50">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-stone-900 mb-4">Country Not Found</h1>
                    <p className="text-stone-600 mb-8">The country you're looking for doesn't exist yet.</p>
                    <a href="/study-abroad/germany" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all">
                        Explore Germany
                    </a>
                </div>
            </div>
        );
    }

    return <CountryPageView data={countryData} />;
}
