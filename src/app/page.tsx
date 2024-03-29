import Header from '@/components/header';
import IconButton from '@/components/icon-button';
import { FaGithub, FaLinkedin, FaMastodon, FaPaperPlane } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="container relative flex min-h-screen flex-col items-center justify-center gap-16 p-8">
      <Header />

      <section>
        <h1 className="mb-4 text-center text-5xl font-bold text-brand md:text-6xl">
          Hey, I&apos;m Sean O&apos;Connor.
        </h1>
        <p className="text-center text-3xl font-medium md:text-4xl">
          I&apos;m a Denver-based software developer.
        </p>
      </section>

      <section>
        <div className="flex gap-8">
          <IconButton
            href="https://www.linkedin.com/in/seaneoo"
            icon={<FaLinkedin className="h-full w-full" />}
            aria-label="my linkedin"
          />

          <IconButton
            href="https://github.com/seaneoo"
            icon={<FaGithub className="h-full w-full" />}
            aria-label="my github"
          />

          <IconButton
            href="https://mozilla.social/@sean"
            rel="me"
            icon={<FaMastodon className="h-full w-full" />}
            aria-label="my mastodon"
          />

          {/* <IconButton
            href="https://matrix.to/#/@seaneoo:data.haus"
            icon={<SiMatrix className="h-full w-full" />}
            aria-label="my secure matrix"
          /> */}

          <IconButton
            href="mailto:so@seano.dev"
            icon={<FaPaperPlane className="h-full w-full" />}
            aria-label="my email"
          />
        </div>
      </section>
    </main>
  );
}
