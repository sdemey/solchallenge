//Obteniendo los datos de los campos de texto y almacenar en variables.
const inputtext = document.querySelector(".inputtext");
const encriptext = document.querySelector(".encriptext");


//Creando la función encriptar, creamos una matriz con las claves a encontrar y reemplazar.
function encriptar(mensajeIngresado){
    //Matriz de claves. 5 elementos (items) y cada elemento tiene 2 valores.
    let matrizKeys = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Obtener el mensaje como parámetro y convertirlo a minúscula.
    mensajeIngresado = mensajeIngresado.toLowerCase();
    //Hacer un recorrido a la matriz con un ciclo "for".    
    for(let i = 0; i<matrizKeys.length;i++){
        //Validar y comparar los caracteres del mensaje ingresado con los primeros datos de cada elemento de la matriz. 
        if(mensajeIngresado.includes(matrizKeys[i][0])){
            //Reemplazando los valores por los segundos valores de cada elemento de la matriz.
            mensajeIngresado = mensajeIngresado.replaceAll(matrizKeys[i][0], matrizKeys[i][1]);
        }
    }
    //Retornando el mensaje ya encriptado.
    return mensajeIngresado;
}

//Creando función del botón encriptar.
function btnEncriptar(mensajeIngresado){
    //Declaramos una variable que almacenará el valor que retorna la función anterior "encriptar".
    const textoEncriptado = encriptar(inputtext.value)
    //Mostramos el texto encriptado en el segundo TextArea.
    encriptext.value = textoEncriptado
    //Limpiamos el primer TextArea.
    inputtext.value = ""
}

//Creando la función desencriptar, creamos una matriz con las claves a encontrar y reemplazar.
function desencriptar(mensajeEncriptado){
    //Matriz de claves. 5 elementos (items) y cada elemento tiene 2 valores.(Matriz invertida de la primera función "encriptar").
    let matrizKeys = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    //Obtener el mensaje como parámetro y convertirlo a minúscula.
    mensajeEncriptado = mensajeEncriptado.toLowerCase();
    //Hacer un recorrido a la matriz con un ciclo "for".    
    for(let i = 0; i<matrizKeys.length;i++){
        //Validar y comparar los caracteres del mensaje ingresado con los primeros datos de cada elemento de la matriz. 
        if(mensajeEncriptado.includes(matrizKeys[i][0])){
            //Reemplazando los valores por los segundos valores de cada elemento de la matriz.
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizKeys[i][0], matrizKeys[i][1]);
        }
    }
    //Retornando el mensaje ya desencriptado.
    return mensajeEncriptado;
}

//Creando función del botón desencriptar.
function btnDesencriptar(mensajeEncriptado){
    //Declaramos una variable que almacenará el valor que retorna la función anterior "desencriptar".
    const textoDesencriptado = desencriptar(inputtext.value)
    //Mostramos el texto desencriptado en el segundo TextArea.
    encriptext.value = textoDesencriptado
    //Limpiamos el primer TextArea.
    inputtext.value = ""
}


//Función para el boton copiar texto encriptado al portapapeles (similar a seleccionar el texto y hacer "Control + C").
function copiar(){
    var contenido = encriptext;
    contenido.select();
    document.execCommand("copy");    
    alert("Mensaje Encriptado Copiado!");
}