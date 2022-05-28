

function controlPages(){

    let $super = JSON.parse(sessionStorage.getItem('superUser'))||0;
    
    switch(parseInt($super)) {
        case 0:
            menuLogout()
            break;
        case 1:
            menuCandidato()
            break;
        case 2:
            menuRecruiter()
            break;
        default:
            console.log("Error en SuperUser");
            break;
    }
    
    
}


        function menuLogout(){

            removeLinks();

            const $container = document.getElementById("fatherP");
            let div = document.createElement("div");
            div.innerHTML = `
            <div class="col-md-3 remove-links text-end">
                <button type="button" onclick="window.location.href='login.html';" class="btn btn-outline-primary mx-3 mt-1">
                    Ingresar
                </button>
                <button type="button" onclick="window.location.href='registration.html';" class="btn btn-primary  mx-1 mt-1">
                    Registrarse
                </button>
            </div>`;
            $container.appendChild(div);
            //coloca en cero para simular el cierre de sesion
            sessionStorage.setItem('superUser', 0 );

        }

        function menuCandidato(){

            removeLinks();

            const $container = document.getElementById("fatherP");
            let div = document.createElement("div");
            div.innerHTML =`
            <ul class="nav col-12 col-md-auto remove-links mb-2 justify-content-center mb-md-0">
                <li>
                    <button type="button" onclick="window.location.href='enrolamiento.html';" class="btn btn-primary pd-2 mt-1 mx-3">
                        Sumate
                    </button>
                
                </li>
                <li>      
                    <button id="logout"  type="button" onclick="menuLogout();" class="btn btn-primary pd-2 mt-1 mx-1">
                        Salir
                    </button>
                </li>
            </ul>`;
            $container.appendChild(div);
        }

        function menuRecruiter(){

            
            removeLinks();

            const $container = document.getElementById("fatherP");
            let div = document.createElement("div");
            div.innerHTML =`
            <ul class="nav col-12 col-md-auto remove-links mb-2 justify-content-center mb-md-0">
                <li>
                    <button type="button" onclick="window.location.href='enrolamiento.html';" class="btn btn-primary pd-2 mt-1 mx-3">
                        Sumate
                    </button>
                
                </li>
                <li>
                    <button type="button" onclick="window.location.href='busqueda.html';" class="btn btn-primary pd-2 mt-1 mx-1">
                        Busquedas
                    </button>    
                </li>
                <li>      
                    <button id="logout"  type="button" onclick="menuLogout();" class="btn btn-primary pd-2 mt-1 mx-1">
                        Salir
                    </button>
                </li>
            </ul>`;
            $container.appendChild(div);
        }

        //borra el contenido anterior del navbar
        function removeLinks(){
            let $removelinks = document.getElementsByClassName("remove-links");
                for(i=0;i<$removelinks.length;i++){
            $removelinks[i].remove();
            };

        }