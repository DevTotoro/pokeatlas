import { DataList } from '@radix-ui/themes';

import { getTypesImmunities, getTypesResistances, getTypesWeaknesses } from '~/lib/pokemon-utils';
import { capitalizeFirstLetter } from '~/lib/utils';

interface Props {
  types: string[];
}

export const PokemonTypeChart = ({ types }: Props) => {
  const weakTo = getTypesWeaknesses(types);
  const resistantTo = getTypesResistances(types);
  const immuneTo = getTypesImmunities(types);

  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label>Weak to</DataList.Label>
        <DataList.Value>{weakTo.length > 0 ? weakTo.map(capitalizeFirstLetter).join(', ') : '-'}</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Resistant to</DataList.Label>
        <DataList.Value>
          {resistantTo.length > 0 ? resistantTo.map(capitalizeFirstLetter).join(', ') : '-'}
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Immune to</DataList.Label>
        <DataList.Value>{immuneTo.length > 0 ? immuneTo.map(capitalizeFirstLetter).join(', ') : '-'}</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};
