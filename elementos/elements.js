document.addEventListener("DOMContentLoaded",async() =>{
    const  params = new URLSearchParams(window.location.search);
    const numeroAtomico = params.get("numero");
    console.log(numeroAtomico);

    if(!numeroAtomico){
        console.error("Número atômico não econtrado na URL.")
        return;
    }

    console.log("Número atômico da URL: ",numeroAtomico);
    try{
        const resposta = await fetch("../elements.json");
        const jsonData = await resposta.json();

        console.log("JSON recebido: ",jsonData);

        const elementos = jsonData.elementos_quimicos;

        if(!Array.isArray(elementos)){
            console.error("Erro: 'elementos_quimicos' não é um array.")
            return;
        }


        const elemento = elementos.find(e => e["Número atômico"] === parseInt(numeroAtomico));

        if(!elemento){
            console.error("Elemento não encontrado no JSON.")
            return;
        }

        console.log("Elemento encontrado: ",elemento);
        preencherPagina(elemento)
    } catch(error){
        console.error("Erro ao carregar o JSON: ",error);
    }
});

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
    document.getElementById("pontoEbulicao").textContent = elemento["Ponto de ebulição"]
}