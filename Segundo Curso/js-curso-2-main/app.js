let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hola Desafio';

function mostrarMensaje(){
    alert("El boton fue clicado");
}
function mostrarCiudad(){
    var ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    if (ciudad !== null && ciudad !== "") {
        var mensaje = `Estuve en ${ciudad} y me acordé de ti`;
        alert(mensaje);
    } else {
        alert("No ingresaste ninguna ciudad. Intenta de nuevo.");
    }
}
function mostrarAlert(){
    alert("Yo amo JS");
}
function mostrarSuma(){
       // Pedir al usuario que ingrese el primer número
       var numero1 = prompt("Ingresa el primer número:");
            
       // Convertir el input a número
       numero1 = parseFloat(numero1);
       
       // Verificar si el usuario ingresó un número válido
       if (!isNaN(numero1)) {
           // Pedir al usuario que ingrese el segundo número
           var numero2 = prompt("Ingresa el segundo número:");
           
           // Convertir el segundo input a número
           numero2 = parseFloat(numero2);
           
           // Verificar si el usuario ingresó un segundo número válido
           if (!isNaN(numero2)) {
               // Calcular la suma de los dos números
               var suma = numero1 + numero2;
               
               // Mostrar el resultado en una alerta
               alert(`La suma de ${numero1} y ${numero2} es: ${suma}`);
           } else {
               alert("El segundo número ingresado no es válido. Intenta de nuevo.");
           }
       } else {
           alert("El primer número ingresado no es válido. Intenta de nuevo.");
       }
}