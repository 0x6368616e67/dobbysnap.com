import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscribeForm from '@/components/Subscribe';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollAnimation from '@/utils/useScrollAnimation';

const Subscribe = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "DobbySnap | Subscribe";
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="h-24"></div>
      <SubscribeForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Subscribe;