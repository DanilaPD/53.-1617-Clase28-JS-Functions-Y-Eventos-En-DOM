const menuDropdown = document.getElementById("menuDropdown");

const heart = document.getElementsByClassName("heart");
// Hay muchos corazones, no nos conviene usar un "id" en este caso.

// Lo que vamos a repetir muchas veces nos lo podemos guardar:
const dropHasClass = menuDropdown.classList;

// Para la barra del "cart":
const total = document.getElementById("total");

const buyBtn = document.getElementsByClassName("buyBtn");
// Con esto, generamos un "array".
//* console.log(buyBtn);

// Si no aplicáramos lo de capturar los elementos arriba:
const changeColor = () => {
  document.getElementById("menu").style.color = "red";
};

changeColor();

const dropdown = () => {
  if (dropHasClass.contains("hide")) {
    dropHasClass.remove("hide");
  } else {
    dropHasClass.add("hide");
  }
};

//! La forma más larga del mundo:
//* const dropdown = () => {
//*   if (document.getElementById("menuDropdown").classList.contains("hide")) {
//*     console.log("Oh, mis ojos.");
//*   }
//* };

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("clicked");
  });
}

// Función cart: ¡Es una IIFE!
//! La idea acá es que no necesito ejecutarla después; no necesito nombres, ni nada. Entonces la creo y ejecuto todo en un mismo lugar.
(function () {
  total.innerHTML = 0;
  // Podemos usar el + para convertir a "número", pero es un poco más limitado y no permite parámetros:
  let acumulador = +total.innerHTML;
  //* console.log(typeof acumulador);

  for (
    let j = 0;
    j < buyBtn.length;
    j++ // Itero para que esto pueda suceder con cada uno de los botones del "array".
  ) {
    // Esto es un "callback": El primer parámetro es qué tipo de evento va a pasar (un click), el segundo es qué va a hacer, que, en este caso, es una función.
    buyBtn[j].addEventListener("click", function () {
      // El evento se produce acá, al agregarle el "event listener".
      // Acá guardo el valor que voy a querer sumarle, el valor del producto del botón que apreté:
      let newProd = +buyBtn[j].innerHTML;
      // Va a tomar el precio y va a convertirlo a "número". Al usar la [j], sabe qué botón toqué.
      //* console.log(typeof newProd, newProd);
      acumulador = acumulador + newProd;
      // El acumulador va a mantener el valor con lo que hayamos sumado y va a sumar lo nuevo.
      console.log(acumulador);
      total.innerHTML = acumulador;
    });
  }
})(); // Este segundo paréntesis es el que la hace ejecutar.

//! Esto daría error porque "acumulador" fuera de la IIFE no está definida, está fuera del "scope":
//* console.log(acumulador);

//! "Total" está creada afuera, entonces sí la podemos ver fuera del "scope":
//* console.log(total.innerHTML);
