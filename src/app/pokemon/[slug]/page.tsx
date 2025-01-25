import type { Metadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { Avatar, Flex, Heading, Text } from '@radix-ui/themes';

import { capitalizeFirstLetter } from '~/lib/utils';
import { PokemonTypeChart } from '~/components/pokemon-type-chart';

import POKEMON_LIST from '~/data/pokemon.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  const pokemonById = POKEMON_LIST.map((pokemon) => ({
    slug: pokemon.id.toString()
  }));

  const pokemonByName = POKEMON_LIST.map((pokemon) => ({
    slug: pokemon.name
  }));

  return [...pokemonById, ...pokemonByName];
};

/**
 * Find a Pokemon by either its ID or name.
 */
const findPokemon = (slug: string) => {
  return POKEMON_LIST.find((pokemon) => pokemon.id.toString() === slug || pokemon.name === slug);
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;

  const pokemon = findPokemon(slug);

  return {
    title: pokemon ? `pokeatlas · ${capitalizeFirstLetter(pokemon.name)}` : 'pokeatlas'
  };
};

const PokemonPage = async ({ params }: Props) => {
  const { slug } = await params;

  const pokemon = findPokemon(slug);

  if (!pokemon) {
    return redirect('/');
  }

  return (
    <Flex direction='column' gap='5' align='center'>
      <Flex direction='column' gap='3' align='center'>
        {pokemon.spriteUrl ? (
          <Image src={pokemon.spriteUrl} alt={pokemon.name} width={128} height={128} />
        ) : (
          <Avatar size='8' radius='full' fallback='P' color='gold' />
        )}

        <Flex direction='column' gap='1' align='center'>
          <Heading as='h2' size='8' color='gold'>
            {capitalizeFirstLetter(pokemon.name)}
          </Heading>

          <Text size='2' color='gray'>
            #{pokemon.id}
          </Text>
        </Flex>
      </Flex>

      <Text size='4' weight='bold'>
        {pokemon.types.map(capitalizeFirstLetter).join(', ')}
      </Text>

      <PokemonTypeChart types={pokemon.types} />
    </Flex>
  );
};

export default PokemonPage;
