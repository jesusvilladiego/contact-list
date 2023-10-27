let listadecontactos = [

    {id: 100162516516,
        nombres: "jorge", 
        apellidos: "castillo",
        telefono: 3015741658,
        ubicaciones: {
            ciudad: "cartagena",
            direccion: "barrio fredonia calle 14"
        },
        },

{id: 1235918465,
    nombres: "ana", 
    apellidos: "villadiego",
    telefono: 32078567421,
    ubicaciones: {
        ciudad: "cartagena",
        direccion: "barrio san fernando calle del perro"
            },
            },

{id: 73185492,
nombres: "mauricio", 
apellidos: "hernandez",
telefono: 3219843214,
ubicaciones: {
    ciudad: "cartagena",
    direccion: "barrio nelson mandela calle del mamon"
    },
}

];

function agregarContacto (nuevoContacto){
   listadecontactos.push(nuevoContacto);
};

function borrarContacto (id){
    listadecontactos= listadecontactos.filter(contacto => contacto.id !== id );
 };

// funcion para imprimir y actualizar

function imprimirContactos() {
    console.log("Lista de contactos:");
    listadecontactos.forEach(contacto => {
        console.log(`id: ${contacto.id}, nombre: ${contacto.nombres} ${contacto.apellidos}, teléfono: ${contacto.telefono}, ubicación: ciudad - ${contacto.ubicaciones.ciudad}, dirección - ${contacto.ubicaciones.direccion}`);
    });
}
    

console.log("lista inicial");
imprimirContactos();

const nuevoContacto = {
id: 98465351,
nombres: "laura", 
apellidos: "martinez",
telefono: 3248795221,
ubicaciones: {
    ciudad: "bogota",
    direccion: "barrio suba rincon"
    },
} 

agregarContacto(nuevoContacto);
console.log("\n lista despues de añadir un nuevo contacto:");

imprimirContactos();

borrarContacto(1235918465);
console.log("\n lista despues de eliminar un contacto:");

imprimirContactos();