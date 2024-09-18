let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');
    

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if(numeroDigitado < 8){
        alert("La cantidad maxima de caracteres es de 8");

    }else{
            
            let password = '';

            for(let i=0; i < numeroDigitado; i++){

            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            console.log(caracterAleatorio);

            password+= caracterAleatorio;
        
            }

            contrasena.value = password;
            console.log('password generada:' + password);

            validarContraseña(password);
        }

 }

 


 function validarContraseña(password) {
    const caracteresEspeciales = /[!@#$%^&*()]/;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneCaracterEspecial = caracteresEspeciales.test(password);

    if (tieneMayuscula && tieneNumero && tieneCaracterEspecial) {
        mensaje.textContent = "La contraseña generada es fuerte.";
                mensaje.style.color = "green";
    } else {
        mensaje.textContent = "La contraseña débil. Debe incluir al menos: una letra mayúscula, un número y un carácter especial (!@#$%^&*()).";
                mensaje.style.color = "red";
    }

    
}

 function limpiar() {
    contrasena.value = '';
    boton.addEventListener('click', generar);
    botonLimpiar.addEventListener('click', limpiar);

    cantidad.value = ' ';
    boton.addEventListener('click', generar);
    botonLimpiar.addEventListener('click', limpiar);

    mensaje.value = ' ';
    boton.addEventListener('click', generar);
    botonLimpiar.addEventListener('click', limpiar);
    
}

 
    
 


    













