const statusDot = document.getElementById("status-dot");
const statusText = document.getElementById("status-text");
const ownerControls = document.getElementById("owner-controls");

// Load saved status
const savedStatus = localStorage.getItem("siteStatus") || "online";
applyStatus(savedStatus);

// Change status
function setStatus(status) {
  localStorage.setItem("siteStatus", status);
  applyStatus(status);
}

function applyStatus(status) {
  const icon = document.getElementById("status-icon");
  const text = document.getElementById("status-text");
  const tooltipText = document.getElementById("tooltip-text"); // if using custom tooltip

  if (status === "online") {        // ✅ use triple equals
    icon.src = "images/online.jpg";
    text.textContent = "Online";
    tooltipText.textContent = "Online: Coding or Gaming";
} else if (status === "idle") {
    icon.src = "images/idle.jpg";
    text.textContent = "Idle";
    tooltipText.textContent = "Idle: Taking a short break";
} else if (status === "busy") {
    icon.src = "images/busy.jpg";
    text.textContent = "Busy";
    tooltipText.textContent = "Busy: Do not disturb";
} else if (status === "away") {   // ✅ new
    icon.src = "images/away.jpg";
    text.textContent = "Away";
    tooltipText.textContent = "Away: Out or Away from keyboard";
}
}

// OWNER ACCESS (secret key)
const params = new URLSearchParams(window.location.search);
if (params.get("owner") === "true") {
  ownerControls.style.display = "flex";
}