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
const header = document.querySelector('header')



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
    hamburgerMenu.classList.remove('transition-menu')
    setTimeout(()=>{
        menuOptions.id = 'menu-options';
        menuOptions.classList.remove('menu-options-hamburger-menu');
        hamburgerMenu.removeChild(menuOptions);
        modal.removeChild(hamburgerMenu);
        body.removeChild(modal);
        header.appendChild(menuOptions);
    },300);


}

function openHamburgerMenu() {
    body.appendChild(modal);
    modal.appendChild(hamburgerMenu);
    hamburgerMenu.appendChild(closeIcon);
    menuOptions.id = '';
    menuOptions.classList.add('menu-options-hamburger-menu');
    hamburgerMenu.appendChild(menuOptions);
    setTimeout(() => {hamburgerMenu.classList.add('transition-menu'); }, 100)

}
