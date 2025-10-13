import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedProjects from "./components/FeaturedProjects";
import OngoingProjects from "./components/OngoingProjects";
import OurClients from "./components/OurClients";
import MeetOurVisionaries from "./components/MeetOurVisionaries";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <OngoingProjects />
      <OurClients />
      <MeetOurVisionaries />
      <CTASection />
    </main>
  );
}
