import gradient from "gradient-string";
import data from "@/data";
import boxen from "boxen";

const header = () =>
  gradient.pastel.multiline(`${boxen(
    `=============================================
👋 Hi, I'm ${data.about.name}
💻 ${data.about.profession}
=============================================`,
    { textAlignment: "center", width: 82, borderStyle: "singleDouble" }
  )}
`);

export default header;
