import { redirect } from 'next/navigation';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Flex, Container, Heading, TextField, Button } from '@radix-ui/themes';

const Home = () => {
  const searchPokemon = async (formData: FormData) => {
    'use server';

    const search = formData.get('search') as string;

    if (search) {
      redirect(`/pokemon?search=${search}`);
    }
  };

  return (
    <Container size='1' height='100dvh' px='6'>
      <Flex direction='column' gap='5' height='100%' justify='center'>
        <Heading size='9' color='gold'>
          pokeatlas
        </Heading>

        <form action={searchPokemon}>
          <TextField.Root name='search' placeholder='Search pokemon...' size='3' autoFocus>
            <TextField.Slot>
              <MagnifyingGlassIcon height='16' width='16' />
            </TextField.Slot>
            <TextField.Slot pr='4'>
              <Button size='2' variant='ghost' type='submit'>
                Search
              </Button>
            </TextField.Slot>
          </TextField.Root>
        </form>
      </Flex>
    </Container>
  );
};

export default Home;
