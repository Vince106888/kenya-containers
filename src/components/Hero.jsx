import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const images = [
  "/ai/containers-modern.jpg",
  "/ai/office-space.jpg",
  "/ai/luxury-container-home.jpg",
  "/ai/rooftop-cafe-container.webp",
  "/ai/industrial-yard.webp",
  "/ai/showroom-interior.jpg",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 200], [0, -40]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0.6]);

  const [current, setCurrent] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0 });
  const taglines = ["Speed", "Scale", "Sustainability", "Strength"];

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 6);
    }, 7000);
    const taglineTimer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2800);

    let frame = 0;
    const duration = 180;
    const animateCounters = () => {
      frame++;
      setCounters({
        years: Math.min(10, (frame / duration) * 10),
        projects: Math.min(500, (frame / duration) * 500),
        clients: Math.min(50, (frame / duration) * 50),
      });
      if (frame < duration) requestAnimationFrame(animateCounters);
    };
    animateCounters();

    return () => {
      clearInterval(imageTimer);
      clearInterval(taglineTimer);
    };
  }, []);

  return (
    <section className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-black font-sans">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Kenya Containers Showcase"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-slate-900/90 dark:to-slate-950/90" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* ===== 3D CONTAINER ===== */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 1.5, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1.1} />
          <mesh rotation={[0.4, 0.5, 0]}>
            <boxGeometry args={[2.5, 1.2, 1.2]} />
            <meshStandardMaterial
              color="#fbbf24"
              metalness={0.7}
              roughness={0.3}
              emissive="#f59e0b"
              emissiveIntensity={0.25}
            />
          </mesh>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.3} />
        </Canvas>
      </div>

      {/* ===== MAIN HEADING ===== */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-3xl mt-0 md:mt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        {/* === Cinematic Brand === */}
        <motion.div
          style={{ y: yOffset, opacity }}
          className="flex flex-col items-center mb-6 select-none"
        >
          <span className="text-3xl md:text-5xl font-extrabold tracking-[0.15em] uppercase bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,200,120,0.35)]">
            Kenya Containers
          </span>
          <motion.div
            className="mt-2 w-32 md:w-40 h-[3px] bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full shadow-lg shadow-amber-500/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,180,80,0.4)]">
            Transforming Containers
          </span>
          <br />
          <span className="text-white dark:text-gray-100">into Smart Spaces</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed font-medium">
          We deliver <span className="text-amber-400 font-semibold">modern, scalable</span>{" "}
          modular solutions that drive business growth across Africa — built with precision,
          purpose, and passion.
        </p>

        <div className="flex justify-center gap-5 font-display">
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg shadow-amber-500/30 transition"
          >
            Explore Projects →
          </motion.a>
          <motion.a
            href="/quote"
            whileHover={{ scale: 1.05, y: -2 }}
            className="border border-white/40 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Request a Quote
          </motion.a>
        </div>
      </motion.div>

      {/* ===== TRUST STATS ===== */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-5xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: "Years of Excellence", value: counters.years.toFixed(0) + "+" },
            { label: "Projects Delivered", value: counters.projects.toFixed(0) + "+" },
            { label: "Corporate Clients", value: counters.clients.toFixed(0) + "+" },
            { label: "ISO Certified", value: "✔️" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-4 border border-white/10 shadow-md hover:border-amber-400/60 transition-all duration-300 w-[140px] md:w-[160px]"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-amber-400 font-display mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== TAGLINES (BOTTOM LEFT) ===== */}
      <motion.div
        className="absolute bottom-20 left-12 z-40 text-amber-400 text-xl md:text-2xl font-semibold font-display"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={taglines[taglineIndex]}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {taglines[taglineIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* ===== AMBIENT GLOW ===== */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[25%] bg-gradient-to-t from-amber-500/40 to-transparent blur-3xl opacity-50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
