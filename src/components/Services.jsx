import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, Layers } from 'lucide-react';

const services = [
    {
        title: "Web Development",
        description: "Building responsive, performant, and accessible web applications using modern technologies.",
        icon: <Monitor className="w-10 h-10 text-luminex mb-6" />
    },
    {
        title: "Full Stack Development",
        description: "End-to-end solutions, encompassing both frontend design and robust backend infrastructure.",
        icon: <Layers className="w-10 h-10 text-luminex mb-6" />
    },
    {
        title: "Mobile App Development",
        description: "Creating cross-platform mobile applications with native-like performance and feel.",
        icon: <Smartphone className="w-10 h-10 text-luminex mb-6" />
    },
    {
        title: "API Development",
        description: "Designing and developing scalable, secure RESTful and GraphQL APIs for seamless integration.",
        icon: <Server className="w-10 h-10 text-luminex mb-6" />
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-white glow-text mb-4">My Services</h2>
                    <div className="w-20 h-1 bg-luminex mx-auto rounded-full shadow-[0_0_10px_rgba(30,144,255,0.8)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-navy-light/40 border border-gray-800 p-8 rounded-2xl hover:border-luminex/50 hover:bg-navy-light hover:-translate-y-2 transition-all duration-300 glow-border group"
                        >
                            <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-luminex transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
