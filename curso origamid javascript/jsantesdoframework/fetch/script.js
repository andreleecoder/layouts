const requisicao = fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
    return response.json()
}).then(jsonBody => {
    document.querySelector("#app").innerHTML = jsonBody.abilities[0].ability.name
    console.log(jsonBody);
})

console.log(requisicao);