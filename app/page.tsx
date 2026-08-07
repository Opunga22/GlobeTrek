import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroStats from '../components/HeroStats';
import FeaturedDestinations from '../components/relief';
import CommunityPrograms from '../components/communityprograms';
import TravelStories from '../components/communityStories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HeroStats />
      <FeaturedDestinations />
      <CommunityPrograms />
      <Newsletter />
      <Footer />
    </main>
  );
}