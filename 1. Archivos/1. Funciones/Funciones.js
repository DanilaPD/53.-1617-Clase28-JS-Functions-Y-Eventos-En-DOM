//? Tipos de función:

//* https://dev.to/victordeandres/funciones-en-javascript-7-formas-de-declarar-una-funcion-523a
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
//* https://www.jasoft.org/Blog/post/Escribiendo-codigo-JavaScript-limpio-funciones-anonimas-auto-ejecutables

//! Función clásica = DECLARATIVA
function saludar(name) {
  console.log("Hola, " + name + ".");
}

saludar("Pam");

//! Función EXPRESIÓN = A mitad de camino entre "declarativa" y "flecha"
const clima = function temp(grados) {
  console.log("Hoy hace " + grados + "°.");
};

// La llamamos usando el nombre de la VARIABLE, no de la "function":
clima(16);

//! La podemos hacer anónima:
const juguetes = function (cantidad) {
  console.log("Tengo " + cantidad + " osos de peluche.");
};

juguetes(5);

//! Flecha:
const hervir = (litros) => {
  console.log("Hay que hervir " + litros + " litros de agua para los fideos.");
};

hervir(2);

//! IIFE = Immediately Invoked Function Expression:
// Ojo: Si no le ponen el punto y coma a lo anterior, la IIFE se le pega y hace lío.
// Es una función descartable. Se declara sin nombre y se ejecuta en el momento y después chau.

//! IIFE sin PARÁMETROS:
(function () {
  console.log("Hola, NUCBA.");
})();

//! IIFE con PARÁMETROS:
(function (user) {
  console.log("Hola,", user);
})("Pam.");
