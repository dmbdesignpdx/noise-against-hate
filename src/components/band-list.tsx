import { cacheLife, cacheTag } from "next/cache";

import { getAllBands } from "@/actions/get-all-bands";
import { InfoBlock } from "@/components/info-block";
import { TextLink } from "@/components/text-link";
import { heading } from "@/content/copy";
import { bandcampUrl } from "@/utils/bandcamp";

export async function BandList() {
  "use cache";
  cacheLife("days");
  cacheTag("all-bands");

  const { data, error } = await getAllBands();

  if (error) {
    return <InfoBlock error={true} />;
  }

  return (
    <div>
      <p>{heading.totalArtists(data.length)}:</p>
      <dl className="columns-2 mbs-8">
        {data.map(item => (
          <div
            key={item.bandcamp + item.id}
            className="break-inside-avoid mbe-8"
          >
            <dt className="text-xl">
              <TextLink href={bandcampUrl(item.bandcamp)}>{item.name}</TextLink>
            </dt>
            <dd className="text-sm mbs-1">{item.genres.join(" / ")}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
