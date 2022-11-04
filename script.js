window.onload = function(){
   
$('#onload').fadeOut();
$('body').removeClass('hidden');
alert("La pagina se ha cargado")
}


const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navmenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link".foreach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navmenu.classList.remove("active")

    }


)))


function Click() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var email = document.getElementById("mensaje").value;
    if (nombre == "" || email == "" || mensaje == "" ) {
        alert("Debes compeltar ambos campos");
    } else {
        alert("Enviado");
    }
}
