import cx from 'clsx';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sean O'Connor"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={cx(
          inter.className,
          'min-h-screen bg-background text-text transition-colors selection:bg-text selection:text-background dark:bg-backgroundDark dark:text-textDark selection:dark:bg-background selection:dark:text-text'
        )}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
