import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Hero } from "@/components/home/Hero";
import { IntroBand } from "@/components/home/IntroBand";
import { StorySection } from "@/components/home/StorySection";
import { StatsBar } from "@/components/home/StatsBar";
import { ServicesSplit } from "@/components/home/ServicesSplit";
import { ImageStrip } from "@/components/home/ImageStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Memberships } from "@/components/home/Memberships";
import { Testimonials } from "@/components/home/Testimonials";
import { ClosingCTA } from "@/components/home/ClosingCTA";

const Index = () => {
  useScrollReveal([]);
  return (
    <>
      <Hero />
      <IntroBand />
      <StorySection />
      <StatsBar />
      <ServicesSplit />
      <ImageStrip />
      <WhyChooseUs />
      <Memberships />
      <Testimonials />
      <ClosingCTA />
    </>
  );
};

export default Index;
