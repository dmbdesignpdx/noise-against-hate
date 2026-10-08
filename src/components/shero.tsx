import { metaData } from "@/content/meta";

export function Shero() {
  return (
    <header className="contain-strict block-[45svh] flex items-end pbe-8">
      <div className="wrapper flex flex-col items-center gap-12">
        <h1 className="relative type-display before:content-[''] before:block before:bg-black before:w-full before:h-full before:absolute before:z-[-1] before:p-3 before:box-content before:-top-3 before:-left-3">
          {metaData.title}
        </h1>
        <p className="trim max-inline-[50ch] text-center">{metaData.description}</p>
      </div>
    </header>
  );
}
