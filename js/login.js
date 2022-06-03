

/*----------------------------------------------------------------
script con código de login para los usuarios de la pagina
------------------------------------------------------------------*/




const $welcome = `<span class="material-icons text-success">
waving_hand
</span>`;

const $warning= `<span class="material-icons text-danger">
                    warning_amber
                </span>`;

                

function showModalLogin(texto){
    removeLinks();
    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `<h5 class=" text-primary remove-links text-center p-3 d-inline-block glass-snow ">${texto}</h5>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    setTimeout(closeModalLogin, 2500);
}

function showModalSuccess(texto){
    //elimina el mensaje personalizado impreso anteriomente.
    removeLinks();

    const $container = document.getElementById("father3");
    let div = document.createElement("div");
    div.innerHTML = `
    <h5 class=" text-primary remove-links text-center p-3 d-inline-block glass-snow ">${texto}</h5>
    <div class="modal-footer text-center">
    <button type="button" class="btn btn-primary" onclick="window.location.href='../index.html';"> Continue > </button>
    </div>`;
    $container.appendChild(div);
    document.getElementById('modal').style.display = 'block';
    
}


//For close my beautifull modal
const $btnCloseModal = document.getElementById('closeModalCarga');

$btnCloseModal.addEventListener('click', closeModalLogin);

function closeModalLogin(){
    document.getElementById('modal').style.display = 'none';

    

}

function removeLinks(){
    let $removelinks = document.getElementsByClassName("remove-links");
        for(i=0;i<$removelinks.length;i++){
    $removelinks[i].remove();
    };
}

function bienvenido($user){

    //controla que si recluiter vale 1 en el user lo hace reclutador, sino usuario
    $user.recruit===1
    ?sessionStorage.setItem('superUser', 2 )
    :sessionStorage.setItem('superUser', 1 );

    showModalSuccess(`${$welcome}bienvenido`);
    

}



const $btnLogin = document.getElementById('login');
$btnLogin.addEventListener('submit', logearse);

function logearse(e) {
    e.preventDefault();
    let formulario = e.target,
    $email = formulario.children[1].value.toLowerCase(),
    $password = formulario.children[4].value;

    document.getElementById('login').reset();

    try{
    let $perfiles = JSON.parse(localStorage.getItem('perfiles'))
    ||showModalLogin(`${$warning}No hay usuarios cargados`);

    let $usuario = $perfiles.find( user => user.email === $email)
    ||showModalLogin(`${$warning}El E-mail no corresponde a un usuario`);

    
        

    $usuario.pass == $password 
        ?bienvenido($usuario) 
        :showModalLogin(`${$warning}Contraseña incorrecta`);

    }
    catch{}
        
}





