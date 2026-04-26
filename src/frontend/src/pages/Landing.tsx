import { HeroSection } from "../components/HeroSection";
import { IoTSection } from "../components/IoTSection";
import { Layout } from "../components/Layout";
import { MetricsSection } from "../components/MetricsSection";
import { MultilingualSection } from "../components/MultilingualSection";
import { PartnersSection } from "../components/PartnersSection";

export default function Landing() {
  return (
    <Layout>
      <HeroSection />
      <IoTSection />
      <MultilingualSection />
      <MetricsSection />
      <PartnersSection />
    </Layout>
  );
}
