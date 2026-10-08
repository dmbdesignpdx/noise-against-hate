// Theirs
import Link from "next/link";
import { Suspense } from "react";

// Ours
import { BandList } from "@/components/band-list";
import { InfoBlock } from "@/components/info-block";
import { buttonVariants } from "@/components/ui/button";
import { body } from "@/content/copy";
import { label } from "@/content/labels";
import { cn } from "@/lib/utils";

function BackLink() {
  return (
    <Link
      className={cn(buttonVariants({ variant: "outline" }), "self-start block-10 px-6 text-sm")}
      href="/"
    >
      {label.back}
    </Link>
  );
}

export default function Bands() {
  return (
    <div className="wrapper min-block-[80svh] flex flex-col gap-6">
      <h1 className="type-heading">{body.artistList}</h1>
      <BackLink />
      <Suspense fallback={<InfoBlock loading={true} />}>
        <BandList />
        <BackLink />
      </Suspense>
      {/**/}
    </div>
  );
}
