import { Flex } from '@radix-ui/themes';

import type { Pokemon } from '~/lib/types';

import { PokemonCard } from '~/components/pokemon-card';
import { Pagination } from '~/components/pagination';

import POKEMON_LIST from '~/data/pokemon.json';

interface Props {
  search: string | undefined;
  offset: number;
  limit: number;
}

export const PokemonList = ({ search, offset, limit }: Props) => {
  const filter = (pokemon: Pokemon) => {
    if (!search) return true;

    // If the search is a number, filter by id
    const searchNumber = Number(search);
    if (!isNaN(searchNumber)) {
      return pokemon.id === searchNumber;
    }

    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredResults = POKEMON_LIST.filter(filter);

  const paginatedResults = filteredResults.filter((_, i) => i >= offset && i < offset + limit);

  return (
    <Flex direction='column' gap='5' align='center'>
      <Flex direction='column' gap='2' width='100%'>
        {paginatedResults.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Flex>

      <Pagination basePath='/pokemon' search={search} total={filteredResults.length} offset={offset} limit={limit} />
    </Flex>
  );
};
