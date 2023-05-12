const usuarios = [
    {
        "apodo": "Nepeta",
        "email": "nepetalover123@gmail.com",
        "mascotas": [
            { "nombre": "Luna", "edad": 3, "color": "blanco y negro" },
            { "nombre": "Simba", "edad": 1, "color": "naranja" },
            { "nombre": "Mia", "edad": 5, "color": "gris" }
        ]
    },
    {
        "apodo": "CatLady",
        "email": "catlady999@yahoo.com",
        "mascotas": [
            { "nombre": "Tom", "edad": 2, "color": "gris y blanco" },
            { "nombre": "Lucas", "edad": 4, "color": "negro" }
        ]
    },
    {
        "apodo": "GatitoFeliz",
        "email": "gatitofeliz22@hotmail.com",
        "mascotas": [
            { "nombre": "Cleo", "edad": 1, "color": "marrón" },
            { "nombre": "Toby", "edad": 6, "color": "blanco" },
            { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }
        ]
    },
    {
        "apodo": "ElGatoNegro",
        "email": "elgatonegro@outlook.com",
        "mascotas": [
            { "nombre": "Oreo", "edad": 3, "color": "negro y blanco" },
            { "nombre": "Milo", "edad": 7, "color": "naranja" }
        ]
    },
    {
        "apodo": "GatitoTierno",
        "email": "gatitotierno5555@gmail.com",
        "mascotas": [
            { "nombre": "Pelusa", "edad": 2, "color": "gris" },
            { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" },
            { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }
        ]
    },
    {
        "apodo": "CatQueen",
        "email": "catqueen8888@hotmail.com",
        "mascotas": [
            { "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" },
            { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }
        ]
    },
    {
        "apodo": "Nepeta",
        "email": "nepetaalegre7@yahoo.com",
        "mascotas": [
            { "nombre": "Punky", "edad": 3, "color": "naranja" },
            { "nombre": "Zoe", "edad": 1, "color": "blanco" },
            { "nombre": "Simón", "edad": 4, "color": "negro" }
        ]
    },
    {
        "apodo": "GatoMimoso",
        "email": "gatomimoso55@gmail.com",
        "mascotas": [
            { "nombre": "Leo", "edad": 2, "color": "blanco" },
            { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }
        ]
    }
];

//### Ejercicio 1

// Muestra por consola:
// - el`id` del primer Usuario
//     - el`nombre` del tercer Usuario
//         - el color de la segunda `mascota` del tercer Usuario

// Agregar la propiedad "id", a cada objeto dentro del array "usuarios", devolviendo un nuevo
//array de objetos con esta propiedad adicional.
const usuariosConId = usuarios.map((usuarios, i) => ({ "id": i, ...usuarios }));

console.log("\n//*----------------------º_~*<(Ejercicio 1)>*~_º----------------------*//\n");
console.log(usuariosConId);
console.log(`El id del primer usuario es:  ${usuariosConId[0].id}`);
console.log(`El nombre del tercer usuario es: ${usuariosConId[2].apodo}`);
console.log(`El color de la segunda mascota del tercer usuario es: ${usuariosConId[2].mascotas[1].color}`);

// ### Ejercicio 2

// Usando desestructuracion:
// - extrae en variables el primer y cuarto elemento
//     - usando lo obtenido arriba extrae en variables `email` y `mascotas` del primer elemento

const [usuario1, , , usuario4] = usuariosConId;
let { email, mascotas } = usuario1;
let mascotasUsuario = usuario1.mascotas;
let nombresMascotas = mascotas.map(mascota => mascota.nombre);

console.log("\n//*----------------------º_~*<(Ejercicio 2)>*~_º----------------------*//\n");
console.log(`\n//Extrayendo variables desestructuración//\n`);
console.log(`Variable usuario4: ` + JSON.stringify(usuario4));
console.log("\n");
console.log(`Variable usuario1: ` + JSON.stringify(usuario1));
console.log("\n");
console.log(`Del primer usuario, accediendo por variables, su email es: ${email} y sus mascotas: ${nombresMascotas.join(", ")}`);

// ### Ejercicio 3

// spread operator:
// - haz una copia de las `mascotas` obtenidas arriba y agregale la mascota`{ "nombre": "Nami", "edad": 2, "color": "negro" }`
//     (usar console log para mostrar que no se modifico el original)

let AgregarMascota = [{ "nombre": "Nami", "edad": 2, "color": "negro" }, ...mascotas];

console.log("\n//*----------------------º_~*<(Ejercicio 3)>*~_º----------------------*//\n");
console.log(mascotas);
console.log(AgregarMascota);

// ### Ejercicio 4

//     - crea una funcion que reciba por props un objeto con las siguientes keys: ** name **, ** cantMascotas ** y que retorne un string con el siguiente formato
//         `"El Usuario {name} tiene {cantMascotas} mascotas"`

let datosUsuario = (name, cantMascotas) => {

    return `El usuario ${name} tiene ${cantMascotas} ${cantMascotas > 1 ? "mascotas" : "mascota"}`
}
console.log("\n//*----------------------º_~*<(Ejercicio 4)>*~_º----------------------*//\n");
console.log(usuariosConId[7]);
console.log(datosUsuario(usuariosConId[7].apodo, (usuariosConId[7].mascotas.length)));



// ### Ejercicio 5

//     - usando la operacion`filter`, crea un array con los Usuarios que tengan ** mas ** de 1 mascota
//         - usando la operacion `map` y la funcion anterior, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente
// Ej:
// ```js
// [
//   "El Usuario Gaby tiene 3 mascotas",
//   "El Usuario Morgi tiene 5 mascotas"
// ]
// ```
//     - Usando la operacion reduce devuelve la cantidad total de mascotas
console.log("\n//*----------------------º_~*<(Ejercicio 5)>*~_º----------------------*//\n");

const usuarioConMascotas = usuariosConId.filter((obj) => 
obj.mascotas.length > 1
)
console.log(usuarioConMascotas);  


let arrayUsuariosConMascotas= usuarioConMascotas.map((usuario) => {
return `El Usuario ${usuario.apodo} tiene ${usuario.mascotas.length} mascotas`;
});
console.log(arrayUsuariosConMascotas);


let totalMascotas = usuariosConId.reduce((total, usuario) => {
return total + usuario.mascotas.length;
}, 0);

console.log("La cantidad total de mascotas es: " + totalMascotas);
