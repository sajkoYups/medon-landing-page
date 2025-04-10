"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlayCircle, X } from "lucide-react";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 sm:py-28">
      {/* Background gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 opacity-90 z-0" />

      {/* Optional blurred shape */}
      <motion.div
        className="absolute -top-16 -right-16 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Ready to experience smarter healthcare?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Join Medon today and take the first step toward a seamless,
          patient-first journey.
        </p>

        <div className="mt-8">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <PlayCircle className="w-5 h-5" />
            Watch Demo Video
          </button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.loom.com/embed/76213e72fb514a68a8da0ac0ce5122e3"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 rounded-full p-1 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
