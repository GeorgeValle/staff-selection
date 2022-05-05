class Usuario {
    constructor($email,$userName,$password,$masterKey,$userID){
    this.email= $email,
    this.userName= $userName,
    this.password= $password,
    //this.since=,
    this.recluiter=verification($masterKey),
    this.userID=$userID;
    
    }

    // setPassword(password) {
    //     this._password=password;
    // }

    // get password(){
    //     return this._password;

    // }

    verification($masterKey){
        const MASTER_KEY = "IXZpZGFfbnVldmFf";
        
        $masterKey==MASTER_KEY
        ? true
        : false;
    }

}



function showModalRegistro(texto){
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `<h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    setTimeout(closeModalRegistro, 2500);
}

function closeModalRegistro(){
    document.getElementById('modal').style.display = 'none';
}

const $btRegistro = document.getElementById('registro');
$btRegistro.addEventListener('submit', registrarse);

function registrarse(e){
    e.preventDefault();
    let formulario = e.target,
        $email = formulario.children[2].value,
        $userName = formulario.children[4].value,
        // password = document.querySelector("#pass"),
        // password.setAttribute("text", type),
        $password = formulario.children[6].value,
        $masterKey = formulario.children[8].value,
        $celular = formulario.children[10].value;


        //const $since=DateTime#local;

        let $numeroUser = JSON.parse(localStorage.getItem('numeroUser'))||0;
        let $userID = $numeroUser;



        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))||[];

        //,$since
        const usuario= new Usuario($email,$userName,$password,$masterKey,$userID,$celular);

        $perfiles.push(usuario);

        $numeroUser++;
        localStorage.setItem('numeroUser', $numeroUser);
        const $perfilesJSON = JSON.stringify($perfiles);
        localStorage.setItem('perfiles', $perfilesJSON);
        document.getElementById('registro').reset();
        showModalRegistro();
        //le agregué setTimeout para que fuese un alert mas que modal
        setTimeout(closeModalRegistro, 2500);
    
}

