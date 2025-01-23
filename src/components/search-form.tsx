import { redirect } from 'next/navigation';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField, Button } from '@radix-ui/themes';

interface Props {
  size?: 'normal' | 'small';
  defaultSearch?: string;
}

export const SearchForm = ({ size = 'normal', defaultSearch }: Props) => {
  const searchPokemon = async (formData: FormData) => {
    'use server';

    const search = formData.get('search') as string;

    if (search) {
      redirect(`/pokemon?search=${search}`);
    }
  };

  return (
    <form action={searchPokemon}>
      <TextField.Root
        name='search'
        placeholder='Search pokemon...'
        defaultValue={defaultSearch}
        size={size === 'normal' ? '3' : '2'}
        autoFocus
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height='16' width='16' />
        </TextField.Slot>
        <TextField.Slot pr={size === 'normal' ? '4' : '3'}>
          <Button size={size === 'normal' ? '2' : '1'} variant='ghost' type='submit'>
            Search
          </Button>
        </TextField.Slot>
      </TextField.Root>
    </form>
  );
};
