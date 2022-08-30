const btnImagen = document.getElementById("contenedor__imagen"),
videoContainer = document.getElementById("contenedor__imagenYvideo"),
paginaContainer = document.getElementById("contenedor__pagina"),
btnCerrar = document.getElementById("btnCerrar");

let div = document.createElement("div");

function crearVideo(){
    btnImagen.classList.add("contenedor__imagen__desaparecer");
    div.innerHTML = `<div class="videoYcruz__container">
                    <video src="./video/video2.mp4" controls autoplay></video>
                    <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>
                    </div>`
    paginaContainer.append(div)
    
}


function cerrarVideo(){
    div.innerHTML = "";
    btnImagen.classList.remove("contenedor__imagen__desaparecer");
}


btnImagen.addEventListener("click" , (e) => {
    e.preventDefault();
    crearVideo();
})



/*<button type="button" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>*/





