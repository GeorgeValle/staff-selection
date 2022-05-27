/*Simulador de reclutamiento
Sección carga de candidatos */



class Candidato{
    constructor(nombre, edad, DNI, provincia, ciudad, direccion, telefono, especialidad,lenguaje, seniority, ID){
        this.nombre = nombre,
        this.edad = edad,
        this.DNI = DNI,
        this.provincia = provincia,
        this.ciudad = ciudad,
        this.direccion = direccion,           
        this.telefono = telefono,
        this.especialidad = especialidad;
        this.lenguaje = lenguaje;
        this.seniority = seniority;
        this.ID = ID;
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
        $especialidad = formulario.children[15].value,
        $seniority = formulario.children[17].value,
        $lenguaje = [];
        // selecciona todos los checkboxes del documento
        let checks= document.querySelectorAll(".lenguaje");
        
        //navega por el array y si está seleccionado lo agrega al array lenguaje
        checks.forEach((c)=>{
        c.checked == true && $lenguaje.push(c.value)})
        
        //optimizado
        let $numeroID = JSON.parse(localStorage.getItem('numeroID'))||0;       
        
        let $ID = $numeroID;

        let candidato1 = new Candidato($nombre, $edad, $DNI, $provincia, $ciudad, $direccion, $telefono, $especialidad, $lenguaje, $seniority, $ID );
        
        //optimizado
        let $carpeta = JSON.parse(localStorage.getItem('carpeta'))||[];
        

        $carpeta.push(candidato1);

        $numeroID++;
        localStorage.setItem('numeroID', $numeroID);

        const $carpetaJSON = JSON.stringify($carpeta);
        localStorage.setItem('carpeta', $carpetaJSON);
        document.getElementById('carga').reset();
        showModal();
        //le agregué setTimeout para que fuese un alert mas que modal
        setTimeout(closeModal, 2500);

        
        
}

