// Smooth fade header on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 10) {
    header.classList.remove("bg-transparent", "text-white", "py-5");
    header.classList.add("bg-white/95", "text-gray-800", "shadow-md", "py-2");
  } else {
    header.classList.add("bg-transparent", "text-white");
    header.classList.remove("bg-white/95", "text-gray-800", "shadow-md");
  }
});