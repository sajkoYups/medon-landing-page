// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative bg-gradient-to-b from-white to-gray-100 text-gray-900 px-4 sm:px-6 pt-16 sm:pt-20 md:pt-28 pb-12 md:pb-24 overflow-hidden"
      >
        <Hero />
      </section>

      <section
        id="features"
        className="scroll-mt-24 pt-12 md:pt-16 pb-24 bg-gray-50"
      >
        <Features />
      </section>

      <section
        id="about"
        className="bg-white pt-24 pb-16 md:pb-24 px-6 text-gray-900"
      >
        <About />
      </section>

      <section id="testimonials" className="scroll-mt-24 py-24 bg-gray-50">
        <Testimonials />
      </section>

      <section
        id="cta"
        className="relative overflow-hidden px-6 py-24 sm:py-28 bg-white"
      >
        <CTA />
      </section>
      <section id="contact" className="bg-white">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
