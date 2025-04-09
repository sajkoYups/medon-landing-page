// src/components/CallToAction.tsx
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="...">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to experience smarter healthcare?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Join Medon today and take the first step toward a seamless,
          patient-first journey.
        </p>
        <div className="mt-8">
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </motion.div>
    </section>
  );
}
