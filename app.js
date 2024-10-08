const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");



openMenu.addEventListener("click", () => {
    mobileMenu.style.left = "0";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});
