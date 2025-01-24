import { Flex, Container } from '@radix-ui/themes';

import { Title } from '~/components/title';
import { SearchForm } from '~/components/search-form';

const HomePage = () => {
  return (
    <Container size='1' height='100dvh' px='6'>
      <Flex direction='column' gap='5' height='100%' justify='center'>
        <Title />

        <SearchForm autoFocus />
      </Flex>
    </Container>
  );
};

export default HomePage;
