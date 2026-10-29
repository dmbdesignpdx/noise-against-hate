"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { TextLink } from "@/components/text-link";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { SearchedBand } from "@/types/main";
import { bandcampUrl } from "@/utils/bandcamp";

interface Props {
  data: SearchedBand[];
}

export function BandCarousel({ data }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="mbs-20"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {data.map((band, i) => (
            <CarouselItem key={band.id}>
              <article
                className="grid sm:grid-cols-[1fr_2fr] px-14 gap-8"
                aria-current={current === i + 1 ? "step" : undefined}
                aria-label={`Band ${i + 1} of ${data.length}`}
              >
                <Image
                  className="size-full aspect-square object-cover"
                  src={band.image}
                  height={600}
                  width={600}
                  alt=""
                />
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-2xl font-bold">{band.name}</h3>
                  <p className="text-md text-neutral-200">{band.country}</p>
                  <p className="text-neutral-300">{band.genres.join(" // ")}</p>
                  <p>
                    <TextLink href={bandcampUrl(band.bandcamp)}>
                      Bandcamp <span className="sr-only">Link</span>
                    </TextLink>
                  </p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="inset-s-0 lg:-inset-s-12" />
        <CarouselNext className="inset-e-0 lg:-inset-e-12" />
      </Carousel>
      <footer className="mbs-16">
        <p className="text-center text-neutral-400">
          <small>
            {current} of {data.length}
          </small>
        </p>
      </footer>
    </>
  );
}
