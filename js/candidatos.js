/* Simulador de reclutamiento */
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

    mostrarPropiedades() {
        alert(`Datos del Candidato: Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Dirección: ${this.direccion}, Teléfono; ${this.telefono}, Especialidad: ${this.especialidad}.`);
    }

    

}

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

function buscarCandidato(){

    let election = parseInt(prompt(`Ingrese el numero de la opcion para buscar candidato: 
    1 por nombre
    2 por DNI ` ));

    switch(election){
                case 1:
                        let $nombre = prompt("Ingrese el nombre del candidato a buscar").toLowerCase();
                        if ($nombre == "") (alert("No deje la selección vacia"),
                        $nombre = prompt("Ingrese el nombre del candidato a buscar").toLowerCase());
                        let candidato = $carpeta.find( cand => cand.nombre === $nombre)
                        candidato.mostrarPropiedades();
                        
                        break;
                case 2:
                        let $DNI = parseInt(prompt("Ingrese el número de DNI del candidato"));
                        if ($carpeta.find( cand => cand.DNI != $DNI)) alert("No se encontró un candidato, ¡Hasta luego!"); 
                        let candidato2 = $carpeta.find( cand => cand.DNI === $DNI);
                        candidato2.mostrarPropiedades();
                        
                        
                        break;
                default:
                        alert("no es una selección valida");
                        break;

    }   
}





alert("Bienvenidos al simulador de reclutamiento IT");

$confirmacion=confirm("¿Desea agregar un nuevo candidato?");

$confirmacion==false
? alert("¡Hasta luego!")
: agregarCandidato();

do{
    $confirmacion=confirm("¿Desea buscar candidatos?");
    
    $confirmacion==false
    ?alert("¡Hasta luego!")
    :buscarCandidato();
}while($confirmacion==true)