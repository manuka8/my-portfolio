import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Button from './Button';
import project1 from '../assets/project1-traveland.png';
import project2 from '../assets/project2-primecrust.png';
import project3 from '../assets/project3-kiylo.jpg';

import project4 from '../assets/project4-artify.jpg';
import project5 from '../assets/Home.png';
import project6 from '../assets/project6-CashCompass.png';

// Mock images (using a generic geometric placeholder since we only generated the hero)
const getPlaceholder = (color1, color2) => `https://placehold.co/600x400/${color1}/${color2}?text=Project+Preview`;

const projects = [
    {
        id: 1,
        title: "TraveLand",
        description: "A modern React-based travel website featuring tour packages, car rental services, destination browsing, and responsive UI design.",
        image: project1,
        tags: ["React", "Node.js", "MongoDB"],
        live: "#",
        github: "#"
    },
    {
        id: 2,
        title: "PrimeCrust",
        description: "A full-stack food ordering website with online menu management, order processing, and secure backend integration using SQL database.",
        image: project2,
        tags: ["React", "Node.js", "SQL"],
        live: "https://prime-crust.vercel.app/",
        github: "https://github.com/manuka8/PrimeCrust"
    },
    {
        id: 3,
        title: "Kiylo",
        description: "A mobile-based e-commerce application built with React Native, featuring product management, cart system, authentication, and SQL-powered backend.",
        image: project3,
        tags: ["React Native", "Node.js", "SQL"],
        live: "https://github.com/manuka8/Kiylo",
        github: "https://github.com/manuka8/Kiylo"
    },
    {
        id: 4,
        title: "Artify",
        description: "An artwork selling and auction mobile application allowing artists to showcase, sell, and auction creative works with secure bidding functionality.",
        image: project4,
        tags: ["React Native", "Node.js", "MongoDB"],
        live: "https://github.com/manuka8/The-Arty",
        github: "https://github.com/manuka8/The-Arty"
    },
    {
        id: 5,
        title: "StockFlow",
        description: "An inventory and stock management system designed to track products, manage stock levels, and generate reports efficiently for businesses.",
        image: project5,
        tags: ["React", "Node.js", "SQL"],
        live: "https://smartstore.lk/",
        github: "https://github.com/manuka8/SmartStock"
    },
    {
        id: 6,
        title: "CashCompass",
        description: "Cash Compass is a smart expense tracking app that helps users manage income, expenses, and budgets while providing clear financial insights through analytics and reports.",
        image: project6,
        tags: ["React Native", "Expo", "SuperBase"],
        live: "https://expo.dev/artifacts/eas/cxCnPvUwwtGJpw2AjnzHEb.apk",
        github: "https://github.com/manuka8/CashCompass"
    },
    {
        id: 7,
        title: "SmartApproval",
        description: "A workflow automation system for recommendation letter approval, streamlining university processes with digital request tracking and approval management.",
        image: getPlaceholder("112240", "5AB0FF"),
        tags: ["React", "Node.js", "MongoDB"],
        live: "https://github.com/manuka8/Workflow-Automation-for-Recommendation-Letter-Approval-for-a-University",
        github: "https://github.com/manuka8/Workflow-Automation-for-Recommendation-Letter-Approval-for-a-University"
    },
    
];

const Projects = () => {
    return (
        <section id="works" className="py-24 relative z-10 w-full bg-navy/40 backdrop-blur-sm border-y border-luminex/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-white glow-text mb-4">My Works</h2>
                    <div className="w-20 h-1 bg-luminex mx-auto rounded-full shadow-[0_0_10px_rgba(30,144,255,0.8)]"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        A selection of my recent projects. Some built for clients, others for exploring new technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-navy-light/80 rounded-2xl overflow-hidden border border-luminex/20 glow-border group flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-luminex/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-luminex transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-400 mb-6 text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-navy border border-luminex/30 text-gray-300 hover:border-luminex hover:text-white transition-colors duration-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-auto">
                                    <a href={project.github} className="flex items-center text-gray-400 hover:text-white transition-colors">
                                        <Github size={20} className="mr-2" />
                                        <span className="text-sm font-medium">Source</span>
                                    </a>
                                    <a href={project.live} className="flex items-center text-luminex hover:glow-text transition-all">
                                        <span className="text-sm font-medium mr-2">Live Demo</span>
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button outline>View All Projects</Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
