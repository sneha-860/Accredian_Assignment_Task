import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Clients } from "@/components/sections/Clients";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { Programs } from "@/components/sections/Programs";
import { Process } from "@/components/sections/Process";
import { Delivery } from "@/components/sections/Delivery";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <Programs />
      <Process />
      <Delivery />

      <Testimonials />

      <FAQ />
      <LeadCaptureForm />
    </>
  );
}
