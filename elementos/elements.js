document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const numeroAtomico = params.get("numero");

    console.log("Número atômico capturado:", numeroAtomico);

    if (!numeroAtomico) {
        console.error("Número atômico não encontrado na URL.");
        return;
    }

    try {
        const resposta = await fetch("../elements.json");
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

function preencherPagina(elemento) {
    document.getElementById("simbolo").textContent = elemento["Nome do elemento"].split(/[() ]/)[2] || "N/A";
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

        document.getElementById("autor").textContent = autor || "N/A";
        document.getElementById("dataDescoberta").textContent = ano || "N/A";
    }else{
        console.error("Formato inesperado no campo Descoberta: ",descoberta);
    }

    document.getElementById("historia").textContent = elemento["Texto2"] +  elemento["Texto3"]
}



