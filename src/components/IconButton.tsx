import Link from './Link';

type Props = {
  href: string;
  icon?: React.ReactNode;
};

export default function IconButton({ href, icon }: Props) {
  return (
    <Link href={href} isExternal>
      <span className="block w-8 h-8">{icon}</span>
    </Link>
  );
}
