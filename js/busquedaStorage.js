// para buscar candidatos

// let $busquedaNombre = document.getElementById("forName")
// $busquedaNombre.addEventListener("keyup", validarEnter);

// function validarEnter(e){
//     if(e.keyCode===13){ buscarXNombre(e)}
// }



/* ************************************************
 ***********  Sala de Funciones *******************
 ************************************************* */

// para mostar modales personalizados
function showModalBusqueda(texto){

    const $container = document.getElementById("father2");
    let div = document.createElement("div");
    div.innerHTML = `<h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
}


function closeModal() {
    //hace que cierre el modal
    document.getElementById('modal').style.display = 'none';
    
    //elimina el mensaje personalizado impreso anteriomente.
    let $removeNodo = document.getElementsByClassName("remove-text");
    for(i=0;i<$removeNodo.length;i++){
        $removeNodo[i].remove();
    };
}

function removeSearch() {
    //elimina el listado de candiadatos impreso antes que cargue el nuevo.
    let $removeNodo = document.getElementsByClassName("remove-search");
    for(i=0;i<$removeNodo.length;i++){
        $removeNodo[i].remove();
    };
}

//función que busca por nombre
function buscarXNombre(e){
    e.preventDefault();
    
    let $carpeta;
    let formulario = e.target,
    $nombre = formulario.children[1].value;

    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="") alert('No hay candidatos cargados')
    $carpeta = JSON.parse(carpeta);

    
    if($carpeta.some( cand => cand.nombre != $nombre.toLowerCase())){ 
        showModalBusqueda('No se encontró un candidato'); //agregar icono
        document.getElementById('xNombre').reset();
    }
        //trae al objeto candidato de array
        let candidato = $carpeta.find( cand => cand.nombre === $nombre.toLowerCase())

        //elimina el listado de la busqueda anterior
        removeSearch()
    
        
        const $porNombre = document.getElementById("father1");
        
                        
        let divi = document.createElement("divi");
        // divi.innerHTML = candidato.mostrarPropiedades();
        divi.innerHTML =   `<article class="col card-text found remove-search glass-greenty-card p-3 mb-3 mt-2" style="width:28rem">
                                <h3>Candidato: ${candidato.nombre}</h3>
                                <p> Edad: ${candidato.edad} </p>
                                <p> DNI: ${candidato.DNI} </p>
                                <p> Dirección: ${candidato.direccion} </p>
                                <p> Telefono: ${candidato.telefono} </p>
                                <p> Especialidad: ${candidato.especialidad} </p>
                            </article>`;
                        $porNombre.appendChild(divi);
                        showModalBusqueda("Candidato Impreso en Web"); // agregar icono al modal
                        // limpia el input de busqueda
                        document.getElementById('xNombre').reset();
                        
                        // candidato.mostrarPropiedades();
}                      


// función que busca por DNI
function buscarXDNI(e){

    e.preventDefault();
    
    let formulario = e.target,
    $DNI = parseInt(formulario.children[1].value);
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    carpeta==null||carpeta==""
    ?showModalBusqueda('No hay candidatos cargados')//alert('No hay candidatos cargados')// 
    :$carpeta = JSON.parse(carpeta);
                
                        
            if($carpeta.some( cand => parseInt(cand.DNI) != $DNI)){ 
            showModalBusqueda('No se encontró un candidato'); //alert("No se encontró un candidato"); 
            document.getElementById('xDNI').reset();
            }
            
            let candidato2 = $carpeta.find( cand => parseInt(cand.DNI) === $DNI);

            //elimina el listado de la busqueda anterior
            removeSearch()      

            //imprimiremos la nueva busqueda
            const $container = document.getElementById("father1");
                        
            let div = document.createElement("div");
            //¿porque me da undefined si uso el metodo de la clase?
            //div.innerHTML = candidato2.mostrarPropiedades();

            div.innerHTML = `<article class="col card-text found remove-search glass-greenty-card p-3 mb-3 mt-2" style="width:28rem">
                                <h3>Candidato: ${candidato2.nombre}</h3>
                                <p> Edad: ${candidato2.edad} </p>
                                <p> DNI: ${candidato2.DNI} </p>
                                <p> Dirección: ${candidato2.direccion} </p>
                                <p> Telefono: ${candidato2.telefono} </p>
                                <p> Especialidad: ${candidato2.especialidad} </p>
                            </article>`;

            $container.appendChild(div);
                    showModalBusqueda('Candidato Impreso en Web')//alert("Candidato Impreso en Web");
                    document.getElementById('xDNI').reset();
                        
                    
}

// funcion que busca por especialidad frontend
function buscarXFront(){
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="")showModalBusqueda('No hay candidatos cargados')//alert('No hay candidatos cargados');
    $carpeta = JSON.parse(carpeta);


        //controla que haya candidatos con esa especialidad
        if($carpeta.some(cand => cand.especialidad.includes('Frontend'))==false)
        {showModalBusqueda('"NO" hay candidatos con esa especialidad')}; // agregar icono  
                        
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Frontend'));
        
        //elimina el listado de la busqueda anterior
        removeSearch()

        
        /* Te imprime en el html todos los candidatos con esa especialidad  */
        for(let i = 0; i < $filtroEspecialidad.length; i++) {
            let candidato = $filtroEspecialidad[i];
            const $porEspecialidad = document.getElementById("father1");
            let divi = document.createElement("divi");
            divi.innerHTML = `<article class="col card-text remove-search found glass-greenty-card p-3 mb-3 mt-2" style="width:28rem">
                                <h3>Candidato: ${candidato.nombre}</h3>
                                <p> Edad: ${candidato.edad} </p>
                                <p> DNI: ${candidato.DNI} </p>
                                <p> Dirección: ${candidato.direccion} </p>
                                <p> Telefono: ${candidato.telefono} </p>
                                <p> Especialidad: ${candidato.especialidad} </p>
                            </article>`;
            $porEspecialidad.appendChild(divi);
            showModalBusqueda("Busqueda Impresa en Web"); // agregar icono al modal
                        }
}

function buscarXBack(){
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="")showModalBusqueda('No hay candidatos cargados');// agregar icono al modal
    $carpeta = JSON.parse(carpeta);

        //controla que haya candidatos con esa especialidad
        if($carpeta.some(cand => cand.especialidad.includes('Backend'))==false)
        {showModalBusqueda('"NO" hay candidatos con esa especialidad')}; // agregar icono              
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Backend'));
        
        //elimina el listado de la busqueda anterior
        removeSearch()
        
        
        /* Te imprime en el html todos los candidatos con esa especialidad  */
        for(let i = 0; i < $filtroEspecialidad.length; i++) {
                let candidato = $filtroEspecialidad[i];
                const $porEspecialidad = document.getElementById("father1");
                let divi = document.createElement("divi");
                divi.innerHTML = `<article class="col card-text found remove-search glass-greenty-card p-3 mb-3 mt-2" style="width:30rem">
                                    <h3>Candidato: ${candidato.nombre}</h3>
                                    <p> Edad: ${candidato.edad} </p>
                                    <p> DNI: ${candidato.DNI} </p>
                                    <p> Dirección: ${candidato.direccion} </p>
                                    <p> Telefono: ${candidato.telefono} </p>
                                    <p> Especialidad: ${candidato.especialidad} </p>
                                </article>`;
                $porEspecialidad.appendChild(divi);
                showModalBusqueda("Busqueda Impresa en Web"); // agregar icono al modal
        }
                        
                        
                        

}
function buscarXFull(){
    let $carpeta;
    let carpeta = localStorage.getItem('carpeta');
    if(carpeta==null||carpeta=="")showModalBusqueda('No hay candidatos cargados');// agregar icono al modal
    $carpeta = JSON.parse(carpeta);

    //controla que haya candidatos con esa especialidad
    if($carpeta.some(cand => cand.especialidad.includes('Fullstack'))==false)
    {showModalBusqueda('"NO" hay candidatos con esa especialidad')}; // agregar icono al modal
                        
    /* se fitran los candidatos con la especialidad escrita creando un nuevo array */   
    const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Fullstack'));

    //elimina el listado de la busqueda anterior
    removeSearch()



    /* Te imprime en el html todos los candidatos con esa especialidad  */
    for(let i = 0; i < $filtroEspecialidad.length; i++) {
            let candidato = $filtroEspecialidad[i];
            const $porEspecialidad = document.getElementById("father1");
            let divi = document.createElement("divi");
            divi.innerHTML = `<article class="col card-text remove-search found glass-greenty-card p-3 mb-3 mt-2" style="width:28rem">
                                <h3>Candidato: ${candidato.nombre}</h3>
                                <p> Edad: ${candidato.edad} </p>
                                <p> DNI: ${candidato.DNI} </p>
                                <p> Dirección: ${candidato.direccion} </p>
                                <p> Telefono: ${candidato.telefono} </p>
                                <p> Especialidad: ${candidato.especialidad} </p>
                            </article>`;
            $porEspecialidad.appendChild(divi);
            showModalBusqueda("Busqueda Impresa en Web"); // agregar icono modal
    }
                    
                    
                    

}    

/* ************************************************
 ***********  Salón de Eventos *******************
 ************************************************* */


// Event For close my beautifull modal / para cerrar el modal
const $btnCloseModal = document.getElementById('closeModalBusqueda');
$btnCloseModal.addEventListener('click', closeModal);

// for search by candidate name / para buscar por Nombre un candidato
let $busquedaNombre = document.getElementById("xNombre")
$busquedaNombre.addEventListener("submit", buscarXNombre);

// te busca por DNI al candidato
let $busquedaDNI = document.getElementById("xDNI");
$busquedaDNI.addEventListener("submit", buscarXDNI);

// busca por especialidad a través del boton Frontend
const $btnFrontend = document.getElementById('front');
$btnFrontend.addEventListener('click', buscarXFront);

// busca por especialidad a través del boton Backend
const $btnBackend = document.getElementById('back');
$btnBackend.addEventListener('click', buscarXBack);

// busca por especialidad a través del boton Fullstack
const $btnFullstack = document.getElementById('full');
$btnFullstack.addEventListener('click', buscarXFull);

