let button = document.querySelector('.button');
layer.addEventListener('click',showMenu)

let  = document.querySelector('.links_to_delhemsidor');
button.addEventListener('click',showMenu)

function showMenu() {
    let menu = document.querySelector('.links_to_delhemsidor li');
    menu.classList.toggle('show');

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}
