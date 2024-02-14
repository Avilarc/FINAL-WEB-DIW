let loginSection = document.getElementById('login-section');
let registerSection = document.getElementById('register-section');
let rememberSection = document.getElementById('remember-section');



function showRegister() {
    loginSection.style.display = 'none';
    registerSection.style.display = 'flex';
}

function showLogin() {
    loginSection.style.display = 'flex';
    registerSection.style.display = 'none';
}

function showRemember() {
    rememberSection.style.display = 'flex';
    loginSection.style.display = 'none';
}

let logAccButton = document.getElementById("logAcc");
logAccButton.onclick = null;

logAccButton.addEventListener("click", (evento) => {
    evento.preventDefault();
    window.location.href = "../fuente/html/UserPage.html";
});


document.getElementById("registrar").addEventListener("click", (evento) => {
    evento.preventDefault();
    alert("Usuario registrado con éxito,compruebe su correo para");
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
});

document.getElementById("remember").addEventListener("click", (evento) => {
    evento.preventDefault();
    alert("Se han enviado las instrucciones a su correo");
    rememberSection.style.display = 'none';
    loginSection.style.display = 'flex';
});

document.getElementById("goToReg").addEventListener("click", (evento) => {
    evento.preventDefault();
    showRegister();
});

document.getElementById("goToRem").addEventListener("click", (evento) => {
    evento.preventDefault();
    showRemember();
});

document.getElementById("goBack").addEventListener("click", (evento) => {
    evento.preventDefault();
    showLogin();
});