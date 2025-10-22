import data from "@/data";
import chalk from "chalk";

const project = data.projects;

const projects = () =>
  `
${chalk.greenBright.bold("🌐 Featured Projects:")}

  • ${chalk.bold(project.cutefetch.label)}        →  ${chalk.white(project.cutefetch.description)}
                        Source : ${chalk.blue.underline(project.cutefetch.source)}
 
  • ${chalk.bold(project["emoji-picker"].label)}     →  ${chalk.white(project["emoji-picker"].description)}
                        Source : ${chalk.blue.underline(project["emoji-picker"].source)}
 
  • ${chalk.bold(project.sigla.label)}            →  ${chalk.white(project.sigla.description)}
                        Source : ${chalk.blue.underline(project.sigla.source)}
 
  • ${chalk.bold(project.siteviews.label)}        →  ${chalk.white(project.siteviews.description)}
                        Source : ${chalk.blue.underline(project.siteviews.source)} 
 
  • ${chalk.bold(project["react-siteviews"].label)}  →  ${chalk.white(project["react-siteviews"].description)}
                        Source : ${chalk.blue.underline(project["react-siteviews"].source)}
 
  • ${chalk.bold(project["make-public"].label)}      →  ${chalk.white(project["make-public"].description)}
                        Source : ${chalk.blue.underline(project["make-public"].source)}
 
  • ${chalk.bold(project["gen-table"].label)}        →  ${chalk.white(project["gen-table"].description)}
                        Source : ${chalk.blue.underline(project["gen-table"].source)}
 
  • ${chalk.bold(project["mongoose-qb"].label)}      →  ${chalk.white(project["mongoose-qb"].description)}
                        Source : ${chalk.blue.underline(project["mongoose-qb"].source)}
`;

export default projects;
