import { Abbreviate } from "@/components/abbreviate";
import { TextLink } from "@/components/text-link";
import { GITHUB, Id } from "@/constants";
import { heading } from "@/content/copy";

export function About() {
  return (
    <section
      className="wrapper contain-layout"
      aria-labelledby={Id.ABOUT}
    >
      <div className="flex flex-col md:px-12 gap-6">
        <h2
          id={Id.ABOUT}
          className="sr-only"
        >
          {heading.about}
        </h2>
        <p className="type-copy">
          These are featured artists that can be found on the platforms Satan Not Hatin' and
          Antifascist Black Metal Network. Well, at least the artists I could &ldquo;recover&rdquo;
          from the Satan Not Hatin' website since it's been down for a while, unfortunately. Other
          artists included have explicitly stated in their own way they are
          &ldquo;antifascist&rdquo; or &ldquo;against oppression&rdquo;. I’ve been wanting a single,
          searchable collection of bands that one could discover and feel good about listening to
          them… so here it is!
        </p>
        <aside>
          <p className="type-copy">
            <dfn>Satan Not Hatin'</dfn> is a campaign operated by Global Order of Satan to promote
            metal, alt, punk, industrial, neofolk, and goth artists, organizations, and venues that
            reject hate, discrimination, and far-right influences.
          </p>
          <p>
            <TextLink href="https://www.instagram.com/s8nnoth8n">s8nnoth8n on Instagram</TextLink>
          </p>
        </aside>
        <aside>
          <p className="type-copy">
            <dfn>Antifascist Black Metal Network</dfn> is an online platform and anti-authoritarian
            community that opposes racism, sexism, homophobia, transphobia, ableism, and all forms
            of oppression within the extreme metal scene.
          </p>
          <p className="">
            <TextLink href="https://www.facebook.com/antifascistbmnetwork">
              <Abbreviate
                text="Antifascist Black Metal Network"
                using="ABMN"
                withSuffix=" on Facebook"
              />
            </TextLink>
          </p>
        </aside>
        <hr className="my-6" />
        <p className="type-copy">
          This is a work in progress &mdash; I will be constantly adding artists (there are so
          many). Please bare with me. Feel free to open an issue on GitHub to request an artist to
          be added or if you’ve found a bug: <TextLink href={GITHUB}>here</TextLink>
        </p>
      </div>
    </section>
  );
}
