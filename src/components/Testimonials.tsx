"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Elena Petrova",
    role: "Clinic Partner",
    quote:
      "Medon has completely transformed how we interact with patients. It’s seamless and intuitive.",
  },
  {
    name: "Marko Ivanovski",
    role: "Patient",
    quote:
      "Booking appointments and chatting with my doctor has never been this easy. I feel truly connected.",
  },
  {
    name: "Ana Ristovska",
    role: "Health Administrator",
    quote:
      "Our clinic's workflow has improved drastically thanks to Medon’s modern tools.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="...">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Clinics and Patients
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Hear what people are saying about their Medon experience.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-xl rounded-xl p-6 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
