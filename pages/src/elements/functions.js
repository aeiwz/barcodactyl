// Copy buttons + theme toggle
document.addEventListener("DOMContentLoaded", () => {
  // Copy
  document.querySelectorAll(".code-block").forEach(pre => {
    const btn = pre.querySelector(".copy");
    const code = pre.querySelector("code");
    if (!btn || !code) return;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        btn.innerHTML = '<i class="bi bi-check-lg"></i>';
        btn.classList.add("copied");
        setTimeout(() => {
          btn.innerHTML = '<i class="bi bi-clipboard"></i>';
          btn.classList.remove("copied");
        }, 1200);
      } catch (e) {
        btn.innerHTML = '<i class="bi bi-x-lg"></i>';
      }
    });
  });

  // Theme toggle
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("barcodactyl_theme");
  if (stored) document.documentElement.setAttribute("data-bs-theme", stored);

  function switchTheme(){
    const cur = root.getAttribute("data-bs-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    root.setAttribute("data-bs-theme", next);
    localStorage.setItem("barcodactyl_theme", next);
    toggle.innerHTML = next === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
  }
  if (toggle){
    // initialize icon
    const cur = root.getAttribute("data-bs-theme") || "light";
    toggle.innerHTML = cur === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    toggle.addEventListener("click", switchTheme);
  }
});
