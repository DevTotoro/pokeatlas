import { Flex, Container, Text } from '@radix-ui/themes';

import { Title } from '~/components/title';

const NotFound = () => {
  return (
    <Container size='1' height='100dvh' px='6'>
      <Flex direction='column' gap='6' height='100%' justify='center' align='center'>
        <Title isLink />

        <Flex direction='column' gap='3' align='center'>
          <Text size='6' weight='bold'>
            404
          </Text>

          <Text size='3' color='gray'>
            These aren&apos;t the Pokemon you&apos;re looking for
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NotFound;
