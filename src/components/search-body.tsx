import { startTransition, useActionState, useRef, useState } from "react";

import { getBands } from "@/actions/get-bands";
import { InfoBlock } from "@/components/info-block";
import { SearchForm } from "@/components/search-form";
import { SearchResults } from "@/components/search-results";
import { Id } from "@/constants";
import type { SearchedBand } from "@/types/main";

interface SearchFormProps {
  clear: () => void;
}

export interface SearchState {
  bands: SearchedBand[] | null;
  error: boolean;
  query: string;
}

const initialState: SearchState = { bands: null, error: false, query: "" };

export function SearchBody({ clear }: SearchFormProps) {
  // Local states
  const [page, setPage] = useState(1);
  const [state, formAction, loading] = useActionState(searchBands, initialState);
  const { bands, error, query } = state;

  // Refs
  const $search = useRef<HTMLDivElement>(null);

  async function searchBands(prev: SearchState, formData: FormData): Promise<SearchState> {
    const query = String(formData.get(Id.TAGS) ?? "").trim();

    if (!query) return prev;

    $search.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const { data, error } = await getBands(query);

    if (error) {
      console.error(error);
      return { ...prev, error: true };
    }

    startTransition(() => {
      setPage(1);
    });

    return { bands: data, error: false, query };
  }

  return (
    <div
      ref={$search}
      className="contain-paint wrapper scroll-mbe-4"
    >
      <SearchForm
        clear={clear}
        formAction={formAction}
        loading={loading}
      />
      <InfoBlock
        loading={loading}
        error={error}
        bands={bands}
        tags={query}
      />
      <SearchResults
        state={state}
        loading={loading}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
