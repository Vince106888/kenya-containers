import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import PortfolioGrid from "../components/PortfolioGrid";
import Testimonials from "../components/Testimonials";
import QuoteForm from "../components/QuoteForm";
import ContainerSizeSlider from "../components/ContainerSizeSlider";
import WhatsAppButton from "../components/WhatsAppButton";
import { Sun, Moon } from "lucide-react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import PortfolioSection from "../components/PortfolioSection";

// ====== Static Data ======
const services = [
  { title: "Container Homes", desc: "Turnkey 20ft/40ft modern homes with premium interiors.", slug: "container-homes" },
  { title: "Office & Commercial", desc: "Smart modular offices, pop-up shops, and workstations.", slug: "office-commercial" },
  { title: "Transport & Crane", desc: "Nationwide delivery, installation, and heavy-lift logistics.", slug: "transport-crane" },
  { title: "Ablution Blocks & Parks", desc: "Eco-friendly sanitation and recreational container parks.", slug: "ablution-parks" },
  { title: "Custom Fabrication", desc: "Tailored builds — from clinics to classrooms.", slug: "custom-fabrication" },
];

const processSteps = [
  { title: "Design & Fabrication", desc: "We create custom 3D designs and precision fabrication in our workshop." },
  { title: "Transport & Delivery", desc: "Nationwide delivery and crane installation — on time and on budget." },
  { title: "Installation & Support", desc: "We handle finishing, electrical, plumbing, and offer post-install support." },
];

const portfolioItems = [
  { title: "20ft Home — Nairobi", caption: "Luxury private residence", image: "/photos/portfolio1.jpg" },
  { title: "Office Pod — Mombasa", caption: "Seaside modular workspace", image: "/photos/portfolio2.jpg" },
  { title: "Container Park — Nakuru", caption: "Community event park", image: "/photos/portfolio3.jpg" },
];

// ====== Main Component ======
export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-700 
      ${theme === "dark"
        ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white"
        : "bg-gradient-to-b from-white via-gray-100 to-gray-200 text-slate-900"}`}
    >
      {/* ===== THEME TOGGLE ===== */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full p-3 shadow-lg hover:scale-110 transition"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== ABOUT ===== */}
      <AboutSection />

      {/* ===== SERVICES ===== */}
      <ServicesSection services={services} />

      {/* ===== WHY US ===== */}
      <WhyUs />

      {/* ===== CONTAINER SIZE ===== */}
      <ContainerSizeSlider />

      {/* ===== PROCESS ===== */}
      <ProcessSection steps={processSteps} />

      {/* ===== PORTFOLIO ===== */}
      <PortfolioSection items={portfolioItems} />

      {/* ===== TESTIMONIALS ===== */}
      <SectionFade>
        <Testimonials />
      </SectionFade>

      {/* ===== FLOATING WHATSAPP ===== */}
      <WhatsAppButton phone="+254700000000" />
    </main>
  );
}

// ====== Shared Section Wrapper ======
const SectionFade = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="py-10 sm:py-14 lg:py-16 container mx-auto px-4 sm:px-6 lg:px-12"
  >
    {children}
  </motion.section>
);


