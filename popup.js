document.getElementById("toggle").addEventListener("click", async () => {
  const res = await chrome.runtime.sendMessage({ type: "TOGGLE_PAUSE" });
  window.close();
});
