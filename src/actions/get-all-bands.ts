"use server";

// Theirs
import type { PostgrestSingleResponse } from "@supabase/supabase-js";

// Ours
import { supabase } from "@/lib/supabase";
import type { ListedBand } from "@/types/main";

export async function getAllBands(): Promise<PostgrestSingleResponse<ListedBand[]>> {
  const base = await supabase
    .from("bands")
    .select("bandcamp, name, genres, id")
    .order("name", { ascending: true });

  return base;
}
