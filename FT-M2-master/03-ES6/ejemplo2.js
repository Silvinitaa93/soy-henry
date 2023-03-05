// ES6 Version estable de Javscript desde 2015
​
// Veamos cuales son las features que implemento
​
// 1. LET || CONST --> Nuevas formas de declarar variables
​
// Var tiene un alcance o scope global
// Let y const tienen un alcance o scope de bloque
// Let permite pisar valores ya declarados
// const no permite pisar los valores.
​
function saludar() {
  var a = "Hola";
  let b = "Hello";
  const c = "Constante";
  if (true) {
    console.log(a); // Imprime "Hola"
    var a = "Chao"; // Redefino a
    console.log(a); // Imprime "Chao"
    console.log(b); // Imprime "Hello" puede acceder a la informacion del padre
    let b = "bye"; // declaro una variable b en este bloque
    console.log(b); // Imprime "bye"
    // la variable a es la misma
    // la variable b es diferente, no es que este pisando la declaracion del padre
    //
  }
  console.log(b); // Estoy tomando el b que esta en la funcion, no en el if
  // let b = "Chao" // Esto no se puede
  // A diferencia de var
  // No se puede declarar el let en el mismo alcance de bloque
  // const c = "Otra cosa"
  // lo mismo ocurre con const
  b = "Chao";
  // Podemos cambiar el valor de let
  c = "Otra cosa"; // Esto no se debe hacer. c es una constante. No se puede redeclarar
  // Ahora, que pasa con los objetos? Como se comporta const con este?
  const obj = { nombre: "Feli" };
  obj.nombre = "Caro";
  // Esto se nos permite ya que lo que cambiamos es una propiedad del objeto, no el objeto en si
  // obj = "Feli" // Esto es lo que no se permite
  // Cambiar el tipado de una constante, cambiando lo que contiene su direccion de memoria
  obj.edad = 24; // Podemos agregar propiedades tranquilamente
​
  // Ahora dime, esto es posible?
  const arr = [1, 2];
  arr = [1, 2];
  // No, exacto
  // Aunque parezcan lo mismo
  // Estas intentando cambiar una referencia de memoria
}
saludar();
​
// 2. ARROW FUNCTIONS
​
// Las arrow nos permiten retornar por defecto
// Nos ahorra escribir el return
// Si es una sola linea lo que se pretende ejecutar, no es necesario {}
​
// Veamoslo con un ejemplo:
let arr = [1, 2, 3, 4, 5, 6];
​
// Esta es la version de funciones
//let impares = arr.map(function(elem, index){ return elem + index})
​
// Esta es la version de call back
let impares = arr.map((elem, index) => elem + index);
console.log(impares); // [1, 3, 5, 7, 9, 11]
​
// Si no se reciben parametros:
let saludo = () => alert("Un abrazoo!!");
saludo();
​
// Que pasa en los objetos y sus metodos?
// En la notacion anterior
// Perdemos la referencia del this.
// Apuntando al objeto global
// Por lo que debemos hacerel bindeo del this, o en su defecto
// Guardar la referencia del this
var persona = {
  name: "Feli",
  friends: ["Mati", "Caro", "Ale"],
  printFriends() {
    var that = this;
    this.friends.forEach(function (friend) {
      //console.log(that)
      console.log(that.name + " Conoce a " + friend);
    });
  },
};
// Con ES6
// Con las arrow no necesitamos eso
var persona = {
  name: "Feli",
  friends: ["Mati", "Caro", "Ale"],
  printFriends() {
    // var that = this;
    this.friends.forEach((friend) => {
      // console.log(that)
      console.log(this.name + " Conoce a " + friend);
    });
  },
};
​
persona.printFriends();
​
// En las clases sabemos que esto no se puede
// Esta es la version antigua
function Persona(nombre, apellido) {
  (this.nombre = nombre), (this.apellido = apellido);
}
Persona.prototype.getNombreCompleto = function () {
  //console.log(this);
  return this.nombre + " " + this.apellido;
};
​
// De esta forma podiamos crear un metodo con la clase
// El this se bindeaba automagicamente a la clase
​
//Si intentabamos algo como esto:
function Persona(nombre, apellido) {
  (this.nombre = nombre), (this.apellido = apellido);
}
Persona.prototype.getNombreCompleto = () => {
  //console.log(this);
  return this.nombre + " " + this.apellido;
};
// Se perdia la referencia de nuestro this
// Para lo cual, necesitamos usar la nueva sintaxis:
​
class Persona {
  constructor(nombre, apellido) {
    (this.nombre = nombre), (this.apellido = apellido);
  }
  getNombreCompleto() {
    //console.log(this);
    return this.nombre + " " + this.apellido;
  }
}
// Aca si conservamos el bindeo del this a la clase Persona
​
let persona1 = new Persona("Feli", "Ciro");
console.log(persona1.getNombreCompleto());
​
// 3. OBJETOS LITERALES
​
// Entendamoslo con un ejemplo:
// Asi era antes:
/* let nombre = "feli";
let obj = {
  nombre: nombre,
}; */
//Asi es con ES6
/* let nombre = "feli";
let obj = {
  nombre
}; */
​
// Esto aplica para cualquier contexto
// Probemos una funcion:
​
/* function prueba(nombre, edad, altura) {
  let obj = {
    nombre,
    altura,
    edad,
  };
  console.log(obj);
}
prueba("feli", 24, 1.73); */
​
// 4. TEMPLATE STRINGS -->  `` --> Back ticks
​
// Son el reemplazo de las comillas para strings
// Nos permiten usar codigo de JS
//Veamos el siguiente ejemplo:
​
// Esta es la version de antes
/* function prueba(nombre, edad) {
  return "Hola, mi nombre es: " + nombre + "\n y mi edad es: " + edad;
} */
​
//Esta es con back ticks
/* function prueba(nombre, edad) {
  return `Hola, mi nombre es: ${nombre} y mi edad es: ${edad + 2}`;
} */
//console.log(prueba("feli", 24));
​
// 5. DESTRUCTURING
​
// El destructuring nos permite almacenar datos de manera curiosa
// Nos permite extraernos los valores que nosotros queramos de un objeto/archivo
​
// Veamos un ejemplo del primer punto:
// let arr = [1, 2, 3, 4, 5];
// let [value1, value2, ...rest] = [1,2,3,4,5]
// console.log(value1)
// console.log(value2)
// console.log(rest);
​
//Ahora un ejemplo del segundo punto
// Supongamos que tenemos un archivo y estamos exportando varias funciones/variables
module.exports = {
  funcion1,
  funcion2,
  funcion3,
};
// En el siguiente archivo donde necesitamos las funciones tendremos lo siguiente
import { function1 } from "./archivoDePrueba.js";
// En este caso nos estamos extrayendo de todas las posibles funciones exportadas
// La funcion que nos interesa
​
// Miremos otro caso de spread operator
// Un caso en el que podemos guardarnos los valores de un objeto
​
// let obj = { a: 1, b: 2 };
// let {a:a1, b:nico} = obj
// console.log(obj) // { a: 1, b: 2 }
// console.log(nico) // 2
​
// 6. SPREAD OPERATOR
​
//Recordemos la diferencia entre copia por referencia y copia por valor:
​
// let obj = { a: 1, b: 2 };
// let a = 1
// let b = a //copia por valor
// let obj2 = obj // copia por referencia
// console.log(obj)
// obj2.a = 3
// console.log(obj2)
// console.log(obj);
// console.log(b)
// b = 2
// console.log(a)
​
// En la copia por referencia, modificamos el original
// Para eso podemos usar el spread operator
// Este nos genera una copia sin afectar el original
​
// let obj3 = {...obj}
// console.log(obj3)
// obj3.b=5
// console.log(obj3)
// console.log(obj)
​
// let arr = [1,2,3,4]
// let arr2 = [...arr]
// console.log(arr2)
// arr2[1] = -1
// console.log(arr2)
// console.log(arr);
​
function f(x, y, ...z) {
  // y is an Array
  console.log(z);
  //x=3
  //y = ["hello", true]
  console.log(y);
  return x * y.length; //6
}
console.log(f(3, "hello", true));
​
/* function prueba(params) {
  console.log(...params);
}
prueba([1,2,3,4,5]);
 */
​
// Veamos algunas extra
​
// Default Param
​
function f1(x, y = 12) {
  // Cuando no se pasa un valor, toma el de por defecto
  return x + y;
}
f1(3); // 15
​
function f2(x, ...y) {
  // x = 3
  // y = ["hello", true]
  return x * y.length;
}
f2(3, "hello", true); // 6
​
function f3(x, y, z) {
  return x + y + z;
}
// Pasa cada elemento del array como un elemento
f3(...[1, 2, 3]); // 6
​
// Ultimo ejemplo:
/* function saludar(nombre="Feli"){
  return `Hola ${nombre}`
}
console.log(saludar("Julio"))
console.log(saludar());
 */
​
// Enlaces a mas documentacion:
​
// Si dejan oprimida la tecla ctrl + click en la url los lleva de inmediato :D
​
// LET | CONST: https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/
// ARROW FUNCTIONS: https://desarrolloweb.com/articulos/arrow-functions-es6.html
// OBJECT LITERALS: https://www.javascripttutorial.net/es6/object-literal-extensions/
// TEMPLATE STRINGS: https://leonidasesteban.com/blog/3-cosas-que-puedes-hacer-con-los-template-literals
// DESTRUCTURING: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// DESTRUCTURING AVANZADO: https://javascript.info/destructuring-assignment
// SPREAD OPERATOR: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax