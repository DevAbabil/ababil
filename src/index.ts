import boxen from "boxen";
import * as component from "@/components";
import { log as print } from "console";

const content = boxen(
  `${component.header()}
${component.about()}
${component.skills()}
${component.projects()}
${component.footer()}`,
  {
    padding: 0.5,
    borderStyle: "round",
    borderColor: "green",
    width: 87,
    title: "DevAbabil CLI README",
  }
);

print(content);
