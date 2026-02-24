export function payNow(amount: number) {
  if (!amount || amount <= 0) {
    alert('Enter valid amount');
    return;
  }

  const upiID = 'ravikarma2020@okicici';
  const name = 'Ravi Gau Care';
  const note = 'Cow Support';

  const url =
    `upi://pay?pa=${upiID}` +
    `&pn=${encodeURIComponent(name)}` +
    `&am=${amount}` +
    `&cu=INR` +
    `&tn=${encodeURIComponent(note)}`;

  window.location.href = url;
}
