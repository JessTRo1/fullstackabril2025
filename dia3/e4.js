const prompt = require('prompt-sync')();

let array = ["Juan", "Pedro", "Lucia", "Pepe", "Francisco", "Jose", "Diego", "Luis", "Ana", "Maria"];

array.unshift("Carlos");
array.push("Javier"); 
array.splice(5, 1);

let indice = array.indexOf("Pepe");
console.log("La posicion de Pepe es:", indice);

console.log(array);

const reversed = array.reverse();
console.log("El array al reves es:", reversed);

let string = array.join(" - ");
console.log("El array como string es:", string);

let convert = string.split(" - ");
console.log("El string como array es:", convert);

for (let i = 0; i < array.length; i++) {
    console.log("El nombre en la posicion", i, "es:", array[i]);
}

array.forEach((element, index) => {
    array[index] = `${element}-${index + 1}`;   
    console.log(`posicion ${index + 1} es: ${element}`); 
});

console.log("Array modificado:", array);


const nombreBuscado = prompt("Ingresa un nombre para buscar: ");

if (array.includes(nombreBuscado)) {
    console.log(`"${nombreBuscado}" SÍ está en el array.`);
} else {
    console.log(`"${nombreBuscado}" NO está en el array.`);
}

const elementosConA = array.filter(elemento => 
    elemento.toLowerCase().includes("a")
);

console.log("Elementos que contienen la letra 'a':", elementosConA);

let array2 = ["Pera", "Manzana", "Naranja", "Fresa"];
let [fruta1, fruta2, fruta3, fruta4] = array2;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(fruta4);

