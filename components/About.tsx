"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Star, Cpu } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "UNSA", sub: "Economía · 2do Semestre" },
  { icon: Star, label: "Becario", sub: "Excelencia Académica" },
  { icon: MapPin, label: "Challhuahuacho", sub: "Cotabambas, Apurímac" },
  { icon: Cpu, label: "2 Proyectos", sub: "Activos en desarrollo" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre-mi" ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
              01 — Sobre mí
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Donde la economía
              <br />
              <span className="text-gradient">encuentra la tecnología</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Soy José, estudiante de Economía en el Tercio Superior de la{" "}
                <span className="text-text">UNSA Arequipa</span>. Mi origen en
                Challhuahuacho me enseñó que la tecnología tiene que adaptarse
                a las personas, no al revés.
              </p>
              <p>
                Combino formación económica con desarrollo de software para construir
                soluciones que resuelven{" "}
                <span className="text-accent font-medium">problemas cotidianos reales</span>.
                Me especializo en prototipar rápido y en hacer que la tecnología
                funcione incluso sin conexión a internet.
              </p>
              <p>
                Hablo <span className="text-text font-medium">Quechua nativo</span>,
                lo que me da una perspectiva única para diseñar productos inclusivos
                para comunidades andinas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-surface border border-border rounded-lg hover:border-accent-dim transition-colors duration-300 group"
              >
                <s.icon
                  size={20}
                  className="text-accent mb-3 group-hover:scale-110 transition-transform duration-200"
                />
                <p className="text-text font-semibold text-sm">{s.label}</p>
                <p className="text-muted text-xs mt-1">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
