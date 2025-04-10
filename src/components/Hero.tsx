"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-white to-gray-100 text-gray-900 px-4 sm:px-6 py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Background Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] z-0"></div>

      {/* Mesh Shape Animation */}
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-purple-200/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12">
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Healthcare. Smarter. Together.
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700">
            Medon connects patients and clinics through modern, mobile-first
            digital experiences.
          </p>
          <div className="mt-6 sm:mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] rounded-[1.5rem] shadow-xl overflow-hidden border-4 border-primary/10">
            <img
              src="/images/hero-doctor.jpg"
              alt="Doctor using smartphone"
              className="w-full h-auto object-cover rounded-[1.5rem] scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-primary/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
