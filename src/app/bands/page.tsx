import Link from "next/link";
import { Suspense } from "react";

import { buttonVariants } from "ui/button";
import { BandList } from "@/components/band-list";
import { InfoBlock } from "@/components/info-block";
import { heading } from "@/content/copy";
import { label } from "@/content/labels";
import { cn } from "@/lib/utils";

export const ensureStatic = "prefetch";

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
    <div className="wrapper min-block-[80svh] flex flex-col gap-10">
      <BackLink />
      <h1 className="type-heading mbs-4">{heading.artists}</h1>
      <Suspense fallback={<InfoBlock loading={true} />}>
        <BandList />
        <BackLink />
      </Suspense>
      {/**/}
    </div>
  );
}
