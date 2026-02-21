"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 opacity-40">
        <ThreeScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="font-mono text-accent text-sm tracking-widest mb-4">
            ✦ Challhuahuacho, Cotabambas — Perú
          </motion.p>

          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
            José
            <br />
            <span className="text-gradient">Huanaco</span>
          </motion.h1>

          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-accent" />
            <p className="font-mono text-sm text-muted tracking-wider uppercase">
              Economía <span className="text-accent">×</span> Tecnología
            </p>
          </motion.div>

          <motion.p variants={item} className="text-lg md:text-xl text-muted max-w-xl leading-relaxed mb-10">
            Estudiante de Economía en la{" "}
            <span className="text-text font-medium">UNSA</span> · Becario por Excelencia
            Académica · Constructor de soluciones digitales que nacen de
            <span className="text-accent"> problemas reales</span>.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="px-6 py-3 bg-accent text-bg font-semibold text-sm rounded hover:bg-accent-light transition-colors duration-200"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 border border-border text-text font-semibold text-sm rounded hover:border-accent hover:text-accent transition-all duration-200"
            >
              Contactar
            </a>
            <a
              href="https://github.com/JOSETRA44"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-muted text-sm hover:text-text transition-colors duration-200"
            >
              <Github size={16} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
