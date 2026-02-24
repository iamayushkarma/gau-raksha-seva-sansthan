import useDonationFormContext from '@/hooks/useDonationFormContext';

export function payNow() {
  const { amount } = useDonationFormContext();

  const numericAmount = Number(amount);

  if (!numericAmount || numericAmount <= 0 || isNaN(numericAmount)) {
    alert('Enter valid amount');
    return;
  }

  const upiID = 'ravikarma2020@okicici';
  const name = 'Ravi Gau Care';
  const note = 'Cow Support';

  const url =
    `upi://pay?pa=${upiID}` +
    `&pn=${encodeURIComponent(name)}` +
    `&am=${numericAmount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(note)}`;

  window.location.href = url;
}
