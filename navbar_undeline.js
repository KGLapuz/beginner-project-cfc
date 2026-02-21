const content = document.querySelectorAll(".nav-bar-link");
const navbar = document.getElementsByClassName("top-nav-bar")[0];
const navbarheight = navbar.offsetHeight;

const sections = Array.from(content).map(link => document.querySelector(link.getAttribute("href")));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            content.forEach( link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    rootMargin: `-${navbarheight}px 0px 0px 0px`,
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));