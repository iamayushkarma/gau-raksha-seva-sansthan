import { UPI_PAYMENT_CONFIG } from '@/config/payment';
import toast from 'react-hot-toast';

export function payNow(amount: number, note: string) {
  if (!amount || amount <= 0) {
    toast.error('Enter valid amount');
    return;
  }
  const safeNote = note?.trim() || 'Donation';

  //- Only for moblie version
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (!isMobile) {
    toast.error('UPI payment works only on mobile devices');
    return;
  }

  const url =
    `upi://pay?pa=${UPI_PAYMENT_CONFIG.upiId}` +
    `&pn=${encodeURIComponent(UPI_PAYMENT_CONFIG.payeeName)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(safeNote)}`;

  window.location.href = url;
}
