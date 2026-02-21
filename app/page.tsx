import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted text-sm font-mono">
          © 2025 José Gabriel Huanaco Muñoz —{" "}
          <span className="text-accent">Challhuahuacho, Perú</span>
        </p>
      </footer>
    </main>
  );
}
