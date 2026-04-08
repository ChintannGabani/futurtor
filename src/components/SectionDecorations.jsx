import React from 'react';
import { Icon } from '@iconify/react';

// Dashed flight route that goes across a section (like Wizdom)
export function FlightRoute({ className = '', color = '#f97316', direction = 'left-to-right' }) {
    return (
        <svg
            className={`absolute pointer-events-none ${className}`}
            viewBox="0 0 1400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            {direction === 'left-to-right' ? (
                <>
                    <path
                        d="M-20 150 C 200 50, 400 180, 600 100 S 1000 30, 1420 120"
                        stroke={color}
                        strokeWidth="2"
                        strokeDasharray="10 6"
                        className="flight-path"
                        opacity="0.15"
                    />
                    {/* Airplane icon at end of path */}
                    <g transform="translate(1350, 110) rotate(-15)">
                        <text fontSize="24" fill={color} opacity="0.25">&#9992;</text>
                    </g>
                </>
            ) : (
                <>
                    <path
                        d="M1420 150 C 1200 30, 1000 170, 800 80 S 400 50, -20 130"
                        stroke={color}
                        strokeWidth="2"
                        strokeDasharray="10 6"
                        className="flight-path"
                        opacity="0.15"
                    />
                    <g transform="translate(30, 125) rotate(165)">
                        <text fontSize="24" fill={color} opacity="0.25">&#9992;</text>
                    </g>
                </>
            )}
        </svg>
    );
}

// Road/Path decoration - curved road across section
export function RoadPath({ className = '', dark = false }) {
    const roadColor = dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
    const dashColor = dark ? 'rgba(249,115,22,0.2)' : 'rgba(249,115,22,0.15)';

    return (
        <svg
            className={`absolute pointer-events-none w-full ${className}`}
            viewBox="0 0 1400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            {/* Road body */}
            <path
                d="M-50 250 C 200 100, 500 200, 700 150 S 1100 80, 1450 180"
                stroke={roadColor}
                strokeWidth="40"
                strokeLinecap="round"
            />
            {/* Road center dashes */}
            <path
                d="M-50 250 C 200 100, 500 200, 700 150 S 1100 80, 1450 180"
                stroke={dashColor}
                strokeWidth="2"
                strokeDasharray="16 10"
                className="flight-path"
            />
        </svg>
    );
}

// Floating decorative icons for sections
export function FloatingDecor({ items, dark = false }) {
    const baseColor = dark ? 'text-white/[0.04]' : 'text-stone-400/[0.06]';

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {items.map((item, i) => (
                <div
                    key={i}
                    className={`absolute ${baseColor} ${i % 2 === 0 ? 'float-animation' : 'float-slow'}`}
                    style={{
                        left: item.x,
                        top: item.y,
                        animationDelay: `${i * 1.2}s`,
                    }}
                >
                    <Icon icon={item.icon} width={item.size || 40} height={item.size || 40} />
                </div>
            ))}
        </div>
    );
}

// World Map dotted background
export function WorldMapBg({ className = '', opacity = 0.03 }) {
    return (
        <div className={`absolute pointer-events-none ${className}`} style={{ opacity }}>
            <svg viewBox="0 0 1000 500" className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified dot-matrix world map */}
                {/* North America */}
                {[
                    [120,80],[130,75],[140,80],[150,85],[160,90],[135,90],[145,95],[155,100],[165,100],[125,100],
                    [130,110],[140,110],[150,110],[160,110],[170,105],[145,120],[155,120],[165,115],[140,130],[150,130],
                ].map(([x,y], i) => (
                    <circle key={`na${i}`} cx={x} cy={y} r="3" />
                ))}
                {/* South America */}
                {[
                    [220,220],[230,230],[225,240],[235,250],[230,260],[225,270],[220,280],[230,280],[225,290],[220,300],
                    [215,310],[225,310],[220,320],[215,330],[210,340],
                ].map(([x,y], i) => (
                    <circle key={`sa${i}`} cx={x} cy={y} r="3" />
                ))}
                {/* Europe */}
                {[
                    [450,70],[460,65],[470,70],[480,75],[465,80],[475,85],[455,85],[485,80],[460,95],[470,95],
                    [480,90],[490,85],[500,90],[475,100],[465,100],[485,100],
                ].map(([x,y], i) => (
                    <circle key={`eu${i}`} cx={x} cy={y} r="3" />
                ))}
                {/* Africa */}
                {[
                    [470,140],[480,145],[475,155],[485,155],[470,165],[480,165],[490,160],[475,175],[485,175],
                    [480,185],[475,195],[470,205],[480,205],[475,215],[470,225],[480,225],[475,235],
                ].map(([x,y], i) => (
                    <circle key={`af${i}`} cx={x} cy={y} r="3" />
                ))}
                {/* Asia */}
                {[
                    [550,60],[560,55],[570,60],[580,65],[590,70],[600,65],[610,70],[620,75],[630,80],
                    [560,75],[570,80],[580,80],[590,85],[600,85],[610,85],[620,90],
                    [570,95],[580,95],[590,100],[600,100],[610,100],[620,100],[630,100],
                    [580,110],[590,115],[600,115],[610,115],[620,110],[630,115],[640,110],
                    [600,130],[610,130],[620,130],[630,125],[640,125],[650,130],
                ].map(([x,y], i) => (
                    <circle key={`as${i}`} cx={x} cy={y} r="3" />
                ))}
                {/* Australia */}
                {[
                    [720,260],[730,260],[740,265],[750,270],[735,275],[745,275],[755,275],[740,285],[750,285],
                    [745,295],[755,295],[750,305],
                ].map(([x,y], i) => (
                    <circle key={`au${i}`} cx={x} cy={y} r="3" />
                ))}
                {/* Connection arcs (flight routes) */}
                <path d="M160 100 Q 300 20 460 80" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <path d="M480 90 Q 550 50 600 80" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                <path d="M600 100 Q 660 200 730 260" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
            </svg>
        </div>
    );
}

// Passport stamps scattered
export function PassportStamps({ className = '' }) {
    return (
        <div className={`absolute pointer-events-none ${className}`}>
            {/* Stamp 1 */}
            <div className="absolute top-[10%] right-[5%] w-24 h-24 border-2 border-orange-500/10 rounded-lg rotate-[-8deg] flex items-center justify-center">
                <span className="text-orange-500/10 font-black text-xs uppercase tracking-widest text-center">APPROVED<br/>VISA</span>
            </div>
            {/* Stamp 2 */}
            <div className="absolute bottom-[15%] left-[8%] w-20 h-20 border-2 border-orange-500/8 rounded-full rotate-[12deg] flex items-center justify-center">
                <span className="text-orange-500/8 font-black text-[8px] uppercase tracking-wider text-center">ENTRY<br/>PERMITTED</span>
            </div>
            {/* Stamp 3 */}
            <div className="absolute top-[40%] right-[15%] w-28 h-16 border-2 border-stone-300/10 rounded rotate-[-5deg] flex items-center justify-center">
                <span className="text-stone-400/10 font-black text-[10px] uppercase tracking-widest">IMMIGRATION</span>
            </div>
        </div>
    );
}
