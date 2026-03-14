import '@/App.css';
import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DonationForm from './pages/DonationForm';
import Videos from './pages/Videos';
import About from './pages/About';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/donation-form" element={<DonationForm />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
