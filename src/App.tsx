import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { BookingHero } from './components/BookingHero';
import { BookingForm } from './components/BookingForm';
import { AvailabilityInfo } from './components/AvailabilityInfo';
import { WhyBookWithUs } from './components/WhyBookWithUs';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { HomeContent } from './components/HomeContent';
import DeliveryPage from './components/DeliveryPage';
import { MenuPage } from './components/MenuPage';
import { AboutPage } from './components/AboutPage';

type Page = 'home' | 'menu' | 'delivery' | 'book' | 'about';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          {currentPage === 'home' && (
            <HomeContent onNavigate={navigate} />
          )}

          {currentPage === 'book' && (
            <div className="min-h-screen bg-black relative w-full overflow-x-hidden pt-28">
              <div className="relative z-10">
                <Navbar activePage="book" onNavigate={navigate} />
                <BookingHero />
                <BookingForm />
                <AvailabilityInfo />
                <WhyBookWithUs />
                <BookingCTA />
                <Footer />
              </div>
            </div>
          )}

          {currentPage === 'delivery' && (
            <DeliveryPage onNavigate={navigate} />
          )}

          {currentPage === 'menu' && (
            <MenuPage onNavigate={navigate} />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={navigate} />
          )}
        </>
      )}
    </>
  );
}
