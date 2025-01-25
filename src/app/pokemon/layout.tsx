import type { PropsWithChildren } from 'react';
import { Container, Flex } from '@radix-ui/themes';

import { Title } from '~/components/title';
import { SearchForm } from '~/components/search-form';

interface Props {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PokemonLayout = async ({ searchParams, children }: Readonly<PropsWithChildren<Props>>) => {
  const queryParams = await searchParams;

  const processedSearch = queryParams?.search
    ? Array.isArray(queryParams.search)
      ? queryParams.search.join(',')
      : queryParams.search
    : undefined;

  return (
    <Container size='2' px='6' py='4'>
      <Flex direction='column' gap='8'>
        <Flex justify='between' align='center' gap='4'>
          <Title size='small' isLink />

          <SearchForm size='small' defaultSearch={processedSearch} />
        </Flex>

        {children}
      </Flex>
    </Container>
  );
};

export default PokemonLayout;
