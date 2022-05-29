

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

const DateTime = luxon.DateTime;


function showModalRegistro(texto){
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `
    <h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>
    <div class="modal-footer text-center">
    <button type="button" class="btn btn-primary" onclick="window.location.href='../index.html';"> Continue > </button>
    </div>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    
}

//función para verificar que se introdujo la clave para ser recruiter. 
async function  verification($key){
    // MASTER_KEY es = "IXZpZGFfbnVldmFf" con eso sos recruiter;

await fetch('../js/masterKey.json')
    
    .then(resp => resp.json())
    .then(data =>{
        const MASTER_KEY = data.recruitKey;
        console.log(data);
        let $keyValor;
        
        $key===MASTER_KEY
        ? localStorage.setItem('verification', JSON.stringify($keyValor=1))
        : localStorage.setItem('verification', JSON.stringify($keyValor=0));
        console.log($keyValor);    

    })
    .catch((err) => {
        console.log("entro en catch ",err);

    })
    
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
        $key = formulario.children[7].value,
        $celular = formulario.children[9].value;


        
        //fecha de hoy con librería Luxon
        const $since = DateTime.now().toFormat('MM-dd-yyyy');
        

        let $numeroUser = JSON.parse(localStorage.getItem('numeroUser'))||0;
        let $userID = $numeroUser;


        
        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))||[];
        
        verification($key);
        let  $keyJSON = localStorage.getItem('verification')||console.log("no se cargó");
        let  $recruit = parseInt($keyJSON);
        
        

        console.log(`${$recruit} esto cargó`);
        const usuario= new Usuario($email,$userName,$pass,$since,$recruit,$userID,$celular);

        $perfiles.push(usuario);

        localStorage.removeItem('verification');
        $numeroUser++;
        localStorage.setItem('numeroUser', $numeroUser);
        const $perfilesJSON = JSON.stringify($perfiles);
        localStorage.setItem('perfiles', $perfilesJSON);
        document.getElementById('registro').reset();
        showModalRegistro(` ${$ICON_CHECK} Registrado con exito`);
        
        
    
}

