document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const numeroAtomico = params.get("numero");

    console.log("Número atômico capturado:", numeroAtomico);

    if (!numeroAtomico) {
        console.error("Número atômico não encontrado na URL.");
        return;
    }

    try {
        const resposta = await fetch("../elements.json");  // Certifique-se do caminho correto
        const jsonData = await resposta.json();

        console.log("JSON carregado:", jsonData);

        const elementos = jsonData.elementos_quimicos;

        if (!Array.isArray(elementos)) {
            console.error("Erro: 'elementos_quimicos' não é um array.");
            return;
        }

        const elemento = elementos.find(e => e["Número atômico"] === parseInt(numeroAtomico));

        if (!elemento) {
            console.error("Elemento não encontrado no JSON.");
            return;
        }

        console.log("Elemento encontrado:", elemento);
        preencherPagina(elemento);
    } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
    }
});

<<<<<<< Updated upstream
function preencherPagina(elemento) {
    document.getElementById("simbolo").textContent = elemento["Nome do elemento"].split(" ")[1] || "N/A";
    document.getElementById("numeroAtomico").textContent = elemento.num || "N/A";
    document.getElementById("massaAtomica").textContent = elemento["Massa atômica"] || "N/A";
    document.getElementById("distElet").textContent = elemento["Distribuição eletrônica"];
    document.getElementById("familia").textContent = elemento["Família"] || "N/A";
    document.getElementById("serieQuimica").textContent = elemento["Série química"];
    document.getElementById("pontoFusao").textContent = elemento["Ponto de fusão"] || "N/A";
    document.getElementById("pontoEbulicao").textContent = elemento["Ponto de ebulição"] || "N/A";
    document.getElementById("densidade").textContent = elemento["Densidade"];

    const descoberta = elemento["Descoberta"];
    const partes = descoberta.match(/^(.*)\s*\(([\d e]+)\)$/);

    if(partes){
        const autor = partes[1];
        const ano = partes[2];

        document.getElementById("autor").textContent = autor;
        document.getElementById("dataDescoberta").textContent = ano;
    }else{
        console.error("Formato inesperado no campo Descoberta: ",descoberta);
    }

    document.getElementById("historia").textContent = elemento["Texto2"] +  elemento["Texto3"]
}
=======
document.addEventListener("DOMContentLoaded", function (){
    const tabela = document.getElementById("tabelaPeriodica");

    tabela.addEventListener("click", function(event){
        const elementoClicado = event.target.closest(".element-data");

        if(elementoClicado){
            const numeroAtomico = elementoClicado.querySelector(".number").textContent;

            const params = new URLSearchParams();
            params.set('numero',numeroAtomico);

            window.location.href = `elementos/elements.html?${params.toString()}`;
        }
    });
});


function preencherPagina(elemento){
    document.getElementById("simbolo").textContent = elemento["Nome do elemento"].split(" ")[1];
    document.getElementById("numeroAtomico").textContent = elemento.num;
    document.getElementById("massaAtomica").textContent = elemento["Massa atômica"];
    document.getElementById("familia").textContent = elemento["Família"];
    document.getElementById("pontoFusao").textContent = elemento["Ponto de fusão"];
    document.getElementById("pontoEbulicao").textContent = elemento["Ponto de ebulição"];
}
>>>>>>> Stashed changes
