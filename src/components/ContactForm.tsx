// src/components/ContactForm.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-50 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Book a Call With Our Team
        </h2>
        <p className="text-gray-600 mb-10">
          Let’s talk about how Medon can help your clinic or hospital.
        </p>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                className="block mb-1 text-sm font-medium"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label
                className="block mb-1 text-sm font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="company">
              Company / Hospital Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
