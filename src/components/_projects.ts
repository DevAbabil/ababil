import data from "@/data";
import chalk from "chalk";
import wrapAnsi from "wrap-ansi";

interface Project {
  label: string;
  description: string;
  source: string;
}

interface ProjectCollection {
  [key: string]: Project;
}

const project: ProjectCollection = data.projects;

const terminalWidth = process.stdout.columns || 80;

const formatItem = (p: Project): string => {
  const bullet = chalk.green("•");
  const title = chalk.bold.white(p.label);
  const desc = wrapAnsi(chalk.gray(p.description), terminalWidth - 4, { hard: false });
  const source = chalk.blue.underline(p.source);

  return [`${bullet} ${title}`, `  → ${desc}`, `  Source: ${source}`].join("\n");
};

const projects = (): string => `
${chalk.greenBright.bold("🌐 Featured Projects:")}

${[
  project.cutefetch,
  project["emoji-picker"],
  project.sigla,
  project.siteviews,
  project["react-siteviews"],
  project["make-public"],
  project["gen-table"],
  project["mongoose-qb"],
]
  .map(formatItem)
  .join("\n\n")}
`;

export default projects;
