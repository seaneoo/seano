'use client';

import Link from 'next/link';
import ExtLink from './ext-link';

type Props = React.ComponentProps<typeof Link> & {
  icon?: React.ReactNode;
};

export default function IconButton({ icon, ...props }: Props) {
  return (
    <ExtLink {...props} className="text-text no-underline">
      <span className="block h-8 w-8">{icon}</span>
    </ExtLink>
  );
}
