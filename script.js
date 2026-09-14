const drawer = document.getElementById("drawer");
const menuButton = document.getElementById("menuButton");
const closeDrawer = document.getElementById("closeDrawer");
const toast = document.getElementById("toast");

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
}

function hideDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied");
  } catch {
    showToast("Copy unavailable");
  }
}

async function shareLink() {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "MAG NUMB",
        text: "Official MAG NUMB links",
        url: window.location.href
      });
    } catch (_) {}
  } else {
    copyLink();
  }
}

menuButton.addEventListener("click", openDrawer);
closeDrawer.addEventListener("click", hideDrawer);
drawer.addEventListener("click", (e) => {
  if (e.target === drawer) hideDrawer();
});

document.getElementById("copyButton").addEventListener("click", copyLink);
document.getElementById("shareButton").addEventListener("click", shareLink);
document.getElementById("copyDrawer").addEventListener("click", copyLink);
document.getElementById("shareDrawer").addEventListener("click", shareLink);
document.getElementById("refreshPage").addEventListener("click", () => location.reload());

document.getElementById("openExternal").addEventListener("click", () => {
  // Mobile social apps sometimes trap pages inside their in-app browser.
  // JavaScript cannot force another browser on every device, so this copies
  // the URL and gives the user a clear handoff.
  copyLink();
  showToast("Link copied — paste it into your browser");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideDrawer();
});
