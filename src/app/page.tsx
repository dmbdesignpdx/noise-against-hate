import { About } from "@/components/about";
import { Callout } from "@/components/callout";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <>
      <Search />
      <About />
      <Callout />
    </>
  );
}
