import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
import { DonationFormContextProvider } from '@/core/context/DonationFormContext';
import { Toaster } from 'react-hot-toast';
import '@/core/config/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DonationFormContextProvider>
      <Toaster />
      <App />
    </DonationFormContextProvider>
  </StrictMode>
);
