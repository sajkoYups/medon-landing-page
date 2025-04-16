"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Medon</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Medon is a digital healthcare platform that bridges the gap between
            patients and clinics. From smart online consultations to managing
            appointments and profiles, we’re focused on making healthcare more
            accessible, connected, and patient-friendly.
          </p>
          <p className="mt-4 text-base text-gray-600">
            Designed mobile-first for a modern experience, Medon helps small
            clinics thrive and patients feel in control of their care.
          </p>
        </motion.div>

        {/* Image or graphic */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/doctor-using-app.jpg"
            alt="Illustration of healthcare app or doctor"
            width={480}
            height={320}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
