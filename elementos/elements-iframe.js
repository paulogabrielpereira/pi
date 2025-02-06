window.addEventListener('message', (event) => {
    const params = event.data; 
    const url = '../elements.json';

    fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro na requisição!');
            }
            return resp.json();
        })
        .then(data => {
            const elements = data.elementos_quimicos;
            const element = elements.find(el => el["Número atômico"] === parseInt(params.numero));

            document.querySelector('#name-el').textContent = element["Nome do elemento"].split(" ")[0];
            document.querySelector('#symbol-el').textContent = element["Nome do elemento"].split(/[() ]/)[2];
            document.querySelector('#number-el').textContent = element["Número atômico"];
            document.querySelector('#mass-el').textContent = element["Massa atômica"];
            document.querySelector('#config-el').textContent = element["Distribuição eletrônica"].split(" ").join("");
        })
        .catch(error => {
            console.error("Erro -> ", error);
        });
});