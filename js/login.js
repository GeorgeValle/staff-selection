

//falta testear el login y hacer el html de registro
//faltan los modales de login,
// y crear la barra para reclutadores o usuarios normales

class Usuario {
    constructor(){
    this.email= $email,
    this.userName= $userName,
    _password= setPassword(password),
    //this.since=,
    this.recluiter=verification($masterKey);
    this.userID=$userID;
    
    }

    setPassword(password) {
        this._password=password;
    }

    get password(){
        return this._password;

    }

    verification($masterKey){
        const MASTER_KEY = "IXZpZGFfbnVldmFf";
        
        $masterKey==MASTER_KEY
        ? true
        : false;
    }

}

function bienvenido($user){

    localStorage.setItem('user', $user);
    let $state = true;
    localStorage.setItem('state', $state);
    showModalBusqueda('bienvenido');
    $user.recluiter===true
    ?document.getElementById('navbar-recluiter').style.display = 'block'
    :document.getElementById('navbar-user').style.display = 'block';
    setTimeout(window.location = '../index.html', 2500);
    





}

const $btRegistro = document.getElementById('registro');
$btRegistro.addEventListener('submit', registrarse);

function registrarse(e){
    e.preventDefault();
    let formulario = e.target,
        $email = formulario.children[1].value.toLowerCase(),
        $userName = formulario.children[3].value,
        $pass = formulario.children[5].value,
        $masterKey = formulario.children[7].value;


        //const $since=DateTime#local;

        let $numeroUser = JSON.parse(localStorage.getItem('numeroUser'))||0;
        let $userID = $numeroUser;



        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))||[];

        //,$since
        const usuario= new Usuario($email,$userName,$pass,$masterKey,$userID);

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

    $carpeta.some( user => user.password() == $password )==true 
        ?showModalBusqueda('Contraseña incorrecta') //agregar icono
        :bienvenido(usuario);
}





