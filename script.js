const navLink = document.querySelectorAll('.navLink');

navLink.forEach(navLinkEl => {
    navLinkEl.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove('active');
        navLinkEl.classList.add("active")
    })
})
