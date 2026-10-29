// Theirs
import Image from "next/image";

// Ours
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SearchedBand } from "@/types/main";
import { bandcampUrl } from "@/utils/bandcamp";

export function BandCard({ bandcamp, name, country, image, genres, id }: SearchedBand) {
  return (
    <Card aria-labelledby={bandcamp}>
      <CardHeader>
        <CardTitle>
          <h3
            id={bandcamp + id}
            className="text-lg -mbs-1"
          >
            {name}
          </h3>
        </CardTitle>
        <CardAction className="">{country}</CardAction>
        <CardDescription>
          <a
            className="hover:underline text-indigo-400"
            href={bandcampUrl(bandcamp)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp <span className="sr-only">Link</span>
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="mbs-auto">
        <a
          className="block hover:before:opacity-20 relative before:transition-opacity before:duration-200 before:bg-purple-500 before:opacity-0 before:content-[''] before:block before:absolute before:inset-bs-0 before:inset-s-0 before:size-full before:pointer-events-none"
          href={`https://${bandcamp}.bandcamp.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="inline-full aspect-square object-cover"
            src={image}
            height={600}
            width={600}
            alt=""
          />
        </a>
      </CardContent>
      <CardFooter className="min-block-19">
        <p>{genres.join(" / ")}</p>
      </CardFooter>
    </Card>
  );
}
