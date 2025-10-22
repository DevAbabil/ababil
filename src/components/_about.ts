import data from "@/data";
import chalk from "chalk";

const about = () =>
  `${chalk.bold("👤 About Me")}

  ~/ ${chalk.bold("Name")}            ${chalk.bold(":")}  ${data.about.name}
  ~/ ${chalk.bold("Profession")}      ${chalk.bold(":")}  ${data.about.profession}

  ~/ ${chalk.bold("Location")}        ${chalk.bold(":")}  ${data.about.address}
  ~/ ${chalk.bold("WhatsApp")}        ${chalk.bold(":")}  ${chalk.cyan(data.contact.whatsapp)}
  ~/ ${chalk.bold("Website")}         ${chalk.bold(":")}  ${chalk.blue.underline(data.contact.website)}
  ~/ ${chalk.bold("GitHub")}          ${chalk.bold(":")}  ${chalk.blue.underline(data.contact.github)}
  ~/ ${chalk.bold("Facebook")}        ${chalk.bold(":")}  ${chalk.blue.underline(data.contact.facebook)}
  ~/ ${chalk.bold("X (Twitter)")}     ${chalk.bold(":")}  ${chalk.blue.underline(data.contact.x)}
  ~/ ${chalk.bold("Discord")}         ${chalk.bold(":")}  ${chalk.blue.underline(data.contact.discord)}
`;

export default about;
