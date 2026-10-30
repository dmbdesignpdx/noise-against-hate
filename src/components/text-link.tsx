import type { PropsWithChildren } from "react";

import { buttonVariants } from "ui/button";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
  href: string;
}

export function TextLink({ href, children }: Props) {
  return (
    <a
      className={cn(buttonVariants({ variant: "link" }), "text-lg px-0")}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
