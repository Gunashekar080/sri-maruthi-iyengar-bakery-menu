function goBack() {
  // If user came from your site, go back.
  if (
    document.referrer &&
    document.referrer.startsWith(window.location.origin) &&
    window.history.length > 1
  ) {
    window.history.back();
  } else {
    // Otherwise always send them to home
    window.location.href = "index.html";
  }
}
