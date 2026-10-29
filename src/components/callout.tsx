import { cacheLife, cacheTag } from "next/cache";
import { Suspense } from "react";

import { getLatestBands } from "@/actions/get-latest-bands";
import { BandCarousel } from "@/components/band-carousel";

export async function Callout() {
  "use cache";
  cacheLife("days");
  cacheTag("latest-bands");

  const { data, error } = await getLatestBands();

  if (error || data.length === 0) {
    return null;
  }

  return (
    <article className="wrapper mbs-48">
      <h2 className="type-title text-center">Latest Additions</h2>
      <Suspense fallback={<p>loading...</p>}>
        <BandCarousel data={data} />
      </Suspense>
    </article>
  );
}
