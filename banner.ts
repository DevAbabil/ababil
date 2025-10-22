import fs from "fs";
import path from "path";
import data from "./src/data";

export const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "package.json"), "utf-8"));

const banner = `
#!/usr/bin/env node

/**
 * @packageName     ${pkg.name}
 * @description     ${pkg.description}
 * @author          ${pkg?.author}
 * @license         MIT
 * @version         ${pkg.version}
 * @repository      ${pkg?.repository?.url?.replace("git+", "")}
 * @created         ${data?.timestamp?.createdAt}
 * @lastModified    ${data?.timestamp?.updatedAt}
 **/
 `.trim();

fs.writeFileSync("banner.txt", banner);
