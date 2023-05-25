import classNames from 'classnames';
import NextLink from 'next/link';

type LinkProps = React.ComponentProps<typeof NextLink>;

type Props = {
  isExternal?: boolean;
} & LinkProps;

export default function Link(props: Props) {
  return (
    <NextLink
      {...props}
      href={props.href}
      target={props.isExternal ? '_blank' : ''}
      rel={props.isExternal ? 'noopener noreferrer' : ''}
      className={classNames(props.className)}>
      {props.children}
    </NextLink>
  );
}
