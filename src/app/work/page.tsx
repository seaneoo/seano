import ExtLink from '@/components/ext-link';
import Header from '@/components/header';

export default function Work() {
  return (
    <main className="container relative flex min-h-screen flex-col items-center justify-center gap-16 p-8">
      <Header />

      <p className="text-center text-xl lg:text-2xl">
        Coming soon!
        <br />
        In the meantime, check out my{' '}
        <mark>
          <ExtLink href="https://github.com/seaneoo/">GitHub</ExtLink>
        </mark>
        . ╰(*°▽°*)╯
      </p>
    </main>
  );
}
