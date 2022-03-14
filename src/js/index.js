const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener("click", () => {
        const cartaoPokemonAtivo = document.querySelector(".aberto")
        cartaoPokemonAtivo.classList.remove("aberto")

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonAbrir = "cartao-" + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonParaAbrir.classList.add("aberto")

        const pokemonAtivoListagem = document.querySelector(".ativo")
        pokemonAtivoListagem.classList.remove("ativo")

        const pokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add("ativo")
    })
})
