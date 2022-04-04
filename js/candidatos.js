// let $ncandidatos=0,
let $carpeta= Array.of([]),
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

    mostrarPropiedades(){
        alert(`Datos del Candidato: Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Dirección: ${this.direccion}, Teléfono; ${this.telefono}, Especialidad: ${this.especialidad}.`);
    }

    static buscarNombre($nombre){

        this.nombre == $nombre 
        ?this.mostrarPropiedades()
        : alert("No se encontró el candidato");
    }

    static buscarEspecialidad($especialidad){
        this.especialidad == $especialidad 
        ?this.mostrarPropiedades()
        : alert("No se encontro candidato con esa especialidad");
    }

    static buscarDNI($dni){
        this.DNI == $dni
        ?this.mostrarPropiedades()
        : alert("No se encontro DNI");
    }

}

function agregarCandidato(){
    do{               
        let $nombre= prompt(`Ingrese nombre`),
            $edad= prompt(`Ingrese edad`),
            $DNI= prompt(`Ingrese DNI`),
            $direccion = prompt(`ìngrese dirección`),                                            
            $telefono = prompt(`ingrese teléfono`),
            $especialidad = prompt("ingrese especilidad (ejemplo: frontend backend, fullstack, etc)"),
                
            candidato1 = new Candidato($nombre, $edad, $DNI, $direccion, $telefono, $especialidad );

            $carpeta.push(candidato1);
            $confirmacion=confirm(`¿Desea agregar otro candidato?`);           
    }while($confirmacion==true);
}

function buscarCandidato(){

    let eleccion = parseInt(prompt
                ( `Busqueda por nombre: 1           
                busqueda por especialidad: 2
                busqueda por DNi: 3 `));

    switch(eleccion){
            case 1:
                let $nombre = prompt("Ingrese nombre de candidato a buscar")
                for (const candidato of $carpeta)
                candidato.buscarNombre($nombre);
                break;
            case 2:
                let $especialidad = prompt("Ingrese la especialidad para encontrar candidatos")
                for (const candidato of $carpeta)
                candidato.buscarEspecialidad($especialidad);
                break;
                case 3:
                let $DNI = prompt("Ingrese la especialidad para encontrar candidatos")
                for (const candidato of $carpeta)
                candidato.buscarDNI($DNI);
            default:
                alert("No es una opcion valida")
    }
}





alert("bienvenidos al simulador de reclutamiento IT");

$confirmacion=confirm("¿Desea agregar un nuevo candidato?");

$confirmacion==false
? alert("hasta luego")
: agregarCandidato();

do{
    $confirmacion=confirm("¿Desea buscar candidatos?");
    
    $confirmacion==false
    ?alert("hasta luego")
    :buscarCandidato();
}while($confirmacion==true)