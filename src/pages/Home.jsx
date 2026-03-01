import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Background from '../components/Background';

const Home = () => {
    return (
        <div className="relative min-h-screen font-inter overflow-hidden">
            {/* Global Background */}
            <Background />

            <Navbar />

            <main className="relative z-10 flex flex-col items-center w-full">
                <Hero />
                <About />
                <Projects />
                <Services />
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
