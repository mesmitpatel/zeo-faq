let faq_container = document.getElementsByClassName('faq');
let faq_answer_content = document.getElementsByClassName('faq__container-expanded')
let mobile_nav_button = document.getElementsByClassName('cta-container__mobile-nav')[0]
let mobile_nav = document.getElementsByClassName('mobile-nav-container')[0]

for (let i = 0; i < faq_container.length; i++) {
    const element = faq_container[i];
    element.addEventListener('click', () => {
        if (element.lastElementChild.classList[1] !== "hide") {
            element.lastElementChild.classList.add("hide")
            element.childNodes[1].lastElementChild.classList.remove('up')
            element.style["boxShadow"] = "0px 3px 2px -2px rgba(16, 35, 52, 0.16)"
        } else {
            element.lastElementChild.classList.remove("hide");
            element.childNodes[1].lastElementChild.classList.add('up');
            element.style["boxShadow"] = "0px 8px 24px -4px rgba(16, 35, 52, 0.1)"
        }
    })
}


mobile_nav_button.addEventListener('click', () => {
    if (mobile_nav.classList[1] !== "hide") {
        mobile_nav.classList.add('hide')
    } else {
        mobile_nav.classList.remove('hide')
    }

    console.log(mobile_nav.classList);
})