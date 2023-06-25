'use client';

import ExtLink from './ext-link';

type Props = {
  href: string;
  icon?: React.ReactNode;
  label: string;
};

export default function IconButton({ href, icon, label }: Props) {
  return (
    <ExtLink href={href} aria-label={label} className="text-text no-underline">
      <span className="block h-8 w-8">{icon}</span>
    </ExtLink>
  );
}
