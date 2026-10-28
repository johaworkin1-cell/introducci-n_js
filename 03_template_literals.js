let nombre = "esteban"
let edad = 20;

// con el operador +
console.log("hola me llamo " + nombre +"y tengo" + edad + "años");

// con template literals (recomentado)
console.log(`hola, me llamo ${nombre} y tengo ${edad} años`)

let a = 5;
let b = 3;

console.log("resultado:" + a + b);
console.log("resultado:" + (a + b));
console.log(`resultado: ${a + b}`);


let producto = "Mouse";
let cantidad = 2;
let precio = 15000;
console.log(`Producto: ${producto}
Cantidad: ${cantidad}
Precio unitario: $${precio}
Total a pagar: $${cantidad * precio}`);

// producto: mouse
// cantidad: 2
// precio unitario: $15000
// total a pagar: $30000

let ciudad = "Bogotá";
let temperatura = 14;
console.log(`La temperatura en ${ciudad} es de ${temperatura} °C`);