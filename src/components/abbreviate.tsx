interface Props {
  text: string;
  using: string;
  withSuffix?: string;
  withPrefix?: string;
}

export function Abbreviate({ text, using, withSuffix, withPrefix }: Props) {
  return (
    <>
      {withPrefix}
      <abbr title={text}>{using}</abbr>
      {withSuffix}
    </>
  );
}
