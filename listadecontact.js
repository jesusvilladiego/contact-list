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
// funcion para agregar
function agregarContacto (nuevoContacto){
   listadecontactos.push(nuevoContacto);
};
// funcion para borrar 
function borrarContacto (id){
    listadecontactos= listadecontactos.filter(contacto => contacto.id !== id );
 };

// funcion para imprimir 

function imprimirContactos() {
    console.log("Lista de contactos:");
    listadecontactos.forEach(contacto => {
        console.log(`id: ${contacto.id}, nombre: ${contacto.nombres} ${contacto.apellidos}, teléfono: ${contacto.telefono}, ubicación: ciudad - ${contacto.ubicaciones.ciudad}, dirección - ${contacto.ubicaciones.direccion}`);
    });
};
    
// funcion para actualizar

function actualizarContacto(id,campo,nuevoValor){
    const contacto = listadecontactos.find(c => c.id === id);
    if (contacto) {
        if (campo === 'nombres' || campo === 'apellidos' || campo === 'telefono') {
            contacto[campo] = nuevoValor;
        } else if (campo === 'ciudad' || campo === 'direccion') {
            contacto.ubicaciones[campo] = nuevoValor;
        } else {
            console.log("Campo inválido para actualizar");
        }
        };

};

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


actualizarContacto(100162516516, "ciudad", "estados unidos");
console.log("\n lista actualizada:");

imprimirContactos();

