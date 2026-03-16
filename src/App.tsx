import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResultsPage from './pages/ResultsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StartProjectPage from './pages/StartProjectPage';

function AppShell() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="app-shell">
      <header className={`nav ${isMobileMenuOpen ? 'nav--open' : ''}`}>
        <div className="nav__inner">
          <div className="nav__brand">
            <div className="nav__logo-mark">HB</div>
            <div className="nav__logo-text">
              <span className="nav__logo-title">Virtual Digital Hub</span>
              <span className="nav__logo-sub">Digital Growth Studio</span>
            </div>
          </div>

          <button
            className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav__menu ${isMobileMenuOpen ? 'nav__menu--open' : ''}`}>
            <nav className="nav__links">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                About
              </NavLink>
              <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Services
              </NavLink>
              <NavLink to="/results" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Client Results
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
                Contact
              </NavLink>
            </nav>
            <div className="nav__cta">
              <NavLink to="/start-project" onClick={closeMenu} className="btn btn--ghost">
                Start Project
              </NavLink>
              <a href="https://wa.me/923705978907" target="_blank" rel="noreferrer" className="btn btn--primary">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="layout">
        <Suspense fallback={<div className="section">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/start-project" element={<StartProjectPage />} />
            <Route path="/portfolio" element={<Navigate to="/" replace />} />
            <Route path="/pricing" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span>© {new Date().getFullYear()} Virtual Digital Hub. All rights reserved.</span>
          <div className="footer__right">
            <a href="https://www.instagram.com/virtual_digital_hb?igsh=bTE5azdwbTV2Mmxj" target="_blank" rel="noreferrer" className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/virtual-digital-hub-2727b83b7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href="https://www.tiktok.com/@virtualdigitalhub" target="_blank" rel="noreferrer" className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path></svg>
              TikTok
            </a>
            <a href="#privacy" className="footer__link">
              Privacy
            </a>
            <a href="#terms" className="footer__link">
              Terms
            </a>
            <a href="mailto:hello@virtualdigitalhb.com" className="footer__link">
              hello@virtualdigitalhb.com
            </a>
          </div>
        </div>
      </footer>

      <div className="sticky-cta">
        <div className="sticky-cta__inner">
          <span className="sticky-cta__text">
            Ready to scale with Shopify, Google & Meta ads?
          </span>
          <a
            href="https://wa.me/923705978907?text=Hi,%20I%20would%20like%20to%20schedule%20a%20call%20with%20you.%20Please%20let%20me%20know%20your%20available%20time%20slots."
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Book Free Growth Call
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/923705978907"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-fab"
      >
        ⌾
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
