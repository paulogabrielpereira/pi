const URL = "elements.json"

async function call() {
    const resp = await fetch(URL)
    if (resp.status === 200) {
        let obj = await resp.json()
        obj = obj.elementos_quimicos
        console.log(obj)
    }
}

call()