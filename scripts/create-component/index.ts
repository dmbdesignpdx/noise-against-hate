import { parseArgs, styleText } from "node:util";
import type { BunFile } from "bun";
import * as changeCase from "change-case";

const __dirname = import.meta.dir;

const COMP_PATH = "./src/components";
const TEST_PATH = "./src/__tests__";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    element: {
      type: "string",
      default: "div",
      short: "e",
    },
  },
  strict: true,
  allowPositionals: true,
});

const [, , name] = positionals;
const caseName = changeCase.kebabCase(name);
const componentFile = Bun.file(`${__dirname}/partials/component.txt`);
const testFile = Bun.file(`${__dirname}/partials/test.txt`);

console.log(`${styleText("blue", "   [info]")} -- Creating component: ${name}`);

async function updateWithName(file: BunFile): Promise<string> {
  const text = await file.text();

  return text.replaceAll("#NAME#", name).replaceAll("#FILE#", caseName);
}

const component = await updateWithName(componentFile);
const test = await updateWithName(testFile);
const finalComponent = component.replaceAll("#ELEM#", values.element);

await Bun.write(`${COMP_PATH}/${caseName}.tsx`, finalComponent);
await Bun.write(`${TEST_PATH}/${caseName}.test.tsx`, test);

console.log(`${styleText("green", "[success]")} -- Component created`);
