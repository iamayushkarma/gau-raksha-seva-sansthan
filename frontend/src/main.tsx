import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/App.css';
import { DonationFormContextProvider } from '@/context/DonationFormContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DonationFormContextProvider>
      <App />
    </DonationFormContextProvider>
  </StrictMode>
);
