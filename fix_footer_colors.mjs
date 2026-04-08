import fs from 'fs';

const footerPath = 'src/features/layout/Footer.view.jsx';
let content = fs.readFileSync(footerPath, 'utf8');

content = content.replace(/\[#ec5613\]/g, 'orange-500');

// wait, if it was bg-[#ec5613] it becomes bg-orange-500
// wait, the regex was replacing inside brackets.
// text-[#ec5613] -> text-orange-500. So I should just replace `text-[#ec5613]` with `text-orange-500`.
content = content.replace(/text-orange-500/g, 'text-orange-500'); // if it was already done.
// But better to just replace the literal completely context aware:
content = content.replace(/text-\[#ec5613\]/g, 'text-orange-500');
content = content.replace(/bg-\[#ec5613\]/g, 'bg-orange-500');
content = content.replace(/via-\[#ec5613\]/g, 'via-orange-500');
content = content.replace(/from-\[#ec5613\]/g, 'from-orange-500');

fs.writeFileSync(footerPath, content, 'utf8');
console.log('Fixed Footer literals');
