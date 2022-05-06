const barra = document.querySelector("#barra");
const baner = document.querySelector("#baner");

const slider = document.querySelector(".slider");

const bmenu = document.querySelector(".menu");
const menu = document.querySelector("#menu-bar");
const menua = document.querySelectorAll("#menu-bar a");
const fundo = document.querySelector("#menu-bar .fundo");

function menuAla(){
    menu.classList.toggle("estender");
};

window.addEventListener('scroll',function(){
    if (window.pageYOffset <= baner.offsetTop + baner.offsetHeight) {
        barra.classList.remove("estender");
    }
    else{
        barra.classList.add("estender");
    }
});

bmenu.addEventListener("click", menuAla);
menua.forEach(a => {
    a.addEventListener("click", menuAla);
});
fundo.addEventListener("click", menuAla);

setInterval(function(){
    var img = document.querySelectorAll(".slider img")
    slider.insertBefore(img[0],img[img.length]);
},6000);