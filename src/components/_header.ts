import gradient from "gradient-string";
import data from "@/data";

const header = () =>
  gradient.pastel.multiline(`
                            =============================================
                                        👋 Hi, I'm ${data.about.name}
                                        💻 ${data.about.profession}
                            =============================================
`);

export default header;
