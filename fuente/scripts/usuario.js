let perfil = document.getElementById("datos-perfil");
let formPerfil = document.getElementById("edita-perfil");
document.getElementById("editar").addEventListener("click", (evento) => {
   evento.preventDefault();
   perfil.style.display = "none";
   formPerfil.style.display = "flex";
});

