"use client";

// Theirs
import { useState } from "react";

// Ours
import { SearchBody } from "@/components/search-body";

export function Search() {
  const [key, setKey] = useState(1);

  function resetSearch() {
    setKey(prev => prev + 1);
  }

  return (
    <SearchBody
      key={`search-v${key}`}
      clear={resetSearch}
    />
  );
}
