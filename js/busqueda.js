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
        // this.ID = this.newID;
    }
    // muestra todas la propiedades de un objeto candidato
    mostrarPropiedades() {
        `
                            <article class="col card-text found glass-greenty-card p-3 mb-3 mt-2" style="width:30rem">
                                    <h3>Candidato: ${this.nombre}</h3>
                                    <p> DNI: ${this.DNI} </p>
                                    <p> Dirección: ${this.direccion} </p>
                                    <p> Telefono: ${this.telefono} </p>
                                    <p> Especialidad: ${this.especialidad} </p>
                                </article>
                                    `;
    }

    // newID(){
    //     this.ID += i++; 
    // }
    
    

}

/* function filtrado($DNI1,...$DNIN){

    let candidato = $filtroEspecialidad.find( cand => cand.DNI === $DNI1)


    const $porDNI = document.getElementById("father1");
    
    let divi = document.createElement("divi");
    divi.innerHTML = candidato.mostrarPropiedades();
        $porDNI.appendChild(divi);

    $DNIN.forEach(function( $N){
        let candidatoN = $filtroEspecialidad.find( cand => cand.DNI === $N)


        const $porDNIN = document.getElementById("father1");
        
        let divN = document.createElement("divN");
        divN.innerHTML = candidatoN.mostrarPropiedades();
            $porDNIN.appendChild(divN); 


    });

}
*/


// para agregar candidatos
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


                        const $porNombre = document.getElementById("father1");
                        
                        let divi = document.createElement("divi");
                        //divi.innerHTML = candidato.mostrarPropiedades();
                            divi.innerHTML = `<article class="col card-text found glass-greenty-card p-3 mb-3 mt-2" style="width:30rem">
                                    <h3>Candidato: ${candidato.nombre}</h3>
                                    <p> DNI: ${candidato.DNI} </p>
                                    <p> Dirección: ${candidato.direccion} </p>
                                    <p> Telefono: ${candidato.telefono} </p>
                                    <p> Especialidad: ${candidato.especialidad} </p>
                                </article>`;
                            $porNombre.appendChild(divi);
                        alert("Candidato Impreso en Web");
                        // candidato.mostrarPropiedades();
                        
                        break;
                //te busca un objeto candidato por el numero de DNI
                case 2:
                        let $DNI = parseInt(prompt("Ingrese el número de DNI del candidato"));
                        if ($carpeta.some( cand => cand.DNI != $DNI)) alert("No se encontró un candidato, ¡Hasta luego!"); 
                        let candidato2 = $carpeta.find( cand => cand.DNI === $DNI);

                        const $container = document.getElementById("father1");
                        
                        let div = document.createElement("div");
                        //¿porque me da undefined si uso el metodo de la clase?
                        //div.innerHTML = candidato2.mostrarPropiedades();

                        div.innerHTML = `<article class="col card-text found glass-greenty-card p-3 mb-3 mt-2" style="width:30rem">
                                <h3>Candidato: ${candidato2.nombre}</h3>
                                <p> DNI: ${candidato2.DNI} </p>
                                <p> Dirección: ${candidato2.direccion} </p>
                                <p> Telefono: ${candidato2.telefono} </p>
                                <p> Especialidad: ${candidato2.especialidad} </p>
                            </article>
                                `;

                            $container.appendChild(div);
                        alert("Candidato Impreso en Web");
                        
                    
                        break;
                // te busca los nombres de los candidatos que tengan esa especialidad
                case 3:
                        let $especial = 
                        prompt("Ingrese la especialidad de los candidatos a buscar (frontend, backend, fullstack");
                        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
                        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes($especial));
                        /* Te imprime en el html todos los candidatos con esa especialidad  */
                        for(let i = 0; i < $filtroEspecialidad.length; i++) {
                                let candidato = $filtroEspecialidad[i];
                                const $porEspecialidad = document.getElementById("father1");
                                let divi = document.createElement("divi");
                                divi.innerHTML = `<article class="col card-text found glass-greenty-card p-3 mb-3 mt-2" style="width:30rem">
                                <h3>Candidato: ${candidato.nombre}</h3>
                                <p> DNI: ${candidato.DNI} </p>
                                <p> Dirección: ${candidato.direccion} </p>
                                <p> Telefono: ${candidato.telefono} </p>
                                <p> Especialidad: ${candidato.especialidad} </p>
                            </article>`;
                                $porEspecialidad.appendChild(divi);
                                alert("Busqueda Impresa en Web"); 
                        }

                        // alert(`Los candidatos encontrados son: ${$listaNombres}. `);
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