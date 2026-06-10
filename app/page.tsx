import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/relief';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import TravelStories from '../components/TravelStories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CommunityPrograms from '../components/communityprograms';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <CommunityPrograms />
      <TravelStories />
      <Newsletter />
      <Footer />
    </main>
  );
}