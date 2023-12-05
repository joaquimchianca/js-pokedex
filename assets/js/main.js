// https://pokeapi.co/api/v2/pokemon/

/**
* https://pokeapi.co/api/v2/pokemon/sprites/other/official-artwork/front_default/
*/

async function makeRequest(url) {
    try {
        const resp = await fetch(url)
        
        if(!resp.ok) {
            throw new Error(`HTTP error. Status code: ${resp.status}`)
        }
        
        const data = await resp.json()
        return data
        
    } catch (err) {
        console.log(err)
    }
}

function generatePokemonCard(data) {
    //preciso definir os dados que vou receber
    //nome -> data.name :: string
    //id -> data.id :: number
    //tipos -> data.types :: array
    //imagem -> data.sprites.other["official-artwork"].front_default :: img
    //dnsakdnasjdnjasns
    
    return `
    <li class="pokemon">
        <span class="number">#${data.id}</span>
        <span class="name">${data.name}</span>
    
        <div class="detail">
            <ol class="types">
                <li class="type">${data.types[0].type.name}</li>
                <li class="type">${data.types[1].type.name}</li>
            </ol>
    
            <img src= ${data.sprites.other["official-artwork"].front_default}
            alt="Bulbasaur">
        </div>
    </li>
    `
}

makeRequest(`https://pokeapi.co/api/v2/pokemon/1`).then( data => {
    document.getElementById("pokemons").innerHTML = generatePokemonCard(data)
    console.log(data)
}).catch (err => {
    console.log(err)
}) 
