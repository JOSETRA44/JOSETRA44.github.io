"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Code2, Globe } from "lucide-react";

const categories = [
  {
    icon: Database,
    title: "Gestión de Datos",
    color: "from-emerald-500/10 to-transparent",
    skills: [
      { name: "Excel", level: 65, note: "Intermedio" },
      { name: "Lógica de Programación", level: 72, note: "Sólida" },
      { name: "Sistematización", level: 80, note: "Aplicada" },
      { name: "Python", level: 45, note: "En curso" },
    ],
  },
  {
    icon: Code2,
    title: "Desarrollo Digital",
    color: "from-teal-500/10 to-transparent",
    skills: [
      { name: "Resolución con IA", level: 78, note: "Aplicado" },
      { name: "Prototipado UI", level: 70, note: "Activo" },
      { name: "Dev. Frontend", level: 60, note: "Creciente" },
      { name: "Diseño de Interfaces", level: 68, note: "Proyectos reales" },
    ],
  },
  {
    icon: Globe,
    title: "Idiomas",
    color: "from-green-500/10 to-transparent",
    skills: [
      { name: "Quechua", level: 100, note: "Nativo — diferencial" },
      { name: "Español", level: 100, note: "Nativo" },
      { name: "Inglés", level: 25, note: "A2 — Básico" },
    ],
  },
];

function SkillBar({ name, level, note, delay }: { name: string; level: number; note: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-text">{name}</span>
        <span className="text-xs text-muted font-mono">{note}</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="habilidades" ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
            02 — Habilidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Mis capacidades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className={`p-6 md:p-8 bg-surface border border-border rounded-xl bg-gradient-to-b ${cat.color} hover:border-accent-dim transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-8">
                <cat.icon size={18} className="text-accent" />
                <h3 className="font-semibold text-text">{cat.title}</h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    {...s}
                    delay={ci * 0.15 + si * 0.08}
                  />
                ))}
              </div>

              {cat.title === "Idiomas" && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-xs text-accent font-mono">
                      Quechua nativo — factor diferencial
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
