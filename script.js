const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
menuToggle.addEventListener("click", ()=>{
navLinks.classList.toggle("active");
menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("active"));
});
}

const heroSections = document.querySelectorAll(".hero, .hero1");

window.addEventListener("scroll", () => {
	heroSections.forEach((hero) => {
		const offset = Math.min(window.scrollY * 0.12, 70);
		hero.style.setProperty("--hero-shift", `${offset}px`);
	});
}, { passive: true });