import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import GovernanceTeam from "./components/GovernanceTeam";
import CompanyOverview from "./components/CompanyOverview";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <VisionMission />
      <Services />
      <AboutUs />
      <GovernanceTeam />
      <CompanyOverview />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
