"use strict";
const checkBtn = document.querySelector('#checkBtn');
const theBars = document.querySelector('#theBars');
const menu = document.querySelector('#menu');
const aboutLink = document.querySelector('#aboutLink');
const skillsLink = document.querySelector('#skillsLink');
const projectsLink = document.querySelector('#projectsLink');
function toggleMenu() {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('show-menu');
    theBars === null || theBars === void 0 ? void 0 : theBars.classList.toggle('fa-xmark');
    theBars === null || theBars === void 0 ? void 0 : theBars.classList.toggle('fa-bars');
}
;
function goToSectionX() {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('show-menu');
    theBars === null || theBars === void 0 ? void 0 : theBars.classList.toggle('fa-xmark');
    theBars === null || theBars === void 0 ? void 0 : theBars.classList.toggle('fa-bars');
}
;
console.log(aboutLink);
checkBtn === null || checkBtn === void 0 ? void 0 : checkBtn.addEventListener('change', toggleMenu);
aboutLink === null || aboutLink === void 0 ? void 0 : aboutLink.addEventListener('click', goToSectionX);
skillsLink === null || skillsLink === void 0 ? void 0 : skillsLink.addEventListener('click', goToSectionX);
projectsLink === null || projectsLink === void 0 ? void 0 : projectsLink.addEventListener('click', goToSectionX);
//# sourceMappingURL=script.js.map