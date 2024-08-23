
import PokemonContainer from "@/components/PokemonContainer"
import { getPokemonList } from "@/lib/pokemonApı"



export default async function Home() {
    const pokemonList=await getPokemonList();
 
  return(
     <main>
      <PokemonContainer pokemons={pokemonList} />
    </main>
)
}
