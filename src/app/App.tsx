import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { CourseProgram } from './components/CourseProgram';
import { WhySpecial } from './components/WhySpecial';
import { Requirements } from './components/Requirements';
import { Pricing } from './components/Pricing';
import { EnrollCTA } from './components/EnrollCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TargetAudience />
      <CourseProgram />
      <WhySpecial />
      <Requirements />
      <Pricing />
      <EnrollCTA />
      <Footer />
    </div>
  );
}