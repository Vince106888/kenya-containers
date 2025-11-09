import React from "react";
import HeroSection from "../components/HeroSection";
import ContactCard from "../components/ContactCard";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyUs from "../components/WhyUs";
import { motion } from "framer-motion";

export default function ContactPage() {
  const heroBg = "/images/container-yard.jpg"; // Replace with your hero image
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.863073909676!2d36.84523647496414!3d-1.317947598656416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f115d9c4dbb0b%3A0xd8efadf7e46df1a8!2sGK%20Building%2C%20Lunga%20Lunga%20Rd!5e0!3m2!1sen!2ske!4v1691234567890!5m2!1sen!2ske";

  return (
    <div className="w-full bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Let’s build your container solution together. Speak with our expert team today."
        bg={heroBg}
      />

      {/* Contact Info + Map */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          {/* Left: Contact Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-800">
            <ContactCard />
          </div>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
            <iframe
              src={mapUrl}
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="Kenya Containers Location"
              className="border-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <WhyUs />
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton phone="+254706872269" />
    </div>
  );
}
