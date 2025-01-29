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