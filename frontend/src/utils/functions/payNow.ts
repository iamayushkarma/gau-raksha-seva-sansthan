import { UPI_PAYMENT_CONFIG } from '@/config/payment';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_ENDPOINTS } from '@/config/api';

export async function payNow(
  amount: number,
  seva: string,
  name: string,
  phone: string,
  isAnonymous: boolean
) {
  // Validation
  if (!amount || amount <= 0) {
    toast.error('Enter valid amount');
    return;
  }
  if (!seva) {
    toast.error('Please select a seva');
    return;
  }
  if (!isAnonymous && !name) {
    toast.error('Please enter your name');
    return;
  }
  if (!isAnonymous && !phone) {
    toast.error('Please enter your phone number');
    return;
  }

  // Save to database first
  try {
    await axios.post(API_ENDPOINTS.donations, {
      amount,
      seva,
      name: isAnonymous ? null : name,
      phone: isAnonymous ? null : phone,
      is_anonymous: isAnonymous,
    });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      toast.error(err.response?.data?.message || 'Failed to save donation');
    } else {
      toast.error('Server error. Please try again.');
    }
    return;
  }

  // Then trigger UPI payment (mobile only)
  const safeNote = seva?.trim() || 'Donation';
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!isMobile) {
    toast.success('Donation recorded! 🙏 UPI payment works only on mobile.');
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
