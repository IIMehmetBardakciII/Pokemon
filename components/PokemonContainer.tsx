"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import Image from "next/image";
import { useState } from "react";

type Pokemon = {
  name: string;
};

type PokemonContainerProps = {
  pokemons: Pokemon[];
};
const PokemonContainer = ({ pokemons }: PokemonContainerProps) => {
  const [search, setSearch] = useState("");
  // filter text
  const searchFilter = (pokemons: any) => {
    return pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  };

//   Save the filtered array of object
const filteredPokemon=searchFilter(pokemons);
  return (
    <div className=" flex flex-col mt-2  relative gap-3">
      <div className="opacity-40 fixed -z-10 w-full h-screen">
        <Image
          src="https://cdn.pixabay.com/photo/2023/08/20/18/17/ai-generated-8202901_1280.png"
          alt="bgimage"
          fill
          className="object-cover grayscale blur-sm"
        />
      </div>
      {/* Search Alanı */}
      <div className="max-w-[500px] mx-auto">
        <Input
          placeholder="Pokemonunu bul..."
          autoComplete="false"
          className="placeholder:text-orange-500"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      {/* Component card */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-3 max-sm:grid-cols-1 gap-5">
        {filteredPokemon.map((poki:any) => (
          <Link href={`/${poki.name}`} key={poki.name}>
            <div className="border rounded-sm text-center py-5 border-white bg-orange-950/30 hover:bg-orange-500/30">
              <h1 className="text-3xl text-primary">
                {poki.name.charAt(0).toUpperCase() + poki.name.slice(1)}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonContainer;
