// para buscar candidatos

//variables
const $WARNING= `<span class="material-icons text-danger">
                    warning_amber
                </span>`;

const $ICON_CHECK=`<span class="material-icons text-success">check_circle_outline</span>`;

/* ************************************************
 ***********  Sala de Funciones *******************
 ************************************************* */

// para mostar modales personalizados
function showModalBusqueda(texto){

    removeText();

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
    
    
}
// remueve el texto personalizado de los modales
function removeText(){
    
    
    
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
    
    divi.innerHTML =   `<article class="col card-text found remove-search mx-auto glass-greenty-card p-3 mb-3 mt-2" style="max-width:28rem">
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
                    showModalBusqueda(`${$ICON_CHECK} Candidato Impreso en Web`); 
                    
}

//imprime los candidatos por especialidad
function imprimirMultiple($filtro){

    removeSearch();

for(let i = 0; i < $filtro.length; i++) {
    let {nombre,edad,DNI,direccion,provincia,ciudad,telefono,email,especialidad,seniority,lenguaje} 
    = $filtro[i];
    const $porFiltro = document.getElementById("father1");
    let divi = document.createElement("divi");
    divi.innerHTML = `<article class="col card-text remove-search mx-auto found glass-greenty-card p-3 mb-3 mt-2" style="max-width:28rem">
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
    showModalBusqueda(`${$ICON_CHECK} Busqueda Impresa en Web`); 
                }
}
//función que busca por nombre
function buscarXNombre(e){
    e.preventDefault();
    
    let formulario = e.target,
    $nombre = formulario.children[1].value;
    
    document.getElementById('xNombre').reset();
    
     // busca los candidatos del localStorage  
    let $carpeta = JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda(`${$WARNING} No hay candidatos cargados`);
    try {    
        //trae al objeto candidato de array
    
        
        let $candidatos = $carpeta.filter(cand => cand.nombre.includes($nombre.toLowerCase()))
        ||showModalBusqueda(`${$WARNING} No se encontró un candidato`);

        
        //elimina el listado de la busqueda anterior
        removeSearch();
        
        

        $candidatos.some(cand => cand.nombre.includes($nombre.toLowerCase()))==false
    ?showModalBusqueda(`${$WARNING} "NO" hay candidatos con ese nombre`) 
    :imprimirMultiple($candidatos);
        
        
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
    ||showModalBusqueda(`${$WARNING} No hay candidatos cargados`);
    

        try{

            //elimina el listado de la busqueda anterior
            removeSearch();
            
            let candidato2 = $carpeta.find( cand => parseInt(cand.DNI) === $DNI)
            $carpeta.some( cand => parseInt(cand.DNI) == $DNI)==true
            ?imprimirBusqueda(candidato2) //imprimiremos la nueva busqueda
            :showModalBusqueda(`${$WARNING} No se encontró un candidato`);
        }
        catch{};
                    
}

// funcion que busca por especialidad frontend
function buscarXFront(){
    //optimisado
    let $carpeta=JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda(`${$WARNING} No hay candidatos cargados`);
        
    try{
        
    /* se fitran los candidatos con la especialidad escrita creando un nuevo array */       
    const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Frontend'));
    //quita la busqueda anterior
    removeSearch();

    //controla que haya candidatos con esa especialidad
    $carpeta.some(cand => cand.especialidad.includes('Frontend'))==false
    ?showModalBusqueda(`${$WARNING} "NO" hay candidatos con esa especialidad`)
    :imprimirMultiple($filtroEspecialidad);
    }
    catch{};
        
        
}

//busca por especialidad back
function buscarXBack(){
    let $carpeta= JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda(`${$WARNING} No hay candidatos cargados`);
    
    try{
        

        //elimina el listado de la busqueda anterior
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Backend'));
        removeSearch();

        //controla que haya candidatos con esa especialidad
        $carpeta.some(cand => cand.especialidad.includes('Backend'))==false
        ?showModalBusqueda(`${$WARNING} "NO" hay candidatos con esa especialidad`) 
        :imprimirMultiple($filtroEspecialidad); /*imprime todos los candidatos con esa especialidad*/
        
    }
    catch{};                                           
}

//usca por especialidad fullstack
function buscarXFull(){
    let $carpeta= JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda(`${$WARNING} No hay candidatos cargados`);
    try{
    
        /* se fitran los candidatos con la especialidad escrita creando un nuevo array */   
        const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes('Fullstack'));

        //elimina el listado de la busqueda anterior
        removeSearch();

        //controla que haya candidatos con esa especialidad
        $carpeta.some(cand => cand.especialidad.includes('Fullstack'))==false
        ?showModalBusqueda(`${$WARNING} "NO" hay candidatos con esa especialidad`) 
        :imprimirMultiple($filtroEspecialidad);
    
    }
    catch{}                                  
} 

function buscarXSeniority(e){

    e.preventDefault();
    
    let formulario = e.target,
    $especialidad = formulario.children[1].value,
    $seniority = formulario.children[3].value;
    
    
    document.getElementById('xSeniority').reset();

    let $carpeta= JSON.parse(localStorage.getItem('carpeta'))
    ||showModalBusqueda(`${$WARNING} No hay candidatos cargados`);
    try{
    const $filtroEspecialidad = $carpeta.filter(cand => cand.especialidad.includes($especialidad));

    const $FiltroSeniority= $filtroEspecialidad.filter(cand => cand.seniority.includes($seniority));

    removeSearch();

    $FiltroSeniority.some(cand => cand.seniority.includes($seniority))==false
    ?showModalBusqueda(`${$WARNING} "NO" hay candidatos con esos requerimientos`) 
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

// find for DNI to candidate / busca por DNI
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

