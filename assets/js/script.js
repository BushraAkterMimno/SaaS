// Navbar Mobile Menu Toggle

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });
  }
});


// Smooth Scroll (jQuery Example)

$(document).ready(function () {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      600
    );
  });
});