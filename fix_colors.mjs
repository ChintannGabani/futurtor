import fs from 'fs';

const homePath = 'src/features/home/Home.view.jsx';
let content = fs.readFileSync(homePath, 'utf8');

// Replace excess orange with blue/stone/slate
// Hero section
content = content.replace('border-b-4 border-orange-500', 'border-b-4 border-blue-600');
content = content.replace('bg-orange-500/20 border border-orange-500/40 mb-8 text-sm text-orange-400 font-semibold shadow-[0_0_15px_rgba(249,115,22,0.2)]', 'bg-blue-500/20 border border-blue-500/40 mb-8 text-sm text-blue-300 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.2)]');
content = content.replace('from-orange-400 to-amber-500', 'from-blue-400 to-blue-200');
// Keep the CTA button orange: bg-gradient-to-r from-orange-500 to-amber-500 ... no, make it solid blue, and the "Learn More" outline orange
content = content.replace('bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(249,115,22,0.4)] transform hover:-translate-y-1 hover:shadow-[0_6px_30px_rgba(249,115,22,0.6)]', 'bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] transform hover:-translate-y-1 hover:shadow-[0_6px_30px_rgba(37,99,235,0.6)] hover:bg-blue-700');

// What We Do section
content = content.replace('text-orange-200 opacity-50 z-0 hidden lg:block', 'text-stone-200 opacity-80 z-0 hidden lg:block');
content = content.replace('hover:border-orange-500/50 hover:shadow-[0_15px_40px_rgba(249,115,22,0.1)]', 'hover:border-blue-500/30 hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)]');
content = content.replace('bg-orange-50 rounded-full translate-x-12 -translate-y-12', 'bg-blue-50/50 rounded-full translate-x-12 -translate-y-12');
content = content.replace('bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white', 'bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600');
content = content.replace('group-hover:text-orange-600 transition-colors', 'group-hover:text-blue-600 transition-colors');

// Stats section
content = content.replace('text-orange-400 font-bold uppercase tracking-widest text-sm', 'text-blue-400 font-bold uppercase tracking-widest text-sm');

// Events section
content = content.replace('text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block', 'text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block');
content = content.replace('text-3xl lg:text-5xl font-bold mb-3 text-stone-900">Upcoming <span className="text-orange-500">Events</span>', 'text-3xl lg:text-5xl font-bold mb-3 text-stone-900">Upcoming <span className="text-blue-600">Events</span>');
content = content.replace('group-hover:translate-x-1 transition-transform text-orange-500', 'group-hover:translate-x-1 transition-transform text-blue-600');
content = content.replace('border-l-4 border-l-orange-500 border border-stone-100 p-6', 'border-l-4 border-l-blue-500 border border-stone-100 p-6');
content = content.replace('bg-orange-50 items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white', 'bg-blue-50 items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white');
content = content.replace('hover:bg-orange-500 transition-colors whitespace-nowrap shadow-md', 'hover:bg-blue-600 transition-colors whitespace-nowrap shadow-md');

// Vision / Testimonials
content = content.replace('text-orange-400 opacity-5 pointer-events-none', 'text-blue-400 opacity-5 pointer-events-none');
content = content.replace('text-orange-500 shadow-md', 'text-blue-600 shadow-md');
content = content.replace('text-orange-200 absolute top-6 right-8 text-7xl font-serif', 'text-blue-100 absolute top-6 right-8 text-7xl font-serif');
content = content.replace('bg-gradient-to-br from-orange-500 to-amber-500 flex items-center', 'bg-gradient-to-br from-blue-500 to-blue-700 flex items-center');

fs.writeFileSync(homePath, content, 'utf8');
console.log('Fixed orange saturation in Home.view.jsx');
