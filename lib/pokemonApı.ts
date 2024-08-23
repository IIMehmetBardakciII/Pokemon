const API_URL = 'https://pokeapi.co/api/v2/';

// getPokemonList
export async function getPokemonList(){
    const response = await fetch(API_URL+'pokemon?limit=151&offset=0');
    const data = await response.json();
    return data.results;
}

// getPokemon

export async function getPokemon(pokemonName:string){
  const response=await fetch(API_URL+`pokemon/${pokemonName}`);
  const data = await response.json();
  return data;
}