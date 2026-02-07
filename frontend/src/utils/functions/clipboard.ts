async function copyToClipboard(text: string) {
  if (!navigator?.clipboard) {
    console.error('Clipboard API not supported');
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy', error);
    return false;
  }
}

export default copyToClipboard;
