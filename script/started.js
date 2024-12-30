// Iniciando o jogo
function startGame() {
    const nivel = document.getElementById("nivel").value

    if(nivel === "") {
       alert("DEVE SELECIONAR UM NÍVEL")
       return false
    }

    window.location.href = "index.html?" + nivel
}
