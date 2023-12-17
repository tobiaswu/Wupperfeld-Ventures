import { Card } from '@/components/Card';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection
        title="Our Vision"
        description="At the core of our vision lies an insatiable drive to explore, learn, and absorb the richness of experiences. This relentless pursuit fuels our ability to develop and create extraordinary contributions for humanity.
Committed to quality and precision, we infuse simplicity and structure into every project we undertake.
Our profound inspirations emanate from the realms of health, nature, technology—where our fascination with AI, blockchain, and the future of mobility thrives—and the vast mysteries of the universe."
        imgURL="/wv_vision.webp"
      />
      <HeroSection
        title="Our Mission"
        description="At the intersection of entrepreneurship and a global mindset, our mission is to build and oversee a diverse portfolio of startups.
We leverage a unique combination of engineering and economics to identify and invest in the right people and ideas.
Constantly seeking adventures and traversing continents, we immerse ourselves in diverse cultures, languages, world economics, and global relations."
        imgURL="/wv_mission.webp"
      />

      <div className="min-h-screen px-4">
        <h2 className="text-5xl text-center pb-24">
          Our Portfolio of Startups
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            title="React Developer as a Service"
            description="A productized service providing React development and consulting services with a fixed price and scope to businesses."
            imgURL="/rdaas_illustration.webp"
            link="https://tobiaswupperfeld.com"
          />
          <Card
            title="AIAA"
            description="A portal about automation and digitalization for business. This is currently under development and coming soon."
            imgURL="/aiaa_illustration.webp"
          />
          <Card
            title="Volunteering App"
            description="A web application where users can find and book volunteering programs worldwide. This is currently under development and coming in the next months."
            imgURL="/va_illustration.webp"
          />
          <Card
            title="HikingCEO"
            description="A blog about life hacks for nature loving digital nomads. This is currently under development and coming soon."
            imgURL="/hc_illustration.webp"
          />
        </div>
      </div>
    </div>
  );
}
