'use client';

import classNames from 'classnames';
import NextLink from 'next/link';

type LinkProps = React.ComponentProps<typeof NextLink>;

type Props = {
  external?: boolean;
} & LinkProps;

export default function Link({
  href,
  external,
  className,
  children,
  ...props
}: Props) {
  return (
    <NextLink
      href={href}
      target={external ? '_blank' : ''}
      rel={external ? 'noopener noreferrer' : ''}
      className={classNames(className)}
      {...props}>
      {children}
    </NextLink>
  );
}
