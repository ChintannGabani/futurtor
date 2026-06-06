import React from 'react';
import { Icon } from '@iconify/react';

export default function PlaneAnimation({ variant = 'default' }) {
    const tone = variant === 'dark' ? 'text-white' : 'text-orange-500';

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Large main airplane */}
            <div className="absolute right-[5%] sm:right-[8%] top-[8%] sm:top-[10%]" style={{ transform: 'rotate(-35deg)' }}>
                <Icon icon="mdi:airplane" width={200} height={200} className={`${tone}/20 hidden sm:block`} />
                <Icon icon="mdi:airplane" width={120} height={120} className={`${tone}/20 sm:hidden`} />
            </div>

            {/* Airplane glow */}
            <div className="absolute right-[8%] top-[12%] w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full bg-orange-500/15 blur-[100px]" />

            {/* Clouds */}
            <div className="absolute left-[5%] top-[15%] opacity-[0.08]">
                <Icon icon="mdi:cloud" width={110} height={110} className="text-white" />
            </div>
            <div className="absolute right-[20%] top-[60%] opacity-[0.07]">
                <Icon icon="mdi:cloud" width={84} height={84} className="text-white" />
            </div>
            <div className="absolute left-[40%] top-[75%] opacity-[0.06]">
                <Icon icon="mdi:cloud" width={68} height={68} className="text-white" />
            </div>

            {/* Student silhouette */}
            <div className="absolute left-[6%] bottom-[8%] opacity-[0.12] hidden md:block">
                <Icon icon="mdi:account-school" width={120} height={120} className={tone} />
            </div>

            {/* Graduation cap */}
            <div className="absolute right-[12%] bottom-[12%] opacity-[0.12] hidden md:block">
                <Icon icon="mdi:school" width={110} height={110} className={tone} />
            </div>

            {/* Orbit graduation cap */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] hidden lg:block">
                <Icon icon="mdi:earth-arrow-right" width={420} height={420} className={tone} />
            </div>

            {/* Floating travel/study icons */}
            <div className="absolute left-[8%] bottom-[25%] opacity-[0.15]">
                <Icon icon="mdi:passport" width={42} height={42} className="text-white" />
            </div>
            <div className="absolute right-[30%] bottom-[15%] opacity-[0.12]">
                <Icon icon="mdi:earth" width={48} height={48} className="text-white" />
            </div>
            <div className="absolute left-[25%] top-[20%] opacity-[0.12]">
                <Icon icon="mdi:school-outline" width={36} height={36} className="text-white" />
            </div>
            <div className="absolute right-[15%] top-[50%] opacity-[0.1]">
                <Icon icon="mdi:file-document-outline" width={32} height={32} className="text-white" />
            </div>
            <div className="absolute left-[50%] top-[12%] opacity-[0.1]">
                <Icon icon="mdi:bag-suitcase-outline" width={34} height={34} className="text-white" />
            </div>
            <div className="absolute left-[18%] top-[55%] opacity-[0.1]">
                <Icon icon="mdi:certificate-outline" width={36} height={36} className="text-white" />
            </div>
            <div className="absolute right-[8%] bottom-[35%] opacity-[0.1]">
                <Icon icon="mdi:translate" width={32} height={32} className="text-white" />
            </div>
            <div className="absolute left-[60%] bottom-[40%] opacity-[0.1]">
                <Icon icon="mdi:book-open-page-variant" width={34} height={34} className="text-white" />
            </div>

            {/* Dashed flight path arc */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" fill="none">
                <path
                    d="M50 500 Q 250 100, 500 300 T 950 100"
                    stroke="rgba(249,115,22,0.18)"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                />
                <path
                    d="M100 550 Q 400 200, 700 400 T 980 200"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                />
                <g>
                    <circle cx="50" cy="500" r="5" fill="rgba(249,115,22,0.4)" />
                    <circle cx="500" cy="300" r="5" fill="rgba(249,115,22,0.4)" />
                    <circle cx="950" cy="100" r="5" fill="rgba(249,115,22,0.4)" />
                </g>
            </svg>
        </div>
    );
}
