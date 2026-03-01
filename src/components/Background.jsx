import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-navy overflow-hidden">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-90"></div>

            {/* Grid Pattern (Thin white lines) */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Asymmetric glowing abstract shapes */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-luminex blur-[150px] opacity-20 mix-blend-screen pointer-events-none"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1],
                    x: [0, -100, 0],
                    y: [0, 100, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900 blur-[200px] opacity-30 mix-blend-screen pointer-events-none"
            />
        </div>
    );
};

export default Background;
