import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import ProjectsPreview from "@/components/projects-preview";
import ClientsStrip from "@/components/clients-strip";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsPreview />
        <ClientsStrip />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
