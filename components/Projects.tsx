"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WifiOff, Mic, ExternalLink, ArrowRight, Users, Zap } from "lucide-react";

const projects = [
  {
    id: "UNSAP",
    title: "UNSAP",
    role: "Líder de Proyecto & Frontend Dev",
    period: "Dic 2025 — Presente",
    icon: WifiOff,
    tag: "App Móvil Multiplataforma",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    headline: "Optimizando la experiencia estudiantil universitaria",
    description:
      "Aplicación móvil que centraliza el acceso a información curricular de la UNSA. El diferencial clave: funciona completamente offline, permitiendo el cálculo de notas sin conexión a internet.",
    features: [
      {
        icon: WifiOff,
        label: "Modo Offline",
        desc: "Cálculo de notas sin internet — adaptado a la realidad local.",
      },
      {
        icon: Users,
        label: "UX Universitaria",
        desc: "Diseño de interfaces para mejorar navegación académica.",
      },
      {
        icon: Zap,
        label: "Multiplataforma",
        desc: "Desarrollo activo para iOS y Android desde una sola base.",
      },
    ],
    status: { label: "En desarrollo activo", pulse: true },
    gradient: "from-emerald-500/5 via-transparent to-transparent",
  },
  {
    id: "KOLKI",
    title: "KOLKI",
    role: "Fundador & Desarrollador Ágil",
    period: "Abr 2025 — Presente",
    icon: Mic,
    tag: "Fintech Personal",
    tagColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    headline: "Automatización financiera personal por voz",
    description:
      "Solución para registrar gastos mediante comandos de voz. Traduce problemas económicos cotidianos en herramientas digitales funcionales con automatización de datos financieros.",
    features: [
      {
        icon: Mic,
        label: "Registro por Voz",
        desc: "Captura gastos en segundos con comando de voz natural.",
      },
      {
        icon: Zap,
        label: "Automatización",
        desc: "Sistematización automática de datos financieros personales.",
      },
      {
        icon: Users,
        label: "UX Prioritario",
        desc: "Facilidad de uso y rapidez como principios de diseño.",
      },
    ],
    status: { label: "Proyecto personal activo", pulse: true },
    gradient: "from-teal-500/5 via-transparent to-transparent",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proyectos" ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
            03 — Proyectos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Lo que estoy construyendo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative p-8 bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent-dim transition-all duration-300 group bg-gradient-to-br ${p.gradient}`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/3 rounded-full -translate-y-24 translate-x-24 group-hover:bg-accent/6 transition-colors duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-accent/10 rounded-lg border border-accent/20">
                      <p.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text tracking-tight">{p.title}</h3>
                      <p className="text-xs font-mono text-muted mt-0.5">{p.period}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>

                <p className="text-xs text-accent font-mono mb-3">{p.role}</p>

                <h4 className="text-lg font-semibold text-text mb-3">{p.headline}</h4>
                <p className="text-sm text-muted leading-relaxed mb-6">{p.description}</p>

                <div className="space-y-3 mb-6">
                  {p.features.map((f) => (
                    <div key={f.label} className="flex gap-3 p-3 bg-bg/50 rounded-lg border border-border/50">
                      <f.icon size={14} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-text">{f.label}</p>
                        <p className="text-xs text-muted mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    {p.status.pulse && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                      </span>
                    )}
                    <span className="text-xs text-muted font-mono">{p.status.label}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
