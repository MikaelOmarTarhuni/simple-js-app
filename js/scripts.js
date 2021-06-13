var pokemonRepository = (function () {
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
        },
    ];

    function add (pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "type" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Pokemon is not correct");        
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {

        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };
  })();


  pokemonRepository.add({name: "Arbok", hight: 3.5, type:["poison"]});

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)


    /*var size;
    if (pokemon.hight > 1) {
        size = "wow, that is big";
    } else {
        size = "it is small pokemon";
    }

    var result;
    pokemon.type.forEach(function (typeitem){
        if (typeitem == "grass") {
            result ='<span style="color:green;"> ';
        } else if (typeitem == "fire") {
            result = '<span style="color:red;"> ';
        } else if (typeitem == "electric") {
            result ='<span style="color:yellow;"> ';
        } else if (typeitem == "animal") {
            result ='<span style="color:black;"> ';
        } else if (typeitem == "water") {
            result ='<span style="color:blue;"> ';
        } 

    });
    document.write( 
        '<div class="box">' +
        pokemon.name +
        "(height: " +
        pokemon.hight +
        "m" +
        ")" +
        "<br>" +
        size +
        result +
        "<br>" +
        pokemon.type +
        "<br>" +
        "</div>");*/
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