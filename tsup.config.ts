import { defineConfig } from "tsup";
import fs from "fs";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    banner: {
      js: fs.readFileSync("./banner.txt", "utf-8"),
    },
    outDir: "dist",
    clean: true,
  },
]);
