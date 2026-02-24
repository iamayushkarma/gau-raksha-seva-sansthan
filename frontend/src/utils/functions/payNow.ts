import { UPI_PAYMENT_CONFIG } from '@/config/payment';
import toast from 'react-hot-toast';

export function payNow(amount: number, note: string) {
  if (!amount || amount <= 0) {
    toast.error('Enter valid amount');
    return;
  }
  const safeNote = note?.trim() || 'Donation';

  const url =
    `upi://pay?pa=${UPI_PAYMENT_CONFIG.upiId}` +
    `&pn=${encodeURIComponent(UPI_PAYMENT_CONFIG.payeeName)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(safeNote)}`;

  console.log('Amount:', amount);
  console.log('Note:', note);

  window.location.href = url;
}
