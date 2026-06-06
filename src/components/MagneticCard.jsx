import React from 'react';

export default function MagneticCard({ children, className = '', intensity = 8 }) {
    return (
        <div className={`relative transition-transform duration-300 hover:-translate-y-1 ${className}`}>
            {children}
        </div>
    );
}
