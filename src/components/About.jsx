import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench } from 'lucide-react';

const skills = [
    {
        category: "Frontend",
        icon: <Code className="text-luminex w-8 h-8 mb-4" />,
        items: ["React", "React Native", "CSS3", "JavaScript (ES6+)"]
    },
    {
        category: "Backend",
        icon: <Server className="text-luminex w-8 h-8 mb-4" />,
        items: ["Node.js", "Express", "RESTful APIs"]
    },
    {
        category: "Database",
        icon: <Database className="text-luminex w-8 h-8 mb-4" />,
        items: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
        category: "Tools",
        icon: <Wrench className="text-luminex w-8 h-8 mb-4" />,
        items: ["Git", "Postman", "Vercel", "Docker"]
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-white glow-text mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-luminex mx-auto rounded-full shadow-[0_0_10px_rgba(30,144,255,0.8)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Bio section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white border-l-4 border-luminex pl-4">Professional Summary</h3>
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I am a passionate and dedicated Software Developer with expertise across the entire stack. From crafting pixel-perfect frontend interfaces to building robust backend architectures, I strive to deliver excellent software solutions.
                            </p>
                            <p>
                                My approach combines strong technical fundamentals with a keen eye for design, ensuring that the applications I build are both highly performant and incredibly intuitive. I thrive in environments where innovation is encouraged and complex problems need elegant solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.category}
                                whileHover={{ y: -5 }}
                                className="bg-navy-light/60 backdrop-blur-sm p-6 rounded-2xl border border-luminex/20 glow-border group transition-all"
                            >
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{skill.category}</h4>
                                <ul className="space-y-2">
                                    {skill.items.map(item => (
                                        <li key={item} className="text-gray-400 text-sm flex items-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-luminex mr-2 group-hover:shadow-[0_0_8px_rgba(30,144,255,1)]"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
