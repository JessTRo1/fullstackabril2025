let nombres = [];
let contador = 1;


export function obtenerNombres() {
  return nombres;
}

export function añadirNombre(nombre) {
  const nuevo = { id: contador++, nombre };
  nombres.push(nuevo);
  return nuevo;
}


export function eliminarNombre(id) {
  const idNum = parseInt(id);
  const inicial = nombres.length;
  nombres = nombres.filter((n) => n.id !== idNum);
  return nombres.length < inicial; // true si se eliminó algo
}