"use server";

import type { PostgrestSingleResponse } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";
import type { SearchedBand } from "@/types/main";

export async function getLatestBands(): Promise<PostgrestSingleResponse<SearchedBand[]>> {
  const base = await supabase
    .from("bands")
    .select("bandcamp, name, genres, id, image, country")
    .order("id", { ascending: false })
    .limit(3);

  return base;
}
