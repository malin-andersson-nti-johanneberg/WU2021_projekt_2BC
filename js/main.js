let menu_burger = document.querySelector(".burger");
menu_burger.addEventListener("click",showMenu)

let button = document.querySelector(".links_to_delhemsidor");
button.addEventListener("click",showMenu);

function showMenu() {
    let menu = document.querySelector("nav.navbar")
    menu.classList.toggle('show');

    let menu_burger = document.querySelector(".burger");
    menu_burger.classList.toggle("visible");
}



    
    