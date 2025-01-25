'use client';

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Container, Flex, Text, Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';

import { Title } from '~/components/title';

export const metadata: Metadata = {
  title: 'pokeatlas'
};

const GlobalError = () => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body style={{ margin: 0 }}>
        <ThemeProvider attribute='class'>
          <Theme appearance='inherit' accentColor='gold' grayColor='olive' panelBackground='solid'>
            <Container size='1' height='100dvh' px='6'>
              <Flex direction='column' gap='4' height='100%' justify='center' align='center'>
                <Title isLink />

                <Text size='3' style={{ textAlign: 'center' }}>
                  Oops! Something went wrong. Please try again.
                </Text>
              </Flex>
            </Container>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default GlobalError;
