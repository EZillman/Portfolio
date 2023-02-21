const checkBtn = document.querySelector('#checkBtn');
const theBars = document.querySelector('#theBars');
const menu = document.querySelector('#menu');

function toggleMenu() {
    menu?.classList.toggle('show-menu');
    theBars?.classList.toggle('fa-xmark');
    theBars?.classList.toggle('fa-bars');

    console.log(menu);
};


checkBtn?.addEventListener('change', toggleMenu);