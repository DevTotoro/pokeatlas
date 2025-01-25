import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Card, Flex, Text } from '@radix-ui/themes';

import type { Pokemon } from '~/lib/types';
import { capitalizeFirstLetter } from '~/lib/utils';

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card asChild>
      <Link href={`/pokemon/${pokemon.id}`}>
        <Flex gap='3' justify='between' align='center'>
          <Flex gap='3' align='center'>
            {pokemon.spriteUrl ? (
              <Image src={pokemon.spriteUrl} alt={pokemon.name} width={40} height={40} />
            ) : (
              <Avatar size='3' radius='full' fallback='P' color='gold' />
            )}

            <Text size='3' weight='bold'>
              {capitalizeFirstLetter(pokemon.name)}
            </Text>
          </Flex>

          <Flex gap='4' align='center'>
            <Text size='2'>{pokemon.types.map(capitalizeFirstLetter).join(', ')}</Text>

            <Text size='2' color='gray'>
              #{pokemon.id}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Card>
  );
};
