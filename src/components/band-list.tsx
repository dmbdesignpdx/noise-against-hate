// Theirs
import { cacheLife, cacheTag } from "next/cache";

// Ours
import { getAllBands } from "@/actions/get-all-bands";
import { InfoBlock } from "@/components/info-block";
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
    <dl className="columns-2 mbs-8">
      {data.map(item => (
        <div
          key={item.bandcamp}
          className="break-inside-avoid mbe-8"
        >
          <dt className="text-xl">
            <a
              className="text-purple-400 hover:underline"
              href={bandcampUrl(item.bandcamp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </dt>
          <dd className="text-sm mbs-1">{item.genres.join(" / ")}</dd>
        </div>
      ))}
    </dl>
  );
}
