function validarForm() {

    const emailValido = "admin@admin.com";
    const pswValido = "admin123";

    const usrEmail = document.getElementById('id_mail').value.trim();
    const usrPsw = document.getElementById('id_psw').value.trim();

    let esValido = true;

    if (usrEmail.length < 1) {
        mostrarError('empty_mail', 'El campo email no puede estar vacío');
        esValido = false;
    } else {
        ocultarError('empty_mail');
    }

    if (usrPsw.length < 1) {
        mostrarError('empty_psw', 'El campo contraseña no puede estar vacío');
        esValido = false;
    } else {
        ocultarError('empty_psw');
    }

    if (usrEmail.length > 0 && usrEmail !== emailValido) {
        mostrarError('mail_error', 'El email es incorrecto');
        esValido = false;
    } else {
        ocultarError('mail_error');
    }

    if (usrPsw.length > 0 && usrPsw !== pswValido) {
        mostrarError('psw_error', 'La contraseña es incorrecta');
        esValido = false;
    } else {
        ocultarError('psw_error');
    }

    return esValido;
}

function mostrarError(idCampo, mensaje) {
    const errorElement = document.getElementById(idCampo);
    errorElement.textContent = "❌ " + mensaje;
    errorElement.style.display = 'block';
}

function ocultarError(idCampo) {
    const errorElement = document.getElementById(idCampo);
    errorElement.textContent = "";
    errorElement.style.display = 'none';
}

const btnIngresar = document.getElementById('btn_login');

btnIngresar.addEventListener('click', function (event) {
    event.preventDefault();

    console.log("Entramos en el listener");

    if (validarForm()) {
        window.location.href = "paginas/bienvenida.html";
    }
});
