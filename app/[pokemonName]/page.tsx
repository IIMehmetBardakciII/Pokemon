import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonApı";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const typeToBgColor: { [key: string]: string } = {
  normal: "pink-400",
  fighting: "red-500",
  flying: "blue-300",
  poison: "purple-500",
  ground: "yellow-600",
  rock: "gray-700",
  bug: "green-500",
  ghost: "purple-800",
  steel: "gray-500",
  fire: "red-600",
  water: "blue-500",
  grass: "green-400",
  electric: "yellow-400",
  psychic: "pink-500",
  ice: "blue-200",
  dragon: "indigo-600",
  dark: "gray-800",
  fairy: "pink-300",
};
const PokemonSinglePage = async ({
  params,
}: {
  params: { pokemonName: string };
}) => {
  // Call the pokemon API
  const { pokemonName: PokiName } = params;
  const pokemon = await getPokemon(PokiName);
  const image = pokemon.sprites.other["official-artwork"].front_default;
  // Bg color
  const type = pokemon.types[0].type.name;
  const bgColor = typeToBgColor[type] || "gray-400"; 
  console.log(bgColor);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 ">
      <div>
        <Link href="/" className={`px-10 py-5 relative bg-${bgColor}`}>
          Take me HomePage
        </Link>
      </div>
      <div
        className={cn(
          "w-full max-w-sm mx-auto flex items-center flex-col h-[600px]  rounded-md bg-opacity-40 ",
          `bg-${bgColor}`
        )}
      >
        <h2
          className={`font-bold text-3xl text-center text-${bgColor} mb-2`}
        >
          {PokiName.toUpperCase()}
        </h2>
        <div
          className={`w-[200px] h-[200px] relative bg-${bgColor} rounded-md`}
        >
          <Image
            src={image}
            alt={PokiName}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h3 className="text-xl  font-bold">Weight: {pokemon.weight}  </h3>
        <span className="text-gray-400">Ability: {pokemon.abilities[0].ability.name}</span>

       <div className="w-full">
       <div className="flex flex-col ">
          {pokemon.stats.map((statsObject:any)=>{
            const statName=statsObject.stat.name;
            const statValue=statsObject.base_stat;
            return (
                <div className="flex  w-[380px] justify-center items-center" key={statName}>
                    <h3 className="py-1 px-2 mb-2 w-2/4">{statName.charAt(0).toUpperCase()+statName.slice(1)}:{statValue}</h3>
                    <Progress value={statValue} />
                </div>
            )
          })}

        </div>
       </div>
      </div>
    </div>
  );
};

export default PokemonSinglePage;
