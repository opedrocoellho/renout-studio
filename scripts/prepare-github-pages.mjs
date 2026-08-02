import { readFile, writeFile } from "node:fs/promises";

const prefix = "/renout-studio-site";
const files = ["dist/client/index.html", "dist/client/404.html"];

for (const file of files) {
  const html = await readFile(file, "utf8");
  const prepared = html.replaceAll('"/assets/', `"${prefix}/assets/`);
  await writeFile(file, prepared);
}
