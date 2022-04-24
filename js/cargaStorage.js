/*Simulador de reclutamiento
Sección carga de candidatos */



class Candidato{
    constructor(nombre, edad, DNI, provincia, ciudad, direccion, telefono, especialidad, ID){
        this.nombre = nombre,
        this.edad = edad,
        this.DNI = DNI,
        this.provincia = provincia,
        this.ciudad = ciudad,
        this.direccion = direccion,           
        this.telefono = telefono,
        this.especialidad = especialidad;
        this.ID = ID;
    }
    // muestra todas la propiedades de un objeto candidato (pero no se porque no ejecuta si la invoco)
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

    
    

}



function showModal() {
    document.getElementById('modal').style.display = 'block';
}


//For close my beautifull modal
const $btnCloseModal = document.getElementById('closeModalCarga');

$btnCloseModal.addEventListener('click', closeModal);

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}




let formularioCarga = document.getElementById("carga")
formularioCarga.addEventListener("submit", enviarFormulario);

function enviarFormulario(e){
    e.preventDefault();
    let formulario = e.target,
        $nombre = formulario.children[1].value,
        $edad = formulario.children[3].value,
        $DNI = formulario.children[5].value,
        $provincia = formulario.children[7].value,
        $ciudad = formulario.children[9].value,
        $direccion = formulario.children[11].value,           
        $telefono = formulario.children[13].value,
        $especialidad = formulario.children[15].value;
        
        
        let $NID = localStorage.getItem('numeroID');
        $NID==null 
        ?$numeroID=0
        :$numeroID=JSON.parse($NID);
        
        let $ID = $numeroID;


        let candidato1 = new Candidato($nombre, $edad, $DNI, $provincia, $ciudad, $direccion, $telefono, $especialidad, $ID );
        let $carpeta;
        let carpeta = localStorage.getItem('carpeta');
        carpeta==null||carpeta==""
        ?$carpeta = new Array()
        :$carpeta = JSON.parse(carpeta);
        $carpeta.push(candidato1);

        $numeroID++;
        localStorage.setItem('numeroID', $numeroID);

        const $carpetaJSON = JSON.stringify($carpeta);
        localStorage.setItem('carpeta', $carpetaJSON);
        showModal();
        document.getElementById('carga').reset();
        
}

