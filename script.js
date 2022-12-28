const modal = document.createElement("div");
modal.classList.add('modal');

const hamburgerMenu = document.createElement('div');
hamburgerMenu.classList.add('hamburger-menu')

const closeIcon = document.createElement('img');
closeIcon.src = 'assets/images/icon-menu-close.svg'
closeIcon.alt = 'Close Icon for menu';
closeIcon.classList.add('close-icon');


const menuIcon = document.querySelector('#menu-icon');
const body = document.querySelector('body');

const menuOptions = document.querySelector('#menu-options')




menuIcon.addEventListener('click', ()=>{
    openHamburgerMenu();
})

modal.addEventListener("click", (e)=> {
    if(e.target !== e.currentTarget) return;
    closeHamburgerMenu();

})

closeIcon.addEventListener('click', ()=>{
    closeHamburgerMenu();
})

function closeHamburgerMenu() {
    menuOptions.id = 'menu-options';
    menuOptions.classList.remove('menu-options-hamburger-menu');
    body.removeChild(modal);
    modal.removeChild(hamburgerMenu);
    hamburgerMenu.removeChild(menuOptions);
}

function openHamburgerMenu() {
    body.appendChild(modal);
    modal.appendChild(hamburgerMenu);
    hamburgerMenu.appendChild(closeIcon);
    menuOptions.id = '';
    menuOptions.classList.add('menu-options-hamburger-menu');
    hamburgerMenu.appendChild(menuOptions);
}
