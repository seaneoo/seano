import classNames from 'classnames';
import { Inter } from 'next/font/google';
import './globals.css';

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
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          'min-h-screen bg-background text-text'
        )}>
        {children}
      </body>
    </html>
  );
}
