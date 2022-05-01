class Usuario {
    constructor(){
    this.email= $email,
    this.userName= $userName,
    this.pass= $pass,
    //this.since=,
    this.recluiter=verification($masterKey);
    
    }

    verification($masterKey){
        const MASTER_KEY = "IXZpZGFfbnVldmFf";
        
        $masterKey==MASTER_KEY
        ? true
        : false;
    }

}


const $btRegistro = document.getElementById('registro');
$btRegistro.addEventListener('click', registrarse);

function registrarse(e){
    e.preventDefault();
    let formulario = e.target,
        $email = formulario.children[1].value,
        $userName = formulario.children[3].value,
        $pass = formulario.children[5].value,
        $masterKey = formulario.children[7].value;


        //let $since=DateTime#local;




        const usuario =new Usuario($email,$userName,$pass,$since,$masterKey);





}



