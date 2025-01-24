import { Flex } from '@radix-ui/themes';

import type { Pokemon } from '~/lib/types';

import { PokemonCard } from '~/components/pokemon-card';

import pokemon from '~/data/pokemon.json';

interface Props {
  search: string | undefined;
}

export const PokemonList = ({ search }: Props) => {
  const filter = (pokemon: Pokemon) => {
    if (!search) return true;

    // If the search is a number, filter by id
    const searchNumber = Number(search);
    if (!isNaN(searchNumber)) {
      return pokemon.id === searchNumber;
    }

    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <Flex direction='column' gap='3'>
      {pokemon
        .splice(0, 11)
        .filter(filter)
        .map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </Flex>
  );
};
