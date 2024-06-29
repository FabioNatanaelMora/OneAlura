
//Actividad 1
/*let mensajeDeBienvenida = '¡Bienvenida y bienvenido a nuestro sitio web!';
alert(mensajeDeBienvenida);
let nombre='Luna';
let edad=25;
let numeroDeVentas=50;
let saldoDisponible=1000;
alert('Error! Complete todos los campos');
let mensajeDeError='Error!';
alert(mensajeDeError);
nombre=prompt('Por favor escriba su nombre de usuario');
edad=prompt('Por favor ingrese su edad');
if(edad>=18){
    alert('Puedes obtener tu licencia de conducir');
}else{
    alert('No puede obtener tu licencia de conducir');
}*/
//Actividad 2
let dia= prompt('Ingrese un dia de la semana');
if(dia=='Sabado'|| dia=='Domingo'){
    alert('Buen fin de semana');
}else{
    alert('Buena semana');
}
```
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
```
  let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
```
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
```
  let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}
```
4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.
```
  let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);
```
5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.
```
  let nombre = prompt('Por favor, ingresa tu nombre');
alert(`¡Bienvenido, ${nombre}!`);