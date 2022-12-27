const modal = document.createElement("div");
const menuIcon = document.querySelector('#menu-icon');
const body = document.querySelector('body')

let toggled = false;

function toggleMenuIcon(){
    if(toggled){
        menuIcon.src = 'assets/images/icon-menu.svg';
        toggled = false;
    }
    else{
        menuIcon.src = 'assets/images/icon-menu-close.svg';
        toggled = true;
    }
}

menuIcon.addEventListener('click', ()=>{
    toggleMenuIcon();
    modal.classList.add('modal');
    body.appendChild(modal);

})

modal.addEventListener("click", ()=> {
    toggleMenuIcon();
    modal.classList.remove('modal');
    body.removeChild(modal);
})


