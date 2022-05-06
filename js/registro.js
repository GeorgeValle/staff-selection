

class Usuario {
    constructor($email,$userName,$pass,$since,$masterKey,$userID,$celular){
    this.email= $email,
    this.userName= $userName,
    this.pass=$pass,
    this.since=$since,
    this.recluiter=$masterKey,
    this.userID=$userID,
    this.celular= $celular;
    
    }

    // setPassword(password) {
    //     this._password=password;
    // }

    // get password(){
    //     return this._password;

    // }

    

}

const DateTime = luxon.DateTime;


function showModalRegistro(texto){
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `<h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    setTimeout(closeModalRegistro, 2500);
}

function verification($masterKey){
    const MASTER_KEY = "IXZpZGFfbnVldmFf";
    
    MASTER_KEY==$masterKey
    ? $masterKey=true
    : $masterKey=false;
}

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
        $Key = formulario.children[7].value,
        $celular = formulario.children[9].value;


        
        //fecha de hoy con librería Luxon
        const now = DateTime.now();
        const $since = now.toISOString;

        let $numeroUser = JSON.parse(localStorage.getItem('numeroUser'))||0;
        let $userID = $numeroUser;



        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))||[];
        let $masterKey = verification($Key);
        //,$since
        const usuario= new Usuario($email,$userName,$pass,$since,$masterKey,$userID,$celular);

        $perfiles.push(usuario);

        $numeroUser++;
        localStorage.setItem('numeroUser', $numeroUser);
        const $perfilesJSON = JSON.stringify($perfiles);
        localStorage.setItem('perfiles', $perfilesJSON);
        document.getElementById('registro').reset();
        showModalRegistro(`<span class="material-icons text-success">
        check_circle_outline
        </span> Registrado con exito`);
        
        
    
}

