import fs from "fs";
import path from "path";

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "package.json"), "utf-8")
);

const banner = `
#!/usr/bin/env node

/**
 * @packageName     ${pkg.name}
 * @description     ${pkg.description}
 * @author          ${pkg?.author}
 * @license         MIT
 * @version         ${pkg.version}
 * @repository      ${pkg?.repository?.url?.replace("git+", "")}
 * @created         2024-03-02
 * @lastModified    ${new Date().toLocaleDateString("en-CA", {
   timeZone: "Asia/Dhaka",
 })}
 **/
 `.trim();

fs.writeFileSync("banner.txt", banner);
