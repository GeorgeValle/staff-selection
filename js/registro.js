

class Usuario {
    constructor($email,$userName,$pass,$since,$recruit,$userID,$celular){
    this.email=$email,
    this.userName=$userName,
    this.pass=$pass,
    this.since=$since,
    this.recruit=$recruit,
    this.userID=$userID,
    this.celular=$celular;
    
    }

}

const $ICON_CHECK=`<span class="material-icons text-success">
check_circle_outline</span>`;

const $WARNING= `<span class="material-icons text-danger">
                    warning_amber
                </span>`;

const DateTime = luxon.DateTime;


function showModalRegistro(texto){

    removeText()
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `
    <h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>
    <div class="modal-footer remove-text text-center">
    <button type="button" class="btn btn-primary remove-text" onclick="window.location.href='../index.html';"> Continue > </button>
    </div>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    
}

function showModalError(texto){

    removeText()
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `
    <h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>
    `;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    
}

// remueve el texto personalizado de los modales
function removeText(){
    
    let $removeNodo = document.getElementsByClassName("remove-text");
    for(i=0;i<$removeNodo.length;i++){
        $removeNodo[i].remove();
    };
}



//For close my beautifull modal
const $btnCloseModal = document.getElementById('closeModalRegistro');

$btnCloseModal.addEventListener('click', closeModalRegistro);

// para cerrar con delay
function closeModalRegistro(){
    document.getElementById('modal').style.display = 'none';
}

const $btRegistro = document.getElementById('registro');
$btRegistro.addEventListener('submit', registrarse);

function registrarse(e){
    e.preventDefault();
    let formulario = e.target,
        $email = formulario.children[1].value,
        $userName = formulario.children[3].value,
        $pass = formulario.children[5].value,
        $valPass = formulario.children[7].value, 
        $key = formulario.children[9].value,
        $celular = formulario.children[11].value;
        
        
        
        

        console.log($valPass);
        // const usuario= new Usuario($email,$userName,$pass,$since,$recruit,$userID,$celular);
        $pass==$valPass
        ?verification($key)
        :showModalError(` ${$WARNING} Los Passwords no coinciden`);
        

        //función para verificar que se introdujo la clave para ser recruiter. 
async function  verification($key){
    // MASTER_KEY es = "IXZpZGFfbnVldmFf" con eso sos recruiter;

    
await fetch('../js/masterKey.json')
    
    .then(resp => resp.json())
    .then(data =>{
        const MASTER_KEY = data.recruitKey;

        
        
        let $keyValor;
        
    
        $key===MASTER_KEY
        ?$keyValor=1
        :$keyValor=0;
        
        
        registracion($keyValor);

    })
    .catch((err) => {
        console.log(`entro en catch ${err}`);

    })
    
}

        //registra los datos luego verificar el pass y traer la clave reclutador
        function registracion($keyValor){

            //fecha de hoy con librería Luxon
        const $since = DateTime.now().toFormat('MM-dd-yyyy');
        
            //asigna automaticamente un número de id al registrarse
        let $numeroUser = JSON.parse(localStorage.getItem('numeroUser'))||0;
        let $userID = $numeroUser;


        
        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))||[];

            //se le asigna el resultado de la verificacion
            let  $recruit = $keyValor;
            

        

            const usuario= new Usuario($email,$userName,$pass,$since,$recruit,$userID,$celular);
            $perfiles.push(usuario)
        //aumenta en 1 el numero de id para el próximo registro   
        $numeroUser++;
        localStorage.setItem('numeroUser', $numeroUser);
        //convierto en json el array de candidatos
        const $perfilesJSON = JSON.stringify($perfiles);
        // se guarda en el local storage
        localStorage.setItem('perfiles', $perfilesJSON);
        //se reseta el contenido de los inputs en el formulario
        document.getElementById('registro').reset();
        removeText()
        showModalRegistro(` ${$ICON_CHECK} Registrado con exito`);
        }
        
    
}

