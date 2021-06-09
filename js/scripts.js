let pokemonList = [
    {
        name: "Pikachu",
        type: ["electric"],
        hight: 0.4
    },           
    {
        name: "Charmander",
        type: ["fire"],
        hight: 0.6
    },
    {
        name: "Squirtle",
        type: ["water"],
        hight: 0.5
    },
    {
        name: "Charizard",
        type: ["fire"],
        hight: 1.7
    },
    {
        name: "Bulbasaur",
        type: ["water", "grass"],
        hight: 0.7
    }
    
];

pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + " (" + pokemon.hight +")")
});

/**for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].hight < 1.7 && pokemonList[i].hight > 0.3)
    {
        document.write(pokemonList[i].name + " (" + pokemonList[i].hight + ")" + " Wow, that is a small pokemon!");
    }
    else if (pokemonList[i].hight > 1.7 )
    {
        document.write(pokemonList[i].name + " (" + pokemonList[i].hight + ")" +" Wow, that is a big pokemon!");
    }
}**/