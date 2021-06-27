let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let searchInput = document.querySelector("#searchIn");
    let pokemon = "";
  
    function add(pokemon) {
      if (typeof pokemon === 'object' &&
       'name' in pokemon) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
  
    function getAll() {
      return pokemonList;
    }
  
    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.list-group');
      let listPokemon = document.createElement('li');
      listPokemon.classList.add('list-group-item', 'list-group-item-action');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('btn', 'btn-block');
      button.setAttribute('data-target', '#pokemonModal', 'data-toggle', 'modal');
      pokemonList.appendChild(listPokemon);
      listPokemon.appendChild(button);
      button.addEventListener('click', function() {
        showDetails(pokemon);
      });
    }
  
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.imageUrlBack = details.sprites.back_default;
        item.height = details.height;
        item.types = details.types.length ? details.abilities.map(ability => ability.name) : []

        item.abilities = details.abilities.length ? details.abilities.map(ability => ability.name) : []
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
        showModal(item);
      });
    }
  
    function showModal(item) {
      pokemonRepository.loadDetails(item).then(function() {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");
  
      modalBody.empty();
      modalTitle.empty();
  
      let nameElement = $('<h1>' + item.name + '</h1>');
  
      let pokTypes = $('<p>' + 'Type: ' + item.types + '</p>');
  
      let pokAbilities = $('<p>' + 'Abilities: ' + item.abilities + '</p>');
  
      let heightElement = $('<p>' + 'Height: ' + item.height + ' m' + '</p>');
  
      let pokImageFront = $('<img class="modal-img" style="width:20%">');
      pokImageFront.attr('src', item.imageUrl);
  
      let pokImageBack = $('<img class="modal-img" style="width:20%">');
      pokImageBack.attr('src', item.imageUrlBack);
  
      searchInput.addEventListener('input', function(){
      let listPokemon = document.querySelectorAll('.list-group-item');
      let value = searchInput.value.toUpperCase();
  
      listPokemon.forEach(function(pokemon){
         if(pokemon.innerText.toUpperCase().indexOf(value) > -1){
             pokemon.style.display = '';
         }else{
             pokemon.style.display = 'none';
         }
     })
  });

    modalTitle.append(nameElement);
    modalBody.append(pokImageFront);
    modalBody.append(pokImageBack);
    modalBody.append(heightElement);
    modalBody.append(pokTypes);
    modalBody.append(pokAbilities);

    $('#pokemonModal').modal('toggle');
    });
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
  })();
  
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });