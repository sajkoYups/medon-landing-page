// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="...">
      {/* Gradient Background Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] z-0"></div>

      {/* Animated Background Mesh Shape */}
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-200/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Healthcare. Smarter. Together.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Medon connects patients and clinics through modern, mobile-first
            digital experiences.
          </p>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Image with Creative Framing */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[500px] rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-primary/10">
            <img
              src="/images/hero-doctor.jpg"
              alt="Doctor using smartphone"
              className="w-full h-auto object-cover rounded-[2.5rem] scale-105 hover:scale-110 transition-transform duration-700"
            />
            {/* Glow overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-primary/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
