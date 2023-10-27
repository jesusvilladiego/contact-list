let listadecontactos = [
    {nombre: "jorge castillo"},
    {nombre: "ana villadiego"},
    {nombre: "mauricio hernandez"},
    {nombre: "andri melendez"},
    {nombre: "elvin herrera"}
];

function agregarContacto (nombreCompleto){
   listadecontactos.push({nombre: nombreCompleto});
};

function borrarContacto (nombreCompleto){
    listadecontactos= listadecontactos.filter(contacto => contacto.nombre !== nombreCompleto )
 };

 function imprimirContactos() {
    console.log("Lista de contactos:");
    listadecontactos.forEach(contacto => {
        console.log(contacto.nombre);
    });
    }

console.log("lista inicial");
imprimirContactos();

agregarContacto("luis alvarez");
console.log("\n lista despues de añadir un nuevo contacto:");

imprimirContactos();

borrarContacto("ana villadiego");
console.log("\n lista despues de eliminar un nuevo contacto:");

imprimirContactos();