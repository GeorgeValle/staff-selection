onload = ()=>{

    function menuCandidato(){

            const $container = document.getElementsByClassName("fatherP");
            let div = document.createElement("div");
            div.innerHTML = 
            `<ul class="menu-items remove-links navbar-nav justify-content-end flex-grow-1    justify-content-center pe-3 ">
                <li class="nav-item p-2 text-center">
                    <a href="index.html" class="active_label nav-link px-2 text-primary link-dark active"
                    aria-current="page">Inicio</a>
                </li>
                <li class="nav-item p-2 text-center">
                    <a href="pages/enrolamiento.html" class="nav-link px-2 text-primary link-dark">Sumate</a>
                </li>
                <li class="nav-item">
                    <button type="button"
                        id="logout"
                        class="btn btn-primary m-2">
                        Salir
                    </button>
                </li>
            </ul>
            `;
            $container.appendChild(div);
            
            
        
    }

    

    function menuRecruiter(){




        const $container = document.getElementsByClassName("fatherP");
            let div = document.createElement("div");
            div.innerHTML = 
            `<ul class="menu-items remove-links navbar-nav justify-content-end flex-grow-1    justify-content-center pe-3 ">
                <li class="nav-item p-2 text-center">
                    <a href="index.html" class="active_label nav-link px-2 text-primary link-dark active"
                    aria-current="page">Inicio</a>
                </li>
                <li class="nav-item p-2 text-center">
                    <a href="pages/enrolamiento.html" class="nav-link px-2 text-primary link-dark">Sumate</a>
                </li>
                <li class="nav-item p-2 text-center">
                    <a href="pages/busqueda.html" class="nav-link px-2 text-primary link-dark">B&#250;squeda</a>
                </li>
                <li class="nav-item p-2 text-center">
                    <a href="pages/ayuda.html" class="nav-link px-2 text-primary link-dark">Ayuda</a>
                </li>
                <li class="nav-item">
                    <button type="button"
                        id="logout"
                        class="btn btn-primary m-2">
                        Salir
                    </button>
                </li>
            </ul>
            `;
            $container.appendChild(div);
    }

    function ShowModalBar(){
        document.getElementById('modalBar').style.display = 'block';
    }

    function out(){
        
        window.location = '../index.html';
    }
    function login(email, pass){
        let $perfiles=JSON.parse(localStorage.getItem('perfiles'))

        let candidato = $perfiles.find( cand => cand.email === email);
        candidato.pass===pass
        ?menuCandidato()
        :out();


    }
    let $user=JSON.parse(localStorage.getItem('user'))
    ||out();


    let {email, pass, masterKey} = $user;

    masterKey == true || login(email, pass);
    


}

function logout(){
    
    
        let $removelinks = document.getElementsByClassName("remove-links");
        for(i=0;i<$removelinks.length;i++){
            $removelinks[i].remove();
        };


    
}