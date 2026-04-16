import React, { useState, useEffect } from 'react';
import { Download, Eye, RefreshCw, AlertCircle } from 'lucide-react';
import { consultationService } from '../../services/consultationService';

export default function ConsultationAdmin() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [consultations, setConsultations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [serverStatus, setServerStatus] = useState('unknown');
    const [error, setError] = useState(null);

    // Check server status on mount
    useEffect(() => {
        checkServerStatus();
        loadCountries();
    }, []);

    // Check if consultation server is running
    const checkServerStatus = async () => {
        try {
            const isHealthy = await consultationService.checkHealth();
            setServerStatus(isHealthy ? 'online' : 'offline');
        } catch (err) {
            setServerStatus('offline');
        }
    };

    // Load list of countries with consultations
    const loadCountries = async () => {
        try {
            setError(null);
            const result = await consultationService.getCountriesList();
            setCountries(result.countries || []);
            if (result.countries?.length > 0) {
                setSelectedCountry(result.countries[0]);
                loadConsultations(result.countries[0]);
            }
        } catch (err) {
            setError('Failed to load countries');
            setServerStatus('offline');
        }
    };

    // Load consultations for selected country
    const loadConsultations = async (country) => {
        setLoading(true);
        try {
            setError(null);
            const result = await consultationService.getConsultations(country);
            setConsultations(result.data || []);
        } catch (err) {
            setError(`Failed to load consultations for ${country}`);
            setConsultations([]);
        } finally {
            setLoading(false);
        }
    };

    // Handle country selection
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        loadConsultations(country);
    };

    // Download Excel file
    const handleDownload = (country) => {
        try {
            consultationService.downloadConsultations(country);
        } catch (err) {
            setError('Failed to download file');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black text-white mb-2">📊 Consultation Management</h1>
                    <p className="text-stone-400">View and manage all student consultations across countries</p>
                </div>

                {/* Server Status */}
                <div className="mb-6 p-4 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${serverStatus === 'online' ? 'bg-emerald-500' : 'bg-red-500'} animate-pulse`} />
                        <span className="text-white font-semibold">
                            Server Status: {serverStatus === 'online' ? '🟢 Online' : '🔴 Offline'}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            checkServerStatus();
                            loadCountries();
                        }}
                        className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all flex items-center gap-2"
                    >
                        <RefreshCw size={18} />
                        Refresh
                    </button>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                        <AlertCircle size={24} className="text-red-600 shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-red-900">Error</p>
                            <p className="text-red-700 text-sm">{error}</p>
                        </div>
                    </div>
                )}

                {serverStatus === 'offline' && (
                    <div className="mb-6 p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                        <p className="text-yellow-800 font-semibold">
                            ⚠️ Consultation server is offline. Please run: <code className="bg-yellow-100 px-2 py-1 rounded">npm run server</code>
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Countries List */}
                    <div className="lg:col-span-1">
                        <div className="bg-stone-800 rounded-xl border border-stone-700 overflow-hidden">
                            <div className="bg-orange-600 px-6 py-4">
                                <h2 className="text-white font-bold text-lg">Countries</h2>
                                <p className="text-orange-100 text-sm">Total: {countries.length}</p>
                            </div>
                            <div className="p-4 max-h-96 overflow-y-auto">
                                {countries.length === 0 ? (
                                    <p className="text-stone-500 text-center py-8">No countries yet</p>
                                ) : (
                                    <div className="space-y-2">
                                        {countries.map((country) => (
                                            <button
                                                key={country}
                                                onClick={() => handleCountrySelect(country)}
                                                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all capitalize ${
                                                    selectedCountry === country
                                                        ? 'bg-orange-500 text-white'
                                                        : 'bg-stone-700 text-stone-300 hover:bg-stone-600'
                                                }`}
                                            >
                                                🌍 {country}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Consultations Table */}
                    <div className="lg:col-span-3">
                        <div className="bg-stone-800 rounded-xl border border-stone-700 overflow-hidden">
                            <div className="bg-orange-600 px-6 py-4 flex justify-between items-center">
                                <div>
                                    <h2 className="text-white font-bold text-lg capitalize">
                                        {selectedCountry ? `${selectedCountry} Consultations` : 'Select a Country'}
                                    </h2>
                                    {selectedCountry && (
                                        <p className="text-orange-100 text-sm">Total: {consultations.length}</p>
                                    )}
                                </div>
                                {selectedCountry && (
                                    <button
                                        onClick={() => handleDownload(selectedCountry)}
                                        className="px-4 py-2 rounded-lg bg-white text-orange-600 font-bold hover:bg-orange-50 transition-all flex items-center gap-2"
                                    >
                                        <Download size={18} />
                                        Export
                                    </button>
                                )}
                            </div>

                            {/* Table */}
                            <div className="p-6 max-h-96 overflow-x-auto">
                                {loading ? (
                                    <div className="flex items-center justify-center py-12">
                                        <div className="animate-spin">
                                            <RefreshCw size={32} className="text-orange-500" />
                                        </div>
                                    </div>
                                ) : consultations.length === 0 ? (
                                    <p className="text-stone-500 text-center py-8">
                                        {selectedCountry
                                            ? 'No consultations yet for this country'
                                            : 'Select a country to view consultations'}
                                    </p>
                                ) : (
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-stone-600">
                                                <th className="text-left py-3 px-4 font-bold text-stone-300">Date</th>
                                                <th className="text-left py-3 px-4 font-bold text-stone-300">Name</th>
                                                <th className="text-left py-3 px-4 font-bold text-stone-300">Email</th>
                                                <th className="text-left py-3 px-4 font-bold text-stone-300">Mobile</th>
                                                <th className="text-left py-3 px-4 font-bold text-stone-300">Course</th>
                                                <th className="text-left py-3 px-4 font-bold text-stone-300">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {consultations.map((consultation, idx) => (
                                                <tr key={idx} className="border-b border-stone-700 hover:bg-stone-700/50 transition-colors">
                                                    <td className="py-3 px-4 text-stone-300 text-sm">{consultation[0]}</td>
                                                    <td className="py-3 px-4 text-stone-300 font-semibold">{consultation[2]}</td>
                                                    <td className="py-3 px-4 text-stone-400 text-sm">{consultation[3]}</td>
                                                    <td className="py-3 px-4 text-stone-400 text-sm">{consultation[4]}</td>
                                                    <td className="py-3 px-4 text-stone-300 text-sm">{consultation[5]}</td>
                                                    <td className="py-3 px-4">
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold">
                                                            {consultation[6]}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 text-center">
                        <div className="text-3xl font-black text-orange-500 mb-2">{countries.length}</div>
                        <div className="text-stone-400">Countries with Data</div>
                    </div>
                    <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 text-center">
                        <div className="text-3xl font-black text-emerald-500 mb-2">{consultations.length}</div>
                        <div className="text-stone-400">Total Consultations</div>
                    </div>
                    <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 text-center">
                        <div className="text-3xl font-black text-blue-500 mb-2">
                            {serverStatus === 'online' ? '🟢' : '🔴'}
                        </div>
                        <div className="text-stone-400">Server Status</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
