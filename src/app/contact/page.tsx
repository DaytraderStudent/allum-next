import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import InquiryForm from "@/components/inquiry-form";

export const metadata = {
  title: "Contact — Allum Engineering",
  description: "Get in touch with Allum Engineering. Project inquiries, partnership opportunities and general contact.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
