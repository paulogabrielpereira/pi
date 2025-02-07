document.addEventListener("DOMContentLoaded", function (){
    const tabela = document.getElementById("tabelaPeriodica");

    tabela.addEventListener("click", function(event){ // Cria a interação de clique em cada elemento
        const elementoClicado = event.target.closest(".element-data");

        if(elementoClicado){
            const numeroAtomico = elementoClicado.querySelector(".number").textContent;
            const params = new URLSearchParams();
            params.set('numero',numeroAtomico);

            window.location.href = `elementos/elements.html?${params.toString()}`;
        }
    });

    tabela.addEventListener("mouseover", function(event){ // Dinamiza os dados dos iframes para cada elemento

        const elementoSelecionado = event.target.closest(".element-data");
        const iframeSelecionado = elementoSelecionado.lastElementChild.firstElementChild;

        const iframeDoc = iframeSelecionado.contentDocument || iframeSelecionado.contentWindow.document;
        const script = iframeDoc.createElement("script");
        const params = new URLSearchParams();

        params.set('numero', elementoSelecionado.firstElementChild.textContent);
        iframeSelecionado.contentWindow.postMessage({numero: elementoSelecionado.firstElementChild.textContent}, '*')
        iframeDoc.body.appendChild(script);

        const linkIframe = iframeDoc.querySelector('.more-link');
        console.log(linkIframe)

        linkIframe.addEventListener("click", function(event){
            const params = new URLSearchParams();
            params.set('numero', elementoSelecionado.querySelector('.number').textContent);
            event.target.setAttribute('href', `elements.html?${params.toString()}`);
        });
    });
});