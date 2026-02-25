import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/App.css';
import { DonationFormContextProvider } from '@/context/DonationFormContext.tsx';
import { Toaster } from 'react-hot-toast';
import '@/config/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DonationFormContextProvider>
      <Toaster />
      <App />
    </DonationFormContextProvider>
  </StrictMode>
);
