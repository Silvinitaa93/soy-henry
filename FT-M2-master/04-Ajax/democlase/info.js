// Vamos a extraernos el id del boton 
// $("#myId") devuelve un array con una unica etiqueta
// Necesitamos extraernos la etiqueta, por lo que
const obtenerUsarios = $("#myBtn")[0];
console.log(obtenerUsarios);
// Luego le agregamos un listener, para que solo cargue los usuarios cuando le demos click
obtenerUsarios.addEventListener("click", ejecutar);
// Creamos la funcion que se ejecuta con el boton
// Esta funcion lo que hace es utilizar el metodo get de jQuery
// El cual se comporta tal que // $.get(URL,callback);
function ejecutar() {
    // La funcion de callback, va a ser response, que la definimos abajo
    // La cual toma la info y genera etiquetas li para cada uno de los usuarios
  $.get("https://jsonplaceholder.typicode.com/users", response);
}
​
function response(data) {
    // Data es el array de objetos, el array de usuarios
  console.log(data);
  // De vuelta destructuring, esta vez de otra forma
  const [miLista] = $("#lista"); 
  // me extraigo el <ul> del html para adentro agregar los datos
  console.log(miLista);
  // Debemos recorrer el array para a medida que lo recorremos
  // Ir generando un <li> 
  data.forEach((element) => {
    // Creo la etiqueta li
    const newLi = document.createElement("li");
    // Le agrego el nombre del user
    newLi.innerText = element.name; // <li> nombre </li>
    // Finalmente se lo agrego a mi lista <ul>
    miLista.appendChild(newLi);
  });
}