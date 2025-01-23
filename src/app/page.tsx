import { Flex, Container, Heading } from '@radix-ui/themes';

import { SearchForm } from '~/components/search-form';

const Home = () => {
  return (
    <Container size='1' height='100dvh' px='6'>
      <Flex direction='column' gap='5' height='100%' justify='center'>
        <Heading size='9' color='gold'>
          pokeatlas
        </Heading>

        <SearchForm />
      </Flex>
    </Container>
  );
};

export default Home;
