

//falta testear el login y hacer el html de registro
//faltan los modales de login,
// y crear la barra para reclutadores o usuarios normales

class Usuario {
    constructor(){
    this.email= $email,
    this.userName= $userName,
    this._password= $password,
    //this.since=,
    this.recluiter=verification($masterKey);
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

function bienvenido($user){

    localStorage.setItem('user', $user);
    let $cokieB = true;
    localStorage.setItem('cokieB', $cokieB);
    showModalRegistro('bienvenido');
    // let {recluiter} = $user;
    // recluiter===true
    // ?document.getElementById('navbar-recluiter').style.display = 'block'
    // :document.getElementById('navbar-user').style.display = 'block';
    setTimeout(()=>{window.location = '../index.html'}, 2500);
}



const $btnLogin = document.getElementById('login');
$btnLogin.addEventListener('submit', logearse);

function logearse(e) {
    let formulario = e.target,
    $email = formulario.children[1].value.toLowerCase(),
    $password = formulario.children[3].value;

    document.getElementById('login').reset();

    let $perfiles = JSON.parse(localStorage.getItem('perfiles'))
    ||showModalRegistro("No hay usuarios cargados");

    let usuario = $perfiles.find( user => user.email === $email)
    ||showModalRegistro("El E-mail no corresponde a un usuario");

    $carpeta.some( user => user._password() == $password )==true 
        ?showModalBusqueda('Contraseña incorrecta') //agregar icono
        :bienvenido(usuario);
}





