const url = 'elements.json'
const elementNodes = [...document.querySelectorAll('.metais-alcalinos'), ...document.querySelectorAll('.metais-alcalinos-terrosos'), ...document.querySelectorAll('.metais-de-transicao'), ...document.querySelectorAll('.ametais'), ...document.querySelectorAll('.semimetais'), ...document.querySelectorAll('.metais-representativos'), ...document.querySelectorAll('.halogenios'), ...document.querySelectorAll('.gases-nobres'), ...document.querySelectorAll('.lantanideos'), ...document.querySelectorAll('.actinideos')]

elementNodes.map((el) => {
    el.addEventListener('mouseover', (e) => {
        fetch(url)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Erro na requisição!')
                }
                return resp.json()
            })
            .then(data => {
                
            })
            .catch(error => {
                console.error(`Erro: ${error}`)
            })
    })
})

<script>
document.addEventListener("DOMContentLoaded", function () {
    const tabela = document.getElementById("tabelaPeriodica");

    tabela.addEventListener("click", function(event) {
        const elementoClicado = event.target.closest(".element-data");

        console.log("Elemento clicado:", elementoClicado); // Verifique se está capturando o elemento correto

        if (elementoClicado) {
            const numeroAtomicoElement = elementoClicado.querySelector(".number");

            console.log("Número atômico encontrado:", numeroAtomicoElement); // Verifique se o número atômico foi encontrado

            if (numeroAtomicoElement) {
                const numeroAtomico = numeroAtomicoElement.textContent;
                console.log("Número atômico:", numeroAtomico);

                const params = new URLSearchParams();
                params.set('numero', numeroAtomico);

                window.location.href = `elementos/elements.html?${params.toString()}`;
            } else {
                console.error("Número atômico não encontrado.");
            }
        }
    });
});
