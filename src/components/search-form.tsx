import Link from "next/link";

import { Button, buttonVariants } from "ui/button";
import { Field, FieldGroup, FieldLabel } from "ui/field";
import { Input } from "ui/input";
import { Id } from "@/constants";
import { label } from "@/content/labels";
import { cn } from "@/lib/utils";

interface Props {
  loading: boolean;
  formAction: (payload: FormData) => void;
  clear: () => void;
}

export function SearchForm({ clear, formAction, loading }: Props) {
  return (
    <search
      id={Id.SEARCH}
      className="mx-auto scroll-mbs-20"
    >
      <form action={formAction}>
        <FieldGroup>
          <Field>
            <FieldLabel
              className="text-sm"
              htmlFor={Id.TAGS}
            >
              {label.name}
            </FieldLabel>
            <div className="gap-4 flex flex-col sm:flex-row">
              <Input
                className="block-10 text-sm"
                id={Id.TAGS}
                type="search"
                name={Id.TAGS}
                aria-autocomplete="none"
                autoComplete="off"
                placeholder={label.placeholder}
                autoFocus
              />
              <Button
                className="block-10 px-6 text-sm"
                type="submit"
                disabled={loading}
              >
                {label.search}
              </Button>
              <Button
                className="block-10 px-6 text-sm"
                type="button"
                variant="outline"
                onClick={clear}
              >
                {label.clear}
              </Button>
              <Link
                className={cn(buttonVariants({ variant: "link" }), "block-10 px-4 text-sm")}
                href="/bands"
                prefetch
              >
                {label.fullList}
              </Link>
            </div>
          </Field>
        </FieldGroup>
      </form>
    </search>
  );
}
