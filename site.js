function mostrarMensagemSucesso(mensagem) {
    alert(mensagem);
}

document.addEventListener("DOMContentLoaded", function() {
    var mensagem = document.getElementById("mensagem").textContent.trim();
    
    if (mensagem) {
        mostrarMensagemSucesso(mensagem);
    }
});