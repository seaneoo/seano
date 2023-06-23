import ExtLink from '@/components/ext-link';
import Header from '@/components/header';

const emailGreetings = ['Hello!', 'Hey!', 'Hi!'];

export default function About() {
  return (
    <main className="container relative flex min-h-screen flex-col items-center justify-center gap-16 p-8">
      <Header />

      <section className="w-full text-center text-xl md:w-5/6 lg:w-3/4 lg:text-2xl xl:w-1/2">
        <p className="mb-4">
          Hey, my name is Sean. I&apos;m a <mark>Denver-based</mark> full stack
          software developer specializing in front end web development & design
          using <mark>React</mark> and <mark>Next.js</mark>.
        </p>

        <p className="mb-4">
          I also love to play around with iOS app development and back end
          development—with the former being my future career plan.
        </p>

        <p className="mb-8">
          I would love to hear from you! Please{' '}
          <mark>
            <ExtLink
              href={`mailto:so@seano.dev?subject=${
                emailGreetings[
                  Math.floor(Math.random() * emailGreetings.length)
                ]
              }`}>
              send me an email
            </ExtLink>
          </mark>
          .
        </p>

        <p className="text-lg">
          (
          <mark>
            <ExtLink href="https://files.catbox.moe/sgctmq.jpeg">
              Obligatory cat picture
            </ExtLink>
          </mark>
          )
        </p>
      </section>
    </main>
  );
}
