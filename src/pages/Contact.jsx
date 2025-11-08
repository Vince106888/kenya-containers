import React from "react";
import HeroSection from "../components/HeroSection";
import ContactCard from "../components/ContactCard";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyUs from "../components/WhyUs";

export default function ContactPage() {
  const heroBg = "/images/container-yard.jpg"; // Replace with your hero image
  const mapUrl = "https://www.google.com/maps/embed?pb=...your-map-code...";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Let’s build your container solution together. Speak with our expert team today."
        bg={heroBg}
      />

      {/* Main Contact Section */}
      <section className="container mx-auto py-16 px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Card */}
          <ContactCard />

          {/* Right: Map */}
          <div className="rounded-xl shadow-xl overflow-hidden h-96 md:h-auto">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* WhyUs Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <WhyUs />
      </section>

      {/* Floating WhatsApp */}
      <WhatsAppButton phone="+254700000000" />
    </div>
  );
}
