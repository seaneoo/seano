import IconButton from '@/components/IconButton';
import { FaGithub, FaLinkedin, FaMastodon, FaPaperPlane } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="container min-h-screen flex flex-col justify-center items-center md:items-start gap-8 p-8">
      <h1 className="text-6xl font-black text-center md:text-8xl md:text-left">
        Hey, I&apos;m Sean.
      </h1>
      <p className="text-3xl font-semibold text-center md:text-4xl md:text-left">
        I&apos;m a Denver-based full-stack software developer.
      </p>
      <div className="flex gap-8">
      <IconButton
          href="https://www.linkedin.com/in/seaneoo"
          icon={<FaLinkedin className="w-full h-full"  />}
          label="my linkedin"
        />
        <IconButton
          href="https://github.com/seaneoo"
          icon={<FaGithub className="w-full h-full" />}
          label="my github"
        />
        <IconButton
          href="https://mastodon.social/@seaneoo"
          icon={<FaMastodon className="w-full h-full" />}
          label="my mastodon"
        />
        <IconButton
          href="mailto:so@seano.dev"
          icon={<FaPaperPlane className="w-full h-full" />}
          label="my email"
        />
      </div>
    </main>
  );
}
