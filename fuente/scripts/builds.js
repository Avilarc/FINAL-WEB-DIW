let botonFiltro = document.getElementsByClassName("filter-list-item");

for(let i = 0; i < botonFiltro.length; i++) {
    botonFiltro[i].addEventListener("click", function() {
        // Remover la clase 'active' de todos los elementos
        for(let j = 0; j < botonFiltro.length; j++) {
            botonFiltro[j].classList.remove("active");
        }
        // Agregar la clase 'active' al elemento clickeado
        this.classList.add("active");
    });
}