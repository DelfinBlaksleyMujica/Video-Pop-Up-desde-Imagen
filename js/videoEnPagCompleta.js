const cardContainer = document.getElementById("card__container"),
cardsContainer = document.querySelector(".cards__container");


let div = document.createElement("div");

function crearVideo(){
    cardContainer.classList.add("contenedor__imagen__desaparecer");
    cardsContainer.classList.remove("cards__container");
    div.innerHTML = `<div class="video__container">
                    <video src="../video/video2.mp4" controls autoplay></video>
                    <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>
                    </div>`
    document.body.appendChild(div)
    
}


function cerrarVideo(){
    div.innerHTML = "";
    cardContainer.classList.remove("contenedor__imagen__desaparecer");
    cardsContainer.classList.add("cards__container");
}

cardContainer.addEventListener("click" , (e) => {
    e.preventDefault();
    crearVideo();
})