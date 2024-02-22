let main = document.querySelector(".main_foro");
let categorias = document.querySelector(".catergorias_foro");
let destacados = document.querySelector(".destacados_foro");
let nuevos = document.querySelector(".nuevos_foro");
let vacio = document.createElement("div");
vacio.style.background = "#060129";
vacio.style.width = "100%";
vacio.style.height = "280px"; // set initial height for categorias

main.appendChild(vacio); // append vacio to main initially

let menuItems = document.querySelectorAll(".foro_navigation li");

menuItems.forEach(item => {
    item.addEventListener("click", function() {
        let id = this.id

        switch (id) {
            case 'Categorias':
                categorias.style.display = "flex";
                destacados.style.display = "none";
                nuevos.style.display = "none";
                vacio.style.height = "280px";
                break;
            case 'Destacados':
                categorias.style.display = "none";
                destacados.style.display = "flex";
                nuevos.style.display = "none";
                vacio.style.height = "50px";
                break;
            case 'Nuevos':
                categorias.style.display = "none";
                destacados.style.display = "none";
                nuevos.style.display = "flex";
                vacio.style.height = "100px";
                break;
        }
        if(!main.contains(vacio)) {
            main.appendChild(vacio);
        }
    });
});