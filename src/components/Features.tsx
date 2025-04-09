"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  ShieldCheck,
  CalendarClock,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Online Consultations",
    description:
      "Speak to licensed doctors anytime, anywhere, right from your phone.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Records",
    description:
      "Access your medical history and records securely in the cloud.",
  },
  {
    icon: CalendarClock,
    title: "Appointment Scheduling",
    description:
      "Book visits easily and get reminders right when you need them.",
  },
  {
    icon: Smartphone,
    title: "Modern Interface",
    description: "A clean, mobile-first design made for patient convenience.",
  },
];

export default function Features() {
  return (
    <section id="features" className="...">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why Medon?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto"
        >
          A new kind of healthcare experience built around accessibility, speed,
          and simplicity.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white/50 border border-gray-200/40 shadow-md backdrop-blur-lg p-6 text-left hover:shadow-lg transition"
            >
              <div className="mb-4 text-primary">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
