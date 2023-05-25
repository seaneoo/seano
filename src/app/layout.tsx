import ThemeChanger from '@/components/ThemeChanger';
import classNames from 'classnames';
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
      <body
        className={classNames(
          inter.className,
          'min-h-screen bg-background text-text dark:bg-backgroundDark dark:text-textDark selection:bg-text selection:text-background transition-colors'
        )}>
        <Providers>
          <ThemeChanger />
          {children}
        </Providers>
      </body>
    </html>
  );
}
