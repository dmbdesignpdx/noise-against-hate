import { metaData } from "@/content/meta";

export function Shero() {
  return (
    <header className="contain-strict block-[45svh] flex items-end pbe-8">
      <div className="wrapper flex flex-col items-center gap-12">
        <h1 className="relative type-display highlight">{metaData.title}</h1>
        <p className="trim max-inline-[50ch] text-center">{metaData.description}</p>
      </div>
    </header>
  );
}
