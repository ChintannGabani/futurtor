import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.view.jsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src/features');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Remove text gradients: "text-transparent bg-clip-text bg-gradient-[whatever]"
    // Usually they have a from-* to-* 
    content = content.replace(/text-transparent bg-clip-text bg-gradient-to-[a-z]+ from-[a-zA-Z0-9\[\]#-]+ (via-[a-zA-Z0-9\[\]#-]+ )?to-[a-zA-Z0-9\[\]#-]+/g, 'text-orange-500');
    // Also catch some simpler ones
    content = content.replace(/bg-gradient-to-[a-z]+ from-[a-zA-Z0-9\[\]#-]+ (via-[a-zA-Z0-9\[\]#-]+ )?to-[a-zA-Z0-9\[\]#-]+/g, 'bg-orange-500');

    // Remove any remaining generic gradient tags just in case
    content = content.replace(/bg-gradient-to-[a-z]+/g, '');
    content = content.replace(/from-[a-zA-Z0-9\[\]#-]+/g, '');
    content = content.replace(/to-[a-zA-Z0-9\[\]#-]+/g, '');
    content = content.replace(/via-[a-zA-Z0-9\[\]#-]+/g, '');

    // 2. Reduce orange saturation in favor of a sharp professional blue (like Merchynt) and stark elements
    // Change large borders/blobs to blue
    content = content.replace(/border-orange-500/g, 'border-blue-600');
    
    // For backgrounds where it used to be orange-500/20, make it blue
    content = content.replace(/bg-orange-500\/10/g, 'bg-blue-50');
    content = content.replace(/bg-orange-500\/20/g, 'bg-blue-100');
    content = content.replace(/bg-orange-500/g, 'bg-blue-600'); // the buttons

    // For texts where it used to be orange
    content = content.replace(/text-orange-500/g, 'text-blue-600');
    content = content.replace(/text-orange-400/g, 'text-blue-500');
    
    // Fix shadow colors (orange shadow -> blue shadow)
    content = content.replace(/rgba\(249,115,22/g, 'rgba(37,99,235'); // orange -> blue rgb

    // Specific reverts to fix white text overlaps
    content = content.replace(/text-blue-600 text-white/g, 'text-white');
    content = content.replace(/text-blue-600 text-stone-900/g, 'text-stone-900');
    
    // Any remaining stray spaces
    content = content.replace(/  +/g, ' ');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Cleaned gradients and fixed colors:', file);
    }
});

// Fix index.css gradients
let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace(/background: linear-gradient[^;]+;/g, 'background: var(--color-primary);');
fs.writeFileSync('src/index.css', cssContent, 'utf8');
console.log('Fixed index.css gradients');
