import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Button from './Button';

// Mock images (using a generic geometric placeholder since we only generated the hero)
const getPlaceholder = (color1, color2) => `https://placehold.co/600x400/${color1}/${color2}?text=Project+Preview`;

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured modern e-commerce solution with high-performance product browsing, secure payment gateways, and a full admin dashboard.",
        image: getPlaceholder("0B1C2D", "1E90FF"),
        tags: ["React", "Node.js", "MongoDB", "Redux"],
        live: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task tracking tool built for productivity, featuring real-time updates and an intuitive drag-and-drop interface.",
        image: getPlaceholder("0B1C2D", "3498DB"),
        tags: ["Next.js", "TailwindCSS", "Firebase"],
        live: "#",
        github: "#"
    },
    {
        id: 3,
        title: "AI Chat Application",
        description: "A real-time AI-powered chat platform with contextual memory, elegant UI, and robust user authentication systems.",
        image: getPlaceholder("152C46", "1E90FF"),
        tags: ["React Native", "Express", "Socket.io"],
        live: "#",
        github: "#"
    }
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
