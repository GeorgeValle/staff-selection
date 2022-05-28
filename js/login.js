

//falta testear el login y hacer el html de registro
//faltan los modales de login,
// y crear la barra para reclutadores o usuarios normales



const $welcome = `<span class="material-icons text-success">
waving_hand
</span>`;

const $warning= `<span class="material-icons text-danger">
                    warning_amber
                </span>`;

                function goIndex(){
                    window.location = '../index.html';
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

    //localStorage.setItem('user', $user);
    // let $cookieB = new Boolean(true);
    // localStorage.setItem('cookieB', $cookieB);
    showModalRegistro(`${$welcome}bienvenido`);
    
    
    $user.recruit===1
    ?sessionStorage.setItem('superUser', 2 )
    :sessionStorage.setItem('superUser', 1 );


    
    
    //goIndex();
}



const $btnLogin = document.getElementById('login');
$btnLogin.addEventListener('submit', logearse);

function logearse(e) {
    let formulario = e.target,
    $email = formulario.children[1].value.toLowerCase(),
    $password = formulario.children[3].value;

    document.getElementById('login').reset();

    let $perfiles = JSON.parse(localStorage.getItem('perfiles'))
    ||showModalRegistro(`${$warning}No hay usuarios cargados`);

    let $usuario = $perfiles.find( user => user.email === $email)
    ||showModalRegistro(`${$warning}El E-mail no corresponde a un usuario`);

    $usuario.pass == $password  
        ?showModalRegistro(`${$warning}Contraseña incorrecta`) 
        :bienvenido($usuario);
}





