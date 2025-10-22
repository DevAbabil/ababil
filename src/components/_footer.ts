import data from "@/data";
import gradient from "gradient-string";

const footer = () =>
  gradient.instagram.multiline(`

----------------------------------------------------------------------------------------------------

                              💬 Thanks for visiting my CLI portfolio!
                                        Created : ${data.timestamp.createdAt}
                                        Updated : ${data.timestamp.updatedAt}
                                        Version : ababil@${data.version}
`);

export default footer;
