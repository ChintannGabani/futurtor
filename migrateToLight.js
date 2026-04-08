import fs from 'fs';
import path from 'path';

const replacers = [
  { search: /bg-slate-900/g, replace: 'bg-transparent' },
  { search: /bg-slate-800\/40/g, replace: 'bg-white/60' },
  { search: /bg-slate-800\/30/g, replace: 'bg-white/50' },
  { search: /bg-slate-800\/80/g, replace: 'bg-stone-100/80' },
  { search: /bg-slate-800/g, replace: 'bg-white' },
  { search: /border-slate-800\/50/g, replace: 'border-stone-200/50' },
  { search: /border-slate-800/g, replace: 'border-stone-200' },
  { search: /border-slate-700\/50/g, replace: 'border-stone-200/80' },
  { search: /border-slate-700/g, replace: 'border-stone-200' },
  { search: /border-slate-600/g, replace: 'border-stone-300' },
  { search: /border-slate-500/g, replace: 'border-stone-400' },
  { search: /text-slate-300/g, replace: 'text-stone-600' },
  { search: /text-slate-400/g, replace: 'text-stone-500' },
  { search: /text-slate-500/g, replace: 'text-stone-400' },
  { search: /text-slate-700/g, replace: 'text-stone-300' },
  { search: /text-white/g, replace: 'text-stone-900' },
  { search: /from-slate-700/g, replace: 'from-stone-100' },
  { search: /to-slate-600/g, replace: 'to-stone-50' },
  // specific overrides where "text-stone-900" is bad
  // like button texts should stay white in solid backgrounds
  { search: /text-stone-900 font-medium hover:from-orange/g, replace: 'text-stone-800 font-medium hover:from-orange' },
];

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
    if(file.includes('Header.view.jsx') || file.includes('Footer.view.jsx')) return; // already done

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacers.forEach(r => {
        content = content.replace(r.search, r.replace);
    });

    // We have some specific adjustments:
    // e.g. text-white in buttons should remain white if it's on a gradient background
    // let's do a fast fix for buttons
    content = content.replace(/bg-gradient-[^"']+ text-stone-900/g, (match) => match.replace('text-stone-900', 'text-white'));
    content = content.replace(/text-stone-900 font-bold text-lg[^"']*shadow/g, (match) => match.replace('text-stone-900', 'text-white'));
    content = content.replace(/text-stone-900 font-medium text-lg hover:bg-stone/g, (match) => match.replace('text-stone-900', 'text-stone-800'));
    content = content.replace(/shadow-2xl/g, 'shadow-xl shadow-stone-200/50');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated:', file);
    }
});

console.log('Done mapping dark to light.');
