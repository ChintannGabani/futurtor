// API service for consultation data to save directly to Google Sheets

// Replace this URL with the Google Apps Script Web App URL you generate
const GOOGLE_SCRIPT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzHW_VuibaBCmLLuuQtWe7ePS7Qc3FVYOok8vByrH0JGjPNZpUH5dByC-m-Pig4N1pO/exec';

export const consultationService = {
    // Save consultation data
    saveConsultation: async (data) => {
        try {
            // Using URLSearchParams allows us to send form data and bypass CORS preflight errors in Apps Script
            const formBody = new URLSearchParams();
            Object.keys(data).forEach(key => {
                formBody.append(key, data[key]);
            });

            // We use 'no-cors' mode so the browser doesn't block the request if Google redirects it
            await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody.toString(),
            });

            // With no-cors, we can't read the response properly, but if fetch didn't throw an error, we assume success
            return { success: true };
        } catch (error) {
            console.error('Error saving consultation:', error);
            throw error;
        }
    }
};
