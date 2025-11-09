import React from "react";
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import { Users, Building2, Link2 } from "lucide-react";

const heroBg = "/images/about-hero.jpg";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="About Us"
        subtitle="Let’s build your container solution together. Speak with our expert team today."
        bg={heroBg}
      />

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Our Mission</h3>
            <p>
              To deliver high-quality, customizable container solutions that empower businesses,
              organizations, and individuals across Africa to build sustainably, flexibly, and affordably.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-orange-700">Our Vision</h3>
            <p>
              To be Africa’s most trusted and innovative container solutions company, leading the way in
              modular construction, logistics, and design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs />

      {/* Our Team */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "John Mwangi", role: "General Manager", img: "/images/team/john.jpg" },
              { name: "Sarah Otieno", role: "Operations Lead", img: "/images/team/sarah.jpg" },
              { name: "Kevin Kamau", role: "Head of Fabrication", img: "/images/team/kevin.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center justify-center gap-2">
          <Building2 className="w-6 h-6 text-orange-700" />
          Our Clients
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          We’re proud to have worked with leading organizations and enterprises across East Africa —
          delivering dependable, on-time, and customized container projects.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {["Safaricom", "UNICEF", "KenGen", "Red Cross", "Kenya Power"].map((client, i) => (
            <div key={i} className="text-gray-700 font-medium bg-white border rounded-xl px-6 py-3 shadow-sm">
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center justify-center gap-2">
            <Link2 className="w-6 h-6 text-orange-700" />
            Our Partners
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            We collaborate with trusted industry partners to bring you innovative, efficient, and
            eco-friendly container solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {["Maersk", "Bamburi Cement", "Basco Paints", "Mabati Rolling Mills"].map((partner, i) => (
              <div key={i} className="text-gray-700 font-medium bg-white border rounded-xl px-6 py-3 shadow-sm">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
