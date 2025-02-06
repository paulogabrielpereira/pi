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

        const lastChild = elementoSelecionado.lastElementChild;
        if (lastChild && lastChild.tagName.toLowerCase() === 'div') {
            lastChild.remove();
        }

        const divIframe = document.createElement('div');
        divIframe.classList.add('iframe_container');

        const iframeElement = document.createElement('iframe');
        iframeElement.classList.add('iframe_elementos');
        iframeElement.setAttribute('src', 'elementos/elements-iframe.html');
        iframeElement.setAttribute('title', 'Iframe');
        iframeElement.setAttribute('scrolling', 'no');
        iframeElement.setAttribute('loading', 'lazy')
        
        iframeElement.addEventListener('load', function() {
            const iframeDoc = iframeElement.contentDocument || iframeElement.contentWindow.document;
            const script = iframeDoc.createElement("script");
            const params = new URLSearchParams();
            
            params.set('numero', elementoSelecionado.firstElementChild.textContent);
            iframeElement.contentWindow.postMessage({numero: elementoSelecionado.firstElementChild.textContent}, '*')
            iframeDoc.body.appendChild(script); 
        });
        
        divIframe.appendChild(iframeElement); 
        elementoSelecionado.appendChild(divIframe);
    });
});