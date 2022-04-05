// let $ncandidatos=0,
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

    mostrarPropiedades(){
        alert(`Datos del Candidato: Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Dirección: ${this.direccion}, Teléfono; ${this.telefono}, Especialidad: ${this.especialidad}.`);
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
                let $nombre = prompt("Ingrese el nombre del candidato a buscar");

                const candidato = $carpeta.find( cand => cand.nombre === $nombre)

                candidato.mostrarPropiedades();    
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