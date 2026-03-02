import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-light py-8 relative z-10 border-t border-luminex/20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-transparent">
                <div className="text-white text-lg font-bold mb-4 md:mb-0 glow-text">
                    Manuka<span className="text-luminex">.</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                    Built with React & ❤️
                </p>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/manuka-mayurajith/" className="text-gray-400 hover:text-luminex hover:glow-text transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/manuka8" className="text-gray-400 hover:text-luminex hover:glow-text transition-all">
                        <Github size={20} />
                    </a>
                    <a href="manukamayurajith2001@gmail.com" className="text-gray-400 hover:text-luminex hover:glow-text transition-all">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
