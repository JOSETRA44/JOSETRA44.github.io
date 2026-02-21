"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Phone, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "josehuanacomunoz@gmail.com",
    href: "mailto:josehuanacomunoz@gmail.com",
    cta: "Enviar mensaje",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/JOSETRA44",
    href: "https://github.com/JOSETRA44",
    cta: "Ver proyectos",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 916 283 036",
    href: "tel:+51916283036",
    cta: "Llamar",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">
            04 — Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hablemos
          </h2>
          <p className="text-muted max-w-md leading-relaxed">
            Abierto a colaboraciones, proyectos académicos y oportunidades que
            conecten economía con tecnología.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 bg-surface border border-border rounded-xl hover:border-accent-dim transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-accent/10 rounded-lg border border-accent/20">
                  <l.icon size={16} className="text-accent" />
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
                />
              </div>
              <div>
                <p className="text-xs text-muted font-mono mb-1">{l.label}</p>
                <p className="text-sm text-text font-medium">{l.value}</p>
              </div>
              <span className="text-xs text-accent font-mono">{l.cta} →</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2 text-muted text-sm"
        >
          <MapPin size={14} className="text-accent" />
          <span>Challhuahuacho, Cotabambas, Apurímac — Perú</span>
        </motion.div>
      </div>
    </section>
  );
}
