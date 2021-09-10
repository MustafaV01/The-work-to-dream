const navTag = document.querySelector(`.nav_toggle`);
const navLinks = document.querySelectorAll(`.nav_link`);

//adauga prin clic (nav_toggle) clasa nav-open
navTag.addEventListener(`click`, () => {
    document.body.classList.toggle(`nav-open`);
})

//delete nav-open clas wit clis the nav_link
navLinks.forEach(link => {
    link.addEventListener(`click`, () => {
        document.body.classList.remove(`nav-open`)
    })
})