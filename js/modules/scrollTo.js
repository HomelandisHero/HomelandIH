import calc from "./calc";

function scrollTo(button, element) {
    const btn = document.querySelector(button),
    el = document.querySelector(element);

    btn.addEventListener('click', () => {
        el.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
}

export default scrollTo;