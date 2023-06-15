'use client';

import Link from './Link';

type Props = {
  href: string;
  icon?: React.ReactNode;
  label: string;
};

export default function IconButton({ href, icon, label }: Props) {
  return (
    <Link href={href} external={true} aria-label={label}>
      <span className="block h-8 w-8">{icon}</span>
    </Link>
  );
}
