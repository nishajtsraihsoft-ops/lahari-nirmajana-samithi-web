import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import TopLoadingBar from './components/TopLoadingBar';
import PageLoader from './components/PageLoader';
import InitialLoader from './components/InitialLoader';

// Code-split pages for faster initial load & smoother transitions
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Activities = lazy(() => import('./pages/Activities'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

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

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-themeBlue selection:text-white w-full max-w-full overflow-x-clip">
      {/* Initial Website Open Logo Splash Loader */}
      <InitialLoader />

      {/* Top Navigation Loading Indicator */}
      <TopLoadingBar />

      <ScrollToTop />

      {/* Navigation */}
      <Navbar
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main Content Area with Suspense Fallback */}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="animate-page-fade">
                  <Home 
                    onOpenJoinModal={() => setIsJoinModalOpen(true)}
                  />
                </div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <div className="animate-page-fade">
                  <About 
                    onOpenJoinModal={() => setIsJoinModalOpen(true)} 
                  />
                </div>
              } 
            />
            <Route 
              path="/activities" 
              element={
                <div className="animate-page-fade">
                  <Activities 
                    onOpenJoinModal={() => setIsJoinModalOpen(true)} 
                  />
                </div>
              } 
            />
            <Route 
              path="/leadership" 
              element={
                <div className="animate-page-fade">
                  <Leadership 
                    onOpenJoinModal={() => setIsJoinModalOpen(true)} 
                  />
                </div>
              } 
            />
            <Route 
              path="/gallery" 
              element={
                <div className="animate-page-fade">
                  <Gallery />
                </div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <div className="animate-page-fade">
                  <Contact />
                </div>
              } 
            />
            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={
                <div className="animate-page-fade">
                  <Home 
                    onOpenJoinModal={() => setIsJoinModalOpen(true)}
                  />
                </div>
              } 
            />
          </Routes>
        </Suspense>
      </main>

      {/* Global Join/Volunteer Modal (Connected to WhatsApp) */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
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