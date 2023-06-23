'use client';

import NextLink from 'next/link';

type LinkProps = React.ComponentProps<typeof NextLink>;

export default function ExtLink({ children, ...props }: LinkProps) {
  return (
    <NextLink target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </NextLink>
  );
}
