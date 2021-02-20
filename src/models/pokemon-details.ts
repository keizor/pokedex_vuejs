import { NameUrlPair } from "@/models/name-url-pair";

export interface PokemonDetails {
  abilities: Array<{
    ability: NameUrlPair;
    is_hidden: boolean;
    slot: number;
  }>;
  base_experience: number;
  forms: NameUrlPair[];
  game_indices: Array<{
    game_index: number;
    version: NameUrlPair;
  }>;
  height: number;
  held_items: Array<unknown>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<{
    move: NameUrlPair;
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: NameUrlPair;
      version_group: NameUrlPair;
    }>;
  }>;
  name: string;
  order: number;
  species: NameUrlPair;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: NameUrlPair;
  }>;
  types: Array<{
    slot: number;
    type: NameUrlPair;
  }>;
  weight: number;
}
