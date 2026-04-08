const Jimp = require('jimp');

async function extractColors() {
    try {
        const image = await Jimp.read('src/assets/company_logo/logo_light.png');
        
        let colors = {};
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];
            
            // Skip highly transparent pixels
            if (a < 128) return;
            
            const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
            
            colors[hex] = (colors[hex] || 0) + 1;
        });
        
        const sortedColors = Object.entries(colors)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
            
        console.log("Top colors in logo_light.png:");
        sortedColors.forEach(([color, count]) => {
            console.log(`${color}: ${count} pixels`);
        });
        
    } catch (err) {
        console.error(err);
    }
}

extractColors();
