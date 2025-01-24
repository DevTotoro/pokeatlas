import { Flex, Container } from '@radix-ui/themes';

import { Title } from '~/components/title';
import { SearchForm } from '~/components/search-form';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PokemonList = async ({ searchParams }: Props) => {
  const { search } = await searchParams;

  const processedSearch = Array.isArray(search) ? search.join(',') : search;

  return (
    <Container size='2' px='6' py='4'>
      <Flex direction='column' gap='5'>
        <Flex justify='between' align='center' gap='4'>
          <Title size='small' isLink />

          <SearchForm size='small' defaultSearch={processedSearch} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default PokemonList;
