import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message formulation ready. Connecting to backend is required to send.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 relative z-10 w-full bg-navy/40 backdrop-blur-sm border-t border-luminex/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-white glow-text mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-luminex mx-auto rounded-full shadow-[0_0_10px_rgba(30,144,255,0.8)]"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="bg-navy-light/80 p-8 rounded-2xl border border-luminex/20 glow-border">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start text-gray-300">
                                    <div className="bg-navy p-3 rounded-full border border-luminex/30 mr-4 text-luminex">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Email</p>
                                        <p className="text-sm">manukamayurajith2001@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start text-gray-300">
                                    <div className="bg-navy p-3 rounded-full border border-luminex/30 mr-4 text-luminex">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Location</p>
                                        <p className="text-sm">No.19/1,Enderamulla Road,Ambalangoda</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3 bg-navy-light/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-gray-300 font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-navy border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luminex focus:shadow-[0_0_10px_rgba(30,144,255,0.3)] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-300 font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-navy border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luminex focus:shadow-[0_0_10px_rgba(30,144,255,0.3)] transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-gray-300 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-navy border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-luminex focus:shadow-[0_0_10px_rgba(30,144,255,0.3)] transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 bg-luminex text-navy font-semibold rounded-lg shadow-md glow-border hover:bg-blue-400 hover:text-white transition-all transform hover:scale-[1.02] flex items-center justify-center font-inter"
                            >
                                Send Message
                                <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
