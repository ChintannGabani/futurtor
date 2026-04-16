// API service for consultation data
const API_BASE_URL = 'http://localhost:5000/api';

export const consultationService = {
    // Save consultation data
    saveConsultation: async (data) => {
        try {
            const response = await fetch(`${API_BASE_URL}/save-consultation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to save consultation');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error saving consultation:', error);
            throw error;
        }
    },

    // Get consultations for a country
    getConsultations: async (country) => {
        try {
            const response = await fetch(`${API_BASE_URL}/consultations/${country}`);

            if (!response.ok) {
                throw new Error('Failed to fetch consultations');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching consultations:', error);
            throw error;
        }
    },

    // Download Excel file
    downloadConsultations: (country) => {
        window.open(`${API_BASE_URL}/download/${country}`, '_blank');
    },

    // Get list of all countries with consultations
    getCountriesList: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/countries-list`);

            if (!response.ok) {
                throw new Error('Failed to fetch countries list');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching countries list:', error);
            throw error;
        }
    },

    // Check server health
    checkHealth: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            return response.ok;
        } catch (error) {
            return false;
        }
    },
};
