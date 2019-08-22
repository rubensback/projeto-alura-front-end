var botaoSobre = $("#botao-sobre");
var botaoPalestrante = $("#botao-palestrante");
var body = $("body")

botaoSobre.on("click",function () {
    console.log("sobre");
    var posSobre = $(".conteudo").offset().top;
    scrollPagina(posSobre);    
})

botaoPalestrante.on("click",function () {
    console.log("palestra");
    var posPalestrantes = $(".seção-palestrantes").offset().top;
    scrollPagina(posPalestrantes);    
})

function scrollPagina(seletor) {
    $("html").animate({
        scrollTop: seletor + "px"
    },2000)
}