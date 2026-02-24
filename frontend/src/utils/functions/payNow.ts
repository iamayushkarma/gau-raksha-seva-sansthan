import { UPI_PAYMENT_CONFIG } from '@/config/payment';
import toast from 'react-hot-toast';

export function payNow(amount: number) {
  if (!amount || amount <= 0) {
    toast.error('Enter valid amount');
    return;
  }

  const url =
    `upi://pay?pa=${UPI_PAYMENT_CONFIG.upiId}` +
    `&pn=${encodeURIComponent(UPI_PAYMENT_CONFIG.payeeName)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(UPI_PAYMENT_CONFIG.transactionNote)}`;

  window.location.href = url;
}
