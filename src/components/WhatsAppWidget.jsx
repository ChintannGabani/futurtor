import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
    const widgetRef = useRef(null);
    const buttonRef = useRef(null);
    const whatsappNumber = '9824939425';
    const whatsappURL = `https://wa.me/${whatsappNumber}`;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial entrance animation
            gsap.fromTo(
                widgetRef.current,
                { scale: 0, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: 'back.out(1.7)' }
            );

            // Pulsing animation for attention
            gsap.to(buttonRef.current, {
                boxShadow: '0 0 25px rgba(34, 197, 94, 0.6), 0 0 50px rgba(34, 197, 94, 0.3)',
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={widgetRef} className="fixed bottom-6 right-6 z-40">
            <a
                ref={buttonRef}
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-green-300/20"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Backdrop blur counter */}
                <div className="absolute inset-0 rounded-full opacity-0" />

                {/* Icon - WhatsApp */}
                <FaWhatsapp size={28} className="text-white relative z-10 group-hover:scale-125 transition-transform duration-300" />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-300 to-green-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg pointer-events-none" />
            </a>
        </div>
    );
}
