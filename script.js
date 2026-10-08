const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project-card");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    projects.forEach((project) => {
      const categories = project.dataset.category.split(" ");
      project.classList.toggle("is-hidden", selected !== "all" && !categories.includes(selected));
    });
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
