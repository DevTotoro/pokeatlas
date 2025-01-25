import { PokemonList } from '~/components/pokemon-list';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PokemonListPage = async ({ searchParams }: Props) => {
  const { search, offset, limit } = await searchParams;

  const processedSearch = Array.isArray(search) ? search.join(',') : search;
  const processedOffset = offset && !isNaN(Number(offset)) ? Number(offset) : 0;
  const processedLimit = limit && !isNaN(Number(limit)) ? Number(limit) : 20;

  return <PokemonList search={processedSearch} offset={processedOffset} limit={processedLimit} />;
};

export default PokemonListPage;
