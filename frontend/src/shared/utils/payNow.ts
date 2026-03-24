import { UPI_PAYMENT_CONFIG } from '@/core/config/payment';
import toast from 'react-hot-toast';
import axios from 'axios';
import { API_ENDPOINTS } from '@/core/config/api';

export async function payNow(
  amount: number,
  seva: string,
  name: string,
  phone: string,
  isAnonymous: boolean
) {
  // Validation (same as before)

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

  const safeNote = seva?.trim() || 'Donation';

  const url =
    `upi://pay?pa=${UPI_PAYMENT_CONFIG.upiId}` +
    `&pn=${encodeURIComponent(UPI_PAYMENT_CONFIG.payeeName)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(safeNote)}`;

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    ('ontouchstart' in window && navigator.maxTouchPoints > 0);

  // Open UPI immediately
  if (isMobile) {
    window.location.href = url;
  } else {
    toast.success('Please scan QR to complete payment');
  }

  // Save in background (no await)
  axios
    .post(API_ENDPOINTS.donations, {
      amount,
      seva,
      name: isAnonymous ? null : name,
      phone: isAnonymous ? null : phone,
      is_anonymous: isAnonymous,
    })
    .catch(() => {
      console.log('Failed to save donation');
    });
}
