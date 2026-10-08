"use server";

// Theirs
import type { PostgrestSingleResponse } from "@supabase/supabase-js";

// Ours
import { supabase } from "@/lib/supabase";
import type { SearchedBand } from "@/types/main";

export async function getBands(raw: string): Promise<PostgrestSingleResponse<SearchedBand[]>> {
  const tags = raw
    .toLowerCase()
    .split(",")
    .map(s => s.trim());

  const base = await supabase
    .from("bands")
    .select("bandcamp, name, country, image, genres")
    .contains("tags", [...tags])
    .order("name", { ascending: true });

  return base;
}
