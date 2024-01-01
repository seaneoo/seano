import ExtLink from '@/components/ext-link';
import Header from '@/components/header';

const emailGreetings = ['Hello!', 'Hey!', 'Hi!'];

export default function About() {
  return (
    <main className="container relative flex min-h-screen flex-col items-center justify-center gap-16 p-8">
      <Header />

      <section className="w-full text-center text-xl md:w-5/6 lg:w-3/4 lg:text-2xl xl:w-1/2">
        <p className="mb-4">
          Hey, my name is <mark>Sean</mark>. I&apos;m a{' '}
          <mark>Denver-based</mark> software developer building gorgeous
          applications using <mark>Kotlin</mark> and <mark>Swift</mark>.
        </p>

        <p className="mb-4">
          I also like to build websites, create back end applications (such as
          the{' '}
          <ExtLink href="https://github.com/upcomingmcu/api">UMCU API</ExtLink>
          ), and mod video games.
        </p>

        <p className="mb-8">
          Let's have a chat! Please{' '}
          <ExtLink
            href={`mailto:so@seano.dev?subject=${
              emailGreetings[Math.floor(Math.random() * emailGreetings.length)]
            }`}>
            send me an email
          </ExtLink>
          .
        </p>

        <p className="text-lg">
          (
          <ExtLink href="https://files.catbox.moe/sgctmq.jpeg">
            Obligatory cat picture
          </ExtLink>
          )
        </p>
      </section>
    </main>
  );
}
