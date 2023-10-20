const str = '1,2,3,4,5,6,7';
// Dividir la cadena en un array de números
const numeros = str.split(',');
// Usar el método reduce para sumar los números después de convertirlos a enteros
const suma = numeros.reduce((acumulador, numero) => acumulador + parseInt(numero), 0);
console.log(suma); // Esto mostrará la suma: 28