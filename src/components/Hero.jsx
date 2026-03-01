import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import heroImage from '../assets/hero_avatar.png';
import resumeFile from '../assets/resume.pdf';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-inter text-white">
                        Hi, I'm <span className="text-luminex glow-text">Manuka</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-medium text-gray-300 h-[40px]">
                        <TypeAnimation
                            sequence={[
                                "I am a Software Developer",
                                1000,
                                "I am a Full Stack Developer",
                                1000,
                                "I am a Mobile Application Developer",
                                1000
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-lg text-gray-400 max-w-lg">
                        Building elegant, high-performance web and mobile applications with a focus on seamless user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button onClick={() => document.getElementById('works').scrollIntoView({ behavior: 'smooth' })}>
                            View My Work
                        </Button>
                        <a href={resumeFile} download="Manuka_Resume.pdf">
                            <Button outline>
                                Download CV
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                    transition={{
                        opacity: { duration: 0.8 },
                        scale: { duration: 0.8 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                        {/* Decorative glow behind image */}
                        <div className="absolute inset-0 bg-luminex rounded-full blur-[80px] opacity-40"></div>

                        <img
                            src={heroImage}
                            alt="Manuka Profile"
                            className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_0_40px_rgba(30,144,255,0.3)] glow-border"
                        />
                        {/* Tech accents */}
                        <div className="absolute -bottom-6 -left-6 border border-luminex/50 rounded-xl p-4 backdrop-blur-md bg-navy/60 hidden md:block z-20 shadow-lg glow-border">
                            <span className="text-luminex font-bold block text-xl">5+</span>
                            <span className="text-gray-300 text-sm">Years Experience</span>
                        </div>
                        <div className="absolute -top-6 -right-6 border border-luminex/50 rounded-xl p-4 backdrop-blur-md bg-navy/60 hidden md:block z-20 shadow-lg glow-border">
                            <span className="text-luminex font-bold block text-xl">100%</span>
                            <span className="text-gray-300 text-sm">Success Rate</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
