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
    setTimeout(closeModal, 2500);
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

//elimina el listado de candidatos impresos antes que cargue el nuevo.
function removeSearch() {
    
    let $removeNodo = document.getElementsByClassName("remove-search");
    for(i=0;i<$removeNodo.length;i++){
        $removeNodo[i].remove();
    };
}


function imprimirBusqueda(candidato){

    let {nombre,edad,DNI,direccion,provincia,ciudad,telefono,email,especialidad,seniority,lenguaje}=candidato;
    const $porNombre = document.getElementById("father1");
        
                        
    let divi = document.createElement("divi");
    
    divi.innerHTML =   `<article class="col card-text found remove-search glass-greenty-card p-3 mb-3 mt-2" style="width:28rem">
                            <h3>Candidato: ${nombre}</h3>
                            <p> Edad: ${edad} </p>
                            <p> DNI: ${DNI} </p>
                            <p> Dirección: ${direccion} </p>
                            <p> Provincia: ${provincia}</p>
                            <p> Ciudad: ${ciudad}</p>
                            <p> Telefono: ${telefono} </p>
                            <p> E-mail: ${email} </p>
                            <p> Especialidad: ${especialidad} </p>
                            <p> Seniority: ${seniority} </p>
                            <p> Lenguajes: ${lenguaje.join(', ')} </p>
                            
                        </article>`;
                    $porNombre.appendChild(divi);
                    showModalBusqueda("Candidato Impreso en Web"); // agregar icono al modal
                    
}

//imprime los candiadtos por especialidad
function imprimirMultiple($filtro){
for(let i = 0; i < $filtro.length; i++) {
    let {nombre,edad,DNI,direccion,provincia,ciudad,telefono,email,especialidad,seniority,lenguaje} 
    = $filtro[i];
    const $porFiltro = document.getElementById("father1");
    let divi = document.createElement("divi");
    divi.innerHTML = `<article class="col card-text remove-search found glass-greenty-card p-3 mb-3 mt-2" style="width:28rem">
                        <h3>Candidato: ${nombre}</h3>
                        <p> Edad: ${edad} </p>
                        <p> DNI: ${DNI} </p>
                        <p> Dirección: ${direccion} </p>
                        <p> Provincia: ${provincia}</p>
                        <p> Ciudad: ${ciudad}</p>
                        <p> Telefono: ${telefono} </p>
                        <p> E-mail: ${email} </p>
                        <p> Especialidad: ${especialidad} </p>
                        <p> Seniority: ${seniority} </p>
                        <p> Lenguaje: ${lenguaje.join(', ')} </p>
                    </article>`;
                    $porFiltro.appendChild(divi);
    showModalBusqueda("Busqueda Impresa en Web"); // agregar icono al modal
                }
}
//función que busca por nombre
function buscarXNombre(e){
    e.preventDefault();
    
    let formulario = e.target,
    $nombre = formulario.children[1].value;
    document.getElementById('xNombre').reset();
    
    
    
     //optimisado, busca los candidatos del localStorage  
    let $carpeta = JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda('No hay candidatos cargados');
    try {    
        //trae al objeto candidato de array
        let candidato = $carpeta.find( cand => cand.nombre === $nombre.toLowerCase());

        //elimina el listado de la busqueda anterior
        removeSearch();


        $carpeta.some( cand => cand.nombre != $nombre.toLowerCase())==true 
        ?showModalBusqueda('No se encontró un candidato') //agregar icono
        :imprimirBusqueda(candidato);
    }
    catch{

    };

}                      


// función que busca por DNI
function buscarXDNI(e){

    e.preventDefault();
    
    let formulario = e.target,
    //obtiene el nombre del input
    $DNI = parseInt(formulario.children[1].value);
    document.getElementById('xDNI').reset();
    // busca los candidatos del localStorage
    let $carpeta = JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda('No hay candidatos cargados');
    

        try{

            //elimina el listado de la busqueda anterior
            removeSearch();
            
            let candidato2 = $carpeta.find( cand => parseInt(cand.DNI) === $DNI)

            $carpeta.some( cand => parseInt(cand.DNI) != $DNI)==false
            ?imprimirBusqueda(candidato2) //imprimiremos la nueva busqueda
            :showModalBusqueda('No se encontró un candidato');
        }
        catch{};
                    
}

// funcion que busca por especialidad frontend
function buscarXFront(){
    //optimisado
    let $carpeta=JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda('No hay candidatos cargados');

    try{
        
    /* se fitran los candidatos con la especialidad escrita creando un nuevo array */       
    const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Frontend'));
    //quita la busqueda anterior
    removeSearch();

    //controla que haya candidatos con esa especialidad
    $carpeta.some(cand => cand.especialidad.includes('Frontend'))==false
    ?showModalBusqueda('"NO" hay candidatos con esa especialidad') // agregar icono  
    :imprimirMultiple($filtroEspecialidad);
    }
    catch{};
        
        
}

function buscarXBack(){
    let $carpeta= JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda('No hay candidatos cargados');// agregar icono al modal
    
    try{
        

        //elimina el listado de la busqueda anterior
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Backend'));
        removeSearch()

        //controla que haya candidatos con esa especialidad
        $carpeta.some(cand => cand.especialidad.includes('Backend'))==false
        ?showModalBusqueda('"NO" hay candidatos con esa especialidad') // agregar icono 
        :imprimirMultiple($filtroEspecialidad); /*imprime todos los candidatos con esa especialidad*/
        
    }
    catch{};                                           
}

function buscarXFull(){
    let $carpeta= JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda('No hay candidatos cargados');// agregar icono al modal
    try{
    
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */   
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Fullstack'));

        //elimina el listado de la busqueda anterior
        removeSearch();

        //controla que haya candidatos con esa especialidad
        $carpeta.some(cand => cand.especialidad.includes('Fullstack'))==false
        ?showModalBusqueda('"NO" hay candidatos con esa especialidad') // agregar icono al modal
        :imprimirMultiple($filtroEspecialidad);
    
    }
    catch{}                                  
} 

function buscarXSeniority(e){

    e.preventDefault();
    
    let formulario = e.target,
    $especialidad = formulario.children[1].value,
    $seniority = formulario.children[3].value;
    console.log($especialidad);
    console.log($seniority);
    document.getElementById('xSeniority').reset();

    let $carpeta= JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda('No hay candidatos cargados');// agregar icono al modal
    try{
    const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes($especialidad));

    const $FiltroSeniority= $filtroEspecialidad.filter(cand => cand.seniority.includes($seniority));

    $FiltroSeniority.some(cand => cand.seniority.includes($seniority))==false
    ?showModalBusqueda('"NO" hay candidatos con esos requerimientos') // agregar icono al modal
    :imprimirMultiple($FiltroSeniority);
}
catch{}
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

// busca por especialidad y seniority.
const $btnEspAndSen = document.getElementById('xSeniority');
$btnEspAndSen.addEventListener('submit', buscarXSeniority);

