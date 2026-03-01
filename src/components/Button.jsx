import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, outline = false, onClick, className = '' }) => {
    const baseClasses = "px-8 py-3 rounded-md font-semibold font-inter transition-all duration-300 transform shadow-md glow-border w-full sm:w-auto";
    const variants = outline
        ? "bg-transparent text-luminex border-luminex hover:bg-luminex/10 hover:text-white"
        : "bg-luminex text-navy hover:bg-blue-400 hover:text-white";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseClasses} ${variants} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
