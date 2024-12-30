

// Adiciona nivel de dificuldade
let nivel = window.location.search.replace("?", "")
let timeMosquito = 2000

if(nivel === "facil"){
    timeMosquito = 2000
} else if (nivel === "normal") {
    timeMosquito = 1500
} else if(nivel === "dificil") {
    timeMosquito = 1000
} else if (nivel === "chuck") {
    timeMosquito = 750
}

// Criando elemento para capturar a dimensão da tela
let width = 0
let height = 0

function adjustScreenSize() {
    width = window.innerWidth;
    height = window.innerHeight;
}
adjustScreenSize()

let starTime = 4
const startedInterval = setInterval(function() {
    
    starTime -= 1

    if(starTime < 1) {
        clearInterval(startedInterval)
        const painel = document.getElementById("painel")
        const timerStarted = document.querySelector(".timerStarted")
        timerStarted.style.display = "none"
        painel.style.display = "block"
        startTimersAndMosquito()
    } else {
        document.querySelector(".timerStarted p").innerHTML = starTime
    }
}, 1000)

function startTimersAndMosquito() {
    let time = 16

    const timer = setInterval(function() {
        time -= 1
    
        if(time < 0) {
            clearInterval(timer)
            clearInterval(createMosquito)
            window.location.href = "victory.html"
        } else {
            document.querySelector("span").innerHTML = time
        }
        
    }, 1000)

    const createMosquito = setInterval(function() {
        randomPosition()
    }, timeMosquito)
}

// Função que adicona um cronometro ao jogo







// Função que modifica o tamanho do mosquito
function randomSize() {
    const classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }

}

// Função que modifica o lado do mosquito (transform scale)
function randomSide() {
    const rotation = Math.floor(Math.random() * 2)

    switch(rotation) {
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}

// Função que cria o mosquito e adiciona ele ao jogo
let life = 1

function randomPosition() {

    // possibilita no clique do mouse remover o mosquito e condiciona pontos de vida se não remove-lo 
    // remover o mosquito anterior caso exista
    if(document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if(life > 3) {
            window.location.href = "gameover.html"
        } else {
            document.getElementById("v" + life).src = "Assets/img/life-lost.png"
        
            life++
        }

    }
    

    // Aparece o mosquito de forma randomica
    let positionX = Math.floor(Math.random() * width) - 90
    let positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX <= 0 ? 0 : positionX
    positionY = positionY <= 0 ? 0 : positionY


    // Criando o elemento que vai gerar o mosquito
    const mosquito = document.createElement("img")
    mosquito.src = "Assets/img/mosquito-dengue.png"
    mosquito.className = randomSize() + " " + randomSide()
    mosquito.style.position = "absolute"
    mosquito.style.top = positionY + "px"
    mosquito.style.left = positionX + "px"
    mosquito.id = "mosquito"
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

// Intervalo que o mosquito aparece a cada segundo de acordo com a dificuldade selecionada










