const copyButton = document.getElementById('copyEmail');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('deadlockdevs@rit.edu.in');
      copyButton.textContent = 'Contact Copied';
      setTimeout(() => {
        copyButton.textContent = 'Copy Contact';
      }, 1800);
    } catch {
      copyButton.textContent = 'Copy Failed';
    }
  });
}
