const toggle = document.getElementById("langToggle");
let language = "fr";
toggle.addEventListener("click", () => {
  language = language === "fr" ? "en" : "fr";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-fr][data-en]").forEach((el) => {
    const value = el.getAttribute(`data-${language}`);
    if (value !== null) el.innerHTML = value;
  });
  toggle.textContent = language === "fr" ? "EN" : "FR";
});
document.getElementById("year").textContent = new Date().getFullYear();
