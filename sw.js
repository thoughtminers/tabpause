chrome.runtime.onMessage.addListener(async (msg, _sender, sendResponse) => {
  if (msg?.type !== "TOGGLE_PAUSE") return;

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return sendResponse({ ok: false });

  if (tab.discarded) {
    await chrome.tabs.reload(tab.id);
    return sendResponse({ ok: true, state: "resumed" });
  } else {
    await chrome.tabs.discard(tab.id);
    return sendResponse({ ok: true, state: "paused" });
  }
});
