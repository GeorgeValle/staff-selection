// para buscar candidatos

// let $busquedaNombre = document.getElementById("forName")
// $busquedaNombre.addEventListener("keyup", validarEnter);

// function validarEnter(e){
//     if(e.keyCode===13){ buscarXNombre(e)}
// }

let $busquedaNombre = document.getElementById("xNombre")
$busquedaNombre.addEventListener("submit", buscarXNombre);


function buscarXNombre(e){
    e.preventDefault();
    
    let formulario = e.target,
    $nombre = formulario.children[1].value;

    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="") alert('No hay candidatos cargados')
    $carpeta = JSON.parse(carpeta);

    

        
        let candidato = $carpeta.find( cand => cand.nombre === $nombre.toLowerCase())


        const $porNombre = document.getElementById("father1");
                        
        let divi = document.createElement("divi");
        // divi.innerHTML = candidato.mostrarPropiedades();
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
}                      



let $busquedaDNI = document.getElementById("xDNI");
$busquedaDNI.addEventListener("submit", buscarXDNI);

function buscarXDNI(e){

    e.preventDefault();
    
    let formulario = e.target,
    $DNI = parseInt(formulario.children[1].value);
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    carpeta==null||carpeta==""
    ?alert('No hay candidatos cargados')
    :$carpeta = JSON.parse(carpeta);
                
                        
                        if($carpeta.some( cand => cand.DNI != $DNI)) alert("No se encontró un candidato"); 
                        
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
                        
                    
}
function buscarXFront(){
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="")alert('No hay candidatos cargados');
    $carpeta = JSON.parse(carpeta);

                        
                        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
                        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Frontend'));
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
}

function buscarXBack(){
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="")alert('No hay candidatos cargados');
    $carpeta = JSON.parse(carpeta);
                        
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Backend'));
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
                        
                        
                        

}
function buscarXFull(){
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="")alert('No hay candidatos cargados');
    $carpeta = JSON.parse(carpeta);
                        
    /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
    const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Fullstack'));
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
                    
                    
                    

}    



// busca por especialidad a través del boton Frontend
const $btnFrontend = document.getElementById('front');

$btnFrontend.addEventListener('click', buscarXFront);

// busca por especialidad a través del boton Backend
const $btnBackend = document.getElementById('back');

$btnBackend.addEventListener('click', buscarXBack);

// busca por especialidad a través del boton Fullstack
const $btnFullstack = document.getElementById('full');

$btnFullstack.addEventListener('click', buscarXFull);

