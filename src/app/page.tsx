import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Framework from "@/components/Framework";
import DomainExpertise from "@/components/DomainExpertise";
import Programs from "@/components/Programs";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoCanJoin from "@/components/WhoCanJoin";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import KeyAspects from "@/components/KeyAspects";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Framework />
        <DomainExpertise />
        <Programs />
        <CourseSegmentation />
        <WhoCanJoin />
        <Process />
        <WhyUs />
        <KeyAspects />
        <Partners />
        <Testimonials />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
