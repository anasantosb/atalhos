//adicionar atalhos de teclado
document.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "b") {
        window.location.href = "https://canaltech.com.br/empresa/msn/";
    }
    if (event.ctrlKey && event.key === "i") {
        window.open("https://i.gifer.com/origin/dc/dc9122a4c67ff1272971880b17b21ce3_w200.gif");
    }
    if (event.ctrlKey && event.key === "m") {
        document.getElementById("mensagem-input").focus();
    }
});