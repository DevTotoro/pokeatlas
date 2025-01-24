import Link from 'next/link';
import { Heading } from '@radix-ui/themes';

interface Props {
  size?: 'normal' | 'small';
  isLink?: boolean;
}

export const Title = ({ size = 'normal', isLink }: Props) => {
  const TitleComponent = (
    <Heading size={size === 'normal' ? '9' : '4'} color='gold'>
      pokeatlas
    </Heading>
  );

  if (isLink) {
    return (
      <Link href='/' style={{ color: 'unset', textDecoration: 'unset' }}>
        {TitleComponent}
      </Link>
    );
  }

  return TitleComponent;
};
