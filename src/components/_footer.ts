import data from "@/data";
import boxen from "boxen";
import gradient from "gradient-string";

const footer = () =>
  gradient.instagram.multiline(
    boxen(
      `💬 Thanks for visiting my CLI portfolio!
Created : ${data.timestamp.createdAt}
Updated : ${data.timestamp.updatedAt}
Version : ababil@${data.version}`,
      { textAlignment: "center", width: 82 }
    )
  );

export default footer;
