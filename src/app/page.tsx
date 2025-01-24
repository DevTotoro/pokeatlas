import Link from 'next/link';
import { Flex, Container, Link as RadixLink } from '@radix-ui/themes';

import { Title } from '~/components/title';
import { SearchForm } from '~/components/search-form';

const HomePage = () => {
  return (
    <Container size='1' height='100dvh' px='6'>
      <Flex direction='column' gap='5' height='100%' justify='center'>
        <Title />

        <Flex direction='column' gap='3'>
          <SearchForm autoFocus />

          <RadixLink style={{ marginLeft: 'auto' }} asChild>
            <Link href='/pokemon'>Full list</Link>
          </RadixLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default HomePage;
