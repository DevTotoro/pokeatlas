import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  title: 'pokeatlas'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body style={{ margin: 0 }}>
        <ThemeProvider attribute='class'>
          <Theme appearance='inherit' accentColor='gold' grayColor='olive' panelBackground='solid'>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
