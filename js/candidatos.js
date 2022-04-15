 /*Simulador de reclutamiento */


let $carpeta= new Array(),
$confirmacion= true;

class Candidato{
    constructor(nombre,edad, DNI, direccion,telefono,especialidad,){
        this.nombre = nombre,
        this.edad = edad,
        this.DNI = DNI,
        this.direccion = direccion,           
        this.telefono = telefono,
        this.especialidad = especialidad;
    }
    // muestra todas la propiedades de un objeto candidato
    mostrarPropiedades() {
        alert(`Datos del Candidato: Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Dirección: ${this.direccion}, Teléfono; ${this.telefono}, Especialidad: ${this.especialidad}.`);
    }
    
    

}
// para agregar candaidatos
function agregarCandidato(){
    do{               
        let $nombre= prompt(`Ingrese nombre`).toLowerCase(),
            $edad= parseInt(prompt(`Ingrese edad`)),
            $DNI= parseInt(prompt(`Ingrese número de DNI`)),
            $direccion = prompt(`Ingrese dirección`).toLowerCase(),                                            
            $telefono = parseInt(prompt(`Ingrese teléfono`)),
            $especialidad = prompt("Ingrese especilidad (ejemplo: frontend backend, fullstack, etc)").toLowerCase(),
        
            candidato1 = new Candidato($nombre, $edad, $DNI, $direccion, $telefono, $especialidad );

            $carpeta.push(candidato1);
            $confirmacion=confirm(`¿Desea agregar otro candidato?`);           
    }while($confirmacion==true);
}
// para buscar candidatos
function buscarCandidato(){

    let election = parseInt(prompt(`Ingrese el numero de la opcion para buscar candidato: 
    1 Por nombre
    2 Por DNI
    3 Por especialidad` ));

    switch(election){
                // te busca un objeto candidato por el nombre
                case 1:
                        let $nombre = prompt("Ingrese el nombre del candidato a buscar").toLowerCase();
                        if ($nombre == "") (alert("No deje la selección vacia"),
                        $nombre = prompt("Ingrese el nombre del candidato a buscar").toLowerCase());
                        let candidato = $carpeta.find( cand => cand.nombre === $nombre)
                        candidato.mostrarPropiedades();
                        
                        break;
                //te busca un objeto candidato por el numero de DNI
                case 2:
                        let $DNI = parseInt(prompt("Ingrese el número de DNI del candidato"));
                        if ($carpeta.find( cand => cand.DNI != $DNI)) alert("No se encontró un candidato, ¡Hasta luego!"); 
                        let candidato2 = $carpeta.find( cand => cand.DNI === $DNI);
                        candidato2.mostrarPropiedades();
                        
                        
                        break;
                // te busca los nombres de los candidatos que tengan esa especialidad
                case 3:
                        let $especial = 
                        prompt("Ingrese la especialidad de los candidatos a buscar (frontend, backend, fullstack");
                        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
                        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes($especial));
                        // solo se filtan los nombres de los candidatos del array de arriba
                        let $listaNombres = $filtroEspecialidad.map(cand => cand.nombre).join(",  ");
                        

                        // te devuelve la lista de nombres que tienen esa especialidad.
                        alert(`Los candidatos encontrados son: ${$listaNombres}. `);
                        break;

                default:
                        alert("No es una selección valida");
                        break;

    }   
}




// mensaje de bienvenida
alert("Bienvenidos al simulador de reclutamiento IT");

$confirmacion=confirm("¿Desea agregar un nuevo candidato?");

/* te saca con un mensaje si le das cancelar o lanza la
funcion para agregar candidatos*/
$confirmacion==false
? alert("¡Hasta luego!")
: agregarCandidato();

/* un do while para ir preguntando
 si quiero seguir buscando candidatos */
do{
    $confirmacion=confirm("¿Desea buscar candidatos?");
    
    $confirmacion==false
    ?alert("¡Hasta luego!")
    :buscarCandidato();
}while($confirmacion==true)