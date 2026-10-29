// Theirs
import { useRef } from "react";

// Ours
import { BandCard } from "@/components/band-card";
import { CardSkeleton } from "@/components/card-skeleton";
import type { SearchState } from "@/components/search-body";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PAGE_SIZE } from "@/constants";
import { heading } from "@/content/copy";
import { label } from "@/content/labels";
import { createIdArray } from "@/lib/array";
import { cn } from "@/lib/utils";

interface Props {
  state: SearchState;
  loading: boolean;
  page: number;
  setPage: (n: number) => void;
}

const skeletons = createIdArray(3, "skull");

export function SearchResults({ state, loading, page, setPage }: Props) {
  // State
  const { bands } = state;

  // Derived states
  const totalPages = bands ? Math.ceil(bands.length / PAGE_SIZE) : 0;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visible = bands?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) ?? [];
  const onFirst = page === 1;
  const onLast = page === totalPages;

  // Refs
  const $list = useRef<HTMLElement>(null);

  function goToPage(n: number) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setPage(n);
      $list.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  return (
    <>
      <section
        ref={$list}
        className={cn(
          "contain-layout grid mbs-8 grid-cols-1 md:grid-cols-3 auto-rows-max gap-6 scroll-mbs-8 min-block-[60svh]",
          loading && "min-block-svh",
        )}
        aria-live="polite"
        aria-busy={loading ? "true" : "false"}
        aria-atomic="false"
      >
        <h2 className="sr-only">{heading.results}</h2>
        {loading && !bands && skeletons.map(id => <CardSkeleton key={id} />)}
        {bands &&
          bands.length > 0 &&
          visible.map(b => (
            <BandCard
              key={b.bandcamp}
              {...b}
            />
          ))}
      </section>
      {totalPages > 1 && (
        <Pagination className="mbs-8 mbe-52">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled={onFirst}
                className={onFirst ? "pointer-events-none opacity-50" : undefined}
                onClick={onFirst ? undefined : goToPage(page - 1)}
                aria-label={label.previous}
              />
            </PaginationItem>
            {pages.map(count => (
              <PaginationItem key={count}>
                <PaginationLink
                  href="#"
                  isActive={count === page}
                  onClick={goToPage(count)}
                  aria-label={label.current(page, totalPages)}
                  aria-current={count === page ? "step" : undefined}
                >
                  {count}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled={onLast}
                className={onLast ? "pointer-events-none opacity-50" : undefined}
                onClick={onLast ? undefined : goToPage(page + 1)}
                aria-label={label.next}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
