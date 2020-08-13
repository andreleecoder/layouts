async function fetchProdutos(url) {
    const response = await fetch(url);
    const jsonBody = await response.json()
    return jsonBody
}

const requisicao = fetchProdutos("https://pokeapi.co/api/v2/pokemon/ditto");
console.log(requisicao);