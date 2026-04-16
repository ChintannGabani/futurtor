const express = require('express');
const cors = require('cors');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

const EXCEL_DIR = path.join(__dirname, 'consultations');

// Middleware
app.use(cors());
app.use(express.json());

// Create consultations directory if it doesn't exist
if (!fs.existsSync(EXCEL_DIR)) {
    fs.mkdirSync(EXCEL_DIR, { recursive: true });
}

// Helper function to get or create workbook
async function getOrCreateWorkbook(country) {
    const filePath = path.join(EXCEL_DIR, `${country}-consultations.xlsx`);
    let workbook = new ExcelJS.Workbook();
    let worksheet;

    if (fs.existsSync(filePath)) {
        // Load existing workbook
        workbook = await workbook.xlsx.readFile(filePath);
        worksheet = workbook.getWorksheet(country);
        if (!worksheet) {
            worksheet = workbook.addWorksheet(country);
            addHeaders(worksheet);
        }
    } else {
        // Create new workbook
        worksheet = workbook.addWorksheet(country);
        addHeaders(worksheet);
    }

    return { workbook, worksheet, filePath };
}

// Helper function to add headers
function addHeaders(worksheet) {
    const headers = [
        'Date',
        'Time',
        'Name',
        'Email',
        'Mobile Number',
        'Preferred Course',
        'Status',
    ];

    const headerRow = worksheet.addRow(headers);

    // Style headers
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF1F497D' },
    };
    headerRow.alignment = { horizontal: 'center', vertical: 'center', wrapText: true };

    // Set column widths
    worksheet.columns = [
        { width: 12 },
        { width: 10 },
        { width: 20 },
        { width: 25 },
        { width: 15 },
        { width: 25 },
        { width: 12 },
    ];
}

// API Endpoint to save consultation data
app.post('/api/save-consultation', async (req, res) => {
    try {
        const { name, email, mobile, course, country } = req.body;

        // Validate required fields
        if (!name || !email || !mobile || !course || !country) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Get or create workbook
        const { workbook, worksheet, filePath } = await getOrCreateWorkbook(country);

        // Add new data row
        const now = new Date();
        const date = now.toLocaleDateString('en-IN');
        const time = now.toLocaleTimeString('en-IN');

        const newRow = worksheet.addRow([
            date,
            time,
            name,
            email,
            mobile,
            course,
            'Pending',
        ]);

        // Style the row
        newRow.alignment = { horizontal: 'left', vertical: 'center', wrapText: true };

        // Save workbook
        await workbook.xlsx.writeFile(filePath);

        res.status(200).json({
            success: true,
            message: `Consultation data saved for ${country}`,
            filePath: filePath,
        });
    } catch (error) {
        console.error('Error saving consultation:', error);
        res.status(500).json({ error: 'Failed to save consultation data' });
    }
});

// API Endpoint to get consultation data for a country
app.get('/api/consultations/:country', async (req, res) => {
    try {
        const { country } = req.params;
        const filePath = path.join(EXCEL_DIR, `${country}-consultations.xlsx`);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'No consultations found for this country' });
        }

        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(country);

        const data = [];
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                data.push(row.values.slice(1)); // Skip index 0
            }
        });

        res.status(200).json({
            success: true,
            country,
            totalConsultations: data.length,
            data,
        });
    } catch (error) {
        console.error('Error retrieving consultations:', error);
        res.status(500).json({ error: 'Failed to retrieve consultations' });
    }
});

// API Endpoint to download Excel file
app.get('/api/download/:country', async (req, res) => {
    try {
        const { country } = req.params;
        const filePath = path.join(EXCEL_DIR, `${country}-consultations.xlsx`);

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'File not found' });
        }

        res.download(filePath, `${country}-consultations.xlsx`);
    } catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ error: 'Failed to download file' });
    }
});

// API Endpoint to get all countries with consultations
app.get('/api/countries-list', (req, res) => {
    try {
        const files = fs.readdirSync(EXCEL_DIR);
        const countries = files
            .filter((file) => file.endsWith('.xlsx'))
            .map((file) => file.replace('-consultations.xlsx', ''));

        res.status(200).json({
            success: true,
            countries,
            total: countries.length,
        });
    } catch (error) {
        console.error('Error listing countries:', error);
        res.status(500).json({ error: 'Failed to list countries' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Server is running', port: PORT });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Consultation Server running on http://localhost:${PORT}`);
    console.log(`📁 Excel files will be saved in: ${EXCEL_DIR}`);
});
