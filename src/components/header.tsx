'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const pages = [
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/work',
    name: 'Work'
  }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute left-0 right-0 top-0 p-[inherit]">
      <nav className="flex w-full flex-row items-center justify-center gap-4">
        <div className="flex w-32 items-center justify-start">
          {pathname !== '/' && (
            <Link
              href="/"
              className="flex items-center gap-2 text-lg text-text no-underline">
              <FaChevronLeft /> Back
            </Link>
          )}
        </div>
        <div className="flex w-full flex-1 flex-wrap items-center justify-end gap-8 md:justify-center">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.path}
              className={clsx(
                'text-lg text-text no-underline',
                pathname === page.path && 'text-brand'
              )}>
              {page.name}
            </Link>
          ))}
        </div>
        <div className="hidden w-32 items-center justify-end md:flex"></div>
      </nav>
    </header>
  );
}
