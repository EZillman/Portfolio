"use strict";
const checkBtn = document.querySelector('#checkBtn');
const theBars = document.querySelector('#theBars');
const menu = document.querySelector('#menu');
function toggleMenu() {
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('show-menu');
    theBars === null || theBars === void 0 ? void 0 : theBars.classList.toggle('fa-xmark');
    theBars === null || theBars === void 0 ? void 0 : theBars.classList.toggle('fa-bars');
    console.log(menu);
}
;
//# sourceMappingURL=script.js.map