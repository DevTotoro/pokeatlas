export interface Pokemon {
  id: number;
  name: string;
  spriteUrl: string | null;
  types: string[];
}

export interface Type {
  id: number;
  name: string;
  damage_relations: {
    double_damage_from: string[];
    double_damage_to: string[];
    half_damage_from: string[];
    half_damage_to: string[];
    no_damage_from: string[];
    no_damage_to: string[];
  };
}
