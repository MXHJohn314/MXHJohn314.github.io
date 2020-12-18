const title = document.getElementById("title-dot");
const about = document.getElementById("about-dot");
const projects = document.getElementById("projects-dot");
const blogs = document.getElementById("blogs-dot")
const contact = document.getElementById("contact-dot")

title.addEventListener("click", () => { handleEvent: navButtonClicked("banner")} );
about.addEventListener("click", () => { handleEvent: navButtonClicked("about")} );
projects.addEventListener("click", () => { handleEvent: navButtonClicked("projects")} );
blogs.addEventListener("click", () => { handleEvent: navButtonClicked("blogs")} );
contact.addEventListener("click", () => { handleEvent: navButtonClicked("contact")} );

function navButtonClicked(element) {
    
    const findElement = document.getElementById(element);
    var offSet = getOffset(findElement).top
    window.scrollTo({
        top: offSet - 20,
        left: 0,
        behavior: 'smooth'
    });

}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}