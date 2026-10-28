"use client";

// Theirs
import { useEffect, useState } from "react";

// Ours
import { TextLink } from "@/components/text-link";
import { footer } from "@/content/copy";
import { link } from "@/content/links";

const links = Object.values(link);

export function Footer() {
  const [year, setYear] = useState(1985);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card py-12 [content-visibility:auto] [contain-intrinsic-size:auto_300px]">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="md:col-[1/2]">{footer.author}</p>
        <address className="flex flex-col items-start md:col-[1/2] md:row-[2/3] not-italic">
          {links.map(link => (
            <TextLink
              key={link.url}
              href={link.url}
            >
              {link.label}
            </TextLink>
          ))}
        </address>
        <p className="md:col-[1/2] md:row-[3/4]">
          <small>{footer.copyright(year)}</small>
        </p>
        <p className="md:col-[2/3] md:row-[1/2] md:justify-self-end">{footer.callout}</p>
      </div>
    </footer>
  );
}
