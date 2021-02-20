import { NameUrlPair } from "@/models/name-url-pair";
import { Page } from "@/models/page";
import { PokemonDetails } from "@/models/pokemon-details";

export async function listPokemon(
  limit: number,
  offset: number
): Promise<Page<NameUrlPair>> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
}

export async function getPokemon(id: string): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
}
