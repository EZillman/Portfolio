const checkBtn = document.querySelector('#checkBtn');
const theBars = document.querySelector('#theBars');
const menu = document.querySelector('#menu');
const aboutLink = document.querySelector('#aboutLink');
const skillsLink = document.querySelector('#skillsLink');
const projectsLink = document.querySelector('#projectsLink');

function toggleMenu() {
    menu?.classList.toggle('show-menu');
    theBars?.classList.toggle('fa-xmark');
    theBars?.classList.toggle('fa-bars');
};

function goToSectionX() {
    menu?.classList.toggle('show-menu');
    theBars?.classList.toggle('fa-xmark');
    theBars?.classList.toggle('fa-bars');
};

console.log(aboutLink);

checkBtn?.addEventListener('change', toggleMenu);
aboutLink?.addEventListener('click', goToSectionX);
skillsLink?.addEventListener('click', goToSectionX);
projectsLink?.addEventListener('click', goToSectionX);