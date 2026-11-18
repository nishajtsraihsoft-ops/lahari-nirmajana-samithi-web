import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import AntiDrugPledgeModal from './components/AntiDrugPledgeModal';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Leadership from './pages/Leadership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-themeBlue selection:text-white w-full max-w-full overflow-x-clip">
      <ScrollToTop />

      {/* Navigation */}
      <Navbar
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
        onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onOpenJoinModal={() => setIsJoinModalOpen(true)}
                onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <About 
                onOpenJoinModal={() => setIsJoinModalOpen(true)} 
              />
            } 
          />
          <Route 
            path="/activities" 
            element={
              <Activities 
                onOpenJoinModal={() => setIsJoinModalOpen(true)} 
              />
            } 
          />
          <Route 
            path="/leadership" 
            element={
              <Leadership 
                onOpenJoinModal={() => setIsJoinModalOpen(true)} 
              />
            } 
          />
          <Route 
            path="/gallery" 
            element={<Gallery />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
          {/* Fallback to Home */}
          <Route 
            path="*" 
            element={
              <Home 
                onOpenJoinModal={() => setIsJoinModalOpen(true)}
                onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
              />
            } 
          />
        </Routes>
      </main>

      {/* Global Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <AntiDrugPledgeModal
        isOpen={isPledgeModalOpen}
        onClose={() => setIsPledgeModalOpen(false)}
      />

      {/* Footer */}
      <Footer 
        onOpenJoinModal={() => setIsJoinModalOpen(true)} 
      />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
