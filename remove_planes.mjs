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
            if(file.endsWith('.view.jsx')) {
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

    // Remove the import
    content = content.replace(/import PlaneAnimation from '[^']+';\n?/g, '');
    
    // Remove the component usage `<PlaneAnimation />` and `{isEven && <PlaneAnimation />}`
    content = content.replace(/<PlaneAnimation \/>\s*/g, '');
    content = content.replace(/\{[^{}]*<PlaneAnimation \/>\s*\}/g, '');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Removed PlaneAnimation from:', file);
    }
});
