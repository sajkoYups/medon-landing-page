// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <section className="pb-12 sm:pb-16 md:pb-0">
        <Hero />
      </section>

      <section
        id="features"
        className="scroll-mt-20 sm:scroll-mt-24 pt-8 sm:pt-12 md:pt-16 pb-24 bg-gray-50"
      >
        <Features />
      </section>

      <section id="about" className="scroll-mt-24 py-24 bg-gray-50">
        <About />
      </section>

      <section id="testimonials" className="scroll-mt-24 py-24 bg-gray-50">
        <Testimonials />
      </section>

      <section id="cta" className="scroll-mt-24 py-24 bg-gray-50">
        <CTA />
      </section>

      <Footer />
    </>
  );
}
