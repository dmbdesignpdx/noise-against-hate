import { info } from "@/content/copy";

interface Props {
  loading?: boolean;
  error?: boolean;
  bands?: unknown[] | null;
  tags?: string;
}

export function InfoBlock({ loading, error, bands, tags }: Props) {
  return (
    <div className="my-14 text-center text-gray-300">
      {loading && <p role="status">{info.loading}</p>}
      {error && <p role="alert">{info.error}</p>}
      {bands && bands.length === 0 && <p role="status">{info.notFound}</p>}
      {!loading && bands && bands.length > 0 && (
        <p role="status">{info.bandsFound(bands.length, tags || "")}</p>
      )}
    </div>
  );
}
