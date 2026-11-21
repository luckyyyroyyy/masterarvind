import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from './config/contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/layout/FloatingContact';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Location from './pages/Location';
import Blog from './pages/Blog';
import BookAppointment from './pages/BookAppointment';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const PageTitleHandler = () => {
    const location = useLocation();

    useEffect(() => {
      let pageName = "";
      
      const path = location.pathname;
      if (path === "/") pageName = "Home";
      else if (path.startsWith("/about")) pageName = "About";
      else if (path.startsWith("/services")) pageName = "Services";
      else if (path.startsWith("/location")) pageName = "Locations";
      else if (path.startsWith("/blog")) pageName = "Blog";
      else if (path.startsWith("/book")) pageName = "Book Appointment";

      if (pageName) {
        document.title = `${CONTACT_INFO.name} | ${pageName}`;
      } else {
        document.title = CONTACT_INFO.name;
      }
    }, [location]);

    return null;
  };

  return (
    <Router>
      <PageTitleHandler />
      <ScrollToTop />
      <div className="page-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/location" element={<Location />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/book" element={<BookAppointment />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
