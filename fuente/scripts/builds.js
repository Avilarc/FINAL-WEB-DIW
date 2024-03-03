let botonFiltro = document.getElementsByClassName("filter-list-item");


for(let i = 0; i < botonFiltro.length; i++) {
    botonFiltro[i].addEventListener("click", function() {
        for(let j = 0; j < botonFiltro.length; j++) {
            botonFiltro[j].classList.remove("active");
        }
        this.classList.add("active");

    });
}

