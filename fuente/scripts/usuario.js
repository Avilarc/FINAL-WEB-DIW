document.querySelectorAll('.ampliar, .reducir').forEach(boton => {
    boton.addEventListener('click', function () {
        const article = this.nextElementSibling;
        if (boton.classList.contains('ampliar')) {
            if (article.className == "oculto") {
                article.className = "visible";
                boton.className = "reducir";
            }
        } else if (boton.classList.contains('reducir')) {
            if (article.className == "visible") {
                article.className = "oculto";
                boton.className = "ampliar";
            }
        }
    });
});

let perfil = document.getElementById("datos-perfil");
let formPerfil = document.getElementById("editar-perfil");
document.getElementById("editar").addEventListener("click", (evento) => {
   evento.preventDefault();
   perfil.style.display = "none";
   formPerfil.style.display = "grid";
});

document.getElementById("borrar").addEventListener("click", (evento) => {
    evento.preventDefault();
    alert("Has eliminado tu cuenta de forma correcta.");
    window.location.href = "../index.html";
});