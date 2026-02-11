import { useContext } from 'react';
import { DonationFormContext } from '@/context/DonationFormContext';

function useDonationFormContext() {
  const context = useContext(DonationFormContext);

  if (!context) {
    throw new Error(
      'useDonationForm must be used inside DonationFormContextProvider'
    );
  }
  return context;
}
export default useDonationFormContext;
