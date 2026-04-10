import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Markets from "@/components/markets";
import Products from "@/components/products";
import News from "@/components/news";
import InquiryForm from "@/components/inquiry-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Markets />
        <Products />
        <News />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
