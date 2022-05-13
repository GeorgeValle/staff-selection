
//const { DateTime } =require("luxon");
//import { DateTime } from "luxon";
class Usuario {
    constructor($email,$userName,$pass,$since,$masterKey,$userID,$celular){
    this.email= $email,
    this.userName= $userName,
    this.pass=$pass,
    this.since=$since,
    this.recluiter=new Boolean($masterKey),
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

const $ICON_CHECK=`<span class="material-icons text-success">
check_circle_outline</span>`;

const DateTime = luxon.DateTime;


function showModalRegistro(texto){
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `<h5 class=" text-primary remove-text text-center p-3 d-inline-block glass-snow ">${texto}</h5>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    setTimeout(closeModalRegistro, 2500);
}

// const miInit = {method: 'GET', headers:{'Content-Type':'aplication/json'}, 
// mode:'cords',
// cache: 'default'
// };

async function  verification($key){
    //const MASTER_KEY = "IXZpZGFfbnVldmFf";
// let myRequest = new Request()   
await fetch('../pages/masterKey')
    .then(resp => resp.ok ?resp.text() :Promise.reject(resp))
    .then(data =>{
        const MASTER_KEY = data.recruitKey;
        let keyValor;

        MASTER_KEY===$key
        ? keyValor=1
        : keyValor=0;
        return keyValor

        

    })
    .catch((err) => {
        console.log("catch",err);
    })
    
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
        $key = formulario.children[7].value,
        $celular = formulario.children[9].value;


        
        //fecha de hoy con librería Luxon
        const $since = DateTime.now().toFormat('MM-dd-yyyy');
        

        let $numeroUser = JSON.parse(localStorage.getItem('numeroUser'))||0;
        let $userID = $numeroUser;



        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))||[];
        let $masterKey = new Boolean(verification($key));
        
        const usuario= new Usuario($email,$userName,$pass,$since,$masterKey,$userID,$celular);

        $perfiles.push(usuario);

        $numeroUser++;
        localStorage.setItem('numeroUser', $numeroUser);
        const $perfilesJSON = JSON.stringify($perfiles);
        localStorage.setItem('perfiles', $perfilesJSON);
        document.getElementById('registro').reset();
        showModalRegistro(` ${$ICON_CHECK} Registrado con exito`);
        
        
    
}

