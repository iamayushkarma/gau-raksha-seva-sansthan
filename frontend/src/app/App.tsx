import './App.css';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DonationForm from '@/features/donation/pages/DonationForm';
import Videos from '@/features/video/pages/Videos';
import About from '@/features/about/pages/About';
import ContactPage from '@/features/contact/pages/ContactPage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import ScrollToTop from '@/shared/components/ui/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/donation-form" element={<DonationForm />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
